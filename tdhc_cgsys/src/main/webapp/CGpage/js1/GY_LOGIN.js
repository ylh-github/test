///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let workFlowUrl='http://192.168.1.114:8480/mesplat/btn/send';
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

	/*var userId = 'GY_LOGIN_websocket';
	var websocket;
	if ('WebSocket' in window) {
		console.log('此浏览器支持websocket');
		websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/' + userId);
	} else if ('MozWebSocket' in window) {
		alert('此浏览器只支持MozWebSocket');
		websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/' + userId);
	} else {
		alert('此浏览器只支持SockJS');
		websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/' + userId);
	}
	websocket.onopen = function (evnt) {
		console.log('链接服务器成功!')
		var data = ['[{"objId":"GY_LOGIN_websocket","funName":"GY_LOGIN","funType":"M1S11","tbName":"TB_SUPUSER","dataId":"A"}',
			'{"objId":"GY_LOGIN_websocket","funName":"GY_LOGIN","funType":"M1S11","tbName":"TB_SUPUSER","dataId":"A"}',
			'{"objId":"GY_LOGIN_websocket","funName":"GY_LOGIN","funType":"M1S11","tbName":"TB_SUPUSER","dataId":"A"}]'
		]
		send(data)
	};
	websocket.onmessage = function (evnt) {
		var json = eval('(' + evnt.data + ')');
		eval(json.dataType)
		console.log(json)
	};
	websocket.onerror = function (evnt) {};
	websocket.onclose = function (evnt) {
		console.log('与服务器断开了链接!')
	}

	function send(data) {
		if (websocket != null) {
			websocket.send(data);
		} else {
			alert('未与服务器链接.');
		}
	}*/

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
				dataField: 'cCreatetimeTbSupuser_star',
				label: {
					text: '创建时间开始时间'
				},
				editorOptions: {
					type: 'date',
					value: new Date(),
					displayFormat: 'yyyy-MM-dd'
				}
			},
			{
				dataField: 'cCreatetimeTbSupuser_end',
				label: {
					text: '创建时间结束时间'
				},
				editorOptions: {
					type: 'date',
					value: new Date(),
					displayFormat: 'yyyy-MM-dd'

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
				text: 'M1S11Q',
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
				text: 'M1S11A',
				onClick: function () {
					change = '1';
					$('#addmotai').show()
					addIns = $('#addmotai').dxPopup({
						width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
						height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
					}).dxPopup('instance')
					addIns.option('title', 'GY_LOGIN')
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
				text: 'M1S11U',
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
						width: 1000,
						height: 450
					}).dxPopup('instance')
					addIns.option('title', 'GY_LOGIN');
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
				text: 'M1S11D',
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

					msg.data.gyLoginM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
					msg.processKey = 'GY_LOGIN/M1S11D';
					msg.data.processkey = 'GY_LOGIN_M1S11D';
					console.log(msg)
					M1S11D_serDel_Judgment();
					if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
						msg.data.processkey = 'GY_LOGIN_M1S11D';
						msg.processKey = 'GY_LOGIN/M1S11D';
						$.ajax({
							url: Cake.Piper.getAuthUrl(workFlowUrl),
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
									var websocketData = ['[{"objId":"GY_LOGIN_websocket","funName":"GY_LOGIN","funType":"M1S11","tbName":"TB_SUPUSER","dataId":"AUD"}]']
									send(websocketData)

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
	var dataGridS1columns = [{
			dataField: 'cSw08TbSupuser',
			caption: '扩展字段8',
		},
		{
			dataField: 'cSw14TbSupuser',
			caption: '扩展字段14',
		},
		{
			dataField: 'cComfaxnoTbSupuser',
			caption: '传真',
		},
		{
			dataField: 'cSw05TbSupuser',
			caption: '扩展字段5',
		},
		{
			dataField: 'cSw13TbSupuser',
			caption: '扩展字段13',
		},
		{
			dataField: 'cModifytimeTbSupuser',
			caption: '修改时间',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
		{
			dataField: 'cSw06TbSupuser',
			caption: '扩展字段6',
		},
		{
			dataField: 'cSw07TbSupuser',
			caption: '扩展字段7',
		},
		{
			dataField: 'cSw11TbSupuser',
			caption: '扩展字段11',
		},
		{
			dataField: 'cCcodTbSupuser',
			caption: '统一社会信用代码',
		},
		{
			dataField: 'cSw09TbSupuser',
			caption: '扩展字段9',
		},
		{
			dataField: 'cSw15TbSupuser',
			caption: '扩展字段15',
		},
		{
			dataField: 'cIdTbSupuser',
			caption: '主键',
		},
		{
			dataField: 'cCompnameTbSupuser',
			caption: '公司名称',
		},
		{
			dataField: 'cSw02TbSupuser',
			caption: '扩展字段2',
		},
		{
			dataField: 'cSw03TbSupuser',
			caption: '扩展字段3',
		},
		{
			dataField: 'cSw10TbSupuser',
			caption: '扩展字段10',
		},
		{
			dataField: 'cComaddressTbSupuser',
			caption: '公司地址',
		},
		{
			dataField: 'cComtaxnumberTbSupuser',
			caption: '税号',
		},
		{
			dataField: 'cComremarkTbSupuser',
			caption: '备注',
		},
		{
			dataField: 'cDrTbSupuser',
			caption: '删除标识',
		},
		{
			dataField: 'cCreaterTbSupuser',
			caption: '创建人',
		},
		{
			dataField: 'cModifierTbSupuser',
			caption: '修改人',
		},
		{
			dataField: 'cSw01TbSupuser',
			caption: '扩展字段1',
		},
		{
			dataField: 'cContacterTbSupuser',
			caption: '联系人',
		},
		{
			dataField: 'cCombanknameTbSupuser',
			caption: '开户银行',
		},
		{
			dataField: 'cComphoneTbSupuser',
			caption: '公司固定电话',
		},
		{
			dataField: 'cUsernamTbSupuser',
			caption: '登录用户名',
		},
		{
			dataField: 'cPasswordTbSupuser',
			caption: '密码',
		},
		{
			dataField: 'cTimestampTbSupuser',
			caption: '时间戳',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
		{
			dataField: 'cSw04TbSupuser',
			caption: '扩展字段4',
		},
		{
			dataField: 'cSw12TbSupuser',
			caption: '扩展字段12',
		},
		{
			dataField: 'cComaccountnoTbSupuser',
			caption: '账号',
		},
		{
			dataField: 'cCreatetimeTbSupuser',
			caption: '创建时间',
			dataType: "date",
			format: "yyyy-MM-dd",

		},
		{
			dataField: 'cContacttellTbSupuser',
			caption: '联系电话',
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
		msg.data.gyLoginM1s1 = [searchdataFormM1.option('formData')];
		let startTime = msg.data.gyLoginM1s1[0].cCreatetimeTbSupuser_star;
		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = msg.data.gyLoginM1s1[0].cCreatetimeTbSupuser_end;
		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
		M1S11Q_serDel_Judgment();
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {} else {



			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GY_LOGIN/M1S11Q'),
				dataType: 'json', //返回格式为json      
				async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post', //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {

					if (data.data == null) {
						tabledataS1.splice(0, tabledataS1.length);
						$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
						return
					}

					let select;
					select = data.data.gyLoginM1s1
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

	M1S11_addfun()

	function M1S11_addfun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			items: [{
				itemType: "group",
				caption: "基本信息",
				colCount: 3,
				items: [
					{
						dataField: '',
							label: {
								text: '',
								visible:false
							},
							editorOptions: {
								showClearButton: true,
								visible: false
							},
					},
					{
						dataField: 'cUsernamTbSupuser',
						label: {
							text: '登录用户名'
						},
						editorOptions: {
							showClearButton: true,
						},
						 validationRules: [{
						 	type: "required",
						 	message: "请输入用户名"
						 }, {
						 	type: "pattern",
						 	pattern: "^[^0-9]+$",
						 	message: "不要在名称中使用数字"
						 }]
					},
					{
						colSpan: 1,
						itemType: "empty",
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, 
					
					{
						dataField: "cPasswordTbSupuser",
						label: {
							text: "密码"
						},
						editorOptions: {
							// mode: "password",
							showClearButton: true
						},
						validationRules: [{
							type: "required",
							message: "请输入密码"
						}]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					}, {
						label: {
							text: "确认密码"
						},
						editorType: "dxTextBox",
						editorOptions: {
							// mode: "password",
							showClearButton:true
						},
						validationRules: [{
							type: "required",
							message: "请确认密码"
						}, {
							type: "compare",
							message: "密码和确认密码不一致",
							comparisonTarget: function () {
								return M1S11addIns.option("formData").cPasswordTbSupuser;
							}
						}]
					}
				]
			}, {
				itemType: "group",
				caption: "企业信息",
				colCount: 3,
				items: [{
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cCompnameTbSupuser',
						label: {
							text: '公司名称'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 4000,
							min: 0,
							message: '长度超限，最长为4000！'
						}, ]
					}, {
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cContacterTbSupuser',
						label: {
							text: '联系人'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 400,
							min: 0,
							message: '长度超限，最长为400！'
						}, ]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cComaddressTbSupuser',
						label: {
							text: '公司地址'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 4000,
							min: 0,
							message: '长度超限，最长为4000！'
						}, ]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cComtaxnumberTbSupuser',
						label: {
							text: '税号'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 50,
							min: 0,
							message: '长度超限，最长为50！'
						}, ]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cCcodTbSupuser',
						label: {
							text: '统一社会信用代码'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 100,
							min: 0,
							message: '长度超限，最长为100！'
						}, ]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					 {
						 dataField: "cContacttellTbSupuser",
						 label: {
						 	text: '联系电话'
						 },
					 	editorOptions: {
					 		mask: "+1 (X00) 000-0000",
					 		maskRules: {
					 			"X": /[02-9]/
					 		},
					 		maskInvalidMessage: "请输入正确的格式",
					 		useMaskedValue: true
					 	},
					 	validationRules: [{
					 		type: "pattern",
					 		pattern: /^\+\s*1\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/,
					 		message: "请输入正确的格式"
					 	}]
					 },
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cComphoneTbSupuser',
						label: {
							text: '公司固定电话'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 1000,
							min: 0,
							message: '长度超限，最长为1000！'
						}, ]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cComfaxnoTbSupuser',
						label: {
							text: '传真'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 50,
							min: 0,
							message: '长度超限，最长为50！'
						}, ]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cCombanknameTbSupuser',
						label: {
							text: '开户银行'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 4000,
							min: 0,
							message: '长度超限，最长为4000！'
						}, ]
					},
					{
						colSpan: 1,
						itemType: "empty",
					}, {
						colSpan: 1,
						itemType: "empty",
					},
					{
						dataField: 'cComaccountnoTbSupuser',
						label: {
							text: '账号'
						},
						editorOptions: {
							showClearButton: true,
						},
						validationRules: [{
							type: 'required',
							max: 1000,
							min: 0,
							message: '长度超限，最长为1000！'
						}, ]
					},
					// {
					// 	dataField: 'cIdTbSupuser',
					// 	label: {
					// 		text: '主键'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 40,
					// 		min: 0,
					// 		message: '长度超限，最长为40！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cComremarkTbSupuser',
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
					// 	dataField: 'cDrTbSupuser',
					// 	label: {
					// 		text: '删除标识'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 2,
					// 		min: 0,
					// 		message: '长度超限，最长为2！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cTimestampTbSupuser',
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
					// 	dataField: 'cCreaterTbSupuser',
					// 	label: {
					// 		text: '创建人'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cCreatetimeTbSupuser',
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
					// 	dataField: 'cModifierTbSupuser',
					// 	label: {
					// 		text: '修改人'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cModifytimeTbSupuser',
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
					// 	dataField: 'cSw01TbSupuser',
					// 	label: {
					// 		text: '扩展字段1'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw02TbSupuser',
					// 	label: {
					// 		text: '扩展字段2'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw03TbSupuser',
					// 	label: {
					// 		text: '扩展字段3'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw04TbSupuser',
					// 	label: {
					// 		text: '扩展字段4'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw05TbSupuser',
					// 	label: {
					// 		text: '扩展字段5'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw06TbSupuser',
					// 	label: {
					// 		text: '扩展字段6'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw07TbSupuser',
					// 	label: {
					// 		text: '扩展字段7'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw08TbSupuser',
					// 	label: {
					// 		text: '扩展字段8'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw09TbSupuser',
					// 	label: {
					// 		text: '扩展字段9'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw10TbSupuser',
					// 	label: {
					// 		text: '扩展字段10'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw11TbSupuser',
					// 	label: {
					// 		text: '扩展字段11'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw12TbSupuser',
					// 	label: {
					// 		text: '扩展字段12'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw13TbSupuser',
					// 	label: {
					// 		text: '扩展字段13'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw14TbSupuser',
					// 	label: {
					// 		text: '扩展字段14'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
					// {
					// 	dataField: 'cSw15TbSupuser',
					// 	label: {
					// 		text: '扩展字段15'
					// 	},
					// 	editorOptions: {
					// 		showClearButton: true,
					// 	},
					// 	validationRules: [{
					// 		type: 'stringLength',
					// 		max: 50,
					// 		min: 0,
					// 		message: '长度超限，最长为50！'
					// 	}, ]
					// },
				]
			}, ]
		}).dxForm("instance");

		$('#addsure').dxButton({
			text: '立即注册',
			icon: 'todo',
			validationGroup: validationGroupName,
			onClick: function (e) {
				console.log(99999999)
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
				msg.data.gyLoginM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11A_serDel_Judgment();
				if (M1S11A_serDel_mark != 'M1S11A_success') {} else {
					msg.data.processkey = 'GY_LOGIN_M1S11A';
					msg.processKey = 'GY_LOGIN/M1S11A';
					
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GY_LOGIN/M1S11A'),
						dataType: 'json', //返回格式为json           
						async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post', //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
//								var websocketData = ['[{"objId":"GY_LOGIN_websocket","funName":"GY_LOGIN","funType":"M1S11","tbName":"TB_SUPUSER","dataId":"AUD"}]']
//								send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 120000)
								return;
							}
							/*M1S11_serDel();

							addIns.hide()*/

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
			colCount: 3,
			items: [{
					dataField: 'cIdTbSupuser',
					label: {
						text: '主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 40,
						min: 0,
						message: '长度超限，最长为40！'
					}, ]
				},
				{
					dataField: 'cContacttellTbSupuser',
					label: {
						text: '联系电话'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 400,
						min: 0,
						message: '长度超限，最长为400！'
					}, ]
				},
				{
					dataField: 'cComaddressTbSupuser',
					label: {
						text: '公司地址'
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
					dataField: 'cCombanknameTbSupuser',
					label: {
						text: '开户银行'
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
					dataField: 'cComaccountnoTbSupuser',
					label: {
						text: '账号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					}, ]
				},
				{
					dataField: 'cComtaxnumberTbSupuser',
					label: {
						text: '税号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cComphoneTbSupuser',
					label: {
						text: '公司固定电话'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					}, ]
				},
				{
					dataField: 'cComfaxnoTbSupuser',
					label: {
						text: '传真'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cCcodTbSupuser',
					label: {
						text: '统一社会信用代码'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 100,
						min: 0,
						message: '长度超限，最长为100！'
					}, ]
				},
				{
					dataField: 'cComremarkTbSupuser',
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
					dataField: 'cUsernamTbSupuser',
					label: {
						text: '登录用户名'
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
					dataField: 'cPasswordTbSupuser',
					label: {
						text: '密码'
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
					dataField: 'cDrTbSupuser',
					label: {
						text: '删除标识'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 2,
						min: 0,
						message: '长度超限，最长为2！'
					}, ]
				},
				{
					dataField: 'cTimestampTbSupuser',
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
					dataField: 'cCreaterTbSupuser',
					label: {
						text: '创建人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cCreatetimeTbSupuser',
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
					dataField: 'cModifierTbSupuser',
					label: {
						text: '修改人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cModifytimeTbSupuser',
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
					dataField: 'cSw01TbSupuser',
					label: {
						text: '扩展字段1'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw02TbSupuser',
					label: {
						text: '扩展字段2'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw03TbSupuser',
					label: {
						text: '扩展字段3'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw04TbSupuser',
					label: {
						text: '扩展字段4'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw05TbSupuser',
					label: {
						text: '扩展字段5'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw06TbSupuser',
					label: {
						text: '扩展字段6'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw07TbSupuser',
					label: {
						text: '扩展字段7'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw08TbSupuser',
					label: {
						text: '扩展字段8'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw09TbSupuser',
					label: {
						text: '扩展字段9'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw10TbSupuser',
					label: {
						text: '扩展字段10'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw11TbSupuser',
					label: {
						text: '扩展字段11'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw12TbSupuser',
					label: {
						text: '扩展字段12'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw13TbSupuser',
					label: {
						text: '扩展字段13'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw14TbSupuser',
					label: {
						text: '扩展字段14'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cSw15TbSupuser',
					label: {
						text: '扩展字段15'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 50,
						min: 0,
						message: '长度超限，最长为50！'
					}, ]
				},
				{
					dataField: 'cContacterTbSupuser',
					label: {
						text: '联系人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength',
						max: 400,
						min: 0,
						message: '长度超限，最长为400！'
					}, ]
				},
				{
					dataField: 'cCompnameTbSupuser',
					label: {
						text: '公司名称'
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
				msg.data.gyLoginM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {} else {
					msg.data.processkey = 'GY_LOGIN_M1S11U';
					msg.processKey = 'GY_LOGIN/M1S11U';
					$.ajax({
						url: Cake.Piper.getAuthUrl(workFlowUrl),
						dataType: 'json', //返回格式为json           
						async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post', //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
								var websocketData = ['[{"objId":"GY_LOGIN_websocket","funName":"GY_LOGIN","funType":"M1S11","tbName":"TB_SUPUSER","dataId":"AUD"}]']
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
	//Script ------------------------------------
})