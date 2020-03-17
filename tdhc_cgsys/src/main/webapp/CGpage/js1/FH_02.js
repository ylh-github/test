///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S13addIns;
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
        //
        //var userId='FH_02_websocket';
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
        //var data = ['[{"objId":"FH_02_websocket","funName":"FH_02","funType":"M1S11","tbName":"TP_FHINVOICE","dataId":"A"},]']
        //send(data)
        //};
        //websocket.onmessage = function(evnt) {
        //var jsons = eval('(' + evnt.data + ')');
        //var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:FH_02');
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
            deferRendering: false,

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
                dataField: 'cConnumTpFhinvoice',
                label: {
                    text: '合同号'
                },
                editorOptions: {
                    showClearButton: true,
                }
            }]
        }).dxForm('instance')
        //完成对查询条件的自动生成
        ////////////////////////////////////////////////////
        ////生成按钮层//////////////////////////////////////
        ////////////////////////////////////////////////////

    // let operateFormS1buts = [{
    //         location: "before",
    //         locateInMenu: 'auto',
    //         widget: "dxButton",
    //         options: {
    //             height: "auto",
    //             width: "auto",
    //             icon: "search",
    //             name: 'M1S11Q',
    //             text: '查询',
    //             onClick: function() {
    //                 M1S11_serDel();
    //             }
    //         }
    //     }, {
    //         location: "before",
    //         locateInMenu: 'auto',
    //         widget: "dxButton",
    //         options: {
    //             height: "auto",
    //             width: "auto",
    //             icon: 'save',
    //             text: '批准',
    //             onClick: function() {
    //                 change = '2'
    //                 let grid = $('#dataGridS1').dxDataGrid('instance');
    //                 let rowsData = grid.getSelectedRowsData()[0]
    //                 let selectedRowKeys = grid.getSelectedRowKeys()
    //                 if (selectedRowKeys.length < 1) {
    //                     // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
    //                     DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
    //                     return;
    //                 }
    //                 if (selectedRowKeys.length > 1) {
    //                     // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
    //                     //	DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
    //                     return;
    //                 }
    //                 M1S12_Msgfun()
    //             }
    //         }
    //     }, {
    //         location: "before",
    //         locateInMenu: 'auto',
    //         widget: "dxButton",
    //         options: {
    //             height: "auto",
    //             width: "auto",
    //             icon: 'save',
    //             text: '驳回',
    //             onClick: function() {
    //                 change = '2'
    //                 let grid = $('#dataGridS1').dxDataGrid('instance');
    //                 let rowsData = grid.getSelectedRowsData()[0]
    //                 let selectedRowKeys = grid.getSelectedRowKeys()
    //                 if (selectedRowKeys.length < 1) {
    //                     // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
    //                     DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
    //                     return;
    //                 }
    //                 if (selectedRowKeys.length > 1) {
    //                     // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
    //                     //	DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
    //                     return;
    //                 }
    //                 M1S13_Msgfun()
    //             }
    //         }
    //     },

    // ];
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
                name: 'M1S11Q',
                text: '查询',
                onClick: function() {
                    M1S11_serDel();
                }
            }
        }, {
            itemType: 'button',
            buttonOptions: {
                height: "auto",
                width: "auto",
                icon: 'save',
                text: '批准',
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
                        //	DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
                        return;
                    }
                    M1S12_Msgfun()
                }
            }
        }, {
            itemType: 'button',
            buttonOptions: {
                height: "auto",
                width: "auto",
                icon: 'save',
                text: '驳回',
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
                        //	DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
                        return;
                    }
                    M1S13_Msgfun()
                }
            }
        }, ]
    })

    ////////////////////////////////////
    //////表格属性生成/////////////////)
    ////////////////////////////////////
    var dataGridS1columns = [{
            dataField: 'cStateTpFhmateials',
            caption: '物资状态',
        },
        {
            dataField: 'cSpecTpFhmateials',
            caption: '发货型号',
        },
        {
            dataField: 'cRealspecTpFhmateials',
            caption: '实际发货型号',
        },
        {
            dataField: 'cConnumTpFhinvoice',
            caption: '合同号',
        },
        {
            dataField: 'cShaddressTpFhinvoice',
            caption: '收货单位地址',
        },
        {
            dataField: 'cNumTpFhmateials',
            caption: '数量',
        },
        {
            dataField: 'cGoodsnameTpFhmateials',
            caption: '货物名称',
        },
        {
            dataField: 'cRealnameTpFhmateials',
            caption: '实际货物名称',
        },
        {
            dataField: 'cUnitTpFhmateials',
            caption: '单位',
        },
        {
            dataField: 'cFhinvoiceidTpFhmateials',
            caption: '发货单ID',
        },
        {
            dataField: 'cShnameTpFhinvoice',
            caption: '收货单位名称',
        },
        {
            dataField: 'cFhdwnameTpFhinvoice',
            caption: '发货单位名称',
        },
    ]

    $('#dataGridS1').dxDataGrid({
        deferRendering: false,

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
        height: 450,
        paging: {
            enabled: false
        },
        //			scrolling: {     
        //				mode: 'virtual'     
        //					},     
        selection: {
            mode: 'multiple'
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
        msg.data.fh02M1s1 = [searchdataFormM1.option('formData')];
        M1S11Q_serDel_Judgment();
        if (M1S11Q_serDel_mark != 'M1S11Q_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_02/M1S11Q'),
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
                    select = data.data.fh02M1s1
                    tabledataS1.splice(0, tabledataS1.length);
                    select.forEach(item => tabledataS1.push(item));
                    $('#dataGridS1').dxDataGrid('instance').deselectAll()
                    $('#dataGridS1').dxDataGrid('instance').refresh()
                    DevExpress.ui.notify(data.msg, 'success', 3000);
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }
    //代码需要重新定义 
    function M1S12_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.fh02M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        M1S12MSG_serDel_Judgment();
        if (M1S12MSG_serDel_mark != 'M1S12MSG_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_02/M1S12MSG'),
                dataType: 'json', //返回格式为json      
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                type: 'post', //请求方式 get 或者post ,       
                contentType: 'application/json',
                success: function(data) {
                    if (data.errcode == "0") {
                        DevExpress.ui.notify(data.msg, 'success', 3000)
                        var websocketData = ['[{"objId":"FH_02_websocket","funName":"FH_02","funType":"M1S12","tbName":"TP_FHMATEIALS","dataId":"AUD"}]']
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
    //代码需要重新定义 
    function M1S13_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.fh02M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        M1S13MSG_serDel_Judgment();
        if (M1S13MSG_serDel_mark != 'M1S13MSG_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_02/M1S13MSG'),
                dataType: 'json', //返回格式为json      
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                type: 'post', //请求方式 get 或者post ,       
                contentType: 'application/json',
                success: function(data) {
                    if (data.errcode == "0") {
                        DevExpress.ui.notify(data.msg, 'success', 3000)
                        var websocketData = ['[{"objId":"FH_02_websocket","funName":"FH_02","funType":"M1S13","tbName":"TP_FHMATEIALS","dataId":"AUD"}]']
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
})