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
let S1S61addIns;
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
let S1S21CKdate;
let S1S41date;
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
let wzwczt = []
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
//let cgbm = []
let outForm;
let addGang = []
let connum = []
let nian=[]
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
            md: 2,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [
        	{
                dataField: 'year',
                label: {
                    text: '年份'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: nian,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
//            {
//                dataField: 'startTime',
//                label: {
//                    text: '时间'
//                },
//                editorType: "dxDateBox",
//                editorOptions: {
//                    width: '100%',
//                    type: "date",
//                    displayFormat: 'yyyy-MM-dd',
//                    value: new Date(new Date()),
//                },
//            },
           
            {
                dataField: 'cManor',
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
                    placeholder:'点击选择',
//                    readOnly:true,
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
        onCellPrepared:function(e){
            console.log(e.data)
            if(e.data){
                if(e.row.rowType == 'data'){
                    if(e.columnIndex == '1'){
                        e.cellElement.addClass('red')
                    }
                    if(e.columnIndex == '3'){
                        e.cellElement.addClass('yellow')
                    }
                }
            }
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
                width: 150,
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
                width: 150,
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
                dataField: 'cSignplace',
                caption: '签订地址',
            },
            {
                dataField: 'cDr',
                caption: '预计到货时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cSw09',
                caption: '合同金额',
            },
            {
            	dataField: 'cConmoney',
            	caption: '实际合同金额',
            },
            {
            	dataField: 'cSw23',
            	caption: '金额变动原因',
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
                width: 150,
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
                dataField: 'cId',
                caption: '合同编号',
                width: 1,
                alignment: 'center',
            },
        ],
        onCellPrepared: function(e) {
             // 样序等于1的行颜色改变
		if (e.data) {                 
			if (e.data.cSw14 == "1") {                     
			e.cellElement.addClass('bgc_FF0')                 
			}                 
			if (e.data.cSw14 == "2") {                     
			e.cellElement.addClass('bgc_green')                 
			}             
			}
		},
    });

    ////////////////////////////////////////////////////
    ////生成按钮层//////////////////////////////////////
    ////////////////////////////////////////////////////
    let monthtop = 0; //月份前
    let monthend = 0; //月份后
    var countries = [];

    let key = 0; //控制月份
    let yue = 13;
    let yuefen2 = [];//
    let yuefen3 = [];//
    let zdpd = [];//
    let cha ;//月份差
    let ii = 0;
    let shuj; //请求过来的所有月份数据
    let shuj2; //请求过来的所有月份数据
    let summ =[
        {
            column: '', //计算哪列的值
            showInColumn: "group", //显示在哪列
            displayFormat: "总计", //显示格式
            // valueFormat: "currency",
            precision: 2,
            summaryType: "sum" ,//汇总类型--运算方式
        },
        {
            column: "monthAdd",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
        {
            column: "twAdd",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
        {
            column: "totalPurchase",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
        {
            column: "totalUnpu",
            summaryType: "count",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
            
    ];
    let sum;
    let sumone=[
        {
            column: '', //计算哪列的值
            showInColumn: "group", //显示在哪列
            displayFormat: "总计", //显示格式
            // valueFormat: "currency",
            valueFormat: "fixedPoint",
            precision: 2,
            summaryType: "sum" ,//汇总类型--运算方式
        },
        {
            column: "monthAdd",
            displayFormat: "{0}",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
        {
            column: "twAdd",
            displayFormat: "{0}",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
        {
            column: "totalPurchase",
            displayFormat: "{0}",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
        {
            column: "totalUnpu",
            summaryType: "count",
            displayFormat: "{0}",
            summaryType: "sum" ,//汇总类型--运算方式
            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                let aa = e.value;
                aa = aa/2;
                return aa;
            }
        },
            
    ];//没有折叠的所有数据总计
    // shuj = {"ver":null,"errcode":"0","msg":"查询成功！！！","session":null,"tag":null,"data":[{"cManor":"QSCGZY013","group":"A","twAdd":"0","monthAdd":"335","month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":null,"monthProcure2":null,"twProcure2":null,"dNotP2":null,"month3":"03","monthProcure3":"1","twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":"10","monthProcure10":"9","twProcure10":null,"dNotP10":"2","month11":"11","monthProcure11":"1","twProcure11":null,"dNotP11":"949","month12":"12","monthProcure12":null,"twProcure12":null,"dNotP12":"8","bknotP3":"27","sknotP3":"0","indiaNotP2":null,"indiaNotP3":"0","bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"0","indiaNotP1":"0","bknotP2":null,"bknotP1":"12","sknotP2":null,"indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":"0","bknotP6":null,"indiaNotP5":null,"bknotP11":"4397","sknotP11":"21","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":"38","indiaNotP7":null,"sknotP8":null,"indiaNotP11":"651","sknotP12":"19","bknotP12":"252","indiaNotP12":"36","indiaNotP8":null,"sknotP10":"0"},{"cManor":"QSCGZY014","group":"A","twAdd":null,"monthAdd":null,"month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":"02","monthProcure2":null,"twProcure2":null,"dNotP2":"0","month3":"03","monthProcure3":null,"twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":null,"twProcure10":null,"dNotP10":null,"month11":"11","monthProcure11":null,"twProcure11":null,"dNotP11":"2","month12":null,"monthProcure12":null,"twProcure12":null,"dNotP12":null,"bknotP3":"2","sknotP3":"0","indiaNotP2":"0","indiaNotP3":"0","bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"0","indiaNotP1":"0","bknotP2":"3","bknotP1":"8","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":null,"bknotP6":null,"indiaNotP5":null,"bknotP11":"689","sknotP11":"0","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":null,"indiaNotP7":null,"sknotP8":null,"indiaNotP11":"0","sknotP12":null,"bknotP12":null,"indiaNotP12":null,"indiaNotP8":null,"sknotP10":null},{"cManor":"汇总","group":"A-汇总","twAdd":"0","monthAdd":"335","month1":null,"monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":null,"monthProcure2":null,"twProcure2":null,"dNotP2":"0","month3":null,"monthProcure3":"1","twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":"9","twProcure10":null,"dNotP10":"2","month11":null,"monthProcure11":"1","twProcure11":null,"dNotP11":"951","month12":null,"monthProcure12":null,"twProcure12":null,"dNotP12":"8","bknotP3":"29","sknotP3":"0","indiaNotP2":"0","indiaNotP3":"0","bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"0","indiaNotP1":"0","bknotP2":"3","bknotP1":"20","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":"0","bknotP6":null,"indiaNotP5":null,"bknotP11":"5086","sknotP11":"21","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":"38","indiaNotP7":null,"sknotP8":null,"indiaNotP11":"651","sknotP12":"19","bknotP12":"252","indiaNotP12":"36","indiaNotP8":null,"sknotP10":"0"},{"cManor":"QSCGZY001","group":"B","twAdd":"0","monthAdd":"853","month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":"02","monthProcure2":null,"twProcure2":null,"dNotP2":"0","month3":"03","monthProcure3":null,"twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":"10","monthProcure10":null,"twProcure10":null,"dNotP10":"0","month11":"11","monthProcure11":null,"twProcure11":null,"dNotP11":"903","month12":"12","monthProcure12":null,"twProcure12":null,"dNotP12":"2","bknotP3":"8","sknotP3":"0","indiaNotP2":"0","indiaNotP3":"0","bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"0","indiaNotP1":"0","bknotP2":"61","bknotP1":"34","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":"0","bknotP6":null,"indiaNotP5":null,"bknotP11":"10649","sknotP11":"17","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":"86","indiaNotP7":null,"sknotP8":null,"indiaNotP11":"843","sknotP12":"27","bknotP12":"803","indiaNotP12":"3","indiaNotP8":null,"sknotP10":"0"},{"cManor":"QSCGZY005","group":"B","twAdd":"0","monthAdd":"263","month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":null,"monthProcure2":null,"twProcure2":null,"dNotP2":null,"month3":"03","monthProcure3":null,"twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":"10","monthProcure10":null,"twProcure10":null,"dNotP10":"0","month11":"11","monthProcure11":null,"twProcure11":null,"dNotP11":"675","month12":"12","monthProcure12":"1","twProcure12":null,"dNotP12":"0","bknotP3":"4","sknotP3":"0","indiaNotP2":null,"indiaNotP3":"0","bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"2","indiaNotP1":"0","bknotP2":null,"bknotP1":"0","sknotP2":null,"indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":"1","bknotP6":null,"indiaNotP5":null,"bknotP11":"5768","sknotP11":"146","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":"14","indiaNotP7":null,"sknotP8":null,"indiaNotP11":"19","sknotP12":"11","bknotP12":"202","indiaNotP12":"0","indiaNotP8":null,"sknotP10":"17"},{"cManor":"QSCGZY012","group":"B","twAdd":"0","monthAdd":"1","month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":null,"monthProcure2":null,"twProcure2":null,"dNotP2":null,"month3":null,"monthProcure3":null,"twProcure3":null,"dNotP3":null,"month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":null,"twProcure10":null,"dNotP10":null,"month11":"11","monthProcure11":null,"twProcure11":null,"dNotP11":"0","month12":"12","monthProcure12":null,"twProcure12":null,"dNotP12":"0","bknotP3":null,"sknotP3":null,"indiaNotP2":null,"indiaNotP3":null,"bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"0","indiaNotP1":"0","bknotP2":null,"bknotP1":"1","sknotP2":null,"indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":null,"bknotP6":null,"indiaNotP5":null,"bknotP11":"435","sknotP11":"9","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":null,"indiaNotP7":null,"sknotP8":null,"indiaNotP11":"0","sknotP12":"0","bknotP12":"1","indiaNotP12":"0","indiaNotP8":null,"sknotP10":null},{"cManor":"汇总","group":"B-汇总","twAdd":"0","monthAdd":"1117","month1":null,"monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":null,"monthProcure2":null,"twProcure2":null,"dNotP2":"0","month3":null,"monthProcure3":null,"twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":null,"twProcure10":null,"dNotP10":"0","month11":null,"monthProcure11":null,"twProcure11":null,"dNotP11":"1578","month12":null,"monthProcure12":"1","twProcure12":null,"dNotP12":"2","bknotP3":"12","sknotP3":"0","indiaNotP2":"0","indiaNotP3":"0","bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"2","indiaNotP1":"0","bknotP2":"61","bknotP1":"35","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":"1","bknotP6":null,"indiaNotP5":null,"bknotP11":"16852","sknotP11":"172","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":"100","indiaNotP7":null,"sknotP8":null,"indiaNotP11":"862","sknotP12":"38","bknotP12":"1006","indiaNotP12":"3","indiaNotP8":null,"sknotP10":"17"},{"cManor":"QSCGZY002","group":"C","twAdd":"0","monthAdd":"864","month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"4","month2":"02","monthProcure2":null,"twProcure2":null,"dNotP2":"0","month3":"03","monthProcure3":null,"twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":"10","monthProcure10":null,"twProcure10":null,"dNotP10":"12","month11":"11","monthProcure11":null,"twProcure11":null,"dNotP11":"1315","month12":"12","monthProcure12":null,"twProcure12":null,"dNotP12":"27","bknotP3":"17","sknotP3":"0","indiaNotP2":"0","indiaNotP3":"0","bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"278","indiaNotP1":"0","bknotP2":"45","bknotP1":"67","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":"0","bknotP6":null,"indiaNotP5":null,"bknotP11":"7756","sknotP11":"414","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":"93","indiaNotP7":null,"sknotP8":null,"indiaNotP11":"236","sknotP12":"467","bknotP12":"342","indiaNotP12":"5","indiaNotP8":null,"sknotP10":"0"},{"cManor":"QSCGZY003","group":"C","twAdd":"0","monthAdd":"476","month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"0","month2":"02","monthProcure2":null,"twProcure2":null,"dNotP2":"2","month3":null,"monthProcure3":null,"twProcure3":null,"dNotP3":null,"month4":"04","monthProcure4":null,"twProcure4":null,"dNotP4":"20","month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":null,"twProcure10":null,"dNotP10":null,"month11":"11","monthProcure11":null,"twProcure11":null,"dNotP11":"685","month12":"12","monthProcure12":null,"twProcure12":null,"dNotP12":"0","bknotP3":null,"sknotP3":null,"indiaNotP2":"0","indiaNotP3":null,"bknotP4":"0","sknotP4":"0","indiaNotP4":"0","sknotP1":"12","indiaNotP1":"0","bknotP2":"0","bknotP1":"45","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":null,"bknotP6":null,"indiaNotP5":null,"bknotP11":"5160","sknotP11":"76","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":null,"indiaNotP7":null,"sknotP8":null,"indiaNotP11":"83","sknotP12":"47","bknotP12":"422","indiaNotP12":"0","indiaNotP8":null,"sknotP10":null},{"cManor":"汇总","group":"C-汇总","twAdd":"0","monthAdd":"1340","month1":null,"monthProcure1":null,"twProcure1":null,"dNotP1":"4","month2":null,"monthProcure2":null,"twProcure2":null,"dNotP2":"2","month3":null,"monthProcure3":null,"twProcure3":null,"dNotP3":"0","month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":"20","month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":null,"month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":null,"twProcure10":null,"dNotP10":"12","month11":null,"monthProcure11":null,"twProcure11":null,"dNotP11":"2000","month12":null,"monthProcure12":null,"twProcure12":null,"dNotP12":"27","bknotP3":"17","sknotP3":"0","indiaNotP2":"0","indiaNotP3":"0","bknotP4":"0","sknotP4":"0","indiaNotP4":"0","sknotP1":"290","indiaNotP1":"0","bknotP2":"45","bknotP1":"112","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":"0","bknotP6":null,"indiaNotP5":null,"bknotP11":"12916","sknotP11":"490","indiaNotP9":null,"bknotP5":null,"sknotP5":null,"bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":"93","indiaNotP7":null,"sknotP8":null,"indiaNotP11":"319","sknotP12":"514","bknotP12":"764","indiaNotP12":"5","indiaNotP8":null,"sknotP10":"0"},{"cManor":"QSCGZY007","group":"其他","twAdd":"0","monthAdd":"243","month1":"01","monthProcure1":null,"twProcure1":null,"dNotP1":"3","month2":"02","monthProcure2":null,"twProcure2":null,"dNotP2":"0","month3":null,"monthProcure3":null,"twProcure3":null,"dNotP3":null,"month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":"05","monthProcure5":null,"twProcure5":null,"dNotP5":"2","month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":null,"twProcure10":null,"dNotP10":null,"month11":"11","monthProcure11":null,"twProcure11":null,"dNotP11":"357","month12":"12","monthProcure12":null,"twProcure12":null,"dNotP12":"9","bknotP3":null,"sknotP3":null,"indiaNotP2":"0","indiaNotP3":null,"bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"2","indiaNotP1":"0","bknotP2":"49","bknotP1":"29","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":null,"bknotP6":null,"indiaNotP5":"0","bknotP11":"4559","sknotP11":"335","indiaNotP9":null,"bknotP5":"0","sknotP5":"0","bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":null,"indiaNotP7":null,"sknotP8":null,"indiaNotP11":"291","sknotP12":"26","bknotP12":"146","indiaNotP12":"1","indiaNotP8":null,"sknotP10":null},{"cManor":"汇总","group":"其他-汇总","twAdd":"0","monthAdd":"243","month1":null,"monthProcure1":null,"twProcure1":null,"dNotP1":"3","month2":null,"monthProcure2":null,"twProcure2":null,"dNotP2":"0","month3":null,"monthProcure3":null,"twProcure3":null,"dNotP3":null,"month4":null,"monthProcure4":null,"twProcure4":null,"dNotP4":null,"month5":null,"monthProcure5":null,"twProcure5":null,"dNotP5":"2","month6":null,"monthProcure6":null,"twProcure6":null,"dNotP6":null,"month7":null,"monthProcure7":null,"twProcure7":null,"dNotP7":null,"month8":null,"monthProcure8":null,"twProcure8":null,"dNotP8":null,"month9":null,"monthProcure9":null,"twProcure9":null,"dNotP9":null,"month10":null,"monthProcure10":null,"twProcure10":null,"dNotP10":null,"month11":null,"monthProcure11":null,"twProcure11":null,"dNotP11":"357","month12":null,"monthProcure12":null,"twProcure12":null,"dNotP12":"9","bknotP3":null,"sknotP3":null,"indiaNotP2":"0","indiaNotP3":null,"bknotP4":null,"sknotP4":null,"indiaNotP4":null,"sknotP1":"2","indiaNotP1":"0","bknotP2":"49","bknotP1":"29","sknotP2":"0","indiaNotP6":null,"bknotP9":null,"sknotP9":null,"sknotP7":null,"indiaNotP10":null,"bknotP6":null,"indiaNotP5":"0","bknotP11":"4559","sknotP11":"335","indiaNotP9":null,"bknotP5":"0","sknotP5":"0","bknotP8":null,"sknotP6":null,"bknotP7":null,"bknotP10":null,"indiaNotP7":null,"sknotP8":null,"indiaNotP11":"291","sknotP12":"26","bknotP12":"146","indiaNotP12":"1","indiaNotP8":null,"sknotP10":null}],"pageInfo":null}
    // shuj = shuj.data
    // shuj2 = shuj
    for(let i=1;i<(13-(monthend-monthtop));i++){
        key++
        if(key==monthtop){
            key=monthend  // 循环到合并月的时候直接等于最大的月份
        }
        if(key == monthend){  
            key = monthtop+'-'+monthend // 合并月后变成xx-xx月的字符串
        }
        yuefen =  {
            caption: ""+key+"月",
                alignment: 'center',
            columns: [ 
                {
                headerCellTemplate: function(container) {
                    container.append($("<div style='line-height:2;'>未采购</div>"));
                },
                caption: "未采购",
                alignment: 'center',
                columns: [{
                    caption: "国内",
                    alignment:'centent',
                    dataField: "dNotP"+i,
                    
                }, {
                    caption: "大K",
                    alignment:'centent',
                    dataField: "bknotP"+i,
                
                }, {
                    caption: "小K",
                    alignment:'centent',
                    dataField: "sknotP"+i,
                   
                }, {
                    caption: "印度",
                    alignment:'centent',
                    dataField: "indiaNotP"+i,
                   
                }, {
                    caption: "总数",
                    alignment:'centent',
                    dataField: "notP"+i,
                   
                }]
            },
            {
                headerCellTemplate: function(container) {
                    container.append($("<div style='line-height:4;'>本周采购</div>"));
                },
                caption: "本周采购",
                alignment:'centent',
                dataField: "twProcure"+i,
                // sortOrder: "desc"
            },{
                headerCellTemplate: function(container) {
                    container.append($("<div style='line-height:4;'>本月采购</div>"));
                },
                caption: "本月采购",
                alignment:'centent',
                dataField: "monthProcure"+i,
                // sortOrder: "desc"
            },
            ]
        },
        sum = [
        {
                column: "dNotP"+i,
//                 summaryType: "count",
//                 displayFormat: "{0}",
                summaryType: "sum" ,//汇总类型--运算方式
                customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                    let aa = e.value;
                    aa = aa/2;
                    return aa;
                }
            },
        {
                column: "bknotP"+i,
//                 summaryType: "count",
//                 displayFormat: "{0}",
                summaryType: "sum" ,//汇总类型--运算方式 
                customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                    let aa = e.value;
                    aa = aa/2;
                    return aa;
                }   
            },
        {
                column: "sknotP"+i,
//                 summaryType: "count",
//                 displayFormat: "{0}",
                summaryType: "sum" ,//汇总类型--运算方式
                customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                    let aa = e.value;
                    aa = aa/2;
                    return aa;
                }
                },
        {
                column: "indiaNotP"+i,
//                 summaryType: "count",
//                 displayFormat: "{0}",
                summaryType: "sum" ,//汇总类型--运算方式
                customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                    let aa = e.value;
                    aa = aa/2;
                    return aa;
                }
                },
            {
                    column: "notP"+i,
    //                 summaryType: "count",
    //                 displayFormat: "{0}",
                    summaryType: "sum" ,//汇总类型--运算方式
                    customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                        let aa = e.value;
                        aa = aa/2;
                        return aa;
                    }
                    },
        {
                column: "twProcure"+i,
//                 summaryType: "count",
//                 displayFormat: "{0}",
                summaryType: "sum" ,//汇总类型--运算方式
                customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                    let aa = e.value;
                    aa = aa/2;
                    return aa;
                }
                },
        {
                column: "monthProcure"+i,
//                 summaryType: "count",
//                 displayFormat: "{0}",
                summaryType: "sum" ,//汇总类型--运算方式
                customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                    let aa = e.value;
                    aa = aa/2;
                    return aa;
                }
                },
            ]
        // console.log(typeof(key))
        if(typeof(key)== 'string'){
            key = monthend  //把合并后的月份 变回去
        }
    
        yuefen3.push(yuefen)
        // summ.concat(sum)
        summ.push.apply(summ,sum);
        sumone.push.apply(sumone,sum);
    }
    sumone=[...summ]
    console.log(sumone)
    $("#gridContainer").dxDataGrid({
        dataSource: countries,
        columnResizingMode: "widget",
        editing: {
            mode: 'popup',
            //allowUpdating: false     
        },
        // keyExpr: 'ID',    
        columnFixing:{
            enabled:true
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
         height: '90%',
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
        onCellPrepared:function(e){
            if(e.data){
                if(e.row.rowType == 'data'){
                    if(e.column.caption == '总数'){
                        e.cellElement.addClass('red')
                    }
                    if(e.column.caption == '分组'){
                        e.cellElement.addClass('fenz')
                    }
                    if(e.column.caption == '采购员'){
                        e.cellElement.addClass('fenz')
                    }
                    if(e.column.caption == '本月采购'){
                        e.cellElement.addClass('beny')
                    }
                    if(e.column.caption == '本周采购'){
                        e.cellElement.addClass('benz')
                    }
                    if(e.column.caption == '本月增加项'){
                        e.cellElement.addClass('benz')
                    }
                    if(e.column.caption == '本周添加项'){
                        e.cellElement.addClass('benz')
                    }
                    if(e.column.caption == '本周采购项'){
                        e.cellElement.addClass('benz')
                    }
                    if(e.column.caption == '总未采购项'){
                        e.cellElement.addClass('benz')
                    }
                    if(e.data.cManor == '汇总'){
                        e.cellElement.addClass('huiz')
                    }
                }
            }
        },
        onCellClick:function(e){
        
        	// 解码
            var loc = decodeURIComponent(location.href)
            // console.log(loc)
            var n1 = loc.length;//地址的总长
            var n2 = loc.indexOf("?");//取得=号的位置
            let parameter = decodeURI(loc.substr(n2 + 1, n1 - n2));//截取从?号后面的内容
            console.log(parameter)
            // console.log(e.column.dataField)
            let url3 = e.column.dataField
            let url1 = e.column.caption
            let url2 = e.data.cManor
            let url4 = searchdataFormM1.option('formData').year
            let url5 = 'benz';
            
           if(url1 !='分组' && url1!='采购员'&& url2!='汇总'){
        	   url3 = url3.split(/[^\d-]/g) 
               // console.log(url3)
               // url3 = url3.split('-')
               url3 =url3[url3.length-1] 
                // = 号 分隔
                   let url = [url1,url2,url3,url4,url5]
                   console.log(url)
                    url = encodeURIComponent(url)
                   console.log(url)
                   localStorage.setItem("uoken1", url);  // 存到缓存
//               	let uken1 = localStorage.getItem("uoken1",);  // 拿出到缓存
//                   window.location.href='CG_Q001_5.html?'+parameter;
                   window.open('CG_Q001_5.html?'+parameter) 
           }
           
            
        },
        columns: [
            {
            headerCellTemplate: function(container) {
                container.append($("<div style='line-height:6;'>分组</div>"));
            },
            fixed: true,
            dataField:"group",
            caption: "分组",
            // width: 120,
             alignment: 'center',
            onCellPre:function(e){
                e.addClass('fenz')
            }
            
        }, {
            headerCellTemplate: function(container) {
                container.append($("<div style='line-height:6;'>采购员</div>"));
            },
            dataField: "cManor",
            
            caption: "采购员",
            fixed: true,
            // width: 120,
                alignment: 'center',
            calculateDisplayValue: function(rowData) {
                let matchedItem = cgy.find(item => item.cSubitemid == rowData.cManor);
                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }
            }
           
        },yuefen3[0],yuefen3[1],yuefen3[2],yuefen3[3],yuefen3[4],yuefen3[5],yuefen3[6],
        yuefen3[7],yuefen3[8],yuefen3[9],yuefen3[10],yuefen3[11],
            {
                headerCellTemplate: function(container) {
                    container.append($("<div style='line-height:6;'>本月增加项</div>"));
                },
                caption: "本月增加项",
                alignment:'centent',
                dataField: "monthAdd",
            
            },
            {
                headerCellTemplate: function(container) {
                    container.append($("<div style='line-height:6;'>本周增加项</div>"));
                },
                caption: "本周增加项",
                alignment:'centent',
                dataField: "twAdd",
            
            },
            {
                headerCellTemplate: function(container) {
                    container.append($("<div style='line-height:6;'>本周采购</div>"));
                },
                caption: "本周采购",
                alignment:'centent',
                dataField: "totalPurchase",
            
            },
            {   
                headerCellTemplate: function(container) {
                    container.append($("<div style='line-height:6;'>总未采购项</div>"));
                },
                caption: "总未采购项",
                alignment:'centent',
                dataField: "totalUnpu",
            
            },
        ],
        export: {
            enabled: true,
            fileName: '导出文件',
            allowExportSelectedData: true,
        },
        summary: {
            // 普通列求和
            totalItems: summ,
        },
    });
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
                dataField: 'cState',
                label: {
                    text: '几月'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: [
                        {
                            'cSubitemid':'1',
                            'cSubitemdes':'1',
                        },
                        {
                            'cSubitemid':'2',
                            'cSubitemdes':'2',
                        },{
                            'cSubitemid':'3',
                            'cSubitemdes':'3',
                        },
                        {
                            'cSubitemid':'4',
                            'cSubitemdes':'4',
                        },
                        {
                            'cSubitemid':'5',
                            'cSubitemdes':'5',
                        },{
                            'cSubitemid':'6',
                            'cSubitemdes':'6',
                        },{
                            'cSubitemid':'7',
                            'cSubitemdes':'7',
                        },
                        {
                            'cSubitemid':'8',
                            'cSubitemdes':'8',
                        },{
                            'cSubitemid':'9',
                            'cSubitemdes':'9',
                        },
                        {
                            'cSubitemid':'10',
                            'cSubitemdes':'10',
                        },
                        {
                            'cSubitemid':'11',
                            'cSubitemdes':'11',
                        },{
                            'cSubitemid':'12',
                            'cSubitemdes':'12',
                        },
                ],
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    // showClearButton: true,
                    width:80,
                },
            },
            {
                dataField: 'cState2',
                label: {
                    text: '到几月'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: [
                        {
                        'cSubitemid2':'1',
                        'cSubitemdes2':'1',
                    },
                    {
                        'cSubitemid2':'2',
                        'cSubitemdes2':'2',
                    },{
                        'cSubitemid2':'3',
                        'cSubitemdes2':'3',
                    },
                    {
                        'cSubitemid2':'4',
                        'cSubitemdes2':'4',
                    },
                    {
                        'cSubitemid2':'5',
                        'cSubitemdes2':'5',
                    },{
                        'cSubitemid2':'6',
                        'cSubitemdes2':'6',
                    },{
                        'cSubitemid2':'7',
                        'cSubitemdes2':'7',
                    },
                    {
                        'cSubitemid2':'8',
                        'cSubitemdes2':'8',
                    },{
                        'cSubitemid2':'9',
                        'cSubitemdes2':'9',
                    },
                    {
                        'cSubitemid2':'10',
                        'cSubitemdes2':'10',
                    },
                    {
                        'cSubitemid2':'11',
                        'cSubitemdes2':'11',
                    },{
                        'cSubitemid2':'12',
                        'cSubitemdes2':'12',
                    },
                ],
                    valueExpr: 'cSubitemid2',
                    displayExpr: 'cSubitemdes2',
                    searchEnable: true,
                    // showClearButton: true,
                    width:80,
                },
            },
            {
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '折叠',
                    onClick: function() {
                        let hou4 = [
                            {
                            headerCellTemplate: function(container) {
                                container.append($("<div style='line-height:6;'>本月增加项</div>"));
                            },
                            caption: "本月增加项",
                            alignment:'center',
                            dataField: "monthAdd",
                        
                        },
                        {
                            headerCellTemplate: function(container) {
                                container.append($("<div style='line-height:6;'>本周增加项</div>"));
                            },
                            caption: "本周增加项",
                            alignment:'center',
                            dataField: "twAdd",
                        
                        },
                        {
                            headerCellTemplate: function(container) {
                                container.append($("<div style='line-height:6;'>本周采购</div>"));
                            },
                            caption: "本周采购",
                            alignment:'center',
                            dataField: "totalPurchase",
                        
                        },
                        {   
                            headerCellTemplate: function(container) {
                                container.append($("<div style='line-height:6;'>总未采购项</div>"));
                            },
                            caption: "总未采购项",
                            alignment:'center',
                            dataField: "totalUnpu",
                        
                        },]
                        let qian2 = [
                            {
                                headerCellTemplate: function(container) {
                                    container.append($("<div style='line-height:6;'>分组</div>"));
                                },
                                fixed: true,
                                dataField:"group",
                                caption: "分组",
                                alignment: 'center',
                            }, {
                                headerCellTemplate: function(container) {
                                    container.append($("<div style='line-height:6;'>采购员</div>"));
                                },
                                fixed: true,
                                dataField: "cManor",
                                caption: "采购员",
                                alignment: 'center',
                                calculateDisplayValue: function(rowData) {
                                    let matchedItem = cgy.find(item => item.cSubitemid == rowData.cManor);
                                    if (matchedItem == null || matchedItem == undefined) {
                                        return "";
                                    } else {
                                        return matchedItem.cSubitemdes;
                                    }
                                }
                                
                            },
                        ]
                        let yueshuj = [];
                        // let zhedshuj=0;
                        // let aa2=$('#operateFormM1S1').dxForm().option('cState2')
                        monthtop= $('#operateFormM1S1').dxForm('instance').option('formData').cState;
                        monthend= $('#operateFormM1S1').dxForm('instance').option('formData').cState2;
                        // console.log(monthtop,monthend)
                        if ((+monthend) < (+monthtop)) {
                            DevExpress.ui.notify('后面的月份要大于面前的月份', 'error', 3000);
                            return;
                        }
                        if (monthend==undefined||monthtop==undefined) {
                            DevExpress.ui.notify('月份不能为空', 'error', 3000);
                            return;
                        }
                        for (let index = 0; index < zdpd.length; index++) {
                            if (zdpd[index]==monthtop) {
                                DevExpress.ui.notify('无法折叠,请拆分之后再点击', 'error', 3000);
                                return;
                            }
                        }
                        if(yuefen2.length>0){
                            console.log('第二次折叠')              
                            let dNotPall= 'dNotPall'+monthtop+'-'+monthend
                            let bknotPall= 'bknotPall'+monthtop+'-'+monthend
                            let sknotPall= 'sknotPall'+monthtop+'-'+monthend
                            let indiaNotPall= 'indiaNotPall'+monthtop+'-'+monthend
                            let twProcureall= 'twProcureall'+monthtop+'-'+monthend
                            let monthProcureall= 'monthProcureall'+monthtop+'-'+monthend
                            
                            zhed(monthtop,monthend)
                            function zhed(monthtop,monthend){
                                // zhedshuj = monthtop
                                if(monthtop>0){
                                    shuj.forEach(item=>{
                                        let dNotP1=0 
                                        let bknotP1=0 
                                        let sknotP1=0 
                                        let indiaNotP1=0 
                                        let notP1=0 
                                        let twProcure1=0
                                        let monthProcure1=0 
                                        for(let i = monthtop;i<=monthend;i++){
                                            let dNotP = 'dNotP'+i  //国内
                                            let bknotP = 'bknotP'+i  //大K
                                            let sknotP = 'sknotP'+i  //小K
                                            let indiaNotP = 'indiaNotP'+i  //印度
                                            let notP = 'notP'+i  //总数
                                            let twProcure = 'twProcure'+i  //本周采购
                                            let monthProcure = 'monthProcure'+i  //本月采购
                                            // console.log(item.dNotP+i,item.bknotP+i,item.sknotP+i)
                                            // Object.keys(item).forEach(function(key){
                                                // console.log(item[key])
                                                dNotP1+= Number(item[dNotP])
                                                bknotP1+= Number(item[bknotP])
                                                sknotP1+= Number(item[sknotP])
                                                indiaNotP1+= Number(item[indiaNotP])
                                                twProcure1+= Number(item[twProcure])
                                                monthProcure1+= Number(item[monthProcure])
                                                notP1+= Number(item[notP])
                                            // })
                                            
                                        }
                                        // console.log(item)
                                        
                                        item[dNotPall]=dNotP1
                                        item[bknotPall]=bknotP1
                                        item[sknotPall]=sknotP1
                                        item[indiaNotPall]=indiaNotP1
                                        item[twProcureall]=twProcure1
                                        item[monthProcureall]=monthProcure1
                                        item[notPall]=notP1
                                    })
                                    // console.log(shuj)
                                }
                            }
                            // nn.map(item => item.a).indexOf(33)
                            ii=yuefen2.map(item => item.caption).indexOf((monthtop+'月'))//获取下标
                            // console.log(ii)
                            yuefen2.splice(ii,monthend-monthtop+1)
                            // console.log(yuefen2)
                            let yuefenz =  {
                                caption: monthtop+'-'+monthend+"月",
                                alignment:'center',
                                columns: [ 
                                    {
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:2;'>未采购</div>"));
                                    },
                                    caption: "未采购",
                                    alignment: 'center',
                                    columns: [{
                                        caption: "国内",
                                        alignment:'center',
                                        dataField: dNotPall,
                                        
                                    }, {
                                        caption: "大K",
                                        alignment:'center',
                                        dataField: bknotPall,
                                        
                                    }, {
                                        caption: "小K",
                                        alignment:'center',
                                        dataField: sknotPall,
                                        
                                    }, {
                                        caption: "印度",
                                        alignment:'center',
                                        dataField: indiaNotPall,
                                        
                                    }, {
                                        caption: "总数",
                                        alignment:'center',
                                        dataField: notPall,
                                       
                                    }]
                                },
                                {
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:4;'>本周采购</div>"));
                                    },
                                    caption: "本周采购",
                                    alignment:'center',
                                    dataField: twProcureall,
                                    // format: "percent",
                                    // sortOrder: "desc"
                                },{
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:4;'>本月采购</div>"));
                                    },
                                    caption: "本月采购",
                                    alignment:'center',
                                    dataField: monthProcureall,
                                    // format: "percent",
                                    // sortOrder: "desc"
                                },
                                ]
                            }
                            // console.log()
                            yuefen2.splice(ii,0,yuefenz)
                            sum = [
                                {
                                        column: dNotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                    },
                                {
                                        column: bknotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                    },
                                {
                                        column: sknotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                                {
                                        column: indiaNotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                        {
                                            column: notPall,
                            //                 summaryType: "count",
                            //                 displayFormat: "{0}",
                                            summaryType: "sum" ,//汇总类型--运算方式
                                            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                                let aa = e.value;
                                                aa = aa/2;
                                                return aa;
                                            }
                                            },
                                {
                                        column: twProcureall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                                {
                                        column: monthProcureall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                                    ]
                            summ.push.apply(summ,sum);
                        }else{
                            console.log('第一次折叠')
                            // console.log(shuj)
                            key = 0;
                            let dNotPall= 'dNotPall'+monthtop+'-'+monthend
                            let bknotPall= 'bknotPall'+monthtop+'-'+monthend
                            let sknotPall= 'sknotPall'+monthtop+'-'+monthend
                            let indiaNotPall= 'indiaNotPall'+monthtop+'-'+monthend
                            let notPall= 'notP'+monthtop+'-'+monthend
                            let twProcureall= 'twProcureall'+monthtop+'-'+monthend
                            let monthProcureall= 'monthProcureall'+monthtop+'-'+monthend
                            
                            zhed(monthtop,monthend)
                            function zhed(monthtop,monthend){
                                // zhedshuj = monthtop
                                if(monthtop>0){
                                    shuj.forEach(item=>{
                                        let dNotP1=0 
                                        let bknotP1=0 
                                        let sknotP1=0 
                                        let indiaNotP1=0 
                                        let notP1=0 
                                        let twProcure1=0
                                        let monthProcure1=0 
                                        for(let i = monthtop;i<=monthend;i++){
                                            let dNotP = 'dNotP'+i  //国内
                                            let bknotP = 'bknotP'+i  //大K
                                            let sknotP = 'sknotP'+i  //小K
                                            let indiaNotP = 'indiaNotP'+i  //印度
                                            let notP = 'notP'+i  //印度
                                            let twProcure = 'twProcure'+i  //本周采购
                                            let monthProcure = 'monthProcure'+i  //本月采购
                                            // console.log(item.dNotP+i,item.bknotP+i,item.sknotP+i)
                                            // Object.keys(item).forEach(function(key){
                                                // console.log(item[key])
                                                dNotP1+= Number(item[dNotP])
                                                bknotP1+= Number(item[bknotP])
                                                sknotP1+= Number(item[sknotP])
                                                indiaNotP1+= Number(item[indiaNotP])
                                                notP1+= Number(item[notP])
                                                twProcure1+= Number(item[twProcure])
                                                monthProcure1+= Number(item[monthProcure])
                                            // })
                                            
                                        }
                                        
                                        // console.log(item)
                                        item[dNotPall]=dNotP1
                                        item[bknotPall]=bknotP1
                                        item[sknotPall]=sknotP1
                                        item[indiaNotPall]=indiaNotP1
                                        item[notPall]=notP1
                                        item[twProcureall]=twProcure1
                                        item[monthProcureall]=monthProcure1
                                    })
                                    // console.log(shuj)
                                }
                            }
                            sum = [
                                {
                                        column: dNotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                    },
                                {
                                        column: bknotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                    },
                                {
                                        column: sknotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                                {
                                        column: indiaNotPall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                        {
                                            column: notPall,
                            //                 summaryType: "count",
                            //                 displayFormat: "{0}",
                                            summaryType: "sum" ,//汇总类型--运算方式
                                            customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                                let aa = e.value;
                                                aa = aa/2;
                                                return aa;
                                            }
                                            },
                                {
                                        column: twProcureall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                                {
                                        column: monthProcureall,
                                        summaryType: "count",
                                        displayFormat: "{0}",
                                        summaryType: "sum" ,//汇总类型--运算方式
                                        customizeText: function (e) {   // 汇总时会把各个小组的汇总也加起来,结果会多一倍 所以要除以2
                                            let aa = e.value;
                                            aa = aa/2;
                                            return aa;
                                        }
                                        },
                                    ]
                            summ.push.apply(summ,sum);
                            for(let i=1;i<(13-(monthend-monthtop));i++){
                                
                                key++
                                if(key==monthtop){
                                    key = monthend  // 循环到合并月的时候直接等于最大的月份
                                }
                                if(key == monthend){  
                                    key = monthtop+'-'+monthend // 合并月后变成xx-xx月的字符串
                                }
                                yuefen =  {
                                    caption: ""+key+"月",
                                    alignment: 'center',
                                    columns: [ 
                                        {
                                        headerCellTemplate: function(container) {
                                            container.append($("<div style='line-height:2;'>未采购</div>"));
                                        },
                                        caption: "未采购",
                                        alignment: 'center',
                                        columns: [{
                                            caption: "国内",
                                            alignment:'center',
                                            dataField: "dNotP"+key,
                                            
                                        }, {
                                            caption: "大K",
                                            alignment:'center',
                                            dataField: "bknotP"+key,
                                        
                                        }, {
                                            caption: "小K",
                                            alignment:'center',
                                            dataField: "sknotP"+key,
                                            
                                        }, {
                                            caption: "印度",
                                            alignment:'center',
                                            dataField: "indiaNotP"+key,
                                            
                                        }, {
                                            caption: "总数",
                                            alignment:'center',
                                            dataField: "notP"+key,
                                           
                                        }]
                                    },
                                    {
                                        headerCellTemplate: function(container) {
                                            container.append($("<div style='line-height:4;'>本周采购</div>"));
                                        },
                                        caption: "本周采购",
                                        alignment:'center',
                                        dataField: "twProcure"+key,
                                        // sortOrder: "desc"
                                    },{
                                        headerCellTemplate: function(container) {
                                            container.append($("<div style='line-height:4;'>本月采购</div>"));
                                        },
                                        caption: "本月采购",
                                        alignment:'center',
                                        dataField: "monthProcure"+key,
                                        // sortOrder: "desc"
                                    },
                                    ]
                                }
                                let yuefenz =  {
                                    caption: ""+key+"月",
                                    alignment: 'center',
                                    columns: [ 
                                        {
                                        headerCellTemplate: function(container) {
                                            container.append($("<div style='line-height:2;'>未采购</div>"));
                                        },
                                        caption: "未采购",
                                        alignment: 'center',
                                        columns: [{
                                            caption: "国内",
                                            alignment:'center',
                                            dataField: dNotPall,
                                            
                                        }, {
                                            caption: "大K",
                                            alignment:'center',
                                            dataField: bknotPall,
                                            
                                        }, {
                                            caption: "小K",
                                            alignment:'center',
                                            dataField: sknotPall,
                                            
                                        }, {
                                            caption: "印度",
                                            alignment:'center',
                                            dataField: indiaNotPall,
                                            
                                        }, {
                                            caption: "总数",
                                            alignment:'center',
                                            dataField: notPall,
                                            
                                        }]
                                    },
                                    {
                                        headerCellTemplate: function(container) {
                                            container.append($("<div style='line-height:4;'>本周采购</div>"));
                                        },
                                        caption: "本周采购",
                                        alignment: 'center',
                                        dataField: twProcureall,
                                        // format: "percent",
                                        // sortOrder: "desc"
                                    },{
                                        headerCellTemplate: function(container) {
                                            container.append($("<div style='line-height:4;'>本月采购</div>"));
                                        },
                                        caption: "本月采购",
                                        alignment:'center',
                                        dataField: monthProcureall,
                                        // format: "percent",
                                        // sortOrder: "desc"
                                    },
                                    ]
                                }
                                if(typeof(key)== 'string'){
                                    yuefen2.push(yuefenz)
                                    key = monthend  //把合并后的月份 变回去
                                }else{
                                    yuefen2.push(yuefen)
                                }
                            }
                        }
                        // console.log(yuefen2)
                        cha = monthend-monthtop
                        for(var i= (+monthtop);i<=(+monthend);i++){
                            // console.log(i)
                            zdpd.push(i)
                        }
                        yue = yue-cha
                        yueshuj=[...qian2,...yuefen2,...hou4]
                        $("#gridContainer").dxDataGrid({
                            dataSource: countries,
                            columnAutoWidth: true,
                            allowColumnReordering: true,
                            showBorders: true,
                            onCellClick:function(e){
                            	// 解码
                                var loc = decodeURIComponent(location.href)
                                // console.log(loc)
                                var n1 = loc.length;//地址的总长
                                var n2 = loc.indexOf("?");//取得=号的位置
                            	let parameter = decodeURI(loc.substr(n2 + 1, n1 - n2));//截取从?号后面的内容
                                let url3 = e.column.dataField
                                let url1 = e.column.caption
                                let url2 = e.data.cManor
                                let url4 = searchdataFormM1.option('formData').year;
                                let url5 = '1';
                                if(url1 != '分组' && url1 != "采购员" && url2 != '汇总'){
                                	url3 = url3.split(/[^\d-]/g) 
                                    // console.log(url3)
                                    // url3 = url3.split('-')
                                    url3 =url3[url3.length-1] 
                                     // = 号 分隔
                                    let url = [url1,url2,url3,url4,url5]
                                    console.log(url)
                                         url = encodeURIComponent(url)
                                         localStorage.setItem("uoken1", url);  // 存到缓存
                                        console.log(url)
//                                        window.location.href='CG_Q001_5.html?'+parameter;
                                        window.open('CG_Q001_5.html?'+parameter) 
                                }
                                
                                
                            },
                            columns: yueshuj,
                    //         summary: {
                    //             totalItems: [{
                    //                 column: "Area",
                    //                 summaryType: "count",
                    //                 displayFormat: "总计:{0}"
                    //             }]
                    //         },
                            summary: {
                                // 普通列求和
                                totalItems: summ,
                            },
                        });
                        // console.log('11')
                        $("#gridContainer").dxDataGrid('instance').option('dataSource', shuj)
                        $('#gridContainer').dxDataGrid('instance').deselectAll()
                        $('#gridContainer').dxDataGrid('instance').refresh()
                    }   
                }
            },
            {
                name: 'M1S11Q',
                itemType: 'button',
                buttonOptions: {
                    icon: 'search',
                    text: '拆分',
                    onClick: function() {
                        zdpd = []; // 还原折叠数据
                        summ = [];
                        summ = [...sumone];
                        yuefen2 = [];
                        console.log(summ)
                        monthtop = 0; 
                        monthend = 0; 
                        for(let i=1;i<(13-(monthend-monthtop));i++){
                            key++
                            if(key==monthtop){
                                key=monthend  // 循环到合并月的时候直接等于最大的月份
                            }
                            if(key == monthend){  
                                key = monthtop+'-'+monthend // 合并月后变成xx-xx月的字符串
                            }
                            yuefen =  {
                                caption: ""+key+"月",
                                alignment: 'center',
                                columns: [ 
                                    {
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:2;'>未采购</div>"));
                                    },
                                    caption: "未采购",
                                    alignment: 'center',
                                    columns: [{
                                        caption: "国内",
                                        alignment: 'center',
                                        dataField: "dNotP"+i,
                                        
                                    }, {
                                        caption: "大K",
                                        alignment: 'center',
                                        dataField: "bknotP"+i,
                                    
                                    }, {
                                        caption: "小K",
                                        alignment: 'center',
                                        dataField: "sknotP"+i,
                                       
                                    }, {
                                        caption: "印度",
                                        alignment: 'center',
                                        dataField: "indiaNotP"+i,
                                       
                                    }, {
                                        caption: "总数",
                                        alignment: 'center',
                                        dataField: "notP"+i,
                                        
                                    }]
                                },
                                {
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:4;'>本周采购</div>"));
                                    },
                                    caption: "本周采购",
                                    alignment: 'center',
                                    dataField: "twProcure"+i,
                                    // sortOrder: "desc"
                                },{
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:4;'>本月采购</div>"));
                                    },
                                    caption: "本月采购",
                                    alignment: 'center',
                                    dataField: "monthProcure"+i,
                                    // sortOrder: "desc"
                                },
                                ]
                            }
                            // console.log(typeof(key))
                            if(typeof(key)== 'string'){
                                key = monthend  //把合并后的月份 变回去
                            }
                            yuefen3.push(yuefen)
                        }
                        $("#gridContainer").dxDataGrid({
                            dataSource: countries,
                            columnAutoWidth: true,
                            allowColumnReordering: true,
                            showBorders: true,
                            onCellClick:function(e){
                            	// 解码
                                var loc = decodeURIComponent(location.href)
                                // console.log(loc)
                                var n1 = loc.length;//地址的总长
                                var n2 = loc.indexOf("?");//取得=号的位置
                            	let parameter = decodeURI(loc.substr(n2 + 1, n1 - n2));//截取从?号后面的内容
                                console.log(e.column.dataField)
                                let url3 = e.column.dataField
                                let url1 = e.column.caption
                                let url2 = e.data.cManor
                                let url4 = searchdataFormM1.option('formData').year
                                let url5 = '1';
                                if(url1 != '分组' && url1 != "采购员" && url2 != '汇总'){
                                	url3 = url3.split(/[^\d-]/g) 
                                    // console.log(url3)
                                    // url3 = url3.split('-')
                                    url3 =url3[url3.length-1] 
                                     // = 号 分隔
                                    let url = [url1,url2,url3,url4,url5]
                                         url = encodeURIComponent(url)
                                         localStorage.setItem("uoken1", url);  // 存到缓存
                                        console.log(url)
//                                        window.location.href='CG_Q001_5.html?'+parameter;
                                        window.open('CG_Q001_5.html?'+parameter) 
                                }
                                
                                
                            },
                            columns: [
                                {
                                headerCellTemplate: function(container) {
                                    container.append($("<div style='line-height:6;'>分组</div>"));
                                },
                                fixed: true,
                                dataField:"group",
                                caption: "分组",
                                alignment: 'center',
                            }, {
                                headerCellTemplate: function(container) {
                                    container.append($("<div style='line-height:6;'>采购员</div>"));
                                },
                                fixed: true,
                                dataField: "cManor",
                                caption: "采购员",
                                alignment: 'center',
                                calculateDisplayValue: function(rowData) {
                                    let matchedItem = cgy.find(item => item.cSubitemid == rowData.cManor);
                                    if (matchedItem == null || matchedItem == undefined) {
                                        return "";
                                    } else {
                                        return matchedItem.cSubitemdes;
                                    }
                                }
                               
                            },yuefen3[0],yuefen3[1],yuefen3[2],yuefen3[3],yuefen3[4],yuefen3[5],yuefen3[6],
                            yuefen3[7],yuefen3[8],yuefen3[9],yuefen3[10],yuefen3[11],
                                {
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:6;'>本月增加项</div>"));
                                    },
                                    caption: "本月增加项",
                                    alignment:'centent',
                                    dataField: "monthAdd",
                                
                                },
                                {
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:6;'>本周增加项</div>"));
                                    },
                                    caption: "本周增加项",
                                    alignment:'centent',
                                    dataField: "twAdd",
                                
                                },
                                {
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:6;'>本周采购</div>"));
                                    },
                                    caption: "本周采购",
                                    alignment:'centent',
                                    dataField: "totalPurchase",
                                
                                },
                                {   
                                    headerCellTemplate: function(container) {
                                        container.append($("<div style='line-height:6;'>总未采购项</div>"));
                                    },
                                    caption: "总未采购项",
                                    alignment:'centent',
                                    dataField: "totalUnpu",
                                
                                },
                            ],
                            summary: {
                                // 普通列求和
                                totalItems: summ,
                            },
                        });
                        $("#gridContainer").dxDataGrid('instance').option('dataSource', shuj2)
                        $('#gridContainer').dxDataGrid('instance').deselectAll()
                        $('#gridContainer').dxDataGrid('instance').refresh()
                        // M1S11_serDel();
                    }
                }
            },
           
            
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
    // $('#gridContainer').dxDataGrid('instance').option('dataSource', shuj)
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
            //console.log(9)
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
                    console.log(nian)
	                var date = new Date();
	            	this.year = date.getFullYear();//当前年份
	            	this.month = date.getMonth() + 1;//当前月份
	            	var i = date.getMonth();
	            	searchdataFormM1.getEditor('year').option('value', getYear());
//	                searchdataFormM2.getEditor('year').option('value', nian[1].cSubitemid);
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        function getYear(){
        	var date = new Date();
        	 let  year = date.getFullYear();//当前年份
        	console.log(year);
        	let matchedItem = nian.find(item => item.cSubitemid == year);

            if (matchedItem == null || matchedItem == undefined) {
                return "";
            } else {
                //console.log(matchedItem.cSubitemid)
                return matchedItem.cSubitemid;
            }
        }
//        initLoad14()
//        function initLoad14() {
//        	msg = {
//        			ver: "53cc62f6122a436083ec083eed1dc03d",
//        			session: "42f5c0d7178148938f4fda29460b815a",
//        			tag: {},
//        			data: {
//        				"cItemid": "BMMC"
//        			}
//        	};
//        	$.ajax({
//        		type: "post",
//        		url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/CG_A001/selcon"),
//        		data: JSON.stringify(msg),
//        		contentType: "application/json",
//        		dataType: "json",
//        		success: function(result) {
//        			result.data.forEach(item => {
//        				cgbm.push(item);
//        			});
//        		},
//        		error: function() {
//        			cake.Ui.LoadPanel.close()
//        		}
//        	});
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
    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {
          
            }
        };
       let cManor =  searchdataFormM1.option('formData').cManor;
       if(cManor==undefined){
    	   DevExpress.ui.notify('请选择采购员！！', 'warning', 3000);
    	   return;
       }
        msg.data.year = searchdataFormM1.option('formData').year;
        msg.data.cManor = searchdataFormM1.option('formData').cManor;
      
        console.log(msg)
//        console.log(JSON.stringify(msg))
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/homepage/reportform'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
            	 if (data.data == null) {
            		 countries.splice(0, countries.length);
                    $('#gridContainer').dxDataGrid('instance').option('dataSource', countries)
                    return
                }
            	let select;
                select = data.data;
                shuj = select
                shuj2 = select
            	console.log(select)
            	countries.splice(0, countries.length);
                select.forEach(item => countries.push(item));
                $("#gridContainer").dxDataGrid('instance').option('dataSource', countries)
                $('#gridContainer').dxDataGrid('instance').deselectAll()
                $('#gridContainer').dxDataGrid('instance').refresh()

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

            S1S21_SSRT();//物资查询
            S1S31_SSRT();//发票
            S1S41_SSRT();//付款情况
            S1S51_SSRT();//到货成功
            S1S61_SSRT();//出库成功

            S1S21_SSRT()
            S1S31_SSRT()
            S1S41_SSRT()
            S1S51_SSRT()
            S1S61_SSRT()

            S1S21_SSRT();//物资查询
            S1S31_SSRT();//发票
            S1S41_SSRT();//付款情况
            S1S51_SSRT();//到货情况
            S1S61_SSRT();//出库情况

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
                	console.log(data.data)
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
    
    //导出
    addEditPopup = $("#add-edit-popup-container").dxPopup({
        deferRendering: false,
        // height: 450,
        width: '100%',

    }).dxPopup("instance");
    addEditForm = $("#add-edit-form-container").dxForm({
        formData: outForm,
        width: "100%",
        alignment:'centent',
        items: [
            {
                itemType: "group",
                alignment:'centent',
                items: [{
                        template: $("#addGangGrid")
                    },
                ]
            },
        ]

    }).dxForm('instance')
   

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
    






})

