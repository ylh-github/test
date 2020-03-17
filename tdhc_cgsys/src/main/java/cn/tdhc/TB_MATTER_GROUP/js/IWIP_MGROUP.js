
///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S13addIns;
let M1S11addIns;
let M1S12addIns;
let PA0Q1addIns;
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

var userId='IWIP_MGROUP_websocket';
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
var data = ['[{"objId":"IWIP_MGROUP_websocket","funName":"IWIP_MGROUP","funType":"M1S11","tbName":"TB_MATTER_GROUP","dataId":"A"},]']
send(data)
};
websocket.onmessage = function(evnt) {
var jsons = eval('(' + evnt.data + ')');
var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:IWIP_MGROUP');
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
						dataField:'cMatCodeTbMatterGroup',
						label:{
							text:'物料组编码'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cParentIdTbMatterGroup',
						label:{
							text:'上级物料组编码'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cEnaemTbMatterGroup',
						label:{
							text:'英文名称'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cCnameTbMatterGroup',
						label:{
							text:'中文名称'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cUpUserTbMatterGroup',
						label:{
							text:'修改人'
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
			text: 'M1S11Q',
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
												name:'M1S11A',
				icon: 'plus',
			text: '增加',
				onClick: function(){
					change='1'; 
					$('#addmotai').show()
				addIns = $('#addmotai').dxPopup({
						width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
						height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
					}).dxPopup('instance')
				addIns.option('title', 'IWIP_MGROUP')
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
			name:'M1S11U',
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
					addIns.option('title', 'IWIP_MGROUP');    
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
			name:'M1S11D',
			text: '物理删除',
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

		msg.data.iwipMgroupM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
				console.log(msg) 
M1S11D_serDel_Judgment();
if(M1S11D_serDel_mark!='M1S11D_success' ){
}else{				$.ajax({ 
					url:Cake.Piper.getAuthUrl('http://localhost:8070/mengsengAOP/IWIP_MGROUP/M1S11D'),					dataType: 'json',   //返回格式为json   
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
					type: 'post',   //请求方式 get 或者post , 
					contentType: 'application/json', 
					success: function (data) { 
						let select = data.msg 
						if(data.errcode == 0){ 
							DevExpress.ui.notify(data.msg, 'success', 3000);  
							M1S11_serDel() ;         
var websocketData = ['[{"objId":"IWIP_MGROUP_websocket","funName":"IWIP_MGROUP","funType":"M1S11","tbName":"TB_MATTER_GROUP","dataId":"AUD"}]']
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
		}, 		{
location: "before",
locateInMenu: 'auto',
widget: "dxButton",
options: {
									height: "auto",
									width: "auto",
													icon: 'save',     
			name:'M1S12MSG',
			text: '导入',
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
					//	DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
						return;    
					} 
					M1S12_Msgfun()    
				}    
			}    
		},    		{
location: "before",
locateInMenu: 'auto',
widget: "dxButton",
options: {
									height: "auto",
									width: "auto",
													icon: 'save',     
			name:'M1S13MSG',
			text: '逻辑删除',
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
					//	DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
						return;    
					} 
					M1S13_Msgfun()    
				}    
			}    
		},    
   		
   		];

////////////////////////////////////
//////表格属性生成/////////////////)
////////////////////////////////////
		var	dataGridS1columns=[     
				{ 
					dataField: 'cIdTbMatterGroup',
					caption: '物料组编码ID',
				},
				{ 
					dataField: 'cMatCodeTbMatterGroup',
					caption: '物料组编码',
				},
				{ 
					dataField: 'cParentIdTbMatterGroup',
					caption: '上级物料组编码',
				},
				{ 
					dataField: 'cEnaemTbMatterGroup',
					caption: '英文名称',
				},
				{ 
					dataField: 'cCnameTbMatterGroup',
					caption: '中文名称',
				},
				{ 
					dataField: 'cFcnameTbMatterGroup',
					caption: '繁体中文名称',
				},
				{ 
					dataField: 'cBaseCodeTbMatterGroup',
					caption: '对应的分类标准编码',
				},
				{ 
					dataField: 'cEdescrideTbMatterGroup',
					caption: '英文描述',
				},
				{ 
					dataField: 'cCdescrideTbMatterGroup',
					caption: '简体中文描述',
				},
				{ 
					dataField: 'cFdescrideTbMatterGroup',
					caption: '繁体中文描述',
				},
				{ 
					dataField: 'cCreateUserTbMatterGroup',
					caption: '创建人',
				},
				{ 
					dataField: 'cCtimeTbMatterGroup',
					caption: '创建时间',
				},
				{ 
					dataField: 'cUpUserTbMatterGroup',
					caption: '修改人',
				},
				{ 
					dataField: 'cUptimeTbMatterGroup',
					caption: '修改时间',
				},
				{ 
					dataField: 'cDelteUserTbMatterGroup',
					caption: '删除人',
				},
				{ 
					dataField: 'cDeluserTbMatterGroup',
					caption: '删除时间',
				},
				{ 
					dataField: 'cDrTbMatterGroup',
					caption: '删除标识',
				},
				{ 
					dataField: 'cTimestampTbMatterGroup',
					caption: '时间戳',
				},
				{ 
					dataField: 'reserve1TbMatterGroup',
					caption: '备用字段1',
				},
				{ 
					dataField: '备用字段2TbMatterGroup',
					caption: '备用字段2',
				},
				{ 
					dataField: '备用字段3TbMatterGroup',
					caption: '备用字段3',
				},
				{ 
					dataField: '备用字段4TbMatterGroup',
					caption: '备用字段4',
				},
				{ 
					dataField: '备用字段5TbMatterGroup',
					caption: '备用字段5',
				},
				{ 
					dataField: '备用字段6TbMatterGroup',
					caption: '备用字段6',
				},
				{ 
					dataField: '备用字段7TbMatterGroup',
					caption: '备用字段7',
				},
				{ 
					dataField: '备用字段8TbMatterGroup',
					caption: '备用字段8',
				},
				{ 
					dataField: '备用字段9TbMatterGroup',
					caption: '备用字段9',
				},
				{ 
					dataField: '备用字段10TbMatterGroup',
					caption: '备用字段10',
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
		msg.data.iwipMgroupM1s1 = [searchdataFormM1.option('formData')];M1S11Q_serDel_Judgment();
if(M1S11Q_serDel_mark!='M1S11Q_success' ){
}else{
		$.ajax({    
			url:Cake.Piper.getAuthUrl('http://localhost:8070/mengsengAOP/IWIP_MGROUP/M1S11Q'),
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
				select = data.data.iwipMgroupM1s1
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
				dataField:'cIdTbMatterGroup',
				label:{
					text:'物料组编码ID'
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
				dataField:'cMatCodeTbMatterGroup',
				label:{
					text:'物料组编码'
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
				dataField:'cParentIdTbMatterGroup',
				label:{
					text:'上级物料组编码'
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
				dataField:'cEnaemTbMatterGroup',
				label:{
					text:'英文名称'
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
				dataField:'cCnameTbMatterGroup',
				label:{
					text:'中文名称'
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
				dataField:'cFcnameTbMatterGroup',
				label:{
					text:'繁体中文名称'
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
				dataField:'cBaseCodeTbMatterGroup',
				label:{
					text:'对应的分类标准编码'
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
				dataField:'cEdescrideTbMatterGroup',
				label:{
					text:'英文描述'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1000,min:0,
			message: '长度超限，最长为1000！'
		},		]
					},
			{
				dataField:'cCdescrideTbMatterGroup',
				label:{
					text:'简体中文描述'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1000,min:0,
			message: '长度超限，最长为1000！'
		},		]
					},
			{
				dataField:'cFdescrideTbMatterGroup',
				label:{
					text:'繁体中文描述'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1000,min:0,
			message: '长度超限，最长为1000！'
		},		]
					},
			{
				dataField:'cCreateUserTbMatterGroup',
				label:{
					text:'创建人'
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
				dataField:'cCtimeTbMatterGroup',
				label:{
					text:'创建时间'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'cUpUserTbMatterGroup',
				label:{
					text:'修改人'
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
				dataField:'cUptimeTbMatterGroup',
				label:{
					text:'修改时间'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'cDelteUserTbMatterGroup',
				label:{
					text:'删除人'
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
				dataField:'cDeluserTbMatterGroup',
				label:{
					text:'删除时间'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'cDrTbMatterGroup',
				label:{
					text:'删除标识'
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
				dataField:'cTimestampTbMatterGroup',
				label:{
					text:'时间戳'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'reserve1TbMatterGroup',
				label:{
					text:'备用字段1'
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
				dataField:'备用字段2TbMatterGroup',
				label:{
					text:'备用字段2'
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
				dataField:'备用字段3TbMatterGroup',
				label:{
					text:'备用字段3'
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
				dataField:'备用字段4TbMatterGroup',
				label:{
					text:'备用字段4'
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
				dataField:'备用字段5TbMatterGroup',
				label:{
					text:'备用字段5'
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
				dataField:'备用字段6TbMatterGroup',
				label:{
					text:'备用字段6'
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
				dataField:'备用字段7TbMatterGroup',
				label:{
					text:'备用字段7'
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
				dataField:'备用字段8TbMatterGroup',
				label:{
					text:'备用字段8'
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
				dataField:'备用字段9TbMatterGroup',
				label:{
					text:'备用字段9'
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
				dataField:'备用字段10TbMatterGroup',
				label:{
					text:'备用字段10'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
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
		msg.data.iwipMgroupM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
M1S11A_serDel_Judgment();
if(M1S11A_serDel_mark!='M1S11A_success' ){
}else{				$.ajax({         
					url:Cake.Piper.getAuthUrl('http://localhost:8070/mengsengAOP/IWIP_MGROUP/M1S11A'),
					dataType: 'json',   //返回格式为json           
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					type: 'post',   //请求方式 get 或者post ,         
					contentType: 'application/json',         
					success: function (data) {         
						let select = data.msg         
						if(data.errcode == 0){         
				DevExpress.ui.notify(data.msg,'success',3000) 
var websocketData = ['[{"objId":"IWIP_MGROUP_websocket","funName":"IWIP_MGROUP","funType":"M1S11","tbName":"TB_MATTER_GROUP","dataId":"AUD"}]']
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
				dataField:'cIdTbMatterGroup',
				label:{
					text:'物料组编码ID'
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
				dataField:'cMatCodeTbMatterGroup',
				label:{
					text:'物料组编码'
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
				dataField:'cParentIdTbMatterGroup',
				label:{
					text:'上级物料组编码'
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
				dataField:'cEnaemTbMatterGroup',
				label:{
					text:'英文名称'
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
				dataField:'cCnameTbMatterGroup',
				label:{
					text:'中文名称'
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
				dataField:'cFcnameTbMatterGroup',
				label:{
					text:'繁体中文名称'
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
				dataField:'cBaseCodeTbMatterGroup',
				label:{
					text:'对应的分类标准编码'
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
				dataField:'cEdescrideTbMatterGroup',
				label:{
					text:'英文描述'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1000,min:0,
			message: '长度超限，最长为1000！'
		},		]
					},
			{
				dataField:'cCdescrideTbMatterGroup',
				label:{
					text:'简体中文描述'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1000,min:0,
			message: '长度超限，最长为1000！'
		},		]
					},
			{
				dataField:'cFdescrideTbMatterGroup',
				label:{
					text:'繁体中文描述'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:1000,min:0,
			message: '长度超限，最长为1000！'
		},		]
					},
			{
				dataField:'cCreateUserTbMatterGroup',
				label:{
					text:'创建人'
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
				dataField:'cCtimeTbMatterGroup',
				label:{
					text:'创建时间'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'cUpUserTbMatterGroup',
				label:{
					text:'修改人'
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
				dataField:'cUptimeTbMatterGroup',
				label:{
					text:'修改时间'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'cDelteUserTbMatterGroup',
				label:{
					text:'删除人'
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
				dataField:'cDeluserTbMatterGroup',
				label:{
					text:'删除时间'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'cDrTbMatterGroup',
				label:{
					text:'删除标识'
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
				dataField:'cTimestampTbMatterGroup',
				label:{
					text:'时间戳'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		]
					},
			{
				dataField:'reserve1TbMatterGroup',
				label:{
					text:'备用字段1'
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
				dataField:'备用字段2TbMatterGroup',
				label:{
					text:'备用字段2'
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
				dataField:'备用字段3TbMatterGroup',
				label:{
					text:'备用字段3'
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
				dataField:'备用字段4TbMatterGroup',
				label:{
					text:'备用字段4'
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
				dataField:'备用字段5TbMatterGroup',
				label:{
					text:'备用字段5'
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
				dataField:'备用字段6TbMatterGroup',
				label:{
					text:'备用字段6'
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
				dataField:'备用字段7TbMatterGroup',
				label:{
					text:'备用字段7'
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
				dataField:'备用字段8TbMatterGroup',
				label:{
					text:'备用字段8'
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
				dataField:'备用字段9TbMatterGroup',
				label:{
					text:'备用字段9'
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
				dataField:'备用字段10TbMatterGroup',
				label:{
					text:'备用字段10'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:100,min:0,
			message: '长度超限，最长为100！'
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
		msg.data.iwipMgroupM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
M1S11U_serDel_Judgment();
if(M1S11U_serDel_mark!='M1S11U_success' ){
}else{				$.ajax({         
					url:Cake.Piper.getAuthUrl('http://localhost:8070/mengsengAOP/IWIP_MGROUP/M1S11U'),
					dataType: 'json',   //返回格式为json           
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					type: 'post',   //请求方式 get 或者post ,         
					contentType: 'application/json',         
					success: function (data) {         
						let select = data.msg         
						if(data.errcode == 0){         
				DevExpress.ui.notify(data.msg,'success',3000) 
var websocketData = ['[{"objId":"IWIP_MGROUP_websocket","funName":"IWIP_MGROUP","funType":"M1S11","tbName":"TB_MATTER_GROUP","dataId":"AUD"}]']
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
	//代码需要重新定义 
	function  M1S12_Msgfun(){    
		msg = {   
			ver: '53cc62f6122a436083ec083eed1dc03d',   
			session: '42f5c0d7178148938f4fda29460b815a',   
			tag: {},   
			data: {   
	 			}   
			};     
		msg.data.iwipMgroupM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();M1S12MSG_serDel_Judgment();
if(M1S12MSG_serDel_mark!='M1S12MSG_success' ){
}else{
		$.ajax({    
			url:Cake.Piper.getAuthUrl('http://localhost:8070/mengsengAOP/IWIP_MGROUP/M1S12MSG'),
			dataType: 'json',   //返回格式为json      
			async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
			type: 'post',   //请求方式 get 或者post ,       
			contentType: 'application/json',       
			success: function (data) {               if(data.errcode == "0"){ 
				DevExpress.ui.notify(data.msg,'success',3000) 
var websocketData = ['[{"objId":"IWIP_MGROUP_websocket","funName":"IWIP_MGROUP","funType":"M1S12","tbName":"TB_MATTER_GROUP","dataId":"AUD"}]']
send(websocketData)
    	   }else { 
				DevExpress.ui.notify(data.msg,'error',120000) 
			return; 
			}
							M1S11_serDel() ;         


				},       
			error: function () {       
				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);       
				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
				//e.cancel=true;       
				}       
			})       
}
		}       
	//代码需要重新定义 
	function  M1S13_Msgfun(){    
		msg = {   
			ver: '53cc62f6122a436083ec083eed1dc03d',   
			session: '42f5c0d7178148938f4fda29460b815a',   
			tag: {},   
			data: {   
	 			}   
			};     
		msg.data.iwipMgroupM1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();M1S13MSG_serDel_Judgment();
if(M1S13MSG_serDel_mark!='M1S13MSG_success' ){
}else{
		$.ajax({    
			url:Cake.Piper.getAuthUrl('http://localhost:8070/mengsengAOP/IWIP_MGROUP/M1S13MSG'),
			dataType: 'json',   //返回格式为json      
			async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
			type: 'post',   //请求方式 get 或者post ,       
			contentType: 'application/json',       
			success: function (data) {               if(data.errcode == "0"){ 
				DevExpress.ui.notify(data.msg,'success',3000) 
var websocketData = ['[{"objId":"IWIP_MGROUP_websocket","funName":"IWIP_MGROUP","funType":"M1S13","tbName":"TB_MATTER_GROUP","dataId":"AUD"}]']
send(websocketData)
    	   }else { 
				DevExpress.ui.notify(data.msg,'error',120000) 
			return; 
			}
							M1S11_serDel() ;         


				},       
			error: function () {       
				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);       
				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
				//e.cancel=true;       
				}       
			})       
}
		}       
//Script ------------------------------------
	}) 		    