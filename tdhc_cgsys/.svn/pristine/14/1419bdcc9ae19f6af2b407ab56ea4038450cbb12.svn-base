///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！//////// 主任查询合同功能页面//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
var updata = {};
let TP_CGCONTRACTST_C_ARRALLYORN = []; //用于数据集合,对应字段含义为
let TP_CGCONTRACTMT_C_TRANSWAY = []; //用于数据集合,对应字段含义为
let TP_CGCONTRACTST_C_CHECKYORN = []; //用于数据集合,对应字段含义为
let TP_CGCONTRACTST_C_STATE = []; //用于数据集合,对应字段含义为
let TP_CGCONTRACTMT_C_CHECKWAY = []; //用于数据集合,对应字段含义为
let TP_CGORDERMT_USER = []
let TP_wanchengxiala = []
let TP_fukuangxiala = [] 	
let S1S21addIns;
let C0041addIns;
let M1S11addIns;
let C0031addIns;
let C0051addIns;
let C0021addIns;
let S1S22addIns;
let S1S31addIns;
let S1S41addIns;
let S1S51addIns;
let C0011addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let tabledataS4 = []; //用于接收表格数据源
let tabledataS5 = []; //用于接收表格数据源
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
//let yanshoufangshi = []
let yunshufangshi = []
let fukuanfangshi = []
let wanchengzhuangtai = []
let shifoudaoqi = []
let supplier = []
let yujidaohuoshuoming = []
let zfzt = []
let shdd = []
//let cgy = []
let jlcgy = []
console.log(jlcgy)
let dhqk = []
let kpxx = []
let qdgs = []
let fkqk = []
let cgbm = []
let outForm;
let addGang = []
let connum = []
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
//            {
//                dataField: 'startTime',
//                label: {
//                    text: '开始时间'
//                },
//                editorType: "dxDateBox",
//                editorOptions: {
//                    width: "100%",
//                    type: "date",
//                    displayFormat: 'yyyy-MM-dd',
//                    value: new Date(),
//                },
//            },
//            {
//                dataField: 'endTime',
//                label: {
//                    text: '结束时间'
//                },
//                editorType: "dxDateBox",
//                editorOptions: {
//                    width: "100%",
//                    type: "date",
//                    displayFormat: 'yyyy-MM-dd',
//                    value: new Date(),
//                },
//            },
        ]
    }).dxForm('instance')
    //完成对查询条件的自动生成
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
                dataField: 'cConnum',
                caption: '合同号',
                alignment: 'center',	
            },
            {
                dataField: 'cGoodsname',
                caption: '货物名称',
                alignment: 'center',
            },
            {
            	dataField: 'cCategory',
            	caption: '物资类别',
            	alignment: 'center',
            },
            {
            	dataField: 'cSpec',
            	caption: '规格型号',
            	alignment: 'center',
            },
            {
            	dataField: 'cSum',
            	caption: '数量',
            	alignment: 'center',
            },
            {
            	dataField: 'cNuit',
            	caption: '单位',
            	alignment: 'center',
            },
            {
            	dataField: 'cPrice',
            	caption: '单价',
            	alignment: 'center',
            },
            {
            	dataField: 'cSumprice',
            	caption: '含税总价',
            	alignment: 'center',
            },
            {
            	dataField: 'cRemark',
            	caption: '备注',
            	alignment: 'center',
            },
            
        ]
    });
   
    ////////////////////////////////////////////////////
    ////生成按钮层//////////////////////////////////////
    ////////////////////////////////////////////////////
    $('#operateFormM1S1').dxForm({
        width: '100%',
        colCount: 200,

        items: [
        	{
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
                        addIns.option('title', '添加')
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
                        addIns.option('title', '修改');
                        addIns.show();
                        M1S11_Updatefun()
                        M1S11addIns.option('formData', rowsData)
//                        M1S11addIns.getEditor('cConnum').option('value',rowsData.cConnum);
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
                        msg.data.contractlist = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        //////console.log(msg)
                        
                        var result = DevExpress.ui.dialog.confirm("您确定要删除合同吗?", "删除确认");
                    	result.done(function (dialogResult) {
                    		if (dialogResult) {
                    			cake.Ui.LoadPanel.show()
                        
                        
		                        $.ajax({
		                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbContract/M1S11D'),
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
            	name: 'M1S11DR',
            	itemType: 'button',
            	buttonOptions: {
            		icon: 'save',
            		text: '批量导入',
            		onClick: function() {
            			importPopup.show();
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
        initLoad2()
        function initLoad2() {
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
                success: function(result) {
                    result.data.forEach(item => {
                        kpxx.push(item);
                    });
                },
                error: function() {
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
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_CONMT/NUM"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                	if(result.data==null){
                		
                	}else{
                		result.data.forEach(item => {
                			connum.push(item);
                		});
                	}
                },
                error: function() {
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
                    result.data.forEach(item => {
                        wanchengzhuangtai.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad5()
        function initLoad5() {
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
                success: function(result) {
                    //////console.log(result)
                    result.data.forEach(item => {
                        shifoudaoqi.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad6()
        function initLoad6() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_CONMT/SUPPLIER"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                	if(result.data==null){
                		
                	}else{
                		result.data.forEach(item => {
                			supplier.push(item);
                		});
                	}
                },
                error: function() {
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
                    "cItemid": "YJDHSM"
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                    //////console.log(result)
                    result.data.forEach(item => {
                        yujidaohuoshuoming.push(item);
                    });
                },
                error: function() {
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
                    "cItemid": "ZFZT"
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                    //////console.log(result)
                    result.data.forEach(item => {
                        zfzt.push(item);
                    });
                },
                error: function() {
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
                    "cItemid": "SHDD"
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                    result.data.forEach(item => {
                        shdd.push(item);
                    });
                },
                error: function() {
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
                    "cItemid": "CGY"
                }
            };
            //主任及其下属员工
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon2"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    result.data.forEach(item => {
                        jlcgy.push(item);
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
        				"cItemid": "YANS"
        			}
        	};
        	$.ajax({
        		type: "post",
        		url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
        		data: JSON.stringify(msg),
        		contentType: "application/json",
        		dataType: "json",
        		success: function(result) {
        			result.data.forEach(item => {
        				dhqk.push(item);
        			});
        		},
        		error: function() {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
        initLoad12()
        function initLoad12() {
        	msg = {
        			ver: "53cc62f6122a436083ec083eed1dc03d",
        			session: "42f5c0d7178148938f4fda29460b815a",
        			tag: {},
        			data: {
        				"cItemid": "QDGS"
        			}
        	};
        	$.ajax({
        		type: "post",
        		url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
        		data: JSON.stringify(msg),
        		contentType: "application/json",
        		dataType: "json",
        		success: function(result) {
        			result.data.forEach(item => {
        				qdgs.push(item);
        			});
        		},
        		error: function() {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
        initLoad13()
        function initLoad13() {
        	msg = {
        			ver: "53cc62f6122a436083ec083eed1dc03d",
        			session: "42f5c0d7178148938f4fda29460b815a",
        			tag: {},
        			data: {
        				"cItemid": "FKQK"
        			}
        	};
        	$.ajax({
        		type: "post",
        		url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
        		data: JSON.stringify(msg),
        		contentType: "application/json",
        		dataType: "json",
        		success: function(result) {
        			result.data.forEach(item => {
        				fkqk.push(item);
        			});
        		},
        		error: function() {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
//        initLoad14()
//        function initLoad14() {
//            msg = {
//                ver: "53cc62f6122a436083ec083eed1dc03d",
//                session: "42f5c0d7178148938f4fda29460b815a",
//                tag: {},
//                data: {
//                    "cItemid": "CGY"
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
//                        cgy.push(item);
//                    });
//                },
//                error: function () {
//                    cake.Ui.LoadPanel.close()
//                }
//            });
//        }
        ////////////////////////////////////////////////////////////////////////////////    
        //寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
        ////////////////////////////////////////////////////////////////////////////////    
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/C0051Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGCONTRACTMT_C_TRANSWAY.splice(0, TP_CGCONTRACTMT_C_TRANSWAY.length);
                data.data.cgH001C005.forEach(item => TP_CGCONTRACTMT_C_TRANSWAY.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/C0011Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGCONTRACTST_C_ARRALLYORN.splice(0, TP_CGCONTRACTST_C_ARRALLYORN.length);
                data.data.cgH001C001.forEach(item => TP_CGCONTRACTST_C_ARRALLYORN.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/C0041Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGCONTRACTMT_C_CHECKWAY.splice(0, TP_CGCONTRACTMT_C_CHECKWAY.length);
                data.data.cgH001C004.forEach(item => TP_CGCONTRACTMT_C_CHECKWAY.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/C0021Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGCONTRACTST_C_CHECKYORN.splice(0, TP_CGCONTRACTST_C_CHECKYORN.length);
                data.data.cgH001C002.forEach(item => TP_CGCONTRACTST_C_CHECKYORN.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/C0031Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {

                TP_CGCONTRACTST_C_STATE.splice(0, TP_CGCONTRACTST_C_STATE.length);
                data.data.cgH001C003.forEach(item => TP_CGCONTRACTST_C_STATE.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        // 完成状态下拉框
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/H001WCZT'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {

                TP_wanchengxiala.splice(0, TP_wanchengxiala.length);
                data.data.forEach(item => TP_wanchengxiala.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        // 是/否验收:下拉框
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/SUPPLIER'), //请求的url地址
//            dataType: 'json', //返回格式为json              
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
//            type: 'post', //请求方式 get 或者post ,            
//            contentType: 'application/json',
//            success: function(data) {
//                supplier.splice(0, supplier.length);
//                data.data.forEach(item => supplier.push(item));
//            },
//            error: function() {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//            }
//        })
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
                //////console.log(TP_CGORDERMT_USER)
//                searchdataFormM1.getEditor('cSw10').option('value', get_user());
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    function get_user() {
        let matchedItem1 = TP_CGORDERMT_USER.find(item => item.userName != "");
        let matchedItem = jlcgy.find(item => item.cSubitemdes == TP_CGORDERMT_USER[0].userName);
        if (matchedItem == null || matchedItem == undefined) {
            return null;
        } else {
            //////console.log(matchedItem.cSubitemid)
            return matchedItem.cSubitemid;
        }
    }

    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {
            }
        };
        msg.data.contract = searchdataFormM1.option('formData');
        console.log(msg)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbContract/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
            	////console.log(data)
            	let sel = data.msg;
            	let select;
            	select = data.data;
            	console.log(select)
            	if (data.errcode == 0) {
//                    DevExpress.ui.notify(sel, 'success', 3000);
                } else {
                    DevExpress.ui.notify(sel, 'info', 3000);
                }
                if (select == null) {
                    tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
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
    
    
    function M1S11_addfun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
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
                    dataField: 'cGoodsname',
                    label: {
                        text: '货物名称'
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
                	dataField: 'cCategory',
                	label: {
                		text: '物资类别'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cSpec',
                	label: {
                		text: '规格型号'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cSum',
                	label: {
                		text: '数量'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cNuit',
                	label: {
                		text: '单位'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cPrice',
                	label: {
                		text: '单价'
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
                msg.data.contractlist = [M1S11addIns.option('formData')];
                console.log(JSON.stringify(msg))
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbContract/M1S11A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
//                        if(data.errcode == 60){
//                        	DevExpress.ui.notify(select, 'success', 3000);
//                        }
                        if (data.errcode == 0) {
                            M1S11_serDel();
                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'info', 3000);
                        }
                    },
                    error: function() {
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

    function M1S11_Updatefun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
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
                	dataField: 'cGoodsname',
                	label: {
                		text: '货物名称'
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
                	dataField: 'cCategory',
                	label: {
                		text: '物资类别'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cSpec',
                	label: {
                		text: '规格型号'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cSum',
                	label: {
                		text: '数量'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cNuit',
                	label: {
                		text: '单位'
                	},
                	editorOptions: {
                		showClearButton: true,
                	},
                },
                {
                	dataField: 'cPrice',
                	label: {
                		text: '单价'
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
                
                msg.data.contractlist = [M1S11addIns.option('formData')];
                msg.data.contract = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
                //////console.log(msg.data.cgH001M1s1)
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbContract/M1S11U'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if(data.errcode == 60){
                        	DevExpress.ui.notify(select, 'info', 3000);
                        }
                        if (data.errcode == 0) {
                            M1S11_serDel();
                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'info', 3000);
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

    var importPopup = $('#import-content').dxPopup({
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
    					$.ajax({
    						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbContract/ExcelConSt'),
    						type: 'POST',
    						dataType: 'json',
    						contentType: "application/json; charset=utf-8",
    						data: localStorage.getItem('updata'),
    						success: function(data) {
    							console.log(data.errcode)
    							console.log(data.msg)
    							if(data.errcode==0){
	      							DevExpress.ui.notify(data.msg, "success", 5000);
	      							importPopup.hide();
	      							$("#upInput").val("");
    							}else{
    								$("#upInput").val("");
    								DevExpress.ui.notify(data.msg, "info", 7000);
    							}
    							localStorage.clear('updata');
    						},
    						error: function (err) {
    							DevExpress.ui.notify("导入失败", "error", 3000);
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
    		// var tables1 = JSON.stringify(tables.slice(0, 1));
    		// var tables2 = JSON.stringify(tables.slice(2));
    		// // 替换公司信息字段
    		// tables1 = tables1.replace('公司名称', 'cComname');
    		// tables1 = tables1.replace('单据编号', 'cOrdernum');
    		// tables1 = tables1.replace('申请部门', 'cDeptapply');
    		// tables1 = tables1.replace('申请人', 'cManapply');
    		// tables1 = tables1.replace('申请日期', 'cTimeapply');
    		// tables1 = tables1.replace('收单日期', 'cTimetake');
    		// tables1 = tables1.replace('备注', 'cSwo1');
    		// tables1 = tables1.replace('备注', 'cSwo2');
    		// // 替换采购单信息字段
    		// tables2 = tables2.replace(/公司名称/g, 'cNo');
    		// tables2 = tables2.replace(/申请部门/g, 'cTypename');
    		// tables2 = tables2.replace(/单据编号/g, 'cMustneed');
    		// tables2 = tables2.replace(/申请人/g, 'cGoodsname');
    		// tables2 = tables2.replace(/申请日期/g, 'cSpec');
    		// tables2 = tables2.replace(/收单日期/g, 'cUnit');
    		// tables2 = tables2.replace(/备注/g, 'cNum');
    		// tables2 = tables2.replace(/__EMPTY/g, 'cNum');
    		// tables2 = tables2.replace(/cNum_1/g, 'cArrtime');
    		// // 拼接两段数据
    		tables = JSON.stringify(tables);
    		tables = tables.replace(/合同号/g,'cConnum');
//          tables = tables.replace(/签订公司/g,'cCludecom');
          tables = tables.replace(/货物名称/g,'cGoodsname');
          tables = tables.replace(/物资类别/g,'cCategory');
          tables = tables.replace(/规格型号/g,'cSpec');
          tables = tables.replace(/数量/g,'cSum');
          tables = tables.replace(/单位/g,'cNuit');
          tables = tables.replace(/含税单价/g,'cPrice');
          tables = tables.replace(/含税总价/g,'cSumprice');
          tables = tables.replace(/备注/g,'cRemark');
    		updata.data = {
//    				cNo:null,//存档号
//    				cTimeapply:null,//请购日期
//    				cOrdernum:null,//请购单号
//    				cComname:null,//请购项目
//    				cDeptapply:null,//请购部门
//    				cManapply:null,//请购人
//    				cGoodsname:null,//货物名称
//    				cSpec:null,//规格型号
//    				cUnit:null,//单位
//    				cNum:null,//请购数量
//    				cMustneed:null,//采购类型
//    				cSw02:null,//用途说明
//    				cArrtime:null,//需求时间
//    				cRemark:null,//备注
//            		cManor:null
    		};
    		updata.data.contractlist = {}
            updata.data.contractlist = JSON.parse(tables);
            console.log(updata);
            localStorage.setItem('updata', JSON.stringify(updata));
    	};
    	if (rABS) {
    		reader.readAsArrayBuffer(f);
    	} else {
    		reader.readAsBinaryString(f);
    	}
    }
