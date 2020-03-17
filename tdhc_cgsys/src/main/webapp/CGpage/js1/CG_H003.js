///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let S1S21addIns;
let M1S11addIns;
let S2S31addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
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
let yanshoufangshi = []
let yunshufangshi = []
let wanchengzhuangtai = []
let shifoudaoqi = []
let fukuanfangshi = []
let shifouyanshou = []
let cgy = []
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
            lg: 8,
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
            	dataField: 'cSw10',
            	label: {
            		text: '采购员'
            	},
            	editorType: 'dxSelectBox',
            	editorOptions: {
            		//以上完成对没有联动数据源配置
            		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            		dataSource: cgy,
            		valueExpr: 'cSubitemid',
            		displayExpr: 'cSubitemdes',
            		searchEnable: true,
            		showClearButton: true,
            	},
            },
            {
                dataField: 'cSupplier',
                label: {
                    text: '供应商'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
            {
                dataField: 'cState',
                label: {
                    text: '状态'
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
        columns: [
            {
                dataField: 'cConnum',
                caption: '合同号',
            },
            {
                dataField: 'cGettime',
                caption: '取号日期',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
				dataField: 'cSw10',
				caption: '采购员',
				calculateDisplayValue: function (rowData) {
					let matchedItem = cgy.find(item => item.cSubitemid == rowData.cSw10);
					if (matchedItem == null || matchedItem == undefined) {
						return "";
					} else {
						return matchedItem.cSubitemdes;
					}
				}
			},  
            {
            	dataField: 'cSupplier',
            	caption: '供应商',
            },
            {
                dataField: 'cCludecom',
                caption: '签订公司',
            },
            {
                dataField: 'cCludeaddr',
                caption: '签订地点',
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
            	dataField: 'cSw11',
            	caption: '预计到货说明',
            	calculateDisplayValue: function (rowData) {
					let matchedItem = yujidaohuoshuoming.find(item => item.cSubitemid == rowData.cSw11);
					if (matchedItem == null || matchedItem == undefined) {
						return "";
					} else {
						return matchedItem.cSubitemdes;
					}
				}
            },
            {
            	dataField: 'cSw12',
            	caption: '天数',
            },
            {
                dataField: 'cSignstep',
                caption: '签字步骤',
            },
            {
                dataField: 'cCheckway',
                caption: '验收方式',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = yanshoufangshi.find(item => item.cSubitemid == rowData.cCheckway);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cPayway',
                caption: '付款方式',
                 calculateDisplayValue: function (rowData) {

                     let matchedItem = fukuanfangshi.find(item => item.cSubitemid == rowData.cPayway);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cConmoney',
                caption: '合同金额',
            },
            {
                dataField: 'cForinland',
                caption: '传给国外时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cForoutland',
                caption: '国外回传时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cState',
                caption: '状态',
                 calculateDisplayValue: function (rowData) {

                     let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
//            {
//                dataField: 'cTransway',
//                caption: '运输方式',
//                calculateDisplayValue: function (rowData) {
//
//                    let matchedItem = yunshufangshi.find(item => item.cSubitemid == rowData.cTransway);
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
                dataField: 'cOrid',
                caption: '请购单号',
            },
            {
                dataField: 'cConline',
                caption: '合同行号',
            },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
            },
            {
                dataField: 'cConnum',
                caption: '合同号',
            },
            {
                dataField: 'cGoodscase',
                caption: '订货情况',
            },
            {
                dataField: 'cGoodsnum',
                caption: '订货数量',
            },
            {
                dataField: 'cPrice',
                caption: '单价',
            },
            {
                dataField: 'cUnit',
                caption: '单位',
            },
            {
                dataField: 'cSumprice',
                caption: '含税总价',
            },
            {
                dataField: 'cArrgoodstime',
                caption: '到货时间',
            },
            {
                dataField: 'cResiduenum',
                caption: '剩余数量',
            },
            {
                dataField: 'cGroudtotalnum',
                caption: '累计到货量',
            },
//            {
//                dataField: 'cArrgoodsex',
//                caption: '预计到货说明',
//            },
//            {
//                dataField: 'cBeforearrtime',
//                caption: '预计到货时间',
//                dataType: "date",
//                format: "yyyy-MM-dd"
//            },
            {
                dataField: 'cSpec',
                caption: '规格型号',
            },
            {
                dataField: 'cArrallyorn',
                caption: '是/否到齐',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = shifoudaoqi.find(item => item.cSubitemid == rowData.cArrallyorn);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }

            },
            {
                dataField: 'cState',
                caption: '完成状态',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cCheckyorn',
                caption: '是/否验收',
                 calculateDisplayValue: function (rowData) {

                     let matchedItem = shifouyanshou.find(item => item.cSubitemid == rowData.cCheckyorn);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
                dataField: 'cQuadealline',
                caption: '质保期限',
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
    $('#dataGridS3').dxDataGrid({
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
                dataField: 'cConline',
                caption: '合同行号',
            },
            {
                dataField: 'cConnum',
                caption: '合同号',
            },
            {
                dataField: 'cSupplier',
                caption: '供应商',
            },
            {
                dataField: 'cSpec',
                caption: '规格型号',
            },
            {
                dataField: 'cAllnum',
                caption: '总数量',
            },
            {
                dataField: 'cUnit',
                caption: '单位',
            },
            {
                dataField: 'cMoney',
                caption: '内贸金额',
            },
            {
                dataField: 'cRefundrates',
                caption: '出口退税率(%)',
            },
//            {
//                dataField: 'cSaillings',
//                caption: '船次',
//            },
            {
                dataField: 'cCusdetime',
                caption: '报关日期',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cCusdeid',
                caption: '发票',
            },
            {
                dataField: 'cInvtime',
                caption: '发票时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cConnecttime',
                caption: '交接时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cExbacktime',
                caption: '退回复印件时间',
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
                caption: '修改日期',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cRemark',
                caption: '备注',
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
        }, ]
    })
    $('#operateFormS2S3').dxForm({
        width: '100%',
        colCount: 16,
        items: [{
                name: 'S2S31A',
                itemType: 'button',
                buttonOptions: {
                    icon: 'plus',
                    text: '新增',
                    onClick: function() {
                        change = '1';
                        let grid1 = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData1 = grid1.getSelectedRowsData()[0];
                        let selectedRowKeys1 = grid1.getSelectedRowKeys()
                        
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()[0];
                        let selectedRowKeys = grid.getSelectedRowKeys()
                      
                        //脚本执行  
                        if (selectedRowKeys1.length != 1) {
                            DevExpress.ui.notify('请在主表中选择一条要添加的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys.length != 1) {
                            DevExpress.ui.notify('请在子表中选择一条要添加的数据。', 'info', 3000);
                            return;
                        }

                        $('#addmotai').show()
                        addIns = $('#addmotai').dxPopup({
                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
                        }).dxPopup('instance')
                        addIns.option('title', 'CG_H003')
                        addIns.show();
                        S2S31_addfun();
                        S2S31addIns.option('formData', rowsData)
            
                        S2S31addIns.getEditor('cAllnum').option('value',rowsData.cGoodsnum)
                        S2S31addIns.getEditor('cSupplier').option('value',rowsData1.cSupplier)
                        
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
                        let grid = $('#dataGridS3').dxDataGrid('instance');
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
                        addIns.option('title', 'CG_H003');
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
                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
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

                        msg.data.cgH003S2s3 = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                        //console.log.log(msg)
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H003/S2S31D'),
                            dataType: 'json', //返回格式为json   
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                            type: 'post', //请求方式 get 或者post , 
                            contentType: 'application/json',
                            success: function(data) {
                                let select = data.msg
                                if (data.errcode == 0) {
                                    DevExpress.ui.notify('删除成功', 'success', 3000);

                                    S2S31_SSRT();

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
                    "cItemid": "YANS"
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
                    yanshoufangshi = result.data; */

                    result.data.forEach(item => {
                        yanshoufangshi.push(item);
                    });
                 
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
                    "cItemid": "YSFS"
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
                    yunshufangshi = result.data; */

                    result.data.forEach(item => {
                        yunshufangshi.push(item);
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
                    "cItemid": "FKFS"
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
                    fukuanfangshi = result.data;
 */
                    result.data.forEach(item => {
                        fukuanfangshi.push(item);
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
        initLoad5()
        function initLoad5() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "DQZT"
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
                    shifoudaoqi = result.data; */

                    result.data.forEach(item => {
                        shifoudaoqi.push(item);
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
                    "cItemid": "YSZT"
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
                    shifouyanshou = result.data; */

                    result.data.forEach(item => {
                        shifouyanshou.push(item);
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
			// cake.Ui.LoadPanel.show()
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
					/*
					 * //console.log.log(result.data); shifouyanshou = result.data;
					 */

					result.data.forEach(item => {
						cgy.push(item);
					});
					// 
					// globecStlGroup.splice(0, globecStlGroup.length);

					// cake.Ui.LoadPanel.close()
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
        				"cItemid": "YJDHSM"
        			}
        	};
        	$.ajax({
        		type: "post",
        		url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
        		data: JSON.stringify(msg),
        		contentType: "application/json",
        		dataType: "json",
        		success: function (result) {
        			//console.log.log(result)
        			result.data.forEach(item => {
        				yujidaohuoshuoming.push(item);
        			});
        		},
        		error: function () {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
	    $.ajax({
	        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q003/gerUser'), //请求的url地址
	        dataType: 'json', //返回格式为json              
	        async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
	        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
	        type: 'post', //请求方式 get 或者post ,            
	        contentType: 'application/json',
	        success: function(data) {
	            TP_CGORDERMT_USER.splice(0, TP_CGORDERMT_USER.length);
	            TP_CGORDERMT_USER.push(data.data);
	            //console.log.log(TP_CGORDERMT_USER)
	            searchdataFormM1.getEditor('cSw10').option('value', get_user());
	        },
	        error: function() {
	            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
	        }
	    })
	}
	//////////////////////////////////////////////////////////////////////////////////////////////////
	//功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////
	function get_user () {
		let matchedItem1 = TP_CGORDERMT_USER.find(item => item.userName != "");
	    let matchedItem = cgy.find(item => item.cSubitemdes == TP_CGORDERMT_USER[0].userName);
	    if (matchedItem == null || matchedItem == undefined) {
	        return "";
	    } else {
	    	//console.log.log(matchedItem.cSubitemid)
	        return matchedItem.cSubitemid;
	    }
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
            	cgH003M1s1:{
					startTime: new Date(),
					endTime: new Date(),
					cConline   : null,
					cConnum  : null,
					cSupplier   : null,
					cState  : null,
			    }
            }	
        }
		msg.data.cgH003M1s1 = searchdataFormM1.option('formData')

        //开始时间
		let startTime =msg.data.cgH003M1s1.startTime;
		msg.data.cgH003M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

		// 结束时间
		let endTime = msg.data.cgH003M1s1.endTime;
		msg.data.cgH003M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);

        // let searchtiao = searchdataFormM1.option('formData')

        msg.data.cgH003M1s1 = [searchdataFormM1.option('formData')];

        // //console.log.log(msg)

        // let searchtiao = searchdataFormM1.option('formData')
        // msg.data.cgH003M1s1 = [searchdataFormM1.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H003/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                // //console.log.log(data)
                if (data.data == null) {
                    tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    return
                }

                let select;
                select = data.data.cgH003M1s1
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
            S1S21SSRT()
        }

    })

    function S1S21SSRT() {
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        
        msg.data.cgH003S1s2 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        // //console.log.log(msg)
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H003/S1S21Q'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {
                // //console.log.log(data)
                if (data.data == null) {
                    tabledataS2.splice(0, tabledataS2.length);
                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                    return
                }
                let select;
                select = data.data.cgH003S1s2
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


    $('#dataGridS2').dxDataGrid({
        onRowClick: function(e) {
            S2S31_SSRT()
        }

    })

    function S2S31_SSRT() {
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };

    let grid = $('#dataGridS2').dxDataGrid('instance');
        
   
        msg.data.cgH003S2s3 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();

     


        //console.log.log(msg)
                    
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H003/S2S31Q'),
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
                select = data.data.cgH003S2s3
                tabledataS3.splice(0, tabledataS3.length);
                select.forEach(item => tabledataS3.push(item));
                $('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
                $('#dataGridS3').dxDataGrid('instance').deselectAll()
                $('#dataGridS3').dxDataGrid('instance').refresh()
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }

    function S2S31_addfun() {
        S2S31addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cConline',
                    label: {
                        text: '合同行号'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly:true,
                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cAllnum',
                    label: {
                        text: '总数量'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cUnit',
                    label: {
                        text: '单位'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cSupplier',
                    label: {
                        text: '供应商'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cMoney',
                    label: {
                        text: '内贸金额'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cRefundrates',
                    label: {
                        text: '出口退税率(%)'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cCusdetime',
                    label: {
                        text: '报关日期'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
//                {
//                    dataField: 'cSaillings',
//                    label: {
//                        text: '船次'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
////                    validationRules: [{
////                            type: 'required',
////                            message: '必填！'
////                        },
////                        {
////                            type: 'stringLength',
////                            max: 20,
////                            min: 0,
////                            message: '长度超限，最长为20！'
////                        },
////                    ]
//                },
                {
                    dataField: 'cCusdeid',
                    label: {
                        text: '发票'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cInvtime',
                    label: {
                        text: '发票时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
                {
                    dataField: 'cConnecttime',
                    label: {
                        text: '交接时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
                {
                    dataField: 'cExbacktime',
                    label: {
                        text: '退回复印件时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
                {
                    dataField: 'cId',
                    label: {
                        text: '发票主键'
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
                //console.log.log(S2S31addIns.option('formData').cConnecttime)

                var ss = toString(S2S31addIns.option('formData').cConnecttime)

                //console.log.log(ss)
                msg.data.cgH003S2s3 = [S2S31addIns.option('formData')];
                //console.log.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H003/S2S31A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {

                            S2S31_SSRT();

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

    function S2S31_Updatefun() {
        S2S31addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cConline',
                    label: {
                        text: '合同行号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cAllnum',
                    label: {
                        text: '总数量'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cUnit',
                    label: {
                        text: '单位'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cSupplier',
                    label: {
                        text: '供应商'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cMoney',
                    label: {
                        text: '内贸金额'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cRefundrates',
                    label: {
                        text: '出口退税率(%)'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cCusdetime',
                    label: {
                        text: '报关日期'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
//                {
//                    dataField: 'cSaillings',
//                    label: {
//                        text: '船次'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
////                    validationRules: [{
////                            type: 'required',
////                            message: '必填！'
////                        },
////                        {
////                            type: 'stringLength',
////                            max: 20,
////                            min: 0,
////                            message: '长度超限，最长为20！'
////                        },
////                    ]
//                },
                {
                    dataField: 'cCusdeid',
                    label: {
                        text: '发票'
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
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为20！'
//                        },
//                    ]
                },
                {
                    dataField: 'cInvtime',
                    label: {
                        text: '发票时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
                {
                    dataField: 'cConnecttime',
                    label: {
                        text: '交接时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
                {
                    dataField: 'cExbacktime',
                    label: {
                        text: '退回复印件时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
//                    validationRules: [{
//                        type: 'required',
//                        message: '必填！'
//                    }, ]
                },
                {
                    dataField: 'cId',
                    label: {
                        text: '发票主键'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为20！'
//                    }, ]
                },
                {
                    dataField: 'cRemark',
                    label: {
                        text: '备注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function() {
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
                msg.data.cgH003S2s3 = [S2S31addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H003/S2S31U'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {

                            S2S31_SSRT();

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



    //Script ------------------------------------





           

})