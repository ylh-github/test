///////////////////////////////////////////////////////////////////////////////////////////
/////////////变量定义！////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
let M1S11addIns;
let tabledataS1 = []; //用于接收表格数据源
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
let wanchengzhuangtai = []
let shifoujixu = []
let shenhezhuangtai = []
let tijiaozhuangtai = []
let caigoubumen = []
let caigouyuan = []
let caigoujindu = []
let fenpeizhuangtai = []
let caigouzhuangtai = []
let wuzileixing = []
let shenqingbumen = []
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
        items: [{
                dataField: 'cGoodsname',
                label: {
                    text: '物资名称'
                },
                editorOptions: {
                    showClearButton: true,
                }
            },
            {
                dataField: 'cManor',
                label: {
                    text: '采购员'
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
        columns: [{
                dataField: 'cGoodsname',
                caption: '物资名称',
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
                dataField: 'cNo',
                caption: '序号',
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
                caption: '申报量',
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
                dataField: 'cPhone',
                caption: '采购员联系方式',
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
                dataField: 'cPlantime',
                caption: '采购进度时间',
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
                dataField: 'cPolinormtime',
                caption: '报警标准时间/天',
            },
            {
                dataField: 'cPolitime',
                caption: '报警时间',
                dataType: "date",
                format: "yyyy-MM-dd"
            },
            {
                dataField: 'cArrtime',
                caption: '要求到货时间',
                dataType: "date",
                format: "yyyy-MM-dd"
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
            data: {

            }
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
                    // wanchengzhuangtai = result.data;

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
                    // shifoujixu = result.data;

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
                    // shenhezhuangtai = result.data;

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
                    // tijiaozhuangtai = result.data;

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
                    // caigoubumen = result.data;

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
                    // caigouyuan = result.data;

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
                    // caigoujindu = result.data;

                    result.data.forEach(item => {
                        caigoujindu.push(item);
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
                    // fenpeizhuangtai = result.data;

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
                    // caigouzhuangtai = result.data;

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
			
            }
        };
		msg.data.cgC005M1s1 = searchdataFormM1.option('formData');
       //开始时间
		let startTime =msg.data.cgC005M1s1.startTime;
		msg.data.cgC005M1s1.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		// 结束时间
		let endTime = msg.data.cgC005M1s1.endTime;
		msg.data.cgC005M1s1.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        msg.data.cgC005M1s1 = [searchdataFormM1.option('formData')];
        //console.log.log(msg)

        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_C005/M1S11Q'),
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
                select = data.data.cgC005M1s1
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
    //Script ------------------------------------
})