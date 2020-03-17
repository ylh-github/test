///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let searchdataM2; //每个查询条件form的数据
let searchdataFormM2;
let cgy = [];//采购员
let qdgs = [];
let adddata = {}; //添加按钮需要的数据源
let addIns;   //增加操作时候的模态框实例
let addmonigrid;
let tcConnum;
let tcSw13;
let tcConmoney;
let tcSupplier;
let tcSupphone;
let tcCludecom;
let tcOutconnum;
let tcSupaddress;
//设置模态框的属性
if (addIns == null) {
	addIns = $('#addmotai ').dxPopup({
		'visible': false,  //设置属性不可见
		height: 300,  //设置高度
		width: 450,  //设置宽度
	}).dxPopup('instance');
}
let change = '';   //区分增加和修改的状态,1为增加;2为修改
//查询区域数据
let validationGroupName = 'validationGroupName';
let xxkState = [];//信息卡状态
let shrState = [];//制作人完成状态
let xxkWMState = [];
let tuidState = [];//退单状态
let make = [];
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
window.onload = () => {
    DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
    console.log('pp');
};
$(function () {
	start() //调用初始化函数//websocket开始

	//	var userId = 'CG_XXLY_websocket';
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
	//		var data = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"A"},]']
	//		send(data)
	//	};
	//	websocket.onmessage = function (evnt) {
	//		var jsons = eval('(' + evnt.data + ')');
	//		var result = DevExpress.ui.dialog.confirm(jsons.dataType + '数据有更新,需要刷新吗？', 'T1温馨提示:CG_XXLY');
	//		result.done(function (dialogResult) {
	//			if (dialogResult) {
	//				var json = eval('(' + evnt.data + ')');
	//				eval(json.dataType)
	//				console.log(json)
	//			}
	//		})
	//	};
	//	websocket.onerror = function (evnt) { };
	//	websocket.onclose = function (evnt) {
	//		console.log('与服务器断开了链接!')
	//	}
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
			md: 3,
			sm: 2,
			xs: 1,
		},
		//所有查询条件为一组的代码段
		itemType: 'group',
		items: [
			{
				dataField: 'cCreatetime_star',
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
				dataField: 'cCreatetime_end',
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
				dataField: 'cConnum',
				label: {
					text: '内贸合同号'
				},
				editorOptions: {
					showClearButton: true,
				}
			},
			{
				dataField: 'cCheckstate',
				label: {
					text: '审核状态'
				},
				editorType: 'dxSelectBox',
				editorOptions: {
					//以上完成对没有联动数据源配置
					//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
					dataSource: xxkWMState,
					valueExpr: 'cSubitemid',
					displayExpr: 'cSubitemdes',
					searchEnable: true,
					showClearButton: true,
				},
			},
//			{
//				dataField: 'cBackstate',
//				label: {
//					text: '退单状态'
//				},
//				editorType: 'dxSelectBox',
//				editorOptions: {
//					//以上完成对没有联动数据源配置
//					//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//					dataSource: tuidState,
//					valueExpr: 'cSubitemid',
//					displayExpr: 'cSubitemdes',
//					searchEnable: true,
//					showClearButton: true,
//				},
//			},
			
		]
	}).dxForm('instance');

	searchdataFormM2 = $('#searchFormM2').dxForm({
		deferRendering: false,

		formData: searchdataM2,
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
				dataField: 'cConnum',
				label: {
					text: '内贸合同号'
				},
				editorOptions: {
					showClearButton: true,
				}
			},
			{
				dataField: 'cGoodsname',
				label: {
					text: '物资名称'
				},
				editorOptions: {
					showClearButton: true,
				}
			}
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
		}, 
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				name: 'M1S11Q',
//				icon: 'plus',
//				text: '添加',
//				onClick: function () {
//					change = '1';
//					$('#addmotai').show()
//					addIns = $('#addmotai').dxPopup({
//						width: 1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
//						height: 450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
//					}).dxPopup('instance')
//					addIns.option('title', 'CG_XXLY')
//					addIns.show();
//					M1S11_addfun();
//					M1S11addIns.option('formData', new Object())
//				}
//			}
//		}, 
		
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//
//				icon: 'remove',
//				text: '删除',
//				onClick: function () {
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
//						data: {
//						}
//					};
//					//前后端统一叫'tscLtrawbin' 
//
//					msg.data.cgXxlyM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//					console.log(msg)
//					M1S11D_serDel_Judgment();
//					if (M1S11D_serDel_mark != 'M1S11D_success') {
//					} else {
//						$.ajax({
//							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11D'), dataType: 'json',   //返回格式为json   
//							async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
//							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//							type: 'post',   //请求方式 get 或者post , 
//							contentType: 'application/json',
//							success: function (data) {
//								let select = data.msg
//								if (data.errcode == 0) {
//									DevExpress.ui.notify(data.msg, 'success', 3000);
//									M1S11_serDel();
//									//									var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
//									//									send(websocketData)
//
//								}
//								else {
//									DevExpress.ui.notify(data.msg, 'warning', 120000);
//								}
//							},
//							error: function () {
//								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//							}
//						})
//					}
//				}
//			}
//		},
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				icon: 'save',
//				text: '生成信息卡',
//				onClick: function () {
//					 let grid1 = $('#dataGridS1').dxDataGrid('instance');
//					 let selectedRowKeys = grid1.getSelectedRowKeys()
//					 let rowsData = grid1.getSelectedRowsData()
//					 //脚本执行  
//					 if (selectedRowKeys.length < 1) {
//					 	DevExpress.ui.notify('请选择对应的合同！！！。', 'info', 3000);
//					 	return;
//					 }
//
//					$('#addmotai').show()
//					addIns = $('#addmotai').dxPopup({
//						// width: function(){
//						// 	return innerWidth -50
//						// },                  //为了规范限制模态框大小//用脚本标识模态框的标题
//						// height: function(){
//						// 	return innerHeight -50
//						// },    
//						fullScreen: true               //为了规范限制模态框大小//用脚本标识模态框的标题
//					}).dxPopup('instance')
//					addIns.option('title', '信息卡')
//					addIns.show();
//					M1S11T_addfun();
//					console.log(addmonigrid);
//					console.log(tcOutconnum);
//					  $("#mAke").dxDataGrid('instance').option('dataSource', addmonigrid);
////					  $("#mAke2").dxDataGrid('instance').option('dataSource', addmonigrid);
//					  $('#addFormMT').dxForm('instance').getEditor('cConnumTbDocumeform').option('value',tcConnum);
//					  $('#addFormMT').dxForm('instance').getEditor('cConmoneyTbDocumeform').option('value',tcConmoney);
//					  $('#addFormMT').dxForm('instance').getEditor('cOutconnumTbDocumeform').option('value',tcSw13);
//					  $('#addFormMT').dxForm('instance').getEditor('cSupplierTbDocumeform').option('value',tcSupplier);
//					  $('#addFormMT').dxForm('instance').getEditor('cComphoneTbDocumeform').option('value',tcSupphone);
//					  $('#addFormMT').dxForm('instance').getEditor('cExporterTbDocumeform').option('value',tcCludecom);
//					  $('#addFormMT').dxForm('instance').getEditor('cOutconnumTbDocumeform').option('value',tcOutconnum);
//					  $('#addFormMT').dxForm('instance').getEditor('cSupaddressTbDocumeform').option('value',tcSupaddress);
//					$('#mAke').dxDataGrid('instance').refresh();
////					$('#mAke2').dxDataGrid('instance').refresh();
////					M1S11addIns.option('formData', new Object())
//
//				}
//			}
//		},
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: 'remove',
				text: '驳回',
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
						 Cake.Ui.Toast.showInfo('一次只能选择一条要驳回的数据。')    
						 DevExpress.ui.notify('一次只能选择一条要驳回的数据。', 'info', 3000);    
						return;
					}
					addIns = $('#addmotai2').dxPopup({
						//模态框增加name    
						width: 1000,
						height: 450
//						fullScreen: true,
					}).dxPopup('instance')
					addIns.option('title', '反驳');
					addIns.show();
					// 调用模态框函数    
					// updatafun()    
					M1S21_Updatefun();
					M1S21addIns.option('formData', rowsData)
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
				text: '印尼审核通过',
				onClick: function () {
					change = '3'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择一条要要审核的数据。', 'info', 3000);
						return;
					}
//					if (selectedRowKeys.length > 1) {
//						 Cake.Ui.Toast.showInfo('一次只能选择一条要审核的数据。')    
//						 DevExpress.ui.notify('一次只能选择一条要审核的数据。', 'info', 3000);    
//						return;
//					}
					if(rowsData.cCheckstate == 'xcc002'){
						DevExpress.ui.notify('该条已审核不能重复审核', 'info', 3000);
						return;
					}
					msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {
						}
					};	
					msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
					console.log();
					M1S11U_serDel_Judgment();	
					if (M1S11U_serDel_mark != 'M1S11U_success') {
					} else {
						var result = DevExpress.ui.dialog.confirm("您确定要提交吗?", "确认提交");
						result.done(function (dialogResult) {
							if (dialogResult) {
								cake.Ui.LoadPanel.show()
								//../../tdhc_cgsys/CG_MNHT/M1S11U2
								$.ajax({
									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11U_XXK2'), dataType: 'json',   //返回格式为json   
									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
									type: 'post',   //请求方式 get 或者post , 
									contentType: 'application/json',
									success: function (data) {
										let select = data.msg
										if (data.errcode == 0) {
											DevExpress.ui.notify(data.msg, 'success', 3000);
											M1S11_serDel();
											//var websocketData = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"M1S11","tbName":"TP_CGCONTRACTMTT","dataId":"AUD"}]']
											//send(websocketData)
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

			icon: 'print',
			text: '信息卡打印',
			onClick: function () {
				let grid1 = $('#dataGridS1').dxDataGrid('instance');
				let selectedRowKeys = grid1.getSelectedRowKeys()
				let rowsData = grid1.getSelectedRowsData()
				//脚本执行  
				if (selectedRowKeys.length < 1) {
					DevExpress.ui.notify('请选择一条要打印信息卡 的合同数据。', 'info', 3000);
					return;
				}
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {
					}
				};
				let msgdate = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
				let cConnum = msgdate.cConnum;
				console.log(msgdate.cConnum)
				let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=XXK_04.cpt&cConnum=" + cConnum;
				window.open(url, "_blank");
			}
		}
	},
//	{
//		location: "before",
//		locateInMenu: 'auto',
//		widget: "dxButton",
//		options: {
//			height: "auto",
//			width: "auto",
//
//			icon: 'remove',
//			text: '撤回',
//			onClick: function () {
//				let grid1 = $('#dataGridS1').dxDataGrid('instance');
//				let selectedRowKeys = grid1.getSelectedRowKeys()
//				let rowsData = grid1.getSelectedRowsData()
//				//脚本执行  
//				if (selectedRowKeys.length < 1) {
//					DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//					return;
//				}
//				msg = {
//					ver: '53cc62f6122a436083ec083eed1dc03d',
//					session: '42f5c0d7178148938f4fda29460b815a',
//					tag: {},
//					data: {
//					}
//				};
//				//前后端统一叫'tscLtrawbin' 
//				msg.data.tbDocumeform = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//				console.log(JSON.stringify(msg))
//				M1S11D_serDel_Judgment();
//				if (M1S11D_serDel_mark != 'M1S11D_success') {
//				} else {
//					var result = DevExpress.ui.dialog.confirm("您确定要撤回吗?", "确认");
//					result.done(function (dialogResult) {
//						if (dialogResult) {
//							cake.Ui.LoadPanel.show()
//					//../../tdhc_cgsys/CG_XXLY/M1S11D
//					$.ajax({
//						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11UP'), dataType: 'json',   //返回格式为json   
//						async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
//						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//						type: 'post',   //请求方式 get 或者post , 
//						contentType: 'application/json',
//						success: function (data) {
//							let select = data.msg
//							if (data.errcode == 0) {
//								DevExpress.ui.notify(data.msg, 'success', 3000);
//								M1S11_serDel();
//								//									var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
//								//									send(websocketData)
//
//							}
//							else {
//								DevExpress.ui.notify(data.msg, 'warning', 120000);
//							}
//						},
//						error: function () {
//							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//						}
//					})
//						}
//						cake.Ui.LoadPanel.close();
//					})		
//					
//				}
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
			icon: 'remove',
			text: '撤回',
			onClick: function () {
				change = '4'
				let grid = $('#dataGridS1').dxDataGrid('instance');
				let rowsData = grid.getSelectedRowsData()[0]
				let selectedRowKeys = grid.getSelectedRowKeys()
				if (selectedRowKeys.length < 1) {
					// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
					DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
					return;
				}
				if (selectedRowKeys.length > 1) {
//					 Cake.Ui.Toast.showInfo('一次只能选择一条要驳回的数据。')    
					 DevExpress.ui.notify('一次只能选择一条要的数据。', 'info', 3000);    
					return;
				}
				addIns = $('#addmotai2').dxPopup({
					//模态框增加name    
					width: 1000,
					height: 450
//					fullScreen: true,
				}).dxPopup('instance')
				addIns.option('title', '反驳');
				addIns.show();
				// 调用模态框函数    
				// updatafun()    
				M1S22_Updatefun();
				M1S21addIns.option('formData', rowsData)
			}
		}
	},
	];


	let operateFormS2buts = [
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
					M1S21_serDel();
				}
			}
		},
	]
	////////////////////////////////////
	//////表格属性生成/////////////////)
	////////////////////////////////////
	var dataGridS1columns = [
		{
			dataField: 'cConnum',
			caption: '内贸合同号',
		},
		{
			dataField: 'cConmoney',
			caption: '内贸金额',
		},
		{
			dataField: 'cOutconnum',
			caption: '外贸合同号',
		},
		{
			dataField: 'cOutmoney',
			caption: '外贸金额',
		},
		{
			dataField: 'cCheckstate',
			caption: '审核状态',
			//width: 100,
			calculateDisplayValue: function (rowData) {
				let matchedItem = shrState.find(item => item.cSubitemid == rowData.cCheckstate);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		{
			dataField: 'cBackstate',
			caption: '退单状态',
			//width: 100,
			calculateDisplayValue: function (rowData) {
				let matchedItem = tuidState.find(item => item.cSubitemid == rowData.cBackstate);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		{
			dataField: 'cSupplier',
			caption: '供应商',
		},
		{
			dataField: 'cWeight',
			caption: '总重量',
		},
		{
			dataField: 'cExporter',
			caption: '出口商',
		},
		{
			dataField: 'cComphone',
			caption: '联系电话',
		},
		{
			dataField: 'cShname',
			caption: '收货单位',
		},
		{
			dataField: 'cInvoicec',
			caption: '开票市',
		},
		{
			dataField: 'cInpbs',
			caption: '内贸采购业务主办',
		},
		{
			dataField: 'cOutpbs',
			caption: '外贸业务主办',
		},
		{
			dataField: 'cChiede',
			caption: '中国出口报关审核人单位',
		},
		{
			dataField: 'cIndida',
			caption: '印度尼西亚进口报关审核人',
		},
		{
			dataField: 'cDataedp',
			caption: '数据录用单证制作人',
		},
		{
			dataField: 'cDenycause',
			caption: '驳回原因',
			//width: 120,
		},
		{
			dataField: 'cDenyer',
			caption: '驳回人',
			//width: 120,
		},
		{
			dataField: 'cDenytime',
			caption: '驳回时间', dataType: "date",
			format: "yyyy-MM-dd",
			//width: 120,

		},
		{
			dataField: 'cBackcause',
			caption: '退单原因',
			//width: 120,
		},
		{
			dataField: 'cBacker',
			caption: '退单人',
			//width: 120,
		},
		{
			dataField: 'cBacktime',
			caption: '退单时间', dataType: "date",
			format: "yyyy-MM-dd",
			//width: 120,

		},
		{
			dataField: 'cCreater',
			caption: '创建人',
		},
		{
			dataField: 'cCreatetime',
			caption: '创建时间', dataType: "date",
			format: "yyyy-MM-dd",

		},
		{
			dataField: 'cModifier',
			caption: '创建人',
		},
		{
			dataField: 'cModifytime',
			caption: '修改时间', dataType: "date",
			format: "yyyy-MM-dd",

		},
		{
			dataField: 'cRemark',
			caption: '备注',
		},
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
		width: '100%',
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

	var dataGridS2columns = [
		{
			dataField: 'cGoodsname',
			caption: '品名',
			//width:100,
		},
		{
			dataField: 'cSpec',
			caption: '规格型号',
			//width:120,
		},
		{
			dataField: 'cUnit',
			caption: '成交单位',
			//width:70,
		},
		{
			dataField: 'cStaunit',
			caption: '法定单位',
			//width:70,
		},
		
		{
			dataField: 'cHscode',
			caption: 'HS编码',
			//width:100,
		},
		{
			dataField: 'cTypename',
			caption: '商品和服务分类简称',
			//width:130,
		},
		{
			dataField: 'cSupervision',
			caption: '海关监管条件',
			//width:120,
		},
		{
			dataField: 'cTaxrate',
			caption: '退税率',
			//width:80,
		},
		{
			dataField: 'cDeclaration',
			caption: '申报要素',
			//width:250,
		},
		
//		{
//			dataField: 'cState',
//			caption: '状态',
//		},
		
		
//		{
//			dataField: 'cModifier',
//			caption: '修改人',
//		},
		
//		{
//			dataField: 'cExporter',
//			caption: '出口商',
//		},
		
		{
			dataField: 'cName',
			caption: '品名',
			//width:100,
		},
		{
			dataField: 'cComtaxnumber',
			caption: '税号',
			//width:80,
		},
		
		{
			dataField: 'cBm',
			caption: 'BM',
			//width:60,
		},
		{
			dataField: 'cPpn',
			caption: 'PPN',
			//width:60,
		},
		{
			dataField: 'cPph',
			caption: 'PPH',
			//width:60,
		},
		{
			dataField: 'cTotaltaxr',
			caption: '合计税率',
			//width:60,
		},
		{
			dataField: 'cAgreedtax',
			caption: '协定税率',
			//width:60,
		},
		{
			dataField: 'cIndimport',
			caption: '印尼进口端管制条件',
			//width:130,
		},
		{
			dataField: 'cWhecoo',
			caption: '原产地备案跟进状况',
			//width:100,
		},
		{
			dataField: 'cRepein',
			caption: '替代税号',
			// width: 100,
			//alignment: 'center',
			// allowEditing: false,

		},
//		{
//			dataField: 'cShname',
//			caption: '收货单位',
//		},
//		{
//			dataField: 'cIndida',
//			caption: '印度尼西亚进口报关审核人',
//		},
//		{
//			dataField: 'cConmoney',
//			caption: '内贸金额',
//		},
//		{
//			dataField: 'cInpbs',
//			caption: '内贸采购业务主办',
//		},
		{
			dataField: 'cOutconnum',
			caption: '外贸合同号',
			//width:120,
		},
		{
			dataField: 'cConnum',
			caption: '内贸合同号',
			//width:120,
		},
		
//		{
//			dataField: 'cWeight',
//			caption: '重量',
//		},
//		{
//			dataField: 'cComphone',
//			caption: '联系电话',
//		},
		
//		{
//			dataField: 'cNum',
//			caption: '数量',
//		},
		
//		{
//			dataField: 'cInvoicec',
//			caption: '开票市',
//		},
//		{
//			dataField: 'cCreater',
//			caption: '创建人',
//		},
//		{
//			dataField: 'cCreatetime',
//			caption: '创建时间', dataType: "date",
//			format: "yyyy-MM-dd",
//
//		},
//		{
//			dataField: 'cSupplier',
//			caption: '供应商',
//		},
//		{
//			dataField: 'cRemark',
//			caption: '备注',
//		},
//		{
//			dataField: 'cModifytime',
//			caption: '修改时间', dataType: "date",
//			format: "yyyy-MM-dd",
//
//		},
	
	]
	$('#dataGridS2').dxDataGrid({
		deferRendering: false,
		dataSource: tabledataS2,
		 columnResizingMode: "widget",
		editing: {
			mode: 'popup',
//			allowUpdating: true,     
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
		width: '100%',
		paging: {
			enabled: false
		},
		scrolling: {
			mode: 'virtual'
		},
		selection: {
			mode: 'single'
//			mode: 'multiple'
		},
		

		 loadPanel: {
	            enabled: true
	        },
	        paging: {
	            pageSize: 100,
	            enabled: true,

	        },
	        pager: {
	            // showPageSizeSelector: true,
	            // allowedPageSizes: [5, 10, 20 , 25 ,30],
	            PageNavigator: true,
	            showInfo: true,
	            showNavigationButtons: true,
	            infoText: "{0}/{1} "
	        },
		columns: dataGridS2columns,
		onToolbarPreparing: function (e) {
			operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

		}
	}).dxDataGrid('instance');
	
	
	
	var dataGridS3columns = [
		{
			dataField: 'cConnum',
			caption: '合同号',
			//width: 120,
		},
		
		{
			dataField: 'cCheckstate',
			caption: '审核状态',
			//width: 80,
			calculateDisplayValue: function (rowData) {
				let matchedItem = shrState.find(item => item.cSubitemid == rowData.cCheckstate);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		}, 
		{
			dataField: 'cBackstate',
			caption: '退单状态',
			//width: 80,
			calculateDisplayValue: function (rowData) {
				let matchedItem = tuidState.find(item => item.cSubitemid == rowData.cBackstate);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		{
            dataField: 'cBackcause',
            caption: '退单原因',
           // width: 200,
        },
//		{
//			dataField: 'cSupplier',
//			caption: '供应商',
//		},
//		{
//			dataField: 'cSw10',
//			caption: '采购员',
//			calculateDisplayValue: function (rowData) {
//				let matchedItem = cgy.find(item => item.cSubitemid == rowData.cSw10);
//				if (matchedItem == null || matchedItem == undefined) {
//					return "";
//				} else {
//					return matchedItem.cSubitemdes;
//				}
//			}
//		},
		//            {
		//                dataField: 'cCludecom',
		//                caption: '签订公司',
		//                calculateDisplayValue: function(rowData) {
		//                    let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cCludecom);
		//                    if (matchedItem == null || matchedItem == undefined) {
		//                        return "";
		//                    } else {
		//                        return matchedItem.cSubitemdes;
		//                    }
		//                }
		//            },
		//            {
		//                dataField: 'cCludetime',
		//                caption: '签订时间',
		//                dataType: "date",
		//                format: "yyyy-MM-dd"
		//            },
		//            {
		//                dataField: 'cDr',
		//                caption: '预计到货时间',
		//                dataType: "date",
		//                format: "yyyy-MM-dd"
		//            },
		//            {
		//                dataField: 'cConmoney',
		//                caption: '合同金额',
		//            },
		//            {
		//                dataField: 'cSw01',
		//                caption: '已付款金额',
		//            },
		//            {
		//                dataField: 'cSw02',
		//                caption: '未付款金额',
		//            },
		//            {
		//                dataField: 'cPayway',
		//                caption: '付款方式',
		//                width:240,
		//            },
		//            {
		//                dataField: 'cCludeaddr',
		//                caption: '送货地点',
		//            },
		//            { 
		//				dataField: 'cCreater',
		//				caption: '创建人',
		//			},
		//            { 
		//				dataField: 'cCreatetime',
		//				caption: '创建时间',					dataType: "date",
		//				format: "yyyy-MM-dd",
		//
		//			},
		//            { 
		//				dataField: 'cModifier',
		//				caption: '修改人',
		//			},
		//			{ 
		//				dataField: 'cModifytime',
		//				caption: '修改时间',					dataType: "date",
		//				format: "yyyy-MM-dd",
		//
		//			},
	]
	//表3	
	$('#dataGridS3').dxDataGrid({
		deferRendering: false,

		dataSource: tabledataS3,
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
		width: '100%',
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

		columns: dataGridS3columns,

		//		onToolbarPreparing: function (e) { 
		//		operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item)); 
		//
		//		 } 
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
		console.log(msg)
		////////////////////////////////////////////////////////////////////////////////    
		//寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
		////////////////////////////////////////////////////////////////////////////////    
		initLoad1()
		function initLoad1() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "CGY"
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
						cgy.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		initLoad2()
		function initLoad2() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "xxkState"
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
						xxkState.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		initLoad4()
		function initLoad4() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "xxkCheckState"
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
						shrState.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		initLoad5()
		function initLoad5() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "TDSTATE"
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
						tuidState.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		
		initLoad6()
		function initLoad6() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "xxkWMState"
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
						xxkWMState.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		initLoad12()
		function initLoad12() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "QDGS"
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
						qdgs.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
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
		msg.data.tbDocumeform = [searchdataFormM1.option('formData')];
		let startTime = msg.data.tbDocumeform[0].cCreatetime_star;
		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = msg.data.tbDocumeform[0].cCreatetime_end;
		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999); M1S11Q_serDel_Judgment();
		console.log(JSON.stringify(msg))
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
			//     ../../tdhc_cgsys/CG_MNHT/M1S11Q2
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S15Q'),
				dataType: 'json',   //返回格式为json      
				async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post',   //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {
					console.log(data.data.tbDocumeform)
					if (data.data.tbDocumeform == null) {
						tabledataS1.splice(0, tabledataS1.length);
						$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
						return
					}

					let select;
					select = data.data.tbDocumeform
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
	function M1S21_serDel() {
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
				tpCgTime:{
					
				}
			}
		};
		let searchtiao = searchdataFormM1.option('formData')
		msg.data.cgMnhtM1s1 = [searchdataFormM1.option('formData')];
		let startTime = msg.data.cgMnhtM1s1[0].cCreatetime_star;
		msg.data.tpCgTime.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = msg.data.cgMnhtM1s1[0].cCreatetime_end;
		msg.data.tpCgTime.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999); M1S11Q_serDel_Judgment();
		//form2中的数据
		msg.data.tpCgcontractmt = searchdataFormM2.option('formData');
		
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
			//../../tdhc_cgsys/CG_XXLY/M1S11Q
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S21Q'),
				dataType: 'json',   //返回格式为json      
				async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post',   //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {
					console.log(data.data.tbDocumeformson)
					if (data.data.tbDocumeformson == null) {
						tabledataS2.splice(0, tabledataS2.length);
						$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
						DevExpress.ui.notify(data.msg, 'error', 6000);
						return
					}

					let select;
					select = data.data.tbDocumeformson
					tabledataS2.splice(0, tabledataS2.length);
					select.forEach(item => tabledataS2.push(item));
					$('#dataGridS2').dxDataGrid('instance').deselectAll()
					$('#dataGridS2').dxDataGrid('instance').refresh()
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
			colCount: 3,
			items: [
				{
					dataField: 'cIdTbDocumeform',
					label: {
						text: '主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw02TbDocumeform',
					label: {
						text: '扩展字段2'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSpecTbDocumeform',
					label: {
						text: '规格型号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cNumTbDocumeform',
					label: {
						text: '数量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cUnitTbDocumeform',
					label: {
						text: '成交单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cStaunitTbDocumeform',
					label: {
						text: '法定单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cHscodeTbDocumeform',
					label: {
						text: 'HS编码'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTypenameTbDocumeform',
					label: {
						text: '商品和服务分类简称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSupervisionTbDocumeform',
					label: {
						text: '监管条件'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTaxrateTbDocumeform',
					label: {
						text: '退税率'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cDeclarationTbDocumeform',
					label: {
						text: '申报要素'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cConnumTbDocumeform',
					label: {
						text: '内贸合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cConmoneyTbDocumeform',
					label: {
						text: '内贸金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cNameTbDocumeform',
					label: {
						text: '品名'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cOutconnumTbDocumeform',
					label: {
						text: '外贸合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cOutmoneyTbDocumeform',
					label: {
						text: '外贸金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cComtaxnumberTbDocumeform',
					label: {
						text: '税号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSupplierTbDocumeform',
					label: {
						text: '供应商'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cWeightTbDocumeform',
					label: {
						text: '重量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cBmTbDocumeform',
					label: {
						text: 'BM'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cInvoicecTbDocumeform',
					label: {
						text: '开票市'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cPpnTbDocumeform',
					label: {
						text: 'PPN'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cComphoneTbDocumeform',
					label: {
						text: '联系电话'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cPphTbDocumeform',
					label: {
						text: 'PPH'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cExporterTbDocumeform',
					label: {
						text: '出口商'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cWhecooTbDocumeform',
					label: {
						text: '原产地备案跟进状况'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTotaltaxrTbDocumeform',
					label: {
						text: '合计税率'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cShnameTbDocumeform',
					label: {
						text: '收货单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cIndimportTbDocumeform',
					label: {
						text: '印尼进口端管制条件'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cAgreedtaxTbDocumeform',
					label: {
						text: '协定税率'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cInpbsTbDocumeform',
					label: {
						text: '内贸采购业务主办'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cOutpbsTbDocumeform',
					label: {
						text: '外贸业务主办'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cChiedeTbDocumeform',
					label: {
						text: '中国出口报关审核人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cIndidaTbDocumeform',
					label: {
						text: '印度尼西亚进口报关审核人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cDataedpTbDocumeform',
					label: {
						text: '数据录用单证制作人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cRemarkTbDocumeform',
					label: {
						text: '备注'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cStateTbDocumeform',
					label: {
						text: '状态'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cDrTbDocumeform',
					label: {
						text: '删除标识'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTimestampTbDocumeform',
					label: {
						text: '时间戳'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cCreaterTbDocumeform',
					label: {
						text: '创建人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cCreatetimeTbDocumeform',
					label: {
						text: '创建时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cModifierTbDocumeform',
					label: {
						text: '修改人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cModifytimeTbDocumeform',
					label: {
						text: '修改时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cSw03TbDocumeform',
					label: {
						text: '扩展字段4'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw04TbDocumeform',
					label: {
						text: '扩展字段4'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw05TbDocumeform',
					label: {
						text: '扩展字段5'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw06TbDocumeform',
					label: {
						text: '扩展字段6'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw07TbDocumeform',
					label: {
						text: '扩展字段7'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw08TbDocumeform',
					label: {
						text: '扩展字段8'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw09TbDocumeform',
					label: {
						text: '扩展字段9'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw10TbDocumeform',
					label: {
						text: '扩展字段10'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw11TbDocumeform',
					label: {
						text: '扩展字段11'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw12TbDocumeform',
					label: {
						text: '扩展字段12'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw13TbDocumeform',
					label: {
						text: '扩展字段13'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw14TbDocumeform',
					label: {
						text: '扩展字段14'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw15TbDocumeform',
					label: {
						text: '扩展字段15'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw01TbDocumeform',
					label: {
						text: '扩展字段1'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cGoodsnameTbDocumeform',
					label: {
						text: '物资名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				}
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
				msg.data.cgXxlyM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11A_serDel_Judgment();
				if (M1S11A_serDel_mark != 'M1S11A_success') {
				} else {
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11A'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
								var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
								send(websocketData)
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
	function M1S21_Updatefun() {
//		console.log("反驳，反驳，反驳！！！！")
		M1S21addIns = $('#addForm2').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 2,
			items: [
				{
					dataField: 'cConnum',
					label: {
						text: '内贸合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					readOnly:true,
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'causecDeny',
					label: {
						text: '驳回原因'
					},
					editorOptions: {
						showClearButton: true,
					},
//					validationRules: [{
//						type: 'stringLength', max: 300, min: 0,
//						message: '长度超限，最长为300！'
//					},]
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
					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
					return;
				}
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
				msg.data.cgMnhtM1s1 = [M1S21addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {
					var result = DevExpress.ui.dialog.confirm("您确定要提交吗?", "确认提交");
					result.done(function (dialogResult) {
						if (dialogResult) {
							cake.Ui.LoadPanel.show()
							$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11U'),
							dataType: 'json',   //返回格式为json           
							async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
							type: 'post',   //请求方式 get 或者post ,         
							contentType: 'application/json',
							success: function (data) {
								let select = data.msg
								if (data.errcode == 0) {
									DevExpress.ui.notify(data.msg, 'success', 3000)
	//								var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
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
					cake.Ui.LoadPanel.close();
				})
				}
			}
		})
		$('#addcansel2').dxButton({
			text: '取消',
			icon: 'remove',
			onClick: function () {
				addIns.hide()
			}
		})
	}
	function M1S22_Updatefun() {
		M1S21addIns = $('#addForm2').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 2,
			items: [
				{
					dataField: 'cConnum',
					label: {
						text: '内贸合同号'
					},
					editorOptions: {
						showClearButton: true,
						readOnly:true,
					},
					
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cRecause',
					label: {
						text: '撤回原因'
					},
					editorOptions: {
						showClearButton: true,
					},
//					validationRules: [{
//						type: 'stringLength', max: 300, min: 0,
//						message: '长度超限，最长为300！'
//					},]
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
					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
					return;
				}
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
				msg.data.tbDocumeform = [M1S21addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {
					var result = DevExpress.ui.dialog.confirm("您确定要提交吗?", "确认提交");
					result.done(function (dialogResult) {
						if (dialogResult) {
							cake.Ui.LoadPanel.show()
						$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11UP'), dataType: 'json',   //返回格式为json   
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
						type: 'post',   //请求方式 get 或者post , 
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000);
								//									var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
								//									send(websocketData)

							}
							else {
								DevExpress.ui.notify(data.msg, 'warning', 120000);
							}
							M1S11_serDel();
							addIns.hide();
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
		})
		$('#addcansel2').dxButton({
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

	            S1S21_SSRT();//合同物资查询
	           
	        }

	    })
	
		 function S1S21_SSRT() {
	        let aodthat = [];
	        msg = {
	            ver: '53cc62f6122a436083ec083eed1dc03d',
	            session: '42f5c0d7178148938f4fda29460b815a',
	            tag: {},
	            data: {
	            	tpCgTime:{
	            		
	            	}
	            }
	        };
	        let searchtiao = searchdataFormM1.option('formData')
			msg.data.cgMnhtM1s1 = [searchdataFormM1.option('formData')];
			let startTime = msg.data.cgMnhtM1s1[0].cCreatetime_star;
			console.log(startTime);
			msg.data.tpCgTime.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
			console.log(msg.data.tpCgTime.startTime);
			let endTime = msg.data.cgMnhtM1s1[0].cCreatetime_end;
			msg.data.tpCgTime.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999); M1S11Q_serDel_Judgment();
	        //合同信息
	        msg.data.tpCgcontractmt = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
//	        console.log(msg.data.tpCgcontractmt)
	        console.log(JSON.stringify(msg))
	        if(msg.data.tpCgcontractmt.length==0){
	        	DevExpress.ui.notify('请选择相应的合同', 'info', 3000);
	        }else{
	        	//查合同物资
//	        	$.ajax({
//	                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S1S12'),
//	                dataType: 'json', //返回格式为json  
//	                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
//	                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
//	                type: 'post', //请求方式 get 或者post ,
//	                contentType: 'application/json',
//	                success: function(data) {
//	                	
//	                	console.log(data.data.cgXXK_Request);
//	                	addmonigrid = data.data.cgXXK_Request;
////	                	tcConnum = data.data[0].cConnum
//	                	//内贸合同号
//	                	tcConnum =data.data.cgXXK_Request[0].cConnum
//	                	//外贸合同号
//	                	tcSw13 = data.data.cgXXK_Request[0].cSw13
//	                	//内贸金额
//	                	tcConmoney = data.data.cgXXK_Request[0].cConmoney
//	                	//供应商
//	                	tcSupplier = data.data.cgXXK_Request[0].cSupplier
//	                	//供应商联系方式
//	                	tcSupphone = data.data.cgXXK_Request[0].cSupphone
//	                	//签订公司 
//	                	tcCludecom = data.data.cgXXK_Request[0].cCludecom
//	                	//外贸合同号
//	                	tcOutconnum = data.data.cgXXK_Request[0].cOutconnum
//	                	//供应商地址
//	                	tcSupaddress = data.data.cgXXK_Request[0].cSupaddress
//	                	let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
//	                    if (matchedItem == null || matchedItem == undefined) {
//	                        return "";
//	                    } else {
//	                    	tcCludecom = matchedItem.cSubitemdes
//	                    	console.log(tcCludecom);
////	                        return matchedItem.cSubitemdes;
//	                    }
//	                	
////	                	console.log(tcConnum);
////	                	console.log(addmonigrid)
//	                    cake.Ui.LoadPanel.close();
//	                },
//	                error: function() {
//	                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//	                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
//	                    //e.cancel=true;       
//	                }
//	            })
	            //查询信息卡
	            $.ajax({
	                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S21Q4'),
	                dataType: 'json', //返回格式为json  
	                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
	                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
	                type: 'post', //请求方式 get 或者post ,
	                contentType: 'application/json',
	                success: function(data) {
	                	console.log(data.data.tbDocumeformson);

						if (data.data.tbDocumeformson == null) {
							tabledataS2.splice(0, tabledataS2.length);
							$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
							DevExpress.ui.notify(data.msg, 'error', 3000);
							return
						}

						let select;
						select = data.data.tbDocumeformson
						tabledataS2.splice(0, tabledataS2.length);
						select.forEach(item => tabledataS2.push(item));
						$('#dataGridS2').dxDataGrid('instance').deselectAll()
						$('#dataGridS2').dxDataGrid('instance').refresh()
						DevExpress.ui.notify(data.msg, 'success', 3000);
						cake.Ui.LoadPanel.close();
					},
					error: function () {
						DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
						// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
						//e.cancel=true;   
	                }
	            })
	            
	            
	            
	        }
	    }
	//反馈联查
		$('#dataGridS3').dxDataGrid({
			onRowClick: function (e) {
				S3S32_SSRT()
			}

		})
		function S3S32_SSRT() {
			let aodthat = [];
			msg = {
				ver: '53cc62f6122a436083ec083eed1dc03d',
				session: '42f5c0d7178148938f4fda29460b815a',
				tag: {},
				data: {
				}
			};
			let grid = $('#dataGridS3').dxDataGrid('instance');
			let selectedRowKeys = grid.getSelectedRowKeys()
			msg.data.cgMnhtM1s1 = selectedRowKeys;
			console.log(JSON.stringify(msg))
//			cake.Ui.LoadPanel.show()
			//合同主表
					$.ajax({
					url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S3S32Q'),
					dataType: 'json',   //返回格式为json      
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
					type: 'post',   //请求方式 get 或者post ,       
					contentType: 'application/json',
					success: function (data) {

						if (data.data.cgMnhtM1s1 == null) {
							tabledataS1.splice(0, tabledataS1.length);
							$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
							return
						}

						let select;
						select = data.data.cgMnhtM1s1
						tabledataS1.splice(0, tabledataS1.length);
						select.forEach(item => tabledataS1.push(item));
						$('#dataGridS1').dxDataGrid('instance').deselectAll()
						$('#dataGridS1').dxDataGrid('instance').refresh()
						DevExpress.ui.notify(data.msg, 'success', 2000);
					},
					error: function () {
						DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
						// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
						//e.cancel=true;       
					}
				})
		}
	 

	function M1S11T_addfun() { 
		let operateFormS3buts = [
            {
                location: "before",
                locateInMenu: 'auto',
                widget: "dxButton",
                options: {
                    height: "auto",
                    width: "auto",
                    icon: 'plus',
                    text: '添加',
                    onClick: function () {
                        $("#mAke").dxDataGrid('instance').addRow();

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
                    	/*let rowsData = $("#addmoni2").dxDataGrid('instance').getSelectedRowsData()[0];
                    	let rowkey = $("#addmoni2").dxDataGrid('instance')._options.dataSource;
                    	rowkey.splice(rowsData);

                    	$("#addmoni2").dxDataGrid('instance').refresh()*/
                    	let rowsData = $("#mAke").dxDataGrid('instance').getSelectedRowsData();
                    	let dataSource = $("#mAke").dxDataGrid('instance').option('dataSource');

                    	let removeIndex = [];

                    	for (let index = 0; index < dataSource.length; index++) {

                    	if (rowsData.some(element => element == dataSource[index])) {
                    	removeIndex.push(index);
                    	}

                    	}

                    	removeIndex.reverse().forEach(element => dataSource.splice(element, 1));

                    	$("#mAke").dxDataGrid('instance').refresh()
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
                    text: '完成保存',
                    onClick:function(e){
                    	console.log(6666666);
                    	 msg = {
                                 ver: '53cc62f6122a436083ec083eed1dc03d',
                                 session: '42f5c0d7178148938f4fda29460b815a',
                                 tag: {},
                                 data: {
                                 },
                             };
                    	 msg.data.cgXXK_Request = $('#mAke').dxDataGrid('instance')._options.dataSource;
                    	 msg.data.cg_XXLY_M1S1 = $('#addFormMT').dxForm('instance').option('formData');
//                    	 console.log(msg.data.cgXXK_Request);
//                    	 console.log(msg.data.cg_XXLY_M1S1);
//                    	 console.log(JSON.stringify(msg));
                    	 $.ajax({
                    		 //../../tdhc_cgsys/tab/simContract
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S21A'),
                             dataType: 'json', //返回格式为json           
                             async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                             type: 'post', //请求方式 get 或者post ,         
                             contentType: 'application/json',
                             success: function (data) {
                            	 console.log(data)
                                 let select = data.msg
                                 if (data.errcode == 0) {
                                     DevExpress.ui.notify(select, 'success', 3000);
                                     
                                 }else {
				 					DevExpress.ui.notify(data.msg, 'error', 3000)
				 					return;
				 				}
                                 addIns.hide();
                             },
                             error: function () {
                                 DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);

                             }
                         }) 
					}
                }
            },
		];
		
		let operateFormS4buts = [
            {
                location: "before",
                locateInMenu: 'auto',
                widget: "dxButton",
                options: {
                    height: "auto",
                    width: "auto",
                    icon: 'plus',
                    text: '添加',
                    onClick: function () {
                    	$('#mAke2').dxDataGrid('instance').refresh()
//                    	$("#mAke").dxDataGrid('instance').addRow();

                    }
                }
            },
		];

		$("#mAke").dxDataGrid({
			// 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
			// dataSource: "data/customers.json",
			dataSource: make,
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
//				mode: "batch",
				mode:"cell",
				allowUpdating: true
			},
			selection: {
				mode: "multiple"
//				mode: "single"
			},
			loadPanel: {
				enabled: true,
				text: '请稍等片刻...'
			},
			onToolbarPreparing: function (e) {
				operateFormS3buts.forEach(item => e.toolbarOptions.items.push(item));

			},
			onEditingStart: function (e) { },
			columns: [
			{
				dataField: 'cGoodsname',
				caption: '品名',
				width: 120,
				alignment: 'center',
			},

			{
				dataField: 'cSpec',
				caption: '规格/型号',
				width: 120,
				alignment: 'center',
			},
			{
				dataField: 'cTypenameTbDocumeform',
				caption: '商品和服务分类简称',
				width: 120,
				alignment: 'center',
			},
			{
				dataField: 'cGoodsnum',
				caption: '数量',
				width: 50,
				alignment: 'center',
			},

			{
				dataField: 'cUnit',
				caption: '成交单位',
				width: 80,
				alignment: 'center',
			},
			{
				dataField: 'cStaunitTbDocumeform',
				caption: '法定单位',
				width: 60,
				alignment: 'center',
			},
			{
				dataField: 'cHscodeTbDocumeform',
				caption: 'HS编码',
				width: 100,
				alignment: 'center',

			},
			{
				dataField: 'cSupervisionTbDocumeform',
				caption: '监管条件',
				width: 100,
				alignment: 'center'
			},
			{
				dataField: 'cTaxrateTbDocumeform',
				caption: '退税率',
				 width: 100,
				alignment: 'center',
				// allowEditing: false,

			},
			{
				dataField: 'cDeclarationTbDocumeform',
				caption: '申报要素',
				alignment: 'center',
//				onEditingStart: function (e) {
//					console.log(e.column.dataField)
//
//					let dataField = e.column.dataField;
//					if (dataField == 'cConnum1098') {
//					addIns = $('#addmotai').dxPopup({
//					deferRendering: true,
//					fullScreen: true
//					}).dxPopup('instance');
//					$('#addmotai').css('display', "block")
//					addIns.option('title', 'BD_BUTTON')
//					addIns.show();
//					}
//					}
			},
			{
				dataField: 'cName',
				caption: '品名',
				width: 120,
				alignment: 'center',
			},

			{
				dataField: 'cComtaxnumber',
				caption: '税号',
				width: 120,
				alignment: 'center',
			},
			{
				dataField: 'cBm',
				caption: 'BM',
				width: 80,
				alignment: 'center',
			},
			{
				dataField: 'cPpn',
				caption: 'PPN',
				width: 80,
				alignment: 'center',
			},

			{
				dataField: 'cPph',
				caption: 'PPH',
				width: 80,
				alignment: 'center',
			},
			{
				dataField: 'cTotaltaxr',
				caption: '合计税率',
				width: 60,
				alignment: 'center',
			},
			{
				dataField: 'cAgreedtax',
				caption: '协定税率',
				width: 80,
				alignment: 'center',

			},
			{
				dataField: 'cIndimport',
				caption: '入印尼受限否',
				width: 100,
				alignment: 'center'
			},
			{
				dataField: 'cWhecoo',
				caption: '原产地备案跟进状况',
				 width: 100,
				alignment: 'center',
				// allowEditing: false,

			},
			],
		})


		M1S11addIns = $('#addFormMT').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
				{
					dataField: 'cConnumTbDocumeform',
					label: {
						text: '内贸合同号'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
						readOnly:true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cConmoneyTbDocumeform',
					label: {
						text: '内贸金额'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
						readOnly:true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
				dataField: 'cMoneyrmbDocumeform',
				label: {
					text: '货币（RMB）'
				},
				editorType: 'dxTextBox',
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'required',
					message: '必填！'
				},
				{
					type: 'stringLength',
					max: 1000,
					min: 0,
					message: '长度超限，最长为1000！'
				},
				]

			},
				{
					dataField: 'cSupplierTbDocumeform',
					label: {
						text: '供应商'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
						readOnly:true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cSupaddressTbDocumeform',
					label: {
						text: '供应商地址'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cInvoicecTbDocumeform',
					label: {
						text: '开票市'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cComphoneTbDocumeform',
					label: {
						text: '联系电话'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
						readOnly:true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cWeightTbDocumeform',
					label: {
						text: '重量'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cOutconnumTbDocumeform',
					label: {
						text: '外贸合同号'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
						readOnly:true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cOutmoneyTbDocumeform',
					label: {
						text: '外贸金额'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
						readOnly:true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cMoneyusdDocumeform',
					label: {
						text: '货币（USD）'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
//				  {
//	                dataField: 'cExporterTbDocumeform',
//	                caption: '出口商',
//	                calculateDisplayValue: function(rowData) {
//	                    let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cExporterTbDocumeform);
//	                    if (matchedItem == null || matchedItem == undefined) {
//	                        return "";
//	                    } else {
//	                        return matchedItem.cSubitemdes;
//	                    }
//	                }
//	            },
				{
					dataField: 'cExporterTbDocumeform',
					label: {
						text: '出口商'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
						readOnly:true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cShnameTbDocumeform',
					label: {
						text: '收货单位'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cInpbsTbDocumeform',
					label: {
						text: '内贸采购业务主办'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cOutpbsTbDocumeform',
					label: {
						text: '外贸业务主办'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cChiedeTbDocumeform',
					label: {
						text: '中国出口报关审核人'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cIndidaTbDocumeform',
					label: {
						text: '印度尼西亚进口报关审核人'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cDataedpTbDocumeform',
					label: {
						text: '数据录用单证制作人签收'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [{
						type: 'required',
						message: '必填！'
					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
//				{
//					colSpan: 2,
//					itemType: 'empty',
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
				msg.data.cgXxlyM1s1 = [M1S11addIns.option('formData')];
				console.log(55555555);
				//change等于1为添加         
				M1S11A_serDel_Judgment();
				if (M1S11A_serDel_mark != 'M1S11A_success') {
				} else {
					//../../tdhc_cgsys/CG_XXLY/M1S11A
					$.ajax({
						url: Cake.Piper.getAuthUrl(''),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
								var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
								send(websocketData)
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
	
	//信息卡反馈
	/*M1S31_serDel();*/
	function M1S31_serDel() {
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
			}
		};
		//		let searchtiao = searchdataFormM1.option('formData')    
		//		msg.data.cgMnhtM1s1 = [searchdataFormM1.option('formData')];
		//  let startTime = msg.data.cgMnhtM1s1[0].cCreatetime_star;
		//  msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		//  let endTime = msg.data.cgMnhtM1s1[0].cCreatetime_end;
		//  msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);M1S11Q_serDel_Judgment();
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
			console.log(JSON.stringify(msg));
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S31Q'),
				dataType: 'json',   //返回格式为json      
				async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post',   //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {
					console.log(data.data.cgMnhtM1s1);
					if (data.data.cgMnhtM1s1 == null) {
						tabledataS3.splice(0, tabledataS3.length);
						$('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
						return
					}

					let select;
					select = data.data.cgMnhtM1s1
					tabledataS3.splice(0, tabledataS3.length);
					select.forEach(item => tabledataS3.push(item));
					$('#dataGridS3').dxDataGrid('instance').deselectAll()
					$('#dataGridS3').dxDataGrid('instance').refresh()
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
	
	
	
	
//	setInterval(() => {
//		        M1S31_serDel();
//		    }, 1800000);
}) 		    