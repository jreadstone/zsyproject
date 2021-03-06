/**
 * 面板实例
 * 
 * @author XiongChun
 * @since 2010-10-27
 */
Ext.onReady(function() {
			// 定义工具栏
			var tb = new Ext.Toolbar();
			tb.add({
						text : '禁用',
						iconCls : 'page_delIcon',
						handler : function(item) {
							panel.disable(true);
						}
					}, '-', {
						text : '重置',
						iconCls : 'tbar_synchronizeIcon',
						handler : function(item) {
							Ext.Msg.alert('提示', item.text);
						}
					}, '-', {
						text : '刷新',
						iconCls : 'page_refreshIcon',
						// pressed:true, //按钮按下
						handler : function(item) {
							Ext.Msg.alert('提示', item.text);
						}
					});

			var panel = new Ext.Panel({
						region : 'north',
						title : '<span class="commoncss">待办事项</span>', // 标题
						iconCls : 'book_previousIcon', // 图标
						collapsible : true, // 是否允许折叠
						contentEl : 'contentDiv', // 内容DIV
						// width : 400,
						//frame : true,
						//bodyStyle : 'background-color:#FFFFFF',
						height : 200,
						buttonAlign : 'center'
					});

			var panel1 = new Ext.Panel({
						region : 'east',
						title : '备忘录', // 标题
						iconCls : 'book_previousIcon', // 图标
						collapsible : true, // 是否允许折叠
						tbar : tb, // 工具栏
						contentEl : 'contentDiv2', // 内容DIV
						width : 400,
						frame : false,
						height : 150,
						buttonAlign : 'right'
					});

				var panel2 = new Ext.Panel({
							region : 'center',
							title : '<span class="commoncss">各部门销售信息</span>', // 标题
							iconCls : 'book_previousIcon', // 图标
							collapsible : false, // 是否允许折叠
							width : 670,
							autoScroll : true,
							frame : false,
							height : 200,
							autoLoad : {
								url : webContext + '/demo/treeDemo.do?reqCode=treeDemo7Init',
								scripts : true, // 外部文件是否包含脚本支持
								text : '模板引擎正在驱动页面,请等待...'
							}
						});

			// 布局模型
			var viewport = new Ext.Viewport({
						layout : 'border',
						items : [panel, panel1, panel2]
					});
		});