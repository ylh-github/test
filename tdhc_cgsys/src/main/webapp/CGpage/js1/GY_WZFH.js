///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = [];
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
			lg: 3,
			md: 2,
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
				dataField: 'cConnum',
				 label: {
	 	                text: '合同号'
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
				text: '新增',
				onClick: function () {
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
					addIns.option('title', 'GY_WZ')
					addIns.show();
					M1S11_addfun();
					M1S11addIns.option('formData', new Object())
				}
			}
		}, {
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
						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
						DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
						return;
					}
					addIns = $('#addmotai').dxPopup({
						//模态框增加name    
						width: function () {
							return innerWidth - 100
						},
						height: function () {
							return innerHeight - 100
						}
					}).dxPopup('instance')
					addIns.option('title', 'GY_WZ');
					addIns.show();
					// 调用模态框函数    
					// updatafun()    
					M1S11_Updatefun()
					M1S11addIns.option('formData', rowsData)
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

					msg.data.gyWzM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
					msg.processKey = 'GY_WZ/M1S11D';
					msg.data.processkey = 'GY_WZ_M1S11D';
					console.log(msg)
					M1S11D_serDel_Judgment();
					if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
						msg.data.processkey = 'GY_WZ_M1S11D';
						msg.processKey = 'GY_WZ/M1S11D';
						$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GY_WZ/M1S11D'),
							dataType: 'json', //返回格式为json   
							async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
							data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
							type: 'post', //请求方式 get 或者post , 
							contentType: 'application/json',
							success: function (data) {
								let select = data.msg
								if (data.errcode == 0) {
									DevExpress.ui.notify(data.msg, 'success', 3000);
									M1S11_serDel();
//									var websocketData = ['[{"objId":"GY_WZ_websocket","funName":"GY_WZ","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"AUD"}]']
//									send(websocketData)

								} else {
									DevExpress.ui.notify(data.msg, 'warning', 120000);
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
//		{
//			dataField: 'cIdTbSuppmateral',
//			caption: '物资主键',
//		},
//		{
//			dataField: 'cNoTbSuppmateral',
//			caption: '序号',
//		},
		{
			dataField: 'cConnum',
			caption: '合同号',
		},
//		{
//			dataField: 'cOrdernum',
//			caption: '发货单号',
//		},
//		{
//			dataField: 'cGoodsnameTbSuppmateral',
//			caption: '货物名称',
//		},
//		{
//			dataField: 'cSpecTbSuppmateral',
//			caption: '规格型号',
//		},
//		{
//			dataField: 'cUnitTbSuppmateral',
//			caption: '单位',
//		},
//		{
//			dataField: 'cNumTbSuppmateral',
//			caption: '数量',
//		},
//		{
//			dataField: 'cTotalnumTbSuppmateral',
//			caption: '总数量',
//		},
		
		{
			dataField: 'cReceivcompTbSuppmateral',
			caption: '收货单位名称',
		},
		{
			dataField: 'cReceaddress',
			caption: '收货单位地址',
		},
		{
			dataField: 'cContacter',
			caption: '收方联系人',
		},
		{
			dataField: 'cContacttell',
			caption: '收方联系电话',
		},
		
		{
			dataField: 'cSendtime',
			caption: '发货时间',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
//		{
//			dataField: 'cStateTbSuppmateral',
//			caption: '物资状态',
//		},
		{
			dataField: 'cArrtime',
			caption: '到货日期',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
		{
			dataField: 'cSender',
			caption: '发货人',
		},
		{
			dataField: 'cReceiver',
			caption: '收货人',
		},
		
		{
			dataField: 'cContacterr',
			caption: '收方联系人',
		},
		{
			dataField: 'cContphone',
			caption: '收方联系电话',
		},
		{
			dataField: 'cCreater',
			caption: '录入人',
		},
		{
			dataField: 'cCreatetime',
			caption: '录入时间',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
//		{
//			dataField: 'cModifierTbSuppmateral',
//			caption: '修改人',
//		},
//		{
//			dataField: 'cModifytimeTbSuppmateral',
//			caption: '修改时间',
//			dataType: "date",
//			format: "yyyy-MM-dd",
//
//		},
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
	
	
	
	var dataGridS2columns = [
//		 {
//		 	dataField: 'cId',
//		 	caption: '主键',
//		 },
		{
			dataField: 'cConnum',
			caption: '合同号',
		},
		{
			dataField: 'cOrdernum',
			caption: '发货单号',
		},
		{
			dataField: 'cCarshipno',
			caption: '车/船号',
		},
		{
			dataField: 'cBoxno',
			caption: '集装箱号',
		},
		
		{
			dataField: 'cCode',
			caption: '编码',
		},
		{
			dataField: 'cGoodsname',
			caption: '物资名称',
		},
		{
			dataField: 'cSpec',
			caption: '规格',
		},
		{
			dataField: 'cUnit',
			caption: '单位',
		},
		{
			dataField: 'cNum',
			caption: '数量',
		},
//		{
//			dataField: 'cFdescrideTbAttrGroup',
//			caption: '繁体中文描述',
//		},
//		
//		{
//			dataField: 'cCreateUserTbAttrGroup',
//			caption: '创建人',
//		},
//		{
//			dataField: 'cCtimeTbAttrGroup',
//			caption: '创建时间',
//			dataType: "date",
//			format: "yyyy-MM-dd",
//		},
//		{
//			dataField: 'cUpUserTbAttrGroup',
//			caption: '修改人',
//		},
//		{
//			dataField: 'cUptimeTbAttrGroup',
//			caption: '修改时间',
//			dataType: "date",
//			format: "yyyy-MM-dd",
//		},

	]

	$('#dataGridS2').dxTreeList({
		//deferRendering: true,
		dataSource: tabledataS2,
		keyExpr: "cBoxno",
		parentIdExpr: "cCode",


		editing: {
			mode: 'popup',
			//allowUpdating: false     
		},

		columnAutoWidth: true,
		showRowLines: true,
		noDataText: '无数据',
		// //允许脚本编写     
		height: '100%',
		paging: {
			enabled: false
		},
		scrolling: {
			mode: 'virtual'
		},

		searchPanel: {
			visible: true,
			width: 250
		},
		// headerFilter: {
		// 	visible: true
		// },
		selection: {
			mode: "single"
		},
		searchPanel:{
			visible:true
		},
		// selectedRowKeys: [10,15],
		columns: dataGridS2columns,

		onToolbarPreparing: function (e) {
			operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

		},
		onClick:function (e) {
			toggleRow()
		}
	}).dxTreeList('instance');
	
	function toggleRow()
	{
		var  dxTreeList  = $('#dataGridS2').dxTreeList("instance");
		
		if(dxTreeList.isRowExpanded(dxTreeList.selectedRowKeys[0]))
		{
			dxTreeList.collapseRow(dxTreeList.selectedRowKeys[0]);
		}
		else
		{
			dxTreeList.expandRow(dxTreeList.selectedRowKeys[0]);
		}

	}
	
	
	///////////////////////////////////////////////////////
	//Star()请求下拉框、多选框数据、通过请求网址的后缀生成代码 
	///////////////////////////////////////////////////////
	function start() {
		//ajax传参用 		    
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {}
		};
		console.log(msg)
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
		msg.data.tbSuppmateral = [searchdataFormM1.option('formData')];
		let startTime = msg.data.tbSuppmateral[0].cCreatetimeTbSuppmateral_star;
		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = msg.data.tbSuppmateral[0].cCreatetimeTbSuppmateral_end;
		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
		console.log(JSON.stringify(msg))
		M1S11Q_serDel_Judgment();
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {} else {
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GY001/selectByCondition'),
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
					console.log(data.data)
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
	let adddata1= []

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


				// {
				// 	dataField: 'cIdTbSuppmateral',
				// 	label: {
				// 		text: '物资主键'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cNoTbSuppmateral',
				// 	label: {
				// 		text: '序号'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },

				// {
				// 	dataField: 'cGoodsnameTbSuppmateral',
				// 	label: {
				// 		text: '货物名称'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSpecTbSuppmateral',
				// 	label: {
				// 		text: '规格型号'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cUnitTbSuppmateral',
				// 	label: {
				// 		text: '单位'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cNumTbSuppmateral',
				// 	label: {
				// 		text: '数量'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cTotalnumTbSuppmateral',
				// 	label: {
				// 		text: '总数量'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },




				// {
				// 	dataField: 'cArrtimeTbSuppmateral',
				// 	label: {
				// 		text: '到货日期'
				// 	},
				// 	editorType: 'dxDateBox',
				// 	editorOptions: {
				// 		displayFormat: 'yyyy-MM-dd',
				// 		type: 'datetime',
				// 	},
				// 	validationRules: []
				// },
				
				
				// {
				// 	dataField: 'cCreaterTbSuppmateral',
				// 	label: {
				// 		text: '创建人'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cCreatetimeTbSuppmateral',
				// 	label: {
				// 		text: '创建时间'
				// 	},
				// 	editorType: 'dxDateBox',
				// 	editorOptions: {
				// 		displayFormat: 'yyyy-MM-dd',
				// 		type: 'datetime',
				// 	},
				// 	validationRules: []
				// },
				// {
				// 	dataField: 'cModifierTbSuppmateral',
				// 	label: {
				// 		text: '修改人'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cModifytimeTbSuppmateral',
				// 	label: {
				// 		text: '修改时间'
				// 	},
				// 	editorType: 'dxDateBox',
				// 	editorOptions: {
				// 		displayFormat: 'yyyy-MM-dd',
				// 		type: 'datetime',
				// 	},
				// 	validationRules: []
				// },
				// {
				// 	dataField: 'cRemarkTbSuppmateral',
				// 	label: {
				// 		text: '备注'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cStateTbSuppmateral',
				// 	label: {
				// 		text: '物资状态'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 1,
				// 		min: 0,
				// 		message: '长度超限，最长为1！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cMtidTbSuppmateral',
				// 	label: {
				// 		text: '业务主键'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw01TbSuppmateral',
				// 	label: {
				// 		text: '提交状态'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw02TbSuppmateral',
				// 	label: {
				// 		text: '用途说明'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw03TbSuppmateral',
				// 	label: {
				// 		text: '请购日期'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw08TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段8'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw09TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段9'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw10TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段10'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw11TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段11'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw12TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段12'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw13TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段13'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw14TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段14'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw15TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段15'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw07TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段7'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw16TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段16'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw05TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段5'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw04TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段4'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cTimestampTbSuppmateral',
				// 	label: {
				// 		text: '时间戳'
				// 	},
				// 	editorType: 'dxDateBox',
				// 	editorOptions: {
				// 		displayFormat: 'yyyy-MM-dd',
				// 		type: 'datetime',
				// 	},
				// 	validationRules: []
				// },
				// {
				// 	dataField: 'cDrTbSuppmateral',
				// 	label: {
				// 		text: '删除标识'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 1,
				// 		min: 0,
				// 		message: '长度超限，最长为1！'
				// 	}, ]
				// },
				// {
				// 	dataField: 'cSw06TbSuppmateral',
				// 	label: {
				// 		text: '扩展字段6'
				// 	},
				// 	editorOptions: {
				// 		showClearButton: true,
				// 	},
				// 	validationRules: [{
				// 		type: 'stringLength',
				// 		max: 4000,
				// 		min: 0,
				// 		message: '长度超限，最长为4000！'
				// 	}, ]
				// }
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
				 	msg.data.gyWzM1s1 = [M1S11addIns.option('formData')];
				 	console.log(JSON.stringify(msg));
				 	//change等于1为添加         
				 	M1S11A_serDel_Judgment();
				 	if (M1S11A_serDel_mark != 'M1S11A_success') {} else {
				 		msg.data.processkey = 'GY_WZ_M1S11A';
				 		msg.processKey = 'GY_WZ/M1S11A';
				 		$.ajax({
				 			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GY_WZ/M1S11A'),
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
				 				console.log(99999);
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
					dataField: 'cReceivcompTbSuppmateral',
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
					dataField: 'cReceaddressTbSuppmateral',
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
				dataField: 'cContacttellTbSuppmateral',
				label: {
					text: '联系电话'
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
				dataField: 'cReceiverTbSuppmateral',
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
					dataField: 'cReceiverTbSuppmateral',
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

	function M1S11_Updatefun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [{
					dataField: 'cIdTbSuppmateral',
					label: {
						text: '物资主键'
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
					dataField: 'cNoTbSuppmateral',
					label: {
						text: '序号'
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
				{
					dataField: 'cTotalnumTbSuppmateral',
					label: {
						text: '总数量'
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
					dataField: 'cCreaterTbSuppmateral',
					label: {
						text: '创建人'
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
					dataField: 'cCreatetimeTbSuppmateral',
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
					dataField: 'cModifierTbSuppmateral',
					label: {
						text: '修改人'
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
					dataField: 'cModifytimeTbSuppmateral',
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
					dataField: 'cMtidTbSuppmateral',
					label: {
						text: '业务主键'
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
					dataField: 'cSw01TbSuppmateral',
					label: {
						text: '提交状态'
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
					dataField: 'cSw02TbSuppmateral',
					label: {
						text: '用途说明'
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
					dataField: 'cSw03TbSuppmateral',
					label: {
						text: '请购日期'
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
					dataField: 'cSw08TbSuppmateral',
					label: {
						text: '扩展字段8'
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
					dataField: 'cSw09TbSuppmateral',
					label: {
						text: '扩展字段9'
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
					dataField: 'cSw10TbSuppmateral',
					label: {
						text: '扩展字段10'
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
					dataField: 'cSw11TbSuppmateral',
					label: {
						text: '扩展字段11'
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
					dataField: 'cSw12TbSuppmateral',
					label: {
						text: '扩展字段12'
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
					dataField: 'cSw13TbSuppmateral',
					label: {
						text: '扩展字段13'
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
					dataField: 'cSw14TbSuppmateral',
					label: {
						text: '扩展字段14'
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
					dataField: 'cSw15TbSuppmateral',
					label: {
						text: '扩展字段15'
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
					dataField: 'cSw07TbSuppmateral',
					label: {
						text: '扩展字段7'
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
					dataField: 'cSw16TbSuppmateral',
					label: {
						text: '扩展字段16'
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
					dataField: 'cSw05TbSuppmateral',
					label: {
						text: '扩展字段5'
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
					dataField: 'cSw04TbSuppmateral',
					label: {
						text: '扩展字段4'
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
					dataField: 'cTimestampTbSuppmateral',
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
					dataField: 'cDrTbSuppmateral',
					label: {
						text: '删除标识'
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
					dataField: 'cSw06TbSuppmateral',
					label: {
						text: '扩展字段6'
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
				msg.data.gyWzM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {} else {
					msg.data.processkey = 'GY_WZ_M1S11U';
					msg.processKey = 'GY_WZ/M1S11U';
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GY_WZ/M1S11U'),
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
	        msg.data.tbSuppmateral = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
	        console.log(msg.data.tbSuppmateral)
	        console.log(JSON.stringify(msg))
	        //cake.Ui.LoadPanel.show();
	        //console.log(msg.data.cgH001S1s2)
	        if(msg.data.tbSuppmateral.length==0){
	        	DevExpress.ui.notify('请选择需要查询数据', 'info', 3000);
	        }else{
	        	$.ajax({
	                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GY001/M1S1S12'), 
	                dataType: 'json', //返回格式为json  
	                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
	                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
	                type: 'post', //请求方式 get 或者post ,
	                contentType: 'application/json',
	                success: function(data) {
	                	console.log(data.data.suppViewEntity)
						if (data.data == null) {
							tabledataS2.splice(0, tabledataS2.length);
							$('#dataGridS2').dxTreeList('instance').option('dataSource', tabledataS2)
							return
						}

						let select;
						select = data.data.suppViewEntity;
						tabledataS2.splice(0, tabledataS2.length);
						select.forEach(item => tabledataS2.push(item));
						$('#dataGridS2').dxTreeList('instance').deselectAll()
						$('#dataGridS2').dxTreeList('instance').refresh()
						DevExpress.ui.notify(data.msg, 'success', 3000);
					},
					error: function () {
						DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
					}
	            })
	            
	        }
	    }
	    
	//Script ------------------------------------
})