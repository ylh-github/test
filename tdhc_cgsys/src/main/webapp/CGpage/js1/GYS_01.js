
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
$(function() {
start() //调用初始化函数//websocket开始

var userId='GYS_01_websocket';
var websocket;
if('WebSocket' in window) {
console.log('此浏览器支持websocket');
websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/'+userId);
} else if('MozWebSocket' in window) {
alert('此浏览器只支持MozWebSocket');
websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/'+userId);
} else {
alert('此浏览器只支持SockJS');
websocket = new WebSocket('ws://192.168.1.114:8480/webSocketServer/chats/'+userId);
}
websocket.onopen = function(evnt) {
console.log('链接服务器成功!')
var data = ['[{"objId":"GYS_01_websocket","funName":"GYS_01","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"A"},]']
send(data)
};
websocket.onmessage = function(evnt) {
var jsons = eval('(' + evnt.data + ')');
var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:GYS_01');
result.done(function (dialogResult) {
if (dialogResult) {
var json = eval('(' + evnt.data + ')');
eval(json.dataType)
console.log(json)
}
})
};
websocket.onerror = function(evnt) {};
websocket.onclose = function(evnt) {
console.log('与服务器断开了链接!')
}
function send(data) {
if(websocket != null) {
websocket.send(data);
} else {
alert('未与服务器链接.');
}
}

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
						dataField:'cGoodsnameTbSuppmateral',
						label:{
							text:'货物名称'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cReceivcompTbSuppmateral',
						label:{
							text:'收货单位名称'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cConnumTbSuppmateral',
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
				addIns.option('title', 'GYS_01')
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
					addIns.option('title', 'GYS_01');    
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

		msg.data.gys01M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
				console.log(msg) 
M1S11D_serDel_Judgment();
if(M1S11D_serDel_mark!='M1S11D_success' ){
}else{				$.ajax({ 
					url:Cake.Piper.getAuthUrl('http://localhost:8081/mengsengAOP/GYS_01/M1S11D'),					dataType: 'json',   //返回格式为json   
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
					type: 'post',   //请求方式 get 或者post , 
					contentType: 'application/json', 
					success: function (data) { 
						let select = data.msg 
						if(data.errcode == 0){ 
							DevExpress.ui.notify(data.msg, 'success', 3000);  
							M1S11_serDel() ;         
var websocketData = ['[{"objId":"GYS_01_websocket","funName":"GYS_01","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"AUD"}]']
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
					dataField: 'cTotalnumTbSuppmateral',
					caption: '总数量',
				},
				{ 
					dataField: 'cSw16TbSuppmateral',
					caption: '扩展字段16',
				},
				{ 
					dataField: 'cSw02TbSuppmateral',
					caption: '扩展字段2',
				},
				{ 
					dataField: 'cSw14TbSuppmateral',
					caption: '扩展字段14',
				},
				{ 
					dataField: 'cIdTbSuppmateral',
					caption: '物资主键',
				},
				{ 
					dataField: 'cNumTbSuppmateral',
					caption: '数量',
				},
				{ 
					dataField: 'cReceaddressTbSuppmateral',
					caption: '收货单位地址',
				},
				{ 
					dataField: 'cSenderTbSuppmateral',
					caption: '发货人',
				},
				{ 
					dataField: 'cTimestampTbSuppmateral',
					caption: '时间戳',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cGoodsnameTbSuppmateral',
					caption: '货物名称',
				},
				{ 
					dataField: 'cModifytimeTbSuppmateral',
					caption: '修改时间',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cSw01TbSuppmateral',
					caption: '扩展字段1',
				},
				{ 
					dataField: 'cSw05TbSuppmateral',
					caption: '扩展字段5',
				},
				{ 
					dataField: 'cSw13TbSuppmateral',
					caption: '扩展字段13',
				},
				{ 
					dataField: 'cContphoneTbSuppmateral',
					caption: '发货联系方式',
				},
				{ 
					dataField: 'cSendtimeTbSuppmateral',
					caption: '发货时间',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cSw08TbSuppmateral',
					caption: '扩展字段8',
				},
				{ 
					dataField: 'cContacterrTbSuppmateral',
					caption: '发货联系人',
				},
				{ 
					dataField: 'cSpecTbSuppmateral',
					caption: '规格型号',
				},
				{ 
					dataField: 'cSw06TbSuppmateral',
					caption: '扩展字段6',
				},
				{ 
					dataField: 'cReceivcompTbSuppmateral',
					caption: '收货单位名称',
				},
				{ 
					dataField: 'cContacterTbSuppmateral',
					caption: '收方联系人',
				},
				{ 
					dataField: 'cModifierTbSuppmateral',
					caption: '修改人',
				},
				{ 
					dataField: 'cRemarkTbSuppmateral',
					caption: '备注',
				},
				{ 
					dataField: 'cStateTbSuppmateral',
					caption: '物资状态',
				},
				{ 
					dataField: 'cSw03TbSuppmateral',
					caption: '扩展字段3',
				},
				{ 
					dataField: 'cSw09TbSuppmateral',
					caption: '扩展字段9',
				},
				{ 
					dataField: 'cSw12TbSuppmateral',
					caption: '扩展字段12',
				},
				{ 
					dataField: 'cConnumTbSuppmateral',
					caption: '合同号',
				},
				{ 
					dataField: 'cContacttellTbSuppmateral',
					caption: '收方联系电话',
				},
				{ 
					dataField: 'cOrdernumTbSuppmateral',
					caption: '发货单号',
				},
				{ 
					dataField: 'cSw04TbSuppmateral',
					caption: '扩展字段4',
				},
				{ 
					dataField: 'cSw10TbSuppmateral',
					caption: '扩展字段10',
				},
				{ 
					dataField: 'cSw11TbSuppmateral',
					caption: '扩展字段11',
				},
				{ 
					dataField: 'cNoTbSuppmateral',
					caption: '序号',
				},
				{ 
					dataField: 'cUnitTbSuppmateral',
					caption: '单位',
				},
				{ 
					dataField: 'cArrtimeTbSuppmateral',
					caption: '到货日期',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cReceiverTbSuppmateral',
					caption: '收货人',
				},
				{ 
					dataField: 'cCreaterTbSuppmateral',
					caption: '创建人',
				},
				{ 
					dataField: 'cCreatetimeTbSuppmateral',
					caption: '创建时间',					dataType: "date",
					format: "yyyy-MM-dd",

				},
				{ 
					dataField: 'cMtidTbSuppmateral',
					caption: '业务主键',
				},
				{ 
					dataField: 'cSw07TbSuppmateral',
					caption: '扩展字段7',
				},
				{ 
					dataField: 'cSw15TbSuppmateral',
					caption: '扩展字段15',
				},
				{ 
					dataField: 'cDrTbSuppmateral',
					caption: '删除标识',
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
		msg.data.gys01M1s1 = [searchdataFormM1.option('formData')];M1S11Q_serDel_Judgment();
if(M1S11Q_serDel_mark!='M1S11Q_success' ){
}else{
		$.ajax({    
			url:Cake.Piper.getAuthUrl('http://localhost:8081/mengsengAOP/GYS_01/M1S11Q'),
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
				select = data.data.gys01M1s1
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
				dataField:'cIdTbSuppmateral',
				label:{
					text:'物资主键'
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
				dataField:'cContphoneTbSuppmateral',
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
				dataField:'cGoodsnameTbSuppmateral',
				label:{
					text:'货物名称'
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
				dataField:'cSpecTbSuppmateral',
				label:{
					text:'规格型号'
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
				dataField:'cUnitTbSuppmateral',
				label:{
					text:'单位'
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
				dataField:'cNumTbSuppmateral',
				label:{
					text:'数量'
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
				dataField:'cTotalnumTbSuppmateral',
				label:{
					text:'总数量'
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
				dataField:'cConnumTbSuppmateral',
				label:{
					text:'合同号'
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
				dataField:'cReceivcompTbSuppmateral',
				label:{
					text:'收货单位名称'
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
				dataField:'cReceaddressTbSuppmateral',
				label:{
					text:'收货单位地址'
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
				dataField:'cContacterTbSuppmateral',
				label:{
					text:'收方联系人'
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
				dataField:'cContacttellTbSuppmateral',
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
				dataField:'cOrdernumTbSuppmateral',
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
				dataField:'cSendtimeTbSuppmateral',
				label:{
					text:'发货时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cArrtimeTbSuppmateral',
				label:{
					text:'到货日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cSenderTbSuppmateral',
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
				dataField:'cReceiverTbSuppmateral',
				label:{
					text:'收货人'
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
				dataField:'cCreaterTbSuppmateral',
				label:{
					text:'创建人'
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
				dataField:'cCreatetimeTbSuppmateral',
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
				dataField:'cModifierTbSuppmateral',
				label:{
					text:'修改人'
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
				dataField:'cModifytimeTbSuppmateral',
				label:{
					text:'修改时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cRemarkTbSuppmateral',
				label:{
					text:'备注'
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
				dataField:'cStateTbSuppmateral',
				label:{
					text:'物资状态'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1,min:0,
			message: '长度超限，最长为1！'
		},		]
					},
			{
				dataField:'cMtidTbSuppmateral',
				label:{
					text:'业务主键'
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
				dataField:'cDrTbSuppmateral',
				label:{
					text:'删除标识'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1,min:0,
			message: '长度超限，最长为1！'
		},		]
					},
			{
				dataField:'cTimestampTbSuppmateral',
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
				dataField:'cSw01TbSuppmateral',
				label:{
					text:'扩展字段1'
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
				dataField:'cSw02TbSuppmateral',
				label:{
					text:'扩展字段2'
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
				dataField:'cSw03TbSuppmateral',
				label:{
					text:'扩展字段3'
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
				dataField:'cSw04TbSuppmateral',
				label:{
					text:'扩展字段4'
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
				dataField:'cSw05TbSuppmateral',
				label:{
					text:'扩展字段5'
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
				dataField:'cSw06TbSuppmateral',
				label:{
					text:'扩展字段6'
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
				dataField:'cSw07TbSuppmateral',
				label:{
					text:'扩展字段7'
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
				dataField:'cSw08TbSuppmateral',
				label:{
					text:'扩展字段8'
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
				dataField:'cSw09TbSuppmateral',
				label:{
					text:'扩展字段9'
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
				dataField:'cSw10TbSuppmateral',
				label:{
					text:'扩展字段10'
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
				dataField:'cSw11TbSuppmateral',
				label:{
					text:'扩展字段11'
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
				dataField:'cSw12TbSuppmateral',
				label:{
					text:'扩展字段12'
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
				dataField:'cSw13TbSuppmateral',
				label:{
					text:'扩展字段13'
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
				dataField:'cSw14TbSuppmateral',
				label:{
					text:'扩展字段14'
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
				dataField:'cSw15TbSuppmateral',
				label:{
					text:'扩展字段15'
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
				dataField:'cSw16TbSuppmateral',
				label:{
					text:'扩展字段16'
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
				dataField:'cContacterrTbSuppmateral',
				label:{
					text:'发货联系人'
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
				dataField:'cNoTbSuppmateral',
				label:{
					text:'序号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
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
		msg.data.gys01M1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
M1S11A_serDel_Judgment();
if(M1S11A_serDel_mark!='M1S11A_success' ){
}else{				$.ajax({         
					url:Cake.Piper.getAuthUrl('http://localhost:8081/mengsengAOP/GYS_01/M1S11A'),
					dataType: 'json',   //返回格式为json           
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					type: 'post',   //请求方式 get 或者post ,         
					contentType: 'application/json',         
					success: function (data) {         
						let select = data.msg         
						if(data.errcode == 0){         
				DevExpress.ui.notify(data.msg,'success',3000) 
var websocketData = ['[{"objId":"GYS_01_websocket","funName":"GYS_01","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"AUD"}]']
send(websocketData)
    	   }else { 
				DevExpress.ui.notify(data.msg,'error',120000) 
			return; 
			}
							M1S11_serDel() ;         

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
				dataField:'cIdTbSuppmateral',
				label:{
					text:'物资主键'
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
				dataField:'cContphoneTbSuppmateral',
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
				dataField:'cGoodsnameTbSuppmateral',
				label:{
					text:'货物名称'
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
				dataField:'cSpecTbSuppmateral',
				label:{
					text:'规格型号'
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
				dataField:'cUnitTbSuppmateral',
				label:{
					text:'单位'
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
				dataField:'cNumTbSuppmateral',
				label:{
					text:'数量'
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
				dataField:'cTotalnumTbSuppmateral',
				label:{
					text:'总数量'
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
				dataField:'cConnumTbSuppmateral',
				label:{
					text:'合同号'
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
				dataField:'cReceivcompTbSuppmateral',
				label:{
					text:'收货单位名称'
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
				dataField:'cReceaddressTbSuppmateral',
				label:{
					text:'收货单位地址'
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
				dataField:'cContacterTbSuppmateral',
				label:{
					text:'收方联系人'
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
				dataField:'cContacttellTbSuppmateral',
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
				dataField:'cOrdernumTbSuppmateral',
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
				dataField:'cSendtimeTbSuppmateral',
				label:{
					text:'发货时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cArrtimeTbSuppmateral',
				label:{
					text:'到货日期'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cSenderTbSuppmateral',
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
				dataField:'cReceiverTbSuppmateral',
				label:{
					text:'收货人'
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
				dataField:'cCreaterTbSuppmateral',
				label:{
					text:'创建人'
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
				dataField:'cCreatetimeTbSuppmateral',
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
				dataField:'cModifierTbSuppmateral',
				label:{
					text:'修改人'
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
				dataField:'cModifytimeTbSuppmateral',
				label:{
					text:'修改时间'
				},
      editorType: 'dxDateBox',
      editorOptions: {
      displayFormat: 'yyyy-MM-dd',
      type: 'datetime',
						},
		validationRules: [		]
					},
			{
				dataField:'cRemarkTbSuppmateral',
				label:{
					text:'备注'
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
				dataField:'cStateTbSuppmateral',
				label:{
					text:'物资状态'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1,min:0,
			message: '长度超限，最长为1！'
		},		]
					},
			{
				dataField:'cMtidTbSuppmateral',
				label:{
					text:'业务主键'
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
				dataField:'cDrTbSuppmateral',
				label:{
					text:'删除标识'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1,min:0,
			message: '长度超限，最长为1！'
		},		]
					},
			{
				dataField:'cTimestampTbSuppmateral',
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
				dataField:'cSw01TbSuppmateral',
				label:{
					text:'扩展字段1'
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
				dataField:'cSw02TbSuppmateral',
				label:{
					text:'扩展字段2'
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
				dataField:'cSw03TbSuppmateral',
				label:{
					text:'扩展字段3'
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
				dataField:'cSw04TbSuppmateral',
				label:{
					text:'扩展字段4'
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
				dataField:'cSw05TbSuppmateral',
				label:{
					text:'扩展字段5'
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
				dataField:'cSw06TbSuppmateral',
				label:{
					text:'扩展字段6'
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
				dataField:'cSw07TbSuppmateral',
				label:{
					text:'扩展字段7'
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
				dataField:'cSw08TbSuppmateral',
				label:{
					text:'扩展字段8'
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
				dataField:'cSw09TbSuppmateral',
				label:{
					text:'扩展字段9'
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
				dataField:'cSw10TbSuppmateral',
				label:{
					text:'扩展字段10'
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
				dataField:'cSw11TbSuppmateral',
				label:{
					text:'扩展字段11'
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
				dataField:'cSw12TbSuppmateral',
				label:{
					text:'扩展字段12'
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
				dataField:'cSw13TbSuppmateral',
				label:{
					text:'扩展字段13'
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
				dataField:'cSw14TbSuppmateral',
				label:{
					text:'扩展字段14'
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
				dataField:'cSw15TbSuppmateral',
				label:{
					text:'扩展字段15'
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
				dataField:'cSw16TbSuppmateral',
				label:{
					text:'扩展字段16'
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
				dataField:'cContacterrTbSuppmateral',
				label:{
					text:'发货联系人'
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
				dataField:'cNoTbSuppmateral',
				label:{
					text:'序号'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},		]
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
		msg.data.gys01M1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
M1S11U_serDel_Judgment();
if(M1S11U_serDel_mark!='M1S11U_success' ){
}else{				$.ajax({         
					url:Cake.Piper.getAuthUrl('http://localhost:8081/mengsengAOP/GYS_01/M1S11U'),
					dataType: 'json',   //返回格式为json           
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					type: 'post',   //请求方式 get 或者post ,         
					contentType: 'application/json',         
					success: function (data) {         
						let select = data.msg         
						if(data.errcode == 0){         
				DevExpress.ui.notify(data.msg,'success',3000) 
var websocketData = ['[{"objId":"GYS_01_websocket","funName":"GYS_01","funType":"M1S11","tbName":"TB_SUPPMATERAL","dataId":"AUD"}]']
send(websocketData)
    	   }else { 
				DevExpress.ui.notify(data.msg,'error',120000) 
			return; 
			}
							M1S11_serDel() ;         

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
			text:'取消',         
			icon:'remove',         
			onClick:function(){         
				addIns.hide()          
			}         
		})         
	}         
//Script ------------------------------------
	}) 		    