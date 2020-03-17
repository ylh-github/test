///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let TP_CGAUTHORITY_C_ENABLED = []; //用于数据集合,对应字段含义为
let M1S13addIns;
let S1S21addIns;
let M1S11addIns;
let M1S12addIns;
let S1S22addIns;
let S1S23addIns;
let C0011addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let adddata = {}; //添加按钮需要的数据源
let addIns; //增加操作时候的模态框实例

let factory_selectde= [];

//设置模态框的属性
if (addIns == null) {
    addIns = $('#addmotai ').dxPopup({
        'visible': false, //设置属性不可见
        height: 300, //设置高度
        width: 450, //设置宽度
    }).dxPopup('instance');
}


let haha = [
    // { value: '0', description: '启用' },
    // { value: '1', description: '禁用' }

]
let change = ''; //区分增加和修改的状态,1为增加;2为修改
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
            md: 2,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [{
                dataField: 'cItemid',
                label: {
                    text: '数据项目ID'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
            {
                dataField: 'cItemdes',
                label: {
                    text: '数据项目描述'
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
                dataField: 'cItemid',
                caption: '数据项目ID',
            },
            {
                dataField: 'cItemdes',
                caption: '数据项目描述',
            },
            {
                dataField: 'cOrder',
                caption: '排序',
            },
            {
                dataField: 'cGroup',
                caption: '分组',
            },
            {
                dataField: 'cEnabled',
                caption: '启用状态',
                calculateDisplayValue: function (rowData) {

                let matchedItem = haha.find(item => item.cSubitemid == rowData.cEnabled);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
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
                dataField: 'cItemid',
                caption: '数据项目ID',
            },
            {
                dataField: 'cItemdes',
                caption: '数据项目描述',
            },
            {
                dataField: 'cSubitemid',
                caption: '数据子项ID',
            },
            {
                dataField: 'cSubitemdes',
                caption: '数据子项描述',
            },
            {
                dataField: 'cValue',
                caption: '联系方式',
            },
            {
                dataField: 'cSw01',
                caption: '主任',
            },
            {
            	dataField: 'cSw02',
            	caption: '经理',
            },
            {
            	dataField: 'cSw03',
            	caption: '副总经理',
            },
            {
            	dataField: 'cSw04',
            	caption: '采购助理',
            },
            {
            	dataField: 'cSw05',
            	caption: '扩展值6',
            },
            {
                dataField: 'cGroup',
                caption: '分组',
            },
            {
                dataField: 'cOrder',
                caption: '排序',
            },
            {
                dataField: 'cEnabled',
                caption: '启用状态',
               
                calculateDisplayValue: function (rowData) {

                let matchedItem = haha.find(item => item.cSubitemid == rowData.cEnabled);

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
                    text: '添加',
                    onClick: function() {
                        change = '1';
                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_A001')
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
                        addIns.option('title', 'CG_A001');
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

                        msg.data.cgA001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        // //console.log.log(msg)
                        
                        var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                   
                        //console.log(JSON.stringify(requestData,null,4));
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/M1S11D'),
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
                            cake.Ui.LoadPanel.close()
                        })
                        
                        
                    }
                }
            },
            {
                name: 'M1S12MSG',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '启用',
                    onClick: function() {
                        change = '2'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000); //zsq   请选择一条要修改的数据。改为 请选择一条要启用的数据。
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000); //zsq    一次只能选择一条要修改的数据。一次只能选择一条要启用的数据。
                            return;
                        }
                        M1S12_Msgfun()
                    }
                }
            },
            {
                name: 'M1S13MSG',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '禁用',
                    onClick: function() {
                        change = '2'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0]
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请选择一条要禁用的数据。', 'info', 3000); //zsq   请选择一条要修改的数据。改为 请选择一条要禁用的数据。
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要禁用的数据。', 'info', 3000); //zsq    一次只能选择一条要修改的数据。一次只能选择一条要禁用的数据。   
                            return;
                        }
                        M1S13_Msgfun()
                    }
                }
            },
        ]
    })
    $('#operateFormS1S2').dxForm({
        width: '100%',
        colCount: 16,
        items: [{
                name: 'S1S21A',
                itemType: 'button',
                buttonOptions: {
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
                            DevExpress.ui.notify('请在左边主表选择一条要添加的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要添加的数据。', 'info', 3000);
                            return;
                        }
                        //zsq  这一整段没有判断 这是加过来的-----------------------------------------------------------------------------------------------
                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_A001')
                        addIns.show();
                        S1S21_addfun();
                        S1S21addIns.option('formData', rowsData)

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
                        addIns.option('title', 'CG_A001');
                        addIns.show();
                        // 调用模态框函数    
                        // updatafun()    
                        S1S21_Updatefun()
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
                        //前后端统一叫'tscLtrawbin' 

                        msg.data.cgA001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                        //console.log.log(msg)
                        
                        var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "删除确认");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                  
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/S1S21D'),
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
                name: 'S1S22MSG',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '启用',
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
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
                            return;
                        }
                        S1S22_Msgfun()
                    }
                }
            },
            {
                name: 'S1S23MSG',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '禁用',
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
                        if (selectedRowKeys.length > 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
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
                    // //console.log.log(result.data);
                    // haha = result.data;

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
        
        
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/C0011Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGAUTHORITY_C_ENABLED.splice(0, TP_CGAUTHORITY_C_ENABLED.length);
                data.data.cgA001C001.forEach(item => TP_CGAUTHORITY_C_ENABLED.push(item));
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
            data: {}
        };
        let searchtiao = searchdataFormM1.option('formData')
        msg.data.cgA001M1s1 = [searchdataFormM1.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/M1S11Q'),
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
                select = data.data.cgA001M1s1
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

    function M1S11_addfun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cItemid',
                    label: {
                        text: '数据项目ID'
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
                // 	{
                // 		dataField:'cId',
                // 		label:{
                // 			text:'数据字典主键'
                // 		},
                //     editorOptions: {
                //     showClearButton: true,
                // 				},
                // validationRules: [		{
                // 	type: 'stringLength',max:40,min:0,
                // 	message: '长度超限，最长为40！'
                // },		]
                // 			},   //数据字典主键 不在添加模态框显示
                {
                    dataField: 'cItemdes',
                    label: {
                        text: '数据项目描述'
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
                    dataField: 'cOrder',
                    label: {
                        text: '排序'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'numeric',
                        message: '请输入数字！',
                    }, ]
                },
                {
                    dataField: 'cGroup',
                    label: {
                        text: '分组'
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
                    dataField: 'cEnabled',
                    label: {
                        text: '启用状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGAUTHORITY_C_ENABLED,
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
                            max: 10,
                            min: 0,
                            message: '长度超限，最长为10！'
                        },
                    ]
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
                msg.data.cgA001M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/M1S11A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            M1S11_serDel();

                            DevExpress.ui.notify('数据添加成功', 'success', 3000); //zsq 数据保存成功 改  数据添加成功
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
                    dataField: 'cItemid',
                    label: {
                        text: '数据项目ID'
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
                // {
                //     dataField: 'cId',
                //     label: {
                //         text: '数据字典主键'
                //     },
                //     editorOptions: {
                //         showClearButton: true,
                //     },
                //     validationRules: [{
                //         type: 'stringLength',
                //         max: 40,
                //         min: 0,
                //         message: '长度超限，最长为40！'
                //     }, ]
                // },
                {
                    dataField: 'cItemdes',
                    label: {
                        text: '数据项目描述'
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
                    dataField: 'cOrder',
                    label: {
                        text: '排序'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'numeric',
                        message: '请输入数字！',
                    }, ]
                },
                {
                    dataField: 'cGroup',
                    label: {
                        text: '分组'
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
                    dataField: 'cEnabled',
                    label: {
                        text: '启用状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGAUTHORITY_C_ENABLED,
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
                            max: 10,
                            min: 0,
                            message: '长度超限，最长为10！'
                        },
                    ]
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
                msg.data.cgA001M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/M1S11U'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            M1S11_serDel();

                            DevExpress.ui.notify('数据修改成功', 'success', 3000); //数据保存成功 改 数据修改成功       
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
    function M1S12_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.cgA001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        msg.data.cgA001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/M1S12MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                
                M1S11_serDel();//zsq M1S12_serDel()  改为  M1S11_serDel()
                S1S21_SSRT()//zsq  刷新右边的表    
                DevExpress.ui.notify('数据启用成功', 'success', 3000); // zsq 数据保存成功    改   数据启用成功        

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
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
        msg.data.cgA001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        msg.data.cgA001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/M1S13MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                 M1S11_serDel();//zsq M1S13_serDel();  改为  M1S11_serDel()
                    S1S21_SSRT()//zsq  刷新右边的表   
                DevExpress.ui.notify('数据禁用成功', 'success', 3000); //zsq 数据保存成功    改   数据禁用成功  

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
            S1S21_SSRT()     //S1S21SSRT() 改为 S1S21_SSRT() 
        }

    })

    function S1S21_SSRT() {  //zsq   S1S21SSRT()   改为   S1S21_SSRT()  
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.cgA001S1s2 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        //console.log.log(msg.data)
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/S1S21Q'),
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
                select = data.data.cgA001S1s2
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

    function S1S21_addfun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cItemid',
                    label: {
                        text: '数据项目ID'
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
                    dataField: 'cItemdes',
                    label: {
                        text: '数据项目描述'
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
                    dataField: 'cSubitemid',
                    label: {
                        text: '数据子项ID'
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
                    dataField: 'cSubitemdes',
                    label: {
                        text: '数据子项描述'
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
                    dataField: 'cValue',
                    label: {
                        text: '联系方式'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                    ]
                },
                {
                	dataField: 'cSw01',
                	label: {
                		text: '主任'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw02',
                	label: {
                		text: '经理'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw03',
                	label: {
                		text: '副总经理'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw04',
                	label: {
                		text: '采购助理'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw05',
                	label: {
                		text: '扩展值6'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                    dataField: 'cGroup',
                    label: {
                        text: '分组'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                    ]
                },
                {
                    dataField: 'cOrder',
                    label: {
                        text: '排序'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'numeric',
                        message: '请输入数字！',
                    }, ]
                },
                {
                    dataField: 'cEnabled',
                    label: {
                        text: '启用状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGAUTHORITY_C_ENABLED,
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
                            max: 10,
                            min: 0,
                            message: '长度超限，最长为10！'
                        },
                    ]
                },
                // {
                //     dataField: 'cId',
                //     label: {
                //         text: '数据字典主键'
                //     },
                //     editorOptions: {
                //         showClearButton: true,
                //     },
                //     validationRules: [{
                //         type: 'stringLength',
                //         max: 40,
                //         min: 0,
                //         message: '长度超限，最长为40！'
                //     }, ]
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
                msg.data.cgA001S1s2 = [S1S21addIns.option('formData')];
                //console.log.log(msg.data)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/S1S21A'),
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

    function S1S21_Updatefun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cItemid',
                    label: {
                        text: '数据项目ID'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                    ]
                },
                {
                    dataField: 'cItemdes',
                    label: {
                        text: '数据项目描述'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                    ]
                },
                {
                    dataField: 'cSubitemid',
                    label: {
                        text: '数据子项ID'
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
                    dataField: 'cSubitemdes',
                    label: {
                        text: '数据子项描述'
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
                    dataField: 'cValue',
                    label: {
                        text: '联系方式'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                    ]
                },
                {
                	dataField: 'cSw01',
                	label: {
                		text: '主任'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw02',
                	label: {
                		text: '经理'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw03',
                	label: {
                		text: '副总经理'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw04',
                	label: {
                		text: '采购助理'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                	dataField: 'cSw05',
                	label: {
                		text: '扩展值6'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                	validationRules: [
                		]
                },
                {
                    dataField: 'cGroup',
                    label: {
                        text: '分组'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                    ]
                },
                {
                    dataField: 'cOrder',
                    label: {
                        text: '排序'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'numeric',
                        message: '请输入数字！',
                    }, ]
                },
                {
                    dataField: 'cEnabled',
                    label: {
                        text: '启用状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGAUTHORITY_C_ENABLED,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                    ]
                },
                // {
                //     dataField: 'cId',
                //     label: {
                //         text: '数据字典主键'
                //     },
                //     editorOptions: {
                //         showClearButton: true,
                //     },
                //     validationRules: [{
                //         type: 'stringLength',
                //         max: 40,
                //         min: 0,
                //         message: '长度超限，最长为40！'
                //     }, ]
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
                msg.data.cgA001S1s2 = [S1S21addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/S1S21U'),
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
    //代码需要重新定义 
    function S1S22_Msgfun() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.cgA001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/S1S22MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                //M1S11_serDel()//zsq  左边的表刷新
                S1S21_SSRT()//S1S22_SSRT(); 改为 S1S21_SSRT()
                DevExpress.ui.notify('数据保存成功', 'success', 3000);

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
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
        msg.data.cgA001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/S1S23MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                //M1S11_serDel()//zsq  左边的表刷新
                S1S21_SSRT()//S1S22_SSRT(); 改为 S1S21_SSRT()
                DevExpress.ui.notify('数据保存成功', 'success', 3000);

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