
///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let adddata = {}; //添加按钮需要的数据源
let addIns;   //增加操作时候的模态框实例
let addIns2;
let htfl = [];
//设置模态框的属性
if (addIns == null) {
	addIns = $('#addmotai ').dxPopup({
		'visible': false,  //设置属性不可见
		height: 300,  //设置高度
		width: 450,  //设置宽度
	}).dxPopup('instance');
}
if (addIns2 == null) {
	addIns2 = $('#addmotai ').dxPopup({
		'visible': false,  //设置属性不可见
		height: 300,  //设置高度
		width: 450,  //设置宽度
	}).dxPopup('instance');
}
let change = '';   //区分增加和修改的状态,1为增加;2为修改
//查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
$(function () {
	start() //调用初始化函数//websocket开始

	//var userId='CLAUSE_websocket';
	//var websocket;
	//if('WebSocket' in window) {
	//console.log('此浏览器支持websocket');
	//websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/'+userId);
	//} else if('MozWebSocket' in window) {
	//alert('此浏览器只支持MozWebSocket');
	//websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/'+userId);
	//} else {
	//alert('此浏览器只支持SockJS');
	//websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/'+userId);
	//}
	//websocket.onopen = function(evnt) {
	//console.log('链接服务器成功!')
	//var data = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"A"},]']
	//send(data)
	//};
	//websocket.onmessage = function(evnt) {
	//var jsons = eval('(' + evnt.data + ')');
	//var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:CLAUSE');
	//result.done(function (dialogResult) {
	//if (dialogResult) {
	//var json = eval('(' + evnt.data + ')');
	//eval(json.dataType)
	//console.log(json)
	//}
	//})
	//};
	//websocket.onerror = function(evnt) {};
	//websocket.onclose = function(evnt) {
	//console.log('与服务器断开了链接!')
	//}
	//function send(data) {
	//if(websocket != null) {
	//websocket.send(data);
	//} else {
	//alert('未与服务器链接.');
	//}
	//}

	//websocket结束

	////////////////////////////////////
	//////查询Form属性生成/////////////////)
	////////////////////////////////////
	//以下为查询form的代码
	searchdataFormM1 = $('#searchFormM1').dxForm({
		deferRendering: false,

		formData: searchdataM1,
		////当参数小于三个时为五个,大于等于三时统一乘二
		////王晶晶给改为自适应编码
		colCountByScreen: {
			lg: 6,
			md: 4,
			sm: 2,
			xs: 1,
		},
		//所有查询条件为一组的代码段
		itemType: 'group',
		items: [
			{
				dataField: 'cContypeTpCgclausedata',
				label: {
					text: '合同名称'
				},
				editorOptions: {
					showClearButton: true,
				}
			},
			{
				dataField: 'cClause',
				label: {
					text: '条款内容'
				},
				editorOptions: {
					showClearButton: true,
				}
			},
		]
	}).dxForm('instance')
	//完成对查询条件的自动生成
	////////////////////////////////////////////////////
	////生成按钮层//////////////////////////////////////
	////////////////////////////////////////////////////

	let operateFormS1buts = [
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: "search",
				name: 'M1S11Q',
				text: '查询',
				onClick: function () {
					M1S11_serDel();
				}
			}
		}, {
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				name: 'M1S11Q',
				icon: 'plus',
				text: '添加',
				onClick: function () {
					change = '1';
					$('#addmotai').show()
					addIns = $('#addmotai').dxPopup({
						//						width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
						//						height:450, 
						deferRendering: true,
						fullScreen: true  
					}).dxPopup('instance')
					addIns.option('title', '添加合同条款')
					addIns.show();
					M1S11_addfun();
					$('#scrollView').dxScrollView({
                            height: function () {
                                return innerHeight - 100;
                            }, //设置高度,
                            // width: 500,
                            direction: "vertical"
                    });
					M1S11addIns.option('formData', new Object())
				}
			}
		}, 
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: 'save',
				text: '修改',
				onClick: function () {
					change = '2'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
						return;
					}
					if (selectedRowKeys.length > 1) {
						 Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
						 DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
						return;
					}
					addIns = $('#addmotai').dxPopup({
						//模态框增加name    
//						width: 1000,
//						height: 450
						deferRendering: true,
						fullScreen: true  
					}).dxPopup('instance')
					addIns.option('title', 'CLAUSE');
					addIns.show();
					// 调用模态框函数    
					// updatafun()    
					M1S11_Updatefun()
					$('#scrollView').dxScrollView({
                            height: function () {
                                return innerHeight - 100;
                            }, //设置高度,
                            // width: 500,
                            direction: "vertical"
                    });
					M1S11addIns.option('formData', new Object);
					M1S11addIns.option('formData', rowsData);
					console.log(rowsData)
					if ($('#addForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', true)
					 }
					 if ($('#addForm').dxForm('instance').getEditor('cSw50TpCgclausedata').option('value') === '') {
						 $('#addForm').dxForm('instance').getEditor('cSw50TpCgclausedata').option('visible', false)
					 } else {
						 $('#addForm').dxForm('instance').getEditor('cSw50TpCgclausedata').option('visible', true)
					 }
				}
			}
		},
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				name:"updateAdd",
				icon: 'plus',
				text: '修改添加',
				onClick: function () {
					change = '3'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择一条要修改添加的数据。', 'info', 3000);
						return;
					}
					if (selectedRowKeys.length > 1) {
						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
						// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
						return;
					}
					addIns = $('#addmotai').dxPopup({
						//模态框增加name    
//						width: 1000,
//						height: 450
						deferRendering: true,
						fullScreen: true  
					}).dxPopup('instance')
					addIns.option('title', 'CLAUSE');
					addIns.show();
					// 调用模态框函数    
					// updatafun()    
					M1S21_Updatefun();
					$('#scrollView').dxScrollView({
                            height: function () {
                                return innerHeight - 100;
                            }, //设置高度,
                            // width: 500,
                            direction: "vertical"
                    });
					M1S11addIns.option('formData', rowsData)
				}
			}
		}, 
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",

				icon: 'remove',
				text: '删除',
				onClick: function () {
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys = grid1.getSelectedRowKeys()
					let rowsData = grid1.getSelectedRowsData()
					//脚本执行  
					if (selectedRowKeys.length < 1) {
						DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
						return;
					}
					msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {
						}
					};
					//前后端统一叫'tscLtrawbin' 

					msg.data.clauseM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
					console.log(msg)
					M1S11D_serDel_Judgment();
					if (M1S11D_serDel_mark != 'M1S11D_success') {
					} else {
						
						var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
						result.done(function (dialogResult) {
							if (dialogResult) {
								cake.Ui.LoadPanel.show()	
						$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11D'), dataType: 'json',   //返回格式为json   
							async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
							type: 'post',   //请求方式 get 或者post , 
							contentType: 'application/json',
							success: function (data) {
								let select = data.msg
								if (data.errcode == 0) {
									DevExpress.ui.notify(data.msg, 'success', 3000);
									M1S11_serDel();
									/*var websocketData = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"AUD"}]']
									send(websocketData)*/
								}
								else {
									DevExpress.ui.notify(data.msg, 'warning', 3000);
								}
							},
							error: function () {
								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
							}
						})
					
						}
						cake.Ui.LoadPanel.close();
					})
					
					}
				}
			}
		},
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				name:"updateAdd",
				icon: 'plus',
				text: '修改添加',
				onClick: function () {
					change = '3'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择一条要修改添加的数据。', 'info', 3000);
						return;
					}
					if (selectedRowKeys.length > 1) {
						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
						// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
						return;
					}
					addIns = $('#addmotai').dxPopup({
						//模态框增加name    
//						width: 1000,
//						height: 450
						deferRendering: true,
						fullScreen: true  
					}).dxPopup('instance')
					addIns.option('title', 'CLAUSE');
					addIns.show();
					// 调用模态框函数    
					// updatafun()    
					M1S21_Updatefun();
					$('#scrollView').dxScrollView({
                            height: function () {
                                return innerHeight - 100;
                            }, //设置高度,
                            // width: 500,
                            direction: "vertical"
                    });
					M1S11addIns.option('formData', rowsData)
				}
			}
		}, 

	];
    $('#operateFormM1S1').dxForm({
        width: '100%',
        colCount: 200,

        items: [{
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: "search",
                    text: '查询',
                    onClick: function() {
                        M1S11_serDel();
                    }
                }
            },
            {
                name: 'M1S11A',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    name: 'M1S11Q',
                    icon: 'plus',
                    text: '添加',
                    onClick: function() {
                        change = '1';
                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            //						width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
                            //						height:450, 
                            deferRendering: true,
                            fullScreen: true
                        }).dxPopup('instance')
                        addIns.option('title', '添加合同条款')
                        addIns.show();
                        M1S11_addfun();
                        $('#scrollView').dxScrollView({
                            height: function() {
                                return innerHeight - 100;
                            }, //设置高度,
                            // width: 500,
                            direction: "vertical"
                        });
                        M1S11addIns.option('formData', new Object())
                    }
                }
            },
            {
                name: 'M1S11_U',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: 'save',
                    text: '修改',
                    onClick: function() {
                        change = '2'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            //						width: 1000,
                            //						height: 450
                            deferRendering: true,
                            fullScreen: true
                        }).dxPopup('instance')
                        addIns.option('title', 'CLAUSE');
                        addIns.show();
                        // 调用模态框函数    
                        // updatafun()    
                        M1S11_Updatefun()
                        $('#scrollView').dxScrollView({
                            height: function() {
                                return innerHeight - 100;
                            }, //设置高度,
                            // width: 500,
                            direction: "vertical"
                        });
                        M1S11addIns.option('formData', new Object);
                        M1S11addIns.option('formData', rowsData);
                        console.log(rowsData)
                        if ($('#addForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', true)
                        }
                        if ($('#addForm').dxForm('instance').getEditor('cSw50TpCgclausedata').option('value') === '') {
                            $('#addForm').dxForm('instance').getEditor('cSw50TpCgclausedata').option('visible', false)
                        } else {
                            $('#addForm').dxForm('instance').getEditor('cSw50TpCgclausedata').option('visible', true)
                        }
                    }
                }
            },
            {
                name: "updateAdd",
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",

                    icon: 'plus',
                    text: '修改添加',
                    onClick: function() {
                        change = '3'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条要修改添加的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            // DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            //						width: 1000,
                            //						height: 450
                            deferRendering: true,
                            fullScreen: true
                        }).dxPopup('instance')
                        addIns.option('title', 'CLAUSE');
                        addIns.show();
                        // 调用模态框函数    
                        // updatafun()    
                        M1S21_Updatefun();
                        $('#scrollView').dxScrollView({
                            height: function() {
                                return innerHeight - 100;
                            }, //设置高度,
                            // width: 500,
                            direction: "vertical"
                        });
                        M1S11addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'M1S11D',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",

                    icon: 'remove',
                    text: '删除',
                    onClick: function() {
                        let grid1 = $('#dataGridS1').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                            //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        //前后端统一叫'tscLtrawbin' 

                        msg.data.clauseM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        console.log(msg)
                        M1S11D_serDel_Judgment();
                        if (M1S11D_serDel_mark != 'M1S11D_success') {} else {

                            var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                            result.done(function(dialogResult) {
                                if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11D'),
                                        dataType: 'json', //返回格式为json   
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                        type: 'post', //请求方式 get 或者post , 
                                        contentType: 'application/json',
                                        success: function(data) {
                                            let select = data.msg
                                            if (data.errcode == 0) {
                                                DevExpress.ui.notify(data.msg, 'success', 3000);
                                                M1S11_serDel();
                                                /*var websocketData = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"AUD"}]']
                                                send(websocketData)*/
                                            } else {
                                                DevExpress.ui.notify(data.msg, 'warning', 3000);
                                            }
                                        },
                                        error: function() {
                                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                        }
                                    })

                                }
                                cake.Ui.LoadPanel.close();
                            })

                        }
                    }
                }
            },
            {
                name: 'M1S11T',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: 'save',
                    text: '条款修改',
                    onClick: function() {
                        let grid1 = $('#dataGridS1').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                            //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                    	addIns2 = $('#addmotai_QA00addlns').dxPopup({
    						//模态框增加name    
    						width: 1000,
    						height: 250,
//    						deferRendering: true,
//    						fullScreen: true  
    					}).dxPopup('instance')
    					addIns2.option('title', '条款修改');
    					addIns2.show();
    					// 调用模态框函数    
    					// updatafun()    
    					M1S11T_Updatefun();
    					M1S11addIns.option('formData', new Object);
//    					$('#scrollView').dxScrollView({
//                                height: function () {
//                                    return innerHeight - 100;
//                                }, //设置高度,
//                                // width: 500,
//                                direction: "vertical"
//                        });
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
                        //前后端统一叫'tscLtrawbin' 

//                        msg.data.clauseM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//                        console.log(msg)
//                        M1S11D_serDel_Judgment();
//                        if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
//
//                            var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
//                            result.done(function(dialogResult) {
//                                if (dialogResult) {
//                                    cake.Ui.LoadPanel.show()
//                                    $.ajax({
//                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11D'),
//                                        dataType: 'json', //返回格式为json   
//                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                                        type: 'post', //请求方式 get 或者post , 
//                                        contentType: 'application/json',
//                                        success: function(data) {
//                                            let select = data.msg
//                                            if (data.errcode == 0) {
//                                                DevExpress.ui.notify(data.msg, 'success', 3000);
//                                                M1S11_serDel();
//                                                /*var websocketData = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"AUD"}]']
//                                                send(websocketData)*/
//                                            } else {
//                                                DevExpress.ui.notify(data.msg, 'warning', 3000);
//                                            }
//                                        },
//                                        error: function() {
//                                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                        }
//                                    })
//
//                                }
//                                cake.Ui.LoadPanel.close();
//                            })
//
//                        }
                    }
                }
            }, 

        ]
    })

	////////////////////////////////////
	//////表格属性生成/////////////////)
	////////////////////////////////////
	var dataGridS1columns = [
		{
			dataField: 'cContypeTpCgclausedata',
			caption: '合同名称',
		},
		{
			dataField: 'cSw50TpCgclausedata',
			caption: '合同分类',
			calculateDisplayValue: function (rowData) {

	            let matchedItem = htfl.find(item => item.cSubitemid == rowData.cSw50TpCgclausedata);

	            if (matchedItem == null || matchedItem == undefined) {
	                return "";
	            } else {
	                return matchedItem.cSubitemdes;
	            }

	        }
		},
		{
			dataField: 'cSw01TpCgclausedata',
			caption: '扩展字段1',
			width: 200,
		},
		{
			dataField: 'cSw02TpCgclausedata',
			caption: '扩展字段2',
			width: 200,
		},

		{
			dataField: 'cSw03TpCgclausedata',
			caption: '扩展字段3',
			width: 200,
		},

		{
			dataField: 'cSw04TpCgclausedata',
			caption: '扩展字段4',
			width: 200,
		},
		{
			dataField: 'cSw05TpCgclausedata',
			caption: '扩展字段5',
			width: 200,
		},
		{
			dataField: 'cSw06TpCgclausedata',
			caption: '扩展字段6',
			width: 200,
		},

		{
			dataField: 'cSw07TpCgclausedata',
			caption: '扩展字段7',
			width: 200,
		},
		{
			dataField: 'cSw08TpCgclausedata',
			caption: '扩展字段8',
			width: 200,
		},
		{
			dataField: 'cSw09TpCgclausedata',
			caption: '扩展字段9',
			width: 200,
		},
		{
			dataField: 'cSw10TpCgclausedata',
			caption: '扩展字段10',
			width: 200,
		},
		{
			dataField: 'cSw11TpCgclausedata',
			caption: '扩展字段11',
			width: 200,
		},
		{
			dataField: 'cSw12TpCgclausedata',
			caption: '扩展字段12',
			width: 200,
		},
		{
			dataField: 'cSw13TpCgclausedata',
			caption: '扩展字段13',
			width: 200,
		},
		{
			dataField: 'cSw14TpCgclausedata',
			caption: '扩展字段14',
			width: 200,
		},
		{
			dataField: 'cSw15TpCgclausedata',
			caption: '扩展字段15',
			width: 200,
		},
		{
			dataField: 'cSw16TpCgclausedata',
			caption: '扩展字段16',
			width: 200,
		},
		{
			dataField: 'cSw17TpCgclausedata',
			caption: '扩展字段17',
			width: 200,
		},
		{
			dataField: 'cSw18TpCgclausedata',
			caption: '扩展字段18',
			width: 200,
		},
		{
			dataField: 'cSw19TpCgclausedata',
			caption: '扩展字段19',
			width: 200,
		},
		{
			dataField: 'cSw20TpCgclausedata',
			caption: '扩展字段20',
			width: 200,

		},
		{
			dataField: 'cSw21TpCgclausedata',
			caption: '扩展字段21',
			width: 200,
		},
		{
			dataField: 'cSw22TpCgclausedata',
			caption: '扩展字段22',
			width: 200,
		},
		{
			dataField: 'cSw23TpCgclausedata',
			caption: '扩展字段23',
			width: 200,
		},
		{
			dataField: 'cSw24TpCgclausedata',
			caption: '扩展字段24',
			width: 200,
		},
		{
			dataField: 'cSw25TpCgclausedata',
			caption: '扩展字段25',
			width: 200,
		},
		{
			dataField: 'cSw26TpCgclausedata',
			caption: '扩展字段26',
			width: 200,
		},
		{
			dataField: 'cSw27TpCgclausedata',
			caption: '扩展字段27',
			width: 200,
		},
		{
			dataField: 'cSw28TpCgclausedata',
			caption: '扩展字段28',
			width: 200,
		},
		{
			dataField: 'cSw29TpCgclausedata',
			caption: '扩展字段29',
			width: 200,
		},
		{
			dataField: 'cSw30TpCgclausedata',
			caption: '扩展字段30',
			width: 200,
		},
		{
			dataField: 'cSw31TpCgclausedata',
			caption: '扩展字段31',
			width: 200,
		},
		{
			dataField: 'cSw32TpCgclausedata',
			caption: '扩展字段32',
			width: 200,
		},

		{
			dataField: 'cSw33TpCgclausedata',
			caption: '扩展字段33',
			width: 200,
		},
		{
			dataField: 'cSw34TpCgclausedata',
			caption: '扩展字段34',
			width: 200,
		},
		{
			dataField: 'cSw35TpCgclausedata',
			caption: '扩展字段35',
			width: 200,
		},
		{
			dataField: 'cSw36TpCgclausedata',
			caption: '扩展字段36',
			width: 200,
		},
		{
			dataField: 'cSw37TpCgclausedata',
			caption: '扩展字段37',
			width: 200,
		},
		{
			dataField: 'cSw38TpCgclausedata',
			caption: '扩展字段38',
			width: 200,
		},
		{
			dataField: 'cSw39TpCgclausedata',
			caption: '扩展字段39',
			width: 200,
		},
		{
			dataField: 'cSw40TpCgclausedata',
			caption: '扩展字段40',
			width: 200,
		},
		{
			dataField: 'cSw41TpCgclausedata',
			caption: '扩展字段41',
			width: 200,
		},
		{
			dataField: 'cSw42TpCgclausedata',
			caption: '扩展字段42',
			width: 200,
		},
		{
			dataField: 'cSw43TpCgclausedata',
			caption: '扩展字段43',
			width: 200,
		},
		{
			dataField: 'cSw44TpCgclausedata',
			caption: '扩展字段44',
			width: 200,
		},
		{
			dataField: 'cSw45TpCgclausedata',
			caption: '扩展字段45',
			width: 200,
		},
//						{ 
//							dataField: 'cDrTpCgclausedata',
//							caption: '删除标识',
//						},
		{
			dataField: 'cSw46TpCgclausedata',
			caption: '扩展字段46',
			width: 200,
		},
		{
			dataField: 'cSw47TpCgclausedata',
			caption: '扩展字段47',
			width: 200,
		},
		{
			dataField: 'cSw48TpCgclausedata',
			caption: '扩展字段48',
			width: 200,
		},
		{
			dataField: 'cSw49TpCgclausedata',
			caption: '扩展字段49',
			width: 200,
		},
//		{
//			dataField: 'cSw50TpCgclausedata',
//			caption: '扩展字段50',
//			width: 200,
//		},
		{
			dataField: 'cCreaterTpCgclausedata',
			caption: '创建人',
			width: 60,
		},
		{
			dataField: 'cCreatetimeTpCgclausedata',
			caption: '创建时间',
			dataType: "date",
			width: 60,
			format: "yyyy-MM-dd",

		},
		//				{ 
		//					dataField: 'cTimestampTpCgclausedata',
		//					caption: '时间戳',					dataType: "date",
		//					format: "yyyy-MM-dd",
		//
		//				},
		//				
		//				{ 
		//					dataField: 'cIdTpCgclausedata',
		//					caption: '主键',
		//				},
		{
			dataField: 'cModifierTpCgclausedata',
			caption: '修改人',
			width: 60,
		},
		{
			dataField: 'cModifydateTpCgclausedata',
			caption: '修改时间', dataType: "date",
			format: "yyyy-MM-dd",
			width: 60,
		},
	]

	$('#dataGridS1').dxDataGrid({
		deferRendering: false,
		columnResizingMode: "widget",
		dataSource: tabledataS1,
		editing: {
			mode: 'popup',
			//allowUpdating: false     
		},
		// keyExpr: 'ID',     
		columnAutoWidth: true,
		showBorders: true,
		allowColumnResizing: true,
		showColumnLines: true,
		showRowLines: true,
		onCellHoverChanged: '#888',
		hoverStateEnabled: true,
		noDataText: '无数据',
		//允许脚本编写     
		height: '99%',
		paging: {
			enabled: false
		},
//		scrolling: {
//			mode: 'virtual'
//		},
		selection: {
			mode: 'multiple'
//			mode: 'single'
		},
		  loadPanel: {
	            enabled: true
	        },
		paging: {
            pageSize: 50,
            enabled: true,

        },
        pager: {
             showPageSizeSelector: true,
             allowedPageSizes: [5, 10, 20 , 25 ,30],
            PageNavigator: true,
            showInfo: true,
            showNavigationButtons: true,
            infoText: "{0}/{1} "
        },
		columns: dataGridS1columns,

		/*onToolbarPreparing: function (e) {
			operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

		}*/
	}).dxDataGrid('instance');
	///////////////////////////////////////////////////////
	//Star()请求下拉框、多选框数据、通过请求网址的后缀生成代码 
	///////////////////////////////////////////////////////
	function start() {
		//ajax传参用 		    
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
			}
		};
		initLoad1()
        function initLoad1() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "HTLB"
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    result.data.forEach(item => {
                        htfl.push(item);
                    });
//                    console.log(jhqx)
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
//		console.log(msg)
		////////////////////////////////////////////////////////////////////////////////    
		//寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
		////////////////////////////////////////////////////////////////////////////////    
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	function M1S11_serDel() {
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
			}
		};
		let searchtiao = searchdataFormM1.option('formData')
		msg.data.clauseM1s1 = [searchdataFormM1.option('formData')]; M1S11Q_serDel_Judgment();
		console.log(msg.data.clauseM1s1)
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11Q3'),
				dataType: 'json',   //返回格式为json      
				async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post',   //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {

					if (data.data == null) {
						tabledataS1.splice(0, tabledataS1.length);
						$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
						return
					}

					let select;
					select = data.data.clauseM1s1
					tabledataS1.splice(0, tabledataS1.length);
					select.forEach(item => tabledataS1.push(item));
					$('#dataGridS1').dxDataGrid('instance').deselectAll()
					$('#dataGridS1').dxDataGrid('instance').refresh()
					DevExpress.ui.notify(data.msg, 'success', 3000);
				},
				error: function () {
					DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
					// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
					//e.cancel=true;       
				}
			})
		}
	}
	function M1S11_addfun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 1,
			items: [
				{
					dataField: 'cContypeTpCgclausedata',
					label: {
						text: '合同名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 200, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw50TpCgclausedata',
					label: {
						text: '合同分类'
					},
					editorType: "dxSelectBox",
					editorOptions: {
						showClearButton: true,
					},
					editorOptions: {
		                   dataSource: htfl,
		                   valueExpr: 'cSubitemid',
		                   displayExpr: 'cSubitemdes',
		                   searchEnabled: true,
		                   showClearButton: true,
		                   //以上完成对没有联动数据源配置
		                   //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
		                   // dataSource: variabl,
		                   // valueExpr: 'id',
		                   // displayExpr: 'value',
		                   // showClearButton: true,
		                   placeholder: '请选择',
		               },
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw01TpCgclausedata',
					label: {
						text: '物资备注'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw02TpCgclausedata',
					label: {
						text: '扩展字段2'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw03TpCgclausedata',
					label: {
						text: '扩展字段3'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw04TpCgclausedata',
					label: {
						text: '扩展字段4'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw05TpCgclausedata',
					label: {
						text: '扩展字段5'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw06TpCgclausedata',
					label: {
						text: '扩展字段6'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw07TpCgclausedata',
					label: {
						text: '扩展字段7'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw08TpCgclausedata',
					label: {
						text: '扩展字段8'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw09TpCgclausedata',
					label: {
						text: '扩展字段9'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw10TpCgclausedata',
					label: {
						text: '扩展字段10'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw11TpCgclausedata',
					label: {
						text: '扩展字段11'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw12TpCgclausedata',
					label: {
						text: '扩展字段12'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw13TpCgclausedata',
					label: {
						text: '扩展字段13'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw14TpCgclausedata',
					label: {
						text: '扩展字段14'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为400！'
					},]
				},
				{
					dataField: 'cSw15TpCgclausedata',
					label: {
						text: '扩展字段15'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为400！'
					},]
				},
				{
					dataField: 'cSw16TpCgclausedata',
					label: {
						text: '扩展字段16'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw17TpCgclausedata',
					label: {
						text: '扩展字段17'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw18TpCgclausedata',
					label: {
						text: '扩展字段18'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw19TpCgclausedata',
					label: {
						text: '扩展字段19'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw20TpCgclausedata',
					label: {
						text: '扩展字段20'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw21TpCgclausedata',
					label: {
						text: '扩展字段21'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw22TpCgclausedata',
					label: {
						text: '扩展字段22'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw23TpCgclausedata',
					label: {
						text: '扩展字段23'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw24TpCgclausedata',
					label: {
						text: '扩展字段24'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw25TpCgclausedata',
					label: {
						text: '扩展字段25'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw26TpCgclausedata',
					label: {
						text: '扩展字段26'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw27TpCgclausedata',
					label: {
						text: '扩展字段27'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw28TpCgclausedata',
					label: {
						text: '扩展字段28'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw29TpCgclausedata',
					label: {
						text: '扩展字段29'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw30TpCgclausedata',
					label: {
						text: '扩展字段30'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw31TpCgclausedata',
					label: {
						text: '扩展字段31'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw32TpCgclausedata',
					label: {
						text: '扩展字段32'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw33TpCgclausedata',
					label: {
						text: '扩展字段33'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw34TpCgclausedata',
					label: {
						text: '扩展字段34'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw35TpCgclausedata',
					label: {
						text: '扩展字段35'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw36TpCgclausedata',
					label: {
						text: '扩展字段36'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw37TpCgclausedata',
					label: {
						text: '扩展字段37'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw38TpCgclausedata',
					label: {
						text: '扩展字段38'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw39TpCgclausedata',
					label: {
						text: '扩展字段39'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw40TpCgclausedata',
					label: {
						text: '扩展字段40'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				
				{
					dataField: 'cSw41TpCgclausedata',
					label: {
						text: '扩展字段41'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw42TpCgclausedata',
					label: {
						text: '扩展字段42'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				//			{
				//				dataField:'cIdTpCgclausedata',
				//				label:{
				//					text:'主键'
				//				},
				//      editorOptions: {
				//      showClearButton: true,
				//						},
				//		validationRules: [		{
				//			type: 'stringLength',max:200,min:0,
				//			message: '长度超限，最长为200！'
				//		},		]
				//					},
//				{
//					dataField: 'cSw43TpCgclausedata',
//					label: {
//						text: '扩展字段43'
//					},
//					editorType: "dxTextArea",
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为200！'
//					},]
//				},
//				{
//					dataField: 'cSw44TpCgclausedata',
//					label: {
//						text: '扩展字段44'
//					},
//					editorType: "dxTextArea",
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为4000！'
//					},]
//				},
				//			{
				//				dataField:'cTimestampTpCgclausedata',
				//				label:{
				//					text:'时间戳'
				//				},
				//      editorType: 'dxDateBox',
				//      editorOptions: {
				//      displayFormat: 'yyyy-MM-dd',
				//      type: 'datetime',
				//						},
				//		validationRules: [		]
				//					},
//				{
//					dataField: 'cSw45TpCgclausedata',
//					label: {
//						text: '扩展字段45'
//					},
//					editorType: "dxTextArea",
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为200！'
//					},]
//				},
//				{
//					dataField: 'cSw46TpCgclausedata',
//					label: {
//						text: '扩展字段46'
//					},
//					editorType: "dxTextArea",
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为200！'
//					},]
//				},
//				{
//					dataField: 'cSw47TpCgclausedata',
//					label: {
//						text: '扩展字段47'
//					},
//					editorType: "dxTextArea",
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为200！'
//					},]
//				},
//				{
//					dataField: 'cSw48TpCgclausedata',
//					label: {
//						text: '扩展字段48'
//					},
//					editorType: "dxTextArea",
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为200！'
//					},]
//				},
//				{
//					dataField: 'cSw49TpCgclausedata',
//					label: {
//						text: '扩展字段49'
//					},
//					editorType: "dxTextArea",
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为200！'
//					},]
//				},


			]
		}).dxForm('instance')
		$('#addsure').dxButton({
			text: '确定',
			icon: 'todo',
			validationGroup: validationGroupName,
			onClick: function (e) {
				let validateResult = e.validationGroup.validate();
				if (!validateResult.isValid) {
					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
					return;
				}
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
				msg.data.clauseM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11A_serDel_Judgment();
				if (M1S11A_serDel_mark != 'M1S11A_success') {
				} else {
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11A'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
								//var websocketData = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"AUD"}]']
								//send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 3000)
								return;
							}
							M1S11_serDel();
							addIns.hide();
						},
						error: function () {
							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
							// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
							//e.cancel=true;         
						}
					})
				}
			}
		})
		$('#addcansel').dxButton({
			text: '取消',
			icon: 'remove',
			onClick: function () {
				addIns.hide()
			}
		})
	}
	function M1S11_Updatefun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 1,
			items: [
				{
					dataField: 'cContypeTpCgclausedata',
					label: {
						text: '合同名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 200, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw50TpCgclausedata',
					label: {
						text: '合同分类',
//						visible:false
					},
					editorType: "dxSelectBox",
					editorOptions: {
						showClearButton: true,
					},
					editorOptions: {
		                   dataSource: htfl,
		                   valueExpr: 'cSubitemid',
		                   displayExpr: 'cSubitemdes',
		                   searchEnabled: true,
		                   showClearButton: true,
		                   //以上完成对没有联动数据源配置
		                   //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
		                   // dataSource: variabl,
		                   // valueExpr: 'id',
		                   // displayExpr: 'value',
		                   // showClearButton: true,
		                   placeholder: '请选择',
		               },
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw01TpCgclausedata',
					label: {
						text: '物资备注',
//						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw02TpCgclausedata',
					label: {
						text: '扩展字段2',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw03TpCgclausedata',
					label: {
						text: '扩展字段3',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw04TpCgclausedata',
					label: {
						text: '扩展字段4',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw05TpCgclausedata',
					label: {
						text: '扩展字段5',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw06TpCgclausedata',
					label: {
						text: '扩展字段6',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw07TpCgclausedata',
					label: {
						text: '扩展字段7',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw08TpCgclausedata',
					label: {
						text: '扩展字段8',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw09TpCgclausedata',
					label: {
						text: '扩展字段9',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw10TpCgclausedata',
					label: {
						text: '扩展字段10',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw11TpCgclausedata',
					label: {
						text: '扩展字段11',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw12TpCgclausedata',
					label: {
						text: '扩展字段12',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw13TpCgclausedata',
					label: {
						text: '扩展字段13',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw14TpCgclausedata',
					label: {
						text: '扩展字段14',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为400！'
					},]
				},
				{
					dataField: 'cSw15TpCgclausedata',
					label: {
						text: '扩展字段15',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为400！'
					},]
				},
				{
					dataField: 'cSw16TpCgclausedata',
					label: {
						text: '扩展字段16',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw17TpCgclausedata',
					label: {
						text: '扩展字段17',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw18TpCgclausedata',
					label: {
						text: '扩展字段18',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw19TpCgclausedata',
					label: {
						text: '扩展字段19',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw20TpCgclausedata',
					label: {
						text: '扩展字段20',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw21TpCgclausedata',
					label: {
						text: '扩展字段21',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw22TpCgclausedata',
					label: {
						text: '扩展字段22',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw23TpCgclausedata',
					label: {
						text: '扩展字段23',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw24TpCgclausedata',
					label: {
						text: '扩展字段24',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw25TpCgclausedata',
					label: {
						text: '扩展字段25',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw26TpCgclausedata',
					label: {
						text: '扩展字段26',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw27TpCgclausedata',
					label: {
						text: '扩展字段27',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw28TpCgclausedata',
					label: {
						text: '扩展字段28',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw29TpCgclausedata',
					label: {
						text: '扩展字段29',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw30TpCgclausedata',
					label: {
						text: '扩展字段30',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw31TpCgclausedata',
					label: {
						text: '扩展字段31',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw32TpCgclausedata',
					label: {
						text: '扩展字段32',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw33TpCgclausedata',
					label: {
						text: '扩展字段33',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw34TpCgclausedata',
					label: {
						text: '扩展字段34',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw35TpCgclausedata',
					label: {
						text: '扩展字段35',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw36TpCgclausedata',
					label: {
						text: '扩展字段36',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw37TpCgclausedata',
					label: {
						text: '扩展字段37',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw38TpCgclausedata',
					label: {
						text: '扩展字段38',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw39TpCgclausedata',
					label: {
						text: '扩展字段39',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw40TpCgclausedata',
					label: {
						text: '扩展字段40',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw41TpCgclausedata',
					label: {
						text: '扩展字段41',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw42TpCgclausedata',
					label: {
						text: '扩展字段42',
						visible:false
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				//			{
				//				dataField:'cIdTpCgclausedata',
				//				label:{
				//					text:'主键'
				//				},
				//      editorOptions: {
				//      showClearButton: true,
				//						},
				//		validationRules: [		{
				//			type: 'stringLength',max:200,min:0,
				//			message: '长度超限，最长为200！'
				//		},		]
				//					},
				{
					dataField: 'cSw43TpCgclausedata',
					label: {
						text: '扩展字段43',
						visible:false,
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw44TpCgclausedata',
					label: {
						text: '扩展字段44',
						visible:false,
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				//			{
				//				dataField:'cTimestampTpCgclausedata',
				//				label:{
				//					text:'时间戳'
				//				},
				//      editorType: 'dxDateBox',
				//      editorOptions: {
				//      displayFormat: 'yyyy-MM-dd',
				//      type: 'datetime',
				//						},
				//		validationRules: [		]
				//					},
				{
					dataField: 'cSw45TpCgclausedata',
					label: {
						text: '扩展字段45',
						visible:false,
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw46TpCgclausedata',
					label: {
						text: '扩展字段46',
						visible:false,
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw47TpCgclausedata',
					label: {
						text: '扩展字段47',
						visible:false,
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw48TpCgclausedata',
					label: {
						text: '扩展字段48',
						visible:false,
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw49TpCgclausedata',
					label: {
						text: '扩展字段49',
						visible:false,
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},

			]
		}).dxForm('instance')
		$('#addsure').dxButton({
			text: '确定',
			icon: 'todo',
			validationGroup: validationGroupName,
			onClick: function (e) {
				let validateResult = e.validationGroup.validate();
				if (!validateResult.isValid) {
					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
					return;
				}
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
				msg.data.clauseM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {

				var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
				result.done(function (dialogResult) {
					if (dialogResult) {
						cake.Ui.LoadPanel.show()
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11U'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
//								var websocketData = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"AUD"}]']
//								send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 3000)
								return;
							}
							M1S11_serDel();
							addIns.hide()
						},
						error: function () {
							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
							// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
							//e.cancel=true;         
						}
					})
				
						}
						cake.Ui.LoadPanel.close();
					})
				}
			}
		})
		$('#addcansel').dxButton({
			text: '取消',
			icon: 'remove',
			onClick: function () {
				addIns.hide();
				M1S11_serDel();
			}
		})
	}
	function M1S11T_Updatefun() {
		M1S11addIns = $('#addForm2').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
//			colCount: 3,
			items: [
				{
					dataField: 'cNewclause',
					label: {
						text: '新条款内容',
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},

			]
		}).dxForm('instance')
		$('#addsure2').dxButton({
			text: '确定',
			icon: 'todo',
			validationGroup: validationGroupName,
			onClick: function (e) {
				let validateResult = e.validationGroup.validate();
				if (!validateResult.isValid) {
					DevExpress.ui.notify('必填项为空！！', 'info', 3000);
					return;
				}
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
				let grid1 = $('#dataGridS1').dxDataGrid('instance');
                let selectedRowKeys = grid1.getSelectedRowKeys()
                let rowsData = grid1.getSelectedRowsData()
                let cNewclause =  M1S11addIns.option('formData').cNewclause;
                let cClause = searchdataFormM1.option('formData').cClause;
                if(cClause == undefined || cClause ==""||cClause==null){
                	DevExpress.ui.notify('查询条件中条款内容没录入，请录入！！！', 'warning', 3000);
                	return;
                }
                if(cNewclause == undefined || cNewclause == null || cNewclause ==''){
                	DevExpress.ui.notify('请录入新条款内容！！！！！', 'warning', 3000);
                	return;
                }
                console.log(rowsData,cNewclause,cClause);
				msg.data.clauseM1s1 =rowsData;
				msg.data.cNewclause = cNewclause;
				msg.data.cClause = cClause;
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {
				var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
				result.done(function (dialogResult) {
					if (dialogResult) {
						cake.Ui.LoadPanel.show()
				//../../tdhc_cgsys/CLAUSE/M1S11U
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11U3'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
//								var websocketData = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"AUD"}]']
//								send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 3000)
								return;
							}
							M1S11_serDel();
							addIns2.hide();
						},
						error: function () {
							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
							// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
							//e.cancel=true;         
						}
					})
				
						}
						cake.Ui.LoadPanel.close();
					})
				}
			}
		})
		$('#addcansel2').dxButton({
			text: '取消',
			icon: 'remove',
			onClick: function () {
				addIns2.hide();
				M1S11_serDel();
			}
		})
	}
	//修改添加
	function M1S21_Updatefun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 1,
			items: [
				{
					dataField: 'cContypeTpCgclausedata',
					label: {
						text: '合同名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 200, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw50TpCgclausedata',
					label: {
						text: '合同分类'
					},
					editorType: "dxSelectBox",
					editorOptions: {
						showClearButton: true,
					},
					editorOptions: {
		                   dataSource: htfl,
		                   valueExpr: 'cSubitemid',
		                   displayExpr: 'cSubitemdes',
		                   searchEnabled: true,
		                   showClearButton: true,
		                   //以上完成对没有联动数据源配置
		                   //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
		                   // dataSource: variabl,
		                   // valueExpr: 'id',
		                   // displayExpr: 'value',
		                   // showClearButton: true,
		                   placeholder: '请选择',
		               },
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw01TpCgclausedata',
					label: {
						text: '物质备注'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw02TpCgclausedata',
					label: {
						text: '扩展字段2'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw03TpCgclausedata',
					label: {
						text: '扩展字段3'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw04TpCgclausedata',
					label: {
						text: '扩展字段4'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw05TpCgclausedata',
					label: {
						text: '扩展字段5'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw06TpCgclausedata',
					label: {
						text: '扩展字段6'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw07TpCgclausedata',
					label: {
						text: '扩展字段7'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw08TpCgclausedata',
					label: {
						text: '扩展字段8'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw09TpCgclausedata',
					label: {
						text: '扩展字段9'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw10TpCgclausedata',
					label: {
						text: '扩展字段10'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw11TpCgclausedata',
					label: {
						text: '扩展字段11'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw12TpCgclausedata',
					label: {
						text: '扩展字段12'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw13TpCgclausedata',
					label: {
						text: '扩展字段13'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw14TpCgclausedata',
					label: {
						text: '扩展字段14'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为400！'
					},]
				},
				{
					dataField: 'cSw15TpCgclausedata',
					label: {
						text: '扩展字段15'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为400！'
					},]
				},
				{
					dataField: 'cSw16TpCgclausedata',
					label: {
						text: '扩展字段16'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw17TpCgclausedata',
					label: {
						text: '扩展字段17'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw18TpCgclausedata',
					label: {
						text: '扩展字段18'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw19TpCgclausedata',
					label: {
						text: '扩展字段19'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw20TpCgclausedata',
					label: {
						text: '扩展字段20'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw21TpCgclausedata',
					label: {
						text: '扩展字段21'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw22TpCgclausedata',
					label: {
						text: '扩展字段22'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw23TpCgclausedata',
					label: {
						text: '扩展字段23'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw24TpCgclausedata',
					label: {
						text: '扩展字段24'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw25TpCgclausedata',
					label: {
						text: '扩展字段25'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw26TpCgclausedata',
					label: {
						text: '扩展字段26'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw27TpCgclausedata',
					label: {
						text: '扩展字段27'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw28TpCgclausedata',
					label: {
						text: '扩展字段28'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw29TpCgclausedata',
					label: {
						text: '扩展字段29'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw30TpCgclausedata',
					label: {
						text: '扩展字段30'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw31TpCgclausedata',
					label: {
						text: '扩展字段31'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw32TpCgclausedata',
					label: {
						text: '扩展字段32'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw33TpCgclausedata',
					label: {
						text: '扩展字段33'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw34TpCgclausedata',
					label: {
						text: '扩展字段34'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw35TpCgclausedata',
					label: {
						text: '扩展字段35'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw36TpCgclausedata',
					label: {
						text: '扩展字段36'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw37TpCgclausedata',
					label: {
						text: '扩展字段37'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw38TpCgclausedata',
					label: {
						text: '扩展字段38'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw39TpCgclausedata',
					label: {
						text: '扩展字段39'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw40TpCgclausedata',
					label: {
						text: '扩展字段40'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw41TpCgclausedata',
					label: {
						text: '扩展字段41'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw42TpCgclausedata',
					label: {
						text: '扩展字段42'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				//			{
				//				dataField:'cIdTpCgclausedata',
				//				label:{
				//					text:'主键'
				//				},
				//      editorOptions: {
				//      showClearButton: true,
				//						},
				//		validationRules: [		{
				//			type: 'stringLength',max:200,min:0,
				//			message: '长度超限，最长为200！'
				//		},		]
				//					},
				{
					dataField: 'cSw43TpCgclausedata',
					label: {
						text: '扩展字段43'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw44TpCgclausedata',
					label: {
						text: '扩展字段44'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				//			{
				//				dataField:'cTimestampTpCgclausedata',
				//				label:{
				//					text:'时间戳'
				//				},
				//      editorType: 'dxDateBox',
				//      editorOptions: {
				//      displayFormat: 'yyyy-MM-dd',
				//      type: 'datetime',
				//						},
				//		validationRules: [		]
				//					},
				{
					dataField: 'cSw45TpCgclausedata',
					label: {
						text: '扩展字段45'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw46TpCgclausedata',
					label: {
						text: '扩展字段46'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw47TpCgclausedata',
					label: {
						text: '扩展字段47'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw48TpCgclausedata',
					label: {
						text: '扩展字段48'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
				{
					dataField: 'cSw49TpCgclausedata',
					label: {
						text: '扩展字段49'
					},
					editorType: "dxTextArea",
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为200！'
					},]
				},
			]
		}).dxForm('instance')
		$('#addsure').dxButton({
			text: '确定',
			icon: 'todo',
			validationGroup: validationGroupName,
			onClick: function (e) {
				let validateResult = e.validationGroup.validate();
				if (!validateResult.isValid) {
					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
					return;
				}
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
				msg.data.clauseM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {

				var result = DevExpress.ui.dialog.confirm("您确定要修改添加吗?", "修改添加确认");
				result.done(function (dialogResult) {
					if (dialogResult) {
						cake.Ui.LoadPanel.show()
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/M1S11UA'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
//								var websocketData = ['[{"objId":"CLAUSE_websocket","funName":"CLAUSE","funType":"M1S11","tbName":"TP_CGCLAUSEDATA","dataId":"AUD"}]']
//								send(websocketData)
								M1S11_serDel();
							addIns.hide();
							} else {
								DevExpress.ui.notify(data.msg, 'error', 3000)
								return;
							}
						},
						error: function () {
							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
							// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
							//e.cancel=true;         
						}
					})
				
						}
						cake.Ui.LoadPanel.close();
					})
				}
			}
		})
		$('#addcansel').dxButton({
			text: '取消',
			icon: 'remove',
			onClick: function () {
				addIns.hide()
			}
		})
	}
	//Script ------------------------------------
}) 		    