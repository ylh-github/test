
///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let hsState = [];//信息卡状态
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let searchdataM2; //每个查询条件form的数据
let searchdataFormM2;
let cgy = [];//采购员
let qdgs = [];
let jhdd1 = []; //交货地点
let trouble = [];//有问题的合同
let addGang = [];
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
let updatemonigrid;
let cTime = new Date();
let ttcConnum;
let ttcOutconnum;
let ttcConmoney;
let ttcSupplier;
let ttcSupphone;
let ttcChiede;
let ttcMoneyusd;
let ttcMoneyrmb;
let ttcExporter;
let ttcDataedp;
let ttcIndida;
let ttcOutpbs;
let ttcWeight;
let ttcInvoicec;
let ttcOutmoney;
let ttcShname;
let madeState = [];//制作人完成状态
let comp_Cludecom = []; //签订公司
let cont_supplier = []; //供应商
let addmonigrid1;
let addmonigrid2;
let jiesdata;
let dhqk = [];
let fkqk = [];
let kpxx = [];
let jsxy = [];
let wanchengzhuangtai = [];
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
Date.prototype.Format = function(fmt){ //author: meizz   
	  var o = {   
	    "M+" : this.getMonth()+1,                 //月份   
	    "d+" : this.getDate(),                    //日   
	    "h+" : this.getHours(),                   //小时   
	    "m+" : this.getMinutes(),                 //分   
	    "s+" : this.getSeconds(),                 //秒   
	    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
	    "S"  : this.getMilliseconds()             //毫秒   
	  };   
	  if(/(y+)/.test(fmt))   
	    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
	  for(var k in o)   
	    if(new RegExp("("+ k +")").test(fmt))   
	  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
	  return fmt;   
	}
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
		//js保留两位小数，不够自动补充0
function returnFloat(value) {
var value = Math.round(parseFloat(value) * 100) / 100;
var xsd = value.toString().split(".");
if (xsd.length == 1) {
value = value.toString() + ".00";
return value;
}
if (xsd.length > 1) {
if (xsd[1].length < 2) {
value = value.toString() + "0";
}
return value;
}
}
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
	                dataField: 'startTime',
	                label: {
	                    text: '开始时间'
	                },
	                editorType: "dxDateBox",
	                editorOptions: {
	                    width: "100%",
	                    type: "date",
	                    displayFormat: 'yyyy-MM-dd',
	                    value: new Date(new Date().getFullYear(),'00','01'),
	                },
	            },
	            {
	                dataField: 'endTime',
	                label: {
	                    text: '结束时间'
	                },
	                editorType: "dxDateBox",
	                editorOptions: {
	                    width: "100%",
	                    type: "date",
	                    displayFormat: 'yyyy-MM-dd',
	                    value: new Date(),
	                },
	            },
//        	{
//                dataField: 'cCludecom',
//                label: {
//                    text: '签订公司'
//                },
//                editorType: 'dxTagBox',
//                editorOptions: {
//                    //以上完成对没+++++++++++++++++++++++++++++有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: qdgs,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                },
//            },
            
        /*	{
                dataField: 'cConnumtime',
                label: {
                    text: '合同号年限'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },*/
        	
        	{
                dataField: 'cConnum',
                label: {
                    text: '合同号'
                },
//                editorType: "dxSelectBox",
//                editorOptions: {
//                    dataSource: connum,
//                    valueExpr: 'cConnum',
//                    displayExpr: 'cConnum',
//                    placeholder: "请选择",
//                    showClearButton: true,
//                    width: '100%',
//                    searchEnabled: true,
//                            
//                 }
                editorOptions: {
                    showClearButton: true,
                }
            },	
  /*          {
                dataField: 'cSupplier',
                label: {
                    text: '供应商'
                },
//                editorType: "dxSelectBox",
//                editorOptions: {
//                    dataSource: supplier,
//                    valueExpr: 'cSupplier',
//                    displayExpr: 'cSupplier',
////                    placeholder: "请选择",
//                    showClearButton: true,
//                    width: '100%',
//                    searchEnabled: true,
//                }
                editorOptions: {
                    showClearButton: true,
                }
            },*/
        /*    {
            	dataField: 'cCheckway',
            	label: {
            		text: '到货情况'
            	},
            	editorType: 'dxTagBox',
            	editorOptions: {
            		//以上完成对没有联动数据源配置
            		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            		dataSource: dhqk,
            		valueExpr: 'cSubitemid',
            		displayExpr: 'cSubitemdes',
            		searchEnable: true,
            		showClearButton: true,
            	},
            },*/
           
         /*   {
            	dataField: 'cTransway',
            	label: {
            		text: '发票情况'
            	},
            	editorType: 'dxTagBox',
            	editorOptions: {
            		//以上完成对没有联动数据源配置
            		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            		dataSource: kpxx,
            		valueExpr: 'cSubitemid',
            		displayExpr: 'cSubitemdes',
            		searchEnable: true,
            		showClearButton: true,
            	},
            },*/
            {
                dataField: 'cSw28',
                label: {
                    text: '是否有结算协议'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: jsxy,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                },
            },
//            {
//                dataField: 'cSw10',
//                label: {
//                    text: '采购员'
//                },
//                editorType: 'dxTagBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: cgy,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    searchEnabled:true,
//                    showClearButton: true,
//                    height:26,
//                    width: 160,
//                    showSelectionControls: true,
////                    readOnly:true,
//                },
//            },
            /*{
            	dataField: 'cSignstep',
            	label: {
            		text: '付款情况'
            	},
            	editorType: 'dxTagBox',
            	editorOptions: {
            		//以上完成对没有联动数据源配置
            		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            		dataSource: fkqk,
            		valueExpr: 'cSubitemid',
            		displayExpr: 'cSubitemdes',
            		searchEnable: true,
            		showClearButton: true,
            	},
            },*/
           /* {
                dataField: 'cOrdernum',
                label: {
                    text: '请购单号'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },*/
        
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
 $('#operateFormM1S1').dxForm({
        width: '100%',
        colCount: 200,
        items: [
        	{
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '查询',
                    onClick: function() {
                        M1S11_serDel();
                    }
                }
            },
            {
	            name: 'M1S11Q',
	            itemType: 'button',
	            buttonOptions: {
	                icon: 'search',
	                text: '合同信息',
	                onClick: function() {
						change = '3'
							let grid = $('#dataGridS1').dxDataGrid('instance');
							let rowsData = grid.getSelectedRowsData()[0]
							let selectedRowKeys = grid.getSelectedRowKeys()
							if (selectedRowKeys.length < 1) {
								// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
								DevExpress.ui.notify('请选择要查看的合同！！！', 'info', 2000);
								return;
							}
						/*	if (selectedRowKeys.length > 1) {
								// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
								// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
								return;
							}*/
							$('#addmotai5').css('display','block')
							addIns2 = $('#addmotai5').dxPopup({
								fullScreen: true
							}).dxPopup('instance')
							addIns2.option('title', '合同信息');
							addIns2.show();
							UpdateD_moni2();
							 if(addmonigrid2 == null){
			                    	DevExpress.ui.notify('该合同没有拟合同查看不了合同详细信息！！！', 'info', 3000);
			                    	addIns2.hide();
									return;
			                    }
							// 调用模态框函数    
							let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
							//签订公司
							tcCludecom = dataGrid.cCludecom;
							console.log(dataGrid.cSupplier)
							let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
		                    if (matchedItem == null || matchedItem == undefined) {
		                        return "";
		                    } else {
		                    	tcCludecom = matchedItem.cSubitemdes
//		                    	console.log(tcCludecom);
//		                        return matchedItem.cSubitemdes;
		                    }
		                     $('#addForm5').dxForm('instance').option("formData", new Object);
		                     $('#clauseForm5').dxForm('instance').option("formData",null);
		                     $('#addmoni5').dxDataGrid('instance').option('dataSource',null);
							 $('#addForm5').dxForm('instance').getEditor('cOutconnum').option('value', dataGrid.cOutconnum);
							 $('#addForm5').dxForm('instance').getEditor('cConnum').option('value', dataGrid.cConnum);
							 $('#addForm5').dxForm('instance').getEditor('cCludecom').option('value', tcCludecom);
							 $('#addForm5').dxForm('instance').getEditor('cCludetime').option('value', dataGrid.cCludetime);
							 $('#addForm5').dxForm('instance').getEditor('cSupplier').option('value', dataGrid.cSupplier);
							 $('#addForm5').dxForm('instance').getEditor('cSignplace').option('value', dataGrid.cSignplace);
							 //合同物资
							 $('#addmoni5').dxDataGrid('instance').option('dataSource', addmonigrid1);
							 //合同条款
							 $('#clauseForm5').dxForm('instance').option("formData", addmonigrid2);
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw38').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw38').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw38').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw39').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw39').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw39').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw40').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw40').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw40').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw41').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw41').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw41').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw42').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw42').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw42').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw43').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw43').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw43').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw44').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw44').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw44').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw45').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw45').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw45').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw46').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw46').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw46').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw47').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw47').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw47').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw48').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw48').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw48').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw49').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw49').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw49').option('visible', true)
							 }
							 if ($('#clauseForm5').dxForm('instance').getEditor('cSw50').option('value') === '') {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw50').option('visible', false)
							 } else {
								 $('#clauseForm5').dxForm('instance').getEditor('cSw50').option('visible', true)
							 }
							 //交货期限
//							 $('#deadline4').dxForm('instance').getEditor('cDelivdate').option('value', dataGrid.cDelivdate);
//							 jhdd1
//							 console.log(dataGrid.cDelivplace)
							 //交货地点
//							 $('#deadline4').dxForm('instance').getEditor('cDelivplace').option('value', dataGrid.cDelivplace);
							 //付款方式
//							 $('#pice4').dxForm('instance').getEditor('cPayway').option('value', dataGrid.cPayway);

						}
	            }
				}, 
            {
            name: 'M1S11A',
            itemType: 'button',
            buttonOptions: {
                icon: 'plus',
                text: '添加结算协议',
                onClick: function() {
					$('#addmotai31').css('display','block')
                	addIns31=$('#addmotai31').dxPopup({
                		'visible': true,  //设置属性不可见
                		height:"100vh",  //设置高度
                		width: "100vw",  //设置宽度
                	}).dxPopup('instance');   

                	let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
                	/*if(dataGrid.cStatexxk !='xxk06'){
                		DevExpress.ui.notify('该合同未生成正式合同，不能进行结算协议！！！！！', 'info', 2000);
                		addIns31.hide()
                		return;
                	}*/
                		//签订公司
                		console.log(dataGrid.cSupplier);
                		tcCludecom = dataGrid.cCludecom;
                		console.log(tcCludecom)
                		let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
                	 if (matchedItem == null || matchedItem == undefined) {
                	     return "";
                	 } else {
                		 tcCludecom = matchedItem.cSubitemdes
//                	 	console.log(tcCludecom);
//                	     return matchedItem.cSubitemdes;
                	 }
                	 console.log(tcCludecom);
                	// document.getElementById('cCludecom').value = null;
                	// document.getElementById('cSupplier').value  = null;
                	// document.getElementById('cCludecom2').value = null;
                	// document.getElementById('cSupplier2').value = null;
                	 document.getElementById('cCludecom').value = tcCludecom;
                	 document.getElementById('cSupplier').value = dataGrid.cSupplier;
                	 document.getElementById('cCludecom2').value = tcCludecom;
                	 document.getElementById('cSupplier2').value = dataGrid.cSupplier;
                	 //金额
                	 document.getElementById('cConmoney').value = dataGrid.cSw09
                	 //到货金额
//                	 document.getElementById('cGoodsmoney').value = dataGrid.cConmoney
                	 //已付款金额
//                	 document.getElementById('cPaymoney').value = dataGrid.cSw01
                	 //未付款金额
//                	 document.getElementById('cResidualq').value = dataGrid.cSw02
                	// console.log(dataGrid.cCludetime)
                	// console.log(new Date(dataGrid.cCludetime))
                	// console.log(new Date(dataGrid.cCludetime).Format("yyyy-MM-dd"))
                	document.getElementById('cCludetime').value = new Date(dataGrid.cCludetime).Format("yyyy年MM月dd日");
                	document.getElementById('cConnum').value = dataGrid.cConnum;
                	$('#addcontract').dxButton({
                		text: '确定',
                		icon: 'todo', 
                		onClick: function (e) {
//                			let validateResult = e.validationGroup.validate();
//                			if (!validateResult.isValid) {
//                				DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//                				return;
//                			}
                			//合同号
                			const cConnum=document.getElementById('cConnum').value; 
                			//买方
                			const cCludecom=document.getElementById('cCludecom').value;  
                		   // 卖方
                		   const cSupplier=document.getElementById('cSupplier').value;   
                		  //  签订时间
                		  const cCludetime=document.getElementById('cCludetime').value;    
                		   // 合同金额
                		   const cConmoney=document.getElementById('cConmoney').value;     
                			//到货总金额
                			const cGoodsmoney=document.getElementById('cGoodsmoney').value;   
                		  //  支付金额
                		  const cPaymoney=document.getElementById('cPaymoney').value;   
                		  //  余款
                		  const cResidualq=document.getElementById('cResidualq').value;    
                		  //  原因
                		  const cCause=document.getElementById('cCause').value;   
                		 //   赔偿金额
                		 const cPcmoney=document.getElementById('cPcmoney').value;    
                		   // 扣除条件
                		   const cKccause=document.getElementById('cKccause').value; 
                		   // 质保金
                		   const cZbmoney=document.getElementById('cZbmoney').value;  
                		   // 结算金额
                		   const cSettlemoney=document.getElementById('cSettlemoney').value;   
                			//  协议条款2
                			const cSw01=document.getElementById('cSw01').value;
//                			const cSw02=document.getElementById('cSw02').value;
                			msg = {
                				ver: '53cc62f6122a436083ec083eed1dc03d',
                				session: '42f5c0d7178148938f4fda29460b815a',
                				tag: {},
                				data: {
                					cConnum,
                					cCludecom,
                					cSupplier,
                					cCludetime,
                					cConmoney,
                					cGoodsmoney,
                					cPaymoney,
                					cResidualq,
                					cCause,
                					cPcmoney,
                					cKccause,
                					cZbmoney,
                					cSettlemoney,
                					cSw01
                				},
                			};   
                			 console.log(msg,'msg')
                				$.ajax({
                					url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/addJSXY'),
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
                						addIns31.hide()
                					},
                					error: function () {
                						DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                						// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                						//e.cancel=true;         
                					}
                				})
                			 
                		}
                	})
                	$('#canselcontract').dxButton({
                		text: '取消',
                		icon: 'remove',
                		onClick: function () {
                			//合同号
                			document.getElementById('cConnum').value = null; 
                			//买方
                			document.getElementById('cCludecom').value = null;  
                		   // 卖方
                		    document.getElementById('cSupplier').value = null;   
                		   //  签订时间
                		    document.getElementById('cCludetime').value = null;    
                		   // 合同金额
                		    document.getElementById('cConmoney').value = null;     
                			//到货总金额
                			document.getElementById('cGoodsmoney').value = null;   
                		  //  支付金额
                			document.getElementById('cPaymoney').value = null;   
                		  //  余款
                		  document.getElementById('cResidualq').value = null;    
                		  	//原因
                		  document.getElementById('cCause').value = null;   
                		  	//赔偿金额
                		  document.getElementById('cPcmoney').value = null;    
                		   // 扣除条件
                		   document.getElementById('cKccause').value = null; 
                		   // 质保金
                		   document.getElementById('cZbmoney').value = null;  
                		   // 结算金额
                		   document.getElementById('cSettlemoney').value = null;   
                			//  协议条款2
                			document.getElementById('cSw01').value = null;
//                			document.getElementById('cSw02').value;
                			addIns31.hide()
                		}
                	})
                }
            }
			}, 
		     {
	            name: 'M1S11A',
	            itemType: 'button',
	            buttonOptions: {
	                icon: 'search',
	                text: '查看结算协议',
	                onClick: function() {
						$('#addmotai31').css('display','block')
	                	addIns31=$('#addmotai31').dxPopup({
	                		'visible': true,  //设置属性不可见
	                		height:"100vh",  //设置高度
	                		width: "100vw",  //设置宽度
	                	}).dxPopup('instance');   

	                	let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
	                	/*if(dataGrid.cStatexxk !='xxk06'){
	                		DevExpress.ui.notify('该合同未生成正式合同，不能进行结算协议！！！！！', 'info', 2000);
	                		addIns31.hide()
	                		return;
	                	}*/
	                	if(jiesdata == null || jiesdata ==undefined){
	                		DevExpress.ui.notify('该合同未生成结算协议！！！！！', 'info', 3000);
	                		addIns31.hide();
	                		return;
	                	}
	                		//签订公司
	                		tcCludecom = dataGrid.cCludecom;
	                	let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
	                	 if (matchedItem == null || matchedItem == undefined) {
	                	     return "";
	                	 } else {
	                		 tcCludecom = matchedItem.cSubitemdes
//	                	 	console.log(tcCludecom);
//	                	     return matchedItem.cSubitemdes;
	                	 }
	                	 console.log(tcCludecom);
	                	// document.getElementById('cCludecom').value = null;
	                	// document.getElementById('cSupplier').value  = null;
	                	// document.getElementById('cCludecom2').value = null;
	                	// document.getElementById('cSupplier2').value = null;
	                	 document.getElementById('cCludetime').value = new Date(dataGrid.cCludetime).Format("yyyy年MM月dd日");
	                	 document.getElementById('cCludecom').value = tcCludecom;
	                	 document.getElementById('cSupplier').value = dataGrid.cSupplier;
	                	 document.getElementById('cCludecom2').value = tcCludecom;
	                	 document.getElementById('cSupplier2').value = dataGrid.cSupplier;
	                		document.getElementById('cConnum').value = dataGrid.cConnum;
	                	 //金额
	                	 document.getElementById('cConmoney').value = dataGrid.cSw09
	                	 //到货金额
	                	 document.getElementById('cGoodsmoney').value = dataGrid.cConmoney
	                	 //已付款金额
	                	 document.getElementById('cPaymoney').value = dataGrid.cSw01
	                	 //未付款金额
	                	 document.getElementById('cResidualq').value = dataGrid.cSw02
	                	// console.log(dataGrid.cCludetime)
	                	// console.log(new Date(dataGrid.cCludetime))
	                	// console.log(new Date(dataGrid.cCludetime).Format("yyyy-MM-dd"))
	                	document.getElementById('cCause').value = jiesdata.cCause;
	                	 document.getElementById('cPcmoney').value = jiesdata.cPcmoney;
	                	 document.getElementById('cKccause').value = jiesdata.cKccause;
	                	 document.getElementById('cZbmoney').value = jiesdata.cZbmoney;
	                	 document.getElementById('cSettlemoney').value = jiesdata.cSettlemoney;
	                	 document.getElementById('cSw01').value = jiesdata.cSw01;
	                /*	$('#addcontract').dxButton({
	                		text: '确定',
	                		icon: 'todo', 
	                		onClick: function (e) {
	                			let validateResult = e.validationGroup.validate();
	                			if (!validateResult.isValid) {
	                				DevExpress.ui.notify('数据不符合规范', 'info', 3000);
	                				return;
	                			}
	                			//合同号
	                			const cConnum=document.getElementById('cConnum').value; 
	                			//买方
	                			const cCludecom=document.getElementById('cCludecom').value;  
	                		   // 卖方
	                		   const cSupplier=document.getElementById('cSupplier').value;   
	                		  //  签订时间
	                		  const cCludetime=document.getElementById('cCludetime').value;    
	                		   // 合同金额
	                		   const cConmoney=document.getElementById('cConmoney').value;     
	                			//到货总金额
	                			const cGoodsmoney=document.getElementById('cGoodsmoney').value;   
	                		  //  支付金额
	                		  const cPaymoney=document.getElementById('cPaymoney').value;   
	                		  //  余款
	                		  const cResidualq=document.getElementById('cResidualq').value;    
	                		  //  原因
	                		  const cCause=document.getElementById('cCause').value;   
	                		 //   赔偿金额
	                		 const cPcmoney=document.getElementById('cPcmoney').value;    
	                		   // 扣除条件
	                		   const cKccause=document.getElementById('cKccause').value; 
	                		   // 质保金
	                		   const cZbmoney=document.getElementById('cZbmoney').value;  
	                		   // 结算金额
	                		   const cSettlemoney=document.getElementById('cSettlemoney').value;   
	                			//  协议条款2
	                			const cSw01=document.getElementById('cSw01').value;
//	                			const cSw02=document.getElementById('cSw02').value;
	                			msg = {
	                				ver: '53cc62f6122a436083ec083eed1dc03d',
	                				session: '42f5c0d7178148938f4fda29460b815a',
	                				tag: {},
	                				data: {
	                					cConnum,
	                					cCludecom,
	                					cSupplier,
	                					cCludetime,
	                					cConmoney,
	                					cGoodsmoney,
	                					cPaymoney,
	                					cResidualq,
	                					cCause,
	                					cPcmoney,
	                					cKccause,
	                					cZbmoney,
	                					cSettlemoney,
	                					cSw01
	                				},
	                			};   
	                			 console.log(msg,'msg')
	                				$.ajax({
	                					url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/addJSXY'),
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
	                						addIns31.hide()
	                					},
	                					error: function () {
	                						DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
	                						// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
	                						//e.cancel=true;         
	                					}
	                				})
	                			 
	                		}
	                	})*/
	                	$('#canselcontract').dxButton({
	                		text: '关闭',
	                		icon: 'remove',
	                		onClick: function () {
	                			//合同号
	                			document.getElementById('cConnum').value = null; 
	                			//买方
	                			document.getElementById('cCludecom').value = null;  
	                		   // 卖方
	                		    document.getElementById('cSupplier').value = null;   
	                		   //  签订时间
	                		    document.getElementById('cCludetime').value = null;    
	                		   // 合同金额
	                		    document.getElementById('cConmoney').value = null;     
	                			//到货总金额
	                			document.getElementById('cGoodsmoney').value = null;   
	                		  //  支付金额
	                			document.getElementById('cPaymoney').value = null;   
	                		  //  余款
	                		  document.getElementById('cResidualq').value = null;    
	                		  	//原因
	                		  document.getElementById('cCause').value = null;   
	                		  	//赔偿金额
	                		  document.getElementById('cPcmoney').value = null;    
	                		   // 扣除条件
	                		   document.getElementById('cKccause').value = null; 
	                		   // 质保金
	                		   document.getElementById('cZbmoney').value = null;  
	                		   // 结算金额
	                		   document.getElementById('cSettlemoney').value = null;   
	                			//  协议条款2
	                			document.getElementById('cSw01').value = null;
//	                			document.getElementById('cSw02').value;
	                			addIns31.hide()
	                		}
	                	})
	                }
	            }
				},
			 {
	            name: 'M1S11P',
	            itemType: 'button',
	            buttonOptions: {
	                icon: 'print',
	                text: '打印结算协议',
	                onClick: function() {
	                	console.log("结算协议打印")
	               	 let msgdate = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
	   					let cConnum = msgdate.cConnum;
	   					console.log(msgdate.cConnum)
	   						let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=account.cpt&cConnum=" + cConnum;
	   						window.open(url, "_blank");
	                }
	            }
	          },
	          {
		            name: 'M1S11U',
		            itemType: 'button',
		            buttonOptions: {
		                icon: 'save',
		                text: '修改结算协议',
		                onClick: function() {
							$('#addmotai31').css('display','block')
		                	addIns31=$('#addmotai31').dxPopup({
		                		'visible': true,  //设置属性不可见
		                		height:"100vh",  //设置高度
		                		width: "100vw",  //设置宽度
		                	}).dxPopup('instance');   

		                	let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
		                	if(jiesdata == null || jiesdata ==undefined){
		                		DevExpress.ui.notify('该合同未生成结算协议！！！！！', 'info', 3000);
		                		addIns31.hide();
		                		return;
		                	}
		                	if(jiesdata == null || jiesdata ==undefined){
		                		DevExpress.ui.notify('该合同未生成结算协议！！！！！', 'info', 3000);
		                		addIns31.hide();
		                		return;
		                	}
		                		//签订公司
		                		tcCludecom = dataGrid.cCludecom;
		                	let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
		                	 if (matchedItem == null || matchedItem == undefined) {
		                	     return "";
		                	 } else {
		                		 tcCludecom = matchedItem.cSubitemdes
//		                	 	console.log(tcCludecom);
//		                	     return matchedItem.cSubitemdes;
		                	 }
		                	 console.log(tcCludecom);
		                	// document.getElementById('cCludecom').value = null;
		                	// document.getElementById('cSupplier').value  = null;
		                	// document.getElementById('cCludecom2').value = null;
		                	// document.getElementById('cSupplier2').value = null;
		                	 document.getElementById('cCludetime').value = new Date(dataGrid.cCludetime).Format("yyyy年MM月dd日");
		                	 document.getElementById('cCludecom').value = tcCludecom;
		                	 document.getElementById('cSupplier').value = dataGrid.cSupplier;
		                	 document.getElementById('cCludecom2').value = tcCludecom;
		                	 document.getElementById('cSupplier2').value = dataGrid.cSupplier;
		                		document.getElementById('cConnum').value = dataGrid.cConnum;
		                	 //金额
		                	 document.getElementById('cConmoney').value = dataGrid.cSw09
		                	 //到货金额
		                	 document.getElementById('cGoodsmoney').value = dataGrid.cConmoney
		                	 //已付款金额
		                	 document.getElementById('cPaymoney').value = dataGrid.cSw01
		                	 //未付款金额
		                	 document.getElementById('cResidualq').value = dataGrid.cSw02
		                	// console.log(dataGrid.cCludetime)
		                	// console.log(new Date(dataGrid.cCludetime))
		                	// console.log(new Date(dataGrid.cCludetime).Format("yyyy-MM-dd"))
		                	document.getElementById('cCause').value = jiesdata.cCause;
		                	 document.getElementById('cPcmoney').value = jiesdata.cPcmoney;
		                	 document.getElementById('cKccause').value = jiesdata.cKccause;
		                	 document.getElementById('cZbmoney').value = jiesdata.cZbmoney;
		                	 document.getElementById('cSettlemoney').value = jiesdata.cSettlemoney;
		                	 document.getElementById('cSw01').value = jiesdata.cSw01;
		                	$('#addcontract').dxButton({
		                		text: '确定',
		                		icon: 'todo', 
		                		onClick: function (e) {
//		                			let validateResult = e.validationGroup.validate();
//		                			if (!validateResult.isValid) {
//		                				DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//		                				return;
//		                			}
		                			//合同号
		                			const cConnum=document.getElementById('cConnum').value; 
		                			//买方
		                			const cCludecom=document.getElementById('cCludecom').value;  
		                		   // 卖方
		                		   const cSupplier=document.getElementById('cSupplier').value;   
		                		  //  签订时间
		                		  const cCludetime=document.getElementById('cCludetime').value;    
		                		   // 合同金额
		                		   const cConmoney=document.getElementById('cConmoney').value;     
		                			//到货总金额
		                			const cGoodsmoney=document.getElementById('cGoodsmoney').value;   
		                		  //  支付金额
		                		  const cPaymoney=document.getElementById('cPaymoney').value;   
		                		  //  余款
		                		  const cResidualq=document.getElementById('cResidualq').value;    
		                		  //  原因
		                		  const cCause=document.getElementById('cCause').value;   
		                		 //   赔偿金额
		                		 const cPcmoney=document.getElementById('cPcmoney').value;    
		                		   // 扣除条件
		                		   const cKccause=document.getElementById('cKccause').value; 
		                		   // 质保金
		                		   const cZbmoney=document.getElementById('cZbmoney').value;  
		                		   // 结算金额
		                		   const cSettlemoney=document.getElementById('cSettlemoney').value;   
		                			//  协议条款2
		                			const cSw01=document.getElementById('cSw01').value;
//		                			const cSw02=document.getElementById('cSw02').value;
		                			msg = {
		                				ver: '53cc62f6122a436083ec083eed1dc03d',
		                				session: '42f5c0d7178148938f4fda29460b815a',
		                				tag: {},
		                				data: {
		                					cConnum,
		                					cCludecom,
		                					cSupplier,
		                					cCludetime,
		                					cConmoney,
		                					cGoodsmoney,
		                					cPaymoney,
		                					cResidualq,
		                					cCause,
		                					cPcmoney,
		                					cKccause,
		                					cZbmoney,
		                					cSettlemoney,
		                					cSw01
		                				},
		                			};   
		                			 console.log(msg,'msg')
	                			var result = DevExpress.ui.dialog.confirm("您确定要变更提交吗?", "确认变更提交");
								result.done(function (dialogResult) {
									if (dialogResult) {
										cake.Ui.LoadPanel.show()
		                			 //../../tdhc_cgsys/tab/addJSXY
		                				$.ajax({
		                					url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/updateJSXY'),
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
		                						addIns31.hide();
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
		                	})
		                	$('#canselcontract').dxButton({
		                		text: '取消',
		                		icon: 'remove',
		                		onClick: function () {
		                			//合同号
		                			document.getElementById('cConnum').value = null; 
		                			//买方
		                			document.getElementById('cCludecom').value = null;  
		                		   // 卖方
		                		    document.getElementById('cSupplier').value = null;   
		                		   //  签订时间
		                		    document.getElementById('cCludetime').value = null;    
		                		   // 合同金额
		                		    document.getElementById('cConmoney').value = null;     
		                			//到货总金额
		                			document.getElementById('cGoodsmoney').value = null;   
		                		  //  支付金额
		                			document.getElementById('cPaymoney').value = null;   
		                		  //  余款
		                		  document.getElementById('cResidualq').value = null;    
		                		  	//原因
		                		  document.getElementById('cCause').value = null;   
		                		  	//赔偿金额
		                		  document.getElementById('cPcmoney').value = null;    
		                		   // 扣除条件
		                		   document.getElementById('cKccause').value = null; 
		                		   // 质保金
		                		   document.getElementById('cZbmoney').value = null;  
		                		   // 结算金额
		                		   document.getElementById('cSettlemoney').value = null;   
		                			//  协议条款2
		                			document.getElementById('cSw01').value = null;
//		                			document.getElementById('cSw02').value;
		                			addIns31.hide()
		                		}
		                	})
		                }
		            }
		          },
        ]
 })
	
	
	
	
	
//	let operateFormS1buts = [
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				icon: "search",
//				name: 'M1S11Q',
//				text: '查询',
//				onClick: function () {
//					M1S11_serDel();
//				}
//			}
//		}, 
////		{
////			location: "before",
////			locateInMenu: 'auto',
////			widget: "dxButton",
////			options: {
////				height: "auto",
////				width: "auto",
////				name: 'M1S11Q',
////				icon: 'plus',
////				text: '添加',
////				onClick: function () {
////					change = '1';
////					$('#addmotai').show()
////					addIns = $('#addmotai').dxPopup({
////						width: 1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
////						height: 450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
////					}).dxPopup('instance')
////					addIns.option('title', 'CG_XXLY')
////					addIns.show();
////					M1S11_addfun();
////					M1S11addIns.option('formData', new Object())
////				}
////			}
////		}, 
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
//					 let grid1 = $('#dataGridS1').dxDataGrid('instance');
//					 let selectedRowKeys = grid1.getSelectedRowKeys()
//					 let rowsData = grid1.getSelectedRowsData()[0];
//					 //脚本执行  
//					 if (selectedRowKeys.length < 1) {
//					 	DevExpress.ui.notify('请选择对应的合同！！！。', 'info', 3000);
//					 	return;
//					 }
////					 if(rowsData.cMadestate =='mk001' || rowsData.cMadestate =='mk003'){
////				        	DevExpress.ui.notify('已审核或者未完成的不能进行信息卡修改！！！', 'warning', 3000);
////				        	return;
////				      }
//					 if(rowsData.cMadestate =='mk003'){
//				        	DevExpress.ui.notify('已审核不能对信息进行修改！！！！', 'warning', 3000);
//				        	return;
//				      }
//					//内贸合同号
//	                	ttcConnum =rowsData.cConnum
//	                	console.log(ttcConnum)
//	                	//外贸合同号
//	                	ttcOutconnum = rowsData.cOutconnum;
//	                	//内贸金额
//	                	ttcConmoney = rowsData.cConmoney;
//	                	//外贸金额
//	                	ttcOutmoney = rowsData.cOutmoney;
//	                	//供应商
//	                	ttcSupplier = rowsData.cSupplier;
//	                	//重量
//	                	ttcWeight = rowsData.cWeight;
//	                	//开票市
//	                	ttcInvoicec = rowsData.cInvoicec;
//	                	//内贸主办
//	                	ttcInpbs = rowsData.cInpbs;
//	                	//外贸主办
//	                	ttcOutpbs = rowsData.cOutpbs;
//	                	//中国
//	                	ttcChiede = rowsData.cChiede;
//	                	//印度
//	                	ttcIndida = rowsData.cIndida;
//	                	//数据
//	                	ttcDataedp = rowsData.cDataedp;
////	                	//供应商联系方式
//	                	ttcSupphone = rowsData.cComphone;
//	                	//出口商 
//	                	ttcExporter  = rowsData.cExporter; 
//	                	//货币RMB
//	                	ttcMoneyrmb = rowsData.cMoneyrmb ;
//	                	//货币USD
//	                	ttcMoneyusd = rowsData.cMoneyusd ;
//	                	ttcShname = rowsData.cShname; 
//					$('#addmotai4').show()
//					addIns = $('#addmotai4').dxPopup({
//						fullScreen: true               //为了规范限制模态框大小//用脚本标识模态框的标题
//					}).dxPopup('instance')
//					addIns.option('title', '修改信息卡')
//					addIns.show();
//					M1S12T_addfun();
////					console.log(updatemonigrid);
////					console.log(tcOutconnum);
//					  $("#mAke2").dxDataGrid('instance').option('dataSource', updatemonigrid);
//					  $('#addFormMT2').dxForm('instance').getEditor('cConnum').option('value',ttcConnum);
//					  $('#addFormMT2').dxForm('instance').getEditor('cOutconnum').option('value',ttcOutconnum);
//					  $('#addFormMT2').dxForm('instance').getEditor('cConmoney').option('value',ttcConmoney);
//					  $('#addFormMT2').dxForm('instance').getEditor('cOutmoney').option('value',ttcOutmoney);
//					  $('#addFormMT2').dxForm('instance').getEditor('cSupplier').option('value',ttcSupplier);
//					  $('#addFormMT2').dxForm('instance').getEditor('cWeight').option('value',ttcWeight);
//					  $('#addFormMT2').dxForm('instance').getEditor('cInvoicec').option('value',ttcInvoicec);
//					  $('#addFormMT2').dxForm('instance').getEditor('cComphone').option('value',ttcSupphone);
//					  $('#addFormMT2').dxForm('instance').getEditor('cMoneyrmb').option('value',ttcMoneyrmb);
//					  $('#addFormMT2').dxForm('instance').getEditor('cMoneyusd').option('value',ttcMoneyusd);
//					  $('#addFormMT2').dxForm('instance').getEditor('cExporter').option('value',ttcExporter);
//					  $('#addFormMT2').dxForm('instance').getEditor('cDataedp').option('value',ttcDataedp);
//					  $('#addFormMT2').dxForm('instance').getEditor('cShname').option('value',ttcShname);
//					  $('#mAke2').dxDataGrid('instance').refresh();
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
//				icon: 'check',
//				text: '提交',
//				onClick: function () {
//					let grid1 = $('#dataGridS1').dxDataGrid('instance');
//					let selectedRowKeys = grid1.getSelectedRowKeys()
//					let rowsData = grid1.getSelectedRowsData()[0];
//					//脚本执行  
//					if(rowsData.cMadestate == 'mk002'){
//						DevExpress.ui.notify('该数据状态为未审核，已提交等待审核中。。。。。。。', 'info', 3000);
//					 	return;
//					}
//					msg = {
//						ver: '53cc62f6122a436083ec083eed1dc03d',
//						session: '42f5c0d7178148938f4fda29460b815a',
//						tag: {},
//						data: {
//						}
//					};
//					//前后端统一叫'tscLtrawbin' 
//					msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//					console.log(msg.data.cgMnhtM1s1)
//					M1S11D_serDel_Judgment();
//					if (M1S11D_serDel_mark != 'M1S11D_success') {
//					} else {
//						var result = DevExpress.ui.dialog.confirm("您确定要提交吗?", "确认提交");
//						result.done(function (dialogResult) {
//							if (dialogResult) {
//								cake.Ui.LoadPanel.show()
//						
//						//../../tdhc_cgsys/CG_XXLY/M1S11D
//						$.ajax({
//							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11Submit'), dataType: 'json',   //返回格式为json   
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
//									}
//									else {
//										DevExpress.ui.notify(data.msg, 'warning', 120000);
//									}
//								},
//								error: function () {
//									DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//								}
//								})
//							}
//							cake.Ui.LoadPanel.close();
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
//					msg.data.cgXxlyM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//					console.log(msg)
//					M1S11D_serDel_Judgment();
//					if (M1S11D_serDel_mark != 'M1S11D_success') {
//					} else {
//						var result = DevExpress.ui.dialog.confirm("您确定要提交吗?", "确认提交");
//						result.done(function (dialogResult) {
//							if (dialogResult) {
//								cake.Ui.LoadPanel.show()
//						
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
//						
//							}
//							cake.Ui.LoadPanel.close();
//						})
//					}
//				}
//			}
//		},
//		{
//		location: "before",
//		locateInMenu: 'auto',
//		widget: "dxButton",
//		options: {
//			height: "auto",
//			width: "auto",
//
//			icon: 'print',
//			text: '信息卡打印',
//			onClick: function () {
//				let grid1 = $('#dataGridS1').dxDataGrid('instance');
//				let selectedRowKeys = grid1.getSelectedRowKeys()
//				let rowsData = grid1.getSelectedRowsData()
//				//脚本执行  
//				if (selectedRowKeys.length < 1) {
//					DevExpress.ui.notify('请选择一条要打印信息卡 的合同数据。', 'info', 3000);
//					return;
//				}
//				msg = {
//					ver: '53cc62f6122a436083ec083eed1dc03d',
//					session: '42f5c0d7178148938f4fda29460b815a',
//					tag: {},
//					data: {
//					}
//				};
//				let msgdate = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
//				let cConnum = msgdate.cConnum;
//				console.log(msgdate.cConnum)
//				let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=XXK_04.cpt&cConnum=" + cConnum;
//				window.open(url, "_blank");
//			}
//		}
//	},
//	{
//		location: "before",
//		locateInMenu: 'auto',
//		widget: "dxButton",
//		options: {
//			height: "auto",
//			width: "auto",
//			icon: 'remove',
//			text: '驳回',
//			onClick: function () {
//				change = '2'
//				let grid = $('#dataGridS1').dxDataGrid('instance');
//				let rowsData = grid.getSelectedRowsData()[0]
//				let selectedRowKeys = grid.getSelectedRowKeys()
//				if (selectedRowKeys.length < 1) {
//					// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//					DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//					return;
//				}
//				if (selectedRowKeys.length > 1) {
//					 Cake.Ui.Toast.showInfo('一次只能选择一条要驳回的数据。')    
//					 DevExpress.ui.notify('一次只能选择一条要驳回的数据。', 'info', 3000);    
//					return;
//				}
//				addIns = $('#addmotai2').dxPopup({
//					//模态框增加name    
//					width: 1000,
//					height: 450
////					fullScreen: true,
//				}).dxPopup('instance')
//				addIns.option('title', '反驳');
//				addIns.show();
//				// 调用模态框函数    
//				// updatafun()    
//				M1S21_Updatefun();
//				M1S21addIns.option('formData', rowsData)
//			}
//		}
//	},
//	];


//	let operateFormS2buts = [
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				icon: "search",
//				name: 'M1S11Q',
//				text: '查询',
//				onClick: function () {
//					M1S21_serDel();
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
//				text: '新增',
//				onClick: function () {
//					 let grid1 = $('#dataGridS1').dxDataGrid('instance');
//					 let selectedRowKeys = grid1.getSelectedRowKeys()
//					 let rowsData = grid1.getSelectedRowsData()[0];
//					 //脚本执行  
//					 if (selectedRowKeys.length < 1) {
//					 	DevExpress.ui.notify('请选择对应的合同！！！。', 'info', 3000);
//					 	return;
//					 }
//					 if(rowsData.cCheckstate =='xcc003' || rowsData.cCheckstate =='xcc001'){
//				        	DevExpress.ui.notify('已审核不能进行信息卡修改！！！', 'warning', 3000);
//				        	return;
//				        }
//					//内贸合同号
//	                	ttcConnum =rowsData.cConnum
//	                	console.log(ttcConnum)
//	                	//外贸合同号
//	                	ttcOutconnum = rowsData.cOutconnum;
//	                	//内贸金额
//	                	ttcConmoney = rowsData.cConmoney;
//	                	//外贸金额
//	                	ttcOutmoney = rowsData.cOutmoney;
//	                	//供应商
//	                	ttcSupplier = rowsData.cSupplier;
//	                	//重量
//	                	ttcWeight = rowsData.cWeight;
//	                	//开票市
//	                	ttcInvoicec = rowsData.cInvoicec;
//	                	//内贸主办
//	                	ttcInpbs = rowsData.cInpbs;
//	                	//外贸主办
//	                	ttcOutpbs = rowsData.cOutpbs;
//	                	//中国
//	                	ttcChiede = rowsData.cChiede;
//	                	//印度
//	                	ttcIndida = rowsData.cIndida;
//	                	//数据
//	                	ttcDataedp = rowsData.cDataedp;
////	                	//供应商联系方式
//	                	ttcSupphone = rowsData.cComphone;
//	                	//出口商 
//	                	ttcExporter  = rowsData.cExporter; 
//	                	//货币RMB
//	                	ttcMoneyrmb = rowsData.cMoneyrmb ;
//	                	//货币USD
//	                	ttcMoneyusd = rowsData.cMoneyusd ;
//	                	ttcShname = rowsData.cShname; 
//					$('#addmotai').show()
//					addIns = $('#addmotai').dxPopup({
//						fullScreen: true               //为了规范限制模态框大小//用脚本标识模态框的标题
//					}).dxPopup('instance')
//					addIns.option('title', '新增信息卡物资信息')
//					addIns.show();
//					M1S21T_addfun();
////					console.log(updatemonigrid);
////					console.log(tcOutconnum);
////					  $("#mAke2").dxDataGrid('instance').option('dataSource', updatemonigrid);
//					  $('#addFormMT').dxForm('instance').getEditor('cConnum').option('value',ttcConnum);
//					  $('#addFormMT').dxForm('instance').getEditor('cOutconnum').option('value',ttcOutconnum);
//					  $('#addFormMT').dxForm('instance').getEditor('cConmoney').option('value',ttcConmoney);
//					  $('#addFormMT').dxForm('instance').getEditor('cOutmoney').option('value',ttcOutmoney);
//					  $('#addFormMT').dxForm('instance').getEditor('cSupplier').option('value',ttcSupplier);
//					  $('#addFormMT').dxForm('instance').getEditor('cWeight').option('value',ttcWeight);
//					  $('#addFormMT').dxForm('instance').getEditor('cInvoicec').option('value',ttcInvoicec);
//					  $('#addFormMT').dxForm('instance').getEditor('cComphone').option('value',ttcSupphone);
//					  $('#addFormMT').dxForm('instance').getEditor('cMoneyrmb').option('value',ttcMoneyrmb);
//					  $('#addFormMT').dxForm('instance').getEditor('cMoneyusd').option('value',ttcMoneyusd);
//					  $('#addFormMT').dxForm('instance').getEditor('cExporter').option('value',ttcExporter);
//					  $('#addFormMT').dxForm('instance').getEditor('cDataedp').option('value',ttcDataedp);
//					  $('#addFormMT').dxForm('instance').getEditor('cShname').option('value',ttcShname);
////					  $('#mAke2').dxDataGrid('instance').refresh();
//				}
//			}
//		},
//	]
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
            width: 150,
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
            width: 150,
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
            dataField: 'cSignplace',
            caption: '签订地址',
        },
        {
            dataField: 'cDr',
            caption: '预计到货时间',
            dataType: "date",
            format: "yyyy-MM-dd"
        },
        {
            dataField: 'cSw09',
            caption: '合同金额',
            width: 150,
        },
        {
        	dataField: 'cConmoney',
        	caption: '实际合同金额',
        },
        {
        	dataField: 'cSw23',
        	caption: '金额变动原因',
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
            caption: '到货地点',
            width: 150,
        }, 
        {
            dataField: 'cGettime',
            caption: '最后到货时间',
            dataType: "date",
            format: "yyyy-MM-dd"
        },
        {
            dataField: 'cSw12',
            caption: '提前/延迟',
        }, 
        {
            dataField: 'cCheckway',
            caption: '到货情况',
            calculateDisplayValue: function(rowData) {
                let matchedItem = dhqk.find(item => item.cSubitemid == rowData.cCheckway);
                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }
            }
        },
        {
            dataField: 'cSignstep',
            caption: '付款情况',
            calculateDisplayValue: function(rowData) {
                let matchedItem = fkqk.find(item => item.cSubitemid == rowData.cSignstep);
                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }
            }
        },
        {
            dataField: 'cTransway',
            caption: '开票信息',
            calculateDisplayValue: function(rowData) {
                let matchedItem = kpxx.find(item => item.cSubitemid == rowData.cTransway);
                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }
            }
        },
        {
        	dataField: 'cState',
        	caption: '状态',
        	calculateDisplayValue: function(rowData) {
        		let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);
        		if (matchedItem == null || matchedItem == undefined) {
        			return "";
        		} else {
        			return matchedItem.cSubitemdes;
        		}
        	}
        },
        {
            dataField: 'cId',
            caption: '合同编号',
            width: 1,
            alignment: 'center',
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

//		onToolbarPreparing: function (e) {
//			operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));
//
//		}
	}).dxDataGrid('instance');

	var dataGridS2columns = [
		{
			dataField: 'cGoodsname',
			caption: '品名',
			width:100,
		},
		{
			dataField: 'cSpec',
			caption: '规格型号',
			width:120,
		},
		{
			dataField: 'cUnit',
			caption: '成交单位',
			width:70,
		},
		{
			dataField: 'cStaunit',
			caption: '法定单位',
			width:70,
		},
		
		{
			dataField: 'cHscode',
			caption: 'HS编码',
			width:100,
		},
		{
			dataField: 'cTypename',
			caption: '商品和服务分类简称',
			width:130,
		},
		{
			dataField: 'cSupervision',
			caption: '海关监管条件',
			width:120,
		},
		{
			dataField: 'cTaxrate',
			caption: '退税率',
			width:80,
		},
		{
			dataField: 'cDeclaration',
			caption: '申报要素',
			width:250,
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
			width:100,
		},
		{
			dataField: 'cComtaxnumber',
			caption: '税号',
			width:80,
		},
		
		{
			dataField: 'cBm',
			caption: 'BM',
			width:60,
		},
		{
			dataField: 'cPpn',
			caption: 'PPN',
			width:60,
		},
		{
			dataField: 'cPph',
			caption: 'PPH',
			width:60,
		},
		{
			dataField: 'cTotaltaxr',
			caption: '合计税率',
			width:60,
		},
		{
			dataField: 'cAgreedtax',
			caption: '协定税率',
			width:60,
		},
		{
			dataField: 'cIndimport',
			caption: '印尼进口端管制条件',
			width:130,
		},
		{
			dataField: 'cWhecoo',
			caption: '是否合适办产地证',
			width:100,
		},
		{
			dataField: 'cRepein',
			caption: '替代税号',
			 width: 100,
			alignment: 'center',
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
			width:120,
		},
		{
			dataField: 'cConnum',
			caption: '内贸合同号',
			width:120,
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
//		onToolbarPreparing: function (e) {
//			operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));
//
//		}
	}).dxDataGrid('instance');
	
	
	
	var dataGridS3columns = [
		{
			dataField: 'cConnum',
			caption: '合同号',
			width: 120,
		},
		
		{
			dataField: 'cCheckstate',
			caption: '审核状态',
			width: 80,
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
			width: 80,
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
            width: 200,
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
		initLoad3()
		function initLoad3() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "xxkMADESTATE"
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
						madeState.push(item);
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
		initLoad6();
		function initLoad6() {
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
						hsState.push(item);
					});
//					console.log(hsState);
				},
				error: function () {
					cake.Ui.LoadPanel.close()
				}
			});
		}
		initLoad7()
        function initLoad7() {
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
                        jhdd1.push(item);
                    });
//                    console.log(jhdd1)
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
		initLoad8()
        function initLoad8() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "HTSFCW"
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
                    	trouble.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
		initLoad9()
        function initLoad9() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {

                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/ZZ_01/findCompInfo"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    console.log(result.data);

                    xxCon = result.data;


                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            comp_Cludecom.push(item);
                        });
                    }
                                    	console.log(comp_Cludecom);
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
		initLoad10()
        function initLoad10() {
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
		initLoad11()
        function initLoad11() {
        	msg = {
        			ver: "53cc62f6122a436083ec083eed1dc03d",
        			session: "42f5c0d7178148938f4fda29460b815a",
        			tag: {},
        			data: {
        				"cItemid": "YANS"
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
        				dhqk.push(item);
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

             }
         };
         $.ajax({
             type: "post",
             url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/DZ_08/findSupplierName"),
             data: JSON.stringify(msg),
             contentType: "application/json",
             dataType: "json",
             success: function (result) {
//                 console.log(result.data);
                 xxCon = result.data;
                 if (result.data == null) {

                 } else {
                     result.data.forEach(item => {
                         cont_supplier.push(item);
                     });
                 }
                 //                	console.log(cont_supplier);
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
        				"cItemid": "FKQK"
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
        				fkqk.push(item);
        			});
        		},
        		error: function() {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
	    initLoad15()
        function initLoad15() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "YSFS"
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
                        kpxx.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
	    initLoad16()
        function initLoad16() {
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
	    initLoad17()
		function initLoad17() {
			msg = {
				ver: "53cc62f6122a436083ec083eed1dc03d",
				session: "42f5c0d7178148938f4fda29460b815a",
				tag: {},
				data: {
					"cItemid": "JSXY"
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
						jsxy.push(item);
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
		/*msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
			}
		};*/
		   msg = {
	            ver: '53cc62f6122a436083ec083eed1dc03d',
	            session: '42f5c0d7178148938f4fda29460b815a',
	            tag: {},
	            data: {
	            	h002request: {
	                    startTime: new Date(),
	                    endTime: new Date(),
	                    cConnum: null,
	                    cOrdernum: null,
	                    cSupplier: null,
	                    cState: null,
	                    cSw10: null,
	                    cCludecom: new Array(),
	                    cCheckway: new Array(),
	                    cSignstep: new Array(),
	                    cTransway: new Array(),
	                }
	            }
		        };
//		let searchtiao = searchdataFormM1.option('formData')
//		msg.data.cgMnhtM1s1 = [searchdataFormM1.option('formData')];
//		let startTime = msg.data.cgMnhtM1s1[0].cCreatetime_star;
//		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
//		let endTime = msg.data.cgMnhtM1s1[0].cCreatetime_end;
//		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999); M1S11Q_serDel_Judgment();
		 msg.data.h002request = searchdataFormM1.option('formData');
        //开始时间
        let startTime = msg.data.h002request.startTime;
        msg.data.h002request.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        // 结束时间
        let endTime = msg.data.h002request.endTime;
        msg.data.h002request.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        msg.data.h002request = [searchdataFormM1.option('formData')];
        console.log(msg)
        var  h002request  = searchdataFormM1.option('formData');		
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
//			console.log(JSON.stringify(msg));    ../../tdhc_cgsys/CG_MNHT/M1S11Q
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/M1S11Q'),
				dataType: 'json',   //返回格式为json      
				async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post',   //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {
					console.log(data)
					if (data.data == null) {
						tabledataS1.splice(0, tabledataS1.length);
						$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
						return
					}
					let select;
					select = data.data.cgH001M1s1
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
	//Script ------------------------------------

	//动态模拟合同修改
    function UpdateD_moni2() {

//  	 $('#contract_type4').dxForm({
//          formData: calculation,
//          validationGroup: validationGroupName,
//          colCount: 1,
//          items: [
//         	 	{
//                  dataField: 'cContype',
//                  label: {
//                      text: '合同类型'
//                  },
//                  editorType: 'dxSelectBox',
//                  editorOptions: {
//                      dataSource: contact_Type,
//                      valueExpr: 'cContypeTpCgclausedata',
//                      displayExpr: 'cContypeTpCgclausedata',
//                      searchEnabled: true,
//                      showClearButton: true,
////                      readOnly:true,
//                      width: 200,
//                      placeholder: '请选择',
//                      onValueChanged: function (e) {
//                   	 console.log(777666)
//                     	 console.log(e.value)
//                          if (e.value == null || e.value == "") {
//                              $('#clauseForm4').dxForm('instance').option("formData", new Object)
//                              return;
//                          }
//                     	 msg = {
//                                  ver: '53cc62f6122a436083ec083eed1dc03d',
//                                  session: '42f5c0d7178148938f4fda29460b815a',
//                                  tag: {},
//                                  data: {
//                                 	 clause_M1S1:{
//                                 		 cContypeTpCgclausedata:null
//                                 	 }
//                                  },
//                              };
//                     	 	msg.data.clause_M1S1.cContypeTpCgclausedata = e.value;
////                     	 	console.log(JSON.stringify(msg))
////                     	 msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
//                     	    $.ajax({
//                     	    	//../../tdhc_cgsys/CLAUSE/getContTypeInfo  合同条款维护中的条款数据
//                     	    	//../../tdhc_cgsys/tab/getTbContractInfo   当前合同下的条款信息
//                                 url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/getContTypeInfo'),
//                                 dataType: 'json', //返回格式为json           
//                                 async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                                 data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                                 type: 'post', //请求方式 get 或者post ,         
//                                 contentType: 'application/json',
//                                 success: function (data) {
//                                     let rowdata = data.data.clauseM1s1[0]
////                                     console.log(data)
//                                     $('#clauseForm4').dxForm('instance').option("formData", rowdata)
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw01TpCgclausedata').option('value', data.data[0].cSw01);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw02TpCgclausedata').option('value', data.data[0].cSw02);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw03TpCgclausedata').option('value', data.data[0].cSw03);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw04TpCgclausedata').option('value', data.data[0].cSw04);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw05TpCgclausedata').option('value', data.data[0].cSw05);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw06TpCgclausedata').option('value', data.data[0].cSw06);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw07TpCgclausedata').option('value', data.data[0].cSw07);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw08TpCgclausedata').option('value', data.data[0].cSw08);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw09TpCgclausedata').option('value', data.data[0].cSw09);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw10TpCgclausedata').option('value', data.data[0].cSw10);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw11TpCgclausedata').option('value', data.data[0].cSw11);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw12TpCgclausedata').option('value', data.data[0].cSw12);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw13TpCgclausedata').option('value', data.data[0].cSw13);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw14TpCgclausedata').option('value', data.data[0].cSw14);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw15TpCgclausedata').option('value', data.data[0].cSw15);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw16TpCgclausedata').option('value', data.data[0].cSw16);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw17TpCgclausedata').option('value', data.data[0].cSw17);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw18TpCgclausedata').option('value', data.data[0].cSw18);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw19TpCgclausedata').option('value', data.data[0].cSw19);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw20TpCgclausedata').option('value', data.data[0].cSw20);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw21TpCgclausedata').option('value', data.data[0].cSw21);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw22TpCgclausedata').option('value', data.data[0].cSw22);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw23TpCgclausedata').option('value', data.data[0].cSw23);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw24TpCgclausedata').option('value', data.data[0].cSw24);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw25TpCgclausedata').option('value', data.data[0].cSw25);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw26TpCgclausedata').option('value', data.data[0].cSw26);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw27TpCgclausedata').option('value', data.data[0].cSw27);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw28TpCgclausedata').option('value', data.data[0].cSw28);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw29TpCgclausedata').option('value', data.data[0].cSw29);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw30TpCgclausedata').option('value', data.data[0].cSw30);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw31TpCgclausedata').option('value', data.data[0].cSw31);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw32TpCgclausedata').option('value', data.data[0].cSw32);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw33TpCgclausedata').option('value', data.data[0].cSw33);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw34TpCgclausedata').option('value', data.data[0].cSw34);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw35TpCgclausedata').option('value', data.data[0].cSw35);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw36TpCgclausedata').option('value', data.data[0].cSw36);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw37TpCgclausedata').option('value', data.data[0].cSw37);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw38TpCgclausedata').option('value', data.data[0].cSw38);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw39TpCgclausedata').option('value', data.data[0].cSw39);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw40TpCgclausedata').option('value', data.data[0].cSw40);
////                                     $('#clauseForm4').dxForm('instance').getEditor('cSw41TpCgclausedata').option('value', data.data[0].cSw41);
//                                 },
//                                 error: function () {
//                                     DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                     cake.Ui.LoadPanel.close();
//                                 }
//                             })
//                      }
//                      
//              },
//              
//          }, ]
//      }).dxForm('instance');
     addIns2_form = $('#addForm5').dxForm({
         formData: adddata,
         validationGroup: validationGroupName,
         colCount: 2,
         items: [
//         	{
//                 colSpan: 1,
//                 itemType: 'empty',
//             },
         	{
                 dataField: 'cOutconnum',
                 label: {
                     text: '外贸合同号'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly:true,
                 },
//                 validationRules: [{
//                         type: 'required',
//                         message: '必填！'
//                     },
//                     {
//                         type: 'stringLength',
//                         max: 1000,
//                         min: 0,
//                         message: '长度超限，最长为1000！'
//                     },
//                 ]

             },
             {
                 dataField: 'cConnum',
                 label: {
                     text: '合同编号'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly:true,
                 },
//                 validationRules: [{
//                         type: 'required',
//                         message: '必填！'
//                     },
//                     {
//                         type: 'stringLength',
//                         max: 1000,
//                         min: 0,
//                         message: '长度超限，最长为1000！'
//                     },
//                 ]

             },
             {
                 dataField: 'cCludecom',
                 label: {
                     text: '需方'
                 },
                 editorType: 'dxSelectBox',
                 editorOptions: {
                     dataSource: comp_Cludecom,
                     valueExpr: 'cCludecom',
                     displayExpr: 'cCludecom',
                     searchEnabled: true,
                     showClearButton: true,
                     readOnly:true,
                     placeholder: '请选择',
                     onValueChanged: function (e) {
                         console.log(e.value)
                         if (e.value == null || e.value == "") {
                             $('#textarea5').dxForm('instance').option("formData", new Object)
                             return;
                         }

                         msg = {
                             ver: '53cc62f6122a436083ec083eed1dc03d',
                             session: '42f5c0d7178148938f4fda29460b815a',
                             tag: {},
                             data: {
                             },
                         };
                         msg.data.cCludecom = e.value;
  						  console.log(msg.data.cCludecom)
                         msg.data.cConnum = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cConnum;
  						  console.log(JSON.stringify(msg))
                         $.ajax({
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/getTbContractCom'),
                             dataType: 'json', //返回格式为json           
                             async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                             type: 'post', //请求方式 get 或者post ,         
                             contentType: 'application/json',
                             success: function (data) {
                           	  console.log(data.data.tbCgcontract[0]);
                                 //单位名称
                                 $('#textarea5').dxForm('instance').getEditor('cCludecom').option('value', data.data.tbCgcontract[0].cCludecom);

                                 //单位地址
                                 $('#textarea5').dxForm('instance').getEditor('cComaddress').option('value', data.data.tbCgcontract[0].cAddressr);

                                 //电话
                                 $('#textarea5').dxForm('instance').getEditor('cComphone').option('value', data.data.tbCgcontract[0].cPhoner);

                                 //传真
                                 $('#textarea5').dxForm('instance').getEditor('cComfaxno').option('value', data.data.tbCgcontract[0].cFaxno);

                                 //开户行
                                 $('#textarea5').dxForm('instance').getEditor('cCombankname').option('value', data.data.tbCgcontract[0].cBankname);

                                 //账号
                                 $('#textarea5').dxForm('instance').getEditor('cComaccountno').option('value', data.data.tbCgcontract[0].cAccountno);

                                 //税号
                                 $('#textarea5').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data.tbCgcontract[0].cTaxnumbe);
                                 //签订地址
                                 $('#addForm5').dxForm('instance').getEditor('cSignplace').option('value', data.data.tbCgcontract[0].cSignplace);

                             },
                             error: function () {
                                 DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                 cake.Ui.LoadPanel.close();
                             }
                         })

                     }
                 }

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
                     readOnly:true,
                 },
             },
             {
                 dataField: 'cSupplier',
                 label: {
                     text: '供方'
                 },
                 editorType: 'dxSelectBox',
                 editorOptions: {
                     dataSource: cont_supplier,	
                     valueExpr: 'cSupplier',
                     displayExpr: 'cSupplier',
                     searchEnabled: true,
                     showClearButton: true,
                     readOnly:true,
                     placeholder: '请选择',
                     onValueChanged: function (e) {
                         if (e.value == null || e.value == "") {
                             $('#textarea6').dxForm('instance').option("formData", new Object)
                             return;
                         }
                         msg = {
                             ver: '53cc62f6122a436083ec083eed1dc03d',
                             session: '42f5c0d7178148938f4fda29460b815a',
                             tag: {},
                             data: {
                                 cSupplier: null
                             },
                         };
                         msg.data.cSupplier = e.value;
                         msg.data.cConnum = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cConnum;
                         console.log(msg.data.cSupplier)
                         //../../tdhc_cgsys/DZ_08/getSupplierInfo
                         $.ajax({
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/getTbContractCom'),
                             dataType: 'json', //返回格式为json           
                             async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                             type: 'post', //请求方式 get 或者post ,         
                             contentType: 'application/json',
                             success: function (data) {
                                console.log(data.data.tbCgcontract[0]);
                                 //单位名称
                                 $('#textarea6').dxForm('instance').getEditor('cSupplier').option('value', data.data.tbCgcontract[0].cSupplier);
                                 //单位地址
                                 $('#textarea6').dxForm('instance').getEditor('cSupaddress').option('value', data.data.tbCgcontract[0].cSupaddress);
                                 //电话
                                 $('#textarea6').dxForm('instance').getEditor('cSupphone').option('value', data.data.tbCgcontract[0].cSupphone);
                                 //传真
                                 $('#textarea6').dxForm('instance').getEditor('cFaxno').option('value', data.data.tbCgcontract[0].cFaxnor);
                                 //开户行
                                 $('#textarea6').dxForm('instance').getEditor('cBankname').option('value', data.data.tbCgcontract[0].cBanknamer);
                                 //账号
                                 $('#textarea6').dxForm('instance').getEditor('cAccountno').option('value', data.data.tbCgcontract[0].cAccountnor);
                                 //税号
                                 $('#textarea6').dxForm('instance').getEditor('cTaxnumber').option('value', data.data.tbCgcontract[0].cTaxnumber);

                             },
                             error: function () {
                                 DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                 cake.Ui.LoadPanel.close();
                             }
                         })
                     }

                 },
             },
             {
                 dataField: 'cSignplace',
                 label: {
                     text: '签订地址'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
         ]
     }).dxForm('instance')
     
     let operateFormS2buts = [
     	/*{
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

                     // console.log($("#addmoni2").dxDataGrid('instance')._options.columns.dataField == 'cPrice')
                     console.log($("#addmoni2").dxDataGrid('instance')._options.columns)



                 }
             }
         },*/
         /*{
             location: "before",
             locateInMenu: 'auto',
             widget: "dxButton",
             options: {
                 height: "auto",
                 width: "auto",
                 icon: 'remove',
                 text: '删除',
                 onClick: function () {
                 	let rowsData = $("#addmoni2").dxDataGrid('instance').getSelectedRowsData()[0];
                 	let rowkey = $("#addmoni2").dxDataGrid('instance')._options.dataSource;
                 	rowkey.splice(rowsData);

                 	$("#addmoni2").dxDataGrid('instance').refresh()
                 	let rowsData = $("#addmoni3").dxDataGrid('instance').getSelectedRowsData();
                 	let dataSource = $("#addmoni3").dxDataGrid('instance').option('dataSource');

                 	let removeIndex = [];

                 	for (let index = 0; index < dataSource.length; index++) {

                 	if (rowsData.some(element => element == dataSource[index])) {
                 	removeIndex.push(index);
                 	}

                 	}

                 	removeIndex.reverse().forEach(element => dataSource.splice(element, 1));

                 	$("#addmoni3").dxDataGrid('instance').refresh()
                 }
             }
         },*/
//         {
//             location: "before",
//             locateInMenu: 'auto',
//             widget: "dxButton",
//             options: {
//                 height: "auto",
//                 width: "auto",
//                 icon: 'plus',
//                 text: '提交',
//                 onClick: function (e) {
//
//                     let cconnu = $('#addForm4').dxForm('instance').option('formData').cConnum;
//                     if (cconnu == "" || cconnu == undefined || cconnu == null) {
//                         DevExpress.ui.notify('请填写合同编号。', 'error', 3000);
//                         return
//                     }
//                     
//                     let cContype = $('#contract_type4').dxForm('instance').option('formData').cContype;
//                     if (cContype == "" || cContype == undefined || cContype == null) {
//                         DevExpress.ui.notify('请选择合同模板类型。', 'error', 3000);
//                         return
//                     }
//                     
//                     let cDelivdate = $('#deadline4').dxForm('instance').option('formData').cDelivdate;
//                     if (cDelivdate == "" || cDelivdate == undefined || cDelivdate == null) {
//                         DevExpress.ui.notify('请录入交货期限！！！', 'error', 3000);
//                         return
//                     }
//                     let cDelivplace = $('#deadline4').dxForm('instance').option('formData').cDelivplace;
//                     if (cDelivplace == "" || cDelivplace == undefined || cDelivplace == null) {
//                         DevExpress.ui.notify('请选择交货地点！！！', 'error', 3000);
//                         return
//                     }
//                     let cPayway = $('#pice4').dxForm('instance').option('formData').cPayway;
//                     if (cPayway == "" || cPayway == undefined || cPayway == null) {
//                         DevExpress.ui.notify('请输入付款方式！！！！', 'error', 3000);
//                         return
//                     }

//                     msg = {
//                         ver: '53cc62f6122a436083ec083eed1dc03d',
//                         session: '42f5c0d7178148938f4fda29460b815a',
//                         tag: {},
//                         data: {
//                         },
//                     };
//                     msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
//                     //合同主表信息
//                     msg.data.tpCgcontractmtt = $('#addForm4').dxForm('instance').option('formData');
//                     //条框
//                     msg.data.clause_M1S1 = $('#clauseForm4').dxForm('instance').option('formData');
//                     //合同物资信息
//                     msg.data.tpCgorderRequest = $('#addmoni4').dxDataGrid('instance')._options.dataSource;
//                     //交货期限 
//                     msg.data.delInformation = $('#deadline4').dxForm('instance').option('formData');
//                     //付款方式
//                     msg.data.paywayRequest = $('#pice4').dxForm('instance').option('formData');
//                     //供应商
//                     msg.data.tbSupplier = $('#textarea5').dxForm('instance').option('formData');
//                     //需方
//                     msg.data.tbCludecompany = $('#textarea6').dxForm('instance').option('formData');
//                     //合同条款类型
//                     msg.data.cContype = $('#contract_type4').dxForm('instance').option('formData').cContype;
////                     console.log(msg.data.cContype)
////                     console.log(JSON.stringify(msg))
//                     $.ajax({
//                     	//
//                         url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/updateContractU'),
//                         dataType: 'json', //返回格式为json           
//                         async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                         data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                         type: 'post', //请求方式 get 或者post ,         
//                         contentType: 'application/json',
//                         success: function (data) {
//                             let select = data.msg
//                             if (data.errcode == 60) {
//                                 DevExpress.ui.notify(select, 'info', 3000);
//                                 cake.Ui.LoadPanel.close();
////                                 console.log(data.msg)
//                             }
//                             if (data.errcode == 0) {
//                                 DevExpress.ui.notify(select, 'success', 3000);
////                                 console.log(data.msg)
//                                 cake.Ui.LoadPanel.close();
//                             }
//                             	S1S21_SSRT();
//                         		M1S11_serDel();
//                         		addIns2.hide();
//                         },
//                         error: function () {
//                             DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//
//                         }
//                     })
//                     // }
//
//                 }
//             }
//         },
     ];
     $("#addmoni5").dxDataGrid({
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
         height: '100%',
//         paging: {
//             enabled: false
//         },
         editing: {
//             mode: "batch",
       	  mode: "cell",
             allowUpdating: true,
         },
         selection: {
//             mode: "multiple",
             mode: "single"
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
//         	{
//                 dataField: 'cOrdernum',
//                 caption: '请购单号',
//                 width: 250,
//                 alignment: 'center',
//             },
//             {
//                 dataField: 'cGoodsname',
//                 caption: '物资名称',
//                 width: 200,
//                 alignment: 'center',
//                 allowEditing: false,
//             },
//             {
//                 dataField: 'cCuspec',
//                 caption: '规格型号',
//                 width: 120,
//                 alignment: 'center',
//                 allowEditing: false,
//             },
             {
                 dataField: 'number',
                 caption: '序号',
                 width: 50,
                 alignment: 'center',
                 allowEditing: false,
             },
             {
                 dataField: 'cSw08',
                 caption: '报关物资名称',
//                 width: 120,
                 alignment: 'center',
                 
             },
             {
                 dataField: 'cSpec',
                 caption: '报关物资规格',
//                 width: 120,
                 alignment: 'center',
             },

             {
                 dataField: 'cUnitspec',
                 caption: '报关单位',
//                 width: 100,
                 alignment: 'center',
             },
             {
                 dataField: 'cGoodsnum',
                 caption: '订购数量',
//                 width: 60,
                 alignment: 'center',

                 setCellValue: function (newData, value, currentRowData) {
                    
                 	newData.cGoodsnum = value;
//                 	console.log(VB_cPrice);
                 	// 数量
                 	VB_cNum = value;
                 	var cPrice1 = currentRowData.cPrice;//试用
                 	// // 总价
                 	VB_cSumprice = newData.cGoodsnum * cPrice1;
                 	newData.cSumprice = newData.cGoodsnum * cPrice1;
                 }
             },
             {
                 dataField: 'cPrice',
                 caption: '含税单价',
//                 width: 80,
                 alignment: 'center',
                 setCellValue: function (newData, value, currentRowData) {
                 	newData.cPrice = value;
                 	// 单价
                 	VB_cPrice = value;
                 	var cNum2 = currentRowData.cGoodsnum;//试用
//                 	console.log(cNum2);
                 	// 总价
                 	VB_cSumprice = newData.cPrice * cNum2;
                 	newData.cSumprice = newData.cPrice * cNum2;
                     
                 }
             },
             {
                 dataField: 'cSumprice',
                 caption: '含税总价',
//                 width: 100,
                 alignment: 'center',
                 // allowEditing: false,

             },
             {
                 dataField: 'cRemark',
                 caption: '备注',
//                 alignment: 'center',
//                 width: 100,
             },
         ],
         summary: {
             // 普通列求和
             totalItems: [{
                 column: 'cSumprice', //计算哪列的值
                 showInColumn: "cSw08", //显示在哪列
                 displayFormat: "合计人民币:{0}", //显示格式
                 // valueFormat: "currency",
                 valueFormat: "fixedPoint",
                 precision: 2,
                 summaryType: "sum" ,//汇总类型--运算方式
                 customizeText: function (e) {
//                 	console.log(e.value)
                 	return '合 计 人 民 币:'+e.value;
                 }
             }],
         },
     })

     //单条修改
//     function update_fun() {
//         msg = {
//             ver: '53cc62f6122a436083ec083eed1dc03d',
//             session: '42f5c0d7178148938f4fda29460b815a',
//             tag: {},
//             data: {
//                 cgQ003S1s2: {
//
//                 }
//             },
//         };
//         msg.data.cgQ003S1s2 = Dup_Item;
//
//         // 单价修改
//         if (VB_cPrice == null) {
//
//         } else {
//             msg.data.cgQ003S1s2.cPrice = VB_cPrice;
//         }
//
//         // 总价修改
//         if (VB_cSumprice == null) {
//
//         } else {
//             msg.data.cgQ003S1s2.cSumprice = VB_cSumprice;
//         }
//
//         $.ajax({
//             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/modifyTpCgorderst'),
//             dataType: 'json', //返回格式为json           
//             async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//             type: 'post', //请求方式 get 或者post ,         
//             contentType: 'application/json',
//             success: function (data) {
//                 console.log(data)
//                 // 修改成功后为全局的变量设置为空
//                 //    VB_cPricePer = null;
//                 //    VB_cSumprice = null;
//                 //    VB_cComno = null;
//                 //    VB_cOrdertime = null;
//                 //    VB_cDeltime = null;
//                 //    VB_cAogtime = null;
//                 //    VB_cProvider = null;
//                 //    VB_cRemark = null;
//                 //    M1S11_serDel()
//
//
//             },
//             error: function () {
//                 DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//             }
//         })
//     }
     // 交货期限、交货地点
//     $('#deadline4').dxForm({
//         formData: adddatapo,
//         validationGroup: validationGroupName,
//         colCount: 1,
//         items: [{
//                 dataField: 'cDelivdate',
//                 label: {
//                     text: '1.交货期限'
//                 },
//                 editorOptions: {
//                     showClearButton: true,
//                     value: '自双方合同盖章生效之日起 *日内。'
//                 },
//                 validationRules: [{
//                     type: 'required',
//                     message: '必填！'
//                 },
//                 {
//                     type: 'stringLength',
//                     max: 4000,
//                     min: 0,
//                     message: '长度超限，最长为4000！'
//                 },
//             ]
//             },
//             {
//                 dataField: 'cDelivplace',
//                 label: {
//                     text: '2.交货地点'
//                 },
//                 editorType: 'dxSelectBox',
//                 validationRules: [{
//                     type: 'required',
//                     message: '必填！',
//                    
//                 },
//                 {
//                     type: 'stringLength',
//                     max: 1000,
//                     min: 0,
//                     message: '长度超限，最长为1000！'
//                 },
//             ],
//                 editorOptions: {
//                     dataSource: jhdd1,
//                     valueExpr: 'cSubitemid',
//                     displayExpr: 'cSubitemdes',
//                     searchEnabled: true,
//                     showClearButton: true,
//                     //以上完成对没有联动数据源配置
//                     //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                     // dataSource: variabl,
//                     // valueExpr: 'id',
//                     // displayExpr: 'value',
//                     // showClearButton: true,
//                     placeholder: '请选择',
//                 },
//             },
//         ]
//     }).dxForm('instance');
//     // 付款方式
//     $('#pice4').dxForm({
//         formData: adddatapic,
//         validationGroup: validationGroupName,
//         colCount: 1,
//         items: [{
//             dataField: 'cPayway',
//             label: {
//                 text: '付款方式'
//             },
//             editorOptions: {
//                 //以上完成对没有联动数据源配置
//                 //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                 // dataSource: variabl,
//                 // valueExpr: 'id',
//                 // displayExpr: 'value',
//                 // showClearButton: true,
//                 showClearButton: true
//             },
//             validationRules: [{
//                 type: 'required',
//                 message: '必填！'
//             },
//             {
//                 type: 'stringLength',
//                 max: 4000,
//                 min: 0,
//                 message: '长度超限，最长为4000！'
//             },
//         ]
//         }, ]
//     }).dxForm('instance');
  	$('#clauseForm5').dxForm({
  		formData: adddata,
  		validationGroup: validationGroupName,
  		colCount: 1,
  		items: [
  			{
  				dataField: 'cSw01',
  				label: {
  					text: '扩展字段1',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw02',
  				label: {
  					text: '扩展字段2',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw03',
  				label: {
  					text: '扩展字段3',
  					visible:false,
  					readOnly:true,
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw04',
  				label: {
  					text: '扩展字段4',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw05',
  				label: {
  					text: '扩展字段5',
  					visible:false,
//  					readOnly:true,
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw06',
  				label: {
  					text: '扩展字段6',
  					visible:false
  						
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw07',
  				label: {
  					text: '扩展字段7',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw08',
  				label: {
  					text: '扩展字段8',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw09',
  				label: {
  					text: '扩展字段9',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw10',
  				label: {
  					text: '扩展字段10',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw11',
  				label: {
  					text: '扩展字段11',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw12',
  				label: {
  					text: '扩展字段12',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw13',
  				label: {
  					text: '扩展字段13',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为4000！'
  				},]
  			},
  			{
  				dataField: 'cSw14',
  				label: {
  					text: '扩展字段14',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为400！'
  				},]
  			},
  			{
  				dataField: 'cSw15',
  				label: {
  					text: '扩展字段15',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为400！'
  				},]
  			},
  			{
  				dataField: 'cSw16',
  				label: {
  					text: '扩展字段16',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw17',
  				label: {
  					text: '扩展字段17',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw18',
  				label: {
  					text: '扩展字段18',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw19',
  				label: {
  					text: '扩展字段19',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw20',
  				label: {
  					text: '扩展字段20',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw21',
  				label: {
  					text: '扩展字段21',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw22',
  				label: {
  					text: '扩展字段22',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw23',
  				label: {
  					text: '扩展字段23',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw24',
  				label: {
  					text: '扩展字段24',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw25',
  				label: {
  					text: '扩展字段25',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw26',
  				label: {
  					text: '扩展字段26',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw27',
  				label: {
  					text: '扩展字段27',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw28',
  				label: {
  					text: '扩展字段28',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw29',
  				label: {
  					text: '扩展字段29',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw30',
  				label: {
  					text: '扩展字段30',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					showClearButton: true,
  					searchEnable: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw31',
  				label: {
  					text: '扩展字段31',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw32',
  				label: {
  					text: '扩展字段32',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw33',
  				label: {
  					text: '扩展字段33',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw34',
  				label: {
  					text: '扩展字段34',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw35',
  				label: {
  					text: '扩展字段35',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw36',
  				label: {
  					text: '扩展字段36',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw37',
  				label: {
  					text: '扩展字段37',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw38',
  				label: {
  					text: '扩展字段38',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw39',
  				label: {
  					text: '扩展字段39',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw40',
  				label: {
  					text: '扩展字段40',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw41',
  				label: {
  					text: '扩展字段41',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
//  					placeholder: '',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw42',
  				label: {
  					text: '扩展字段42',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
//  					placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw43',
  				label: {
  					text: '扩展字段43',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw44',
  				label: {
  					text: '扩展字段44',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw45',
  				label: {
  					text: '扩展字段45',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw46',
  				label: {
  					text: '扩展字段46',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw47',
  				label: {
  					text: '扩展字段47',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw48',
  				label: {
  					text: '扩展字段48',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw49',
  				label: {
  					text: '扩展字段49',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  			{
  				dataField: 'cSw50',
  				label: {
  					text: '扩展字段50',
  					visible:false
  				},
  				editorType: "dxTextArea",
  				editorOptions: {
  					searchEnable: true,
  					showClearButton: true,
  					//placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},

  		]
  	}).dxForm('instance')


$('#textarea5').dxForm({
           // width: "100%",
           // height: "200px",
           formData: adddata,
           validationGroup: validationGroupName,
           colCount: 1,
           items: [{
                   dataField: 'cCludecom',
                   label: {
                       text: '单位名称'
                   },
                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                       readOnly: true,
                       //                        value: '青山控股集团有限公司',
                   },
               },
               {
                   dataField: 'cComaddress',
                   label: {
                       text: '单位地址'
                   },

                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                       readOnly: true,
                       //                        value: '浙江省温州市龙湾区龙祥路2666号',
                   },
               },
               {
                   dataField: '',
                   label: {
                       text: '法定代表人（或委托代理人）'
                   },
                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                       readOnly: true,
                   },
               },
               {
                   dataField: 'cComphone',
                   label: {
                       text: '电话'
                   },
                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                       readOnly: true,
                       //                        value: '13777770869'
                   },
               },
               {
                   dataField: 'cComfaxno',
                   label: {
                       text: '传真'
                   },
                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                   },
               },
               {
                   dataField: 'cCombankname',
                   label: {
                       text: '开户银行'
                   },
                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                       readOnly: true,
                       //                        value: '华夏银行股份有限公司温州分行龙湾支行'
                   },
               },
               {
                   dataField: 'cComaccountno',
                   label: {
                       text: '账号'
                   },
                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                       readOnly: true,
                       //                        value: '4270 2800 0180 8100 0129 29'
                   },
               },
               {
                   dataField: 'cComtaxnumber',
                   label: {
                       text: '税号'
                   },
                   editorType: 'dxTextBox',
                   editorOptions: {
                       searchEnable: true,
                       showClearButton: true,
                       readOnly: true,
                   },
               },
           ]
       }).dxForm('instance')




     // $("#textarea2").dxTextArea({
     //     width: "580px",
     //     height: "200px",
     //     placeholder: "供方...."
     // })

     $('#textarea6').dxForm({
         // width: "100%",
         // height: "200px",
         formData: adddata,
         validationGroup: validationGroupName,
         colCount: 1,
         items: [{
                 dataField: 'cSupplier',
                 label: {
                     text: '单位名称'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
             {
                 dataField: 'cSupaddress',
                 label: {
                     text: '单位地址'
                 },

                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
             {
                 dataField: '',
                 label: {
                     text: '法定代表人（或委托代理人）'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
             {
                 dataField: 'cSupphone',
                 label: {
                     text: '电话'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
             {
                 dataField: 'cFaxno',
                 label: {
                     text: '传真'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
             {
                 dataField: 'cBankname',
                 label: {
                     text: '开户银行'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
             {
                 dataField: 'cAccountno',
                 label: {
                     text: '账号'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
             {
                 dataField: 'cTaxnumber',
                 label: {
                     text: '税号'
                 },
                 editorType: 'dxTextBox',
                 editorOptions: {
                     searchEnable: true,
                     showClearButton: true,
                     readOnly: true,
                 },
             },
         ]
     }).dxForm('instance')
    }
	//联动
	 $('#dataGridS1').dxDataGrid({
	        onRowClick: function(e) {
	        	//合同条款
	            S1S22_SSRT();
	        	//合同物资
	        	S1S21_SSRT();
	            //结算协议信息
	            S1S23_SSRT();
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
//		console.log(JSON.stringify(msg));
		$.ajax({
			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21QConnum'),
			dataType: 'json',   //返回格式为json  
			async: true,//请求是否异步，默认为异步，这也是ajax重要特性 
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
			type: 'post',   //请求方式 get 或者post ,
			contentType: 'application/json',
			success: function (data) {
//				console.log(addmonigrid1);
				if (data.errcode == 0) {
//					DevExpress.ui.notify(data.msg, 'success', 3000)
					addmonigrid1 = data.data.cgMnhtS1s2;
				} else {
					DevExpress.ui.notify(data.msg, 'error',3000)
					return;
				} if (data.data.cgMnhtS1s2 == null) {
					tabledataS2.splice(0, tabledataS2.length);
					$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
					return
				}
//				let select;
//				
//				console.log(addmonigrid1);
				/*select = data.data.cgMnhtS1s2
				tabledataS2.splice(0, tabledataS2.length);
				select.forEach(item => tabledataS2.push(item));
				$('#dataGridS2').dxDataGrid('instance').deselectAll()
				$('#dataGridS2').dxDataGrid('instance').refresh()*/
				cake.Ui.LoadPanel.close();
			},
			error: function () {
				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
				//e.cancel=true;       
			}
		})
	}
		function S1S22_SSRT() {
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
//			cake.Ui.LoadPanel.show()
//			console.log(JSON.stringify(msg));
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21QCause'),
				dataType: 'json',   //返回格式为json  
				async: true,//请求是否异步，默认为异步，这也是ajax重要特性 
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
				type: 'post',   //请求方式 get 或者post ,
				contentType: 'application/json',
				success: function (data) {
					if (data.errcode == 0) {
						addmonigrid2 = data.data.tbCgcontract[0];
//						DevExpress.ui.notify(data.msg, 'success', 3000)
					} 
//					else if(data.errcode == 60){
//						DevExpress.ui.notify(data.msg, 'warning',3000)
//						return;
//					} else{
//						DevExpress.ui.notify(data.msg, 'error',3000)
//						return;
//					}
//					console.log(addmonigrid2);
					cake.Ui.LoadPanel.close();
				},
				error: function () {
					DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
					// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
					//e.cancel=true;       
				}
			})
		}
	
		  function S1S23_SSRT() {
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
				$.ajax({
					url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21QSettlement'),
					dataType: 'json',   //返回格式为json  
					async: true,//请求是否异步，默认为异步，这也是ajax重要特性 
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
					type: 'post',   //请求方式 get 或者post ,
					contentType: 'application/json',
					success: function (data) {
						console.log(data.data.tpSettlement);
						if (data.errcode == 0) {
							jiesdata = data.data.tpSettlement[0];
							console.log(jiesdata);
//							DevExpress.ui.notify(data.msg, 'success', 3000)
						} 
//						else {
//							DevExpress.ui.notify(data.msg, 'error',3000)
//							return;
//						} if (data.data.cgMnhtS1s2 == null) {
//							tabledataS2.splice(0, tabledataS2.length);
//							$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
//							return
//						}
//						let select;
						
//						console.log(jiesdata);
						/*select = data.data.cgMnhtS1s2
						tabledataS2.splice(0, tabledataS2.length);
						select.forEach(item => tabledataS2.push(item));
						$('#dataGridS2').dxDataGrid('instance').deselectAll()
						$('#dataGridS2').dxDataGrid('instance').refresh()*/
						cake.Ui.LoadPanel.close();
					},
					error: function () {
						DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
						// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
						//e.cancel=true;       
					}
				})
			}
	function M1S12T_addfun() { 
		let operateFormS3buts = [
//            {
//                location: "before",
//                locateInMenu: 'auto',
//                widget: "dxButton",
//                options: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'plus',
//                    text: '添加',
//                    onClick: function () {
//                        $("#mAke").dxDataGrid('instance').addRow();
//
//                    }
//                }
//            },
//            {
//                location: "before",
//                locateInMenu: 'auto',
//                widget: "dxButton",
//                options: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'remove',
//                    text: '删除',
//                    onClick: function () {
//                    	/*let rowsData = $("#addmoni2").dxDataGrid('instance').getSelectedRowsData()[0];
//                    	let rowkey = $("#addmoni2").dxDataGrid('instance')._options.dataSource;
//                    	rowkey.splice(rowsData);
//
//                    	$("#addmoni2").dxDataGrid('instance').refresh()*/
//                    	let rowsData = $("#mAke").dxDataGrid('instance').getSelectedRowsData();
//                    	let dataSource = $("#mAke").dxDataGrid('instance').option('dataSource');
//
//                    	let removeIndex = [];
//
//                    	for (let index = 0; index < dataSource.length; index++) {
//
//                    	if (rowsData.some(element => element == dataSource[index])) {
//                    	removeIndex.push(index);
//                    	}
//
//                    	}
//
//                    	removeIndex.reverse().forEach(element => dataSource.splice(element, 1));
//
//                    	$("#mAke").dxDataGrid('instance').refresh()
//                    }
//                }
//            },
            {
                location: "before",
                locateInMenu: 'auto',
                widget: "dxButton",
                options: {
                    height: "auto",
                    width: "auto",
                    icon: 'save',
                    text: '修改保存',
                    onClick:function(e){
                    	console.log(6666666);
                    	 msg = {
                                 ver: '53cc62f6122a436083ec083eed1dc03d',
                                 session: '42f5c0d7178148938f4fda29460b815a',
                                 tag: {},
                                 data: {
                                 },
                             };
                    	 msg.data.tbDocumeform = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                    	 msg.data.tbDocumeformson = $('#mAke2').dxDataGrid('instance')._options.dataSource;
                    	 msg.data.tbDocumeformData = $('#addFormMT2').dxForm('instance').option('formData');
//                    	 console.log(JSON.stringify(msg));
                    	 $.ajax({
                    		 //../../tdhc_cgsys/tab/simContract  ../../tdhc_cgsys/CG_XXLY/M1S21A
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S21UXXK'),
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
                            	 S1S21_SSRT(); 
                            	 M1S11_serDel();
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
		
//		let operateFormS4buts = [
//            {
//                location: "before",
//                locateInMenu: 'auto',
//                widget: "dxButton",
//                options: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'plus',
//                    text: '添加',
//                    onClick: function () {
//                    	$('#mAke2').dxDataGrid('instance').refresh()
////                    	$("#mAke").dxDataGrid('instance').addRow();
//
//                    }
//                }
//            },
//		];

		$("#mAke2").dxDataGrid({
			// 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
			// dataSource: "data/customers.json",
			columnResizingMode: "widget",
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
//				mode: "multiple"
				mode: "single"
			},
			loadPanel: {
				enabled: true,
				text: '请稍等片刻...'
			},
			onToolbarPreparing: function (e) {
				operateFormS3buts.forEach(item => e.toolbarOptions.items.push(item));

			},
			
//			onEditingStart: function (e) { 
//				console.log(e.column.dataField)
//				let dataField = e.column.dataField;
//				if (dataField == 'cDeclarationTbDocumeform') {
//				addIns = $('#addmotai3').dxPopup({
////				deferRendering: true,
////				fullScreen: true
//					width:600,    
//					height:250,  
//				}).dxPopup('instance');
//				$('#addmotai3').css('display', "block")
//				addIns.option('title', '申报要素')
//				addIns.show();
//				cDeclaration_MT();
//				addIns.option('formData', new Object());
//				}
//			},
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
				dataField: 'cTypename',
				caption: '商品和服务分类简称',
				width: 120,
				alignment: 'center',
			},
			{
				dataField: 'cNum',
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
				dataField: 'cStaunit',
				caption: '法定单位',
				width: 60,
				alignment: 'center',
			},
			{
				dataField: 'cHscode',
				caption: 'HS编码',
				width: 100,
				alignment: 'center',

			},
			{
				dataField: 'cSupervision',
				caption: '监管条件',
				width: 100,
				alignment: 'center'
			},
			{
				dataField: 'cTaxrate',
				caption: '退税率',
				 width: 100,
				alignment: 'center',
				// allowEditing: false,
				calculateCellValue: function(rowData) {
					var Avalue = rowData.cTaxrate;
					if (Avalue) {
					var thisValue = Avalue.split('%');
					thisValue = thisValue.join('')
					returnFloat()
//					Avalue = Number(thisValue).toFixed(2) + "%"
					Avalue = thisValue + "%";
					}
					// var ad = Avalue.toFixed(2) + "%"
					rowData.cTaxrate = Avalue;
					return rowData.cTaxrate;
					}

			},
			{
				dataField: 'cDeclaration',
				caption: '申报要素',
				alignment: 'center',
				width: 120,
				// allowEditing: false,
//				onEditingStart: function (e) {
//					console.log(e.column.dataField)
//					let dataField = e.column.dataField;
//					if (dataField == 'cDeclarationTbDocumeform') {
//					addIns = $('#addmotai3').dxPopup({
//					deferRendering: true,
//					fullScreen: true
//					}).dxPopup('instance');
//					$('#addmotai3').css('display', "block")
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
				calculateCellValue: function(rowData) {
					var Avalue = rowData.cBm;
					if (Avalue) {
					var thisValue = Avalue.split('%');
					thisValue = thisValue.join('')
					returnFloat()
					Avalue = Number(thisValue).toFixed(2) + "%"
					}
					// var ad = Avalue.toFixed(2) + "%"
					rowData.cBm = Avalue;
					return rowData.cBm;
					}
				
			},
			{
				dataField: 'cPpn',
				caption: 'PPN',
				width: 80,
				alignment: 'center',
				calculateCellValue: function(rowData) {
					var Avalue = rowData.cPpn;
					if (Avalue) {
					var thisValue = Avalue.split('%');
					thisValue = thisValue.join('')
					returnFloat()
					Avalue = Number(thisValue).toFixed(2) + "%"
					}
					// var ad = Avalue.toFixed(2) + "%"
					rowData.cPpn = Avalue;
					return rowData.cPpn;
					}
			},

			{
				dataField: 'cPph',
				caption: 'PPH',
				width: 80,
				alignment: 'center',
				calculateCellValue: function(rowData) {
					var Avalue = rowData.cPph;
					if (Avalue) {
					var thisValue = Avalue.split('%');
					thisValue = thisValue.join('')
					returnFloat()
					Avalue = Number(thisValue).toFixed(2) + "%"
					}
					// var ad = Avalue.toFixed(2) + "%"
					rowData.cPph = Avalue;
					return rowData.cPph;
					}
			},
			{
				dataField: 'cTotaltaxr',
				caption: '合计税率',
				width: 60,
				alignment: 'center',
				calculateCellValue: function(rowData) {
					var Avalue = rowData.cTotaltaxr;
					if (Avalue) {
					var thisValue = Avalue.split('%');
					thisValue = thisValue.join('')
					returnFloat()
					Avalue = Number(thisValue).toFixed(2) + "%"
					}
					// var ad = Avalue.toFixed(2) + "%"
					rowData.cTotaltaxr = Avalue;
					return rowData.cTotaltaxr;
					}
			},
			{
				dataField: 'cAgreedtax',
				caption: '协定税率',
				width: 80,
				alignment: 'center',
				calculateCellValue: function(rowData) {
					var Avalue = rowData.cAgreedtax;
					if (Avalue) {
					var thisValue = Avalue.split('%');
					thisValue = thisValue.join('')
					returnFloat();
					Avalue = Number(thisValue).toFixed(2) + "%"
					}
					// var ad = Avalue.toFixed(2) + "%"
					rowData.cAgreedtax = Avalue;
					return rowData.cAgreedtax;
					}

			},
			{
				dataField: 'cIndimport',
				caption: '印尼管制条件',
				width: 100,
				alignment: 'center'
			},
			{
				dataField: 'cWhecoo',
				caption: '办产地证否',
				 width: 100,
				alignment: 'center',
				// allowEditing: false,

			},
//			{
//				dataField: 'cRepein',
//				caption: '替代税号',
//				 width: 100,
//				alignment: 'center',
//				// allowEditing: false,
//
//			},
			],
		})


		M1S12addIns = $('#addFormMT2').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
				{
					dataField: 'cConnum',
					label: {
						text: '内贸合同号'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
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
					dataField: 'cConmoney',
					label: {
						text: '内贸金额'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
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
				dataField: 'cMoneyrmb',
				label: {
					text: '货币（RMB）'
				},
				editorType: 'dxTextBox',
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [
				/*{
					type: 'required',
					message: '必填！'
				},*/
				{
					type: 'stringLength',
					max: 1000,
					min: 0,
					message: '长度超限，最长为1000！'
				},
				]

			},
				{
					dataField: 'cSupplier',
					label: {
						text: '供应商'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
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
					dataField: 'cInvoicec',
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
					dataField: 'cComphone',
					label: {
						text: '联系电话'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
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
					dataField: 'cWeight',
					label: {
						text: '重量'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [
					/*{
						type: 'required',
						message: '必填！'
					},*/
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cOutconnum',
					label: 
					{
						text: '外贸合同号'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
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
					dataField: 'cOutmoney',
					label: {
						text: '外贸金额'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
					},
					validationRules: [
//					{
//						type: 'required',
//						message: '必填！'
//					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cMoneyusd',
					label: {
						text: '货币（USD）'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [
//						{
//						type: 'required',
//						message: '必填！'
//					},
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
					dataField: 'cExporter',
					label: {
						text: '出口商'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
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
					dataField: 'cShname',
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
//				{
//					colSpan: 2,
//					itemType: 'empty',
//				},
				{

					dataField: 'cInpbs',
					label: {
						text: '内贸采购业务主办'
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
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cOutpbs',
					label: {
						text: '外贸业务主办'
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
//				{
//					colSpan: 2,
//					itemType: 'empty',
//				},
//				{
//
//					dataField: 'cChiede',
//					label: {
//						text: '中国出口报关审核人'
//					},
//					editorType: 'dxTextBox',
//					editorOptions: {
//						searchEnable: true,
//						showClearButton: true,
//						readOnly:true,
//					},
//					validationRules: [{
//						type: 'required',
//						message: '必填！'
//					},
//					{
//						type: 'stringLength',
//						max: 1000,
//						min: 0,
//						message: '长度超限，最长为1000！'
//					},
//					]
//
//				},
				{
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cIndida',
					label: {
						text: '报关审核人'
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
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cDataedp',
					label: {
						text: '数据录用单证制作人签收'
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
	function M1S21T_addfun() { 
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
                    text: '保存',
                    onClick:function(e){
                    	console.log(6666666);
                    	 msg = {
                                 ver: '53cc62f6122a436083ec083eed1dc03d',
                                 session: '42f5c0d7178148938f4fda29460b815a',
                                 tag: {},
                                 data: {
                                 },
                             };
                    	 msg.data.tbDocumeformson = $('#mAke').dxDataGrid('instance')._options.dataSource;
                    	 msg.data.tbDocumeformData = $('#addFormMT').dxForm('instance').option('formData');
                    	 console.log(JSON.stringify(msg));
                    	 $.ajax({
                    		 //../../tdhc_cgsys/CG_XXLY/M1S21UXXK
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S22A'),
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
                            	 S1S21_SSRT(); 
//                            	 M1S11_serDel();
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
		
//		let operateFormS4buts = [
//            {
//                location: "before",
//                locateInMenu: 'auto',
//                widget: "dxButton",
//                options: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'plus',
//                    text: '添加',
//                    onClick: function () {
//                    	$('#mAke2').dxDataGrid('instance').refresh()
////                    	$("#mAke").dxDataGrid('instance').addRow();
//
//                    }
//                }
//            },
//		];

		$("#mAke").dxDataGrid({
			// 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
			// dataSource: "data/customers.json",
			columnResizingMode: "widget",
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
//				mode: "multiple"
				mode: "single"
			},
			loadPanel: {
				enabled: true,
				text: '请稍等片刻...'
			},
			onToolbarPreparing: function (e) {
				operateFormS3buts.forEach(item => e.toolbarOptions.items.push(item));

			},
			
//			onEditingStart: function (e) { 
//				console.log(e.column.dataField)
//				let dataField = e.column.dataField;
//				if (dataField == 'cDeclarationTbDocumeform') {
//				addIns = $('#addmotai3').dxPopup({
////				deferRendering: true,
////				fullScreen: true
//					width:600,    
//					height:250,  
//				}).dxPopup('instance');
//				$('#addmotai3').css('display', "block")
//				addIns.option('title', '申报要素')
//				addIns.show();
//				cDeclaration_MT();
//				addIns.option('formData', new Object());
//				}
//			},
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
				dataField: 'cTypename',
				caption: '商品和服务分类简称',
				width: 120,
				alignment: 'center',
			},
			{
				dataField: 'cNum',
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
				dataField: 'cStaunit',
				caption: '法定单位',
				width: 60,
				alignment: 'center',
			},
			{
				dataField: 'cHscode',
				caption: 'HS编码',
				width: 100,
				alignment: 'center',

			},
			{
				dataField: 'cSupervision',
				caption: '监管条件',
				width: 100,
				alignment: 'center'
			},
			{
				dataField: 'cTaxrate',
				caption: '退税率',
				 width: 100,
				alignment: 'center',
				// allowEditing: false,

			},
			{
				dataField: 'cDeclaration',
				caption: '申报要素',
				alignment: 'center',
				width: 120,
				// allowEditing: false,
//				onEditingStart: function (e) {
//					console.log(e.column.dataField)
//					let dataField = e.column.dataField;
//					if (dataField == 'cDeclarationTbDocumeform') {
//					addIns = $('#addmotai3').dxPopup({
//					deferRendering: true,
//					fullScreen: true
//					}).dxPopup('instance');
//					$('#addmotai3').css('display', "block")
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
				caption: '印尼管制条件',
				width: 100,
				alignment: 'center'
			},
			{
				dataField: 'cWhecoo',
				caption: '办产地证否',
				 width: 100,
				alignment: 'center',
				// allowEditing: false,

			},
			],
		})


		M1S12addIns = $('#addFormMT').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
				{
					dataField: 'cConnum',
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
					dataField: 'cConmoney',
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
				dataField: 'cMoneyrmb',
				label: {
					text: '货币（RMB）'
				},
				editorType: 'dxTextBox',
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [
				/*{
					type: 'required',
					message: '必填！'
				},*/
				{
					type: 'stringLength',
					max: 1000,
					min: 0,
					message: '长度超限，最长为1000！'
				},
				]

			},
				{
					dataField: 'cSupplier',
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
					dataField: 'cInvoicec',
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
					dataField: 'cComphone',
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
					dataField: 'cWeight',
					label: {
						text: '重量'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [
					/*{
						type: 'required',
						message: '必填！'
					},*/
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cOutconnum',
					label: 
					{
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
					dataField: 'cOutmoney',
					label: {
						text: '外贸金额'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
//						readOnly:true,
					},
					validationRules: [
//					{
//						type: 'required',
//						message: '必填！'
//					},
					{
						type: 'stringLength',
						max: 1000,
						min: 0,
						message: '长度超限，最长为1000！'
					},
					]

				},
				{
					dataField: 'cMoneyusd',
					label: {
						text: '货币（USD）'
					},
					editorType: 'dxTextBox',
					editorOptions: {
						searchEnable: true,
						showClearButton: true,
					},
					validationRules: [
//						{
//						type: 'required',
//						message: '必填！'
//					},
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
					dataField: 'cExporter',
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
					dataField: 'cShname',
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
//				{
//					colSpan: 2,
//					itemType: 'empty',
//				},
				{

					dataField: 'cInpbs',
					label: {
						text: '内贸采购业务主办'
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
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cOutpbs',
					label: {
						text: '外贸业务主办'
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
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cChiede',
					label: {
						text: '中国出口报关审核人'
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
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cIndida',
					label: {
						text: '印度尼西亚进口报关审核人'
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
					colSpan: 2,
					itemType: 'empty',
				},
				{

					dataField: 'cDataedp',
					label: {
						text: '数据录用单证制作人签收'
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
	
//	setInterval(() => {
//		        M1S31_serDel();
//		    }, 1800000);
}) 		    