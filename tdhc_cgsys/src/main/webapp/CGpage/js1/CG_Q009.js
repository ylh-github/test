///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////

let xxCon; //供方带值

let Dup_Item;
let VB_cNum;
let VB_cPrice;
let VB_cSumprice;
let calculation = {};
let dhqk = [];
let addGang = []
let ziGang = [];
let guiLei = [];
let tqyq = [];
let sfcw = [];
let kpxx = [];
let cgy = []
let TP_CGORDERST_C_TYPENAME = []
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
let addIns2
let addIns2_form;
let cTime = new Date();
let outForm;
let adddatapac = {};
let adddatapo = {};
let adddatapic = {};
let adddatapla = {};
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
let change = ''; //区分增加和修改的状态,1为增加;2为修改
let wanchengzhuangtai = []
let shifoujixu = []
let shenhezhuangtai = []
let tijiaozhuangtai = []
let caigoubumen = []
let caigouyuan = []
let wzwczt = []
let fkqk = []
let cont_supplier = []; //供应商
let contact_Type = []; //合同类型
let comp_Cludecom = []; //签订公司
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
let nian = []
    //查询区域数据
let validationGroupName = 'validationGroupName';
//当存在不需要与后台通信的数据框,且需要自行添加的选择框
///////////////////////////////////////////////////////////////////////////////////////////
/////////////$function！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
window.onload = () => {
    DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
    console.log('pp');
};
$(function() {
    let i = 0 ;
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
                    dataField: 'cCheckway',
                    label: {
                        text: '到货情况'
                    },
                    editorType: 'dxTagBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: dhqk,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        searchEnabled:true,
                        showClearButton: true,
                        width: '100%',
                        showSelectionControls: true,
                        placeholder:'点击选择',
                        onSelectionChanged:function(e){
                            // let aa = 
                            // console.log(e.element.find('.dx-texteditor-input'))
                            i++
                            if(i>1){
                                // console.log(e)
                                // console.log($('.dx-tagbox:not(.dx-tagbox-single-line) .dx-texteditor-input'))
                                e.element.find('.dx-texteditor-input').hide()
                                if(e.addedItems==false){
                                    // console.log(22)
                                    e.element.find('.dx-texteditor-input').show()
                                }
                            }
                        }
                    },
                },
                {
                    dataField: 'cSw20',
                    label: {
                        text: '合同到货进度'
                    },
                    editorType: 'dxTagBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: tqyq,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        searchEnabled:true,
                        showClearButton: true,
                        width: '100%',
                        showSelectionControls: true,
                        placeholder:'点击选择',
                        onSelectionChanged:function(e){
                            // let aa = 
                            // console.log(e.element.find('.dx-texteditor-input'))
                            i++
                            if(i>1){
                                // console.log(e)
                                // console.log($('.dx-tagbox:not(.dx-tagbox-single-line) .dx-texteditor-input'))
                                e.element.find('.dx-texteditor-input').hide()
                                if(e.addedItems==false){
                                    // console.log(22)
                                    e.element.find('.dx-texteditor-input').show()
                                }
                            }
                        }
                    },
                },
                {
                    dataField: 'cSw19',
                    label: {
                        text: '物资到货进度'
                    },
                    editorType: 'dxTagBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: tqyq,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        searchEnabled:true,
                        showClearButton: true,
                        width: '100%',
                        showSelectionControls: true,
                        placeholder:'点击选择',
                        onSelectionChanged:function(e){
                            // let aa = 
                            // console.log(e.element.find('.dx-texteditor-input'))
                            i++
                            if(i>1){
                                // console.log(e)
                                // console.log($('.dx-tagbox:not(.dx-tagbox-single-line) .dx-texteditor-input'))
                                e.element.find('.dx-texteditor-input').hide()
                                if(e.addedItems==false){
                                    // console.log(22)
                                    e.element.find('.dx-texteditor-input').show()
                                }
                            }
                        }
                    },

                },
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
            ]
        }).dxForm('instance')
        //完成对查询条件的自动生成
        //以下为查询form的代码
    searchdataFormM2 = $('#searchFormM2').dxForm({
        formData: searchdataM2,
        ////当参数小于三个时为五个,大于等于三时统一乘二
        ////王晶晶给改为自适应编码
        colCountByScreen: {
            lg: 1,
            md: 2,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [
            //        	{
            //                dataField: 'startTime',
            //                label: {
            //                    text: '开始时间'
            //                },
            //                editorType: "dxDateBox",
            //                editorOptions: {
            //                    width: "100%",
            //                    type: "date",
            //                    displayFormat: 'yyyy-MM-dd',
            //                    value: new Date(cTime.getFullYear(),'00','01'),
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
            {
                dataField: 'name',
                label: {
                    text: '归类类别'
                },
                editorOptions: {
                    showClearButton: true,
                },
                editorType: "dxSelectBox",
                            editorOptions: {                 dataSource: guiLei,                 valueExpr: 'name',                 displayExpr: 'name',                 showClearButton: true,                 width: '100%',                 searchEnabled: true,              }
            },
        ]
    }).dxForm('instance');
    //请购物资按钮
    // let operateFormS1S2 = [{
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
    //                 M1S11Q_serDel();
    //             }
    //         }
    //     },
    //     {
    //         location: "before",
    //         locateInMenu: 'auto',
    //         widget: "dxButton",
    //         options: {
    //             height: "auto",
    //             width: "auto",
    //             icon: "remove",
    //             name: 'M1S11S',
    //             text: '删除',
    //             onClick: function() {
    //                 msg = {
    //                     ver: '53cc62f6122a436083ec083eed1dc03d',
    //                     session: '42f5c0d7178148938f4fda29460b815a',
    //                     tag: {},
    //                     data: {}
    //                 };
    //                 let grid = $('#dataGridS1').dxDataGrid('instance');
    //                 let rowsData = grid.getSelectedRowsData()
    //                 if (rowsData.length < 1) {
    //                     // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
    //                     DevExpress.ui.notify('请先查询一条要添加的数据。', 'info', 3000);
    //                     return;
    //                 }
    //                 //选中的值
    //                 msg.data.listData = rowsData;
    //                 var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "确认删除");
    //                 result.done(function(dialogResult) {
    //                     if (dialogResult) {
    //                         cake.Ui.LoadPanel.show()
    //                         $.ajax({
    //                             url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S11D'),
    //                             dataType: 'json', //返回格式为json      
    //                             async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
    //                             data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
    //                             type: 'post', //请求方式 get 或者post ,       
    //                             contentType: 'application/json',
    //                             success: function(data) {
    //                                 let msgstr = data.msg;
    //                                 if (data.errcode == 0) {
    //                                     M1S11Q_serDel();
    //                                     S1S21_SSRT()
    //                                     S1S31_SSRT()
    //                                     DevExpress.ui.notify(msgstr, 'success', 3000);
    //                                 } else {
    //                                     DevExpress.ui.notify(msgstr, 'info', 3000);
    //                                 }
    //                             },
    //                             error: function() {
    //                                 DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
    //                             }
    //                         })

    //                     }
    //                     cake.Ui.LoadPanel.close();
    //                 })
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
                        name: 'M1S11Q',
                        text: '查询',
                        onClick: function() {
                            M1S11Q_serDel();
                        }
                    }
                },
                {
                    name: 'M1S11Q',
                    itemType: 'button',
                    buttonOptions: {
                        height: "auto",
                        width: "auto",
                        icon: "remove",
                        name: 'M1S11S',
                        text: '删除',
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
                            msg.data.listData = rowsData;
                            var result = DevExpress.ui.dialog.confirm("您确定要删除吗?", "确认删除");
                            result.done(function(dialogResult) {
                                if (dialogResult) {
                                    cake.Ui.LoadPanel.show()
                                    $.ajax({
                                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S11D'),
                                        dataType: 'json', //返回格式为json      
                                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                                        type: 'post', //请求方式 get 或者post ,       
                                        contentType: 'application/json',
                                        success: function(data) {
                                            let msgstr = data.msg;
                                            if (data.errcode == 0) {
                                                M1S11Q_serDel();
                                                S1S21_SSRT()
                                                S1S31_SSRT()
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
                                cake.Ui.LoadPanel.close();
                            })
                        }
                    }
                },

            ]
        })
        //暂时存放区的按钮
    let operateFormS1S3 = [
        {
            location: "before",
            locateInMenu: 'auto',
            widget: "dxButton",
            options: {
                height: "auto",
                width: "auto",
                icon: "search",
                name: 'M1S22Q',
                text: '查询',
                onClick: function() {
                    M1S22Q_serDel();
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
                icon: "remove",
                name: 'M1S11S',
                text: '物资类别清除',
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
                        DevExpress.ui.notify('请先查询一条要添加的数据。', 'info', 3000);
                        return;
                    }
                    //选中的值
                    msg.data.tpCgcontractst = rowsData;
                    var result = DevExpress.ui.dialog.confirm("您确定要撤销合同吗?", "确认撤销");
                    result.done(function(dialogResult) {
                        if (dialogResult) {
                            cake.Ui.LoadPanel.show()
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S31D'),
                                dataType: 'json', //返回格式为json      
                                async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                                type: 'post', //请求方式 get 或者post ,       
                                contentType: 'application/json',
                                success: function(data) {
                                    let msgstr = data.msg;
                                    if (data.errcode == 0) {
                                        //						                	M1S11Q_serDel();
                                        DevExpress.ui.notify(msgstr, 'success', 3000);
                                    } else {
                                        DevExpress.ui.notify(msgstr, 'info', 3000);
                                    }
                                    M1S22Q_serDel();
                                },
                                error: function() {
                                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                }
                            })

                        }
                        cake.Ui.LoadPanel.close();
                    })
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
                name: 'S1S21PZ1',
                icon: 'save',
                text: '采购员批注',
                onClick: function() {
                    let grid1 = $('#dataGridS3').dxDataGrid('instance');
                    let selectedRowKeys = grid1.getSelectedRowKeys()
                    let rowsData = grid1.getSelectedRowsData()
                    if (selectedRowKeys.length < 1) {
                        DevExpress.ui.notify('请选择一条要批注的物资。', 'info', 3000);
                        return;
                    }
                    addIns = $('#addmotai').dxPopup({
                        //模态框增加name    
                        width: 900,
                        height: 250
                    }).dxPopup('instance')
                    addIns.option('title', '添加批注');
                    addIns.show();
                    // 调用模态框函数    
                    S1S21PZ()
                    S1S21addIns.option('formData', new Object())
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
                name: 'S1S21PZ2',
                icon: 'save',
                text: '领导批注',
                onClick: function() {
                    let grid1 = $('#dataGridS3').dxDataGrid('instance');
                    let selectedRowKeys = grid1.getSelectedRowKeys()
                    let rowsData = grid1.getSelectedRowsData()
                    if (selectedRowKeys.length < 1) {
                        DevExpress.ui.notify('请选择一条要批注的物资。', 'info', 3000);
                        return;
                    }
                    addIns = $('#addmotai').dxPopup({
                        //模态框增加name    
                        width: 900,
                        height: 250
                    }).dxPopup('instance')
                    addIns.option('title', '添加批注');
                    addIns.show();
                    // 调用模态框函数    
                    S1S21PZ2()
                    S1S21addIns.option('formData', new Object())
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
                name: 'S1S21PZ3',
                icon: 'save',
                text: '国外批注',
                onClick: function() {
                    let grid1 = $('#dataGridS3').dxDataGrid('instance');
                    let selectedRowKeys = grid1.getSelectedRowKeys()
                    let rowsData = grid1.getSelectedRowsData()
                    if (selectedRowKeys.length < 1) {
                        DevExpress.ui.notify('请选择一条要批注的物资。', 'info', 3000);
                        return;
                    }
                    addIns = $('#addmotai').dxPopup({
                        //模态框增加name    
                        width: 900,
                        height: 250
                    }).dxPopup('instance')
                    addIns.option('title', '添加批注');
                    addIns.show();
                    // 调用模态框函数    
                    S1S21PZ3()
                    S1S21addIns.option('formData', new Object())
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
                name: 'S1S21CJ',
                icon: 'save',
                text: '添加厂家信息',
                onClick: function() {
                    let grid1 = $('#dataGridS3').dxDataGrid('instance');
                    let selectedRowKeys = grid1.getSelectedRowKeys()
                    let rowsData = grid1.getSelectedRowsData()
                    if (selectedRowKeys.length < 1) {
                        DevExpress.ui.notify('请选择一条要添加信息的物资。', 'info', 3000);
                        return;
                    }
                    addIns = $('#addmotai').dxPopup({
                        //模态框增加name    
                        width: 900,
                        height: 250
                    }).dxPopup('instance')
                    addIns.option('title', '添加厂家信息');
                    addIns.show();
                    // 调用模态框函数    
                    S1S21CJ()
                    S1S21addIns.option('formData', new Object())
                    S1S21addIns.getEditor('cSw16').option('value', new Date());
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
        		name: 'S1S21XGCJ',
        		icon: 'save',
        		text: '修改厂家信息',
        		onClick: function() {
        			let grid1 = $('#dataGridS3').dxDataGrid('instance');
        			let selectedRowKeys = grid1.getSelectedRowKeys()
        			let rowsData = grid1.getSelectedRowsData()[0]
        			if (selectedRowKeys.length < 1) {
        				DevExpress.ui.notify('请选择一条要添加信息的物资。', 'info', 3000);
        				return;
        			}
        			if (selectedRowKeys.length > 1) {
        				DevExpress.ui.notify('请选择一条要添加信息的物资。', 'info', 3000);
        				return;
        			}
        			addIns = $('#addmotai').dxPopup({
        				//模态框增加name    
        				width: 900,
        				height: 250
        			}).dxPopup('instance')
        			addIns.option('title', '修改厂家信息');
        			addIns.show();
        			// 调用模态框函数    
        			S1S21XGCJ()
        			S1S21addIns.option('formData', new Object())
        			S1S21addIns.getEditor('cSw15').option('value',rowsData.cSw15);
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
                name: 'S1S21TY',
                icon: 'save',
                text: '提前/延期',
                onClick: function() {
                    let grid1 = $('#dataGridS3').dxDataGrid('instance');
                    let selectedRowKeys = grid1.getSelectedRowKeys()
                    let rowsData = grid1.getSelectedRowsData()
                    if (selectedRowKeys.length < 1) {
                        DevExpress.ui.notify('请选择要进行标记的物资。', 'info', 3000);
                        return;
                    }
                    addIns = $('#addmotai').dxPopup({
                        //模态框增加name    
                        width: 900,
                        height: 250
                    }).dxPopup('instance')
                    addIns.option('title', '提前/延期');
                    addIns.show();
                    // 调用模态框函数    
                    S1S21TY()
                    S1S21addIns.option('formData', new Object())
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
                name: 'M1S11_F1',
                icon: 'save',
                text: '物资导出', //S1S23U 改为 采购进度修改
                onClick: function() {
                    let grid = $('#dataGridS3').dxDataGrid('instance');
                    let rowsData = grid.getSelectedRowsData()
                    let selectedRowKeys = grid.getSelectedRowKeys()
                    if (selectedRowKeys.length < 1) {
                        DevExpress.ui.notify('请选择要导出的物资。', 'info', 3000);
                        return;
                    }

                    msg = {
                        ver: '53cc62f6122a436083ec083eed1dc03d',
                        session: '42f5c0d7178148938f4fda29460b815a',
                        tag: {},
                        data: {}
                    };
                    //        		        
                    msg.data.shipnum = $('#dataGridS3').dxDataGrid('instance').getSelectedRowKeys();
                    console.log(JSON.stringify(msg))
                    $.ajax({
                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21DC'),
                        dataType: 'json', //返回格式为json      
                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                        type: 'post', //请求方式 get 或者post ,       
                        contentType: 'application/json',
                        success: function(data) {
                            addEditPopup.show();
                            //                    			msg.data.list = rowsData;//物资
                            let select;
                            select = data.data
                            console.log(select)
                            addGang.splice(0, addGang.length);
                            select.forEach(item => addGang.push(item));
                            $('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
                            $('#addGangGrid').dxDataGrid('instance').deselectAll()
                            $('#addGangGrid').dxDataGrid('instance').refresh()

                        },
                        error: function() {
                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                        }
                    })
                }
            }
        },
    ];

    $('#operateFormM3S3').dxForm({
        width: '100%',
        colCount: 200,
        items: [{
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: "search",
                    name: 'M1S22Q',
                    text: '查询',
                    onClick: function() {
                        M1S22Q_serDel();
                    }
                }
            },
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    icon: "remove",
                    name: 'M1S11S',
                    text: '物资类别清除',
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
                            DevExpress.ui.notify('请先查询一条要添加的数据。', 'info', 3000);
                            return;
                        }
                        //选中的值
                        msg.data.tpCgcontractst = rowsData;
                        var result = DevExpress.ui.dialog.confirm("您确定要撤销合同吗?", "确认撤销");
                        result.done(function(dialogResult) {
                            if (dialogResult) {
                                cake.Ui.LoadPanel.show()
                                $.ajax({
                                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S31D'),
                                    dataType: 'json', //返回格式为json      
                                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                                    type: 'post', //请求方式 get 或者post ,       
                                    contentType: 'application/json',
                                    success: function(data) {
                                        let msgstr = data.msg;
                                        if (data.errcode == 0) {
                                            //						                	M1S11Q_serDel();
                                            DevExpress.ui.notify(msgstr, 'success', 3000);
                                        } else {
                                            DevExpress.ui.notify(msgstr, 'info', 3000);
                                        }
                                        M1S22Q_serDel();
                                    },
                                    error: function() {
                                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                                    }
                                })

                            }
                            cake.Ui.LoadPanel.close();
                        })
                    }
                }
            },
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    name: 'S1S21PZ1',
                    icon: 'save',
                    text: '采购员批注',
                    onClick: function() {
                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要批注的物资。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 900,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '添加批注');
                        addIns.show();
                        // 调用模态框函数    
                        S1S21PZ()
                        S1S21addIns.option('formData', new Object())
                    }
                }
            },
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    name: 'S1S21PZ2',
                    icon: 'save',
                    text: '领导批注',
                    onClick: function() {
                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要批注的物资。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 900,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '添加批注');
                        addIns.show();
                        // 调用模态框函数    
                        S1S21PZ2()
                        S1S21addIns.option('formData', new Object())
                    }
                }
            },
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    name: 'S1S21PZ3',
                    icon: 'save',
                    text: '国外批注',
                    onClick: function() {
                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要批注的物资。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 900,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '添加批注');
                        addIns.show();
                        // 调用模态框函数    
                        S1S21PZ3()
                        S1S21addIns.option('formData', new Object())
                    }
                }
            },
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    name: 'S1S21CJ',
                    icon: 'save',
                    text: '添加厂家信息',
                    onClick: function() {
                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择一条要添加信息的物资。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 900,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '添加厂家信息');
                        addIns.show();
                        // 调用模态框函数    
                        S1S21CJ()
                        S1S21addIns.option('formData', new Object())
                        S1S21addIns.getEditor('cSw16').option('value', new Date());
                    }
                }
            },
            {
            	name: 'S1S21XGCJ',
            	itemType: 'button',
            	buttonOptions: {
            		icon: 'save',
            		text: '修改厂家信息',
            		onClick: function() {
            			let grid1 = $('#dataGridS3').dxDataGrid('instance');
            			let selectedRowKeys = grid1.getSelectedRowKeys()
            			let rowsData = grid1.getSelectedRowsData()[0]
            			if (selectedRowKeys.length < 1) {
            				DevExpress.ui.notify('请选择一条要添加信息的物资。', 'info', 3000);
            				return;
            			}
            			if (selectedRowKeys.length > 1) {
            				DevExpress.ui.notify('请选择一条要添加信息的物资。', 'info', 3000);
            				return;
            			}
            			addIns = $('#addmotai').dxPopup({
            				//模态框增加name    
            				width: 900,
            				height: 250
            			}).dxPopup('instance')
            			addIns.option('title', '修改厂家信息');
            			addIns.show();
            			// 调用模态框函数    
            			S1S21XGCJ()
            			S1S21addIns.option('formData', new Object())
            			S1S21addIns.getEditor('cSw15').option('value',rowsData.cSw15);
            		}
            	}
            },
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    name: 'S1S21TY',
                    icon: 'save',
                    text: '提前/延期',
                    onClick: function() {
                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择要进行标记的物资。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 900,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '提前/延期');
                        addIns.show();
                        // 调用模态框函数    
                        S1S21TY()
                        S1S21addIns.option('formData', new Object())
                    }
                }
            },
            {
                itemType: 'button',
                buttonOptions: {
                    height: "auto",
                    width: "auto",
                    name: 'M1S11_F1',
                    icon: 'save',
                    text: '物资导出', //S1S23U 改为 采购进度修改
                    onClick: function() {
                        let grid = $('#dataGridS3').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择要导出的物资。', 'info', 3000);
                            return;
                        }

                        msg = {
                            ver: '53cc62f6122a436083ec083eed1dc03d',
                            session: '42f5c0d7178148938f4fda29460b815a',
                            tag: {},
                            data: {}
                        };
                        //        		        
                        msg.data.shipnum = $('#dataGridS3').dxDataGrid('instance').getSelectedRowKeys();
                        console.log(JSON.stringify(msg))
                        $.ajax({
                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21DC'),
                            dataType: 'json', //返回格式为json      
                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                            type: 'post', //请求方式 get 或者post ,       
                            contentType: 'application/json',
                            success: function(data) {
                                addEditPopup.show();
                                //                    			msg.data.list = rowsData;//物资
                                let select;
                                select = data.data
                                console.log(select)
                                addGang.splice(0, addGang.length);
                                select.forEach(item => addGang.push(item));
                                $('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
                                $('#addGangGrid').dxDataGrid('instance').deselectAll()
                                $('#addGangGrid').dxDataGrid('instance').refresh()

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

    //完成对查询条件的自动生成
    ////////////////////////////////////
    //////表格属性生成/////////////////)
    ////////////////////////////////////
    var dataGridS1columns = [
        //    	{
        //        dataField: 'code',
        //        caption: '类别编号',
        //    },
        {
            dataField: 'name',
            caption: '类别名称',
            // width: 120,
            // alignment: 'center',
        },
        {
            dataField: 'creator',
            caption: '创建人',
        },
        {
            dataField: 'createTime',
            caption: '创建时间',
            dataType: "date",
            format: "yyyy-MM-dd"
        },
        //            {
        //                dataField: 'updater',
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
        deferRendering: false,
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
        height: 620,
        width: '100%',
        //        scrolling: {
        //            mode: 'virtual'
        //        },
        selection: {
            mode: 'single'
        },
        loadPanel: {
            enabled: true
        },
        paging: {
            pageSize: 40,
            enabled: true,
        },
        keyDown: true,
        pager: {
            // showPageSizeSelector: true,
            // allowedPageSizes: [5, 10, 20 , 25 ,30],
            showInfo: true,
            showNavigationButtons: true

        },
        columns: dataGridS1columns,
        // onToolbarPreparing: function(e) {
        //     operateFormS1S2.forEach(item => e.toolbarOptions.items.push(item));
        // }
    }).dxDataGrid('instance');

    //合同表
    $('#dataGridS2').dxDataGrid({
        dataSource: tabledataS2,
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
        height: 400,
        width: '100%',
        //        scrolling: {
        //            mode: 'virtual'
        //        },
        selection: {
            //            mode: 'multiple',
            mode: 'single',
            //            showCheckBoxesMode:'always'
        },
        loadPanel: {
            enabled: true
        },
        /* paging: {
             pageSize: 1,
             enabled: true,
         },*/
//        keyDown: true,
        /*pager: {
            // showPageSizeSelector: true,
            // allowedPageSizes: [5, 10, 20 , 25 ,30],
            PageNavigator: true,
            showInfo: true,
            showNavigationButtons: true,
            infoText: "{0}/{1} "
        },*/
        columns: [{
                dataField: 'cConnum',
                caption: '合同号',
            },
            {
                dataField: 'cSw03',
                caption: '货物名称',
                // width: 120,
                // alignment: 'center',
            },
            {
                dataField: 'cSupplier',
                caption: '供应商',
            },
            {
                dataField: 'cSw10',
                caption: '采购员',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cSw10);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cCludecom',
                caption: '签订公司',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cCludecom);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
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
                dataField: 'cConmoney',
                caption: '合同金额',
            },
            {
                dataField: 'cSw01',
                caption: '已付款金额',
            },
            {
                dataField: 'cSw02',
                caption: '未付款金额',
            },
            {
                dataField: 'cPayway',
                caption: '付款方式',
                // width: 240,
            },
            {
                dataField: 'cCludeaddr',
                caption: '到货地点',
            },
            {
                dataField: 'cGettime',
                caption: '最后到货时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            //            {
            //                dataField: 'cSw12',
            //                caption: '提前/延迟',
            //            }, 
            {
                dataField: 'cCheckway',
                caption: '到货情况',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = dhqk.find(item => item.cSubitemid == rowData.cCheckway);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cSignstep',
                caption: '付款情况',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = fkqk.find(item => item.cSubitemid == rowData.cSignstep);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cTransway',
                caption: '开票信息',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = kpxx.find(item => item.cSubitemid == rowData.cTransway);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },

            {
                dataField: 'cState',
                caption: '状态',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cSw15',
                caption: '类别',
            },
            {
                dataField: 'cSw17',
                caption: '是否出错',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = sfcw.find(item => item.cSubitemid == rowData.cSw17);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cSw19',
                caption: '错误原因',
            },
            {
                dataField: 'cSw20',
                caption: '提前/延期',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = tqyq.find(item => item.cSubitemid == rowData.cSw20);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cSw21',
                caption: '提前/延期原因',
            },
            {
                dataField: 'cSw24',
                caption: '验收单',
            },
            {
                dataField: 'cSw26',
                caption: '验收单时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cSw25',
                caption: '质保金',
            },

            {
                dataField: 'cSw27',
                caption: '质保金时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },

            {
                dataField: 'cCreater',
                caption: '文员',
            },
            {
                dataField: 'cId',
                caption: '合同编号',
                // width: 1,
                // alignment: 'center',
            },
        ]

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
        height: '100%',
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
            pageSize: 50,
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
                // width: 120,
                allowEditing: false,
                // alignment: 'center',
            },
            {
                dataField: 'cConline',
                caption: '合同行号',
                // width: 120,
                allowEditing: false,
                // alignment: 'center',
            },
            {
                dataField: 'cSw03',
                caption: '请购单号',
                // width: 120,
                // alignment: 'center',
            },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
                // width: 120,
                //                alignment: 'center',
            },
            {
                dataField: 'cSw08',
                caption: '报关物资名称',
                // width: 120,
                //                alignment: 'center',
            },
            {
                dataField: 'cSpec',
                caption: '规格型号',
                // width: 140,
                // alignment: 'center',
            },
            {
                dataField: 'cRemark',
                caption: '备注',
                // width: 140,
            },
            {
                dataField: 'cUnit',
                caption: '单位',
                alignment: 'center',

            },
            {
                dataField: 'cGoodsnum',
                caption: '订货数量',
                alignment: 'center',
            },
            {
                dataField: 'cGroudtotalnum',
                caption: '累计到货量',
                alignment: 'center',
            },
            {
                dataField: 'cResiduenum',
                caption: '剩余数量',
                alignment: 'center',
            },
            {
                dataField: 'cSw09',
                caption: '累计出库量',
                allowEditing: false,
                alignment: 'center',
            },
            {
                dataField: 'cSw06',
                caption: '船号',
                // alignment: 'center',
            },
            {
                dataField: 'cSw07',
                caption: '框架号',

            },
            {
                dataField: 'cState',
                caption: '状态',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                },
                allowEditing: false,
            },
            {
                dataField: 'cSw12',
                caption: '采购员批注',
            },
            {
                dataField: 'cSw13',
                caption: '领导批注',
            },
            {
                dataField: 'cSw14',
                caption: '国外批注',
            },
            {
                dataField: 'cSw15',
                caption: '厂家信息',
            },
            {
                dataField: 'cSw16',
                caption: '沟通时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cSw17',
                caption: '物资类别',
            },
            {
                dataField: 'cSw19',
                caption: '提前/延期',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = tqyq.find(item => item.cSubitemid == rowData.cSw19);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                },
            },
            {
                dataField: 'cSw20',
                caption: '提前/延期原因',
            },
            //            {
            //                dataField: 'cMtid',
            //                caption: '合同编号',
            //                width: 1,
            //                alignment: 'center',
            //            },
            //            {
            //                dataField: 'cId',
            //                caption: '合同物资编号',
            //                width: 1,
            //                alignment: 'center',
            //            },
        ],
        // onToolbarPreparing: function(e) {
        //     operateFormS1S3.forEach(item => e.toolbarOptions.items.push(item));
        // }
    });

    ////////////////////////////////////////////////////
    ////生成按钮层//////////////////////////////////////
    ////////////////////////////////////////////////////
    //合同模块的按钮
    $('#operateFormM1S1').dxForm({
        width: '100%',
        colCount: 16,
        items: [{
                name: 'M1S21Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '查询',
                    onClick: function() {
                        M1S21Q_serDel();
                    }
                }
            },
            {
                name: 'M1S21Q',
                itemType: 'button',
                buttonOptions: {
                    icon: "remove",
                    text: '合同类别清除',
                    onClick: function() {
                        M1S21D_serDel();
                    }
                }
            },
            {
                name: 'M1S11BS',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '合同错误',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择要进行出错的合同。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 900,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '物资出错');
                        addIns.show();
                        // 调用模态框函数    
                        M1S11BS();
                        M1S11addIns.option('formData', new Object())
                        M1S11addIns.getEditor('cSw17').option('value', '1');
                    }
                }
            },
            {
                name: 'M1S11_F1',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '合同导出',
                    onClick: function() {
                        let grid = $('#dataGridS2').dxDataGrid('instance');
                        let rowsData = grid.getSelectedRowsData()
                        let selectedRowKeys = grid.getSelectedRowKeys()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择要导出的合同信息。', 'info', 3000);
                            return;
                        }
                        addEditPopup2.show();
                        //            			msg.data.list = rowsData;//物资
                        let select;
                        select = rowsData
                        console.log(select)
                        addGang.splice(0, addGang.length);
                        select.forEach(item => addGang.push(item));
                        $('#addGangGrid2').dxDataGrid('instance').option('dataSource', addGang)
                        $('#addGangGrid2').dxDataGrid('instance').deselectAll()
                        $('#addGangGrid2').dxDataGrid('instance').refresh()

                    }
                }
            },
            //            {
            //            	name: 'M1S11WD',
            //            	itemType: 'button',
            //            	buttonOptions: {
            //            		icon: 'save',
            //            		text: '半个月未到',
            //            		onClick: function() {
            //            			msg = {
            //            		            ver: '53cc62f6122a436083ec083eed1dc03d',
            //            		            session: '42f5c0d7178148938f4fda29460b815a',
            //            		            tag: {},
            //            		            data: {	 
            //            		                }
            //            		            }
            //            			let param = searchdataFormM1.option('formData');
            //            	        //开始时间
            //            	        let startTime = param.startTime;
            //            	        msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
            //            	        // 结束时间
            //            	        let endTime = param.endTime;
            //            	        msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
            ////            	        console.log(JSON.stringify(msg))     		       
            //            		        $.ajax({
            //            		            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/M1S11WD'),
            //            		            dataType: 'json', //返回格式为json      
            //            		            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            //            		            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            //            		            type: 'post', //请求方式 get 或者post ,       
            //            		            contentType: 'application/json',
            //            		            success: function(data) {
            //            		            	////console.log(data)
            //            		            	let select;
            //            		            	select = data.data;
            //            		            	console.log(select)
            //            		                if (select == null) {
            //            		                    tabledataS1.splice(0, tabledataS1.length);
            //            		                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
            //            		                    //如果没有查到合同信息，则清空其他子表数据
            //            		                    tabledataS2.splice(0, tabledataS2.length);
            //            		                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
            //            		                    $('#dataGridS2').dxDataGrid('instance').deselectAll()
            //            		                    $('#dataGridS2').dxDataGrid('instance').refresh()
            //            		                    tabledataS3.splice(0, tabledataS3.length);
            //            		                    $('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
            //            		                    $('#dataGridS3').dxDataGrid('instance').deselectAll()
            //            		                    $('#dataGridS3').dxDataGrid('instance').refresh()
            //            		                    tabledataS4.splice(0, tabledataS4.length);
            //            		                    $('#dataGridS4').dxDataGrid('instance').option('dataSource', tabledataS4)
            //            		                    $('#dataGridS4').dxDataGrid('instance').deselectAll()
            //            		                    $('#dataGridS4').dxDataGrid('instance').refresh()
            //            		                    tabledataS5.splice(0, tabledataS5.length);
            //            		                    $('#dataGridS5').dxDataGrid('instance').option('dataSource', tabledataS5)
            //            		                    $('#dataGridS5').dxDataGrid('instance').deselectAll()
            //            		                    $('#dataGridS5').dxDataGrid('instance').refresh()
            //            		                    tabledataS6.splice(0, tabledataS6.length);
            //            		                    $('#dataGridS6').dxDataGrid('instance').option('dataSource', tabledataS6)
            //            		                    $('#dataGridS6').dxDataGrid('instance').deselectAll()
            //            		                    $('#dataGridS6').dxDataGrid('instance').refresh()
            //            		                    tabledataS7.splice(0, tabledataS6.length);
            //            		                    $('#dataGridS7').dxDataGrid('instance').option('dataSource', tabledataS7)
            //            		                    $('#dataGridS7').dxDataGrid('instance').deselectAll()
            //            		                    $('#dataGridS7').dxDataGrid('instance').refresh()
            //            		                }
            //            		                tabledataS1.splice(0, tabledataS1.length);
            //            		                select.forEach(item => tabledataS1.push(item));
            //            		                $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
            //            		                $('#dataGridS1').dxDataGrid('instance').deselectAll()
            //            		                $('#dataGridS1').dxDataGrid('instance').refresh()
            //            		                
            //
            //            		            },
            //            		            error: function() {
            //            		                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            //            		                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
            //            		                //e.cancel=true;       
            //            		            }
            //            		        })
            //            		}
            //            	}
            //            },
            {
                name: 'M1S11TY',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '提前/延期',
                    onClick: function() {
                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
                        let selectedRowKeys = grid1.getSelectedRowKeys()
                        let rowsData = grid1.getSelectedRowsData()
                        if (selectedRowKeys.length < 1) {
                            DevExpress.ui.notify('请选择要进行标记的合同。', 'info', 3000);
                            return;
                        }
                        addIns = $('#addmotai').dxPopup({
                            //模态框增加name    
                            width: 900,
                            height: 250
                        }).dxPopup('instance')
                        addIns.option('title', '提前/延期');
                        addIns.show();
                        // 调用模态框函数    
                        M1S11TY()
                        M1S11addIns.option('formData', new Object())
                    }
                }
            },
            //            {
            //            	name: 'M1S11BJ',
            //            	itemType: 'button',
            //            	buttonOptions: {
            //            		icon: 'remove',
            //            		text: '标记处理',
            //            		onClick: function() {
            //            			let grid1 = $('#dataGridS2').dxDataGrid('instance');
            //    					let selectedRowKeys = grid1.getSelectedRowKeys()
            //    					let rowsData = grid1.getSelectedRowsData()
            //    					//脚本执行  
            //    					if (selectedRowKeys.length < 1) {
            //    						DevExpress.ui.notify('请选择一条要撤销的数据。', 'info', 2000);
            //    						return;
            //    					}
            //    					let dataGrid = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData()[0];
            //    					msg = {
            //    						ver: '53cc62f6122a436083ec083eed1dc03d',
            //    						session: '42f5c0d7178148938f4fda29460b815a',
            //    						tag: {},
            //    						data: {
            //    						}
            //    					};
            //    					//前后端统一叫'tscLtrawbin' 
            //    					msg.data.tpCgcontractmtt = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
            //    					console.log(msg)
            //    						var result = DevExpress.ui.dialog.confirm("您确定要处理吗?", "确认处理");
            //    						result.done(function (dialogResult) {
            //    							if (dialogResult) {
            //    								cake.Ui.LoadPanel.show()
            //    								//
            //    								$.ajax({
            //    									url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/M1S11HTCL'), dataType: 'json',   //返回格式为json   
            //    									async: true,//请求是否异步,默认为异步,这也是ajax重要特性   
            //    									data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
            //    									type: 'post',   //请求方式 get 或者post , 
            //    									contentType: 'application/json',
            //    									success: function (data) {
            //    										let select = data.msg
            //    										if (data.errcode == 0) {
            //    											DevExpress.ui.notify(data.msg, 'success', 2000);
            //    											S1S21_SSRT()
            //    										}
            //    										else {
            //    											DevExpress.ui.notify(data.msg, 'warning', 2000);
            //    										}
            //    									},
            //    									error: function () {
            //    										DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 2000);
            //    									}
            //    								})
            //    							}
            //    							cake.Ui.LoadPanel.close();
            //    						})
            //            		}
            //            	}
            //            },

            {
                name: 'M1S22Q',
                itemType: 'button',
                buttonOptions: {
                    icon: "search",
                    text: '验收/质保金',
                    onClick: function() {
                        M1S22D_serDel();
                    }
                }
            },
        ]
    })

    //特殊转合同模态框

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
        initLoad0()

        function initLoad0() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {}
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/TbGuildata/getInfo"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                    result.data.forEach(item => {
                        guiLei.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad1()

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
                success: function(result) {
                    result.data.forEach(item => {
                        wuzileixing.push(item);
                    });
                },
                error: function() {
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
                success: function(result) {
                    result.data.forEach(item => {
                        shenqingbumen.push(item);
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
                success: function(result) {
                    result.data.forEach(item => {
                        shifoujixu.push(item);
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
                data: {}
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_CONMT/NUM"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                    if (result.data == null) {

                    } else {
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
                success: function(result) {
                    if (result.data == null) {

                    } else {
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
        //        initLoad7()
        //
        //        function initLoad7() {
        //            msg = {
        //                ver: "53cc62f6122a436083ec083eed1dc03d",
        //                session: "42f5c0d7178148938f4fda29460b815a",
        //                tag: {},
        //                data: {
        //                    "cItemid": "YF"
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
        //                        yuefen.push(item);
        //                    });
        //                    var date = new Date();
        //                    this.year = date.getFullYear(); //当前年份
        //                    this.month = date.getMonth() + 1; //当前月份
        //                    var i = date.getMonth();
        ////                    searchdataFormM2.getEditor('month').option('value', yuefen[i].cSubitemid);
        //                },
        //                error: function () {
        //                    cake.Ui.LoadPanel.close()
        //                }
        //            });
        //        }
        //        initLoad66()
        //
        //        function initLoad66() {
        //            msg = {
        //                ver: "53cc62f6122a436083ec083eed1dc03d",
        //                session: "42f5c0d7178148938f4fda29460b815a",
        //                tag: {},
        //                data: {
        //                    "cItemid": "NF"
        //                }
        //            };
        //            //console.log(9)
        //            $.ajax({
        //                type: "post",
        //                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
        //                data: JSON.stringify(msg),
        //                contentType: "application/json",
        //                dataType: "json",
        //                success: function (result) {
        //                    result.data.forEach(item => {
        //                        nian.push(item);
        //                    });
        //                    //console.log(result)
        //                    var date = new Date();
        //                    this.year = date.getFullYear(); //当前年份
        //                    this.month = date.getMonth() + 1; //当前月份
        //                    var i = date.getMonth();
        ////                    searchdataFormM2.getEditor('year').option('value', nian[1].cSubitemid);
        ////                    searchdataFormM2.getEditor('year').option('value', getYear());
        //                },
        //                error: function () {
        //                    cake.Ui.LoadPanel.close()
        //                }
        //            });
        //        }
        //        function getYear(){
        //        	var date = new Date();
        //        	 let  year = date.getFullYear();//当前年份
        //        	console.log(year);
        //        	let matchedItem = nian.find(item => item.cSubitemid == year);
        //
        //            if (matchedItem == null || matchedItem == undefined) {
        //                return "";
        //            } else {
        //                //console.log(matchedItem.cSubitemid)
        //                return matchedItem.cSubitemid;
        //            }
        //        }
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
                success: function(result) {
                    result.data.forEach(item => {
                        caigouyuan.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad9();

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
        initLoad91()

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
                success: function(result) {
                    result.data.forEach(item => {
                        jhdd1.push(item);
                    });
                    console.log(jhdd1)
                },
                error: function() {
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
                success: function(result) {
                    result.data.forEach(item => {
                        ysdd1.push(item);
                    });
                    console.log(ysdd1)
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
                data: {}
            };
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_q002mt/ORDERNUM"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            ordernum.push(item);
                        });
                    }
                },
                error: function() {
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
                success: function(result) {
                    if (result.data == null) {

                    } else {
                        result.data.forEach(item => {
                            goodsname2.push(item);
                        });
                    }
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad12()

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
                success: function(result) {
                    /*  ////console.log.log(result.data);
                     yudengjifalg = result.data; */

                    result.data.forEach(item => {
                        yudengjifalg.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        //        initLoad13()
        //        function initLoad13() {
        //            msg = {
        //                ver: "53cc62f6122a436083ec083eed1dc03d",
        //                session: "42f5c0d7178148938f4fda29460b815a",
        //                tag: {},
        //                data: {
        //
        //                }
        //            };
        //            $.ajax({
        //                type: "post",
        //                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/DZ_08/findSupplierName"),
        //                data: JSON.stringify(msg),
        //                contentType: "application/json",
        //                dataType: "json",
        //                success: function (result) {
        //                    console.log(result.data);
        //
        //                    xxCon = result.data;
        //
        //
        //                    if (result.data == null) {
        //
        //                    } else {
        //                        result.data.forEach(item => {
        //                            cont_supplier.push(item);
        //                        });
        //                    }
        //                    //                	console.log(cont_supplier);
        //                },
        //                error: function () {
        //                    cake.Ui.LoadPanel.close()
        //                }
        //            });
        //        }

        //        initLoad14()
        //        function initLoad14() {
        //            msg = {
        //                ver: "53cc62f6122a436083ec083eed1dc03d",
        //                session: "42f5c0d7178148938f4fda29460b815a",
        //                tag: {},
        //                data: {
        //
        //                }
        //            };
        //            $.ajax({
        //                type: "post",
        //                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/ZZ_01/findCompInfo"),
        //                data: JSON.stringify(msg),
        //                contentType: "application/json",
        //                dataType: "json",
        //                success: function (result) {
        //                    console.log(result.data);
        //
        //                    xxCon = result.data;
        //
        //
        //                    if (result.data == null) {
        //
        //                    } else {
        //                        result.data.forEach(item => {
        //                            comp_Cludecom.push(item);
        //                        });
        //                    }
        //                    //                	console.log(cont_supplier);
        //                },
        //                error: function () {
        //                    cake.Ui.LoadPanel.close()
        //                }
        //            });
        //        }
        initLoad14()

        function initLoad14() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "WZWCZT"
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
                        wzwczt.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad15()

        function initLoad15() {
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
        initLoad17()

        function initLoad17() {
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

        //        initLoad16()
        //        function initLoad16() {
        //            //cake.Ui.LoadPanel.show()
        //            // 初始化加载所有下拉框数据
        //            msg = {
        //                ver: "53cc62f6122a436083ec083eed1dc03d",
        //                session: "42f5c0d7178148938f4fda29460b815a",
        //                tag: {},
        //                data: {
        //                }
        //            };
        //            //../../tdhc_cgsys/CG_A001/selcon   ../../tdhc_cgsys/CGC_11/selectContType ----- 第一版合同维护
        //            $.ajax({
        //                type: "post",
        //                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CLAUSE/selectContType"),
        //                data: JSON.stringify(msg),
        //                contentType: "application/json",
        //                dataType: "json",
        //                success: function (result) {
        //                      console.log(result.data.clauseM1s1);
        //                    result.data.clauseM1s1.forEach(item => {
        //                    	contact_Type.push(item);
        //                    });
        //                    // 钢种分类
        //                    // globecStlGroup.splice(0, globecStlGroup.length);
        //
        //                    //  cake.Ui.LoadPanel.close()
        //                },
        //                error: function () {
        //                    cake.Ui.LoadPanel.close()
        //                }
        //            });
        //        }
        initLoad18()

        function initLoad18() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "HTSFCW"
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
                        sfcw.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad19()

        function initLoad19() {
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "TQYQ"
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
                        tqyq.push(item);
                    });
                },
                error: function() {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad20()

        function initLoad20() {
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

        $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0061Q'), //请求的url地址
                dataType: 'json', //返回格式为json              
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
                type: 'post', //请求方式 get 或者post ,            
                contentType: 'application/json',
                success: function(data) {
                    TP_CGORDERST_C_TYPENAME.splice(0, TP_CGORDERST_C_TYPENAME.length);
                    data.data.cgQ001C006.forEach(item => TP_CGORDERST_C_TYPENAME.push(item));
                    // $('#this-grid-container1').dxDataGrid('instance').refresh()            
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                    //e.cancel=true;            
                }
            })
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
    //            //console.log.log(matchedItem.cSubitemid)
    //        }
    //    }
    //获取当前月份的天数
    function mGetDate(month) {
        var date = new Date();
        var year = date.getFullYear();
        var d = new Date(year, month, 0);
        return d.getDate();
    }

    function M1S11Q_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        //        let searchtiao = searchdataFormM2.option('formData')
        msg.data.listData = [searchdataFormM2.option('formData')];

        //        var date = new Date();
        //        this.year = date.getFullYear();
        //        this.month = date.getMonth() + 1;
        //        //选择的月份
        //        var m = msg.data.tpCgorderst[0].month;
        //        var y = msg.data.tpCgorderst[0].year;
        //        //获取当前月份的天数
        //        var days = mGetDate(m); //选择月份的天数
        //        //console.log.log(days+"天")
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
        //        let startTime = searchtiao.startTime;
        //        msg.data.tpCgorderst[0].startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        //        // 结束时间
        //        let endTime = searchtiao.endTime;
        //        msg.data.tpCgorderst[0].endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        //        console.log(msg.data.listData)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                let msgstr = data.msg;
                if (data.errcode == 60) {
                    DevExpress.ui.notify(msgstr, 'info', 3000);
                }
                console.log(data)
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
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }

    function M1S22Q_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()[0]
        let selectedRowKeys = grid.getSelectedRowKeys()
        if (selectedRowKeys.length < 1) {
            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
            DevExpress.ui.notify('请选择对应的类别！！！', 'info', 2000);
            return;
        }
        msg.data.tbGuildRequest = searchdataFormM1.option('formData');
        msg.data.tbGuildata = rowsData;
        console.log(msg.data.tbGuildRequest);
        //        //开始时间
        //        let startTime = searchtiao.startTime;
        //        msg.data.tpCgorderst[0].startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        //        // 结束时间
        //        let endTime = searchtiao.endTime;
        //        msg.data.tpCgorderst[0].endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        //console.log.log(msg.data.tpCgorderst)
        //../../tdhc_cgsys/CG_q002/M2S11QDZ
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S22Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                let msgstr = data.msg;
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
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
    }

    function M1S21Q_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()[0]
        let selectedRowKeys = grid.getSelectedRowKeys()
        if (selectedRowKeys.length < 1) {
            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
            DevExpress.ui.notify('请选择对应的类别！！！', 'info', 2000);
            return;
        }
        msg.data.tbGuildata = rowsData;
        msg.data.tbGuildRequest = searchdataFormM1.option('formData');
        //        //开始时间
        //        let startTime = msg.data.startTime;
        //        msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        //        // 结束时间
        //        let endTime = msg.data.endTime;
        //        msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        console.log(msg)
            //../../tdhc_cgsys/TbGuildata/selectByMTSTT
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S21Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                console.log(data)
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
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }

    function M1S21D_serDel() {
        //    	console.log("清除按钮！！！")
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let grid = $('#dataGridS2').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()
        if (rowsData.length < 1) {
            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
            DevExpress.ui.notify('请选择要清除的合同类别！！！', 'info', 3000);
            return;
        }
        //选中的值
        msg.data.tpCgcontractmt = rowsData[0];
        var result = DevExpress.ui.dialog.confirm("您确定要撤销合同类别吗?", "确认撤销");
        result.done(function(dialogResult) {
            if (dialogResult) {
                cake.Ui.LoadPanel.show()
                    //../../tdhc_cgsys/TbGuildata/M1S21Q
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S21D'),
                    dataType: 'json', //返回格式为json      
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
                    type: 'post', //请求方式 get 或者post ,       
                    contentType: 'application/json',
                    success: function(data) {
                        let msgstr = data.msg;
                        if (data.errcode == 0) {
                            //			                	M1S11Q_serDel();
                            S1S31_SSRT()
                            DevExpress.ui.notify(msgstr, 'success', 3000);
                        } else {
                            DevExpress.ui.notify(msgstr, 'info', 3000);
                        }
                        M1S21Q_serDel();
                    },
                    error: function() {
                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    }
                })

            }
            cake.Ui.LoadPanel.close();
        })
    }

    function M1S22D_serDel() {
        //    	console.log("清除按钮！！！")
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        //	        let grid = $('#dataGridS2').dxDataGrid('instance');
        //            let rowsData = grid.getSelectedRowsData()
        //            if (rowsData.length < 1) {
        //            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
        //            DevExpress.ui.notify('请选择要清除的合同类别！！！', 'info', 3000);
        //            return;
        //            }
        //选中的值
        //            msg.data.tpCgcontractmt = rowsData[0];
        //				var result = DevExpress.ui.dialog.confirm("您确定要撤销合同类别吗?", "确认撤销");
        //				result.done(function (dialogResult) {
        //					if (dialogResult) {
        //						cake.Ui.LoadPanel.show()
        //../../tdhc_cgsys/TbGuildata/M1S21Q
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/M1S22S'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
                console.log(data)
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
                $('#dataGridS2').dxDataGrid('instance').deselectAll();
                $('#dataGridS2').dxDataGrid('instance').refresh();

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })

        //					}
        //					cake.Ui.LoadPanel.close();
        //				})
    }

    // ------------------------------------------
    //联动查询---合同查物资
    $('#dataGridS2').dxDataGrid({
            onRowClick: function(e) {
                S1S23_SSRT();
            }

        })
        // 联动查询---类别查物资合同
    $('#dataGridS1').dxDataGrid({
            onRowClick: function(e) {
                S1S21_SSRT()
                S1S31_SSRT()
            }

        })
        //类别联动合同
    function S1S21_SSRT() {
        sad = 1;
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };

        let grid = $('#dataGridS1').dxDataGrid('instance');
        let selectedRowKeys = grid.getSelectedRowKeys();
        msg.data.listData = selectedRowKeys;
        //        console.log(JSON.stringify(msg))
        //S1S21
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/S1S21'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {
                //                	console.log(data.data)
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
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
    //类别联动合同物资
    function S1S31_SSRT() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let selectedRowKeys = grid.getSelectedRowKeys();
        msg.data.listData = selectedRowKeys;
        //        console.log(JSON.stringify(msg))
        //
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/S1S31'),
            dataType: 'json', //返回格式为json  
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
            type: 'post', //请求方式 get 或者post ,
            contentType: 'application/json',
            success: function(data) {
                //                	console.log(data.data)
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
                cake.Ui.LoadPanel.close();
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
    //合同联动物资
    function S1S23_SSRT() {
        sad = 1;
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        let grid = $('#dataGridS2').dxDataGrid('instance');
        let selectedRowKeys = grid.getSelectedRowKeys()[0];
        msg.data.tpCgcontractmt = selectedRowKeys;
        console.log(msg.data.tpCgcontractmt)
            //../../tdhc_cgsys/CG_H001/S1S21Q
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/TbGuildata/S1S23'),
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
                select = data.data
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

    function S1S21PZ() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cSw12',
                    label: {
                        text: '采购员批注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cSw22',
                    label: {
                        text: '采购员批注时间'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    editorType: "dxDateBox",
                    editorOptions: {
                        //                         width: "100%",
                        type: "date",
                        displayFormat: 'yyyy-MM-dd',
                    },
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {}
                };
                msg.data.excel = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                msg.data.shipnum = [S1S21addIns.option('formData')];
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21PZ'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(select, 'success', 3000);
                            if ($('#dataGridS2').dxDataGrid('instance').getSelectedRowKeys().length == 1) {
                                S1S23_SSRT()
                            } else {
                                S1S31_SSRT()
                            }

                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
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

    function S1S21PZ2() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cSw13',
                    label: {
                        text: '领导批注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cSw23',
                    label: {
                        text: '领导批注时间'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    editorType: "dxDateBox",
                    editorOptions: {
                        //                         width: "100%",
                        type: "date",
                        displayFormat: 'yyyy-MM-dd',
                    },
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {}
                };
                msg.data.excel = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                msg.data.shipnum = [S1S21addIns.option('formData')];
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21PZ2'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(select, 'success', 3000);
                            if ($('#dataGridS2').dxDataGrid('instance').getSelectedRowKeys().length == 1) {
                                S1S23_SSRT()
                            } else {
                                S1S31_SSRT()
                            }

                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
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

    function S1S21PZ3() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cSw14',
                    label: {
                        text: '国外批注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cSw24',
                    label: {
                        text: '国外批注时间'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    editorType: "dxDateBox",
                    editorOptions: {
                        //                         width: "100%",
                        type: "date",
                        displayFormat: 'yyyy-MM-dd',
                    },
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {}
                };
                msg.data.excel = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                msg.data.shipnum = [S1S21addIns.option('formData')];
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21PZ3'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(select, 'success', 3000);
                            if ($('#dataGridS2').dxDataGrid('instance').getSelectedRowKeys().length == 1) {
                                S1S23_SSRT()
                            } else {
                                S1S31_SSRT()
                            }

                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
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

    function S1S21CJ() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cSw15',
                    label: {
                        text: '厂家信息'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cSw16',
                    label: {
                        text: '沟通时间'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    editorType: "dxDateBox",
                    editorOptions: {
                        //                         width: "100%",
                        type: "date",
                        displayFormat: 'yyyy-MM-dd',
                    },
                }
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {}
                };
                msg.data.excel = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                msg.data.shipnum = [S1S21addIns.option('formData')];
                msg.data.shipnum[0].cSw16 = new Date(msg.data.shipnum[0].cSw16.getFullYear(), msg.data.shipnum[0].cSw16.getMonth(), msg.data.shipnum[0].cSw16.getDate(), 0, 0, 0, 0);
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21CJXX'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(select, 'success', 3000);
                            if ($('#dataGridS2').dxDataGrid('instance').getSelectedRowKeys().length == 1) {
                                S1S23_SSRT()
                            } else {
                                S1S31_SSRT()
                            }

                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
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
    function S1S21XGCJ() {
    	S1S21addIns = $('#addForm').dxForm({
    		formData: adddata,
    		validationGroup: validationGroupName,
    		colCount: 3,
    		items: [
    			{
    				dataField: 'cSw15',
    				label: {
    					text: '厂家信息'
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
    			msg = {
    					ver: '53cc62f6122a436083ec083eed1dc03d',
    					session: '42f5c0d7178148938f4fda29460b815a',
    					tag: {},
    					data: {
    					}
    			};
    			msg.data.excel = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
    			msg.data.shipnum = [S1S21addIns.option('formData')];
    			$.ajax({
    				url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21CJXXXG'),
    				dataType: 'json', //返回格式为json   
    				async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
    				data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
    				type: 'post', //请求方式 get 或者post , 
    				contentType: 'application/json',
    				success: function(data) {
    					let select = data.msg
    					if (data.errcode == 0) {
    						DevExpress.ui.notify(select, 'success', 3000);                        
    						if ($('#dataGridS2').dxDataGrid('instance').getSelectedRowKeys().length == 1) {
                                S1S23_SSRT()
                            } else {
                                S1S31_SSRT()
                            }
    						addIns.hide()
    					} else {
    						DevExpress.ui.notify(select, 'warning', 3000);
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
    function S1S21TY() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cSw19',
                    label: {
                        text: '提前/延期'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: tqyq,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cSw20',
                    label: {
                        text: '原因'
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
            onClick: function(e) {
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {}
                };
                msg.data.excel = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
                msg.data.shipnum = [S1S21addIns.option('formData')];
                console.log(JSON.stringify(msg));
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21TY'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(select, 'success', 3000);
                            if ($('#dataGridS2').dxDataGrid('instance').getSelectedRowKeys().length == 1) {
                                S1S23_SSRT()
                            } else {
                                S1S31_SSRT()
                            }

                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
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

    function M1S11BS() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cSw17',
                    label: {
                        text: '错误原因'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: sfcw,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
                {
                    dataField: 'cSw19',
                    label: {
                        text: '错误原因'
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
                    data: {}
                };
                msg.data.list = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                msg.data.cSw06 = M1S11addIns.option('formData').cSw19;
                msg.data.parame = M1S11addIns.option('formData').cSw17;
                //    			console.log(JSON.stringify(msg));
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/M1S11BS'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(select, 'success', 3000);
                            S1S21_SSRT()
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
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

    function M1S11TY() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [{
                    dataField: 'cSw20',
                    label: {
                        text: '提前/延期'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: tqyq,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cSw21',
                    label: {
                        text: '原因'
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
            onClick: function(e) {
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {}
                };
                msg.data.list = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
                msg.data.cSw06 = M1S11addIns.option('formData').cSw21;
                msg.data.parame = M1S11addIns.option('formData').cSw20;
                console.log(JSON.stringify(msg));
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/M1S11TY'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(select, 'success', 3000);
                            S1S21_SSRT()

                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
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

















    //物资导出
    addEditPopup = $("#add-edit-popup-container").dxPopup({
        deferRendering: false,
        //        height: 450,
        //        width: '100%',
        fullScreen: true

    }).dxPopup("instance");
    addEditForm = $("#add-edit-form-container").dxForm({
            formData: outForm,
            width: "100%",
            items: [{
                itemType: "group",
                items: [{
                    template: $("#addGangGrid")
                }, ]
            }, ]

        }).dxForm('instance')
        //合同导出
    addEditPopup2 = $("#add-edit-popup-container2").dxPopup({
        deferRendering: false,
        //        height: 450,
        //        width: '100%',
        fullScreen: true

    }).dxPopup("instance");
    addEditForm2 = $("#add-edit-form-container2").dxForm({
        formData: outForm,
        width: "100%",
        items: [{
            itemType: "group",
            items: [{
                template: $("#addGangGrid2")
            }, ]
        }, ]

    }).dxForm('instance')
    $("#addGangGrid").dxDataGrid({
            dataSource: addGang,
            columnResizingMode: "widget",
            columnAutoWidth: false,
            showBorders: true,
            allowColumnResizing: false,
            showColumnLines: true,
            showRowLines: true,
            onCellHoverChanged: '#888',
            hoverStateEnabled: true,
            noDataText: '',
            width: '100%',
            height: '100%',
            "export": {
                enabled: true,
                fileName: "物资导出",
                // allowExportSelectedData: true
            },
            columnChooser: {
                enabled: true,
                mode: "select"
            },
            paging: {
                enabled: false
            },
            editing: {
                mode: "batch",
                allowUpdating: false
            },
            selection: {
                // mode: "multiple"
                mode: "single"
            },
            loadPanel: {
                enabled: true,
                text: '请稍等片刻...'
            },
            columns: [{
                    dataField: 'cSw03',
                    caption: '请购日期',
                },
                {
                    dataField: 'cSw05',
                    caption: '请购项目',
                },
                {
                    dataField: 'cSw06',
                    caption: '请购部门',
                },
                {
                    dataField: 'cSw07',
                    caption: '请购人',
                },
                {
                    dataField: 'cSw04',
                    caption: '请购单号',
                },
                {
                    dataField: 'cConnum',
                    caption: '内贸合同号',
                },
                {
                    dataField: 'cOutconnum',
                    caption: '外贸合同号',
                },
                {
                    dataField: 'cSw08',
                    caption: '类别明细',
                },
                {
                    dataField: 'cGoodsname',
                    caption: '物资名称',
                },
                {
                    dataField: 'cSpec',
                    caption: '规格型号',
                },
                {
                    dataField: 'cSw02',
                    caption: '用途说明',
                },
                {
                    dataField: 'cRemark',
                    caption: '备注',
                },
                {
                    dataField: 'cSw09',
                    caption: '建设生产',
                },
                {
                    dataField: 'cSw10',
                    caption: '采购员',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = cgy.find(item => item.cSubitemid == rowData.cSw10);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },
                {
                    dataField: 'cMustneed',
                    caption: '采购类型',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = shifoujixu.find(item => item.cSubitemid == rowData.cMustneed);
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
                    dataField: 'cPayway',
                    caption: '付款方式',
                },
                {
                    dataField: 'cCludetime',
                    caption: '合同签订时间',
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
                    dataField: 'deltime',
                    caption: '到货时间',
                    //        	dataType: "date",
                    //            format: "yyyy-MM-dd"
                },
                {
                    dataField: 'cState',
                    caption: '到货情况',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = wzwczt.find(item => item.cSubitemid == rowData.cState);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },
                {
                    dataField: 'cGoodsnum',
                    caption: '合同数量',
                },
                {
                    dataField: 'cUnit',
                    caption: '单位',
                },
                {
                    dataField: 'ship',
                    caption: '船号',
                },
                {
                    dataField: 'cSw12',
                    caption: '采购员批注',
                },
                {
                    dataField: 'cSw13',
                    caption: '领导批注',
                },
                {
                    dataField: 'cSw14',
                    caption: '国外批注',
                },
                {
                    dataField: 'cSw15',
                    caption: '厂家信息',
                },


            ]
        })
        //合同导出
    $("#addGangGrid2").dxDataGrid({
            dataSource: addGang,
            columnResizingMode: "widget",
            columnAutoWidth: false,
            showBorders: true,
            allowColumnResizing: false,
            showColumnLines: true,
            showRowLines: true,
            onCellHoverChanged: '#888',
            hoverStateEnabled: true,
            noDataText: '',
            width: '100%',
            height: '100%',
            "export": {
                enabled: true,
                fileName: "合同导出",
                // allowExportSelectedData: true
            },
            columnChooser: {
                enabled: true,
                mode: "select"
            },
            paging: {
                enabled: false
            },
            editing: {
                mode: "batch",
                allowUpdating: false
            },
            selection: {
                // mode: "single"
                mode: "single"
            },
            loadPanel: {
                enabled: true,
                text: '请稍等片刻...'
            },
            columns: [{
                    dataField: 'cConnum',
                    caption: '合同号',
                },
                {
                    dataField: 'cSw03',
                    caption: '货物名称',
                    width: 120,
                    alignment: 'center',
                },
                {
                    dataField: 'cSupplier',
                    caption: '供应商',
                },
                {
                    dataField: 'cSw10',
                    caption: '采购员',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cSw10);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },
                {
                    dataField: 'cCludecom',
                    caption: '签订公司',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cCludecom);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
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
                    dataField: 'cConmoney',
                    caption: '合同金额',
                },
                {
                    dataField: 'cSw01',
                    caption: '已付款金额',
                },
                {
                    dataField: 'cSw02',
                    caption: '未付款金额',
                },
                {
                    dataField: 'cPayway',
                    caption: '付款方式',
                    width: 240,
                },
                {
                    dataField: 'cCludeaddr',
                    caption: '到货地点',
                },
                {
                    dataField: 'cGettime',
                    caption: '最后到货时间',
                    dataType: "date",
                    format: "yyyy-MM-dd"
                },
                {
                    dataField: 'cSw12',
                    caption: '提前/延迟',
                },
                {
                    dataField: 'cCheckway',
                    caption: '到货情况',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = dhqk.find(item => item.cSubitemid == rowData.cCheckway);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },
                {
                    dataField: 'cSignstep',
                    caption: '付款情况',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = fkqk.find(item => item.cSubitemid == rowData.cSignstep);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },
                {
                    dataField: 'cTransway',
                    caption: '开票信息',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = kpxx.find(item => item.cSubitemid == rowData.cTransway);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },

                {
                    dataField: 'cState',
                    caption: '状态',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },
                {
                    dataField: 'cSw15',
                    caption: '类别',
                },
                {
                    dataField: 'cSw17',
                    caption: '是否出错',
                    calculateDisplayValue: function(rowData) {
                        let matchedItem = sfcw.find(item => item.cSubitemid == rowData.cSw17);
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cSubitemdes;
                        }
                    }
                },
                {
                    dataField: 'cSw18',
                    caption: '错误原因',
                },
                {
                    dataField: 'cSw24',
                    caption: '验收单',
                },
                {
                    dataField: 'cSw26',
                    caption: '验收单时间',
                    dataType: "date",
                    format: "yyyy-MM-dd",
                },
                {
                    dataField: 'cSw25',
                    caption: '质保金',
                },
                {
                    dataField: 'cSw27',
                    caption: '质保金时间',
                    dataType: "date",
                    format: "yyyy-MM-dd",
                },
                {
                    dataField: 'cCreater',
                    caption: '文员',
                },
                //            {
                //                dataField: 'cId',
                //                caption: '合同编号',
                //                width: 1,
                //                alignment: 'center',
                //            },
            ]
        })
        //Script ------------------------------------



})