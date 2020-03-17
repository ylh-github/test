///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let addGang = [];
let tabledataS2 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let workFlowUrl = 'http://192.168.1.114:8480/mesplat/btn/send';
var contextMenuItems = [{
	text: '选择',
	icon: 'dx-icon-add'
}, ];
let adddata = {}; //添加按钮需要的数据源
let addIns; //增加操作时候的模态框实例
//设置模态框的属性
if (addIns == null) {
	addIns = $('#addmotai ').dxPopup({
		'visible': false, //设置属性不可见
		height: 300, //设置高度
		width: 450, //设置宽度
	}).dxPopup('instance');
}
let cCompname;
let cSuppcode;
let cUsername;
let cPassword;
let fhdzt = []
let importPopup
let change = ''; //区分增加和修改的状态,1为增加;2为修改
//查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
$(function () {
	start() //调用初始化函数//websocket开始

//	var userId = 'GY_WZ_websocket';
//	var websocket;
//	if ('WebSocket' in window) {
//		console.log('此浏览器支持websocket');
//		websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/' + userId);
//	} else if ('MozWebSocket' in window) {
//		alert('此浏览器只支持MozWebSocket');
//		websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/' + userId);
//	} else {
//		alert('此浏览器只支持SockJS');
//		websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/' + userId);
//	}
//	websocket.onopen = function (evnt) {
//		console.log('链接服务器成功!')
//		var data = ['[{"objId":"GY_WZ_websocket","funName":"GY_WZ","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"A"}',
//			'{"objId":"GY_WZ_websocket","funName":"GY_WZ","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"A"}',
//			'{"objId":"GY_WZ_websocket","funName":"GY_WZ","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"A"}]'
//		]
//		send(data)
//	};
//	websocket.onmessage = function (evnt) {
//		var json = eval('(' + evnt.data + ')');
//		eval(json.dataType)
//		console.log(json)
//	};
//	websocket.onerror = function (evnt) {};
//	websocket.onclose = function (evnt) {
//		console.log('与服务器断开了链接!')
//	}
//
//	function send(data) {
//		if (websocket != null) {
//			websocket.send(data);
//		} else {
//			alert('未与服务器链接.');
//		}
//	}

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
		items: [{
				dataField: 'cCreatetimeTbSuppmateral_star',
				label: {
					text: '开始时间'
				},
				editorOptions: {
					type: 'date',
					value: new Date(),
					displayFormat: 'yyyy-MM-dd'
				}
			},
			{
				dataField: 'cCreatetimeTbSuppmateral_end',
				label: {
					text: '结束时间'
				},
				editorOptions: {
					type: 'date',
					value: new Date(),
					displayFormat: 'yyyy-MM-dd'

				}
			},
			{
            	dataField: 'cSw13TbSuppmateral',
            	label: {
            		text: '发货单情况'
            	},
            	editorType: 'dxSelectBox',
            	editorOptions: {
            		//以上完成对没有联动数据源配置
            		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            		dataSource: fhdzt,
            		valueExpr: 'cSubitemid',
            		displayExpr: 'cSubitemdes',
            		searchEnable: true,
            		showClearButton: true,
            	},
            },
			{
                dataField: 'cConnumTbSuppmateral',
                label: {
                    text: '合同号'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
            {
                dataField: 'cCompnameTbSupuser',
                label: {
                    text: '当前供应商'
                },
                editorOptions: {
                    showClearButton: true,
                    readOnly: true,
                }
            },
            {
                dataField: 'cUsernamTbSupuser',
                label: {
                    text: '当前用户'
                },
                editorOptions: {
                    showClearButton: true,
                    readOnly: true,
                }
                
            },
//            {
//                itemType: "button",
//                buttonOptions: {
//                    icon: "close",
//                    text: '退出',
//                    onClick: function () {
//                    	custom_close()
//                    }
//                }
//            }
//            {
//                dataField: 'cDeptapply',
//                label: {
//                    text: '申请部门'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    // 以上完成对没有联动数据源配置
//                    // 以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: TP_CGORDERMT_C_DEPTAPPLY,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                    readOnly: true,
//                }
//            },
		]
	}).dxForm('instance')
	//完成对查询条件的自动生成
	////////////////////////////////////////////////////
	////生成按钮层//////////////////////////////////////
	////////////////////////////////////////////////////
//	function custom_close() {
//			var result = DevExpress.ui.dialog.confirm("您确定要退出吗?", "退出确认");
//			
//			 result.done(function (dialogResult) {
////                         window.opener = null;
////                         window.open('', '_self');
////                         window.close();
//				 		window.location.reload();
//                         //清除session
//                         sessionStorage.clear();
//                         window.location.href = "index.html";    
//                         
//             })    
//     }
	 let operateFormS1buts = [{
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
				text: '添加发货单',
				onClick: function () {
					
					let grid = $('#dataGridS1').dxDataGrid('instance');
                    let rowsData = grid.getSelectedRowsData()[0]
                    let selectedRowKeys = grid.getSelectedRowKeys()
//                    if (selectedRowKeys.length < 1) {
//                        DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                        return;
//                    }
					change = '1';
					$('#addmotai').show()
					addIns = $('#addmotai').dxPopup({
						width: function () {
							return innerWidth - 50
						},
						height: function () {
							return innerHeight - 50
						}
					}).dxPopup('instance')
					addIns.option('title', '新增发货单')
					addIns.show();
					M1S11_addfun();
					
//					console.log(addmonigrid)
//					console.log(tcConnum)
					$('#addForm').dxForm('instance').getEditor('cConnumTbSuppmateral').option('value',tcConnum);
					$('#addmoni2').dxDataGrid('instance').option('dataSource', addmonigrid);
                	$('#addmoni2').dxDataGrid('instance').refresh()
					
//					M1S11addIns.option('formData', new Object())
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
				name: 'M1S11Q',
				icon: 'plus',
				text: '发货单导入',
				onClick: function() {
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys = grid1.getSelectedRowKeys()
					let rowsData = grid1.getSelectedRowsData()
					//脚本执行  
//					if (selectedRowKeys.length < 1) {
//						DevExpress.ui.notify('请选择需要发货单的合同。', 'info', 3000);
//						return;
//					}
					//$('#import-content').show()
					importPopup = $('#import-content').dxPopup({
						deferRendering: false,
				          height: 200,
				          width: 600,
					}).dxPopup('instance');
					importPopup.show();
				
				}
			}
  	  }
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				icon: 'save',
//				text: '修改',
//				onClick: function () {
//					change = '2'
//					
//					let grid = $('#dataGridS1').dxDataGrid('instance');
//					let rowsData = grid.getSelectedRowsData()[0]
//					let selectedRowKeys = grid.getSelectedRowKeys()
//					if (selectedRowKeys.length < 1) {
//						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//						DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//						return;
//					}
//					if (selectedRowKeys.length > 1) {
//						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//						DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
//						return;
//					}
//					addIns = $('#addmotai').dxPopup({
//						//模态框增加name    
//						width: function () {
//							return innerWidth - 100
//						},
//						height: function () {
//							return innerHeight - 100
//						}
//					}).dxPopup('instance')
//					addIns.option('title', 'GY_WZ');
//					addIns.show();
//					// 调用模态框函数    
//					// updatafun()    
//					M1S11_Updatefun()
//					M1S11addIns.option('formData', rowsData)
//				}
//			}
//		}, {
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				icon: 'remove',
//				text: '删除',
//				onClick: function () {
//					
//					let grid1 = $('#dataGridS1').dxDataGrid('instance');
//					let selectedRowKeys = grid1.getSelectedRowKeys()
//					let rowsData = grid1.getSelectedRowsData()
//					//脚本执行  
//					if (selectedRowKeys.length < 1) {
//						DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//						return;
//					}
//					msg = {
//						ver: '53cc62f6122a436083ec083eed1dc03d',
//						session: '42f5c0d7178148938f4fda29460b815a',
//						tag: {},
//						data: {}
//					};
//					//前后端统一叫'tscLtrawbin' 
//
//					msg.data.gyWzM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//					msg.processKey = 'GY_WZ/M1S11D';
//					msg.data.processkey = 'GY_WZ_M1S11D';
//					console.log(msg)
//					var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
//					M1S11D_serDel_Judgment();
//					if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
//						msg.data.processkey = 'GY_WZ_M1S11D';
//						msg.processKey = 'GY_WZ/M1S11D';
//						  result.done(function (dialogResult) {
//	                            if (dialogResult) {
//	                                    cake.Ui.LoadPanel.show()
//	            						$.ajax({
//	            							url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S11D'),
//	            							dataType: 'json', //返回格式为json   
//	            							async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//	            							data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//	            							type: 'post', //请求方式 get 或者post , 
//	            							contentType: 'application/json',
//	            							success: function (data) {
//	            								let select = data.msg
//	            								if (data.errcode == 0) {
//	            									DevExpress.ui.notify(data.msg, 'success', 3000);
//	            									M1S11_serDel();
////	            									var websocketData = ['[{"objId":"GY_WZ_websocket","funName":"GY_WZ","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"AUD"}]']
////	            									send(websocketData)
//
//	            								} else {
//	            									DevExpress.ui.notify(data.msg, 'warning', 120000);
//	            								}
//	            							},
//	            							error: function () {
//	            								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//	            							}
//	            						})
//    
//	                                    
//	                            }
//	                            cake.Ui.LoadPanel.close()
//	                        })
//					}
//				}
//			}
//		},

	];
	let operateFormS2buts = [
//		{
//		location: "before",
//		locateInMenu: 'auto',
//		widget: "dxButton",
//		options: {
//			height: "auto",
//			width: "auto",
//			icon: "search",
//			name: 'M1S11Q',
//			text: '查询',
//			onClick: function () {
//				
//				M1S11_serDel();
//			}
//		}
//	}, {
//		location: "before",
//		locateInMenu: 'auto',
//		widget: "dxButton",
//		options: {
//			height: "auto",
//			width: "auto",
//			name: 'M1S11Q',
//			icon: 'plus',
//			text: '新增',
//			onClick: function () {
//				
//				let grid = $('#dataGridS1').dxDataGrid('instance');
//				let rowsData = grid.getSelectedRowsData()[0]
//				let selectedRowKeys = grid.getSelectedRowKeys()
////                    if (selectedRowKeys.length < 1) {
////                        DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
////                        return;
////                    }
//				change = '1';
//				$('#addmotai').show()
//				addIns = $('#addmotai').dxPopup({
//					width: function () {
//						return innerWidth - 50
//					},
//					height: function () {
//						return innerHeight - 50
//					}
//				}).dxPopup('instance')
//				addIns.option('title', '新增发货单')
//				addIns.show();
//				M1S11_addfun();
//				
////					console.log(addmonigrid)
//				console.log(tcConnum)
//				$('#addForm').dxForm('instance').getEditor('cConnumTbSuppmateral').option('value',tcConnum);
//				$('#addmoni2').dxDataGrid('instance').option('dataSource', addmonigrid);
//				$('#addmoni2').dxDataGrid('instance').refresh()
//				
////					M1S11addIns.option('formData', new Object())
//			}
//		}
//	}, 
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
				let selectedRowKeys = grid.getSelectedRowKeys()
				if (selectedRowKeys.length < 1) {
					// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
					DevExpress.ui.notify('请选择要修改数据的合同。', 'info', 3000);
					return;
				}
				let grid2 = $('#dataGridS2').dxDataGrid('instance');
				let selectedRowKeys2 = grid2.getSelectedRowKeys()
				if (selectedRowKeys2.length < 1) {
					// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
					DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
					return;
				}
				msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {},
					};
					//change等于1为添加         
				
				msg.data.gyWzM1s1 = selectedRowKeys2;
				var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
						$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S11U'),
							dataType: 'json', //返回格式为json           
							async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
							data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
							type: 'post', //请求方式 get 或者post ,         
							contentType: 'application/json',
							success: function (data) {
								let select = data.msg
								if (data.errcode == 0) {
									DevExpress.ui.notify(data.msg, 'success', 3000)
								} else {
									DevExpress.ui.notify(data.msg, 'error', 120000)
									return;
								}
								S1S21_SSRT()
							},
							error: function () {
								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
								// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
								//e.cancel=true;         
							}
						})
//				addIns = $('#addmotai').dxPopup({
//					//模态框增加name    
//					width: function () {
//						return innerWidth - 100
//					},
//					height: function () {
//						return innerHeight - 100
//					}
//				}).dxPopup('instance')
//				addIns.option('title', 'GY_WZ');
//				addIns.show();
//				// 调用模态框函数    
//				// updatafun()    
//				M1S11_Updatefun()
//				M1S11addIns.option('formData', rowsData)
			}
		}
	}, {
		location: "before",
		locateInMenu: 'auto',
		widget: "dxButton",
		options: {
			height: "auto",
			width: "auto",
			icon: 'remove',
			text: '删除',
			onClick: function () {
				
				let grid = $('#dataGridS1').dxDataGrid('instance');
				let selectedRowKeys = grid.getSelectedRowKeys()
				let rowsData = grid.getSelectedRowsData()
				//脚本执行  
				if (selectedRowKeys.length < 1) {
					DevExpress.ui.notify('请选择要删除数据的合同。', 'info', 3000);
					return;
				}
				let grid2 = $('#dataGridS2').dxDataGrid('instance');
				let selectedRowKeys2 = grid2.getSelectedRowKeys()
				//脚本执行  
				if (selectedRowKeys2.length < 1) {
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
				
				msg.data.gyWzM1s1 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
				console.log(msg)
				var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
				M1S11D_serDel_Judgment();
				if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
					msg.data.processkey = 'GY_WZ_M1S11D';
					msg.processKey = 'GY_WZ/M1S11D';
					result.done(function (dialogResult) {
						if (dialogResult) {
							cake.Ui.LoadPanel.show()
							$.ajax({
								url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S11D'),
								dataType: 'json', //返回格式为json   
								async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
								data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
								type: 'post', //请求方式 get 或者post , 
								contentType: 'application/json',
								success: function (data) {
									let select = data.msg
									if (data.errcode == 0) {
										S1S21_SSRT();
										M1S11_serDel();
										DevExpress.ui.notify(data.msg, 'success', 3000);
									} else {
										DevExpress.ui.notify(data.msg, 'warning', 120000);
									}
									
								},
								error: function () {
									DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
								}
							})
							
							
						}
						cake.Ui.LoadPanel.close()
					})
				}
			}
		}
	},
	
	];

	////////////////////////////////////
	//////表格属性生成/////////////////)
	////////////////////////////////////
	var dataGridS1columns = [
		{
            dataField: 'cConnum',
            caption: '合同号',
        },
        {
            dataField: 'cSw03',
            caption: '货物名称',
            width: 120,
            alignment: 'center',
        },
        {
            dataField: 'cSupplier',
            caption: '供应商',
        },
//        {
//            dataField: 'cSw10',
//            caption: '采购员',
//            calculateDisplayValue: function(rowData) {
//                let matchedItem = cgy.find(item => item.cSubitemid == rowData.cSw10);
//                if (matchedItem == null || matchedItem == undefined) {
//                    return "";
//                } else {
//                    return matchedItem.cSubitemdes;
//                }
//            }
//        },
//        {
//            dataField: 'cCludecom',
//            caption: '签订公司',
//            calculateDisplayValue: function(rowData) {
//                let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cCludecom);
//                if (matchedItem == null || matchedItem == undefined) {
//                    return "";
//                } else {
//                    return matchedItem.cSubitemdes;
//                }
//            }
//        },
        {
            dataField: 'cCludetime',
            caption: '签订时间',
            dataType: "date",
            format: "yyyy-MM-dd"
        },
        {
            dataField: 'cDr',
            caption: '预计到货时间',
            dataType: "date",
            format: "yyyy-MM-dd"
        },
        {
            dataField: 'cConmoney',
            caption: '合同金额',
        },
        {
            dataField: 'cSw01',
            caption: '已付款金额',
        },
        {
            dataField: 'cSw02',
            caption: '未付款金额',
        },
        {
            dataField: 'cPayway',
            caption: '付款方式',
            width:240,
        },
        {
            dataField: 'cCludeaddr',
            caption: '送货地点',
        }, 
        {
            dataField: 'cGettime',
            caption: '最后到货时间',
            dataType: "date",
            format: "yyyy-MM-dd"
        },
        {
          dataField: 'cSw13',
          caption: '发货单状态',
          calculateDisplayValue: function(rowData) {
              let matchedItem = fhdzt.find(item => item.cSubitemid == rowData.cSw13);
              if (matchedItem == null || matchedItem == undefined) {
                  return "";
              } else {
                  return matchedItem.cSubitemdes;
              }
          }
      },
//        {
//            dataField: 'cSw12',
//            caption: '提前/延迟',
//        }, 
//        {
//            dataField: 'cCheckway',
//            caption: '到货情况',
//            calculateDisplayValue: function(rowData) {
//                let matchedItem = dhqk.find(item => item.cSubitemid == rowData.cCheckway);
//                if (matchedItem == null || matchedItem == undefined) {
//                    return "";
//                } else {
//                    return matchedItem.cSubitemdes;
//                }
//            }
//        },
//        {
//            dataField: 'cSignstep',
//            caption: '付款情况',
//            calculateDisplayValue: function(rowData) {
//                let matchedItem = fkqk.find(item => item.cSubitemid == rowData.cSignstep);
//                if (matchedItem == null || matchedItem == undefined) {
//                    return "";
//                } else {
//                    return matchedItem.cSubitemdes;
//                }
//            }
//        },
//        {
//            dataField: 'cTransway',
//            caption: '开票信息',
//            calculateDisplayValue: function(rowData) {
//                let matchedItem = kpxx.find(item => item.cSubitemid == rowData.cTransway);
//                if (matchedItem == null || matchedItem == undefined) {
//                    return "";
//                } else {
//                    return matchedItem.cSubitemdes;
//                }
//            }
//        },
//        {
//        	dataField: 'cState',
//        	caption: '状态',
//        	calculateDisplayValue: function(rowData) {
//        		let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);
//        		if (matchedItem == null || matchedItem == undefined) {
//        			return "";
//        		} else {
//        			return matchedItem.cSubitemdes;
//        		}
//        	}
//        },
//        {
//            dataField: 'cId',
//            caption: '合同编号',
//            width: 1,
//            alignment: 'center',
//        },
	]

	$('#dataGridS1').dxDataGrid({
		deferRendering: false,
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
		height: '100%',
		paging: {
			enabled: false
		},
		scrolling: {
			mode: 'virtual'
		},
		selection: {
//			mode: 'multiple'
			mode: 'single'
		},

		columns: dataGridS1columns,

		onToolbarPreparing: function (e) {
			operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));
		}
	}).dxDataGrid('instance');




	//表2字段
	var dataGridS2columns = [
				
		//		{
		//			dataField: 'cNoTbSuppmateral',
		//			caption: '序号',
		//		},
		{
			dataField: 'cConnumTbSuppmateral',
			caption: '合同号',
			allowEditing: false,
		},
		{
			dataField: 'cOrdernumTbSuppmateral',
			caption: '发货单号',
			allowEditing: false,
		},
		{
			dataField: 'cGoodsnameTbSuppmateral',
			caption: '货物名称',
		},
		{
			dataField: 'cSpecTbSuppmateral',
			caption: '规格型号',
		},
		{
			dataField: 'cUnitTbSuppmateral',
			caption: '单位',
		},
		{
			dataField: 'cNumTbSuppmateral',
			caption: '数量',
		},
		{
			dataField: 'cBoxnoTbSuppmateral',
			caption: '集装箱号',
		},
		{
			dataField: 'cCarshipnoTbSuppmateral',
			caption: '车/船号',
		},
		{
			dataField: 'cSenderTbSuppmateral',
			caption: '发货人',
		},
		{
			dataField: 'cSendcompTbSuppmateral',
			caption: '发货单位',
		},
		{
			dataField: 'cSendaddressTbSuppmateral',
			caption: '发货单位地址',
		},
		{
			dataField: 'cReceivcompTbSuppmateral',
			caption: '收货单位名称',
		},
		{
			dataField: 'cContacterrTbSuppmateral',
			caption: '发货联系人',
		},
		{
			dataField: 'cContphoneTbSuppmateral',
			caption: '发货联系电话',
		},
		{
			dataField: 'cSendtimeTbSuppmateral',
			caption: '发货时间',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
		{
			dataField: 'cReceiverTbSuppmateral',
			caption: '收货人',
		},
		{
			dataField: 'cReceaddressTbSuppmateral',
			caption: '收货单位地址',
		},
		{
			dataField: 'cContacterTbSuppmateral',
			caption: '收方联系人',
		},
		{
			dataField: 'cContacttellTbSuppmateral',
			caption: '收方联系电话',
		},
		
		{
			dataField: 'cStateTbSuppmateral',
			caption: '物资状态',
			allowEditing: false,
		},
		{
			dataField: 'cArrtimeTbSuppmateral',
			caption: '到货日期',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
			
		{
			dataField: 'cCreaterTbSuppmateral',
			caption: '录入人',
			allowEditing: false,
		},
		{
			dataField: 'cCreatetimeTbSuppmateral',
			caption: '录入时间',
			dataType: "date",
			format: "yyyy-MM-dd",
			allowEditing: false,
		},
		
		{
			dataField: 'cRemarkTbSuppmateral',
			caption: '备注',
		},
		{
			dataField: 'cIdTbSuppmateral',
			caption: '物资主键',
			allowEditing: false,
			width:1
		},
		//		{
		//			dataField: 'cMtidTbSuppmateral',
		//			caption: '业务主键',
		//		},
		
		//		{
		//			dataField: 'cSw03TbSuppmateral',
		//			caption: '请购日期',
		//		},
		
	]

	$('#dataGridS2').dxDataGrid({
		dataSource: tabledataS2,                             
		columnResizingMode: "widget",
        editing: {
        	mode: 'cell',
            allowUpdating: true,
        },
        columnAutoWidth: true,
        showBorders: true,
        allowColumnResizing: true,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        noDataText: '',
        //允许脚本编写     
        height: '100%',
        width: '100%',
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'multiple'
        },
        loadPanel: {
            enabled: true
        },     

		columns: dataGridS2columns,
		onToolbarPreparing: function (e) {
			operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));
		}
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
				/*cCompname:null,
				cSuppcode:null,
				cUsername:null,
				cPassword:null*/
			}
		};
	
//		console.log(JSON.stringify(msg))
		//../../tdhc_suppsys/GY_WZ/M1S11QC
//		$.ajax({
//				url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/Mstart'),
//				dataType: 'json', //返回格式为json      
//				async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
//				data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
//				type: 'post', //请求方式 get 或者post ,       
//				contentType: 'application/json',
//				success: function (data) {
//					 if (data.errcode == 0) {
//						 searchdataFormM1.getEditor('cUsernamTbSupuser').option('value',cUsername);
//						 searchdataFormM1.getEditor('cCompnameTbSupuser').option('value',cCompname);
//					 }else{
//						 DevExpress.ui.notify(data.msg, 'error', 6000)
//	                     cake.Ui.LoadPanel.close();
//					 }
////					DevExpress.ui.notify(data.msg, 'success', 3000);
//				},
//				error: function () {
//					DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//					// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
//					//e.cancel=true;       
//				}
//			})
		initLoad1()
        function initLoad1() {
        	msg = {
        			ver: "53cc62f6122a436083ec083eed1dc03d",
        			session: "42f5c0d7178148938f4fda29460b815a",
        			tag: {},
        			data: {
        				"cItemid": "FHDZT"
        			}
        	};
        	console.log('23fsdf')
        	$.ajax({
        		type: "post",
        		url: Cake.Piper.getAuthUrl("../../tdhc_suppsys/CG_A001/selcon"),
        		data: JSON.stringify(msg),
        		contentType: "application/json",
        		dataType: "json",
        		success: function(result) {
        			result.data.forEach(item => {
        				fhdzt.push(item);
        			});
        		},
        		error: function() {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
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
			data: {}
		};
		let searchtiao = searchdataFormM1.option('formData')
		msg.data.gyWzM1s1 = [searchdataFormM1.option('formData')];
		let startTime = msg.data.gyWzM1s1[0].cCreatetimeTbSuppmateral_star;
		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = msg.data.gyWzM1s1[0].cCreatetimeTbSuppmateral_end;
		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
		M1S11Q_serDel_Judgment();
		console.log(msg)
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {} else {

			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S11QC'),
				dataType: 'json', //返回格式为json      
				async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post', //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {
					console.log(data.data)
					if (data.data == null) {
						tabledataS1.splice(0, tabledataS1.length);
						$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
						return
					}

					let select;
					select = data.data
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
	
	let addGang = [];
	let adddata1;

	function M1S11_addfun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [

				{
					dataField: 'cSendtimeTbSuppmateral',
					label: {
						text: '发货时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
                    dataField: 'cConnumTbSuppmateral',
                    label: {
                        text: '合同号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
//				{
//					dataField: 'cConnumTbSuppmateral',
//					label: {
//						text: '合同号'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength',
//						max: 4000,
//						min: 0,
//						message: '长度超限，最长为4000！'
//					}, ]
//				},
				{
					dataField: 'cOrdernumTbSuppmateral',
					label: {
						text: '发货单号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cReceivcompTbSuppmateral',
					label: {
						text: '收货单位名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				}, {
					dataField: 'cReceaddressTbSuppmateral',
					label: {
						text: '收货单位地址'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},


				{
					dataField: 'cContacterTbSuppmateral',
					label: {
						text: '收方联系人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				}, {
					dataField: 'cContacttellTbSuppmateral',
					label: {
						text: '收方联系电话'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cCarshipnoTbSuppmateral',
					label: {
						text: '车/船号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},

			]
		}).dxForm('instance');
let operateFormS2buts =[{
	location: "before",
		locateInMenu: 'auto',
		widget: "dxButton",
		options: {
			height: "auto",
			width: "auto",
			icon: 'plus',
			text: '添加',
			onClick: function () {
				$("#addmoni2").dxDataGrid('instance').addRow();

				// console.log($("#addmoni2").dxDataGrid('instance')._options.columns.dataField == 'cPirce')
				console.log($("#addmoni2").dxDataGrid('instance')._options.columns)



			}
		}
},{
	 location: "before",
	 	locateInMenu: 'auto',
		 widget: "dxButton",
		 options:{
			 height: "auto",
			 	width: "auto",
			 	icon: 'todo',
				 text: '确定',
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
				 	//物资详细
//					msg.data.gyWzM1s1 = $('#addmoni2').dxDataGrid('instance')._options.dataSource;
				 	msg.data.m1s1a1 = $('#addmoni2').dxDataGrid('instance')._options.dataSource;
					//发货人等
					 msg.data.gY_WZ_M1S12 = $('#addForm1').dxForm('instance').option('formData');
					 //收货人等
					msg.data.gyWZM1S13 = M1S11addIns.option('formData');
					console.log(msg.data.gyWzM1s1);
					console.log(msg.data.gY_WZ_M1S12);
					console.log(msg.data.gyWZM1S13);
				 	console.log(JSON.stringify(msg));
				 	//change等于1为添加         
				 	M1S11A_serDel_Judgment();
				 	if (M1S11A_serDel_mark != 'M1S11A_success') {} else {
				 		msg.data.processkey = 'GY_WZ_M1S11A';
				 		msg.processKey = 'GY_WZ/M1S11A';
						//../../tdhc_suppsys/GY_WZ/M1S11A
				 		$.ajax({
				 			url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S11A'),
				 			dataType: 'json', //返回格式为json           
				 			async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
				 			data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
				 			type: 'post', //请求方式 get 或者post ,         
				 			contentType: 'application/json',
				 			success: function (data) {
				 				let select = data.msg
				 				if (data.errcode == 0) {
				 					DevExpress.ui.notify(data.msg, 'success', 3000)
				 					/*var websocketData = ['[{"objId":"GY_WZ_websocket","funName":"GY_WZ","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"AUD"}]']
				 					send(websocketData)*/
				 				} else {
				 					DevExpress.ui.notify(data.msg, 'error', 120000)
				 					return;
				 				}
//				 				console.log(99999);
				 				M1S11_serDel();
//
				 				addIns.hide()

				 			},
				 			error: function () {
				 				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
				 				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
				 				//e.cancel=true;         
				 			}
				 		})
				 	}
				 }
		 }
}
]

		$("#addmoni2").dxDataGrid({
			// 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
			dataSource: "data/customers.json",
			dataSource: addGang,
			columnAutoWidth: true,
			showBorders: true,
			allowColumnResizing: true,
			showColumnLines: true,
			showRowLines: true,
			onCellHoverChanged: '#888',
			hoverStateEnabled: true,
			noDataText: '',
			width: '100%',
			height: 300,
			paging: {
				enabled: false
			},
			editing: {
				mode: "batch",
				allowUpdating: true
			},
			selection: {
				mode: "multiple"
//				mode:"single"
			},
			loadPanel: {
				enabled: true,
				text: '请稍等片刻...'
			},
			onToolbarPreparing: function (e) {
				operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

			},
			onEditingStart: function (e) {},
			columns: [
//				{
//					dataField: 'cNoTbSuppmateral',
//					caption: '序号',
//
//				},
				/* {
				     dataField: 'cId',
				     caption: '主键',
				     width: 150,
				     alignment: 'center',
				 },*/
				{
					dataField: 'cGoodsname',
					caption: '合同货物名称',

				},

				{
					dataField: 'cSpec',
					caption: '合同规格型号',
				},
				{
					dataField: 'cAcugoodsname',
					caption: '实际货物名称',

				},
				{
					dataField: 'cAcuspec',
					caption: '实际规格型号',
				},
				{
					dataField: 'cUnit',
					caption: '单位',
				},
				{
					dataField: 'cGoodsnum',
					caption: '数量',
				},

//				{
//					dataField: 'cSw01TbSuppmateral',
//					caption: '船/车号',
//				},
				{
					dataField: 'cBoxnoTbSuppmateral',
					caption: '箱号',
				},
				{
					dataField: 'cRemarkTbSuppmateral',
					caption: '备注',
				},

			],
			summary: {
				// 普通列求和
				totalItems: [{
					column: 'cNumTbSuppmateral', //计算哪列的值
					showInColumn: "cNumTbSuppmateral", //显示在哪列
					displayFormat: "总计:{0}", //显示格式
					// valueFormat: "currency",
					summaryType: "sum", //汇总类型--运算方式
					customizeText: function (e) {
						console.log(e.value)

						return `合计:${e.value}`
					}
				}],
			},
		})

		$('#addForm1').dxForm({
			formData: adddata1,
			validationGroup: validationGroupName,
			colCount: 2,
			items: [

				{
					dataField: 'cSendcompTbSuppmateral',
					label: {
						text: '发货单位名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				}, {
					dataField: 'cSendaddressTbSuppmateral',
					label: {
						text: '发货单位地址'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
			{
				dataField: 'cSenderTbSuppmateral',
				label: {
					text: '发货人'
				},
				editorOptions: {
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength',
					max: 4000,
					min: 0,
					message: '长度超限，最长为4000！'
				}, ]
			}, {
				dataField: 'cContphoneTbSuppmateral',
				label: {
					text: '发货人联系电话'
				},
				editorOptions: {
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength',
					max: 4000,
					min: 0,
					message: '长度超限，最长为4000！'
				}, ]
			},
			{
				dataField: 'cReceiverTbSuppmateral',
				label: {
					text: '收货人签字'
				},
				editorOptions: {
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength',
					max: 4000,
					min: 0,
					message: '长度超限，最长为4000！'
				}, ]
			},
			{
				dataField: 'cSenderTbSuppmateral',
				label: {
					text: '发货人签字'
				},
				editorOptions: {
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength',
					max: 4000,
					min: 0,
					message: '长度超限，最长为4000！'
				}, ]
			},
				{
					dataField: 'cArrtimeTbSuppmateral',
					label: {
						text: '日期'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cSenderTbSuppmateral',
					label: {
						text: '发货人盖章'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},

			]
		}).dxForm('instance');


		// $('#addsure').dxButton({
		// 	text: '确定',
		// 	icon: 'todo',
		// 	validationGroup: validationGroupName,
			
		// })
		$('#addcansel').dxButton({
			text: '取消',
			icon: 'remove',
			onClick: function () {
				addIns.hide()
			}
		})
	}


	$('#import_btn').dxForm({
    	width: "100%",
    	items: [
    		{	
    		itemType: "group",
    		colCount: 6,
    		items: [{
    			colSpan: 4,
    			itemType: "empty"
    		},
    		{
    			itemType: "button",
    			buttonOptions: {
    				icon: "todo",
    				text: "确定",
    				onClick: function() {
    					alert(11)
    					alert('11111111')
    					$.ajax({
    						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/ExcelConSt'),
    						type: 'POST',
    						dataType: 'json',
    						contentType: "application/json; charset=utf-8",
    						data: localStorage.getItem('updata'),
    						success: function(data) {
    							console.log(data.errcode)
    							if(data.errcode==0){
  	      							DevExpress.ui.notify(data.msg, "success", 5000);
  	      							importPopup.hide();
  	      							$("#upInput").val("");
    							}else{
    								$("#upInput").val("");
    								DevExpress.ui.notify(data.msg, "info", 7000);
    							}
    							localStorage.clear('updata');
    						},
    						error: function (err) {
    							DevExpress.ui.notify("导入失败", "error", 3000);
    							$("#upInput").val("");
    							localStorage.clear('updata');
    						}
    					})
    				}
    			}
    		},
    		{
    			itemType: "button",
    			buttonOptions: {
    				icon: "close",
    				text: "取消",
    				onClick: function() {
    					alert(111111)
    					importPopup.hide();
    				}
    			}
    		}
    		]
    	}]
    })
	function M1S11_Updatefun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
				
//				{
//					dataField: 'cNoTbSuppmateral',
//					label: {
//						text: '序号'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength',
//						max: 4000,
//						min: 0,
//						message: '长度超限，最长为4000！'
//					}, ]
//				},
				{
					dataField: 'cConnumTbSuppmateral',
					label: {
						text: '合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cOrdernumTbSuppmateral',
					label: {
						text: '发货单号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cGoodsnameTbSuppmateral',
					label: {
						text: '货物名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cSpecTbSuppmateral',
					label: {
						text: '规格型号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cUnitTbSuppmateral',
					label: {
						text: '单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cNumTbSuppmateral',
					label: {
						text: '数量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
//				{
//					dataField: 'cTotalnumTbSuppmateral',
//					label: {
//						text: '总数量'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength',
//						max: 4000,
//						min: 0,
//						message: '长度超限，最长为4000！'
//					}, ]
//				},
				
				{
					dataField: 'cBoxnoTbSuppmateral',
					label: {
						text: '集装箱号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cCarshipnoTbSuppmateral',
					label: {
						text: '船号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cSenderTbSuppmateral',
					label: {
						text: '发货人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cSendtimeTbSuppmateral',
					label: {
						text: '发货时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cReceivcompTbSuppmateral',
					label: {
						text: '收货单位名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cReceaddressTbSuppmateral',
					label: {
						text: '收货单位地址'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cContacterTbSuppmateral',
					label: {
						text: '收方联系人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				
				
				
				
				
				{
					dataField: 'cReceiverTbSuppmateral',
					label: {
						text: '收货人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				{
					dataField: 'cContacttellTbSuppmateral',
					label: {
						text: '收方联系电话'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
				
				{
					dataField: 'cStateTbSuppmateral',
					label: {
						text: '物资状态'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 1,
						min: 0,
						message: '长度超限，最长为1！'
					}, ]
				},
				{
					dataField: 'cArrtimeTbSuppmateral',
					label: {
						text: '到货日期'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cRemarkTbSuppmateral',
					label: {
						text: '备注'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 4000,
						min: 0,
						message: '长度超限，最长为4000！'
					}, ]
				},
//				{
//					dataField: 'cSw01TbSuppmateral',
//					label: {
//						text: '提交状态'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength',
//						max: 4000,
//						min: 0,
//						message: '长度超限，最长为4000！'
//					}, ]
//				},
//				{
//					dataField: 'cSw02TbSuppmateral',
//					label: {
//						text: '用途说明'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength',
//						max: 4000,
//						min: 0,
//						message: '长度超限，最长为4000！'
//					}, ]
//				},
//				{
//					dataField: 'cSw03TbSuppmateral',
//					label: {
//						text: '请购日期'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength',
//						max: 4000,
//						min: 0,
//						message: '长度超限，最长为4000！'
//					}, ]
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
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {} else {
					msg.data.processkey = 'GY_WZ_M1S11U';
					msg.processKey = 'GY_WZ/M1S11U';
					//../../tdhc_suppsys/GY_WZ/M1S11U
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S11U'),
						dataType: 'json', //返回格式为json           
						async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post', //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
//								var websocketData = ['[{"objId":"GY_WZ_websocket","funName":"GY_WZ","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"AUD"}]']
//								send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 120000)
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
	
	//联动
	 $('#dataGridS1').dxDataGrid({
	        onRowClick: function(e) {

	            S1S21_SSRT();//物资查询
	           
	        }

	    })
	    
	 function S1S21_SSRT() {
	        let aodthat = [];
	        msg = {
	            ver: '53cc62f6122a436083ec083eed1dc03d',
	            session: '42f5c0d7178148938f4fda29460b815a',
	            tag: {},
	            data: {}
	        };
	        msg.data.tpCgcontractmt = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
	        console.log(msg.data.tpCgcontractmt)
	        console.log(JSON.stringify(msg))
	        //cake.Ui.LoadPanel.show();
	        //console.log(msg.data.cgH001S1s2)
	        if(msg.data.tpCgcontractmt.length==0){
	        	DevExpress.ui.notify('请选择需要查询数据', 'info', 3000);
	        }else{
	        	//../../tdhc_cgsys/CG_H001/S1S21Q
	        	$.ajax({
	                url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S1S12'),
	                dataType: 'json', //返回格式为json  
	                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
	                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
	                type: 'post', //请求方式 get 或者post ,
	                contentType: 'application/json',
	                success: function(data) {
//	                	console.log(data.data);
	                	addmonigrid = data.data;
	                	tcConnum = data.data[0].cConnum
	                	console.log(tcConnum);
	                	console.log(addmonigrid)
//	                	
//	                	$('#addmoni2').dxDataGrid('instance').option('dataSource', dataGrid);
//	                	$('#addmoni2').dxDataGrid('instance').refresh()
//	                    if (data.data == null) {
//	                        addGang.splice(0, addGang.length);
//	                        $('#addmoni2').dxDataGrid('instance').option('dataSource', addGang)
//	                        return
//	                    }
//	                    let select;
//	                    select = data.data
//	                    addGang.splice(0, addGang.length);
//	                    select.forEach(item => addGang.push(item));
//	                    $('#addmoni2').dxDataGrid('instance').option('dataSource', addGang)
//	                    $('#addmoni2').dxDataGrid('instance').deselectAll()
//	                    $('#addmoni2').dxDataGrid('instance').refresh()
	                    cake.Ui.LoadPanel.close();
	                },
	                error: function() {
	                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
	                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
	                    //e.cancel=true;       
	                }
	            })
	            
	            $.ajax({
	                url: Cake.Piper.getAuthUrl('../../tdhc_suppsys/GY_WZ/M1S1S13'),
	                dataType: 'json', //返回格式为json  
	                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
	                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
	                type: 'post', //请求方式 get 或者post ,
	                contentType: 'application/json',
	                success: function(data) {
	                	console.log(data.data);
	                    if (data.data == null) {
	                        tabledataS2.splice(0, tabledataS2.length);
	                        $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
	                        DevExpress.ui.notify(data.msg, 'error', 6000);
	                        return
	                    }
	                    let select;
	                    select = data.data
	                    tabledataS2.splice(0, tabledataS2.length);
	                    select.forEach(item => tabledataS2.push(item));
	                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
	                    $('#dataGridS2').dxDataGrid('instance').deselectAll()
	                    $('#dataGridS2').dxDataGrid('instance').refresh()
	                     DevExpress.ui.notify(data.msg, 'success', 3000);
	                    cake.Ui.LoadPanel.close();
	                },
	                error: function() {
	                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
	                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
	                    //e.cancel=true;       
	                }
	            })
	        }
	    }
})
function importf(obj) {
    /*
    FileReader共有4种读取方法：
    1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
    2.readAsBinaryString(file)：将文件读取为二进制字符串
    3.readAsDataURL(file)：将文件读取为Data URL
    4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
    */
    if (!obj.files) {
        return;
    }
    var wb; //读取完成的数据
    var rABS = false; //是否将文件读取为二进制字符串
    var updata = {}; //储存读取出来的数据
    function fixdata(data) { //文件流转BinaryString
        var o = "",
            l = 0,
            w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        if (rABS) {
            wb = XLSX.read(btoa(fixdata(data)), { //手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        var tables = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        // var tables1 = JSON.stringify(tables.slice(0, 1));
        // var tables2 = JSON.stringify(tables.slice(2));
        // // 拼接两段数据
        tables = JSON.stringify(tables);
        tables = tables.replace(/合同编号/g,'cConnum');
        tables = tables.replace(/发货单号/g,'cOrdernum');
        tables = tables.replace(/货物名称/g,'cGoodsname');
        tables = tables.replace(/规格型号/g,'cSpec');
        tables = tables.replace(/单位/g,'cUnit');
        tables = tables.replace(/数量/g,'cGoodsnum');
//        tables = tables.replace(/含税单价/g,'cPrice');
//        tables = tables.replace(/含税总价/g,'cSumprice');
//        tables = tables.replace(/备注/g,'cRemark');
//        tables = tables.replace(/采购员/g,'cManor');
        updata.data = {
//        		cNo:null,//存档号
//        		cTimeapply:null,//请购日期
//        		cOrdernum:null,//请购单号
//        		cComname:null,//请购项目
//        		cDeptapply:null,//请购部门
//        		cManapply:null,//请购人
//        		cGoodsname:null,//货物名称
//        		cSpec:null,//规格型号
//        		cUnit:null,//单位
//        		cNum:null,//请购数量
//        		cMustneed:null,//采购类型
//        		cSw02:null,//用途说明
//        		cArrtime:null,//需求时间
//        		cRemark:null,//备注
//        		cManor:null
        };
        let grid1 = $('#dataGridS1').dxDataGrid('instance');
        let selectedRowKeys = grid1.getSelectedRowKeys()
        updata.data.tpCgcontractmt=selectedRowKeys;
        updata.data.excel = {}
        updata.data.excel = JSON.parse(tables);
//        console.log.log(updata);
        localStorage.setItem('updata', JSON.stringify(updata));
    };
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}