///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S13addIns;
let M1S11addIns;
let M2S21addIns;
let M1S12addIns;
let M1S14addIns;
let tabledataS1 = []; // 用于接收表格数据源
let tabledataS2 = []; // 用于接收表格数据源
let searchdataM1; // 每个查询条件form的数据
let searchdataFormM1; // 每个查询条件form的实例
let searchdataM2; // 每个查询条件form的数据
let searchdataFormM2; // 每个查询条件form的实例var contextMenuItems = [ { text: '选择',
//let importf;		// icon: 'dx-icon-add' }, ];
let adddata = {}; // 添加按钮需要的数据源
let addIns; // 增加操作时候的模态框实例
// 设置模态框的属性
if (addIns == null) {
    addIns = $('#addmotai ').dxPopup({
        'visible': false, // 设置属性不可见
        height: 300, // 设置高度
        width: 450, // 设置宽度
    }).dxPopup('instance');
}
let change = ''; // 区分增加和修改的状态,1为增加;2为修改
// 查询区域数据
let validationGroupName = 'validationGroupName';
// 当存在不需要与后台通信的数据框,且需要自行添加的选择框
// /////////////////////////////////////////////////////////////////////////////////////////
// ///////////$function！////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////
$(function() {
    start() // 调用初始化函数//websocket开始

    /*var userId='FH_01_websocket';
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
    var data = ['[{"objId":"FH_01_websocket","funName":"FH_01","funType":"M1S11","tbName":"TP_FHINVOICE","dataId":"A"},{"objId":"FH_01_websocket","funName":"FH_01","funType":"M2S21","tbName":"TP_CGCONTRACTMT","dataId":"A"},]']
    send(data)
    };
    websocket.onmessage = function(evnt) {
    var jsons = eval('(' + evnt.data + ')');
    var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:FH_01');
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
    */
    // websocket结束

    // //////////////////////////////////
    // ////查询Form属性生成/////////////////)
    // //////////////////////////////////
    // 以下为查询form的代码
    searchdataFormM1 = $('#searchFormM1').dxForm({
            deferRendering: false,

            formData: searchdataM1,
            // //当参数小于三个时为五个,大于等于三时统一乘二
            // //王晶晶给改为自适应编码
            colCountByScreen: {
                lg: 6,
                md: 4,
                sm: 2,
                xs: 1,
            },
            // 所有查询条件为一组的代码段
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
        //以下为查询form的代码
    searchdataFormM2 = $('#searchFormM2').dxForm({
            deferRendering: false,

            formData: searchdataM2,
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
                //						dataField:'cCreatetimeTpCgcontractmt_star',
                //						label:{
                //							text:'创建时间'
                //						},
                //                     editorOptions:{
                //                                    type:'date',
                //                                    value : new Date(),
                //                                    displayFormat:'yyyy-MM-dd'
                //					}
                //					},
                //					{
                //						dataField:'cCreatetimeTpCgcontractmt_end',
                //						label:{
                //							text:'创建时间'
                //						},
                //                     editorOptions:{
                //                                    type:'date',
                //                                    value : new Date(),
                //                                    displayFormat:'yyyy-MM-dd'
                //
                //						}
                //					},
                {
                    dataField: 'cConnumTpCgcontractmt',
                    label: {
                        text: '合同号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                },

                {
                    dataField: 'cGoodsnameTpCgcontractst',
                    label: {
                        text: '物资名称'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                }
            ]
        }).dxForm('instance')
        //完成对查询条件的自动生成
        // //////////////////////////////////////////////////
        // //生成按钮层//////////////////////////////////////
        // //////////////////////////////////////////////////

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
    //             icon: "add",
    //             text: "导入",
    //             onClick: function(e) {
    //                 importPopup.show();
    //             },
    //         }
    //     },
    //     {
    //         location: "before",
    //         locateInMenu: 'auto',
    //         widget: "dxButton",
    //         options: {
    //             height: "auto",
    //             width: "auto",
    //             icon: 'save',
    //             text: '对比',
    //             onClick: function() {
    //                 change = '2'
    //                 let grid = $('#dataGridS1').dxDataGrid('instance');
    //                 let rowsData = grid.getSelectedRowsData();
    //                 let selectedRowKeys = grid.getSelectedRowKeys()
    //                 if (selectedRowKeys.length < 1) {
    //                     // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')
    //                     // DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
    //                     // return;
    //                 }
    //                 if (selectedRowKeys.length > 1) {
    //                     // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')
    //                     // DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
    //                     // return;
    //                 }
    //                 M1S13_Msgfun()
    //             }
    //         }
    //     },
    //     //		{
    //     //			location: "before",
    //     //			locateInMenu: 'auto',
    //     //			widget: "dxButton",
    //     //			options: {
    //     //				height: "auto",
    //     //				width: "auto",
    //     //				icon: "search",
    //     //				name: 'M1S12G2',
    //     //				text: '查询',
    //     //				onClick: function () {
    //     //					M1S13_Msgfun();
    //     //				}
    //     //			}
    //     //		},
    //     {
    //         location: "before",
    //         locateInMenu: 'auto',
    //         widget: "dxButton",
    //         options: {
    //             height: "auto",
    //             width: "auto",

    //             icon: 'remove',
    //             text: '删除',
    //             onClick: function() {
    //                 let grid1 = $('#dataGridS1').dxDataGrid('instance');
    //                 let selectedRowKeys = grid1.getSelectedRowKeys()
    //                 let rowsData = grid1.getSelectedRowsData()
    //                     //脚本执行  
    //                 if (selectedRowKeys.length < 1) {
    //                     DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
    //                     return;
    //                 }
    //                 msg = {
    //                     ver: '53cc62f6122a436083ec083eed1dc03d',
    //                     session: '42f5c0d7178148938f4fda29460b815a',
    //                     tag: {},
    //                     data: {}
    //                 };
    //                 //前后端统一叫'tscLtrawbin' 

    //                 msg.data.fh01M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
    //                 console.log(msg)
    //                 M1S11D_serDel_Judgment();
    //                 if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
    //                     $.ajax({
    //                         url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M1S11D'),
    //                         dataType: 'json', //返回格式为json   
    //                         async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
    //                         data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
    //                         type: 'post', //请求方式 get 或者post , 
    //                         contentType: 'application/json',
    //                         success: function(data) {
    //                             let select = data.msg
    //                             if (data.errcode == 0) {
    //                                 DevExpress.ui.notify(data.msg, 'success', 3000);
    //                                 M1S11_serDel();
    //                                 var websocketData = ['[{"objId":"FH_01_websocket","funName":"FH_01","funType":"M1S11","tbName":"TP_FHMATEIALS","dataId":"AUD"}]']
    //                                 send(websocketData)

    //                             } else {
    //                                 DevExpress.ui.notify(data.msg, 'warning', 120000);
    //                             }
    //                         },
    //                         error: function() {
    //                             DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
    //                         }
    //                     })
    //                 }
    //             }
    //         }
    //     },
    //     //		{
    //     //			location: "before",
    //     //			locateInMenu: 'auto',
    //     //			widget: "dxButton",
    //     //			options: {
    //     //				height: "auto",
    //     //				width: "auto",
    //     //				icon: 'save',
    //     //				text: '驳回',
    //     //				onClick: function () {
    //     //					change = '2'
    //     //					let grid = $('#dataGridS1').dxDataGrid('instance');
    //     //					let rowsData = grid.getSelectedRowsData()[0]
    //     //					let selectedRowKeys = grid.getSelectedRowKeys()
    //     //					if (selectedRowKeys.length < 1) {
    //     //						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')
    //     //						DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
    //     //						return;
    //     //					}
    //     //					if (selectedRowKeys.length > 1) {
    //     //						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')
    //     //						// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
    //     //						return;
    //     //					}
    //     //					M1S14_Msgfun()
    //     //				}
    //     //			}
    //     //		},

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
            },
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
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: 'save',
                    text: '对比',
                    onClick: function() {
                        change = '2'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData();
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')
                            // DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
                            // return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')
                            // DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            // return;
                        }
                        M1S13_Msgfun()
                    }
                }
            },
            //		{
            //			itemType: 'button',
            //			buttonOptions: {
            //				height: "auto",
            //				width: "auto",
            //				icon: "search",
            //				name: 'M1S12G2',
            //				text: '查询',
            //				onClick: function () {
            //					M1S13_Msgfun();
            //				}
            //			}
            //		},
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",

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

                        msg.data.fh01M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        console.log(msg)
                        M1S11D_serDel_Judgment();
                        if (M1S11D_serDel_mark != 'M1S11D_success') {} else {
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M1S11D'),
                                dataType: 'json', //返回格式为json   
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                type: 'post', //请求方式 get 或者post , 
                                contentType: 'application/json',
                                success: function(data) {
                                    let select = data.msg
                                    if (data.errcode == 0) {
                                        DevExpress.ui.notify(data.msg, 'success', 3000);
                                        M1S11_serDel();
                                        var websocketData = ['[{"objId":"FH_01_websocket","funName":"FH_01","funType":"M1S11","tbName":"TP_FHMATEIALS","dataId":"AUD"}]']
                                        send(websocketData)

                                    } else {
                                        DevExpress.ui.notify(data.msg, 'warning', 120000);
                                    }
                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                }
                            })
                        }
                    }
                }
            },
            //		{
            //			itemType: 'button',
            //			buttonOptions: {
            //				height: "auto",
            //				width: "auto",
            //				icon: 'save',
            //				text: '驳回',
            //				onClick: function () {
            //					change = '2'
            //					let grid = $('#dataGridS1').dxDataGrid('instance');
            //					let rowsData = grid.getSelectedRowsData()[0]
            //					let selectedRowKeys = grid.getSelectedRowKeys()
            //					if (selectedRowKeys.length < 1) {
            //						// Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')
            //						DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
            //						return;
            //					}
            //					if (selectedRowKeys.length > 1) {
            //						// Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')
            //						// DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
            //						return;
            //					}
            //					M1S14_Msgfun()
            //				}
            //			}
            //		},
        ]
    })

    // let operateFormS2buts = [{
    //         location: "before",
    //         locateInMenu: 'auto',
    //         widget: "dxButton",
    //         options: {
    //             height: "auto",
    //             width: "auto",
    //             icon: "search",
    //             name: 'M2S21Q',
    //             text: '查询',
    //             onClick: function() {
    //                 M2S21_serDel();
    //             }
    //         }
    //     },

    // ];
    $('#operateFormS1S2').dxForm({
        width: '100%',
        colCount: 200,
        items: [{
            name: 'M1S11Q',
            itemType: 'button',
            buttonOptions: {
                height: "auto",
                width: "auto",
                icon: "search",
                name: 'M2S21Q',
                text: '查询',
                onClick: function() {
                    M2S21_serDel();
                }
            }
        }, ]
    })

    // //////////////////////////////////
    // ////表格属性生成/////////////////)
    // //////////////////////////////////
    var dataGridS1columns = [


        {
            dataField: 'cConnumTpFhinvoice',
            caption: '合同号',
        },
        {
            dataField: 'cStateTpFhmateials',
            caption: '物资状态',
        },
        {
            dataField: 'cShaddressTpFhinvoice',
            caption: '收货单位地址',
        },

        {
            dataField: 'cShnameTpFhinvoice',
            caption: '收货单位名称',
        },
        {
            dataField: 'cGoodsnameTpFhmateials',
            caption: '货物名称',
        },
        {
            dataField: 'cSpecTpFhmateials',
            caption: '发货型号',
        },
        {
            dataField: 'cNumTpFhmateials',
            caption: '数量',
        },

        {
            dataField: 'cUnitTpFhmateials',
            caption: '单位',
        },

        {
            dataField: 'cFhdwnameTpFhinvoice',
            caption: '发货单位名称',
        },
        {
            dataField: 'cSw15TpFhinvoice',
            caption: '备注',
        },
    ]

    $('#dataGridS1').dxDataGrid({
        deferRendering: false,

        dataSource: tabledataS1,
        editing: {
            mode: 'popup',
            // allowUpdating: false
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
        // 允许脚本编写
        height: 450,
        paging: {
            enabled: true,
            pageSize: 100
        },
        //			scrolling: {     
        //				mode: 'virtual'     
        //					},     
        selection: {
            mode: 'multiple'
        },

        columns: dataGridS1columns,

        // onToolbarPreparing: function (e) {
        // 	operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

        // }
    }).dxDataGrid('instance');
    var dataGridS2columns = [{
            dataField: 'cConnumTpCgcontractmt',
            caption: '合同号',
        },
        {
            dataField: 'cCludecomTpCgcontractmt',
            caption: '签订公司',
        },
        {
            dataField: 'cSupplierTpCgcontractmt',
            caption: '供应商',
        },
        {
            dataField: 'cGoodsnameTpCgcontractst',
            caption: '物资名称',
        },
        {
            dataField: 'cSpecTpCgcontractst',
            caption: '规格型号',
        },
        {
            dataField: 'cGoodsnumTpCgcontractst',
            caption: '数量',
        },

        {
            dataField: 'cUnitTpCgcontractst',
            caption: '单位',
        },
        {
            dataField: 'cStateTpCgcontractst',
            caption: '完成状态',
        },
        {
            dataField: 'cCludetimeTpCgcontractmt',
            caption: '签订时间',
            dataType: "date",
            format: "yyyy-MM-dd",

        },
        {
            dataField: 'cCludeaddrTpCgcontractmt',
            caption: '签订地点',
        },

    ]

    $('#dataGridS2').dxDataGrid({
        deferRendering: false,

        dataSource: tabledataS2,
        editing: {
            mode: 'popup',
            // allowUpdating: false
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
        // 允许脚本编写
        paging: {
            enabled: true,
            pageSize: 100
        },
        height: 450,

        //		scrolling: {
        //			mode: 'virtual'
        //		},
        selection: {
            mode: 'multiple'
        },

        columns: dataGridS2columns,

        // onToolbarPreparing: function(e) {
        //     operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

        // }
    }).dxDataGrid('instance');
    // /////////////////////////////////////////////////////
    // Star()请求下拉框、多选框数据、通过请求网址的后缀生成代码
    // /////////////////////////////////////////////////////
    function start() {
        // ajax传参用
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        console.log(msg)
            // //////////////////////////////////////////////////////////////////////////////
            // 寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,
            // //////////////////////////////////////////////////////////////////////////////
    }
    // ////////////////////////////////////////////////////////////////////////////////////////////////
    // 功能类代码(与button生成代码对应）
    // /////////////////////////////////////////////////////////
    // ////////////////////////////////////////////////////////////////////////////////////////////////
    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let searchtiao = searchdataFormM1.option('formData')
        msg.data.fh01M1s1 = [searchdataFormM1.option('formData')];
        M1S11Q_serDel_Judgment();
        if (M1S11Q_serDel_mark != 'M1S11Q_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M1S11Q'),
                dataType: 'json', // 返回格式为json
                async: true, // 请求是否异步,默认为异步,这也是ajax重要特性
                data: JSON.stringify(msg), // 下拉框的参数值 queryCondition 上面有定义
                // cStlCla 后台给的固定的名
                type: 'post', // 请求方式 get 或者post ,
                contentType: 'application/json',
                success: function(data) {
                    console.log(data)
                    if (data.data == null) {
                        tabledataS1.splice(0, tabledataS1.length);
                        $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                        return
                    }

                    let select;
                    select = data.data.fh01M1s1
                    tabledataS1.splice(0, tabledataS1.length);
                    select.forEach(item => tabledataS1.push(item));
                    $('#dataGridS1').dxDataGrid('instance').deselectAll()
                    $('#dataGridS1').dxDataGrid('instance').refresh()
                    DevExpress.ui.notify(data.msg, 'success', 3000);
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')
                    // e.cancel=true;
                }
            })
        }
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
        msg.data.fh01M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        //change等于1为添加         
        console.log(JSON.stringify(msg));
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M1S1'),
            dataType: 'json', //返回格式为json           
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
            type: 'post', //请求方式 get 或者post ,         
            contentType: 'application/json',
            success: function(data) {

                if (data.data == null) {
                    tabledataS2.splice(0, tabledataS2.length);
                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                    return
                }
                let select;
                select = data.data.fh01M2s2
                console.log(select)
                tabledataS2.splice(0, tabledataS2.length);
                select.forEach(item => tabledataS2.push(item));
                $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                $('#dataGridS2').dxDataGrid('instance').deselectAll()
                $('#dataGridS2').dxDataGrid('instance').refresh()
            },
            error: function() {
                cake.Ui.LoadPanel.close();
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
    }
    // 代码需要重新定义
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
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M1S12MSG'),
                                type: 'POST',
                                dataType: 'json',
                                contentType: "application/json; charset=utf-8",
                                data: localStorage.getItem('updata'),

                                success: function(data) {
                                    importPopup.hide();
                                    console.log(data)
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






    // 代码需要重新定义
    function M1S13_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.fh01M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        M1S13MSG_serDel_Judgment();
        console.log(JSON.stringify(msg));
        if (M1S13MSG_serDel_mark != 'M1S13MSG_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M1S12MSG2'),
                dataType: 'json', // 返回格式为json
                async: true, // 请求是否异步,默认为异步,这也是ajax重要特性
                data: JSON.stringify(msg), // 下拉框的参数值 queryCondition 上面有定义
                // cStlCla 后台给的固定的名
                type: 'post', // 请求方式 get 或者post ,
                contentType: 'application/json',
                success: function(data) {
                    if (data.errcode == "0") {
                        DevExpress.ui.notify(data.msg, 'success', 3000)
                            //						var websocketData = ['[{"objId":"FH_01_websocket","funName":"FH_01","funType":"M1S13","tbName":"TP_FHMATEIALS","dataId":"AUD"}]']
                            //						send(websocketData)
                    } else {
                        DevExpress.ui.notify(data.msg, 'error', 120000)
                        return;
                    }
                    M1S11_serDel();


                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')
                    // e.cancel=true;
                }
            })
        }
    }
    // 代码需要重新定义
    function M1S14_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.fh01M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        M1S14MSG_serDel_Judgment();
        if (M1S14MSG_serDel_mark != 'M1S14MSG_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M1S14MSG'),
                dataType: 'json', // 返回格式为json
                async: true, // 请求是否异步,默认为异步,这也是ajax重要特性
                data: JSON.stringify(msg), // 下拉框的参数值 queryCondition 上面有定义
                // cStlCla 后台给的固定的名
                type: 'post', // 请求方式 get 或者post ,
                contentType: 'application/json',
                success: function(data) {
                    if (data.errcode == "0") {
                        DevExpress.ui.notify(data.msg, 'success', 3000)
                        var websocketData = ['[{"objId":"FH_01_websocket","funName":"FH_01","funType":"M1S14","tbName":"TP_FHMATEIALS","dataId":"AUD"}]']
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
                    // e.cancel=true;
                }
            })
        }
    }

    function M2S21_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let searchtiao = searchdataFormM2.option('formData')
        msg.data.fh01M2s2 = [searchdataFormM2.option('formData')];
        M2S21Q_serDel_Judgment();
        if (M2S21Q_serDel_mark != 'M2S21Q_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/FH_01/M2S21Q'),
                dataType: 'json', // 返回格式为json
                async: true, // 请求是否异步,默认为异步,这也是ajax重要特性
                data: JSON.stringify(msg), // 下拉框的参数值 queryCondition 上面有定义
                // cStlCla 后台给的固定的名
                type: 'post', // 请求方式 get 或者post ,
                contentType: 'application/json',
                success: function(data) {

                    if (data.data == null) {
                        tabledataS2.splice(0, tabledataS2.length);
                        $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                        return
                    }

                    let select;
                    select = data.data.fh01M2s2
                    tabledataS2.splice(0, tabledataS2.length);
                    select.forEach(item => tabledataS2.push(item));
                    $('#dataGridS2').dxDataGrid('instance').deselectAll()
                    $('#dataGridS2').dxDataGrid('instance').refresh()
                    DevExpress.ui.notify(data.msg, 'success', 3000);
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')
                    // e.cancel=true;
                }
            })
        }
    }

    // Script ------------------------------------
})

//导入Excel读取

function importf(obj) {
    /*
     * FileReader共有4种读取方法： 1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
     * 2.readAsBinaryString(file)：将文件读取为二进制字符串
     * 3.readAsDataURL(file)：将文件读取为Data URL 4.readAsText(file,
     * [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
     */
    if (!obj.files) {
        return;
    }
    var wb; // 读取完成的数据
    var rABS = false; // 是否将文件读取为二进制字符串
    var updata = {}; // 储存读取出来的数据
    function fixdata(data) { // 文件流转BinaryString
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
            wb = XLSX.read(btoa(fixdata(data)), { // 手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        // wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        // wb.Sheets[Sheet名]获取第一个Sheet的数据
        var tables = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        // // 拼接两段数据
        tables = JSON.stringify(tables);
        tables = tables.replace(/收货单位地址/g, 'cShaddress');
        tables = tables.replace(/收货单位名称/g, 'cShname');
        tables = tables.replace(/发货单位名称/g, 'cFhdwname');
        tables = tables.replace(/产品名称/g, 'cGoodsname');
        tables = tables.replace(/型号/g, 'cSpec');
        tables = tables.replace(/单位/g, 'cUnit');
        tables = tables.replace(/数量/g, 'cNum');
        tables = tables.replace(/备注/g, 'cRemark');
        tables = tables.replace(/合同号/g, 'cConnum');
        updata.data = {}
        updata.data.excel = JSON.parse(tables);

        console.log(updata);
        localStorage.setItem('updata', JSON.stringify(updata));
    };
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}