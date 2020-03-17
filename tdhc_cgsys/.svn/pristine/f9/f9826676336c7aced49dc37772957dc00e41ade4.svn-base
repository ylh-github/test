///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let TP_CGRECEIVEBOOK_C_BEFOREARREX = []; //用于数据集合,对应字段含义为
let S1S21addIns;
let M1S11addIns;
let S2S31addIns;
let C0011addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataM2;
let searchdataFormM1; //每个查询条件form的实例
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
let yanshoufangshi = []
let yunshufangshi = []
let wanchengzhuangtai = []
let shifoudaoqi = []
let caigouyuan = []
let yujidaohuo = []
let fukuanfangshi = []
let shifouyanshou = []
let cgy = []
let shdd = []
let TP_CGORDERMT_USER = []
let yujidaohuoshuoming = []
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
                lg: 4,
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
                        text: '合同号'
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
                    dataField: 'cOrid',
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

        searchdataFormM2 = $('#searchFormM2').dxForm({
            formData: searchdataM2,
            ////当参数小于三个时为五个,大于等于三时统一乘二
            ////王晶晶给改为自适应编码
            colCountByScreen: {
                lg: 4,
                md: 4,
                sm: 2,
                xs: 1,
            },
            //所有查询条件为一组的代码段
            itemType: 'group',
            items: [
                {
                    dataField: 'cShipnum',
                    label: {
                        text: '船号'
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
                },
                {
                    dataField: 'cFramenum',
                    label: {
                        text: '框架号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                },
                {
                    dataField: 'cContainer',
                    label: {
                        text: '集装箱号'
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
                    dataField: "cId",
                    caption: "合同子表主键"
                },
                {
                    dataField: "cMtid",
                    caption: "合同主表主键"
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
                    dataField: "cPrice",
                    caption: "单价"
                },
                {
                    dataField: "cConline",
                    caption: "合同行号"
                },
                {
                    dataField: "cGoodsnum",
                    caption: "订货数量"
                },
                {
                    dataField: "cGoodscase",
                    caption: "订货情况"
                },
                {
                    dataField: "cSumprice",
                    caption: "含税总价:单价*订货数量"
                },
                {
                    dataField: "cBeforearrtime",
                    caption: "预计到货时间"
                },
                {
                    dataField: "cArrgoodsex",
                    caption: "预计到货说明"
                },
                {
                    dataField: "cArrgoodstime",
                    caption: "到货时间"
                },
                {
                    dataField: "cGroudtotalnum",
                    caption: "累计到货量"
                },
                {
                    dataField: "cResiduenum",
                    caption: "剩余数量:订货数量-到货数量"
                },
                {
                    dataField: "cArrallyorn",
                    caption: "是/否到齐"
                },
                {
                    dataField: "cRemark",
                    caption: "备注"
                },
                {
                    dataField: "cState",
                    caption: "完成状态"
                },
                {
                    dataField: "cCheckyorn",
                    caption: "是/否验收"
                },
                {
                    dataField: "cQuadealline",
                    caption: "质保期限"
                },
                {
                    dataField: "cOrid",
                    caption: "请购单号"
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
                    dataField: "cSw01",
                    caption: "天数"
                },
                {
                    dataField: "cSw02",
                    caption: "物资单号"
                },
                {
                    dataField: "cSw03",
                    caption: "扩展字段3"
                },
                {
                    dataField: "cSw04",
                    caption: "扩展字段4"
                },
                {
                    dataField: "cSw05",
                    caption: "外贸号"
                },
                {
                    dataField: "cSw06",
                    caption: "扩展字段6"
                },
                {
                    dataField: "cSw07",
                    caption: "扩展字段7"
                },
                {
                    dataField: "cSw08",
                    caption: "扩展字段8"
                },
                {
                    dataField: "cSw09",
                    caption: "扩展字段9"
                },
                {
                    dataField: "cSw10",
                    caption: "扩展字段10"
                },
                {
                    dataField: "cConnum",
                    caption: "合同号"
                },
                {
                    dataField: "",
                    caption: ""
                }
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
                mode: 'single'
            },
            columns: [{
                    dataField: "cId",
                    caption: "出船记录编号"
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
                    dataField: "cConnum",
                    caption: "合同号"
                },
                {
                    dataField: "cWmnum",
                    caption: "外贸号"
                },
                {
                    dataField: "cConmtid",
                    caption: "合同编号"
                },
                {
                    dataField: "cConstid",
                    caption: "合同物资编号"
                },
                {
                    dataField: "cOrdernum",
                    caption: "请购单号"
                },
                {
                    dataField: "cShipnum",
                    caption: "船号"
                },
                {
                    dataField: "cShiptime",
                    caption: "出船时间"
                },
                {
                    dataField: "cGoodsnum",
                    caption: "订货数量"
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
                    dataField: "cSw01",
                    caption: "扩展字段1"
                },
                {
                    dataField: "cSw02",
                    caption: "扩展字段2"
                },
                {
                    dataField: "cSw03",
                    caption: "扩展字段3"
                },
                {
                    dataField: "cSw04",
                    caption: "扩展字段4"
                },
                {
                    dataField: "cSw05",
                    caption: "扩展字段5"
                },
                {
                    dataField: "cSw06",
                    caption: "扩展字段6"
                },
                {
                    dataField: "cSw07",
                    caption: "扩展字段7"
                },
                {
                    dataField: "cSw08",
                    caption: "扩展字段8"
                },
                {
                    dataField: "cSw09",
                    caption: "扩展字段9"
                },
                {
                    dataField: "cSw10",
                    caption: "扩展字段10"
                },
                {
                    dataField: "cSw11",
                    caption: "扩展字段11"
                },
                {
                    dataField: "cSw12",
                    caption: "扩展字段12"
                },
                {
                    dataField: "cSw13",
                    caption: "扩展字段13"
                },
                {
                    dataField: "cSw14",
                    caption: "扩展字段14"
                },
                {
                    dataField: "cSw15",
                    caption: "扩展字段15"
                },
                {
                    dataField: "cSw16",
                    caption: "扩展字段16"
                },
                {
                    dataField: "cSw17",
                    caption: "扩展字段17"
                },
                {
                    dataField: "cSw18",
                    caption: "扩展字段18"
                },
                {
                    dataField: "cSw19",
                    caption: "扩展字段19"
                },
                {
                    dataField: "cSw20",
                    caption: "扩展字段20"
                },
                {
                    dataField: "cFramenum",
                    caption: "框架号"
                },
                {
                    dataField: "cContainer",
                    caption: "集装箱号"
                },
                {
                    dataField: "cDr",
                    caption: "删除标识"
                },
                {
                    dataField: "",
                    caption: ""
                }
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
            }, ]
        })
        $('#operateFormM2S2').dxForm({
            width: '100%',
            colCount: 16,
            items: [{
                    name: 'S2S31Q',
                    itemType: 'button',
                    buttonOptions: {
                        icon: 'search',
                        text: '查询',
                        onClick: function() {

                        }
                    }
                },
                {
                    name: 'S2S31A',
                    itemType: 'button',
                    buttonOptions: {
                        icon: 'plus',
                        text: '新增',
                        onClick: function() {
                           
                            $('#addmotai').show()
                            addIns = $('#addmotai').dxPopup({
                                width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                                height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                            }).dxPopup('instance')
                            addIns.option('title', 'CG_H004')
                            addIns.show();
                            S2S31_addfun();
                            S2S31addIns.option('formData', new Object()) //cSupplier

                            // S2S31addIns.getEditor('cConnum').option('value', rowsData.cConnum)
                            // S2S31addIns.getEditor('cSupplier').option('value', rowsData1.cSupplier)
                           
                        }
                    }
                },
                {
                    name: 'S2S31U',
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
                                   
                                DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
                                return;
                            }
                            if (selectedRowKeys.length > 1) {
                                // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                                DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                                return;
                            }
                            addIns = $('#addmotai').dxPopup({
                                //模态框增加name    
                                width: 1000,
                                height: 450
                            }).dxPopup('instance')
                            addIns.option('title', 'CG_H004');
                            addIns.show();
                            // 调用模态框函数    
                            // updatafun()    
                            S2S31_Updatefun()
                            S2S31addIns.option('formData', rowsData)
                        }
                    }
                },
                {
                    name: 'S2S31D',
                    itemType: 'button',
                    buttonOptions: {
                        icon: 'remove',
                        text: '删除',
                        onClick: function() {
                            let grid1 = $('#dataGridS2').dxDataGrid('instance');
                            let selectedRowKeys1 = grid1.getSelectedRowKeys()
                            let rowsData1 = grid1.getSelectedRowsData()
                            //脚本执行  
                            if (selectedRowKeys1.length < 1) {
                                DevExpress.ui.notify('请选择一条要删除的合同。', 'info', 3000);
                                return;
                            }
                            msg = {
                                ver: '53cc62f6122a436083ec083eed1dc03d',
                                session: '42f5c0d7178148938f4fda29460b815a',
                                tag: {},
                                data: {}
                            };
                            //前后端统一叫'tscLtrawbin' 
                            let grid = $('#dataGridS2').dxDataGrid('instance');
                            let rowsData = grid.getSelectedRowsData()[0];
                            let selectedRowKeys = grid.getSelectedRowKeys()

                            //脚本执行  
                            if (selectedRowKeys.length < 1) {
                                DevExpress.ui.notify('请选择一条要删除的物资。', 'info', 3000);
                                return;
                            }
                            msg.data.tpCgcontractstList = [selectedRowKeys[0]];
                            msg.data.tpCgreceivebookList = [selectedRowKeys1[0]];
                            // //console.log.log(msg)
                            // msg.data.cgH004S2s3 = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                            //console.log.log(msg)
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H004/S2S31D'),
                                dataType: 'json', //返回格式为json   
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                type: 'post', //请求方式 get 或者post , 
                                contentType: 'application/json',
                                success: function(data) {
                                    //console.log.log(data)
                                    let select = data.msg
                                    if (data.errcode == 60) {
                                        DevExpress.ui.notify('删除成功', 'success', 3000);

                                        S2S31_SSRT();
                                        S1S21_SSRT();
                                    } else {
                                        DevExpress.ui.notify('删除成功', 'success', 3000);
                                        S2S31_SSRT();
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
            //ajax传参用           
            msg = {
                ver: '53cc62f6122a436083ec083eed1dc03d',
                session: '42f5c0d7178148938f4fda29460b815a',
                tag: {},
                data: {}
            };

            ////////////////////////////////////////////////////////////////////////////////    
            //寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
            ////////////////////////////////////////////////////////////////////////////////    
        }
        //////////////////////////////////////////////////////////////////////////////////////////////////
        //功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////////////////
        function get_user() {
            let matchedItem1 = TP_CGORDERMT_USER.find(item => item.userName != "");
            let matchedItem = cgy.find(item => item.cSubitemdes == TP_CGORDERMT_USER[0].userName);
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
                    cgH004M1s1: {
                        startTime: new Date(),
                        endTime: new Date(),
                    }
                }
            };

            msg.data.cgH004M1s1 = searchdataFormM1.option('formData');
            //开始时间
            let startTime = msg.data.cgH004M1s1.startTime;
            msg.data.cgH004M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

            // 结束时间
            let endTime = msg.data.cgH004M1s1.endTime;
            msg.data.cgH004M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);

            // let searchtiao = searchdataFormM1.option('formData')

            msg.data.cgH004M1s1 = [searchdataFormM1.option('formData')];

            // //console.log.log(msg)
            // let searchtiao = searchdataFormM1.option('formData')
            // msg.data.cgH004M1s1 = [searchdataFormM1.option('formData')];
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H004/M1S11Q'),
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
                    select = data.data.cgH004M1s1
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


        $('#dataGridS1').dxDataGrid({
            onRowClick: function(e) {
               
            }

        })

   
        
        function S2S31_addfun() {
            S2S31addIns = $('#addForm').dxForm({
                formData: adddata,
                validationGroup: validationGroupName,
                colCount: 3,
                items: [
                    {
                        dataField: 'cShipnum',
                        label: {
                            text: '船号'
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
                        dataField: 'cShiptime',
                        label: {
                            text: '出船时间'
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
                        dataField: 'cFramenum',
                        label: {
                            text: '框架号'
                        },
                        editorOptions: {
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'cContainer',
                        label: {
                            text: '集装箱号'
                        },
                        editorOptions: {
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
            // msg.data.cgH004S2s3 = [S2S31addIns.option('formData')];
            let grid = $('#dataGridS2').dxDataGrid('instance');
            let rowsData = grid.getSelectedRowsData()[0];
            let selectedRowKeys = grid.getSelectedRowKeys()

            //脚本执行  
            // if (selectedRowKeys.length < 1) {
            //     DevExpress.ui.notify('请在子表中选择一条要添加的数据。', 'info', 3000);
            //     return;
            // }

            //let grid = $('#dataGridS2').dxDataGrid('instance');

            // msg.data.tpCgcontractstList = [selectedRowKeys[0]];
            msg.data.tpCgcontractstList = grid.getSelectedRowsData()
            msg.data.tpCgreceivebookList = [S2S31addIns.option('formData')];
            //console.log.log(msg)
            //change等于1为添加         
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H004/S2S31A'),
                dataType: 'json', //返回格式为json           
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                type: 'post', //请求方式 get 或者post ,         
                contentType: 'application/json',
                success: function(data) {
                    let select = data.msg
                    if (data.errcode == 60) {

                        S2S31_SSRT();
                        S1S21_SSRT();
                        DevExpress.ui.notify('数据保存成功', 'success', 3000);
                        addIns.hide()
                    } else {
                        DevExpress.ui.notify('数据保存成功', 'success', 3000);
                        S2S31_SSRT();
                        addIns.hide()
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

function S2S31_Updatefun() {
    S2S31addIns = $('#addForm').dxForm({
        formData: adddata,
        validationGroup: validationGroupName,
        colCount: 3,
        items:[{
                    dataField: "cId",
                    caption: "出船记录编号"
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
                    dataField: "cConnum",
                    caption: "合同号"
                },
                {
                    dataField: "cWmnum",
                    caption: "外贸号"
                },
                {
                    dataField: "cConmtid",
                    caption: "合同编号"
                },
                {
                    dataField: "cConstid",
                    caption: "合同物资编号"
                },
                {
                    dataField: "cOrdernum",
                    caption: "请购单号"
                },
                {
                    dataField: "cShipnum",
                    caption: "船号"
                },
                {
                    dataField: "cShiptime",
                    caption: "出船时间"
                },
                {
                    dataField: "cGoodsnum",
                    caption: "订货数量"
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
                    dataField: "cFramenum",
                    caption: "框架号"
                },
                {
                    dataField: "cContainer",
                    caption: "集装箱号"
                },
                {
                    dataField: "cDr",
                    caption: "删除标识"
                },
                {
                    dataField: "",
                    caption: ""
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
      
            msg.data.tpCgreceivebookList = [S2S31addIns.option('formData')];
            //console.log.log(msg)
            // msg.data.cgH004S2s3 = [S2S31addIns.option('formData')];
            //change等于1为添加         
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H004/S2S31U'),
                dataType: 'json', //返回格式为json           
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                type: 'post', //请求方式 get 或者post ,         
                contentType: 'application/json',
                success: function(data) {
                    let select = data.msg
                    if (data.errcode == 60) {

                        S2S31_SSRT();
                        S1S21_SSRT();

                        DevExpress.ui.notify('数据保存成功', 'success', 3000);
                        addIns.hide()
                    } else {
                        DevExpress.ui.notify('数据保存成功', 'success', 3000);
                        S2S31_SSRT();
                        addIns.hide()
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