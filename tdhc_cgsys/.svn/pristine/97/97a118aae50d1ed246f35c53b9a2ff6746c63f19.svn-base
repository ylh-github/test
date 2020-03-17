$(function () {

    let searchExamplenew;
    let formDatanew;
    let tabledata = []; //表格
    let tabledata1 = [];//表格
    let tabledata2 = [];//表格
    let tabledata3 = [];//表格
    let tabledata4 = [];//表格 
    let tabledata5 = [];//表格
    let tabledata6 = [];//表格

    let All = [] //所有属性转换
    let bigIntCode;


    let requestData = {
        // 查询获取的数据
        getSteel: {
            // 版本号
            ver: "9DF9482834324200A6747F6300E121ED",
            // 会话标识，用于标识会话顺序
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            // 数据内容
            data: {

            }
        },
        //点击一行
        getSteel2: {
            // 版本号
            ver: "9DF9482834324200A6747F6300E121ED",
            // 会话标识，用于标识会话顺序
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            // 数据内容
            data: {

            }
        },
        getSteel3: {
            // 版本号
            ver: "9DF9482834324200A6747F6300E121ED",
            // 会话标识，用于标识会话顺序
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            // 数据内容
            data: {

            }
        },
        getSteel4: {
            // 版本号
            ver: "9DF9482834324200A6747F6300E121ED",
            // 会话标识，用于标识会话顺序
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            // 数据内容
            data: {

            }
        },
        getSteel5: {
            // 版本号
            ver: "9DF9482834324200A6747F6300E121ED",
            // 会话标识，用于标识会话顺序
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            // 数据内容
            data: {

            }
        },
        getSteel6: {
            // 版本号
            ver: "9DF9482834324200A6747F6300E121ED",
            // 会话标识，用于标识会话顺序
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            // 数据内容
            data: {

            }
        },
        getSteel7: {
            // 版本号
            ver: "9DF9482834324200A6747F6300E121ED",
            // 会话标识，用于标识会话顺序
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            // 数据内容
            data: {

            }
        },
        // 修改
        updateSteel: {
            ver: "9DF9482834324200A6747F6300E121ED",
            session: "5CDC4E39C0B94FA0891EF9DB95039935",
            tag: {},
            data: {}
        },

    }

    //查询条件
    searchExamplenew = $('#searchForm').dxForm({
        formData: formDatanew,
        itemType: "group",
        colCount: 15,
        items: [
            {
                colSpan: 3,
                dataField: "cMatCodeTbMatterGroup",
                label: {
                    text: "物料组编码"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    placeholder: "",
                    searchEnabled: true,
                    showClearButton: true
                },
            },
            {
                colSpan: 3,
                dataField: "cParentIdTbMatterGroup",
                label: {
                    text: "上级物料组编码"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    placeholder: "",
                    searchEnabled: true,
                    showClearButton: true
                },
            },
            {
                colSpan: 3,
                dataField: "cCnameTbMatterGroup",
                label: {
                    text: "中文名称"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    placeholder: "",
                    searchEnabled: true,
                    showClearButton: true
                },
            },
            {
                colSpan: 3,
                dataField: "cEnaemTbMatterGroup",
                label: {
                    text: "英文名称"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    placeholder: "",
                    searchEnabled: true,
                    showClearButton: true
                },
            },
        ]
    }).dxForm("instance")
    //查询按钮
    $('#button').dxButton({
        text: "查询",
        onClick: function () {
            serDel();
            /*serDel1();
            serDel2();
            serDel3();
            serDel4();
            serDel5();*/
            serDel6();
        }
    })

    // 查询函数
    function serDel() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                // cGroupCode: cGroupCode,
                // cTypeCode: cTypeCode
            }
        };
        // msg.data = searchExamplenew.option("formData")
        // msg.data.cGroupCode = cGroupCode;
        // msg.data.cTypeCode = cTypeCode;
        // msg.data.cBeginTime = new Date(msg.data.cBeginTime.getFullYear(), msg.data.cBeginTime.getMonth(), msg.data.cBeginTime.getDate(), 0, 0, 0, 0);
        // msg.data.cEndTime = new Date(msg.data.cEndTime.getFullYear(), msg.data.cEndTime.getMonth(), msg.data.cEndTime.getDate(), 23, 59, 59, 999);
        // console.log(msg)
        let searchtiao = searchExamplenew.option('formData')
        msg.data.iwipMgroupM1s1 = [searchExamplenew.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/selectMsgOne'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                tabledata.splice(0, tabledata.length);
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata.push(item);
                });
                dataGridINs.refresh();
            }
        })
    }
    //查询2
    function serDel1() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                // cGroupCode: cGroupCode,
                // cTypeCode: cTypeCode
            }
        };
        requestData.getSteel2.data = $('#dataGrid').dxDataGrid("instance").getSelectedRowsData()[0]
        // msg.data = searchExamplenew.option("formData")
        // msg.data.cGroupCode = cGroupCode;
        // msg.data.cTypeCode = cTypeCode;
        // msg.data.cBeginTime = new Date(msg.data.cBeginTime.getFullYear(), msg.data.cBeginTime.getMonth(), msg.data.cBeginTime.getDate(), 0, 0, 0, 0);
        // msg.data.cEndTime = new Date(msg.data.cEndTime.getFullYear(), msg.data.cEndTime.getMonth(), msg.data.cEndTime.getDate(), 23, 59, 59, 999);
        // console.log(msg)
        msg.data.iwipMgroupM1s1 = $('#dataGrid').dxDataGrid('instance').getSelectedRowsData();
        if(msg.data.iwipMgroupM1s1.length == 0){
        	let searchtiao = searchExamplenew.option('formData')
        	msg.data.iwipMgroupM1s1 = [searchExamplenew.option('formData')];
        }
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/selectMsgTwo"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                tabledata1.splice(0, tabledata1.length);
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata1.push(item);
                });
                dataGridINs1.refresh();
            }
        })
    }
    //查询3
    function serDel2() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                // cGroupCode: cGroupCode,
                // cTypeCode: cTypeCode
            }
        };
        requestData.getSteel3.data = $('#dataGrid1').dxDataGrid("instance").getSelectedRowsData()[0]
        // msg.data = searchExamplenew.option("formData")
        // msg.data.cGroupCode = cGroupCode;
        // msg.data.cTypeCode = cTypeCode;
        // msg.data.cBeginTime = new Date(msg.data.cBeginTime.getFullYear(), msg.data.cBeginTime.getMonth(), msg.data.cBeginTime.getDate(), 0, 0, 0, 0);
        // msg.data.cEndTime = new Date(msg.data.cEndTime.getFullYear(), msg.data.cEndTime.getMonth(), msg.data.cEndTime.getDate(), 23, 59, 59, 999);
        // console.log(msg)
        msg.data.iwipMgroupM1s1 = $('#dataGrid1').dxDataGrid('instance').getSelectedRowsData();
        if(msg.data.iwipMgroupM1s1.length == 0){
        	let searchtiao = searchExamplenew.option('formData')
        	msg.data.iwipMgroupM1s1 = [searchExamplenew.option('formData')];
        }
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/selectMsgThree"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                tabledata2.splice(0, tabledata2.length);
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata2.push(item);
                });
                dataGridINs2.refresh();
            }
        })
    }
    //查询4
    function serDel3() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                // cGroupCode: cGroupCode,
                // cTypeCode: cTypeCode
            }
        };
        requestData.getSteel4.data = $('#dataGrid2').dxDataGrid("instance").getSelectedRowsData()[0]
        // msg.data = searchExamplenew.option("formData")
        // msg.data.cGroupCode = cGroupCode;
        // msg.data.cTypeCode = cTypeCode;
        // msg.data.cBeginTime = new Date(msg.data.cBeginTime.getFullYear(), msg.data.cBeginTime.getMonth(), msg.data.cBeginTime.getDate(), 0, 0, 0, 0);
        // msg.data.cEndTime = new Date(msg.data.cEndTime.getFullYear(), msg.data.cEndTime.getMonth(), msg.data.cEndTime.getDate(), 23, 59, 59, 999);
        // console.log(msg)
        msg.data.iwipMgroupM1s1 = $('#dataGrid2').dxDataGrid('instance').getSelectedRowsData();
        if(msg.data.iwipMgroupM1s1.length == 0){
        	let searchtiao = searchExamplenew.option('formData')
        	msg.data.iwipMgroupM1s1 = [searchExamplenew.option('formData')];
        }
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/selectMsgFour"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                tabledata3.splice(0, tabledata3.length);
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata3.push(item);
                });
                dataGridINs3.refresh();
            }
        })
    }

    //查询5
    function serDel4() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                // cGroupCode: cGroupCode,
                // cTypeCode: cTypeCode
            }
        };
        requestData.getSteel5.data = $('#dataGrid3').dxDataGrid("instance").getSelectedRowsData()[0]
        // msg.data = searchExamplenew.option("formData")
        // msg.data.cGroupCode = cGroupCode;
        // msg.data.cTypeCode = cTypeCode;
        // msg.data.cBeginTime = new Date(msg.data.cBeginTime.getFullYear(), msg.data.cBeginTime.getMonth(), msg.data.cBeginTime.getDate(), 0, 0, 0, 0);
        // msg.data.cEndTime = new Date(msg.data.cEndTime.getFullYear(), msg.data.cEndTime.getMonth(), msg.data.cEndTime.getDate(), 23, 59, 59, 999);
        // console.log(msg)
        msg.data.iwipMgroupM1s1 = $('#dataGrid3').dxDataGrid('instance').getSelectedRowsData();
        if(msg.data.iwipMgroupM1s1.length == 0){
        	let searchtiao = searchExamplenew.option('formData')
        	msg.data.iwipMgroupM1s1 = [searchExamplenew.option('formData')];
        }
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_AGROUP/selectAgroupOne"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                tabledata4.splice(0, tabledata4.length);
                result.data.iwipAgroupM1s1.forEach(item => {
                    tabledata4.push(item);
                });
                dataGridINs4.refresh();
            }
        })
    }
    //查询6
    function serDel5() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                // cGroupCode: cGroupCode,
                // cTypeCode: cTypeCode
            }
        };
        requestData.getSteel6.data = $('#dataGrid4').dxDataGrid("instance").getSelectedRowsData()[0]
        // msg.data = searchExamplenew.option("formData")
        // msg.data.cGroupCode = cGroupCode;
        // msg.data.cTypeCode = cTypeCode;
        // msg.data.cBeginTime = new Date(msg.data.cBeginTime.getFullYear(), msg.data.cBeginTime.getMonth(), msg.data.cBeginTime.getDate(), 0, 0, 0, 0);
        // msg.data.cEndTime = new Date(msg.data.cEndTime.getFullYear(), msg.data.cEndTime.getMonth(), msg.data.cEndTime.getDate(), 23, 59, 59, 999);
        // console.log(msg)
        msg.data.iwipAgroupM1s1 = $('#dataGrid4').dxDataGrid('instance').getSelectedRowsData();
        if(msg.data.iwipAgroupM1s1.length == 0){
        	let searchtiao = searchExamplenew.option('formData')
        	msg.data.iwipAgroupM1s1 = [searchExamplenew.option('formData')];
        }

        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_AGROUP/selectAgroupTwo"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                tabledata5.splice(0, tabledata5.length);
                result.data.iwipAgroupM1s1.forEach(item => {
                    tabledata5.push(item);
                });
                dataGridINs5.refresh();
            }
        })
    }
    //查询7
    function serDel6() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                // cGroupCode: cGroupCode,
                // cTypeCode: cTypeCode
            }
        };
        
        let searchtiao = searchExamplenew.option('formData')
        msg.data.iwipMgroupM1s1 = [searchExamplenew.option('formData')];
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/M1S11Q'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: 'application/json',
            success: function (result) {
                if (result.data == null) {
                    tabledata6.splice(0, tabledata6.length);
                    $('#dataGrid6').dxTreeList('instance').option('dataSource', tabledata6)
                    return
                }

                let select;
                select = result.data.iwipMgroupM1s1;
                tabledata6.splice(0, tabledata6.length);
                select.forEach(item => tabledata6.push(item));
                $('#dataGrid6').dxTreeList('instance').deselectAll()
                $('#dataGrid6').dxTreeList('instance').refresh()
                DevExpress.ui.notify(result.msg, 'success', 1500);
            
            


                // tabledata6.splice(0, tabledata6.length);
                // result.data.forEach(item => {
                //     tabledata6.push(item);
                // });
                // dataGridINs6.refresh();
            },
            // error: function () {
            //     DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
            // }
        })
    }

    // 添加函数1
    function addfun() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {

            }
        };
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/addMgroupMsg'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata.unshift(item);
                });
                dataGridINs.refresh();
            }
        })
    }
     // 添加函数2
    function addfun1() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {

            }
        };
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/addMgroupMsg'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                console.log(result);
                console.log(result.data.iwipMgroupM1s1);
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata1.unshift(item);
                });
                $("#dataGrid").dxDataGrid("instance").refresh();
            }
        })
    }
    // 添加函数3
    function addfun2() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {

            }
        };
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/addMgroupMsg'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata2.unshift(item);
                });
                dataGridINs2.refresh();
            }
        })
    }
    // 添加函数4
    function addfun3() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {

            }
        };
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/addMgroupMsg'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata3.unshift(item);
                });
                dataGridINs3.refresh();
            }
        })
    }
       // 添加函数5
    function addfun4() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {

            }
        };
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/addMgroupMsg'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata4.unshift(item);
                });
                dataGridINs4.refresh();
            }
        })
    }
       // 添加函数6
    function addfun5() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {

            }
        };
        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/addMgroupMsg'),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                result.data.iwipMgroupM1s1.forEach(item => {
                    tabledata5.unshift(item);
                });
                dataGridINs5.refresh();
            }
        })
    }
    // 保存函数
    function savegun() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        // for (i = 0; i < msg.data.componentInputList.length; i++) {
        //     msg.data.componentInputList[i].cGroupCode = cGroupCode;
        //     msg.data.componentInputList[i].cTypeCode = cTypeCode;
        // }
        msg.data.iwipMgroupM1s1 = $('#dataGrid').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/insertBigMsg"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    serDel()
                   /* serDel1();
                    serDel2()
                    serDel3();
                    serDel4();
                    serDel5();*/
                    serDel6();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
    //保存2
    function savegun1() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        // for (i = 0; i < msg.data.componentInputList.length; i++) {
        //     msg.data.componentInputList[i].cGroupCode = cGroupCode;
        //     msg.data.componentInputList[i].cTypeCode = cTypeCode;
        // }
        msg.data.iwipMgroupM1s1 = $('#dataGrid1').dxDataGrid('instance').getSelectedRowsData();
        msg.data.iwipMgroupParentMsg = $('#dataGrid').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/insertBigMsg"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                   /* serDel()*/
                    serDel1();
                    /*serDel2()
                    serDel3();
                    serDel4();
                    serDel5();*/
                    serDel6();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
    //保存函数3
     function savegun2() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        // for (i = 0; i < msg.data.componentInputList.length; i++) {
        //     msg.data.componentInputList[i].cGroupCode = cGroupCode;
        //     msg.data.componentInputList[i].cTypeCode = cTypeCode;
        // }
        msg.data.iwipMgroupM1s1 = $('#dataGrid2').dxDataGrid('instance').getSelectedRowsData();
        msg.data.iwipMgroupParentMsg = $('#dataGrid1').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/insertBigMsg"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                   /* serDel()
                     serDel()  */  
                    serDel2();
                   /* serDel3();
                    serDel4();
                    serDel5();*/
                    serDel6();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
     //保存函数4
     function savegun3() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        // for (i = 0; i < msg.data.componentInputList.length; i++) {
        //     msg.data.componentInputList[i].cGroupCode = cGroupCode;
        //     msg.data.componentInputList[i].cTypeCode = cTypeCode;
        // }
        msg.data.iwipMgroupM1s1 = $('#dataGrid3').dxDataGrid('instance').getSelectedRowsData();
        msg.data.iwipMgroupParentMsg = $('#dataGrid2').dxDataGrid('instance').getSelectedRowsData();
        var intMsg = 0;
        for(var i = 0;i < msg.data.iwipMgroupM1s1.length; i++){
        	if(msg.data.iwipMgroupM1s1[i].reserve7TbMatterGroup == null){
				intMsg = intMsg + 1;
        	}	
        }
        if(intMsg == 0){
        	$.ajax({
	            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/insertBigMsg"),
	            dataType: "json",
	            async: true,
	            data: JSON.stringify(msg),
	            type: "post",
	            contentType: "application/json",
	            success: function (result) {
	                if (result.errcode == 0) {
	                    DevExpress.ui.notify(result.msg, "success", 1500);
	                    /*serDel()
	                    serDel1()
	                    serDel2();*/
	                    serDel3();
	                    /*serDel4();
	                    serDel5()；*/
	                    serDel6();
	                } else {
	                    DevExpress.ui.notify(result.msg, "warning", 1500);
	                }
	           	}
       		 })
        }else{
        	 DevExpress.ui.notify('请输入计量单位', "warning", 1500);
        }
    }
      //保存函数5
     function savegun4() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        // for (i = 0; i < msg.data.componentInputList.length; i++) {
        //     msg.data.componentInputList[i].cGroupCode = cGroupCode;
        //     msg.data.componentInputList[i].cTypeCode = cTypeCode;
        // }
        msg.data.iwipAgroupM1s1 = $('#dataGrid4').dxDataGrid('instance').getSelectedRowsData();
        msg.data.iwipMgroupParentMsg = $('#dataGrid3').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_AGROUP/insertAndUpDate"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    /*serDel()
                    serDel1()
                    serDel2();
                    serDel3();*/
                    serDel4();
                    /*serDel5()；*/
                    serDel6();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
     //保存函数6
     function savegun5() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        // for (i = 0; i < msg.data.componentInputList.length; i++) {
        //     msg.data.componentInputList[i].cGroupCode = cGroupCode;
        //     msg.data.componentInputList[i].cTypeCode = cTypeCode;
        // }
        msg.data.iwipAgroupM1s1 = $('#dataGrid5').dxDataGrid('instance').getSelectedRowsData();
        msg.data.iwipAgroupParentMsg = $('#dataGrid4').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_AGROUP/changeValue"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    /*serDel()
                    serDel1()
                    serDel2();
                    serDel3();
                    serDel4();*/
                    serDel5();
                    serDel6();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
    // 删除函数大类
    function deletefun() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        msg.data.iwipMgroupM1s1 = $('#dataGrid').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/M1S13MSG"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    serDel();
                    serDel6();
                    tabledata1.splice(0, tabledata1.length);
					$("#dataGrid1").dxDataGrid("instance").refresh();
					tabledata2.splice(0, tabledata2.length);
					$("#dataGrid2").dxDataGrid("instance").refresh();
					tabledata3.splice(0, tabledata3.length);
					$("#dataGrid3").dxDataGrid("instance").refresh();
					tabledata4.splice(0, tabledata4.length);
					$("#dataGrid4").dxDataGrid("instance").refresh();
					tabledata5.splice(0, tabledata5.length);
					$("#dataGrid5").dxDataGrid("instance").refresh();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
    //删除函数中类
    function deletefun1() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        msg.data.iwipMgroupM1s1 = $('#dataGrid1').dxDataGrid('instance').getSelectedRowsData();                                
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/M1S13MSG"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    serDel1()
                    serDel6();
                    tabledata2.splice(0, tabledata2.length);
					$("#dataGrid2").dxDataGrid("instance").refresh();
					tabledata3.splice(0, tabledata3.length);
					$("#dataGrid3").dxDataGrid("instance").refresh();
					tabledata4.splice(0, tabledata4.length);
					$("#dataGrid4").dxDataGrid("instance").refresh();
					tabledata5.splice(0, tabledata5.length);
					$("#dataGrid5").dxDataGrid("instance").refresh();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
    //删除函数小类
    function deletefun2() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        msg.data.iwipMgroupM1s1 = $('#dataGrid2').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/M1S13MSG"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    serDel2();
                    serDel6();
                    tabledata3.splice(0, tabledata3.length);
					$("#dataGrid3").dxDataGrid("instance").refresh();
					tabledata4.splice(0, tabledata4.length);
					$("#dataGrid4").dxDataGrid("instance").refresh();
					tabledata5.splice(0, tabledata5.length);
					$("#dataGrid5").dxDataGrid("instance").refresh();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
    //删除函数物料名称
    function deletefun3() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        msg.data.iwipMgroupM1s1 = $('#dataGrid3').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_MGROUP/M1S13MSG"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    serDel3();
                    serDel6();
                    tabledata4.splice(0, tabledata4.length);
					$("#dataGrid4").dxDataGrid("instance").refresh();
					tabledata5.splice(0, tabledata5.length);
					$("#dataGrid5").dxDataGrid("instance").refresh();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }
   
    //删除函数属性
    function deletefun4() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        msg.data.iwipAgroupM1s1 = $('#dataGrid4').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_AGROUP/M1S11D"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    serDel4();
                    serDel6();
                    tabledata5.splice(0, tabledata5.length);
					$("#dataGrid5").dxDataGrid("instance").refresh();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }

    //删除函数属性
    function deletefun5() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {}
        };
        // msg.data.componentInputList = dataGridINs.getSelectedRowsData()
        msg.data.iwipAgroupM1s1 = $('#dataGrid5').dxDataGrid('instance').getSelectedRowsData();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/IWIP_AGROUP/M1S11D"),
            dataType: "json",
            async: true,
            data: JSON.stringify(msg),
            type: "post",
            contentType: "application/json",
            success: function (result) {
                if (result.errcode == 0) {
                    DevExpress.ui.notify(result.msg, "success", 1500);
                    serDel5();
                    serDel6();
                } else {
                    DevExpress.ui.notify(result.msg, "warning", 1500);
                }
            }
        })
    }

    //大类表格
    dataGridINs = $('#dataGrid').dxDataGrid({
        
        "columnAutoWidth": true,
        "dataSource": tabledata,
        "editing": {
            /*"allowAdding": true,*/
            //"allowDeleting": true,
            "allowUpdating": true,
            "mode": "cell"
        },
        "focusedRowEnabled": true,
        "focusStateEnabled": true,
        "keyExpr": "cIdTbMatterGroup",
        "onFocusedRowChanged": function (e) {
        	msg.data.iwipMgroupM1s1 = [e.row.data];
        	console.log(msg.data.iwipMgroupM1s1)
        	if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup.length == undefined){
        		bigIntCode = msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup;
        		tabledata1.splice(0, tabledata1.length);
        		$("#dataGrid1").dxDataGrid("instance").refresh();
        		tabledata2.splice(0, tabledata2.length);
        		$("#dataGrid2").dxDataGrid("instance").refresh();
        		tabledata3.splice(0, tabledata3.length);
        		$("#dataGrid3").dxDataGrid("instance").refresh();
        		tabledata4.splice(0, tabledata4.length);
        		$("#dataGrid4").dxDataGrid("instance").refresh();
        		tabledata5.splice(0, tabledata5.length);
        		$("#dataGrid5").dxDataGrid("instance").refresh();
        	}else{
        		if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        		if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup.length == 20 && msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        			bigIntCode = msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup;
	        			$.ajax({
			                // url: requestUrls.getSteel,
			                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/selectLinkage'),
			                dataType: "json", //返回格式为json
			                async: true, //请求是否异步，默认为异步，这也是ajax重要特性
			                data: JSON.stringify(msg), //参数值  requestData.getSteel 上面有定义
			                type: "post", //请求方式 get 或者post ,
			                contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
			                success: function (result) {
			                    // 清空数据
			                    if(result.data.iwipMgroupM1s1.length == 0){
			                    	tabledata1.splice(0, tabledata1.length);
					        		$("#dataGrid1").dxDataGrid("instance").refresh();
					        		tabledata2.splice(0, tabledata2.length);
					        		$("#dataGrid2").dxDataGrid("instance").refresh();
					        		tabledata3.splice(0, tabledata3.length);
					        		$("#dataGrid3").dxDataGrid("instance").refresh();
					        		tabledata4.splice(0, tabledata4.length);
					        		$("#dataGrid4").dxDataGrid("instance").refresh();
					        		tabledata5.splice(0, tabledata5.length);
					        		$("#dataGrid5").dxDataGrid("instance").refresh();
			                    }
			                    tabledata1.splice(0, tabledata1.length);

			                    // 将返回的数据推入到清空的数组中
			                    result.data.iwipMgroupM1s1.forEach(item => {
			                        tabledata1.push(item);
			                    });


			                    // 将推入进的数据进行刷新
			                    let newgrid1 = $("#dataGrid1").dxDataGrid("instance");
			                    newgrid1.refresh();

			                    // 关闭加载框
			                    //closeLoadPanel();


			                },

			                //error: function (y) {
			                    //closeLoadPanel()
			                //}

			            })
		        	}
	        	}
        	}  
        },   
        "rowAlternationEnabled": true,
        "showBorders": true,
        "showRowLines": true,
        "width": "100%",
        "height": "100%",
        "paging": {
            "enabled": false
        },
        "selection": {
            mode: 'multiple'
        },
        "columns": [
         	{
              dataField: 'cIdTbMatterGroup',
              caption: '物料组维护ID',
              visible: false,
            },
            {
                dataField: "cMatCodeTbMatterGroup",
                caption: "编码"
            },
            /* {
                dataField: 'cParentIdTbMatterGroup',
                caption: '上级物料组编码',
            },*/
            {
                dataField: "cCnameTbMatterGroup",
                caption: "中文名称"
            },
            {
                dataField: "reserve9TbMatterGroup",
                caption: "印尼文"
            },
            {
                dataField: "cEnaemTbMatterGroup",
                caption: "英文名称"
            }
        ],
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.push(
            	 {
					location: "before",
					locateInMenu: 'auto',
					widget: "dxButton",
					options: {
						height: "auto",
						width: "auto",
						icon: 'plus',
						text: '',
						onClick: function (e) {
							// $("#addmoni2").dxDataGrid('instance').addRow();


							let itemo = new Array();

							itemo = [{
								cIdTbMatterGroup:tabledata.length+1
							}];

							itemo.forEach(item => {
								tabledata.unshift(item);
							});


							$('#dataGrid').dxDataGrid('instance').option('dataSource', tabledata);

							$('#dataGrid').dxDataGrid('instance').refresh();

								//console.log($("#addmoni2").dxDataGrid('instance').option('dataSource'))

						}
					}
				},
		            {
	                    location: "before",
	                    // locateInMenu: 'auto',
	                    widget: "dxButton",
	                    options: {
	                        icon: 'save',
	                        text: '',
	                        onClick: function () {
	                            dataGridINs.saveEditData()
	                            let aa = dataGridINs.getSelectedRowsData()
	                            if (aa.length < 1) {
	                                DevExpress.ui.notify("请选择要保存的数据", "warning", 1500);
	                            } else {
	                                savegun()
	                            }
	                        }
	                    }
	                },
	                {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: "remove",
                        type: "danger",
                        text: "",
                        onClick: function (e) {
                            let aa = dataGridINs.getSelectedRowsData()
                            if (aa.length < 1) {
                                DevExpress.ui.notify("请至少选择一条数据", "warning", 1500);
                            } else {
                                DevExpress.ui.dialog.confirm("确定要删除这些项吗？", "删除确认").done(dialogResult => {
                                    if (dialogResult) {
                                        deletefun()
                                    }
                                })
                            }
                        }
                    },
                }
	           
            );
        }
    }).dxDataGrid("instance");

    //中类表格
    dataGridINs1 = $('#dataGrid1').dxDataGrid({
        "columnAutoWidth": true,
        "dataSource": tabledata1,
        "editing": {
            /*"allowAdding": true,*/
            //"allowDeleting": true,
            "allowUpdating": true,
            "mode": "cell"
        },
        "focusedRowEnabled": true,
        "focusStateEnabled": true,
        "keyExpr": "cIdTbMatterGroup",
        "onFocusedRowChanged": function (e) {
        	msg.data.iwipMgroupM1s1 = [e.row.data];
        	if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup.length == undefined){
        		bigIntCode = msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup;
        		tabledata2.splice(0, tabledata2.length);
        		$("#dataGrid2").dxDataGrid("instance").refresh();
        		tabledata3.splice(0, tabledata3.length);
        		$("#dataGrid3").dxDataGrid("instance").refresh();
        		tabledata4.splice(0, tabledata4.length);
        		$("#dataGrid4").dxDataGrid("instance").refresh();
        		tabledata5.splice(0, tabledata5.length);
        		$("#dataGrid5").dxDataGrid("instance").refresh();
        	}else{
        		if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        		if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup.length == 20 && msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        			bigIntCode = msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup;
			            $.ajax({
			                // url: requestUrls.getSteel,
			                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/selectLinkage'),
			                dataType: "json", //返回格式为json
			                async: true, //请求是否异步，默认为异步，这也是ajax重要特性
			                data: JSON.stringify(msg), //参数值  requestData.getSteel 上面有定义
			                type: "post", //请求方式 get 或者post ,
			                contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
			                success: function (result) {

			                	 if(result.data.iwipMgroupM1s1.length == 0){
					        		tabledata2.splice(0, tabledata2.length);
					        		$("#dataGrid2").dxDataGrid("instance").refresh();
					        		tabledata3.splice(0, tabledata3.length);
					        		$("#dataGrid3").dxDataGrid("instance").refresh();
					        		tabledata4.splice(0, tabledata4.length);
					        		$("#dataGrid4").dxDataGrid("instance").refresh();
					        		tabledata5.splice(0, tabledata5.length);
					        		$("#dataGrid5").dxDataGrid("instance").refresh();
			                    }
			                    // 清空数据
			                    tabledata2.splice(0, tabledata2.length);

			                    // 将返回的数据推入到清空的数组中
			                    result.data.iwipMgroupM1s1.forEach(item => {
			                        tabledata2.push(item);
			                    });


			                    // 将推入进的数据进行刷新
			                    let newgrid2 = $("#dataGrid2").dxDataGrid("instance");
			                    newgrid2.refresh();

			                    // 关闭加载框
			                    /*closeLoadPanel();*/


			                },

			                /*error: function (y) {
			                    closeLoadPanel()
			                }*/

			            })
		        	}
	        	}
        	}  
        },   
        "rowAlternationEnabled": true,
        "showBorders": true,
        "showRowLines": true,
        "width": "100%",
        "height": "100%",
        "paging": {
            "enabled": false
        },
        "selection": {
            mode: 'multiple'
        },
        "columns": [
         	{
              dataField: 'cIdTbMatterGroup',
              caption: '物料组维护ID',
              visible: false,
            },
            {
                dataField: "cMatCodeTbMatterGroup",
                caption: "编码"
            },
          /* {
                dataField: 'cParentIdTbMatterGroup',
                caption: '上级物料组编码',
            },*/
            {
                dataField: "cCnameTbMatterGroup",
                caption: "中文名称"
            },
            {
                dataField: "reserve9TbMatterGroup",
                caption: "印尼文"
            },
            {
                dataField: "cEnaemTbMatterGroup",
                caption: "英文名称"
            }
        ],
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.push(
            	{
						location: "before",
						locateInMenu: 'auto',
						widget: "dxButton",
						options: {
							height: "auto",
							width: "auto",
							icon: 'plus',
							text: '',
							onClick: function (e) {
								// $("#addmoni2").dxDataGrid('instance').addRow();


								let itemo = new Array();

								itemo = [{
									cIdTbMatterGroup:tabledata1.length+1
								}];

								itemo.forEach(item => {
									tabledata1.unshift(item);
								});


								$('#dataGrid1').dxDataGrid('instance').option('dataSource', tabledata1);

								$('#dataGrid1').dxDataGrid('instance').refresh();

								//console.log($("#addmoni2").dxDataGrid('instance').option('dataSource'))

						}
					}
				},
		        {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: 'save',
                        text: '',
                        onClick: function () {
                            dataGridINs1.saveEditData()
                            let ab = dataGridINs1.getSelectedRowsData()
                            let aa = dataGridINs.getSelectedRowsData()
                            if(aa.length == 1){
                            	if (ab.length < 1) {
	                                DevExpress.ui.notify("请选择要保存的数据", "warning", 1500);
	                            } else {
	                                savegun1()
	                            }
                            }else{
                            	DevExpress.ui.notify("请选择一条大类数据", "error", 1500);
                            }
                            
                        }
                    }
                },
                {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: "remove",
                        type: "danger",
                        text: "",
                        onClick: function (e) {
                            let aa = dataGridINs1.getSelectedRowsData()
                            if (aa.length < 1) {
                                DevExpress.ui.notify("请至少选择一条数据", "warning", 1500);
                            } else {
                                DevExpress.ui.dialog.confirm("确定要删除这些项吗？", "删除确认").done(dialogResult => {
                                    if (dialogResult) {
                                        deletefun1()
                                    }
                                })
                            }
                        }
                    },
                }
	                
            );
        }
    }).dxDataGrid("instance")

    //小类表格
    dataGridINs2 = $('#dataGrid2').dxDataGrid({
        "columnAutoWidth": true,
        "dataSource": tabledata2,
        "editing": {
            /*"allowAdding": true,*/
            //"allowDeleting": true,
            "allowUpdating": true,
            "mode": "cell"
        },
        "focusedRowEnabled": true,
        "focusStateEnabled": true,
        "keyExpr": "cIdTbMatterGroup",
        "onFocusedRowChanged": function (e) {
        	msg.data.iwipMgroupM1s1 = [e.row.data];
        	if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup.length == undefined){
        		bigIntCode = msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup;
        		tabledata3.splice(0, tabledata3.length);
        		$("#dataGrid3").dxDataGrid("instance").refresh();
        		tabledata4.splice(0, tabledata4.length);
        		$("#dataGrid4").dxDataGrid("instance").refresh();
        		tabledata5.splice(0, tabledata5.length);
        		$("#dataGrid5").dxDataGrid("instance").refresh();
        	}else{
        		if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        		if(msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup.length == 20 && msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        			bigIntCode = msg.data.iwipMgroupM1s1[0].cIdTbMatterGroup;
			            $.ajax({
			                // url: requestUrls.getSteel,
			                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_MGROUP/selectLinkage'),
			                dataType: "json", //返回格式为json
			                async: true, //请求是否异步，默认为异步，这也是ajax重要特性
			                data: JSON.stringify(msg), //参数值  requestData.getSteel 上面有定义
			                type: "post", //请求方式 get 或者post ,
			                contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
			                success: function (result) {
								if(result.data.iwipMgroupM1s1.length == 0){
									tabledata3.splice(0, tabledata3.length);
									$("#dataGrid3").dxDataGrid("instance").refresh();
									tabledata4.splice(0, tabledata4.length);
									$("#dataGrid4").dxDataGrid("instance").refresh();
									tabledata5.splice(0, tabledata5.length);
									$("#dataGrid5").dxDataGrid("instance").refresh();
							    }                	

				                // 清空数据
				                tabledata3.splice(0, tabledata3.length);

				                // 将返回的数据推入到清空的数组中
				                result.data.iwipMgroupM1s1.forEach(item => {
				                    tabledata3.push(item);
				                });


				                // 将推入进的数据进行刷新
				                let newgrid3 = $("#dataGrid3").dxDataGrid("instance");
				                newgrid3.refresh();

			                    // 关闭加载框
			                    /*closeLoadPanel();*/


			                },

			               /* error: function (y) {
			                    closeLoadPanel()
			                }*/

			            })
		        	}
	        	}
        	}
        },   
        "rowAlternationEnabled": true,
        "showBorders": true,
        "showRowLines": true,
        "width": "100%",
        "height": "100%",
        "paging": {
            "enabled": false
        },
        "selection": {
            mode: 'multiple'
        },
        "columns": [
         	{
              dataField: 'cIdTbMatterGroup',
              caption: '物料组维护ID',
              visible: false,
            },
            {
                dataField: "cMatCodeTbMatterGroup",
                caption: "编码"
            },
            /*{
                dataField: 'cParentIdTbMatterGroup',
                caption: '上级物料组编码',
            },*/
            {
                dataField: "cCnameTbMatterGroup",
                caption: "中文名称"
            },
            {
                dataField: "reserve9TbMatterGroup",
                caption: "印尼文"
            },
            {
                dataField: "cEnaemTbMatterGroup",
                caption: "英文名称"
            }
        ],
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.push(
            	{
						location: "before",
						locateInMenu: 'auto',
						widget: "dxButton",
						options: {
							height: "auto",
							width: "auto",
							icon: 'plus',
							text: '',
							onClick: function (e) {
								// $("#addmoni2").dxDataGrid('instance').addRow();


								let itemo = new Array();

								itemo = [{
									cIdTbMatterGroup:tabledata2.length+1
								}];

								itemo.forEach(item => {
									tabledata2.unshift(item);
								});


								$('#dataGrid2').dxDataGrid('instance').option('dataSource', tabledata2);

								$('#dataGrid2').dxDataGrid('instance').refresh();

								//console.log($("#addmoni2").dxDataGrid('instance').option('dataSource'))

						}
					}
				},
		        {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: 'save',
                        text: '',
                        onClick: function () {
                            dataGridINs2.saveEditData()
                            let ac = dataGridINs2.getSelectedRowsData()
                            let ab = dataGridINs1.getSelectedRowsData()
                            if(ab.length == 1){
                            	if (ac.length < 1) {
	                                DevExpress.ui.notify("请选择要保存的数据", "warning", 1500);
	                            } else {
	                                savegun2()
	                            }
                            }else{
                            	DevExpress.ui.notify("请选择一条中类数据", "error", 1500);
                            }
                            
                        }
                    }
                },
                {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: "remove",
                        type: "danger",
                        text: "",
                        onClick: function (e) {
                            let ac = dataGridINs2.getSelectedRowsData()
                            if (ac.length < 1) {
                                DevExpress.ui.notify("请至少选择一条数据", "warning", 1500);
                            } else {
                                DevExpress.ui.dialog.confirm("确定要删除这些项吗？", "删除确认").done(dialogResult => {
                                    if (dialogResult) {
                                        deletefun2()
                                    }
                                })
                            }
                        }
                    },
                }
	                
            );
        }
    }).dxDataGrid("instance");


    //物料名称表格
    dataGridINs3 = $('#dataGrid3').dxDataGrid({
        "columnAutoWidth": true,
        "dataSource": tabledata3,
        "editing": {
            /*"allowAdding": true,*/
            //"allowDeleting": true,
            "allowUpdating": true,
            "mode": "cell"
        },
        "focusedRowEnabled": true,
        "focusStateEnabled": true,
        "keyExpr": "cIdTbMatterGroup",
        "onFocusedRowChanged": function (e) {
        	msg.data.iwipAgroupM1s1 = [e.row.data];
        	if(msg.data.iwipAgroupM1s1[0].cIdTbMatterGroup.length == undefined){
        		bigIntCode = msg.data.iwipAgroupM1s1[0].cIdTbMatterGroup;
        		tabledata4.splice(0, tabledata4.length);
        		$("#dataGrid4").dxDataGrid("instance").refresh();
        		tabledata5.splice(0, tabledata5.length);
        		$("#dataGrid5").dxDataGrid("instance").refresh();
        	}else{
        		if(msg.data.iwipAgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        		if(msg.data.iwipAgroupM1s1[0].cIdTbMatterGroup.length == 20 && msg.data.iwipAgroupM1s1[0].cIdTbMatterGroup != bigIntCode){
	        			bigIntCode = msg.data.iwipAgroupM1s1[0].cIdTbMatterGroup;
			            $.ajax({
			                // url: requestUrls.getSteel,
			                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_AGROUP/selectAgroupMsg'),
			                dataType: "json", //返回格式为json
			                async: true, //请求是否异步，默认为异步，这也是ajax重要特性
			                data: JSON.stringify(msg), //参数值  requestData.getSteel 上面有定义
			                type: "post", //请求方式 get 或者post ,
			                contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
			                success: function (result) {
			                	if(result.data.iwipAgroupM1s1.length == 0){
									tabledata4.splice(0, tabledata4.length);
									$("#dataGrid4").dxDataGrid("instance").refresh();
									tabledata5.splice(0, tabledata5.length);
									$("#dataGrid5").dxDataGrid("instance").refresh();
								} 
			                    // 清空数据
			                    tabledata4.splice(0, tabledata4.length);

			                    // 将返回的数据推入到清空的数组中
			                    result.data.iwipAgroupM1s1.forEach(item => {
			                        tabledata4.push(item);
			                    });


			                    // 将推入进的数据进行刷新
			                    let newgrid4 = $("#dataGrid4").dxDataGrid("instance");
			                    newgrid4.refresh();

			                    // 关闭加载框
			                   /* closeLoadPanel();*/


			                },

			                /*error: function (y) {
			                    closeLoadPanel()
			                }*/

			            })
		        	}
	        	}
        	}
        },   
        "rowAlternationEnabled": true,
        "showBorders": true,
        "showRowLines": true,
        "width": "100%",
        "height": "100%",
        "paging": {
            "enabled": false
        },
        "selection": {
            mode: 'multiple'
        },
        "columns": [
         	{
              dataField: 'cIdTbMatterGroup',
              caption: '物料组维护ID',
              visible: false,
            },
            {
                dataField: "cMatCodeTbMatterGroup",
                caption: "编码"
            },
           /* {
                dataField: 'cParentIdTbMatterGroup',
                caption: '上级物料组编码',
            },*/
            {
                dataField: "cCnameTbMatterGroup",
                caption: "中文名称"
            },
            {
                dataField: "reserve9TbMatterGroup",
                caption: "印尼文"
            },
            {
                dataField: "cEnaemTbMatterGroup",
                caption: "英文名称"
            },
            {
                dataField: 'reserve7TbMatterGroup',
                caption: '单位',
            },
        ],
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.push(
            	{
						location: "before",
						locateInMenu: 'auto',
						widget: "dxButton",
						options: {
							height: "auto",
							width: "auto",
							icon: 'plus',
							text: '',
							onClick: function (e) {
								// $("#addmoni2").dxDataGrid('instance').addRow();


								let itemo = new Array();

								itemo = [{
									cIdTbMatterGroup:tabledata3.length+1
								}];

								itemo.forEach(item => {
									tabledata3.unshift(item);
								});


								$('#dataGrid3').dxDataGrid('instance').option('dataSource', tabledata3);

								$('#dataGrid3').dxDataGrid('instance').refresh();

								//console.log($("#addmoni2").dxDataGrid('instance').option('dataSource'))

						}
					}
				},
		        {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: 'save',
                        text: '',
                        onClick: function () {
                            dataGridINs3.saveEditData()
                            let ad = dataGridINs3.getSelectedRowsData()
                            let ac = dataGridINs2.getSelectedRowsData()
                            if(ac.length == 1){
                            	if (ad.length < 1) {
	                                DevExpress.ui.notify("请选择要保存的数据", "warning", 1500);
	                            } else {
	                                savegun3()
	                            }
                            }else{
                            	DevExpress.ui.notify("请选择一条小类数据", "error", 1500);
                            }
                            
                        }
                    }
                },
                {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: "remove",
                        type: "danger",
                        text: "",
                        onClick: function (e) {
                            let ad = dataGridINs3.getSelectedRowsData()
                            if (ad.length < 1) {
                                DevExpress.ui.notify("请至少选择一条数据", "warning", 1500);
                            } else {
                                DevExpress.ui.dialog.confirm("确定要删除这些项吗？", "删除确认").done(dialogResult => {
                                    if (dialogResult) {
                                        deletefun3()
                                    }
                                })
                            }
                        }
                    },
                },
                {
                    location: "before",
                    locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        height: "auto",
                        width: "auto",
                        icon: 'fa fa-image',
                        name: 'M1S14MSG',
                        text: '',
                        onClick: function () {
                            change = '2'
                            let grid = $('#dataGrid3').dxDataGrid('instance');
                            let rowsData = grid.getSelectedRowsData()[0]
                            let selectedRowKeys = grid.getSelectedRowKeys()
                            importPopup.option('title', '上传图片');
                            if(selectedRowKeys.length == 0){
                            	DevExpress.ui.notify('请选择要上传图片的“一条”数据。', 'info', 1500);
                            }else{
                            	if(selectedRowKeys.length == 1){
                            		importPopup.show();
                            	}else{
                            		DevExpress.ui.notify('请选择要上传图片的“一条”数据。', 'info', 1500);
                            	}
                            } 
                        }
                    }
                }
	                
            );
        }
    }).dxDataGrid("instance");

    //属性表格
    dataGridINs4 = $('#dataGrid4').dxDataGrid({
        "columnAutoWidth": true,
        "dataSource": tabledata4,
        "editing": {
            /*"allowAdding": true,*/
            //"allowDeleting": true,
            "allowUpdating": true,
            "mode": "cell"
        },
        "focusedRowEnabled": true,
        "focusStateEnabled": true,
        "keyExpr": "cIdTbAttrGroup",
        "onFocusedRowChanged": function (e) {
        	msg.data.iwipAgroupM1s1 = [e.row.data];
        	if(msg.data.iwipAgroupM1s1[0].cIdTbAttrGroup.length == undefined){
        		bigIntCode = msg.data.iwipAgroupM1s1[0].cIdTbAttrGroup;
        		tabledata5.splice(0, tabledata5.length);
        		$("#dataGrid5").dxDataGrid("instance").refresh();
        	}else{
        		if(msg.data.iwipAgroupM1s1[0].cIdTbAttrGroup != bigIntCode){
	        		if(msg.data.iwipAgroupM1s1[0].cIdTbAttrGroup.length == 20 && msg.data.iwipAgroupM1s1[0].cIdTbAttrGroup != bigIntCode){
	        			bigIntCode = msg.data.iwipAgroupM1s1[0].cIdTbAttrGroup;
			            $.ajax({
			                // url: requestUrls.getSteel,
			                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/IWIP_AGROUP/selectAgroupMsgValue'),
			                dataType: "json", //返回格式为json
			                async: true, //请求是否异步，默认为异步，这也是ajax重要特性
			                data: JSON.stringify(msg), //参数值  requestData.getSteel 上面有定义
			                type: "post", //请求方式 get 或者post ,
			                contentType: "application/json", //内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
			                success: function (result) {
			                	if(result.data.iwipAgroupM1s1.length == 0){
									tabledata5.splice(0, tabledata5.length);
									$("#dataGrid5").dxDataGrid("instance").refresh();
								} 
			                    // 清空数据
			                    tabledata5.splice(0, tabledata5.length);

			                    // 将返回的数据推入到清空的数组中
			                    result.data.iwipAgroupM1s1.forEach(item => {
			                        tabledata5.push(item);
			                    });


			                    // 将推入进的数据进行刷新
			                    let newgrid5 = $("#dataGrid5").dxDataGrid("instance");
			                    newgrid5.refresh();

			                    // 关闭加载框
			                    /*closeLoadPanel();
			*/

			                },

			                /*error: function (y) {
			                    closeLoadPanel()
			                }*/

			            })
		        	}
	        	}
        	}
        },   
        "rowAlternationEnabled": true,
        "showBorders": true,
        "showRowLines": true,
        "width": "100%",
        "height": "100%",
        "paging": {
            "enabled": false
        },
        "selection": {
            mode: 'multiple'
        },
        "columns": [
         	{
              dataField: 'cIdTbAttrGroup',
              caption: '物料组维护ID',
              visible: false,
            },
           /*{
                dataField: "cMatCodeTbAttrGroup",
                caption: "编码"
            },*/
            /*{
                dataField: 'cParentIdTbAttrGroup',
                caption: '上级物料组编码',
            },*/
            {
                dataField: "cCnameTbAttrGroup",
                caption: "中文名称"
            },
            {
                dataField: "reserve9TbAttrGroup",
                caption: "印尼文"
            },
            {
                dataField: "cEnaemTbAttrGroup",
                caption: "英文名称"
            }
        ],
        onToolbarPreparing: function (e) {
            e.toolbarOptions.items.push(
            	{
						location: "before",
						locateInMenu: 'auto',
						widget: "dxButton",
						options: {
							height: "auto",
							width: "auto",
							icon: 'plus',
							text: '',
							onClick: function (e) {
								// $("#addmoni2").dxDataGrid('instance').addRow();


								let itemo = new Array();

								itemo = [{
									cIdTbAttrGroup:tabledata4.length+1
								}];

								itemo.forEach(item => {
									tabledata4.unshift(item);
								});


								$('#dataGrid4').dxDataGrid('instance').option('dataSource', tabledata4);

								$('#dataGrid4').dxDataGrid('instance').refresh();

								//console.log($("#addmoni2").dxDataGrid('instance').option('dataSource'))

						}
					}
				},
		        {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: 'save',
                        text: '',
                        onClick: function () {
                            dataGridINs4.saveEditData()
                            let ae = dataGridINs4.getSelectedRowsData()
                            let ad = dataGridINs3.getSelectedRowsData()
                            if(ad.length ==1 ){
                            	if (ae.length < 1) {
	                                DevExpress.ui.notify("请选择要保存的数据", "warning", 1500);
	                            } else {
	                                savegun4()
	                            }
                            }else{
                            	DevExpress.ui.notify("请选择一条物资数据", "error", 1500);
                            }
                            
                        }
                    }
                },
                {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: "remove",
                        type: "danger",
                        text: "",
                        onClick: function (e) {
                            let ae = dataGridINs4.getSelectedRowsData()
                            if (ae.length < 1) {
                                DevExpress.ui.notify("请至少选择一条数据", "warning", 1500);
                            } else {
                                DevExpress.ui.dialog.confirm("确定要删除这些项吗？", "删除确认").done(dialogResult => {
                                    if (dialogResult) {
                                        deletefun4()
                                    }
                                })
                            }
                        }
                    },
                }
            );
        }
    }).dxDataGrid("instance");

    //属性值表格
    dataGridINs5 = $('#dataGrid5').dxDataGrid({
        dataSource: tabledata5,
        editing: {
            mode: "cell",
            allowUpdating: true
        },
        columnAutoWidth: true,
        showBorders: true,
        allowColumnResizing: true,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        //noDataText: '无数据',
        height: "100%",
        selection: {
            mode: 'multiple'
        },
        columns: [
           /*{
              dataField: 'cIdTbAttrGroup',
              caption: '物料组维护ID',
            },*/
            /*{
                dataField: "cMatCodeTbAttrGroup",
                caption: "编码"
            },
            {
                dataField: 'cParentIdTbAttrGroup',
                caption: '上级物料组编码',
            },*/
            {
                dataField: "cCnameTbAttrGroup",
                caption: "中文名称"
            },
            {
                dataField: "reserve9TbAttrGroup",
                caption: "印尼文"
            },
            {
                dataField: "cEnaemTbAttrGroup",
                caption: "英文名称"
            }
        ],
        onToolbarPreparing: function (e) {

            let buttons = [
                {
                    location: "before",
                    widget: "dxButton",
                    options: {
                        icon: "add",
                        text: "",
                        onClick: function (e) {
                            addfun5()
                        }
                    }
                },
                {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: 'save',
                        text: '',
                        onClick: function () {
                            dataGridINs5.saveEditData()
                            let af = dataGridINs5.getSelectedRowsData()
                            let ae = dataGridINs4.getSelectedRowsData()
							if(ae.length == 1){
								if (af.length < 1) {
	                                DevExpress.ui.notify("请选择要保存数据", "warning", 1500);
	                            } else {
	                                savegun5()
	                            }
							}else{
								DevExpress.ui.notify("请选择一条属性数据", "error", 1500);
							}
                            
                        }
                    }
                },
                {
                    location: "before",
                    // locateInMenu: 'auto',
                    widget: "dxButton",
                    options: {
                        icon: "remove",
                        type: "danger",
                        text: "",
                        onClick: function (e) {
                            let af = dataGridINs5.getSelectedRowsData()
                            if (af.length < 1) {
                                DevExpress.ui.notify("请至少选择一条数据", "warning", 1500);
                            } else {
                                DevExpress.ui.dialog.confirm("确定要删除这些项吗？", "删除确认").done(dialogResult => {
                                    if (dialogResult) {
                                        deletefun5()
                                    }
                                })
                            }
                        }
                    },
                },
            ];
            buttons.forEach(item => e.toolbarOptions.items.push(item));
        },

    }).dxDataGrid("instance");

    //浏览区表格
    dataGridINs6 = $('#dataGrid6').dxTreeList({
        dataSource: tabledata6,
        editing: {
            mode: 'popup',
            // allowUpdating: true
        },
        keyExpr: "cMatCodeTbMatterGroup",
		parentIdExpr: "cParentIdTbMatterGroup",
        columnAutoWidth: true,
        showBorders: true,
        allowColumnResizing: true,
        showColumnLines: true,
        showRowLines: true,
        onCellHoverChanged: '#888',
        hoverStateEnabled: true,
        //noDataText: '无数据',
        height: "100%",
        selection: {
            mode: 'single'
        },
        paging: {
			enabled: false
		},
		// 左右拉动
		scrolling: {
			scrollByContent: true,
			mode: 'virtual'
		},

		searchPanel: {
			visible: true,
			width: 250
		},
        columns: [
            {
                dataField: 'cMatCodeTbMatterGroup',
                caption: '物料组编码',
            },
            {
                dataField: 'cParentIdTbMatterGroup',
                caption: '上级物料组编码',
            },
             {
                dataField: 'cCnameTbMatterGroup',
                caption: '中文名称',
            },
            {
                dataField: 'cEnaemTbMatterGroup',
                caption: '英文名称',
            },
           
           /* {
                dataField: 'cFcnameTbMatterGroup',
                caption: '繁体中文名称',
            },
            {
                dataField: 'cBaseCodeTbMatterGroup',
                caption: '对应的分类标准编码',
            },*/
            /*{
                dataField: 'cEdescrideTbMatterGroup',
                caption: '英文描述',
            },
            {
                dataField: 'cCdescrideTbMatterGroup',
                caption: '简体中文描述',
            },
            {
                dataField: 'cFdescrideTbMatterGroup',
                caption: '繁体中文描述',
            },
            {
                dataField: 'reserve10TbMatterGroup',
                caption: 'K3编码',
            }, */
            {
                dataField: 'reserve7TbMatterGroup',
                caption: '单位',
    
            }, {
                dataField: 'reserve8TbMatterGroup',
                caption: '等级',
            },
            {
                dataField: 'reserve1TbMatterGroup',
                caption: '主属性1',
                calculateDisplayValue: function (rowData) {
    
                    if (All != null) {
                        let matchedItem = All.find(item => item.cMatCodeTbAttrGroup == rowData.reserve1TbMatterGroup);
    
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cCnameTbAttrGroup;
                        }
    
                    }
                }
            }, {
                dataField: 'reserve2TbMatterGroup',
                caption: '主属性2',
                calculateDisplayValue: function (rowData) {
    
                    if (All != null) {
                        let matchedItem = All.find(item => item.cMatCodeTbAttrGroup == rowData.reserve2TbMatterGroup);
    
    
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cCnameTbAttrGroup;
                        }
    
                    }
                }
            }, {
                dataField: 'reserve3TbMatterGroup',
                caption: '主属性3',
                calculateDisplayValue: function (rowData) {
    
                    if (All != null) {
                        let matchedItem = All.find(item => item.cMatCodeTbAttrGroup == rowData.reserve3TbMatterGroup);
    
    
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cCnameTbAttrGroup;
                        }
    
                    }
                }
            }, {
                dataField: 'reserve4TbMatterGroup',
                caption: '主属性4',
                calculateDisplayValue: function (rowData) {
    
                    if (All != null) {
                        let matchedItem = All.find(item => item.cMatCodeTbAttrGroup == rowData.reserve4TbMatterGroup);
    
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cCnameTbAttrGroup;
                        }
    
                    }
                }
            }, {
                dataField: 'reserve5TbMatterGroup',
                caption: '主属性5',
                calculateDisplayValue: function (rowData) {
    
                    if (All != null) {
                        let matchedItem = All.find(item => item.cMatCodeTbAttrGroup == rowData.reserve5TbMatterGroup);
    
    
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cCnameTbAttrGroup;
                        }
    
                    }
                }
            }, {
                dataField: 'reserve6TbMatterGroup',
                caption: '主属性6',
                calculateDisplayValue: function (rowData) {
    
                    if (All != null) {
                        let matchedItem = All.find(item => item.cMatCodeTbAttrGroup == rowData.reserve6TbMatterGroup);
    
    
                        if (matchedItem == null || matchedItem == undefined) {
                            return "";
                        } else {
                            return matchedItem.cCnameTbAttrGroup;
                        }
    
                    }
                }
            },
            
           /* {
                dataField: 'reserve9TbMatterGroup',
                caption: '图片地址',
    
            },*/
            
           /* {
                dataField: 'cCreateUserTbMatterGroup',
                caption: '创建人',
            },
            {
                dataField: 'cCtimeTbMatterGroup',
                caption: '创建时间',
                dataType: "date",
                format: "yyyy-MM-dd",
            },
            {
                dataField: 'cUpUserTbMatterGroup',
                caption: '修改人',
            },
            {
                dataField: 'cUptimeTbMatterGroup',
                caption: '修改时间',
                dataType: "date",
                format: "yyyy-MM-dd",
            },*/
        ]
    }).dxTreeList('instance');;

   
// 上传图片
var importPopup = $('#import-content').dxPopup({
    deferRendering: false,
    height: 200,
    width: 500,
}).dxPopup('instance');
$('#pictsure').dxButton({
    text: '确定',
    icon: 'todo',
    onClick: function (e) {
        let grid = $('#dataGrid3').dxDataGrid('instance');
        let rowsData = grid.getSelectedRowsData();
        console.log(rowsData)
        var formdata = new FormData();

        formdata.append('idFileImg', $('#uploadImage').get(0).files[0]);
        formdata.append('documentText', rowsData[0].cIdTbMatterGroup);

        $.ajax({
            url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/imgPublics/upLoadImg'),
            type: 'post',
            cache: false,
            contentType: false,
            data: formdata,
            processData: false,
            success: function (info) {

                if (info.errcode != 0) {
                    DevExpress.ui.notify(info.msg, "error", 1500);
                    importPopup.hide();
                    return
                } else {
                    importPopup.hide();
                    DevExpress.ui.notify(info.msg, "success", 1500);
                }

            },
            error: function () {
                DevExpress.ui.notify('上传失败', "error", 1500);
            }
        });

    }
})
$('#pictcansel').dxButton({
    text: '取消',
    icon: 'remove',
    onClick: function () {
        importPopup.hide()
    }
})

})