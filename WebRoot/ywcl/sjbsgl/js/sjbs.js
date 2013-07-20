Ext.onReady(function() {
	var group1 = [{
		colspan:2,
		align:'center'
	}, {
		header : '卡类型',
		colspan : 9,
		align : 'center'
	},{
		colspan:3,
		align:'center'
	}];
	var group2 = [{
		header:'名称',
		colspan:2,
		align:'center'
	}, {
		header : '不记名卡',
		colspan : 3,
		align : 'center'
	}, {
		header : '普通车队卡',
		colspan : 3,
		align : 'center'
	}, {
		header : '普通个人卡',
		colspan :3,
		align : 'center'
	}, {
		header : '汇总',
		colspan :3,
		align : 'center'
	}];
	var group = new Ext.ux.plugins.GroupHeaderGrid({
		rows : [group1, group2]
	});
	// 定义自动当前页行号
	var rownum = new Ext.grid.RowNumberer({
				header : 'NO',
				width : 28
			});
	// 定义列模型
	var cm = new Ext.grid.ColumnModel([rownum, {
		header:'受理站级',
		dataIndex : 'slzj', // 数据索引:和Store模型对应
		rowmerge:true,
		width:250,
		sortable : true
			// 是否可排序
		}, {
		header : '本省卡交易额(元)',
		dataIndex : 'bjmbskjy',
		align:'left',
		sortable : true
	}, {
		header : '外省卡交易额(元)',
		dataIndex : 'bjmwskjy'
	}, {
		header : '实际总金额(元)',
		dataIndex : 'bjmsjzje'
	}, {
		header:"本省卡交易额(元)",
		dataIndex : 'ptcdbskjy'
	}, {
		header : '外省卡交易额(元)',
		dataIndex : 'ptcdwskjy'
	}, {
		header : '实际总金额(元)',
		dataIndex : 'ptcdsjzje'
	}, {
		header : '本省卡交易额(元)',
		dataIndex : 'ptgrbskjy'
	}, {
		header : '外省卡交易额(元)',
		dataIndex : 'ptgrwskjy'
	}, {
		header : '实际总金额(元)',
		dataIndex : 'ptgrsjzje'
	}, {
		header : '本省卡交易额(元)',
		dataIndex : 'hzbskjy'
	}, {
		header : '外省卡交易额(元)',
		dataIndex : 'hzwskjy'
	}, {
		header : '实际总金额(元)',
		dataIndex : 'hzsjzje'
	}]);
	var store = new Ext.data.Store({
		// 获取数据的方式
		proxy : new Ext.data.HttpProxy({
					url : 'sjscAct.do?reqCode=querySjbsDatas'
				}),
		// 数据读取器
		reader : new Ext.data.JsonReader({
					totalProperty : 'TOTALCOUNT', // 记录总数
					root : 'ROOT' // Json中的列表数据根节点
				}, [{
							name : 'slzj' // Json中的属性Key值
						}, {
							name : 'bjmbskjy'
						}, {
							name : 'bjmwskjy'
						}, {
							name : 'bjmsjzje'
						}, {
							name : 'ptcdbskjy'
						}, {
							name : 'ptcdwskjy'
						}, {
							name : 'ptcdsjzje'
						}, {
							name : 'ptgrbskjy'
						}, {
							name : 'ptgrwskjy'
						}, {
							name : 'ptgrsjzje'
						}, {
							name : 'hzbskjy'
						}, {
							name : 'hzwskjy'
						}, {
							name : 'hzsjzje'
						}])
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
		items : ['-', '&nbsp;&nbsp;', pagesize_combo, '-', {
			text : '合计',
			iconCls : 'addIcon',
			handler : function() {
				summary.toggleSummary();
			}
		}]
	});
var tbar = new Ext.Toolbar({
	items : [ new Ext.ux.form.FileUploadField(
			{
				buttonText : '选择文件',
				name : 'upload',
				width : 200
			}) ,{
		text : '上传', // 按钮文本
		iconCls : 'uploadIcon', // 按钮图标
		handler : function() { // 按钮响应函数
			submitTheForm();
		}
	}]
});
//合计
var summary = new Ext.ux.grid.GridSummary();
// 表格实例
var grid = new Ext.grid.GridPanel({
			// 表格面板标题,默认为粗体，我不喜欢粗体，这里设置样式将其格式为正常字体
			title : '<span class="commoncss">数据报送</span>',
			height : 300,
			frame : true,
			autoScroll : true,
			region : 'center', // 和VIEWPORT布局模型对应，充当center区域布局
			store : store, // 数据存储
			stripeRows : true, // 斑马线
			cm : cm, // 列模型
			tbar : tbar, // 表格工具栏
			bbar : bbar,// 分页工具栏
			plugins : [group,summary],
			viewConfig : {
// 不产横向生滚动条, 各列自动扩展自动压缩, 适用于列数比较少的情况
			 forceFit : true
			},
			loadMask : {
				msg : '正在加载表格数据,请稍等...'
			}
		});

// 页面初始自动查询数据
// store.load({params : {start : 0,limit : bbar.pageSize}});

// 布局模型
var viewport = new Ext.Viewport({
			layout : 'border',
			items : [grid]
		});
	function submitTheForm() {
		Ext.MessageBox.alert('提示', '上传成功');
		store.load({
			callback :fnSumInfo
		});
				
	}
	/**
	 * 汇总表格
	 */
	function fnSumInfo() {
		Ext.Ajax.request({
					url : 'sjscAct.do?reqCode=sumBalanceInfo',
					success : function(response) { // 回调函数有1个参数
						summary.toggleSummary(true);
						summary.setSumValue(Ext.decode(response.responseText));
					},
					failure : function(response) {
						Ext.MessageBox.alert('提示', '汇总数据失败');
					}
				});
	}
});