window.onload = () => {
	DevExpress.localization.locale(navigator.language || navigator.browserLanguage);
	console.log("%c孩子你越界咯！！！！！！！","color:blue;font-size:20px");
};
$(function () {
    let summ = [];
    let guding = [];
    let searchdataM1; //每个查询条件form的数据
    let searchdataFormM1; //每个查询条件form的实例
    let tabledataS1 = [];
    //时间
    let timeArr = [];
    //公司
    let protyArr = [];

    // 公司
    initLoad2()
    function initLoad2() {
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
                protyArr.splice(0, protyArr.length);
                result.data.forEach(item => {
                    protyArr.push(item);
                });
                console.log(protyArr);
            },
            error: function () {
                cake.Ui.LoadPanel.close()
            }
        });
    }

    searchdataFormM1 = $('#searchFormM1').dxForm({
        deferRendering: false,
        formData: searchdataM1,
        colCount: 6,
        itemType: 'group',
        items: [
//        	{
//            dataField: 'time',
//            label: {
//                text: '时间'
//            },
//            editorType: 'dxSelectBox',
//            editorOptions: {
//                dataSource: timeArr,
//                valueExpr: 'cSubitemidTsDictionary',
//                displayExpr: 'cSubitemdesTsDictionary',
//                searchEnabled: true,
//                showClearButton: true,
//            }
//        },
        	{
				dataField: 'cCreatetime_star',
				label: {
					text: '开始时间'
				},
				editorOptions: {
					type: 'date',
					value: new Date('2019','04','01'),
					displayFormat: 'yyyy-MM-dd'
				}
			},
			{
				dataField: 'cCreatetime_end',
				label: {
					text: '结束时间'
				},
				editorOptions: {
					type: 'date',
					value: new Date(),
					displayFormat: 'yyyy-MM-dd'

				}
			},
        {
            dataField: 'proty',
            label: {
                text: '公司'
            },
            editorType: "dxTagBox",
            editorOptions: {
                height: 26,
                width: '130%',
                items: protyArr,
                valueExpr: 'cSubitemid',
                displayExpr: 'cSubitemdes',
                showSelectionControls: true,
                applyValueMode: "useButtons",
                placeholder: '- 请选择 -'
            }
        },
        ],
    }).dxForm('instance');

    let newArr1;
    let newArr2;
    let dataGridS1columns;
    let operateFormS1buts = [
        {
            location: "before",
            locateInMenu: 'auto',
            widget: "dxButton",
            options: {
                height: "auto",
                width: "auto",
                icon: "search",
                name: 'M1S11Q',
                text: 'Search（查询）',
                onClick: function () {
                    M1S11_serDel()
                }
            }
        },
        //        {
        //            location: "before",
        //            locateInMenu: 'auto',
        //            widget: "dxButton",
        //            options: {
        //                height: "auto",
        //                width: "auto",
        //                icon: "plus",
        //                text: "Impor（导入）",
        //                onClick: function (e) {
        //                },
        //            }
        //        },
    ]
    console.log(dataGridS1columns)


    dataGrid();
    function dataGrid() {
        $('#dataGridS1').dxDataGrid({
            deferRendering: false,
            dataSource: tabledataS1,
            editing: {
                mode: 'popup',
            },
            // keyExpr: 'ID',     
            columnAutoWidth: true,
            showBorders: true,
            allowColumnResizing: true,
            showColumnLines: true,
            showRowLines: true,
            onCellHoverChanged: '#888',
            hoverStateEnabled: true,
            noDataText: '无数据',
            //允许脚本编写     
            height: '100%',
            /*paging: {
                enabled: false
            },*/
            paging: {
                pageSize: 200,
                enabled: true,
            },
            pager: {
                // showPageSizeSelector: true,
                allowedPageSizes: [5, 10, 20, 25, 30],
                showInfo: true,
                showNavigationButtons: true

            },
            export: {
                enabled: true,
                fileName: 'Excel导出',
            },
            /*scrolling: {
                mode: 'virtual'
            },*/
            selection: {
//                mode: 'multiple'
            	mode: 'single'
            },
            headerFilter: {
                visible: true
            },
            searchPanel: {
                visible: true,
                placeholder: "search"
            },
            summary: {
                totalItems: summ
            },
            /**
             * 每个字段加搜索框
             */
            /*filterRow: {
                visible: true
            },*/
            columns: dataGridS1columns,
            onToolbarPreparing: function (e) {
                operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));
            },
            onCellPrepared: function (e) {
                if (e.data) {
                    if (e.row.rowType == 'data') {
                        if (e.column.caption == '总请购项') {
                            e.cellElement.addClass('red')
                        }
                        //	                    if(e.column.caption == '已采购项'){
                        //	                        e.cellElement.addClass('beny')
                        //	                    }
                        if (e.column.caption == '未采购项') {
                            e.cellElement.addClass('fenz')
                        }
                        //	                    if(e.column.caption == '采购总金额'){
                        //	                        e.cellElement.addClass('fenz')
                        //	                    }
                        if (e.column.caption == '签订合同数') {
                            e.cellElement.addClass('beny')
                        }
//                        if (e.column.caption == '签订总金额') {
//                            e.cellElement.addClass('huiz')
//                        }
                        if (e.column.caption == '已付款金额') {
                            e.cellElement.addClass('benz')
                        }
                        if (e.column.caption == '未付款金额') {
                            e.cellElement.addClass('fenz')
                        }
                        //	                    if(e.column.caption == '总未采购项'){
                        //	                        e.cellElement.addClass('benz')
                        //	                    }
	                    if(e.data.cItemdes == null){
	                        e.cellElement.addClass('huiz')
	                    }
                    }
                }
            },
            // onRowClick: function () {
            //     let rowsData = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];
            // },
            onCellClick: function (e) {
            	// 解码
                var loc = decodeURIComponent(location.href)
                // console.log(loc)
                var n1 = loc.length;//地址的总长
                var n2 = loc.indexOf("?");//取得=号的位置
            	let parameter = decodeURI(loc.substr(n2 + 1, n1 - n2));//截取从?号后面的内容
                // 当前点击单元格纵向字段
                var cDataField = e.column.dataField;
                console.log(cDataField)
                // 当前点击横向项目部门字段
                var ccDepartment = e.data.cDepartment;
                var  cSubitemid = e.data.cSubitemid
                if(cSubitemid.indexOf("汇总")!=-1){
                	 DevExpress.ui.notify('汇总行信息不能查询具体内容！！', 'warning', 3000);
                     return;
                }
                let searchtiao = searchdataFormM1.option('formData')
                let startTime1 = searchtiao.cCreatetime_star;
        		let startTime = new Date(startTime1.getFullYear(), startTime1.getMonth(), startTime1.getDate(), 0, 0, 0, 0);
        		let endTime1 = searchtiao.cCreatetime_end;
        		//标识
        	    let bs = "2";
        		let endTime = new Date(endTime1.getFullYear(), endTime1.getMonth(), endTime1.getDate(), 23, 59, 59, 999); 
        		console.log(endTime)
                if(cDataField !='cSubitemid' && cDataField !='cDepartment' && cDataField != 'cItemdes' && ccDepartment !=null){
                	// 公司id
                    var gsId = cDataField.split(/[^\d-]/g)
                    gsId = gsId[gsId.length - 1];
                	if(parseFloat(gsId).toString() != "NaN" || cDataField=="zConmoney"){
                		console.log("合同详情")
                   	 let url = [cDataField,ccDepartment,gsId,startTime,endTime,bs]
                   	console.log(url)
                       url = encodeURIComponent(url)
                      localStorage.setItem("uoken1", url);  // 存到缓存
                      window.open('CG_H001_2.html?'+parameter) 
                    }else{
                    	console.log("请购单详情！！")
                   	 let url = [cDataField,ccDepartment,startTime,endTime,bs]
                    	console.log(url)
                         url = encodeURIComponent(url)
                        localStorage.setItem("uoken1", url);  // 存到缓存
                        window.open('CG_Q001_5.html?'+parameter) 
                     	
                    }
                }

            },
        }).dxDataGrid('instance');
    }
    function M1S11_serDel() {
        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {
            }
        };
        let searchtiao = searchdataFormM1.option('formData')
        let startTime = searchtiao.cCreatetime_star;
		msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		let endTime = searchtiao.cCreatetime_end;
		msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999); 
//		M1S11Q_serDel_Judgment();
        // 公司
        let cCludecom = searchdataFormM1.getEditor('proty').option('value')
        console.log(cCludecom);
        if (cCludecom.length == 0) {
            DevExpress.ui.notify('请选择签订公司！！', 'warning', 3000);
            return;
        }
        msg.data.cCludecom = cCludecom;
        cake.Ui.LoadPanel.show();
        $.ajax({
            url: Cake.Piper.getAuthUrl("../../tdhc_cgsys/tj/searchItemTj"),
            dataType: 'json',   //返回格式为json      
            async: true,//请求是否异步,默认为异步,这也是ajax重要特性       
            data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名       
            type: 'post',   //请求方式 get 或者post ,       
            contentType: 'application/json',
            success: function (data) {
                console.log(data);
                newArr1 = [];
                newArr2 = [];
                newArr1 = data.data.listItemReportData;
                newArr2 = data.data.listData;
                cake.Ui.LoadPanel.close();
                if (newArr2 == null) {
                    tabledataS1.splice(0, tabledataS1.length);
                    DevExpress.ui.notify(data.msg, 'error', 3000);
                    $('#dataGridS1').dxDataGrid('instance').option('dataSource', tabledataS1)
                    cake.Ui.LoadPanel.close(); //转圈提示关闭
                    return
                }

                var twoColumnArr = [];
                var s1col = [];

                for (let o = 0; o < newArr2.length; o++) {

                    twoColumn =
                        {
                            // 青山控股
                            caption: newArr2[o].cSubitemdes,
                            dataField: newArr2[o].cCludecom,
                            alignment: 'center',
                        },

                        twoColumnArr.push(twoColumn)
                }
                for (let i = 0; i < twoColumnArr.length; i++) {
                    console.log(twoColumnArr)
                    s1colw = {
                        dataField: twoColumnArr[i].dataField,
                        alignment: 'center',
                        caption: twoColumnArr[i].caption,
                        columns: [
                            {
                                caption: "签订合同数",
                                dataField: 'htNum' + twoColumnArr[i].dataField,
                                alignment: 'center',
                            },
                            {
                                caption: "签订总金额",
                                dataField: 'cGconmoney' + twoColumnArr[i].dataField,
                                alignment: 'center',
                            },
                            {
                                caption: "已付款金额",
                                alignment: 'center',
                                dataField: 'yfPay' + twoColumnArr[i].dataField,
                            },
                            {
                                caption: "未付款金额",
                                alignment: 'center',
                                dataField: 'wfPay' + twoColumnArr[i].dataField,
                            }
                        ]
                    };

                    s1col.push(s1colw);
                }

                let s1colum = [
                    {
                        dataField: 'cItemdes',
                        alignment: 'center',
                        fixed: true,
                        caption: '所属项目',
                    },
                    {
                        dataField: 'cSubitemid',
                        alignment: 'center',
                        fixed: true,
                        caption: '',
                    },
                    {
                        dataField: 'cDepartment',
                        alignment: 'center',
                        fixed: true,
                        caption: '',
                    },
                    {
                        dataField: 'zQgoux',
                        fixed: true,
                        alignment: 'center',
                        caption: '总请购项',
                    },
                    {
                        dataField: 'yCgoux',
                        fixed: true,
                        alignment: 'center',
                        caption: '已采购项',
                    },
                    {
                        dataField: 'wCgoux',
                        fixed: true,
                        alignment: 'center',
                        caption: '未采购项',
                    },
                    {
                        dataField: 'zConmoney',
                        fixed: true,
                        alignment: 'center',
                        caption: '采购总金额',
                    },
                ];
                // 将2个数组合并
                dataGridS1columns = s1colum.concat(s1col);
                // console.log(dataGridS1columns)
                guding =[];
                for (item in dataGridS1columns) {
                    let aa = dataGridS1columns[item].columns;
                    if (aa != undefined) {
                        for (let j = 0; j < aa.length; j++) {
                            var shb = [
                                {
                                    column: "cItemdes",
                                    // summaryType: "sum",
                                    displayFormat: "总计:",
                                    valueFormat: "fixedPoint",
                                    precision: 2,
                                   
                                },

                                {
                                    column: "zQgoux",
                                    summaryType: "sum",
                                    valueFormat: "fixedPoint",
                                    precision: 2,
                                    displayFormat: "{0}"
                                    	
                                },
                                {
                                    column: "yCgoux",
                                    summaryType: "sum",
                                    valueFormat: "fixedPoint",
                                    precision: 3,
                                    displayFormat: "{0}"
                                },
                                {
                                    column: "wCgoux",
                                    summaryType: "sum",
                                    valueFormat: "fixedPoint",
                                    precision: 2,
                                    displayFormat: "{0}"
                                },
                                {
                                    column: "zConmoney",
                                    summaryType: "sum",
                                    valueFormat: "fixedPoint",
                                    precision: 2,
                                    displayFormat: "{0}"
                                },
                            ]

                            sum =
                                {
                                    column: aa[j].dataField,
                                    summaryType: "sum",
                                    valueFormat: "fixedPoint",
                                    precision: 2,
                                    displayFormat: "{0}"
                                },

                                guding.push(sum)
                            summ = $.merge(shb, guding)
                        }
                    }
                    // console.log(dataGridS1columns[item].columns)

                    // console.log(aa)
                }

                tabledataS1.splice(0, tabledataS1.length);
                newArr1.forEach(item => tabledataS1.push(item));

                dataGrid()

                $('#dataGridS1').dxDataGrid('instance').deselectAll()
                $('#dataGridS1').dxDataGrid('instance').refresh()
                DevExpress.ui.notify(data.msg, 'success', 3000);
                cake.Ui.LoadPanel.close(); //转圈提示关闭
            },
            error: function () {
                cake.Ui.LoadPanel.close();
                DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
                // Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')       
                //e.cancel=true;       
            }
        })
    }
})