
///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////
let S1S21addIns;
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let tabledataS4 = []; //用于接收表格数据源
let TP_CGORDERMT_USER = []
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let searchdataFormM2; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let adddata = {}; //添加按钮需要的数据源
let outForm = {};
let addIns;   //增加操作时候的模态框实例
let addIns2;
let addIns3;
let addIns31;
let upload;
let cTime = new Date();
let make = {};
let supperData;
let supperData2;
//设置模态框的属性
if (addIns == null) {
	addIns = $('#addmotai ').dxPopup({
		'visible': false,  //设置属性不可见
		height: 300,  //设置高度
		width: 450,  //设置宽度
	}).dxPopup('instance');
}
if (addIns2 == null) {
	addIns2 = $('#addmotai2').dxPopup({
		'visible': false,  //设置属性不可见
		height: 300,  //设置高度
		width: 450,  //设置宽度
	}).dxPopup('instance');
}
if(addIns3 == null){
	addIns3  = $('#addmotai0').dxPopup({
	    //模态框增加name    
	    width: 200,
	    height: 70
	}).dxPopup('instance'); //增加操作时候的模态框实例
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
let hsState = [];//信息卡状态
let wzwczt = [];//合同物资状态
let wanchengzhuangtai = [];
let comp_Cludecom = []; //签订公司
let dtState = [];
let cont_supplier = []; //供应商
let ysdd1 = []; //验收地点
let addGang = [];
let adddataWcg = {};
let adddatapo = {};
let adddatapic = {};
let adddatapla = {};
let calculation = {};
let jhqx = []; //交货期限
let jhdd1 = []; //交货地点
let trouble = [];//有问题的合同
let contact_Type = [];
let tcCludecom;//签订公司名称
let cDelivplace;//交货地点
let cConnumalter;//变更合同类型
let addmonigrid1;//静态合同物资
let addmonigrid2;//动态合同物资
let addmonigrid3;//条款
let biangeng=[];
let dhcd=[];//电汇承兑
window.onload = () => {
	DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
	console.log("%c孩子你越界咯！！！！！！！","color:blue;font-size:20px");
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
			lg: 6,
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
					value: new Date('2019','04','01'),
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
					dataSource: hsState,
					valueExpr: 'cSubitemid',
					displayExpr: 'cSubitemdes',
					searchEnable: true,
					showClearButton: true,
				},
			},
//			{
//                dataField: 'cSw10',
//                label: {
//                    text: '采购员'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: cgy,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
////                    searchEnabled:true,
////                    showClearButton: true,
//                    height:26,
//                    width: 160,
////                    showSelectionControls: true,
//                    showClearButton: true,
////                    readOnly:true,
//                },
//            },
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
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
                width: "auto",
                icon: "save",
                text: '无采购生成合同',
                onClick: function() {
                	addIns2 = $('#addmotai41').dxPopup({
                        fullScreen: true
                    }).dxPopup('instance')
                    addIns2.option('title', '无采购生成合同');
                    addIns2.show();
                    Update_moni2();
                    addIns2_form.option('formData', new Object())
                    addIns2_form.getEditor('cCludetime').option('value',new Date());
//                    addIns2_form.getEditor('cDr').option('value',new Date());
                    // S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
                    /// $('#addForm2').dxForm('instance').getEditor('cCludecom').option('value', '青山控股集团股');
                    $('#contract_type41').dxForm('instance').getEditor('cSw10').option('value', get_user());
//                    let dataGrid = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                    let adddataWZ = [];
                    $('#addmoni41').dxDataGrid('instance').option('dataSource',adddataWZ);
                    $('#addmoni41').dxDataGrid('instance').refresh();
//                    $('#addmoni2').dxDataGrid('instance').option('dataSource', null);
//                    M1S21_serDel();
                }
			}
		
//            name: 'M1S11S1',
//            itemType: 'button',
//            buttonOptions: {
//                
//                
//            }
        },
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				icon: 'save',
//				text: '拟合同修改',
//				onClick: function () {
//					change = '2'
//					let grid = $('#dataGridS1').dxDataGrid('instance');
//					let rowsData = grid.getSelectedRowsData()[0]
//					let selectedRowKeys = grid.getSelectedRowKeys()
//					if (selectedRowKeys.length < 1) {
//						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//						DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 2000);
//						return;
//					}
////					if (selectedRowKeys.length > 1) {
////						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////						// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
////						return;
////					}
//					if(rowsData.cStatexxk =="xxk06"){
//						DevExpress.ui.notify('该合同已经生成正式合同，需正式合同撤回才能进行修改！！！', 'info', 3000);
//						addIns.hide();
//						return;
//					}
//					if(rowsData.cStatexxk !="xxk01" && rowsData.cStatexxk !="xxk05"){
//						DevExpress.ui.notify('该合同已提交过信息卡，请撤回信息卡 ！！！', 'info', 3000);
//						return;
//					}
//					addIns = $('#addmotai3').dxPopup({
//						//模态框增加name    
////												width:1000,    
////												height:450   
//						fullScreen: true
//					}).dxPopup('instance')
//					addIns.option('title', '修改合同信息');
//					addIns.show();
//					Update_moni();
//					// 调用模态框函数    
//					// updatafun()    
////					M1S11_Updatefun()
////					M1S11addIns.option('formData', rowsData)
//					let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
//					//签订公司
//					tcCludecom = dataGrid.cCludecom;
//					tcContype = dataGrid.cContype;
//					if(tcContype!=null || tcContype!=undefined){
//						DevExpress.ui.notify('该合同动态合同类型，请用拟合同修改功能！！！', 'info', 3000);
//						addIns.hide();
//						return;
//					}
////					if(dataGrid.cStatexxk =="xxk06"){
////						DevExpress.ui.notify('该合同已经生成正式合同，需正式合同撤回才能进行修改！！！', 'info', 3000);
////						addIns.hide();
////						return;
////					}
////					if(dataGrid.cStatexxk =="xxk05"){
////						DevExpress.ui.notify('该合同已被信息卡驳回请做变更！！！', 'info', 3000);
//////						addIns.hide();
//////						return;
////					}
//					
//					let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
////					console.log(matchedItem)
//                    if (matchedItem == null || matchedItem == undefined) {
//                        return "";
//                    } else {
//                    	tcCludecom = matchedItem.cSubitemdes
////                    	console.log(tcCludecom);
////                        return matchedItem.cSubitemdes;
//                    }
//                    $('#addForm3').dxForm('instance').option("formData", new Object);
//                    $('#addmoni3').dxDataGrid('instance').option('dataSource', new Object);
//                    $('#deadline3').dxForm('instance').option("formData", new Object);
//                    $('#deadline3').dxForm('instance').option("formData", new Object);
//                    $('#pice3').dxForm('instance').option("formData", new Object);
//					 $('#addForm3').dxForm('instance').getEditor('cOutconnum').option('value', dataGrid.cOutconnum);
//					 $('#addForm3').dxForm('instance').getEditor('cConnum').option('value', dataGrid.cConnum);
//					 $('#addForm3').dxForm('instance').getEditor('cCludecom').option('value', tcCludecom);
//					 $('#addForm3').dxForm('instance').getEditor('cCludetime').option('value', dataGrid.cCludetime);
//					 $('#addForm3').dxForm('instance').getEditor('cSupplier').option('value', dataGrid.cSupplier);
//					 $('#addForm3').dxForm('instance').getEditor('cSignplace').option('value', dataGrid.cSignplace);
//					 $('#addForm3').dxForm('instance').getEditor('cDr').option('value', dataGrid.cDr);
//					 $('#addForm3').dxForm('instance').getEditor('cSw20').option('value', dataGrid.cSw20);
//					 $('#addForm3').dxForm('instance').getEditor('cSw10').option('value', dataGrid.cSw10);
//					 //合同物资
//					 $('#addmoni3').dxDataGrid('instance').option('dataSource', addmonigrid1);
//					 //交货期限
//					 $('#deadline3').dxForm('instance').getEditor('cDelivdate').option('value', dataGrid.cDelivdate);
////					 jhdd1
////					 console.log(dataGrid.cDelivplace)
//					 //交货地点
//					 $('#deadline3').dxForm('instance').getEditor('cDelivplace').option('value', dataGrid.cDelivplace);
//					
//					 //付款方式
//					 $('#pice3').dxForm('instance').getEditor('cPayway').option('value', dataGrid.cPayway);
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
				icon: 'save',
				text: '动态修改',
				onClick: function () {
					change = '3'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择修改的合同！！！', 'info', 2000);
						return;
					}
					if(rowsData.cStatexxk =="xxk06"){
						DevExpress.ui.notify('该合同已经生成正式合同，需正式合同撤回才能进行修改！！！', 'info', 3000);
						addIns.hide();
						return;
					}
					if(rowsData.cStatexxk =="xxk09"){
						DevExpress.ui.notify('该合同已作废！！！', 'info', 3000);
						addIns.hide();
						return;
					}
					/*if(rowsData.cStatexxk !="xxk01" && rowsData.cStatexxk !="xxk05"){
						DevExpress.ui.notify('该合同已提交过信息卡，请撤回信息卡 ！！！', 'info', 3000);
						return;
					}*/
					addIns2 = $('#addmotai4').dxPopup({
						//模态框增加name    
//												width:1000,    
//												height:450   
						fullScreen: true
					}).dxPopup('instance')
					addIns2.option('title', '修改动态合同信息');
					addIns2.show();
					UpdateD_moni2();
					// 调用模态框函数    
					let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
					//签订公司
					tcCludecom = dataGrid.cCludecom;
					//合同类型
					tcContype = dataGrid.cContype;
					console.log(tcContype)
//					console.log(dataGrid.cSw05)
					if(tcContype==null | tcContype==undefined){
						DevExpress.ui.notify('该合同不是动态合同类型，请用拟合同修改功能！！！', 'info', 3000);
						addIns2.hide();
						return;
					}
					let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                    	tcCludecom = matchedItem.cSubitemdes
//                    	console.log(tcCludecom);
//                        return matchedItem.cSubitemdes;
                    } 
                    $('#clauseForm4').dxForm('instance').option("formData", new Object);
//                    console.log(contact_Type);
                    $('#contract_type4').dxForm('instance').getEditor('cContype').option('value', null);
                    $('#contract_type4').dxForm('instance').getEditor('cContype').option('value', tcContype);
                    $('#contract_type4').dxForm('instance').getEditor('cZqconnum').option('value', dataGrid.cSw05);
//                    $('#contract_type4').dxForm('instance').getEditor('cExporter').option('value', dataGrid.cSw21);
					 $('#addForm4').dxForm('instance').getEditor('cOutconnum').option('value', dataGrid.cOutconnum);
					 $('#addForm4').dxForm('instance').getEditor('cConnum').option('value', dataGrid.cConnum);
					 $('#addForm4').dxForm('instance').getEditor('cCludecom').option('value', tcCludecom);
					 $('#addForm4').dxForm('instance').getEditor('cCludetime').option('value', dataGrid.cCludetime);
					 $('#addForm4').dxForm('instance').getEditor('cSupplier').option('value', dataGrid.cSupplier);
					 $('#addForm4').dxForm('instance').getEditor('cSignplace').option('value', dataGrid.cSignplace);
//					 $('#addForm4').dxForm('instance').getEditor('cDr').option('value', dataGrid.cDr);
					 $('#addForm4').dxForm('instance').getEditor('cSw20').option('value', dataGrid.cSw20);
					 //合同物资
					 $('#addmoni4').dxDataGrid('instance').option('dataSource', addmonigrid2);
					 //交货期限
//					 $('#deadline4').dxForm('instance').getEditor('cDelivery').option('value', dataGrid.cDelivery);
					 $('#deadline4').dxForm('instance').getEditor('cDelivdate').option('value', dataGrid.cDelivdate);
//					 jhdd1
//					 console.log(dataGrid.cDelivplace)
					 
//					 if(dataGrid.cDelivery === 'qx03'){
//						 $('#deadline4').dxForm('instance').getEditor('cDeliverytime').option('value', dataGrid.cDeliverytime);
//					 }else{
//						 $('#deadline4').dxForm('instance').getEditor('cDeliveryday').option('value', dataGrid.cDeliveryday);
//					 }
					 //交货地点
					 $('#deadline4').dxForm('instance').getEditor('cDelivplace').option('value', dataGrid.cDelivplace);
					 //付款方式
					 $('#pice4').dxForm('instance').getEditor('cPayway').option('value', dataGrid.cPayway);

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
				text: '提交信息卡',
				onClick: function () {
					change = '3'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择你要提交的数据。', 'info', 2000);
						return;
					}
//					if(rowsData.cStatexxk == 'xxk02'){
//						DevExpress.ui.notify('属于变更合同，请走信息卡变更！！！！', 'info', 2000);
//						return;
//					}
//					if(rowsData.cStatexxk == 'xxk06'){
//						DevExpress.ui.notify('已生成正式合同不允许变更！！！！', 'info', 2000);
//						return;
//					}
					if(rowsData.cConnum.indexOf('CSPL') != -1){
						DevExpress.ui.notify('该合同是印度合同没有信息卡，不能提交！！！！', 'info', 3000);
						return;
					}
					if(rowsData.cRecallstate == '1'){
						DevExpress.ui.notify('该合同采购员撤回过信息卡，请走变更信息卡流程！！！！', 'info', 3000);
						return;
					}
					if(rowsData.cOutconnum == null || rowsData.cOutconnum == undefined){
						DevExpress.ui.notify('该合同无外贸号属于国内合同，请直接生成正式合同！！！！', 'info', 3000);
						return;
					}
					if(rowsData.cStatexxk != 'xxk01'){
						DevExpress.ui.notify('已提交过信息卡，请走变更信息卡流程！！！！', 'info', 3000);
						return;
					}
					if(rowsData.cStatexxk == 'xxk09'){
						DevExpress.ui.notify('已作废！！！！', 'info', 3000);
						return;
					}
					if(rowsData.cStatexxk =='xxk05'){
						DevExpress.ui.notify('属于撤回或驳回的信息卡请走变更申请！！！！', 'info', 3000);
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
					M1S11U_serDel_Judgment();
					if (M1S11U_serDel_mark != 'M1S11U_success') {
					} else {
						var result = DevExpress.ui.dialog.confirm("您确定要提交吗?", "确认提交");
						
						result.done(function (dialogResult) {
							if (dialogResult) {
								cake.Ui.LoadPanel.show()
								addIns3.show();
								$.ajax({
									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11U2'), dataType: 'json',   //返回格式为json   
									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
									type: 'post',   //请求方式 get 或者post , 
									contentType: 'application/json',
									success: function (data) {
										addIns3.hide();
										let select = data.msg
										if (data.errcode == 0) {
											DevExpress.ui.notify(data.msg, 'success', 2000);
											M1S11_serDel();
											//var websocketData = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"M1S11","tbName":"TP_CGCONTRACTMTT","dataId":"AUD"}]']
											//send(websocketData)
										}
										else {
											DevExpress.ui.notify(data.msg, 'warning', 3000);
										}
									},
									error: function () {
										addIns3.hide();
										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
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
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: 'check',
				text: '变更信息卡',
				onClick: function () {
					change = '4'
					let grid = $('#dataGridS1').dxDataGrid('instance');
					let rowsData = grid.getSelectedRowsData()[0]
//					console.log(rowsData.cStatexxk)
					let selectedRowKeys = grid.getSelectedRowKeys()
					if (selectedRowKeys.length < 1) {
						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
						DevExpress.ui.notify('请选择你要变更的数据。', 'info', 2000);
						return;
					}
//					if(rowsData.cStatexxk !='xxk05'){
//						DevExpress.ui.notify('未撤回信息卡，不允许信息卡变更！！！！', 'info', 3000);
//						return;
//					}
//					if(rowsData.cStatexxk =='xxk01'){
//						DevExpress.ui.notify('未提交到信息卡，不允许信息卡变更！！！！', 'info', 2000);
//						return;
//					}
//					if(rowsData.cStatexxk =='xxk03'){
//						DevExpress.ui.notify('信息卡审核通过，不允许信息卡变更！！！！', 'info', 2000);
//						return;
//					}
					if(rowsData.cStatexxk =="xxk06"){
						DevExpress.ui.notify('该合同已经生成正式合同，需正式合同撤回才能进行修改！！！', 'info', 3000);
						addIns.hide();
						return;
					}
					//									if (selectedRowKeys.length > 1) {    
					//										 Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
					//										 DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
					//										return;    
					//									} 
					
					 addIns = $('#addmotai').dxPopup({
         				//模态框增加name    
         				width: 900,
         				height: 250
         			}).dxPopup('instance')
         			addIns.option('title', '采购申请变更');
         			addIns.show();
         			// 调用模态框函数    
         			 S1S21DH();
         			S1S21addIns.option('formData',new Object);
                    

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
				text: '打印拟合同',
				onClick: function () {
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys1 = grid1.getSelectedRowKeys()
					//脚本执行  
					if (selectedRowKeys1.length < 1) {
						DevExpress.ui.notify('请选择要打印的合同号！！！', 'info', 2000);
						return;
					}
					
					msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {}
					};

					let msgdate = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
					if(msgdate.cStatexxk =="xxk05"){
						DevExpress.ui.notify('该合同已被信息卡驳回请做变更！！！', 'info', 3000);
//						addIns.hide();
//						return;
					}
					let cConnum = msgdate.cConnum;
					let cContype = msgdate.cContype;
					let cOutconnum = msgdate.cOutconnum;
					let cSupplier = msgdate.cSupplier;
					let cContclass = addmonigrid3.cContclass;
					console.log(cContclass);
					if(cContclass == "ht03"){
						let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=ContactWX.cpt&cConnum=" + cConnum+"&cContype="+cContype+"&__filename__="+cConnum+cSupplier;
						window.open(url, "_blank");
						return;
					}
					if(cContclass == "ht02"){
						let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=Contact_5.cpt&cConnum=" + cConnum+"&cContype="+cContype+"&__filename__="+cConnum+cSupplier;
						window.open(url, "_blank");
						return;
					}
					if(cContclass == "ht01"){
						let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=GXHT5.cpt&cConnum=" + cConnum+"&cContype="+cContype+"&__filename__="+cConnum +cSupplier;
						window.open(url, "_blank");
						return;
					}
//					if(cContype == null){
//						let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=Contact_4.cpt&cConnum=" + cConnum +"&__filename__="+cConnum +cSupplier;
//						window.open(url, "_blank");
//					}else{
////						if(cContype.indexOf("国内合同") != -1){
//						if(cOutconnum == null){
//							let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=GXHT5.cpt&cConnum=" + cConnum+"&cContype="+cContype+"&__filename__="+cConnum +cSupplier;
//							window.open(url, "_blank");
//						}else{
//							let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=Contact_5.cpt&cConnum=" + cConnum+"&cContype="+cContype+"&__filename__="+cConnum+cSupplier;
//							window.open(url, "_blank");
//						}
//					}
					
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
				text: '生成正式合同',
				onClick: function () {
					change = '4'
					let grid = $('#dataGridS1').dxDataGrid('instance');     
					let rowsData = grid.getSelectedRowsData()[0]     
					let selectedRowKeys = grid.getSelectedRowKeys()     
						if (selectedRowKeys.length < 1) {     
							// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
							DevExpress.ui.notify('请选择一条要已通过审核的数据。', 'info', 2000);     
							return;     
						}    
					let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
//					console.log(dataGrid);
					//签订公司
//					let tcStatexxk = dataGrid.cStatexxk;
//					if(dataGrid.cStatexxk =="xxk05"){
//						DevExpress.ui.notify('该合同已被信息卡驳回请做变更！！！', 'info', 3000);
////						addIns.hide();
//						return;
//					}
					if(dataGrid.cStatexxk =="xxk09"){
						DevExpress.ui.notify('该合同已被信息卡驳回请做变更！！！', 'info', 3000);
//						addIns.hide();
						return;	
					}
//					if(tcStatexxk !='xxk03'&& tcStatexxk !='xxk07'){
//						DevExpress.ui.notify('该合同信息卡未审核，不允许生成正式合同！！！！！', 'info', 2000);
//						return;
//					}
//						if (selectedRowKeys.length > 1) {    
//							 Cake.Ui.Toast.showInfo('一次只能选择一条数据。')    
//							 DevExpress.ui.notify('一次只能选择一条数据。', 'info', 2000);    
//							return;    
//						} 
					
//					addIns = $('#addmotai').dxPopup({
//                        //模态框增加name    
//                        width: 1000,
//                        height: 450
//                    }).dxPopup('instance')
//                    addIns.option('title', '生成正式合同');
//                    addIns.show();
//          			M1S11_SC();
//          			M1S11addIns.getEditor('cDeliverytime').option('value',new Date());
 
          			
					msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowKeys();
					var result = DevExpress.ui.dialog.confirm("您确定要生成正式合同吗?", "确认生成");
					result.done(function (dialogResult) {
						if (dialogResult) {
							cake.Ui.LoadPanel.show()
					addIns3.show();
								$.ajax({
									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11A'),
									dataType: 'json',   //返回格式为json           
									async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
									type: 'post',   //请求方式 get 或者post ,         
									contentType: 'application/json',
									success: function (data) {
										addIns3.hide();
										let select = data.msg
										if (data.errcode == 0) {
											DevExpress.ui.notify(data.msg, 'success', 2000)
										} else {
											DevExpress.ui.notify(data.msg, 'error', 2000)
											return;
										}
										M1S11_serDel();
			//							addIns.hide()
									},
									error: function () {
										addIns3.hide();
										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
										// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
										//e.cancel=true;         
									}
								})
					
						}
						cake.Ui.LoadPanel.close();
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
				text: '删除拟合同',
				onClick: function () {
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys = grid1.getSelectedRowKeys()
					let rowsData = grid1.getSelectedRowsData()
					//脚本执行  
					if (selectedRowKeys.length < 1) {
						DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 2000);
						return;
					}
					let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
//					console.log(dataGrid);
					//签订公司
					let tcStatexxk = dataGrid.cStatexxk;
					if(tcStatexxk =='xxk06'){
						DevExpress.ui.notify('该合同已经生成正式合同，不能进行合同撤回！！！', 'info', 2000);
						return;
					}
					if(tcStatexxk =='xxk03'){
						DevExpress.ui.notify('该合同信息卡审核通过，不能进行合同撤回！！！', 'info', 2000);
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
//					console.log(msg)
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
											DevExpress.ui.notify(data.msg, 'success', 2000);
											S1S21_SSRT()
											M1S11_serDel();
										}
										else {
											DevExpress.ui.notify(data.msg, 'warning', 5000);
										}
									},
									error: function () {
										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
									}
								})
							}
							cake.Ui.LoadPanel.close();
						})

					}
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
//				icon: 'remove',
//				text: '信息卡退单',
//				onClick: function () {
//					change = '5'
//					let grid = $('#dataGridS1').dxDataGrid('instance');
//					let rowsData = grid.getSelectedRowsData()[0]
//					let selectedRowKeys = grid.getSelectedRowKeys()
//					if (selectedRowKeys.length < 1) {
//						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//						DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 2000);
//						return;
//					}
//					if (selectedRowKeys.length > 1) {
//						 Cake.Ui.Toast.showInfo('一次只能选择一条要驳回的数据。')    
//						 DevExpress.ui.notify('一次只能选择一条要驳回的数据。', 'info', 2000);    
//						return;
//					}
////					if(rowsData.cStatexxk !='xxk03'){
////						DevExpress.ui.notify('该合同信息卡未审核通过，请走信息卡变更！！！！！', 'info', 2000);
////						return;
////					}
//					addIns = $('#addmotai2').dxPopup({
//						//模态框增加name    
//						width: 1000,
//						height: 450
////						fullScreen: true,
//					}).dxPopup('instance')
//					addIns.option('title', '退单');
//					addIns.show();
//					// 调用模态框函数    
//					// updatafun()    
//					M1S21_Updatefun()
//					M1S21addIns.option('formData', rowsData)
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
				text: '已处理',
				onClick: function () {
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys = grid1.getSelectedRowKeys()
					let rowsData = grid1.getSelectedRowsData()
					//脚本执行  
					if (selectedRowKeys.length < 1) {
						DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 2000);
						return;
					}
					let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
					msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {
						}
					};
					//前后端统一叫'tscLtrawbin' 
					msg.data.tpCgcontractmtt = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//					console.log(msg)
					M1S11D_serDel_Judgment();
					if (M1S11D_serDel_mark != 'M1S11D_success') {
					} else {
						var result = DevExpress.ui.dialog.confirm("您确定要处理吗?", "确认处理");
						result.done(function (dialogResult) {
							if (dialogResult) {
								cake.Ui.LoadPanel.show()
								//
								$.ajax({
									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/M1S11CL'), dataType: 'json',   //返回格式为json   
									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
									type: 'post',   //请求方式 get 或者post , 
									contentType: 'application/json',
									success: function (data) {
										let select = data.msg
										if (data.errcode == 0) {
											DevExpress.ui.notify(data.msg, 'success', 2000);
											S1S21_SSRT()
											M1S11_serDel();
										}
										else {
											DevExpress.ui.notify(data.msg, 'warning', 2000);
										}
									},
									error: function () {
										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
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
				icon: 'search',
				text: '查看合同',
				onClick: function () {
					change = '6'
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
					addIns2 = $('#addmotai5').dxPopup({
						//模态框增加name    
//												width:1000,    
//												height:450   
						fullScreen: true
					}).dxPopup('instance')
					addIns2.option('title', '合同信息');
					addIns2.show();
					UpdateS_moni();
//					$('#contract_type5').dxForm('instance').getEditor('cContype').option('value', null);
					// 调用模态框函数    
					let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
					//签订公司
					tcCludecom = dataGrid.cCludecom;
//					//合同类型
//					tcContype = dataGrid.cContype;
//					console.log(tcContype)
//					console.log(dataGrid.cSupplier)
					let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                    	tcCludecom = matchedItem.cSubitemdes
//                    	console.log(tcCludecom);
//                        return matchedItem.cSubitemdes;
                    }
                     $('#addForm5').dxForm('instance').option("formData", new Object);
                     $('#clauseForm5').dxForm('instance').option("formData",null);
                     $('#addmoni5').dxDataGrid('instance').option('dataSource', new Object);
					 $('#addForm5').dxForm('instance').getEditor('cOutconnum').option('value', dataGrid.cOutconnum);
					 $('#addForm5').dxForm('instance').getEditor('cConnum').option('value', dataGrid.cConnum);
					 $('#addForm5').dxForm('instance').getEditor('cCludecom').option('value', tcCludecom);
					 $('#addForm5').dxForm('instance').getEditor('cCludetime').option('value', dataGrid.cCludetime);
					 $('#addForm5').dxForm('instance').getEditor('cSupplier').option('value', dataGrid.cSupplier);
					 $('#addForm5').dxForm('instance').getEditor('cSignplace').option('value', dataGrid.cSignplace);
					 //合同物资
					 $('#addmoni5').dxDataGrid('instance').option('dataSource', addmonigrid1);
					 $('#clauseForm5').dxForm('instance').option("formData", addmonigrid3);
					 if ($('#clauseForm5').dxForm('instance').getEditor('cSw31').option('value') === '') {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw31').option('visible', false)
					 } else {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw31').option('visible', true)
					 }
					 if ($('#clauseForm5').dxForm('instance').getEditor('cSw32').option('value') === '') {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw32').option('visible', false)
					 } else {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw32').option('visible', true)
					 }
					 if ($('#clauseForm5').dxForm('instance').getEditor('cSw33').option('value') === '') {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw33').option('visible', false)
					 } else {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw33').option('visible', true)
					 }
					 if ($('#clauseForm5').dxForm('instance').getEditor('cSw34').option('value') === '') {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw34').option('visible', false)
					 } else {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw34').option('visible', true)
					 }
					 if ($('#clauseForm5').dxForm('instance').getEditor('cSw35').option('value') === '') {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw35').option('visible', false)
					 } else {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw35').option('visible', true)
					 }
					 if ($('#clauseForm5').dxForm('instance').getEditor('cSw36').option('value') === '') {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw36').option('visible', false)
					 } else {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw36').option('visible', true)
					 }
					 if ($('#clauseForm5').dxForm('instance').getEditor('cSw37').option('value') === '') {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw37').option('visible', false)
					 } else {
						 $('#clauseForm5').dxForm('instance').getEditor('cSw37').option('visible', true)
					 }
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
//					 $('#deadline4').dxForm('instance').getEditor('cDelivdate').option('value', dataGrid.cDelivdate);
//					 jhdd1
//					 console.log(dataGrid.cDelivplace)
					 //交货地点
//					 $('#deadline4').dxForm('instance').getEditor('cDelivplace').option('value', dataGrid.cDelivplace);
					 //付款方式
//					 $('#pice4').dxForm('instance').getEditor('cPayway').option('value', dataGrid.cPayway);

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
				text: '打印信息卡',
				onClick: function () {
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys1 = grid1.getSelectedRowKeys()
					//脚本执行  
					if (selectedRowKeys1.length < 1) {
						DevExpress.ui.notify('请选择要打印的合同号！！！', 'info', 2000);
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
					let cSw05 = msgdate.cSw05;
					console.log(cSw05)
					if(msgdate.cStatexxk == 'xxk03' || msgdate.cStatexxk == 'xxk06'){
						if(cSw05 == null){
							let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=XXK_05.cpt&cConnum=" + cConnum+"&__filename__="+cConnum+"信息卡";
							window.open(url, "_blank");
						}else{
							let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=XXK_052.cpt&cConnum=" + cConnum+"&__filename__="+cConnum+"信息卡";
							window.open(url, "_blank");
						}
					}else{
						DevExpress.ui.notify('请选择审核通过的合同打印信息卡！！！', 'info', 2000);
						return;
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
				text: '撤回信息卡',
				onClick: function () {
					change = '8'
					let grid1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys1 = grid1.getSelectedRowKeys()
					let rowsData = grid1.getSelectedRowsData()[0]
					//脚本执行  
					if (selectedRowKeys1.length < 1) {
						DevExpress.ui.notify('请选择要撤回信息卡的合同！！！', 'info', 2000);
						return;
					}
					if(rowsData.cStatexxk =='xxk01'){
						DevExpress.ui.notify('未提交信息卡，不允许撤回信息卡！！！！', 'info', 3000);
						return;
					}
					if(rowsData.cStatexxk =='xxk05'){
						DevExpress.ui.notify('不允许重复撤回信息卡！！！！', 'info', 3000);
						return;
					}
					msg.data.tpCgcontractmtt = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//					console.log(msg)
					M1S11D_serDel_Judgment();
					if (M1S11D_serDel_mark != 'M1S11D_success') {
					} else {
						var result = DevExpress.ui.dialog.confirm("您确定要撤回信息卡吗?", "确认撤回");
						result.done(function (dialogResult) {
							if (dialogResult) {
								cake.Ui.LoadPanel.show()
								$.ajax({
									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/M1S11RECALL'), dataType: 'json',   //返回格式为json   
									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
									type: 'post',   //请求方式 get 或者post , 
									contentType: 'application/json',
									success: function (data) {
										let select = data.msg
										if (data.errcode == 0) {
											DevExpress.ui.notify(data.msg, 'success', 2000);
//											S1S21_SSRT()
											M1S11_serDel();
										}
										else {
											DevExpress.ui.notify(data.msg, 'error', 5000);
										}
									},
									error: function () {
										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
									}
								})
							}
							cake.Ui.LoadPanel.close();
						})
					}
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
//				icon: 'save',
//				text: '合同变更协议',
//				onClick: function () {
//					change = '9'
//						let grid = $('#dataGridS1').dxDataGrid('instance');
//						let rowsData = grid.getSelectedRowsData()[0]
//						let selectedRowKeys = grid.getSelectedRowKeys()
//						if (selectedRowKeys.length < 1) {
//							// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//							DevExpress.ui.notify('请选择添加变更协议的合同！！！', 'warning', 2000);
//							return;
//						}
//					/*	if (selectedRowKeys.length > 1) {
//							// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//							// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
//							return;
//						}*/
//						addIns2 = $('#addmotai6').dxPopup({
//							//模态框增加name    
////													width:1000,    
////													height:450   
//							fullScreen: true
//						}).dxPopup('instance')
//						addIns2.option('title', '变更协议');
//						addIns2.show();
//						BianG_mtk();
//						console.log(rowsData.cStatexxk);
////						if( "xxk06" !=rowsData.cStatexxk){
////							DevExpress.ui.notify('该合同没有生成正式合同，不能变更协议！！！', 'warning', 3000);
////							addIns2.hide();
////							return;
////						}
//						//签订公司
//						tcCludecom = rowsData.cCludecom;
////						//合同类型
//						let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
//	                    if (matchedItem == null || matchedItem == undefined) {
//	                        return "";
//	                    } else {
//	                    	tcCludecom = matchedItem.cSubitemdes
////	                    	console.log(tcCludecom);
////	                        return matchedItem.cSubitemdes;
//	                    }
//	                    cConnumalter = rowsData.cConnum+ '-变更协议';
//	                    console.log(cConnumalter)
//						 $('#addForm6').dxForm('instance').getEditor('cConnum').option('value', rowsData.cConnum);
//						 $('#addForm6').dxForm('instance').getEditor('cConnumalter').option('value', cConnumalter);
//						 $('#addForm6').dxForm('instance').getEditor('cCludecom').option('value', tcCludecom);
//						 $('#addForm6').dxForm('instance').getEditor('cCludetime').option('value', rowsData.cCludetime);
//						 $('#addForm6').dxForm('instance').getEditor('cSupplier').option('value', rowsData.cSupplier);
//						 $('#addForm6').dxForm('instance').getEditor('cSignplace').option('value', rowsData.cSignplace);
//						 $('#addForm6').dxForm('instance').getEditor('cConmoney').option('value', rowsData.cConmoney);
//						 //合同物资
//						 $('#addmoni6').dxDataGrid('instance').option('dataSource', addmonigrid2);
////						 //交货期限
////						 $('#deadline4').dxForm('instance').getEditor('cDelivdate').option('value', dataGrid.cDelivdate);
//////						 jhdd1
//////						 console.log(dataGrid.cDelivplace)
////						 //交货地点
////						 $('#deadline4').dxForm('instance').getEditor('cDelivplace').option('value', dataGrid.cDelivplace);
////						 //付款方式
////						 $('#pice4').dxForm('instance').getEditor('cPayway').option('value', dataGrid.cPayway);
//					
////					msg.data.tpCgcontractmtt = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//////					console.log(msg)
////					M1S11D_serDel_Judgment();
////					if (M1S11D_serDel_mark != 'M1S11D_success') {
////					} else {
////						var result = DevExpress.ui.dialog.confirm("您确定要撤回信息卡吗?", "确认撤回");
////						result.done(function (dialogResult) {
////							if (dialogResult) {
////								cake.Ui.LoadPanel.show()
////								//../../tdhc_cgsys/CG_CONMTT/M1S11RECALL
////								$.ajax({
////									url: Cake.Piper.getAuthUrl(''), dataType: 'json',   //返回格式为json   
////									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
////									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
////									type: 'post',   //请求方式 get 或者post , 
////									contentType: 'application/json',
////									success: function (data) {
////										let select = data.msg
////										if (data.errcode == 0) {
////											DevExpress.ui.notify(data.msg, 'success', 2000);
//////											S1S21_SSRT()
////											M1S11_serDel();
////										}
////										else {
////											DevExpress.ui.notify(data.msg, 'warning', 5000);
////										}
////									},
////									error: function () {
////										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
////									}
////								})
////							}
////							cake.Ui.LoadPanel.close();
////						})
////					}
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
//				icon: 'print',
//				text: '打印合同变更协议',
//				onClick: function () {
//					let grid1 = $('#dataGridS1').dxDataGrid('instance');
//					let selectedRowKeys1 = grid1.getSelectedRowKeys()
//					//脚本执行  
//					if (selectedRowKeys1.length < 1) {
//						DevExpress.ui.notify('请选择要打印的合同号！！！', 'info', 2000);
//						return;
//					}
//					
//					msg = {
//						ver: '53cc62f6122a436083ec083eed1dc03d',
//						session: '42f5c0d7178148938f4fda29460b815a',
//						tag: {},
//						data: {}
//					};
//
//					let msgdate = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
//					let cConnum = msgdate.cConnum;
//					console.log("待创建！！！！！！！！！！")
////					if(msgdate.cStatexxk == 'xxk03' || msgdate.cStatexxk == 'xxk06'){
////						let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=XXK_05.cpt&cConnum=" + cConnum;
////						window.open(url, "_blank");
////					}else{
////						DevExpress.ui.notify('请选择审核通过的合同打印信息卡！！！', 'info', 2000);
////						return;
////					}
//					
//				}
//			}
//		},
	];
//$('#operateFormS1S2').dxForm({
//        width: '100%',
//        colCount: 200,
//
//        items: [{
//                name: 'M1S11Q',
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: "search",
//                    text: '查询',
//                    onClick: function() {
//                        S1S21_serDel();
//                    }
//                }
//            },
//            {
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'plus',
//                    text: '添加',
//                    onClick: function() {	change='1'; 
//					let grids1 = $('#dataGridS1').dxDataGrid('instance');
//                    let rowsDatas1 = grids1.getSelectedRowsData()[0];
//                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//                    if (selectedRowKeyss1.length < 1) {
//                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//                        return;
//                    }
//                    if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
//                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                        return;
//                    }
//							$('#addmotai').show()
//						addIns = $('#addmotai').dxPopup({
//								width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
//								height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
//							}).dxPopup('instance')
//						addIns.option('title', '添加物资')
//						addIns.show();
//						S1S21_addfun();
//						S1S21addIns.option('formData',new Object())
//						S1S21addIns.getEditor('cConnum').option('value',rowsDatas1.cConnum);
//						}
//                }
//            },
//            //		{
//            //			itemType: 'button',
//            //			buttonOptions: {
//            //				height: "auto",
//            //				width: "auto",
//            //				icon: 'save',
//            //				text: '修改',
//            //				onClick: function () {
//            //					change = '2'
//            //						let grids1 = $('#dataGridS1').dxDataGrid('instance');
//            //                    let rowsDatas1 = grids1.getSelectedRowsData();
//            //                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//            //                    if (selectedRowKeyss1.length < 1) {
//            //                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//            //                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//            //                        return;
//            //                    }
//            //                    if (selectedRowKeyss1.length > 1) {
//            //                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//            //                        DevExpress.ui.notify('一次只能选择一条合同。', 'info', 2000);
//            //                        return;
//            //                    }
//            //                    let grida = $('#dataGridS2').dxDataGrid('instance');
//            //                    let rowsDataa = grida.getSelectedRowsData();
//            //                    let selectedRowKeysa = grida.getSelectedRowKeys()
//            //                    if (selectedRowKeysa.length < 1) {
//            //                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//            //                        DevExpress.ui.notify('至少选择一条要修改的物资。', 'info', 2000);
//            //                        return;
//            //                    }
//            ////					addIns = $('#addmotai').dxPopup({
//            ////						//模态框增加name    
//            ////						width: 1000,
//            ////						height: 450
//            ////					}).dxPopup('instance')
//            ////					addIns.option('title', 'CG_MNHT');
//            ////					addIns.show();
//            //					// 调用模态框函数    
//            //					// updatafun()    
//            ////					S1S21_Updatefun()
//            ////					S1S21addIns.option('formData', rowsData)
//            //                	msg = {
//            //                            ver: '53cc62f6122a436083ec083eed1dc03d',
//            //                            session: '42f5c0d7178148938f4fda29460b815a',
//            //                            tag: {},
//            //                            data: {},
//            //                    };
//            //                	let grid1 = $('#dataGridS2').dxDataGrid('instance');
//            //                    let rowsData = grid1.getSelectedRowsData();
//            //                    msg.data.cgMnhtS1s2 =  grid1.getSelectedRowsData();
//            //                	
//            //                	if (S1S21U_serDel_mark != 'S1S21U_success') {
//            //					} else {
//            //						
//            //						var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
//            //                		result.done(function (dialogResult) {
//            //                			if (dialogResult) {
//            //                				cake.Ui.LoadPanel.show()
//            //						
//            //						$.ajax({
//            //							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21U'),
//            //							dataType: 'json',   //返回格式为json           
//            //							async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
//            //							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//            //							type: 'post',   //请求方式 get 或者post ,         
//            //							contentType: 'application/json',
//            //							success: function (data) {
//            //								let select = data.msg
//            //								if (data.errcode == 0) {
//            //									DevExpress.ui.notify(data.msg, 'success', 2000)
//            //									S1S21_SSRT()
//            //								} else {
//            //									DevExpress.ui.notify(data.msg, 'error',2000)
//            //									return;
//            //								}
//            //	
//            //								addIns.hide()
//            //	
//            //							},
//            //							error: function () {
//            //								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
//            //								// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
//            //								//e.cancel=true;         
//            //							}
//            //						})
//            //            			}
//            //                        cake.Ui.LoadPanel.close()
//            //                    })
//            //				}
//            //					
//            //					
//            //				}
//            //			}
//            //		}, 
//            {
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'remove',
//                    text: '撤销物资',
//                    onClick: function() {
//    					let grids1 = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsDatas1 = grids1.getSelectedRowsData()[0];
//                        
//    					let grid1 = $('#dataGridS2').dxDataGrid('instance');
//    					let selectedRowKeys = grid1.getSelectedRowKeys()
//    					let rowsData = grid1.getSelectedRowsData()
//    					//脚本执行  
//    					if (selectedRowKeys.length < 1) {
//    						DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 2000);
//    						return;
//    					}
//    					if(rowsData.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
//                        	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                            return;
//                        }
//    					msg = {
//    						ver: '53cc62f6122a436083ec083eed1dc03d',
//    						session: '42f5c0d7178148938f4fda29460b815a',
//    						tag: {},
//    						data: {
//    						}
//    					};
//    					//前后端统一叫'tscLtrawbin' 
//
//    					msg.data.cgMnhtS1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
//    					msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
////    					console.log(msg)
//    					S1S21D_serDel_Judgment();
//    					if (S1S21D_serDel_mark != 'S1S21D_success') {
//    					} else {
//    						$.ajax({
//    							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21CX'),
//    							dataType: 'json',   //返回格式为json   
//    							async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
//    							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//    							type: 'post',   //请求方式 get 或者post , 
//    							contentType: 'application/json',
//    							success: function (data) {
//    								let select = data.msg
//    								if (data.errcode == 0) {
//    									S1S21_SSRT()
//    									M1S11_serDel()
//    									DevExpress.ui.notify(data.msg, 'success', 2000);
//
//    								}else if(data.errcode == 30){
//    									S1S21_SSRT()
//    									M1S11_serDel()
//    									DevExpress.ui.notify(data.msg, 'warning', 5000);
//    								}
//    								else {
//    									DevExpress.ui.notify(data.msg, 'error', 2000);
//    									return;
//    								}
//    							},
//    							error: function () {
//    								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
//    							}
//    						})
//    					}
//    					}
//                }
//            },
//            {
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'save',
//                    text: '合并',
//                    onClick: function() {change='1'; 
//					let grids = $('#dataGridS1').dxDataGrid('instance');
//                    let rowsDatas = grids.getSelectedRowsData()[0];
//                    let selectedRowKeyss = grids.getSelectedRowKeys()
//                    if (selectedRowKeyss.length < 1) {
//                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//                        return;
//                    }
//                    if(rowsDatas.cStatexxk == 'xxk06' || rowsDatas.cStatexxk == 'xxk03'){
//                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                        return;
//                    }
//                    let grids1 = $('#dataGridS2').dxDataGrid('instance');
//                    let rowsDatas1 = grids1.getSelectedRowsData()[0];
//                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//                    if (selectedRowKeyss1.length < 1) {
//                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                        DevExpress.ui.notify('请选中要合并的物资。', 'info', 2000);
//                        return;
//                    }
//							$('#addmotai').show()
//						addIns = $('#addmotai').dxPopup({
//								width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
//								height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
//							}).dxPopup('instance')
//						addIns.option('title', '添加物资')
//						addIns.show();
//						S1S21_hb();
//						S1S21addIns.option('formData',new Object())}
//                }
//            },
//            {
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'save',
//                    text: '拆分',
//                    onClick: function() {change='1'; 
//					let grids = $('#dataGridS1').dxDataGrid('instance');
//					let rowsDatas = grids.getSelectedRowsData()[0];
//					let selectedRowKeyss = grids.getSelectedRowKeys()
//					if (selectedRowKeyss.length < 1) {
//						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//						DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//						return;
//					}
//					if(rowsDatas.cStatexxk == 'xxk06' || rowsDatas.cStatexxk == 'xxk03'){
//                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                        return;
//                    }
//					let grids1 = $('#dataGridS2').dxDataGrid('instance');
//					let rowsDatas1 = grids1.getSelectedRowsData();
//					let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//					if (selectedRowKeyss1.length < 1) {
//						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//						DevExpress.ui.notify('请选中要拆分的物资。', 'info', 2000);
//						return;
//					}
//					if (selectedRowKeyss1.length > 1) {
//						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//						DevExpress.ui.notify('请选中一条要拆分的物资。', 'info', 2000);
//						return;
//					}
//					$('#addmotai7').show()
//					addIns = $('#addmotai7').dxPopup({
////						width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
////						height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
//						fullScreen: true
//					}).dxPopup('instance')
//					addIns.option('title', '拆分物资')
//					addIns.show();
//					S1S21_CF();
//					console.log(rowsDatas1)
//					$("#mAke").dxDataGrid('instance').option('dataSource', rowsDatas1);
//					$('#mAke').dxDataGrid('instance').refresh();
////					S1S21addIns.option('formData',new Object())
////					S1S21addIns.getEditor('cGoodsname').option('value',rowsDatas1.cGoodsname);
////					S1S21addIns.getEditor('cCuspec').option('value',rowsDatas1.cCuspec);
////					S1S21addIns.getEditor('cUnit').option('value',rowsDatas1.cUnit);
////					S1S21addIns.getEditor('cSw08').option('value',rowsDatas1.cSw08);
////					S1S21addIns.getEditor('cSpec').option('value',rowsDatas1.cSpec);
////					S1S21addIns.getEditor('cUnitspec').option('value',rowsDatas1.cUnitspec);
////					S1S21addIns.getEditor('cPrice').option('value',rowsDatas1.cPrice);
////					S1S21addIns.getEditor('cRemark').option('value',rowsDatas1.cRemark);
//					}
//                }
//            },
//            {
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: "save",
//                    name: 'M1S11HBDR',
//                    text: '合并/拆分导入',
//                    onClick: function() {let grids1 = $('#dataGridS1').dxDataGrid('instance');
//                    let rowsDatas1 = grids1.getSelectedRowsData();
//                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//                    if (selectedRowKeyss1.length < 1) {
//                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//                        return;
//                    }
//                    if (selectedRowKeyss1.length > 1) {
//                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                        DevExpress.ui.notify('一次只能选择一条合同。', 'info', 2000);
//                        return;
//                    }
//                    if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
//                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                        return;
//                    }
//					importPopup.show();}
//                }
//            },
//            {
//
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: 'save',
//                    text: '撤销合并/拆分',
//                    onClick: function() {	let grids1 = $('#dataGridS1').dxDataGrid('instance');
//        			let rowsDatas1 = grids1.getSelectedRowsData();
//        			let selectedRowKeyss1 = grids1.getSelectedRowKeys();
//        			if (selectedRowKeyss1.length < 1) {
//        				// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//        				DevExpress.ui.notify('请选择要撤销导入的合同。', 'info', 3000);
//        				return;
//        			}
//        			if (selectedRowKeyss1.length > 1) {
//        				// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//        				DevExpress.ui.notify('一次只能选择一条要撤销导入的合同。', 'info', 3000);
//        				return;
//        			}
//        			if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
//                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                        return;
//                    }
//        			let grid1 = $('#dataGridS2').dxDataGrid('instance');
//        			let selectedRowKeys = grid1.getSelectedRowKeys()
//        			//脚本执行  
//        			if (selectedRowKeys.length < 1) {
//        				DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 3000);
//        				return;
//        			}
//        			msg = {
//        					ver: '53cc62f6122a436083ec083eed1dc03d',
//        					session: '42f5c0d7178148938f4fda29460b815a',
//        					tag: {},
//        					data: {}
//        			};
//        			msg.data.tsttlist = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();        			
//        			var result = DevExpress.ui.dialog.confirm("您确定要撤销导入吗?", "撤销确认");
//        			result.done(function (dialogResult) {
//        				if (dialogResult) {
//        					cake.Ui.LoadPanel.show()
//        					
//        					$.ajax({
//        						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/M1S11CXDR'),
//        						dataType: 'json', //返回格式为json   
//        						async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//        						data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//        						type: 'post', //请求方式 get 或者post , 
//        						contentType: 'application/json',
//        						success: function(data) {
//        							let select = data.msg
//        							if (data.errcode == 0) {
//        								S1S21_SSRT();
//        								DevExpress.ui.notify(select, 'success', 3000);
//        							} else {
//        								DevExpress.ui.notify(select, 'warning', 3000);
//        							}
//        						},
//        						error: function() {
//        							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//        						}
//        					})
//        					
//        				}
//        				cake.Ui.LoadPanel.close()
//        			}) }
//                }
//            },
//            {
//            	itemType: 'button',
//                buttonOptions:  {
//            		height: "auto",
//            		width: "auto",
//            		icon: "save",
//            		name: 'M1S11DR',
//            		text: '物资导出',
//            		onClick: function () {
//            			let grids = $('#dataGridS2').dxDataGrid('instance');
//            			let rowsDatas = grids.getSelectedRowsData();
//            			let selectedRowKeyss = grids.getSelectedRowKeys()
//            			if (selectedRowKeyss.length < 1) {
//            				// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//            				DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//            				return;
//            			}
//            			addEditPopup.show();  
//            			let select;
//            			select = rowsDatas	
//            			console.log(select)
//            			addGang.splice(0, addGang.length);
//            			select.forEach(item => addGang.push(item));
//            			$('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
//            			$('#addGangGrid').dxDataGrid('instance').deselectAll()
//            			$('#addGangGrid').dxDataGrid('instance').refresh()
//            		}
//            	}
//            },
//            {
//            	itemType: 'button',
//                buttonOptions: {
//    				height: "auto",
//    				width: "auto",
//    				icon: "save",
//    				name: 'M1S11BGDR',
//    				text: '报关导入',
//    				onClick: function () {
//    					let grids1 = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsDatas1 = grids1.getSelectedRowsData()[0];
//                        let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//                        if (selectedRowKeyss1.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//                            return;
//                        }
//                        if (selectedRowKeyss1.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条合同。', 'info', 2000);
//                            return;
//                        }
//                        if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
//                        	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                            return;
//                        }
//    					importPopup2.show();
//    				}
//    			}
//    		},
//
//        ]
//    })

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
//				{
//		location: "before",
//		locateInMenu: 'auto',
//		widget: "dxButton",
//		options: {
//				height: "auto",
//				width: "auto",
//				icon: 'plus',
//				text: '添加',
//				onClick: function(){
//					change='1'; 
//					let grids1 = $('#dataGridS1').dxDataGrid('instance');
//                    let rowsDatas1 = grids1.getSelectedRowsData()[0];
//                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//                    if (selectedRowKeyss1.length < 1) {
//                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//                        return;
//                    }
//                    if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
//                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
//                        return;
//                    }
//							$('#addmotai').show()
//						addIns = $('#addmotai').dxPopup({
//								width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
//								height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
//							}).dxPopup('instance')
//						addIns.option('title', '添加物资')
//						addIns.show();
//						S1S21_addfun();
//						S1S21addIns.option('formData',new Object())
//						S1S21addIns.getEditor('cConnum').option('value',rowsDatas1.cConnum);
//						}
//					}
//				},
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
//						let grids1 = $('#dataGridS1').dxDataGrid('instance');
//                    let rowsDatas1 = grids1.getSelectedRowsData();
//                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
//                    if (selectedRowKeyss1.length < 1) {
//                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
//                        return;
//                    }
//                    if (selectedRowKeyss1.length > 1) {
//                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                        DevExpress.ui.notify('一次只能选择一条合同。', 'info', 2000);
//                        return;
//                    }
//                    let grida = $('#dataGridS2').dxDataGrid('instance');
//                    let rowsDataa = grida.getSelectedRowsData();
//                    let selectedRowKeysa = grida.getSelectedRowKeys()
//                    if (selectedRowKeysa.length < 1) {
//                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                        DevExpress.ui.notify('至少选择一条要修改的物资。', 'info', 2000);
//                        return;
//                    }
////					addIns = $('#addmotai').dxPopup({
////						//模态框增加name    
////						width: 1000,
////						height: 450
////					}).dxPopup('instance')
////					addIns.option('title', 'CG_MNHT');
////					addIns.show();
//					// 调用模态框函数    
//					// updatafun()    
////					S1S21_Updatefun()
////					S1S21addIns.option('formData', rowsData)
//                	msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {},
//                    };
//                	let grid1 = $('#dataGridS2').dxDataGrid('instance');
//                    let rowsData = grid1.getSelectedRowsData();
//                    msg.data.cgMnhtS1s2 =  grid1.getSelectedRowsData();
//                	
//                	if (S1S21U_serDel_mark != 'S1S21U_success') {
//					} else {
//						
//						var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
//                		result.done(function (dialogResult) {
//                			if (dialogResult) {
//                				cake.Ui.LoadPanel.show()
//						
//						$.ajax({
//							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21U'),
//							dataType: 'json',   //返回格式为json           
//							async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
//							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//							type: 'post',   //请求方式 get 或者post ,         
//							contentType: 'application/json',
//							success: function (data) {
//								let select = data.msg
//								if (data.errcode == 0) {
//									DevExpress.ui.notify(data.msg, 'success', 2000)
//									S1S21_SSRT()
//								} else {
//									DevExpress.ui.notify(data.msg, 'error',2000)
//									return;
//								}
//	
//								addIns.hide()
//	
//							},
//							error: function () {
//								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
//								// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
//								//e.cancel=true;         
//							}
//						})
//            			}
//                        cake.Ui.LoadPanel.close()
//                    })
//				}
//					
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
				text: '撤销物资',
				onClick: function () {
					let grids1 = $('#dataGridS1').dxDataGrid('instance');
					let selectedRowKeys1 = grids1.getSelectedRowKeys()
                    let rowsDatas1 = grids1.getSelectedRowsData()[0];
					
					let grid1 = $('#dataGridS2').dxDataGrid('instance');
					let selectedRowKeys = grid1.getSelectedRowKeys()
					let rowsData = grid1.getSelectedRowsData()
					
					if (selectedRowKeys1.length < 1) {
						DevExpress.ui.notify('请选择对应的合同！！！', 'info', 2000);
						return;
					}
					//脚本执行  
					if (selectedRowKeys.length < 1) {
						DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 2000);
						return;
					}
//					if(rowsDatas1.cStatexxk != 'xxk05'){
//                    	DevExpress.ui.notify('信息卡未撤回，无法撤回物资！！！！', 'info', 2000);
//                        return;
//                    }
					if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法撤回物资。', 'info', 2000);
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
					msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
//					console.log(msg)
					S1S21D_serDel_Judgment();
					if (S1S21D_serDel_mark != 'S1S21D_success') {
					} else {
					var result = DevExpress.ui.dialog.confirm("您确定要撤销物资吗?", "确认撤销");
        			result.done(function (dialogResult) {
        				if (dialogResult) {
        					cake.Ui.LoadPanel.show()	
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
									M1S11_serDel()
									DevExpress.ui.notify(data.msg, 'success', 2000);

								}else if(data.errcode == 30){
									S1S21_SSRT()
									M1S11_serDel()
									DevExpress.ui.notify(data.msg, 'warning', 5000);
								}
								else {
									DevExpress.ui.notify(data.msg, 'error', 2000);
									return;
								}
							},
							error: function () {
								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
							}
						})
						
        				}
        				cake.Ui.LoadPanel.close()
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
					icon: 'save',
					text: '合并',
					onClick: function(){
						change='1'; 
						let grids = $('#dataGridS1').dxDataGrid('instance');
	                    let rowsDatas = grids.getSelectedRowsData()[0];
	                    let selectedRowKeyss = grids.getSelectedRowKeys()
	                    if (selectedRowKeyss.length < 1) {
	                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
	                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
	                        return;
	                    }
	                    if(rowsDatas.cStatexxk == 'xxk06' || rowsDatas.cStatexxk == 'xxk03'){
	                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法合并。', 'info', 2000);
	                        return;
	                    }
	                    if(rowsDatas.cStatexxk == 'xxk09'){
	                    	DevExpress.ui.notify('该合同已作废。', 'info', 2000);
	                        return;
	                    }
	                    let grids1 = $('#dataGridS2').dxDataGrid('instance');
	                    let rowsDatas1 = grids1.getSelectedRowsData()[0];
	                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
	                    if (selectedRowKeyss1.length < 1) {
	                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
	                        DevExpress.ui.notify('请选中要合并的物资。', 'info', 2000);
	                        return;
	                    }
								$('#addmotai').show()
							addIns = $('#addmotai').dxPopup({
									width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
									height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
								}).dxPopup('instance')
							addIns.option('title', '添加物资')
							addIns.show();
							S1S21_hb();
							S1S21addIns.option('formData',new Object())
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
							text: '拆分',
							onClick: function(){
								change='1'; 
								let grids = $('#dataGridS1').dxDataGrid('instance');
								let rowsDatas = grids.getSelectedRowsData()[0];
								let selectedRowKeyss = grids.getSelectedRowKeys()
								if (selectedRowKeyss.length < 1) {
									// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
									DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
									return;
								}
								if(rowsDatas.cStatexxk == 'xxk06' || rowsDatas.cStatexxk == 'xxk03'){
			                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法拆分。', 'info', 2000);
			                        return;
			                    }
								if(rowsDatas.cStatexxk == 'xxk09'){
			                    	DevExpress.ui.notify('该合同已作废。', 'info', 2000);
			                        return;
			                    }
								let grids1 = $('#dataGridS2').dxDataGrid('instance');
								let rowsDatas1 = grids1.getSelectedRowsData();
								let selectedRowKeyss1 = grids1.getSelectedRowKeys()
								if (selectedRowKeyss1.length < 1) {
									// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
									DevExpress.ui.notify('请选中要拆分的物资。', 'info', 2000);
									return;
								}
								if (selectedRowKeyss1.length > 1) {
									// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
									DevExpress.ui.notify('请选中一条要拆分的物资。', 'info', 2000);
									return;
								}
								$('#addmotai7').show()
								addIns = $('#addmotai7').dxPopup({
									width: function(){
										 	return innerWidth -50
										 },                  //为了规范限制模态框大小//用脚本标识模态框的标题
									height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
//									fullScreen: true
								}).dxPopup('instance')
								addIns.option('title', '拆分物资')
								addIns.show();
								S1S21_CF();
//								console.log(rowsDatas1)
								$("#mAke").dxDataGrid('instance').option('dataSource', rowsDatas1);
								$('#mAke').dxDataGrid('instance').refresh();
//								S1S21addIns.option('formData',new Object())
//								S1S21addIns.getEditor('cGoodsname').option('value',rowsDatas1.cGoodsname);
//								S1S21addIns.getEditor('cCuspec').option('value',rowsDatas1.cCuspec);
//								S1S21addIns.getEditor('cUnit').option('value',rowsDatas1.cUnit);
//								S1S21addIns.getEditor('cSw08').option('value',rowsDatas1.cSw08);
//								S1S21addIns.getEditor('cSpec').option('value',rowsDatas1.cSpec);
//								S1S21addIns.getEditor('cUnitspec').option('value',rowsDatas1.cUnitspec);
//								S1S21addIns.getEditor('cPrice').option('value',rowsDatas1.cPrice);
//								S1S21addIns.getEditor('cRemark').option('value',rowsDatas1.cRemark);
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
				icon: "save",
				name: 'M1S11HBDR',
				text: '合并/拆分导入',
				onClick: function () {
					let grids1 = $('#dataGridS1').dxDataGrid('instance');
                    let rowsDatas1 = grids1.getSelectedRowsData();
                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
                    if (selectedRowKeyss1.length < 1) {
                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
                        return;
                    }
                    if (selectedRowKeyss1.length > 1) {
                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        DevExpress.ui.notify('一次只能选择一条合同。', 'info', 2000);
                        return;
                    }
                    if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
                        return;
                    }
                    if(rowsDatas1.cStatexxk == 'xxk09'){
                    	DevExpress.ui.notify('该合同已作废。', 'info', 2000);
                        return;
                    }
					importPopup.show();
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
				text: '撤销合并/拆分',
        		onClick: function() {
        			let grids1 = $('#dataGridS1').dxDataGrid('instance');
        			let rowsDatas1 = grids1.getSelectedRowsData();
        			let selectedRowKeyss1 = grids1.getSelectedRowKeys();
        			if (selectedRowKeyss1.length < 1) {
        				// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
        				DevExpress.ui.notify('请选择要撤销导入的合同。', 'info', 3000);
        				return;
        			}
        			if (selectedRowKeyss1.length > 1) {
        				// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
        				DevExpress.ui.notify('一次只能选择一条要撤销导入的合同。', 'info', 3000);
        				return;
        			}
        			if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
                        return;
                    }
        			if(rowsDatas1.cStatexxk == 'xxk09'){
                    	DevExpress.ui.notify('该合同已作废。', 'info', 2000);
                        return;
                    }
        			let grid1 = $('#dataGridS2').dxDataGrid('instance');
        			let selectedRowKeys = grid1.getSelectedRowKeys()
        			//脚本执行  
        			if (selectedRowKeys.length < 1) {
        				DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 3000);
        				return;
        			}
        			msg = {
        					ver: '53cc62f6122a436083ec083eed1dc03d',
        					session: '42f5c0d7178148938f4fda29460b815a',
        					tag: {},
        					data: {}
        			};
        			msg.data.tsttlist = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();        			
        			var result = DevExpress.ui.dialog.confirm("您确定要撤销导入吗?", "撤销确认");
        			result.done(function (dialogResult) {
        				if (dialogResult) {
        					cake.Ui.LoadPanel.show()
        					
        					$.ajax({
        						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/M1S11CXDR'),
        						dataType: 'json', //返回格式为json   
        						async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
        						data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
        						type: 'post', //请求方式 get 或者post , 
        						contentType: 'application/json',
        						success: function(data) {
        							let select = data.msg
        							if (data.errcode == 0) {
        								S1S21_SSRT();
        								M1S11_serDel();
        								DevExpress.ui.notify(select, 'success', 3000);
        							} else {
        								DevExpress.ui.notify(select, 'warning', 3000);
        							}
        						},
        						error: function() {
        							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
        						}
        					})
        					
        				}
        				cake.Ui.LoadPanel.close()
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
        		icon: "save",
        		name: 'M1S11DR',
        		text: '物资导出',
        		onClick: function () {
        			let grids = $('#dataGridS2').dxDataGrid('instance');
        			let rowsDatas = grids.getSelectedRowsData();
        			let selectedRowKeyss = grids.getSelectedRowKeys()
        			if (selectedRowKeyss.length < 1) {
        				// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
        				DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
        				return;
        			}
        			addEditPopup.show();  
        			let select;
        			select = rowsDatas	
//        			console.log(select)
        			addGang.splice(0, addGang.length);
        			select.forEach(item => addGang.push(item));
        			$('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
        			$('#addGangGrid').dxDataGrid('instance').deselectAll()
        			$('#addGangGrid').dxDataGrid('instance').refresh()
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
				icon: "save",
				name: 'M1S11BGDR',
				text: '报关导入',
				onClick: function () {
					let grids1 = $('#dataGridS1').dxDataGrid('instance');
                    let rowsDatas1 = grids1.getSelectedRowsData()[0];
                    let selectedRowKeyss1 = grids1.getSelectedRowKeys()
                    if (selectedRowKeyss1.length < 1) {
                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                        DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 2000);
                        return;
                    }
                    if (selectedRowKeyss1.length > 1) {
                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        DevExpress.ui.notify('一次只能选择一条合同。', 'info', 2000);
                        return;
                    }
                    if(rowsDatas1.cStatexxk == 'xxk06' || rowsDatas1.cStatexxk == 'xxk03'){
                    	DevExpress.ui.notify('信息卡审核通过或已生成正式合同，无法添加。', 'info', 2000);
                        return;
                    }
                    if(rowsDatas1.cStatexxk == 'xxk09'){
                    	DevExpress.ui.notify('该合同已作废。', 'info', 2000);
                        return;
                    }
					importPopup2.show();
				}
			}
		},
	];

	
	$('#operateFormS1S4').dxForm({
		width: '100%',
        colCount: 16,
        items: [
          	{
                name: 'S1S41A',
                itemType: 'button',
                buttonOptions: {
                    icon: 'plus',
                    text: '上传附件',
                    onClick: function() {
//                    	document.getElementById('uplodFile').files[0] = null;
                    	upload =$('#upload-content').dxPopup({
                        	'visible': true,  //设置属性不可见
                        	height:"300",  //设置高度
                        	width: "650",  //设置宽度
                        }).dxPopup('instance'); 
                    	
                    	let grids1 = $('#dataGridS1').dxDataGrid('instance');
            			let msgdate = grids1.getSelectedRowsData()[0];
            			let selectedRowKeyss1 = grids1.getSelectedRowKeys();
            			if (selectedRowKeyss1.length < 1) {
            				// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
            				DevExpress.ui.notify('请选择的合同。', 'info', 3000);
            				upload.hide();
            				return;
            			}
    					var  cConnum = msgdate.cConnum;
    					if(cConnum==null || cConnum==''){
    						DevExpress.ui.notify('请选择相应的合同。', 'info', 3000);
            				return;
    					}
//    					document.getElementById("c_Connum").vlaue = null;
    					document.getElementById("c_Connum").vlaue = cConnum;
                    }
                }
            },
        	{
                name: 'S1S41B',
                itemType: 'button',
                buttonOptions: {
                    icon: 'check',
                    text: '下载附件',
                    onClick: function() {
//                        change = '1';
                        let grid = $('#dataGridS4').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0];
                        let selectedRowKeys = grid.getSelectedRowKeys();
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择要下载的附件', 'info', 3000);
                            return;
                        }
                        
                        var filename = rowsData.cFilename;
//                        console.log(filename);
//                        $.ajax({
//                			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/fileUpload/download'),
////                			dataType: 'json',   //返回格式为json           
//                			async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
//                			data: filename,    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                			type: 'post',   //请求方式 get 或者post ,         
//                			cache: false, 
//                			contentType: false, //不设置内容类型
//                			processData: false, //不处理数据
//                			success: function (data) {
//                				
//                			},
//                			error: function () {
//                				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
//                				//e.cancel=true;         
//                			}
//                		})
                        location.href = "../../tdhc_cgsys/fileUpload/download?filename=" + filename;
                        //../../tdhc_cgsys/fileUpload/download
                    }
                }
            },
        	{
                name: 'S1S41B',
                itemType: 'button',
                buttonOptions: {
                    icon: 'remove',
                    text: '删除',
                    onClick: function() {
//                        change = '1';
                        let grid = $('#dataGridS4').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0];
                        let selectedRowKeys = grid.getSelectedRowKeys();
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择要删除的附件信息', 'info', 3000);
                            return;
                        }
                        msg = {
            					ver: '53cc62f6122a436083ec083eed1dc03d',
            					session: '42f5c0d7178148938f4fda29460b815a',
            					tag: {},
            					data: {
            						filename:null,
            						cConnum:null
            					}
            			};
            			msg.data.filename = rowsData.cFilename;
            			msg.data.cConnum = rowsData.cConnum;
//            			console.log(JSON.stringify(msg));
            			var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "确认删除");
            			result.done(function (dialogResult) {
            				if (dialogResult) {
            					cake.Ui.LoadPanel.show()
            					$.ajax({
            						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/fileUpload/deleateFile'),
            						dataType: 'json', //返回格式为json   
            						async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
            						data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
            						type: 'post', //请求方式 get 或者post , 
            						contentType: 'application/json',
            						success: function(data) {
            							let select = data.msg
            							if (data.errcode == 0) {
            								S1S23_SSRT();
//            								M1S11_serDel();
            								DevExpress.ui.notify(select, 'success', 3000);
            							} else {
            								DevExpress.ui.notify(select, 'warning', 3000);
            							}
            						},
            						error: function() {
            							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            						}
            					})
            					
            				}
            				cake.Ui.LoadPanel.close()
            			}) 
                    }
                }
            },
        ]
	});
	////////////////////////////////////
	//////表格属性生成/////////////////)
	////////////////////////////////////
	var dataGridS1columns = [

		{
			dataField: 'cConnum',
			caption: '合同号',
//			width: 120,
//			alignment: 'center'
		},
		{
			dataField: 'cOutconnum',
			caption: '外贸合同号',
			width: 120,
//			alignment: 'center'
		},
		
		{
			dataField: 'cStatexxk',
			caption: 'HS审核状态',
			width: 120,
//			alignment: 'center',
			calculateDisplayValue: function (rowData) {
				let matchedItem = hsState.find(item => item.cSubitemid == rowData.cStatexxk);
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
			width: 100,
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
			dataField: 'cSupplier',
			caption: '供应商',
			alignment: 'center',
			width: 120,
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
			width: 100,
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
				let matchedItem = jhdd1.find(item => item.cSubitemid == rowData.cDelivplace);
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
			dataField: 'cSw14',
			caption: '合同标识',
			width: 60,
			alignment: 'center',
			calculateDisplayValue: function (rowData) {
				let matchedItem = trouble.find(item => item.cSubitemid == rowData.cSw14);
				if (matchedItem == null || matchedItem == undefined) {
					return "";
				} else {
					return matchedItem.cSubitemdes;
				}
			}
		},
		{
			dataField: 'cCludeaddr',
			caption: '送货地点',
			width: 120,
		},
		{
			dataField: 'cSw15',
			caption: '标识原因',
			width: 120,
//			alignment: 'center'
		},
		{
			dataField: 'cBackcause',
			caption: '退单原因',
			width: 120,
		},
		{
			dataField: 'cSw18',
			caption: '变更原因',
			width: 120,
//			alignment: 'center',
		},
		{
			dataField: 'cSw19',
			caption: '撤回原因',
			width: 120,
//			alignment: 'center',
		},
		{
			dataField: 'cDenycause',
			caption: '驳回原因',
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
			dataField: 'cCsubmittime',
			caption: '采购提交时间', dataType: "date",
			format: "yyyy-MM-dd",
			width: 100,
			alignment: 'center',

		},
		{
			dataField: 'cCreatetime',
			caption: '信息卡制作时间', dataType: "date",
			format: "yyyy-MM-dd",
			width: 120,
			alignment: 'center',

		},
		{
			dataField: 'cChecktime',
			caption: '信息卡审核时间', dataType: "date",
			format: "yyyy-MM-dd",
			width: 110,
			alignment: 'center',

		},
		{
			dataField: 'cDataedp',
			caption: '信息卡制作人',
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
		columnResizingMode: "widget",
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
			mode: 'single'
		},
		columns: dataGridS1columns,
		onToolbarPreparing: function (e) {
			operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

		},
		onCellPrepared: function(e) {
             // 样序等于1的行颜色改变
		if (e.data) {                 
			if (e.data.cSw14 == "1") {                     
			e.cellElement.addClass('bgc_FF0');                 
			}                 
			if (e.data.cSw14 == "2") {                     
			e.cellElement.addClass('bgc_green');                
			} 
			if(e.data.cStatexxk == "xxk09"){
				e.cellElement.addClass('bgc_zfxy'); 
			}            
			}
		},
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
				let matchedItem = hsState.find(item => item.cSubitemid == rowData.cStatexxk);
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
			width: 150,
			alignment: 'center',
			allowEditing: false,
		},
		{
			dataField: 'cCuspec',
			caption: '规格型号',
			width: 140,
			alignment: 'center',
			allowEditing: false,
		},

		{
			dataField: 'cUnit',
			caption: '单位',
			allowEditing: false,
			alignment: 'center',
			width: 80,
		},
		{
			dataField: 'cSw08',
			caption: '报关物资名称',
			width: 150,
			alignment: 'center',
		},
		{
			dataField: 'cSpec',
			caption: '报关规格型号',
			width: 150,
			alignment: 'center',
		},
		{
			dataField: 'cUnitspec',
			width: 100,
			caption: '报关单位',
			alignment: 'center',
		},
		{
			dataField: 'cGoodsnum',
			caption: '订货数量',
			alignment: 'center',
		},
		{
			dataField: 'cPrice',
			caption: '含税单价',
			alignment: 'center',
		},
		{
			dataField: 'cSumprice',
			caption: '含税总价',
			alignment: 'center',
			allowEditing: false,
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
		{
			dataField: 'cSw03',
			caption: '请购单号',
			allowEditing: false,
			width: 150,
		},
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
		height: 350,
		width: '100%',
		paging: {
			enabled: false
		},
		/*scrolling: {
			mode: 'virtual'
		},*/
		selection: {
//			mode: 'single'
			mode: 'multiple'
		},
/*		"export": {
            enabled: true,
            fileName: "Employees",
            allowExportSelectedData: true
        },*/
		paging: {
            pageSize: 30,
            enabled: true,
        },
        keyDown: true,
        pager: {
            // showPageSizeSelector: true,
            // allowedPageSizes: [5, 10, 20 , 25 ,30],
            showInfo: true,
            showNavigationButtons: true

        },
		columns: dataGridS2columns,
		onToolbarPreparing: function (e) {
			operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

		}
	}).dxDataGrid('instance');
	
    $('#dataGridS4').dxDataGrid({
        dataSource: tabledataS4,
        columnResizingMode: "widget",
        editing: {
            mode: 'popup',
//        	mode: 'cell',
//            allowUpdating: true,
            allowUpdating: false     
        },
        // keyExpr: 'ID',     
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
//            mode: 'multiple'
        	mode:'single'
        },
        columns: [
        	{
                dataField: 'cFilename',
                caption: '标题',
//                width: 150,
//                alignment: 'center',
                allowEditing: false,
            },
            {
                dataField: 'cModifytime',
                caption: '更新时间',
                alignment: 'center',
                dataType: "date",
                format: "yyyy-MM-dd"
                	
            },
            {
            	dataField: 'cModifier',
            	caption: '更新人',
//            	width: 	50,
            	alignment: 'center',
            	allowEditing: false,
            },
            {
                dataField: 'cVersion',
                alignment: 'center',
                caption: '版本',
            },
            {
                dataField: 'cConnum',
                caption: '合同号',
//                width: 150,
                alignment: 'center',
                allowEditing: false,
            },
            {
            	dataField: 'cHversion',
            	alignment: 'center',
            	caption: '历史版本',
            },
            
        ]
    });
	
	
	
	///////////////////////////////////////////////////////
	//Star()请求下拉框、多选框数据、通过请求网址的后缀生成代码 
	///////////////////////////////////////////////////////
	function start() {
		
		addIns3  = $('#addmotai0').dxPopup({
    	    //模态框增加name    
    	    width: 200,
    	    height: 70
    	}).dxPopup('instance'); //增加操作时候的模态框实例
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
						hsState.push(item);
					});
//					console.log(hsState);
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
		 initLoad5()
	        function initLoad5() {
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
		 initLoad6()
	        function initLoad6() {
	            msg = {
	                ver: "53cc62f6122a436083ec083eed1dc03d",
	                session: "42f5c0d7178148938f4fda29460b815a",
	                tag: {},
	                data: {
	                    "cItemid": "BGCAUSE"
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
	                    	biangeng.push(item);
	                    });
	                },
	                error: function() {
	                    cake.Ui.LoadPanel.close()
	                }
	            });
	        }
		 initLoad7();
	        function initLoad7(){
	        	  msg = {
	                      ver: "53cc62f6122a436083ec083eed1dc03d",
	                      session: "42f5c0d7178148938f4fda29460b815a",
	                      tag: {},
	                      data: {
	                          "cItemid": "DHCD"
	                      }
	                  };
	                  $.ajax({
	                      type: "post",
	                      url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
	                      data: JSON.stringify(msg),
	                      contentType: "application/json",
	                      dataType: "json",
	                      success: function (result) {
	                          /*  ////console.log.log(result.data);
	                           yudengjifalg = result.data; */

	                          result.data.forEach(item => {
	                        	  dhcd.push(item);
	                          });
	                          // 钢种分类
	                          // globecStlGroup.splice(0, globecStlGroup.length);

	                          //  cake.Ui.LoadPanel.close()
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
        initLoad15()

        function initLoad15() {
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
//                    console.log(result.data);
                    xxCon = result.data;
                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            comp_Cludecom.push(item);
                        });
                    }
//                                    	console.log(comp_Cludecom);
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad16();
        initLoad91();
        //
        function initLoad91() {
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
        initLoad19()
        //
        function initLoad19() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "JHQX"
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
                        jhqx.push(item);
                    });
//                    console.log(jhqx)
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/gerUser'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_USER.splice(0, TP_CGORDERMT_USER.length);
                TP_CGORDERMT_USER.push(data.data);
//                console.log(TP_CGORDERMT_USER)
                //searchdataFormM1.getEditor('cSw10').option('value', get_user());
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
		////////////////////////////////////////////////////////////////////////////////    
		//寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
		////////////////////////////////////////////////////////////////////////////////   
		/*M1S31_serDel();*/
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	function get_user() {
        let matchedItem1 = TP_CGORDERMT_USER.find(item => item.userName != "");
        let matchedItem = cgy.find(item => item.cSubitemdes == TP_CGORDERMT_USER[0].userName);
//        let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cManor)
//        console.log(matchedItem1)
//        console.log(matchedItem)
        if (matchedItem == null || matchedItem == undefined) {
            return null;
        } else {
            //////console.log(matchedItem.cSubitemid)
            return matchedItem.cSubitemid;
        }
    }  
	
	
	function M1S11_serDel() {
		contact_Type = [];
		initLoad16();
		msg = {
			ver: '53cc62f6122a436083ec083eed1dc03d',
			session: '42f5c0d7178148938f4fda29460b815a',
			tag: {},
			data: {
			}
		};
		let searchtiao = searchdataFormM1.option('formData')
		msg.data.cgMnhtM1s1 = [searchdataFormM1.option('formData')];
		msg.data.cgMnhtM1s1[0].cConline = '1';//此条件是查询不带“协议”字符的合同，此值非空非null即可。
		let startTime = msg.data.cgMnhtM1s1[0].cCreatetime_star;
		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = msg.data.cgMnhtM1s1[0].cCreatetime_end;
		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999); M1S11Q_serDel_Judgment();
		if (M1S11Q_serDel_mark != 'M1S11Q_success') {
		} else {
//			console.log(JSON.stringify(msg));
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
					select = data.data
					tabledataS1.splice(0, tabledataS1.length);
					select.forEach(item => tabledataS1.push(item));
					$('#dataGridS1').dxDataGrid('instance').deselectAll()
					$('#dataGridS1').dxDataGrid('instance').refresh()
//					DevExpress.ui.notify(data.msg, 'success', 2000);
				},
				error: function () {
					DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
					// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
					//e.cancel=true;       
				}
			})
		}
	}
	function initLoad16() {
        //cake.Ui.LoadPanel.show()
        // 初始化加载所有下拉框数据
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
            }
        };
        //../../tdhc_cgsys/CG_A001/selcon   ../../tdhc_cgsys/CGC_11/selectContType ----- 第一版合同维护
        $.ajax({
            type: "post",
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CLAUSE/selectContType"),
            data: JSON.stringify(msg),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
//                  console.log(result.data.clauseM1s1);
                result.data.clauseM1s1.forEach(item => {
                	contact_Type.push(item);
                });
                // 钢种分类
                // globecStlGroup.splice(0, globecStlGroup.length);

                //  cake.Ui.LoadPanel.close()
//                console.log(contact_Type);
            },
            error: function () {
                cake.Ui.LoadPanel.close()
            }
        });
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
		let rowsData = grid.getSelectedRowsData()[0]
		let selectedRowKeys = grid.getSelectedRowKeys()
		if (selectedRowKeys.length < 1) {
			// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
			DevExpress.ui.notify('请选择对应的合同号！！！！', 'info', 2000);
			return;
		}
		msg.data.cgMnhtM1s1 = rowsData;
		msg.data.cGoodsname = searchdataFormM2.option('formData').cGoodsname
//		console.log(selectedRowKeys)
//		console.log(searchdataFormM2.option('formData'))
//		console.log(msg)
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
//					console.log(data.data.cgMnhtS1s2);
					if (data.data.cgMnhtS1s2 == null) {
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
//			console.log(JSON.stringify(msg));
			$.ajax({
				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S312Q'),
				dataType: 'json',   //返回格式为json      
				async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				type: 'post',   //请求方式 get 或者post ,       
				contentType: 'application/json',
				success: function (data) {
//					console.log(data.data.cgMnhtM1s1);
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
					DevExpress.ui.notify('数据不符合规范', 'info', 2000);
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
								DevExpress.ui.notify(data.msg, 'success', 2000)
								var websocketData = ['[{"objId":"CG_MNHT_websocket","funName":"CG_MNHT","funType":"M1S11","tbName":"TP_CGCONTRACTMTT","dataId":"AUD"}]']
								send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 2000)
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
	 function S1S21DH() {
		 
		 S1S21addIns = $('#addForm').dxForm({
	            formData: adddata,
	            validationGroup: validationGroupName,
	            colCount: 3,
	            items: [
//	            	 {
//	                     dataField: 'cSw10',
//	                     label: {
//	                         text: '采购员'
//	                     },
//	                     editorType: 'dxTagBox',
//	                     editorOptions: {
//	                         //以上完成对没有联动数据源配置
//	                         //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//	                         dataSource: cgy,
//	                         valueExpr: 'cSubitemid',
//	                         displayExpr: 'cSubitemdes',
//	                         searchEnable: true,
//	                         searchEnabled:true,
//	                         showClearButton: true,
//	                         height:26,
//	                         width: 160,
//	                         showSelectionControls: true,
////	                         readOnly:true,
//	                     },
//	                 },
	                {
	    				dataField: 'cause',
	    				label: {
	    					text: '变更原因'
	    				},
	    				editorType: 'dxTagBox',
	    				editorOptions: {
	                         //以上完成对没有联动数据源配置
	                         //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
	                         dataSource: biangeng,
	                         valueExpr: 'cSubitemid',
	                         displayExpr: 'cSubitemdes',
	                         searchEnable: true,
	                         searchEnabled:true,
	                         showClearButton: true,
	                         height:60,
	                         width: 750,
	                         showSelectionControls: true,
//	                         readOnly:true,
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
	    			}

	            ]
	        }).dxForm('instance')
	         $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
				msg = {
				ver: '53cc62f6122a436083ec083eed1dc03d',
				session: '42f5c0d7178148938f4fda29460b815a',
				tag: {},
				data: {
					cause:null
				}
			};
				let tcause = S1S21addIns.option('formData').cause
				console.log(tcause);
			if (tcause.length == 0) {
                 DevExpress.ui.notify('请选择变更原因！！！', 'error', 3000);
                 return
             }
			
			msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
			msg.data.cause= S1S21addIns.option('formData').cause;
			console.log(msg.data.cause);
			M1S11U_serDel_Judgment();
			if (M1S11U_serDel_mark != 'M1S11U_success') {
			} else {
				var result = DevExpress.ui.dialog.confirm("您确定要变更提交吗?", "确认变更提交");
				result.done(function (dialogResult) {
					if (dialogResult) {
						cake.Ui.LoadPanel.show()
						addIns3.show();
						//
						$.ajax({
							url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/M1S11U3'), dataType: 'json',   //返回格式为json   
							async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
							data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
							type: 'post',   //请求方式 get 或者post , 
							contentType: 'application/json',
							success: function (data) {
								addIns3.hide();
								let select = data.msg
								if (data.errcode == 0) {
									DevExpress.ui.notify(data.msg, 'success', 2000);
									M1S11_serDel();
									addIns.hide();
								}
								else {
									DevExpress.ui.notify(data.msg, 'warning', 2000);
								}
								
							},
							error: function () {
								addIns3.hide();
								DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
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
	             onClick: function() {
	                 addIns.hide()
	             }
	         })     
		 
	 }
	 function M1S11_SC() {
		 
		 M1S11addIns = $('#addForm').dxForm({
			 formData: adddata,
			 validationGroup: validationGroupName,
			 colCount: 1,
			 items: [
				 {
	                    dataField: 'cDeliverytime',
	                    label: {
	                        text: '最后到货时间'
	                    },
	                    
	                    editorType: "dxDateBox",
	                    editorOptions: {
	                        type: "date",
	                        displayFormat: 'yyyy-MM-dd',
	                    },

	                },
				 
				 ]
		 }).dxForm('instance')
		 $('#addsure').dxButton({
			 text: '确定',
			 icon: 'todo',
			 validationGroup: validationGroupName,
			 onClick: function(e) {
				 msg = {
						 ver: '53cc62f6122a436083ec083eed1dc03d',
						 session: '42f5c0d7178148938f4fda29460b815a',
						 tag: {},
						 data: {
						 }
				 };
				
				 msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowKeys();
				 msg.data.deliverytime= M1S11addIns.option('formData').cDeliverytime;
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
										M1S11_serDel();
										addIns.hide()
									},
									error: function () {
										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
										// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
										//e.cancel=true;         
									}
								})
						 
				 
			 }
		 })
		 $('#addcansel').dxButton({
			 text: '取消',
			 icon: 'remove',
			 onClick: function() {
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
					dataField: 'cBackecause',
					label: {
						text: '退单原因'
					},
					editorOptions: {
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
					DevExpress.ui.notify('退单原因未输入！！！', 'error', 3000);
					return;
				}
				
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
//				 let cBackcause = M1S21addIns.option('formData').cBackecause;
//				 console.log(cBackcause)
//                 if (cBackcause == "" || cBackcause == undefined || cBackcause == null) {
//                     DevExpress.ui.notify('请输入退单原因！！！！', 'error', 3000);
//                     return
//                 }
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
	//拟合同修改
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
//				let validateResult = e.validationGroup.validate();
//				if (!validateResult.isValid) {
//					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//					return;
//				}
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
			//合同物资
			S1S21_SSRT();
			//合同条款
			S1S22_SSRT();
			//附件清单
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
				if (data.errcode == 0) {
//					DevExpress.ui.notify(data.msg, 'success', 3000)
				} else {
					DevExpress.ui.notify(data.msg, 'error',3000)
					return;
				} if (data.data.cgMnhtS1s2 == null) {
					tabledataS2.splice(0, tabledataS2.length);
					$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
					return
				}
				addmonigrid1 = data.data.cgMnhtS1s2;
				addmonigrid2 = data.data.cgMnhtS1s2;
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
//		cake.Ui.LoadPanel.show()
//		console.log(JSON.stringify(msg));
		$.ajax({
			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/S1S21QCause'),
			dataType: 'json',   //返回格式为json  
			async: true,//请求是否异步，默认为异步，这也是ajax重要特性 
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
			type: 'post',   //请求方式 get 或者post ,
			contentType: 'application/json',
			success: function (data) {
//				if (data.errcode == 0) {
//					DevExpress.ui.notify(data.msg, 'success', 100)
//				} else {
//					DevExpress.ui.notify(data.msg, 'error',100)
//					return;
//				} 
				addmonigrid3 = data.data.tbCgcontract[0];
//				console.log(addmonigrid3);
//				if (data.data.cgMnhtS1s2 == null) {
//					tabledataS2.splice(0, tabledataS2.length);
//					$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
//					return
//				}
//				let select;
//				addmonigrid2 = data.data.cgMnhtS1s2;
//				select = data.data.cgMnhtS1s2
//				tabledataS2.splice(0, tabledataS2.length);
//				select.forEach(item => tabledataS2.push(item));
//				$('#dataGridS2').dxDataGrid('instance').deselectAll()
//				$('#dataGridS2').dxDataGrid('instance').refresh()
				cake.Ui.LoadPanel.close();
			},
			error: function () {
				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
				//e.cancel=true;       
			}
		})
	}
	 
	//附件清单
	window.S1S23_SSRT=function(){
		 
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
			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/fileUpload/searchFile'),
			dataType: 'json',   //返回格式为json  
			async: true,//请求是否异步，默认为异步，这也是ajax重要特性 
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
			type: 'post',   //请求方式 get 或者post ,
			contentType: 'application/json',
			success: function (data) {
//				console.log(data.data)
				
				if (data.errcode == 0) {
//					DevExpress.ui.notify(data.msg, 'success', 1000)
				} else {
					DevExpress.ui.notify(data.msg, 'error',1000)
					return;
				} if (data.data == null) {
					tabledataS4.splice(0, tabledataS4.length);
					$('#dataGridS4').dxDataGrid('instance').option('dataSource', tabledataS4)
					return
				}
				let select;
				select = data.data
//				console.log(select);
				tabledataS4.splice(0, tabledataS4.length);
				select.forEach(item => tabledataS4.push(item));
				$('#dataGridS4').dxDataGrid('instance').deselectAll()
				$('#dataGridS4').dxDataGrid('instance').refresh()
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
//		console.log(JSON.stringify(msg))
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
					dataField: 'cCuspec',
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
					dataField: 'cSpec',
					label: {
						text: '报关规格型号'
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
					dataField: 'cUnitspec',
					label: {
						text: '报关单位'
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				
				
//				{
//					dataField: 'cGoodscase',
//					label: {
//						text: '订货情况'
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
//					dataField: 'cSumprice',
//					label: {
//						text: '含税总价:单价*订货数量'
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
				
				
				

			]
		}).dxForm('instance')
		$('#addsure').dxButton({
			text: '确定',
			icon: 'todo',
			validationGroup: validationGroupName,
			onClick: function (e) {
				/*let validateResult = e.validationGroup.validate();
				if (!validateResult.isValid) {
					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
					return;
				}*/
				msg = {
					ver: '53cc62f6122a436083ec083eed1dc03d',
					session: '42f5c0d7178148938f4fda29460b815a',
					tag: {},
					data: {},
				};
				msg.data.cgMnhtS1s2 = [S1S21addIns.option('formData')];
				msg.data.cgMnhtM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
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
								S1S21_SSRT()
								M1S11_serDel();
								DevExpress.ui.notify(data.msg, 'success', 3000)
							} else if(data.errcode == 30){
								DevExpress.ui.notify(data.msg, 'warning', 5000);
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
	function S1S21_hb() {
		S1S21addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 3,
			items: [
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
					dataField: 'cCuspec',
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
					dataField: 'cSw08',
					label: {
						text: '报关物资名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为4000！'
					},]
				},
				{
					dataField: 'cSpec',
					label: {
						text: '报关规格型号'
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
					dataField: 'cUnitspec',
					label: {
						text: '报关单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },{
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
            			type:'numeric',
            			message:'请输入数字',
            		},{
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
            			type:'numeric',
            			message:'请输入数字',
            		},]
				},
				{
					dataField: 'cSumprice',
					label: {
						text: '总价'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
            			type:'numeric',
            			message:'请输入数字',
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
				
				
				
				
				]
		}).dxForm('instance')
		$('#addsure').dxButton({
			text: '确定',
			icon: 'todo',
			validationGroup: validationGroupName,
			onClick: function (e) {
				
//				let validateResult = e.validationGroup.validate();
//				if (!validateResult.isValid) {
//					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//					return;
//				}
				
				msg = {
						ver: '53cc62f6122a436083ec083eed1dc03d',
						session: '42f5c0d7178148938f4fda29460b815a',
						tag: {},
						data: {},
				};
				msg.data.contractstt = S1S21addIns.option('formData');
				msg.data.tpCgcontractstt = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
				//change等于1为添加         
				S1S21A_serDel_Judgment();
				if (S1S21A_serDel_mark != 'S1S21A_success') {
				} else {
					addIns3.show();
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/S1S21HB'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							addIns3.hide();
							let select = data.msg
							if (data.errcode == 0) {
								S1S21_SSRT()
								M1S11_serDel();
								DevExpress.ui.notify(data.msg, 'success', 3000)
							}else if(data.errcode == 30){
								S1S21_SSRT()
								M1S11_serDel();
								DevExpress.ui.notify(data.msg, 'warning', 5000)							
							} else {
								DevExpress.ui.notify(data.msg, 'error', 3000)
								return;
							}
							
							addIns.hide()
							
						},
						error: function () {
							addIns3.hide();
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
	function S1S21_CF() { 
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
                    text: '提交',
                    onClick:function(e){
                    	
//                    	console.log(6666666);
                    	 msg = {
                                 ver: '53cc62f6122a436083ec083eed1dc03d',
                                 session: '42f5c0d7178148938f4fda29460b815a',
                                 tag: {},
                                 data: {
                                 },
                             };
                    	 
                    	 msg.data.contractstt = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData()[0];
                    	 msg.data.tpCgcontractstt = $('#mAke').dxDataGrid('instance')._options.dataSource;
//                    	 console.log(JSON.stringify(msg));
                    	 addIns3.show();
                    	 $.ajax({
                    		 //
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/S1S21CF'),
                             dataType: 'json', //返回格式为json           
                             async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                             type: 'post', //请求方式 get 或者post ,         
                             contentType: 'application/json',
                             success: function (data) {
                            	 addIns3.hide();
//                            	 console.log(data)
                                 let select = data.msg
                                 if (data.errcode == 0) {
                                     DevExpress.ui.notify(select, 'success', 3000);
                                 }else if(data.errcode == 30){
    								DevExpress.ui.notify(data.msg, 'warning', 5000)							
    							}else {
				 					DevExpress.ui.notify(data.msg, 'error', 3000)
				 					return;
				 				}
                            	 S1S21_SSRT(); 
                            	 M1S11_serDel();
                                 addIns.hide();
                             },
                             error: function () {
                            	 addIns3.hide();
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
//                    	$('#mAke').dxDataGrid('instance').refresh()
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
//			onEditingStart: function(e) {
//				console.log(e.cBm)
//				var Avalue = e.cBm;
//				if (Avalue) {
//				var thisValue = Avalue.split('%');
//				thisValue = thisValue.join('')
//				returnFloat()
//				Avalue = Number(thisValue).toFixed(2) + "%"
//				}
//				e.data.cBm = Avalue;
//				console.log(Avalue);
//				},
//			
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
					dataField: 'cConnum',
					caption: '合同号',
//					value:$('#dataGridS2').dxDataGrid('instance').getSelectedRowsData()[0].cConnum,
					 calculateDisplayValue: function() {   
						let grids1 = $('#dataGridS2').dxDataGrid('instance');
						let rowsDatas1 = grids1.getSelectedRowsData()[0];
		                       return rowsDatas1.cConnum;      
		                },
					allowEditing: false,
				},
				{
					dataField: 'cGoodsname',
					caption: '物资名称',
				},
				{
					dataField: 'cCuspec',
					caption: '规格型号',
				},

				{
					dataField: 'cUnit',
					caption: '单位',
				},
				{
					dataField: 'cSw08',
					caption: '报关物资名称',
				},
				{
					dataField: 'cSpec',
					caption: '报关规格型号',
				},
				{
					dataField: 'cUnitspec',
					caption: '报关单位',
				},
				{
					dataField: 'cGoodsnum',
					caption: '订货数量',
				},
				{
					dataField: 'cPrice',
					caption: '含税单价',
				},
				{
					dataField: 'cRemark',
					caption: '备注',
				},
			
			],
		})

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
	
//	function S1S21_CF() {
//		S1S21addIns = $('#addForm').dxForm({
//			formData: adddata,
//			validationGroup: validationGroupName,
//			colCount: 3,
//			items: [
//				{
//					dataField: 'cGoodsname',
//					label: {
//						text: '物资名称'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//				},
//				{
//					dataField: 'cCuspec',
//					label: {
//						text: '规格型号'
//					},
//					editorOptions: {
//						showClearButton: true,
//					}
//				},
//				{
//					dataField: 'cUnit',
//					label: {
//						text: '单位'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//
//				},
//				{
//					dataField: 'cSw08',
//					label: {
//						text: '报关物资名称'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'required',
//						message: '必填！'
//					},]
//				},
//				{
//					dataField: 'cSpec',
//					label: {
//						text: '报关规格型号'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//
//				},
//				{
//					dataField: 'cUnitspec',
//					label: {
//						text: '报关单位'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'required',
//						message: '必填！'
//					},]
//				},
//				{
//					dataField: 'cGoodsnum',
//					label: {
//						text: '订货数量'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type: 'required',
//						message: '必填！'
//					},{
//						type:'numeric',
//						message:'请输入数字',
//					},]
//				},
//				{
//					dataField: 'cPrice',
//					label: {
//						text: '单价'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//					validationRules: [{
//						type:'numeric',
//						message:'请输入数字',
//					},]
//				},
//			
//				
//				
//				{
//					dataField: 'cRemark',
//					label: {
//						text: '备注'
//					},
//					editorOptions: {
//						showClearButton: true,
//					},
//
//				},
//				
//				
//				
//				
//				]
//		}).dxForm('instance')
//		$('#addsure').dxButton({
//			text: '确定',
//			icon: 'todo',
//			validationGroup: validationGroupName,
//			onClick: function (e) {
//				let validateResult = e.validationGroup.validate();
//				if (!validateResult.isValid) {
//					DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//					return;
//				}
//				msg = {
//						ver: '53cc62f6122a436083ec083eed1dc03d',
//						session: '42f5c0d7178148938f4fda29460b815a',
//						tag: {},
//						data: {},
//				};
//				msg.data.contractstt = S1S21addIns.option('formData');
//				msg.data.tpCgcontractstt = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
////				console.log(JSON.stringify(msg))
//				//change等于1为添加         
//				S1S21A_serDel_Judgment();
//				if (S1S21A_serDel_mark != 'S1S21A_success') {
//				} else {
//					$.ajax({
//						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/S1S21CF'),
//						dataType: 'json',   //返回格式为json           
//						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
//						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//						type: 'post',   //请求方式 get 或者post ,         
//						contentType: 'application/json',
//						success: function (data) {
//							let select = data.msg
//							if (data.errcode == 0) {
//								S1S21_SSRT()
//								DevExpress.ui.notify(data.msg, 'success', 3000)
//							} else {
//								DevExpress.ui.notify(data.msg, 'error', 3000)
//								return;
//							}
//							
//							addIns.hide()
//							
//						},
//						error: function () {
//							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//						}
//					})
//				}
//			}
//		})
//		$('#addcansel').dxButton({
//			text: '取消',
//			icon: 'remove',
//			onClick: function () {
//				addIns.hide()
//			}
//		})
//	}
	
//修改拟合同信息
    function Update_moni() {
        addIns2_form = $('#addForm3').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 2,
            items: [
            	{
                    dataField: 'cSw10',
                    label: {
                        text: '采购员'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: cgy,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnabled: true,
                        readOnly:true,
                        showClearButton: true,
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        // dataSource: variabl,
                        // valueExpr: 'id',
                        // displayExpr: 'value',
                        // showClearButton: true,
                        placeholder: '请选择',
                    },
                },
            	{
		              colSpan: 1,
		              itemType: 'empty',
		          },
            	 {
                     dataField: 'cOutconnum',
                     label: {
                         text: '外贸合同号'
                     },
                     editorType: 'dxTextBox',
                     editorOptions: {
                         searchEnable: true,
                         showClearButton: true,
                         
                     },
//                     validationRules: [{
//                             type: 'required',
//                             message: '必填！'
//                         },
//                         {
//                             type: 'stringLength',
//                             max: 1000,
//                             min: 0,
//                             message: '长度超限，最长为1000！'
//                         },
//                     ]

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
//                        readOnly:true,
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
                    dataField: 'cCludecom',
                    label: {
                        text: '需方'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
	                        type: 'required',
	                        message: '必填！'
	                    },
	                    {
	                        type: 'stringLength',
	                        max: 4000,
	                        min: 0,
	                        message: '长度超限，最长为4000！'
	                    },
                    ],
                    editorOptions: {
                        dataSource: comp_Cludecom,
                        valueExpr: 'cCludecom',
                        displayExpr: 'cCludecom',
                        searchEnabled: true,
                        showClearButton: true,
                        placeholder: '请选择',
                        onValueChanged: function (e) {
//                            console.log(e.value)
                            if (e.value == null || e.value == "") {
                                $('#textarea3').dxForm('instance').option("formData", new Object)
                                return;
                            }
                            msg = {
                                ver: '53cc62f6122a436083ec083eed1dc03d',
                                session: '42f5c0d7178148938f4fda29460b815a',
                                tag: {},
                                data: {
                                	cCludecom: null
                                },
                            };
                            msg.data.cCludecom = e.value;
//                            console.log(msg.data.cCludecom);
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/ZZ_01/getCompInfo'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function (data) {
//                                    console.log(data.data)
//                                    //                                      console.log(data.data[0].cCludecom)
//                                    console.log(8888888);
                                    //单位名称
                                    $('#textarea3').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);

                                    //单位地址
                                    $('#textarea3').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cComaddress);

                                    //电话
                                    $('#textarea3').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cComphone);

                                    //传真
                                    $('#textarea3').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cComfaxno);

                                    //开户行
                                    $('#textarea3').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cCombankname);

                                    //账号
                                    $('#textarea3').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cComaccountno);

                                    //税号
                                    $('#textarea3').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cComtaxnumber);
                                    //签订地址
                                    $('#addForm3').dxForm('instance').getEditor('cSignplace').option('value', data.data[0].cSw01);

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
                    },
                },
                {
                    dataField: 'cSupplier',
                    label: {
                        text: '供方'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    },
                ],
                    editorOptions: {
                        dataSource: cont_supplier,
                        valueExpr: 'cSupplier',
                        displayExpr: 'cSupplier',
                        searchEnabled: true,
                        showClearButton: true,
                        placeholder: '请选择',
                        onValueChanged: function (e) {
                        	let dhcd = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cSw20;
                        	let supplier = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cSupplier;
                            if (e.value == null || e.value == "") {
                                $('#textarea4').dxForm('instance').option("formData", new Object)
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

                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/getSupplierInfo'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function (data) {
                                	supperData = data.data[0];
                                    //单位名称
                                    $('#textarea4').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);

                                    //单位地址
                                    $('#textarea4').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);

                                    //电话
                                    $('#textarea4').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);

                                    //传真
                                    $('#textarea4').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                                    if(supplier != e.value){
                                    	 //开户行
                                        $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);

                                        //账号
                                        $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);
                                        $('#addForm3').dxForm('instance').getEditor('cSw20').option('value','cd');
                                        
                                    }else{
                                    	if(dhcd === 'dh'){
                                      	  //开户行
                                          $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cSw06);

                                          //账号
                                          $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cSw02);
                                          $('#addForm3').dxForm('instance').getEditor('cSw20').option('value','dh');
                                      }else{
                                      	 //开户行
                                          $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);

                                          //账号
                                          $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);
                                          $('#addForm3').dxForm('instance').getEditor('cSw20').option('value','cd');
                                      }
                                    }
                                    
                                    
                                   

                                    //税号
                                    $('#textarea4').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

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
                {
                    dataField: 'cSw20',
                    label: {
                        text: '电汇承兑'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
	                    },
	                ],
	                editorOptions: {
                        dataSource: dhcd,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnabled: true,
                        showClearButton: true,
                        placeholder: '请选择',
                        onValueChanged: function (e) {
                        	console.log(e.value)
                            if (e.value == null || e.value == "") {
                                $('#textarea4').dxForm('instance').option("formData", new Object);
                                return;
                            }
//                          let cSupplier = $('#textarea2').dxForm('instance').option('formData').cSupplier;
//                          if(cSupplier == null || cSupplier==undefined ||cSupplier == ""){
//                          	 DevExpress.ui.notify('请先选择对应的供应商！！！', 'warning', 4000);
//                          	addIns2_form.getEditor('cSw20').option('value','');
//                          	 return ;
//                          }
                        	if(supperData == undefined){
                        		return;
                        	}
                        	
                         if(e.value === 'dh'){
                        	 if(supperData.cSw01 == null || supperData.cSw02 == null){
                              	 DevExpress.ui.notify('请先去维护该供应商的电汇行号和电汇账号！！！', 'warning', 4000);
                              	 return ;
                              }	else{
                            	//开户行
                            	  $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', supperData.cSw06);
                            	  //账号
                            	  $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', supperData.cSw02);
                              }
                         }   
                         if(e.value === 'cd'){
                        	 if(supperData.cBankname == null || supperData.cAccountno == null){
                              	 DevExpress.ui.notify('请先去维护该供应商的承兑的信息！！！', 'warning', 4000);
                              	 return ;
                              }	else{
                            	//开户行
                            	  $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', supperData.cBankname);
                            	  //账号
                            	  $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', supperData.cAccountno);
                              }
                         }
                         
//                          console.log(supperData.cSw01);
                          
//                            msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {
//                                    cSupplier: null
//                                },
//                            };
//                          msg.data.cDhcd = e.value;
//                          msg.data.cSupplier = cSupplier;
//                            $.ajax({//../../tdhc_cgsys/DZ_08/getSupplierInfo
//                                url: Cake.Piper.getAuthUrl(''),
//                                dataType: 'json', //返回格式为json           
//                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                                type: 'post', //请求方式 get 或者post ,         
//                                contentType: 'application/json',
//                                success: function (data) {
//                                	supperData = data.data[0];
//                                    console.log(data.data)
                                    //单位名称
//                                    $('#textarea2').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
//
//                                    //单位地址
//                                    $('#textarea2').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
//
//                                    //电话
//                                    $('#textarea2').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
//
//                                    //传真
//                                    $('#textarea2').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                                    //开户行
//                                    $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
//
//                                    //账号
//                                    $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                                    //税号
//                                    $('#textarea2').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

//                                },
//                                error: function () {
//                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                    cake.Ui.LoadPanel.close();
//                                }
//                            })
                        }

                    },
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
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    ]
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
//                    	let rowsData = $("#addmoni2").dxDataGrid('instance').getSelectedRowsData();
//                    	let dataSource = $("#addmoni2").dxDataGrid('instance').option('dataSource');
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
//                    	$("#addmoni2").dxDataGrid('instance').refresh()
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
                    icon: 'plus',
                    text: '提交',
                    onClick: function (e) {

                        let cconnu = $('#addForm3').dxForm('instance').option('formData').cConnum;

                        if (cconnu == "" || cconnu == undefined || cconnu == null) {
                            DevExpress.ui.notify('请填写合同编号。', 'error', 3000);
                            return
                        }

                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {
                            },
                        };

                        msg.data.tpCgcontractmtt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
                        //合同主表信息
                        msg.data.tpCgcontractmt = $('#addForm3').dxForm('instance').option('formData');

                        //合同物资信息
                        msg.data.tpCgorderRequest = $('#addmoni3').dxDataGrid('instance')._options.dataSource;
                        //交货期限 ,交货地点
                        msg.data.delInformation = $('#deadline3').dxForm('instance').option('formData');
//                        console.log(msg.data.delInformation);
                        //付款方式
                        msg.data.paywayRequest = $('#pice3').dxForm('instance').option('formData');
//                         console.log(msg.data.paywayRequest);
                        //需方
                        msg.data.tbCludecompany = $('#textarea3').dxForm('instance').option('formData');
                      //供应商 
                        msg.data.tbSupplier = $('#textarea4').dxForm('instance').option('formData');
//                        console.log(JSON.stringify(msg))
                        $.ajax({
                        	//
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/updateContract'),
                            dataType: 'json', //返回格式为json           
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                            type: 'post', //请求方式 get 或者post ,         
                            contentType: 'application/json',
                            success: function (data) {
                                let select = data.msg
                                if (data.errcode == 60) {
                                    DevExpress.ui.notify(select, 'info', 3000);
                                    cake.Ui.LoadPanel.close();
                                }
                                if (data.errcode == 0) {
                                    DevExpress.ui.notify(select, 'success', 3000);
                                 
                                    cake.Ui.LoadPanel.close();
                                }
                                S1S21_SSRT();
                                M1S11_serDel();
//                                before_serDel();
                                addIns.hide();
                            },
                            error: function () {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);

                            }
                        })
                        // }

                    }
                }
            },
        ];
        $("#addmoni3").dxDataGrid({
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
            paging: {
                enabled: false
            },
            editing: {
//                mode: "batch",
            	mode: "cell",
                allowUpdating: true
            },
            selection: {
//                mode: "multiple"
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
//            	{
//                    dataField: 'cOrdernum',
//                    caption: '请购单号',
//                    width: 250,
//                    alignment: 'center',
//                },
        	   {
                   dataField: 'number',
                   caption: '序号',
                   width: 50,
                   alignment: 'center',
                   allowEditing: false,
               },
                {
                    dataField: 'cGoodsname',
                    caption: '物资名称',
                    width: 200,
                    alignment: 'center',
                    allowEditing: false,
                },

                {
                    dataField: 'cCuspec',
                    caption: '规格型号',
                    width: 120,
                    alignment: 'center',
                    allowEditing: false,
                },
                {
                    dataField: 'cUnit',
                    caption: '单位',
                    width: 50,
                    alignment: 'center',
                    allowEditing: false,
                },
                {
                    dataField: 'cSw08',
                    caption: '报关物资名称',
                    width: 120,
                    alignment: 'center',
                },
                {
                    dataField: 'cSpec',
                    caption: '报关物资规格',
                    width: 120,
                    alignment: 'center',
                },

                {
                    dataField: 'cUnitspec',
                    caption: '报关单位',
                    width: 80,
                    alignment: 'center',
                },
                {
                    dataField: 'cGoodsnum',
                    caption: '订购数量',
                    width: 60,
                    alignment: 'center',

                    setCellValue: function (newData, value, currentRowData) {
                       
                    	newData.cGoodsnum = value;
//                    	console.log(VB_cPrice);
                    	// 数量
                    	VB_cNum = value;
                    	var cPrice1 = currentRowData.cPrice;//试用
                    	// // 总价
                    	VB_cSumprice = newData.cGoodsnum * cPrice1;
                    	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                    	newData.cSumprice = newData.cGoodsnum * cPrice1;
                    	newData.cSumprice = Sumprice;
                    }
                },
                {
                    dataField: 'cPrice',
                    caption: '含税单价',
                    width: 80,
                    alignment: 'center',
                    setCellValue: function (newData, value, currentRowData) {
                    	newData.cPrice = value;
                    	// 单价
                    	VB_cPrice = value;
                    	var cNum2 = currentRowData.cGoodsnum;//试用
                    	console.log(cNum2);
                    	// 总价
                    	VB_cSumprice = newData.cPrice * cNum2;
                    	var Sumprice = Number(VB_cSumprice).toFixed(2);
                    	newData.cSumprice = Sumprice;
//                    	newData.cSumprice = newData.cPrice * cNum2;
                        
                    }
                },
                {
                    dataField: 'cSumprice',
                    caption: '含税总价',
                    width: 200,
                    alignment: 'center',
                     allowEditing: true,

                },
                {
                    dataField: 'cRemark',
                    caption: '备注',
//                    alignment: 'center',
//                    width: 100,
                },
            ],
            summary: {
                // 普通列求和
                totalItems: [{
                    column: 'cSumprice', //计算哪列的值
                    showInColumn: "cGoodsname", //显示在哪列
                    displayFormat: "合计人民币:{0}", //显示格式
                    // valueFormat: "currency",
                    valueFormat: "fixedPoint",
                    precision: 2,
                    summaryType: "sum" ,//汇总类型--运算方式
                    customizeText: function (e) {
//                    		console.log(e.value)
                       	var num = e.value;
                       	num = num.toFixed(2);
                    	return '合计人民币:'+num;
                    }
                }],
            },
        })

        //单条修改
//        function update_fun() {
//            msg = {
//                ver: '53cc62f6122a436083ec083eed1dc03d',
//                session: '42f5c0d7178148938f4fda29460b815a',
//                tag: {},
//                data: {
//                    cgQ003S1s2: {
//
//                    }
//                },
//            };
//            msg.data.cgQ003S1s2 = Dup_Item;
//
//            // 单价修改
//            if (VB_cPrice == null) {
//
//            } else {
//                msg.data.cgQ003S1s2.cPrice = VB_cPrice;
//            }
//
//            // 总价修改
//            if (VB_cSumprice == null) {
//
//            } else {
//                msg.data.cgQ003S1s2.cSumprice = VB_cSumprice;
//            }
//
//            $.ajax({
//                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/modifyTpCgorderst'),
//                dataType: 'json', //返回格式为json           
//                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                type: 'post', //请求方式 get 或者post ,         
//                contentType: 'application/json',
//                success: function (data) {
//                    console.log(data)
//
//                },
//                error: function () {
//                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                }
//            })
//        }


        // 交货期限、交货地点
        $('#deadline3').dxForm({
            formData: adddatapo,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                    dataField: 'cDelivdate',
                    label: {
                        text: '1.交货期限'
                    },
                    editorOptions: {
                        showClearButton: true,
                        value: '自双方合同盖章生效之日起 *日内。'
                    }, 
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    },
                ],
                },
                {
                    dataField: 'cDelivplace',
                    label: {
                        text: '2.交货地点'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    },
                ],
                    editorOptions: {
                        dataSource: jhdd1,
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
                },
            ]
        }).dxForm('instance');

        // 付款方式
        $('#pice3').dxForm({
            formData: adddatapic,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                dataField: 'cPayway',
                label: {
                    text: '1、付款方式'
                },
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    // dataSource: variabl,
                    // valueExpr: 'id',
                    // displayExpr: 'value',
                    // showClearButton: true,
                    showClearButton: true
                },
                validationRules: [{
                    type: 'required',
                    message: '必填！'
                },
                {
                    type: 'stringLength',
                    max: 4000,
                    min: 0,
                    message: '长度超限，最长为4000！'
                },
            ],
            }, ]
        }).dxForm('instance');

        // 验收地点
        $('#place3').dxForm({
            formData: adddatapla,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                dataField: 'cSignplace',
                label: {
                    text: '1.验收地点'
                },
                editorType: 'dxSelectBox',
                validationRules: [{
                    type: 'required',
                    message: '必填！'
                },
                {
                    type: 'stringLength',
                    max: 4000,
                    min: 0,
                    message: '长度超限，最长为4000！'
                },
            ],
                editorOptions: {
                    dataSource: ysdd1,
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
            }, ]
        }).dxForm('instance');



        $('#textarea3').dxForm({
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
//                        readOnly: true,
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

        $('#textarea4').dxForm({
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
//                        readOnly: true,
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
//                        readOnly: true,
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
//                        readOnly: true,
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
//                        readOnly: true,
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
//                        readOnly: true,
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
//                        readOnly: true,
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
//                        readOnly: true,
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
//                        readOnly: true,
                    },
                },
            ]
        }).dxForm('instance')
    }
    function BianG_mtk() {
    	addIns2_form = $('#addForm6').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 2,
            items: [
            	{
                    dataField: 'cConnumname',
                    label: {
                        text: '合同名称'
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
                        text: '合 同 号'
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
                    dataField: 'cCludecom',
                    label: {
                        text: '甲方'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    },
                    ],
                    editorOptions: {
                        dataSource: comp_Cludecom,
                        valueExpr: 'cCludecom',
                        displayExpr: 'cCludecom',
                        searchEnabled: true,
                        showClearButton: true,
//                        placeholder: '请选择',
                        readOnly:true,
//                        onValueChanged: function (e) {
//                            console.log(e.value)
//                            if (e.value == null || e.value == "") {
//                                $('#textarea6').dxForm('instance').option("formData", new Object)
//                                return;
//                            }
//
//                            msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {
//                                	cCludecom: null
//                                },
//                            };
//                            msg.data.cCludecom = e.value;
////     						console.log(msg.data.cCludecom)
//                            msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
//                            //../../tdhc_cgsys/ZZ_01/getCompInfo
//                            $.ajax({
//                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/ZZ_01/getCompInfo'),
//                                dataType: 'json', //返回格式为json           
//                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                                type: 'post', //请求方式 get 或者post ,         
//                                contentType: 'application/json',
//                                success: function (data) {
//                              	  console.log(data.data[0])
////                                    //单位名称
////                                    $('#textarea6').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);
//  //
////                                    //单位地址
////                                    $('#textarea6').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cAddressr);
//  //
////                                    //电话
////                                    $('#textarea6').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cPhoner);
//  //
////                                    //传真
////                                    $('#textarea6').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cFaxno);
//  //
////                                    //开户行
////                                    $('#textarea6').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cBankname);
//  //
////                                    //账号
////                                    $('#textarea6').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cAccountno);
//  //
////                                    //税号
////                                    $('#textarea6').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cTaxnumbe);
////                                    
//                                  //单位名称
//                                    $('#textarea6').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);
//
//                                    //单位地址
//                                    $('#textarea6').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cComaddress);
//
//                                    //电话
//                                    $('#textarea6').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cComphone);
//
//                                    //传真
//                                    $('#textarea6').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cComfaxno);
//
//                                    //开户行
//                                    $('#textarea6').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cCombankname);
//
//                                    //账号
//                                    $('#textarea6').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cComaccountno);
//
//                                    //税号
//                                    $('#textarea6').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cComtaxnumber);
//                                    //签订地址
//                                    $('#addForm4').dxForm('instance').getEditor('cSignplace').option('value', data.data[0].cSw01);
//
//                                },
//                                error: function () {
//                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                    cake.Ui.LoadPanel.close();
//                                }
//                            })
//
//                        }
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
                        text: '乙方'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    },
                    ],
                    editorOptions: {
                        dataSource: cont_supplier,	
                        valueExpr: 'cSupplier',
                        displayExpr: 'cSupplier',
                        searchEnabled: true,
                        showClearButton: true,
//                        placeholder: '请选择',
                        readOnly:true,
//                        onValueChanged: function (e) {
//                      	  let dhcd = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cSw20;
//                        	let supplier = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cSupplier;
//                            if (e.value == null || e.value == "") {
//                                $('#textarea5').dxForm('instance').option("formData", new Object)
//                                return;
//                            }
//                            msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {
//                                    cSupplier: null
//                                },
//                            };
//                            msg.data.cSupplier = e.value;
//                            msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
//                            //../../tdhc_cgsys/DZ_08/getSupplierInfo
//                            $.ajax({
//                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/getSupplierInfo'),
//                                dataType: 'json', //返回格式为json           
//                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                                type: 'post', //请求方式 get 或者post ,         
//                                contentType: 'application/json',
//                                success: function (data) {
////                                    console.log(data.data)
//                              	  supperData2 = data.data[0];
//                                    //单位名称
//                                    $('#textarea5').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
//                                    //单位地址
//                                    $('#textarea5').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
//                                    //电话
//                                    $('#textarea5').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
//                                    //传真
//                                    $('#textarea5').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);
//                                    if(supplier != e.value){
//                                   	 //开户行
//                                       $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
//
//                                       //账号
//                                       $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);
//                                       $('#addForm4').dxForm('instance').getEditor('cSw20').option('value','cd');
//                                       
//                                   }else{
//                                   	if(dhcd === 'dh'){
//                                     	  //开户行
//                                         $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cSw01);
//
//                                         //账号
//                                         $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cSw02);
//                                         $('#addForm4').dxForm('instance').getEditor('cSw20').option('value','dh');
//                                     }else{
//                                     	 //开户行
//                                         $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
//
//                                         //账号
//                                         $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);
//                                         $('#addForm4').dxForm('instance').getEditor('cSw20').option('value','cd');
//                                     }
//                                   }
//                                    //税号
//                                    $('#textarea5').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);
//
//                                },
//                                error: function () {
//                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                    cake.Ui.LoadPanel.close();
//                                }
//                            })
//                        }

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
                {
                    dataField: 'cConmoney',
                    label: {
                        text: '合同金额'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
                {
                    dataField: 'cConnumalter',
                    label: {
                        text: '变更合同号'
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
            ]
        }).dxForm('instance');
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
                    	let rowsData = $("#addmoni6").dxDataGrid('instance').getSelectedRowsData();
                    	let dataSource = $("#addmoni6").dxDataGrid('instance').option('dataSource');

                    	let removeIndex = [];

                    	for (let index = 0; index < dataSource.length; index++) {

                    	if (rowsData.some(element => element == dataSource[index])) {
                    	removeIndex.push(index);
                    	}

                    	}

                    	removeIndex.reverse().forEach(element => dataSource.splice(element, 1));

                    	$("#addmoni6").dxDataGrid('instance').refresh()
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
                    icon: 'plus',
                    text: '提交',
                    onClick: function (e) {
                    	
                    	
                        let cConnumname = $('#addForm6').dxForm('instance').option('formData').cConnumname;

                        if (cConnumname == "" || cConnumname == undefined || cConnumname == null) {
                            DevExpress.ui.notify('请填写合同名称。', 'error', 3000);
                            return
                        }

                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {
                            },
                        };
                        //合同主表信息
                        msg.data.tpCgcontractmtt = $('#addForm6').dxForm('instance').option('formData');
                        //合同物资信息
                        msg.data.tpCgorderRequest = $('#addmoni6').dxDataGrid('instance')._options.dataSource;
                        $.ajax({
                        	//   CG_MNHT
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/alterContract'),
                            dataType: 'json', //返回格式为json           
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                            type: 'post', //请求方式 get 或者post ,         
                            contentType: 'application/json',
                            success: function (data) {
                                let select = data.msg
                                if (data.errcode == 60) {
                                    DevExpress.ui.notify(select, 'info', 3000);
                                    cake.Ui.LoadPanel.close();
                                }
                                if (data.errcode == 0) {
                                    DevExpress.ui.notify(select, 'success', 3000);
                                    cake.Ui.LoadPanel.close();
                                }
//                              S1S21_SSRT();
                                M1S11_serDel();
//                                before_serDel();
                                addIns.hide();
                            },
                            error: function () {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);

                            }
                        })
                        // }

                    }
                }
            },
        ];
        $("#addmoni6").dxDataGrid({
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
//            paging: {
//                enabled: false
//            },
            editing: {
//                mode: "batch",
          	  mode: "cell",
              allowUpdating: true,
            },
            selection: {
                mode: "multiple",
//                mode: "single"
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
//            	{
//                    dataField: 'cOrdernum',
//                    caption: '请购单号',
//                    width: 250,
//                    alignment: 'center',
//                },
//                {
//                    dataField: 'cGoodsname',
//                    caption: '物资名称',
//                    width: 200,
//                    alignment: 'center',
//                    allowEditing: false,
//                },
//                {
//                    dataField: 'cCuspec',
//                    caption: '规格型号',
//                    width: 120,
//                    alignment: 'center',
//                    allowEditing: false,
//                },
//                {
//                    dataField: 'cUnit',
//                    caption: '单位',
//                    width: 50,
//                    alignment: 'center',
//                    allowEditing: false,
//                },
//           	 {
//                    dataField: 'number',
//                    caption: '序号',
//                    width: 50,
//                    alignment: 'center',
//                    allowEditing: false,
//                },
                {
                    dataField: 'cSw08',
                    caption: '报关物资名称',
//                    width: 120,
                    alignment: 'center',
                    
                },
                {
                    dataField: 'cSpec',
                    caption: '报关物资规格',
//                    width: 120,
                    alignment: 'center',
                },

                {
                    dataField: 'cUnitspec',
                    caption: '报关单位',
//                    width: 100,
                    alignment: 'center',
                },
                {
                    dataField: 'cGoodsnum',
                    caption: '订购数量',
//                    width: 60,
                    alignment: 'center',

                    setCellValue: function (newData, value, currentRowData) {
                       
                    	newData.cGoodsnum = value;
//                    	console.log(VB_cPrice);
                    	// 数量
                    	VB_cNum = value;
                    	var cPrice1 = currentRowData.cPrice;//试用
                    	// // 总价
                    	VB_cSumprice = newData.cGoodsnum * cPrice1;
                    	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                    	newData.cSumprice = newData.cGoodsnum * cPrice1;
                   	newData.cSumprice = Sumprice;
                    }
                },
                {
                    dataField: 'cPrice',
                    caption: '含税单价',
//                    width: 80,
                    alignment: 'center',
                    setCellValue: function (newData, value, currentRowData) {
                    	newData.cPrice = value;
                    	// 单价
                    	VB_cPrice = value;
                    	var cNum2 = currentRowData.cGoodsnum;//试用
//                    	console.log(cNum2);
                    	// 总价
                    	VB_cSumprice = newData.cPrice * cNum2;
                    	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                    	newData.cSumprice = newData.cPrice * cNum2;
                    	newData.cSumprice = Sumprice;
                    }
                },
                {
                    dataField: 'cSumprice',
                    caption: '含税总价',
//                    width: 100,
                    alignment: 'center',
                    // allowEditing: false,

                },
                {
                    dataField: 'cRemark',
                    caption: '备注',
//                    alignment: 'center',
//                    width: 100,
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
//                    	console.log(e.value)
                   		var num = e.value;
                          	num = num.toFixed(2);
                          	return '合计民币:'+num;
                    }
                }],
            },
        })
        
    }
	//动态模拟合同修改
    function UpdateD_moni2() {
   	 $('#contract_type4').dxForm({
           formData: calculation,
           validationGroup: validationGroupName,
           colCount: 4,
           items: [
          	 //居中效果
          	/* {
          		 colSpan: 2,
          		 itemType: 'empty',
          		 },
          		 *
          		 *
          		 *
          		 */
          	 	{
                   dataField: 'cContype',
                   label: {
                       text: '合同类型'
                   },
                   editorType: 'dxSelectBox',
                   editorOptions: {
                       dataSource: contact_Type,
                       valueExpr: 'cContypeTpCgclausedata',
                       displayExpr: 'cContypeTpCgclausedata',
                       searchEnabled: true,
                       showClearButton: true,
//                       readOnly:true,
                       width: 300,
                       placeholder: '请选择',
                       onValueChanged: function (e) {
                    	 console.log(777666)
                      	 console.log(e.value)
                           if (e.value == null || e.value == "") {
                               $('#clauseForm4').dxForm('instance').option("formData", new Object)
                               return;
                           }
                      	 msg = {
                                   ver: '53cc62f6122a436083ec083eed1dc03d',
                                   session: '42f5c0d7178148938f4fda29460b815a',
                                   tag: {},
                                   data: {
                                  	 clause_M1S1:{
                                  		 cContypeTpCgclausedata:null
                                  	 }
                                   },
                               };
                      	   msg.data.clause_M1S1.cContypeTpCgclausedata = e.value;
                      	   msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
                      	    $.ajax({
                      	    	//../../tdhc_cgsys/CLAUSE/getContTypeInfo  合同条款维护中的条款数据
                      	    	//../../tdhc_cgsys/tab/getTbContractInfo   当前合同下的条款信息
                                  url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/getContTypeInfo'),
                                  dataType: 'json', //返回格式为json           
                                  async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                  data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                  type: 'post', //请求方式 get 或者post ,         
                                  contentType: 'application/json',
                                  success: function (data) {
                                	  console.log(data)
                                      let rowdata = data.data.clauseM1s1[0]
                                      console.log(rowdata)
                                      $('#clauseForm4').dxForm('instance').option("formData", rowdata)
                                     if ($('#clauseForm4').dxForm('instance').getEditor('cSw31TpCgclausedata').option('value') === '') {
              						 $('#clauseForm4').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw32TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw33TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw34TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw35TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw36TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw37TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw38TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw39TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw40TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', true)
	              					 }
	              					 if ($('#clauseForm4').dxForm('instance').getEditor('cSw41TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', false)
	              					 } else {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', true)
	              					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw42TpCgclausedata').option('value') === '') {
	             						 $('#clauseForm4').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', false)
	             					 } else {
	             						 $('#clauseForm4').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', true)
	             					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw43TpCgclausedata').option('value') === '') {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', false)
	            					 } else {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', true)
	            					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw44TpCgclausedata').option('value') === '') {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', false)
	            					 } else {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', true)
	            					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw45TpCgclausedata').option('value') === '') {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', false)
	            					 } else {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', true)
	            					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw46TpCgclausedata').option('value') === '') {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', false)
	            					 } else {
	            						 $('#clauseForm4').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', true)
	            					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw47TpCgclausedata').option('value') === '') {
	           						 $('#clauseForm4').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', false)
		           					 } else {
		           						 $('#clauseForm4').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', true)
		           					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw48TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', false)
	   	           					 } else {
	   	           						 $('#clauseForm4').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', true)
	   	           					 }
	              					if ($('#clauseForm4').dxForm('instance').getEditor('cSw49TpCgclausedata').option('value') === '') {
	              						 $('#clauseForm4').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', false)
	   	           					 } else {
	   	           						 $('#clauseForm4').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', true)
	   	           					 }
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
   			colSpan: 1,
   			itemType: 'empty',
   			},
           {
               dataField: 'cZqconnum',
               label: {
                   text: '转签合同号'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
               },
//               validationRules: [{
//                       type: 'required',
//                       message: '必填！'
//                   },
//                   {
//                       type: 'stringLength',
//                       max: 1000,
//                       min: 0,
//                       message: '长度超限，最长为1000！'
//                   },
//               ]

           },
//           {
//               dataField: 'cExporter',
//               label: {
//                   text: '出口商'
//               },
//               editorType: 'dxSelectBox',
////               validationRules: [{
////                   type: 'required',
////                   message: '必填！'
////               },
////               {
////                   type: 'stringLength',
////                   max: 4000,
////                   min: 0,
////                   message: '长度超限，最长为4000！'
////                   },
////               ],
//               editorOptions: {
//                   dataSource: comp_Cludecom,
//                   valueExpr: 'cCludecom',
//                   displayExpr: 'cCludecom',
//                   searchEnabled: true,
//                   showClearButton: true,
//                   placeholder: '请选择',
//               }
//               }
           ]
       }).dxForm('instance');
      addIns2_form = $('#addForm4').dxForm({
          formData: adddata,
          validationGroup: validationGroupName,
          colCount: 2,
          items: [
//          	{
//                  colSpan: 1,
//                  itemType: 'empty',
//              },
          	{
                  dataField: 'cOutconnum',
                  label: {
                      text: '外贸合同号'
                  },
                  editorType: 'dxTextBox',
                  editorOptions: {
                      searchEnable: true,
                      showClearButton: true,
                  },
//                  validationRules: [
//                  		{
//                          type: 'required',
//                          message: '必填！'
//                      },
//                      {
//                          type: 'stringLength',
//                          max: 1000,
//                          min: 0,
//                          message: '长度超限，最长为1000！'
//                      },
//                  ]

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
                  dataField: 'cCludecom',
                  label: {
                      text: '需方'
                  },
                  editorType: 'dxSelectBox',
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
                  },
                  ],
                  editorOptions: {
                      dataSource: comp_Cludecom,
                      valueExpr: 'cCludecom',
                      displayExpr: 'cCludecom',
                      searchEnabled: true,
                      showClearButton: true,
                      placeholder: '请选择',
                      onValueChanged: function (e) {
                          console.log(e.value)
                          if (e.value == null || e.value == "") {
                              $('#textarea6').dxForm('instance').option("formData", new Object)
                              return;
                          }

                          msg = {
                              ver: '53cc62f6122a436083ec083eed1dc03d',
                              session: '42f5c0d7178148938f4fda29460b815a',
                              tag: {},
                              data: {
                              	cCludecom: null
                              },
                          };
                          msg.data.cCludecom = e.value;
//   						console.log(msg.data.cCludecom)
                          msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
                          //../../tdhc_cgsys/ZZ_01/getCompInfo
                          $.ajax({
                              url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/ZZ_01/getCompInfo'),
                              dataType: 'json', //返回格式为json           
                              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                              type: 'post', //请求方式 get 或者post ,         
                              contentType: 'application/json',
                              success: function (data) {
                            	  console.log(data.data[0])
//                                  //单位名称
//                                  $('#textarea6').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);
//
//                                  //单位地址
//                                  $('#textarea6').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cAddressr);
//
//                                  //电话
//                                  $('#textarea6').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cPhoner);
//
//                                  //传真
//                                  $('#textarea6').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cFaxno);
//
//                                  //开户行
//                                  $('#textarea6').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cBankname);
//
//                                  //账号
//                                  $('#textarea6').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cAccountno);
//
//                                  //税号
//                                  $('#textarea6').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cTaxnumbe);
//                                  
                                //单位名称
                                  $('#textarea6').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);

                                  //单位地址
                                  $('#textarea6').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cComaddress);

                                  //电话
                                  $('#textarea6').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cComphone);

                                  //传真
                                  $('#textarea6').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cComfaxno);

                                  //开户行
                                  $('#textarea6').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cCombankname);

                                  //账号
                                  $('#textarea6').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cComaccountno);

                                  //税号
                                  $('#textarea6').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cComtaxnumber);
                                  //签订地址
                                  $('#addForm4').dxForm('instance').getEditor('cSignplace').option('value', data.data[0].cSw01);

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
                  },
              },
              {
                  dataField: 'cSupplier',
                  label: {
                      text: '供方'
                  },
                  editorType: 'dxSelectBox',
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
                  },
                  ],
                  editorOptions: {
                      dataSource: cont_supplier,	
                      valueExpr: 'cSupplier',
                      displayExpr: 'cSupplier',
                      searchEnabled: true,
                      showClearButton: true,
                      placeholder: '请选择',
                      onValueChanged: function (e) {
                    	  let dhcd = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cSw20;
                      	let supplier = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cSupplier;
                          if (e.value == null || e.value == "") {
                              $('#textarea5').dxForm('instance').option("formData", new Object)
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
                          msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
                          //../../tdhc_cgsys/DZ_08/getSupplierInfo
                          $.ajax({
                              url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/getSupplierInfo'),
                              dataType: 'json', //返回格式为json           
                              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                              type: 'post', //请求方式 get 或者post ,         
                              contentType: 'application/json',
                              success: function (data) {
//                                  console.log(data.data)
                            	  supperData2 = data.data[0];
                                  //单位名称
                                  $('#textarea5').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
                                  //单位地址
                                  $('#textarea5').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
                                  //电话
                                  $('#textarea5').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
                                  //传真
                                  $('#textarea5').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);
                                  if(supplier != e.value){
                                 	 //开户行
                                     $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);

                                     //账号
                                     $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);
                                     $('#addForm4').dxForm('instance').getEditor('cSw20').option('value','cd');
                                     
                                 }else{
                                 	if(dhcd === 'dh'){
                                   	  //开户行
                                       $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cSw06);

                                       //账号
                                       $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cSw02);
                                       $('#addForm4').dxForm('instance').getEditor('cSw20').option('value','dh');
                                   }else{
                                   	 //开户行
                                       $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);

                                       //账号
                                       $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);
                                       $('#addForm4').dxForm('instance').getEditor('cSw20').option('value','cd');
                                   }
                                 }
                                  //税号
                                  $('#textarea5').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

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
              {
                  dataField: 'cSw20',
                  label: {
                      text: '账户类型'
                  },
                  editorType: 'dxSelectBox',
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
	                    },
	                ],
	                editorOptions: {
                      dataSource: dhcd,
                      valueExpr: 'cSubitemid',
                      displayExpr: 'cSubitemdes',
                      searchEnabled: true,
                      showClearButton: true,
                      placeholder: '请选择',
                      onValueChanged: function (e) {
                      	console.log(e.value)
                          if (e.value == null || e.value == "") {
                              $('#textarea5').dxForm('instance').option("formData", new Object);
                              return;
                          }
//                        let cSupplier = $('#textarea2').dxForm('instance').option('formData').cSupplier;
//                        if(cSupplier == null || cSupplier==undefined ||cSupplier == ""){
//                        	 DevExpress.ui.notify('请先选择对应的供应商！！！', 'warning', 4000);
//                        	addIns2_form.getEditor('cSw20').option('value','');
//                        	 return ;
//                        }
                      	if(supperData2 == undefined){
                      		return;
                      	}
                      	
                       if(e.value === 'dh'){
                      	 if(supperData2.cSw06 == null || supperData2.cSw02 == null){
                            	 DevExpress.ui.notify('请先去维护该供应商的承兑信息！！！', 'warning', 5000);
                            	 $('#addForm4').dxForm('instance').getEditor('cSw20').option('value', 'cd');
                            	 return ;
                            }	else{
                          	//开户行
                          	  $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', supperData2.cSw06);
                          	  //账号
                          	  $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cSw02);
                            }
                       }   
                       if(e.value === 'cd'){
                      	 if(supperData2.cBankname == null || supperData2.cAccountno == null){
                            	 DevExpress.ui.notify('请先去维护该供应商的电汇的信息！！！', 'warning', 5000);
                            	 return ;
                            }	else{
                          	//开户行
                          	  $('#textarea5').dxForm('instance').getEditor('cBankname').option('value', supperData2.cBankname);
                          	  //账号
                          	  $('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cAccountno);
                            }
                       }
                       if(e.value === 'dhcd'){
                       	if(supperData2.cSw07 == null || supperData2.cSw09 == null){
                       		DevExpress.ui.notify('请先去维护该供应商的电汇行号2和电汇账号2！！！', 'warning', 5000);
                       	 $('#addForm4').dxForm('instance').getEditor('cSw20').option('value', 'cd');
                       		return ;
                       	}	else{
                       		//开户行
                       		$('#textarea5').dxForm('instance').getEditor('cBankname').option('value', supperData2.cSw07);
                       		//账号
                       		$('#textarea5').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cSw09);
                       	}
                       }
                       
//                        console.log(supperData.cSw01);
                        
//                          msg = {
//                              ver: '53cc62f6122a436083ec083eed1dc03d',
//                              session: '42f5c0d7178148938f4fda29460b815a',
//                              tag: {},
//                              data: {
//                                  cSupplier: null
//                              },
//                          };
//                        msg.data.cDhcd = e.value;
//                        msg.data.cSupplier = cSupplier;
//                          $.ajax({//../../tdhc_cgsys/DZ_08/getSupplierInfo
//                              url: Cake.Piper.getAuthUrl(''),
//                              dataType: 'json', //返回格式为json           
//                              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                              type: 'post', //请求方式 get 或者post ,         
//                              contentType: 'application/json',
//                              success: function (data) {
//                              	supperData = data.data[0];
//                                  console.log(data.data)
                                  //单位名称
//                                  $('#textarea2').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
//
//                                  //单位地址
//                                  $('#textarea2').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
//
//                                  //电话
//                                  $('#textarea2').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
//
//                                  //传真
//                                  $('#textarea2').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                                  //开户行
//                                  $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
//
//                                  //账号
//                                  $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                                  //税号
//                                  $('#textarea2').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

//                              },
//                              error: function () {
//                                  DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                  cake.Ui.LoadPanel.close();
//                              }
//                          })
                      }

                  },
              },
//              {
//                  dataField: 'cDr',
//                  label: {
//                      text: '预计到货时间'
//                  },
//                  editorType: 'dxDateBox',
//                  editorOptions: {
//                      displayFormat: 'yyyy-MM-dd',
//                      type: 'datetime',
//                  },
//                  validationRules: [{
//                      type: 'required',
//                      message: '必填！'
//                  },
//              ]
//              },
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
          {
              location: "before",
              locateInMenu: 'auto',
              widget: "dxButton",
              options: {
                  height: "auto",
                  width: "auto",
                  icon: 'plus',
                  text: '提交',
                  onClick: function (e) {

                      let cconnu = $('#addForm4').dxForm('instance').option('formData').cConnum;
                      if (cconnu == "" || cconnu == undefined || cconnu == null) {
                          DevExpress.ui.notify('请填写合同编号。', 'error', 3000);
                          return
                      }
                      
                      let cContype = $('#contract_type4').dxForm('instance').option('formData').cContype;
                      if (cContype == "" || cContype == undefined || cContype == null) {
                          DevExpress.ui.notify('请选择合同模板类型。', 'error', 3000);
                          return
                      }
                      
//                      let cDelivery = $('#deadline4').dxForm('instance').option('formData').cDelivery;
//                      if (cDelivery == "" || cDelivery == undefined || cDelivery == null) {
//                          DevExpress.ui.notify('请选择交货期限！！！', 'error', 3000);
//                          return
//                      }else{
//                    	  if(cDelivery === 'qx03'){
//                    		  let cDeliverytime = $('#deadline4').dxForm('instance').option('formData').cDeliverytime;
//                              if (cDeliverytime == "" || cDeliverytime == undefined || cDeliverytime == null) {
//                                  DevExpress.ui.notify('请录入交货日期！！！', 'error', 3000);
//                                  return
//                              }
//                    	  }else{
//                    		  let cDeliveryday = $('#deadline4').dxForm('instance').option('formData').cDeliveryday;
//                              if (cDeliveryday == "" || cDeliveryday == undefined || cDeliveryday == null) {
//                                  DevExpress.ui.notify('请录入交货天数！！！', 'error', 3000);
//                                  return
//                              }
//                    	  }  	  
//                      }
                      let cDelivdate = $('#deadline4').dxForm('instance').option('formData').cDelivdate;
                      if (cDelivdate == "" || cDelivdate == undefined || cDelivdate == null) {
                    	  DevExpress.ui.notify('请输入交货期限！！！', 'error', 3000);
                    	  return
                      }
                      let cDelivplace = $('#deadline4').dxForm('instance').option('formData').cDelivplace;
                      if (cDelivplace == "" || cDelivplace == undefined || cDelivplace == null) {
                          DevExpress.ui.notify('请选择交货地点！！！', 'error', 3000);
                          return
                      }
                      let cPayway = $('#pice4').dxForm('instance').option('formData').cPayway;
                      if (cPayway == "" || cPayway == undefined || cPayway == null) {
                          DevExpress.ui.notify('请输入付款方式！！！！', 'error', 3000);
                          return
                      }
                      let cBankname = $('#textarea5').dxForm('instance').option('formData').cBankname;
                      if (cBankname == "" || cBankname == undefined || cBankname == null) {
                          DevExpress.ui.notify('供应商开户行不能为空！！！！', 'error', 3000);
                          return
                      }
                      let cAccountno = $('#textarea5').dxForm('instance').option('formData').cAccountno;
                      if (cAccountno == "" || cAccountno == undefined || cAccountno == null) {
                          DevExpress.ui.notify('供应商账号不能为空！！！！', 'error', 3000);
                          return
                      }
                      let cZqconnum = $('#contract_type4').dxForm('instance').option('formData').cZqconnum;
                      let cExporter =  $('#contract_type4').dxForm('instance').option('formData').cExporter;
                      msg = {
                          ver: '53cc62f6122a436083ec083eed1dc03d',
                          session: '42f5c0d7178148938f4fda29460b815a',
                          tag: {},
                          data: {
                          },
                      };
                      msg.data.tpCgcontractmt= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0]
                      console.log(msg.data.tpCgcontractmt)
                      //合同主表信息
                      msg.data.tpCgcontractmtt = $('#addForm4').dxForm('instance').option('formData');
                      //条框
                      msg.data.clause_M1S1 = $('#clauseForm4').dxForm('instance').option('formData');
                      //合同物资信息
                      msg.data.tpCgorderRequest = $('#addmoni4').dxDataGrid('instance')._options.dataSource;
                      
                      
//                      //交货期限                 
//                      msg.data.contractmtt = $('#deadline4').dxForm('instance').option('formData');
//                      //交货地点
//                      msg.data.delInformation = $('#deadline41').dxForm('instance').option('formData');
                    //交货期限    交货地点
                      msg.data.delInformation = $('#deadline4').dxForm('instance').option('formData');
                      
                      
                      //付款方式
                      msg.data.paywayRequest = $('#pice4').dxForm('instance').option('formData');
                      //供应商
                      msg.data.tbSupplier = $('#textarea5').dxForm('instance').option('formData');
                      //需方
                      msg.data.tbCludecompany = $('#textarea6').dxForm('instance').option('formData');
                      //合同条款类型
                      msg.data.cContype = $('#contract_type4').dxForm('instance').option('formData').cContype;
                      msg.data.cZqconnum = $('#contract_type4').dxForm('instance').option('formData').cZqconnum;
//                      msg.data.cExporter = $('#contract_type4').dxForm('instance').option('formData').cExporter;
//                      console.log(JSON.stringify(msg))
                      $.ajax({
                      	//
                          url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/updateContractU'),
                          dataType: 'json', //返回格式为json           
                          async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                          data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                          type: 'post', //请求方式 get 或者post ,         
                          contentType: 'application/json',
                          success: function (data) {
                              let select = data.msg
                              if (data.errcode == 60) {
                                  DevExpress.ui.notify(select, 'info', 3000);
                                  cake.Ui.LoadPanel.close();
//                                  console.log(data.msg)
                              }
                              if (data.errcode == 30) {
                                  DevExpress.ui.notify(select, 'warning', 3000);
                                  cake.Ui.LoadPanel.close();
                              }
                              if (data.errcode == 0) {
                                  DevExpress.ui.notify(select, 'success', 3000);
//                                  console.log(data.msg)
                                  cake.Ui.LoadPanel.close();
                                  S1S21_SSRT();
                            		M1S11_serDel();
                            		addIns2.hide();
                              }
//                              	S1S21_SSRT();
//                          		M1S11_serDel();
//                          		/*initLoad16();
//                          		contact_Type = [];*/
////            					console.log(contact_Type);
//                          		addIns2.hide();
                          },
                          error: function () {
                              DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);

                          }
                      })
                      // }

                  }
              }
          },
      ];
      $("#addmoni4").dxDataGrid({
          // 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
          dataSource: "data/customers.json",
          dataSource: addGang,
          columnResizingMode: "widget",
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
          paging: {
              enabled: false
          },
          editing: {
//              mode: "batch",
        	  mode: "cell",
              allowUpdating: true,
          },
          selection: {
//              mode: "multiple"
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
//          	{
//                  dataField: 'cOrdernum',
//                  caption: '请购单号',
//                  width: 250,
//                  alignment: 'center',
//              },
        	   {
                   dataField: 'number',
                   caption: '序号',
                   width: 50,
                   alignment: 'center',
                   allowEditing: false,
               },
              {
                  dataField: 'cGoodsname',
                  caption: '物资名称',
                  width: 200,
                  alignment: 'center',
                  allowEditing: false,
              },

              {
                  dataField: 'cCuspec',
                  caption: '规格型号',
                  width: 120,
                  alignment: 'center',
                  allowEditing: false,
              },
              {
                  dataField: 'cUnit',
                  caption: '单位',
                  width: 50,
                  alignment: 'center',
                  allowEditing: false,
              },
              {
                  dataField: 'cSw08',
                  caption: '报关物资名称',
                  width: 120,
                  alignment: 'center',
                  allowEditing: true,
                  
              },
              {
                  dataField: 'cSpec',
                  caption: '报关物资规格',
                  width: 120,
                  alignment: 'center',
                  allowEditing: true,
              },

              {
                  dataField: 'cUnitspec',
                  caption: '报关单位',
                  width: 100,
                  alignment: 'center',
                  allowEditing: true,
              },
              {
                  dataField: 'cGoodsnum',
                  caption: '订购数量',
                  width: 60,
                  allowEditing: true,
                  alignment: 'center',

                  setCellValue: function (newData, value, currentRowData) {
                     
                  	newData.cGoodsnum = value;
//                  	console.log(VB_cPrice);
                  	// 数量
                  	VB_cNum = value;
                  	var cPrice1 = currentRowData.cPrice;//试用
                  	// // 总价
                  	VB_cSumprice = newData.cGoodsnum * cPrice1;
                  	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                  	newData.cSumprice = newData.cGoodsnum * cPrice1;
                  	newData.cSumprice = Sumprice;
                  }
              },
              {
                  dataField: 'cPrice',
                  caption: '含税单价',
                  width: 80,
                  alignment: 'center',
                  setCellValue: function (newData, value, currentRowData) {
                  	newData.cPrice = value;
                  	// 单价
                  	VB_cPrice = value;
                  	var cNum2 = currentRowData.cGoodsnum;//试用
//                  	console.log(cNum2);
                  	// 总价
                  	VB_cSumprice = newData.cPrice * cNum2;
                  	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                  	newData.cSumprice = newData.cPrice * cNum2;
                	newData.cSumprice = Sumprice;
                  }
              },
              {
                  dataField: 'cSumprice',
                  caption: '含税总价',
                  width: 100,
                  allowEditing: true,
                  alignment: 'center',

              },
              {
                  dataField: 'cRemark',
                  caption: '备注',
//                  alignment: 'center',
//                  width: 100,
              },
          ],
          summary: {
              // 普通列求和
              totalItems: [{
                  column: 'cSumprice', //计算哪列的值
                  showInColumn: "cGoodsname", //显示在哪列
                  displayFormat: "合计人民币:{0}", //显示格式
                  // valueFormat: "currency",
                  valueFormat: "fixedPoint",
                  precision: 2,
                  summaryType: "sum" ,//汇总类型--运算方式
                  customizeText: function (e) {
//                  console.log(e.value)
                     	var num = e.value;
                       	num = num.toFixed(2);
                       	return '合计民币:'+num;
                  }
              }],
          },
      })

      //单条修改
//      function update_fun() {
//          msg = {
//              ver: '53cc62f6122a436083ec083eed1dc03d',
//              session: '42f5c0d7178148938f4fda29460b815a',
//              tag: {},
//              data: {
//                  cgQ003S1s2: {
//
//                  }
//              },
//          };
//          msg.data.cgQ003S1s2 = Dup_Item;
//
//          // 单价修改
//          if (VB_cPrice == null) {
//
//          } else {
//              msg.data.cgQ003S1s2.cPrice = VB_cPrice;
//          }
//
//          // 总价修改
//          if (VB_cSumprice == null) {
//
//          } else {
//              msg.data.cgQ003S1s2.cSumprice = VB_cSumprice;
//          }
//
//          $.ajax({
//              url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/modifyTpCgorderst'),
//              dataType: 'json', //返回格式为json           
//              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//              type: 'post', //请求方式 get 或者post ,         
//              contentType: 'application/json',
//              success: function (data) {
//                  console.log(data)
//                  // 修改成功后为全局的变量设置为空
//                  //    VB_cPricePer = null;
//                  //    VB_cSumprice = null;
//                  //    VB_cComno = null;
//                  //    VB_cOrdertime = null;
//                  //    VB_cDeltime = null;
//                  //    VB_cAogtime = null;
//                  //    VB_cProvider = null;
//                  //    VB_cRemark = null;
//                  //    M1S11_serDel()
//
//
//              },
//              error: function () {
//                  DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//              }
//          })
//      }
      
      
      
//      ss = {
//	       		dataField: 'cDeliveryday',
//		       		label: {
//		       			text: '填天数即可',
//		       		},
//		       		editorOptions:{		
//		       			width: 150,
//		       			placeholder:'天数',
//		       		},
//		       		
//		       		validationRules: [{
//		           type: 'required',
//		           message: '必填！'
//		       	 	},
//		       		{
//		       			type: 'stringLength',
//		       			max: 11,
//		       			min: 0,
//		       			message: '长度超限，最长为11！'
//		       		},
//		       		],   	
//		       	},
//      sss = [
//    	   {
//         		dataField: 'cDelivery',
//         		label: {
//         			text: '1.交货期限'
//         		},
//         		editorType: 'dxSelectBox',
//         		editorOptions: {
//         			dataSource: jhqx,
//         			valueExpr: 'cSubitemid',
//         			displayExpr: 'cSubitemdes',
//         			searchEnabled: true,
//         			showClearButton: true,
//         			//以上完成对没有联动数据源配置
//         			//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//         			// dataSource: variabl,
//         			// valueExpr: 'id',
//         			// displayExpr: 'value',
//         			// showClearButton: true,
//         			placeholder: '请选择',
////         			width: 250,
//         			onValueChanged:function(e){
//         				var Terms = $('#deadline4').dxForm('instance').getEditor('cDelivery').option('value')
//         				// console.log(Terms)
//         				if (Terms === 'qx03'){
//         					var aa = $('#deadline4').dxForm('instance').option()
//         					
//         					
//                                   ss={
//                                       dataField: 'cDeliverytime',
//                                       label: {
//                                           text: '填日期即可',
//                                       },
//                                       editorType: 'dxDateBox',
//                                       validationRules: [{
//                                           type: 'required',
//                                           message: '必填！'
//                                       },
//                                       {
//                                           type: 'stringLength',
//                                           max: 4000,
//                                           min: 0,
//                                           message: '长度超限，最长为4000！'
//                                           },
//                                       ]
//                                   }
//         					aa.items=[aa.items[0],ss]
//                                           console.log(ss)
//                                   $('#deadline4').dxForm('instance').repaint()
//                                   
//                               }else{
////                               	$('.dx-item .dx-box-item').css('display':'none')
//                               	var aa = $('#deadline4').dxForm('instance').option()
//                                   ss = {
//                                           dataField: 'cDeliveryday',
//                                           label: {
//                                               text: '填天数即可',
//                                           },
//                                           editorOptions:{		
//                                               width: 150,
//                                               placeholder:'天数',
//                                           },
//                                           
//                                           validationRules: [{
//                                           type: 'required',
//                                           message: '必填！'
//                                           },
//                                           {
//                                               type: 'stringLength',
//                                               max: 11,
//                                               min: 0,
//                                               message: '长度超限，最长为11！'
//                                           },
//                                           ],   	
//                                               }
//                                   aa.items=[aa.items[0],ss]
//                                   $('#deadline4').dxForm('instance').repaint()
//                               }
//                               $('#deadline4').dxForm('instance').repaint()
//                           }
//
//         		},
//   				
//         		validationRules: [{
//         			type: 'required',
//         			message: '必填！'
//         		},
//         		{
//         			type: 'stringLength',
//         			max: 4000,
//         			min: 0,
//         			message: '长度超限，最长为4000！'
//         		},
//         		]
//         	},
//         	ss,
//             
//         ]
//      // 交货期限、交货地点
//      $('#deadline4').dxForm({
//          formData: adddatapo,
//          validationGroup: validationGroupName,
//          colCount: 2,
//          items: sss,
//      }).dxForm('instance');
//      // 交货地点
//      $('#deadline41').dxForm({
//    	  formData: adddatapo,
//    	  validationGroup: validationGroupName,
//    	  colCount: 1,
//    	  items: [
//    		  
//    	  {
//    		  dataField: 'cDelivplace',
//    		  label: {
//    			  text: '2.交货地点'
//    		  },
//    		  editorType: 'dxSelectBox',
//    		  validationRules: [{
//    			  type: 'required',
//    			  message: '必填！'
//    		  },
//    		  {
//    			  type: 'stringLength',
//    			  max: 1000,
//    			  min: 0,
//    			  message: '长度超限，最长为1000！'
//    		  },
//    		  ],
//    		  editorOptions: {
//    			  dataSource: jhdd1,
//    			  valueExpr: 'cSubitemid',
//    			  displayExpr: 'cSubitemdes',
//    			  searchEnabled: true,
//    			  showClearButton: true,
//    			  //以上完成对没有联动数据源配置
//    			  //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//    			  // dataSource: variabl,
//    			  // valueExpr: 'id',
//    			  // displayExpr: 'value',
//    			  // showClearButton: true,
//    			  placeholder: '请选择',
//    		  },
//    	  },
//    	  ]
//      }).dxForm('instance');
      
      
      
      // 交货期限、交货地点
      $('#deadline4').dxForm({
    	  formData: adddatapo,
    	  validationGroup: validationGroupName,
    	  colCount: 1,
    	  items: [
    		  {
                  dataField: 'cDelivdate',
                  label: {
                      text: '1.交货期限'
                  },
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
                      },
                  ],
                  editorOptions: {
                      showClearButton: true,
                      value: '自双方合同盖章生效之日起 *日内。'
                  }, 
              },
    	  {
    		  dataField: 'cDelivplace',
    		  label: {
    			  text: '2.交货地点'
    		  },
    		  editorType: 'dxSelectBox',
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
    		  ],
    		  editorOptions: {
    			  dataSource: jhdd1,
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
    	  },
    	  ]
      }).dxForm('instance');
      // 付款方式
      $('#pice4').dxForm({
          formData: adddatapic,
          validationGroup: validationGroupName,
          colCount: 1,
          items: [{
              dataField: 'cPayway',
              label: {
                  text: '3.付款方式'
              },
              editorOptions: {
                  //以上完成对没有联动数据源配置
                  //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                  // dataSource: variabl,
                  // valueExpr: 'id',
                  // displayExpr: 'value',
                  // showClearButton: true,
                  showClearButton: true
              },
              validationRules: [{
                  type: 'required',
                  message: '必填！'
              },
              {
                  type: 'stringLength',
                  max: 4000,
                  min: 0,
                  message: '长度超限，最长为4000！'
              },
          ]
          }, ]
      }).dxForm('instance');
      
   	$('#clauseForm4').dxForm({
   		formData: adddata,
   		validationGroup: validationGroupName,
   		colCount: 1,
   		items: [
   			{
   				dataField: 'cSw01TpCgclausedata',
   				label: {
   					text: '扩展字段1',
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					visible:false,
//   					readOnly:true,
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					visible:false,
   					readOnly:true,
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
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
   					searchEnable: true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '',
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
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录1',
   				},
   				validationRules: [{
   					type: 'stringLength', max: 4000, min: 0,
   					message: '长度超限，最长为200！'
   				},]
   			},
   			{
   				dataField: 'cSw43TpCgclausedata',
   				label: {
   					text: '扩展字段43',
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录2',
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录2',
   				},
   				validationRules: [{
   					type: 'stringLength', max: 4000, min: 0,
   					message: '长度超限，最长为200！'
   				},]
   			},
   			{
   				dataField: 'cSw45TpCgclausedata',
   				label: {
   					text: '扩展字段45',
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录2',
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录2',
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录2',
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录2',
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录2',
   				},
   				validationRules: [{
   					type: 'stringLength', max: 4000, min: 0,
   					message: '长度超限，最长为200！'
   				},]
   			},
   			{
   				dataField: 'cSw51TpCgclausedata',
   				label: {
   					text: '扩展字段51',
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
   					placeholder: '备注修改的条款记录',
   				},
   				validationRules: [{
   					type: 'stringLength', max: 4000, min: 0,
   					message: '长度超限，最长为200！'
   				},]
   			},
   			

   		]
   	}).dxForm('instance')


 $('#textarea6').dxForm({
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
//                        readOnly: true,
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

      $('#textarea5').dxForm({
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
//                      readOnly: true,
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
//                      readOnly: true,
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
                      //readOnly: true,
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
                      //readOnly: true,
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
                    //  readOnly: true,
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
                     // readOnly: true,
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
                      //readOnly: true,
                  },
              },
          ]
      }).dxForm('instance')
   }
	
    function UpdateS_moni() {
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
                             $('#textarea7').dxForm('instance').option("formData", new Object)
                             return;
                         }

                         msg = {
                             ver: '53cc62f6122a436083ec083eed1dc03d',
                             session: '42f5c0d7178148938f4fda29460b815a',
                             tag: {},
                             data: {
                             	cCludecom: null
                             },
                         };
                         msg.data.cCludecom = e.value;
//  						console.log(msg.data.cCludecom)
                         msg.data.cConnum = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cConnum;
//../../tdhc_cgsys/ZZ_01/getCompInfo 签订公司维护
                         // ../../tdhc_cgsys/CG_MNHT/getTbContractCom 本合同下的签订公司信息
                         $.ajax({
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/getTbContractCom'),
                             dataType: 'json', //返回格式为json           
                             async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                             type: 'post', //请求方式 get 或者post ,         
                             contentType: 'application/json',
                             success: function (data) {
                            	 console.log(data.data.tbCgcontract[0])
                                 //单位名称
                                 $('#textarea7').dxForm('instance').getEditor('cCludecom').option('value', data.data.tbCgcontract[0].cCludecom);

                                 //单位地址
                                 $('#textarea7').dxForm('instance').getEditor('cComaddress').option('value', data.data.tbCgcontract[0].cAddressr);

                                 //电话
                                 $('#textarea7').dxForm('instance').getEditor('cComphone').option('value', data.data.tbCgcontract[0].cPhoner);

                                 //传真
                                 $('#textarea7').dxForm('instance').getEditor('cComfaxno').option('value', data.data.tbCgcontract[0].cFaxno);

                                 //开户行
                                 $('#textarea7').dxForm('instance').getEditor('cCombankname').option('value', data.data.tbCgcontract[0].cBankname);

                                 //账号
                                 $('#textarea7').dxForm('instance').getEditor('cComaccountno').option('value', data.data.tbCgcontract[0].cAccountno);

                                 //税号
                                 $('#textarea7').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data.tbCgcontract[0].cTaxnumbe);
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
                             $('#textarea8').dxForm('instance').option("formData", new Object)
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
                         console.log(msg.data.cSupplier)
                         msg.data.cConnum = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0].cConnum;
                         //../../tdhc_cgsys/DZ_08/getSupplierInfo  供应商维护信息中的信息
                         //../../tdhc_cgsys/CG_MNHT/getTbContractCom  本合同下的信息
                         $.ajax({
                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_MNHT/getTbContractCom'),
                             dataType: 'json', //返回格式为json           
                             async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                             type: 'post', //请求方式 get 或者post ,         
                             contentType: 'application/json',
                             success: function (data) {
//                                 console.log(data.data)
                                 //单位名称
                                 $('#textarea8').dxForm('instance').getEditor('cSupplier').option('value', data.data.tbCgcontract[0].cSupplier);
                                 //单位地址
                                 $('#textarea8').dxForm('instance').getEditor('cSupaddress').option('value', data.data.tbCgcontract[0].cSupaddress);
                                 //电话
                                 $('#textarea8').dxForm('instance').getEditor('cSupphone').option('value', data.data.tbCgcontract[0].cSupphone);
                                 //传真
                                 $('#textarea8').dxForm('instance').getEditor('cFaxno').option('value', data.data.tbCgcontract[0].cFaxnor);
                                 //开户行
                                 $('#textarea8').dxForm('instance').getEditor('cBankname').option('value', data.data.tbCgcontract[0].cBanknamer);
                                 //账号
                                 $('#textarea8').dxForm('instance').getEditor('cAccountno').option('value', data.data.tbCgcontract[0].cAccountnor);
                                 //税号
                                 $('#textarea8').dxForm('instance').getEditor('cTaxnumber').option('value', data.data.tbCgcontract[0].cTaxnumber);
                            
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
    	 {
             location: "before",
             locateInMenu: 'auto',
             widget: "dxButton",
             options: {
                 height: "auto",
                 width: "auto",
                 icon: 'plus',
                 text: '结算协议',
                 onClick: function () {
addIns31=$('#addmotai31').dxPopup({
	'visible': true,  //设置属性不可见
	height:"100vh",  //设置高度
	width: "100vw",  //设置宽度
}).dxPopup('instance');   

let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
if(dataGrid.cStatexxk !='xxk06'){
	DevExpress.ui.notify('该合同未生成正式合同，不能进行结算协议！！！！！', 'info', 2000);
	addIns31.hide()
	return;
}
	//签订公司
	console.log(dataGrid.cSupplier);
	tcCludecom = dataGrid.cCludecom;
	console.log(tcCludecom)
	let matchedItem = qdgs.find(item => item.cSubitemid == tcCludecom);
 if (matchedItem == null || matchedItem == undefined) {
     return "";
 } else {
	 tcCludecom = matchedItem.cSubitemdes
// 	console.log(tcCludecom);
//     return matchedItem.cSubitemdes;
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
// console.log(dataGrid.cCludetime)
// console.log(new Date(dataGrid.cCludetime))
// console.log(new Date(dataGrid.cCludetime).Format("yyyy-MM-dd"))
document.getElementById('cCludetime').value = new Date(dataGrid.cCludetime).Format("yyyy年MM月dd日");
document.getElementById('cConnum').value = dataGrid.cConnum;

$('#addcontract').dxButton({
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
		const cSw02=document.getElementById('cSw02').value;
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
		addIns31.hide()
	}
})
                 }
             }
         },
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
         {
         location: "before",
         locateInMenu: 'auto',
         widget: "dxButton",
         options: {
             height: "auto",
             width: "auto",
             icon: 'print',
             text: '结算协议打印',
             onClick: function () {
            	 console.log("结算协议打印")
            	 let msgdate = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
					let cConnum = msgdate.cConnum;
					console.log(msgdate.cConnum)
						let url = "http://10.107.3.254:8008/WebReport/ReportServer?reportlet=account.cpt&cConnum=" + cConnum;
						window.open(url, "_blank");

             }
         }
     },
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
         height: 300,
//         paging: {
//             enabled: false
//         },
         editing: {
             mode: "batch",
//       	  mode: "cell",
             allowUpdating: false
         },
         selection: {
//             mode: "multiple",
             mode: "single"
         },
         loadPanel: {
             enabled: true,
             text: '请稍等片刻...'
         },
        /* onToolbarPreparing: function (e) {
             operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

         },*/
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
//             {
//                 dataField: 'cUnit',
//                 caption: '单位',
//                 width: 50,
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
                 	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                 	newData.cSumprice = newData.cGoodsnum * cPrice1;
                	newData.cSumprice = Sumprice;
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
                 	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                 	newData.cSumprice = newData.cPrice * cNum2;
                 	newData.cSumprice = Sumprice;
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
                		var num = e.value;
                       	num = num.toFixed(2);
                       	return '合计民币:'+num;
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
//  					placeholder: '备注修改的条款记录1',
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
//  					placeholder: '备注修改的条款记录1',
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
//  					placeholder: '备注修改的条款记录1',
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
//  					placeholder: '备注修改的条款记录1',
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
//  					placeholder: '备注修改的条款记录1',
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
//  					placeholder: '备注修改的条款记录1',
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
//  					placeholder: '备注修改的条款记录1',
  					readOnly:true,
  				},
  				validationRules: [{
  					type: 'stringLength', max: 4000, min: 0,
  					message: '长度超限，最长为200！'
  				},]
  			},
  		]
  	}).dxForm('instance')


$('#textarea7').dxForm({
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

     $('#textarea8').dxForm({
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
    
    
  //物资导出
    addEditPopup = $("#add-edit-popup-container").dxPopup({
        deferRendering: false,
//        height: 450,
//        width: '100%',
        fullScreen: true

    }).dxPopup("instance");
    addEditForm = $("#add-edit-form-container").dxForm({
        formData: outForm,
        width: "100%",
        items: [
            {
                itemType: "group",
                items: [{
                        template: $("#addGangGrid")
                    },
                ]
            },
        ]

    }).dxForm('instance')
    $("#addGangGrid").dxDataGrid({
        dataSource: addGang,
        columnResizingMode: "widget",
        columnAutoWidth: false,
        showBorders: true,
        allowColumnResizing: false,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        noDataText: '',
        width: '100%',
        height: '100%',
        "export": {
            enabled: true,
            fileName: "物资导出",
            // allowExportSelectedData: true
        },
        columnChooser: {
            enabled: true,
            mode: "select"
        },
        paging: {
            enabled: false
        },
        editing: {
            mode: "batch",
            allowUpdating: false
        },
        selection: {
            // mode: "multiple"
            mode: "single"
        },
        loadPanel: {
            enabled: true,
            text: '请稍等片刻...'
        },
        columns: [
        {
            dataField: 'cConnum',
            caption: '合同号',
        },
        {
        	dataField: 'cConline',
        	caption: '合同行号',
        },
        
        {
        	dataField: 'cGoodsname',
        	caption: '原物资名称',
        },
        {
        	dataField: 'cCuspec',
        	caption: '原规格型号',
        },
        {
        	dataField: 'cUnit',
        	caption: '原单位',
        },
        {
            dataField: 'cSw08',
            caption: '报关物资名称',
        },
        {
            dataField: 'cSpec',
            caption: '报关规格型号',
        },
        {
        	dataField: 'cUnitspec',
        	caption: '报关单位',
        },

        {
        	dataField: 'cGoodsnum',
        	caption: '订货数量',
        },

        {
        	dataField: 'cPrice',
        	caption: '含税单价',
        },
        {
        	dataField: 'cRemark',
        	caption: '备注',
        },
   

    ]
    })
    
    
    
    
    
    
	
    var importPopup = $('#import-content').dxPopup({
        deferRendering: false,
        height: 200,
        width: 600,
    }).dxPopup('instance');
    var addIns21 = $('#addmotai2').dxPopup({
        //模态框增加name    
        width: 200,
        height: 70
    }).dxPopup('instance')
    $('#import_btn').dxForm({
      	width: "100%",
      	items: [{
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
      					addIns21.show();
      					$.ajax({
      						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/ExcelConSt'),
      						type: 'POST',
      						dataType: 'json',
      						contentType: "application/json; charset=utf-8",
      						data: localStorage.getItem('updata'),
      						success: function(data) {
      							addIns21.hide();
//      							console.log(data.errcode)
      							if(data.errcode==0){
	  	      							DevExpress.ui.notify(data.msg, "success", 5000);
	  	      							S1S21_SSRT()
	  	      							M1S11_serDel();
	  	      							importPopup.hide();
	  	      							$("#upInput").val("");
      							}else{
      								$("#upInput").val("");
      								DevExpress.ui.notify(data.msg, "info", 7000);
      							}
      							localStorage.clear('updata');
      						},
      						error: function (err) {
      							addIns21.hide();
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
      					importPopup.hide();
      				}
      			}
      		},
      		]
      	}, ]
      });

    var importPopup2 = $('#import-content2').dxPopup({
        deferRendering: false,
        height: 200,
        width: 600,
    }).dxPopup('instance');
    var addIns22 = $('#addmotai2').dxPopup({
        //模态框增加name    
        width: 200,
        height: 70
    }).dxPopup('instance')
    $('#import_btn2').dxForm({
      	width: "100%",
      	items: [{
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
      					addIns22.show();
      					$.ajax({//
      						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/Excelimpoet'),
      						type: 'POST',
      						dataType: 'json',
      						contentType: "application/json; charset=utf-8",
      						data: localStorage.getItem('updata'),
      						success: function(data) {
      							addIns22.hide();
//      							console.log(data.errcode)
      							if(data.errcode==0){
	  	      							DevExpress.ui.notify(data.msg, "success", 5000);
	  	      							S1S21_SSRT()
	  	      							M1S11_serDel();
	  	      							importPopup2.hide();
	  	      							$("#upInput2").val("");
      							}else if(data.errcode == 30){
      								DevExpress.ui.notify(data.msg, 'warning', 5000)							
      								S1S21_SSRT()
      								$("#upInput2").val("");
      								importPopup2.hide();
    							}else{
      								$("#upInput2").val("");
      								DevExpress.ui.notify(data.msg, "info", 7000);
      							}
      							localStorage.clear('updata');
      						},
      						error: function (err) {
      							addIns22.hide();
      							DevExpress.ui.notify("导入失败", "error", 3000);
      							$("#upInput2").val("");
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
      					importPopup2.hide();
      				}
      			}
      		},
      		]
      	}, ]
      });
    
    
    var importPopup3 = $('#import-content3').dxPopup({
        deferRendering: false,
        height: 200,
        width: 600,
    }).dxPopup('instance');
    $('#import_btn3').dxForm({
      	width: "100%",
      	items: [{
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
      					let date = localStorage.getItem('updata')
      					console.log(date)
      					console.log(JSON.parse(date))
      					console.log(JSON.parse(date).data)
      					console.log(JSON.parse(date).data.tsttlist)
      					let select;
					select = JSON.parse(date).data.tsttlist
					for(var i = 0;i<select.length;i++){
						select[i].cGoodsname = select[i].cCustoms
						select[i].cSpec = select[i].cCuspec
						select[i].cUnit = select[i].cUnitspec
					}
//					addGang.splice(0, addGang.length);
//					select.forEach(item => addGang.push(item));
//					$('#addmoni4').dxDataGrid('instance').deselectAll()
//					$('#addmoni4').dxDataGrid('instance').refresh()
					$('#addmoni41').dxDataGrid('instance').option('dataSource', select);
					importPopup3.hide();
					$("#upInput3").val("");
      				}
      			}
      		},
      		{
      			itemType: "button",
      			buttonOptions: {
      				icon: "close",
      				text: "取消",
      				onClick: function() {
      					$("#upInput3").val("");
      					importPopup3.hide();
      				}
      			}
      		},
      		]
      	}, ]
      });
	//Script ------------------------------------
//	setInterval(M1S31_serDel(),1800000);
//	setInterval(() => {
//		        M1S31_serDel();
//		    }, 1800000);
	/*setTimeout(() => {
		M1S31_serDel()
	}, 1800000);*/
    
    
//    =======选项卡========
    
    
    
    var tabPanel = $("#table3").dxTabPanel({
        height: '100%',
         items: [
         {
             title: "物资详情",
             html: $('#this-grid-container1')
         }, 
         {
             title: "附件详情",
             html: $('#this-grid-container3')
         },
         ],
         selectedIndex: 0,
         loop: false,
         animationEnabled: true,
         swipeEnabled: true,
         //若该选项设置为 true, 则在显示组件时渲染其内容。反之,则在渲染组件时同时渲染其内容。
         deferRendering: false
     }).dxTabPanel("instance");
    
    
    
    function Update_moni2() {
   	 $('#contract_type41').dxForm({
           formData: calculation,
           validationGroup: validationGroupName,
           colCount: 2,
           items: [
          	 //居中效果
          	/* {
          		 colSpan: 2,
          		 itemType: 'empty',
          		 },*/
          	 {
                   dataField: 'cContype',
                   label: {
                       text: '合同类型'
                   },
                   editorType: 'dxSelectBox',
                   validationRules: [{
                       type: 'required',
                       message: '必填！'
                   },
                   {
                       type: 'stringLength',
                       max: 4000,
                       min: 0,
                       message: '长度超限，最长为4000！'
                   },
                   ],
                   editorOptions: {
                       dataSource: contact_Type,
                       valueExpr: 'cContypeTpCgclausedata',
                       displayExpr: 'cContypeTpCgclausedata',
                       searchEnabled: true,
                       showClearButton: true,
                       placeholder: '请选择',
                       width: 200,
                       onValueChanged: function (e) {
                      	 console.log(e.value)
                           if (e.value == null || e.value == "") {
                               $('#clauseForm41').dxForm('instance').option("formData", new Object)
                               return;
                           }
                      	 msg = {
                                   ver: '53cc62f6122a436083ec083eed1dc03d',
                                   session: '42f5c0d7178148938f4fda29460b815a',
                                   tag: {},
                                   data: {
                                  	 clause_M1S1:{
                                  		 cContypeTpCgclausedata:null
                                  	 }
                                   },
                               };
                      	 msg.data.clause_M1S1.cContypeTpCgclausedata = e.value;
                      	 
                      	    $.ajax({
                                  url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/getContTypeInfo'),
                                  dataType: 'json', //返回格式为json           
                                  async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                  data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                  type: 'post', //请求方式 get 或者post ,         
                                  contentType: 'application/json',
                                  success: function (data) {
                                      console.log(data.data.clauseM1s1[0])
                                      //                                      console.log(data.data[0].cCludecom)
                                      let rowdata = data.data.clauseM1s1[0]
                                      $('#clauseForm41').dxForm('instance').option("formData", rowdata)
                                      if ($('#clauseForm41').dxForm('instance').getEditor('cSw31TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw32TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw33TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw34TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw35TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw36TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw37TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw38TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw39TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw40TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', true)
                 					 }
                 					 if ($('#clauseForm41').dxForm('instance').getEditor('cSw41TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', false)
                 					 } else {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', true)
                 					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw42TpCgclausedata').option('value') === '') {
                						 $('#clauseForm41').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', false)
                					 } else {
                						 $('#clauseForm41').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', true)
                					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw43TpCgclausedata').option('value') === '') {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', false)
               					 } else {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', true)
               					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw44TpCgclausedata').option('value') === '') {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', false)
               					 } else {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', true)
               					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw45TpCgclausedata').option('value') === '') {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', false)
               					 } else {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', true)
               					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw46TpCgclausedata').option('value') === '') {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', false)
               					 } else {
               						 $('#clauseForm41').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', true)
               					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw47TpCgclausedata').option('value') === '') {
              						 $('#clauseForm41').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', false)
   	           					 } else {
   	           						 $('clauseForm41').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', true)
   	           					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw48TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', false)
      	           					 } else {
      	           						 $('#clauseForm41').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', true)
      	           					 }
                 					if ($('#clauseForm41').dxForm('instance').getEditor('cSw49TpCgclausedata').option('value') === '') {
                 						 $('#clauseForm41').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', false)
      	           					 } else {
      	           						 $('#clauseForm41').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', true)
      	           					 }
                 					
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
                   width: 200,
                   readOnly:true
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
           ]
       }).dxForm('instance');
   	 
      addIns2_form = $('#addForm41').dxForm({
          formData: adddata,
          validationGroup: validationGroupName,
          colCount: 2,
          items: [
//          	{
//                  colSpan: 1,
//                  itemType: 'empty',
//              },
          	{
                  dataField: 'cOutconnum',
                  label: {
                      text: '外贸合同号'
                  },
                  editorType: 'dxTextBox',
                  editorOptions: {
                      searchEnable: true,
                      showClearButton: true,
                  },
//                  validationRules: [{
//                          type: 'required',
//                          message: '必填！'
//                      },
//                      {
//                          type: 'stringLength',
//                          max: 1000,
//                          min: 0,
//                          message: '长度超限，最长为1000！'
//                      },
//                  ]

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
                  dataField: 'cCludecom',
                  label: {
                      text: '需方'
                  },
                  editorType: 'dxSelectBox',
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
                      },
                  ],
                  editorOptions: {
                      dataSource: comp_Cludecom,
                      valueExpr: 'cCludecom',
                      displayExpr: 'cCludecom',
                      searchEnabled: true,
                      showClearButton: true,
                      placeholder: '请选择',
                      onValueChanged: function (e) {
                          console.log(e.value)
                          if (e.value == null || e.value == "") {
                              $('#textarea61').dxForm('instance').option("formData", new Object)
                              return;
                          }

                          msg = {
                              ver: '53cc62f6122a436083ec083eed1dc03d',
                              session: '42f5c0d7178148938f4fda29460b815a',
                              tag: {},
                              data: {
                              	cCludecom: null
                              },
                          };
                          msg.data.cCludecom = e.value;
   						console.log(msg.data.cCludecom)

                          $.ajax({
                              url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/ZZ_01/getCompInfo'),
                              dataType: 'json', //返回格式为json           
                              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                              type: 'post', //请求方式 get 或者post ,         
                              contentType: 'application/json',
                              success: function (data) {
                                  console.log(data.data)
                                  //                                      console.log(data.data[0].cCludecom)
                                  console.log(8888888);
                                  //单位名称
                                  $('#textarea61').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);

                                  //单位地址
                                  $('#textarea61').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cComaddress);

                                  //电话
                                  $('#textarea61').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cComphone);

                                  //传真
                                  $('#textarea61').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cComfaxno);

                                  //开户行
                                  $('#textarea61').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cCombankname);

                                  //账号
                                  $('#textarea61').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cComaccountno);

                                  //税号
                                  $('#textarea61').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cComtaxnumber);
                                  //签订地址
                                  $('#addForm41').dxForm('instance').getEditor('cSignplace').option('value', data.data[0].cSw01);

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
                  },
              },
              {
                  dataField: 'cSupplier',
                  label: {
                      text: '供方'
                  },
                  editorType: 'dxSelectBox',
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
                      },
                  ],
                  editorOptions: {
                      dataSource: cont_supplier,
                      valueExpr: 'cSupplier',
                      displayExpr: 'cSupplier',
                      searchEnabled: true,
                      showClearButton: true,
                      placeholder: '请选择',
                      onValueChanged: function (e) {

                          if (e.value == null || e.value == "") {
                              $('#textarea51').dxForm('instance').option("formData", new Object)
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

                          $.ajax({
                              url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/getSupplierInfo'),
                              dataType: 'json', //返回格式为json           
                              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                              type: 'post', //请求方式 get 或者post ,         
                              contentType: 'application/json',
                              success: function (data) {
//                                  console.log(data.data)
                           	   supperData2 = data.data[0];
                                  //单位名称
                                  $('#textarea51').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);

                                  //单位地址
                                  $('#textarea51').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);

                                  //电话
                                  $('#textarea51').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);

                                  //传真
                                  $('#textarea51').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                                  //开户行
                                  $('#textarea51').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);

                                  //账号
                                  $('#textarea51').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                                  //税号
                                  $('#textarea51').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

                                  addIns2_form.getEditor('cSw20').option('value','cd');
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
              {
                  dataField: 'cSw20',
                  label: {
                      text: '账户类型'
                  },
                  editorType: 'dxSelectBox',
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
                      },
                  ],
                  editorOptions: {
                      dataSource: dhcd,
                      valueExpr: 'cSubitemid',
                      displayExpr: 'cSubitemdes',
                      searchEnabled: true,
                      showClearButton: true,
                      placeholder: '请选择',
                      onValueChanged: function (e) {
                      	console.log(e.value)
                          if (e.value == null || e.value == "") {
                              $('#textarea51').dxForm('instance').option("formData", new Object);
                              return;
                          }
//                        let cSupplier = $('#textarea2').dxForm('instance').option('formData').cSupplier;
//                        if(cSupplier == null || cSupplier==undefined ||cSupplier == ""){
//                        	 DevExpress.ui.notify('请先选择对应的供应商！！！', 'warning', 4000);
//                        	addIns2_form.getEditor('cSw20').option('value','');
//                        	 return ;
//                        }
                       if(e.value === 'dh'){
                      	 if(supperData2.cSw01 == null || supperData2.cSw02 == null){
                            	 DevExpress.ui.notify('请先去维护该供应商的承兑行号和承兑账号！！！', 'warning', 4000);
                            	 addIns2_form.getEditor('cSw20').option('value','cd');
                            	 return ;
                            }	else{
                          	//开户行
                          	  $('#textarea51').dxForm('instance').getEditor('cBankname').option('value', supperData2.cSw01);
                          	  //账号
                          	  $('#textarea51').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cSw02);
                            }
                       }   
                       if(e.value === 'cd'){
                      	 if(supperData2.cBankname == null || supperData2.cAccountno == null){
                            	 DevExpress.ui.notify('请先去维护该供应商的电汇信息！！！', 'warning', 4000);
                            	 return ;
                            }	else{
                          	//开户行
                          	  $('#textarea51').dxForm('instance').getEditor('cBankname').option('value', supperData2.cBankname);
                          	  //账号
                          	  $('#textarea51').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cAccountno);
                            }
                       }
                       if(e.value === 'dhcd'){
                       	if(supperData2.cSw07 == null || supperData2.cSw09 == null){
                       		DevExpress.ui.notify('请先去维护该供应商的电汇行号2和电汇账号2！！！', 'warning', 4000);
                       		addIns2_form.getEditor('cSw20').option('value','cd');
                       		return ;
                       	}	else{
                       		//开户行
                       		$('#textarea51').dxForm('instance').getEditor('cBankname').option('value', supperData2.cSw07);
                       		//账号
                       		$('#textarea51').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cSw09);
                       	}
                       }
//                        console.log(supperData.cSw01);
                        
//                          msg = {
//                              ver: '53cc62f6122a436083ec083eed1dc03d',
//                              session: '42f5c0d7178148938f4fda29460b815a',
//                              tag: {},
//                              data: {
//                                  cSupplier: null
//                              },
//                          };
//                        msg.data.cDhcd = e.value;
//                        msg.data.cSupplier = cSupplier;
//                          $.ajax({//../../tdhc_cgsys/DZ_08/getSupplierInfo
//                              url: Cake.Piper.getAuthUrl(''),
//                              dataType: 'json', //返回格式为json           
//                              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                              type: 'post', //请求方式 get 或者post ,         
//                              contentType: 'application/json',
//                              success: function (data) {
//                              	supperData = data.data[0];
//                                  console.log(data.data)
                                  //单位名称
//                                  $('#textarea2').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
   //
//                                  //单位地址
//                                  $('#textarea2').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
   //
//                                  //电话
//                                  $('#textarea2').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
   //
//                                  //传真
//                                  $('#textarea2').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                                  //开户行
//                                  $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
   //
//                                  //账号
//                                  $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                                  //税号
//                                  $('#textarea2').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

//                              },
//                              error: function () {
//                                  DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                  cake.Ui.LoadPanel.close();
//                              }
//                          })
                      }

                  },
              },
//              {
//                  dataField: 'cDr',
//                  label: {
//                      text: '预计到货时间'
//                  },
//                  editorType: 'dxDateBox',
//                  editorOptions: {
//                      displayFormat: 'yyyy-MM-dd',
//                      type: 'datetime',
//                  },
//                  validationRules: [{
//                      type: 'required',
//                      message: '必填！'
//                  },
//              ]
//              },
          ]
      }).dxForm('instance')
      
      let operateFormS44buts = [
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
                      $("#addmoni41").dxDataGrid('instance').addRow();
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
                  	let rowsData = $("#addmoni41").dxDataGrid('instance').getSelectedRowsData();
                  	console.log(rowsData);
//                  	let dataSource = $("#addmoni41").dxDataGrid('instance').option('dataSource',adddataWcg);
                	let dataSource = $("#addmoni41").dxDataGrid('instance').option('dataSource');
                  	console.log(dataSource);
                  	let removeIndex = [];

                  	for (let index = 0; index < dataSource.length; index++) {

                  	if (rowsData.some(element => element == dataSource[index])) {
                  	removeIndex.push(index);
                  	}
                  	}
                  	removeIndex.reverse().forEach(element => dataSource.splice(element, 1));

                  	$("#addmoni41").dxDataGrid('instance').refresh()
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
                  text: '提交',
                  onClick: function (e) {

                      let cconnu = $('#addForm41').dxForm('instance').option('formData').cConnum;
                      if (cconnu == "" || cconnu == undefined || cconnu == null) {
                          DevExpress.ui.notify('请填写合同编号。', 'error', 3000);
                          return
                      }
                      
//                      let cdr = $('#addForm41').dxForm('instance').option('formData').cDr;
//                      if (cdr == "" || cdr == undefined || cdr == null) {
//                   	   DevExpress.ui.notify('请填写预计到货时间。', 'error', 3000);
//                   	   return
//                      }
                      
                      let cContype = $('#contract_type41').dxForm('instance').option('formData').cContype;
                      if (cContype == "" || cContype == undefined || cContype == null) {
                          DevExpress.ui.notify('请选择合同模板类型。', 'error', 3000);
                          return
                      }
                      
//                      let cDelivdate = $('#deadline3').dxForm('instance').option('formData').cDelivdate;
//                      if (cDelivdate == "" || cDelivdate == undefined || cDelivdate == null) {
//                          DevExpress.ui.notify('请录入交货期限！！！', 'error', 3000);
//                          return
//                      }
//                      let cDelivplace = $('#deadline3').dxForm('instance').option('formData').cDelivplace;
//                      if (cDelivplace == "" || cDelivplace == undefined || cDelivplace == null) {
//                          DevExpress.ui.notify('请选择交货地点！！！', 'error', 3000);
//                          return
//                      }
//                      let cPayway = $('#pice3').dxForm('instance').option('formData').cPayway;
//                      if (cPayway == "" || cPayway == undefined || cPayway == null) {
//                          DevExpress.ui.notify('请输入付款方式！！！！', 'error', 3000);
//                          return
//                      }
                      
                      msg = {
                          ver: '53cc62f6122a436083ec083eed1dc03d',
                          session: '42f5c0d7178148938f4fda29460b815a',
                          tag: {},
                          data: {
                          },
                      };

                     
                      //合同主表信息
                      msg.data.tpCgcontractmt = $('#addForm41').dxForm('instance').option('formData');
                      console.log(msg.data.tpCgcontractmt)
                      //条框
                      msg.data.clause_M1S1 = $('#clauseForm41').dxForm('instance').option('formData');
                      //合同物资信息
                      msg.data.tpCgorderRequest = $('#addmoni41').dxDataGrid('instance')._options.dataSource;
                      console.log(msg.data.tpCgorderRequest)
                      
                      msg.data.delInformation = $('#deadline41').dxForm('instance').option('formData');
//                      console.log(msg.data.delInformation);
                      //付款方式
                      msg.data.paywayRequest = $('#pice41').dxForm('instance').option('formData');
//                      console.log(msg.data.paywayRequest);
                       //需方
                      msg.data.tbCludecompany = $('#textarea61').dxForm('instance').option('formData');
//                      console.log(msg.data.tbCludecompany)
                    //供应商
                      msg.data.tbSupplier = $('#textarea51').dxForm('instance').option('formData');
//                      console.log(msg.data.tbSupplier)
                    //合同条款类型
                      msg.data.cContype = $('#contract_type41').dxForm('instance').option('formData').cContype;
                      msg.data.cSw10 = $('#contract_type41').dxForm('instance').option('formData').cSw10;
                      console.log(JSON.stringify(msg))
                      addIns3.show();
                      $.ajax({
                          // url: Cake.Piper.getAuthUrl('http://192.168.2.111:9999/tdhc_purchase/activiti/hdiuehnOk'),
                      	//../../tdhc_cgsys//tab/simContract        ../../tdhc_cgsys/tab/updateContract
                          url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/addContract'),
                          dataType: 'json', //返回格式为json           
                          async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                          data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                          type: 'post', //请求方式 get 或者post ,         
                          contentType: 'application/json',
                          success: function (data) {
                        	  addIns3.hide();
                              let select = data.msg
                              if (data.errcode == 60) {
                                  DevExpress.ui.notify(select, 'error', 3000);
                                  cake.Ui.LoadPanel.close();
                              }
                              if (data.errcode == 30) {
                                  DevExpress.ui.notify(select, 'warning', 3000);
                                  cake.Ui.LoadPanel.close();
                              }
                              if (data.errcode == 0) {
//                           	   M1S11_serDel();
//                           	   M1S21_serDel();
                            	  M1S11_serDel()
//                                  initLoad13();
//                                  cont_supplier = [];
                                  DevExpress.ui.notify(select, 'success', 3000);
                                  cake.Ui.LoadPanel.close();
                                  addIns2.hide();
                              }
                              
                             
                          },
                          error: function () {
                        	  addIns3.hide();
                              DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);

                          }
                      })
                      // }

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
  				icon: "plus",
  				name: 'M1S11BGDR',
  				text: '物资导入',
  				onClick: function () {
  					importPopup3.show();
  				}
  			}
  		},
      ];
      $("#addmoni41").dxDataGrid({
          // 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
          dataSource: "data/customers.json",
          columnResizingMode: "widget",
          dataSource: adddataWcg,
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
          paging: {
              enabled: false
          },
          editing: {
//              mode: "batch",
       	   mode: "cell",
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
        	  operateFormS44buts.forEach(item => e.toolbarOptions.items.push(item));

          },
          onEditingStart: function (e) {},
          columns: [
//        	  {
//                  dataField: 'cOrdernum',
//                  caption: '请购单号',
//                   width: 250,
//                  alignment: 'left',
//                  allowEditing: false,
//              },
              /* {
                   dataField: 'cId',
                   caption: '主键',
                   width: 150,
                   alignment: 'left',
               },*/
              {
                  dataField: 'cGoodsname',
                  caption: '物资名称',
                   width: 120,
                  alignment: 'left',
                  allowEditing: false,
              },

              {
                  dataField: 'cSpec',
                  caption: '规格型号',
                   width: 120,
                  alignment: 'left',
                  allowEditing: false,
              },
              {
                  dataField: 'cUnit',
                  caption: '单位',
                   width: 50,
                  alignment: 'left',
                  allowEditing: false,
              },
              {
                  dataField: 'cCustoms',
                  caption: '报关物资名称',
                   width: 120,
                  alignment: 'left',
              },
              {
                  dataField: 'cCuspec',
                  caption: '报关物资规格',
                   width: 120,
                  alignment: 'left',
              },
              {
                  dataField: 'cUnitspec',
                  caption: '报关单位',
                   width: 70,
                  alignment: 'left',
              },
              {
                  dataField: 'cNum',
                  caption: '订购数量',
                   width: 70,
                  alignment: 'left',

                  setCellValue: function (newData, value, currentRowData) {
                     
                  	newData.cNum = value;
                  	//console.log(VB_cPrice);
                  	
                  	// 数量
                  	VB_cNum = value;
                  /*	if (VB_cPrice == undefined || VB_cPrice == null){
                  	return VB_cPrice == 0
                  	}else{
                  		VB_cNum = null;
                  		VB_cPrice = null
                  	}*/
                  	var cPrice1 = currentRowData.cPrice;//试用
                  	// // 总价
                  	VB_cSumprice = newData.cNum * cPrice1;
                  	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                  	//console.log(Sumprice);
//                  	newData.cSumprice = newData.cNum * cPrice1;
                  	newData.cSumprice = Sumprice;
                  }
              },
              {
                  dataField: 'cPrice',
                  caption: '含税单价',
                   width: 100,
//                  alignment: 'left',
                  setCellValue: function (newData, value, currentRowData) {
                  	newData.cPrice = value;
                  	// 单价
                  	VB_cPrice = value;
                  	/*if (VB_cNum == undefined || VB_cNum == null) {
                  	return VB_cNum == 0
                  	}else{
                  		VB_cNum = null;
                  		VB_cPrice = null
              		}*/
                  	var cNum2 = currentRowData.cNum;//试用
                  	//console.log(cNum2);
                  	// 总价
                  	VB_cSumprice = newData.cPrice * cNum2;
                  	//控制小数点
               	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                  	//console.log(Sumprice);
//                  	newData.cSumprice = newData.cPrice * cNum2;
                  	newData.cSumprice = Sumprice;
                      
                  }
              },
              {
                  dataField: 'cSumprice',
                  caption: '含税总价',
                   width: 100,
                  alignment: 'left',
                   allowEditing: false,

              },
              {
//                  dataField: 'cRemarkc',
                  dataField: 'cRemark',
                  caption: '备注',
//                  alignment: 'left'
              },
          ],
          summary: {
              // 普通列求和
              totalItems: [{
                  column: 'cSumprice', //计算哪列的值
                  showInColumn: "cOrdernum", //显示在哪列
                  displayFormat: "合计人民币:{0}", //显示格式
                  // valueFormat: "currency",
//                  valueFormat: "fixedPoint",
//                  precision: 2,
                  summaryType: "sum" ,//汇总类型--运算方式
                  customizeText: function (e) {
                  	//console.log(e.value)
                  	var num = e.value;
                  	num = num.toFixed(2);
                  	return '合计民币:'+num;
                  }
              }],
          },
      })

      //单条修改
      function update_fun() {
          msg = {
              ver: '53cc62f6122a436083ec083eed1dc03d',
              session: '42f5c0d7178148938f4fda29460b815a',
              tag: {},
              data: {
                  cgQ003S1s2: {

                  }
              },
          };
          msg.data.cgQ003S1s2 = Dup_Item;

          // 单价修改
          if (VB_cPrice == null) {

          } else {
              msg.data.cgQ003S1s2.cPrice = VB_cPrice;
          }

          // 总价修改
          if (VB_cSumprice == null) {

          } else {
              msg.data.cgQ003S1s2.cSumprice = VB_cSumprice;
          }

          $.ajax({
              url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/modifyTpCgorderst'),
              dataType: 'json', //返回格式为json           
              async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
              data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
              type: 'post', //请求方式 get 或者post ,         
              contentType: 'application/json',
              success: function (data) {
                  console.log(data)
                  // 修改成功后为全局的变量设置为空
                  //    VB_cPricePer = null;
                  //    VB_cSumprice = null;
                  //    VB_cComno = null;
                  //    VB_cOrdertime = null;
                  //    VB_cDeltime = null;
                  //    VB_cAogtime = null;
                  //    VB_cProvider = null;
                  //    VB_cRemark = null;
                  //    M1S11_serDel()


              },
              error: function () {
                  DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
              }
          })
      }
//      // 交货期限、交货地点
//      ss = {
//	       		dataField: 'cDeliveryday',
//		       		label: {
//		       			text: '填天数即可',
//		       		},
//		       		editorOptions:{		
//		       			width: 150,
//		       			placeholder:'天数',
//		       		},
//		       		
//		       		validationRules: [{
//		           type: 'required',
//		           message: '必填！'
//		       	 	},
//		       		{
//		       			type: 'stringLength',
//		       			max: 11,
//		       			min: 0,
//		       			message: '长度超限，最长为11！'
//		       		},
//		       		],   	
//		       	},
//    sss = [
//  	   {
//       		dataField: 'cDelivery',
//       		label: {
//       			text: '1.交货期限'
//       		},
//       		editorType: 'dxSelectBox',
//       		editorOptions: {
//       			dataSource: jhqx,
//       			valueExpr: 'cSubitemid',
//       			displayExpr: 'cSubitemdes',
//       			searchEnabled: true,
//       			showClearButton: true,
//       			//以上完成对没有联动数据源配置
//       			//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//       			// dataSource: variabl,
//       			// valueExpr: 'id',
//       			// displayExpr: 'value',
//       			// showClearButton: true,
//       			placeholder: '请选择',
////       			width: 250,
//       			onValueChanged:function(e){
//       				var Terms = $('#deadline4').dxForm('instance').getEditor('cDelivery').option('value')
//       				// console.log(Terms)
//       				if (Terms === 'qx03'){
//       					var aa = $('#deadline4').dxForm('instance').option()
//       					
//       					
//                                 ss={
//                                     dataField: 'cDeliverytime',
//                                     label: {
//                                         text: '填日期即可',
//                                     },
//                                     editorType: 'dxDateBox',
//                                     validationRules: [{
//                                         type: 'required',
//                                         message: '必填！'
//                                     },
//                                     {
//                                         type: 'stringLength',
//                                         max: 4000,
//                                         min: 0,
//                                         message: '长度超限，最长为4000！'
//                                         },
//                                     ]
//                                 }
//       					aa.items=[aa.items[0],ss]
//                                         console.log(ss)
//                                 $('#deadline4').dxForm('instance').repaint()
//                                 
//                             }else{
////                             	$('.dx-item .dx-box-item').css('display':'none')
//                             	var aa = $('#deadline4').dxForm('instance').option()
//                                 ss = {
//                                         dataField: 'cDeliveryday',
//                                         label: {
//                                             text: '填天数即可',
//                                         },
//                                         editorOptions:{		
//                                             width: 150,
//                                             placeholder:'天数',
//                                         },
//                                         
//                                         validationRules: [{
//                                         type: 'required',
//                                         message: '必填！'
//                                         },
//                                         {
//                                             type: 'stringLength',
//                                             max: 11,
//                                             min: 0,
//                                             message: '长度超限，最长为11！'
//                                         },
//                                         ],   	
//                                             }
//                                 aa.items=[aa.items[0],ss]
//                                 $('#deadline4').dxForm('instance').repaint()
//                             }
//                             $('#deadline4').dxForm('instance').repaint()
//                         }
//
//       		},
// 				
//       		validationRules: [{
//       			type: 'required',
//       			message: '必填！'
//       		},
//       		{
//       			type: 'stringLength',
//       			max: 4000,
//       			min: 0,
//       			message: '长度超限，最长为4000！'
//       		},
//       		]
//       	},
//       	ss,
//           
//       ]
//    // 交货期限、交货地点
//    $('#deadline4').dxForm({
//        formData: adddatapo,
//        validationGroup: validationGroupName,
//        colCount: 2,
//        items: sss,
//    }).dxForm('instance');
//      // 交货地点
//      $('#deadline41').dxForm({
//    	  formData: adddatapo,
//    	  validationGroup: validationGroupName,
//    	  colCount: 1,
//    	  items: [
//    	  {
//    		  dataField: 'cDelivplace',
//    		  label: {
//    			  text: '2.交货地点'
//    		  },
//    		  editorType: 'dxSelectBox',
//    		  validationRules: [{
//    			  type: 'required',
//    			  message: '必填！'
//    		  },
//    		  {
//    			  type: 'stringLength',
//    			  max: 1000,
//    			  min: 0,
//    			  message: '长度超限，最长为1000！'
//    		  },
//    		  ],
//    		  editorOptions: {
//    			  dataSource: jhdd1,
//    			  valueExpr: 'cSubitemid',
//    			  displayExpr: 'cSubitemdes',
//    			  searchEnabled: true,
//    			  showClearButton: true,
//    			  //以上完成对没有联动数据源配置
//    			  //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//    			  // dataSource: variabl,
//    			  // valueExpr: 'id',
//    			  // displayExpr: 'value',
//    			  // showClearButton: true,
//    			  placeholder: '请选择',
//    		  },
//    	  },
//    	  ]
//      }).dxForm('instance');
      
      
      
      // 交货期限、交货地点
      $('#deadline41').dxForm({
    	  formData: adddatapo,
    	  validationGroup: validationGroupName,
    	  colCount: 1,
    	  items: [
    		  {
                  dataField: 'cDelivdate',
                  label: {
                      text: '1.交货期限'
                  },
                  validationRules: [{
                      type: 'required',
                      message: '必填！'
                  },
                  {
                      type: 'stringLength',
                      max: 4000,
                      min: 0,
                      message: '长度超限，最长为4000！'
                      },
                  ],
                  editorOptions: {
                      showClearButton: true,
                      value: '自双方合同盖章生效之日起 *日内。'
                  }, 
              },
    	  {
    		  dataField: 'cDelivplace',
    		  label: {
    			  text: '2.交货地点'
    		  },
    		  editorType: 'dxSelectBox',
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
    		  ],
    		  editorOptions: {
    			  dataSource: jhdd1,
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
    	  },
    	  ]
      }).dxForm('instance');
      // 付款方式
      $('#pice41').dxForm({
          formData: adddatapic,
          validationGroup: validationGroupName,
          colCount: 1,
          items: [{
              dataField: 'cPayway',
              label: {
                  text: '3.付款方式'
              },
              editorOptions: {
                  //以上完成对没有联动数据源配置
                  //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                  // dataSource: variabl,
                  // valueExpr: 'id',
                  // displayExpr: 'value',
                  // showClearButton: true,
                  showClearButton: true
              },
              validationRules: [{
                  type: 'required',
                  message: '必填！'
              },
              {
                  type: 'stringLength',
                  max: 4000,
                  min: 0,
                  message: '长度超限，最长为4000！'
              },
          ]
          }, ]
      }).dxForm('instance');
   	$('#clauseForm41').dxForm({
   		formData: adddata,
   		validationGroup: validationGroupName,
   		colCount: 1,
   		items: [
   			{
   				dataField: 'cSw01TpCgclausedata',
   				label: {
   					text: '扩展字段1',
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					visible:false,
//   					readOnly:true,
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					visible:false,
//   					readOnly:true,
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					readOnly:true,
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
   					searchEnable: true,
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
   					searchEnable: true,
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
   					searchEnable: true,
   					showClearButton: true,
//   					placeholder: '备注修改的条款记录1',
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
   					searchEnable: true,
   					showClearButton: true,
   				},
   				validationRules: [{
   					type: 'stringLength', max: 4000, min: 0,
   					message: '长度超限，最长为200！'
   				},]
   			},
   			{
   				dataField: 'cSw43TpCgclausedata',
   				label: {
   					text: '扩展字段43',
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
   				},
   				validationRules: [{
   					type: 'stringLength', max: 4000, min: 0,
   					message: '长度超限，最长为200！'
   				},]
   			},
   			{
   				dataField: 'cSw45TpCgclausedata',
   				label: {
   					text: '扩展字段45',
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
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
   					visible:false
   				},
   				editorType: "dxTextArea",
   				editorOptions: {
   					searchEnable: true,
   					showClearButton: true,
   				},
   				validationRules: [{
   					type: 'stringLength', max: 4000, min: 0,
   					message: '长度超限，最长为200！'
   				},]
   			},
//   			{
//   				dataField: 'cSw51TpCgclausedata',
//   				label: {
//   					text: '扩展字段51',
//   					visible:false
//   				},
//   				editorType: "dxTextArea",
//   				editorOptions: {
//   					searchEnable: true,
//   					showClearButton: true,
//   					placeholder: '备注修改的条款记录',
//   				},
//   				validationRules: [{
//   					type: 'stringLength', max: 4000, min: 0,
//   					message: '长度超限，最长为200！'
//   				},]
//   			},

   		]
   	}).dxForm('instance')



      $('#textarea61').dxForm({
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
                      //                        value: '913 303 007 511 762 26P'
                  },
              },
          ]
      }).dxForm('instance')




      // $("#textarea2").dxTextArea({
      //     width: "580px",
      //     height: "200px",
      //     placeholder: "供方...."
      // })

      $('#textarea51').dxForm({
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
    
    
    
    
    
    
    
    
    
    
    
    
    
}) 		    

function importf(obj) {
	var addIns1 = $('#addmotai1').dxPopup({
        //模态框增加name    
        width: 200,
        height: 70
    }).dxPopup('instance')
     addIns1.show();
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
		// // 替换公司信息字段
		// // 拼接两段数据
		tables = JSON.stringify(tables);
		tables = tables.replace(/合同号/g, 'cConnum');
		tables = tables.replace(/合同行号/g, 'cConline');
//		tables = tables.replace(/原物资名称/g, 'cGoodsname');
//		tables = tables.replace(/原规格型号/g, 'cCuspec');
//		tables = tables.replace(/原单位/g, 'cUnit');
		tables = tables.replace(/报关物资名称/g, 'cSw08');
		tables = tables.replace(/报关规格型号/g, 'cSpec');
		tables = tables.replace(/报关单位/g, 'cUnitspec');
		tables = tables.replace(/订货数量/g, 'cGoodsnum');
		tables = tables.replace(/含税单价/g, 'cPrice');
		tables = tables.replace(/含税总价/g, 'cSumprice');
		tables = tables.replace(/备注/g, 'cRemark');
		tables = tables.replace(/合并项/g,'merge');
		tables = tables.replace(/是否一起购买/g,'yesno');
		updata.data = {

		};
		let grid1 = $('#dataGridS1').dxDataGrid('instance');
        let selectedRowKeys = grid1.getSelectedRowKeys()
        let rowsData = grid1.getSelectedRowsData()
//        updata.data.stList = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();//获取物资表中的物资信息
        //console.log.log(updata.data.stList)
		updata.data.tsttlist = {}
		updata.data.tsttlist = JSON.parse(tables);
//		console.log(updata);
        addIns1.hide();
		localStorage.setItem('updata', JSON.stringify(updata));
	};
	if (rABS) {
		reader.readAsArrayBuffer(f);
	} else {
		reader.readAsBinaryString(f);
	}
}
function importf2(obj) {
	var addIns1 = $('#addmotai1').dxPopup({
        //模态框增加name    
        width: 200,
        height: 70
    }).dxPopup('instance')
     addIns1.show();
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

		// // 拼接两段数据
		tables = JSON.stringify(tables);
		tables = tables.replace(/合同号/g, 'cConnum');
		tables = tables.replace(/合同行号/g, 'cConline');
		tables = tables.replace(/原物资名称/g, 'cGoodsname');
		tables = tables.replace(/原规格型号/g, 'cCuspec');
		tables = tables.replace(/原单位/g, 'cUnit');
		tables = tables.replace(/报关物资名称/g, 'cSw08');
		tables = tables.replace(/报关规格型号/g, 'cSpec');
		tables = tables.replace(/报关单位/g, 'cUnitspec');
		tables = tables.replace(/订货数量/g, 'cGoodsnum');
		tables = tables.replace(/含税单价/g, 'cPrice');
		tables = tables.replace(/备注/g, 'cRemark');
		updata.data = {
				
		};
		let grid1 = $('#dataGridS1').dxDataGrid('instance');
		let selectedRowKeys = grid1.getSelectedRowKeys()
		let rowsData = grid1.getSelectedRowsData()
//        updata.data.stList = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();//获取物资表中的物资信息
		//console.log.log(updata.data.stList)
		updata.data.tsttlist = {}
		updata.data.tsttlist = JSON.parse(tables);
		console.log(updata);
		addIns1.hide();
		localStorage.setItem('updata', JSON.stringify(updata));
	};
	if (rABS) {
		reader.readAsArrayBuffer(f);
	} else {
		reader.readAsBinaryString(f);
	}
}
function importf3(obj) {
	var addIns1 = $('#addmotai1').dxPopup({
        //模态框增加name    
        width: 200,
        height: 70
    }).dxPopup('instance')
     addIns1.show();
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
		
		// // 拼接两段数据
		tables = JSON.stringify(tables);
		tables = tables.replace(/合同号/g, 'cConnum');
//		tables = tables.replace(/合同行号/g, 'cConline');
//		tables = tables.replace(/原物资名称/g, 'cGoodsname');
//		tables = tables.replace(/原规格型号/g, 'cCuspec');
//		tables = tables.replace(/原单位/g, 'cUnit');
		tables = tables.replace(/报关物资名称/g, 'cCustoms');
		tables = tables.replace(/报关规格型号/g, 'cCuspec');
		tables = tables.replace(/报关单位/g, 'cUnitspec');
		tables = tables.replace(/订货数量/g, 'cNum');
		tables = tables.replace(/含税单价/g, 'cPrice');
		tables = tables.replace(/含税总价/g, 'cSumprice');
		tables = tables.replace(/备注/g, 'cRemark');
		updata.data = {
				
		};
	
		//console.log.log(updata.data.stList)
		updata.data.tsttlist = {}
		updata.data.tsttlist = JSON.parse(tables);
		console.log(updata);
		addIns1.hide();
		localStorage.setItem('updata', JSON.stringify(updata));
	};
	if (rABS) {
		reader.readAsArrayBuffer(f);
	} else {
		reader.readAsBinaryString(f);
	}
}
