///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let M1S12addIns;
let tabledataS1 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
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
//查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
$(function() {
    start() //调用初始化函数//websocket开始

    /*var userId='DZ_08_websocket';
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
    var data = ['[{"objId":"DZ_08_websocket","funName":"DZ_08","funType":"M1S11","tbName":"TB_SUPPLIER","dataId":"A"},]']
    send(data)
    };
    websocket.onmessage = function(evnt) {
    var jsons = eval('(' + evnt.data + ')');
    var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:DZ_08');
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
    }*/

    //websocket结束

    ////////////////////////////////////
    //////查询Form属性生成/////////////////)
    ////////////////////////////////////
    //以下为查询form的代码
    searchdataFormM1 = $('#searchFormM1').dxForm({
            deferRendering: false,

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
                //					{
                //						dataField:'cIdTbSupplier',
                //						label:{
                //							text:'主键'
                //						},
                //						editorOptions: {
                //						showClearButton: true,
                //						}
                //					},
                //					
                {
                    dataField: 'cSupplierTbSupplier',
                    label: {
                        text: '公司名称'
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
    $('#operateFormM1S1').dxForm({
            width: '100%',
            colCount: 200,

            items: [{
                    name: 'M1S11Q',
                    itemType: 'button',
                    buttonOptions: {
                        height: "auto",
                        width: "auto",
                        icon: "search",
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
                        height: "auto",
                        width: "auto",
                        name: 'M1S11Q',
                        icon: 'plus',
                        text: '新增',
                        onClick: function() {
                            change = '1';
                            $('#addmotai').show()
                            addIns = $('#addmotai').dxPopup({
                                width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                                height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                            }).dxPopup('instance')
                            addIns.option('title', 'DZ_08')
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
                        height: "auto",
                        width: "auto",
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
                                Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')
                                DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                                return;
                            }
                            addIns = $('#addmotai').dxPopup({
                                //模态框增加name    
                                width: 1000,
                                height: 450
                            }).dxPopup('instance')
                            addIns.option('title', 'DZ_08');
                            addIns.show();
                            // 调用模态框函数    
                            // updatafun()    
                            M1S11_Updatefun()
                            M1S11addIns.option('formData', rowsData)
                        }
                    }
                },
                //        {
                //            name: 'M1S11D',
                //            itemType: 'button',
                //            buttonOptions: {
                //                height: "auto",
                //                width: "auto",
                //
                //                icon: 'remove',
                //                text: '删除',
                //                onClick: function() {
                //                    let grid1 = $('#dataGridS1').dxDataGrid('instance');
                //                    let selectedRowKeys = grid1.getSelectedRowKeys()
                //                    let rowsData = grid1.getSelectedRowsData()
                //                    //脚本执行  
                //                    if (selectedRowKeys.length < 1) {
                //                        DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
                //                        return;
                //                    }
                //                    msg = {
                //                        ver: '53cc62f6122a436083ec083eed1dc03d',
                //                        session: '42f5c0d7178148938f4fda29460b815a',
                //                        tag: {},
                //                        data: {}
                //                    };
                //                    //前后端统一叫'tscLtrawbin' 
                //
                //                    msg.data.dz08M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                //                    console.log(msg)
                //                    M1S11D_serDel_Judgment();
                //                    if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
                //                    	
                //                    	var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
                //                        result.done(function (dialogResult) {
                //                            if (dialogResult) {
                //                                    cake.Ui.LoadPanel.show()
                //                    	
                //	                        $.ajax({
                //	                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/M1S11D'),
                //	                            dataType: 'json', //返回格式为json   
                //	                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                //	                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                //	                            type: 'post', //请求方式 get 或者post , 
                //	                            contentType: 'application/json',
                //	                            success: function(data) {
                //	                                let select = data.msg
                //	                                if (data.errcode == 0) {
                //	                                    DevExpress.ui.notify(data.msg, 'success', 3000);
                //	                                    M1S11_serDel();
                ////	                                    var websocketData = ['[{"objId":"DZ_08_websocket","funName":"DZ_08","funType":"M1S11","tbName":"TB_SUPPLIER","dataId":"AUD"}]']
                ////	                                    send(websocketData)
                //	
                //	                                } else {
                //	                                    DevExpress.ui.notify(data.msg, 'warning', 120000);
                //	                                }
                //	                            },
                //	                            error: function() {
                //	                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                //	                            }
                //	                        })
                //	                       
                //                            }
                //                            cake.Ui.LoadPanel.close()
                //                        })   
                //	                        
                //                    }
                //                }
                //            }
                //        }, 
                {
                    itemType: 'button',
                    buttonOptions: {
                        height: "auto",
                        width: "auto",
                        icon: "add",
                        text: "导入",
                        onClick: function(e) {
                            importPopup.show();
                        },
                    }
                },

            ]
        })
        ////////////////////////////////////
        //////表格属性生成/////////////////)
        ////////////////////////////////////
    var dataGridS1columns = [
        /*	{
                dataField: 'cIdTbSupplier',
                caption: '主键',
            },*/
        {
            dataField: 'number',
            caption: '序号',
           // width: 50,
            alignment: 'left'
        },
        {
            dataField: 'cSupplierTbSupplier',
            caption: '公司名称',
            width: "auto",
        },
        {
            dataField: 'cSupaddressTbSupplier',
            caption: '公司地址',
            width: "auto",
        },
        {
            dataField: 'cTaxnumberTbSupplier',
            caption: '税号',
            width: "auto",
        },
        {
            dataField: 'cBanknameTbSupplier',
            caption: '电汇开户银行',
            width: "auto",
        },
        {
            dataField: 'cSw05TbSupplier',
            caption: '电汇行号',
            width: "auto",
        },
        {
            dataField: 'cAccountnoTbSupplier',
            caption: '电汇账号',
            width: "auto",
        },
        
        {
            dataField: 'cSupphoneTbSupplier',
            caption: '电话',
            width: "auto",
        },
        {
            dataField: 'cFaxnoTbSupplier',
            caption: '传真',
            width: "auto",
        },
        {
            dataField: 'cSw06TbSupplier',
            caption: '承兑开户银行',
            width: "auto",
        },
        {
            dataField: 'cSw01TbSupplier',
            caption: '承兑行号',
            width: "auto",
        },
         {
             dataField: 'cSw02TbSupplier',
             caption: '承兑账号',
             width: "auto",
         },

         {
             dataField: 'cSw07TbSupplier',
             caption: '电汇开户银行2',
             width: "auto",
         },
         {
             dataField: 'cSw08TbSupplier',
             caption: '电汇行号2',
             width: "auto",
         },
         {
             dataField: 'cSw09TbSupplier',
             caption: '电汇账号2',
             width: "auto",
         },
         
         
        {
            dataField: 'cRemarkTbSupplier',
            caption: '备注',
            width: "auto",
        },
    ]

    $('#dataGridS1').dxDataGrid({
        deferRendering: false,
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
        height: '100% ',
        paging: {
            enabled: false
        },
        /* scrolling: {
             mode: 'virtual'
         },*/
        paging: {
            pageSize: 100,
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
        selection: {
            //            mode: 'multiple'
            mode: 'single'
        },

        columns: dataGridS1columns,

        // onToolbarPreparing: function(e) {
        //     operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

        // }
    }).dxDataGrid('instance');
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
        console.log(msg)
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
        msg.data.dz08M1s1 = [searchdataFormM1.option('formData')];
        M1S11Q_serDel_Judgment();
        if (M1S11Q_serDel_mark != 'M1S11Q_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/M1S11Q'),
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
                    select = data.data.dz08M1s1
                    tabledataS1.splice(0, tabledataS1.length);
                    select.forEach(item => tabledataS1.push(item));
                    $('#dataGridS1').dxDataGrid('instance').deselectAll()
                    $('#dataGridS1').dxDataGrid('instance').refresh()
                    DevExpress.ui.notify(data.msg, 'success', 1000);
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }

    function M1S11_addfun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                /*{
                    dataField: 'cIdTbSupplier',
                    label: {
                        text: '主键'
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
                },*/
                {
                    dataField: 'cSupplierTbSupplier',
                    label: {
                        text: '公司名称'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, 
                	]
                },
                {
                    dataField: 'cSupaddressTbSupplier',
                    label: {
                        text: '公司地址'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                },
                {
                    dataField: 'cTaxnumberTbSupplier',
                    label: {
                        text: '税号'
                    },
                    editorOptions: {
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
                    dataField: 'cBanknameTbSupplier',
                    label: {
                        text: '电汇开户银行'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, 
                    {
                      type: 'required',
                      message: '必填！'
                    },
                    ]
                },
                {
                    dataField: 'cSw05TbSupplier',
                    label: {
                        text: '电汇行号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cAccountnoTbSupplier',
                    label: {
                        text: '电汇账号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cSw06TbSupplier',
                    label: {
                        text: '承兑开户银行'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cSw01TbSupplier',
                    label: {
                        text: '承兑行号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cSw02TbSupplier',
                    label: {
                        text: '承兑账号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                
                
                {
                    dataField: 'cSw07TbSupplier',
                    label: {
                        text: '电汇开户银行2'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, 
                    ]
                },
                {
                    dataField: 'cSw08TbSupplier',
                    label: {
                        text: '电汇行号2'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, 
                    ]
                },
                {
                    dataField: 'cSw09TbSupplier',
                    label: {
                        text: '电汇账号2'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    ]
                },
                
                
                {
                    dataField: 'cSupphoneTbSupplier',
                    label: {
                        text: '电话'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, ]
                },
                {
                    dataField: 'cFaxnoTbSupplier',
                    label: {
                        text: '传真'
                    },
                    editorOptions: {
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
                    dataField: 'cRemarkTbSupplier',
                    label: {
                        text: '备注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
//                let validateResult = e.validationGroup.validate();
//                if (!validateResult.isValid) {
//                    DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//                    return;
//                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                let cBanknameTbSupplier = $('#addForm').dxForm('instance').option('formData').cBanknameTbSupplier;
                if (cBanknameTbSupplier == "" || cBanknameTbSupplier == undefined || cBanknameTbSupplier == null) {
                    DevExpress.ui.notify('电汇开户银行不能为空！！', 'error', 3000);
                    return
                }
                let cSw05TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw05TbSupplier;
                if (cSw05TbSupplier == "" || cSw05TbSupplier == undefined || cSw05TbSupplier == null) {
                    DevExpress.ui.notify('电汇行行号不能为空！！', 'error', 3000);
                    return
                }
                let cAccountnoTbSupplier = $('#addForm').dxForm('instance').option('formData').cAccountnoTbSupplier;
                if (cAccountnoTbSupplier == "" || cAccountnoTbSupplier == undefined || cAccountnoTbSupplier == null) {
                    DevExpress.ui.notify('电汇账号不能为空！！', 'error', 3000);
                    return
                }
                let cSw06TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw06TbSupplier;
                if (cSw06TbSupplier == "" || cSw06TbSupplier == undefined || cSw06TbSupplier == null) {
                    DevExpress.ui.notify('承兑开户银行不能为空！！', 'error', 3000);
                    return
                }
                let cSw01TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw01TbSupplier;
                if (cSw01TbSupplier == "" || cSw01TbSupplier == undefined || cSw01TbSupplier == null) {
                    DevExpress.ui.notify('承兑行号不能为空！！', 'error', 3000);
                    return
                }
                let cSw02TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw02TbSupplier;
                if (cSw02TbSupplier == "" || cSw02TbSupplier == undefined || cSw02TbSupplier == null) {
                    DevExpress.ui.notify('承兑账号不能为空！！', 'error', 3000);
                    return
                }
                
                msg.data.dz08M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                M1S11A_serDel_Judgment();
                if (M1S11A_serDel_mark != 'M1S11A_success') {} else {
                    var result = DevExpress.ui.dialog.confirm("您确定要添加吗?", "确认添加");
                    result.done(function(dialogResult) {
                        if (dialogResult) {
                            cake.Ui.LoadPanel.show()
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/M1S11A'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function(data) {
                                    let select = data.msg
                                    if (data.errcode == 0) {
                                        DevExpress.ui.notify(data.msg, 'success', 3000)
                                            /*  var websocketData = ['[{"objId":"DZ_08_websocket","funName":"DZ_08","funType":"M1S11","tbName":"TB_SUPPLIER","dataId":"AUD"}]']
                                              send(websocketData)*/
                                    } else {
                                        DevExpress.ui.notify(data.msg, 'error', 120000)
                                        return;
                                    }
                                    M1S11_serDel();
                                    addIns.hide();

                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                                    //e.cancel=true;         
                                }
                            })
                        }
                        cake.Ui.LoadPanel.close();
                    })
                }
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
            items: [
                /*{
                    dataField: 'cIdTbSupplier',
                    label: {
                        text: '主键'
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
                },*/
                {
                    dataField: 'cSupplierTbSupplier',
                    label: {
                        text: '公司名称'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                },
                {
                    dataField: 'cSupaddressTbSupplier',
                    label: {
                        text: '公司地址'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                },
                {
                    dataField: 'cTaxnumberTbSupplier',
                    label: {
                        text: '税号'
                    },
                    editorOptions: {
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
                    dataField: 'cBanknameTbSupplier',
                    label: {
                        text: '电汇开户银行'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cSw05TbSupplier',
                    label: {
                        text: '电汇行号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    },
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cAccountnoTbSupplier',
                    label: {
                        text: '电汇账号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cSw06TbSupplier',
                    label: {
                        text: '承兑开户银行'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cSw01TbSupplier',
                    label: {
                        text: '承兑行号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                {
                    dataField: 'cSw02TbSupplier',
                    label: {
                        text: '承兑账号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
                    {
                        type: 'required',
                        message: '必填！'
                      },
                    ]
                },
                
                
                {
                    dataField: 'cSw07TbSupplier',
                    label: {
                        text: '电汇开户银行2'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, 
                    ]
                },
                {
                    dataField: 'cSw08TbSupplier',
                    label: {
                        text: '电汇行号2'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    },
                    ]
                },
                {
                    dataField: 'cSw09TbSupplier',
                    label: {
                        text: '电汇账号2'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, 
             
                    ]
                },
                
                
                {
                    dataField: 'cSupphoneTbSupplier',
                    label: {
                        text: '电话'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, ]
                },
                {
                    dataField: 'cFaxnoTbSupplier',
                    label: {
                        text: '传真'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 100,
                        min: 0,
                        message: '长度超限，最长为100！'
                    }, ]
                },
                {
                    dataField: 'cRemarkTbSupplier',
                    label: {
                        text: '备注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
//                let validateResult = e.validationGroup.validate();
//                if (!validateResult.isValid) {
//                    DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//                    return;
//                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                let cBanknameTbSupplier = $('#addForm').dxForm('instance').option('formData').cBanknameTbSupplier;
                if (cBanknameTbSupplier == "" || cBanknameTbSupplier == undefined || cBanknameTbSupplier == null) {
                    DevExpress.ui.notify('电汇开户银行不能为空！！', 'error', 3000);
                    return
                }
                let cSw05TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw05TbSupplier;
                if (cSw05TbSupplier == "" || cSw05TbSupplier == undefined || cSw05TbSupplier == null) {
                    DevExpress.ui.notify('电汇行行号不能为空！！', 'error', 3000);
                    return
                }
                let cAccountnoTbSupplier = $('#addForm').dxForm('instance').option('formData').cAccountnoTbSupplier;
                if (cAccountnoTbSupplier == "" || cAccountnoTbSupplier == undefined || cAccountnoTbSupplier == null) {
                    DevExpress.ui.notify('电汇账号不能为空！！', 'error', 3000);
                    return
                }
                let cSw06TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw06TbSupplier;
                if (cSw06TbSupplier == "" || cSw06TbSupplier == undefined || cSw06TbSupplier == null) {
                    DevExpress.ui.notify('承兑开户银行不能为空！！', 'error', 3000);
                    return
                }
                let cSw01TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw01TbSupplier;
                if (cSw01TbSupplier == "" || cSw01TbSupplier == undefined || cSw01TbSupplier == null) {
                    DevExpress.ui.notify('承兑行号不能为空！！', 'error', 3000);
                    return
                }
                let cSw02TbSupplier = $('#addForm').dxForm('instance').option('formData').cSw02TbSupplier;
                if (cSw02TbSupplier == "" || cSw02TbSupplier == undefined || cSw02TbSupplier == null) {
                    DevExpress.ui.notify('承兑账号不能为空！！', 'error', 3000);
                    return
                }
                msg.data.dz08M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                M1S11U_serDel_Judgment();
                if (M1S11U_serDel_mark != 'M1S11U_success') {} else {

                    var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                    result.done(function(dialogResult) {
                        if (dialogResult) {
                            cake.Ui.LoadPanel.show()
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/M1S11U'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function(data) {
                                    let select = data.msg
                                    if (data.errcode == 0) {
                                        DevExpress.ui.notify(data.msg, 'success', 3000)
                                            //	                                var websocketData = ['[{"objId":"DZ_08_websocket","funName":"DZ_08","funType":"M1S11","tbName":"TB_SUPPLIER","dataId":"AUD"}]']
                                            //	                                send(websocketData)
                                    } else {
                                        DevExpress.ui.notify(data.msg, 'error', 120000)
                                        return;
                                    }
                                    M1S11_serDel();
                                    addIns.hide();

                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                                    //e.cancel=true;         
                                }
                            })

                        }
                        cake.Ui.LoadPanel.close()
                    })

                }
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
    function M1S11_UpdatefunA() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                /*{
                    dataField: 'cIdTbSupplier',
                    label: {
                        text: '主键'
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
                },*/
                {
                    dataField: 'cSupplierTbSupplier',
                    label: {
                        text: '公司名称'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                },
                {
                    dataField: 'cSupaddressTbSupplier',
                    label: {
                        text: '公司地址'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                },
                {
                    dataField: 'cBanknameTbSupplier',
                    label: {
                        text: '开户银行'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
                    }, ]
                },
                {
                    dataField: 'cAccountnoTbSupplier',
                    label: {
                        text: '账号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, ]
                },
                {
                    dataField: 'cTaxnumberTbSupplier',
                    label: {
                        text: '税号'
                    },
                    editorOptions: {
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
                    dataField: 'cSupphoneTbSupplier',
                    label: {
                        text: '电话'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 1000,
                        min: 0,
                        message: '长度超限，最长为1000！'
                    }, ]
                },
                {
                    dataField: 'cFaxnoTbSupplier',
                    label: {
                        text: '传真'
                    },
                    editorOptions: {
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
                    dataField: 'cRemarkTbSupplier',
                    label: {
                        text: '备注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
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
                msg.data.dz08M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                M1S11U_serDel_Judgment();
                if (M1S11U_serDel_mark != 'M1S11U_success') {} else {
                    var result = DevExpress.ui.dialog.confirm("您确定要修改添加吗?", "修改添加确认");
                    result.done(function(dialogResult) {
                        if (dialogResult) {
                            cake.Ui.LoadPanel.show()
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/M1S11A'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function(data) {
                                    let select = data.msg
                                    if (data.errcode == 0) {
                                        DevExpress.ui.notify(data.msg, 'success', 3000)
                                            //	                                var websocketData = ['[{"objId":"DZ_08_websocket","funName":"DZ_08","funType":"M1S11","tbName":"TB_SUPPLIER","dataId":"AUD"}]']
                                            //	                                send(websocketData)
                                    } else {
                                        DevExpress.ui.notify(data.msg, 'error', 120000)
                                        return;
                                    }
                                    M1S11_serDel();
                                    addIns.hide();

                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                                    //e.cancel=true;         
                                }
                            })

                        }
                        cake.Ui.LoadPanel.close()
                    })

                }
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
    function M1S12_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.dz08M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        M1S12MSG_serDel_Judgment();
        if (M1S12MSG_serDel_mark != 'M1S12MSG_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/M1S12MSG'),
                dataType: 'json', //返回格式为json      
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                type: 'post', //请求方式 get 或者post ,       
                contentType: 'application/json',
                success: function(data) {
                    if (data.errcode == "0") {
                        DevExpress.ui.notify(data.msg, 'success', 3000)
                        var websocketData = ['[{"objId":"DZ_08_websocket","funName":"DZ_08","funType":"M1S12","tbName":"TB_SUPPLIER","dataId":"AUD"}]']
                        send(websocketData)
                    } else {
                        DevExpress.ui.notify(data.msg, 'error', 120000)
                        return;
                    }
                    M1S11_serDel();


                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
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
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/Import_SuppExcel'),
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
        tables = tables.replace(/公司名称/g, 'cSupplier');
        tables = tables.replace(/公司地址/g, 'cSupaddress');
        tables = tables.replace(/开户银行/g, 'cBankname');
        tables = tables.replace(/账号/g, 'cAccountno');
        tables = tables.replace(/税号/g, 'cTaxnumber');
        tables = tables.replace(/电话/g, 'cSupphone');
        tables = tables.replace(/传真/g, 'cFaxno');

        updata.data = {}
        updata.data.tbSupplier = JSON.parse(tables);

        console.log(updata);
        localStorage.setItem('updata', JSON.stringify(updata));
    };
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}