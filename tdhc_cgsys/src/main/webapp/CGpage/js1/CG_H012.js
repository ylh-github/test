
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

//var userId='ZZ_01_websocket';
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
//var data = ['[{"objId":"ZZ_01_websocket","funName":"ZZ_01","funType":"M1S11","tbName":"TB_CLUDECOMPANY","dataId":"A"},]']
//send(data)
//};
//websocket.onmessage = function(evnt) {
//var jsons = eval('(' + evnt.data + ')');
//var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:ZZ_01');
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
						dataField:'cItemdes',
						label:{
							text:'所属项目部'
						},
						editorOptions: {
							showClearButton: true,
						}
					},
					{
						dataField:'cSubitemid',
						label:{
							text:'项目'
						},
						editorOptions: {
						showClearButton: true,
						}
					},
					{
						dataField:'cDepartment',
						label:{
							text:'项目部门'
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
				addIns.option('title', '新增')
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
							 Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
							 DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
							return;   
						} 
				addIns = $('#addmotai').dxPopup({    
						//模态框增加name    
						width:1000,    
						height:450    
					}).dxPopup('instance')    
					addIns.option('title', '修改');    
					addIns.show();    
					// 调用模态框函数    
					// updatafun()    
					M1S11_Updatefun()   
					M1S11addIns.option('formData',new Object);  
					M1S11addIns.option('formData',rowsData);    
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

		msg.data.listTbItem = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//				console.log(msg) 
//M1S11D_serDel_Judgment();
//if(M1S11D_serDel_mark!='M1S11D_success' ){
//}else{				
	
					var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
				    result.done(function (dialogResult) {
				        if (dialogResult) {
				                cake.Ui.LoadPanel.show()
	
						$.ajax({ 
						url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/item/deleteItem'),					dataType: 'json',   //返回格式为json   
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
						type: 'post',   //请求方式 get 或者post , 
						contentType: 'application/json', 
						success: function (data) { 
							let select = data.msg 
							if(data.errcode == 0){ 
								DevExpress.ui.notify(data.msg, 'success', 3000);   
								M1S11_serDel() ;         
	/*var websocketData = ['[{"objId":"ZZ_01_websocket","funName":"ZZ_01","funType":"M1S11","tbName":"TB_CLUDECOMPANY","dataId":"AUD"}]']
	send(websocketData)*/
	
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
					cake.Ui.LoadPanel.close()
					})
//}
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
						text: '启用',
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

					msg.data.listTbItem = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//							console.log(msg) 
			//M1S11D_serDel_Judgment();
			//if(M1S11D_serDel_mark!='M1S11D_success' ){
			//}else{				
				
								var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
							    result.done(function (dialogResult) {
							        if (dialogResult) {
							                cake.Ui.LoadPanel.show()
				
									$.ajax({ 
									url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/item/enableItem'),					dataType: 'json',   //返回格式为json   
									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
									type: 'post',   //请求方式 get 或者post , 
									contentType: 'application/json', 
									success: function (data) { 
										let select = data.msg 
										if(data.errcode == 0){ 
											DevExpress.ui.notify(data.msg, 'success', 3000);   
											M1S11_serDel() ;         
				/*var websocketData = ['[{"objId":"ZZ_01_websocket","funName":"ZZ_01","funType":"M1S11","tbName":"TB_CLUDECOMPANY","dataId":"AUD"}]']
				send(websocketData)*/
				
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
								cake.Ui.LoadPanel.close()
								})
			//}
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
									text: '禁用',
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

								msg.data.listTbItem = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//										console.log(msg) 
						//M1S11D_serDel_Judgment();
						//if(M1S11D_serDel_mark!='M1S11D_success' ){
						//}else{				
							
											var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
										    result.done(function (dialogResult) {
										        if (dialogResult) {
										                cake.Ui.LoadPanel.show()
							
												$.ajax({ 
												url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/item/disableItem'),					dataType: 'json',   //返回格式为json   
												async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
												data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
												type: 'post',   //请求方式 get 或者post , 
												contentType: 'application/json', 
												success: function (data) { 
													let select = data.msg 
													if(data.errcode == 0){ 
														DevExpress.ui.notify(data.msg, 'success', 3000);   
														M1S11_serDel() ;         
							/*var websocketData = ['[{"objId":"ZZ_01_websocket","funName":"ZZ_01","funType":"M1S11","tbName":"TB_CLUDECOMPANY","dataId":"AUD"}]']
							send(websocketData)*/
							
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
											cake.Ui.LoadPanel.close()
											})
						//}
										} 
									} 
								}, 
//		 {
//            location: "before",
//            locateInMenu: 'auto',
//            widget: "dxButton",
//            options: {
//                height: "auto",
//                width: "auto",
//                icon: "add",
//                text: "导入",
//                onClick: function(e) {
//                    importPopup.show();
//                },
//            }
//        },
   		
   		];

////////////////////////////////////
//////表格属性生成/////////////////)
////////////////////////////////////
		var	dataGridS1columns=[     
				{ 
					dataField: 'cItemdes',
					caption: '所属项目部',
					width: 'auto',
        			alignment: 'left',
//					width:150,
				},
				{ 
					dataField: 'cSubitemid',
					caption: '项目',
					width: 'auto',
        			alignment: 'left',
//					width:160,
				},
				
				{ 
					dataField: 'cDepartment',
					caption: '项目部门',
					width: 'auto',
        			alignment: 'left',
//					width:180,
				},
				{ 
					dataField: 'cValue',
					caption: '扩展值',
					width: 'auto',
        			alignment: 'left',
				},
				{ 
					dataField: 'cCreater',
					caption: '创建人',
					width: 'auto',
        			alignment: 'left',
//					width:150,
				},
				{ 
					dataField: 'cModifier',
					caption: '修改人',
					width: 'auto',
        			alignment: 'left',
//					width:180,
				},
			]
     
	$('#dataGridS1').dxDataGrid({    
     deferRendering : false, 
     columnResizingMode: "widget",
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
			height:'100%',                      
			paging: {        
				enabled: false     
				},     
			scrolling: {     
				mode: 'virtual'     
					},     
			selection: {     
				mode: 'multiple'  
//				mode: 'single'
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
		msg.data.tbItem = searchdataFormM1.option('formData');
//		M1S11Q_serDel_Judgment();
//if(M1S11Q_serDel_mark!='M1S11Q_success' ){
//}else{
		$.ajax({    
			url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/item/searchItem'),
			dataType: 'json',   //返回格式为json      
			async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
			type: 'post',   //请求方式 get 或者post ,       
			contentType: 'application/json',       
			success: function (data) {       
				console.log(data.data);
				if(data.data == null){       
tabledataS1.splice(0, tabledataS1.length); 
					$('#dataGridS1').dxDataGrid('instance').option('dataSource',tabledataS1)       
					return       
					}       

 let select ;
				select = data.data
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
//}
		}       
	function M1S11_addfun(){        
		M1S11addIns = $('#addForm').dxForm({        
		formData:adddata,        
		validationGroup: validationGroupName,        
		colCount: 3,        
		items: [        
			{
				dataField:'cItemdes',
				label:{
					text:'所属项目'
				},
				editorOptions: {
					showClearButton: true,
				},
				validationRules: [		{
					type: 'stringLength',max:4000,min:0,
					message: '长度超限，最长为4000！'
				},	{
					type: 'required',
					message: '必填！'
				},		]
			},
			{
				dataField:'cSubitemid',
				label:{
					text:'项目'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},	{
			type: 'required',
			message: '必填！'
		},	]
					},
			{
				dataField:'cDepartment',
				label:{
					text:'项目部门'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},	{
			type: 'required',
			message: '必填！'
		},		]
					},
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
		msg.data.listTbItem = [M1S11addIns.option('formData')];
				//change等于1为添加         
//M1S11A_serDel_Judgment();
//if(M1S11A_serDel_mark!='M1S11A_success' ){
//}else{				
	
	var result = DevExpress.ui.dialog.confirm("您确定要提交吗?", "确认提交");
	result.done(function (dialogResult) {
		if (dialogResult) {
			cake.Ui.LoadPanel.show()
			$.ajax({         
					url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/item/addItem'),
					dataType: 'json',   //返回格式为json           
					async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
					data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					type: 'post',   //请求方式 get 或者post ,         
					contentType: 'application/json',         
					success: function (data) {         
						let select = data.msg         
						if(data.errcode == 0){         
				DevExpress.ui.notify(data.msg,'success',3000) 
/*var websocketData = ['[{"objId":"ZZ_01_websocket","funName":"ZZ_01","funType":"M1S11","tbName":"TB_CLUDECOMPANY","dataId":"AUD"}]']
send(websocketData)*/
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
				cake.Ui.LoadPanel.close();
			}) 	
//}
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
			dataField:'cItemdes',
			label:{
				text:'所属项目部'
			},
			editorOptions: {
				showClearButton: true,
			},
			validationRules: [		{
				type: 'stringLength',max:4000,min:0,
				message: '长度超限，最长为4000！'
			},	{
				type: 'required',
				message: '必填！'
			},	]
		},
			{
				dataField:'cSubitemid',
				label:{
					text:'项目'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},	{
			type: 'required',
			message: '必填！'
		},	]
					},
			{
				dataField:'cDepartment',
				label:{
					text:'项目部门'
				},
      editorOptions: {
      showClearButton: true,
						},
		validationRules: [		{
			type: 'stringLength',max:4000,min:0,
			message: '长度超限，最长为4000！'
		},{
			type: 'required',
			message: '必填！'
		},]
					},
		]
	}).dxForm('instance')
		$('#addsure').dxButton({          
			text:'确定',          
			icon:'todo',          
			validationGroup: validationGroupName,          
			onClick:function(e){          
				let validateResult = e.validationGroup.validate();          
				if (!validateResult.isValid) {          
					DevExpress.ui.notify('请输入相关信息', 'info', 3000);          
					return;          
				}          
				msg = {          
					ver: '53cc62f6122a436083ec083eed1dc03d',          
					session: '42f5c0d7178148938f4fda29460b815a',          
					tag: {},          
					data: {},          
				};          
//				let grid = $('#dataGridS1').dxDataGrid('instance');     
//				let rowsData1 = grid.getSelectedRowsData()[0]  
//				msg.data.zzm1s1 = rowsData1;
				msg.data.listTbItem = [M1S11addIns.option('formData')];
				//change等于1为添加         
//M1S11U_serDel_Judgment();
//if(M1S11U_serDel_mark!='M1S11U_success' ){
//}else{				
			var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
		    result.done(function (dialogResult) {
		        if (dialogResult) {
		                cake.Ui.LoadPanel.show()	
		
						$.ajax({         
						url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/item/updateItem'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',         
						success: function (data) {         
							let select = data.msg         
							if(data.errcode == 0){         
					DevExpress.ui.notify(data.msg,'success',3000) 
	/*var websocketData = ['[{"objId":"ZZ_01_websocket","funName":"ZZ_01","funType":"M1S11","tbName":"TB_CLUDECOMPANY","dataId":"AUD"}]']
	send(websocketData)*/
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
			cake.Ui.LoadPanel.close()
			}) 
//}
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
	
	// ==========================导入==============================
    let importPopup = $('#import-content').dxPopup({
        deferRendering: false,
        height: 200,
        width: 600,
    }).dxPopup('instance');
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
                            DevExpress.ui.notify('正在导入，请稍等。。。', "success", 3000);
                            console.log(localStorage.getItem('updata'));
                            console.log(localStorage.getItem('updata'))
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/ZZ_01/Import_CompExcel'),
                                type: 'POST',
                                dataType: 'json',
                                contentType: "application/json; charset=utf-8",
                                data: localStorage.getItem('updata'),
                                success: function(data) {
                                    importPopup.hide();
                                    $("#upInput").val("");
                                    localStorage.clear('updata');
                                    DevExpress.ui.notify(data.msg, "success", 3000);
                                    M1S11_serDel()
                                },
                                error: function(err) {
                                    DevExpress.ui.notify('导入失败', "error", 3000);
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

	}) 
	
function importf(obj) {
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
        tables = tables.replace(/公司名称/g, 'cCludecom');
        tables = tables.replace(/公司地址/g, 'cComaddress');
        tables = tables.replace(/开户银行/g, 'cCombankname');
        tables = tables.replace(/账号/g, 'cComaccountno');
        tables = tables.replace(/税号/g, 'cComtaxnumber');
        tables = tables.replace(/电话/g, 'cComphone');
        tables = tables.replace(/传真/g, 'cComfaxno');
        tables = tables.replace(/签订地点/g, 'cSw01');
      
        updata.data = {}
        updata.data.tbCludecompany = JSON.parse(tables);

        console.log(updata);
        localStorage.setItem('updata', JSON.stringify(updata));
    };
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}