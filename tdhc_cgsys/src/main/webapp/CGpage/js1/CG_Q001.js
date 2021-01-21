///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let TP_CGORDERST_C_TYPENAME = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_STATE = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_MITTYPE = []; //用于数据集合,对应字段含义为	
let TP_CGORDERST_C_DEPTOR = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_ALLOTSTATE = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_COMNAME = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_AUDITTYPE = []; //用于数据集合,对应字段含义为
let TP_CGORDERST_C_PLANOR = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_STATE = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_C_DEPTAPPLY = []; //用于数据集合,对应字段含义为
let S1S21addIns;
let C0041addIns;
let M1S13addIns;
let C00B1addIns;
let M1S11addIns;
let C0061addIns;
let C0091addIns;
let C0031addIns;
let C0071addIns;
let C0021addIns;
let C0051addIns;
let M1S14addIns;
let C0011addIns;
let C00A1addIns;
let C0081addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let searchdataM2;
let adddata = {}; //添加按钮需要的数据源
let addIns; //增加操作时候的模态框实例
let addIns2; //增加操作时候的模态框实例
//设置模态框的属性
if (addIns == null) {
    addIns = $('#addmotai ').dxPopup({
        'visible': false, //设置属性不可见
        height: 300, //设置高度
        width: 450, //设置宽度
    }).dxPopup('instance');
}
let change = ''; //区分增加和修改的状态,1为增加;2为修改
let gongsimingcheng = []
let bumenmingcheng = []
let wanchengzhuangtai = []
let shenhezhuangtai = []
let caigoujindu = []
let tijiaozhuangtai = []
let caigoubumen = []
let caigouyuan = []
let caigouzhuangtai = []
let fenpeizhuangtai = []
let wuzileixing = []
let shifoujiju = []
let outForm;
let addGang = []
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
                    text: '请购单号'
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
        ]
    }).dxForm('instance')
    searchdataFormM1.getEditor('startTime').option('value',new Date(moment().add(-10,'days')));   
    searchdataFormM1.getEditor('endTime').option('value',new Date(moment()));        		
    //完成对查询条件的自动生成
    searchdataFormM2 = $('#searchFormM2').dxForm({
        deferRendering : false, 
   
           formData:searchdataM2,
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
                           dataField:'cGoodsname',
                           label:{
                               text:'物资名称'
                           },
                           editorOptions: {
                           showClearButton: true,
                           }
                       },
                       {
                           dataField:'cSpec',
                           label:{
                               text:'规格型号'
                           },
                           editorOptions: {
                           showClearButton: true,
                           }
                       },
                       {
                           dataField: 'cManor2',
                           label: {
                               text: '采购员'
                           },
                           editorType: 'dxTagBox',
                           editorOptions: {
                               //以上完成对没有联动数据源配置
                               //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                               dataSource: caigouyuan,
                               valueExpr: 'cSubitemid',
                               displayExpr: 'cSubitemdes',
                               searchEnable: true,
                               searchEnabled:true,
                               showClearButton: true,
                               height:26,
                               width: 160,
                               showSelectionControls: true,
                               placeholder:'点击选择',
//                               readOnly:true,
                           },
                       },


               ]
           }).dxForm('instance')
    ////////////////////////////////////
    //////表格属性生成/////////////////)
    ////////////////////////////////////
    $('#dataGridS1').dxDataGrid({
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
        loadPanel: {
            enabled: true
        },
        columns: [
        	{
                dataField: 'cComname',
                caption: '所属项目部',
            },
            {
            	dataField: 'cSw01',
            	caption: '请购项目',
            },
            {
                dataField: 'cOrdernum',
                caption: '请购单号',
            },
            {
                dataField: 'cDeptapply',
                caption: '请购部门',
            },
            {
                dataField: 'cManapply',
                caption: '请购人',
            },
            {
                dataField: 'cTimeapply',
                caption: '请购日期',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
              dataField: 'cRemark',
              caption: '备注',
            },
            {
                dataField: 'cCreatetime',
                caption: '上传时间',
                dataType: "date",
                format: "yyyy-MM-dd HH:mm:ss"
            },
        ]
    });
    $('#dataGridS2').dxDataGrid({
        dataSource: tabledataS2,
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
        noDataText: '',
        //允许脚本编写    
         height: 400,
        width: '100%',
      /*  searchPanel: {
            visible: true,
            placeholder: "请输入搜索内容"
        },*/
        paging: {
            enabled: false
        },
       /* scrolling: {
            mode: 'virtual'
        },*/
        selection: {
            mode: 'multiple'
        },
        loadPanel: {
            enabled: true
        },
        paging: {
            pageSize: 50,
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
        columns: [
        	  {
              	dataField: 'cSw14',
              	caption: '请购项目',
              },
        	{
                dataField: 'cMustneed',
                caption: '采购类型',
                calculateDisplayValue: function (rowData) {
                    let matchedItem = shifoujiju.find(item => item.cSubitemid == rowData.cMustneed);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
                width: 120,
                alignment: 'center',
            },
            {
            	dataField: 'cSpec',
            	caption: '规格型号',
                width: 240,
                alignment: 'center',
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
            {
                dataField: 'cConnum',
                caption: '合同号',
            },
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
            	dataField: 'cState',
            	caption: '状态',
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
            	dataField: 'cTypename',
            	caption: '特批类型',
            },   
            {
            	dataField: 'cSw08',
            	caption: '类别明细',
            },
            {
            	dataField: 'cSw09',
            	caption: '建设/生产',
            },
            {
                dataField: 'cRemark',
                caption: '备注',
                width: 240,
            },
            {
                dataField: 'qXcause',
                caption: '取消原因',
                width: 150,
            },
//            {
//                dataField: 'cPhone',
//                caption: '采购员联系方式',
//            },
            {
                dataField: 'xjgoodsname',
                caption: '报关物资名称',
                width: 120,
                alignment: 'center',
            },
            {
                dataField: 'xjspec',
                caption: '规格型号',
                width: 240,
                alignment: 'center',
            },
            {
                dataField: 'xjunit',
                caption: '单位',
            },
            {
                dataField: 'xjnum',
                caption: '订货数量',
            },
            {
                dataField: 'cSupplier',
                caption: '供应商',
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
                dataField: 'cMtid',
                caption: '请购单编码',
                width: 1,
                alignment: 'center',
            },
            {
                dataField: 'cId',
                caption: '物资单号',
            },
        ]
    });
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
                    onClick: function() {
                        M1S11_serDel();
                    }
                }
            },
            {
                name: 'M1S11A',
                itemType: 'button',
                buttonOptions: {
                    icon: 'plus',
                    text: '新增',
                    onClick: function() {
                        change = '1';

                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_Q001')
                        addIns.show();
                        M1S11_addfun();
                        M1S11addIns.option('formData', new Object())
                        var localTime = new Date();
                        M1S11addIns.getEditor('cTimeapply').option('value',moment());
//                        M1S11addIns.getEditor('cTimetake').option('value',moment());
//                        M1S11addIns.getEditor('cState').option('value','0');//wancheng
//                        M1S11addIns.getEditor('cAudittype').option('value','1');//shenhe
//                        M1S11addIns.getEditor('cMittype').option('value','0');//tijiao
                        //M1S11addIns.option('formData', new object());
                 
                    }
                }
            },
            {
                name: 'M1S11_U',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '修改',
                    onClick: function() {
                        change = '2'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        //console.log.log(rowsData)
                        //console.log.log(selectedRowKeys)
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                        //console.log.log(selectedRowKeys[0])
//                        if (selectedRowKeys[0].cAudittype == 2) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('已审核，不允许修改', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys[0].cMittype == 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('已提交，不允许修改', 'info', 3000);
//                            return;
//                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_Q001');
                        addIns.show();
                        // 调用模态框函数    
                        // updatafun() 
                        M1S11_Updatefun()
                        M1S11addIns.option('formData', new Object());
                        M1S11addIns.getEditor('cComname').option('value',rowsData.cComname);
                        M1S11addIns.getEditor('cOrdernum').option('value',rowsData.cOrdernum);
                        M1S11addIns.getEditor('cDeptapply').option('value',rowsData.cDeptapply);
                        M1S11addIns.getEditor('cManapply').option('value',rowsData.cManapply);
                        M1S11addIns.getEditor('cTimeapply').option('value',rowsData.cTimeapply);
                        M1S11addIns.getEditor('cRemark').option('value',rowsData.cRemark);
                        M1S11addIns.getEditor('cSw01').option('value',rowsData.cSw01);
                    }
                }
            },
            {
                name: 'M1S11D',
                itemType: 'button',
                buttonOptions: {
                    icon: 'remove',
                    text: '删除',
                    onClick: function() {
                        let grid1 = $('#dataGridS1').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        //脚本执行  

//                        if (selectedRowKeys[0].cAudittype == 2) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('已审核，不允许删除', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys[0].cMittype == 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('已提交，不允许删除', 'info', 3000);
//                            return;
//                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        //前后端统一叫'tscLtrawbin' 

                        msg.data.cgQ001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();

                        var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                   
                       
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/M1S11D'),
                                        dataType: 'json', //返回格式为json   
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                        type: 'post', //请求方式 get 或者post , 
                                        contentType: 'application/json',
                                        success: function(data) {
                                            let select = data.msg
                                            if (data.errcode == 0) {
                                                DevExpress.ui.notify('删除成功', 'success', 3000);
                                                M1S11_serDel();
                                                tabledataS2.splice(0,tabledataS2.length);
                                                $('#dataGridS2').dxDataGrid('instance').option('dataSource',tabledataS2);
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
                name: 'M1S11_F1',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '请购单导出', //S1S23U 改为 采购进度修改
                    onClick: function() {
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择要导出的请购单信息。', 'info', 3000);
                            return;
                        }
                        addEditPopup.show();
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {},
                        };
                        msg.data.list = rowsData;//物资
                        //console.log.log(msg)
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002mt/OUTorder'),
                            dataType: 'json', //返回格式为json   
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                            type: 'post', //请求方式 get 或者post ,         
                            contentType: 'application/json',
                            success: function(data) {
                                //console.log.log(data)
                                if (data.data == null) {
                                    addGang.splice(0, addGang.length);
                                    $('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
                                    return
                                }
                                let select;
                                select = data.data
                                addGang.splice(0, addGang.length);
                                select.forEach(item => addGang.push(item));
                                $('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
                                $('#addGangGrid').dxDataGrid('instance').deselectAll()
                                $('#addGangGrid').dxDataGrid('instance').refresh()
                            },
                            error: function() {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                            }
                        })
                    }
                }
            },
//            {
//                name: 'M1S13MSG',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '提交',
//                    onClick: function() {
//                        change = '2'
//                        let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0]
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys[0].cAudittype == 2) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('已审核，不允许提交', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys[0].cMittype == 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('已提交，不允许提交', 'info', 3000);
//                            return;
//                        }
//                        M1S13_Msgfun()
//                    }
//                }
//            },
//            {
//            	name: 'M1S13MSG2',
//            	itemType: 'button',
//            	buttonOptions: {
//            		icon: 'save',
//            		text: '取消提交',
//            		onClick: function() {
//            			change = '2'
//            				let grid = $('#dataGridS1').dxDataGrid('instance');
//            			let rowsData = grid.getSelectedRowsData()[0]
//            			let selectedRowKeys = grid.getSelectedRowKeys()
//            			if (selectedRowKeys.length < 1) {
//            				// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//            				DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//            				return;
//            			}
//            			if (selectedRowKeys[0].cAudittype == 2) {
//            				// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//            				DevExpress.ui.notify('已审核，不允许取消提交', 'info', 3000);
//            				return;
//            			}
//            			M1S13_Msgfun2()
//            		}
//            	}
//            },
        ]
    })
    $('#operateFormS1S2').dxForm({
        width: '100%',
        colCount: 6,
        items: [{
                name: 'M2S11Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '查询',
                    onClick: function() {
                        M2S11_serDel();
                    }
                }
            },
            {
                name: 'S1S21A',
                itemType: 'button',
                buttonOptions: {
                    icon: 'plus',
                    text: '新增',
                    onClick: function() {
                        change = '1';
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0];
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条请购单。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条请购单。', 'info', 3000);
                            return;
                        }
//                        if (selectedRowKeys[0].cMittype == 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('已提交，不能再增加', 'info', 3000);
//                            return;
//                        }
                        $('#addmotai').show()
                        
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_Q001')
                        addIns.show();
                        S1S21_addfun();
                        let a = new Object();
                        $.extend(a,rowsData);
                        a.cMtid=a.cId;
                        S1S21addIns.option('formData', a)
                        S1S21addIns.getEditor('cRemark').option('value',null);
//                        S1S21addIns.getEditor('cMustneed').option('value','0');
//                        S1S21addIns.getEditor('cTypename').option('value','1');
//                        S1S21addIns.getEditor('cArrtime').option('value',moment().add(60,'days'));  
//                        S1S21addIns.getEditor('cPlanor').option('value','0');
//                        S1S21addIns.getEditor('cAllotstate').option('value','0');
//                        S1S21addIns.getEditor('cPolinormtime').option('value','30');  
//                        S1S21addIns.getEditor('cPolitime').option('value',moment().add(30,'days'));  
//                        S1S21addIns.getEditor('cOrdealline').option('value',moment().add(20,'days'));  
                        //S1S21addIns.getEditor('cId').option('value','');
                        //S1S21addIns.option('formData', new object());
                    }
                }
            },
            {
                name: 'S1S21U',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '修改',
                    onClick: function() {
                        change = '2'
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请至少选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                       /* if (selectedRowKeys.length > 1) {
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            return;
                        }*/
                        addIns = $('#addmotai').dxPopup({
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_Q001');
                        addIns.show();
                        S1S21_Updatefun()
                        S1S21addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'S1S21UCGY',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '采购员修改',
                    onClick: function() {
                        change = '3'
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请至少选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                       /* if (selectedRowKeys.length > 1) {
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            return;
                        }*/
                        addIns = $('#addmotai').dxPopup({
                            width: 600,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '采购员修改');
                        addIns.show();
                        S1S21_UpdatefunCGY();
                        S1S21addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'S1S21Ubuy',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '取消购买',
                    onClick: function() {
                        change = '4'
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请至少选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                       /* if (selectedRowKeys.length > 1) {
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            return;
                        }*/
                        addIns = $('#addmotai').dxPopup({
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_Q001');
                        addIns.show();
                        S1S21Ubuy_Updatefun()
                        S1S21addIns.option('formData', new Object())
                    }
                }
            },
            {
                name: 'S1S21Dquxiaobuy',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '撤回取消购买',
                    onClick: function() {
                        change = '5'
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请至少选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                       /* if (selectedRowKeys.length > 1) {
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            return;
                        }*/
                        addIns = $('#addmotai').dxPopup({
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_Q001');
                        addIns.show();
                        S1S21Dquxiaobuy_Updatefun()
                        S1S21addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'S1S21D',
                itemType: 'button',
                buttonOptions: {
                    icon: 'remove',
                    text: '删除',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
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
                            data: {}
                        };
                        msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                        
                        var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                   
                       
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21D'),
                                        dataType: 'json', //返回格式为json   
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                        type: 'post', //请求方式 get 或者post , 
                                        contentType: 'application/json',
                                        success: function(data) {
                                            let select = data.msg
                                            if (data.errcode == 0) {
                                                DevExpress.ui.notify('删除成功', 'success', 3000);
                                                S1S21_SSRT();
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
                name: 'S1S21UCF',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '拆分',
                    onClick: function() {
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择要拆分的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            DevExpress.ui.notify('一次只能选择一条要拆分的数据。', 'info', 3000);
                            return;
                        }
                        console.log(grid.getSelectedRowsData())
                        addIns = $('#addmotai').dxPopup({
                            width: 560,
                            height: 200
                        }).dxPopup('instance')
                        addIns.option('title', '请输入想要拆分的数量');
                        addIns.show();
                        S1S21_UXFfun()
                        let a = new Object();
                        $.extend(a,rowsData);
                        S1S21addIns.getEditor('cId').option('value',a.cId);
                        S1S21addIns.getEditor('cUnit').option('value',a.cUnit);
//                        S1S21addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'S1S21jianguan',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '监管',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要监管的数据。', 'info', 3000);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21S'),
                            dataType: 'json', //返回格式为json   
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                            type: 'post', //请求方式 get 或者post , 
                            contentType: 'application/json',
                            success: function(data) {
                                let select = data.msg
                                if (data.errcode == 0) {
                                    DevExpress.ui.notify('管理成功', 'success', 3000);
//                                    S1S21_SSRT();
                                    M2S11_serDel();
                                } else {
                                    DevExpress.ui.notify(select, 'warning', 3000);
                                }
                            },
                            error: function() {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                            }
                        })
                    }
                }
            },
            {
                name: 'S1S21Dquxiao',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '取消监管',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要取消监管的数据。', 'info', 3000);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21CS'),
                            dataType: 'json', //返回格式为json   
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                            type: 'post', //请求方式 get 或者post , 
                            contentType: 'application/json',
                            success: function(data) {
                                let select = data.msg
                                if (data.errcode == 0) {
                                    DevExpress.ui.notify('删除成功', 'success', 3000);
//                                    S1S21_SSRT();
                                    M2S11_serDel();
                                } else {
                                    DevExpress.ui.notify(select, 'warning', 3000);
                                }
                            },
                            error: function() {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                            }
                        })
                    }
                }
            },    
            {
                name: 'S1S21UpT',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '转T类',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要监管的数据。', 'info', 3000);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21UpT'),
                            dataType: 'json', //返回格式为json   
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                            type: 'post', //请求方式 get 或者post , 
                            contentType: 'application/json',
                            success: function(data) {
                                let select = data.msg
                                if (data.errcode == 0) {
                                    DevExpress.ui.notify('修改成功', 'success', 3000);
//                                    S1S21_SSRT();
                                    M2S11_serDel();
                                } else {
                                    DevExpress.ui.notify(select, 'warning', 3000);
                                }
                            },
                            error: function() {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                            }
                        })
                    }
                }
            },
            {
                name: 'S1S21DqCXT',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '撤回转T类',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要取消监管的数据。', 'info', 3000);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21DCXT'),
                            dataType: 'json', //返回格式为json   
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                            type: 'post', //请求方式 get 或者post , 
                            contentType: 'application/json',
                            success: function(data) {
                                let select = data.msg
                                if (data.errcode == 0) {
                                    DevExpress.ui.notify('删除成功', 'success', 3000);
//                                    S1S21_SSRT();
                                    M2S11_serDel();
                                } else {
                                    DevExpress.ui.notify(select, 'warning', 3000);
                                }
                            },
                            error: function() {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                            }
                        })
                    }
                }
            },  
            
        ]
    })
    ///////////////////////////////////////////////////////
    //Star()请求下拉框、多选框数据、通过请求网址的后缀生成代码 
    ///////////////////////////////////////////////////////
    function start() {
    	
    	addIns2  = $('#addmotai0').dxPopup({
    	    //模态框增加name    
    	    width: 200,
    	    height: 70
    	}).dxPopup('instance'); //增加操作时候的模态框实例
        //ajax传参用           
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        //console.log.log(msg)
        ////////////////////////////////////////////////////////////////////////////////    
        //寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
        ////////////////////////////////////////////////////////////////////////////////    
        initLoad()
        function initLoad() {
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
                   /*  //console.log.log(result.data);
                    gongsimingcheng = result.data; */

                    result.data.forEach(item => {
                        gongsimingcheng.push(item);
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

//        initLoad1()
//        function initLoad1() {
//            //cake.Ui.LoadPanel.show()
//            // 初始化加载所有下拉框数据
//            msg = {
//                ver: "53cc62f6122a436083ec083eed1dc03d",
//                session: "42f5c0d7178148938f4fda29460b815a",
//                tag: {},
//                data: {
//                    "cItemid": "BMMC"
//                }
//            };
//            $.ajax({
//                type: "post",
//                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
//                data: JSON.stringify(msg),
//                contentType: "application/json",
//                dataType: "json",
//                success: function (result) {
//                   /*  //console.log.log(result.data);
//                    bumenmingcheng = result.data; */
//
//                    result.data.forEach(item => {
//                        bumenmingcheng.push(item);
//                    });
//                    // 钢种分类
//                   // globecStlGroup.splice(0, globecStlGroup.length);
//                
//                  //  cake.Ui.LoadPanel.close()
//                },
//                error: function () {
//                    cake.Ui.LoadPanel.close()
//                }
//            });
//        }

        initLoad2()
        function initLoad2() {
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

        initLoad3()
        function initLoad3() {
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

        initLoad4()
        function initLoad4() {
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

//        initLoad5()
//        function initLoad5() {
//            msg = {
//                ver: "53cc62f6122a436083ec083eed1dc03d",
//                session: "42f5c0d7178148938f4fda29460b815a",
//                tag: {},
//                data: {
//                    "cItemid": "CGBM"
//                }
//            };
//            $.ajax({
//                type: "post",
//                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
//                data: JSON.stringify(msg),
//                contentType: "application/json",
//                dataType: "json",
//                success: function (result) {
//                    result.data.forEach(item => {
//                        caigoubumen.push(item);
//                    });
//                },
//                error: function () {
//                    cake.Ui.LoadPanel.close()
//                }
//            });
//        }

        initLoad6()
        function initLoad6() {
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
                        caigouyuan.push(item);
                    });
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
                        console.log(caigouzhuangtai)
                    });
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
        initLoad9()
        function initLoad9() {
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
                        shifoujiju.push(item);
                    });
                },
                error: function () {
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

//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0011Q'), //请求的url地址
//            dataType: 'json', //返回格式为json              
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
//            type: 'post', //请求方式 get 或者post ,            
//            contentType: 'application/json',
//            success: function(data) {
//                TP_CGORDERMT_C_COMNAME.splice(0, TP_CGORDERMT_C_COMNAME.length);
//                data.data.cgQ001C001.forEach(item => TP_CGORDERMT_C_COMNAME.push(item));
//                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
//            },
//            error: function() {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
//                //e.cancel=true;            
//            }
//        })
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0021Q'), //请求的url地址
//            dataType: 'json', //返回格式为json              
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
//            type: 'post', //请求方式 get 或者post ,            
//            contentType: 'application/json',
//            success: function(data) {
//                TP_CGORDERMT_C_AUDITTYPE.splice(0, TP_CGORDERMT_C_AUDITTYPE.length);
//                data.data.cgQ001C002.forEach(item => TP_CGORDERMT_C_AUDITTYPE.push(item));
//                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
//            },
//            error: function() {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
//                //e.cancel=true;            
//            }
//        })
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0041Q'), //请求的url地址
//            dataType: 'json', //返回格式为json              
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
//            type: 'post', //请求方式 get 或者post ,            
//            contentType: 'application/json',
//            success: function(data) {
//                shifoujiju.splice(0, shifoujiju.length);
//                data.data.cgQ001C004.forEach(item => shifoujiju.push(item));
//                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
//            },
//            error: function() {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
//                //e.cancel=true;            
//            }
//        })
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0051Q'), //请求的url地址
//            dataType: 'json', //返回格式为json              
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
//            type: 'post', //请求方式 get 或者post ,            
//            contentType: 'application/json',
//            success: function(data) {
//                TP_CGORDERST_C_PLANOR.splice(0, TP_CGORDERST_C_PLANOR.length);
//                data.data.cgQ001C005.forEach(item => TP_CGORDERST_C_PLANOR.push(item));
//                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
//            },
//            error: function() {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
//                //e.cancel=true;            
//            }
//        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0031Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_MITTYPE.splice(0, TP_CGORDERMT_C_MITTYPE.length);
                data.data.cgQ001C003.forEach(item => TP_CGORDERMT_C_MITTYPE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C00B1Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_DEPTOR.splice(0, TP_CGORDERST_C_DEPTOR.length);
                data.data.cgQ001C00b.forEach(item => TP_CGORDERST_C_DEPTOR.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0071Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERST_C_ALLOTSTATE.splice(0, TP_CGORDERST_C_ALLOTSTATE.length);
                data.data.cgQ001C007.forEach(item => TP_CGORDERST_C_ALLOTSTATE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0081Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_STATE.splice(0, TP_CGORDERMT_C_STATE.length);
                data.data.cgQ001C008.forEach(item => TP_CGORDERMT_C_STATE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0091Q'), //请求的url地址
//            dataType: 'json', //返回格式为json              
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
//            type: 'post', //请求方式 get 或者post ,            
//            contentType: 'application/json',
//            success: function(data) {
//                TP_CGORDERMT_C_DEPTAPPLY.splice(0, TP_CGORDERMT_C_DEPTAPPLY.length);
//                data.data.cgQ001C009.forEach(item => TP_CGORDERMT_C_DEPTAPPLY.push(item));
//                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
//            },
//            error: function() {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
//                //e.cancel=true;            
//            }
//        })
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C00A1Q'), //请求的url地址
//            dataType: 'json', //返回格式为json              
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
//            type: 'post', //请求方式 get 或者post ,            
//            contentType: 'application/json',
//            success: function(data) {
//                TP_CGORDERST_C_STATE.splice(0, TP_CGORDERST_C_STATE.length);
//                data.data.cgQ001C00a.forEach(item => TP_CGORDERST_C_STATE.push(item));
//                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
//            },
//            error: function() {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
//                //e.cancel=true;            
//            }
//        })
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
                cgQ001M1s1: {
                    startTime: new Date(),
                    endTime: new Date(),
                    cOrdernum: null,
                    cComname: null,
                    cDeptapply: null,
                    cManapply: null,
                    cState:null,
                }
            }
        };
        msg.data.cgQ001M1s1 = searchdataFormM1.option('formData');
        //开始时间
        let startTime = msg.data.cgQ001M1s1.startTime;
        msg.data.cgQ001M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        // 结束时间
        let endTime = msg.data.cgQ001M1s1.endTime;
        msg.data.cgQ001M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        msg.data.cgQ001M1s1 = [searchdataFormM1.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
            	let select;
                select = data.data.cgQ001M1s1
//                console.log(select)
                if (select.length == 0) {
                	tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    tabledataS2.splice(0, tabledataS2.length);
                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                    $('#dataGridS2').dxDataGrid('instance').deselectAll()
                    $('#dataGridS2').dxDataGrid('instance').refresh()
                    return
                }
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
    //表2的查询
    function M2S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {
                cgQ001M1s1: {
                   
                }
            }
        };
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()[0];
        let selectedRowKeys = grid.getSelectedRowKeys()
        if (selectedRowKeys.length < 1) {
            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
            DevExpress.ui.notify('请选择一条请购单。', 'info', 3000);
            return;
        }
        if (selectedRowKeys.length > 1) {
            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
            DevExpress.ui.notify('一次只能选择一条请购单。', 'info', 3000);
            return;
        }
        msg.data.cgQ001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//        msg.data.cgQ001M1s1 = searchdataFormM1.option('formData');
//        msg.data.tpCgorderst = searchdataFormM2.option('formData');
        //开始时间
//        let startTime = msg.data.cgQ001M1s1.startTime;
//        msg.data.cgQ001M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        // 结束时间
//        let endTime = msg.data.cgQ001M1s1.endTime;
//        msg.data.cgQ001M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
//        msg.data.cgQ001M1s1 = [searchdataFormM1.option('formData')];
        msg.data.tpCgorderst = searchdataFormM2.option('formData');
        console.log(JSON.stringify(msg))
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/M2S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
            	cake.Ui.LoadPanel.close();
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
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
    function M1S11_addfun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cComname',
                    label: {
                        text: '请购项目'
                    },
//                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGORDERMT_C_COMNAME,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
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
                	dataField: 'cSw01',
                	label: {
                		text: '所属项目部门'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    
                ]
                },
                {
                    dataField: 'cOrdernum',
                    label: {
                        text: '请购单号'
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
                    dataField: 'cDeptapply',
                    label: {
                        text: '请购部门'
                    },
//                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGORDERMT_C_DEPTAPPLY,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
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
                        text: '请购人'
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
                            max: 60,
                            min: 0,
                            message: '长度超限，最长为60！'
                        },
                    ]
                },
                {
                    dataField: 'cTimeapply',
                    label: {
                        text: '请购日期'
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
//                {
//                    dataField: 'cTimetake',
//                    label: {
//                        text: '收单日期'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
//                },
//                {
//                    dataField: 'cState',
//                    label: {
//                        text: '完成状态'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGORDERMT_C_STATE,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cAudittype',
//                    label: {
//                        text: '审核状态'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGORDERMT_C_AUDITTYPE,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                    ]
//                },
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
//                {
//                    dataField: 'cMitman',
//                    label: {
//                        text: '提交人'
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
//                {
//                    dataField: 'cMittype',
//                    label: {
//                        text: '提交状态'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGORDERMT_C_MITTYPE,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [
//                    	{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                    	{
//                        type: 'stringLength',
//                        max: 1,
//                        min: 0,
//                        message: '长度超限，最长为1！'
//                    }, ]
//              
//                },
//                {
////                    dataField: 'cAudittime',
////                    label: {
////                        text: '审核时间'
////                    },
////                    editorType: 'dxDateBox',
////                    editorOptions: {
////                        displayFormat: 'yyyy-MM-dd',
////                        type: 'datetime',
////                    },
////                    validationRules: []
//                },
//                {
//                    dataField: 'cId',
//                    label: {
//                        text: '请购单主表主键'
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
//                {
//                    dataField: 'cMittime',
//                    label: {
//                        text: '提交时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                }
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
                        max: 200,
                        min: 0,
                        message: '长度超限，最长为200！'
                    }, ]
                },
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
                msg.data.cgQ001M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加       
                cake.Ui.LoadPanel.show();//打开等待框
                addIns2.show();
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/M1S11A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                    	addIns2.hide();
                        let select = data.msg
                        if (data.errcode == 0) {
                        	cake.Ui.LoadPanel.close();//关闭等待框
                        	DevExpress.ui.notify('数据保存成功', 'success', 3000);
                        	addIns.hide()
                            M1S11_serDel();
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
                            cake.Ui.LoadPanel.close();//关闭等待框
                        }
                    },
                    error: function() {
                    	addIns2.hide();
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                        cake.Ui.LoadPanel.close();//关闭等待框
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
                dataField: 'cComname',
                label: {
                    text: '请购项目'
                },
//                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: TP_CGORDERMT_C_COMNAME,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
                    showClearButton: true,
                },
                validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
//                    {
//                        type: 'stringLength',
//                        max: 60,
//                        min: 0,
//                        message: '长度超限，最长为60！'
//                    },
                ]
            },
            {
            	dataField: 'cSw01',
            	label: {
            		text: '所属项目部门'
            	},
            	editorOptions: {
            		showClearButton: true,
            	},
            	validationRules: [
            		{
                        type: 'required',
                        message: '必填！'
                    },
//                    {
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为20！'
//                    },
            	]
            },
            {
                dataField: 'cOrdernum',
                label: {
                    text: '请购单号'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
//                    {
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为20！'
//                    },
                ]
            },
            {
                dataField: 'cDeptapply',
                label: {
                    text: '请购部门'
                },
//                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: TP_CGORDERMT_C_DEPTAPPLY,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
                    showClearButton: true,
                },
                validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
//                    {
//                        type: 'stringLength',
//                        max: 60,
//                        min: 0,
//                        message: '长度超限，最长为60！'
//                    },
                ]
            },
            {
                dataField: 'cManapply',
                label: {
                    text: '请购人'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
//                    {
//                        type: 'stringLength',
//                        max: 30,
//                        min: 0,
//                        message: '长度超限，最长为30！'
//                    },
                ]
            },
            {
                dataField: 'cTimeapply',
                label: {
                    text: '请购日期'
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
//            {
//                dataField: 'cTimetake',
//                label: {
//                    text: '收单日期'
//                },
//                editorType: 'dxDateBox',
//                editorOptions: {
//                    displayFormat: 'yyyy-MM-dd',
//                    type: 'datetime',
//                },
//                validationRules: [{
//                    type: 'required',
//                    message: '必填！'
//                }, ]
//            },
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
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                },
//                validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    },
//                    {
//                        type: 'stringLength',
//                        max: 1,
//                        min: 0,
//                        message: '长度超限，最长为1！'
//                    },
//                ]
//            },
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
//                },
//                validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    },
//                    {
//                        type: 'stringLength',
//                        max: 1,
//                        min: 0,
//                        message: '长度超限，最长为1！'
//                    },
//                ]
//            },
//            {
//                dataField: 'cAuditman',
//                label: {
//                    text: '审核人'
//                },
//                editorOptions: {
//                    showClearButton: true,
//                },
//                validationRules: [{
//                    type: 'stringLength',
//                    max: 20,
//                    min: 0,
//                    message: '长度超限，最长为20！'
//                }, ]
//            },
//            {
//                dataField: 'cAudittime',
//                label: {
//                    text: '审核时间'
//                },
//                editorType: 'dxDateBox',
//                editorOptions: {
//                    displayFormat: 'yyyy-MM-dd',
//                    type: 'datetime',
//                },
//                validationRules: []
//            },
//            {
//                dataField: 'cMittype',
//                label: {
//                    text: '提交状态'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: TP_CGORDERMT_C_MITTYPE,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                },
//                validationRules: [
//                	{
//                        type: 'required',
//                        message: '必填！'
//                    },
//                	{
//                    type: 'stringLength',
//                    max: 1,
//                    min: 0,
//                    message: '长度超限，最长为1！'
//                }, ]
//            },
//            {
//                dataField: 'cMitman',
//                label: {
//                    text: '提交人'
//                },
//                editorOptions: {
//                    showClearButton: true,
//                },
//                validationRules: [{
//                    type: 'stringLength',
//                    max: 20,
//                    min: 0,
//                    message: '长度超限，最长为20！'
//                }, ]
//            },
//            {
//                dataField: 'cMittime',
//                label: {
//                    text: '提交时间'
//                },
//                editorType: 'dxDateBox',
//                editorOptions: {
//                    displayFormat: 'yyyy-MM-dd',
//                    type: 'datetime',
//                },
//                validationRules: []
//            },
            
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
                    max: 200,
                    min: 0,
                    message: '长度超限，最长为200！'
                }, ]
            },
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
                msg.data.cgQ001M1s1 = [M1S11addIns.option('formData')];
                msg.data.m1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/M1S11U'),
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
    function M1S13_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.cgQ001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/M1S13MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                M1S11_serDel();
                tabledataS2.splice(0, tabledataS2.length);
                $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                DevExpress.ui.notify('数据保存成功', 'success', 3000);

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
    function M1S13_Msgfun2() {
    	msg = {
    			ver: '53cc62f6122a436083ec083eed1dc03d',
    			session: '42f5c0d7178148938f4fda29460b815a',
    			tag: {},
    			data: {}
    	};
    	msg.data.cgQ001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
    	$.ajax({
    		url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/M1S13MSG2'),
    		dataType: 'json', //返回格式为json      
    		async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
    		data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
    		type: 'post', //请求方式 get 或者post ,       
    		contentType: 'application/json',
    		success: function(data) {
    			M1S11_serDel();
    			tabledataS2.splice(0, tabledataS2.length);
    			$('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
    			DevExpress.ui.notify('数据保存成功', 'success', 3000);
    			
    		},
    		error: function() {
    			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
    			// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
    			//e.cancel=true;       
    		}
    	})
    }


    $('#dataGridS1').dxDataGrid({
        onRowClick: function(e) {
            S1S21_SSRT()
        }

    })

    function S1S21_SSRT() {
    	console.log(1)
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {
 
            }
        };
         
        msg.data.cgQ001S1s2= $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        
        msg.data.formData = searchdataFormM1.option('formData');
      /*  //开始时间
        let startTime = searchdataFormM1.getEditor('startTime').option('value');
        startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 8, 0, 0, 0);
        // 结束时间
        let endTime = searchdataFormM1.getEditor('endTime').option('value');
        endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 31, 59, 59, 999);
         k.push(startTime)
        k.push(endTime)
        msg.data =k
        cake.Ui.LoadPanel.show()
        */
        //开始时间
        let startTime = msg.data.formData.startTime;
        msg.data.formData.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        // 结束时间
        let endTime = msg.data.formData.endTime;
        msg.data.formData.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
//        console.log(msg.data)
        $.ajax({
            //url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21Q'),
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/s1s21q'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //a下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {
                cake.Ui.LoadPanel.close();
                if (data.data == null) {
                	tabledataS2.splice(0, tabledataS2.length);
                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                    return
                }
                let select;
                select = data.data
//               console.log(data)
//                console.log(select)
              
                tabledataS2.splice(0, tabledataS2.length);
                select.forEach(item => tabledataS2.push(item));
                $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                $('#dataGridS2').dxDataGrid('instance').deselectAll()
                $('#dataGridS2').dxDataGrid('instance').refresh()
            },
            error: function() {
                cake.Ui.LoadPanel.close();
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
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
                	dataField: 'cNo',
                	label: {
                		text: '存档号'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
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
                        dataSource: shifoujiju,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
                        showClearButton: true,
                    },
//                    validationRules: [
//                    {
//                            type: 'required',
//                            message: '必填！'
//                        }, ]
                },
                {
                    dataField: 'cGoodsname',
                    label: {
                        text: '货物名称'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                    {
                            type: 'required',
                            message: '必填！'
                        }, ]
                },
                {
                    dataField: 'cSpec',
                    label: {
                        text: '规格型号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 80,
//                            min: 0,
//                            message: '长度超限，最长为80！'
//                        },
//                    ]
                },

                {
                    dataField: 'cNum',
                    label: {
                        text: '请购数量'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                    {
                            type: 'required',
                            message: '必填！'
                        },
//                    {
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为20！'
//                    }, 
                    ]
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
                            type: 'required',
                            message: '必填！'
                        },
                    ]
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
                    },
                },
                {
                	dataField: 'cSw02',
                	label: {
                		text: '用途说明'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                }, 
                {
                    dataField: 'cSw03',
                    label: {
                        text: '请购日期'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },]
                },               
                
//                {
//                    dataField: 'cPhone',
//                    label: {
//                        text: '采购员联系方式'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                    ]
//                },
                {
                	dataField: 'cSw05',
                	label: {
                		text: '请购项目'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },    
                {
                	dataField: 'cSw06',
                	label: {
                		text: '请购部门'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },    
                {
                	dataField: 'cSw07',
                	label: {
                		text: '请购人'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },    
                 {
                    dataField: 'cTypename',
                    label: {
                        text: '特批类型'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },    
                {
                	dataField: 'cSw08',
                	label: {
                		text: '类别明细'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },    
                {
                	dataField: 'cSw09',
                	label: {
                		text: '建设/生产'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },    
                 {
                    dataField: 'cRemark',
                    label: {
                        text: '备注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },               
//                {
//                    dataField: 'cMtid',
//                    label: {
//                        text: '请购单编码',
//                        width: 1,
//                       alignment: 'center',
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                        visible: true,
//                        readOnly:true,
//                    },
//                },
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
                let s1s2 = S1S21addIns.option('formData').cSw03;
                msg.data.cgQ001S1s2 = [S1S21addIns.option('formData')];
                console.log(s1s2)
                if(s1s2 != null){
                	msg.data.cgQ001S1s2[0].cSw03 = s1s2.getFullYear() +'-'+ (s1s2.getMonth()+1) +'-'+ s1s2.getDate();               	
                }
                msg.data.tpCgordermt =$('#dataGridS1').dxDataGrid('instance').getSelectedRowKeys();
                console.log(msg)
                //change等于1为添加         
                addIns2.show();
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                    	addIns2.hide();
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
                    	addIns2.hide();
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
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
                dataField: 'cMustneed',
                label: {
                    text: '采购类型'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    dataSource: shifoujiju,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                },
                validationRules: [
                ]
            },
            {
                dataField: 'cState',
                label: {
                    text: '采购状态'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: caigouzhuangtai,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                },
            },
            {
                dataField: 'cGoodsname',
                label: {
                    text: '货物名称'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: [
                {
                        type: 'required',
                        message: '必填！'
                    },
               ]
            },
            {
                dataField: 'cSpec',
                label: {
                    text: '规格型号'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                ]
            },
            {
                dataField: 'cNum',
                label: {
                    text: '请购数量'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: [
                {
                        type: 'required',
                        message: '必填！'
                    },
                ]
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
                        type: 'required',
                        message: '必填！'
                    },
                   ]
            },
            {
                dataField: 'cArrtime',
                label: {
                    text: '要求到货时间'
                },
                editorType: 'dxDateBox',
                editorOptions: {
                    displayFormat: 'yyyy-MM-dd',
                    type: 'datetime',
                },
                validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },]
            },               
            {
                dataField: 'cManor',
                label: {
                    text: '采购员'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    dataSource: caigouyuan,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                },
            },
//            {
//                dataField: 'cPhone',
//                label: {
//                    text: '采购员联系方式'
//                },
//                editorOptions: {
//                    showClearButton: true,
//                },
//                validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    },
//                   ]
//            },
            {
                dataField: 'cTypename',
                label: {
                    text: '特批类型'
                },
                editorOptions: {
                    showClearButton: true,
                },
            },
            {
            	dataField: 'cSw08',
            	label: {
            		text: '类别明细'
            	},
            	editorOptions: {
            		showClearButton: true,
            	},
            },    
            {
            	dataField: 'cSw09',
            	label: {
            		text: '建设/生产'
            	},
            	editorOptions: {
            		showClearButton: true,
            	},
            },    
            {
                dataField: 'cConnum',
                label: {
                    text: '合同号'
                },
                editorOptions: {
                    showClearButton: true,
                },
            },
             {
                dataField: 'cRemark',
                label: {
                    text: '备注'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: []
            },               
            /*{
                dataField: 'cId',
                label: {
                    text: '物资单号'
                },
                editorOptions: {
                    showClearButton: true,
                    visible: true,
                    readOnly:true,
                },
                validationRules: [
                ]
            },*/
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
                msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                msg.data.cgQ001S1s2[0].cSw10 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData()[0].cConnum;
                console.log(321)
                console.log(msg.data.cgQ001S1s2)
                console.log(123)
                console.log(msg.data)
                
                var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                    $.ajax({
					                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21U'),
					                    dataType: 'json', //返回格式为json           
					                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
					                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					                    type: 'post', //请求方式 get 或者post ,         
					                    contentType: 'application/json',
					                    success: function(data) {
					                        let select = data.msg
					                        if (data.errcode == 0) {
					                            S1S21_SSRT();
					                            DevExpress.ui.notify(select, 'success', 3000);
					                            addIns.hide()
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
        })
        $('#addcansel').dxButton({
            text: '取消',
            icon: 'remove',
            onClick: function() {
                addIns.hide()
            }
        })
    }
    
//采购员修改，只是为了方便操作
    function S1S21_UpdatefunCGY() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
            {
                dataField: 'cManor',
                label: {
                    text: '采购员'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    dataSource: caigouyuan,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
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
                    data: {},
                };
                msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                msg.data.tpCgorderst = $('#addForm').dxForm('instance').option('formData');
                var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                    //../../tdhc_cgsys/CG_Q001/S1S21U
                                    $.ajax({
					                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/S1S21UCGY'),
					                    dataType: 'json', //返回格式为json           
					                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
					                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					                    type: 'post', //请求方式 get 或者post ,         
					                    contentType: 'application/json',
					                    success: function(data) {
					                        let select = data.msg
					                        if (data.errcode == 0) {
					                            S1S21_SSRT();
					                            DevExpress.ui.notify(select, 'success', 3000);
					                            
					                        } else {
					                            DevExpress.ui.notify(select, 'warning', 3000);
					                        }
					                        addIns.hide();
					                    },
					                    
					                    error: function() {
					                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
					                    }
					                })
					              
                       
                            }
                            cake.Ui.LoadPanel.close()
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
    //取消采购
    function S1S21Ubuy_Updatefun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [

             {
                dataField: 'cRemark',
                label: {
                    text: '取消原因'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: []
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
                    data: {},
                };
                msg.data.tpCgorderst =  $('#addForm').dxForm('instance').option('formData');
                msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                console.log(JSON.stringify(msg));
//                console.log(321)
//                console.log(msg.data.cgQ001S1s2)
//                console.log(123)
//                console.log(msg.data)
                
                var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                    $.ajax({
					                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/S1S21Ubuy'),
					                    dataType: 'json', //返回格式为json           
					                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
					                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					                    type: 'post', //请求方式 get 或者post ,         
					                    contentType: 'application/json',
					                    success: function(data) {
					                        let select = data.msg
					                        if (data.errcode == 0) {
//					                            S1S21_SSRT();
					                        	M2S11_serDel();
					                            DevExpress.ui.notify(select, 'success', 3000);
					                            addIns.hide()
					                            
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
        })
        $('#addcansel').dxButton({
            text: '取消',
            icon: 'remove',
            onClick: function() {
                addIns.hide();
//                S1S21_SSRT();
                M2S11_serDel();
            }
        })
    }
    
    //撤销取消采购
    function S1S21Dquxiaobuy_Updatefun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [

             {
                dataField: 'qXcause',
                label: {
                    text: '撤回原因'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: []
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
                    data: {},
                };
                msg.data.cgQ001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
//                console.log(321)
//                console.log(msg.data.cgQ001S1s2)
//                console.log(123)
//                console.log(msg.data)
                var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                    $.ajax({
					                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/againbuy'),
					                    dataType: 'json', //返回格式为json           
					                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
					                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
					                    type: 'post', //请求方式 get 或者post ,         
					                    contentType: 'application/json',
					                    success: function(data) {
					                        let select = data.msg
					                        if (data.errcode == 0) {
//					                            S1S21_SSRT();
					                        	M2S11_serDel();
					                            DevExpress.ui.notify(select, 'success', 3000);
					                            addIns.hide()
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
        })
        $('#addcansel').dxButton({
            text: '取消',
            icon: 'remove',
            onClick: function() {
                addIns.hide();
//                S1S21_SSRT();
                M2S11_serDel();
            }
        })
    }
    //拆分功能
    function S1S21_UXFfun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
            {
                dataField: 'cNum',
                label: {
                    text: '请购数量'
                },
                editorOptions: {
                    showClearButton: true,
                },
                validationRules: [
                {
                        type: 'required',
                        message: '必填！'
                    },
                ]
            },
            {
                dataField: 'cUnit',
                label: {
                    text: '单位'
                },
                editorOptions: {
                    showClearButton: true,
                    readOnly:true,
                },
                validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                   ]
            },
            {
                dataField: 'cId',
                label: {
                    text: '物资单号'
                },
                editorOptions: {
                    showClearButton: true,
                    visible: true,
                    readOnly:true,
                },
                validationRules: [
                ]
            },
        ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
            	let grid = $('#dataGridS2').dxDataGrid('instance');
                let rowsData = grid.getSelectedRowsData()[0]
                let rowsData2 = grid.getSelectedRowsData();
                let selectedRowKeys = grid.getSelectedRowKeys()
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                msg.data.stList = rowsData2;
                msg.data.cfList = [S1S21addIns.option('formData')];
                console.log(msg)
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/S1S21UCF'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            S1S21_SSRT();
                            DevExpress.ui.notify(select, 'success', 3000);
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
    //日期加上天数得到新的日期
		function getNewDay( dateTemp, days) {
		    var dateTemp = dateTemp.split("-");
		    var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式  
		    var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
		    var rDate = new Date(millSeconds);
		    var year = rDate.getFullYear();
		    var month = rDate.getMonth() + 1;
		    if (month < 10) month = "0" + month;
		    var date = rDate.getDate();
		    if (date < 10) date = "0" + date;
		    return (year + "-" + month + "-" + date);
		}
	 //请购单导出
    addEditPopup = $("#add-edit-popup-container").dxPopup({
        deferRendering: false,
        height: 450,
        width: '100%',

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
            fileName: "请购单导出",
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
                dataField: 'cNo',
                caption: '存档号',
            },
            {
                dataField: 'cTimeapply',
                caption: '请购日期',
                dataType: "date",
                format: "yyyy-MM-dd",
            },
            {
                dataField: 'cOrdernum',
                caption: '请购单号',
            },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
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
                dataField: 'cNum',
                caption: '请购数量',
            },
            {
                dataField: 'cManapply',
                caption: '请购人',
            },
            {
                dataField: 'cSw02',
                caption: '用途说明',
            },
             {
                dataField: 'cDeptapply',
                caption: '请购部门',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cDeptapply);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cArrtime',
                caption: '需求时间',
                dataType: "date",
                format: "yyyy-MM-dd",
            },
             {
                dataField: 'cTypename',
                caption: '类别明细',
            },
//             {
//                dataField: 'cDeptor',
//                caption: '采购部门',
////                calculateDisplayValue: function(rowData) {
////                  let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cDeptor);
////                  if (matchedItem == null || matchedItem == undefined) {
////                      return "";
////                  } else {
////                      return matchedItem.cSubitemdes;
////                  }
////              }
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
                dataField: 'cCludecom',
                caption: '合同签订公司',
            },
            {
                dataField: 'cCludetime',
                caption: '签订时间',
                allowEditing: false,
                dataType: "date",
                format: "yyyy-MM-dd",
            },
            {
                dataField: 'cSupplier',
                caption: '供应商',
                allowEditing: false,
            },
            {
                dataField: 'cConnum',
                caption: '合同号',
                allowEditing: false,
            },
            {
            	dataField: 'cSw08',
            	caption: '报关货物名称',
            	allowEditing: false,
            },
            {
            	dataField: 'bSpec',
            	caption: '报关规格',
            	allowEditing: false,
            },
            {
            	dataField: 'bNum',
            	caption: '报关数量',
            	allowEditing: false,
            },
            {
            	dataField: 'bUnit',
            	caption: '报关单位',
            	allowEditing: false,
            },
            {
            	dataField: 'dNum',
            	caption: '订货数量',
            	allowEditing: false,
            },
            {
                dataField: 'cDr',
                caption: '预计到货时间',
                allowEditing: false,
                dataType: "date",
                format: "yyyy-MM-dd",
            },
            {
            	dataField: 'cGettime',
            	caption: '预计到货时间',
            	allowEditing: false,
            	dataType: "date",
            	format: "yyyy-MM-dd",
            },
            {
                dataField: 'cSw12',
                caption: '提前/延迟',
                allowEditing: false,
            },
        ]
    })

})