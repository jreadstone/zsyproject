Ext.onReady(function() {
	var addRoot = new Ext.tree.AsyncTreeNode({
		text : '中国石油四川销售成品油分公司',
		expanded : true,
		id : '001'
	});
	var addDeptTree = new Ext.tree.TreePanel({
		loader : new Ext.tree.TreeLoader({
					baseAttrs : {},
					dataUrl : 'gszzglAct.do?reqCode=departmentTreeInit'
				}),
		root : addRoot,
		autoScroll : true,
		animate : false,
		useArrows : false,
		border : false
	});
// 监听下拉树的节点单击事件
	addDeptTree.on('click', function(node) {
		comboxWithTree.setValue(node.text);
		comboxWithTree.collapse();
	});
	var comboxWithTree = new Ext.form.ComboBox({
		store : new Ext.data.SimpleStore({
					fields : [],
					data : [[]]
				}),
		editable : false,
		value :' ',
		emptyText :'请选择...',
		fieldLabel :'证照办理部门',
		anchor : '100%',
		mode : 'local',
		triggerAction : 'all',
		labelStyle : 'color:blue;',
		maxHeight : 390,
		// 下拉框的显示模板,addDeptTreeDiv作为显示下拉树的容器
		tpl : "<tpl for='.'><div style='height:390px'><div id='addDeptTreeDiv'></div></div></tpl>",
		allowBlank : false,
		onSelect : Ext.emptyFn
	});

// 监听下拉框的下拉展开事件
comboxWithTree.on('expand', function() {
		// 将UI树挂到treeDiv容器
		addDeptTree.render('addDeptTreeDiv');
		// addDeptTree.root.expand(); //只是第一次下拉会加载数据
		addDeptTree.root.reload(); // 每次下拉都会加载数据

	});
var addRoot1 = new Ext.tree.AsyncTreeNode({
	text : '中国石油四川销售成品油分公司',
	expanded : true,
	id : '001'
});
var addDeptTree1 = new Ext.tree.TreePanel({
	loader : new Ext.tree.TreeLoader({
				baseAttrs : {},
				dataUrl : 'gszzglAct.do?reqCode=departmentTreeInit'
			}),
	root : addRoot1,
	autoScroll : true,
	animate : false,
	useArrows : false,
	border : false
});
//监听下拉树的节点单击事件
addDeptTree1.on('click', function(node) {
	comboxWithTree1.setValue(node.text);
	comboxWithTree1.collapse();
});
var comboxWithTree1 = new Ext.form.ComboBox({
	id : 'parentdeptname1',
	store : new Ext.data.SimpleStore({
				fields : [],
				data : [[]]
			}),
	editable : false,
	value :' ',
	emptyText :'请选择...',
	fieldLabel :'证照管理部门',
	anchor : '100%',
	mode : 'local',
	triggerAction : 'all',
	labelStyle : 'color:blue;',
	maxHeight : 200,
	// 下拉框的显示模板,addDeptTreeDiv作为显示下拉树的容器
	tpl : "<tpl for='.'><div style='height:390px'><div id='addDeptTreeDiv1'></div></div></tpl>",
	allowBlank : false,
	onSelect : Ext.emptyFn
});

//监听下拉框的下拉展开事件
comboxWithTree1.on('expand', function() {
	// 将UI树挂到treeDiv容器
	addDeptTree1.render('addDeptTreeDiv1');
	// addDeptTree.root.expand(); //只是第一次下拉会加载数据
	addDeptTree1.root.reload(); // 每次下拉都会加载数据

});
var addRoot2 = new Ext.tree.AsyncTreeNode({
	text : '中国石油四川销售成品油分公司',
	expanded : true,
	id : '001'
});
var addDeptTree2 = new Ext.tree.TreePanel({
	loader : new Ext.tree.TreeLoader({
				baseAttrs : {},
				dataUrl : 'gszzglAct.do?reqCode=departmentTreeInit'
			}),
	root : addRoot2,
	autoScroll : true,
	animate : false,
	useArrows : false,
	border : false
});
//监听下拉树的节点单击事件
addDeptTree2.on('click', function(node) {
	comboxWithTree2.setValue(node.text);
	comboxWithTree2.collapse();
});
var comboxWithTree2 = new Ext.form.ComboBox({
	store : new Ext.data.SimpleStore({
				fields : [],
				data : [[]]
			}),
	editable : false,
	value :' ',
	emptyText :'请选择...',
	fieldLabel :'证照办理部门',
	anchor : '100%',
	mode : 'local',
	triggerAction : 'all',
	labelStyle : 'color:blue;',
	maxHeight : 390,
	// 下拉框的显示模板,addDeptTreeDiv作为显示下拉树的容器
	tpl : "<tpl for='.'><div style='height:390px'><div id='addDeptTreeDiv2'></div></div></tpl>",
	allowBlank : false,
	onSelect : Ext.emptyFn
});

//监听下拉框的下拉展开事件
comboxWithTree2.on('expand', function() {
	// 将UI树挂到treeDiv容器
	addDeptTree2.render('addDeptTreeDiv2');
	// addDeptTree.root.expand(); //只是第一次下拉会加载数据
	addDeptTree2.root.reload(); // 每次下拉都会加载数据

});
var addRoot3 = new Ext.tree.AsyncTreeNode({
	text : '中国石油四川销售成品油分公司',
	expanded : true,
	id : '001'
});
var addDeptTree3 = new Ext.tree.TreePanel({
	loader : new Ext.tree.TreeLoader({
				baseAttrs : {},
				dataUrl : 'gszzglAct.do?reqCode=departmentTreeInit'
			}),
	root : addRoot3,
	autoScroll : true,
	animate : false,
	useArrows : false,
	border : false
});
//监听下拉树的节点单击事件
addDeptTree3.on('click', function(node) {
	comboxWithTree3.setValue(node.text);
	comboxWithTree3.collapse();
});
var comboxWithTree3 = new Ext.form.ComboBox({
	id : 'parentdeptname3',
	store : new Ext.data.SimpleStore({
				fields : [],
				data : [[]]
			}),
	editable : false,
	value :' ',
	emptyText :'请选择...',
	fieldLabel :'证照管理部门',
	anchor : '100%',
	mode : 'local',
	triggerAction : 'all',
	labelStyle : 'color:blue;',
	maxHeight : 390,
	// 下拉框的显示模板,addDeptTreeDiv作为显示下拉树的容器
	tpl : "<tpl for='.'><div style='height:390px'><div id='addDeptTreeDiv3'></div></div></tpl>",
	allowBlank : false,
	onSelect : Ext.emptyFn
});

//监听下拉框的下拉展开事件
comboxWithTree3.on('expand', function() {
	// 将UI树挂到treeDiv容器
	addDeptTree3.render('addDeptTreeDiv3');
	// addDeptTree.root.expand(); //只是第一次下拉会加载数据
	addDeptTree3.root.reload(); // 每次下拉都会加载数据

});
var addRoot4 = new Ext.tree.AsyncTreeNode({
	text : '中国石油四川销售成品油分公司',
	expanded : true,
	id : '001'
});
var addDeptTree4 = new Ext.tree.TreePanel({
	loader : new Ext.tree.TreeLoader({
				baseAttrs : {},
				dataUrl : 'gszzglAct.do?reqCode=departmentTreeInit'
			}),
	root : addRoot4,
	autoScroll : true,
	animate : false,
	useArrows : false,
	border : false
});
//监听下拉树的节点单击事件
addDeptTree4.on('click', function(node) {
	comboxWithTree4.setValue(node.text);
	comboxWithTree4.collapse();
});
var comboxWithTree4 = new Ext.form.ComboBox({
	id : 'parentdeptname',
	store : new Ext.data.SimpleStore({
				fields : [],
				data : [[]]
			}),
	editable : false,
	value :' ',
	emptyText :'请选择...',
	fieldLabel :'证照管理部门',
	anchor : '100%',
	mode : 'local',
	triggerAction : 'all',
	maxHeight : 390,
	// 下拉框的显示模板,addDeptTreeDiv作为显示下拉树的容器
	tpl : "<tpl for='.'><div style='height:390px'><div id='addDeptTreeDiv4'></div></div></tpl>",
	allowBlank : false,
	onSelect : Ext.emptyFn
});

//监听下拉框的下拉展开事件
comboxWithTree4.on('expand', function() {
	// 将UI树挂到treeDiv容器
	addDeptTree4.render('addDeptTreeDiv4');
	// addDeptTree.root.expand(); //只是第一次下拉会加载数据
	addDeptTree4.root.reload(); // 每次下拉都会加载数据

});
	var qForm = new Ext.form.FormPanel({
				region : 'north',
				title : '<span class="commoncss">查询条件<span>',
				collapsible : true,
				border : true,
				labelWidth : 50, // 标签宽度
				// frame : true, //是否渲染表单面板背景色
				labelAlign : 'right', // 标签对齐方式
				bodyStyle : 'padding:3 5 0', // 表单元素和表单面板的边距
				buttonAlign : 'center',
				height : 150,
				items : [{
					layout : 'column',
					border : false,
					items : [{
								columnWidth : .28,
								layout : 'form',
								labelWidth : 120, // 标签宽度
								defaultType : 'textfield',
								border : false,
								items : [{
											fieldLabel : '证件证号',
											name : 'zjzh',
											xtype : 'textfield', // 设置为数字输入框类型
											anchor : '100%'
										}]
							}, {
								columnWidth : .28,
								layout : 'form',
								labelWidth : 120, // 标签宽度
								defaultType : 'textfield',
								border : false,
								items : [{
											fieldLabel : '经营单位名称', // 标签
											id : 'jydwmc',
											name : 'jydwmc', // name:后台根据此name属性取值
											allowBlank : true, // 是否允许为空
											maxLength : 50, // 可输入的最大文本长度,不区分中英文字符
											anchor : '100%' // 宽度百分比
										}]
							}, {
								columnWidth : .28,
								layout : 'form',
								labelWidth :120, // 标签宽度
								defaultType : 'textfield',
								border : false,
								items : [{
									fieldLabel : '负责人', // 标签
									id : 'jydwfzr',
									name : 'jydwmc', // name:后台根据此name属性取值
									allowBlank : true, // 是否允许为空
									maxLength : 50, // 可输入的最大文本长度,不区分中英文字符
									anchor : '100%' // 宽度百分比
								}]
							}]
				}, {
					layout : 'column',
					border : false,
					items : [{
						columnWidth : .28,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [new Ext.form.ComboBox({
							hiddenName : 'dwlx',
							fieldLabel : '企业类型',
							emptyText : '请选择',
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
										fields : ['name',
												'code'],
										data : [['股份有限公司', '01']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							// value:'0002',
							resizable : true,
							allowBlank : false,
							anchor : '100%'
						})]
					}, {
						columnWidth : .28,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '营业场所',
									name : 'yycs',
									maxLength : 50,
									xtype : 'textfield',
									anchor : '100%'
								}]
					},{
						columnWidth : .28,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '经营范围',
									name : 'jyfw',
									maxLength : 50,
									xtype : 'textfield',
									anchor : '100%'
								}]
					}]
				},{
					layout : 'column',
					border : false,
					items : [{
						columnWidth : .28,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [ new Ext.form.ComboBox({
							hiddenName : 'zzlx',
							fieldLabel : '证照类型',
							triggerAction : 'all',
							emptyText : '请选择',
							store : new Ext.data.SimpleStore(
									{
										fields : [
												'name',
												'code'],
										data : [
												['工商营业执照','01'],['组织机构代码证','02'],['成品油零售经营批准证书','03'],
												['成品油批发经营批准证书','04'],['危险化学品经营许可证','05'],['烟草专卖证','06'],
												['食品流通许可证','07'],['税务登记证','08']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							resizable : true,
							allowBlank : false,
							anchor : '100%'
						})]
					}, {
						columnWidth : .28,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [comboxWithTree4]
					},{
						columnWidth : .28,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [ new Ext.form.ComboBox({
								hiddenName : 'jyfs',
								fieldLabel : '经营方式',
								triggerAction : 'all',
								emptyText : '请选择',
								store : new Ext.data.SimpleStore(
										{
											fields : [
													'name',
													'code'],
											data : [
													['批发','01']]
										}),
								displayField : 'name',
								valueField : 'code',
								mode : 'local',
								forceSelection : false, // 选中内容必须为下拉列表的子项
								editable : false,
								typeAhead : true,
								anchor : '100%'
							})]
					}]
				}],
				buttons : [{
							text : '查询',
							iconCls : 'previewIcon',
							handler : function() {
								Ext.getCmp('tbi_edit').disable();
								Ext.getCmp('tbi_del').disable();
								queryZjDatas();
							}
						}, {
							text : '打印',
							id : 'id_btn_print',
							iconCls : 'printerIcon',
							handler : function() {
								printCatalog1();
							}
						}, {
							text : '重置',
							iconCls : 'tbar_synchronizeIcon',
							handler : function() {
								qForm.getForm().reset();
							}
						}]
			});

	// 定义自动当前页行号
	var rownum = new Ext.grid.RowNumberer({
				header : 'NO',
				width : 28
			});

	// 定义列模型
	var cm = new Ext.grid.ColumnModel([rownum, {
		header : '证件证号', // 列标题
		dataIndex : 'zjzh', // 数据索引:和Store模型对应
		sortable : true,
		width : 170
			// 是否可排序
		}, {
		header : '经营单位名称',
		dataIndex : 'jydwmc',
		sortable : true,
		width : 300
			// 列宽
		}, {
		header : '负责人',
		dataIndex : 'fzr',
		sortable : true
	}, {
		header : '单位类型',
		dataIndex : 'dwlx'
	}, {
		header : '营业场所',
		dataIndex : 'yycs',
		width : 200
	}, {
		header : '经营范围',
		dataIndex : 'yyfw'
	}, {
		header : '执照类型',
		dataIndex : 'zzlx'
	},{
		header:'发证机关',
		dataIndex:'fzjg'
	}]);

	/**
	 * 数据存储
	 */
	var store = new Ext.data.Store({
				// 获取数据的方式
				proxy : new Ext.data.HttpProxy({
							url : 'gszzglAct.do?reqCode=queryzjDatas'
						}),
				reader : new Ext.data.JsonReader({
							totalProperty : 'TOTALCOUNT', // 记录总数
							root : 'ROOT' // Json中的列表数据根节点
						}, [{
									name : 'zjzh' // Json中的属性Key值
								}, {
									name : 'jydwmc'
								}, {
									name : 'fzr'
								}, {
									name : 'dwlx'
								}, {
									name : 'yycs'
								}, {
									name : 'yyfw'
								},{
									name:'zzlx'
								},{
									name:'fzjg'
								}])
			});

	/**
	 * 翻页排序时候的参数传递
	 */
	// 翻页排序时带上查询条件
	store.on('beforeload', function() {
				this.baseParams = qForm.getForm().getValues();
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
							text : '新增',
							iconCls : 'addIcon',
							id : 'id_tbi_add',
							handler : function() {
								addCatalogItem();
							}
						}, {
							text : '修改',
							id : 'tbi_edit',
							iconCls : 'edit1Icon',
							disabled : true,
							handler : function() {
								updateCatalogItem();
							}
						}, {
							text : '删除',
							id : 'tbi_del',
							iconCls : 'deleteIcon',
							disabled : true,
							handler : function() {
								deleteCatalogItem();
							}
						}, '->', {
							text : '刷新',
							iconCls : 'arrow_refreshIcon',
							handler : function() {
								store.reload();
							}
						}]
			});

	// 表格实例
	var grid = new Ext.grid.GridPanel({
				// 表格面板标题,默认为粗体，我不喜欢粗体，这里设置样式将其格式为正常字体
				title : '<span class="commoncss">医院收费项目</span>',
				height : 500,
				id : 'id_grid_sfxm',
				autoScroll : true,
				frame : true,
				region : 'center', // 和VIEWPORT布局模型对应，充当center区域布局
				store : store, // 数据存储
				stripeRows : true, // 斑马线
				cm : cm, // 列模型
				tbar : tbar, // 表格工具栏
				bbar : bbar,// 分页工具栏
				viewConfig : {
	// 不产横向生滚动条, 各列自动扩展自动压缩, 适用于列数比较少的情况
				 forceFit : true
				},
				loadMask : {
					msg : '正在加载表格数据,请稍等...'
				}
			});

	// 监听行选中事件
	grid.on('rowclick', function(pGrid, rowIndex, event) {
				Ext.getCmp('tbi_edit').enable();
				Ext.getCmp('tbi_del').enable();
			});

	grid.on('rowdblclick', function(grid, rowIndex, event) {
				updateCatalogItem();
			});

	var myForm = new Ext.form.FormPanel({
		collapsible : false,
		border : true,
		labelWidth : 60, // 标签宽度
		// frame : true, //是否渲染表单面板背景色
		labelAlign : 'right', // 标签对齐方式
		bodyStyle : 'padding:5 5 0', // 表单元素和表单面板的边距
		buttonAlign : 'center',
		height : 250,
		items : [{
			layout : 'column',
			border : false,
			items : [{
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '证件证号',
									name : 'zjzh',
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								}, {
									fieldLabel : '负责人',
									name : 'fzr',
									maxLength : 20,
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								}, {
									fieldLabel : '营业场所',
									name : 'yycs',
									decimalPrecision : 2,// 小数精度
									allowBlank : false,
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								}, {
									fieldLabel : '有效期止',
									name : 'yxqz',
									decimalPrecision : 2,// 小数精度
									allowBlank : false,
									xtype : 'datefield',
									format:'Y-m-d',
									labelStyle : 'color:blue;',
									anchor : '100%'
								}, {
									fieldLabel : '证照管理人员',
									name : 'zjglry',
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									anchor : '100%'
								}, {
									fieldLabel : '联系电话',
									name : 'lxdh',
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									anchor : '100%'
								}]
					}, {
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [ new Ext.form.ComboBox({
							hiddenName : 'zzlx',
							fieldLabel : '证照类型',
							triggerAction : 'all',
							emptyText : '请选择',
							store : new Ext.data.SimpleStore(
									{
										fields : [
												'name',
												'code'],
										data : [
												['工商营业执照','01'],['组织机构代码证','02'],['成品油零售经营批准证书','03'],
												['成品油批发经营批准证书','04'],['危险化学品经营许可证','05'],['烟草专卖证','06'],
												['食品流通许可证','07'],['税务登记证','08']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							resizable : true,
							allowBlank : false,
							labelStyle : 'color:blue;',
							anchor : '100%'
						}),{
									fieldLabel : '机构名称', // 标签
									name : 'jydwmc', // name:后台根据此name属性取值
									allowBlank : false,
									labelStyle : 'color:blue;',
									anchor : '100%'// 宽度百分比
								}, {
									fieldLabel : '经营范围',
									name : 'yyfw',
									xtype : 'textfield', // 设置为文字输入框类型
									labelStyle : 'color:blue;',
									anchor : '100%'
								},{
									fieldLabel : '发证机关',
									name : 'fzjg',
									xtype : 'textfield', // 设置为文字输入框类型
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								},comboxWithTree2]
					}, {
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [new Ext.form.ComboBox({
									hiddenName : 'dwlx',
									fieldLabel : '企业类型',
									emptyText : '请选择',
									triggerAction : 'all',
									store : new Ext.data.SimpleStore({
												fields : ['name',
														'code'],
												data : [['股份有限公司', '01']]
											}),
									displayField : 'name',
									valueField : 'code',
									mode : 'local',
									forceSelection : false, // 选中内容必须为下拉列表的子项
									editable : false,
									typeAhead : true,
									// value:'0002',
									resizable : true,
									allowBlank : false,
									labelStyle : 'color:blue;',
									anchor : '100%'
								}), new Ext.form.ComboBox({
									hiddenName : 'jyfs',
									fieldLabel : '经营方式',
									emptyText : '请选择',
									triggerAction : 'all',
									store : new Ext.data.SimpleStore({
												fields : ['name',
														'code'],
												data : [['批发', '01']]
											}),
									displayField : 'name',
									valueField : 'code',
									mode : 'local',
									forceSelection : false, // 选中内容必须为下拉列表的子项
									editable : false,
									typeAhead : true,
									// value:'0002',
									resizable : true,
									labelStyle : 'color:blue;',
									anchor : '100%'
								}),{
									fieldLabel : '有效期起',
									name : 'yxqq',
									xtype : 'datefield', // 设置为文字输入框类型
									format:'Y-m-d',
									maxLength : 25,
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								},comboxWithTree3,{
									fieldLabel : '证照办理人员',
									name : 'zjblry',
									xtype : 'textfield', // 设置为文字输入框类型
									maxLength : 25,
									labelStyle : 'color:blue;',
									anchor : '100%'
								}]
					}]
		}, {
			layout : 'column',
			border : false,
			items : [{
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [new Ext.form.ComboBox({
							hiddenName : 'ns',
							fieldLabel : '年审',
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
										fields : ['name',
												'code'],
										data : [['是', '1'],
												['否', '0']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							// value:'0002',
							resizable : true,
							allowBlank : false,
							labelStyle : 'color:blue;',
							anchor : '100%'
						})]
					}, {
						columnWidth : .22,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '年审日期',
									name : 'nsrq',
									xtype:'datefield',
									format:'m-d',
									maxLength : 50,
									labelStyle : 'color:blue;',
									anchor : '99%'
								}]
					}]
		}, {
			layout : 'column',
			border : false,
			items : [{
						columnWidth : .33,
						layout : 'form',
						labelWidth :120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [new Ext.form.ComboBox({
							hiddenName : 'hz',
							fieldLabel : '换证',
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
										fields : ['name',
												'code'],
										data : [['是', '1'],
												['否', '0']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							// value:'0002',
							resizable : true,
							allowBlank : false,
							labelStyle : 'color:blue;',
							anchor : '100%'
						})]
					}, {
						columnWidth : .30,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '换证日期',
									name : 'hzrq',
									xtype:'datefield',
									format:'Y-m-d',
									maxLength : 50,
									labelStyle : 'color:blue;',
									anchor : '99%'
								}]
					}]
		}]
	});

	var firstWindow = new Ext.Window({
				title : '<span class="commoncss">录入证照信息<span>', // 窗口标题
				layout : 'fit', // 设置窗口布局模式
				width : 1000, // 窗口宽度
				height : 350, // 窗口高度
				closable : false, // 是否可关闭
				collapsible : true, // 是否可收缩
				maximizable : true, // 设置是否可以最大化
				border : false, // 边框线设置
				constrain : true, // 设置窗口是否可以溢出父容器
				animateTarget : Ext.getBody(),
				pageY : 10, // 页面定位Y坐标
				pageX : document.body.clientWidth / 2 - 600 / 2-200, // 页面定位X坐标
				items : [myForm], // 嵌入的表单面板
				buttons : [{
							text : '保存',
							iconCls : 'acceptIcon',
							handler : function() {
								submitTheForm();
							}
						}, {
							text : '重置',
							iconCls : 'tbar_synchronizeIcon',
							handler : function() {
								myForm.getForm().reset();
							}
						}, {
							text : '关闭',
							iconCls : 'deleteIcon',
							handler : function() {
								firstWindow.hide();
							}
						}]
			});

	var updateForm = new Ext.form.FormPanel({
		collapsible : false,
		border : true,
		labelWidth : 60, // 标签宽度
		// frame : true, //是否渲染表单面板背景色
		labelAlign : 'right', // 标签对齐方式
		bodyStyle : 'padding:5 5 0', // 表单元素和表单面板的边距
		buttonAlign : 'center',
		height : 250,
		items : [{
			layout : 'column',
			border : false,
			items : [{
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '证件证号',
									name : 'zjzh',
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								}, {
									fieldLabel : '负责人',
									name : 'fzr',
									maxLength : 20,
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								}, {
									fieldLabel : '营业场所',
									name : 'yycs',
									decimalPrecision : 2,// 小数精度
									allowBlank : false,
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								}, {
									fieldLabel : '有效期止',
									name : 'yxqz',
									decimalPrecision : 2,// 小数精度
									allowBlank : false,
									xtype : 'datefield',
									format:'Y-m-d',
									labelStyle : 'color:blue;',
									anchor : '100%'
								}, {
									fieldLabel : '证照管理人员',
									name : 'zjglry',
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									anchor : '100%'
								}, {
									fieldLabel : '联系电话',
									name : 'lxdh',
									xtype : 'textfield',
									labelStyle : 'color:blue;',
									anchor : '100%'
								}]
					}, {
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [ new Ext.form.ComboBox({
							hiddenName : 'zzlx',
							fieldLabel : '证照类型',
							triggerAction : 'all',
							emptyText : '请选择',
							store : new Ext.data.SimpleStore(
									{
										fields : [
												'name',
												'code'],
										data : [
												['工商营业执照','01'],['组织机构代码证','02'],['成品油零售经营批准证书','03'],
												['成品油批发经营批准证书','04'],['危险化学品经营许可证','05'],['烟草专卖证','06'],
												['食品流通许可证','07'],['税务登记证','08']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							resizable : true,
							allowBlank : false,
							labelStyle : 'color:blue;',
							anchor : '100%'
						}),{
									fieldLabel : '机构名称', // 标签
									name : 'jydwmc', // name:后台根据此name属性取值
									allowBlank : false,
									labelStyle : 'color:blue;',
									anchor : '100%'// 宽度百分比
								}, {
									fieldLabel : '经营范围',
									name : 'yyfw',
									xtype : 'textfield', // 设置为文字输入框类型
									labelStyle : 'color:blue;',
									anchor : '100%'
								},{
									fieldLabel : '发证机关',
									name : 'fzjg',
									xtype : 'textfield', // 设置为文字输入框类型
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								},comboxWithTree]
					}, {
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [new Ext.form.ComboBox({
									hiddenName : 'dwlx',
									fieldLabel : '企业类型',
									emptyText : '请选择',
									triggerAction : 'all',
									store : new Ext.data.SimpleStore({
												fields : ['name',
														'code'],
												data : [['股份有限公司', '01']]
											}),
									displayField : 'name',
									valueField : 'code',
									mode : 'local',
									forceSelection : false, // 选中内容必须为下拉列表的子项
									editable : false,
									typeAhead : true,
									// value:'0002',
									resizable : true,
									allowBlank : false,
									labelStyle : 'color:blue;',
									anchor : '100%'
								}), new Ext.form.ComboBox({
									hiddenName : 'jyfs',
									fieldLabel : '经营方式',
									emptyText : '请选择',
									triggerAction : 'all',
									store : new Ext.data.SimpleStore({
												fields : ['name',
														'code'],
												data : [['批发', '01']]
											}),
									displayField : 'name',
									valueField : 'code',
									mode : 'local',
									forceSelection : false, // 选中内容必须为下拉列表的子项
									editable : false,
									typeAhead : true,
									// value:'0002',
									resizable : true,
									labelStyle : 'color:blue;',
									anchor : '100%'
								}),{
									fieldLabel : '有效期起',
									name : 'yxqq',
									xtype : 'datefield', // 设置为文字输入框类型
									format:'Y-m-d',
									maxLength : 25,
									labelStyle : 'color:blue;',
									allowBlank : false,
									anchor : '100%'
								},comboxWithTree1,{
									fieldLabel : '证照办理人员',
									name : 'zjblry',
									xtype : 'textfield', // 设置为文字输入框类型
									maxLength : 25,
									labelStyle : 'color:blue;',
									anchor : '100%'
								}]
					}]
		}, {
			layout : 'column',
			border : false,
			items : [{
						columnWidth : .33,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [new Ext.form.ComboBox({
							hiddenName : 'ns',
							fieldLabel : '年审',
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
										fields : ['name',
												'code'],
										data : [['是', '1'],
												['否', '0']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							// value:'0002',
							resizable : true,
							allowBlank : false,
							labelStyle : 'color:blue;',
							anchor : '100%'
						})]
					}, {
						columnWidth : .22,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '年审日期',
									name : 'nsrq',
									xtype:'datefield',
									format:'m-d',
									maxLength : 50,
									labelStyle : 'color:blue;',
									anchor : '99%'
								}]
					}]
		}, {
			layout : 'column',
			border : false,
			items : [{
						columnWidth : .33,
						layout : 'form',
						labelWidth :120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [new Ext.form.ComboBox({
							hiddenName : 'hz',
							fieldLabel : '换证',
							triggerAction : 'all',
							store : new Ext.data.SimpleStore({
										fields : ['name',
												'code'],
										data : [['是', '1'],
												['否', '0']]
									}),
							displayField : 'name',
							valueField : 'code',
							mode : 'local',
							forceSelection : false, // 选中内容必须为下拉列表的子项
							editable : false,
							typeAhead : true,
							// value:'0002',
							resizable : true,
							allowBlank : false,
							labelStyle : 'color:blue;',
							anchor : '100%'
						})]
					}, {
						columnWidth : .30,
						layout : 'form',
						labelWidth : 120, // 标签宽度
						defaultType : 'textfield',
						border : false,
						items : [{
									fieldLabel : '换证日期',
									name : 'hzrq',
									xtype:'datefield',
									format:'Y-m-d',
									maxLength : 50,
									labelStyle : 'color:blue;',
									anchor : '99%'
								}]
					}]
		}]
	});
	var updateWindow = new Ext.Window({
				title : '<span class="commoncss">修改证照信息<span>', // 窗口标题
				layout : 'fit', // 设置窗口布局模式
				width : 1000, // 窗口宽度
				height : 350, // 窗口高度
				closable : false, // 是否可关闭
				collapsible : true, // 是否可收缩
				maximizable : true, // 设置是否可以最大化
				border : false, // 边框线设置
				constrain : true, // 设置窗口是否可以溢出父容器
				animateTarget : Ext.getBody(),
				pageY : 20, // 页面定位Y坐标
				pageX : document.body.clientWidth / 2 - 600 / 2-200, // 页面定位X坐标
				items : [updateForm], // 嵌入的表单面板
				buttons : [{
							text : '保存',
							iconCls : 'acceptIcon',
							handler : function() {
								updateTheForm();
							}
						}, {
							text : '关闭',
							iconCls : 'deleteIcon',
							handler : function() {
								updateWindow.hide();
							}
						}]
			});

	// 布局
	// 如果把form作为center区域的话,其Height属性将失效。
	var viewport = new Ext.Viewport({
				layout : 'border',
				items : [qForm, grid]
			});

	/**
	 * 查询项目列表
	 */
	function queryZjDatas() {
		var params = qForm.getForm().getValues();
		params.start = 0;
		params.limit = bbar.pageSize;
		store.load({
					params : params
				});
	}

	/**
	 * 新增项目
	 */
	function addCatalogItem() {
		firstWindow.show(); // 显示窗口
	}

	/**
	 * 表单提交(表单自带Ajax提交)
	 */
	function submitTheForm() {
		if (!myForm.getForm().isValid())
			return;
		myForm.form.submit({
					url : 'gszzglAct.do?reqCode=saveZz',
					waitTitle : '提示',
					method : 'POST',
					waitMsg : '正在处理数据,请稍候...',
					success : function(form, action) { 
						Ext.MessageBox.alert('提示', '保存成功');
						firstWindow.hide();
						store.reload();
					},
					failure : function(form, action) {
						Ext.MessageBox.alert('提示', '数据保存失败');
					}
				});
	}

	/**
	 * 修改项目
	 */
	function updateCatalogItem() {
		var record = grid.getSelectionModel().getSelected();
		if (Ext.isEmpty(record)) {
			Ext.Msg.alert('提示:', '请先选中项目');
			return;
		}
		updateForm.getForm().loadRecord(record);
		updateWindow.show(); // 显示窗口
	}

	/**
	 * 表单提交(表单自带Ajax提交)
	 */
	function updateTheForm() {
		if (!updateForm.getForm().isValid())
			return;
		updateForm.form.submit({
					url : 'gszzglAct.do?reqCode=updateZz',
					waitTitle : '提示',
					method : 'POST',
					waitMsg : '正在处理数据,请稍候...',
					success : function(form, action) { 
						Ext.Msg.alert('提示', '修改成功');
						updateWindow.hide();
						store.reload();
					},
					failure : function(form, action) {
						Ext.Msg
								.alert('提示', '数据保存失败,错误类型:'
												+ action.failureType);
					}
				});
	}

	/**
	 * 删除项目
	 */
	function deleteCatalogItem() {
		var record = grid.getSelectionModel().getSelected();
		if (Ext.isEmpty(record)) {
			Ext.Msg.alert('提示:', '请先选中项目');
			return;
		}
		Ext.MessageBox.confirm('请确认', '确认删除吗?', function(btn, text) {
					if (btn == 'yes') {
						showWaitMsg();
						Ext.Ajax.request({
									url : 'gszzglAct.do?reqCode=deleteZz',
									success : function(response) { // 回调函数有1个参数
										Ext.Msg.alert('提示', '删除成功');
										store.reload();
									},
									failure : function(response) {
										Ext.MessageBox.alert('提示', '数删除失败');
									},
									params : {
										xmid : record.data.xmid
									}
								});
					}
				})
	}

	/**
	 * 打印一
	 */
	function printCatalog1() {
		showWaitMsg('正在准备报表数据,请稍等...');
		Ext.Ajax.request({
					url : 'integrateDemo.do?reqCode=buildReportDataObject',
					success : function(response) {
						hideWaitMsg();
						doPrint('hisCatalogReport4App');
					},
					failure : function(response) {
						hideWaitMsg();
						Ext.Msg.alert('提示', "准备报表数据对象发生错误,请检查!");
					}
				});
	}
	
	function callTuxedo(){
		Ext.Ajax.request({
			url : 'integrateDemo.do?reqCode=callTuxedo',
			success : function(response) { // 回调函数有1个参数
				var resultArray = Ext.util.JSON
						.decode(response.responseText);
				Ext.Msg.alert('提示', resultArray.msg);
			},
			failure : function(response) {
				Ext.MessageBox.alert('提示', '调用失败');
			},
			params : {
				par1 : '001'
			}
		});
	}

});