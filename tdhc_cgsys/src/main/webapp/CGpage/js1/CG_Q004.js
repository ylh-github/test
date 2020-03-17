///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
let addGang = []
let ziGang = []
let addLei = []
let yongtu = []
let pinzhong = []
let pinming = []
let TP_CGORDERST_C_TYPENAME = []
///////////////////////////////////////////////////////////////////////////////////////////
let M2S21addIns;
let M1S11addIns;
let S2S31addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let searchdataM2; //每个查询条件form的数据
let searchdataFormM2; //每个查询条件form的实例
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
let wanchengzhuangtai = [
   /*  { value: '0', cSubitemdes: '未完成' },
    { value: '1', cSubitemdes: '已完成' } */

]
let shifoujixu = [
    /* { value: '0', cSubitemdes: '否' },
    { value: '1', cSubitemdes: '是' } */

]
let shenhezhuangtai = [
    /* { value: '1', cSubitemdes: '未审核' },
    { value: '2', cSubitemdes: '已通过' },
    { value: '3', cSubitemdes: '未通过' } */
]
let tijiaozhuangtai = [
   /*  { value: '0', cSubitemdes: '未提交' },
    { value: '1', cSubitemdes: '已提交' } */

]
let caigoubumen = [
   /*  { value: '0', cSubitemdes: '采购一组' },
    { value: '1', cSubitemdes: '采购二组' },
    { value: '2', cSubitemdes: '采购三组' }, */
]
let caigouyuan = [
    /* { value: '0', cSubitemdes: 'CG01' },
    { value: '1', cSubitemdes: 'CG02' },
    { value: '2', cSubitemdes: 'CG03' }, */
]
let caigoujindu = [
   /*  { value: '0', cSubitemdes: '未开始采购' },
    { value: '1', cSubitemdes: '任务已接收' },
    { value: '2', cSubitemdes: '寻找供应商' },
    { value: '3', cSubitemdes: '询价\ 比价' },
    { value: '4', cSubitemdes: '订货' },
    { value: '5', cSubitemdes: '发货' },
    { value: '6', cSubitemdes: '到货' },
    { value: '7', cSubitemdes: '入库' },
    { value: '8', cSubitemdes: '完成' },
    { value: '9', cSubitemdes: '取消转国内' }, */

]
let fenpeizhuangtai = [
   /*  { value: '1', cSubitemdes: '已分配' },
    { value: '0', cSubitemdes: '未分配' }, */

]
let caigouzhuangtai = [
   /*  { value: '0', cSubitemdes: '未采购' },
    { value: '1', cSubitemdes: '已采购' }, */

]
let wuzileixing = [
   /*  { value: '1', cSubitemdes: '设备' },
    { value: '2', cSubitemdes: '备件' }, */

]
let shenqingbumen = [
   /*  { value: '1', cSubitemdes: '采购部' },
    { value: '2', cSubitemdes: '销售部' },
    { value: '3', cSubitemdes: '人事部' },
    { value: '4', cSubitemdes: '财务部' },
    { value: '5', cSubitemdes: '生产部' }, */
]

let yudengjifalg = []
//查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
$(function () {
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
            lg: 8,
            md: 4,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [{
            dataField: 'cGoodsname',
            label: {
                text: '物资名称'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cSpec',
            label: {
                text: '规格型号'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cOrman',
            label: {
                text: '采购人'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
            // {
            //     dataField: 'cOrstid',
            //     label: {
            //         text: '请购子表编码'
            //     },
            //     editorOptions: {
            //         showClearButton: true,
            //     }
            // }
        ]
    }).dxForm('instance')
    //完成对查询条件的自动生成
    //以下为查询form的代码
    searchdataFormM2 = $('#searchFormM2').dxForm({
        formData: searchdataM2,
        ////当参数小于三个时为五个,大于等于三时统一乘二
        ////王晶晶给改为自适应编码
        colCountByScreen: {
            lg: 8,
            md: 4,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [{
            dataField: 'cComname',
            label: {
                text: '公司名称'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cOrdernum',
            label: {
                text: '单据编号'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cManapply',
            label: {
                text: '申请人'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cCreatetime_star',
            label: {
                text: '创建时间开始时间'
            },
        },
        {
            dataField: 'cCreatetime_star',
            label: {
                text: '创建时间结束时间'

            }
        }
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
        columns: [
            {
                dataField: 'cOrstid',
                caption: '物资单号',
            },
            {
                dataField: 'cOrmtid',
                caption: '请购单号',
            },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
            },
            {
                dataField: 'cSw01',
                caption: '是否急需',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = shifoujixu.find(item => item.cSubitemid == rowData.cSw01);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cSpec',
                caption: '规格型号',
            },
            {
                dataField: 'cUnit',
                caption: '单位',
            },
            {
                dataField: 'cPirce',
                caption: '单价',
            },
            {
                dataField: 'cSum',
                caption: '订购数量',
            },
            {
                dataField: 'cOrdept',
                caption: '采购部门',
                 calculateDisplayValue: function (rowData) {

                     let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cOrdept);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cOrman',
                caption: '采购人',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cOrman);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cPhone',
                caption: '采购人联系方式',
            },
            {
                dataField: 'cCludecom',
                caption: '签订公司',
            },
            {
                dataField: 'cSupplier',
                caption: '供应商',
            },
            {
                dataField: 'cState',
                caption: '预登记状态',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = yudengjifalg.find(item => item.cSubitemid == rowData.cState);

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
        columns: [
            {
                dataField: 'cId',
                caption: '请购单主表主键',
            },
            {
                dataField: 'cComname',
                caption: '公司名称',
            },
            {
                dataField: 'cOrdernum',
                caption: '单据编号',
            },
            {
                dataField: 'cManapply',
                caption: '申请人',
            },
            {
                dataField: 'cDeptapply',
                caption: '申请部门',
            },
            {
                dataField: 'cTimeapply',
                caption: '申请日期',
            },
            {
                dataField: 'cTimetake',
                caption: '收单日期',
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
                dataField: 'cRemark',
                caption: '备注',
            },
            {
                dataField: 'cState',
                caption: '状态',
            },
            {
                dataField: 'cTimestamp',
                caption: '时间戳',
            },
            {
                dataField: 'cMittype',
                caption: '提交状态',
            },
            {
                dataField: 'cMittime',
                caption: '提交时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cAudittime',
                caption: '审核时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cCreatetime',
                caption: '创建时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cCreater',
                caption: '创建人',
            },
            {
                dataField: 'cAudittype',
                caption: '审核状态',
            },
            {
                dataField: 'cAuditman',
                caption: '审核人',
            },
            {
                dataField: 'cMitman',
                caption: '提交人',
            },
        ]
    });
    // $('#dataGridS3').dxDataGrid({     
    // 	dataSource: tabledataS3,                             
    //  		editing: {     
    // 		mode: 'popup',     
    // 		//allowUpdating: false     
    // 			},     
    // 		// keyExpr: 'ID',     
    // 		columnAutoWidth: true,     
    // 		showBorders: true,     
    // 		allowColumnResizing: true,     
    // 		showColumnLines: true,     
    // 		showRowLines: true,     
    // 		onCellHoverChanged: '#888',     
    // 		hoverStateEnabled: true,     
    // 		noDataText: '',     
    // 		//允许脚本编写     
    // 		height:450,                      
    // 		paging: {        
    // 			enabled: false     
    // 			},     
    // 		scrolling: {     
    // 			mode: 'virtual'     
    // 				},     
    // 		selection: {     
    // 			mode: 'multiple'     
    // 				},     
    // 		columns: [     
    // 			{ 
    // 				dataField: 'cGoodsname',
    // 				caption: '物资名称',
    // 			},
    // 			{ 
    // 				dataField: 'cSw01',
    // 				caption: '是否急需',
    // 			},
    // 			{ 
    // 				dataField: 'cSpec',
    // 				caption: '规格型号',
    // 			},
    // 			{ 
    // 				dataField: 'cUnit',
    // 				caption: '单位',
    // 			},
    // 			{ 
    // 				dataField: 'cDeptor',
    // 				caption: '采购部门',
    // 			},
    // 			{ 
    // 				dataField: 'cManor',
    // 				caption: '采购员',
    // 			},
    // 			{ 
    // 				dataField: 'cPhone',
    // 				caption: '采购员联系方式',
    // 			},
    // 			{ 
    // 				dataField: 'cPolinormtime',
    // 				caption: '报警标准时间/天',
    // 			},
    // 			{ 
    // 				dataField: 'cPolitime',
    // 				caption: '报警时间',
    // dataType: "date",
    //     format: "yyyy-MM-dd"
    // 			},
    // 			{ 
    // 				dataField: 'cRemark',
    // 				caption: '备注',
    // 			},
    // 			{ 
    // 				dataField: 'cState',
    // 				caption: '状态',
    // 			},
    // 			{ 
    // 				dataField: 'cMtid',
    // 				caption: '请购主表id',
    // 			},
    // 			{ 
    // 				dataField: 'cArrtime',
    // 				caption: '要求到货时间',
    // dataType: "date",
    // format: "yyyy-MM-dd"
    // 			},
    // 			{ 
    // 				dataField: 'cAllotman',
    // 				caption: '分配人',
    // 			},
    // 			{ 
    // 				dataField: 'cAllotstate',
    // 				caption: '分配状态',
    // 			},
    // 			{ 
    // 				dataField: 'cAllottime',
    // 				caption: '分配时间',
    // dataType: "date",
    // format: "yyyy-MM-dd"
    // 			},
    // 			{ 
    // 				dataField: 'cCreater',
    // 				caption: '创建人',
    // 			},
    // 			{ 
    // 				dataField: 'cCreatetime',
    // 				caption: '创建时间',
    // dataType: "date",
    // format: "yyyy-MM-dd"
    // 
    // 			},
    // 			{ 
    // 				dataField: 'cModifier',
    // 				caption: '修改人',
    // 			},
    // 			{ 
    // 				dataField: 'cModifytime',
    // 				caption: '修改时间',
    // dataType: "date",
    // format: "yyyy-MM-dd"
    // 			},
    // 			{ 
    // 				dataField: 'cId',
    // 				caption: '请购物资主键',
    // 			},
    // 		]     
    // 	});     
    ////////////////////////////////////////////////////
    ////生成按钮层//////////////////////////////////////
    ////////////////////////////////////////////////////
    $('#operateFormM1S1').dxForm({
        width: '100%',
        colCount: 6,
        items: [{
            name: 'M1S11Q',
            itemType: 'button',
            buttonOptions: {
                icon: 'search',
                text: '查询',
                onClick: function () {
                    M1S11_serDel();
                }
            }
        },
        {
            name: 'M1S11A',
            itemType: 'button',
            buttonOptions: {
                icon: 'plus',
                text: '预登记',
                onClick: function () {
                    noticeEditPopup.show();
                    // noticeEditForm.option('formData', new Object())
                }
            }
        },
        {
            name: 'M1S11_U',
            itemType: 'button',
            buttonOptions: {
                icon: 'save',
                text: '转合同',
                onClick: function () {

                    change = '2'
                    let grid = $('#dataGridS1').dxDataGrid('instance');
                    let rowsData = grid.getSelectedRowsData()[0]
                    let selectedRowKeys = grid.getSelectedRowKeys()
                    if (selectedRowKeys.length < 1) {
                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                        DevExpress.ui.notify('请先查询一条要转合同的数据。', 'info', 3000);
                        return;
                    }
                    if (selectedRowKeys.length > 1) {
                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        DevExpress.ui.notify('一次只能选择一条要需要转合同的数据。', 'info', 3000);
                        return;
                    }
                    if (selectedRowKeys[0].cState == 1) {
                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        DevExpress.ui.notify('该数据已经录入合同，不能再次录入。', 'info', 3000);
                        return;
                    }
                    addIns = $('#addmotai').dxPopup({
                        //模态框增加name    
                        width: 1000,
                        height: 450
                    }).dxPopup('instance')
                    addIns.option('title', '转合同');
                    addIns.show();
                    S1S23_Updatefun()
                    S1S23addIns.option('formData', rowsData)

                }
            }
        },
        ]
    })



    function S1S23_Updatefun() {
        S1S23addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [

                        {
                            type: 'required',
                            message: '必填！'
                        },

                    ]
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
                    data: {

                    },
                };
                msg.data = S1S23addIns.option('formData');
                // msg.data.tpCgorderbefore = S1S23addIns.option('formData');
                // msg.data = S1S23addIns.option('formData',)

                //console.log.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/saveContract'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function (data) {
                        //console.log.log(data)
                        let select = data.msg
                        if (data.errcode == 0) {



                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
                            M1S11_serDel()
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'success', 3000);
                            M1S11_serDel()
                        }
                    },
                    error: function () {
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
            onClick: function () {
                addIns.hide()
            }
        })
    }
    // {
    // 	name:'M1S11D',
    // 	itemType: 'button',  
    // 	buttonOptions: {     
    // 		icon: 'remove',     
    // 	text: '删除',
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

    // msg.data.cgQ004M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
    // 		//console.log.log(msg) 
    // 		$.ajax({ 
    // 			url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q004/M1S11D'),					dataType: 'json',   //返回格式为json   
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

    // $('#operateFormM2S2').dxForm({
    // 	width:'100%',
    // 	colCount:6,
    // 	items: [
    // 	{
    // 		name:'M2S21Q',
    // 		itemType: 'button',
    // 		buttonOptions: {
    // 		icon: 'search',
    // 		text: 'M2S21Q',
    // 		onClick: function(){
    // 			M2S21_serDel();
    // 			}
    // 		}
    // 	},
    // 	{
    // 		name:'M2S21A',
    // 		itemType: 'button',
    // 		buttonOptions: {
    // 			icon: 'plus',
    // 		text: '新增',
    // 			onClick: function(){
    // 				change='1'; 
    // 				$('#addmotai').show()
    // 			addIns = $('#addmotai').dxPopup({
    // 					width:1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
    // 					height:450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
    // 				}).dxPopup('instance')
    // 			addIns.option('title', 'CG_Q004')
    // 			addIns.show();
    // 			M2S21_addfun();
    // 			M2S21addIns.option('formData',new Object())
    // 			}
    // 		}
    // 	},
    // 	{
    // 		name:'M2S21_U',
    // 		itemType: 'button',  
    // 		buttonOptions: {     
    // 			icon: 'save',     
    // 		text: '修改',
    // 			onClick: function(){     
    // 				change='2'     
    // 				let grid = $('#dataGridS2').dxDataGrid('instance');     
    // 				let rowsData = grid.getSelectedRowsData()[0]     
    // 				let selectedRowKeys = grid.getSelectedRowKeys()     
    // 					if (selectedRowKeys.length < 1) {     
    // 						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
    // 						DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);     
    // 						return;     
    // 					}     
    // 					if (selectedRowKeys.length > 1) {    
    // 						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
    // 						DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
    // 						return;    
    // 					} 
    // 			addIns = $('#addmotai').dxPopup({    
    // 					//模态框增加name    
    // 					width:1000,    
    // 					height:450    
    // 				}).dxPopup('instance')    
    // 				addIns.option('title', 'CG_Q004');    
    // 				addIns.show();    
    // 				// 调用模态框函数    
    // 				// updatafun()    
    // 				M2S21_Updatefun()    
    // 				M2S21addIns.option('formData',rowsData)    
    // 			}    
    // 		}    
    // 	},    
    // 	{
    // 		name:'M2S21D',
    // 		itemType: 'button',  
    // 		buttonOptions: {     
    // 			icon: 'remove',     
    // 		text: '删除',
    // 		onClick: function(){                       
    // 			let grid1 = $('#dataGridS2').dxDataGrid('instance');  
    // 	  		let selectedRowKeys = grid1.getSelectedRowKeys()  
    // 			let rowsData = grid1.getSelectedRowsData()  
    // 			//脚本执行  
    // 			if (selectedRowKeys.length < 1) {  
    // 				DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);  
    // 				return; 
    // 			} 
    // 			msg = { 
    // 				ver: '53cc62f6122a436083ec083eed1dc03d', 
    // 				session: '42f5c0d7178148938f4fda29460b815a', 
    // 				tag: {}, 
    // 				data: { 
    // 						} 
    // 			}; 
    // 			//前后端统一叫'tscLtrawbin' 

    // 	msg.data.cgQ004M2s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
    // 			//console.log.log(msg) 
    // 			$.ajax({ 
    // 				url:Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q004/M2S21D'),					dataType: 'json',   //返回格式为json   
    // 				async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
    // 				data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
    // 				type: 'post',   //请求方式 get 或者post , 
    // 				contentType: 'application/json', 
    // 				success: function (data) { 
    // 					let select = data.msg 
    // 					if(data.errcode == 0){ 
    // 						DevExpress.ui.notify('删除成功', 'success', 3000);  
    // 						M2S21_serDel() ;         

    // 						} 
    // 					else{ 
    // 						DevExpress.ui.notify(select, 'warning', 3000); 
    // 						} 
    // 					}, 
    // 				error: function () { 
    // 					DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000); 
    // 					} 
    // 				}) 
    // 			} 
    // 		} 
    // 	}, 
    //   		]
    //    })
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
                    /* //console.log.log(result.data);
                    wuzileixing = result.data; */

                    result.data.forEach(item => {
                        wuzileixing.push(item);
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
                   /*  //console.log.log(result.data);
                    shenqingbumen = result.data; */

                    result.data.forEach(item => {
                        shenqingbumen.push(item);
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
                    /* //console.log.log(result.data);
                    wanchengzhuangtai = result.data; */

                    result.data.forEach(item => {
                        wanchengzhuangtai.push(item);
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
                    /* //console.log.log(result.data);
                    shifoujixu = result.data; */

                    result.data.forEach(item => {
                        shifoujixu.push(item);
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
                  /*   //console.log.log(result.data);
                    shenhezhuangtai = result.data; */

                    result.data.forEach(item => {
                        shenhezhuangtai.push(item);
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
                    /* //console.log.log(result.data);
                    tijiaozhuangtai = result.data; */

                    result.data.forEach(item => {
                        tijiaozhuangtai.push(item);
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
                   /*  //console.log.log(result.data);
                    caigoubumen = result.data; */

                    result.data.forEach(item => {
                        caigoubumen.push(item);
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
                   /*  //console.log.log(result.data);
                    caigouyuan = result.data; */

                    result.data.forEach(item => {
                        caigouyuan.push(item);
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
                    /* //console.log.log(result.data);
                    caigoujindu = result.data; */

                    result.data.forEach(item => {
                        caigoujindu.push(item);
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
                   /*  //console.log.log(result.data);
                    fenpeizhuangtai = result.data; */

                    result.data.forEach(item => {
                        fenpeizhuangtai.push(item);
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
                    /* //console.log.log(result.data);
                    caigouzhuangtai = result.data; */

                    result.data.forEach(item => {
                        caigouzhuangtai.push(item);
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
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "YDJZT"
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                   /*  //console.log.log(result.data);
                    yudengjifalg = result.data; */

                    result.data.forEach(item => {
                        yudengjifalg.push(item);
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


        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0061Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function (data) {
                TP_CGORDERST_C_TYPENAME.splice(0, TP_CGORDERST_C_TYPENAME.length);
                data.data.cgQ001C006.forEach(item => TP_CGORDERST_C_TYPENAME.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function () {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
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
        msg.data = searchdataFormM1.option('formData');
        //console.log.log(msg)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/condition'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function (data) {
                //console.log.log(data)
                if (data.data == null) {
					 tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    return
                }

                let select;
                select = data.data
                tabledataS1.splice(0, tabledataS1.length);
                select.forEach(item => tabledataS1.push(item));
				$('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                $('#dataGridS1').dxDataGrid('instance').deselectAll()
                $('#dataGridS1').dxDataGrid('instance').refresh()

            },
            error: function () {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }

    // ------------------------------------------
    // 添加模态框
    noticeEditPopup = $("#notice-edit-popup-container").dxPopup({
        deferRendering: false,
        title: '预登记',

        // width: function () {
        //   return window.innerWidth - 50;
        // },
        // height: function () {
        //   return window.innerHeight - 50;
        // },
        width: 1000,
        height: 500,
    }).dxPopup("instance");
    // 添加模态框放置的内容
    noticeEditForm = $("#notice-edit-form-container").dxForm({

        items: [{
            itemType: "group",
            colCount: 3,
            items: [
                {
                    dataField: 'cOrdernum',
                    label: {
                        text: '单据编号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        onFocusIn: function (e) {
                            // 新建对象，相当于赋空值
                            // addEditForm.option("formData", new Object);

                            addEditPopup.show();
                            // let newgrid = $("#addGangGrid").dxDataGrid("instance")
                            // addGang.splice(0, addGang.length);
                            // newgrid.refresh();

                            // let grid = $("#this-grid-container").dxDataGrid("instance")
                            // let rowsData = grid.getSelectedRowsData()[0]

                            // currentData = rowsData

                            // if (currentAction == action.modify) {

                            //   if (currentData.cAuditState == "" || currentData.cAuditState == null || currentData.cAuditState == undefined) {
                            //     addEditPopup.option("title", "添加--钢种");
                            //     addEditPopup.show();
                            //   } else {
                            //     addEditPopup.option("title", "添加--钢种");
                            //     addEditPopup.hide();
                            //   }

                            // } else {
                            //   addEditPopup.option("title", "添加--钢种");
                            //   addEditPopup.show();
                            // }
                            // addG()
                        }

                    },
                    validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 20,
                            min: 0,
                            message: '长度超限，最长为20！'
                        },]
                },


                // {
                //        dataField: "cId",
                //        label: {
                //            text: '预登记明细主键'
                //        },

                //    },
                {
                    dataField: "cOrmtid",
                    label: {
                        text: '请购单号'
                    },

                },

                {
                    dataField: 'cOrstid',
                    label: {
                        text: '物资单号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        onFocusIn: function (e) {
                            // 新建对象，相当于赋空值
                            // addEditForm.option("formData", new Object);

                            ziEditPopup.show();
                            // let newgrid = $("#addGangGrid").dxDataGrid("instance")
                            // addGang.splice(0, addGang.length);
                            // newgrid.refresh();

                            // let grid = $("#this-grid-container").dxDataGrid("instance")
                            // let rowsData = grid.getSelectedRowsData()[0]

                            // currentData = rowsData

                            // if (currentAction == action.modify) {

                            //   if (currentData.cAuditState == "" || currentData.cAuditState == null || currentData.cAuditState == undefined) {
                            //     addEditPopup.option("title", "添加--钢种");
                            //     addEditPopup.show();
                            //   } else {
                            //     addEditPopup.option("title", "添加--钢种");
                            //     addEditPopup.hide();
                            //   }

                            // } else {
                            //   addEditPopup.option("title", "添加--钢种");
                            //   addEditPopup.show();
                            // }
                            // addG()
                        }

                    },
                    validationRules: [{
                        type: 'required',
                        message: "必填"
                    }],
                },
                {
                    dataField: "cGoodsname",
                    label: {
                        text: '物资名称'
                    },

                },
                {
                    dataField: "cSpec",
                    label: {
                        text: '规格型号'
                    },

                },
                {
                    dataField: "cUnit",
                    label: {
                        text: '单位'
                    },

                },
                {
                    dataField: "cSupplier",
                    label: {
                        text: '供应商'
                    },
                    validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                    ]

                },
                {
                    dataField: "cCludecom",
                    label: {
                        text: '签订公司'
                    },
                    validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                    ]

                },
                {
                    dataField: "cPirce",
                    label: {
                        text: '单价'
                    },
                    validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                    ]

                },
                {
                    dataField: "cSum",
                    label: {
                        text: '订购数量'
                    },
                    validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                    ]


                },
                {
                    dataField: "cOrman",
                    label: {
                        text: '采购人'
                    },

                },
                {
                    dataField: "cOrdept",
                    label: {
                        text: '采购部门'
                    },

                },
                {
                    dataField: "cPhone",
                    label: {
                        text: '采购人联系方式'
                    },

                },



                {
                    dataField: "cSw01",
                    label: {
                        text: '是否急需'
                    },

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
                        type: 'stringLength',
                        max: 30,
                        min: 0,
                        message: '长度超限，最长为30！'
                    },]
                },
                {
                    dataField: 'cDeptapply',
                    label: {
                        text: '申请部门'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 60,
                        min: 0,
                        message: '长度超限，最长为60！'
                    },]
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
                    validationRules: []
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
                    validationRules: []
                },
                // {
                //     dataField: 'cModifier',
                //     label: {
                //         text: '修改人'
                //     },
                //     editorOptions: {
                //         showClearButton: true,
                //     },
                //     validationRules: [{
                //         type: 'stringLength',
                //         max: 20,
                //         min: 0,
                //         message: '长度超限，最长为20！'
                //     }, ]
                // },
                // {
                //     dataField: 'cModifytime',
                //     label: {
                //         text: '修改时间'
                //     },
                //     editorType: 'dxDateBox',
                //     editorOptions: {
                //         displayFormat: 'yyyy-MM-dd',
                //         type: 'datetime',
                //     },
                //     validationRules: []
                // },

                // {
                //     dataField: 'cState',
                //     label: {
                //         text: '状态'
                //     },
                //     editorOptions: {
                //         showClearButton: true,
                //     },
                //     validationRules: [{
                //         type: 'stringLength',
                //         max: 1,
                //         min: 0,
                //         message: '长度超限，最长为1！'
                //     }, ]
                // },
                //   {
                //     dataField:'cTimestamp',
                //     label:{
                //       text:'时间戳'
                //     },
                //   editorType: 'dxDateBox',
                //   editorOptions: {
                //   displayFormat: 'yyyy-MM-dd',
                //   type: 'datetime',
                //         },
                // validationRules: [    ]
                //       },
                {
                    dataField: 'cMittype',
                    label: {
                        text: '提交状态'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1,
                        min: 0,
                        message: '长度超限，最长为1！'
                    },]
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
                    validationRules: []
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
                    dataField: 'cAudittype',
                    label: {
                        text: '审核状态'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1,
                        min: 0,
                        message: '长度超限，最长为1！'
                    },]
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
                    },]
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
                        type: 'stringLength',
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
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
                        type: 'stringLength',
                        max: 40,
                        min: 0,
                        message: '长度超限，最长为40！'
                    },]
                },
                {
                    itemType: "group",
                    colCount: 6,
                    items: [{
                        colSpan: 2,
                        itemType: "empty",
                    },
                    {
                        itemType: "button",
                        buttonOptions: {
                            icon: "todo",
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
                                msg.data = noticeEditForm.option('formData');
                                //console.log.log(msg)
                                // 注释1  zsq
                                //change等于1为添加         
                                $.ajax({
                                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/save'),
                                    dataType: 'json', //返回格式为json           
                                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                    type: 'post', //请求方式 get 或者post ,         
                                    contentType: 'application/json',
                                    success: function (data) {
                                        let select = data.msg
                                        if (data.errcode == 0) {
                                            M1S11_serDel();

                                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
                                            noticeEditPopup.hide();
                                        } else {
                                            DevExpress.ui.notify(select, 'warning', 3000);
                                        }
                                    },
                                    error: function () {
                                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                        // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                                        //e.cancel=true;         
                                    }
                                })
                                // noticeEditForm.option("formData", new Object);

                            }
                        }
                    }, {
                        itemType: "button",
                        buttonOptions: {
                            icon: "remove",
                            text: '取消',
                            onClick: function () {
                                noticeEditPopup.hide();
                            }
                        }
                    },
                    ]
                }
            ]
        }]


    }).dxForm("instance");

    // -------------------
    //--------------------// 添加--主表--模态框

    addEditPopup = $("#add-edit-popup-container").dxPopup({
        deferRendering: false,
        height: 600,
    }).dxPopup("instance");
    // 添加--钢种--模态框放置的内容
    addEditForm = $("#add-edit-form-container").dxForm({
        formData: msg.data,
        width: "100%",
        items: [{
            itemType: "group",
            colCount: 3,
            items: [{
                dataField: "cOrdernum",
                label: {
                    text: "单据编号"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    // dataSource: addLei,
                    // displayExpr: "cSubitemdes", //显示表达式
                    // valueExpr: "cSubitemid", //值的表达式
                    // placeholder: "-请选择-",
                    // showClearButton: true,
                    // width: "100%",
                    // searchEnabled: true
                    width: "100%",
                    placeholder: "",
                    showClearButton: true
                }
            },

            ]
        }, {
            itemType: "group",
            colCount: 6,
            items: [{
                itemType: "group",
                colCount: 6,
                itemType: "button",
                buttonOptions: {
                    icon: "search",
                    text: '查询',
                    onClick: function () {
                        // 重赋值
                        msg1 = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        // requestData.getSteel.data.cState = $("#selectBox_1").dxSelectBox("instance").option("value");//zsq
                        // requestData.getSteel.data.date1 = $("#dataBox_1").dxDateBox("instance").option("value");//zsq
                        // //console.log.log(addEditForm.option("formData"))
                        alert('11')
                        //msg1.data = addEditForm.getEditor("cOrdernum").option('value')
                        msg1.data = addEditForm.option("formData");
                        //console.log.log("------------")
                        //console.log.log(msg1)
                        $.ajax({
                            // url: Cake.Piper.getAuthUrl(requestUrls.addGSteel),
                        	 url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002mt/SelectMt12'),
                            dataType: "json", //返回格式为json  
                            async: true, //请求是否异步，默认为异步，这也是ajax重要特性  
                            data: JSON.stringify(msg1), //下拉框的参数值  requestData.getSteel 上面有定义
                            type: "post", //请求方式 get 或者post ,
                            contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
                            success: function (result) {


                                // 表格数据
                                var tab = result.data
                                // 清空数据
                                addGang.splice(0, addGang.length);

                                // 将返回的数据推入到清空的数组中
                                tab.forEach(item => {
                                    addGang.push(item);
                                });

                                // 将推入进的数据进行刷新
                                let newgrid = $("#addGangGrid").dxDataGrid("instance");
                                newgrid.refresh();

                                // noticeEditForm.getEditor('cProdKind').option("dataSource", pinzhong)
                            },
                        })
                    }
                }
            }, {
                itemType: "group",
                colCount: 6,
                items: [{
                    colSpan: 2,
                    itemType: "empty",
                },
                {
                    itemType: "button",
                    buttonOptions: {
                        icon: "todo",
                        text: '确定',
                        onClick: function () {

                            let grid = $("#addGangGrid").dxDataGrid("instance");

                            let rowsData = grid.getSelectedRowsData()[0];
                            let selectedRowKeys = grid.getSelectedRowKeys()

                            // //console.log.log(selectedRowKeys)
                            if (rowsData.length < 1) {
                                cake.Ui.toast.show("请至少选择一条数据", "warning")
                                return
                            }


                            noticeEditForm.updateData("cOrmtid", rowsData.cId)
                            // 带出单据编号到添加弹框

                            noticeEditForm.updateData("cOrdernum", rowsData.cOrdernum)
                            // 带出申请时间到添加弹框
                            noticeEditForm.updateData("cTimeapply", rowsData.cTimeapply)
                            // 带出申请部门到添加弹框
                            noticeEditForm.updateData("cDeptapply", rowsData.cDeptapply)
                            // 带出公司名称添加弹框
                            noticeEditForm.updateData("cComname", rowsData.cComname)
                            // // 带出收单日期添加弹框
                            noticeEditForm.updateData("cTimetake", rowsData.cTimetake)
                            // // 带出申请人到添加弹框
                            noticeEditForm.updateData("cManapply", rowsData.cManapply)
                            // // 带出审核状态到添加弹框
                            noticeEditForm.updateData("cAudittype", rowsData.cAudittype)
                            // // 带出审核时间到添加弹框
                            noticeEditForm.updateData("cAudittime", rowsData.cAudittime)
                            // // 带出审核人到添加弹框
                            noticeEditForm.updateData("cAuditman", rowsData.cAuditman)
                            // // 带出提交人到添加弹框
                            noticeEditForm.updateData("cMitman", rowsData.cMitman)

                            // // 带出提交时间到添加弹框
                            noticeEditForm.updateData("cMittime", rowsData.cMittime)

                            // // 带出提交状态到添加弹框
                            noticeEditForm.updateData("cMittype", rowsData.cMittype)


                            // getmidu(rowsData.cStlGrd)

                            // if (!addEditPopup.validate().isValid) {
                            //  return;
                            // };

                            addEditPopup.hide();

                        }
                    }
                }, {
                    itemType: "button",
                    buttonOptions: {
                        icon: "remove",
                        text: '取消',
                        onClick: function () {
                            addEditPopup.hide();
                        }
                    }
                }
                ]
            },]
        },
        {
            itemType: "group",
            items: [{
                template: $("#addGangGrid")

            },

            ]
        },

        ]

    }).dxForm('instance')


    //--------------------// 添加--子表--模态框

    ziEditPopup = $("#zi-edit-popup-container").dxPopup({
        deferRendering: false,
        height: 600,
    }).dxPopup("instance");
    // 添加--钢种--模态框放置的内容
    ziEditForm = $("#zi-edit-form-container").dxForm({
        formData: msg.data,
        width: "100%",
        items: [{
            itemType: "group",
            colCount: 3,
            items: [
                {
                    dataField: "cTypename",
                    label: {
                        text: "物资类型"
                    },
                    editorType: "dxSelectBox",
                    editorOptions: {
                        dataSource: TP_CGORDERST_C_TYPENAME,
                        displayExpr: "cSubitemdes", //显示表达式
                        valueExpr: "cSubitemid", //值的表达式


                        placeholder: "-请选择-",
                        showClearButton: true,
                        width: "100%",
                        searchEnabled: true
                        //   width: "100%",
                        // placeholder: "",
                        // showClearButton: true
                    },

                },

                {
                    dataField: "cId",
                    label: {
                        text: "物资单号"
                    },
                    editorType: "dxTextBox",
                    editorOptions: {
                        // dataSource: addLei,
                        // displayExpr: "cSubitemdes", //显示表达式
                        // valueExpr: "cSubitemid", //值的表达式
                        // placeholder: "-请选择-",
                        // showClearButton: true,
                        // width: "100%",
                        // searchEnabled: true
                        width: "100%",
                        // placeholder: "请选择",
                        showClearButton: true
                    }
                },
                {
                    dataField: "cGoodsname",
                    label: {
                        text: "物资名称"
                    },
                    editorType: "dxTextBox",
                    editorOptions: {
                        // dataSource: addLei,
                        // displayExpr: "cSubitemdes", //显示表达式
                        // valueExpr: "cSubitemid", //值的表达式
                        // placeholder: "-请选择-",
                        // showClearButton: true,
                        // width: "100%",
                        // searchEnabled: true
                        width: "100%",
                        // placeholder: "",
                        showClearButton: true
                    }
                },
                {
                	dataField: "cMtid",
                	label: {
                		text: "请购单号"
                	},
                	editorType: "dxTextBox",
                	editorOptions: {
                		// dataSource: addLei,
                		// displayExpr: "cSubitemdes", //显示表达式
                		// valueExpr: "cSubitemid", //值的表达式
                		// placeholder: "-请选择-",
                		// showClearButton: true,
                		// width: "100%",
                		// searchEnabled: true
                		width: "100%",
                		// placeholder: "",
                		showClearButton: true
                	}
                },

            ]
        }, {
            itemType: "group",
            colCount: 6,
            items: [{
                itemType: "group",
                colCount: 6,
                itemType: "button",
                buttonOptions: {
                    icon: "search",
                    text: '查询',
                    onClick: function () {
                        // 重赋值
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {
                                // cId:null,
                            }
                        };

                        //脚本执行  

                        // requestData.getSteel.data.cState = $("#selectBox_1").dxSelectBox("instance").option("value");//zsq
                        // requestData.getSteel.data.date1 = $("#dataBox_1").dxDateBox("instance").option("value");//zsq
                        // //console.log.log(addEditForm.option("formData"))
                        msg.data = ziEditForm.option("formData")

                        //console.log.log(msg)
                        $.ajax({
                            // url: Cake.Piper.getAuthUrl(requestUrls.addGSteel),
                            url: '../../tdhc_cgsys/CG_q002/selectst',
                            dataType: "json", //返回格式为json  
                            async: true, //请求是否异步，默认为异步，这也是ajax重要特性  
                            data: JSON.stringify(msg), //下拉框的参数值  requestData.getSteel 上面有定义
                            type: "post", //请求方式 get 或者post ,
                            contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
                            success: function (result) {

                                //console.log.log(result)
                                // 表格数据
                                var tab = result.data
                                // 清空数据
                                ziGang.splice(0, ziGang.length);

                                // 将返回的数据推入到清空的数组中
                                tab.forEach(item => {
                                    ziGang.push(item);
                                });

                                // 将推入进的数据进行刷新
                                let newgrid = $("#ziGangGrid").dxDataGrid("instance");
                                newgrid.refresh();

                                // noticeEditForm.getEditor('cProdKind').option("dataSource", pinzhong)
                            },
                        })
                    }
                }
            }, {
                itemType: "group",
                colCount: 6,
                items: [{
                    colSpan: 2,
                    itemType: "empty",
                },
                {
                    itemType: "button",
                    buttonOptions: {
                        icon: "todo",
                        text: '确定',
                        onClick: function () {

                            let grid = $("#ziGangGrid").dxDataGrid("instance");

                            let rowsData = grid.getSelectedRowsData()[0];
                            let selectedRowKeys = grid.getSelectedRowKeys()

                            //console.log.log(selectedRowKeys)
                            if (rowsData.length < 1) {
                                cake.Ui.toast.show("请至少选择一条数据", "warning", 3000)
                                return
                            }



                            // 带出钢种到添加弹框
                            noticeEditForm.updateData("cOrstid", rowsData.cId)
                            // 带出品名到添加弹框
                            noticeEditForm.updateData("cGoodsname", rowsData.cGoodsname)
                            // // 带出是否急需添加弹框
                            noticeEditForm.updateData("cSw01", rowsData.cSw01)
                            // // 带出采购人添加弹框
                            noticeEditForm.updateData("cOrman", rowsData.cManor)
                            // 带出采购部门添加弹框,
                            noticeEditForm.updateData("cOrdept", rowsData.cDeptor)

                            // // 带出"规格型号"添加弹框,
                            noticeEditForm.updateData("cSpec", rowsData.cSpec)
                            // // 带出"单位"添加弹框,
                            noticeEditForm.updateData("cUnit", rowsData.cUnit)

                            // // 带出"采购人联系方式"添加弹框,
                            noticeEditForm.updateData("cPhone", rowsData.cPhone)
                            // getmidu(rowsData.cStlGrd)
                            // if (!addEditPopup.validate().isValid) {
                            //  return;
                            // };

                            ziEditPopup.hide();

                        }
                    }
                }, {
                    itemType: "button",
                    buttonOptions: {
                        icon: "remove",
                        text: '取消',
                        onClick: function () {
                            ziEditPopup.hide();
                        }
                    }
                }
                ]
            },]
        },
        {
            itemType: "group",
            items: [{
                template: $("#ziGangGrid")

            },

            ]
        },

        ]

    }).dxForm('instance')

    $("#addGangGrid").dxDataGrid({
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
        width: 1200,
        height: 350,
        paging: {
            enabled: false
        },
        editing: {
            mode: "batch",
            allowUpdating: false
        },
        selection: {
            mode: "multiple"
        },
        loadPanel: {
            enabled: true,
            text: '请稍等片刻...'
        },
        columns: [{
            dataField: 'cId',
            caption: '请购单号',
        },
        {
            dataField: 'cComname',
            caption: '公司名称',
        },
        {
            dataField: 'cOrdernum',
            caption: '单据编号',
        },
        {
            dataField: 'cManapply',
            caption: '申请人',
        },
        {
            dataField: 'cDeptapply',
            caption: '申请部门',
        },
        {
            dataField: 'cTimeapply',
            caption: '申请日期',
        },
        {
            dataField: 'cTimetake',
            caption: '收单日期',
        },
        // {
        //     dataField: 'cModifier',
        //     caption: '修改人',
        // },
        // {
        //     dataField: 'cModifytime',
        //     caption: '修改时间',
        // },
        {
            dataField: 'cRemark',
            caption: '备注',
        },
        {
            dataField: 'cState',
            caption: '状态',
        },
        // {
        //     dataField: 'cTimestamp',
        //     caption: '时间戳',
        // },
        {
            dataField: 'cMittype',
            caption: '提交状态',
        },
        {
            dataField: 'cMittime',
            caption: '提交时间',
        },
        // {
        //     dataField: 'cAudittime',
        //     caption: '审核时间',
        // },
        {
            dataField: 'cCreatetime',
            caption: '创建时间',
        },
        {
            dataField: 'cCreater',
            caption: '创建人',
        },
        {
            dataField: 'cAudittype',
            caption: '审核状态',
        },
        {
            dataField: 'cAudittime',
            caption: '审核时间',
        },
        {
            dataField: 'cAuditman',
            caption: '审核人',
        },
        {
            dataField: 'cMitman',
            caption: '提交人',
        },
        ]
    })

    $('#ziGangGrid').dxDataGrid({
        dataSource: ziGang,
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
        width: 1200,
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
        columns: [{
            dataField: "cId",
            caption: "请购物资单号"
        },
        {
            dataField: "cNo",
            caption: "序号"
        },
        {
            dataField: "cMustneed",
            caption: "是否急需"
        },
        {
            dataField: "cTypename",
            caption: "物资类型"
        },
        {
            dataField: "cGoodsname",
            caption: "物资名称"
        },
        {
            dataField: "cSpec",
            caption: "规格型号"
        },
        {
            dataField: "cUnit",
            caption: "单位"
        },
        {
            dataField: "cNum",
            caption: "申报量"
        },
        {
            dataField: "cArrtime",
            caption: "要求到货时间"
        },
        {
            dataField: "cCreater",
            caption: "创建人"
        },
        {
            dataField: "cCreatetime",
            caption: "创建时间"
        },
        {
            dataField: "cModifier",
            caption: "修改人"
        },
        {
            dataField: "cModifytime",
            caption: "修改时间"
        },
        {
            dataField: "cRemark",
            caption: "备注"
        },
        {
            dataField: "cState",
            caption: "采购状态"
        },
        {
            dataField: "cDr",
            caption: "删除标识"
        },
        {
            dataField: "cTimestamp",
            caption: "时间戳"
        },
        {
            dataField: "cSw01",
            caption: "提交状态"
        },
        {
            dataField: "cOrdealline",
            caption: "采购期限"
        },
        {
            dataField: "cDeptor",
            caption: "采购部门"
        },
        {
            dataField: "cManor",
            caption: "采购员"
        },
        {
            dataField: "cPhone",
            caption: "采购员联系方式"
        },
        {
            dataField: "cAllotstate",
            caption: "分配状态"
        },
        {
            dataField: "cAllotman",
            caption: "分配人"
        },
        {
            dataField: "cAllottime",
            caption: "分配时间"
        },
        {
            dataField: "cPlanor",
            caption: "采购进度"
        },
        {
            dataField: "cPolitime",
            caption: "报警时间"
        },
        {
            dataField: "cPolinormtime",
            caption: "报警标准时间/天"
        },
        {
            dataField: "cMtid",
            caption: "请购主表id"
        },
        {
            dataField: "cPlantime",
            caption: "采购进度时间"
        },
            // {
            //     dataField: "",
            //     caption: ""
            // }
        ]

    });




    //Script ------------------------------------
    $('#dataGridS1').dxDataGrid({

    })
    $('#dataGridS2').dxDataGrid({
        height: 250,
    })
    $('#operateFormM1S1').dxForm({
        colCount: 16,
    })
    $('#operateFormM2S2').dxForm({
        colCount: 16,
    })

})