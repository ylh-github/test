///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
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
let tabledataS6 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let adddata = {}; //添加按钮需要的数据源
let addIns; //增加操作时候的模态框实例
cTime = new Date();
let controls = {
        
};
let headToolInfoSteel = {
        data: [],
    }
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
let cgy = []
let dhqk = []
let kpxx = []
let qdgs = []
let fkqk = []
let ckzt = []
let fklb = []
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
window.onload = () => {
    DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
    console.log('pp');
};
$(function() {
    let i = 0;
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
            lg: 5,
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
                dataField: 'cSupplier',
                label: {
                    text: '供应商'
                },
                editorOptions: {
                    showClearButton: true,
                }
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
            	dataField: 'cSignstep',
            	label: {
            		text: '付款情况'
            	},
            	editorType: 'dxTagBox',
            	editorOptions: {
            		//以上完成对没有联动数据源配置
            		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            		dataSource: fkqk,
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
            	dataField: 'cTransway',
            	label: {
            		text: '发票情况'
            	},
            	editorType: 'dxTagBox',
            	editorOptions: {
            		//以上完成对没有联动数据源配置
            		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
            		dataSource: kpxx,
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
            /*{
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
//                    readOnly:true,
                },
            },*/
            {
                dataField: 'cSw10',
                label: {
                    text: '采购员'
                },
                editorType: 'dxTagBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: cgy,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    searchEnabled:true,
                    showClearButton: true,
                    height:26,
                    width: 160,
                    showSelectionControls: true,
//                    readOnly:true,
                },
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
                    value: new Date(cTime.getFullYear(),'00','01'),
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
                dataField: 'cCreater',
                label: {
                    text: '文员'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
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
            mode: 'single'
        },
        loadPanel: {
            enabled: true
        },
        columns: [
        	{
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
                    let matchedItem = cgy.find(item => item.cSubitemid == rowData.cSw10);
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
                width:240,
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
                dataField: 'cCreater',
                caption: '文员',
            },
            {
                dataField: 'cId',
                caption: '合同编号',
                width: 1,
                alignment: 'center',
            },
        ]
    });
    $('#dataGridS2').dxDataGrid({
        dataSource: tabledataS2,
        columnResizingMode: "widget",
        editing: {
        	mode: 'cell',
            allowUpdating: true,
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
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'single'
        },
        loadPanel: {
            enabled: true
        },
        columns: [{
                dataField: 'cConnum',
                caption: '合同号',
                width: 140,
                allowEditing: false,
            },
            {
                dataField: 'cConline',
                caption: '合同行号',
                width: 140,
                allowEditing: false,
            },
            {
                dataField: 'cGoodsname',
                caption: '物资名称',
                width: 120,
                alignment: 'center',
            },
            {
                dataField: 'cSw08',
                caption: '报关物资名称',
                width: 120,
                alignment: 'center',
            },
            {
                dataField: 'cSpec',
                caption: '规格型号',
                width: 240,
                alignment: 'center',
            },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
            {
                dataField: 'cUnit',
                caption: '单位',
            },
            {
                dataField: 'cGoodsnum',
                caption: '订货数量',
            },
            {
                dataField: 'cGroudtotalnum',
                caption: '累计到货量',
            },
            {
                dataField: 'cResiduenum',
                caption: '剩余数量',
            },
            {
            	dataField: 'cSw09',
            	caption: '累计出库量',
            	allowEditing: false,
            },
            {
                dataField: 'cSw06',
                caption: '船号',
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
            	dataField: 'cSw11',
            	caption: '出库状态',
            	calculateDisplayValue: function(rowData) {
            		let matchedItem = ckzt.find(item => item.cSubitemid == rowData.cSw11);
            		if (matchedItem == null || matchedItem == undefined) {
            			return "";
            		} else {
            			return matchedItem.cSubitemdes;
            		}
            	},
            	allowEditing: false,
            },
            {
                dataField: 'cMtid',
                caption: '合同编号',
                width: 1,
                alignment: 'center',
            },
            {
                dataField: 'cId',
                caption: '合同物资编号',
                width: 1,
                alignment: 'center',
            },
        ]
    });
    $('#dataGridS3').dxDataGrid({
        dataSource: tabledataS2,
        columnResizingMode: "widget",
        editing: {
        	mode: 'cell',
            allowUpdating: true,
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
        columns: [
        	{
                dataField: 'cCreatetime',
                caption: '时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
        	
            {
                dataField: 'cMoney',
                caption: '发票金额',
                width: 150,
                alignment: 'center',
            },
            {
                dataField: 'cSw01',
                caption: '发票原件详情',
            },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
        ]
    });
    $('#dataGridS4').dxDataGrid({
        dataSource: tabledataS2,
        columnResizingMode: "widget",
        editing: {
//            mode: 'popup',
        	mode: 'cell',
            allowUpdating: true,
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
        columns: [
        	{
                dataField: 'cConnum',
                caption: '合同号',
                width: 150,
                alignment: 'center',
                allowEditing: false,
            },
            {
            	dataField: 'cRethings',
            	caption: '事项',
            	width: 	50,
            	calculateDisplayValue: function(rowData) {
            		let matchedItem = fklb.find(item => item.cSubitemid == rowData.cRethings);
            		if (matchedItem == null || matchedItem == undefined) {
            			return "";
            		} else {
            			return matchedItem.cSubitemdes;
            		}
            	},
            	allowEditing: false,
            },
            {
                dataField: 'cPaytime',
                caption: '付款时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cRemark',
                caption: '备注/详情',
            },
            {
            	dataField: 'cClearmoney',
            	caption: '金额',
            },
            {
                dataField: 'cConmtid',
                caption: '合同编号',
                width: 1,
                alignment: 'center',
            },
            {
                dataField: 'cId',
                caption: '付款单号',
                width: 1,
                alignment: 'center',
            },
        ]
    });
    //到货表
    $('#dataGridS5').dxDataGrid({
        dataSource: tabledataS2,
        columnResizingMode: "widget",
        editing: {
//            mode: 'popup',
        	mode: 'cell',
            allowUpdating: true,
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
        columns: [
        	{
                dataField: 'cConnum',
                caption: '合同号',
//                width: 150,
                alignment: 'center',
                allowEditing: false,
            },
            {
                dataField: 'cConline',
                caption: '合同行号',
//                width: 150,
                alignment: 'center',
                allowEditing: false,
            },
            {
                dataField: 'cSw02',
                caption: '物资名称',
                alignment: 'center',
            },
            {
                dataField: 'cGoodscleck',
                caption: '报关名称',
                alignment: 'center',
            },
            {
            	dataField: 'cSw04',
            	caption: '规格型号',
            	alignment: 'center',
            },
            {
                dataField: 'cArrivalnum',
                caption: '到货量',
                alignment: 'center',
            },
            {
                dataField: 'cSw03',
                caption: '单位',
                width: 80,
                alignment: 'center',
            },
            {
                dataField: 'cDeltime',
                caption: '到货时间',
                width: 150,
                alignment: 'center',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cRemark',
                caption: '备注',
                alignment: 'center',
            },
            {
                dataField: 'cId',
                caption: '到货单号',
                width: 1,
                alignment: 'center',
                allowEditing: false,
            },
        ]
    });
  //出库表
    $('#dataGridS6').dxDataGrid({
    	dataSource: tabledataS2,
    	columnResizingMode: "widget",
    	editing: {
//            mode: 'popup',
    		mode: 'cell',
    		allowUpdating: true,
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
    	height: 300,
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
//                width: 150,
    			alignment: 'center',
    			allowEditing: false,
    		},
    		{
    			dataField: 'cConline',
    			caption: '合同行号',
//                width: 150,
    			alignment: 'center',
    			allowEditing: false,
    		},
    		{
    			dataField: 'cGoodsname',
    			caption: '物资名称',
    			alignment: 'center',
    		},
    		{
    			dataField: 'cSw01',
    			caption: '报关物资名称',
    			alignment: 'center',
    		},
    		{
    			dataField: 'cSpec',
    			caption: '规格型号',
    			alignment: 'center',
    		},
    		{
    			dataField: 'cOutsum',
    			caption: '出库量',
    			alignment: 'center',
    		},
    		{
    			dataField: 'cUnit',
    			caption: '单位',
    			width: 80,
    			alignment: 'center',
    		},
    		{
    			dataField: 'cOuttime',
    			caption: '出库时间',
    			width: 150,
    			alignment: 'center',
    			dataType: "date",
    			format: "yyyy-MM-dd"
    		},
    		{
    			dataField: 'cShipno',
    			caption: '船号',
    			alignment: 'center',
    		},
    		{
    			dataField: 'cFramingno',
    			caption: '框架号',
    			alignment: 'center',
    		},
    		{
    			dataField: 'cRemark',
    			caption: '备注',
    			alignment: 'center',
    		},
    		{
    			dataField: 'cId',
    			caption: '出库主键',
    			width: 1,
    			alignment: 'center',
    			allowEditing: false,
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
//            {
//                name: 'M1S11A',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'plus',
//                    text: '新增',
//                    onClick: function() {
//                        change = '1';
//                        $('#addmotai').show()
//                        addIns = $('#addmotai').dxPopup({
//                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
//                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
//                        }).dxPopup('instance')
//                        addIns.option('title', 'CG_H001')
//                        addIns.show();
//                        M1S11_addfun();
//                        M1S11addIns.option('formData', new Object())
//                        M1S11addIns.getEditor('cCheckway').option('value','0');
//                        M1S11addIns.getEditor('cTransway').option('value','0');
//                        M1S11addIns.getEditor('cState').option('value','3');
//                    }
//                }
//            },
//            {
//                name: 'M1S11_U',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '修改',
//                    onClick: function() {
//                        change = '2'
//                        let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0]
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条要修改的数据。', 'info', 3000);
//                            return;
//                        }
//                        addIns = $('#addmotai').dxPopup({
//                            //模态框增加name    
//                            width: 1000,
//                            height: 450
//                        }).dxPopup('instance')
//                        addIns.option('title', 'CG_H001');
//                        addIns.show();
//                        M1S11_Updatefun()
//                        M1S11addIns.option('formData', rowsData)
//                    }
//                }
//            },
//            {
//                name: 'M1S11D',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'remove',
//                    text: '删除',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS1').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        msg.data.cgH001M1s1 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/M1S11D'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify('删除成功', 'success', 3000);
//                                    tabledataS2.splice(0,tabledataS2.length);
//                                    $('#dataGridS2').dxDataGrid('instance').option('dataSource',tabledataS2);
//                                    M1S11_serDel();
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
//            {
//                name: 'M1S11QX',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'remove',
//                    text: '取消合同',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS1').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择取消采购的合同。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        msg.data.stList = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/M1S11QX'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify(select, 'success', 3000);
//                                    S1S21_SSRT()
//                                    M1S11_serDel();
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
//          {
//              name: 'M1S11F1',
//              itemType: 'button',
//              buttonOptions: {
//                  icon: 'save',
//                  text: '一键到货',
//                  onClick: function() {
//                	  	let grid1 = $('#dataGridS1').dxDataGrid('instance');
//	          			let selectedRowKeys = grid1.getSelectedRowKeys()
//	          			let rowsData = grid1.getSelectedRowsData()
//	          			//////console.log(rowsData);
//	          			//脚本执行  
//	          			if (selectedRowKeys.length < 1) {
//            				DevExpress.ui.notify('请选择到货的合同。', 'info', 3000);
//            				return;
//            			}
//	          			if (rowsData[0].cCheckway==1) {
//	          				DevExpress.ui.notify('已到齐无需操作。', 'info', 3000);
//	          				return;
//	          			}
//	          			M1S11_F1();
//                  }
//              }
//            },
//            {
//            	name: 'M1S11F2',
//            	itemType: 'button',
//            	buttonOptions: {
//            		icon: 'save',
//            		text: '一键出船',
//            		onClick: function() {
//            			let grid1 = $('#dataGridS1').dxDataGrid('instance');
//            			let selectedRowKeys = grid1.getSelectedRowKeys()
//            			let rowsData = grid1.getSelectedRowsData()
//            			//////console.log(rowsData);
//            			//脚本执行  
//            			if (selectedRowKeys.length < 1) {
//            				DevExpress.ui.notify('请选择出船的合同。', 'info', 3000);
//            				return;
//            			}
//            			msg = {
//    	                    ver: '53cc62f6122a436083ec083eed1dc03d',
//    	                    session: '42f5c0d7178148938f4fda29460b815a',
//    	                    tag: {},
//    	                    data: {},
//    	                };
//    	                msg.data.list = rowsData;
//    	                ////console.log(msg)
//    	                //change等于1为添加         
//    	                $.ajax({
//    	                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/JYSFCC'),
//    	                    dataType: 'json', //返回格式为json           
//    	                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//    	                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//    	                    type: 'post', //请求方式 get 或者post ,         
//    	                    contentType: 'application/json',
//    	                    success: function(data) {
//    	                        let select = data.msg
//    	                        if (data.data == "1") {
//    	                        	addIns = $('#addmotai').dxPopup({
//    	                				//模态框增加name    
//    	                				width: 900,
//    	                				height: 250
//    	                			}).dxPopup('instance')
//    	                			addIns.option('title', '出船');
//    	                			addIns.show();
//    	                			// 调用模态框函数    
//    	                			M1S11_F2()
//    	                            M1S11addIns.option('formData', new Object())
//    	                        } else {
//    	                            DevExpress.ui.notify(select, 'warning', 3000);
//    	                        }
//    	                    },
//    	                    error: function() {
//    	                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//    	                    }
//    	                })
//            		}
//            	}
//            },
//            {
//            	name: 'M1S11F3',
//            	itemType: 'button',
//            	buttonOptions: {
//            		icon: 'save',
//            		text: '一键发票',
//            		onClick: function() {
//            			let grid1 = $('#dataGridS1').dxDataGrid('instance');
//            			let selectedRowKeys = grid1.getSelectedRowKeys()
//            			let rowsData = grid1.getSelectedRowsData()
//            			//////console.log(rowsData);
//            			//脚本执行  
//            			if (selectedRowKeys.length < 1) {
//            				DevExpress.ui.notify('请选择要开票的合同。', 'info', 3000);
//            				return;
//            			}
//            			if (rowsData[0].cCheckway == 0) {
//            				DevExpress.ui.notify('入库未到齐，不允许添加发票', 'info', 3000);
//            				return;
//            			}
//            			M1S11_F3()
//            		}
//            	}
//            },
//            {
//            	name: 'M1S11F4',
//            	itemType: 'button',
//            	buttonOptions: {
//            		icon: 'save',
//            		text: '一键付清',
//            		onClick: function() {
//            			let grid1 = $('#dataGridS1').dxDataGrid('instance');
//            			let selectedRowKeys = grid1.getSelectedRowKeys()
//            			let rowsData = grid1.getSelectedRowsData()
//            			//////console.log(rowsData);
//            			//脚本执行  
//            			if (selectedRowKeys.length < 1) {
//            				DevExpress.ui.notify('请选择付清的合同。', 'info', 3000);
//            				return;
//            			}
//            			M1S11_F4()
//            		}
//            	}
//            },
//            {
//                name: 'M1S11_F5',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '合同导出', //S1S23U 改为 采购进度修改
//                    onClick: function() {
//                        let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择要导出的合同信息。', 'info', 3000);
//                            return;
//                        }
//                        addEditPopup2.show();
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {},
//                        };
//                        msg.data.list = rowsData;//物资
//                        ////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/OUTconmt'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                            type: 'post', //请求方式 get 或者post ,         
//                            contentType: 'application/json',
//                            success: function(data) {
//                                ////console.log(data)
//                                if (data.data == null) {
//                                    addGang.splice(0, addGang.length);
//                                    $('#addGangGrid2').dxDataGrid('instance').option('dataSource', addGang)
//                                    return
//                                }
//                                let select;
//                                select = data.data
//                                addGang.splice(0, addGang.length);
//                                select.forEach(item => addGang.push(item));
//                                $('#addGangGrid2').dxDataGrid('instance').option('dataSource', addGang)
//                                $('#addGangGrid2').dxDataGrid('instance').deselectAll()
//                                $('#addGangGrid2').dxDataGrid('instance').refresh()
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
            //            {
            //              name: 'M1S11D2',
            //              itemType: 'button',
            //              buttonOptions: {
            //                  icon: 'remove',
            //                  text: '作废',
            //                  onClick: function() {
            //                      let grid1 = $('#dataGridS1').dxDataGrid('instance');
            //                      let selectedRowKeys = grid1.getSelectedRowKeys()
            //                      let rowsData = grid1.getSelectedRowsData()
            //                      //////console.log(rowsData);
            //                      //脚本执行  
            //                      if (selectedRowKeys.length < 1) {
            //                          DevExpress.ui.notify('请选择要作废的合同。', 'info', 3000);
            //                          return;
            //                      }
            //                      if (rowsData[0].cSignstep==1) {
            //                          DevExpress.ui.notify('已作废不允许操作。', 'info', 3000);
            //                          return;
            //                      }
            //                      addIns = $('#addmotai').dxPopup({
            //                            //模态框增加name    
            //                            width: 1000,
            //                            height: 450
            //                        }).dxPopup('instance')
            //                        addIns.option('title', '作废');
            //                        addIns.show();
            //                        // 调用模态框函数    
            //                        S1S21_BZfun()
            //                  }
            //              }
            //            },
        ]
    })
//    $('#operateFormS1S2').dxForm({
//        width: '100%',
//        colCount: 16,
//        items: [{
//                name: 'S1S21A',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'plus',
//                    text: '新增',
//                    onClick: function() {
//                        change = '1';
//                        let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0];
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请在上面的表选择一条要新增的数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条要新增的数据。', 'info', 3000);
//                            return;
//                        }
//                        $('#addmotai').show()
//                        addIns = $('#addmotai').dxPopup({
//                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
//                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
//                        }).dxPopup('instance')
//                        addIns.option('title', 'CG_H001')
//                        addIns.show();
//                        S1S21_addfun();
//                        S1S21addIns.option('formData', rowsData)
//
//                        //                        S1S21addIns.getEditor('cOrid').option('value',rowsData.cOrmtid)
//                        S1S21addIns.getEditor('cMtid').option('value', rowsData.cId)
//                        //////console.log(rowsData.cId)
//
//                    }
//                }
//            },
//            {
//                name: 'S1S21U',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '修改',
//                    onClick: function() {
//                    	let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0];
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选中该物资对应的合同。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条合同。', 'info', 3000);
//                            return;
//                        }
//                    	msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {},
//                        };
//	                    msg.data.cgH001S1s2 = tabledataS2;
//	                    //////console.log(msg)
//	                    $.ajax({
//	                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/S1S21U'),
//	                        dataType: 'json', //返回格式为json           
//	                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//	                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//	                        type: 'post', //请求方式 get 或者post ,         
//	                        contentType: 'application/json',
//	                        success: function(data) {
//	                            let select = data.msg
//	                            if (data.errcode == 0) {
//	                                S1S21_SSRT();
//	                                S1S51_SSRT();
//	                                DevExpress.ui.notify('数据保存成功', 'success', 3000);
//	                            } else {
//	                                DevExpress.ui.notify(select, 'warning', 3000);
//	                            }
//	                        },
//	                        error: function() {
//	                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);       
//	                        }
//	                    })
//                    }
//                }
//            },
//            {
//                name: 'S1S21D',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'remove',
//                    text: '删除',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        //前后端统一叫'tscLtrawbin' 
//
//                        msg.data.cgH001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/S1S21D'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify('删除成功', 'success', 3000);
//
//                                    S1S21_SSRT();
//
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
//            {
//                name: 'S1S21DH',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '到货',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        msg.data.excel = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21DH'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify(select, 'success', 3000);
//                                    S1S21_SSRT();
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
//            {
//                name: 'S1S21BF',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '报关',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        msg.data.excel = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/S1S21BF'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify(select, 'success', 3000);
//                                    S1S21_SSRT();
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
//            {
//                name: 'S1S21QX',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'remove',
//                    text: '取消采购',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS2').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择要取消采购的数据。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        msg.data.excel = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONST/QXCAIGOU'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify(select, 'success', 3000);
//                                    S1S21_SSRT();
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
////            {
////                name: 'S1S23U-3',
////                itemType: 'button',
////                buttonOptions: {
////                    icon: 'save',
////                    text: '物资导出', //S1S23U 改为 采购进度修改
////                    onClick: function() {
////                        let grid = $('#dataGridS2').dxDataGrid('instance');
////                        let rowsData = grid.getSelectedRowsData()
////                        let selectedRowKeys = grid.getSelectedRowKeys()
////                        if (selectedRowKeys.length < 1) {
////                            DevExpress.ui.notify('请选择要导出的物资信息。', 'info', 3000);
////                            return;
////                        }
////                        addEditPopup.show();
////                        msg = {
////                            ver: '53cc62f6122a436083ec083eed1dc03d',
////                            session: '42f5c0d7178148938f4fda29460b815a',
////                            tag: {},
////                            data: {},
////                        };
////                        msg.data.tpCgcontractst = rowsData;//物资
////                        ////console.log(msg)
////                        $.ajax({
////                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/out'),
////                            dataType: 'json', //返回格式为json   
////                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
////                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
////                            type: 'post', //请求方式 get 或者post ,         
////                            contentType: 'application/json',
////                            success: function(data) {
////                                ////console.log(data)
////                                if (data.data == null) {
////                                    addGang.splice(0, addGang.length);
////                                    $('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
////                                    return
////                                }
////                                let select;
////                                select = data.data
////                                addGang.splice(0, addGang.length);
////                                select.forEach(item => addGang.push(item));
////                                $('#addGangGrid').dxDataGrid('instance').option('dataSource', addGang)
////                                $('#addGangGrid').dxDataGrid('instance').deselectAll()
////                                $('#addGangGrid').dxDataGrid('instance').refresh()
////                            },
////                            error: function() {
////                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
////                            }
////                        })
////                    }
////                }
////            },
//        ]
//    })
//    $('#operateFormS1S3').dxForm({
//        width: '100%',
//        colCount: 16,
//        items: [
//        	{
//                name: 'S1S31A',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'plus',
//                    text: '新增',
//                    onClick: function() {
//                        change = '1';
//                        let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0];
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请在上面的表选择一条要新增的数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条要新增的数据。', 'info', 3000);
//                            return;
//                        }
//                        if(rowsData.cCheckway==0){
//                        	 DevExpress.ui.notify('入库未到齐，不允许添加发票', 'info', 3000);
//                             return;
//                        }
//                        $('#addmotai').show()
//                        addIns = $('#addmotai').dxPopup({
//                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
//                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
//                        }).dxPopup('instance')
//                        addIns.option('title', 'CG_H001')
//                        addIns.show();
//                        S1S31_addfun();
//                        S1S31addIns.option('formData', new Object())
//                        S1S31addIns.getEditor('cConmtid').option('value', rowsData.cId)
//                        S1S31addIns.getEditor('cConnum').option('value', rowsData.cConnum)
//                        //////console.log(rowsData.cId)
//
//                    }
//                }
//            },
//            {
//                name: 'S1S31U',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '修改',
//                    onClick: function() {
//                    	msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {},
//                        };
//	                    msg.data.list = tabledataS3;
//	                    //console.log(msg)
//	                    $.ajax({
//	                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneyinvbook/uodateFAPIAO'),
//	                        dataType: 'json', //返回格式为json           
//	                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//	                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//	                        type: 'post', //请求方式 get 或者post ,         
//	                        contentType: 'application/json',
//	                        success: function(data) {
//	                            let select = data.msg
//	                            if (data.errcode == 0) {
//	                                S1S31_SSRT();
//	                                DevExpress.ui.notify('数据保存成功', 'success', 3000);
//	                            } else {
//	                                DevExpress.ui.notify(select, 'warning', 3000);
//	                            }
//	                        },
//	                        error: function() {
//	                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);       
//	                        }
//	                    })
//                    }
//                }
//            },
//            {
//                name: 'S1S31D',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'remove',
//                    text: '删除',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS3').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        //前后端统一叫'tscLtrawbin' 
//                        msg.data.list = $('#dataGridS3').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneyinvbook/deleteFAPIAO'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify('删除成功', 'success', 3000);
//                                    S1S31_SSRT();
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
//            {
//                name: 'S1S31fapiao',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '发票',
//                    onClick: function() {
//                        change = '1';
//                        let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0];
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请选择一个合同数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一个合同。', 'info', 3000);
//                            return;
//                        }
//                        if(rowsData.cCheckway==0){
//                        	 DevExpress.ui.notify('入库未到齐，不允许添加发票', 'info', 3000);
//                             return;
//                        }
//                        $('#addmotai').show()
//                        addIns = $('#addmotai').dxPopup({
//                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
//                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
//                        }).dxPopup('instance')
//                        addIns.option('title', 'CG_H001')
//                        addIns.show();
//                        S1S31_fapiao();
//                        S1S31addIns.option('formData', new Object())
//                        S1S31addIns.getEditor('cConmtid').option('value', rowsData.cId)
//                        S1S31addIns.getEditor('cConnum').option('value', rowsData.cConnum)
//                        //////console.log(rowsData.cId)
//
//                    }
//                }
//            },
//        ]
//    })
//    $('#operateFormS1S4').dxForm({
//        width: '100%',
//        colCount: 16,
//        items: [{
//                name: 'S1S41A',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'plus',
//                    text: '新增',
//                    onClick: function() {
//                        change = '1';
//                        let grid = $('#dataGridS1').dxDataGrid('instance');
//                        let rowsData = grid.getSelectedRowsData()[0];
//                        let selectedRowKeys = grid.getSelectedRowKeys()
//                        if (selectedRowKeys.length < 1) {
//                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
//                            DevExpress.ui.notify('请在上面的表选择一条要新增的数据。', 'info', 3000);
//                            return;
//                        }
//                        if (selectedRowKeys.length > 1) {
//                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
//                            DevExpress.ui.notify('一次只能选择一条要新增的数据。', 'info', 3000);
//                            return;
//                        }
//                        $('#addmotai').show()
//                        addIns = $('#addmotai').dxPopup({
//                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
//                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
//                        }).dxPopup('instance')
//                        addIns.option('title', '新增付款详情')
//                        addIns.show();
//                        S1S41_addfun();
//                        //console.log(rowsData)
//                        S1S41addIns.option('formData', new Object())
//                        S1S41addIns.getEditor('cConmtid').option('value', rowsData.cId)
//                        S1S41addIns.getEditor('cConnum').option('value', rowsData.cConnum)
//                        S1S41addIns.getEditor('cPaytime').option('value', new Date())
//                    }
//                }
//            },
//            {
//                name: 'S1S41U',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'save',
//                    text: '修改',
//                    onClick: function() {
//                    	msg = {
//                                ver: '53cc62f6122a436083ec083eed1dc03d',
//                                session: '42f5c0d7178148938f4fda29460b815a',
//                                tag: {},
//                                data: {},
//                        };
//	                    msg.data.moneybook = tabledataS4;
//	                    //console.log(msg)
//	                    $.ajax({
//	                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneybook/updateFUKUAN'),
//	                        dataType: 'json', //返回格式为json           
//	                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//	                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//	                        type: 'post', //请求方式 get 或者post ,         
//	                        contentType: 'application/json',
//	                        success: function(data) {
//	                            let select = data.msg
//	                            if (data.errcode == 0) {
//	                                S1S41_SSRT();
//	                                DevExpress.ui.notify('数据保存成功', 'success', 3000);
//	                            } else {
//	                                DevExpress.ui.notify(select, 'warning', 3000);
//	                            }
//	                        },
//	                        error: function() {
//	                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);       
//	                        }
//	                    })
//                    }
//                }
//            },
//            {
//                name: 'S1S41D',
//                itemType: 'button',
//                buttonOptions: {
//                    icon: 'remove',
//                    text: '删除',
//                    onClick: function() {
//                        let grid1 = $('#dataGridS4').dxDataGrid('instance');
//                        let selectedRowKeys = grid1.getSelectedRowKeys()
//                        let rowsData = grid1.getSelectedRowsData()
//                        //脚本执行  
//                        if (selectedRowKeys.length < 1) {
//                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
//                            return;
//                        }
//                        msg = {
//                            ver: '53cc62f6122a436083ec083eed1dc03d',
//                            session: '42f5c0d7178148938f4fda29460b815a',
//                            tag: {},
//                            data: {}
//                        };
//                        //前后端统一叫'tscLtrawbin' 
//                        msg.data.moneybook = $('#dataGridS4').dxDataGrid('instance').getSelectedRowsData();
//                        //////console.log(msg)
//                        $.ajax({
//                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneybook/deleteFUKUAN'),
//                            dataType: 'json', //返回格式为json   
//                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
//                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
//                            type: 'post', //请求方式 get 或者post , 
//                            contentType: 'application/json',
//                            success: function(data) {
//                                let select = data.msg
//                                if (data.errcode == 0) {
//                                    DevExpress.ui.notify('删除成功', 'success', 3000);
//                                    S1S41_SSRT();
//                                } else {
//                                    DevExpress.ui.notify(select, 'warning', 3000);
//                                }
//                            },
//                            error: function() {
//                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                            }
//                        })
//                    }
//                }
//            },
//        ]
//    })
//    $('#operateFormS1S5').dxForm({
//        width: '100%',
//        colCount: 16,
//        items: [
////        	{
////                name: 'S1S51A',
////                itemType: 'button',
////                buttonOptions: {
////                    icon: 'plus',
////                    text: '新增',
////                    onClick: function() {
////                        change = '1';
////                        let grid = $('#dataGridS1').dxDataGrid('instance');
////                        let rowsData = grid.getSelectedRowsData()[0];
////                        let selectedRowKeys = grid.getSelectedRowKeys()
////                        if (selectedRowKeys.length < 1) {
////                            // Cake.Ui.Toast.showInfo('请选择一条要修改的数据。')     
////                            DevExpress.ui.notify('请选择要添加到货记录的合同。', 'info', 3000);
////                            return;
////                        }
////                        if (selectedRowKeys.length > 1) {
////                            // Cake.Ui.Toast.showInfo('一次只能选择一条要修改的数据。')    
////                            DevExpress.ui.notify('一次只能选择一条要新添加到货记录的合同。', 'info', 3000);
////                            return;
////                        }
////                        $('#addmotai').show()
////                        addIns = $('#addmotai').dxPopup({
////                            width: 1000, //为了规范限制模态框大小//用脚本标识模态框的标题
////                            height: 450, //为了规范限制模态框大小//用脚本标识模态框的标题
////                        }).dxPopup('instance')
////                        addIns.option('title', '新增付款详情')
////                        addIns.show();
////                        S1S51_addfun();
////                        //console.log(rowsData)
////                        S1S51addIns.option('formData', new Object())
////                        S1S51addIns.getEditor('cConmtid').option('value', rowsData.cId)
////                        S1S51addIns.getEditor('cConnum').option('value', rowsData.cConnum)
////                        S1S51addIns.getEditor('cDeltime').option('value', new Date())
////                    }
////                }
////            },
////            {
////                name: 'S1S51U',
////                itemType: 'button',
////                buttonOptions: {
////                    icon: 'save',
////                    text: '修改',
////                    onClick: function() {
////                    	msg = {
////                                ver: '53cc62f6122a436083ec083eed1dc03d',
////                                session: '42f5c0d7178148938f4fda29460b815a',
////                                tag: {},
////                                data: {},
////                        };
////	                    msg.data.bookList = tabledataS5;
////	                    //console.log(msg)
////	                    $.ajax({
////	                        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/receivebook/S1S51U'),
////	                        dataType: 'json', //返回格式为json           
////	                        async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
////	                        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
////	                        type: 'post', //请求方式 get 或者post ,         
////	                        contentType: 'application/json',
////	                        success: function(data) {
////	                            let select = data.msg
////	                            if (data.errcode == 0) {
////	                                S1S51_SSRT();
////	                                DevExpress.ui.notify('数据保存成功', 'success', 3000);
////	                            } else {
////	                                DevExpress.ui.notify(select, 'warning', 3000);
////	                            }
////	                        },
////	                        error: function() {
////	                            DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);       
////	                        }
////	                    })
////                    }
////                }
////            },
////            {
////                name: 'S1S51D',
////                itemType: 'button',
////                buttonOptions: {
////                    icon: 'remove',
////                    text: '删除',
////                    onClick: function() {
////                        let grid1 = $('#dataGridS5').dxDataGrid('instance');
////                        let selectedRowKeys = grid1.getSelectedRowKeys()
////                        let rowsData = grid1.getSelectedRowsData()
////                        //脚本执行  
////                        if (selectedRowKeys.length < 1) {
////                            DevExpress.ui.notify('请选择一条要删除的数据。', 'info', 3000);
////                            return;
////                        }
////                        msg = {
////                            ver: '53cc62f6122a436083ec083eed1dc03d',
////                            session: '42f5c0d7178148938f4fda29460b815a',
////                            tag: {},
////                            data: {}
////                        };
////                        //前后端统一叫'tscLtrawbin' 
////                        msg.data.moneybook = $('#dataGridS5').dxDataGrid('instance').getSelectedRowsData();
////                        //////console.log(msg)
////                        $.ajax({
////                            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneybook/deleteFUKUAN'),
////                            dataType: 'json', //返回格式为json   
////                            async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
////                            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
////                            type: 'post', //请求方式 get 或者post , 
////                            contentType: 'application/json',
////                            success: function(data) {
////                                let select = data.msg
////                                if (data.errcode == 0) {
////                                    DevExpress.ui.notify('删除成功', 'success', 3000);
////                                    S1S51_SSRT();
////                                } else {
////                                    DevExpress.ui.notify(select, 'warning', 3000);
////                                }
////                            },
////                            error: function() {
////                                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
////                            }
////                        })
////                    }
////                }
////            },
//        ]
//    })
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
            $.ajax({
                type: "post",
                url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
                data: JSON.stringify(msg),
                contentType: "application/json",
                dataType: "json",
                success: function(result) {
                    result.data.forEach(item => {
                        cgy.push(item);
                    });
                    console.log(cgy)
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
        initLoad14()
        function initLoad14() {
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
        				cgbm.push(item);
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
        				"cItemid": "CKZT"
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
        				ckzt.push(item);
        			});
        		},
        		error: function() {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
        initLoad16()
        function initLoad16() {
        	msg = {
        			ver: "53cc62f6122a436083ec083eed1dc03d",
        			session: "42f5c0d7178148938f4fda29460b815a",
        			tag: {},
        			data: {
        				"cItemid": "FKLB"
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
        				fklb.push(item);
        			});
        		},
        		error: function() {
        			cake.Ui.LoadPanel.close()
        		}
        	});
        }
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
                //searchdataFormM1.getEditor('cSw10').option('value', get_user());
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
        let matchedItem = cgy.find(item => item.cSubitemdes == TP_CGORDERMT_USER[0].userName);
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
            	h002request: {
                    startTime: new Date(),
                    endTime: new Date(),
                    cConnum: null,
                    cSupplier: null,
                    cState: null,
                    cSw10: null,
                    cCludecom: new Array(),
                    cCheckway: new Array(),
                    cSignstep: new Array(),
                    cTransway: new Array(),
                }
            }
        };
        if(searchdataFormM1.option('formData').cSw10 == undefined || searchdataFormM1.option('formData').cSw10.length == 0){
        	DevExpress.ui.notify('请选择采购员', 'warning', 3000);
        	return;
        }
        msg.data.h002request = searchdataFormM1.option('formData');
        //开始时间
        let startTime = msg.data.h002request.startTime;
        msg.data.h002request.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        // 结束时间
        let endTime = msg.data.h002request.endTime;
        msg.data.h002request.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        msg.data.h002request = [searchdataFormM1.option('formData')];
        console.log(JSON.stringify(msg))
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
            	////console.log(data)
            	let select;
            	select = data.data;
            	console.log(select)
                if (select == null) {
                    tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    //如果没有查到合同信息，则清空其他子表数据
                    tabledataS2.splice(0, tabledataS2.length);
                    $('#dataGridS2').dxDataGrid('instance').option('dataSource', tabledataS2)
                    $('#dataGridS2').dxDataGrid('instance').deselectAll()
                    $('#dataGridS2').dxDataGrid('instance').refresh()
                    tabledataS3.splice(0, tabledataS3.length);
                    $('#dataGridS3').dxDataGrid('instance').option('dataSource', tabledataS3)
                    $('#dataGridS3').dxDataGrid('instance').deselectAll()
                    $('#dataGridS3').dxDataGrid('instance').refresh()
                    tabledataS4.splice(0, tabledataS4.length);
                    $('#dataGridS4').dxDataGrid('instance').option('dataSource', tabledataS4)
                    $('#dataGridS4').dxDataGrid('instance').deselectAll()
                    $('#dataGridS4').dxDataGrid('instance').refresh()
                    tabledataS5.splice(0, tabledataS5.length);
                    $('#dataGridS5').dxDataGrid('instance').option('dataSource', tabledataS5)
                    $('#dataGridS5').dxDataGrid('instance').deselectAll()
                    $('#dataGridS5').dxDataGrid('instance').refresh()
                    tabledataS6.splice(0, tabledataS6.length);
                    $('#dataGridS6').dxDataGrid('instance').option('dataSource', tabledataS6)
                    $('#dataGridS6').dxDataGrid('instance').deselectAll()
                    $('#dataGridS6').dxDataGrid('instance').refresh()
                }
                tabledataS1.splice(0, tabledataS1.length);
                select.cgH001M1s1.forEach(item => tabledataS1.push(item));
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
    function M1S11_F1() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
            }
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()
        msg.data.list = rowsData;
        //////console.log(msg)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/YJdaohuo'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
            	let select = data.msg
                if (data.errcode == 0) {
                	//////console.log(data.errcode)
                    M1S11_serDel();
                    DevExpress.ui.notify('数据保存成功', 'success', 3000);
                } else {
                    DevExpress.ui.notify(select, 'warning', 3000);
                }
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
    }
    function M1S11_F2() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                {
                    dataField: 'cSw06',
                    label: {
                        text: '船号'
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
//                {
//                    dataField: 'cSw07',
//                    label: {
//                        text: '框架号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
////                    validationRules: [{
////                            type: 'required',
////                            message: '必填！'
////                        },
////                    ]
//                },
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
                let grid = $('#dataGridS1').dxDataGrid('instance');
                let rowsData = grid.getSelectedRowsData()
                msg.data.num = M1S11addIns.option('formData');
                msg.data.mtList = rowsData;
                ////console.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/YJshipnum'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            M1S11_serDel();
                            S1S21_SSRT();
                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
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
    function M1S11_F3() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
            }
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()
        msg.data.list = rowsData;
        //////console.log(msg)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/YJfapiao'),
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
                } else {
                    DevExpress.ui.notify(select, 'warning', 3000);
                }
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
    }
    function M1S11_F4() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
            }
        let grid = $('#dataGridS1').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData()
        msg.data.list = rowsData;
        //////console.log(msg)
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/YJfuqing'),
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
                } else {
                    DevExpress.ui.notify(select, 'warning', 3000);
                }
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
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
//                        {
//                            type: 'stringLength',
//                            max: 500,
//                            min: 0,
//                            message: '长度超限，最长为20500！'
//                        },
                    ]
                },
                {
                    dataField: 'cSw03',
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
                    dataField: 'cSupplier',
                    label: {
                        text: '供应商'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为2020！'
//                        },
                    ]
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
                    },
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
                    dataField: 'cDr',
                    label: {
                        text: '预计到货时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                },
            	{
                    dataField: 'cConmoney',
                    label: {
                        text: '合同金额'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                		{
                			type:'numeric',
                			message:'请输入数字',
                		},
                    ]
                },
                {
                    dataField: 'cSw01',
                    label: {
                        text: '已付款金额'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                		{
                			type:'numeric',
                			message:'请输入数字',
                		},
                	]
                },
                {
                    dataField: 'cCludeaddr',
                    label: {
                        text: '送货地点'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
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
                    dataField: 'cPayway',
                    label: {
                        text: '付款方式'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
//                        {
//                            type: 'stringLength',
//                            max: 500,
//                            min: 0,
//                            message: '长度超限，最长为20500！'
//                        },
                    ]
                },
                {
                    dataField: 'cCheckway',
                    label: {
                        text: '到货情况'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: dhqk,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cTransway',
                    label: {
                        text: '开票信息'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: kpxx,
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
                {
                	dataField: 'cState',
                	label: {
                		text: '状态'
                	},
                	editorType: 'dxSelectBox',
                	editorOptions: {
                		//以上完成对没有联动数据源配置
                		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                		dataSource: TP_wanchengxiala,
                		valueExpr: 'cSubitemid',
                		displayExpr: 'cSubitemdes',
                		searchEnable: true,
                		showClearButton: true,
                		readOnly: true,
                	},
                	validationRules: [{
                		type: 'required',
                		message: '必填！'
                	},
                	]
                },
//                {
//                    dataField: 'cGettime',
//                    label: {
//                        text: '取号日期'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cSw05',
//                    label: {
//                        text: '外贸号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw11',
//                    label: {
//                        text: '预计到货说明'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: yujidaohuoshuoming,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw12',
//                    label: {
//                        text: '天数'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw03',
//                    label: {
//                        text: '船号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw04',
//                    label: {
//                        text: '出船时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                },
//                {
//                    dataField: 'cForinland',
//                    label: {
//                        text: '传给国外时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cForoutland',
//                    label: {
//                        text: '国外回传时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cSw09',
//                    label: {
//                        text: '送/收货地点'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cSignstep',
//                    label: {
//                        text: '作废状态'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: zfzt,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为2020！'
//                    }, ]
//                },
//                {
//                    dataField: 'cRemark',
//                    label: {
//                        text: '备注'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: []
//                },
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
                msg.data.cgH001M1s1 = [M1S11addIns.option('formData')];
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/M1S11A'),
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
                    dataField: 'cSw03',
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
                    dataField: 'cSupplier',
                    label: {
                        text: '供应商'
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
                    },
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
                    dataField: 'cDr',
                    label: {
                        text: '预计到货时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                },
            	{
                    dataField: 'cConmoney',
                    label: {
                        text: '合同金额'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                		{
                			type:'numeric',
                			message:'请输入数字',
                		},
                    ]
                },
                {
                    dataField: 'cSw01',
                    label: {
                        text: '已付款金额'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                		{
                			type:'numeric',
                			message:'请输入数字',
                		},
                	]
                },
                {
                    dataField: 'cCludeaddr',
                    label: {
                        text: '送货地点'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
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
//                    dataField: 'cSw02',
//                    label: {
//                        text: '未付款金额'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
                {
                    dataField: 'cCheckway',
                    label: {
                        text: '到货情况'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: dhqk,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cPayway',
                    label: {
                        text: '付款方式'
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
                    dataField: 'cTransway',
                    label: {
                        text: '开票信息'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: kpxx,
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
                {
                	dataField: 'cState',
                	label: {
                		text: '状态'
                	},
                	editorType: 'dxSelectBox',
                	editorOptions: {
                		//以上完成对没有联动数据源配置
                		//以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                		dataSource: wanchengzhuangtai,
                		valueExpr: 'cSubitemid',
                		displayExpr: 'cSubitemdes',
                		searchEnable: true,
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
                    dataField: 'cId',
                    label: {
                        text: '合同编号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                    validationRules: [{
                        type: 'required',
                        message: '必填！'
                    }, ]
                },
//                {
//                    dataField: 'cGettime',
//                    label: {
//                        text: '取号日期'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cSw05',
//                    label: {
//                        text: '外贸号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw11',
//                    label: {
//                        text: '预计到货说明'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: yujidaohuoshuoming,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw12',
//                    label: {
//                        text: '天数'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw03',
//                    label: {
//                        text: '船号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cSw04',
//                    label: {
//                        text: '出船时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                },
//                {
//                    dataField: 'cForinland',
//                    label: {
//                        text: '传给国外时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cForoutland',
//                    label: {
//                        text: '国外回传时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cSw09',
//                    label: {
//                        text: '送/收货地点'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cSignstep',
//                    label: {
//                        text: '作废状态'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: zfzt,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为2020！'
//                    }, ]
//                },
//                {
//                    dataField: 'cRemark',
//                    label: {
//                        text: '备注'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: []
//                },
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
                msg.data.cgH001M1s1 = [M1S11addIns.option('formData')];
                //////console.log(msg.data.cgH001M1s1)
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/M1S11U'),
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


    $('#dataGridS1').dxDataGrid({
        onRowClick: function(e) {
            S1S21_SSRT()
            S1S31_SSRT()
            S1S41_SSRT()
            S1S51_SSRT()
            S1S61_SSRT()
        }

    })

    function S1S21_SSRT() {
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
//        msg.data.cgH001S1s2 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        msg.data.tmtlist = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        cake.Ui.LoadPanel.show();
        //console.log(msg.data.cgH001S1s2)
        if(msg.data.tmtlist.length==0){
        	DevExpress.ui.notify('请选择需要查询数据', 'info', 3000);
        }else{
        	$.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/S1S21Q'),
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
                    select = data.data.cgH001S1s2
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
    }

    function S1S31_SSRT() {
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.list = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        cake.Ui.LoadPanel.show()
        if(msg.data.list.length==0){
        	DevExpress.ui.notify('请选择需要查询的数据', 'info', 3000);
        }else{
        	$.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneyinvbook/selectConmtid'),
                dataType: 'json', //返回格式为json  
                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
                type: 'post', //请求方式 get 或者post ,
                contentType: 'application/json',
                success: function(data) {
                	////console.log(data.data)
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
                    cake.Ui.LoadPanel.close();
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }
    function S1S41_SSRT() {
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        ////console.log(msg)
        cake.Ui.LoadPanel.show();
        if(msg.data.length==0){
        	DevExpress.ui.notify('请选择需要查询的数据', 'info', 3000);
        }else{
        	$.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneybook/moneyList'),
                dataType: 'json', //返回格式为json  
                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
                type: 'post', //请求方式 get 或者post ,
                contentType: 'application/json',
                success: function(data) {
                    if (data.data == null) {
                        tabledataS4.splice(0, tabledataS4.length);
                        $('#dataGridS4').dxDataGrid('instance').option('dataSource', tabledataS4)
                        return
                    }
                    let select;
                    select = data.data
                    tabledataS4.splice(0, tabledataS4.length);
                    select.forEach(item => tabledataS4.push(item));
                    $('#dataGridS4').dxDataGrid('instance').option('dataSource', tabledataS4)
                    $('#dataGridS4').dxDataGrid('instance').deselectAll()
                    $('#dataGridS4').dxDataGrid('instance').refresh()
                    cake.Ui.LoadPanel.close();
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    cake.Ui.LoadPanel.close();
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }
    function S1S51_SSRT() {
        let aodthat = [];
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };
        msg.data.list = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        ////console.log(msg)
        cake.Ui.LoadPanel.show();
        if(msg.data.length==0){
        	DevExpress.ui.notify('请选择需要查询的数据', 'info', 3000);
        }else{
        	$.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/receivebook/selectList'),
                dataType: 'json', //返回格式为json  
                async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
                type: 'post', //请求方式 get 或者post ,
                contentType: 'application/json',
                success: function(data) {
                    if (data.data == null) {
                        tabledataS5.splice(0, tabledataS5.length);
                        $('#dataGridS5').dxDataGrid('instance').option('dataSource', tabledataS5)
                        return
                    }
                    let select;
                    select = data.data
                    tabledataS5.splice(0, tabledataS5.length);
                    select.forEach(item => tabledataS5.push(item));
                    $('#dataGridS5').dxDataGrid('instance').option('dataSource', tabledataS5)
                    $('#dataGridS5').dxDataGrid('instance').deselectAll()
                    $('#dataGridS5').dxDataGrid('instance').refresh()
                    cake.Ui.LoadPanel.close();
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    cake.Ui.LoadPanel.close();
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                    //e.cancel=true;       
                }
            })
        }
    }
    function S1S61_SSRT() {
    	let aodthat = [];
    	msg = {
    			ver: '53cc62f6122a436083ec083eed1dc03d',
    			session: '42f5c0d7178148938f4fda29460b815a',
    			tag: {},
    			data: {}
    	};
    	msg.data.list = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
    	////console.log(msg)
    	cake.Ui.LoadPanel.show();
    	if(msg.data.length==0){
    		DevExpress.ui.notify('请选择需要查询的数据', 'info', 3000);
    	}else{
    		$.ajax({
    			url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CK/M1S11Q'),
    			dataType: 'json', //返回格式为json  
    			async: true, //请求是否异步，默认为异步，这也是ajax重要特性 
    			data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名
    			type: 'post', //请求方式 get 或者post ,
    			contentType: 'application/json',
    			success: function(data) {
    				if (data.data.cgCkM1s1 == null) {
    					tabledataS6.splice(0, tabledataS6.length);
    					$('#dataGridS6').dxDataGrid('instance').option('dataSource', tabledataS6)
    					return
    				}
    				let select;
    				select = data.data.cgCkM1s1
    				tabledataS6.splice(0, tabledataS6.length);
    				select.forEach(item => tabledataS6.push(item));
    				$('#dataGridS6').dxDataGrid('instance').option('dataSource', tabledataS6)
    				$('#dataGridS6').dxDataGrid('instance').deselectAll()
    				$('#dataGridS6').dxDataGrid('instance').refresh()
    				cake.Ui.LoadPanel.close();
    			},
    			error: function() {
    				DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
    				cake.Ui.LoadPanel.close();
    				// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
    				//e.cancel=true;       
    			}
    		})
    	}
    }
    function S1S21_addfun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
                
                {
                    dataField: 'cGoodsname',
                    label: {
                        text: '物资名称'
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
                    dataField: 'cSpec',
                    label: {
                        text: '规格型号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: []
                },
                {
                    dataField: 'cUnit',
                    label: {
                        text: '单位'
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
//                {
//                    dataField: 'cSw05',
//                    label: {
//                        text: '外贸号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                        readOnly: true,
//                    },
//                },
//                {
//                    dataField: 'cCheckyorn',
//                    label: {
//                        text: '是/否验收'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: supplier,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 1,
//                        min: 0,
//                        message: '长度超限，最长为201！'
//                    }, ]
//                },
//                {
//                    dataField: 'cArrgoodstime',
//                    label: {
//                        text: '到货时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//
//                },
                {
                    dataField: 'cGoodsnum',
                    label: {
                        text: '订货数量'
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
                    dataField: 'cGroudtotalnum',
                    label: {
                        text: '累计到货量'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
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
                    validationRules: [{
                            type: 'required',
                            message: '必填！'
                        },
                    ]
                },
//                {
//                    dataField: 'cArrallyorn',
//                    label: {
//                        text: '是/否到齐'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGCONTRACTST_C_ARRALLYORN,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 1,
//                            min: 0,
//                            message: '长度超限，最长为201！'
//                        },
//                    ]
//                },
                {
                    dataField: 'cRemark',
                    label: {
                        text: '备注'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cState',
                    label: {
                        text: '状态'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        //以上完成对没有联动数据源配置
                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                        dataSource: TP_CGCONTRACTST_C_STATE,
                        valueExpr: 'cSubitemid',
                        displayExpr: 'cSubitemdes',
                        searchEnable: true,
                        showClearButton: true,
                        readOnly: true,
                    },
                },
                {
                    dataField: 'cMtid',
                    label: {
                        text: '合同编号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
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
                    data: {},
                };
                msg.data.cgH001S1s2 = [S1S21addIns.option('formData')];
                //////console.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/S1S21A'),
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
                        S1S21addIns.option('formData', new Object())
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

    function S1S21_BZfun() {
        S1S21addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 1,
            items: [{
                dataField: 'cSw08',
                label: {
                    text: '作废原因'
                },
                editorOptions: {
                    showClearButton: true,
                },
            }]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function(e) {
                let grid1 = $('#dataGridS1').dxDataGrid('instance');
                let selectedRowKeys = grid1.getSelectedRowKeys()
                let rowsData = grid1.getSelectedRowsData()
                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                msg.data = S1S21addIns.option('formData');

                msg.data.list = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                //////console.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_CONMT/updateZF'),
                    dataType: 'json', //返回格式为json   
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性   
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名 
                    type: 'post', //请求方式 get 或者post , 
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify('作废成功', 'success', 3000);
                            M1S11_serDel();
                            addIns.hide();
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

    function S1S21_Updatefun() {
//        S1S21addIns = $('#addForm').dxForm({
//            formData: adddata,
//            validationGroup: validationGroupName,
//            colCount: 3,
//            items: [{
//                    dataField: 'cGoodsname',
//                    label: {
//                        text: '物资名称'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 40,
//                            min: 0,
//                            message: '长度超限，最长为2040！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cOrid',
//                    label: {
//                        text: '请购单号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                        //                        readOnly: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为2020！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cConnum',
//                    label: {
//                        text: '合同号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为2020！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cSw05',
//                    label: {
//                        text: '外贸号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                },
//                {
//                    dataField: 'cConline',
//                    label: {
//                        text: '合同行号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为2020！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cCheckyorn',
//                    label: {
//                        text: '是/否验收'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGCONTRACTST_C_CHECKYORN,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 1,
//                        min: 0,
//                        message: '长度超限，最长为201！'
//                    }, ]
//                },
//                {
//                    dataField: 'cArrgoodstime',
//                    label: {
//                        text: '到货时间'
//                    },
//                    editorType: 'dxDateBox',
//                    editorOptions: {
//                        displayFormat: 'yyyy-MM-dd',
//                        type: 'datetime',
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cGoodsnum',
//                    label: {
//                        text: '订货数量'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为2020！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cGroudtotalnum',
//                    label: {
//                        text: '累计到货量'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为2020！'
//                    }, ]
//                },
//                {
//                    dataField: 'cSpec',
//                    label: {
//                        text: '规格型号'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: []
//                },
//                {
//                    dataField: 'cUnit',
//                    label: {
//                        text: '单位'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为2020！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cArrallyorn',
//                    label: {
//                        text: '是/否到齐'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGCONTRACTST_C_ARRALLYORN,
//                        valueExpr: 'cSubitemid',
//                        displayExpr: 'cSubitemdes',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 1,
//                            min: 0,
//                            message: '长度超限，最长为201！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cState',
//                    label: {
//                        text: '完成状态'
//                    },
//                    editorType: 'dxSelectBox',
//                    editorOptions: {
//                        //以上完成对没有联动数据源配置
//                        //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
//                        dataSource: TP_CGCONTRACTST_C_STATE,
//                        valueExpr: 'cSubitemdes',
//                        displayExpr: 'cSubitemid',
//                        searchEnable: true,
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为2020！'
//                    }, ]
//                },
//                {
//                    dataField: 'cResiduenum',
//                    label: {
//                        text: '剩余数量'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                            type: 'required',
//                            message: '必填！'
//                        },
//                        {
//                            type: 'stringLength',
//                            max: 20,
//                            min: 0,
//                            message: '长度超限，最长为2020！'
//                        },
//                    ]
//                },
//                {
//                    dataField: 'cId',
//                    label: {
//                        text: '合同子表主键'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: [{
//                        type: 'stringLength',
//                        max: 20,
//                        min: 0,
//                        message: '长度超限，最长为2020！'
//                    }, ]
//                },
//                {
//                    dataField: 'cRemark',
//                    label: {
//                        text: '备注'
//                    },
//                    editorOptions: {
//                        showClearButton: true,
//                    },
//                    validationRules: []
//                }
//            ]
//        }).dxForm('instance')
//        $('#addsure').dxButton({
//            text: '确定',
//            icon: 'todo',
//            validationGroup: validationGroupName,
//            onClick: function(e) {
//                let validateResult = e.validationGroup.validate();
//                if (!validateResult.isValid) {
//                    DevExpress.ui.notify('数据不符合规范', 'info', 3000);
//                    return;
//                }
//                msg = {
//                    ver: '53cc62f6122a436083ec083eed1dc03d',
//                    session: '42f5c0d7178148938f4fda29460b815a',
//                    tag: {},
//                    data: {},
//                };
////                msg.data.cgH001S1s2 = [S1S21addIns.option('formData')];
//                msg.data.cgH001S1s2 = tabledataS2;
//                //////console.log(msg)
//                //change等于1为添加         
//                $.ajax({
//                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/S1S21U'),
//                    dataType: 'json', //返回格式为json           
//                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
//                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
//                    type: 'post', //请求方式 get 或者post ,         
//                    contentType: 'application/json',
//                    success: function(data) {
//                        let select = data.msg
//                        if (data.errcode == 0) {
//                            S1S21_SSRT();
//                            DevExpress.ui.notify('数据保存成功', 'success', 3000);
////                            addIns.hide()
//                        } else {
//                            DevExpress.ui.notify(select, 'warning', 3000);
//                        }
//                    },
//                    error: function() {
//                        DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
//                        // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
//                        //e.cancel=true;         
//                    }
//                })
//            }
//        })
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
        msg.data.cgH001S1s2 = $('#dataGridS2').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_H001/S1S22MSG'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {

                S1S21_SSRT();
                DevExpress.ui.notify('数据保存成功', 'success', 3000);
                M1S11_serDel();

            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            }
        })
    }
    //发票快捷
    function S1S31_fapiao() {
        S1S31addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
            	{
                    dataField: 'cInvtime',
                    label: {
                        text: '开票时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                },
                {
                    dataField: 'cState',
                    label: {
                        text: '发票原件详情'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cRemark',
                    label: {
                        text: '合同原件详情'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                        hide: true,
                    },
                },
                {
                    dataField: 'cConmtid',
                    label: {
                        text: '合同编号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                        hide: true,
                    },
                },
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
                msg.data.mtList = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                msg.data.list = [S1S31addIns.option('formData')];
                //console.log(msg)
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneyinvbook/S1S31fapiao'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            S1S31_SSRT();
                            DevExpress.ui.notify(select, 'success', 3000);
                            addIns.hide()
                            S1S31addIns.option('formData', new Object())
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
    //发票添加
    function S1S31_addfun() {
        S1S31addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 2,
            items: [
                {
                    dataField: 'cState',
                    label: {
                        text: '发票原件详情'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cRemark',
                    label: {
                        text: '合同原件详情'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cMoney',
                    label: {
                        text: '发票金额'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                		{
                			type:'numeric',
                			message:'请输入数字',
                		},
                	]
                },
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
//                        width : 100, 
                    },
                },
                {
                    dataField: 'cConmtid',
                    label: {
                        text: '合同编号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                },
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
                msg.data.conmt = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
                msg.data.list = [S1S31addIns.option('formData')];
                ////console.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneyinvbook/ADDfapiao'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            S1S31_SSRT();
                            DevExpress.ui.notify(select, 'success', 3000);
                            addIns.hide()
                            S1S31addIns.option('formData', new Object())
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
    
    function S1S41_addfun() {
        S1S41addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 3,
            items: [
            	{
                    dataField: 'cPaytime',
                    label: {
                        text: '付款时间'
                    },
                    editorType: 'dxDateBox',
                    editorOptions: {
                        displayFormat: 'yyyy-MM-dd',
                        type: 'datetime',
                    },
                },
                {
                    dataField: 'cClearmoney',
                    label: {
                        text: '付款金额'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                		{
                			type:'numeric',
                			message:'请输入数字',
                		},
                	]
                },
                {
                    dataField: 'cRemark',
                    label: {
                        text: '付款详情'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                        width : 100, 
                    },
                },
                {
                    dataField: 'cConmtid',
                    label: {
                        text: '合同编号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                },
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
                msg.data.moneybook = [S1S41addIns.option('formData')];
                //console.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneybook/ADDfukuan'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            S1S41_SSRT();
                            DevExpress.ui.notify(select, 'success', 3000);
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
                        }
                        S1S41addIns.option('formData', new Object())
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
    //到货的添加
    function S1S51_addfun() {
        S1S41addIns = $('#addForm').dxForm({
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
                },
                {
                    dataField: 'cConline',
                    label: {
                        text: '合同行号'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                    validationRules: [
                		{
                			type:'numeric',
                			message:'请输入数字',
                		},
                	]
                },
                {
                    dataField: 'cRemark',
                    label: {
                        text: '付款详情'
                    },
                    editorOptions: {
                        showClearButton: true,
                    },
                },
                {
                    dataField: 'cConnum',
                    label: {
                        text: '合同号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                        width : 100, 
                    },
                },
                {
                    dataField: 'cConmtid',
                    label: {
                        text: '合同编号'
                    },
                    editorOptions: {
                        showClearButton: true,
                        readOnly: true,
                    },
                },
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
                msg.data.moneybook = [S1S41addIns.option('formData')];
                //console.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/moneybook/ADDfukuan'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            S1S41_SSRT();
                            DevExpress.ui.notify(select, 'success', 3000);
                            addIns.hide()
                        } else {
                            DevExpress.ui.notify(select, 'warning', 3000);
                        }
                        S1S41addIns.option('formData', new Object())
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
    
    //物资导出
    addEditPopup = $("#add-edit-popup-container").dxPopup({
        deferRendering: false,
        height: 450,
        width: '100%',

    }).dxPopup("instance");
    addEditForm = $("#add-edit-form-container").dxForm({
        formData: outForm,
        width: "100%",
        items: [
            {
                itemType: "group",
                items: [{
                        template: $("#addGangGrid")
                    },
                ]
            },
        ]

    }).dxForm('instance')
    //合同导出
    addEditPopup2 = $("#add-edit-popup-container2").dxPopup({
        deferRendering: false,
        height: 450,
        width: '100%',

    }).dxPopup("instance");
    addEditForm2 = $("#add-edit-form-container2").dxForm({
        formData: outForm,
        width: "100%",
        items: [
            {
                itemType: "group",
                items: [{
                        template: $("#addGangGrid2")
                    },
                ]
            },
        ]

    }).dxForm('instance')
    //物资导出
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
            // mode: "single"
            mode: "single"
        },
        loadPanel: {
            enabled: true,
            text: '请稍等片刻...'
        },
        columns: [
            {
                dataField: 'cNo',
                caption: '存档号',
            },
            {
                dataField: 'cTimeapply',
                caption: '请购日期',
                dataType: "date",
                format: "yyyy-MM-dd",
            },
            {
                dataField: 'cOrdernum',
                caption: '请购单号',
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
                dataField: 'cUnit',
                caption: '单位',
            },
            {
                dataField: 'cNum',
                caption: '请购数量',
            },
            {
                dataField: 'cManapply',
                caption: '请购人',
            },
            {
                dataField: 'cSw02',
                caption: '用途说明',
            },
             {
                dataField: 'cDeptapply',
                caption: '请购部门',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = cgbm.find(item => item.cSubitemid == rowData.cDeptapply);
                    if (matchedItem == null || matchedItem == undefined) {
                        return "";
                    } else {
                        return matchedItem.cSubitemdes;
                    }
                }
            },
            {
                dataField: 'cArrtime',
                caption: '需求时间',
                dataType: "date",
                format: "yyyy-MM-dd",
            },
             {
                dataField: 'cTypename',
                caption: '类别明细',
            },
             {
                dataField: 'cDeptor',
                caption: '采购部门',
//                calculateDisplayValue: function(rowData) {
//                  let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cDeptor);
//                  if (matchedItem == null || matchedItem == undefined) {
//                      return "";
//                  } else {
//                      return matchedItem.cSubitemdes;
//                  }
//              }
            },
            {
                dataField: 'cManor',
                caption: '采购员',
                calculateDisplayValue: function(rowData) {
                    let matchedItem = cgy.find(item => item.cSubitemid == rowData.cManor);
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
                    let matchedItem = qdgs.find(item => item.cSubitemid == rowData.cManor);
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
                allowEditing: false,
            },
             {
                dataField: 'cConnum',
                caption: '合同号',
                allowEditing: false,
            },
            {
                dataField: 'cDr',
                caption: '预计到货时间',
                allowEditing: false,
                dataType: "date",
                format: "yyyy-MM-dd",
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
        columns: [
        	{
                dataField: 'cConnum',
                caption: '合同号',
            },
            {
                dataField: 'cSw03',
                caption: '货物名称',
            },
            {
                dataField: 'cSupplier',
                caption: '供应商',
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
            },
            {
                dataField: 'cCludeaddr',
                caption: '送货地点',
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
//            {
//            	dataField: 'cState',
//            	caption: '状态',
//            	calculateDisplayValue: function(rowData) {
//            		let matchedItem = wanchengzhuangtai.find(item => item.cSubitemid == rowData.cState);
//            		if (matchedItem == null || matchedItem == undefined) {
//            			return "";
//            		} else {
//            			return matchedItem.cSubitemdes;
//            		}
//            	}
//            },
//            {
//                dataField: 'cId',
//                caption: '合同编号',
//                width: 1,
//                alignment: 'center',
//            },
        ]
    })

    // =================选项卡==================

    var tabPanel = $("#table3").dxTabPanel({
       height: '100%',
        items: [
        {
            title: "物资详情",
            html: $('#this-grid-container1')
        }, 
        {
            title: "发票详情",
            html: $('#this-grid-container2')
        },
        {
            title: "付款详情",
            html: $('#this-grid-container3')
        },
        {
            title: "到货详情",
            html: $('#this-grid-container4')
        },
        {
        	title: "出库详情",
        	html: $('#this-grid-container5')
        },
        ],
        selectedIndex: 0,
        loop: false,
        animationEnabled: true,
        swipeEnabled: true,
        //若该选项设置为 true, 则在显示组件时渲染其内容。反之,则在渲染组件时同时渲染其内容。
        deferRendering: false
    }).dxTabPanel("instance");
    


//    controls.opratePanelForm = $('#search-oprate').dxForm({
//        formData: headToolInfoSteel.data,
//        items: [{
//            itemType: "group",
//            colCount: 1,
//            items: [{
//                    dataField: "Numlength",
//                    label: {
//                        text: "数据个数",
//                    },
//                    template: createStaticText2,
//                },
//
//
//            ]
//        }, ]
//    }).dxForm("instance");
//
//    function createStaticText2(data) {
//
//        return $('<span>').text(data.component.option('formData')[data.dataField]).css({ 'color': '#FF0000', 'font-weight': 'bold' });
//
//    } 



})

