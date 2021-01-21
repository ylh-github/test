///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let TP_CGUSER_C_SEX = []; //用于数据集合,对应字段含义为
let TP_CGUSER_C_POLISTATUS = []; //用于数据集合,对应字段含义为
let TP_CGUSER_C_COMNAME = []; //用于数据集合,对应字段含义为
let TP_CGUSER_C_EDUDEG = []; //用于数据集合,对应字段含义为
let TP_CGUSER_C_STATE = []; //用于数据集合,对应字段含义为
let TP_CGUSER_C_DEPTNAME = []; //用于数据集合,对应字段含义为
let C0041addIns;
let M1S11addIns;
let C0061addIns;
let C0031addIns;
let C0021addIns;
let C0051addIns;
let C0011addIns;
let tabledataS1 = []; //用于接收表格数据源
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
let haha = []
let hehe = []
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
            md: 4,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [{
                dataField: 'cLoginname',
                label: {
                    text: '登录名'
                },
                editorOptions: {
                    showClearButton: true,
                },
            },
            {
                dataField: 'cSex',
                label: {
                    text: '性别'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: TP_CGUSER_C_SEX,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cComname',
                label: {
                    text: '所属公司'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: TP_CGUSER_C_COMNAME,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cDeptname',
                label: {
                    text: '所属部门'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: TP_CGUSER_C_DEPTNAME,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cStation',
                label: {
                    text: '岗位'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
//            {
//                dataField: 'cDutyname',
//                label: {
//                    text: '职务'
//                },
//                editorOptions: {
//                    showClearButton: true,
//                }
//            },
//            {
//                dataField: 'cUsertype',
//                label: {
//                    text: '用户类型'
//                },
//                editorOptions: {
//                    showClearButton: true,
//                }
//            },
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
//                dataField: 'cRolecode',
//                label: {
//                    text: '角色编码'
//                },
//                editorOptions: {
//                    showClearButton: true,
//                }
//            },
//            {
//                dataField: 'cState',
//                label: {
//                    text: '启用状态'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: TP_CGUSER_C_STATE,
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
                dataField: 'cName',
                caption: '用户名称',
            },
            {
                dataField: 'cLoginname',
                caption: '登录名',
            },
            {
                dataField: 'cPassword',
                caption: '用户密码',
            },
            {
                dataField: 'cSex',
                caption: '性别',
                calculateDisplayValue: "cSw05"
                //  calculateDisplayValue: function (rowData) {

                // let matchedItem = dataSource.menuTypes.find(item => item.value == rowData.menuType);

                // if (!!matchedItem) {
                // return matchedItem.description;
                // }

                // return '';

                // }
            },
//            {
//                dataField: 'cNative',
//                caption: '籍贯',
//            },
//            {
//                dataField: 'cNation',
//                caption: '民族',
//            },
            {
                dataField: 'cPhone',
                caption: '电话',
            },
//            {
//                dataField: 'cIdencard',
//                caption: '身份证',
//            },
            {
                dataField: 'cEmail',
                caption: '邮箱',
            },
//            {
//                dataField: 'cEdudeg',
//                caption: '教育程度',
//                calculateDisplayValue: "cSw01",
//            },
            {
                dataField: 'cComname',
                caption: '所属公司',
                // calculateDisplayValue: "cSw03",
                 calculateDisplayValue: function (rowData) {
                    let matchedItem = hehe.find(item => item.cSubitemid == rowData.cComname);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cDeptname',
                caption: '所属部门',
                calculateDisplayValue: "cSw02",

            },
//            {
//                dataField: 'cDutyname',
//                caption: '职务',
//            },
            {
                dataField: 'cStation',
                caption: '岗位',
            },
//            {
//                dataField: 'cUsertype',
//                caption: '用户类型',
//            },
//            {
//                dataField: 'cPolistatus',
//                caption: '政治面貌',
//                calculateDisplayValue: "cSw04"
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
                caption: '修改日期',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
//            {
//                dataField: 'cSocsecnum',
//                caption: '社保号',
//            },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
//            {
//                dataField: 'cRolecode',
//                caption: '角色编码',
//            },
            {
                dataField: 'cState',
                caption: '启用状态',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = haha.find(item => item.cSubitemid == rowData.cState);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }

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
                    text: '查询', //zsq
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
                        addIns.option('title', 'CG_A004')
                        addIns.show();
                        M1S11_addfun();
                        M1S11addIns.option('formData', new Object())
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
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_A004');
                        addIns.show();
                        // 调用模态框函数    
                        // updatafun()    
                        M1S11_Updatefun()
                        M1S11addIns.option('formData', rowsData)
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
                        //前后端统一叫'tscLtrawbin' 

                        msg.data.cgA004M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        //console.log.log(msg)
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/M1S11D'),
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
                    "cItemid": "QYZT"
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
                    haha = result.data; */

                    result.data.forEach(item => {
                        haha.push(item);
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

        initLoad1()
        function initLoad1() {
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
                    hehe = result.data; */
                    result.data.forEach(item => {
                        hehe.push(item);
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
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/C0021Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                // //console.log.log(data)
                TP_CGUSER_C_SEX.splice(0, TP_CGUSER_C_SEX.length);
                data.data.cgA004C002.forEach(item => TP_CGUSER_C_SEX.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/C0011Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGUSER_C_STATE.splice(0, TP_CGUSER_C_STATE.length);
                data.data.cgA004C001.forEach(item => TP_CGUSER_C_STATE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/C0051Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGUSER_C_POLISTATUS.splice(0, TP_CGUSER_C_POLISTATUS.length);
                data.data.cgA004C005.forEach(item => TP_CGUSER_C_POLISTATUS.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/C0041Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGUSER_C_DEPTNAME.splice(0, TP_CGUSER_C_DEPTNAME.length);
                data.data.cgA004C004.forEach(item => TP_CGUSER_C_DEPTNAME.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/C0061Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGUSER_C_COMNAME.splice(0, TP_CGUSER_C_COMNAME.length);
                data.data.cgA004C006.forEach(item => TP_CGUSER_C_COMNAME.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/C0031Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGUSER_C_EDUDEG.splice(0, TP_CGUSER_C_EDUDEG.length);
                data.data.cgA004C003.forEach(item => TP_CGUSER_C_EDUDEG.push(item));
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
                cgA004M1s1: {
                    startTime: new Date(),
                    endTime: new Date(),
                    cLoginname: null,
                    cSex: null,
                    cComname: null,
                    cDeptname: null,
                    cStation: null,
                    cDutyname: null,
                    cUsertype: null,
                }
            }
        };
        msg.data.cgA004M1s1 = searchdataFormM1.option('formData');

        //开始时间
        let startTime = msg.data.cgA004M1s1.startTime;
        msg.data.cgA004M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

        // 结束时间
        let endTime = msg.data.cgA004M1s1.endTime;
        msg.data.cgA004M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);

        // let searchtiao = searchdataFormM1.option('formData')

        msg.data.cgA004M1s1 = [searchdataFormM1.option('formData')];

        //console.log.log(msg)


        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/M1S11Q'),
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
                select = data.data.cgA004M1s1
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

    function M1S11_addfun() {//添加模态框
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cName',
                    label: {
                        text: '用户名称'
                    },
                    editorOptions: {
                        showClearButton: true,
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
                    dataField: 'cLoginname',
                    label: {
                        text: '登录名'
                    },
                    editorOptions: {
                        showClearButton: true,
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
                    dataField: 'cPassword',
                    label: {
                        text: '用户密码'
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
                    dataField: 'cSex',
                    label: {
                        text: '性别'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_SEX,
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
//                    dataField: 'cNative',
//                    label: {
//                        text: '籍贯'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 200,
//                        min: 0,
//                        message: '长度超限，最长为200！'
//                    }, {
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
//                },
//                {
//                    dataField: 'cNation',
//                    label: {
//                        text: '民族'
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
                {
                    dataField: 'cPhone',
                    label: {
                        text: '电话'
                    },
                    editorOptions: {
                        showClearButton: true,
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
//                {
//                    dataField: 'cIdencard',
//                    label: {
//                        text: '身份证'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为20！'
//                    }, {
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
//                },
                {
                    dataField: 'cEmail',
                    label: {
                        text: '邮箱'
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
//                {
//                    dataField: 'cEdudeg',
//                    label: {
//                        text: '教育程度'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGUSER_C_EDUDEG,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 40,
//                        min: 0,
//                        message: '长度超限，最长为40！'
//                    }, {
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
//                },
                {
                    dataField: 'cComname',
                    label: {
                        text: '所属公司'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_COMNAME,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 50,
                        min: 0,
                        message: '长度超限，最长为50！'
                    }, {
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cDeptname',
                    label: {
                        text: '所属部门'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_DEPTNAME,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 50,
                        min: 0,
                        message: '长度超限，最长为50！'
                    }, {
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cStation',
                    label: {
                        text: '岗位'
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
//                {
//                    dataField: 'cDutyname',
//                    label: {
//                        text: '职务'
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
//                    dataField: 'cUsertype',
//                    label: {
//                        text: '用户类型'
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
//                    dataField: 'cPolistatus',
//                    label: {
//                        text: '政治面貌'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGUSER_C_POLISTATUS,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为20！'
//                    }, {
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
//                },
//                {
//                    dataField: 'cSocsecnum',
//                    label: {
//                        text: '社保号'
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
                {
                    dataField: 'cState',
                    label: {
                        text: '启用状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_STATE,
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
//                    dataField: 'cRolecode',
//                    label: {
//                        text: '角色编码'
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
                // {
                //     dataField: 'cId',
                //     label: {
                //         text: '用户主键'
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
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, ]
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({//添加点击确定向后台传值
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
                msg.data.cgA004M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/M1S11A'),
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
        $('#addcansel').dxButton({//取消关闭添加模态框
            text: '取消',
            icon: 'remove',
            onClick: function() {
                addIns.hide()
            }
        })
    }

    function M1S11_Updatefun() {
        M1S11addIns = $('#addForm').dxForm({//修改模态框
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cName',
                    label: {
                        text: '用户名称'
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
                    dataField: 'cLoginname',
                    label: {
                        text: '登录名'
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
                    dataField: 'cPassword',
                    label: {
                        text: '用户密码'
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
                    dataField: 'cSex',
                    label: {
                        text: '性别'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_SEX,
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
//                    dataField: 'cNative',
//                    label: {
//                        text: '籍贯'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 200,
//                        min: 0,
//                        message: '长度超限，最长为200！'
//                    }, ]
//                },
//                {
//                    dataField: 'cNation',
//                    label: {
//                        text: '民族'
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
                {
                    dataField: 'cPhone',
                    label: {
                        text: '电话'
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
//                {
//                    dataField: 'cIdencard',
//                    label: {
//                        text: '身份证'
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
                {
                    dataField: 'cEmail',
                    label: {
                        text: '邮箱'
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
//                {
//                    dataField: 'cEdudeg',
//                    label: {
//                        text: '教育程度'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGUSER_C_EDUDEG,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 40,
//                        min: 0,
//                        message: '长度超限，最长为40！'
//                    }, ]
//                },
                {
                    dataField: 'cComname',
                    label: {
                        text: '所属公司'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_COMNAME,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 50,
                        min: 0,
                        message: '长度超限，最长为50！'
                    }, ]
                },
                {
                    dataField: 'cDeptname',
                    label: {
                        text: '所属部门'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_DEPTNAME,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 50,
                        min: 0,
                        message: '长度超限，最长为50！'
                    }, ]
                },
                {
                    dataField: 'cStation',
                    label: {
                        text: '岗位'
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
//                {
//                    dataField: 'cDutyname',
//                    label: {
//                        text: '职务'
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
//                    dataField: 'cUsertype',
//                    label: {
//                        text: '用户类型'
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
//                    dataField: 'cPolistatus',
//                    label: {
//                        text: '政治面貌'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGUSER_C_POLISTATUS,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
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
//                    dataField: 'cSocsecnum',
//                    label: {
//                        text: '社保号'
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
                {
                    dataField: 'cState',
                    label: {
                        text: '启用状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGUSER_C_STATE,
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
//                    dataField: 'cRolecode',
//                    label: {
//                        text: '角色编码'
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
                // {
                //     dataField: 'cId',
                //     label: {
                //         text: '用户主键'
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
                        max: 20,
                        min: 0,
                        message: '长度超限，最长为20！'
                    }, ]
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({//点击确定 向后台传值
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
                msg.data.cgA004M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A004/M1S11U'),
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
        $('#addcansel').dxButton({//取消 关闭修改模态框
            text: '取消',
            icon: 'remove',
            onClick: function() {
                addIns.hide()
            }
        })
    }
    //Script ------------------------------------
})