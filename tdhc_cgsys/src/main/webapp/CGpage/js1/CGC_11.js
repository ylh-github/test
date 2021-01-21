///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let M2S21addIns;
let M3S31addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let searchdataM2; //每个查询条件form的数据
let searchdataFormM2; //每个查询条件form的实例
let searchdataM3; //每个查询条件form的数据
let searchdataFormM3; //每个查询条件form的实例var contextMenuItems = [                        { text: '选择', icon: 'dx-icon-add' },  ];
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

    //var userId='CGC_11_websocket';
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
    //var data = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M1S11","tbName":"TB_CGCLAUSEDATA","dataId":"A"},{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M2S21","tbName":"TB_CGCLAUSEDATA","dataId":"A"},{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M3S31","tbName":"TB_CGCLAUSEDATA","dataId":"A"},]']
    //send(data)
    //};
    //websocket.onmessage = function(evnt) {
    //var jsons = eval('(' + evnt.data + ')');
    //var result = DevExpress.ui.dialog.confirm(jsons.dataType+'数据有更新,需要刷新吗？','T1温馨提示:CGC_11');
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
                lg: 2,
                md: 3,
                sm: 2,
                xs: 1,
            },
            //所有查询条件为一组的代码段
            itemType: 'group',
            items: [{
                    dataField: 'cItemdesTbCgclausedata',
                    label: {
                        text: '合同描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                },
                {
                    dataField: 'cItemidTbCgclausedata',
                    label: {
                        text: '合同编码'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                }
            ]
        }).dxForm('instance')
        //完成对查询条件的自动生成
        //以下为查询form的代码
    searchdataFormM2 = $('#searchFormM2').dxForm({
            deferRendering: false,

            formData: searchdataM2,
            ////当参数小于三个时为五个,大于等于三时统一乘二
            ////王晶晶给改为自适应编码
            colCountByScreen: {
                lg: 2,
                md: 3,
                sm: 2,
                xs: 1,
            },
            //所有查询条件为一组的代码段
            itemType: 'group',
            items: [{
                    dataField: 'cFaitemdesTbCgclausedata',
                    label: {
                        text: '大条款描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                },
                {
                    dataField: 'cFaitemidTbCgclausedata',
                    label: {
                        text: '大条款编码'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                }
            ]
        }).dxForm('instance')
        //完成对查询条件的自动生成
        //以下为查询form的代码
    searchdataFormM3 = $('#searchFormM3').dxForm({
            deferRendering: false,

            formData: searchdataM3,
            ////当参数小于三个时为五个,大于等于三时统一乘二
            ////王晶晶给改为自适应编码
            colCountByScreen: {
                lg: 3,
                md: 3,
                sm: 2,
                xs: 1,
            },
            //所有查询条件为一组的代码段
            itemType: 'group',
            items: [{
                    dataField: 'cFaitemdesTbCgclausedata',
                    label: {
                        text: '父项描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                    }
                },
                {
                    dataField: 'cFaitemidTbCgclausedata',
                    label: {
                        text: '父项ID'
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

    //合同类型操作按钮
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
                    icon: 'plus',
                    text: '添加',
                    onClick: function() {
                        change = '1';
                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CGC_11')
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
                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 300);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            // DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CGC_11');
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
                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 300);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        //前后端统一叫'tscLtrawbin' 

                        msg.data.cgc11M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        console.log(msg.data.cgc11M1s1);
                        console.log(JSON.stringify(msg));
                        M1S11D_serDel_Judgment();
                        if (M1S11D_serDel_mark != 'M1S11D_success') {} else {


                            var result = DevExpress.ui.dialog.confirm("您确定要删除该合同类型的所有信息吗?", "删除确认");
                            result.done(function(dialogResult) {
                                if (dialogResult) {
                                    cake.Ui.LoadPanel.show()

                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M1S11D'),
                                        dataType: 'json', //返回格式为json   
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                        type: 'post', //请求方式 get 或者post , 
                                        contentType: 'application/json',
                                        success: function(data) {
                                            let select = data.msg
                                            if (data.errcode == 0) {
                                                DevExpress.ui.notify(data.msg, 'success', 300);
                                                M1S11_serDel();
                                                M2S21_serDel();
                                                M3S31_serDel();

                                                //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M1S11","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                                //send(websocketData)

                                            } else {
                                                DevExpress.ui.notify(data.msg, 'warning', 300);
                                            }
                                        },
                                        error: function() {
                                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 300);
                                        }
                                    })

                                }
                                cake.Ui.LoadPanel.close()
                            })
                        }
                    }
                }
            },
        ]
    })

    //大条款的操作按钮
    $('#operateFormM2S2').dxForm({
        width: '100%',
        colCount: 200,

        items: [
            // {
            //     name: 'M1S11Q',
            //     itemType: 'button',
            //     buttonOptions: {
            //         height: "auto",
            //         width: "auto",
            //         icon: "search",
            //         text: '查询',
            //         onClick: function() {
            // 			M2S21_serDel();
            //         }
            //     }
            // },
            {
                name: 'M2S21Q',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: 'plus',
                    text: '添加',
                    onClick: function() {
                        change = '1';
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0];
                        //zsq  ------------------------------------------------------------
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请先选择一条对应的合同类型！！', 'info', 300);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要添加的数据。', 'info', 300);
                            return;
                        }
                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CGC_11')
                        addIns.show();
                        M2S21_addfun();
                        M2S21addIns.option('formData', rowsData)
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
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择要修改大条款对应的合同类型！！！。', 'info', 300);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            // DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CGC_11');
                        addIns.show();
                        // 调用模态框函数    
                        // updatafun()    
                        M2S21_Updatefun()
                        M2S21addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'M1S11D',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",

                    icon: 'remove',
                    text: '删除',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                            //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 300);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        //前后端统一叫'tscLtrawbin' 
                        msg.data.cgc11M2s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                        msg.data.cgc11M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        console.log(msg)
                        M2S21D_serDel_Judgment();
                        if (M2S21D_serDel_mark != 'M2S21D_success') {} else {
                            var result = DevExpress.ui.dialog.confirm("您确定要删除该大条款以及对应的小条款信息吗?", "删除确认");
                            result.done(function(dialogResult) {
                                if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M2S21D'),
                                        dataType: 'json', //返回格式为json   
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                        type: 'post', //请求方式 get 或者post , 
                                        contentType: 'application/json',
                                        success: function(data) {
                                            let select = data.msg
                                            if (data.errcode == 0) {
                                                M2S21_serDel();
                                                M3S31_serDel();
                                                DevExpress.ui.notify(data.msg, 'success', 1000);

                                                //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M2S21","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                                //send(websocketData)

                                            } else {
                                                DevExpress.ui.notify(data.msg, 'warning', 1000);
                                            }
                                        },
                                        error: function() {
                                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                                        }
                                    })
                                }
                                cake.Ui.LoadPanel.close()
                            })
                        }
                    }
                }
            },
        ]
    })

    $('#operateFormM3S3').dxForm({
        width: '100%',
        colCount: 200,

        items: [
            // {
            //     name: 'M1S11Q',
            //     itemType: 'button',
            //     buttonOptions: {
            //         height: "auto",
            //         width: "auto",
            //         icon: "search",
            //         text: '查询',
            //         onClick: function() {
            // 			M3S31_serDel();
            //         }
            //     }
            // },
            {
                name: 'M3S31Q',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: 'plus',
                    text: '添加',
                    onClick: function() {
                        change = '1';
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0];
                        //zsq  ------------------------------------------------------------
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请先选择一条对应的大条款！！', 'info', 1000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要添加的数据。', 'info', 1000);
                            return;
                        }
                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CGC_11')
                        addIns.show();
                        M3S31_addfun();
                        M3S31addIns.option('formData', rowsData)
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
                        let grid = $('#dataGridS3').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 1000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            // DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);    
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', 'CGC_11');
                        addIns.show();
                        // 调用模态框函数    
                        // updatafun()    
                        M3S31_Updatefun()
                        M3S31addIns.option('formData', rowsData)
                    }
                }
            },
            {
                name: 'M1S11D',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",

                    icon: 'remove',
                    text: '删除',
                    onClick: function() {
                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                            //脚本执行  
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 1000);
                            return;
                        }
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        //前后端统一叫'tscLtrawbin' 

                        msg.data.cgc11M3s3 = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                        console.log(msg)
                        M3S31D_serDel_Judgment();
                        if (M3S31D_serDel_mark != 'M3S31D_success') {} else {
                            var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
                            result.done(function(dialogResult) {
                                if (dialogResult) {
                                    cake.Ui.LoadPanel.show()

                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M3S31D'),
                                        dataType: 'json', //返回格式为json   
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                                        type: 'post', //请求方式 get 或者post , 
                                        contentType: 'application/json',
                                        success: function(data) {
                                            let select = data.msg
                                            if (data.errcode == 0) {
                                                DevExpress.ui.notify(data.msg, 'success', 1000);
                                                S2S31_SSRT();
                                                //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M3S31","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                                //send(websocketData)

                                            } else {
                                                DevExpress.ui.notify(data.msg, 'warning', 1000);
                                            }
                                        },
                                        error: function() {
                                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                                        }
                                    })

                                }
                                cake.Ui.LoadPanel.close()
                            })
                        }
                    }
                }
            },

        ]
    })


    ////////////////////////////////////
    //////表格属性生成/////////////////)
    ////////////////////////////////////
    var dataGridS1columns = [
        //				{ 
        //					dataField: 'cOrderTbCgclausedata',
        //					caption: '排序',
        //				},
        {
            dataField: 'cItemidTbCgclausedata',
            caption: '合同类型编码',
        },
        {
            dataField: 'cItemdesTbCgclausedata',
            caption: '合同类型描述',
        },

        {
            dataField: 'cSw01TbCgclausedata',
            caption: '扩展字段1',
        },
        {
            dataField: 'cSw02TbCgclausedata',
            caption: '扩展字段2',
        },
        {
            dataField: 'cSw03TbCgclausedata',
            caption: '扩展字段3',
        },
        {
            dataField: 'cSw04TbCgclausedata',
            caption: '扩展字段4',
        },
        //				
        //				{ 
        //					dataField: 'cIdTbCgclausedata',
        //					caption: '主键',
        //				},

        //				{ 
        //					dataField: 'cEnabledTbCgclausedata',
        //					caption: '启用状态',
        //				},

        //				{ 
        //					dataField: 'cGroupTbCgclausedata',
        //					caption: '分组',
        //				},
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
        height: '100%',
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'multiple'
                //				mode:'single'
        },

        columns: dataGridS1columns,

        // onToolbarPreparing: function(e) {
        //     operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

        // }
    }).dxDataGrid('instance');
    var dataGridS2columns = [{
            dataField: 'cFaitemidTbCgclausedata',
            caption: '大条款编码',
        },
        {
            dataField: 'cFaitemdesTbCgclausedata',
            caption: '大条款描述',
        },
        //				{ 
        //					dataField: 'cOrderTbCgclausedata',
        //					caption: '排序',
        //				},

        //				{ 
        //					dataField: 'cEnabledTbCgclausedata',
        //					caption: '启用状态',
        //				},
        //				{ 
        //					dataField: 'cValueTbCgclausedata',
        //					caption: '扩展值',
        //				},
        {
            dataField: 'cSw05TbCgclausedata',
            caption: '扩展字段5',
        },
        {
            dataField: 'cSw06TbCgclausedata',
            caption: '扩展字段6',
        },

        //				{ 
        //					dataField: 'cGroupTbCgclausedata',
        //					caption: '分组',
        //				},
        {
            dataField: 'cSw07TbCgclausedata',
            caption: '扩展字段7',
        },
        {
            dataField: 'cSw08TbCgclausedata',
            caption: '扩展字段8',
        },
        {
            dataField: 'cSw09TbCgclausedata',
            caption: '扩展字段9',
        },
    ]

    $('#dataGridS2').dxDataGrid({
        deferRendering: false,

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
        noDataText: '无数据',
        //允许脚本编写     
        height: '100%',
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'multiple'
        },

        columns: dataGridS2columns,

        // onToolbarPreparing: function(e) {
        //     operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

        // }
    }).dxDataGrid('instance');
    var dataGridS3columns = [{
            dataField: 'cSubitemidTbCgclausedata',
            caption: '小条款编码',
            width: 80,
        },
        {
            dataField: 'cSubitemdesTbCgclausedata',
            caption: '小条款描述',
            width: 550,
        },
        {
            dataField: 'cValueTbCgclausedata',
            caption: '扩展值',
        },
        //				{ 
        //					dataField: 'cOrderTbCgclausedata',
        //					caption: '排序',
        //				},
        //				{ 
        //					dataField: 'cGroupTbCgclausedata',
        //					caption: '分组',
        //				},
        //				{ 
        //					dataField: 'cEnabledTbCgclausedata',
        //					caption: '启用状态',
        //				},
        //				{ 
        //					dataField: 'cSw10TbCgclausedata',
        //					caption: '扩展字段10',
        //				},
        //				{ 
        //					dataField: 'cSw11TbCgclausedata',
        //					caption: '扩展字段11',
        //				},
        //				{ 
        //					dataField: 'cSw12TbCgclausedata',
        //					caption: '扩展字段12',
        //				},
        //				
        //				{ 
        //					dataField: 'cSw13TbCgclausedata',
        //					caption: '扩展字段13',
        //				},
        //				{ 
        //					dataField: 'cSw14TbCgclausedata',
        //					caption: '扩展字段14',
        //				},

    ]

    $('#dataGridS3').dxDataGrid({
        deferRendering: false,

        dataSource: tabledataS3,
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
        height: '100%',
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'multiple'
        },

        columns: dataGridS3columns,

        // onToolbarPreparing: function(e) {
        //     operateFormS3buts.forEach(item => e.toolbarOptions.items.push(item));

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
    //合同类型查询
    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let searchtiao = searchdataFormM1.option('formData')
        msg.data.cgc11M1s1 = [searchdataFormM1.option('formData')];
        M1S11Q_serDel_Judgment();
        console.log(msg.data.cgc11M1s1);
        console.log(JSON.stringify(msg));
        if (M1S11Q_serDel_mark != 'M1S11Q_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M1S11Q'),
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
                    select = data.data.cgc11M1s1
                    tabledataS1.splice(0, tabledataS1.length);
                    select.forEach(item => tabledataS1.push(item));
                    $('#dataGridS1').dxDataGrid('instance').deselectAll()
                    $('#dataGridS1').dxDataGrid('instance').refresh()
                    DevExpress.ui.notify(data.msg, 'success', 3000);
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }
    //合同类型添加	
    function M1S11_addfun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cItemidTbCgclausedata',
                    label: {
                        text: '合同类型编码'
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
                            max: 200,
                            min: 0,
                            message: '长度超限，最长为200！'
                        },
                    ]
                },
                {
                    dataField: 'cItemdesTbCgclausedata',
                    label: {
                        text: '合同类型描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, {
                        type: 'stringLength',
                        max: 200,
                        min: 0,
                        message: '长度超限，最长为200！'
                    }, ]
                },
                //			{
                //				dataField:'cGroupTbCgclausedata',
                //				label:{
                //					text:'分组'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cOrderTbCgclausedata',
                //				label:{
                //					text:'排序'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:100,min:0,
                //			message: '长度超限，最长为100！'
                //		},		]
                //					},
                //			{
                //				dataField:'cEnabledTbCgclausedata',
                //				label:{
                //					text:'启用状态'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cValueTbCgclausedata',
                //				label:{
                //					text:'扩展值'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw01TbCgclausedata',
                //				label:{
                //					text:'扩展字段1'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw02TbCgclausedata',
                //				label:{
                //					text:'扩展字段2'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw03TbCgclausedata',
                //				label:{
                //					text:'扩展字段3'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cIdTbCgclausedata',
                //				label:{
                //					text:'主键'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                let validateResult = e.validationGroup.validate();
                if (!validateResult.isValid) {
                    DevExpress.ui.notify('数据不符合规范', 'info', 1000);
                    return;
                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                msg.data.cgc11M1s1 = [M1S11addIns.option('formData')];
                console.log(msg.data.cgc11M1s1);
                console.log(JSON.stringify(msg));
                //change等于1为添加         
                M1S11A_serDel_Judgment();
                if (M1S11A_serDel_mark != 'M1S11A_success') {} else {
                    $.ajax({
                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M1S11A'),
                        dataType: 'json', //返回格式为json           
                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                        type: 'post', //请求方式 get 或者post ,         
                        contentType: 'application/json',
                        success: function(data) {
                            let select = data.msg
                            if (data.errcode == 0) {
                                DevExpress.ui.notify(data.msg, 'success', 1000)
                                    /*var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M1S11","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                    send(websocketData)*/
                            } else {
                                DevExpress.ui.notify(data.msg, 'error', 1000)
                                return;
                            }
                            M1S11_serDel();
                            addIns.hide()

                        },
                        error: function() {
                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                            // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                            //e.cancel=true;         
                        }
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

    //合同类型修改
    function M1S11_Updatefun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cItemidTbCgclausedata',
                    label: {
                        text: '合同类型编码'
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
                {
                    dataField: 'cItemdesTbCgclausedata',
                    label: {
                        text: '合同类型描述'
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

                {
                    dataField: 'cSw01TbCgclausedata',
                    label: {
                        text: '扩展字段1'
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
                {
                    dataField: 'cSw02TbCgclausedata',
                    label: {
                        text: '扩展字段2'
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
                {
                    dataField: 'cSw03TbCgclausedata',
                    label: {
                        text: '扩展字段3'
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
                {
                    dataField: 'cSw04TbCgclausedata',
                    label: {
                        text: '扩展字段4'
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
                msg.data.cgc11M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                M1S11U_serDel_Judgment();
                if (M1S11U_serDel_mark != 'M1S11U_success') {} else {


                    var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                    result.done(function(dialogResult) {
                        if (dialogResult) {
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M1S11U'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function(data) {
                                    let select = data.msg
                                    if (data.errcode == 0) {
                                        DevExpress.ui.notify(data.msg, 'success', 1000)
                                            //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M1S11","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                            //send(websocketData)
                                    } else {
                                        DevExpress.ui.notify(data.msg, 'error', 1000)
                                        return;
                                    }
                                    M1S11_serDel();

                                    addIns.hide()

                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
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

    //大条款项的查询
    function M2S21_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        //		let searchtiao = searchdataFormM2.option('formData')    
        //		msg.data.cgc11M2s2 = [searchdataFormM2.option('formData')];
        let grid = $('#dataGridS1').dxDataGrid('instance');
        //		let rowsData = grid.getSelectedRowsData()[0]     
        let selectedRowKeys = grid.getSelectedRowKeys()
        if (selectedRowKeys.length >= 1) {
            S1S21_SSRT();
            return;
        }
        M2S21Q_serDel_Judgment();
        if (M2S21Q_serDel_mark != 'M2S21Q_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M2S21Q'),
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
                    select = data.data.cgc11M2s2
                    tabledataS2.splice(0, tabledataS2.length);
                    select.forEach(item => tabledataS2.push(item));
                    $('#dataGridS2').dxDataGrid('instance').deselectAll()
                    $('#dataGridS2').dxDataGrid('instance').refresh()
                    DevExpress.ui.notify(data.msg, 'success', 1000);
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }

    //大条款项的添加
    function M2S21_addfun() {
        M2S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cItemidTbCgclausedata',
                    label: {
                        text: '项目ID'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 200,
                        min: 0,
                        message: '长度超限，最长为200！'
                    }, ]
                },
                {
                    dataField: 'cItemdesTbCgclausedata',
                    label: {
                        text: '项目描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 200,
                        min: 0,
                        message: '长度超限，最长为200！'
                    }, ]
                },
                {
                    dataField: 'cFaitemidTbCgclausedata',
                    label: {
                        text: '大条款编码'
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
                {
                    dataField: 'cFaitemdesTbCgclausedata',
                    label: {
                        text: '大条款描述'
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
                //			{
                //				dataField:'cSw01TbCgclausedata',
                //				label:{
                //					text:'扩展字段1'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw02TbCgclausedata',
                //				label:{
                //					text:'扩展字段2'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw03TbCgclausedata',
                //				label:{
                //					text:'扩展字段3'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw04TbCgclausedata',
                //				label:{
                //					text:'扩展字段4'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                {
                    dataField: 'cSw05TbCgclausedata',
                    label: {
                        text: '扩展字段5'
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
                {
                    dataField: 'cSw06TbCgclausedata',
                    label: {
                        text: '扩展字段6'
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
                {
                    dataField: 'cSw07TbCgclausedata',
                    label: {
                        text: '扩展字段7'
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
                {
                    dataField: 'cSw08TbCgclausedata',
                    label: {
                        text: '扩展字段8'
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
                {
                    dataField: 'cSw09TbCgclausedata',
                    label: {
                        text: '扩展字段9'
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
                //			{
                //				dataField:'cGroupTbCgclausedata',
                //				label:{
                //					text:'分组'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cOrderTbCgclausedata',
                //				label:{
                //					text:'排序'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:100,min:0,
                //			message: '长度超限，最长为100！'
                //		},		]
                //					},
                //			{
                //				dataField:'cEnabledTbCgclausedata',
                //				label:{
                //					text:'启用状态'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cValueTbCgclausedata',
                //				label:{
                //					text:'扩展值'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},

            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                let validateResult = e.validationGroup.validate();
                if (!validateResult.isValid) {
                    DevExpress.ui.notify('数据不符合规范', 'info', 1000);
                    return;
                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                msg.data.cgc11M2s2 = [M2S21addIns.option('formData')];

                console.log(msg.data.cgc11M2s2);
                console.log(JSON.stringify(msg));
                //change等于1为添加         
                M2S21A_serDel_Judgment();
                if (M2S21A_serDel_mark != 'M2S21A_success') {} else {

                    //
                    $.ajax({
                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M2S21A'),
                        dataType: 'json', //返回格式为json           
                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                        type: 'post', //请求方式 get 或者post ,         
                        contentType: 'application/json',
                        success: function(data) {
                            let select = data.msg
                            if (data.errcode == 0) {
                                DevExpress.ui.notify(data.msg, 'success', 1000)
                                    //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M2S21","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                    //send(websocketData)
                                M2S21_serDel();
                            } else {
                                DevExpress.ui.notify(data.msg, 'error', 1000);
                                addIns.hide();
                                return;
                            }
                            addIns.hide();
                        },
                        error: function() {
                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                            // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                            //e.cancel=true;         
                        }
                    })
                    cake.Ui.LoadPanel.close();
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

    //条款修改
    function M2S21_Updatefun() {
        M2S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cItemidTbCgclausedata',
                    label: {
                        text: '合同类型编码'
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
                {
                    dataField: 'cItemdesTbCgclausedata',
                    label: {
                        text: '合同类型描述'
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
                {
                    dataField: 'cFaitemidTbCgclausedata',
                    label: {
                        text: '大条款编码'
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
                {
                    dataField: 'cFaitemdesTbCgclausedata',
                    label: {
                        text: '大条款描述'
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
                {
                    dataField: 'cSw05TbCgclausedata',
                    label: {
                        text: '扩展字段5'
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
                {
                    dataField: 'cSw06TbCgclausedata',
                    label: {
                        text: '扩展字段6'
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
                {
                    dataField: 'cSw07TbCgclausedata',
                    label: {
                        text: '扩展字段7'
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
                {
                    dataField: 'cSw08TbCgclausedata',
                    label: {
                        text: '扩展字段8'
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
                {
                    dataField: 'cSw09TbCgclausedata',
                    label: {
                        text: '扩展字段9'
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
                //			{
                //				dataField:'cSubitemidTbCgclausedata',
                //				label:{
                //					text:'子项ID'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSubitemdesTbCgclausedata',
                //				label:{
                //					text:'子项描述'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cGroupTbCgclausedata',
                //				label:{
                //					text:'分组'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cOrderTbCgclausedata',
                //				label:{
                //					text:'排序'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:100,min:0,
                //			message: '长度超限，最长为100！'
                //		},		]
                //					},
                //			{
                //				dataField:'cEnabledTbCgclausedata',
                //				label:{
                //					text:'启用状态'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cValueTbCgclausedata',
                //				label:{
                //					text:'扩展值'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                let validateResult = e.validationGroup.validate();
                if (!validateResult.isValid) {
                    DevExpress.ui.notify('数据不符合规范', 'info', 1000);
                    return;
                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                msg.data.cgc11M2s2 = [M2S21addIns.option('formData')];
                //change等于1为添加         
                M2S21U_serDel_Judgment();
                if (M2S21U_serDel_mark != 'M2S21U_success') {

                } else {


                    var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                    result.done(function(dialogResult) {
                        if (dialogResult) {
                            cake.Ui.LoadPanel.show()
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M2S21U'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function(data) {
                                    let select = data.msg
                                    if (data.errcode == 0) {
                                        DevExpress.ui.notify(data.msg, 'success', 1000)
                                            //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M2S21","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                            //send(websocketData)
                                    } else {
                                        DevExpress.ui.notify(data.msg, 'error', 1000)
                                        return;
                                    }
                                    M2S21_serDel();

                                    addIns.hide()

                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
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
    //小条款的查询
    function M3S31_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        //		let searchtiao = searchdataFormM3.option('formData')    
        //		msg.data.cgc11M3s3 = [searchdataFormM3.option('formData')];
        let grid = $('#dataGridS2').dxDataGrid('instance');
        //		let rowsData = grid.getSelectedRowsData()[0]     
        let selectedRowKeys = grid.getSelectedRowKeys()
        if (selectedRowKeys.length >= 1) {
            S2S31_SSRT();
            return;
        }
        M3S31Q_serDel_Judgment();
        if (M3S31Q_serDel_mark != 'M3S31Q_success') {} else {
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M3S31Q'),
                dataType: 'json', //返回格式为json      
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                type: 'post', //请求方式 get 或者post ,       
                contentType: 'application/json',
                success: function(data) {

                    if (data.data == null) {
                        tabledataS3.splice(0, tabledataS3.length);
                        $('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
                        return
                    }

                    let select;
                    select = data.data.cgc11M3s3
                    tabledataS3.splice(0, tabledataS3.length);
                    select.forEach(item => tabledataS3.push(item));
                    $('#dataGridS3').dxDataGrid('instance').deselectAll()
                    $('#dataGridS3').dxDataGrid('instance').refresh()
                    DevExpress.ui.notify(data.msg, 'success', 1000);
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }
    //小条款的增加
    function M3S31_addfun() {
        M3S31addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                //			{
                //				dataField:'cSw10TbCgclausedata',
                //				label:{
                //					text:'扩展字段10'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw11TbCgclausedata',
                //				label:{
                //					text:'扩展字段11'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw12TbCgclausedata',
                //				label:{
                //					text:'扩展字段12'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw13TbCgclausedata',
                //				label:{
                //					text:'扩展字段13'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw14TbCgclausedata',
                //				label:{
                //					text:'扩展字段14'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw15TbCgclausedata',
                //				label:{
                //					text:'扩展字段15'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw16TbCgclausedata',
                //				label:{
                //					text:'扩展字段16'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw17TbCgclausedata',
                //				label:{
                //					text:'扩展字段17'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw18TbCgclausedata',
                //				label:{
                //					text:'扩展字段18'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw19TbCgclausedata',
                //				label:{
                //					text:'扩展字段19'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw20TbCgclausedata',
                //				label:{
                //					text:'扩展字段20'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cIdTbCgclausedata',
                //				label:{
                //					text:'主键'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cItemidTbCgclausedata',
                //				label:{
                //					text:'项目ID'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cItemdesTbCgclausedata',
                //				label:{
                //					text:'项目描述'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                {
                    dataField: 'cFaitemidTbCgclausedata',
                    label: {
                        text: '大条款编码'
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
                {
                    dataField: 'cFaitemdesTbCgclausedata',
                    label: {
                        text: '大条款描述'
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
                {
                    dataField: 'cSubitemidTbCgclausedata',
                    label: {
                        text: '小条款编码'
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
                {
                    dataField: 'cSubitemdesTbCgclausedata',
                    label: {
                        text: '小条款描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    //		validationRules: [		{
                    //			type: 'stringLength',max:200,min:0,
                    //			message: '长度超限，最长为200！'
                    //		},		]

                },
                {
                    dataField: 'cGroupTbCgclausedata',
                    label: {
                        text: '分组'
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
                {
                    dataField: 'cOrderTbCgclausedata',
                    label: {
                        text: '排序'
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
                //			{
                //				dataField:'cEnabledTbCgclausedata',
                //				label:{
                //					text:'启用状态'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cValueTbCgclausedata',
                //				label:{
                //					text:'扩展值'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cDrTbCgclausedata',
                //				label:{
                //					text:'删除标识'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:1,min:0,
                //			message: '长度超限，最长为1！'
                //		},		]
                //					},
                //			{
                //				dataField:'cCreatetimeTbCgclausedata',
                //				label:{
                //					text:'创建时间'
                //				},
                //      editorType: 'dxDateBox',
                //      editorOptions: {
                //      displayFormat: 'yyyy-MM-dd',
                //      type: 'datetime',
                //						},
                //		validationRules: [		]
                //					}
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                let validateResult = e.validationGroup.validate();
                if (!validateResult.isValid) {
                    DevExpress.ui.notify('数据不符合规范', 'info', 1000);
                    return;
                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                let grid = $('#dataGridS2').dxDataGrid('instance');
                msg.data.cgc11M2s2 = grid.getSelectedRowsData();
                msg.data.cgc11M3s3 = [M3S31addIns.option('formData')];

                //change等于1为添加         
                M3S31A_serDel_Judgment();
                if (M3S31A_serDel_mark != 'M3S31A_success') {} else {
                    $.ajax({
                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M3S31A'),
                        dataType: 'json', //返回格式为json           
                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                        type: 'post', //请求方式 get 或者post ,         
                        contentType: 'application/json',
                        success: function(data) {
                            let select = data.msg
                            if (data.errcode == 0) {
                                DevExpress.ui.notify(data.msg, 'success', 1000)
                                    //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M3S31","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                    //send(websocketData)
                            } else {
                                DevExpress.ui.notify(data.msg, 'error', 1000);
                                addIns.hide();
                                return;
                            }
                            M3S31_serDel();
                            addIns.hide();
                        },
                        error: function() {
                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                            // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                            //e.cancel=true;         
                        }
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

    //小条款修改	
    function M3S31_Updatefun() {
        M3S31addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                //			{
                //				dataField:'cCreaterTbCgclausedata',
                //				label:{
                //					text:'创建人'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cTimestampTbCgclausedata',
                //				label:{
                //					text:'时间戳'
                //				},
                //      editorType: 'dxDateBox',
                //      editorOptions: {
                //      displayFormat: 'yyyy-MM-dd',
                //      type: 'datetime',
                //						},
                //		validationRules: [		]
                //					},
                //			{
                //				dataField:'cModifierTbCgclausedata',
                //				label:{
                //					text:'修改人'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cModifydateTbCgclausedata',
                //				label:{
                //					text:'修改时间'
                //				},
                //      editorType: 'dxDateBox',
                //      editorOptions: {
                //      displayFormat: 'yyyy-MM-dd',
                //      type: 'datetime',
                //						},
                //		validationRules: [		]
                //					},
                //			{
                //				dataField:'cSw01TbCgclausedata',
                //				label:{
                //					text:'扩展字段1'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw02TbCgclausedata',
                //				label:{
                //					text:'扩展字段2'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw03TbCgclausedata',
                //				label:{
                //					text:'扩展字段3'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw04TbCgclausedata',
                //				label:{
                //					text:'扩展字段4'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw05TbCgclausedata',
                //				label:{
                //					text:'扩展字段5'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw06TbCgclausedata',
                //				label:{
                //					text:'扩展字段6'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw07TbCgclausedata',
                //				label:{
                //					text:'扩展字段7'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw08TbCgclausedata',
                //				label:{
                //					text:'扩展字段8'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw09TbCgclausedata',
                //				label:{
                //					text:'扩展字段9'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw10TbCgclausedata',
                //				label:{
                //					text:'扩展字段10'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw11TbCgclausedata',
                //				label:{
                //					text:'扩展字段11'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw12TbCgclausedata',
                //				label:{
                //					text:'扩展字段12'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw13TbCgclausedata',
                //				label:{
                //					text:'扩展字段13'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw14TbCgclausedata',
                //				label:{
                //					text:'扩展字段14'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw15TbCgclausedata',
                //				label:{
                //					text:'扩展字段15'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw16TbCgclausedata',
                //				label:{
                //					text:'扩展字段16'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw17TbCgclausedata',
                //				label:{
                //					text:'扩展字段17'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw18TbCgclausedata',
                //				label:{
                //					text:'扩展字段18'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw19TbCgclausedata',
                //				label:{
                //					text:'扩展字段19'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cSw20TbCgclausedata',
                //				label:{
                //					text:'扩展字段20'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cIdTbCgclausedata',
                //				label:{
                //					text:'主键'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cItemidTbCgclausedata',
                //				label:{
                //					text:'项目ID'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cItemdesTbCgclausedata',
                //				label:{
                //					text:'项目描述'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                {
                    dataField: 'cFaitemidTbCgclausedata',
                    label: {
                        text: '大条款编码'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 200,
                        min: 0,
                        message: '长度超限，最长为200！'
                    }, ]
                },
                {
                    dataField: 'cFaitemdesTbCgclausedata',
                    label: {
                        text: '大条款描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                        type: 'stringLength',
                        max: 200,
                        min: 0,
                        message: '长度超限，最长为200！'
                    }, ]
                },
                {
                    dataField: 'cSubitemidTbCgclausedata',
                    label: {
                        text: '小条款编码'
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
                {
                    dataField: 'cSubitemdesTbCgclausedata',
                    label: {
                        text: '小条款描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    //		validationRules: [		{
                    //			type: 'stringLength',max:200,min:0,
                    //			message: '长度超限，最长为200！'
                    //		},		]
                },
                //			{
                //				dataField:'cGroupTbCgclausedata',
                //				label:{
                //					text:'分组'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cOrderTbCgclausedata',
                //				label:{
                //					text:'排序'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:100,min:0,
                //			message: '长度超限，最长为100！'
                //		},		]
                //					},
                //			{
                //				dataField:'cEnabledTbCgclausedata',
                //				label:{
                //					text:'启用状态'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cValueTbCgclausedata',
                //				label:{
                //					text:'扩展值'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:200,min:0,
                //			message: '长度超限，最长为200！'
                //		},		]
                //					},
                //			{
                //				dataField:'cDrTbCgclausedata',
                //				label:{
                //					text:'删除标识'
                //				},
                //      editorOptions: {
                //      showClearButton: true,
                //						},
                //		validationRules: [		{
                //			type: 'stringLength',max:1,min:0,
                //			message: '长度超限，最长为1！'
                //		},		]
                //					},
                //			{
                //				dataField:'cCreatetimeTbCgclausedata',
                //				label:{
                //					text:'创建时间'
                //				},
                //      editorType: 'dxDateBox',
                //      editorOptions: {
                //      displayFormat: 'yyyy-MM-dd',
                ////      type: 'datetime',
                ////						},
                //		validationRules: [		]
                //					}
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                let validateResult = e.validationGroup.validate();
                if (!validateResult.isValid) {
                    DevExpress.ui.notify('数据不符合规范', 'info', 1000);
                    return;
                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                msg.data.cgc11M3s3 = [M3S31addIns.option('formData')];
                //change等于1为添加         
                M3S31U_serDel_Judgment();
                if (M3S31U_serDel_mark != 'M3S31U_success') {} else {

                    var result = DevExpress.ui.dialog.confirm("您确定要修改吗?", "修改确认");
                    result.done(function(dialogResult) {
                        if (dialogResult) {
                            cake.Ui.LoadPanel.show()
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/M3S31U'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function(data) {
                                    let select = data.msg
                                    if (data.errcode == 0) {
                                        DevExpress.ui.notify(data.msg, 'success', 1000)
                                            //var websocketData = ['[{"objId":"CGC_11_websocket","funName":"CGC_11","funType":"M3S31","tbName":"TB_CGCLAUSEDATA","dataId":"AUD"}]']
                                            //send(websocketData)
                                    } else {
                                        DevExpress.ui.notify(data.msg, 'error', 1000)
                                        return;
                                    }
                                    S2S31_SSRT();

                                    addIns.hide()

                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
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

    //合同类型查询大条款 联动
    $('#dataGridS1').dxDataGrid({
            onRowClick: function(e) {
                S1S21_SSRT() //S1S21SSRT() 改为 S1S21_SSRT() 
            }

        })
        //大条款联动小条款
    $('#dataGridS2').dxDataGrid({
        onRowClick: function(e) {
            S2S31_SSRT() //S1S21SSRT() 改为 S1S21_SSRT() 
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
        msg.data.cgc11M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/S1S21Q'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
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
                select = data.data.cgc11M2s2
                tabledataS2.splice(0, tabledataS2.length);
                select.forEach(item => tabledataS2.push(item));
                $('#dataGridS2').dxDataGrid('instance').deselectAll()
                $('#dataGridS2').dxDataGrid('instance').refresh()
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }

    function S2S31_SSRT() { //zsq   S1S21SSRT()   改为   S1S21_SSRT()  
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.cgc11M2s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        console.log(msg.data.cgc11M1s1);
        console.log(JSON.stringify(msg));
        cake.Ui.LoadPanel.show()
            //../../tdhc_cgsys/CGC_11/S2S31Q
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CGC_11/S2S31Q'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {

                if (data.data == null) {
                    tabledataS3.splice(0, tabledataS3.length);
                    $('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
                    return
                }

                let select;
                select = data.data.cgc11M3s3
                tabledataS3.splice(0, tabledataS3.length);
                select.forEach(item => tabledataS3.push(item));
                $('#dataGridS3').dxDataGrid('instance').deselectAll()
                $('#dataGridS3').dxDataGrid('instance').refresh()
                DevExpress.ui.notify(data.msg, 'success', 1000);
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 1000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }




    //Script ------------------------------------
})