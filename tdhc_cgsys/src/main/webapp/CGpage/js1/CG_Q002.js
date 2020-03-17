///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
let TP_CGORDERMT_C_AUDITTYPE = [];
///////////////////////////////////////////////////////////////////////////////////////////
let TP_CGORDERST_C_MANOR = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_DEPTOR = []; //用于数据集合,对应字段含义为
let S1S21addIns;
let M1S11addIns;
let M1S12addIns;
let C0021addIns;
let S1S22addIns;
let S1S23addIns;
let C0011addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let searchFormS2;
let searchFormDataS2;
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
            lg: 6,
            md: 4,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [


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
                dataField: 'cComname',
                label: {
                    text: '公司名称'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: gongsi,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
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
                    dataSource: shenqingbumen,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
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
            //            {
            //                dataField: 'cAudittype',
            //                label: {
            //                    text: '审核状态'
            //                },
            //                editorType: 'dxSelectBox',
            //                editorOptions: {
            //                    //以上完成对没有联动数据源配置
            //                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            //                    dataSource: TP_CGORDERMT_C_AUDITTYPE,
            //                    valueExpr: 'cSubitemid',
            //                    displayExpr: 'cSubitemdes',
            //                    searchEnable: true,
            //                    showClearButton: true,
            //                }
            //            }
        ]
    }).dxForm('instance')

    searchFormS2 = $('#searchFormS2').dxForm({
        formData: searchFormDataS2,
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
                dataField: 'cManor',
                label: {
                    text: '采购员'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: TP_CGORDERST_C_MANOR,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }

            },
            {
                dataField: 'cMustneed',
                label: {
                    text: '采购类型'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: shifoujixu,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cTypename',
                label: {
                    text: '物资类型'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: wuzileixing,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cAllotstate',
                label: {
                    text: '分配状态'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: fenpeizhuangtai,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
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
            },
            {
                dataField: 'cSpec',
                label: {
                    text: '规格型号'
                },
                editorOptions: {
                    showClearButton: true,
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
        columns: [{
                dataField: 'cComname',
                caption: '公司名称',
                calculateDisplayValue: function(rowData) {

                    let matchedItem = gongsi.find(item => item.cSubitemid == rowData.cComname);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
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
                calculateDisplayValue: function(rowData) {

                    let matchedItem = shenqingbumen.find(item => item.cSubitemid == rowData.cDeptapply);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
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
                dataField: 'cRemark',
                caption: '备注',
            },
            {
                dataField: 'cState',
                caption: '完成状态',
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
                dataField: 'cMittype',
                caption: '提交状态',
                calculateDisplayValue: function(rowData) {

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
            //            {
            //                dataField: 'cAudittype',
            //                caption: '审核状态',
            //                calculateDisplayValue: function (rowData) {
            //
            //                    let matchedItem = shenhezhuangtai.find(item => item.cSubitemid == rowData.cAudittype);
            //
            //                    if (matchedItem == null || matchedItem == undefined) {
            //                        return "";
            //                    } else {
            //                        return matchedItem.cSubitemdes;
            //                    }
            //                }
            //            },
            //            {
            //                dataField: 'cAuditman',
            //                caption: '审核人',
            //            },
            //            {
            //                dataField: 'cAudittime',
            //                caption: '审核时间',
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
        columns: [{
                dataField: 'cNo',
                caption: '存档号',
            },
            {
                dataField: 'cMustneed',
                caption: '采购类型',
                calculateDisplayValue: function(rowData) {

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
            {
                dataField: 'cArrtime',
                caption: '要求到货时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            //            {
            //                dataField: 'cDeptor',
            //                caption: '采购部门',
            //                calculateDisplayValue: function (rowData) {
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
                calculateDisplayValue: function(rowData) {

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
            {
                dataField: 'cState',
                caption: '采购状态',
                calculateDisplayValue: function(rowData) {
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
            //                dataField: 'cPolitime',
            //                caption: '报警时间',
            //                dataType: "date",
            //                format: "yyyy-MM-dd"
            //            },
            //            {
            //                dataField: 'cPolinormtime',
            //                caption: '报警标准时间/天',
            //            },
            {
                dataField: 'cOrdealline',
                caption: '采购期限',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cSw01',
                caption: '提交状态',
                calculateDisplayValue: function(rowData) {

                    let matchedItem = tijiaozhuangtai.find(item => item.cSubitemid == rowData.cSw01);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cAllotstate',
                caption: '分配状态',
                calculateDisplayValue: function(rowData) {

                    let matchedItem = fenpeizhuangtai.find(item => item.cSubitemid == rowData.cAllotstate);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
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
                dataField: 'cMtid',
                caption: '请购单编码',
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
                    text: '查询',
                    onClick: function() {
                        M1S11_serDel();
                    }
                }
            },
            //            {
            //                name: 'M1S12U',
            //                itemType: 'button',
            //                buttonOptions: {
            //                    icon: 'save',
            //                    text: '审核',
            //                    onClick: function() {
            //                        change = '2'
            //                        let grid = $('#dataGridS1').dxDataGrid('instance');
            //                        let rowsData = grid.getSelectedRowsData()[0]
            //                        let selectedRowKeys = grid.getSelectedRowKeys()
            //                        //console.log.log(selectedRowKeys)
            //                        //console.log.log(selectedRowKeys[0].cAudittype)
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
            ////                        if (selectedRowKeys[0].cAudittype == 2) {
            ////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
            ////                            DevExpress.ui.notify('已审核，不允许再次审核', 'info', 3000);
            ////                            return;
            ////                        }
            ////                        if (selectedRowKeys[0].cAudittype == 3) {
            ////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
            ////                            DevExpress.ui.notify('未通过，不允许再次审核', 'info', 3000);
            ////                            return;
            ////                        }
            //                        addIns = $('#addmotai').dxPopup({
            //                            //模态框增加name    
            //                            width: 1000,
            //                            height: 450
            //                        }).dxPopup('instance')
            //                        addIns.option('title', 'CG_Q002');
            //                        addIns.show();
            //                        // 调用模态框函数    
            //                        // updatafun()    
            //                        M1S12_Updatefun()
            //                        M1S12addIns.option('formData', rowsData)
            //                    }
            //                }
            //            },
        ]
    })
    $('#operateFormS1S2').dxForm({
        width: '100%',
        colCount: 16,
        items: [
            //      {
            //          name:'S1S21U',
            //          itemType: 'button',  
            //          buttonOptions: {     
            //              icon: 'save',     
            //          text: 'S1S21U',
            //              onClick: function(){     
            //                  change='2'     
            //                  let grid = $('#dataGridS2').dxDataGrid('instance');     
            //                  let rowsData = grid.getSelectedRowsData()[0]     
            //                  let selectedRowKeys = grid.getSelectedRowKeys()     
            //                  if (selectedRowKeys.length < 1) {     
            //                      // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
            //                      DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);     
            //                      return;     
            //                  }     
            //                  if (selectedRowKeys.length > 1) {    
            //                      // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
            //                      DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
            //                      return;    
            //                  }
            //                  
            //                  S1S21_Updatefun()    
            //                  S1S21addIns.option('formData',rowsData)    
            //              }    
            //          }    
            //      },  
            {
                name: 'M2S2Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '查询',
                    onClick: function() {
                        M2S2_serDel();
                    }
                }
            },
            {
                name: 'S1S22U',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '分配',
                    onClick: function() {
                        let s1grid = $('#dataGridS1').dxDataGrid('instance');
                        let s1row = s1grid.getSelectedRowsData()[0];

                        //                        if (s1row.cAudittype != 2)
                        //                        {
                        //                           DevExpress.ui.notify('没有通过审核，不允许更改分配。', 'info', 3000);
                        //                          return;
                        //                        }
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        //console.log.log(rowsData)
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        //console.log.log(selectedRowKeys)
                        if (selectedRowKeys < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')
                            DevExpress.ui.notify('请选择一条要分配的数据。', 'info', 3000);
                            return;
                        }

                        //                        if (selectedRowKeys.length > 1) {
                        //                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        //                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                        //                            return;
                        //                        }
                        //                        if (selectedRowKeys[0].cPlanor != 0) {
                        //                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                        //                            DevExpress.ui.notify('已经开始采购，不允许更改分配。', 'info', 3000);
                        //                            return;
                        //                        }

                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_Q002');
                        addIns.show();
                        S1S22_Updatefun()
                        S1S22addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'S1S23MSG',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '撤销分配',
                    onClick: function() {
                        change = '2'
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
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

                        //                 //console.log.log(selectedRowKeys[0])
                        if (selectedRowKeys[0].cAllotstate == 0) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('未分配，不能执行撤销', 'info', 3000);
                            return;
                        }
                        S1S23_Msgfun()
                    }
                }
            },
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

        initLoads()

        function initLoads() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    gongsi = result.data; */
                    result.data.forEach(item => {
                        gongsi.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /*  //console.log.log(result.data);
                     wuzileixing = result.data; */
                    result.data.forEach(item => {
                        wuzileixing.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    shenqingbumen = result.data; */

                    result.data.forEach(item => {
                        shenqingbumen.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    wanchengzhuangtai = result.data; */

                    result.data.forEach(item => {
                        wanchengzhuangtai.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    shifoujixu = result.data; */

                    result.data.forEach(item => {
                        shifoujixu.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    shenhezhuangtai = result.data; */

                    result.data.forEach(item => {
                        shenhezhuangtai.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    tijiaozhuangtai = result.data; */

                    result.data.forEach(item => {
                        tijiaozhuangtai.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    caigoubumen = result.data; */

                    result.data.forEach(item => {
                        caigoubumen.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    caigouyuan = result.data; */

                    result.data.forEach(item => {
                        caigouyuan.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    caigoujindu = result.data; */

                    result.data.forEach(item => {
                        caigoujindu.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /*  //console.log.log(result.data);
                     fenpeizhuangtai = result.data; */

                    result.data.forEach(item => {
                        fenpeizhuangtai.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
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
                success: function(result) {
                    /* //console.log.log(result.data);
                    caigouzhuangtai = result.data; */

                    result.data.forEach(item => {
                        caigouzhuangtai.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }


        ////////////////////////////////////////////////////////////////////////////////    
        //寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
        ////////////////////////////////////////////////////////////////////////////////    
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q002/C0011Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_DEPTOR.splice(0, TP_CGORDERST_C_DEPTOR.length);
                data.data.cgQ002C001.forEach(item => TP_CGORDERST_C_DEPTOR.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q002/C0021Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_MANOR.splice(0, TP_CGORDERST_C_MANOR.length);
                data.data.cgQ002C002.forEach(item => TP_CGORDERST_C_MANOR.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q002/C0031Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_AUDITTYPE.splice(0, TP_CGORDERMT_C_AUDITTYPE.length);
                data.data.cgQ002C003.forEach(item => TP_CGORDERMT_C_AUDITTYPE.push(item));
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
    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {

            }
        };

        msg.data.cgQ002M1s1 = searchdataFormM1.option('formData');
        //开始时间
        let startTime = msg.data.cgQ002M1s1.startTime;
        msg.data.cgQ002M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

        // 结束时间
        let endTime = msg.data.cgQ002M1s1.endTime;
        msg.data.cgQ002M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);

        // let searchtiao = searchdataFormM1.option('formData')

        msg.data.cgQ002M1s1 = [searchdataFormM1.option('formData')];

        // //console.log.log(msg)
        let searchtiao = searchdataFormM1.option('formData')
        msg.data.cgQ002M1s1 = [searchdataFormM1.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q002/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                //console.log.log(data)
                if (data.data == null) {
                    tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    return
                }

                let select;
                select = data.data.cgQ002M1s1
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

    function M2S2_serDel() {

        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {
                cMustneed: null,
                cGoodsname: null,
                cTypename: null,
                cSpec: null,
                cAllotstate: null
            }
        };
        msg.data = searchFormS2.option('formData');
        //console.log.log(msg)
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/selForAllot'),
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
                    cake.Ui.LoadPanel.close();
                    return
                }
                let select;
                select = data.data
                tabledataS2.splice(0, tabledataS2.length);
                select.forEach(item => tabledataS2.push(item));
                $('#dataGridS2').dxDataGrid('instance').deselectAll()
                $('#dataGridS2').dxDataGrid('instance').refresh()
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;    
                cake.Ui.LoadPanel.close();
            }
        })
    }

    function M1S12_Updatefun() {
        M1S12addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 2,
            items: [{
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
                //                {
                //                    dataField: 'cAuditman',
                //                    label: {
                //                        text: '审核人'
                //                    },
                //                    editorOptions: {
                //                        showClearButton: true,
                //                    },
                //                    validationRules: [{
                //                        type: 'stringLength',
                //                        max: 20,
                //                        min: 0,
                //                        message: '长度超限，最长为20！'
                //                    }, ]
                //                },
                //          {
                //              dataField:'cAudittime',
                //              label:{
                //                  text:'审核时间'
                //              },
                //      editorType: 'dxDateBox',
                //      editorOptions: {
                //      displayFormat: 'yyyy-MM-dd',
                //      type: 'datetime',
                //                      },
                //      validationRules: [      ]
                //                  }
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
                //change等于1为添加         
                let grid = $('#dataGridS1').dxDataGrid('instance');
                let rowsData = grid.getSelectedRowsData()
                msg.data.cgQ001M1s13 = rowsData;
                msg.data.tpCgordermt = M1S12addIns.option('formData');
                //console.log.log(msg)
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002mt/shenhe'),
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

    function S1S21_Updatefun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                dataField: 'cPhone',
                label: {
                    text: '采购员联系方式'
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
            }]
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
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q002/S1S21U'),
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

    function S1S22_Updatefun() {
        S1S22addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cDeptor',
                    label: {
                        text: '采购部门'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGORDERST_C_DEPTOR,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
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
                        dataSource: TP_CGORDERST_C_MANOR,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                        onValueChanged: function(e) {
                            //                          //console.log.log("dfsd==f" + e.value);
                            let matchedItem = caigouyuan.find(item => item.cSubitemid == e.value);
                            if (matchedItem == null || matchedItem == undefined) {} else {
                                S1S22addIns.getEditor('cPhone').option('value', matchedItem.cValue);
                            }
                        }
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, {
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cPhone',
                    label: {
                        text: '采购员联系方式'
                    },
                    editorOptions: {
                        showClearButton: true,
                        //                          onValueChanged:function (e){
                        //                          //console.log.log("dfsd==f" + e.value);
                        //                          let matchedItem = caigouyuan.find(item => item.cSubitemid == e.value);
                        //                          if (matchedItem == null || matchedItem == undefined) {
                        //                          } else {
                        //                              S1S22addIns.getEditor('cPhone').option('value', matchedItem.cValue);
                        //                          }
                        //                      }                       
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, {
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                //          {
                //              dataField:'cAllotstate',
                //              label:{
                //                  text:'分配状态'
                //              },
                //      editorOptions: {
                //      showClearButton: true,
                //                      },
                //      validationRules: [      {
                //          type: 'stringLength',max:1,min:0,
                //          message: '长度超限，最长为1！'
                //      },      ]
                //                  },
                //          {
                //              dataField:'cAllotman',
                //              label:{
                //                  text:'分配人'
                //              },
                //      editorOptions: {
                //      showClearButton: true,
                //                      },
                //      validationRules: [      {
                //          type: 'stringLength',max:20,min:0,
                //          message: '长度超限，最长为20！'
                //      },      ]
                //                  },
                //          {
                //              dataField:'cAllottime',
                //              label:{
                //                  text:'分配时间'
                //              },
                //      editorType: 'dxDateBox',
                //      editorOptions: {
                //      displayFormat: 'yyyy-MM-dd',
                //      type: 'datetime',
                //                      },
                //      validationRules: [      ]
                //                  }
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
                    data: {},
                };
                let grid = $('#dataGridS2').dxDataGrid('instance');
                let rowsData = grid.getSelectedRowsData()
                msg.data.cgQ002S1s2 = rowsData;
                msg.data.forMdate = S1S22addIns.option('formData');
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q002/S1S22U'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {

                            M2S2_serDel();

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
    function S1S23_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };






        msg.data = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        //console.log.log(msg.data)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q002//S1S22MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {

                M2S2_serDel();
                DevExpress.ui.notify('数据撤销成功', 'success', 3000);

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
    //  -----------------------------
    $('#dataGridS1').dxDataGrid({
        onRowClick: function(e) {
            S1S21_SSRT() //S1S21SSRT() 改为 S1S21_SSRT() 
        }
    })

    function S1S21_SSRT() { //zsq   S1S21SSRT()   改为   S1S21_SSRT()  
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        //console.log.log(msg.data)
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/s1s21q'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {
                //              //console.log.log(data)
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

    //Script ------------------------------------
})