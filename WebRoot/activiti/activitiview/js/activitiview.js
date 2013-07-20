/**
 * 模型工作区
 * 
 * @author wxy
 */
Ext.onReady(function() {
			// 复选框
			var sm = new Ext.grid.CheckboxSelectionModel();

			// 定义自动当前页行号
			var rownum = new Ext.grid.RowNumberer({
						header : 'NO',
						width : 28
					});

			// 定义列模型
			var cm = new Ext.grid.ColumnModel([rownum, sm, {
						header : '操作', // 列标题
						dataIndex : 'edit',
						width : 35,
						renderer : iconColumnRender
					}, {
						header : '模型ID', // 列标题
						dataIndex : 'id_', // 数据索引:和Store模型对应
						sortable : true,
						width : 50// 是否可排序
				}	, {
						header : '模型KEY',
						dataIndex : 'key_',
				}	, {
						header : '模型名称',
						dataIndex : 'name_',
						width : 200
					}, {
						header : '创建时间',
						dataIndex : 'create_time_',
						sortable : true
					}, {
						header : '模型版本',
						dataIndex : 'version_'
					}]);

			/**
			 * 数据存储
			 */
			var store = new Ext.data.Store({
						// 获取数据的方式
						proxy : new Ext.data.HttpProxy({
									url :'/activiti/activitiview.do?reqCode=qryprocessDefList'
								}),
						// 数据读取器
						reader : new Ext.data.JsonReader({
									totalProperty : 'TOTALCOUNT', // 记录总数
									root : 'ROOT' // Json中的列表数据根节点
								}, [{
											name : 'id_' // Json中的属性Key值
										}, {
											name : 'key_'
										}, {
											name : 'name_'
										}, {
											name : 'create_time_'
										}, {
											name : 'version_'
										}])
					});

			// 翻页排序时带上查询条件
			store.on('beforeload', function() {
						this.baseParams = {
								mxname : Ext.getCmp('mxname').getValue()
						};
					});
			// 每页显示条数下拉选择框
			var pagesize_combo = new Ext.form.ComboBox({
						name : 'pagesize',
						triggerAction : 'all',
						mode : 'local',
						store : new Ext.data.ArrayStore({
									fields : ['value', 'text'],
									data : [[10, '10条/页'], [20, '20条/页'],
											[50, '50条/页'], [100, '100条/页'],
											[250, '250条/页'], [500, '500条/页']]
								}),
						valueField : 'value',
						displayField : 'text',
						value : '20',
						editable : false,
						width : 85
					});
			var number = parseInt(pagesize_combo.getValue());
			// 改变每页显示条数reload数据
			pagesize_combo.on("select", function(comboBox) {
						bbar.pageSize = parseInt(comboBox.getValue());
						number = parseInt(comboBox.getValue());
						store.reload({
									params : {
										start : 0,
										limit : bbar.pageSize
									}
								});
					});

			// 分页工具栏
			var bbar = new Ext.PagingToolbar({
						pageSize : number,
						store : store,
						displayInfo : true,
						displayMsg : '显示{0}条到{1}条,共{2}条',
						plugins : new Ext.ux.ProgressBarPager(), // 分页进度条
						emptyMsg : "没有符合条件的记录",
						items : ['-', '&nbsp;&nbsp;', pagesize_combo]
					});

			// 表格工具栏
			var tbar = new Ext.Toolbar({
						items : [{
									xtype : 'textfield',
									id : 'mxname',
									name : 'mxname',
									emptyText : '请输入模型名称',
									width : 150,
									enableKeyEvents : true,
									// 响应回车键
									listeners : {
										specialkey : function(field, e) {
											if (e.getKey() == Ext.EventObject.ENTER) {
												queryCatalogItem();
											}
										}
									}
								}, {
									text : '查询',
									iconCls : 'page_findIcon',
									handler : function() {
										queryCatalogItem();
									}
								}, {
									text : '刷新',
									iconCls : 'page_refreshIcon',
									handler : function() {
										store.reload();
									}
								}, '-', {
									text : '获取选择行',
									handler : function() {
										getCheckboxValues();
									}
								}]
					});
			
			function open(param) {
			    var myPanel = new Ext.Panel({
			        layout : 'fit',
			        html : '<iframe src="/service/editor?id='+param+'" width=100% height=100%></iframe>',
			        frame : true
			        })
			        var win = new Ext.Window({
			                    title : '模型定义',
			                    width : 1000,
			                    height : 500,
			                    resizable : false,
			                    closable : true,
			                    draggable : true,
			                    resizable : false,
			                    layout : 'fit',
			                    modal : false,
			                    plain : true, // 表示为渲染window body的背景为透明的背景
			                    bodyStyle : 'padding:5px;',
			                    items : [myPanel ],
			                    buttonAlign : 'center',
			                    buttons : [{
			                            text : '关闭',
			                            type : 'button',
			                            handler : function() {
			                                win .close();
			                                }
			                            }]
			                });
			                win.show();
			            }

			// 表格实例
			var grid = new Ext.grid.GridPanel({
						// 表格面板标题,默认为粗体，我不喜欢粗体，这里设置样式将其格式为正常字体
						title : '<span class="commoncss">流程定义管理</span>',
						height : 500,
						frame : true,
						autoScroll : true,
						region : 'center', // 和VIEWPORT布局模型对应，充当center区域布局
						store : store, // 数据存储
						stripeRows : true, // 斑马线
						cm : cm, // 列模型
						sm : sm, // 复选框
						tbar : tbar, // 表格工具栏
						bbar : bbar,// 分页工具栏
						viewConfig : {
			// 不产横向生滚动条, 各列自动扩展自动压缩, 适用于列数比较少的情况
						// forceFit : true
						},
						loadMask : {
							msg : '正在加载表格数据,请稍等...'
						}
					});

			// 是否默认选中第一行数据
			bbar.on("change", function() {
						// grid.getSelectionModel().selectFirstRow();

					});

			// 页面初始自动查询数据
			// store.load({params : {start : 0,limit : bbar.pageSize}});

			// 小画笔点击事件
			grid.on("cellclick", function(pGrid, rowIndex, columnIndex, e) {
						var store = pGrid.getStore();
						var record = store.getAt(rowIndex);
						var fieldName = pGrid.getColumnModel()
								.getDataIndex(columnIndex);
						// columnIndex为小画笔所在列的索引,缩阴从0开始
						// 这里要非常注意!!!!!
						if (fieldName == 'edit' && columnIndex == 2) {
							var id = record.get("id_");
							open(id);
							// 到此你就可以继续做其他任何事情了
							//Ext.MessageBox.alert('提示', mxname);
							
						}
					});

			// 监听单元格双击事件
			grid.on("celldblclick", function(pGrid, rowIndex, columnIndex, e) {
				var record = pGrid.getStore().getAt(rowIndex);
				var fieldName = pGrid.getColumnModel()
						.getDataIndex(columnIndex);
				var cellData = record.get(fieldName);
					// Ext.MessageBox.alert('提示', cellData);
				});

			// 监听行双击事件
			grid.on('rowdblclick', function(pGrid, rowIndex, event) {
						// 获取行数据集
						var record = pGrid.getStore().getAt(rowIndex);
						// 获取单元格数据集
						var data = record.get("xmmc");
						Ext.MessageBox.alert('提示', "双击行的索引为:" + rowIndex);
					});

			// 给表格绑定右键菜单
			grid.on("rowcontextmenu", function(grid, rowIndex, e) {
						e.preventDefault(); // 拦截默认右键事件
						grid.getSelectionModel().selectRow(rowIndex); // 选中当前行
						contextmenu.showAt(e.getXY());
					});

			// 布局模型
			var viewport = new Ext.Viewport({
						layout : 'border',
						items : [grid]
					});

			// 查询表格数据
			function queryCatalogItem() {
				store.load({
							params : {
								start : 0,
								limit : bbar.pageSize,
								name_ : Ext.getCmp('mxname').getValue()
							}
						});
			}

			// 获取选择行
			function getCheckboxValues() {
				// 返回一个行集合JS数组
				var rows = grid.getSelectionModel().getSelections();
				if (Ext.isEmpty(rows)) {
					Ext.MessageBox.alert('提示', '您没有选中任何数据!');
					return;
				}
				// 将JS数组中的行级主键，生成以,分隔的字符串
				var strChecked = jsArray2JsString(rows, 'id_');
				Ext.MessageBox.alert('提示', strChecked);
				// 获得选中数据后则可以传入后台继续处理
			}

			// 生成一个图标列
			function iconColumnRender(value) {
				return "<a href='javascript:void(0);'><img src='" + webContext
						+ "/resource/image/ext/edit1.png'/></a>";;
			}

		});