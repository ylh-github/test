
///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let S1S21addIns;
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let searchdataFormM2; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let adddata = {}; //添加按钮需要的数据源
let addIns;   //增加操作时候的模态框实例
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
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let cgy = [];//采购员
let qdgs = [];
let xxkState = [];//信息卡状态
let wzwczt = [];//合同物资状态
let wanchengzhuangtai = [];
let dtState = [];
let jhdzdata = [];
window.onload = () => {
	DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
	console.log('pp');
};
$(function () {
	start() //调用初始化函数//websocket开始

	//var userId='CG_MNHT_websocket';
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
	//var data = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"M1S11","tbName":"TP_CGCONTRACTMTT","dataId":"A"},{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"S1S21","tbName":"TP_CGCONTRACTSTT","dataId":"A"},]']
	//send(data)
	//};
	//websocket.onmessage = function(evnt) {
	//var jsons = eval('(' + evnt.data + ')');
	//var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:CG_MNHT');
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
			lg: 4,
			md: 4,
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
					text: '合同号'
				},
				editorOptions: {
					showClearButton: true,
				}
			},
			{
				dataField: 'cStatexxk',
				label: {
					text: 'HS审核状态'
				},
				editorType: 'dxSelectBox',
				editorOptions: {
					//以上完成对没有联动数据源配置
					//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
					dataSource: xxkState,
					valueExpr: 'cSubitemid',
					displayExpr: 'cSubitemdes',
					searchEnable: true,
					showClearButton: true,
				},
			},
		]
	}).dxForm('instance')
	searchdataFormM2 = $('#searchFormM2').dxForm({
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
		//location: "before",
		//locateInMenu: 'auto',
		//widget: "dxButton",
		//options: {
		//									height: "auto",
		//									width: "auto",
		//												name:'M1S11Q',
		//				icon: 'plus',
		//			text: '添加',
		//				onClick: function(){
		//					change='1'; 
		//					$('#addmotai').show()
		//				addIns = $('#addmotai').dxPopup({
		//						width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
		//						height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
		//					}).dxPopup('instance')
		//				addIns.option('title', 'CG_MNHT')
		//				addIns.show();
		//				M1S11_addfun();
		//				M1S11addIns.option('formData',new Object())
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
				icon: 'save',
				text: '拟合同修改',
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
						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
						// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
						return;
					}
					addIns = $('#addmotai').dxPopup({
						//模态框增加name    
												width:1000,    
												height:450   
//						fullScreen: true
					}).dxPopup('instance')
					addIns.option('title', 'CG_MNHT');
					addIns.show();
					// 调用模态框函数    
					// updatafun()    
					M1S11_Updatefun()
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
				icon: 'check',
				text: '提交拟合同',
				onClick: function () {
					change = '3'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择你要提交的数据。', 'info', 3000);
						return;
					}
					//									if (selectedRowKeys.length > 1) {    
					//										 Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
					//										 DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
					//										return;    
					//									} 
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
								$.ajax({
									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11U2'), dataType: 'json',   //返回格式为json   
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


					//							addIns = $('#addmotai').dxPopup({    
					//									//模态框增加name    
					////									width:1000,    
					////									height:450   
					//								fullScreen: true
					//								}).dxPopup('instance')    
					//								addIns.option('title', 'CG_MNHT');    
					//								addIns.show();    
					//								// 调用模态框函数    
					//								// updatafun()    
					//								M1S11_Updatefun()    
					//								M1S11addIns.option('formData',rowsData)    
				}
			}
		},
		//		{
		//location: "before",
		//locateInMenu: 'auto',
		//widget: "dxButton",
		//options: {
		//									height: "auto",
		//									width: "auto",
		//									
		//				icon: 'remove',     
		//			text: '删除',
		//			onClick: function(){                       
		//				let grid1 = $('#dataGridS1').dxDataGrid('instance');  
		//		  		let selectedRowKeys = grid1.getSelectedRowKeys()  
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
		//							} 
		//				}; 
		//				//前后端统一叫'tscLtrawbin' 
		//
		//		msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
		//				console.log(msg) 
		//M1S11D_serDel_Judgment();
		//if(M1S11D_serDel_mark!='M1S11D_success' ){
		//}else{				
		//					$.ajax({ 
		//					url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11D'),					dataType: 'json',   //返回格式为json   
		//					async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
		//					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
		//					type: 'post',   //请求方式 get 或者post , 
		//					contentType: 'application/json', 
		//					success: function (data) { 
		//						let select = data.msg 
		//						if(data.errcode == 0){ 
		//							DevExpress.ui.notify(data.msg, 'success', 3000);  
		//							M1S11_serDel() ;         
		////var websocketData = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"M1S11","tbName":"TP_CGCONTRACTMTT","dataId":"AUD"}]']
		////send(websocketData)
		//
		//							} 
		//						else{ 
		//							DevExpress.ui.notify(data.msg, 'warning', 120000); 
		//							} 
		//						}, 
		//					error: function () { 
		//						DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000); 
		//						} 
		//					}) 
		//}
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

				icon: 'print',
				text: '打印拟合同',
				onClick: function () {


					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys1 = grid1.getSelectedRowKeys()
					//脚本执行  
					if (selectedRowKeys1.length < 1) {
						DevExpress.ui.notify('请选择要打印的合同号！！！', 'info', 3000);
						return;
					}
					msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {}
					};

					let msgdate = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
					let cConnum = msgdate.cConnum;
					console.log(msgdate.cConnum)
					let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=Contact_4.cpt&cConnum=" + cConnum;
					window.open(url, "_blank");
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
				icon: 'user',
				text: '正式合同生成',
				onClick: function () {
					change = '4'
					let grid = $('#dataGridS1').dxDataGrid('instance');     
					let rowsData = grid.getSelectedRowsData()[0]     
					let selectedRowKeys = grid.getSelectedRowKeys()     
						if (selectedRowKeys.length < 1) {     
							// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
							DevExpress.ui.notify('请选择一条要已通过审核的数据。', 'info', 3000);     
							return;     
						}     
						if (selectedRowKeys.length > 1) {    
							 Cake.Ui.Toast.showInfo('一次只能选择一条数据。')    
							 DevExpress.ui.notify('一次只能选择一条数据。', 'info', 3000);    
							return;    
						} 
					msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {},
					};
					msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowKeys();
					console.log(msg.data.cgMnhtM1s1)
					//
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11A'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 2000)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 2000)
								return;
							}
//							M1S11_serDel();
//							addIns.hide()
						},
						error: function () {
							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
							// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
							//e.cancel=true;         
						}
					})

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
				text: '撤销拟合同',
				onClick: function () {
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys = grid1.getSelectedRowKeys()
					let rowsData = grid1.getSelectedRowsData()
					//脚本执行  
					if (selectedRowKeys.length < 1) {
						DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 3000);
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

					msg.data.tpCgcontractmtt = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
					console.log(msg)
					M1S11D_serDel_Judgment();
					if (M1S11D_serDel_mark != 'M1S11D_success') {
					} else {
						var result = DevExpress.ui.dialog.confirm("您确定要撤销合同吗?", "确认撤销");
						result.done(function (dialogResult) {
							if (dialogResult) {
								cake.Ui.LoadPanel.show()
								$.ajax({
									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/M1S11CX'), dataType: 'json',   //返回格式为json   
									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
									type: 'post',   //请求方式 get 或者post , 
									contentType: 'application/json',
									success: function (data) {
										let select = data.msg
										if (data.errcode == 0) {
											DevExpress.ui.notify(data.msg, 'success', 3000);
											M1S11_serDel();
										}
										else {
											DevExpress.ui.notify(data.msg, 'warning', 2000);
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
		},{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: 'remove',
				text: '退单信息卡',
				onClick: function () {
					change = '5'
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
					M1S21_Updatefun()
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
					S1S21_serDel();
				}
			}
		},
		//		{
		//location: "before",
		//locateInMenu: 'auto',
		//widget: "dxButton",
		//options: {
		//									height: "auto",
		//									width: "auto",
		//													icon: 'plus',
		//			text: '添加',
		//				onClick: function(){
		//					change='1'; 
		//		let grid = $('#dataGridS1').dxDataGrid('instance');
		//		let rowsData = grid.getSelectedRowsData()[0];
		//					$('#addmotai').show()
		//				addIns = $('#addmotai').dxPopup({
		//						width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
		//						height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
		//					}).dxPopup('instance')
		//				addIns.option('title', 'CG_MNHT')
		//				addIns.show();
		//				S1S21_addfun();
		//				S1S21addIns.option('formData',new Object())
		//				S1S21addIns.getEditor('cConnum').option('value',$('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cConnum);
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
				icon: 'save',
				text: '修改',
				onClick: function () {
					change = '2'
						let grids1 = $('#dataGridS1').dxDataGrid('instance');
                    let rowsDatas1 = grids1.getSelectedRowsData();
                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
                    if (selectedRowKeyss1.length < 1) {
                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 3000);
                        return;
                    }
                    if (selectedRowKeyss1.length > 1) {
                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        DevExpress.ui.notify('一次只能选择一条合同。', 'info', 3000);
                        return;
                    }
                    let grida = $('#dataGridS2').dxDataGrid('instance');
                    let rowsDataa = grida.getSelectedRowsData();
                    let selectedRowKeysa = grida.getSelectedRowKeys()
                    if (selectedRowKeysa.length < 1) {
                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        DevExpress.ui.notify('至少选择一条要修改的物资。', 'info', 3000);
                        return;
                    }
//					addIns = $('#addmotai').dxPopup({
//						//模态框增加name    
//						width: 1000,
//						height: 450
//					}).dxPopup('instance')
//					addIns.option('title', 'CG_MNHT');
//					addIns.show();
					// 调用模态框函数    
					// updatafun()    
//					S1S21_Updatefun()
//					S1S21addIns.option('formData', rowsData)
                	msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {},
                    };
                	let grid1 = $('#dataGridS2').dxDataGrid('instance');
                    let rowsData = grid1.getSelectedRowsData();
                    msg.data.cgMnhtS1s2 =  grid1.getSelectedRowsData();
                	
                	if (S1S21U_serDel_mark != 'S1S21U_success') {
					} else {
						
						var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                		result.done(function (dialogResult) {
                			if (dialogResult) {
                				cake.Ui.LoadPanel.show()
						
						$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21U'),
							dataType: 'json',   //返回格式为json           
							async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
							type: 'post',   //请求方式 get 或者post ,         
							contentType: 'application/json',
							success: function (data) {
								let select = data.msg
								if (data.errcode == 0) {
									DevExpress.ui.notify(data.msg, 'success', 3000)
									S1S21_SSRT()
								} else {
									DevExpress.ui.notify(data.msg, 'error',3000)
									return;
								}
	
//								addIns.hide()
	
							},
							error: function () {
								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
								// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
								//e.cancel=true;         
							}
						})
            			}
                        cake.Ui.LoadPanel.close()
                    })
				}
					
					
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
				text: '撤销物资',
				onClick: function () {
					let grid1 = $('#dataGridS2').dxDataGrid('instance');
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

					msg.data.cgMnhtS1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
					console.log(msg)
					S1S21D_serDel_Judgment();
					if (S1S21D_serDel_mark != 'S1S21D_success') {
					} else {
						$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21CX'),
							dataType: 'json',   //返回格式为json   
							async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
							type: 'post',   //请求方式 get 或者post , 
							contentType: 'application/json',
							success: function (data) {
								let select = data.msg
								if (data.errcode == 0) {
									S1S21_SSRT()
									DevExpress.ui.notify(data.msg, 'success', 3000);

								}
								else {
									DevExpress.ui.notify(data.msg, 'warning', 2000);
									return;
								}
							},
							error: function () {
								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
							}
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
			width: 120,
			alignment: 'center'
		},
		{
			dataField: 'cOutconnum',
			caption: '外贸合同号',
			width: 120,
			alignment: 'center'
		},
		{
			dataField: 'cStatexxk',
			caption: 'HS审核状态',
			width: 80,
			alignment: 'center',
			calculateDisplayValue: function (rowData) {
				let matchedItem = xxkState.find(item => item.cSubitemid == rowData.cStatexxk);
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
			width: 60,
			alignment: 'center',
			calculateDisplayValue: function (rowData) {
				let matchedItem = dtState.find(item => item.cSubitemid == rowData.cBackstate);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
//		{
//			dataField: 'cBackstate',
//			caption: '退单状态',
//			width: 120,
//			alignment: 'center',
//		},
		{
			dataField: 'cSw03',
			caption: '货物名称',
			width: 120,
			alignment: 'center',
		},
		
		{
			dataField: 'cSw10',
			caption: '采购员',
			alignment: 'center',
			width: 60,
			calculateDisplayValue: function (rowData) {
				let matchedItem = cgy.find(item => item.cSubitemid == rowData.cSw10);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		{
			dataField: 'cCludecom',
			caption: '签订公司',
			width: 120,
			alignment: 'center',
			calculateDisplayValue: function (rowData) {
				let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cCludecom);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		{
			dataField: 'cSignplace',
			caption: '签订地址',
			width: 70,
			alignment: 'center',
		},
		{
			dataField: 'cCludetime',
			width: 100,
			alignment: 'center',
			caption: '签订时间',
			dataType: "date",
			format: "yyyy-MM-dd"
		},
		{
			dataField: 'cSupplier',
			caption: '供应商',
			alignment: 'center',
			width: 120,
		},
		{
			dataField: 'cPayway',
			caption: '付款方式',
//			alignment: 'center',
			width: 150,
			 
		},
		{
			dataField: 'cDelivdate',
			caption: '交货期限',
			alignment: 'center',
			width: 120,
		},
		{
			dataField: 'cDelivplace',
			width: 120,
			alignment: 'center',
			caption: '交货地点',
			calculateDisplayValue: function (rowData) {
				let matchedItem = jhdzdata.find(item => item.cSubitemid == rowData.cDelivplace);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		

//		{
//			dataField: 'cDr',
//			caption: '预计到货时间',
//			dataType: "date",
//			format: "yyyy-MM-dd"
//		},
		{
			dataField: 'cConmoney',
			caption: '合同金额',
			width: 120,
			alignment: 'center',
		},
//		{
//			dataField: 'cSw01',
//			caption: '已付款金额',
//			width: 120,
//		},
//		{
//			dataField: 'cSw02',
//			caption: '未付款金额',
//			width: 120,
//		},
		{
			dataField: 'cBackcause',
			caption: '退单原因',
			width: 120,
		},
		{
			dataField: 'cBackenum',
			caption: '退单原因',
			width: 50,
		},
		{
			dataField: 'cCludeaddr',
			caption: '送货地点',
			width: 120,
		},
		{
			dataField: 'cBacker',
			caption: '退单人',
			width: 60,
			alignment: 'center',
		},
		{
			dataField: 'cBacktime',
			caption: '退单时间', dataType: "date",
			format: "yyyy-MM-dd",
			width: 80,
			alignment: 'center',

		},
		{
			dataField: 'cDenyer',
			caption: '驳回人',
			width: 60,
			alignment: 'center',
		},
		{
			dataField: 'cDenytime',
			caption: '驳回时间', dataType: "date",
			format: "yyyy-MM-dd",
			width: 80,
			alignment: 'center',

		},
		{
			dataField: 'cDenycause',
			caption: '驳回原因',
			width: 120,
		},
		{
			dataField: 'cRemark',
			caption: '备注',
			width: 200,
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
			mode: 'multiple'
		},

		columns: dataGridS1columns,

		onToolbarPreparing: function (e) {
			operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

		}
	}).dxDataGrid('instance');

	
	var dataGridS3columns = [
		{
			dataField: 'cConnum',
			caption: '合同号',
			width: 120,
		},
//		{
//			dataField: 'cStatexxk',
//			caption: '信息卡审核',
////			calculateDisplayValue: function (rowData) {
////				let matchedItem = xxkState.find(item => item.cSubitemid == rowData.cStatexxk);
////				if (matchedItem == null || matchedItem == undefined) {
////					return "";
////				} else {
////					return matchedItem.cSubitemdes;
////				}
////			}
//		},
		{
			dataField: 'cStatexxk',
			caption: '信息卡审核',
			width: 80,
			calculateDisplayValue: function (rowData) {
				let matchedItem = xxkState.find(item => item.cSubitemid == rowData.cStatexxk);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		{
			dataField: 'cDenycause',
			caption: '反驳原因',
			width: 200,
			
		},
//		{
//			dataField: 'cSw03',
//			caption: '货物名称',
//			width: 120,
//			alignment: 'center',
//		},
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
//		mode: 'multiple'
		mode: 'single'	
	},

	columns: dataGridS3columns,

	//		onToolbarPreparing: function (e) { 
	//		operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item)); 
	//
	//		 } 
}).dxDataGrid('instance');


	//表2数据		
	var dataGridS2columns = [
		{
			dataField: 'cConnum',
			caption: '合同号',
			width: 140,
			allowEditing: false,
		},
		{
			dataField: 'cConline',
			caption: '合同行号',
			width: 140,
			allowEditing: false,
		},
		{
			dataField: 'cGoodsname',
			caption: '物资名称',
			width: 120,
			alignment: 'center',
		},
		{
			dataField: 'cCuspec',
			caption: '规格型号',
			width: 240,
			alignment: 'center',
		},
		{
			dataField: 'cSw08',
			caption: '报关物资名称',
			width: 120,
			alignment: 'center',
		},
		{
			dataField: 'cSpec',
			caption: '报关规格型号',
			width: 240,
			alignment: 'center',
		},
		{
			dataField: 'cUnit',
			width: 80,
			caption: '单位',
		},
		{
			dataField: 'cGoodsnum',
			caption: '订货数量',
			width: 120,
		},
//		{
//			dataField: 'cGroudtotalnum',
//			caption: '累计到货量',
//			allowEditing: false,
//		},
//		{
//			dataField: 'cResiduenum',
//			caption: '剩余数量',
//		},
//		{
//			dataField: 'cQuadealline',
//			caption: '本次到货量',
//		},
//		{
//			dataField: 'cSw09',
//			caption: '累计出库量',
//			allowEditing: false,
//		},
//		{
//			dataField: 'cSw10',
//			caption: '本次出库量',
//		},
//		{
//			dataField: 'cSw06',
//			caption: '船号',
//		},
//		{
//			dataField: 'cSw07',
//			caption: '框架号',
//		},
//		{
//			dataField: 'cState',
//			caption: '状态',
//			calculateDisplayValue: function (rowData) {
//				let matchedItem = wzwczt.find(item => item.cSubitemid == rowData.cState);
//				if (matchedItem == null || matchedItem == undefined) {
//					return "";
//				} else {
//					return matchedItem.cSubitemdes;
//				}
//			},
//			allowEditing: false,
//		},
//		{
//			dataField: 'cMtid',
//			caption: '合同编号',
//			width: 1,
//			alignment: 'center',
//		},
//		{
//			dataField: 'cId',
//			caption: '合同物资编号',
//			width: 1,
//			alignment: 'center',
//		},
		{
			dataField: 'cRemark',
			caption: '备注',
		},
	]

	$('#dataGridS2').dxDataGrid({
		deferRendering: false,
		dataSource: tabledataS2,
		 columnResizingMode: "widget",
		editing: {
			mode: 'cell',
			allowUpdating: true,     
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
			mode: 'multiple'
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
			}
		};
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
		initLoad3()
		function initLoad3() {
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
						dtState.push(item);
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
	                    "cItemid": "WCZT"
	                }
	            };
	            $.ajax({
	                type: "post",
	                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
	                data: JSON.stringify(msg),
	                contentType: "application/json",
	                dataType: "json",
	                success: function(result) {
	                    result.data.forEach(item => {
	                        wanchengzhuangtai.push(item);
	                    });
	                },
	                error: function() {
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
		initLoad13()
		function initLoad13() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "JHDD"
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
						jhdzdata.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		initLoad14()
		function initLoad14() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "WZWCZT"
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
						wzwczt.push(item);
					});
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		////////////////////////////////////////////////////////////////////////////////    
		//寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
		////////////////////////////////////////////////////////////////////////////////   
		M1S31_serDel();
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
		msg.data.cgMnhtM1s1 = [searchdataFormM1.option('formData')];
		let startTime = msg.data.cgMnhtM1s1[0].cCreatetime_star;
		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = msg.data.cgMnhtM1s1[0].cCreatetime_end;
		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999); M1S11Q_serDel_Judgment();
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
			console.log(JSON.stringify(msg));
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11Q'),
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
	}
	function S1S21_serDel() {
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
			}
		};
		let grid = $('#dataGridS1').dxDataGrid('instance');
		let selectedRowKeys = grid.getSelectedRowKeys()[0]
		msg.data.cgMnhtM1s1 = selectedRowKeys;
		msg.data.cGoodsname = searchdataFormM2.option('formData').cGoodsname
		console.log(selectedRowKeys)
		console.log(searchdataFormM2.option('formData'))
		console.log(msg)
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21Q'),
				dataType: 'json',   //返回格式为json      
				async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post',   //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {

					if (data.data == null) {
						tabledataS2.splice(0, tabledataS2.length);
						$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
						return
					}

					let select;
					select = data.data.cgMnhtS1s2
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

	//信息卡反馈
	
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
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S312Q'),
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


	function M1S11_addfun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
				{
					dataField: 'cSw12',
					label: {
						text: '天数-提前\延迟'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw11',
					label: {
						text: '预计到货说明'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cId',
					label: {
						text: '合同主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cConnum',
					label: {
						text: '合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cCludecom',
					label: {
						text: '签订公司'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cCludeaddr',
					label: {
						text: '送货地点'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSupplier',
					label: {
						text: '供应商'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cConmoney',
					label: {
						text: '合同金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cPayway',
					label: {
						text: '付款方式'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cCheckway',
					label: {
						text: '到货情况'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cTransway',
					label: {
						text: '开票信息'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSignstep',
					label: {
						text: '付款情况-0未付清 -1已付清'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cForinland',
					label: {
						text: '传给国外时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cForoutland',
					label: {
						text: '国外回传时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cRemark',
					label: {
						text: '备注'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cState',
					label: {
						text: '合同状态'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 1, min: 0,
						message: '长度超限，最长为1！'
					},]
				},
				{
					dataField: 'cDr',
					label: {
						text: '预计到货时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cTimestamp',
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
					dataField: 'cCreater',
					label: {
						text: '创建人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cCreatetime',
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
					dataField: 'cModifier',
					label: {
						text: '修改人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cModifytime',
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
					dataField: 'cSw01',
					label: {
						text: '实付金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw02',
					label: {
						text: '未付金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw03',
					label: {
						text: '船号-货物名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw04',
					label: {
						text: '出船日期'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw05',
					label: {
						text: '外贸号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw06',
					label: {
						text: '作废人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw07',
					label: {
						text: '作废时间'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw08',
					label: {
						text: '作废原因'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw09',
					label: {
						text: '目的地'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw10',
					label: {
						text: '采购员'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cConline',
					label: {
						text: '合同行号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cGettime',
					label: {
						text: '取号日期-最后到货时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cCludetime',
					label: {
						text: '签订时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cOrmtid',
					label: {
						text: '请购主表主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cOrstid',
					label: {
						text: '请购子表主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSuppcode',
					label: {
						text: '供应商编码'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 100, min: 0,
						message: '长度超限，最长为100！'
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
				msg.data.cgMnhtM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11A_serDel_Judgment();
				if (M1S11A_serDel_mark != 'M1S11A_success') {
				} else {
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11A'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
								var websocketData = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"M1S11","tbName":"TP_CGCONTRACTMTT","dataId":"AUD"}]']
								send(websocketData)
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
					dataField: 'cBackecause',
					label: {
						text: '退单原因'
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
				console.log(JSON.stringify(msg));
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {
					var result = DevExpress.ui.dialog.confirm("您确定要退单吗?", "确认退单");
					result.done(function (dialogResult) {
						if (dialogResult) {
							cake.Ui.LoadPanel.show()
							//../../tdhc_cgsys/CG_MNHT/M1S11U
							$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S21U'),
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
		$('#addcansel2').dxButton({
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
			colCount: 3,
			items: [

//				{
//					dataField: 'cSw11',
//					label: {
//						text: '预计到货说明'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为4000！'
//					},]
//				},

				{
					dataField: 'cConnum',
					label: {
						text: '合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cOutconnum',
					label: {
						text: '外贸合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				 {
                    dataField: 'cCludecom',
                    label: {
                        text: '签订公司'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: qdgs,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                },
				{
					dataField: 'cCludeaddr',
					label: {
						text: '送货地点'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSupplier',
					label: {
						text: '供应商'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cConmoney',
					label: {
						text: '合同金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cPayway',
					label: {
						text: '付款方式'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
//				{
//					dataField: 'cCheckway',
//					label: {
//						text: '到货情况'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为4000！'
//					},]
//				},
//				{
//					dataField: 'cTransway',
//					label: {
//						text: '开票信息'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为4000！'
//					},]
//				},
//				{
//					dataField: 'cSignstep',
//					label: {
//						text: '付款情况-0未付清 -1已付清'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为4000！'
//					},]
//				},
//				{
//					dataField: 'cForinland',
//					label: {
//						text: '传给国外时间'
//					},
//					editorType: 'dxDateBox',
//					editorOptions: {
//						displayFormat: 'yyyy-MM-dd',
//						type: 'datetime',
//					},
//					validationRules: []
//				},
//				{
//					dataField: 'cForoutland',
//					label: {
//						text: '国外回传时间'
//					},
//					editorType: 'dxDateBox',
//					editorOptions: {
//						displayFormat: 'yyyy-MM-dd',
//						type: 'datetime',
//					},
//					validationRules: []
//				},
				
				{
                	dataField: 'cState',
                	label: {
                		text: '合同状态'
                	},
                	editorType: 'dxSelectBox',
                	editorOptions: {
                		//以上完成对没有联动数据源配置
                		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                		dataSource: wanchengzhuangtai,
                		valueExpr: 'cSubitemid',
                		displayExpr: 'cSubitemdes',
                		searchEnable: true,
                		showClearButton: true,
                		readOnly: true,
                	},
                	validationRules: [{
                		type: 'required',
                		message: '必填！'
                	},
                	
                	]
                },
//				{
//					dataField: 'cDr',
//					label: {
//						text: '预计到货时间'
//					},
//					editorType: 'dxDateBox',
//					editorOptions: {
//						displayFormat: 'yyyy-MM-dd',
//						type: 'datetime',
//					},
//					validationRules: []
//				},

				{
					dataField: 'cSw01',
					label: {
						text: '实付金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw02',
					label: {
						text: '未付金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw03',
					label: {
						text: '货物名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
//				{
//					dataField: 'cSw04',
//					label: {
//						text: '出船日期'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为4000！'
//					},]
//				},
//				{
//					dataField: 'cSw05',
//					label: {
//						text: '外贸号'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 4000, min: 0,
//						message: '长度超限，最长为4000！'
//					},]
//				},


				{
					dataField: 'cSw09',
					label: {
						text: '目的地'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				 {
                    dataField: 'cSw10',
                    label: {
                        text: '采购员'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: cgy,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                },
//				{
//					dataField: 'cGettime',
//					label: {
//						text: '取号日期-最后到货时间'
//					},
//					editorType: 'dxDateBox',
//					editorOptions: {
//						displayFormat: 'yyyy-MM-dd',
//						type: 'datetime',
//					},
//					validationRules: []
//				},
				{
					dataField: 'cCludetime',
					label: {
						text: '签订时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cRemark',
					label: {
						text: '备注'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
//				{
//					dataField: 'cSuppcode',
//					label: {
//						text: '供应商编码'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'stringLength', max: 100, min: 0,
//						message: '长度超限，最长为100！'
//					},]
//				}
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
				msg.data.cgMnhtM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();

				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {

					var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
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
										//	var websocketData = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"M1S11","tbName":"TP_CGCONTRACTMTT","dataId":"AUD"}]']
										//	send(websocketData)
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
				addIns.hide()
			}
		})
	}

//联动查询
	$('#dataGridS1').dxDataGrid({
		onRowClick: function (e) {
			S1S21_SSRT()
		}

	})
	function S1S21_SSRT() {
		let aodthat = [];
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
			}
		};
		let grid = $('#dataGridS1').dxDataGrid('instance');
		let selectedRowKeys = grid.getSelectedRowKeys()
		msg.data.cgMnhtM1s1 = selectedRowKeys;
//		cake.Ui.LoadPanel.show()
		console.log(JSON.stringify(msg));
		$.ajax({
			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21QConnum'),
			dataType: 'json',   //返回格式为json  
			async: true,//请求是否异步，默认为异步，这也是ajax重要特性 
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
			type: 'post',   //请求方式 get 或者post ,
			contentType: 'application/json',
			success: function (data) {

				if (data.errcode == 0) {
					DevExpress.ui.notify(data.msg, 'success', 3000)
				} else {
					DevExpress.ui.notify(data.msg, 'error',3000)
					return;
				} if (data.data == null) {
					tabledataS2.splice(0, tabledataS2.length);
					$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
					return
				}
				let select;
				select = data.data.cgMnhtS1s2
				tabledataS2.splice(0, tabledataS2.length);
				select.forEach(item => tabledataS2.push(item));
				$('#dataGridS2').dxDataGrid('instance').deselectAll()
				$('#dataGridS2').dxDataGrid('instance').refresh()
				cake.Ui.LoadPanel.close();
			},
			error: function () {
				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
				//e.cancel=true;       
			}
		})
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
		cake.Ui.LoadPanel.show()
		//合同子表
		$.ajax({
			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S3S32QConnum'),
			dataType: 'json',   //返回格式为json  
			async: true,//请求是否异步，默认为异步，这也是ajax重要特性 
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
			type: 'post',   //请求方式 get 或者post ,
			contentType: 'application/json',
			success: function (data) {

				if (data.errcode == 0) {
					DevExpress.ui.notify(data.msg, 'success', 3000)
				} else {
					DevExpress.ui.notify(data.msg, 'error', 3000)
					return;
				} if (data.data == null) {
					tabledataS2.splice(0, tabledataS2.length);
					$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
					return
				}
				let select;
				select = data.data.cgMnhtS1s2
				tabledataS2.splice(0, tabledataS2.length);
				select.forEach(item => tabledataS2.push(item));
				$('#dataGridS2').dxDataGrid('instance').deselectAll()
				$('#dataGridS2').dxDataGrid('instance').refresh()
				cake.Ui.LoadPanel.close();
			},
			error: function () {
				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
				//e.cancel=true;       
			}
		})
		
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
	
	
	
	function S1S21_addfun() {
		S1S21addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
				{
					dataField: 'cId',
					label: {
						text: '合同子表主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw20',
					label: {
						text: '扩展字段20'
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
					dataField: 'cGoodsname',
					label: {
						text: '物资名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSpec',
					label: {
						text: '规格型号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cUnit',
					label: {
						text: '单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cPrice',
					label: {
						text: '单价'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cConline',
					label: {
						text: '合同行号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cGoodsnum',
					label: {
						text: '订货数量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cGoodscase',
					label: {
						text: '订货情况'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSumprice',
					label: {
						text: '含税总价:单价*订货数量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cBeforearrtime',
					label: {
						text: '预计到货时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cArrgoodsex',
					label: {
						text: '预计到货说明'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cArrgoodstime',
					label: {
						text: '到货时间'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cArrallyorn',
					label: {
						text: '是/否到齐'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 1, min: 0,
						message: '长度超限，最长为1！'
					},]
				},
				{
					dataField: 'cRemark',
					label: {
						text: '备注'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cState',
					label: {
						text: '完成状态'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cCheckyorn',
					label: {
						text: '是/否验收'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 1, min: 0,
						message: '长度超限，最长为1！'
					},]
				},
				{
					dataField: 'cQuadealline',
					label: {
						text: '质保期限-本次到货量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cOrid',
					label: {
						text: '请购单ID'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cDr',
					label: {
						text: '删除标识'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cTimestamp',
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
					dataField: 'cCreater',
					label: {
						text: '创建人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cCreatetime',
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
					dataField: 'cModifier',
					label: {
						text: '修改人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cModifytime',
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
					dataField: 'cSw01',
					label: {
						text: '天数'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw02',
					label: {
						text: '物资单号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw03',
					label: {
						text: '请购单号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw04',
					label: {
						text: '是否有出船记录'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw05',
					label: {
						text: '外贸号-存档号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cGroudtotalnum',
					label: {
						text: '累计到货量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cResiduenum',
					label: {
						text: '剩余数量:订货数量-到货数量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw06',
					label: {
						text: '船号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw07',
					label: {
						text: '框架号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw08',
					label: {
						text: '报关物资名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw09',
					label: {
						text: '出累计库量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSw10',
					label: {
						text: '本次出库量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cConnum',
					label: {
						text: '合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},

				{
					dataField: 'cMtid',
					label: {
						text: '合同主表主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
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
				msg.data.cgMnhtS1s2 = [S1S21addIns.option('formData')];
				//change等于1为添加         
				S1S21A_serDel_Judgment();
				if (S1S21A_serDel_mark != 'S1S21A_success') {
				} else {
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21A'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
								//var websocketData = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"S1S21","tbName":"TP_CGCONTRACTSTT","dataId":"AUD"}]']
								//send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 3000)
								return;
							}

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
//	setInterval(M1S31_serDel(),1800000);
	setInterval(() => {
		        M1S31_serDel();
		    }, 1800000);
	/*setTimeout(() => {
		M1S31_serDel()
	}, 1800000);*/
}) 		    