
///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let tabledataS2 = []; //用于接收表格数据源
let searchdataM2; //每个查询条件form的数据
let searchdataFormM2; 
let cgy = [];//采购员
let qdgs = [];
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
			md: 4,
			sm: 2,
			xs: 1,
		},
		//所有查询条件为一组的代码段
		itemType: 'group',
		items: [
			{
				dataField:'cCreatetime_star',
				label:{
					text:'开始时间'
				},
             editorOptions:{
                            type:'date',
                            value : new Date(),
                            displayFormat:'yyyy-MM-dd'
			}
			},
			{
				dataField:'cCreatetime_end',
				label:{
					text:'结束时间'
				},
             editorOptions:{
                            type:'date',
                            value : new Date(),
                            displayFormat:'yyyy-MM-dd'

				}
			},
			{
				dataField:'cConnum',
				label:{
					text:'合同号'
				},
				editorOptions: {
				showClearButton: true,
				}
			}
		]
	}).dxForm('instance');

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
				dataField: 'cConnumTbDocumeform',
				label: {
					text: '内贸合同号'
				},
				editorOptions: {
					showClearButton: true,
				}
			},
			{
				dataField: 'cGoodsnameTbDocumeform',
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
						width: 1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
						height: 450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
					}).dxPopup('instance')
					addIns.option('title', 'CG_XXLY')
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
						// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
						return;
					}
					addIns = $('#addmotai').dxPopup({
						//模态框增加name    
						width: 1000,
						height: 450
					}).dxPopup('instance')
					addIns.option('title', 'CG_XXLY');
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
						data: {
						}
					};
					//前后端统一叫'tscLtrawbin' 

					msg.data.cgXxlyM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
					console.log(msg)
					M1S11D_serDel_Judgment();
					if (M1S11D_serDel_mark != 'M1S11D_success') {
					} else {
						$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11D'), dataType: 'json',   //返回格式为json   
							async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
							type: 'post',   //请求方式 get 或者post , 
							contentType: 'application/json',
							success: function (data) {
								let select = data.msg
								if (data.errcode == 0) {
									DevExpress.ui.notify(data.msg, 'success', 3000);
									M1S11_serDel();
//									var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
//									send(websocketData)

								}
								else {
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
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",

				icon: 'remove',
				text: '生成信息卡',
				onClick: function () {
					// let grid1 = $('#dataGridS1').dxDataGrid('instance');
					// let selectedRowKeys = grid1.getSelectedRowKeys()
					// let rowsData = grid1.getSelectedRowsData()
					// //脚本执行  
					// if (selectedRowKeys.length < 1) {
					// 	DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
					// 	return;
					// }

					$('#addmotai').show()
					addIns = $('#addmotai').dxPopup({
						// width: function(){
						// 	return innerWidth -50
						// },                  //为了规范限制模态框大小//用脚本标识模态框的标题
						// height: function(){
						// 	return innerHeight -50
						// },    
						fullScreen: true               //为了规范限制模态框大小//用脚本标识模态框的标题
					}).dxPopup('instance')
					addIns.option('title', 'CG_XXLY')
					addIns.show();
					M1S11T_addfun();
					M1S11addIns.option('formData', new Object())
					
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
					M1S11_serDel();
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
        {
            dataField: 'cSw10',
            caption: '采购员',
            calculateDisplayValue: function(rowData) {
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
            calculateDisplayValue: function(rowData) {
                let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cCludecom);
                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }
            }
        },
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
			dataField: 'cCreater',
			caption: '创建人',
		},
        { 
			dataField: 'cCreatetime',
			caption: '创建时间',					dataType: "date",
			format: "yyyy-MM-dd",

		},
        { 
			dataField: 'cModifier',
			caption: '修改人',
		},
		{ 
			dataField: 'cModifytime',
			caption: '修改时间',					dataType: "date",
			format: "yyyy-MM-dd",

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

	var dataGridS2columns = [
//		{ 
//			dataField: 'cIdTbDocumeform',
//			caption: '主键',
//		},
//		{ 
//			dataField: 'cSw01TbDocumeform',
//			caption: '扩展字段1',
//		},
		{ 
			dataField: 'cOutmoneyTbDocumeform',
			caption: '外贸金额',
		},
		{ 
			dataField: 'cAgreedtaxTbDocumeform',
			caption: '协定税率',
		},
		{ 
			dataField: 'cOutpbsTbDocumeform',
			caption: '外贸业务主办',
		},
		{ 
			dataField: 'cChiedeTbDocumeform',
			caption: '中国出口报关审核人',
		},
		{ 
			dataField: 'cStateTbDocumeform',
			caption: '状态',
		},
//		{ 
//			dataField: 'cSw09TbDocumeform',
//			caption: '扩展字段9',
//		},
		{ 
			dataField: 'cHscodeTbDocumeform',
			caption: 'HS编码',
		},
		{ 
			dataField: 'cDataedpTbDocumeform',
			caption: '数据录用单证制作人',
		},
//		{ 
//			dataField: 'cTimestampTbDocumeform',
//			caption: '时间戳',					dataType: "date",
//			format: "yyyy-MM-dd",
//
//		},
		{ 
			dataField: 'cModifierTbDocumeform',
			caption: '修改人',
		},
//		{ 
//			dataField: 'cSw06TbDocumeform',
//			caption: '扩展字段6',
//		},
//		{ 
//			dataField: 'cSw07TbDocumeform',
//			caption: '扩展字段7',
//		},
//		{ 
//			dataField: 'cSw08TbDocumeform',
//			caption: '扩展字段8',
//		},
//		{ 
//			dataField: 'cSw15TbDocumeform',
//			caption: '扩展字段15',
//		},
//		{ 
//			dataField: 'cSw02TbDocumeform',
//			caption: '扩展字段2',
//		},
		{ 
			dataField: 'cTypenameTbDocumeform',
			caption: '商品和服务分类简称',
		},
		{ 
			dataField: 'cExporterTbDocumeform',
			caption: '出口商',
		},
		{ 
			dataField: 'cIndimportTbDocumeform',
			caption: '印尼进口端管制条件',
		},
//		{ 
//			dataField: 'cSw12TbDocumeform',
//			caption: '扩展字段12',
//		},
		{ 
			dataField: 'cSpecTbDocumeform',
			caption: '规格型号',
		},
		{ 
			dataField: 'cStaunitTbDocumeform',
			caption: '法定单位',
		},
		{ 
			dataField: 'cSupervisionTbDocumeform',
			caption: '监管条件',
		},
		{ 
			dataField: 'cTaxrateTbDocumeform',
			caption: '退税率',
		},
		{ 
			dataField: 'cOutconnumTbDocumeform',
			caption: '外贸合同号',
		},
		{ 
			dataField: 'cComtaxnumberTbDocumeform',
			caption: '税号',
		},
		{ 
			dataField: 'cPpnTbDocumeform',
			caption: 'PPN',
		},
		{ 
			dataField: 'cShnameTbDocumeform',
			caption: '收货单位',
		},
		{ 
			dataField: 'cIndidaTbDocumeform',
			caption: '印度尼西亚进口报关审核人',
		},
//		{ 
//			dataField: 'cSw04TbDocumeform',
//			caption: '扩展字段4',
//		},
//		{ 
//			dataField: 'cSw11TbDocumeform',
//			caption: '扩展字段11',
//		},
//		{ 
//			dataField: 'cSw13TbDocumeform',
//			caption: '扩展字段13',
//		},
		{ 
			dataField: 'cConmoneyTbDocumeform',
			caption: '内贸金额',
		},
		{ 
			dataField: 'cBmTbDocumeform',
			caption: 'BM',
		},
		{ 
			dataField: 'cWhecooTbDocumeform',
			caption: '是否合适办产地证',
		},
		{ 
			dataField: 'cTotaltaxrTbDocumeform',
			caption: '合计税率',
		},
		{ 
			dataField: 'cInpbsTbDocumeform',
			caption: '内贸采购业务主办',
		},
//		{ 
//			dataField: 'cSw03TbDocumeform',
//			caption: '扩展字段4',
//		},
//		{ 
//			dataField: 'cSw10TbDocumeform',
//			caption: '扩展字段10',
//		},
		{ 
			dataField: 'cUnitTbDocumeform',
			caption: '成交单位',
		},
		{ 
			dataField: 'cConnumTbDocumeform',
			caption: '内贸合同号',
		},
		{ 
			dataField: 'cNameTbDocumeform',
			caption: '品名',
		},
		{ 
			dataField: 'cWeightTbDocumeform',
			caption: '重量',
		},
		{ 
			dataField: 'cComphoneTbDocumeform',
			caption: '联系电话',
		},
		{ 
			dataField: 'cPphTbDocumeform',
			caption: 'PPH',
		},
//		{ 
//			dataField: 'cSw05TbDocumeform',
//			caption: '扩展字段5',
//		},
		{ 
			dataField: 'cNumTbDocumeform',
			caption: '数量',
		},
		{ 
			dataField: 'cDeclarationTbDocumeform',
			caption: '申报要素',
		},
		{ 
			dataField: 'cInvoicecTbDocumeform',
			caption: '开票市',
		},
//		{ 
//			dataField: 'cDrTbDocumeform',
//			caption: '删除标识',
//		},
		{ 
			dataField: 'cCreaterTbDocumeform',
			caption: '创建人',
		},
		{ 
			dataField: 'cCreatetimeTbDocumeform',
			caption: '创建时间',					dataType: "date",
			format: "yyyy-MM-dd",

		},
//		{ 
//			dataField: 'cSw14TbDocumeform',
//			caption: '扩展字段14',
//		},
		{ 
			dataField: 'cSupplierTbDocumeform',
			caption: '供应商',
		},
		{ 
			dataField: 'cRemarkTbDocumeform',
			caption: '备注',
		},
		{ 
			dataField: 'cModifytimeTbDocumeform',
			caption: '修改时间',					dataType: "date",
			format: "yyyy-MM-dd",

		},
		{ 
			dataField: 'cGoodsnameTbDocumeform',
			caption: '物资名称',
		},
	]
	$('#dataGridS2').dxDataGrid({
		deferRendering: false,

		dataSource: tabledataS2,
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
		height: 450,
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
                success: function(result) {
                    result.data.forEach(item => {
                        cgy.push(item);
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
        		success: function(result) {
        			result.data.forEach(item => {
        				qdgs.push(item);
        			});
        		},
        		error: function() {
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
		msg.data.cgMnhtM1s1 = [searchdataFormM1.option('formData')];
  let startTime = msg.data.cgMnhtM1s1[0].cCreatetime_star;
  msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
  let endTime = msg.data.cgMnhtM1s1[0].cCreatetime_end;
  msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);M1S11Q_serDel_Judgment();
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
			//../../tdhc_cgsys/CG_XXLY/M1S11Q
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11Q'),
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
					select = data.data.cgMnhtM1s1
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
						text: '是否合适办产地证'
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
	function M1S11_Updatefun() {
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
						text: '是否合适办产地证'
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
				M1S11U_serDel_Judgment();
				if (M1S11U_serDel_mark != 'M1S11U_success') {
				} else {
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11U'),
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
	//Script ------------------------------------


	function M1S11T_addfun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
				
				{
					dataField: 'cConnum',
					label: {
						text: '品名'
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
					dataField: 'cConnum',
					label: {
						text: '规格/型号'
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
					colSpan: 1,
					itemType: 'empty',
				},
				{
					dataField: 'cConnum',
					label: {
						text: '商品和服务分类简称'
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
					dataField: 'cConnum',
					label: {
						text: '数量'
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
					dataField: 'cConnum',
					label: {
						text: '成交单位'
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
					dataField: 'cConnum',
					label: {
						text: '法定单位'
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
					dataField: 'cConnum',
					label: {
						text: 'HS编码'
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
					dataField: 'cConnum',
					label: {
						text: '监管条件'
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
					dataField: 'cConnum',
					label: {
						text: '退税率'
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
					colSpan:3,
					dataField: 'cConnum',
					label: {
						text: '申报要素'
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
					dataField: 'cConnum',
					label: {
						text: '品名'
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
					dataField: 'cConnum',
					label: {
						text: '规格/型号'
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
					colSpan: 1,
					itemType: 'empty',
				},
				{
					dataField: 'cConnum',
					label: {
						text: '商品和服务分类简称'
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
					dataField: 'cConnum',
					label: {
						text: '数量'
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
					dataField: 'cConnum',
					label: {
						text: '成交单位'
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
					dataField: 'cConnum',
					label: {
						text: '法定单位'
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
					dataField: 'cConnum',
					label: {
						text: 'HS编码'
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
					dataField: 'cConnum',
					label: {
						text: '监管条件'
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
					dataField: 'cConnum',
					label: {
						text: '退税率'
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
					colSpan:3,
					dataField: 'cConnum',
					label: {
						text: '申报要素'
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
					dataField: 'cConnum',
					label: {
						text: '内贸合同号'
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
					dataField: 'cConnum',
					label: {
						text: '内贸金额（RMB）'
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
					dataField: 'cConnum',
					label: {
						text: '品名'
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
					dataField: 'cConnum',
					label: {
						text: '外贸合同号'
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
					dataField: 'cConnum',
					label: {
						text: '外贸金额（USD）'
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
					dataField: 'cConnum',
					label: {
						text: '税号'
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
					dataField: 'cConnum',
					label: {
						text: '供应商'
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
					dataField: 'cConnum',
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
					dataField: 'cConnum',
					label: {
						text: 'BM'
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
					dataField: 'cConnum',
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
					colSpan: 1,
					itemType: 'empty',
				},
				{
					dataField: 'cConnum',
					label: {
						text: 'PPN'
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
					dataField: 'cConnum',
					label: {
						text: '联系电话'
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
					colSpan: 1,
					itemType: 'empty',
				},
				{
					dataField: 'cConnum',
					label: {
						text: 'PPH'
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
					dataField: 'cConnum',
					label: {
						text: '出口商'
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
					dataField: 'cConnum',
					label: {
						text: '是否适合办产地证'
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
					dataField: 'cConnum',
					label: {
						text: '合计税率'
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
					dataField: 'cConnum',
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
					dataField: 'cConnum',
					label: {
						text: '印尼进口端管制条件'
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
					dataField: 'cConnum',
					label: {
						text: '协定税率'
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
					colSpan:3,
					dataField: 'cConnum',
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
					
					dataField: 'cConnum',
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
					
					dataField: 'cConnum',
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
					
					dataField: 'cConnum',
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
					
					dataField: 'cConnum',
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
					
					dataField: 'cConnum',
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
				{
					colSpan: 2,
					itemType: 'empty',
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
}) 		    