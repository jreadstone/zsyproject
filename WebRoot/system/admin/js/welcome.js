/**
 * 欢迎页面
 */
Ext.onReady(function() {
			new Ext.ux.TipWindow({
						title : '<span class=commoncss>提示</span>',
						html : '您有<font color="red"><a href="#">[1]</a></font>条未读信息!',
						iconCls : 'commentsIcon'
					}).show(Ext.getBody());
			//待办事项显示开始
			// 定义自动当前页行号
			var rownum = new Ext.grid.RowNumberer({
						header : 'ID',
						width : 28
					});
			
			// 定义列模型
			var cm = new Ext.grid.ColumnModel([rownum,  {
						header : '事项名称', // 列标题
						dataIndex : 'sxmc',
						width : 150
						// 是否可排序
				}	, {
						header : '类别',
						dataIndex : 'lb',
						sortable : true,
						width : 50
						// 列宽
				}	, {
						header : '发送人',
						dataIndex : 'fsr',
						sortable : true,
						width : 50
					}, {
						header : '内容',
						dataIndex : 'nr',
						width : 300
					}, {
						header : '发送日期',
						dataIndex : 'fsrq'
					}, {
						header : '紧急程度',
						dataIndex : 'jjcd',
						width : 50
					}, {
						header : '是否已读',
						dataIndex : 'sfyd',
						width : 50
					}, {
						id : 'cz',
						header : '操作',
						dataIndex : 'edit',
						width : 35,
						renderer : iconColumnRender
					}]);
			
			/**
			 * 数据存储
			 */
			var store = new Ext.data.Store({
						// 获取数据的方式
						proxy : new Ext.data.HttpProxy({
									url :'/demo/gridDemo.do?reqCode=querydbsxDatas'
								}),
						// 数据读取器
						reader : new Ext.data.JsonReader({
									totalProperty : 'TOTALCOUNT', // 记录总数
									root : 'ROOT' // Json中的列表数据根节点
								}, [{
											name : 'sxmc' // Json中的属性Key值
										}, {
											name : 'lb'
										}, {
											name : 'fsr'
										}, {
											name : 'nr'
										}, {
											name : 'fsrq'
										}, {
											name : 'jjcd'
										}, {
											name : 'sfyd'
										}])
					});
			
			
			
			// 页面初始自动查询数据
			store.load({params : {start : 0}});
			
			// 表格实例
			var grid = new Ext.grid.GridPanel({
						// 表格面板标题,默认为粗体，我不喜欢粗体，这里设置样式将其格式为正常字体
						title : '<span class="commoncss">待办事项</span>',
						height : 240,
						//width : '100%',
						frame : false,
						autoScroll : true,
						region : 'north', // 和VIEWPORT布局模型对应，充当center区域布局
						store : store, // 数据存储
						stripeRows : true, // 斑马线
						cm : cm, // 列模型
						collapsible : true,
						collapseMode:'mini', 
						autoExpandColumn : 'cz',
						viewConfig : {
			// 不产横向生滚动条, 各列自动扩展自动压缩, 适用于列数比较少的情况
						 forceFit : true
						},
						loadMask : {
							msg : '正在加载表格数据,请稍等...'
						}
					});
			
			// 小画笔点击事件
			grid.on("cellclick", function(pGrid, rowIndex, columnIndex, e) {
						var store = pGrid.getStore();
						var record = store.getAt(rowIndex);
						var fieldName = pGrid.getColumnModel()
								.getDataIndex(columnIndex);
						// columnIndex为小画笔所在列的索引,缩阴从0开始
						// 这里要非常注意!!!!!
						if (fieldName == 'edit' && columnIndex == 8) {
							
							Ext.MessageBox.alert('提示', '打开待办事项！');
						}
					});
			
			
			// 生成一个图标列
			function iconColumnRender(value) {
				return "<a href='javascript:void(0);'><img src='" + webContext
						+ "/resource/image/ext/edit1.png'/></a>";
			}
			//待办事项显示结束
			//销售信息显示开始
				
			// 定义自动当前页行号
			var rownumxsxx = new Ext.grid.RowNumberer({
						header : 'ID',
						width : 28
					});
			
			// 定义列模型
			var cmxsxx = new Ext.grid.ColumnModel([rownumxsxx,  {
						header : '单位名称', // 列标题
						dataIndex : 'dwmc'
						// 是否可排序
				}	, {
						header : '本年零售计划量',
						dataIndex : 'bnlsjhl',
						sortable : true
						// 列宽
				}	, {
						header : '至四月零售量',
						dataIndex : 'zsylsl',
						sortable : true
					}, {
						header : '至本日应完成零售计划量',
						dataIndex : 'zbrywclsjhl'
					}, {
						header : '至本日实际零售量',
						dataIndex : 'zbrsjlsl'
					}, {
						header : '完成率',
						dataIndex : 'wcl',
						renderer: function (value, meta, record, rowIdx, colIdx, store) {
							if (value > 0.1) {
								 return "<span  style='color:green'>" + value + "</span>";
							}else {
								return value;
							}
						}
					}, {
						header : '超(欠)量',
						dataIndex : 'cql',
						renderer: function (value, meta, record, rowIdx, colIdx, store) {
							if (value < 0) {
								 return "<span  style='color:red'>" + value + "</span>";
							}else if(value >0){
								return "<span  style='color:green'>" + value + "</span>";
							}else {
								return value;
							}
						}

					}
					]);
			
			/**
			 * 数据存储
			 */
			var storexsxx = new Ext.data.Store({
						// 获取数据的方式
						proxy : new Ext.data.HttpProxy({
									url :'/demo/gridDemo.do?reqCode=queryxsxxDatas'
								}),
						// 数据读取器
						reader : new Ext.data.JsonReader({
									totalProperty : 'TOTALCOUNT', // 记录总数
									root : 'ROOT' // Json中的列表数据根节点
								}, [{
											name : 'dwmc' // Json中的属性Key值
										}, {
											name : 'bnlsjhl'
										}, {
											name : 'zsylsl'
										}, {
											name : 'zbrywclsjhl'
										}, {
											name : 'zbrsjlsl'
										}, {
											name : 'wcl'
										}, {
											name : 'cql'
										}])
					});
			
			
			
			// 页面初始自动查询数据
			storexsxx.load({params : {start : 0}});
			
			// 表格实例
			var gridxsxx = new Ext.grid.GridPanel({
						// 表格面板标题,默认为粗体，我不喜欢粗体，这里设置样式将其格式为正常字体
						title : '<span class="commoncss">销售进度</span>',
						height : 240,
						//width : '100%',
						frame : false,
						autoScroll : true,
						region : 'north', // 和VIEWPORT布局模型对应，充当center区域布局
						store : storexsxx, // 数据存储
						stripeRows : true, // 斑马线
						cm : cmxsxx, // 列模型
						collapsible : true,
						collapseMode:'mini', 
						autoExpandColumn : 'cz',
						viewConfig : {
			// 不产横向生滚动条, 各列自动扩展自动压缩, 适用于列数比较少的情况
						 forceFit : true
						},
						loadMask : {
							msg : '正在加载表格数据,请稍等...'
						}
					});
			
					var tabs = new Ext.TabPanel({
						region:'center',
						title : '<span class="commoncss">公司销售进度信息</span>',
						enableTabScroll : true,
						//autoWidth : true,
						height : 200
					});
				// 每一个Tab都可以看作为一个Panel
				tabs.add(gridxsxx);
				tabs.add({
							id : 'tab2',
							title : '<span class="commoncss">卡进度</span>',
							html : '卡信息'
						});
				tabs.add({
					id : 'tab3',
					title : '<span class="commoncss">充值进度</span>',
					html : '充值信息'
						});
				tabs.activate(0);
			//销售信息显示结束
				
				// 定义自动当前页行号
				var rownumbwl = new Ext.grid.RowNumberer({
							header : 'ID',
							width : 28
						});
				
				// 定义列模型
				var cmbwl = new Ext.grid.ColumnModel([rownumbwl,  {
							header : '备忘录类型', // 列标题
							dataIndex : 'bwlmc',
							width : 100
							// 是否可排序
					}	, {
							header : '备忘录内容',
							dataIndex : 'bwlnr',
							sortable : true,
							width : 150
							// 列宽
					}	, {
							header : '备忘时间',
							dataIndex : 'bwsj',
							sortable : true,
							width : 100
						}, {
							id : 'bwlcz',
							header : '操作',
							dataIndex : 'edit',
							width : 50,
							renderer : iconColumnRender1
						}]);
				

				/**
				 * 数据存储
				 */
				var storebwl = new Ext.data.Store({
							// 获取数据的方式
							proxy : new Ext.data.HttpProxy({
										url :'/demo/gridDemo.do?reqCode=querybwlDatas'
									}),
							// 数据读取器
							reader : new Ext.data.JsonReader({
										totalProperty : 'TOTALCOUNT', // 记录总数
										root : 'ROOT' // Json中的列表数据根节点
									}, [{
												name : 'bwlmc' // Json中的属性Key值
											}, {
												name : 'bwlnr'
											}, {
												name : 'bwsj'
											}])
						});
				// 页面初始自动查询数据
				storebwl.load({params : {start : 0}});
				var tbar = new Ext.Toolbar({
					items : [{
								text : '新增',
								iconCls : 'addIcon',
								id : 'id_tbi_add',
								handler : function() {
									addBwlItem();
								}
							}]
				});

				// 表格实例
				var gridbwl = new Ext.grid.GridPanel({
							header: false,
					 		headerAsText: false,
							height : 400,
							//width : '100%',
							frame : false,
							autoScroll : true,
							region : 'north', // 和VIEWPORT布局模型对应，充当center区域布局
							store : storebwl, // 数据存储
							stripeRows : true, // 斑马线
							tbar : tbar, // 表格工具栏
							cm : cmbwl, // 列模型
							collapsible : true,
							collapseMode:'mini', 
							autoExpandColumn : 'bwlcz',
							viewConfig : {
				// 不产横向生滚动条, 各列自动扩展自动压缩, 适用于列数比较少的情况
							 forceFit : true
							},
							loadMask : {
								msg : '正在加载表格数据,请稍等...'
							}
						});
				// 小画笔点击事件
				gridbwl.on("cellclick", function(pGrid, rowIndex, columnIndex, e) {
							var store = pGrid.getStore();
							var record = store.getAt(rowIndex);
							var fieldName = pGrid.getColumnModel()
									.getDataIndex(columnIndex);
							// columnIndex为小画笔所在列的索引,缩阴从0开始
							// 这里要非常注意!!!!!
							if (fieldName == 'edit' && columnIndex == 4) {
								
								Ext.MessageBox.alert('提示', '打开备忘录！');
							}
						});
				// 生成一个图标列
				function iconColumnRender1(value) {
					return "<a href='javascript:void(0);'>打开</a>";
				}
			var panel1 = new Ext.Panel({
						region : 'east',
						title : '备忘录', // 标题
						iconCls : 'book_previousIcon', // 图标
						collapsible : true, // 是否允许折叠
						//tbar : tb, // 工具栏
						width : 400,
						frame : false,
						height : 200,
						enableTabScroll : true,
						buttonAlign : 'right'
					})
			
			panel1.add(gridbwl);
			// 布局模型
			var viewport = new Ext.Viewport({
						layout : 'border',
						items : [grid, panel1, tabs]
					});
		function addBwlItem(){
			Ext.MessageBox.alert('提示', '新增备忘录');
		}
		});
