///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let S1S21addIns;
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
let tabledataS2 = []; //用于接收表格数据源
let searchdataM1; //每个查询条件form的数据
let searchdataFormM1; //每个查询条件form的实例
let adddata = {}; //添加按钮需要的数据源
let addIns; //增加操作时候的模态框实例

let TP_CGORDERMT_C_COMNAME = [];
let TP_CGORDERMT_C_DEPTAPPLY = []; //用于数据集合,对应字段含义为

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
let wanchengzhuangtai = [
    // { value: '0', cSubitemdes: '未完成' },
    // { value: '1', cSubitemdes: '已完成' }

]
let shifoujixu = [
    // { value: '0', cSubitemdes: '否' },
    // { value: '1', cSubitemdes: '是' }

]
let shenhezhuangtai = [
    // { value: '1', cSubitemdes: '未审核' },
    // { value: '2', cSubitemdes: '已通过' },
    // { value: '3', cSubitemdes: '未通过' }
]
let tijiaozhuangtai = [
    // { value: '0', cSubitemdes: '未提交' },
    // { value: '1', cSubitemdes: '已提交' }

]
let caigoubumen = [
    // { value: '0', cSubitemdes: '采购一组' },
    // { value: '1', cSubitemdes: '采购二组' },
    // { value: '2', cSubitemdes: '采购三组' },
]
let caigouyuan = [
    // { value: '0', cSubitemdes: 'CG01' },
    // { value: '1', cSubitemdes: 'CG02' },
    // { value: '2', cSubitemdes: 'CG03' },
]
let caigoujindu = [
    // { value: '0', cSubitemdes: '未开始采购' },
    // { value: '1', cSubitemdes: '任务已接收' },
    // { value: '2', cSubitemdes: '寻找供应商' },
    // { value: '3', cSubitemdes: '询价\ 比价' },
    // { value: '4', cSubitemdes: '订货' },
    // { value: '5', cSubitemdes: '发货' },
    // { value: '6', cSubitemdes: '到货' },
    // { value: '7', cSubitemdes: '入库' },
    // { value: '8', cSubitemdes: '完成' },
    // { value: '9', cSubitemdes: '取消转国内' },

]
let fenpeizhuangtai = [
    // { value: '1', cSubitemdes: '已分配' },
    // { value: '0', cSubitemdes: '未分配' },

]
let caigouzhuangtai = [
    // { value: '0', cSubitemdes: '未采购' },
    // { value: '1', cSubitemdes: '已采购' },

]
let wuzileixing = [
    // { value: '1', cSubitemdes: '设备' },
    // { value: '2', cSubitemdes: '备件' },

]
let shenqingbumen = [
    // { value: '1', cSubitemdes: '采购部' },
    // { value: '2', cSubitemdes: '销售部' },
    // { value: '3', cSubitemdes: '人事部' },
    // { value: '4', cSubitemdes: '财务部' },
    // { value: '5', cSubitemdes: '生产部' },
]

let gongsi = []

let bumenmingcheng = []


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
        items: [{
		            dataField: 'cComname',
		            label: {
		                text: '公司名称'
		            },
		            editorType: 'dxSelectBox',
		            editorOptions: {
		                //以上完成对没有联动数据源配置
		                //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
		                dataSource: TP_CGORDERMT_C_COMNAME,
		
		                valueExpr: 'cSubitemid',
		                displayExpr: 'cSubitemdes',
		                searchEnable: true,
		                showClearButton: true,
		            }
            },
            {
                dataField: 'cOrdernum',
                label: {
                    text: '单据编号'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
            {
                dataField: 'cDeptapply',
                label: {
                    text: '申请部门'
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: TP_CGORDERMT_C_DEPTAPPLY,

                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    searchEnable: true,
                    showClearButton: true,
                }
            },
            {
                dataField: 'cManapply',
                label: {
                    text: '申请人'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
            // {
            //     dataField: 'cAudittime_star',
            //     label: {
            //         text: '审核时间开始时间'
            //     },
            //      editorType: "dxDateBox",
            //     editorOptions: {
            //         width: "100%",
            //         type: "date",
            //         displayFormat: 'yyyy-MM-dd',
            //         value: new Date(),
            //     },
            // },
            // {
            //     dataField: 'cAudittime_star',
            //     label: {
            //         text: '审核时间结束时间'

            //     },
            //      editorType: "dxDateBox",
            //     editorOptions: {
            //         width: "100%",
            //         type: "date",
            //         displayFormat: 'yyyy-MM-dd',
            //         value: new Date(),
            //     },

            // },
            // {
            //     dataField: 'startTime',
            //     label: {
            //         text: '开始时间'
            //     },
            //     editorType: "dxDateBox",
            //     editorOptions: {
            //         width: "100%",
            //         type: "date",
            //         displayFormat: 'yyyy-MM-dd',
            //         value: new Date(),
            //     },
            // },
            // {
            //     dataField: 'endTime',
            //     label: {
            //         text: '结束时间'
            //     },
            //     editorType: "dxDateBox",
            //     editorOptions: {
            //         width: "100%",
            //         type: "date",
            //         displayFormat: 'yyyy-MM-dd',
            //         value: new Date(),
            //     },
            // },
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
                dataField: 'cComname',
                caption: '公司名称',
            calculateDisplayValue: function (rowData) {

                let matchedItem = gongsi.find(item => item.cSubitemid == rowData.cComname);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
            },
            {
                dataField: 'cOrdernum',
                caption: '单据编号',
            
            },
            {
                
                dataField: 'cDeptapply',
                caption: '申请部门',
                calculateDisplayValue: function (rowData) {

                let matchedItem = bumenmingcheng.find(item => item.cSubitemid == rowData.cDeptapply);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
            },
            {
                dataField: 'cManapply',
                caption: '申请人',
            },
            {
                dataField: 'cTimeapply',
                caption: '申请日期',
            },
            {
                dataField: 'cTimetake',
                caption: '收单日期',
            },
            {
                dataField: 'cMitman',
                caption: '提交人',
            },
            {
                dataField: 'cMittype',
                caption: '提交状态',
                calculateDisplayValue: function (rowData) {

                let matchedItem = tijiaozhuangtai.find(item => item.cSubitemid == rowData.cMittype);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
            },
            {
                dataField: 'cMittime',
                caption: '提交时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cAudittype',
                caption: '审核状态',
                  calculateDisplayValue: function(rowData) {

                    let matchedItem = shenhezhuangtai.find(item => item.value == rowData.cSubitemid);

                    if (!!matchedItem) {
                        return matchedItem.cSubitemdes;
                    }

                    return '';

                }
            },
            {
                dataField: 'cAuditman',
                caption: '审核人',
            },
            {
                dataField: 'cAudittime',
                caption: '审核时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
            {
                dataField: 'cRemark',
                caption: '备注',
            },
            {
                dataField: 'cCreatetime',
                caption: '创建时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cCreater',
                caption: '创建人',
            },
            {
                dataField: 'cState',
                caption: '状态',
                  calculateDisplayValue: function(rowData) {

                    let matchedItem = wanchengzhuangtai.find(item => item.value == rowData.cSubitemid);

                    if (!!matchedItem) {
                        return matchedItem.cSubitemdes;
                    }

                    return '';

                }
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
            mode: 'multiple'
        },
        columns: [{
                dataField: 'cMtid',
                caption: '请购主表编码',
            },
            {
                dataField: 'cNo',
                caption: '序号',
            },
            {
                dataField: 'cMustneed',
                caption: '是否急需',
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
                dataField: 'cTypename',
                caption: '类型',
                calculateDisplayValue: function (rowData) {

                let matchedItem = wuzileixing.find(item => item.cSubitemid == rowData.cTypename);

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
            },
            {
                dataField: 'cNum',
                caption: '申报量',
            },
            {
                dataField: 'cUnit',
                caption: '单位',
            },
                        {
                dataField: 'cPlanor',
                caption: '采购进度',
                calculateDisplayValue: function (rowData) {

                let matchedItem = caigoujindu.find(item => item.cSubitemid == rowData.cPlanor);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
            },
            {
                dataField: 'cArrtime',
                caption: '要求到货时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cOrdealline',
                caption: '采购期限',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cManor',
                caption: '采购员',
                calculateDisplayValue: function (rowData) {

                let matchedItem = caigouyuan.find(item => item.cSubitemid == rowData.cManor);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
            },
            {
                dataField: 'cDeptor',
                caption: '采购部门',
                calculateDisplayValue: function (rowData) {

                let matchedItem = caigoubumen.find(item => item.cSubitemid == rowData.cDeptor);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
            },
            {
                dataField: 'cPhone',
                caption: '采购员联系方式',
            },
            {
                dataField: 'cAllotstate',
                caption: '分配状态',
                calculateDisplayValue: function (rowData) {

                let matchedItem = fenpeizhuangtai.find(item => item.cSubitemid == rowData.cAllotstate);

                if (matchedItem == null || matchedItem == undefined) {
                    return "";
                } else {
                    return matchedItem.cSubitemdes;
                }

            }
            },
            {
                dataField: 'cAllotman',
                caption: '分配人',
            },
            {
                dataField: 'cAllottime',
                caption: '分配时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },

            {
                dataField: 'cPolitime',
                caption: '报警时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cPolinormtime',
                caption: '报警标准时间/天',
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

        initLoad1()
        function initLoad1() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
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
                    // //console.log.log(result.data);
                    // wuzileixing = result.data;

                    result.data.forEach(item => {
                        wuzileixing.push(item);
                    });
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
            $.ajax({
                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0011Q'), //请求的url地址
                dataType: 'json', //返回格式为json              
                async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
                data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
                type: 'post', //请求方式 get 或者post ,            
                contentType: 'application/json',
                success: function(data) {
                    TP_CGORDERMT_C_COMNAME.splice(0, TP_CGORDERMT_C_COMNAME.length);
                    data.data.cgQ001C001.forEach(item => TP_CGORDERMT_C_COMNAME.push(item));
                    // $('#this-grid-container1').dxDataGrid('instance').refresh()            
                },
                error: function() {
                    DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                    // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                    //e.cancel=true;            
                }
            });
            $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/C0091Q'), //请求的url地址
            dataType: 'json', //返回格式为json              
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
            type: 'post', //请求方式 get 或者post ,            
            contentType: 'application/json',
            success: function(data) {
                TP_CGORDERMT_C_DEPTAPPLY.splice(0, TP_CGORDERMT_C_DEPTAPPLY.length);
                data.data.cgQ001C009.forEach(item => TP_CGORDERMT_C_DEPTAPPLY.push(item));
                // $('#this-grid-container1').dxDataGrid('instance').refresh()            
            },
            error: function() {
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')            
                //e.cancel=true;            
            }
        })
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
                    // //console.log.log(result.data);
                    // shenqingbumen = result.data;

                    result.data.forEach(item => {
                        shenqingbumen.push(item);
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
                    // //console.log.log(result.data);
                    // wanchengzhuangtai  = result.data;

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
        initLoad4()
        function initLoad4() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
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
                    // //console.log.log(result.data);
                    // shifoujixu  = result.data;

                    result.data.forEach(item => {
                        shifoujixu.push(item);
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
                    "cItemid": "SHZT"
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
                    // shenhezhuangtai  = result.data;

                    result.data.forEach(item => {
                        shenhezhuangtai.push(item);
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
                    "cItemid": "TJZT"
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
                    // tijiaozhuangtai  = result.data;

                    result.data.forEach(item => {
                        tijiaozhuangtai.push(item);
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
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "CGBM"
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
                    // caigoubumen  = result.data;

                    result.data.forEach(item => {
                        caigoubumen.push(item);
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
        initLoad8()
        function initLoad8() {
            //cake.Ui.LoadPanel.show()
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
                    // //console.log.log(result.data);
                    // caigouyuan  = result.data;

                    result.data.forEach(item => {
                        caigouyuan.push(item);
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
        initLoad9()
        function initLoad9() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "CGJD"
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
                    // caigoujindu  = result.data;
                    result.data.forEach(item => {
                        caigoujindu.push(item);
                    });
                    //console.log.log(caigoujindu)
                    // 钢种分类
                    // globecStlGroup.splice(0, globecStlGroup.length);

                    //  cake.Ui.LoadPanel.close()
                },
                error: function () {
                    cake.Ui.LoadPanel.close()
                }
            });
        }
        initLoad10()
        function initLoad10() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "FPZT"
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
                    // fenpeizhuangtai  = result.data;

                    result.data.forEach(item => {
                        fenpeizhuangtai.push(item);
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
        initLoad11()
        function initLoad11() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "CGZT"
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
                    // caigouzhuangtai  = result.data;

                    result.data.forEach(item => {
                        caigouzhuangtai.push(item);
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

        initLoad12()
        function initLoad12() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
            msg = {
                ver: "53cc62f6122a436083ec083eed1dc03d",
                session: "42f5c0d7178148938f4fda29460b815a",
                tag: {},
                data: {
                    "cItemid": "GSMC"
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
                    // gongsi = result.data;

                    result.data.forEach(item => {
                        gongsi.push(item);
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
        initLoad13()
        function initLoad13() {
            //cake.Ui.LoadPanel.show()
            // 初始化加载所有下拉框数据
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
                    // //console.log.log(result.data);
                    // bumenmingcheng = result.data;

                    result.data.forEach(item => {
                        bumenmingcheng.push(item);
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
            data: {
    //     		cgC003M1s1:{
				// 	startTime: new Date(),
				// 	endTime: new Date(),
				// 	cConline   : null,
				// 	cConnum  : null,
				// 	cSupplier   : null,
				// 	cState  : null,
				// }	
            }
        };

 	// 	msg.data.cgC003M1s1 = searchdataFormM1.option('formData');
  //       //开始时间
		// let startTime =msg.data.cgC003M1s1.startTime;
		// msg.data.cgC003M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

		// // 结束时间
		// let endTime = msg.data.cgC003M1s1.endTime;
		// msg.data.cgC003M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);

  //       // 审核
  //       let startTime =msg.data.cgC003M1s1.startTime;
  //       msg.data.cgC003M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);

  //       // 结束时间
  //       let endTime = msg.data.cgC003M1s1.endTime;
  //       msg.data.cgC003M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
  //       // let searchtiao = searchdataFormM1.option('formData')

  //       msg.data.cgC003M1s1 = [searchdataFormM1.option('formData')];

        //console.log.log(msg)


        let searchtiao = searchdataFormM1.option('formData')
        msg.data.cgC003M1s1 = [searchdataFormM1.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_C003/M1S11Q'),
            dataType: 'json', //返回格式为json      
            async: true, //请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post', //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function(data) {
            	//console.log.log(data);

                if (data.data == null) {
                    tabledataS1.splice(0, tabledataS1.length);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    DevExpress.ui.notify('没有权限或没有数据！', 'error', 3000);
                    return;
                }
								else
									{
                let select;
                select = data.data.cgC003M1s1
                tabledataS1.splice(0, tabledataS1.length);
                select.forEach(item => tabledataS1.push(item));
                $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                $('#dataGridS1').dxDataGrid('instance').deselectAll()
                $('#dataGridS1').dxDataGrid('instance').refresh()
              }

            },
            error: function(data) {
                DevExpress.ui.notify('数据异常！' , 'error', 3000);
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
        msg.data.cgC003S1s2 = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData();
        cake.Ui.LoadPanel.show()
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_C003/S1S21Q'),
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
                select = data.data.cgC003S1s2
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
    //Script ------------------------------------
})