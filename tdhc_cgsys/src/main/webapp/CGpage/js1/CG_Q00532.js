///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////

let xxCon; //供方带值
let ss;
let Dup_Item;
let VB_cNum;
let VB_cPrice;
let VB_cSumprice;
let calculation = {};
let tcSupplier;
let ttcSupplier
let addGang = []
let ziGang = []
let addLei = []
let yongtu = []
let pinzhong = []
let pinming = []
let TP_CGORDERST_C_TYPENAME = []
let TP_CGORDERMT_USER = []
///////////////////////////////////////////////////////////////////////////////////////////
let M2S21addIns;
let M1S11addIns;
let S2S31addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let tabledataS3 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let searchdataM2; //每个查询条件form的数据
let searchdataFormM2; //每个查询条件form的实例
let adddata = {}; //添加按钮需要的数据源
let adddata1 = {}; //添加按钮需要的数据源
let addIns; //增加操作时候的模态框实例
let addIns2;
let addIns3;
let addIns2_form;
let cTime = new Date();
let adddatapac = {};
let adddatapo = {};
let adddatapic = {};
let adddatapla = {};
let supperData;
let supperData2;
//设置模态框的属性
if (addIns == null) {
    addIns = $('#addmotai ').dxPopup({
        'visible': false, //设置属性不可见
        height: 300, //设置高度
        width: 450, //设置宽度
    }).dxPopup('instance');
}
if (addIns2 == null) {
    addIns2 = $('#addmotai2').dxPopup({
        'visible': false, //设置属性不可见
        height: 300, //设置高度
        width: 450, //设置宽度
    }).dxPopup('instance');
}
if(addIns3 == null){
	addIns3  = $('#addmotai0').dxPopup({
	    //模态框增加name    
	    width: 200,
	    height: 70
	}).dxPopup('instance'); //增加操作时候的模态框实例
}
let change = ''; //区分增加和修改的状态,1为增加;2为修改
let wanchengzhuangtai = []
let shifoujixu = []
let shenhezhuangtai = []
let tijiaozhuangtai = []
let caigoubumen = []
let caigouyuan = []
let cont_supplier = []; //供应商
let contact_Type = [];//合同类型
let comp_Cludecom = []; //签订公司
let jhqx = []; //交货期限
let jhdd1 = []; //交货地点
let ysdd1 = []; //验收地点
let qdgs = []
let fenpeizhuangtai = []
let caigouzhuangtai = []
let wuzileixing = []
let shenqingbumen = []
let yudengjifalg = []
let yuefen = []
let supplier = [];
let connum = [];
let goodsname = [];
let goodsname2 = [];
let ordernum = [];
let nian = [];
let dhcd=[];
let cDelivdate = [
    {
        id: '0',
        value: '预付款到账之日起*日内。'
    }, {
        id: '1',
        value: '自双方合同盖章生效之日起*日内。'
    }, {
    	id: '2',
    	value: '****年**月**日前。'
    }
]
//查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
window.onload = () => {
    DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
    //console.log('pp');
};
$(function () {
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
        items: [{
                dataField: 'cConnum',
                label: {
                    text: '合同号'
                },
                editorOptions: {
                    showClearButton: true,
                }
                //             	editorType: "dxSelectBox",
                //                editorOptions: {
                //                    dataSource: connum,
                //                    valueExpr: 'cConnum',
                //                    displayExpr: 'cConnum',
                //                    showClearButton: true,
                //                    width: '100%',
                //                    searchEnabled: true,
                //                }
            },
            {
                dataField: 'cGoodsname',
                label: {
                    text: '货物名称'
                },
                editorOptions: {
                    showClearButton: true,
                }
                //	            editorType: "dxSelectBox",
                //	            editorOptions: {
                //	                dataSource: goodsname,
                //	                valueExpr: 'cGoodsname',
                //	                displayExpr: 'cGoodsname',
                //	                showClearButton: true,
                //	                width: '100%',
                //	                searchEnabled: true,
                //	            }
            },
            //        {
            //            dataField: 'cSpec',
            //            label: {
            //                text: '规格型号'
            //            },
            //            editorOptions: {
            //                showClearButton: true,
            //            }
            //        },
//            {
//                dataField: 'cSw10',
//                label: {
//                    text: '采购员'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: caigouyuan,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                }
//            },
//            {
//                dataField: 'cRemark',
//                label: {
//                    text: '特殊合同'
//                },
//                editorOptions: {
//                    showClearButton: true,
//                }
//                //         	editorType: "dxSelectBox",
//                //                editorOptions: {
//                //                    dataSource: connum,
//                //                    valueExpr: 'cConnum',
//                //                    displayExpr: 'cConnum',
//                //                    showClearButton: true,
//                //                    width: '100%',
//                //                    searchEnabled: true,
//                //                }
//            },
        ]
    }).dxForm('instance')
    //完成对查询条件的自动生成
    //以下为查询form的代码
    searchdataFormM2 = $('#searchFormM2').dxForm({
        formData: searchdataM2,
        ////当参数小于三个时为五个,大于等于三时统一乘二
        ////王晶晶给改为自适应编码
        colCountByScreen: {
            lg: 3,
            md: 2,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [
//        	{
//                dataField: 'year',
//                label: {
//                    text: '年'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: nian,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                }
//            },
//            {
//                dataField: 'month',
//                label: {
//                    text: '月份'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: yuefen,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
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
                    value: new Date('2019','00','01'),
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
            {
                dataField: 'cOrdernum',
                label: {
                    text: '请购单号'
                },
                editorOptions: {
                    showClearButton: true,
                }
                //            editorType: "dxSelectBox",
                //            editorOptions: {
                //                dataSource: ordernum,
                //                valueExpr: 'cOrdernum',
                //                displayExpr: 'cOrdernum',
                //                showClearButton: true,
                //                width: '100%',
                //                searchEnabled: true,
                //            }
            },
            {
                dataField: 'cGoodsname',
                label: {
                    text: '货物名称'
                },
                editorOptions: {
                    showClearButton: true,
                }
                // 	            editorType: "dxSelectBox",
                // 	            editorOptions: {
                // 	                dataSource: goodsname2,
                // 	                valueExpr: 'cGoodsname',
                // 	                displayExpr: 'cGoodsname',
                // 	                showClearButton: true,
                // 	                width: '100%',
                // 	                searchEnabled: true,
                // 	            }
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
            //        {
            //            dataField: 'cManapply',
            //            label: {
            //                text: '请购人'
            //            },
            //            editorOptions: {
            //                showClearButton: true,
            //            }
            //        },    
            //        {
            //            dataField: 'cComname',
            //            label: {
            //                text: '请购项目'
            //            },
            //            editorOptions: {
            //                showClearButton: true,
            //            }
            //        },     
            //采购员
//            {
//                dataField: 'cManor',
//                label: {
//                    text: '采购员'
//                },
//                editorType: 'dxSelectBox',
//                editorOptions: {
//                    //以上完成对没有联动数据源配置
//                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                    dataSource: caigouyuan,
//                    valueExpr: 'cSubitemid',
//                    displayExpr: 'cSubitemdes',
//                    searchEnable: true,
//                    showClearButton: true,
//                }
//            },
        ]
    }).dxForm('instance');
 /*//合同信息按钮
    let operateFormM1S1 = [
     	{
     		location: "before",
     		locateInMenu: 'auto',
     		widget: "dxButton",
     		options: {
    			height: "auto",
    			width: "auto",
    			icon: "search",
    			name:'M1S11Q',
    			text: '查询',
    			onClick: function(){
    				 M1S11_serDel();
    				}
    			}
    		},	
     ];*/
    
    $('#operateFormS1S2').dxForm({
        width: '100%',
        colCount: 16,
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
                        before_serDel();
                    }
                }
            },
            {
                name: 'M1S11S',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: "save",
                    text: '添加到待转区',
                    onClick: function() {
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        if (rowsData.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请先查询一条要添加的数据。', 'info', 3000);
                            return;
                        }
                        //选中的值
                        msg.data.contractVoBean = rowsData;
                        ////console.log.log(msg.data.tpCgorderst)
                        //../../tdhc_cgsys/CG_q002/before_serDel
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/S1S21XZ'),
                            dataType: 'json', //返回格式为json      
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                            type: 'post', //请求方式 get 或者post ,       
                            contentType: 'application/json',
                            success: function(data) {
                                let msgstr = data.msg;
                                if (data.errcode == 0) {
                                    before_serDel()
                                    M1S21_serDel()
                                    DevExpress.ui.notify(msgstr, 'success', 3000);
                                } else {
                                    DevExpress.ui.notify(msgstr, 'info', 3000);
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
    //请购物资按钮
 let operateFormS1S2 = [
    	{
    		location: "before",
    		locateInMenu: 'auto',
    		widget: "dxButton",
    		options: {
			height: "auto",
			width: "auto",
			icon: "search",
			name:'M1S11Q',
			text: '查询',
			onClick: function(){
				before_serDel();
				}
			}
		},	
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: "save",
				name:'M1S11S',
				text: '添加到待转区',
				onClick: function(){
					msg = {
				            ver: '53cc62f6122a436083ec083eed1dc03d',
				            session: '42f5c0d7178148938f4fda29460b815a',
				            tag: {},
				            data: {}
				        };
				        let grid = $('#dataGridS1').dxDataGrid('instance');
		                let rowsData = grid.getSelectedRowsData()
		                if (rowsData.length < 1) {
                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                        DevExpress.ui.notify('请先查询一条要添加的数据。', 'info', 3000);
                        return;
		                }
		                //选中的值
		                msg.data.contractVoBean = rowsData;
				        ////console.log.log(msg.data.tpCgorderst)
				        //../../tdhc_cgsys/CG_q002/before_serDel
				        $.ajax({
				            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/S1S21XZ'),
				            dataType: 'json', //返回格式为json      
				            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
				            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				            type: 'post', //请求方式 get 或者post ,       
				            contentType: 'application/json',
				            success: function (data) {
				                let msgstr = data.msg;
				                if (data.errcode == 0) {
				                	before_serDel()
				                	M1S21_serDel()
				                    DevExpress.ui.notify(msgstr, 'success', 3000);
				                }else{
				                	DevExpress.ui.notify(msgstr, 'info', 3000);
				                }
				                
				            },
				            error: function () {
				                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
				            }
				        })
				}
			}
		},	
    ];
 //暂时存放区的按钮
     $('#operateFormS1S3').dxForm({
        width: '100%',
        colCount: 16,
        items: [{
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: "search",
                    text: '查询',
                    onClick: function() {
                        M1S21_serDel();
                    }
                }
            },
            {
                name: 'M1S11S',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: "save",
                    text: '撤回物资',
                    onClick: function() {
    					msg = {
    				            ver: '53cc62f6122a436083ec083eed1dc03d',
    				            session: '42f5c0d7178148938f4fda29460b815a',
    				            tag: {},
    				            data: {}
    				        };		
    				        let grid = $('#dataGridS3').dxDataGrid('instance');
    		                let rowsData = grid.getSelectedRowsData()
    		                if (rowsData.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请先查询一条要撤回的数据。', 'info', 3000);
                            return;
    		                }
    		                //选中的值
    		                msg.data.contractVoBean = rowsData;
    				        ////console.log.log(msg.data.tpCgorderst)
    				        //../../tdhc_cgsys/CG_q002/before_serDel
    				        $.ajax({
    				            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/S1S21CH'),
    				            dataType: 'json', //返回格式为json      
    				            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
    				            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
    				            type: 'post', //请求方式 get 或者post ,       
    				            contentType: 'application/json',
    				            success: function (data) {
    				                let msgstr = data.msg;
    				                if (data.errcode == 0) {
    				                	before_serDel()
    				                	M1S21_serDel()
    				                    DevExpress.ui.notify(msgstr, 'success', 3000);
    				                }else{
    				                	DevExpress.ui.notify(msgstr, 'info', 3000);
    				                }
    				                
    				            },
    				            error: function () {
    				                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
    				            }
    				        })
    				        }
                }
            },
//            {
//                name: 'M1S11S',
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: "save",
//                    text: '模拟合同',
//                    onClick: function() { 
//                    addIns2 = $('#addmotai2').dxPopup({
//                        fullScreen: true
//                    }).dxPopup('instance')
//                    addIns2.option('title', '模拟合同');
//                    addIns2.show();
//                    Update_moni();
//                    addIns2_form.option('formData', new Object())
//                    $('#addmoni2').dxDataGrid('instance').option('dataSource', null);
//                   /* addGang.splice(0, addGang.length);
//                     $('#addmoni2').dxDataGrid('instance').option('dataSource', addGang);*/
//                    // S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
//                    /// $('#addForm2').dxForm('instance').getEditor('cCludecom').option('value', '青山控股集团股');
//                    addIns2_form.getEditor('cCludetime').option('value',new Date());
//                    addIns2_form.getEditor('cDr').option('value',new Date());
//                    let dataGrid = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
//                    $('#addmoni2').dxDataGrid('instance').option('dataSource', dataGrid);
//                    $('#addmoni2').dxDataGrid('instance').refresh();
//                    M1S21_serDel();
//                    }
//                }
//            },
            {
                name: 'M1S11S1',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: "save",
                    text: '动态模拟合同',
                    onClick: function() {
                        $('#addmotai3').css('display','block')
                    	addIns2 = $('#addmotai3').dxPopup({
                            fullScreen: true
                        }).dxPopup('instance')
                        addIns2.option('title', '动态模拟合同');
                        addIns2.show();
                        Update_moni2();
                        addIns2_form.option('formData', new Object())
                        addIns2_form.getEditor('cCludetime').option('value',new Date());
                        addIns2_form.getEditor('cDr').option('value',new Date());
                        // S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
                        /// $('#addForm2').dxForm('instance').getEditor('cCludecom').option('value', '青山控股集团股');
                        $('#contract_type').dxForm('instance').getEditor('cSw10').option('value', get_user());
                        $('#contract_type').dxForm('instance').getEditor('cZqconnum').option('value', null);
                        let dataGrid = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                        $('#addmoni3').dxDataGrid('instance').option('dataSource', dataGrid);
                        $('#addmoni3').dxDataGrid('instance').refresh();
                        $('#addmoni2').dxDataGrid('instance').option('dataSource', null);
                        M1S21_serDel();
                    }
                }
            },
//            {
//                name: 'M1S11_US',
//                itemType: 'button',
//                buttonOptions: {
//                    height: "auto",
//                    width: "auto",
//                    icon: "save",
//                    text: '特殊合同',
//                    onClick: function() {
//                    	change = '2'
//	                    let grid = $('#dataGridS3').dxDataGrid('instance');
//	                    let rowsData = grid.getSelectedRowsData()
//	                    let selectedRowKeys = grid.getSelectedRowKeys()
//	                    if (rowsData.length < 1) {
//	                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//	                        DevExpress.ui.notify('请先查询一条要转合同的数据。', 'info', 3000);
//	                        return;
//	                    }
//	                    if (selectedRowKeys[0].cState == 1) {
//	                        // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//	                        DevExpress.ui.notify('该数据已经录入合同，不能再次录入。', 'info', 3000);
//	                        return;
//	                    }
//	                    addIns = $('#addmotai').dxPopup({
//	                        //模态框增加name    
//	                        width: 1000,
//	                        height: 450
//	                    }).dxPopup('instance')
//	                    addIns.option('title', '转合同');
//	                    addIns.show();
//	                    S1S23_UpdateSpecial()
//	                    S1S23addIns.option('formData', new Object())
//	                    S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
//	                    S1S23addIns.getEditor('cCludetime').option('value', new Date())
//                    }
//                }
//            },
        ]
    })
 let operateFormS1S3 = [
 	{
 		location: "before",
 		locateInMenu: 'auto',
 		widget: "dxButton",
 		options: {
			height: "auto",
			width: "auto",
			icon: "search",
			name:'M1S11Q',
			text: '查询',
			onClick: function(){
				M1S21_serDel();
				}
			}
		},	
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: "save",
				name:'M1S11S',
				text: '撤回物资',
				onClick: function(){
					msg = {
				            ver: '53cc62f6122a436083ec083eed1dc03d',
				            session: '42f5c0d7178148938f4fda29460b815a',
				            tag: {},
				            data: {}
				        };		
				        let grid = $('#dataGridS3').dxDataGrid('instance');
		                let rowsData = grid.getSelectedRowsData()
		                if (rowsData.length < 1) {
                        // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                        DevExpress.ui.notify('请先查询一条要撤回的数据。', 'info', 3000);
                        return;
		                }
		                //选中的值
		                msg.data.contractVoBean = rowsData;
				        ////console.log.log(msg.data.tpCgorderst)
				        //../../tdhc_cgsys/CG_q002/before_serDel
				        $.ajax({
				            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/S1S21CH'),
				            dataType: 'json', //返回格式为json      
				            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
				            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
				            type: 'post', //请求方式 get 或者post ,       
				            contentType: 'application/json',
				            success: function (data) {
				                let msgstr = data.msg;
				                if (data.errcode == 0) {
				                	before_serDel()
				                	M1S21_serDel()
				                    DevExpress.ui.notify(msgstr, 'success', 3000);
				                }else{
				                	DevExpress.ui.notify(msgstr, 'info', 3000);
				                }
				                
				            },
				            error: function () {
				                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
				            }
				        })
				}
			}
		},
//		{
//			location: "before",
//			locateInMenu: 'auto',
//			widget: "dxButton",
//			options: {
//				height: "auto",
//				width: "auto",
//				icon: "save",
//				name:'M1S11S',
//				text: '模拟合同',
//				onClick: function(){
//					 addIns2 = $('#addmotai2').dxPopup({
//                         fullScreen: true
//                     }).dxPopup('instance')
//                     addIns2.option('title', '模拟合同');
//                     addIns2.show();
//                     Update_moni();
//                     addIns2_form.option('formData', new Object())
//                      $('#addmoni2').dxDataGrid('instance').option('dataSource', null);
//                   /*  addGang.splice(0, addGang.length);
//                     $('#addmoni2').dxDataGrid('instance').refresh();*/
//                     // S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
//                     /// $('#addForm2').dxForm('instance').getEditor('cCludecom').option('value', '青山控股集团股');
//                     addIns2_form.getEditor('cCludetime').option('value',new Date());
//                     addIns2_form.getEditor('cDr').option('value',new Date());
////                     addIns2_form.getEditor('cDhcd').option('value',true);
//                     let dataGrid = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
//                     $('#addmoni2').dxDataGrid('instance').option('dataSource', dataGrid);
//                     $('#addmoni2').dxDataGrid('instance').refresh();
//                     M1S21_serDel();
//                    /* dataGrid = null;
//                     //console.log(dataGrid);*/
//				}
//			}
//		},	
		{
			location: "before",
			locateInMenu: 'auto',
			widget: "dxButton",
			options: {
				height: "auto",
				width: "auto",
				icon: "save",
				name:'M1S11S1',
				text: '动态模拟合同',
				onClick: function(){
                    $('#addmotai3').css('display','block')
					addIns2 = $('#addmotai3').dxPopup({
                        fullScreen: true
                    }).dxPopup('instance')
                    addIns2.option('title', '动态模拟合同');
                    addIns2.show();
                    Update_moni2();
                    addIns2_form.option('formData', new Object())
                    addIns2_form.getEditor('cCludetime').option('value',new Date());
//                    addIns2_form.getEditor('cDr').option('value',new Date());
                    $('#addmoni3').dxDataGrid('instance').option('dataSource', null);
                    // S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
                    /// $('#addForm2').dxForm('instance').getEditor('cCludecom').option('value', '青山控股集团股');
//                    $('#contract_type').dxForm('instance').getEditor('cSw10').option('value', get_user());
                    $('#contract_type').dxForm('instance').getEditor('cZqconnum').option('value', null);
                    let dataGrid = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                    $('#addmoni3').dxDataGrid('instance').option('dataSource', dataGrid);
                    $('#addmoni3').dxDataGrid('instance').refresh();
                    M1S21_serDel();
				}
			}
		},
//		{
//	 		location: "before",
//	 		locateInMenu: 'auto',
//	 		widget: "dxButton",
//	 		options: {
//				height: "auto",
//				width: "auto",
//				icon: "save",
//				name:'M1S11_US',
//				text: '特殊合同',
//				onClick: function(){
//					change = '2'
//                        let grid = $('#dataGridS3').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (rowsData.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请先查询一条要转合同的数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys[0].cState == 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('该数据已经录入合同，不能再次录入。', 'info', 3000);
//                            return;
//                        }
//                        addIns = $('#addmotai').dxPopup({
//                            //模态框增加name    
//                            width: 1000,
//                            height: 450
//                        }).dxPopup('instance')
//                        addIns.option('title', '转合同');
//                        addIns.show();
//                        S1S23_UpdateSpecial()
//                        S1S23addIns.option('formData', new Object())
//                        S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
//                        S1S23addIns.getEditor('cCludetime').option('value', new Date())
//					}
//				}
//			},	
 ];
 
    //完成对查询条件的自动生成
    ////////////////////////////////////
    //////表格属性生成/////////////////)
    ////////////////////////////////////
    var	dataGridS1columns=[{
        dataField: 'cOrdernum',
        caption: '请购单号',
        width: 'auto',
        alignment: 'left',
    },
    {
        dataField: 'cGoodsname',
        caption: '物资名称',
        width: 'auto',
        // width: 120,
        alignment: 'left',
    },
    {
        dataField: 'cTypename',
        caption: '特批类型',
        width: 'auto',
        // width: 60,
        alignment: 'left',
    },
    {
        dataField: 'cMustneed',
        caption: '采购类型',
        width: 'auto',
        alignment: 'left',
        calculateDisplayValue: function (rowData) {
            let matchedItem = shifoujixu.find(item => item.cSubitemid == rowData.cMustneed);
            if (matchedItem == null || matchedItem == undefined) {
                return "";
            } else {
                return matchedItem.cSubitemdes;
            }
        }
    },
    {
        dataField: 'cSpec',
        caption: '规格型号',
        width: 'auto',
        alignment: 'left',
    },
    {
        dataField: 'cUnit',
        width: 'auto',
        caption: '单位',
        alignment: 'left',
    },
    {
        dataField: 'cPrice',
        caption: '单价',
        width: 'auto',
        alignment: 'left',
    },
    {
        dataField: 'cNum',
        caption: '订购数量',
        width: 'auto',
        alignment: 'left',
    },
    //            {
    //                dataField: 'cOrdept',
    //                caption: '采购部门',
    //                 calculateDisplayValue: function (rowData) {
    //                     let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cOrdept);
    //                    if (matchedItem == null || matchedItem == undefined) {
    //                        return "";
    //                    } else {
    //                        return matchedItem.cSubitemdes;
    //                    }
    //                }
    //            },
    {
        dataField: 'cManor',
        caption: '采购人',
        width: 'auto',
        alignment: 'left',
        calculateDisplayValue: function (rowData) {

            let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cManor);
            
            if (matchedItem == null || matchedItem == undefined) {
                return "";
            } else {
                return matchedItem.cSubitemdes;
            }

        }
    },
    //            {
    //                dataField: 'cPhone',
    //                caption: '采购人联系方式',
    //            },
    //            {
    //                dataField: 'cCludecom',
    //                caption: '签订公司',
    //            },
    //            {
    //                dataField: 'cSupplier',
    //                caption: '供应商',
    //            },
    {
        dataField: 'cState',
        caption: '预登记状态',
        width: 'auto',
        alignment: 'left',
        calculateDisplayValue: function (rowData) {

            let matchedItem = yudengjifalg.find(item => item.cSubitemid == rowData.cState);

            if (matchedItem == null || matchedItem == undefined) {
                return "";
            } else {
                return matchedItem.cSubitemdes;
            }

        }
    },
    {
    	dataField: 'cSw02',
        caption: '用途说明',
        width: 'auto',
        alignment: 'left',
    },
    {
        dataField: 'cRemark',
        caption: '备注',
        width: 'auto',
        alignment: 'left',
    },
    //            {
    //                dataField: 'cCreater',
    //                caption: '创建人',
    //            },
    //            {
    //                dataField: 'cCreatetime',
    //                caption: '创建时间',
    //                dataType: "date",
    //                format: "yyyy-MM-dd"
    //            },
    //            {
    //                dataField: 'cModifier',
    //                caption: '修改人',
    //            },
    //            {
    //                dataField: 'cModifytime',
    //                caption: '修改时间',
    //                dataType: "date",
    //                format: "yyyy-MM-dd"
    //            },

];
    
    //请购单表
    $('#dataGridS1').dxDataGrid({
    	deferRendering : false, 
        dataSource: tabledataS1,
        columnResizingMode: "widget",
        editing: {
            mode: 'popup',
            //allowUpdating: false     
        },
        columnAutoWidth: true,
        showBorders: true,
        allowColumnResizing: true,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        noDataText: '',
        //允许脚本编写     
        height: 'auto',
        width: '100%',
        //        scrolling: {
        //            mode: 'virtual'
        //        },
        selection: {
            mode: 'multiple'
        },
        loadPanel: {
            enabled: true
        },
        paging: {
            pageSize: 20,
            enabled: true,
        },
        keyDown: true,
        pager: {
            // showPageSizeSelector: true,
            // allowedPageSizes: [5, 10, 20 , 25 ,30],
            showInfo: true,
            showNavigationButtons: true

        },
        columns:dataGridS1columns, 
        onToolbarPreparing: function (e) { 
        	operateFormS1S2.forEach(item => e.toolbarOptions.items.push(item)); 
       } 
    }).dxDataGrid('instance');

    //合同表
    $('#dataGridS2').dxDataGrid({
        dataSource: tabledataS2,
        columnResizingMode: "widget",
        editing: {
            mode: 'popup',
            //allowUpdating: false     
        },
        // keyExpr: 'ID', 
        //keyExpr: 'cSw02',  
        
        columnAutoWidth: true,
        showBorders: true,
        allowColumnResizing: true,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        noDataText: '',
        //允许脚本编写     
        height: '200',
        width: '100%',
        //        scrolling: {
        //            mode: 'virtual'
        //        },
        selection: {
            mode: 'multiple',
            //            showCheckBoxesMode:'always'
        },
        loadPanel: {
            enabled: true
        },
        paging: {
            pageSize: 20,
            enabled: true,
        },
        keyDown: true,
        pager: {
            // showPageSizeSelector: true,
            // allowedPageSizes: [5, 10, 20 , 25 ,30],
            showInfo: true,
            showNavigationButtons: true

        },
        columns: [{
                dataField: 'cConnum',
                caption: '合同号',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cConline',
                caption: '合同行号',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cCludecom',
                caption: '签订公司',
                width: 'auto',
                alignment: 'left',
                
                calculateDisplayValue: function (rowData) {
                    let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cCludecom);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cSignplace',
                caption: '签订地址',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cSw09',
                caption: '送货点',
                width: 'auto',
                alignment: 'left',
                // width: 100,
            },
            {
                dataField: 'cSupplier',
                caption: '供应商',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cRemark',
                caption: '备注',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cConmoney',
                caption: '合同金额',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cPayway',
                caption: '付款方式',
                width: 'auto',
                alignment: 'left',
            },
           
            {
                dataField: 'cCludetime',
                caption: '签订时间',
                width: 'auto',
                alignment: 'left',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cDr',
                caption: '预计到货时间',
                width: 'auto',
                alignment: 'left',
                dataType: "date",
                format: "yyyy-MM-dd"
            },

        ],
        //		onCellClick: function (e) {
        //			if (e.rowType != 'data') {
        //				return;
        //			}
        //			switch (e.column.dataField) {
        //				case 'cSw02':
        //					 $('#dataGridS2').dxDataGrid('instance').selectRows(tabledataS2.filter(item=>item.cSw02==e.value));
        //					break;			
        //					case 'cGoodsname':
        //						 $('#dataGridS2').dxDataGrid('instance').selectRows(tabledataS2.filter(item=>item.cGoodsname==e.value));
        //					break;
        //					case 'cManapply':
        //						 $('#dataGridS2').dxDataGrid('instance').selectRows(tabledataS2.filter(item=>item.cManapply==e.value));
        //					break;
        //					case 'cSpec':
        //						 $('#dataGridS2').dxDataGrid('instance').selectRows(tabledataS2.filter(item=>item.cSpec==e.value));
        //					break;
        //					case 'cComname':
        //						 $('#dataGridS2').dxDataGrid('instance').selectRows(tabledataS2.filter(item=>item.cComname==e.value));
        //					break;
        //					case 'cOrdernum':
        //						 $('#dataGridS2').dxDataGrid('instance').selectRows(tabledataS2.filter(item=>item.cOrdernum==e.value));
        //					break;
        //					default:
        //					break;
        //			}

        //		}

    });
    //请购单表
    $('#dataGridS3').dxDataGrid({
        dataSource: tabledataS3,
        columnResizingMode: "widget",
        editing: {
            mode: 'popup',
            //allowUpdating: false     
        },
        columnAutoWidth: true,
        showBorders: true,
        allowColumnResizing: true,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        noDataText: '',
        //允许脚本编写     
        height: 'auto',
        width: '100%',
        //        scrolling: {
        //            mode: 'virtual'
        //        },
        selection: {
            mode: 'multiple'
        },
        loadPanel: {
            enabled: true
        },
        paging: {
            pageSize: 20,
            enabled: true,
        },
        keyDown: true,
        pager: {
            // showPageSizeSelector: true,
            // allowedPageSizes: [5, 10, 20 , 25 ,30],
            showInfo: true,
            showNavigationButtons: true

        },
        columns: [{
            dataField: 'cOrdernum',
            caption: '请购单号',
            width: 'auto',
            alignment: 'left',
        },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
                // width: 120,
                width: 'auto',
                 alignment: 'left',
            },
            {
                dataField: 'cMustneed',
                caption: '采购类型',
                width: 'auto',
                alignment: 'left',
                calculateDisplayValue: function (rowData) {
                    let matchedItem = shifoujixu.find(item => item.cSubitemid == rowData.cMustneed);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cSpec',
                caption: '规格型号',
                // width: 120,
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cUnit',
                caption: '单位',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cPrice',
                caption: '单价',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cNum',
                caption: '订购数量',
                width: 'auto',
                alignment: 'left',
            },
            //            {
            //                dataField: 'cOrdept',
            //                caption: '采购部门',
            //                 calculateDisplayValue: function (rowData) {
            //                     let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cOrdept);
            //                    if (matchedItem == null || matchedItem == undefined) {
            //                        return "";
            //                    } else {
            //                        return matchedItem.cSubitemdes;
            //                    }
            //                }
            //            },
            {
                dataField: 'cManor',
                caption: '采购人',
                width: 'auto',
                alignment: 'left',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cManor);
                    
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            //            {
            //                dataField: 'cPhone',
            //                caption: '采购人联系方式',
            //            },
            //            {
            //                dataField: 'cCludecom',
            //                caption: '签订公司',
            //            },
            //            {
            //                dataField: 'cSupplier',
            //                caption: '供应商',
            //            },
            {
                dataField: 'cState',
                caption: '预登记状态',
                width: 'auto',
                alignment: 'left',
                calculateDisplayValue: function (rowData) {

                    let matchedItem = yudengjifalg.find(item => item.cSubitemid == rowData.cState);

                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }

                }
            },
            {
            	dataField: 'cSw02',
                caption: '用途说明',
                width: 'auto',
                alignment: 'left',
            },
            {
                dataField: 'cRemark',
                caption: '备注',
                width: 'auto',
                alignment: 'left',
            },
            //            {
            //                dataField: 'cCreater',
            //                caption: '创建人',
            //            },
            //            {
            //                dataField: 'cCreatetime',
            //                caption: '创建时间',
            //                dataType: "date",
            //                format: "yyyy-MM-dd"
            //            },
            //            {
            //                dataField: 'cModifier',
            //                caption: '修改人',
            //            },
            //            {
            //                dataField: 'cModifytime',
            //                caption: '修改时间',
            //                dataType: "date",
            //                format: "yyyy-MM-dd"
            //            },

        ],
        onToolbarPreparing: function (e) { 
        	operateFormS1S3.forEach(item => e.toolbarOptions.items.push(item)); 
       } 
    });

    ////////////////////////////////////////////////////
    ////生成按钮层//////////////////////////////////////
    ////////////////////////////////////////////////////
    //合同模块的按钮
    $('#operateFormM1S1').dxForm({
        width: '100%',
        colCount: 16,
        items: [{
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '查询',
                    onClick: function () {
                        M1S11_serDel();
                    }
                }
            },
            /*{
                name: 'M1S11S',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '模拟合同',
                    onClick: function () {
                        //  let url = "http://10.107.3.254:8877/WebReport/ReportServer?reportlet=HT.cpt&op=write" ; //端口和ip根据具体情况设定 
                        //  window.open(url);
                        // let grid = $('#dataGridS1').dxDataGrid('instance');
                        // let rowsData = grid.getSelectedRowsData()
                        // let selectedRowKeys = grid.getSelectedRowKeys()
                        // if (rowsData.length < 1) {
                        //     // Cake.Ui.Toast.showInfo('请选择一条数据。')     
                        //     DevExpress.ui.notify('请先查询一条要转合同的数据。', 'info', 3000);
                        //     return;
                        // }

                        addIns2 = $('#addmotai2').dxPopup({
                            fullScreen: true
                        }).dxPopup('instance')
                        addIns2.option('title', '模拟合同');
                        addIns2.show();
                        Update_moni();
                        addIns2_form.option('formData', new Object())
                        // S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
                        /// $('#addForm2').dxForm('instance').getEditor('cCludecom').option('value', '青山控股集团股');

                        let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        $('#addmoni2').dxDataGrid('instance').option('dataSource', dataGrid);
                        $('#addmoni2').dxDataGrid('instance').refresh()

                    }
                }
            },*/
           /* {
                name: 'M1S11S1',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '动态模拟合同',
                    onClick: function () {
                        addIns2 = $('#addmotai3').dxPopup({
                            fullScreen: true
                        }).dxPopup('instance')
                        addIns2.option('title', '动态模拟合同');
                        addIns2.show();
                        Update_moni2();
                        addIns2_form.option('formData', new Object())
                        // S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
                        /// $('#addForm2').dxForm('instance').getEditor('cCludecom').option('value', '青山控股集团股');
                        let dataGrid = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                        $('#addmoni3').dxDataGrid('instance').option('dataSource', dataGrid);

                        $('#addmoni3').dxDataGrid('instance').refresh()

                    }
                }
            },*/
            /*{
                name: 'M1S11_U',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '转合同',
                    onClick: function () {
                        change = '2'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (rowsData.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请先查询一条要转合同的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys[0].cState == 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('该数据已经录入合同，不能再次录入。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', '转合同');
                        addIns.show();
                        S1S23_Updatefun()
                        S1S23addIns.option('formData', new Object())
                        S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
                        //                    S1S23addIns.getEditor('cGoodsname').option('value', rowsData[0].cGoodsname)
                    }
                }
            },*/
            {
                name: 'M1S11_ZJHT',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '追加合同',
                    onClick: function () {
                        change = '2'
                        //请购单
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if(rowsData.length < 1){
                        	DevExpress.ui.notify('请在请购物资中选择要添加的数据。', 'info', 3000);
                            return;
                        }  
                        //console.log(rowsData)
                        //合同
                        let grid2 = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData2 = grid2.getSelectedRowsData()
                        let selectedRowKeys2 = grid2.getSelectedRowKeys()
                        if (rowsData2.length < 1) {
                            DevExpress.ui.notify('请选择要追加的合同。', 'info', 3000);
                            return;
                        }
                        if (rowsData.length < 1) {
                            DevExpress.ui.notify('请选择要追加转合同的请购单。', 'info', 3000);
                            return;
                        }
                        //console.log(rowsData2)
//                        //console.log(rowsData2[0].cStatexxl)
//                        if(rowsData2[0].cStatexxl != 'xxk05'){
//                        	DevExpress.ui.notify('请先撤回该合同的信息卡！！！！', 'info', 3000);
//                            return;
//                        }
                        S1S23_ZJHT()
                    }
                }
            },
//            {
//                name: 'M1S11_SCHTWZ',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '撤销合同',
//                    onClick: function () {
//                        change = '2'
//                        let grid = $('#dataGridS2').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (rowsData.length < 1) {
//                            DevExpress.ui.notify('请选中要撤销合同的物资。', 'info', 3000);
//                            return;
//                        }
//                        S1S23_SCHTWZ()
//                    }
//                }
//            },
           /* {
                name: 'M1S11_US',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '特殊合同',
                    onClick: function () {
                        change = '2'
                        let grid = $('#dataGridS1').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (rowsData.length < 1) {
                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
                            DevExpress.ui.notify('请先查询一条要转合同的数据。', 'info', 3000);
                            return;
                        }
                        if (selectedRowKeys[0].cState == 1) {
                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
                            DevExpress.ui.notify('该数据已经录入合同，不能再次录入。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 1000,
                            height: 450
                        }).dxPopup('instance')
                        addIns.option('title', '转合同');
                        addIns.show();
                        S1S23_UpdateSpecial()
                        S1S23addIns.option('formData', new Object())
                        S1S23addIns.getEditor('cSw10').option('value', rowsData[0].cManor)
                        //                    S1S23addIns.getEditor('cGoodsname').option('value', rowsData[0].cGoodsname)
                    }
                }
            },*/
        ]
    })
    function Update_moni() {
    	 
        addIns2_form = $('#addForm2').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount:2 ,
            items: [
//            	{
//                    colSpan: 1,
//                    itemType: 'empty',
//                },
            	{
                    dataField: 'cOutconnum',
                    label: {
                        text: '外贸合同号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 1000,
//                            min: 0,
//                            message: '长度超限，最长为1000！'
//                        },
//                    ]

                },
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'stringLength',
                            max: 1000,
                            min: 0,
                            message: '长度超限，最长为1000！'
                        },
                    ]

                },
                {
                    dataField: 'cCludecom',
                    label: {
                        text: '需方'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
	                    },
	                ],
                    editorOptions: {
                        dataSource: comp_Cludecom,
                        valueExpr: 'cCludecom',
                        displayExpr: 'cCludecom',
                        searchEnabled: true,
                        showClearButton: true,
                        placeholder: '请选择',
                        onValueChanged: function (e) {
                            //console.log(e.value)
                            if (e.value == null || e.value == "") {
                                $('#textarea').dxForm('instance').option("formData", new Object)
                                return;
                            }

                            msg = {
                                ver: '53cc62f6122a436083ec083eed1dc03d',
                                session: '42f5c0d7178148938f4fda29460b815a',
                                tag: {},
                                data: {
                                	cCludecom: null
                                },
                            };
                            msg.data.cCludecom = e.value;
							//console.log(msg.data.cCludecom)

                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/ZZ_01/getCompInfo'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function (data) {
                                    //console.log(data.data)
                                    //单位名称
                                    $('#textarea').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);

                                    //单位地址
                                    $('#textarea').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cComaddress);

                                    //电话
                                    $('#textarea').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cComphone);

                                    //传真
                                    $('#textarea').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cComfaxno);

                                    //开户行
                                    $('#textarea').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cCombankname);

                                    //账号
                                    $('#textarea').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cComaccountno);

                                    //税号
                                    $('#textarea').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cComtaxnumber);
                                    //签订地址
                                    $('#addForm2').dxForm('instance').getEditor('cSignplace').option('value', data.data[0].cSw01);

                                },
                                error: function () {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                    cake.Ui.LoadPanel.close();
                                }
                            })

                        }
                    }

                },
                {
                    dataField: 'cCludetime',
                    label: {
                        text: '签订时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                        value:new Date()
                    },
                },
                {
                    dataField: 'cSupplier',
                    label: {
                        text: '供方'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
	                    },
	                ],
                    editorOptions: {
                        dataSource: cont_supplier,
                        valueExpr: 'cSupplier',
                        displayExpr: 'cSupplier',
                        searchEnabled: true,
                        showClearButton: true,
                        placeholder: '请选择',
                        onValueChanged: function (e) {
                        	//console.log(e.value)
                        	tcSupplier = e.value;
                            if (e.value == null || e.value == "") {
                                $('#textarea2').dxForm('instance').option("formData", new Object);
                                return;
                            }
                            msg = {
                                ver: '53cc62f6122a436083ec083eed1dc03d',
                                session: '42f5c0d7178148938f4fda29460b815a',
                                tag: {},
                                data: {
                                    cSupplier: null
                                },
                            };
                            msg.data.cSupplier = e.value;
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/getSupplierInfo'),
                                dataType: 'json', //返回格式为json           
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                type: 'post', //请求方式 get 或者post ,         
                                contentType: 'application/json',
                                success: function (data) {
                                	supperData = data.data[0];
//                                    //console.log(data.data)
                                    //单位名称
                                    $('#textarea2').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);

                                    //单位地址
                                    $('#textarea2').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);

                                    //电话
                                    $('#textarea2').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);

                                    //传真
                                    $('#textarea2').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                                    //开户行
                                    $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);

                                    //账号
                                    $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                                    //税号
                                    $('#textarea2').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

                                    addIns2_form.getEditor('cSw20').option('value','cd');
                                },
                                error: function () {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                    cake.Ui.LoadPanel.close();
                                }
                            })
                        }

                    },
                },
                {
                    dataField: 'cSignplace',
                    label: {
                        text: '签订地址'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
                
                
                {
                    dataField: 'cSw20',
                    label: {
                        text: '电汇承兑'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
	                    },
	                ],
	                editorOptions: {
                        dataSource: dhcd,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnabled: true,
                        showClearButton: true,
                        placeholder: '请选择',
                        onValueChanged: function (e) {
//                        	//console.log(e.value)
                            if (e.value == null || e.value == "") {
                                $('#textarea2').dxForm('instance').option("formData", new Object);
                                return;
                            }
//                          let cSupplier = $('#textarea2').dxForm('instance').option('formData').cSupplier;
//                          if(cSupplier == null || cSupplier==undefined ||cSupplier == ""){
//                          	 DevExpress.ui.notify('请先选择对应的供应商！！！', 'warning', 4000);
//                          	addIns2_form.getEditor('cSw20').option('value','');
//                          	 return ;
//                          }
                         if(e.value === 'dh'){
                        	 if(supperData.cSw06 == null || supperData.cSw02 == null){
                              	 DevExpress.ui.notify('请先去维护该供应商的电汇行号和电汇账号！！！', 'warning', 4000);
                              	 return ;
                              }	else{
                            	//开户行
                            	  $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', supperData.cSw06);
                            	  //账号
                            	  $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', supperData.cSw02);
                              }
                         }   
                         if(e.value === 'cd'){
                        	 if(supperData.cBankname == null || supperData.cAccountno == null){
                              	 DevExpress.ui.notify('请先去维护该供应商的承兑的信息！！！', 'warning', 4000);
                              	 return ;
                              }	else{
                            	//开户行
                            	  $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', supperData.cBankname);
                            	  //账号
                            	  $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', supperData.cAccountno);
                              }
                         }
                         
//                          //console.log(supperData.cSw01);
                          
//                            msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {
//                                    cSupplier: null
//                                },
//                            };
//                          msg.data.cDhcd = e.value;
//                          msg.data.cSupplier = cSupplier;
//                            $.ajax({//../../tdhc_cgsys/DZ_08/getSupplierInfo
//                                url: Cake.Piper.getAuthUrl(''),
//                                dataType: 'json', //返回格式为json           
//                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                                type: 'post', //请求方式 get 或者post ,         
//                                contentType: 'application/json',
//                                success: function (data) {
//                                	supperData = data.data[0];
//                                    //console.log(data.data)
                                    //单位名称
//                                    $('#textarea2').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
//
//                                    //单位地址
//                                    $('#textarea2').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
//
//                                    //电话
//                                    $('#textarea2').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
//
//                                    //传真
//                                    $('#textarea2').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                                    //开户行
//                                    $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
//
//                                    //账号
//                                    $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                                    //税号
//                                    $('#textarea2').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

//                                },
//                                error: function () {
//                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                    cake.Ui.LoadPanel.close();
//                                }
//                            })
                        }

                    },
                },
                
                
//                {
//                    dataField: 'cDhcd',
//                    label: {
//                        text: '电汇承兑'
//                    },
//                    editorType: 'dxCheckBox',
//                    editorOptions: {
//                        value: undefined,
//                        onValueChanged: function(e) {
//                            if (e.value == null || e.value == "" || e.value==undefined) {
//                                return;
//                            }
//                            let cDhcd;
//                            let cSupplier = $('#textarea2').dxForm('instance').option('formData').cSupplier;
//                            if(cSupplier == null || cSupplier==undefined ||cSupplier == ""){
//                            	 DevExpress.ui.notify('请先去掉电汇承兑的√号，先选择对应的供应商！！！', 'warning', 4000);
//                            	 return ;
//                            }
//                            //console.log(supperData.cSw01);
//                            if(supperData.cSw01 == null || supperData.cSw02 == null){
//                            	 DevExpress.ui.notify('请先去维护该供应商的电汇行号和电汇账号！！！', 'warning', 4000);
//                            	 return ;
//                            }
//                            if(e.value == true){
//                            	cDhcd="电汇承兑"
//                            }
//                            msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {
//                                	cDhcd:null,
//                                	cSupplier:null
//                                },
//                            };
//                            //console.log(cDhcd);
//                            msg.data.cDhcd = cDhcd;
//                            msg.data.cSupplier = cSupplier;
//                            //../../tdhc_cgsys/CLAUSE/
//                            $.ajax({
//                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/obtainSupplierInfo'),
//                                dataType: 'json', //返回格式为json           
//                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                                type: 'post', //请求方式 get 或者post ,         
//                                contentType: 'application/json',
//                                success: function(data) {
//                                	//console.log(supperData.cSw01);
//                                	$('#textarea2').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
//
//                                    //单位地址
//                                    $('#textarea2').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
//
//                                    //电话
//                                    $('#textarea2').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
//
//                                    //传真
//                                    $('#textarea2').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);
//
//                                    //开户行
//                                    $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
//
//                                    //账号
//                                    $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);
//
//                                    //税号
//                                    $('#textarea2').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);
//                                },
//                                error: function() {
//                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                                    cake.Ui.LoadPanel.close();
//                                }
//                            })
//
//                            // disabledCheckbox.option("value", data.value);
//                        }
//                    },
//                },
                {
                    dataField: 'cDr',
                    label: {
                        text: '预计到货时间'
                    },
                    editorType: 'dxDateBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
	                    },
	                ],
                },
                
            ]
        }).dxForm('instance')
        let operateFormS2buts = [
        	/*{
                location: "before",
                locateInMenu: 'auto',
                widget: "dxButton",
                options: {
                    height: "auto",
                    width: "auto",
                    icon: 'plus',
                    text: '添加',
                    onClick: function () {
                        $("#addmoni2").dxDataGrid('instance').addRow();

                        // //console.log($("#addmoni2").dxDataGrid('instance')._options.columns.dataField == 'cPrice')
                        //console.log($("#addmoni2").dxDataGrid('instance')._options.columns)



                    }
                }
            },*/
            {
                location: "before",
                locateInMenu: 'auto',
                widget: "dxButton",
                options: {
                    height: "auto",
                    width: "auto",
                    icon: 'remove',
                    text: '删除',
                    onClick: function () {
                    	/*let rowsData = $("#addmoni2").dxDataGrid('instance').getSelectedRowsData()[0];
                    	let rowkey = $("#addmoni2").dxDataGrid('instance')._options.dataSource;
                    	rowkey.splice(rowsData);

                    	$("#addmoni2").dxDataGrid('instance').refresh()*/
                    	let rowsData = $("#addmoni2").dxDataGrid('instance').getSelectedRowsData();
                    	let dataSource = $("#addmoni2").dxDataGrid('instance').option('dataSource');

                    	let removeIndex = [];

                    	for (let index = 0; index < dataSource.length; index++) {

                    	if (rowsData.some(element => element == dataSource[index])) {
                    	removeIndex.push(index);
                    	}

                    	}

                    	removeIndex.reverse().forEach(element => dataSource.splice(element, 1));

                    	$("#addmoni2").dxDataGrid('instance').refresh()
                    }
                }
            },
            {
                location: "before",
                locateInMenu: 'auto',
                widget: "dxButton",
                options: {
                    height: "auto",
                    width: "auto",
                    icon: 'plus',
                    text: '提交',
                    onClick: function (e) {

                        let cconnu = $('#addForm2').dxForm('instance').option('formData').cConnum;
                        let cdr = $('#addForm2').dxForm('instance').option('formData').cDr;
                        if (cconnu == "" || cconnu == undefined || cconnu == null) {
                            DevExpress.ui.notify('请填写合同编号。', 'error', 3000);
                            return
                        }
                        if (cdr == "" || cdr == undefined || cdr == null) {
                        	DevExpress.ui.notify('请填写预计到货时间。', 'error', 3000);
                        	return
                        }

                        let cDelivdate = $('#deadline').dxForm('instance').option('formData').cDelivdate;
                      if (cDelivdate == "" || cDelivdate == undefined || cDelivdate == null) {
                          DevExpress.ui.notify('请录入交货期限！！！', 'error', 3000);
                          return
                      }
                      let cDelivplace = $('#deadline').dxForm('instance').option('formData').cDelivplace;
                      if (cDelivplace == "" || cDelivplace == undefined || cDelivplace == null) {
                          DevExpress.ui.notify('请选择交货地点！！！', 'error', 3000);
                          return
                      }
                      let cPayway = $('#pice').dxForm('instance').option('formData').cPayway;
                      if (cPayway == "" || cPayway == undefined || cPayway == null) {
                          DevExpress.ui.notify('请输入付款方式！！！！', 'error', 3000);
                          return
                      }
                        
                        
                        
                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {
                            },
                        };

                        //合同主表信息
                        msg.data.tpCgcontractmt = $('#addForm2').dxForm('instance').option('formData');
                        //合同物资信息
                        msg.data.tpCgorderRequest = $('#addmoni2').dxDataGrid('instance')._options.dataSource;
                        //交货期限 ,交货地点
                        msg.data.delInformation = $('#deadline').dxForm('instance').option('formData');
//                         //console.log(msg.data.delInformation);
                        //付款方式
                        msg.data.paywayRequest = $('#pice').dxForm('instance').option('formData');
//                         //console.log(msg.data.paywayRequest);
                        //供应商
                        msg.data.tbSupplier = $('#textarea2').dxForm('instance').option('formData');
                        //console.log(msg.data.tbSupplier)
                        //需方
                        msg.data.tbCludecompany = $('#textarea').dxForm('instance').option('formData');
                        $.ajax({
                        	//../../tdhc_cgsys//tab/simContract-------    
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/simContract'),
                            dataType: 'json', //返回格式为json           
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                            type: 'post', //请求方式 get 或者post ,         
                            contentType: 'application/json',
                            success: function (data) {
                       
                                let select = data.msg
                                if (data.errcode == 60) {
                                    DevExpress.ui.notify(select, 'info', 3000);
                                    cake.Ui.LoadPanel.close();
                                }
                                if (data.errcode == 0) {
                                	M1S11_serDel();
                                	M1S21_serDel();
                                    before_serDel();
                                    initLoad13();
                                    cont_supplier = [];
                                    DevExpress.ui.notify(select, 'success', 3000);                                
                                    cake.Ui.LoadPanel.close();
                                    addIns2.hide();
                                }
                                if(data.errcode == 30){
                               	 DevExpress.ui.notify(select, 'warning', 3000);
                                    cake.Ui.LoadPanel.close();                     
                               }
                            },
                            error: function () {
                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);

                            }
                        })
                        // }

                    }
                }
            },
        ];
        $("#addmoni2").dxDataGrid({
            // 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
            dataSource: "data/customers.json",
            columnResizingMode: "widget",
            dataSource: addGang,
            columnAutoWidth: true,
            showBorders: true,
            allowColumnResizing: true,
            showColumnLines: true,
            showRowLines: true,
            onCellHoverChanged: '#888',
            hoverStateEnabled: true,
            noDataText: '',
            width: '100%',
            height: '100%',
            paging: {
                enabled: false
            },
            editing: {
//                mode: "batch",
            	mode:"cell",
                allowUpdating: true
            },
            selection: {
                mode: "multiple"
//            	 mode: "single"
            },
            loadPanel: {
                enabled: true,
                text: '请稍等片刻...'
            },
            onToolbarPreparing: function (e) {
                operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

            },
            onEditingStart: function (e) {},
            columns: [
            	{
                    dataField: 'cOrdernum',
                    caption: '请购单号',
//                    width: 150,
                    alignment: 'left',
                    allowEditing: false,
                },
                /* {
                     dataField: 'cId',
                     caption: '主键',
                     width: 150,
                     alignment: 'left',
                 },*/
                {
                    dataField: 'cGoodsname',
                    caption: '物资名称',
                    // width: 120,
                    alignment: 'left',
                    allowEditing: false,
                },

                {
                    dataField: 'cSpec',
                    caption: '规格型号',
                    // width: 120,
                    alignment: 'left',
                    allowEditing: false,
                },
                {
                    dataField: 'cUnit',
                    caption: '单位',
                    // width: 50,
                    alignment: 'left',
                    allowEditing: false,
                },
                {
                    dataField: 'cCustoms',
                    caption: '报关物资名称',
                    // width: 120,
                    alignment: 'left',
                },
                {
                    dataField: 'cCuspec',
                    caption: '报关物资规格',
                    // width: 120,
                    alignment: 'left',
                },
                {
                    dataField: 'cUnitspec',
                    caption: '报关单位',
                    // width: 80,
                    alignment: 'left',
                },
                {
                    dataField: 'cNum',
                    caption: '订购数量',
                    // width: 80,
                    alignment: 'left',

                    setCellValue: function (newData, value, currentRowData) {
                       
                    	newData.cNum = value;
                    	//console.log(VB_cPrice);
                    	
                    	// 数量
                    	VB_cNum = value;
                    /*	if (VB_cPrice == undefined || VB_cPrice == null){
                    	return VB_cPrice == 0
                    	}else{
                    		VB_cNum = null;
                    		VB_cPrice = null
                    	}*/
                    	var cPrice1 = currentRowData.cPrice;//试用
                    	// // 总价
                    	VB_cSumprice = newData.cNum * cPrice1;
                    	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                       	//console.log(Sumprice);
//                    	newData.cSumprice = newData.cNum * cPrice1;
                       	newData.cSumprice = Sumprice;
                    }
                },
                {
                    dataField: 'cPrice',
                    caption: '含税单价',
                    // width: 100,
                    alignment: 'left',
                    setCellValue: function (newData, value, currentRowData) {
                    	newData.cPrice = value;
                    	// 单价
                    	VB_cPrice = value;
                    	/*if (VB_cNum == undefined || VB_cNum == null) {
                    	return VB_cNum == 0
                    	}else{
                    		VB_cNum = null;
                    		VB_cPrice = null
                		}*/
                    	var cNum2 = currentRowData.cNum;//试用
                    	//console.log(cNum2);
                    	// 总价
                    	VB_cSumprice = newData.cPrice * cNum2;
                    	var Sumprice = Number(VB_cSumprice).toFixed(2);
//                       	//console.log(Sumprice);
//                    	newData.cSumprice = newData.cPrice * cNum2;
                       	newData.cSumprice = Sumprice;
                    }
                },
                {
                    dataField: 'cSumprice',
                    caption: '含税总价',
                    // width: 100,
                    alignment: 'left',
                     allowEditing: false,

                },
                {
                    dataField: 'cRemark',
                    caption: '备注',
//                    alignment: 'left',
//                    width: 200,
                },
            ],
            summary: {
                // 普通列求和
                totalItems: [{
                    column: 'cSumprice', //计算哪列的值
                    showInColumn: "cOrdernum", //显示在哪列
                    displayFormat: "合计人民币:{0}", //显示格式
                    // valueFormat: "currency",
//                    valueFormat: "fixedPoint",
//                    precision: 2,
                    summaryType: "sum" ,//汇总类型--运算方式
                    customizeText: function (e) {
                    	//console.log(e.value)
                    	var num = e.value;
                    	num = num.toFixed(2);
                    	return '合计民币:'+num;
                    }
                }],
            },
        })

        //单条修改
        function update_fun() {
            msg = {
                ver: '53cc62f6122a436083ec083eed1dc03d',
                session: '42f5c0d7178148938f4fda29460b815a',
                tag: {},
                data: {
                    cgQ003S1s2: {

                    }
                },
            };
            msg.data.cgQ003S1s2 = Dup_Item;

            // 单价修改
            if (VB_cPrice == null) {

            } else {
                msg.data.cgQ003S1s2.cPrice = VB_cPrice;
            }

            // 总价修改
            if (VB_cSumprice == null) {

            } else {
                msg.data.cgQ003S1s2.cSumprice = VB_cSumprice;
            }

            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/modifyTpCgorderst'),
                dataType: 'json', //返回格式为json           
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                type: 'post', //请求方式 get 或者post ,         
                contentType: 'application/json',
                success: function (data) {
                    //console.log(data)
                    // 修改成功后为全局的变量设置为空
                    //    VB_cPricePer = null;
                    //    VB_cSumprice = null;
                    //    VB_cComno = null;
                    //    VB_cOrdertime = null;
                    //    VB_cDeltime = null;
                    //    VB_cAogtime = null;
                    //    VB_cProvider = null;
                    //    VB_cRemark = null;
                    //    M1S11_serDel()


                },
                error: function () {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                }
            })
        }




        // 交货期限、交货地点
        $('#deadline').dxForm({
            formData: adddatapo,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                    dataField: 'cDelivdate',
                    label: {
                        text: '1.交货期限'
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
	                    },
	                ],
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        dataSource: cDelivdate,
//                        valueExpr: 'id',
//                        displayExpr: 'value',
//                        searchEnabled: true,
//                        showClearButton: true,
//                        placeholder: '请选择',
//                    }
                    editorOptions: {
                        showClearButton: true,
                        value: '自双方合同盖章生效之日起 *日内。'
                    }, 
                },
                {
                    dataField: 'cDelivplace',
                    label: {
                        text: '2.交货地点'
                    },
                    editorType: 'dxSelectBox',
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    },
                    {
                        type: 'stringLength',
                        max: 4000,
                        min: 0,
                        message: '长度超限，最长为4000！'
	                    },
	                ],
                    editorOptions: {
                        dataSource: jhdd1,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnabled: true,
                        showClearButton: true,
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        // dataSource: variabl,
                        // valueExpr: 'id',
                        // displayExpr: 'value',
                        // showClearButton: true,
                        placeholder: '请选择',
                    },
                },
            ]
        }).dxForm('instance');

        // 付款方式
        $('#pice').dxForm({
            formData: adddatapic,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                dataField: 'cPayway',
                label: {
                    text: '付款方式'
                },
                validationRules: [{
                    type: 'required',
                    message: '必填！'
                },
                {
                    type: 'stringLength',
                    max: 4000,
                    min: 0,
                    message: '长度超限，最长为4000！'
                    },
                ],
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    // dataSource: variabl,
                    // valueExpr: 'id',
                    // displayExpr: 'value',
                    // showClearButton: true,
                    showClearButton: true
                },
            }, ]
        }).dxForm('instance');

        // 验收地点
        $('#place').dxForm({
            formData: adddatapla,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                dataField: 'cSignplace',
                label: {
                    text: '1.验收地点'
                },
                editorType: 'dxSelectBox',
                validationRules: [{
                    type: 'required',
                    message: '必填！'
                },
                {
                    type: 'stringLength',
                    max: 4000,
                    min: 0,
                    message: '长度超限，最长为4000！'
                    },
                ],
                editorOptions: {
                    dataSource: ysdd1,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnabled: true,
                    showClearButton: true,
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    // dataSource: variabl,
                    // valueExpr: 'id',
                    // displayExpr: 'value',
                    // showClearButton: true,
                    placeholder: '请选择',
                },
            }, ]
        }).dxForm('instance');



        $('#textarea').dxForm({
            // width: "100%",
            // height: "200px",
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                    dataField: 'cCludecom',
                    label: {
                        text: '单位名称'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                        //                        value: '青山控股集团有限公司',
                    },
                },
                {
                    dataField: 'cComaddress',
                    label: {
                        text: '单位地址'
                    },

                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                        //                        value: '浙江省温州市龙湾区龙祥路2666号',
                    },
                },
                {
                    dataField: '',
                    label: {
                        text: '法定代表人（或委托代理人）'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
                {
                    dataField: 'cComphone',
                    label: {
                        text: '电话'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        //readOnly: true,
                        //                        value: '13777770869'
                    },
                },
                {
                    dataField: 'cComfaxno',
                    label: {
                        text: '传真'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cCombankname',
                    label: {
                        text: '开户银行'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                        //                        value: '华夏银行股份有限公司温州分行龙湾支行'
                    },
                },
                {
                    dataField: 'cComaccountno',
                    label: {
                        text: '账号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                        //                        value: '4270 2800 0180 8100 0129 29'
                    },
                },
                {
                    dataField: 'cComtaxnumber',
                    label: {
                        text: '税号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                        //                        value: '913 303 007 511 762 26P'
                    },
                },
            ]
        }).dxForm('instance')




        // $("#textarea2").dxTextArea({
        //     width: "580px",
        //     height: "200px",
        //     placeholder: "供方...."
        // })

        $('#textarea2').dxForm({
            // width: "100%",
            // height: "200px",
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                    dataField: 'cSupplier',
                    label: {
                        text: '单位名称'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                       // readOnly: true,
                    },
                },
                {
                    dataField: 'cSupaddress',
                    label: {
                        text: '单位地址'
                    },

                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        //readOnly: true,
                    },
                },
                {
                    dataField: '',
                    label: {
                        text: '法定代表人（或委托代理人）'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
                {
                    dataField: 'cSupphone',
                    label: {
                        text: '电话'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        //readOnly: true,
                    },
                },
                {
                    dataField: 'cFaxno',
                    label: {
                        text: '传真'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                        //readOnly: true,
                    },
                },
                {
                    dataField: 'cBankname',
                    label: {
                        text: '开户银行'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                       // readOnly: true,
                    },
                },
                {
                    dataField: 'cAccountno',
                    label: {
                        text: '账号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                       // readOnly: true,
                    },
                },
                {
                    dataField: 'cTaxnumber',
                    label: {
                        text: '税号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                       // readOnly: true,
                    },
                },
            ]
        }).dxForm('instance')
    }

    function S1S23_Updatefun() {
        S1S23addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cSw03',
                    label: {
                        text: '货物名称'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cCludecom',
                    label: {
                        text: '签订公司'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: qdgs,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                        searchEnabled: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cCludetime',
                    label: {
                        text: '签订时间'
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
                {
                    dataField: 'cSupplier',
                    label: {
                        text: '供应商'
                    },
                    /*editorType: "dxSelectBox",
	                editorOptions: {
	                    dataSource: supplier,
	                    valueExpr: 'cSupplier',
	                    displayExpr: 'cSupplier',
	                    showClearButton: true,
	                    width: '100%',
	                    searchEnabled: true,
	            
	                },*/
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
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
                        dataSource: caigouyuan,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
                //                {
                //                	dataField: 'cGoodsname',
                //                	label: {
                //                		text: '物资名称'
                //                	},
                //                	editorType: 'dxTextBox',
                //                	editorOptions: {
                //                		searchEnable: true,
                //                		showClearButton: true,
                //                	},
                //                	validationRules: [
                //                		{
                //                			type: 'required',
                //                			message: '必填！'
                //                		},
                //                		]
                //                },
                {
                    dataField: 'cConmoney',
                    label: {
                        text: '合同金额'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'numeric',
                            message: '请输入数字',
                        },
                    ]
                },
                {
                    dataField: 'cSw01',
                    label: {
                        text: '已付款金额'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                        {
                            type: 'numeric',
                            message: '请输入数字',
                        },
                    ]
                },
                //                {
                //                	dataField: 'cSw02',
                //                	label: {
                //                		text: '未付款金额'
                //                	},
                //                	editorType: 'dxTextBox',
                //                	editorOptions: {
                //                		searchEnable: true,
                //                		showClearButton: true,
                //                	},
                //                	validationRules: [
                //                		{
                //                			type: 'required',
                //                			message: '必填！'
                //                		},
                //                		]
                //                },
                {
                    dataField: 'cPayway',
                    label: {
                        text: '付款方式'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cDr',
                    label: {
                        text: '预计到货时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    //                	validationRules: [{
                    //                		type: 'required',
                    //                		message: '必填！'
                    //                	}, ]
                },
                {
                    dataField: 'cGettime',
                    label: {
                        text: '最后到货时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                },
                {
                    dataField: 'cSw09',
                    label: {
                        text: '送货地点'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [
                        //                		{
                        //                			type: 'required',
                        //                			message: '必填！'
                        //                		},
                    ]
                },
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function (e) {
                let validateResult = e.validationGroup.validate();
                if (!validateResult.isValid) {
                    DevExpress.ui.notify('数据不符合规范', 'info', 3000);
                    return;
                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {

                    },
                };
                let grid = $('#dataGridS1').dxDataGrid('instance');
                let rowsData = grid.getSelectedRowsData()
                //模态框的值
                msg.data.contractID = S1S23addIns.option('formData');
                //选中的值
                msg.data.contractVoBean = rowsData;
                //console.log(JSON.stringify(msg));
                cake.Ui.LoadPanel.show();
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/saveContractt'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function (data) {
                        //////console.log.log(data)
                        let select = data.msg
                        if (data.errcode == 60) {
                            DevExpress.ui.notify(select, 'info', 3000);
                            cake.Ui.LoadPanel.close();
                        }
                        if (data.errcode == 0) {
                            M1S11_serDel()
                            before_serDel()
                            DevExpress.ui.notify(select, 'success', 3000);
                            addIns.hide()
                            cake.Ui.LoadPanel.close();
                        } else {
                            DevExpress.ui.notify(select, 'success', 3000);
                            cake.Ui.LoadPanel.close();
                            M1S11_serDel()
                        }
                    },
                    error: function () {
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                        cake.Ui.LoadPanel.close();
                        // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                        //e.cancel=true;         
                    }
                })
//                $.ajax({
//                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/saveContract'),
//                    dataType: 'json', //返回格式为json           
//                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                    type: 'post', //请求方式 get 或者post ,         
//                    contentType: 'application/json',
//                    success: function (data) {
//                        //////console.log.log(data)
//                        let select = data.msg
//                        if (data.errcode == 60) {
//                            DevExpress.ui.notify(select, 'info', 3000);
//                            cake.Ui.LoadPanel.close();
//                        }
//                        if (data.errcode == 0) {
//                            M1S11_serDel()
//                            before_serDel()
//                            DevExpress.ui.notify(select, 'success', 3000);
//                            addIns.hide()
//                            cake.Ui.LoadPanel.close();
//                        } else {
//                            DevExpress.ui.notify(select, 'success', 3000);
//                            cake.Ui.LoadPanel.close();
//                            M1S11_serDel()
//                        }
//                    },
//                    error: function () {
//                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                        cake.Ui.LoadPanel.close();
//                        // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
//                        //e.cancel=true;         
//                    }
//                })
            }
        })
        $('#addcansel').dxButton({
            text: '取消',
            icon: 'remove',
            onClick: function () {
                addIns.hide()
            }
        })
    }
    //特殊转合同模态框
    function S1S23_UpdateSpecial() {
        S1S23addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    /*validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                    ]*/
                },
                {
                    dataField: 'cRemark',
                    label: {
                        text: '特殊合同'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    /*validationRules: [
                        {
                            type: 'required',
                            message: '必填！'
                        },
                    ]*/
                },
                {
                    dataField: 'cSw03',
                    label: {
                        text: '货物名称'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    //                    validationRules: [
                    //                        {
                    //                            type: 'required',
                    //                            message: '必填！'
                    //                        },
                    //                    ]
                },
                {
                    dataField: 'cCludecom',
                    label: {
                        text: '签订公司'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: qdgs,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                        searchEnabled: true,
                    },
                    //                	validationRules: [
                    //                		{
                    //                			type: 'required',
                    //                			message: '必填！'
                    //                		},
                    //                		]
                },
                {
                    dataField: 'cCludetime',
                    label: {
                        text: '签订时间'
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
                    dataField: 'cSupplier',
                    label: {
                        text: '供应商'
                    },
                    /*editorType: "dxSelectBox",
	                editorOptions: {
	                    dataSource: supplier,
	                    valueExpr: 'cSupplier',
	                    displayExpr: 'cSupplier',
	                    showClearButton: true,
	                    width: '100%',
	                    searchEnabled: true,
	            
	                },*/
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
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
                        dataSource: caigouyuan,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
                //                {
                //                	dataField: 'cGoodsname',
                //                	label: {
                //                		text: '物资名称'
                //                	},
                //                	editorType: 'dxTextBox',
                //                	editorOptions: {
                //                		searchEnable: true,
                //                		showClearButton: true,
                //                	},
                //                	validationRules: [
                //                		{
                //                			type: 'required',
                //                			message: '必填！'
                //                		},
                //                		]
                //                },
                {
                    dataField: 'cConmoney',
                    label: {
                        text: '合同金额'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [
                        //                		{
                        //                			type: 'required',
                        //                			message: '必填！'
                        //                		},
                        {
                            type: 'numeric',
                            message: '请输入数字',
                        },
                    ]
                },
                {
                    dataField: 'cSw01',
                    label: {
                        text: '已付款金额'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [
                        //                		{
                        //                			type: 'required',
                        //                			message: '必填！'
                        //                		},
                        {
                            type: 'numeric',
                            message: '请输入数字',
                        },
                    ]
                },
                {
                    dataField: 'cPayway',
                    label: {
                        text: '付款方式'
                    },
                    editorType: 'dxTextBox',
                    editorOptions: {
                        searchEnable: true,
                        showClearButton: true,
                    },
                    //                	validationRules: [
                    //                		{
                    //                			type: 'required',
                    //                			message: '必填！'
                    //                		},
                    //                		]
                },
                {
                    dataField: 'cDr',
                    label: {
                        text: '预计到货时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                    //                	validationRules: [{
                    //                		type: 'required',
                    //                		message: '必填！'
                    //                	}, ]
                },
                {
                    dataField: 'cGettime',
                    label: {
                        text: '最后到货时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                },
                //                {
                //                	dataField: 'cSw09',
                //                	label: {
                //                		text: '送货地点'
                //                	},
                //                	editorType: 'dxTextBox',
                //                	editorOptions: {
                //                		searchEnable: true,
                //                		showClearButton: true,
                //                	},
                //                	validationRules: [
                //                		{
                //                			type: 'required',
                //                			message: '必填！'
                //                		},
                //                	]
                //                },
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function (e) {
                let validateResult = e.validationGroup.validate();
                if (!validateResult.isValid) {
                    DevExpress.ui.notify('数据不符合规范', 'info', 3000);
                    return;
                }
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {

                    },
                };
                let grid = $('#dataGridS3').dxDataGrid('instance');
                let rowsData = grid.getSelectedRowsData()
                //模态框的值
                msg.data.contractID = S1S23addIns.option('formData');
                //选中的值
                msg.data.contractVoBean = rowsData;
                cake.Ui.LoadPanel.show();
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/tSaveContractt'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function (data) {
                        //////console.log.log(data)
                        let select = data.msg
                        if (data.errcode == 60) {
                            DevExpress.ui.notify(select, 'info', 3000);
                            cake.Ui.LoadPanel.close();
                        }
                        if (data.errcode == 0) {
                            M1S11_serDel()
                            M1S21_serDel()
                            before_serDel()
                            DevExpress.ui.notify(select, 'success', 3000);
                            addIns.hide()
                            cake.Ui.LoadPanel.close();
                        } else {
                            DevExpress.ui.notify(select, 'success', 3000);
                            cake.Ui.LoadPanel.close();
                            M1S11_serDel()
                        }
                    },
                    error: function () {
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                        cake.Ui.LoadPanel.close();
                        // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                        //e.cancel=true;         
                    }
                })
//                $.ajax({
//                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/tSaveContract'),
//                    dataType: 'json', //返回格式为json           
//                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                    type: 'post', //请求方式 get 或者post ,         
//                    contentType: 'application/json',
//                    success: function (data) {
//                        //////console.log.log(data)
//                        let select = data.msg
//                        if (data.errcode == 60) {
//                            DevExpress.ui.notify(select, 'info', 3000);
//                            cake.Ui.LoadPanel.close();
//                        }
//                        if (data.errcode == 0) {
//                            M1S11_serDel()
//                            before_serDel()
//                            DevExpress.ui.notify(select, 'success', 3000);
//                            addIns.hide()
//                            cake.Ui.LoadPanel.close();
//                        } else {
//                            DevExpress.ui.notify(select, 'success', 3000);
//                            cake.Ui.LoadPanel.close();
//                            M1S11_serDel()
//                        }
//                    },
//                    error: function () {
//                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                        cake.Ui.LoadPanel.close();
//                        // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
//                        //e.cancel=true;         
//                    }
//                })
            }
        })
        $('#addcansel').dxButton({
            text: '取消',
            icon: 'remove',
            onClick: function () {
                addIns.hide()
            }
        })
    }

    ///////////////////////////////////////////////////////
    //Star()请求下拉框、多选框数据、通过请求网址的后缀生成代码 
    ///////////////////////////////////////////////////////
    function start() {
    	addIns3  = $('#addmotai0').dxPopup({
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
        initLoad1();
        initLoad13();
        function initLoad1() {
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
        initLoad2()

        function initLoad2() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "BMMC"
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
                        shenqingbumen.push(item);
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
        initLoad4()

        function initLoad4() {
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
                        shifoujixu.push(item);
                    });
                },
                error: function () {
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
                data: {}
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_CONMT/NUM"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            connum.push(item);
                        });
                    }
                },
                error: function () {
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
                data: {}
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_CONMT/SUPPLIER"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            supplier.push(item);
                        });
                    }
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
                    "cItemid": "YF"
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
                        yuefen.push(item);
                    });
                    var date = new Date();
                    this.year = date.getFullYear(); //当前年份
                    this.month = date.getMonth() + 1; //当前月份
                    var i = date.getMonth();
//                    searchdataFormM2.getEditor('month').option('value', yuefen[i].cSubitemid);
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad66()

        function initLoad66() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "NF"
                }
            };
            ////console.log(9)
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    result.data.forEach(item => {
                        nian.push(item);
                    });
                    ////console.log(result)
                    var date = new Date();
                    this.year = date.getFullYear(); //当前年份
                    this.month = date.getMonth() + 1; //当前月份
                    var i = date.getMonth();
//                    searchdataFormM2.getEditor('year').option('value', nian[1].cSubitemid);
//                    searchdataFormM2.getEditor('year').option('value', getYear());
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        function getYear(){
        	var date = new Date();
        	 let  year = date.getFullYear();//当前年份
        	//console.log(year);
        	let matchedItem = nian.find(item => item.cSubitemid == year);

            if (matchedItem == null || matchedItem == undefined) {
                return "";
            } else {
                ////console.log(matchedItem.cSubitemid)
                return matchedItem.cSubitemid;
            }
        }
        initLoad8()

        function initLoad8() {
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
        initLoad9()

        function initLoad9() {
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
                success: function (result) {
                    result.data.forEach(item => {
                        qdgs.push(item);
                    });
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad91()
        //
        function initLoad91() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "JHDD"
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
                        jhdd1.push(item);
                    });
                    //console.log(jhdd1)
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad92()

        function initLoad92() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "YSDD"
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
                        ysdd1.push(item);
                    });
                    //console.log(ysdd1)
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
                data: {}
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_q002mt/ORDERNUM"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            ordernum.push(item);
                        });
                    }
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
                data: {}
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_q002/GOODSNAMEQ"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            goodsname2.push(item);
                        });
                    }
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad12();

        function initLoad12() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "YDJZT"
                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    /*  //////console.log.log(result.data);
                     yudengjifalg = result.data; */

                    result.data.forEach(item => {
                        yudengjifalg.push(item);
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

        initLoad16();
        
        function initLoad16() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                }
            };
            //../../tdhc_cgsys/CG_A001/selcon   ../../tdhc_cgsys/CGC_11/selectContType ----- 第一版合同维护
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CLAUSE/selectContType"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                      //console.log(result.data.clauseM1s1);
                    result.data.clauseM1s1.forEach(item => {
                    	contact_Type.push(item);
                    });
                    //console.log(contact_Type)
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
//            return contact_Type;
        }
        
        initLoad15();
        function initLoad15(){
        	  msg = {
                      ver: "53cc62f6122a436083ec083eed1dc03d",
                      session: "42f5c0d7178148938f4fda29460b815a",
                      tag: {},
                      data: {
                          "cItemid": "DHCD"
                      }
                  };
                  $.ajax({
                      type: "post",
                      url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                      data: JSON.stringify(msg),
                      contentType: "application/json",
                      dataType: "json",
                      success: function (result) {
                          /*  //////console.log.log(result.data);
                           yudengjifalg = result.data; */

                          result.data.forEach(item => {
                        	  dhcd.push(item);
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
        initLoad14()
        function initLoad14() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {

                }
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/ZZ_01/findCompInfo"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function (result) {
                    //console.log(result.data);

                    xxCon = result.data;


                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            comp_Cludecom.push(item);
                        });
                    }
                    //                	//console.log(cont_supplier);
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad19()
        //
        function initLoad19() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "JHQX"
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
                        jhqx.push(item);
                    });
//                    //console.log(jhqx)
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0061Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function (data) {
                TP_CGORDERST_C_TYPENAME.splice(0, TP_CGORDERST_C_TYPENAME.length);
                data.data.cgQ001C006.forEach(item => TP_CGORDERST_C_TYPENAME.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function () {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
        
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
                //console.log(TP_CGORDERMT_USER)
                //searchdataFormM1.getEditor('cSw10').option('value', get_user());
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
//        //console.log(get_user())
       
        ////////////////////////////////////////////////////////////////////////////////    
        //寻找查询条件的所有字段,带有后缀请求的,并且尾号为零的,所有下来框的循环生成,    
        //////////////////////////////////////////////////////////////////////////////// 
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //功能类代码(与button生成代码对应）     /////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    //    function get_month () {
    //    	var date = new Date();
    //    	this.year = date.getFullYear();//当前年份
    //    	this.month = date.getMonth() + 1;//当前月份
    //    	var i = this.month-1
    //    	let matchedItem1 = yuefen.find(item => item.month != "");
    //    	let matchedItem = yuefen.find(item => item.cSubitemdes == yuefen[0].cSubitemdes);
    //        if (matchedItem == null || matchedItem == undefined) {
    //            return "";
    //        } else {
    //            return matchedItem.cSubitemid;
    //            ////console.log.log(matchedItem.cSubitemid)
    //        }
    //    }
    function get_user() {
        let matchedItem1 = TP_CGORDERMT_USER.find(item => item.userName != "");
        let matchedItem = caigouyuan.find(item => item.cSubitemdes == TP_CGORDERMT_USER[0].userName);
//        let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cManor)
        //console.log(matchedItem1)
        //console.log(matchedItem)
        if (matchedItem == null || matchedItem == undefined) {
            return null;
        } else {
            ////////console.log(matchedItem.cSubitemid)
            return matchedItem.cSubitemid;
        }
    } 
    //获取当前月份的天数
    function mGetDate(month) {
        var date = new Date();
        var year = date.getFullYear();
        var d = new Date(year, month, 0);
        return d.getDate();
    }
    
    function initLoad13() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {

            }
        };
        $.ajax({
            type: "post",
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/DZ_08/findSupplierName"),
            data: JSON.stringify(msg),
            contentType: "application/json",
            dataType: "json",
            success: function (result) {
                //console.log(result.data);
//                xxCon = result.data;
                if (result.data == null) {

                } else {
                    result.data.forEach(item => {
                    	cont_supplier.push(item);
                    });
                }
                //                	//console.log(cont_supplier);
            },
            error: function () {
                cake.Ui.LoadPanel.close()
            }
        });
//        return cont_supplier
    }

    function before_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let searchtiao = searchdataFormM2.option('formData')
        msg.data.tpCgorderst = [searchdataFormM2.option('formData')];

//        var date = new Date();
//        this.year = date.getFullYear();
//        this.month = date.getMonth() + 1;
//        //选择的月份
//        var m = msg.data.tpCgorderst[0].month;
//        var y = msg.data.tpCgorderst[0].year;
//        //获取当前月份的天数
//        var days = mGetDate(m); //选择月份的天数
//        ////console.log.log(days+"天")
//        if (m != null) {
//            //开始时间
//            let startTime = msg.data.tpCgorderst.startTime;
//            msg.data.tpCgorderst[0].startTime = new Date(y, m - 1, 1, 0, 0, 0, 0);
//            // 结束时间
//            let endTime = msg.data.tpCgorderst.endTime;
//            msg.data.tpCgorderst[0].endTime = new Date(y, m - 1, days, 23, 59, 59, 999);
//        } else {
//            //开始时间
//            let startTime = msg.data.tpCgorderst.startTime;
//            msg.data.tpCgorderst[0].startTime = null;
//            // 结束时间
//            let endTime = msg.data.tpCgorderst.endTime;
//            msg.data.tpCgorderst[0].endTime = null;
//        }
        //开始时间
        let startTime = searchtiao.startTime;
        msg.data.tpCgorderst[0].startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        // 结束时间
        let endTime = searchtiao.endTime;
        msg.data.tpCgorderst[0].endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        ////console.log.log(msg.data.tpCgorderst)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/before_serDel'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function (data) {
                let msgstr = data.msg;
                if (data.errcode == 60) {
                    DevExpress.ui.notify(msgstr, 'info', 3000);
                }
                //////console.log.log(data)
                if (data.data == null) {
                    tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    return
                }

                let select;
                select = data.data
                tabledataS1.splice(0, tabledataS1.length);
                select.forEach(item => tabledataS1.push(item));
                $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                $('#dataGridS1').dxDataGrid('instance').deselectAll()
                $('#dataGridS1').dxDataGrid('instance').refresh()

            },
            error: function () {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
    function M1S21_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
//        let searchtiao = searchdataFormM2.option('formData')
//        msg.data.tpCgorderst = [searchdataFormM2.option('formData')];
//        //开始时间
//        let startTime = searchtiao.startTime;
//        msg.data.tpCgorderst[0].startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
//        // 结束时间
//        let endTime = searchtiao.endTime;
//        msg.data.tpCgorderst[0].endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        ////console.log.log(msg.data.tpCgorderst)
        //../../tdhc_cgsys/CG_q002/before_serDel
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/M2S11QDZ'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function (data) {
                let msgstr = data.msg;
//                if (data.errcode == 60) {
//                    DevExpress.ui.notify(msgstr, 'info', 3000);
//                }
                //console.log(data)
                if (data.data == null) {
                    tabledataS3.splice(0, tabledataS3.length);
                    $('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
                    return
                }

                let select;
                select = data.data
                tabledataS3.splice(0, tabledataS3.length);
                select.forEach(item => tabledataS3.push(item));
                $('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
                $('#dataGridS3').dxDataGrid('instance').deselectAll()
                $('#dataGridS3').dxDataGrid('instance').refresh()
            },
            error: function () {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
    }

    function S1S23_ZJHT() {
    	
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        //请购单
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()
        //合同
        let grid2 = $('#dataGridS2').dxDataGrid('instance');
        let rowsData2 = grid2.getSelectedRowsData()
        msg.data.orderList = rowsData; //请购单
        msg.data.conList = rowsData2; //合同
        //////console.log.log(msg)
        addIns3.show();
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/ZJHT'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function (data) {
            	addIns3.hide();
                //////console.log.log(data)
                let select = data.msg
                if (data.errcode == 0) {
                    M1S11_serDel()
                    before_serDel()
                    DevExpress.ui.notify(select, 'success', 3000);
                } if(data.errcode == 30){
                  	 DevExpress.ui.notify(select, 'warning', 5000);
                }else {
                    DevExpress.ui.notify(select, 'info', 3000);
                }
            },
            error: function () {
            	addIns3.hide();
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/ZJHT'),
//            dataType: 'json', //返回格式为json      
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
//            type: 'post', //请求方式 get 或者post ,       
//            contentType: 'application/json',
//            success: function (data) {
//                //////console.log.log(data)
//                let select = data.msg
//                if (data.errcode == 0) {
//                    M1S11_serDel()
//                    before_serDel()
//                    DevExpress.ui.notify(select, 'success', 3000);
//                } else {
//                    DevExpress.ui.notify(select, 'success', 3000);
//                    M1S11_serDel()
//                }
//            },
//            error: function () {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
//                //e.cancel=true;       
//            }
//        })
    }

    function S1S23_SCHTWZ() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        //合同
        let grid2 = $('#dataGridS2').dxDataGrid('instance');
        let rowsData2 = grid2.getSelectedRowsData()
        msg.data.conList = rowsData2; //合同
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMTT/SCHTWZ'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function (data) {
                ////console.log.log(data)
                let select = data.msg
                if (data.errcode == 0) {
                    M1S11_serDel();
                    before_serDel()
                    DevExpress.ui.notify(select, 'success', 3000);
                } else {
                    DevExpress.ui.notify(select, 'success', 3000);
                    M1S11_serDel()
                }
            },
            error: function () {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
//        $.ajax({
//            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/SCHTWZ'),
//            dataType: 'json', //返回格式为json      
//            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
//            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
//            type: 'post', //请求方式 get 或者post ,       
//            contentType: 'application/json',
//            success: function (data) {
//                ////console.log.log(data)
//                let select = data.msg
//                if (data.errcode == 0) {
//                    M1S11_serDel();
//                    before_serDel()
//                    DevExpress.ui.notify(select, 'success', 3000);
//                } else {
//                    DevExpress.ui.notify(select, 'success', 3000);
//                    M1S11_serDel()
//                }
//            },
//            error: function () {
//                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//            }
//        })
    }

    function S1S21_Selected() {

    }

    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let searchtiao = searchdataFormM1.option('formData')
        msg.data = searchdataFormM1.option('formData');
        //        //开始时间
        //        let startTime = msg.data.startTime;
        //        msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        //        // 结束时间
        //        let endTime = msg.data.endTime;
        //        msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        //////console.log.log(msg)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/selectByMTSTT'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function (data) {
                //console.log(data)
                let msgstr = data.msg;
                if (data.errcode == 20) {
                    DevExpress.ui.notify(msgstr, 'info', 3000);
                }
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
            error: function () {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }

    // ------------------------------------------
    // 添加模态框
    noticeEditPopup = $("#notice-edit-popup-container").dxPopup({
        deferRendering: false,
        title: '预登记',

        // width: function () {
        //   return window.innerWidth - 50;
        // },
        // height: function () {
        //   return window.innerHeight - 50;
        // },
        width: 1000,
        height: 500,
    }).dxPopup("instance");
    // 添加模态框放置的内容
    noticeEditForm = $("#notice-edit-form-container").dxForm({

        items: [{
            itemType: "group",
            colCount: 3,
            items: [{
                    dataField: "cSupplier",
                    label: {
                        text: '供应商'
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]

                },
                {
                    dataField: "cCludecom",
                    label: {
                        text: '签订公司'
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]

                },
                {
                    itemType: "group",
                    colCount: 6,
                    items: [{
                            colSpan: 2,
                            itemType: "empty",
                        },
                        {
                            itemType: "button",
                            buttonOptions: {
                                icon: "todo",
                                text: '确定',
                                onClick: function (e) {
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
                                    let grid = $("#dataGridS1").dxDataGrid("instance");
                                    let rowsData = grid.getSelectedRowsData();
                                    //////console.log.log(msg)
                                    if (rowsData.length < 1) {
                                        cake.Ui.toast.show("请至少选择一条数据", "warning")
                                        return
                                    }
                                    msg.data.tpCgorderst = rowsData;
                                    msg.data.tpCgorderbefore = noticeEditForm.option('formData');
                                    //////console.log.log(msg)
                                    // 注释1  zsq
                                    //change等于1为添加         
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/save'),
                                        dataType: 'json', //返回格式为json           
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                                        type: 'post', //请求方式 get 或者post ,         
                                        contentType: 'application/json',
                                        success: function (data) {
                                            let select = data.msg
                                            if (data.errcode == 0) {
                                                before_serDel();
                                                M1S11_serDel();
                                                DevExpress.ui.notify('数据保存成功', 'success', 3000);
                                                noticeEditPopup.hide();
                                            } else {
                                                DevExpress.ui.notify(select, 'warning', 3000);
                                            }
                                        },
                                        error: function () {
                                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                            // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
                                            //e.cancel=true;         
                                        }
                                    })
                                    // noticeEditForm.option("formData", new Object);

                                }
                            }
                        }, {
                            itemType: "button",
                            buttonOptions: {
                                icon: "remove",
                                text: '取消',
                                onClick: function () {
                                    noticeEditPopup.hide();
                                }
                            }
                        },
                    ]
                }
            ]
        }]


    }).dxForm("instance");

    // -------------------
    //--------------------// 添加--主表--模态框

    addEditPopup = $("#add-edit-popup-container").dxPopup({
        deferRendering: false,
        height: 600,
    }).dxPopup("instance");
    // 添加--钢种--模态框放置的内容
    addEditForm = $("#add-edit-form-container").dxForm({
        formData: msg.data,
        width: "100%",
        items: [{
                itemType: "group",
                colCount: 3,
                items: [{
                        dataField: "cOrdernum",
                        label: {
                            text: "单据编号"
                        },
                        editorType: "dxTextBox",
                        editorOptions: {
                            // dataSource: addLei,
                            // displayExpr: "cSubitemdes", //显示表达式
                            // valueExpr: "cSubitemid", //值的表达式
                            // placeholder: "-请选择-",
                            // showClearButton: true,
                            // width: "100%",
                            // searchEnabled: true
                            width: "100%",
                            placeholder: "",
                            showClearButton: true
                        }
                    },

                ]
            }, {
                itemType: "group",
                colCount: 6,
                items: [{
                    itemType: "group",
                    colCount: 6,
                    itemType: "button",
                    buttonOptions: {
                        icon: "search",
                        text: '查询',
                        onClick: function () {
                            // 重赋值
                            msg1 = {
                                ver: '53cc62f6122a436083ec083eed1dc03d',
                                session: '42f5c0d7178148938f4fda29460b815a',
                                tag: {},
                                data: {}
                            };
                            msg1.data = addEditForm.option("formData");
                            ////console.log.log(msg)
                            $.ajax({
                                // url: Cake.Piper.getAuthUrl(requestUrls.addGSteel),
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002mt/SelectMt12'),
                                dataType: "json", //返回格式为json  
                                async: true, //请求是否异步，默认为异步，这也是ajax重要特性  
                                data: JSON.stringify(msg1), //下拉框的参数值  requestData.getSteel 上面有定义
                                type: "post", //请求方式 get 或者post ,
                                contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
                                success: function (result) {
                                    // 表格数据
                                    var tab = result.data
                                    // 清空数据
                                    addGang.splice(0, addGang.length);
                                    // 将返回的数据推入到清空的数组中
                                    tab.forEach(item => {
                                        addGang.push(item);
                                    });
                                    // 将推入进的数据进行刷新
                                    let newgrid = $("#addGangGrid").dxDataGrid("instance");
                                    newgrid.refresh();

                                    // noticeEditForm.getEditor('cProdKind').option("dataSource", pinzhong)
                                },
                            })
                        }
                    }
                }, {
                    itemType: "group",
                    colCount: 6,
                    items: [{
                            colSpan: 2,
                            itemType: "empty",
                        },
                        {
                            itemType: "button",
                            buttonOptions: {
                                icon: "todo",
                                text: '确定',
                                onClick: function () {

                                    let grid = $("#addGangGrid").dxDataGrid("instance");

                                    let rowsData = grid.getSelectedRowsData()[0];
                                    let selectedRowKeys = grid.getSelectedRowKeys()

                                    // //////console.log.log(selectedRowKeys)
                                    if (rowsData.length < 1) {
                                        cake.Ui.toast.show("请至少选择一条数据", "warning")
                                        return
                                    }


                                    noticeEditForm.updateData("cOrmtid", rowsData.cId)
                                    // 带出单据编号到添加弹框

                                    noticeEditForm.updateData("cOrdernum", rowsData.cOrdernum)
                                    // 带出申请时间到添加弹框
                                    noticeEditForm.updateData("cTimeapply", rowsData.cTimeapply)
                                    // 带出申请部门到添加弹框
                                    noticeEditForm.updateData("cDeptapply", rowsData.cDeptapply)
                                    // 带出公司名称添加弹框
                                    noticeEditForm.updateData("cComname", rowsData.cComname)
                                    // // 带出收单日期添加弹框
                                    noticeEditForm.updateData("cTimetake", rowsData.cTimetake)
                                    // // 带出申请人到添加弹框
                                    noticeEditForm.updateData("cManapply", rowsData.cManapply)
                                    // // 带出审核状态到添加弹框
                                    noticeEditForm.updateData("cAudittype", rowsData.cAudittype)
                                    // // 带出审核时间到添加弹框
                                    noticeEditForm.updateData("cAudittime", rowsData.cAudittime)
                                    // // 带出审核人到添加弹框
                                    noticeEditForm.updateData("cAuditman", rowsData.cAuditman)
                                    // // 带出提交人到添加弹框
                                    noticeEditForm.updateData("cMitman", rowsData.cMitman)

                                    // // 带出提交时间到添加弹框
                                    noticeEditForm.updateData("cMittime", rowsData.cMittime)

                                    // // 带出提交状态到添加弹框
                                    noticeEditForm.updateData("cMittype", rowsData.cMittype)


                                    // getmidu(rowsData.cStlGrd)

                                    // if (!addEditPopup.validate().isValid) {
                                    //  return;
                                    // };

                                    addEditPopup.hide();

                                }
                            }
                        }, {
                            itemType: "button",
                            buttonOptions: {
                                icon: "remove",
                                text: '取消',
                                onClick: function () {
                                    addEditPopup.hide();
                                }
                            }
                        }
                    ]
                }, ]
            },
            {
                itemType: "group",
                items: [{
                        template: $("#addGangGrid")

                    },

                ]
            },

        ]

    }).dxForm('instance')


    //--------------------// 添加--子表--模态框

    ziEditPopup = $("#zi-edit-popup-container").dxPopup({
        deferRendering: false,
        height: 600,
    }).dxPopup("instance");
    // 添加--钢种--模态框放置的内容
    ziEditForm = $("#zi-edit-form-container").dxForm({
        formData: msg.data,
        width: "100%",
        items: [{
                itemType: "group",
                colCount: 3,
                items: [{
                        dataField: "cTypename",
                        label: {
                            text: "物资类型"
                        },
                        editorType: "dxSelectBox",
                        editorOptions: {
                            dataSource: TP_CGORDERST_C_TYPENAME,
                            displayExpr: "cSubitemdes", //显示表达式
                            valueExpr: "cSubitemid", //值的表达式


                            placeholder: "-请选择-",
                            showClearButton: true,
                            width: "100%",
                            searchEnabled: true
                            //   width: "100%",
                            // placeholder: "",
                            // showClearButton: true
                        },

                    },

                    {
                        dataField: "cId",
                        label: {
                            text: "物资单号"
                        },
                        editorType: "dxTextBox",
                        editorOptions: {
                            // dataSource: addLei,
                            // displayExpr: "cSubitemdes", //显示表达式
                            // valueExpr: "cSubitemid", //值的表达式
                            // placeholder: "-请选择-",
                            // showClearButton: true,
                            // width: "100%",
                            // searchEnabled: true
                            width: "100%",
                            // placeholder: "请选择",
                            showClearButton: true
                        }
                    },
                    {
                        dataField: "cGoodsname",
                        label: {
                            text: "物资名称"
                        },
                        editorType: "dxTextBox",
                        editorOptions: {
                            // dataSource: addLei,
                            // displayExpr: "cSubitemdes", //显示表达式
                            // valueExpr: "cSubitemid", //值的表达式
                            // placeholder: "-请选择-",
                            // showClearButton: true,
                            // width: "100%",
                            // searchEnabled: true
                            width: "100%",
                            // placeholder: "",
                            showClearButton: true
                        }
                    },
                    {
                        dataField: "cMtid",
                        label: {
                            text: "请购单号"
                        },
                        editorType: "dxTextBox",
                        editorOptions: {
                            // dataSource: addLei,
                            // displayExpr: "cSubitemdes", //显示表达式
                            // valueExpr: "cSubitemid", //值的表达式
                            // placeholder: "-请选择-",
                            // showClearButton: true,
                            // width: "100%",
                            // searchEnabled: true
                            width: "100%",
                            // placeholder: "",
                            showClearButton: true
                        }
                    },

                ]
            }, {
                itemType: "group",
                colCount: 6,
                items: [{
                    itemType: "group",
                    colCount: 6,
                    itemType: "button",
                    buttonOptions: {
                        icon: "search",
                        text: '查询',
                        onClick: function () {
                            // 重赋值
                            msg = {
                                ver: '53cc62f6122a436083ec083eed1dc03d',
                                session: '42f5c0d7178148938f4fda29460b815a',
                                tag: {},
                                data: {
                                    // cId:null,
                                }
                            };

                            //脚本执行  

                            // requestData.getSteel.data.cState = $("#selectBox_1").dxSelectBox("instance").option("value");//zsq
                            // requestData.getSteel.data.date1 = $("#dataBox_1").dxDateBox("instance").option("value");//zsq
                            // //////console.log.log(addEditForm.option("formData"))
                            msg.data = ziEditForm.option("formData")

                            //////console.log.log(msg)
                            $.ajax({
                                // url: Cake.Piper.getAuthUrl(requestUrls.addGSteel),
                                url: '../../tdhc_cgsys/CG_q002/selectst',
                                dataType: "json", //返回格式为json  
                                async: true, //请求是否异步，默认为异步，这也是ajax重要特性  
                                data: JSON.stringify(msg), //下拉框的参数值  requestData.getSteel 上面有定义
                                type: "post", //请求方式 get 或者post ,
                                contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
                                success: function (result) {

                                    //////console.log.log(result)
                                    // 表格数据
                                    var tab = result.data
                                    // 清空数据
                                    ziGang.splice(0, ziGang.length);

                                    // 将返回的数据推入到清空的数组中
                                    tab.forEach(item => {
                                        ziGang.push(item);
                                    });

                                    // 将推入进的数据进行刷新
                                    let newgrid = $("#ziGangGrid").dxDataGrid("instance");
                                    newgrid.refresh();

                                    // noticeEditForm.getEditor('cProdKind').option("dataSource", pinzhong)
                                },
                            })
                        }
                    }
                }, {
                    itemType: "group",
                    colCount: 6,
                    items: [{
                            colSpan: 2,
                            itemType: "empty",
                        },
                        {
                            itemType: "button",
                            buttonOptions: {
                                icon: "todo",
                                text: '确定',
                                onClick: function () {

                                    let grid = $("#ziGangGrid").dxDataGrid("instance");

                                    let rowsData = grid.getSelectedRowsData()[0];
                                    let selectedRowKeys = grid.getSelectedRowKeys()

                                    //////console.log.log(selectedRowKeys)
                                    if (rowsData.length < 1) {
                                        cake.Ui.toast.show("请至少选择一条数据", "warning", 3000)
                                        return
                                    }



                                    // 带出钢种到添加弹框
                                    noticeEditForm.updateData("cOrstid", rowsData.cId)
                                    // 带出品名到添加弹框
                                    noticeEditForm.updateData("cGoodsname", rowsData.cGoodsname)
                                    // // 带出是否急需添加弹框
                                    noticeEditForm.updateData("cSw01", rowsData.cSw01)
                                    // // 带出采购人添加弹框
                                    noticeEditForm.updateData("cOrman", rowsData.cManor)
                                    // 带出采购部门添加弹框,
                                    noticeEditForm.updateData("cOrdept", rowsData.cDeptor)

                                    // // 带出"规格型号"添加弹框,
                                    noticeEditForm.updateData("cSpec", rowsData.cSpec)
                                    // // 带出"单位"添加弹框,
                                    noticeEditForm.updateData("cUnit", rowsData.cUnit)

                                    // // 带出"采购人联系方式"添加弹框,
                                    noticeEditForm.updateData("cPhone", rowsData.cPhone)
                                    // getmidu(rowsData.cStlGrd)
                                    // if (!addEditPopup.validate().isValid) {
                                    //  return;
                                    // };

                                    ziEditPopup.hide();

                                }
                            }
                        }, {
                            itemType: "button",
                            buttonOptions: {
                                icon: "remove",
                                text: '取消',
                                onClick: function () {
                                    ziEditPopup.hide();
                                }
                            }
                        }
                    ]
                }, ]
            },
            {
                itemType: "group",
                items: [{
                        template: $("#ziGangGrid")

                    },

                ]
            },

        ]

    }).dxForm('instance')

    $("#addGangGrid").dxDataGrid({
        // 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
        dataSource: "data/customers.json",
        dataSource: addGang,
        columnAutoWidth: true,
        showBorders: true,
        allowColumnResizing: true,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        noDataText: '',
        width: 1200,
        height: 350,
        paging: {
            enabled: false
        },
        editing: {
            mode: "batch",
            allowUpdating: false
        },
        selection: {
            mode: "multiple"
        },
        loadPanel: {
            enabled: true,
            text: '请稍等片刻...'
        },
        columns: [{
                dataField: 'cId',
                caption: '请购单号',
            },
            {
                dataField: 'cComname',
                caption: '公司名称',
            },
            {
                dataField: 'cOrdernum',
                caption: '单据编号',
            },
            {
                dataField: 'cManapply',
                caption: '申请人',
            },
            {
                dataField: 'cDeptapply',
                caption: '申请部门',
            },
            {
                dataField: 'cTimeapply',
                caption: '申请日期',
            },
            {
                dataField: 'cTimetake',
                caption: '收单日期',
            },
            // {
            //     dataField: 'cModifier',
            //     caption: '修改人',
            // },
            // {
            //     dataField: 'cModifytime',
            //     caption: '修改时间',
            // },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
            {
                dataField: 'cState',
                caption: '状态',
            },
            // {
            //     dataField: 'cTimestamp',
            //     caption: '时间戳',
            // },
            {
                dataField: 'cMittype',
                caption: '提交状态',
            },
            {
                dataField: 'cMittime',
                caption: '提交时间',
            },
            // {
            //     dataField: 'cAudittime',
            //     caption: '审核时间',
            // },
            {
                dataField: 'cCreatetime',
                caption: '创建时间',
            },
            {
                dataField: 'cCreater',
                caption: '创建人',
            },
            {
                dataField: 'cAudittype',
                caption: '审核状态',
            },
            {
                dataField: 'cAudittime',
                caption: '审核时间',
            },
            {
                dataField: 'cAuditman',
                caption: '审核人',
            },
            {
                dataField: 'cMitman',
                caption: '提交人',
            },
        ]
    })

    $('#ziGangGrid').dxDataGrid({
        dataSource: ziGang,
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
        width: 1200,
        height: 450,
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
                caption: "请购物资单号"
            },
            {
                dataField: "cNo",
                caption: "序号"
            },
            {
                dataField: "cMustneed",
                caption: "是否急需"
            },
            {
                dataField: "cTypename",
                caption: "物资类型"
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
                dataField: "cNum",
                caption: "申报量"
            },
            {
                dataField: "cArrtime",
                caption: "要求到货时间"
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
                dataField: "cState",
                caption: "采购状态"
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
                dataField: "cSw01",
                caption: "提交状态"
            },
            {
                dataField: "cOrdealline",
                caption: "采购期限"
            },
            {
                dataField: "cDeptor",
                caption: "采购部门"
            },
            {
                dataField: "cManor",
                caption: "采购员"
            },
            {
                dataField: "cPhone",
                caption: "采购员联系方式"
            },
            {
                dataField: "cAllotstate",
                caption: "分配状态"
            },
            {
                dataField: "cAllotman",
                caption: "分配人"
            },
            {
                dataField: "cAllottime",
                caption: "分配时间"
            },
            {
                dataField: "cPlanor",
                caption: "采购进度"
            },
            {
                dataField: "cPolitime",
                caption: "报警时间"
            },
            {
                dataField: "cPolinormtime",
                caption: "报警标准时间/天"
            },
            {
                dataField: "cMtid",
                caption: "请购主表id"
            },
            {
                dataField: "cPlantime",
                caption: "采购进度时间"
            },
            // {
            //     dataField: "",
            //     caption: ""
            // }
        ]

    });


    function Update_moni2() {
	 $('#contract_type').dxForm({
        formData: calculation,
        validationGroup: validationGroupName,
        colCount: 4,
        items: [
       	 //居中效果
       	/* {
       		 colSpan: 2,
       		 itemType: 'empty',
       		 },*/
       	 {
                dataField: 'cContype',
                label: {
                    text: '合同类型'
                },
                editorType: 'dxSelectBox',
                validationRules: [{
                    type: 'required',
                    message: '必填！'
                },
                {
                    type: 'stringLength',
                    max: 4000,
                    min: 0,
                    message: '长度超限，最长为4000！'
                },
                ],
                editorOptions: {
                    dataSource: contact_Type,
                    valueExpr: 'cContypeTpCgclausedata',
                    displayExpr: 'cContypeTpCgclausedata',
                    searchEnabled: true,
                    showClearButton: true,
                    placeholder: '请选择',
                    width: 250,
                    onValueChanged: function (e) {
                   	 console.log(e.value)
                        if (e.value == null || e.value == "") {
                            $('#clauseForm').dxForm('instance').option("formData", new Object)
                            return;
                        }
                   	 msg = {
                                ver: '53cc62f6122a436083ec083eed1dc03d',
                                session: '42f5c0d7178148938f4fda29460b815a',
                                tag: {},
                                data: {
                               	 clause_M1S1:{
                               		 cContypeTpCgclausedata:null
                               	 }
                                },
                            };
                   	 	msg.data.clause_M1S1.cContypeTpCgclausedata = e.value;
                   	    $.ajax({
                               url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CLAUSE/getContTypeInfo'),
                               dataType: 'json', //返回格式为json           
                               async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                               data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                               type: 'post', //请求方式 get 或者post ,         
                               contentType: 'application/json',
                               success: function (data) {
                                   //console.log(data.data.clauseM1s1[0])
                                   //                                      //console.log(data.data[0].cCludecom)
                                   let rowdata = data.data.clauseM1s1[0]
                                   $('#clauseForm').dxForm('instance').option("formData", rowdata)
                                   if ($('#clauseForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw31TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw32TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw33TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw34TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw35TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw36TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw37TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw38TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw39TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw40TpCgclausedata').option('visible', true)
              					 }
              					 if ($('#clauseForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', false)
              					 } else {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw41TpCgclausedata').option('visible', true)
              					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('value') === '') {
             						 $('#clauseForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', false)
             					 } else {
             						 $('#clauseForm').dxForm('instance').getEditor('cSw42TpCgclausedata').option('visible', true)
             					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('value') === '') {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', false)
            					 } else {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw43TpCgclausedata').option('visible', true)
            					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('value') === '') {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', false)
            					 } else {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw44TpCgclausedata').option('visible', true)
            					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('value') === '') {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', false)
            					 } else {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw45TpCgclausedata').option('visible', true)
            					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('value') === '') {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', false)
            					 } else {
            						 $('#clauseForm').dxForm('instance').getEditor('cSw46TpCgclausedata').option('visible', true)
            					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('value') === '') {
           						 $('#clauseForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', false)
	           					 } else {
	           						 $('#clauseForm').dxForm('instance').getEditor('cSw47TpCgclausedata').option('visible', true)
	           					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', false)
   	           					 } else {
   	           						 $('#clauseForm').dxForm('instance').getEditor('cSw48TpCgclausedata').option('visible', true)
   	           					 }
              					if ($('#clauseForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('value') === '') {
              						 $('#clauseForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', false)
   	           					 } else {
   	           						 $('#clauseForm').dxForm('instance').getEditor('cSw49TpCgclausedata').option('visible', true)
   	           					 }
              					
                               },
                               error: function () {
                                   DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                   cake.Ui.LoadPanel.close();
                               }
                           })
                    }
                    
            },
            
            
        },{
			colSpan: 1,
			itemType: 'empty',
		},
        {
            dataField: 'cZqconnum',
            label: {
                text: '转签合同号'
            },
            editorType: 'dxTextBox',
            editorOptions: {
                searchEnable: true,
                showClearButton: true,
            },
//            validationRules: [{
//                    type: 'required',
//                    message: '必填！'
//                },
//                {
//                    type: 'stringLength',
//                    max: 1000,
//                    min: 0,
//                    message: '长度超限，最长为1000！'
//                },
//            ]

        },
//        {
//            dataField: 'cExporter',
//            label: {
//                text: '出口商'
//            },
//            editorType: 'dxSelectBox',
////            validationRules: [
////            	{
////                type: 'required',
////                message: '必填！'
////            },
////            {
////                type: 'stringLength',
////                max: 4000,
////                min: 0,
////                message: '长度超限，最长为4000！'
////                },
////            ],
//            editorOptions: {
//                dataSource: comp_Cludecom,
//                valueExpr: 'cCludecom',
//                displayExpr: 'cCludecom',
//                searchEnabled: true,
//                showClearButton: true,
//                placeholder: '请选择',
//            }
//            }
        
//        {
//            dataField: 'cSw10',
//            label: {
//                text: '采购员'
//            },
//            editorType: 'dxSelectBox',
//            editorOptions: {
//                //以上完成对没有联动数据源配置
//                //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                dataSource: caigouyuan,
//                valueExpr: 'cSubitemid',
//                displayExpr: 'cSubitemdes',
//                searchEnable: true,
//                showClearButton: true,
//                width: 200,
//                readOnly:true
//            },
//            validationRules: [{
//                    type: 'required',
//                    message: '必填！'
//                },
//                {
//                    type: 'stringLength',
//                    max: 1000,
//                    min: 0,
//                    message: '长度超限，最长为1000！'
//                },
//            ]
//
//        },
        ]
    }).dxForm('instance');
	 
   addIns2_form = $('#addForm3').dxForm({
       formData: adddata,
       validationGroup: validationGroupName,
       colCount: 2,
       items: [
//       	{
//               colSpan: 1,
//               itemType: 'empty',
//           },
       	{
               dataField: 'cOutconnum',
               label: {
                   text: '外贸合同号'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
               },
//               validationRules: [{
//                       type: 'required',
//                       message: '必填！'
//                   },
//                   {
//                       type: 'stringLength',
//                       max: 1000,
//                       min: 0,
//                       message: '长度超限，最长为1000！'
//                   },
//               ]

           },
           {
               dataField: 'cConnum',
               label: {
                   text: '内贸合同号'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
               },
               validationRules: [{
                       type: 'required',
                       message: '必填！'
                   },
                   {
                       type: 'stringLength',
                       max: 1000,
                       min: 0,
                       message: '长度超限，最长为1000！'
                   },
               ]

           },
           {
               dataField: 'cCludecom',
               label: {
                   text: '需方'
               },
               editorType: 'dxSelectBox',
               validationRules: [{
                   type: 'required',
                   message: '必填！'
               },
               {
                   type: 'stringLength',
                   max: 4000,
                   min: 0,
                   message: '长度超限，最长为4000！'
                   },
               ],
               editorOptions: {
                   dataSource: comp_Cludecom,
                   valueExpr: 'cCludecom',
                   displayExpr: 'cCludecom',
                   searchEnabled: true,
                   showClearButton: true,
                   placeholder: '请选择',
                   onValueChanged: function (e) {
                       //console.log(e.value)
                       if (e.value == null || e.value == "") {
                           $('#textarea3').dxForm('instance').option("formData", new Object)
                           return;
                       }

                       msg = {
                           ver: '53cc62f6122a436083ec083eed1dc03d',
                           session: '42f5c0d7178148938f4fda29460b815a',
                           tag: {},
                           data: {
                           	cCludecom: null
                           },
                       };
                       msg.data.cCludecom = e.value;
						//console.log(msg.data.cCludecom)

                       $.ajax({
                           url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/ZZ_01/getCompInfo'),
                           dataType: 'json', //返回格式为json           
                           async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                           data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                           type: 'post', //请求方式 get 或者post ,         
                           contentType: 'application/json',
                           success: function (data) {
                               //console.log(data.data)
                               //                                      //console.log(data.data[0].cCludecom)
                               //console.log(8888888);
                               //单位名称
                               $('#textarea3').dxForm('instance').getEditor('cCludecom').option('value', data.data[0].cCludecom);

                               //单位地址
                               $('#textarea3').dxForm('instance').getEditor('cComaddress').option('value', data.data[0].cComaddress);

                               //电话
                               $('#textarea3').dxForm('instance').getEditor('cComphone').option('value', data.data[0].cComphone);

                               //传真
                               $('#textarea3').dxForm('instance').getEditor('cComfaxno').option('value', data.data[0].cComfaxno);

                               //开户行
                               $('#textarea3').dxForm('instance').getEditor('cCombankname').option('value', data.data[0].cCombankname);

                               //账号
                               $('#textarea3').dxForm('instance').getEditor('cComaccountno').option('value', data.data[0].cComaccountno);

                               //税号
                               $('#textarea3').dxForm('instance').getEditor('cComtaxnumber').option('value', data.data[0].cComtaxnumber);
                               //签订地址
                               $('#addForm3').dxForm('instance').getEditor('cSignplace').option('value', data.data[0].cSw01);

                           },
                           error: function () {
                               DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                               cake.Ui.LoadPanel.close();
                           }
                       })

                   }
               }

           },
           {
               dataField: 'cCludetime',
               label: {
                   text: '签订时间'
               },
               editorType: 'dxDateBox',
               editorOptions: {
                   displayFormat: 'yyyy-MM-dd',
                   type: 'datetime',
               },
           },
           {
               dataField: 'cSupplier',
               label: {
                   text: '供方'
               },
               editorType: 'dxSelectBox',
               validationRules: [{
                   type: 'required',
                   message: '必填！'
               },
               {
                   type: 'stringLength',
                   max: 4000,
                   min: 0,
                   message: '长度超限，最长为4000！'
                   },
               ],
               editorOptions: {
                   dataSource: cont_supplier,
                   valueExpr: 'cSupplier',
                   displayExpr: 'cSupplier',
                   searchEnabled: true,
                   showClearButton: true,
                   placeholder: '请选择',
                   onValueChanged: function (e) {

                       if (e.value == null || e.value == "") {
                           $('#textarea4').dxForm('instance').option("formData", new Object)
                           return;
                       }

                       msg = {
                           ver: '53cc62f6122a436083ec083eed1dc03d',
                           session: '42f5c0d7178148938f4fda29460b815a',
                           tag: {},
                           data: {
                               cSupplier: null
                           },
                       };


                       msg.data.cSupplier = e.value;

                       $.ajax({
                           url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/DZ_08/getSupplierInfo'),
                           dataType: 'json', //返回格式为json           
                           async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                           data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                           type: 'post', //请求方式 get 或者post ,         
                           contentType: 'application/json',
                           success: function (data) {
//                               //console.log(data.data)
                        	   supperData2 = data.data[0];
                               //单位名称
                               $('#textarea4').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);

                               //单位地址
                               $('#textarea4').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);

                               //电话
                               $('#textarea4').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);

                               //传真
                               $('#textarea4').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                               //开户行
                               $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);

                               //账号
                               $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                               //税号
                               $('#textarea4').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

                               addIns2_form.getEditor('cSw20').option('value','cd');
                           },
                           error: function () {
                               DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                               cake.Ui.LoadPanel.close();
                           }
                       })
                   }

               },
           },
           {
               dataField: 'cSignplace',
               label: {
                   text: '签订地址'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cSw20',
               label: {
                   text: '账户类型'
               },
               editorType: 'dxSelectBox',
               validationRules: [{
                   type: 'required',
                   message: '必填！'
               },
               {
                   type: 'stringLength',
                   max: 4000,
                   min: 0,
                   message: '长度超限，最长为4000！'
                   },
               ],
               editorOptions: {
                   dataSource: dhcd,
                   valueExpr: 'cSubitemid',
                   displayExpr: 'cSubitemdes',
                   searchEnabled: true,
                   showClearButton: true,
                   placeholder: '请选择',
                   onValueChanged: function (e) {
//                   	//console.log(e.value)
                       if (e.value == null || e.value == "") {
                           $('#textarea4').dxForm('instance').option("formData", new Object);
                           return;
                       }
//                     let cSupplier = $('#textarea2').dxForm('instance').option('formData').cSupplier;
//                     if(cSupplier == null || cSupplier==undefined ||cSupplier == ""){
//                     	 DevExpress.ui.notify('请先选择对应的供应商！！！', 'warning', 4000);
//                     	addIns2_form.getEditor('cSw20').option('value','');
//                     	 return ;
//                     }
                    if(e.value === 'dh'){
                   	 if(supperData2.cSw06 == null || supperData2.cSw02 == null){
                         	 DevExpress.ui.notify('请先去维护该供应商的承兑信息！！！', 'warning', 4000);
                         	addIns2_form.getEditor('cSw20').option('value','cd');
                         	 return ;
                         }	else{
                       	//开户行
                       	  $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', supperData2.cSw06);
                       	  //账号
                       	  $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cSw02);
                         }
                    }   
                    if(e.value === 'cd'){
                   	 if(supperData2.cBankname == null || supperData2.cAccountno == null){
                         	 DevExpress.ui.notify('请先去维护该供应商的电汇的信息！！！', 'warning', 4000);
                         	 return ;
                         }	else{
                       	//开户行
                       	  $('#textarea4').dxForm('instance').getEditor('cBankname').option('value', supperData2.cBankname);
                       	  //账号
                       	  $('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cAccountno);
                         }
                    }
                    if(e.value === 'dhcd'){
                    	if(supperData2.cSw07 == null || supperData2.cSw09 == null){
                    		DevExpress.ui.notify('请先去维护该供应商的电汇行号2和电汇账号2！！！', 'warning', 4000);
                    		addIns2_form.getEditor('cSw20').option('value','cd');
                    		return ;
                    	}	else{
                    		//开户行
                    		$('#textarea4').dxForm('instance').getEditor('cBankname').option('value', supperData2.cSw07);
                    		//账号
                    		$('#textarea4').dxForm('instance').getEditor('cAccountno').option('value', supperData2.cSw09);
                    	}
                    }
//                     //console.log(supperData.cSw01);
                     
//                       msg = {
//                           ver: '53cc62f6122a436083ec083eed1dc03d',
//                           session: '42f5c0d7178148938f4fda29460b815a',
//                           tag: {},
//                           data: {
//                               cSupplier: null
//                           },
//                       };
//                     msg.data.cDhcd = e.value;
//                     msg.data.cSupplier = cSupplier;
//                       $.ajax({//../../tdhc_cgsys/DZ_08/getSupplierInfo
//                           url: Cake.Piper.getAuthUrl(''),
//                           dataType: 'json', //返回格式为json           
//                           async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                           data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                           type: 'post', //请求方式 get 或者post ,         
//                           contentType: 'application/json',
//                           success: function (data) {
//                           	supperData = data.data[0];
//                               //console.log(data.data)
                               //单位名称
//                               $('#textarea2').dxForm('instance').getEditor('cSupplier').option('value', data.data[0].cSupplier);
//
//                               //单位地址
//                               $('#textarea2').dxForm('instance').getEditor('cSupaddress').option('value', data.data[0].cSupaddress);
//
//                               //电话
//                               $('#textarea2').dxForm('instance').getEditor('cSupphone').option('value', data.data[0].cSupphone);
//
//                               //传真
//                               $('#textarea2').dxForm('instance').getEditor('cFaxno').option('value', data.data[0].cFaxno);

                               //开户行
//                               $('#textarea2').dxForm('instance').getEditor('cBankname').option('value', data.data[0].cBankname);
//
//                               //账号
//                               $('#textarea2').dxForm('instance').getEditor('cAccountno').option('value', data.data[0].cAccountno);

                               //税号
//                               $('#textarea2').dxForm('instance').getEditor('cTaxnumber').option('value', data.data[0].cTaxnumber);

//                           },
//                           error: function () {
//                               DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                               cake.Ui.LoadPanel.close();
//                           }
//                       })
                   }

               },
           },
//           {
//               dataField: 'cDr',
//               label: {
//                   text: '预计到货时间'
//               },
//               editorType: 'dxDateBox',
//               editorOptions: {
//                   displayFormat: 'yyyy-MM-dd',
//                   type: 'datetime',
//               },
//               validationRules: [{
//                   type: 'required',
//                   message: '必填！'
//               },
//           ]
//           },
       ]
   }).dxForm('instance')
   
   let operateFormS2buts = [
   	{
           location: "before",
           locateInMenu: 'auto',
           widget: "dxButton",
           options: {
               height: "auto",
               width: "auto",
               icon: 'plus',
               text: '添加',
               onClick: function () {
                   $("#addmoni3").dxDataGrid('instance').addRow();

                   // //console.log($("#addmoni2").dxDataGrid('instance')._options.columns.dataField == 'cPrice')
                   //console.log($("#addmoni2").dxDataGrid('instance')._options.columns)



               }
           }
       },
       {
           location: "before",
           locateInMenu: 'auto',
           widget: "dxButton",
           options: {
               height: "auto",
               width: "auto",
               icon: 'remove',
               text: '删除',
               onClick: function () {
               	/*let rowsData = $("#addmoni2").dxDataGrid('instance').getSelectedRowsData()[0];
               	let rowkey = $("#addmoni2").dxDataGrid('instance')._options.dataSource;
               	rowkey.splice(rowsData);

               	$("#addmoni2").dxDataGrid('instance').refresh()*/
               	let rowsData = $("#addmoni3").dxDataGrid('instance').getSelectedRowsData();
               	let dataSource = $("#addmoni3").dxDataGrid('instance').option('dataSource');

               	let removeIndex = [];

               	for (let index = 0; index < dataSource.length; index++) {

               	if (rowsData.some(element => element == dataSource[index])) {
               	removeIndex.push(index);
               	}

               	}

               	removeIndex.reverse().forEach(element => dataSource.splice(element, 1));

               	$("#addmoni3").dxDataGrid('instance').refresh()
               }
           }
       },
       {
           location: "before",
           locateInMenu: 'auto',
           widget: "dxButton",
           options: {
               height: "auto",
               width: "auto",
               icon: 'plus',
               text: '提交',
               onClick: function (e) {

                   let cconnu = $('#addForm3').dxForm('instance').option('formData').cConnum;
                   if (cconnu == "" || cconnu == undefined || cconnu == null) {
                       DevExpress.ui.notify('请填写合同编号。', 'error', 3000);
                       return
                   }
                   let cCludecom = $('#addForm3').dxForm('instance').option('formData').cCludecom;
                   if (cCludecom == "" || cCludecom == undefined || cCludecom == null) {
                       DevExpress.ui.notify('请选择签订公司。', 'error', 3000);
                       return
                   }
                   let cSupplier = $('#addForm3').dxForm('instance').option('formData').cSupplier;
                   if (cSupplier == "" || cSupplier == undefined || cSupplier == null) {
                       DevExpress.ui.notify('请填写合同编号。', 'error', 3000);
                       return
                   }
//                   let cdr = $('#addForm3').dxForm('instance').option('formData').cDr;
//                   if (cdr == "" || cdr == undefined || cdr == null) {
//                	   DevExpress.ui.notify('请填写预计到货时间。', 'error', 3000);
//                	   return
//                   }
                   let cContype = $('#contract_type').dxForm('instance').option('formData').cContype;
                   if (cContype == "" || cContype == undefined || cContype == null) {
                       DevExpress.ui.notify('请选择合同模板类型。', 'error', 3000);
                       return
                   }
                   
//                   let cDelivdate = $('#deadline3').dxForm('instance').option('formData').cDelivdate;
//                   if (cDelivdate == "" || cDelivdate == undefined || cDelivdate == null) {
//                       DevExpress.ui.notify('请录入交货期限！！！', 'error', 3000);
//                       return
//                   }
//                   let cDelivplace = $('#deadline3').dxForm('instance').option('formData').cDelivplace;
//                   if (cDelivplace == "" || cDelivplace == undefined || cDelivplace == null) {
//                       DevExpress.ui.notify('请选择交货地点！！！', 'error', 3000);
//                       return
//                   }
//                   let cPayway = $('#pice3').dxForm('instance').option('formData').cPayway;
//                   if (cPayway == "" || cPayway == undefined || cPayway == null) {
//                       DevExpress.ui.notify('请输入付款方式！！！！', 'error', 3000);
//                       return
//                   }

                   let cBankname = $('#textarea4').dxForm('instance').option('formData').cBankname;
                   if (cBankname == "" || cBankname == undefined || cBankname == null) {
                       DevExpress.ui.notify('供应商开户行不能为空！！！！', 'error', 3000);
                       return
                   }
                   let cAccountno = $('#textarea4').dxForm('instance').option('formData').cAccountno;
                   if (cAccountno == "" || cAccountno == undefined || cAccountno == null) {
                       DevExpress.ui.notify('供应商账号不能为空！！！！', 'error', 3000);
                       return
                   }
                   
                   
                   
                   msg = {
                       ver: '53cc62f6122a436083ec083eed1dc03d',
                       session: '42f5c0d7178148938f4fda29460b815a',
                       tag: {},
                       data: {
                       },
                   };

                  
                   //合同主表信息
                   msg.data.tpCgcontractmt = $('#addForm3').dxForm('instance').option('formData');
                   //条框
                   msg.data.clause_M1S1 = $('#clauseForm').dxForm('instance').option('formData');
                   //合同物资信息
                   msg.data.tpCgorderRequest = $('#addmoni3').dxDataGrid('instance')._options.dataSource;
//                   //技术质量
//                   msg.data.technology = $('#technology').dxForm('instance').option('formData');
//            
//                   //包装方式
//                   msg.data.baoZInfo = $('#packing').dxForm('instance').option('formData');
//                   // msg.data.cSw04 = $('#sparePart').dxTextBox('instance').option('value');
                   
                   	//预计到货时间解决方案的方法
//                   //交货期限 
//                   msg.data.tpCgcontractmtt = $('#deadline3').dxForm('instance').option('formData');
//                   //交货地点
//                   msg.data.delInformation = $('#deadline31').dxForm('instance').option('formData');
                   
                   msg.data.delInformation = $('#deadline3').dxForm('instance').option('formData');
                   
//                    //console.log(msg.data.delInformation);
//                  
                   //付款方式
                   msg.data.paywayRequest = $('#pice3').dxForm('instance').option('formData');
////                    //console.log(msg.data.paywayRequest);
//                   //验收地点
//                   msg.data.signplaceRequest = $('#place').dxForm('instance').option('formData');
//                    //console.log(msg.data.signplaceRequest);
                    //需方
                   msg.data.tbCludecompany = $('#textarea3').dxForm('instance').option('formData');
                 //供应商
                   msg.data.tbSupplier = $('#textarea4').dxForm('instance').option('formData');
                 //合同条款类型
                   msg.data.cContype = $('#contract_type').dxForm('instance').option('formData').cContype;
                   msg.data.cZqconnum = $('#contract_type').dxForm('instance').option('formData').cZqconnum;
//                   msg.data.cExporter = $('#contract_type').dxForm('instance').option('formData').cExporter;
//                   msg.data.cSw10 = $('#contract_type').dxForm('instance').option('formData').cSw10;
//                   //console.log(msg.data.tbCgcontract);
                   //console.log(JSON.stringify(msg))
                   addIns3.show();
                   $.ajax({
                       // url: Cake.Piper.getAuthUrl('http://192.168.2.111:9999/tdhc_purchase/activiti/hdiuehnOk'),
                   	//
                       url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/tab/addContract'),
                       dataType: 'json', //返回格式为json           
                       async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                       data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                       type: 'post', //请求方式 get 或者post ,         
                       contentType: 'application/json',
                       success: function (data) {
                    	   addIns3.hide();
                           let select = data.msg
                           if (data.errcode == 60) {
                               DevExpress.ui.notify(select, 'error', 3000);
                               cake.Ui.LoadPanel.close();
                           }
                           if (data.errcode == 30) {
                               DevExpress.ui.notify(select, 'warning', 3000);
                               cake.Ui.LoadPanel.close();
                           }
                           if (data.errcode == 0) {
                        	   M1S11_serDel();
                        	   M1S21_serDel();
                               before_serDel();
                               initLoad13();
                               cont_supplier = [];
                               DevExpress.ui.notify(select, 'success', 3000);
                               cake.Ui.LoadPanel.close();
                               addIns2.hide();
                           }
                           
                          
                       },
                       error: function () {
                    	   addIns3.hide();
                           DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);

                       }
                   })
                   // }

               }
           }
       },
   ];
   $("#addmoni3").dxDataGrid({
       // 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
       dataSource: "data/customers.json",
       columnResizingMode: "widget",
       dataSource: addGang,
       columnAutoWidth: true,
       showBorders: true,
       allowColumnResizing: true,
       showColumnLines: true,
       showRowLines: true,
       onCellHoverChanged: '#888',
       hoverStateEnabled: true,
       noDataText: '',
       width: '100%',
       height: '100%',
       paging: {
           enabled: false
       },
       editing: {
//           mode: "batch",
    	   mode: "cell",
           allowUpdating: true
       },
       selection: {
           mode: "multiple"
       },
       loadPanel: {
           enabled: true,
           text: '请稍等片刻...'
       },
       onToolbarPreparing: function (e) {
           operateFormS2buts.forEach(item => e.toolbarOptions.items.push(item));

       },
       onEditingStart: function (e) {},
       columns: [{
               dataField: 'cOrdernum',
               caption: '请购单号',
                width: 250,
               alignment: 'left',
               allowEditing: false,
           },
           /* {
                dataField: 'cId',
                caption: '主键',
                width: 150,
                alignment: 'left',
            },*/
           {
               dataField: 'cGoodsname',
               caption: '物资名称',
                width: 120,
               alignment: 'left',
               allowEditing: false,
           },

           {
               dataField: 'cSpec',
               caption: '规格型号',
                width: 120,
               alignment: 'left',
               allowEditing: false,
           },
           {
               dataField: 'cUnit',
               caption: '单位',
                width: 50,
               alignment: 'left',
               allowEditing: false,
           },
           {
               dataField: 'cCustoms',
               caption: '报关物资名称',
                width: 120,
               alignment: 'left',
           },
           {
               dataField: 'cCuspec',
               caption: '报关物资规格',
                width: 120,
               alignment: 'left',
           },
           {
               dataField: 'cUnitspec',
               caption: '报关单位',
                width: 70,
               alignment: 'left',
           },
           {
               dataField: 'cNum',
               caption: '订购数量',
                width: 70,
               alignment: 'left',

               setCellValue: function (newData, value, currentRowData) {
                  
               	newData.cNum = value;
               	//console.log(VB_cPrice);
               	
               	// 数量
               	VB_cNum = value;
               /*	if (VB_cPrice == undefined || VB_cPrice == null){
               	return VB_cPrice == 0
               	}else{
               		VB_cNum = null;
               		VB_cPrice = null
               	}*/
               	var cPrice1 = currentRowData.cPrice;//试用
               	// // 总价
               	VB_cSumprice = newData.cNum * cPrice1;
               	var Sumprice = Number(VB_cSumprice).toFixed(2);
//               	//console.log(Sumprice);
//               	newData.cSumprice = newData.cNum * cPrice1;
               	newData.cSumprice = Sumprice;
               }
           },
           {
               dataField: 'cPrice',
               caption: '含税单价',
                width: 100,
//               alignment: 'left',
               setCellValue: function (newData, value, currentRowData) {
               	newData.cPrice = value;
               	// 单价
               	VB_cPrice = value;
               	/*if (VB_cNum == undefined || VB_cNum == null) {
               	return VB_cNum == 0
               	}else{
               		VB_cNum = null;
               		VB_cPrice = null
           		}*/
               	var cNum2 = currentRowData.cNum;//试用
               	//console.log(cNum2);
               	// 总价
               	VB_cSumprice = newData.cPrice * cNum2;
               	//控制小数点
            	var Sumprice = Number(VB_cSumprice).toFixed(2);
//               	//console.log(Sumprice);
//               	newData.cSumprice = newData.cPrice * cNum2;
               	newData.cSumprice = Sumprice;
                   
               }
           },
           {
               dataField: 'cSumprice',
               caption: '含税总价',
                width: 100,
               alignment: 'left',
                allowEditing: false,

           },
           {
//               dataField: 'cRemarkc',
               dataField: 'cRemark',
               caption: '备注',
//               alignment: 'left'
           },
       ],
       summary: {
           // 普通列求和
           totalItems: [{
               column: 'cSumprice', //计算哪列的值
               showInColumn: "cOrdernum", //显示在哪列
               displayFormat: "合计人民币:{0}", //显示格式
               // valueFormat: "currency",
//               valueFormat: "fixedPoint",
//               precision: 2,
               summaryType: "sum" ,//汇总类型--运算方式
               customizeText: function (e) {
               	//console.log(e.value)
               	var num = e.value;
               	num = num.toFixed(2);
               	return '合计民币:'+num;
               }
           }],
       },
   })

   //单条修改
   function update_fun() {
       msg = {
           ver: '53cc62f6122a436083ec083eed1dc03d',
           session: '42f5c0d7178148938f4fda29460b815a',
           tag: {},
           data: {
               cgQ003S1s2: {

               }
           },
       };
       msg.data.cgQ003S1s2 = Dup_Item;

       // 单价修改
       if (VB_cPrice == null) {

       } else {
           msg.data.cgQ003S1s2.cPrice = VB_cPrice;
       }

       // 总价修改
       if (VB_cSumprice == null) {

       } else {
           msg.data.cgQ003S1s2.cSumprice = VB_cSumprice;
       }

       $.ajax({
           url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_q002/modifyTpCgorderst'),
           dataType: 'json', //返回格式为json           
           async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
           data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
           type: 'post', //请求方式 get 或者post ,         
           contentType: 'application/json',
           success: function (data) {
               //console.log(data)
               // 修改成功后为全局的变量设置为空
               //    VB_cPricePer = null;
               //    VB_cSumprice = null;
               //    VB_cComno = null;
               //    VB_cOrdertime = null;
               //    VB_cDeltime = null;
               //    VB_cAogtime = null;
               //    VB_cProvider = null;
               //    VB_cRemark = null;
               //    M1S11_serDel()


           },
           error: function () {
               DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
           }
       })
   }
//   ss = {
//	       		dataField: 'cDeliveryday',
//		       		label: {
//		       			text: '填天数即可',
//		       		},
//		       		editorOptions:{		
//		       			width: 150,
//		       			placeholder:'天数',
//		       		},
//		       		
//		       		validationRules: [{
//		           type: 'required',
//		           message: '必填！'
//		       	 	},
//		       		{
//		       			type: 'stringLength',
//		       			max: 11,
//		       			min: 0,
//		       			message: '长度超限，最长为11！'
//		       		},
//		       		],   	
//		       	},
//	sss = [
// 	   {
//      		dataField: 'cDelivery',
//      		label: {
//      			text: '1.交货期限'
//      		},
//      		editorType: 'dxSelectBox',
//      		editorOptions: {
//      			dataSource: jhqx,
//      			valueExpr: 'cSubitemid',
//      			displayExpr: 'cSubitemdes',
//      			searchEnabled: true,
//      			showClearButton: true,
//      			//以上完成对没有联动数据源配置
//      			//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//      			// dataSource: variabl,
//      			// valueExpr: 'id',
//      			// displayExpr: 'value',
//      			// showClearButton: true,
//      			placeholder: '请选择',
////      			width: 250,
//      			onValueChanged:function(e){
//      				var Terms = $('#deadline3').dxForm('instance').getEditor('cDelivery').option('value')
//      				// //console.log(Terms)
//      				if (Terms === 'qx03'){
//      					var aa = $('#deadline3').dxForm('instance').option()
//                                ss={
//                                    dataField: 'cDeliverytime',
//                                    label: {
//                                        text: '填日期即可',
//                                    },
//                                    editorType: 'dxDateBox',
//                                    validationRules: [{
//                                        type: 'required',
//                                        message: '必填！'
//                                    },
//                                    {
//                                        type: 'stringLength',
//                                        max: 4000,
//                                        min: 0,
//                                        message: '长度超限，最长为4000！'
//                                        },
//                                    ]
//                                }
//      					aa.items=[aa.items[0],ss]
//                                        //console.log(ss)
//                                $('#deadline3').dxForm('instance').repaint()
//                                
//                            }else{
//                            	var aa = $('#deadline3').dxForm('instance').option()
//                                ss = {
//                                        dataField: 'cDeliveryday',
//                                        label: {
//                                            text: '填天数即可',
//                                        },
//                                        editorOptions:{		
//                                            width: 150,
//                                            placeholder:'天数',
//                                        },
//                                        
//                                        validationRules: [{
//                                        type: 'required',
//                                        message: '必填！'
//                                        },
//                                        {
//                                            type: 'stringLength',
//                                            max: 11,
//                                            min: 0,
//                                            message: '长度超限，最长为11！'
//                                        },
//                                        ],   	
//                                            }
//                                aa.items=[aa.items[0],ss]
//                                $('#deadline3').dxForm('instance').repaint()
//                            }
//                            $('#deadline3').dxForm('instance').repaint()
//                        }
//      		},
//				
//      		validationRules: [{
//      			type: 'required',
//      			message: '必填！'
//      		},
//      		{
//      			type: 'stringLength',
//      			max: 4000,
//      			min: 0,
//      			message: '长度超限，最长为4000！'
//      		},
//      		]
//      	},
//      	ss,        
//      ]
//   // 交货期限
//   $('#deadline3').dxForm({
//       formData: adddatapo,
//       validationGroup: validationGroupName,
//       colCount: 2,
//       items: sss,
//   }).dxForm('instance');
//   // 交货地点
//   $('#deadline31').dxForm({
//	   formData: adddatapo,
//	   validationGroup: validationGroupName,
//	   colCount: 1,
//	   items: [
//	   {
//		   dataField: 'cDelivplace',
//		   label: {
//			   text: '2.交货地点'
//		   },
//		   editorType: 'dxSelectBox',
//		   validationRules: [{
//			   type: 'required',
//			   message: '必填！'
//		   },
//		   {
//			   type: 'stringLength',
//			   max: 1000,
//			   min: 0,
//			   message: '长度超限，最长为1000！'
//		   },
//		   ],
//		   editorOptions: {
//			   dataSource: jhdd1,
//			   valueExpr: 'cSubitemid',
//			   displayExpr: 'cSubitemdes',
//			   searchEnabled: true,
//			   showClearButton: true,
//			   //以上完成对没有联动数据源配置
//			   //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//			   // dataSource: variabl,
//			   // valueExpr: 'id',
//			   // displayExpr: 'value',
//			   // showClearButton: true,
//			   placeholder: '请选择',
//		   },
//	   },
//	   ]
//   }).dxForm('instance');
   
   
   
   $('#deadline3').dxForm({
	   formData: adddatapo,
	   validationGroup: validationGroupName,
	   colCount: 1,
	   items: [
		   {
               dataField: 'cDelivdate',
               label: {
                   text: '1.交货期限'
               },
               validationRules: [{
                   type: 'required',
                   message: '必填！'
               },
               {
                   type: 'stringLength',
                   max: 4000,
                   min: 0,
                   message: '长度超限，最长为4000！'
                   },
               ],
               editorOptions: {
                   showClearButton: true,
                   value: '自双方合同盖章生效之日起 *日内。'
               }, 
           },
	   {
		   dataField: 'cDelivplace',
		   label: {
			   text: '2.交货地点'
		   },
		   editorType: 'dxSelectBox',
		   validationRules: [{
			   type: 'required',
			   message: '必填！'
		   },
		   {
			   type: 'stringLength',
			   max: 1000,
			   min: 0,
			   message: '长度超限，最长为1000！'
		   },
		   ],
		   editorOptions: {
			   dataSource: jhdd1,
			   valueExpr: 'cSubitemid',
			   displayExpr: 'cSubitemdes',
			   searchEnabled: true,
			   showClearButton: true,
			   //以上完成对没有联动数据源配置
			   //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
			   // dataSource: variabl,
			   // valueExpr: 'id',
			   // displayExpr: 'value',
			   // showClearButton: true,
			   placeholder: '请选择',
		   },
	   },
	   ]
   }).dxForm('instance');
   // 付款方式
   $('#pice3').dxForm({
       formData: adddatapic,
       validationGroup: validationGroupName,
       colCount: 1,
       items: [{
           dataField: 'cPayway',
           label: {
               text: '3.付款方式'
           },
           editorOptions: {
               //以上完成对没有联动数据源配置
               //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
               // dataSource: variabl,
               // valueExpr: 'id',
               // displayExpr: 'value',
               // showClearButton: true,
               showClearButton: true
           },
           validationRules: [{
               type: 'required',
               message: '必填！'
           },
           {
               type: 'stringLength',
               max: 4000,
               min: 0,
               message: '长度超限，最长为4000！'
           },
       ]
       }, ]
   }).dxForm('instance');
	$('#clauseForm').dxForm({
		formData: adddata,
		validationGroup: validationGroupName,
		colCount: 1,
		items: [
			{
				dataField: 'cSw01TpCgclausedata',
				label: {
					text: '扩展字段1',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw02TpCgclausedata',
				label: {
					text: '扩展字段2',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw03TpCgclausedata',
				label: {
					text: '扩展字段3',
					visible:false,
//					readOnly:true,
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw04TpCgclausedata',
				label: {
					text: '扩展字段4',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw05TpCgclausedata',
				label: {
					text: '扩展字段5',
					visible:false,
//					readOnly:true,
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw06TpCgclausedata',
				label: {
					text: '扩展字段6',
					visible:false
						
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw07TpCgclausedata',
				label: {
					text: '扩展字段7',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw08TpCgclausedata',
				label: {
					text: '扩展字段8',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw09TpCgclausedata',
				label: {
					text: '扩展字段9',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw10TpCgclausedata',
				label: {
					text: '扩展字段10',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw11TpCgclausedata',
				label: {
					text: '扩展字段11',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw12TpCgclausedata',
				label: {
					text: '扩展字段12',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw13TpCgclausedata',
				label: {
					text: '扩展字段13',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为4000！'
				},]
			},
			{
				dataField: 'cSw14TpCgclausedata',
				label: {
					text: '扩展字段14',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为400！'
				},]
			},
			{
				dataField: 'cSw15TpCgclausedata',
				label: {
					text: '扩展字段15',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为400！'
				},]
			},
			{
				dataField: 'cSw16TpCgclausedata',
				label: {
					text: '扩展字段16',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw17TpCgclausedata',
				label: {
					text: '扩展字段17',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw18TpCgclausedata',
				label: {
					text: '扩展字段18',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw19TpCgclausedata',
				label: {
					text: '扩展字段19',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw20TpCgclausedata',
				label: {
					text: '扩展字段20',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw21TpCgclausedata',
				label: {
					text: '扩展字段21',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw22TpCgclausedata',
				label: {
					text: '扩展字段22',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw23TpCgclausedata',
				label: {
					text: '扩展字段23',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw24TpCgclausedata',
				label: {
					text: '扩展字段24',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw25TpCgclausedata',
				label: {
					text: '扩展字段25',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw26TpCgclausedata',
				label: {
					text: '扩展字段26',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw27TpCgclausedata',
				label: {
					text: '扩展字段27',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw28TpCgclausedata',
				label: {
					text: '扩展字段28',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw29TpCgclausedata',
				label: {
					text: '扩展字段29',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw30TpCgclausedata',
				label: {
					text: '扩展字段30',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					showClearButton: true,
					searchEnable: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw31TpCgclausedata',
				label: {
					text: '扩展字段31',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw32TpCgclausedata',
				label: {
					text: '扩展字段32',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw33TpCgclausedata',
				label: {
					text: '扩展字段33',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw34TpCgclausedata',
				label: {
					text: '扩展字段34',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw35TpCgclausedata',
				label: {
					text: '扩展字段35',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw36TpCgclausedata',
				label: {
					text: '扩展字段36',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw37TpCgclausedata',
				label: {
					text: '扩展字段37',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw38TpCgclausedata',
				label: {
					text: '扩展字段38',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					readOnly:true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw39TpCgclausedata',
				label: {
					text: '扩展字段39',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
					
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw40TpCgclausedata',
				label: {
					text: '扩展字段40',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw41TpCgclausedata',
				label: {
					text: '扩展字段41',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
//					placeholder: '备注修改的条款记录1',
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw42TpCgclausedata',
				label: {
					text: '扩展字段42',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw43TpCgclausedata',
				label: {
					text: '扩展字段43',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw44TpCgclausedata',
				label: {
					text: '扩展字段44',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw45TpCgclausedata',
				label: {
					text: '扩展字段45',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw46TpCgclausedata',
				label: {
					text: '扩展字段46',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw47TpCgclausedata',
				label: {
					text: '扩展字段47',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw48TpCgclausedata',
				label: {
					text: '扩展字段48',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
			{
				dataField: 'cSw49TpCgclausedata',
				label: {
					text: '扩展字段49',
					visible:false
				},
				editorType: "dxTextArea",
				editorOptions: {
					searchEnable: true,
					showClearButton: true,
				},
				validationRules: [{
					type: 'stringLength', max: 4000, min: 0,
					message: '长度超限，最长为200！'
				},]
			},
//			{
//				dataField: 'cSw51TpCgclausedata',
//				label: {
//					text: '扩展字段51',
//					visible:false
//				},
//				editorType: "dxTextArea",
//				editorOptions: {
//					searchEnable: true,
//					showClearButton: true,
//					placeholder: '备注修改的条款记录',
//				},
//				validationRules: [{
//					type: 'stringLength', max: 4000, min: 0,
//					message: '长度超限，最长为200！'
//				},]
//			},

		]
	}).dxForm('instance')



   $('#textarea3').dxForm({
       // width: "100%",
       // height: "200px",
       formData: adddata,
       validationGroup: validationGroupName,
       colCount: 1,
       items: [{
               dataField: 'cCludecom',
               label: {
                   text: '单位名称'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
                   //                        value: '青山控股集团有限公司',
               },
           },
           {
               dataField: 'cComaddress',
               label: {
                   text: '单位地址'
               },

               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
                   //                        value: '浙江省温州市龙湾区龙祥路2666号',
               },
           },
           {
               dataField: '',
               label: {
                   text: '法定代表人（或委托代理人）'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cComphone',
               label: {
                   text: '电话'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
                   //                        value: '13777770869'
               },
           },
           {
               dataField: 'cComfaxno',
               label: {
                   text: '传真'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
               },
           },
           {
               dataField: 'cCombankname',
               label: {
                   text: '开户银行'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
                   //                        value: '华夏银行股份有限公司温州分行龙湾支行'
               },
           },
           {
               dataField: 'cComaccountno',
               label: {
                   text: '账号'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
                   //                        value: '4270 2800 0180 8100 0129 29'
               },
           },
           {
               dataField: 'cComtaxnumber',
               label: {
                   text: '税号'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
                   //                        value: '913 303 007 511 762 26P'
               },
           },
       ]
   }).dxForm('instance')




   // $("#textarea2").dxTextArea({
   //     width: "580px",
   //     height: "200px",
   //     placeholder: "供方...."
   // })

   $('#textarea4').dxForm({
       // width: "100%",
       // height: "200px",
       formData: adddata,
       validationGroup: validationGroupName,
       colCount: 1,
       items: [{
               dataField: 'cSupplier',
               label: {
                   text: '单位名称'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cSupaddress',
               label: {
                   text: '单位地址'
               },

               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: '',
               label: {
                   text: '法定代表人（或委托代理人）'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cSupphone',
               label: {
                   text: '电话'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cFaxno',
               label: {
                   text: '传真'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cBankname',
               label: {
                   text: '开户银行'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cAccountno',
               label: {
                   text: '账号'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
           {
               dataField: 'cTaxnumber',
               label: {
                   text: '税号'
               },
               editorType: 'dxTextBox',
               editorOptions: {
                   searchEnable: true,
                   showClearButton: true,
                   readOnly: true,
               },
           },
       ]
   }).dxForm('instance')
}

    //Script ------------------------------------



})