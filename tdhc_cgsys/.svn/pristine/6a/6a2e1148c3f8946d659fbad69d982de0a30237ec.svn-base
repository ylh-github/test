///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let TP_CGORDERMT_C_MITTYPE = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_ALLOTSTATE = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_DEPTOR = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_AUDITTYPE = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_MUSTNEED = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_PLANOR = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_DEPTAPPLY = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_STATE = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_COMNAME = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_USER = []
let C0041addIns;
let S1S21addIns;
let C0061addIns;
let M1S11addIns;
let C0091addIns;
let C0031addIns;
let C0071addIns;
let C0021addIns;
let C0051addIns;
let S1S22addIns;
let S1S23addIns;
let C0011addIns;
let C0081addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
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
let wanchengzhuangtai = []
let shifoujixu = []
let shenhezhuangtai = []
let tijiaozhuangtai = []
let caigoubumen = []
let caigouyuan = []
let caigoujindu = []
let fenpeizhuangtai = []
let caigouzhuangtai = []
let wuzileixing = []
let shenqingbumen = []
let gongsi = []
let bumenmingcheng = []

//查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
$(function() {
    start() //调用初始化函数
    ////////////////////////////////////
    //////查询Form属性生成/////////////////)
    ////////////////////////////////////
    //以下为查询form的代码
    searchdataFormM1 = $('#searchFormM1').dxForm({
        formData: searchdataM1,
        ////当参数小于三个时为五个,大于等于三时统一乘二
        ////王晶晶给改为自适应编码
        colCountByScreen: {
            lg: 7,
            md: 2,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [
            {
                dataField: 'cOrdernum',
                label: {
                    text: '请购单号'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
            {
                dataField: 'cComname',
                label: {
                    text: '请购项目'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: TP_CGORDERMT_C_COMNAME,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cDeptapply',
                label: {
                    text: '请购部门'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: TP_CGORDERMT_C_DEPTAPPLY,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cManapply',
                label: {
                    text: '请购人'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
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
                    value: new Date(),
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
        	{
                dataField: 'cManor',
                label: {
                    text: '采购员'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: caigouyuan,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                    readOnly:true,
                }
           
        	},
//            {
//                dataField: 'cState',
//                label: {
//                    text: '完成状态'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: TP_CGORDERMT_C_STATE,
//
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                }
//            }
        ]
    }).dxForm('instance')
    
    //完成对查询条件的自动生成
    ////////////////////////////////////
    //////表格属性生成/////////////////)
    ////////////////////////////////////
    $('#dataGridS1').dxDataGrid({
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
        noDataText: '',
        //允许脚本编写     
        height: '100%',
        width:'100%',
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'multiple'
        },
        columns: [
        	{
                dataField: 'cOrdernum',
                caption: '请购单号',
            },
            {
                dataField: 'cComname',
                caption: '请购项目',
                calculateDisplayValue: function (rowData) {
                    let matchedItem = gongsi.find(item => item.cSubitemid == rowData.cComname);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cDeptapply',
                caption: '请购部门',
                 calculateDisplayValue: function (rowData) {
                    let matchedItem = bumenmingcheng.find(item => item.cSubitemid == rowData.cDeptapply);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cManapply',
                caption: '请购人',
            },
//            {
//                dataField: 'cAudittype',
//                caption: '审核状态',
//                 calculateDisplayValue: function (rowData) {
//
//                     let matchedItem = shenhezhuangtai.find(item => item.cSubitemid == rowData.cAudittype);
//
//                    if (matchedItem == null || matchedItem == undefined) {
//                        return "";
//                    } else {
//                        return matchedItem.cSubitemdes;
//                    }
//
//                }
//            },
//            {
//                dataField: 'cAudittime',
//                caption: '审核时间',
//                dataType: "date",
//                format: "yyyy-MM-dd"
//            },
//            {
//                dataField: 'cAuditman',
//                caption: '审核人',
//            },
            {
                dataField: 'cMittype',
                caption: '提交状态',
                calculateDisplayValue: function (rowData) {
                    let matchedItem = tijiaozhuangtai.find(item => item.cSubitemid == rowData.cMittype);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cMitman',
                caption: '提交人',
            },
            {
                dataField: 'cMittime',
                caption: '提交时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cState',
                caption: '完成状态',
                calculateDisplayValue: function (rowData) {
                    let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
            {
                dataField: 'cTimeapply',
                caption: '申请日期',
                dataType: "date",
                format: "yyyy-MM-dd"
                
            },
//            {
//                dataField: 'cTimetake',
//                caption: '收单日期',
//                dataType: "date",
//                format: "yyyy-MM-dd"
//            },
             {
                dataField: 'cCreater',
                caption: '创建人',
            },
            {
                dataField: 'cCreatetime',
                caption: '创建时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cModifier',
                caption: '修改人',
            },
            {
                dataField: 'cModifytime',
                caption: '修改时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cId',
                caption: '请购单编码',
            },
        ]
    });
    $('#dataGridS2').dxDataGrid({
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
        noDataText: '',
        //允许脚本编写     
         height: '100%',
        width:'100%',
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'multiple'
        },
        columns: [
            {
                dataField: 'cMustneed',
                caption: '采购类型',
                 calculateDisplayValue: function (rowData) {
                    let matchedItem = shifoujixu.find(item => item.cSubitemid == rowData.cMustneed);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
        	{
                dataField: 'cGoodsname',
                caption: '货物名称',
            },
            {
                dataField: 'cSpec',
                caption: '规格型号',
            },
            {
                dataField: 'cNum',
                caption: '请购数量',
            },
            {
                dataField: 'cUnit',
                caption: '单位',
            },
//            {
//                dataField: 'cDeptor',
//                caption: '采购部门',
//                  calculateDisplayValue: function (rowData) {
//                    let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cDeptor);
//                    if (matchedItem == null || matchedItem == undefined) {
//                        return "";
//                    } else {
//                        return matchedItem.cSubitemdes;
//                    }
//                }
//            },
            {
                dataField: 'cManor',
                caption: '采购员',
                calculateDisplayValue: function (rowData) {
                    let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cManor);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cPhone',
                caption: '采购员联系方式',
            },
            {
                dataField: 'cOrdealline',
                caption: '采购期限',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cArrtime',
                caption: '要求到货时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
//            {
//                dataField: 'cPlanor',
//                caption: '采购进度',
//                calculateDisplayValue: function (rowData) {
//
//                    let matchedItem = caigoujindu.find(item => item.cSubitemid == rowData.cPlanor);
//
//                    if (matchedItem == null || matchedItem == undefined) {
//                        return "";
//                    } else {
//                        return matchedItem.cSubitemdes;
//                    }
//
//                }
//            },
//            {
//                dataField: 'cPlantime',
//                caption: '采购进度时间',
//                dataType: "date",
//                format: "yyyy-MM-dd"
//            },
//            {
//                dataField: 'cPolinormtime',
//                caption: '报警标准时间/天',
//            },
//            {
//                dataField: 'cPolitime',
//                caption: '报警时间',
//                dataType: "date",
//                format: "yyyy-MM-dd"
//            },
            {
                dataField: 'cAllotman',
                caption: '分配人',
            },
            {
                dataField: 'cAllottime',
                caption: '分配时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cState',
                caption: '采购状态',
                calculateDisplayValue: function (rowData) {
                    let matchedItem = caigouzhuangtai.find(item => item.cSubitemid == rowData.cState);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
//            {
//                dataField: 'cTypename',
//                caption: '类型',
//                calculateDisplayValue: function (rowData) {
//
//                    let matchedItem = wuzileixing.find(item => item.cSubitemid == rowData.cTypename);
//
//                    if (matchedItem == null || matchedItem == undefined) {
//                        return "";
//                    } else {
//                        return matchedItem.cSubitemdes;
//                    }
//
//                }
//            },
            {
                dataField: 'cCreater',
                caption: '创建人',
            },
            {
                dataField: 'cCreatetime',
                caption: '创建时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cModifier',
                caption: '修改人',
            },
            {
                dataField: 'cModifytime',
                caption: '修改时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
        ]
    });
    ////////////////////////////////////////////////////
    ////生成按钮层//////////////////////////////////////
    ////////////////////////////////////////////////////
    $('#operateFormM1S1').dxForm({
        width: '100%',
        colCount: 16,
        items: [{
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '查询', //M1S11Q 改为 查询
                    onClick: function() {
                        M1S11_serDel();
                    	M1S21_SSRT();
                    }
                }
            },
            // {
            // 	name:'M1S11A',
            // 	itemType: 'button',
            // 	buttonOptions: {
            // 		icon: 'plus',
            // 	text: '增加', //M1S11A改为 增加
            // 		onClick: function(){
            // 			change='1'; 
            // 			$('#addmotai').show()
            // 		addIns = $('#addmotai').dxPopup({
            // 				width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
            // 				height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
            // 			}).dxPopup('instance')
            // 		addIns.option('title', 'CG_Q003')
            // 		addIns.show();
            // 		M1S11_addfun();
            // 		M1S11addIns.option('formData',new Object())
            // 		}
            // 	}
            // },
            // {
            // 	name:'M1S11_U',
            // 	itemType: 'button',  
            // 	buttonOptions: {     
            // 		icon: 'save',     
            // 	text: '修改',//M1S11U  改为 修改
            // 		onClick: function(){     
            // 			change='2'     
            // 			let grid = $('#dataGridS1').dxDataGrid('instance');     
            // 			let rowsData = grid.getSelectedRowsData()[0]     
            // 			let selectedRowKeys = grid.getSelectedRowKeys()     
            // 				if (selectedRowKeys.length < 1) {     
            // 					// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
            // 					DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);     
            // 					return;     
            // 				}     
            // 				if (selectedRowKeys.length > 1) {    
            // 					// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
            // 					DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
            // 					return;    
            // 				} 
            // 		addIns = $('#addmotai').dxPopup({    
            // 				//模态框增加name    
            // 				width:1000,    
            // 				height:450    
            // 			}).dxPopup('instance')    
            // 			addIns.option('title', 'CG_Q003');    
            // 			addIns.show();    
            // 			// 调用模态框函数    
            // 			// updatafun()    
            // 			M1S11_Updatefun()    
            // 			M1S11addIns.option('formData',rowsData)    
            // 		}    
            // 	}    
            // },    
            // {
            // 	name:'M1S11D',
            // 	itemType: 'button',  
            // 	buttonOptions: {     
            // 		icon: 'remove',     
            // 	text: '删除', //M1S11D  删除
            // 	onClick: function(){                       
            // 		let grid1 = $('#dataGridS1').dxDataGrid('instance');  
            //   		let selectedRowKeys = grid1.getSelectedRowKeys()  
            // 		let rowsData = grid1.getSelectedRowsData()  
            // 		//脚本执行  
            // 		if (selectedRowKeys.length < 1) {  
            // 			DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);  
            // 			return; 
            // 		} 
            // 		msg = { 
            // 			ver: '53cc62f6122a436083ec083eed1dc03d', 
            // 			session: '42f5c0d7178148938f4fda29460b815a', 
            // 			tag: {}, 
            // 			data: { 
            // 					} 
            // 		}; 
            // 		//前后端统一叫'tscLtrawbin' 

            // msg.data.cgQ003M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
            // 		//console.log.log(msg) 
            // 		$.ajax({ 
            // 			url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/M1S11D'),					dataType: 'json',   //返回格式为json   
            // 			async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
            // 			data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
            // 			type: 'post',   //请求方式 get 或者post , 
            // 			contentType: 'application/json', 
            // 			success: function (data) { 
            // 				let select = data.msg 
            // 				if(data.errcode == 0){ 
            // 					DevExpress.ui.notify('删除成功', 'success', 3000);  
            // 					M1S11_serDel() ;         

            // 					} 
            // 				else{ 
            // 					DevExpress.ui.notify(select, 'warning', 3000); 
            // 					} 
            // 				}, 
            // 			error: function () { 
            // 				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000); 
            // 				} 
            // 			}) 
            // 		} 
            // 	} 
            // }, 
        ]
    })
    $('#operateFormS1S2').dxForm({
        width: '100%',
        colCount: 16,
        items: [
//        	{
//                name: 'S1S22MSG1',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '任务已接收', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '1'
//                        let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
//            {
//                name: 'S1S22MSG2',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '寻找供应商', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '2'
//                            let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
//            {
//                name: 'S1S22MSG3',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '询比价', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '3'
//                        let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
//            {
//                name: 'S1S22MSG4',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '订货', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '4'
//                            let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
//            {
//                name: 'S1S22MSG5',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '发货', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '5'
//                            let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
//            {
//                name: 'S1S22MSG6',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '到货', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '6'
//                            let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
//            {
//                name: 'S1S22MSG7',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '入库', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '7'
//                            let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
//            {
//                name: 'S1S22MSG8',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '采购完成', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '2'
//                            let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
            {
                name: 'S1S22MSG9',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '取消购买', // S1S22MSG 改为  取消转国内
                    onClick: function() {
                        change = '2'
                            let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
                        S1S22_MsgfunQXCG()
                    }
                }
            },
//            {
//                name: 'S1S22MSG9',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '未开始采购', // S1S22MSG 改为  取消转国内
//                    onClick: function() {
//                        change = '0'
//                            let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
////                            return;
////                        }
//                        S1S22_Msgfun()
//                    }
//                }
//            },
            
//            {
//                name: 'S1S23U',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '采购进度修改', //S1S23U 改为 采购进度修改
//                    onClick: function() {
//                        change = '2'
//                        let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0]
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
//                        addIns = $('#addmotai').dxPopup({    
//            				//模态框增加name    
//            				width:1000,    
//            				height:450    
//            			}).dxPopup('instance')    
//            			addIns.option('title', '采购进度修改');    
//            			addIns.show();    
//                        S1S23_Updatefun()
//                        S1S23addIns.option('formData', rowsData)
//                    }
//                }
//            },
        ]
    })
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
        // //console.log.log(msg)


        initLoadd()
        function initLoadd() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "GSMC"
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
                        gongsi.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoadq()
        function initLoadq() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "BMMC"
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
                        bumenmingcheng.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }

        initLoad1()
        function initLoad1() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "WLLX"
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
                        wuzileixing.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad2()
        function initLoad2() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "BMMC"
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
                        shenqingbumen.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad3()
        function initLoad3() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
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
                success: function (result) {
                    result.data.forEach(item => {
                        wanchengzhuangtai.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad4()
        function initLoad4() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "JXZT"
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
                        shifoujixu.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad5()
        function initLoad5() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "SHZT"
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
                        shenhezhuangtai.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad6()
        function initLoad6() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "TJZT"
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
                        tijiaozhuangtai.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad7()
        function initLoad7() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "CGBM"
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                     //console.log.log(result.data);
                    result.data.forEach(item => {
                        caigoubumen.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad8()
        function initLoad8() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
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
                     //console.log.log(result.data);
                    result.data.forEach(item => {
                        caigouyuan.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad9()
        function initLoad9() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "CGJD"
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
                        caigoujindu.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad10()
        function initLoad10() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "FPZT"
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
                        fenpeizhuangtai.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad11()
        function initLoad11() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "CGZT"
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
                        caigouzhuangtai.push(item);
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
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0011Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_MITTYPE.splice(0, TP_CGORDERMT_C_MITTYPE.length);
                data.data.cgQ003C001.forEach(item => TP_CGORDERMT_C_MITTYPE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        
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
                //console.log.log(TP_CGORDERMT_USER)
                searchdataFormM1.getEditor('cManor').option('value', get_user());
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0021Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_STATE.splice(0, TP_CGORDERMT_C_STATE.length);
                data.data.cgQ003C002.forEach(item => TP_CGORDERMT_C_STATE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0031Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_AUDITTYPE.splice(0, TP_CGORDERMT_C_AUDITTYPE.length);
                data.data.cgQ003C003.forEach(item => TP_CGORDERMT_C_AUDITTYPE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0041Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_COMNAME.splice(0, TP_CGORDERMT_C_COMNAME.length);
                data.data.cgQ003C004.forEach(item => TP_CGORDERMT_C_COMNAME.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0091Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_PLANOR.splice(0, TP_CGORDERST_C_PLANOR.length);
                data.data.cgQ003C009.forEach(item => TP_CGORDERST_C_PLANOR.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0061Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_ALLOTSTATE.splice(0, TP_CGORDERST_C_ALLOTSTATE.length);
                data.data.cgQ003C006.forEach(item => TP_CGORDERST_C_ALLOTSTATE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0071Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_DEPTOR.splice(0, TP_CGORDERST_C_DEPTOR.length);
                data.data.cgQ003C007.forEach(item => TP_CGORDERST_C_DEPTOR.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0081Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_MUSTNEED.splice(0, TP_CGORDERST_C_MUSTNEED.length);
                data.data.cgQ003C008.forEach(item => TP_CGORDERST_C_MUSTNEED.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/C0051Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
            	// //console.log.log(data)
                TP_CGORDERMT_C_DEPTAPPLY.splice(0, TP_CGORDERMT_C_DEPTAPPLY.length);
                data.data.cgQ003C005.forEach(item => TP_CGORDERMT_C_DEPTAPPLY.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    
    function get_user () {
    	let matchedItem1 = TP_CGORDERMT_USER.find(item => item.userName != "");
        let matchedItem = caigouyuan.find(item => item.cSubitemdes == TP_CGORDERMT_USER[0].userName);
        if (matchedItem == null || matchedItem == undefined) {
            return "";
        } else {
        	//console.log.log(matchedItem.cSubitemid)
            return matchedItem.cSubitemid;
        }
    }
    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {
            	cgQ003M1s1:{
					startTime: new Date(),
					endTime: new Date(),
					cOrdernum   : null,
					cComname  : null,
					cDeptapply   : null,
					cManapply  : null,
				}
            }
        };

		msg.data.cgQ003M1s1 = searchdataFormM1.option('formData');

        //开始时间
		let startTime =msg.data.cgQ003M1s1.startTime;
		msg.data.cgQ003M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

		// 结束时间
		let endTime = msg.data.cgQ003M1s1.endTime;
		msg.data.cgQ003M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);

        // let searchtiao = searchdataFormM1.option('formData')

        msg.data.cgQ003M1s1 = [searchdataFormM1.option('formData')];

        // //console.log.log(msg)
        // let searchtiao = searchdataFormM1.option('formData')
        // msg.data.cgQ003M1s1 = [searchdataFormM1.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {

                if (data.data == null) {
					tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    return
                }

                let select;
                select = data.data.cgQ003M1s1
                tabledataS1.splice(0, tabledataS1.length);
                select.forEach(item => tabledataS1.push(item));
				$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                $('#dataGridS1').dxDataGrid('instance').deselectAll()
                $('#dataGridS1').dxDataGrid('instance').refresh()

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }


      // ------------------------zsq-联动查询top----------------------
   $('#dataGridS1').dxDataGrid({
        onRowClick: function(e) {
            S1S21_SSRT()     //S1S21SSRT() 改为 S1S21_SSRT() 
        }

    })
    function M1S21_SSRT() {  //zsq   S1S21SSRT()   改为   S1S21_SSRT()  
        let aodthat = [];
        msg = {
                ver: '53cc62f6122a436083ec083eed1dc03d',
                session: '42f5c0d7178148938f4fda29460b815a',
                tag: {},
                data: {
                	cgQ003M1s1:{
    					startTime: new Date(),
    					endTime: new Date(),
    					cOrdernum   : null,
    					cComname  : null,
    					cDeptapply   : null,
    					cManapply  : null,
    				}
                }
            };

    		msg.data.cgQ003M1s1 = searchdataFormM1.option('formData');

            //开始时间
    		let startTime =msg.data.cgQ003M1s1.startTime;
    		msg.data.cgQ003M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

    		// 结束时间
    		let endTime = msg.data.cgQ003M1s1.endTime;
    		msg.data.cgQ003M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);

            // let searchtiao = searchdataFormM1.option('formData')

            msg.data.cgQ003M1s1 = [searchdataFormM1.option('formData')];        
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/M1S21Q'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {
                //console.log.log(data)
                if (data.data == null) {
					 tabledataS2.splice(0, tabledataS2.length);
                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                    return
                }
                else
               {
                let select;
                select = data.data.tpCgorderst
                //console.log.log('---M1S2---')
                //console.log.log(select)
                tabledataS2.splice(0, tabledataS2.length);
                select.forEach(item => tabledataS2.push(item));
				$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                $('#dataGridS2').dxDataGrid('instance').deselectAll()
                $('#dataGridS2').dxDataGrid('instance').refresh()
                	}
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }

    function S1S21_SSRT() {  //zsq   S1S21SSRT()   改为   S1S21_SSRT()  
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.cgQ003M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        //console.log.log(msg.data)
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/S1S21Q'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {
                //console.log.log(data)
                if (data.data == null) {
					 tabledataS2.splice(0, tabledataS2.length);
                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                    return
                }
                let select;
                select = data.data
                tabledataS2.splice(0, tabledataS2.length);
                select.forEach(item => tabledataS2.push(item));
				$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                $('#dataGridS2').dxDataGrid('instance').deselectAll()
                $('#dataGridS2').dxDataGrid('instance').refresh()
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }





    // ------------------------zsq-联动查询end----------------------

    function M1S11_addfun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cOrdernum',
                    label: {
                        text: '单据编号'
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
                            max: 20,
                            min: 0,
                            message: '长度超限，最长为20！'
                        },
                    ]
                },
                {
                    dataField: 'cComname',
                    label: {
                        text: '公司名称'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_COMNAME,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 60,
                            min: 0,
                            message: '长度超限，最长为60！'
                        },
                    ]
                },
                {
                    dataField: 'cDeptapply',
                    label: {
                        text: '申请部门'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_DEPTAPPLY,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 60,
                            min: 0,
                            message: '长度超限，最长为60！'
                        },
                    ]
                },
                {
                    dataField: 'cManapply',
                    label: {
                        text: '申请人'
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
                            max: 30,
                            min: 0,
                            message: '长度超限，最长为30！'
                        },
                    ]
                },
                {
                    dataField: 'cAudittype',
                    label: {
                        text: '审核状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_AUDITTYPE,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
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
                    dataField: 'cAudittime',
                    label: {
                        text: '审核时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: []
                },
                {
                    dataField: 'cAuditman',
                    label: {
                        text: '审核人'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, ]
                },
                {
                    dataField: 'cMitman',
                    label: {
                        text: '提交人'
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
                            max: 20,
                            min: 0,
                            message: '长度超限，最长为20！'
                        },
                    ]
                },
                {
                    dataField: 'cMittime',
                    label: {
                        text: '提交时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cMittype',
                    label: {
                        text: '提交状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_MITTYPE,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 1,
                            min: 0,
                            message: '长度超限，最长为1！'
                        },
                    ]
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
                        type: 'stringLength',
                        max: 40,
                        min: 0,
                        message: '长度超限，最长为40！'
                    }, ]
                },
                {
                    dataField: 'cState',
                    label: {
                        text: '完成状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_STATE,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
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
                    dataField: 'cTimeapply',
                    label: {
                        text: '申请日期'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cTimetake',
                    label: {
                        text: '收单日期'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cId',
                    label: {
                        text: '请购单主表主键'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, ]
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
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
                msg.data.cgQ003M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/M1S11A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            M1S11_serDel();

                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
                        }
                    },
                    error: function() {
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
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

    function M1S11_Updatefun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cOrdernum',
                    label: {
                        text: '单据编号'
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
                            max: 20,
                            min: 0,
                            message: '长度超限，最长为20！'
                        },
                    ]
                },
                {
                    dataField: 'cComname',
                    label: {
                        text: '公司名称'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_COMNAME,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 60,
                            min: 0,
                            message: '长度超限，最长为60！'
                        },
                    ]
                },
                {
                    dataField: 'cDeptapply',
                    label: {
                        text: '申请部门'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_DEPTAPPLY,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 60,
                            min: 0,
                            message: '长度超限，最长为60！'
                        },
                    ]
                },
                {
                    dataField: 'cManapply',
                    label: {
                        text: '申请人'
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
                            max: 30,
                            min: 0,
                            message: '长度超限，最长为30！'
                        },
                    ]
                },
                {
                    dataField: 'cAudittype',
                    label: {
                        text: '审核状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_AUDITTYPE,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
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
                    dataField: 'cAudittime',
                    label: {
                        text: '审核时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: []
                },
                {
                    dataField: 'cAuditman',
                    label: {
                        text: '审核人'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, ]
                },
                {
                    dataField: 'cMitman',
                    label: {
                        text: '提交人'
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
                            max: 20,
                            min: 0,
                            message: '长度超限，最长为20！'
                        },
                    ]
                },
                {
                    dataField: 'cMittime',
                    label: {
                        text: '提交时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cMittype',
                    label: {
                        text: '提交状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_MITTYPE,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 1,
                            min: 0,
                            message: '长度超限，最长为1！'
                        },
                    ]
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
                        type: 'stringLength',
                        max: 40,
                        min: 0,
                        message: '长度超限，最长为40！'
                    }, ]
                },
                {
                    dataField: 'cState',
                    label: {
                        text: '完成状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERMT_C_STATE,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
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
                    dataField: 'cTimeapply',
                    label: {
                        text: '申请日期'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cTimetake',
                    label: {
                        text: '收单日期'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cId',
                    label: {
                        text: '请购单主表主键'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, ]
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
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
                msg.data.cgQ003M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/M1S11U'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            M1S11_serDel();

                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
                        }
                    },
                    error: function() {
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
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
    //代码需要重新定义 
    function S1S22_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.cgQ003S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        msg.data.c_state = change;
        //console.log.log(msg)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/S1S22MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
				S1S21_SSRT()
                // S1S22_SSRT();
                DevExpress.ui.notify('数据保存成功', 'success', 3000);

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
    function S1S22_MsgfunQXCG() {
    	msg = {
    			ver: '53cc62f6122a436083ec083eed1dc03d',
    			session: '42f5c0d7178148938f4fda29460b815a',
    			tag: {},
    			data: {}
    	};
    	msg.data.cgQ003S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
    	msg.data.c_state = change;
    	//console.log.log(msg)
    	$.ajax({
    		url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/S1S22MSG_QXCG'),
    		dataType: 'json', //返回格式为json      
    		async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
    		data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
    		type: 'post', //请求方式 get 或者post ,       
    		contentType: 'application/json',
    		success: function(data) {
    			S1S21_SSRT()
    			// S1S22_SSRT();
    			DevExpress.ui.notify('数据保存成功', 'success', 3000);
    			
    		},
    		error: function() {
    			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
    			// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
    			//e.cancel=true;       
    		}
    	})
    }

    function S1S23_Updatefun() {
        S1S23addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                    dataField: 'cPlanor',
                    label: {
                        text: '采购进度'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERST_C_PLANOR,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1,
                        min: 0,
                        message: '长度超限，最长为1！'
                    }, ]
                },
                // {
                //     dataField: 'cPlantime',
                //     label: {
                //         text: '采购进度时间'
                //     },
                //     editorType: 'dxDateBox',
                //     editorOptions: {
                //         displayFormat: 'yyyy-MM-dd',
                //         type: 'datetime',
                //     },
                //     validationRules: []
                // }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
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
                msg.data.cgQ003S1s2 = [S1S23addIns.option('formData')];

                //console.log.log(msg)
                // //console.log.log(JSON.stringify(msg))
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/S1S23U'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {

                            S1S21_SSRT();

                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
                        }
                    },
                    error: function() {
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
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
    //Script ------------------------------------
})