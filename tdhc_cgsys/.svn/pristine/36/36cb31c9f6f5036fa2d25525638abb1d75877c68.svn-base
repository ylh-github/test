
///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let searchdataM1 ; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
let adddata = {}; //添加按钮需要的数据源
let addIns;   //增加操作时候的模态框实例
//设置模态框的属性
if (addIns == null) {
	addIns = $('#addmotai ').dxPopup({
		'visible': false,  //设置属性不可见
		height:300,  //设置高度
		width :450,  //设置宽度
	}).dxPopup('instance');
}
let change = '';   //区分增加和修改的状态,1为增加;2为修改
//查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
window.onload = () => {
    DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
    console.log('pp');
};	
$(function() {
start() //调用初始化函数//websocket开始

//var userId='CG_ZXQD_websocket';
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
//var data = ['[{"objId":"CG_ZXQD_websocket","funName":"CG_ZXQD","funType":"M1S11","tbName":"TP_PACKINGLIST","dataId":"A"},]']
//send(data)
//};
//websocket.onmessage = function(evnt) {
//var jsons = eval('(' + evnt.data + ')');
//var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:CG_ZXQD');
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
     deferRendering : false, 

		formData:searchdataM1,
		////当参数小于三个时为五个,大于等于三时统一乘二
		////王晶晶给改为自适应编码
		colCountByScreen:{
			lg:6,
			md:4,
			sm:2,
			xs:1,
		},
		//所有查询条件为一组的代码段
		itemType: 'group',
		items: [ 
					{
						dataField:'cBoxno',
						label:{
							text:'集装箱号'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cCarshipno',
						label:{
							text:'车/船号'
						},
						editorOptions: {
						showClearButton: true,
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
		}).dxForm('instance')
//完成对查询条件的自动生成
////////////////////////////////////////////////////
////生成按钮层//////////////////////////////////////
////////////////////////////////////////////////////

 let	operateFormS1buts = [
		{
location: "before",
locateInMenu: 'auto',
widget: "dxButton",
options: {
									height: "auto",
									width: "auto",
									icon: "search",
												name:'M1S11Q',
			text: '查询',
			onClick: function(){
				M1S11_serDel();
				}
			}
		},		{
location: "before",
locateInMenu: 'auto',
widget: "dxButton",
options: {
									height: "auto",
									width: "auto",
												name:'M1S11Q',
				icon: 'plus',
			text: '添加',
				onClick: function(){
					change='1'; 
					$('#addmotai').show()
				addIns = $('#addmotai').dxPopup({
						width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
						height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
					}).dxPopup('instance')
				addIns.option('title', 'CG_ZXQD')
				addIns.show();
				M1S11_addfun();
				M1S11addIns.option('formData',new Object())
				}
			}
		},		{
location: "before",
locateInMenu: 'auto',
widget: "dxButton",
options: {
									height: "auto",
									width: "auto",
													icon: 'save',     
			text: '修改',
				onClick: function(){     
					change='2'     
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
					}).dxPopup('instance')    
					addIns.option('title', 'CG_ZXQD');    
					addIns.show();    
					// 调用模态框函数    
					// updatafun()    
					M1S11_Updatefun()    
					M1S11addIns.option('formData',rowsData)    
				}    
			}    
		},    		{
location: "before",
locateInMenu: 'auto',
widget: "dxButton",
options: {
									height: "auto",
									width: "auto",
									
				icon: 'remove',     
			text: '删除',
			onClick: function(){                       
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

		msg.data.cgZxqdM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
				console.log(msg) 
M1S11D_serDel_Judgment();
if(M1S11D_serDel_mark!='M1S11D_success' ){
}else{				$.ajax({ 
					url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_ZXQD/M1S11D'),					dataType: 'json',   //返回格式为json   
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
					type: 'post',   //请求方式 get 或者post , 
					contentType: 'application/json', 
					success: function (data) { 
						let select = data.msg 
						if(data.errcode == 0){ 
							DevExpress.ui.notify(data.msg, 'success', 3000);  
							M1S11_serDel() ;         
var websocketData = ['[{"objId":"CG_ZXQD_websocket","funName":"CG_ZXQD","funType":"M1S11","tbName":"TP_PACKINGLIST","dataId":"AUD"}]']
send(websocketData)

							} 
						else{ 
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
		var	dataGridS1columns=[     
				{ 
					dataField: 'cContacter',
					caption: '收货人',
				},
				{ 
					dataField: 'cRecedate',
					caption: '收货日期',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cContphone',
					caption: '发货联系方式',
				},
				{ 
					dataField: 'cFatherid',
					caption: '业务主键--供应商物资表的主键',
				},
				{ 
					dataField: 'cHigh',
					caption: '高',
				},
				{ 
					dataField: 'cNum',
					caption: '总数量',
				},
				{ 
					dataField: 'cState',
					caption: '状态',
				},
				{ 
					dataField: 'cPortper',
					caption: '港口联系人',
				},
				{ 
					dataField: 'cBoxdate',
					caption: '装箱日期',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cDriver',
					caption: '驾驶员签收',
				},
				{ 
					dataField: 'cConnum',
					caption: '合同号',
				},
				{ 
					dataField: 'cSendcomp',
					caption: '发货单位',
				},
				{ 
					dataField: 'cContacttell',
					caption: '收方联系电话',
				},
				{ 
					dataField: 'cSmallunit',
					caption: '最小数量单位种类',
				},
				
				{ 
					dataField: 'cBoxno',
					caption: '集装箱号',
				},
				{ 
					dataField: 'cDriverdate',
					caption: '驾驶员签收日期',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cBrand',
					caption: '品牌',
				},
				{ 
					dataField: 'cSmallnum',
					caption: '最小单位数量',
				},
				{ 
					dataField: 'cPackaging',
					caption: '包装形式',
				},
				{ 
					dataField: 'cWide',
					caption: '宽',
				},
				{ 
					dataField: 'cModifier',
					caption: '修改人',
				},
				{ 
					dataField: 'cNewleadsno',
					caption: '重新铅封号',
				},
				{ 
					dataField: 'cBoxer',
					caption: '装箱人',
				},
				{ 
					dataField: 'cYard',
					caption: '堆场签收',
				},
				{ 
					dataField: 'cOrdernum',
					caption: '发货单号',
				},
				{ 
					dataField: 'cId',
					caption: '主键',
				},
				{ 
					dataField: 'cMark',
					caption: '唛头',
				},
				{ 
					dataField: 'cLong',
					caption: '长',
				},
				{ 
					dataField: 'cTgweight',
					caption: '总毛重',
				},
				{ 
					dataField: 'cDr',
					caption: '删除标识',
				},
				{ 
					dataField: 'cCreatetime',
					caption: '创建时间',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cCarshipno',
					caption: '车/船号',
				},
				{ 
					dataField: 'cPackingnum',
					caption: '打包后件数',
				},
				{ 
					dataField: 'cVolume',
					caption: '体积',
				},
				{ 
					dataField: 'cUnit',
					caption: '单位',
				},
				{ 
					dataField: 'cModifytime',
					caption: '修改时间',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				
				
				{ 
					dataField: 'cBoxspec',
					caption: '集装箱规格',
				},
				{ 
					dataField: 'cBoxweight',
					caption: '箱重',
				},
				{ 
					dataField: 'cSpec',
					caption: '规格型号',
				},
				{ 
					dataField: 'cRemark',
					caption: '备注',
				},
				
				{ 
					dataField: 'cLeadsno',
					caption: '铅封号',
				},
				{ 
					dataField: 'cShipadd',
					caption: '送货地址',
				},
				{ 
					dataField: 'cYarddate',
					caption: '堆场签收日期',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cNo',
					caption: '序号',
				},
				{ 
					dataField: 'cPackunit',
					caption: '打包后单位种类',
				},
				{ 
					dataField: 'cGweight',
					caption: '毛重',
				},
				{ 
					dataField: 'cNweight',
					caption: '净重',
				},
				{ 
					dataField: 'cTnweight',
					caption: '净毛重',
				},
				{ 
					dataField: 'cTimestamp',
					caption: '时间戳',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				
				{ 
					dataField: 'cPort',
					caption: '装箱港',
				},
				{ 
					dataField: 'cContacterr',
					caption: '发货人',
				},
				{ 
					dataField: 'cFreista',
					caption: '货运站',
				},
				{ 
					dataField: 'cSendaddress',
					caption: '发货单位地址',
				},
				{ 
					dataField: 'cGoodsname',
					caption: '品名',
				},
				{ 
					dataField: 'cCreater',
					caption: '创建人',
				},
				
			]
     
	$('#dataGridS1').dxDataGrid({    
     deferRendering : false, 

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
			height:450,                      
			paging: {        
				enabled: false     
				},     
			scrolling: {     
				mode: 'virtual'     
					},     
			selection: {     
				mode: 'multiple'     
					},     
	
		columns:dataGridS1columns, 

onToolbarPreparing: function (e) { 
operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item)); 

 } 
		}).dxDataGrid('instance');     
///////////////////////////////////////////////////////
//Star()请求下拉框、多选框数据、通过请求网址的后缀生成代码 
///////////////////////////////////////////////////////
	function start(){  		    
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
	} 		    
//////////////////////////////////////////////////////////////////////////////////////////////////
//功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
	function  M1S11_serDel(){    
		msg = {   
			ver: '53cc62f6122a436083ec083eed1dc03d',   
			session: '42f5c0d7178148938f4fda29460b815a',   
			tag: {},   
			data: {   
	 			}   
			};     
		let searchtiao = searchdataFormM1.option('formData')    
		msg.data.cgZxqdM1s1 = [searchdataFormM1.option('formData')];M1S11Q_serDel_Judgment();
if(M1S11Q_serDel_mark!='M1S11Q_success' ){
}else{
		$.ajax({    
			url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_ZXQD/M1S11Q'),
			dataType: 'json',   //返回格式为json      
			async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
			type: 'post',   //请求方式 get 或者post ,       
			contentType: 'application/json',       
			success: function (data) {       

				if(data.data == null){       
tabledataS1.splice(0, tabledataS1.length); 
					$('#dataGridS1').dxDataGrid('instance').option('dataSource',tabledataS1)       
					return       
					}       

 let select ;
				select = data.data.cgZxqdM1s1
				tabledataS1.splice(0, tabledataS1.length);           
				select.forEach(item=> tabledataS1.push(item));        
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
	function M1S11_addfun(){        
		M1S11addIns = $('#addForm').dxForm({        
		formData:adddata,        
		validationGroup: validationGroupName,        
		colCount: 3,        
		items: [        
			{
				dataField:'cBoxno',
				label:{
					text:'集装箱号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cBoxspec',
				label:{
					text:'集装箱规格'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cBoxweight',
				label:{
					text:'箱重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cLeadsno',
				label:{
					text:'铅封号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cNewleadsno',
				label:{
					text:'重新铅封号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cPort',
				label:{
					text:'装箱港'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cPortper',
				label:{
					text:'港口联系人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cShipadd',
				label:{
					text:'送货地址'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cBoxer',
				label:{
					text:'装箱人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cBoxdate',
				label:{
					text:'装箱日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cContacterr',
				label:{
					text:'发货人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cFreista',
				label:{
					text:'货运站'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cDriver',
				label:{
					text:'驾驶员签收'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:200,min:0,
			message: '长度超限，最长为200！'
		},		]
					},
			{
				dataField:'cDriverdate',
				label:{
					text:'驾驶员签收日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cYard',
				label:{
					text:'堆场签收'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cYarddate',
				label:{
					text:'堆场签收日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cContacter',
				label:{
					text:'收货人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cRecedate',
				label:{
					text:'收货日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cConnum',
				label:{
					text:'合同号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:500,min:0,
			message: '长度超限，最长为500！'
		},		]
					},
			{
				dataField:'cSendcomp',
				label:{
					text:'发货单位'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cSendaddress',
				label:{
					text:'发货单位地址'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cContphone',
				label:{
					text:'发货联系方式'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cCarshipno',
				label:{
					text:'车/船号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cOrdernum',
				label:{
					text:'发货单号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cContacttell',
				label:{
					text:'收方联系电话'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cFatherid',
				label:{
					text:'业务主键--供应商物资表的主键'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cId',
				label:{
					text:'主键'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cNo',
				label:{
					text:'序号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cMark',
				label:{
					text:'唛头'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cGoodsname',
				label:{
					text:'品名'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cBrand',
				label:{
					text:'品牌'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cSpec',
				label:{
					text:'规格型号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cSmallnum',
				label:{
					text:'最小单位数量'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cSmallunit',
				label:{
					text:'最小数量单位种类'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cPackingnum',
				label:{
					text:'打包后件数'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cPackunit',
				label:{
					text:'打包后单位种类'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cPackaging',
				label:{
					text:'包装形式'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cGweight',
				label:{
					text:'毛重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cNweight',
				label:{
					text:'净重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cLong',
				label:{
					text:'长'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cWide',
				label:{
					text:'宽'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cHigh',
				label:{
					text:'高'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cVolume',
				label:{
					text:'体积'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cTgweight',
				label:{
					text:'总毛重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cTnweight',
				label:{
					text:'净毛重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cNum',
				label:{
					text:'总数量'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cUnit',
				label:{
					text:'单位'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cRemark',
				label:{
					text:'备注'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cState',
				label:{
					text:'状态'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cDr',
				label:{
					text:'删除标识'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cTimestamp',
				label:{
					text:'时间戳'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cCreater',
				label:{
					text:'创建人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cCreatetime',
				label:{
					text:'创建时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cModifier',
				label:{
					text:'修改人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cModifytime',
				label:{
					text:'修改时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					}
		]
	}).dxForm('instance')
		$('#addsure').dxButton({          
			text:'确定',          
			icon:'todo',          
			validationGroup: validationGroupName,          
			onClick:function(e){          
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
			msg.data.cgZxqdM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
			M1S11A_serDel_Judgment();
			if(M1S11A_serDel_mark!='M1S11A_success' ){
			}else{				
				$.ajax({         
					url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_ZXQD/M1S11A'),
					dataType: 'json',   //返回格式为json           
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					type: 'post',   //请求方式 get 或者post ,         
					contentType: 'application/json',         
					success: function (data) {         
						let select = data.msg         
						if(data.errcode == 0){         
							DevExpress.ui.notify(data.msg,'success',3000) 
							M1S11_serDel()         
							addIns.hide()
							var websocketData = ['[{"objId":"CG_ZXQD_websocket","funName":"CG_ZXQD","funType":"M1S11","tbName":"TP_PACKINGLIST","dataId":"AUD"}]']
							send(websocketData)
							 
						}else { 
							DevExpress.ui.notify(data.msg,'error',120000) 
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
			}         
		})         
		$('#addcansel').dxButton({         
			text:'取消',         
			icon:'remove',         
			onClick:function(){         
				addIns.hide()          
			}         
		})         
	}         
	function M1S11_Updatefun(){        
	M1S11addIns = $('#addForm').dxForm({        
	formData:adddata,        
	validationGroup: validationGroupName,        
	colCount: 3,        
	items: [        
			{
				dataField:'cBoxno',
				label:{
					text:'集装箱号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cBoxspec',
				label:{
					text:'集装箱规格'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cBoxweight',
				label:{
					text:'箱重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cLeadsno',
				label:{
					text:'铅封号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cNewleadsno',
				label:{
					text:'重新铅封号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cPort',
				label:{
					text:'装箱港'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cPortper',
				label:{
					text:'港口联系人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cShipadd',
				label:{
					text:'送货地址'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cBoxer',
				label:{
					text:'装箱人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cBoxdate',
				label:{
					text:'装箱日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cContacterr',
				label:{
					text:'发货人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cFreista',
				label:{
					text:'货运站'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cDriver',
				label:{
					text:'驾驶员签收'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:200,min:0,
			message: '长度超限，最长为200！'
		},		]
					},
			{
				dataField:'cDriverdate',
				label:{
					text:'驾驶员签收日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cYard',
				label:{
					text:'堆场签收'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cYarddate',
				label:{
					text:'堆场签收日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cContacter',
				label:{
					text:'收货人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
		},		]
					},
			{
				dataField:'cRecedate',
				label:{
					text:'收货日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cConnum',
				label:{
					text:'合同号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:500,min:0,
			message: '长度超限，最长为500！'
		},		]
					},
			{
				dataField:'cSendcomp',
				label:{
					text:'发货单位'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cSendaddress',
				label:{
					text:'发货单位地址'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cContphone',
				label:{
					text:'发货联系方式'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cCarshipno',
				label:{
					text:'车/船号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cOrdernum',
				label:{
					text:'发货单号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cContacttell',
				label:{
					text:'收方联系电话'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cFatherid',
				label:{
					text:'业务主键--供应商物资表的主键'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
					},
			{
				dataField:'cId',
				label:{
					text:'主键'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cNo',
				label:{
					text:'序号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cMark',
				label:{
					text:'唛头'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cGoodsname',
				label:{
					text:'品名'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cBrand',
				label:{
					text:'品牌'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cSpec',
				label:{
					text:'规格型号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cSmallnum',
				label:{
					text:'最小单位数量'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cSmallunit',
				label:{
					text:'最小数量单位种类'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cPackingnum',
				label:{
					text:'打包后件数'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cPackunit',
				label:{
					text:'打包后单位种类'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cPackaging',
				label:{
					text:'包装形式'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cGweight',
				label:{
					text:'毛重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cNweight',
				label:{
					text:'净重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cLong',
				label:{
					text:'长'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cWide',
				label:{
					text:'宽'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cHigh',
				label:{
					text:'高'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cVolume',
				label:{
					text:'体积'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cTgweight',
				label:{
					text:'总毛重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cTnweight',
				label:{
					text:'净毛重'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cNum',
				label:{
					text:'总数量'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cUnit',
				label:{
					text:'单位'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cRemark',
				label:{
					text:'备注'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cState',
				label:{
					text:'状态'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cDr',
				label:{
					text:'删除标识'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cTimestamp',
				label:{
					text:'时间戳'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cCreater',
				label:{
					text:'创建人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cCreatetime',
				label:{
					text:'创建时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cModifier',
				label:{
					text:'修改人'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:300,min:0,
			message: '长度超限，最长为300！'
		},		]
					},
			{
				dataField:'cModifytime',
				label:{
					text:'修改时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					}		
		]
	}).dxForm('instance')
		$('#addsure').dxButton({          
			text:'确定',          
			icon:'todo',          
			validationGroup: validationGroupName,          
			onClick:function(e){          
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
				msg.data.cgZxqdM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11U_serDel_Judgment();
				if(M1S11U_serDel_mark!='M1S11U_success' ){
				}else{		
					$.ajax({         
					url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_ZXQD/M1S11U'),
					dataType: 'json',   //返回格式为json           
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					type: 'post',   //请求方式 get 或者post ,         
					contentType: 'application/json',         
					success: function (data) {  
						
						let select = data.msg         
						if(data.errcode == 0){         
							DevExpress.ui.notify(data.msg,'success',3000) 
							M1S11_serDel()         
							addIns.hide()
							var websocketData = ['[{"objId":"CG_ZXQD_websocket","funName":"CG_ZXQD","funType":"M1S11","tbName":"TP_PACKINGLIST","dataId":"AUD"}]']
							
							send(websocketData)	
							
						}else { 
							DevExpress.ui.notify(data.msg,'error',120000) 
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
			}         
		})         
		$('#addcansel').dxButton({         
			text:'取消',         
			icon:'remove',         
			onClick:function(){         
				addIns.hide()          
			}         
		})         
	}         
//Script ------------------------------------
	}) 		    