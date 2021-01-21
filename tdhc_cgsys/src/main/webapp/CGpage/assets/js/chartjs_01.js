
$(function () {
    let searchdataFormM1;
    let searchdataM1 = {};

    let searchdataFormM2;
    let searchdataM2 = {};
    let searchdataFormM3;
    let searchdataM3 = {};
    let caigouyuan = [];
    let nianfen = [];
    let contSum;//合同总数
    let cpcontSum;//已完成的数量
    let arrSum;//到货量
    let paySum;//已付清量
    let openSum;//已开齐
    let delaySum;//延迟量
    let advanceSum;//提前
    let singleSum;//请购单
    let finishedSum;//请购单完成数
    let monthSum = [];
    let mycode = new Array();
    let usercode = new Array();
    let monthcode = new Array();
    let monthdes = new Array();
    //获取请购单、合同、付款挂历、发票、到货的值并赋值过去


    //采购员
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
                //                console.log(caigouyuan)
            },
            error: function () {
                cake.Ui.LoadPanel.close()
            }
        });
    }
    //获取请购单总量
    start1()
    function start1() {

        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };

        // console.log(JSON.stringify(msg))
        $.ajax({
            url: '../../tdhc_cgsys/homepage/selecttpCgordermtSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                // console.log(data.data.tpCgordermtSum)

                $('#requisition').html(data.data.tpCgordermtSum)
            },
            error: function () {

            }
        })

    }
    //合同总量
    start2()
    function start2() {

        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };

        // console.log(JSON.stringify(msg))
        $.ajax({
            url: '../../tdhc_cgsys/homepage/selectContmtSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //                console.log(data.data.tpCgcontractmtSum)
                $('#contract').html(data.data.tpCgcontractmtSum)
            },
            error: function () {

            }
        })

    }
    //已付清款
    start3()
    function start3() {

        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };

        // console.log(JSON.stringify(msg))
        $.ajax({
            url: '../../tdhc_cgsys/homepage/payContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //                console.log(data.data.tpCgcontractmtSum)
                $('#payment').html(data.data.tpCgcontractmtSum)
            },
            error: function () {

            }
        })

    }
    //发票已开的合同量
    start4()
    function start4() {

        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };

        // console.log(JSON.stringify(msg))
        $.ajax({
            url: '../../tdhc_cgsys/homepage/payContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //            	console.log(data.data.tpCgcontractmtSum)
                $('#invoice').html(data.data.tpCgcontractmtSum)
            },
            error: function () {

            }
        })

    }
    //已到货
    start5()
    function start5() {

        msg = {
            ver: '53cc62f6122a436083ec083eed1dc03d',
            session: '42f5c0d7178148938f4fda29460b815a',
            tag: {},
            data: {}
        };

        // console.log(JSON.stringify(msg))
        $.ajax({
            url: '../../tdhc_cgsys/homepage/arrGoodsSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //            	console.log(data.data.tpCgcontractmtSum)
                $('#arrival').html(data.data.tpCgcontractmtSum)
            },
            error: function () {

            }
        })

    }

    //年份
    initLoad7()
    function initLoad7() {
        msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
                "cItemid": "NF"
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
                    nianfen.push(item);
                });
                //                var date = new Date();
                //                var a;
                //            	this.year = date.getFullYear();//当前年份
                //            	for(var i=0;i<nianfen.length;i++){
                //            		if(date.getFullYear() == nianfen[i].cSubitemid){
                //            			a=i;
                //            		}
                //            	}
                searchdataFormM3.getEditor('nian').option('value', getYear());
            },
            error: function () {
                cake.Ui.LoadPanel.close()
            }
        });
    }

    function getYear() {
        var date = new Date();
        let year = date.getFullYear();//当前年份
        //          console.log(year);
        let macthId = nianfen.find(item => item.cSubitemid == year);
        if (macthId == null || macthId == undefined) {
            return '';
        } else {
            return macthId.cSubitemid
        }
        console.log(macthId);
    }

    //查询1

    //    $('#btn1').click(function () {
    //        msg = {
    //            ver: '53cc62f6122a436083ec083eed1dc03d',
    //            session: '42f5c0d7178148938f4fda29460b815a',
    //            tag: {},
    //            data: {}
    //        };
    //        msg.data.iwipAddM1s1 = [searchdataFormM1.option('formData')];
    //        let startTime = msg.data.iwipAddM1s1[0].htCtimeIwipHtrmt_star;
    //        msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
    //        let endTime = msg.data.iwipAddM1s1[0].htCtimeIwipHtrmt_end;
    //        msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
    //        console.log(JSON.stringify(msg))
    //        //时间段内的合同总数
    //        $.ajax({
    //            url: '../../tdhc_cgsys/homepage/selectContmtNum',
    //            url: '',
    //            type: 'post',
    //            // async: false,
    //            data: JSON.stringify(msg),
    //            dataType: 'json',
    //            contentType: 'application/json',
    //            success: function (data) {
    //                //console.log(data.data.tpCgcontractmtSum)
    //                console.log(aa)
    //                contSum = data.data.tpCgcontractmtSum;
    //                //    	            	console.log(contSum)
    //
    //            },
    //            error: function () {
    //
    //            }
    //        })
    //        console.log(aa)
    //        //已完成的量
    //        $.ajax({
    //            url: '../../tdhc_cgsys/homepage/completedContSum',
    //            type: 'post',
    //            data: JSON.stringify(msg),
    //            dataType: 'json',
    //            contentType: 'application/json',
    //            success: function (data) {
    //                //    	            	console.log()
    //                cpcontSum = data.data.tpCgcontractmtSum;
    //                //    	            	console.log(cpcontSum)
    //
    //            },
    //            error: function () {
    //
    //            }
    //        })
    //
    //        //货到齐的量
    //        $.ajax({
    //            url: '../../tdhc_cgsys/homepage/arrGoodsSum',
    //            type: 'post',
    //            data: JSON.stringify(msg),
    //            dataType: 'json',
    //            contentType: 'application/json',
    //            success: function (data) {
    //                //    	            	console.log(data.data.tpCgcontractmtSum)
    //                arrSum = data.data.tpCgcontractmtSum;
    //                //    	            	console.log(arrSum)
    //
    //            },
    //            error: function () {
    //
    //            }
    //        })
    //        //发票到齐
    //        $.ajax({
    //            url: '../../tdhc_cgsys/homepage/kaipContSum',
    //            type: 'post',
    //            data: JSON.stringify(msg),
    //            dataType: 'json',
    //            contentType: 'application/json',
    //            success: function (data) {
    //                //    	            	console.log(data.data.tpCgcontractmtSum)
    //                paySum = data.data.tpCgcontractmtSum;
    //                //    	            	console.log(paySum);
    //
    //            },
    //            error: function () {
    //
    //            }
    //        })
    //        //款到其
    //        $.ajax({
    //            url: '../../tdhc_cgsys/homepage/payContSum',
    //            type: 'post',
    //            data: JSON.stringify(msg),
    //            dataType: 'json',
    //            contentType: 'application/json',
    //            success: function (data) {
    //                console.log(data.data.tpCgcontractmtSum)
    //                openSum = data.data.tpCgcontractmtSum;
    //                console.log(openSum);
    //
    //            },
    //            error: function () {
    //
    //            }
    //        })
    //
    //
    //        console.log(aa);
    //
    //        //        DevExpress.ui.notify('最多只能选择一个父项。', 'info', 3000);
    //    })

    // 添加--钢种--模态框放置的内容
    searchdataFormM1 = $('#searchFormM1').dxForm({
        deferRendering: false,

        formData: searchdataM1,
        // width: "100%",
        colCountByScreen: {
            lg: 5,
            md: 4,
            sm: 2,
            xs: 1,
        },

        itemType: "group",
        items: [
            {
                dataField: 'htCtimeIwipHtrmt_star',
                label: {
                    text: '开始时间',
                    visible: false
                },
                editorOptions: {
                    type: 'date',
                    value: new Date(),
                    displayFormat: 'yyyy-MM-dd'
                }
            },
            {
                dataField: 'htCtimeIwipHtrmt_end',
                label: {
                    text: '结束时间',
                    visible: false
                },
                editorOptions: {
                    type: 'date',
                    value: new Date(),
                    displayFormat: 'yyyy-MM-dd'

                }
            }, {
                itemType: "button",
                buttonOptions: {
                    icon: "search",
                    text: '查询',
                    onClick: function () {
                        //                    	console.log(searchdataFormM1.option('formData'));
                        M1S11_serDel();

                    }
                }
            }
        ]

    }).dxForm("instance");
    searchdataFormM1.getEditor('htCtimeIwipHtrmt_star').option('value', new Date(moment().add(-6, 'days')));
    M1S11_serDel();

    searchdataFormM2 = $('#searchFormM2').dxForm({
        deferRendering: false,
        formData: searchdataM2,
        ////当参数小于三个时为五个,大于等于三时统一乘二
        ////王晶晶给改为自适应编码
        colCountByScreen: {
            lg: 4,
            md: 3,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [
            {
                dataField: 'htCtimeIwipHtrmt_star2',
                label: {
                    text: '开始时间',
                    visible: false
                },
                editorOptions: {
                    type: 'date',
                    value: new Date(),
                    displayFormat: 'yyyy-MM-dd'
                }
            },
            {
                dataField: 'htCtimeIwipHtrmt_end2',
                label: {
                    text: '结束时间',
                    visible: false
                },
                editorOptions: {
                    type: 'date',
                    value: new Date(),
                    displayFormat: 'yyyy-MM-dd'

                }
            },
            /* {
                 dataField: 'cManor',
                 label: {
                     text: '采购员'
                 },
                 editorType: 'dxTagBox',
                 editorOptions: {
                     //以上完成对没有联动数据源配置
                     //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                     dataSource: caigouyuan,
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
             },*/
            {
                dataField: 'cManor',
                label: {
                    visible: false
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    // width:'120%',
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: caigouyuan,
                    //                    dataSource: [{
                    //                        id: 0,
                    //                        value: '贾'
                    //                    }, {
                    //                        id: 1,
                    //                        value: '试试'
                    //                    }],
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    showClearButton: true,
                    placeholder: '采购员',
                },
            },
            {
                itemType: "button",
                buttonOptions: {
                    icon: "search",
                    text: '查询',
                    onClick: function () {
                        //                        console.log(searchdataFormM2.option('formData'))
                        M1S22_serDel();
                    }
                }
            }
        ]
    }).dxForm('instance');

    searchdataFormM2.getEditor('htCtimeIwipHtrmt_star2').option('value', new Date(moment().add(-3, 'days')));
    M1S22_serDel();

    searchdataFormM3 = $('#searchFormM3').dxForm({
        deferRendering: false,
        formData: searchdataM3,
        ////当参数小于三个时为五个,大于等于三时统一乘二
        ////王晶晶给改为自适应编码
        colCountByScreen: {
            lg: 10,
            md: 3,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [
            //        	 {
            //                 dataField: 'nian',
            //                 label: {
            //                     text: '年份',
            //                     visible: false
            //                 },
            //                 editorOptions: {
            //                     type: 'date',
            //                     value: new Date(),
            //                     displayFormat: 'yyyy'
            //                 }
            //             },
            {
                dataField: 'nian',
                label: {
                    //                    text: '年份',
                    visible: false
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    //                    type: 'date',
                    //                    value: new Date(),
                    //                    displayFormat: 'yyyy-MM-dd'
                    dataSource: nianfen,
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    showClearButton: true,
                    placeholder: '年份',

                }
            },
            //            {
            //                dataField: 'htCtimeIwipHtrmt_end2',
            //                label: {
            //                    text: '结束时间',
            //                    visible: false
            //                },
            //                editorOptions: {
            //                    type: 'date',
            //                    value: new Date(),
            //                    displayFormat: 'yyyy-MM-dd'
            //
            //                }
            //            },
            /* {
                 dataField: 'cManor',
                 label: {
                     text: '采购员'
                 },
                 editorType: 'dxTagBox',
                 editorOptions: {
                     //以上完成对没有联动数据源配置
                     //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                     dataSource: caigouyuan,
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
             },*/
            {
                dataField: 'cManor',
                label: {
                    visible: false
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    // width:'120%',
                    //以上完成对没有联动数据源配置
                    //以下处理是否存在联动,联动的条件是当前字段的ajax字符串后缀为0时候,代表不因其他调节变化自身的值
                    dataSource: caigouyuan,
                    //                    dataSource: [{
                    //                        id: 0,
                    //                        value: '贾'
                    //                    }, {
                    //                        id: 1,
                    //                        value: '试试'
                    //                    }],
                    valueExpr: 'cSubitemid',
                    displayExpr: 'cSubitemdes',
                    showClearButton: true,
                    placeholder: '采购员',
                },
            },
            {
                itemType: "button",
                buttonOptions: {
                    icon: "search",
                    text: '查询',
                    onClick: function () {
                        //                       console.log(searchdataFormM2.option('formData'))
                        M1S33_serDel();
                    }
                }
            }
        ]
    }).dxForm('instance');
    console.log(99999999);
    M1S33_serDel();
    // searchdataFormM2.getEditor('htCtimeIwipHtrmt_star2').option('value', new Date(moment().add(-3, 'days')));
    //M1S33_serDel();
    // $("#top-operate").dxForm({
    // 	width: 100,
    // 	colCount: 1,
    // 	items: [
    // 		{
    // 			itemType: "button",
    // 			buttonOptions: {
    // 				icon: "search",
    // 				text: '查询',
    // 				onClick: function () {
    // 					console.log(searchdataFormM2.option('formData'))
    // 				}
    // 			}
    // 		},
    // 	]
    // })
    function M1S11_serDel() {
        //    console.log(searchdataFormM1.option('formData'))
        let iwipAddM1s1 = [searchdataFormM1.option('formData')];
        let startTime = iwipAddM1s1[0].htCtimeIwipHtrmt_star;
        msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        let endTime = iwipAddM1s1[0].htCtimeIwipHtrmt_end;
        msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        //    console.log(JSON.stringify(msg))
        //时间段内的合同总数
        $.ajax({
            url: '../../tdhc_cgsys/homepage/selectContmtNum',
            type: 'post',
            // async: false,
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //            console.log(data.data.tpCgcontractmtSum)
                //            console.log(aa)
                contSum = data.data.tpCgcontractmtSum;
                //        	console.log("合同总量：：："+contSum)
                mycode[0] = contSum;

            },
            error: function () {

            }
        })

        //已完成的量
        $.ajax({
            url: '../../tdhc_cgsys/homepage/completedContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //    	            	console.log()
                cpcontSum = data.data.tpCgcontractmtSum;
                //        	console.log("已完成的量："+cpcontSum)
                window.sessionStorage.setItem("cpcontSum", "" + cpcontSum);
                mycode[1] = cpcontSum;

            },
            error: function () {

            }
        })

        //货到齐的量
        $.ajax({
            url: '../../tdhc_cgsys/homepage/arrGoodsSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //    	            	console.log(data.data.tpCgcontractmtSum)
                arrSum = data.data.tpCgcontractmtSum;
                //                	            	console.log("到货量：："+arrSum)
                mycode[2] = arrSum;

            },
            error: function () {

            }
        })
        //发票到齐
        $.ajax({
            url: '../../tdhc_cgsys/homepage/kaipContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //    	            	console.log(data.data.tpCgcontractmtSum)
                paySum = data.data.tpCgcontractmtSum;
                //                	            	console.log("发票到齐：："+paySum);
                mycode[3] = paySum;

            },
            error: function () {

            }
        })
        //款到其
        $.ajax({
            url: '../../tdhc_cgsys/homepage/payContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //            console.log(data.data.tpCgcontractmtSum)
                openSum = data.data.tpCgcontractmtSum;
                //            console.log("款付齐的量：："+openSum);
                mycode[4] = openSum;

            },
            error: function () {

            }
        })
        //合同提前 /延迟
        $.ajax({
            url: '../../tdhc_cgsys/homepage/deplayContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                advanceSum = data.data.tpCgcontractmtSum;
                mycode[5] = advanceSum;
                delaySum = data.data.tpCgcontractNum;
                mycode[6] = delaySum;

            },
            error: function () {

            }
        })
        //请购单物资总数
        $.ajax({
            url: '../../tdhc_cgsys/homepage/tpCgorderstSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                singleSum = data.data.tpCgorderstSum;
                mycode[7] = singleSum;
            },
            error: function () {

            }
        })
        //请购单物资完成数
        $.ajax({
            url: '../../tdhc_cgsys/homepage/selecttpCgorderstSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                finishedSum = data.data.tpCgorderstSum;
                mycode[8] = finishedSum;
            },
            error: function () {

            }
        })
        //    console.log(mycode);
        function fetchData(cb) {
            // 通过 setTimeout 模拟异步加载
            setTimeout(function () {
                cb({
                    categories: ["合同总数", "合同完成数", "合同货齐", "合同发票齐", "合同款齐", "合同提前量", "合同延迟量", "请购单物资总数", "请购单完成数"],
                    data: mycode
                });
            }, 1000);
        }
        var dom = document.getElementById("line-chart");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            legend: {
                data: ['数量']
            },
            tooltip: {},
            // height:'400px',
            // dataset: {
            //     source: 
            //     [
            //         ['product', '数量'],
            //         ['总数量', aa,],
            //         ['完成量', cpcontSum,],
            //         ['货到齐', arrSum,],
            //         ['发票到齐', openSum],
            //         ['款到齐', paySum],
            //     ]
            // },

            xAxis: {
                data: [],
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
                axisLine: {
                    lineStyle: {
                        color: '#828282'
                    }
                }
            },
            //        series: [{
            //            name: '数量',
            //            type: 'bar',
            //            data: []
            //        }],


            // xAxis: { type: 'category' },
            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: '#828282'
                    }
                }
            },
            series: [{
                name: '数量',
                type: 'bar',
                data: [],
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                },
            }],
            //        	[
            //            {
            //                type: 'value',
            //                // name: '数量',
            //                min: 0,
            //                max: 250,
            //                interval: 50,
            //                axisLabel: {
            //                    formatter: '{value}'
            //                }
            //            },
            //            {
            //                type: 'value',
            //                // name: '温度',
            //                min: 0,
            //                max: 100,
            //                interval: 20,
            //                axisLabel: {
            //                    formatter: '{value}' + '%'
            //                }
            //            }
            //        ],
            itemStyle: {
                color: function (params) {
                    // var colorList = ['#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#C33531', '#EFE42A', '#64BD3D', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                    var colorList = ['#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91'];
                    return colorList[params.dataIndex]
                }
            },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.

        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        };
        fetchData(function (data) {
            myChart.setOption({
                xAxis: {
                    data: data.categories,

                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '数量',
                    data: data.data
                }]
            });
        });


    }

    /*let aa = [200, 100, 150, 100, 100,]
    function fetchData(cb) {
        // 通过 setTimeout 模拟异步加载
        setTimeout(function () {
            cb({
                categories: ["总数量", "完成量", "货到齐", "发票到齐", "款到齐"],
                data: aa
            });
        }, 1000);
    }
    
    
    var dom = document.getElementById("line-chart");
    
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    option = {
        legend: {
            data:['数量']
        },
        tooltip: {},
        // height:'400px',
        // dataset: {
        //     source: 
        //     [
        //         ['product', '数量'],
        //         ['总数量', aa,],
        //         ['完成量', cpcontSum,],
        //         ['货到齐', arrSum,],
        //         ['发票到齐', openSum],
        //         ['款到齐', paySum],
        //     ]
        // },
    
        xAxis: {
            data: []
        },
    //    series: [{
    //        name: '数量',
    //        type: 'bar',
    //        data: []
    //    }],
    
    
        // xAxis: { type: 'category' },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'bar',
            data: []
        }],
    //    	[
    //        {
    //            type: 'value',
    //            // name: '数量',
    //            min: 0,
    //            max: 250,
    //            interval: 50,
    //            axisLabel: {
    //                formatter: '{value}'
    //            }
    //        },
    //        {
    //            type: 'value',
    //            // name: '温度',
    //            min: 0,
    //            max: 100,
    //            interval: 20,
    //            axisLabel: {
    //                formatter: '{value}' + '%'
    //            }
    //        }
    //    ],
        itemStyle: {
            color: function (params) {
                var colorList = ['#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#C33531', '#EFE42A', '#64BD3D', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                return colorList[params.dataIndex]
            }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
    
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    };
    fetchData(function (data) {
        myChart.setOption({
            xAxis: {
                data: data.categories
            },
            series: [{
                // 根据名字对应到相应的系列
                name: '数量',
                data: data.data
            }]
        });
    });*/


    function M1S22_serDel() {
        //    console.log(searchdataFormM2.option('formData'))
        let iwipAddM1s2 = [searchdataFormM2.option('formData')];
        let startTime = iwipAddM1s2[0].htCtimeIwipHtrmt_star2;
        msg.data.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
        let endTime = iwipAddM1s2[0].htCtimeIwipHtrmt_end2;
        msg.data.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
        msg.data.cManor = iwipAddM1s2[0].cManor;
        //    console.log(msg.data.cManor);
        //    console.log(JSON.stringify(msg))

        //时间段内的合同总数
        $.ajax({
            url: '../../tdhc_cgsys/homepage/selectContmtNum',
            type: 'post',
            // async: false,
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //            console.log(data.data.tpCgcontractmtSum)
                //            console.log(aa)
                let contSum2 = data.data.tpCgcontractmtSum;
                console.log("合同总量2：：：" + contSum2)
                usercode[0] = contSum2;

            },
            error: function () {

            }
        })

        //已完成的量
        $.ajax({
            url: '../../tdhc_cgsys/homepage/completedContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //    	            	console.log()
                let cpcontSum2 = data.data.tpCgcontractmtSum;
                //        	console.log("已完成的量2："+cpcontSum2)
                usercode[1] = cpcontSum2;

            },
            error: function () {

            }
        })

        //货到齐的量
        $.ajax({
            url: '../../tdhc_cgsys/homepage/arrGoodsSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //    	            	console.log(data.data.tpCgcontractmtSum)
                let arrSum2 = data.data.tpCgcontractmtSum;
                //                	            	console.log("到货量2：："+arrSum2)
                usercode[2] = arrSum2;

            },
            error: function () {

            }
        })
        //发票到齐
        $.ajax({
            url: '../../tdhc_cgsys/homepage/kaipContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //    	            	console.log(data.data.tpCgcontractmtSum)
                let paySum2 = data.data.tpCgcontractmtSum;
                //                	            	console.log("发票到齐2：："+paySum);
                usercode[3] = paySum;

            },
            error: function () {

            }
        })
        //款到其
        $.ajax({
            url: '../../tdhc_cgsys/homepage/payContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //            console.log(data.data.tpCgcontractmtSum)
                let openSum2 = data.data.tpCgcontractmtSum;
                //            console.log("款付齐的量2：："+openSum2);
                usercode[4] = openSum2;

            },
            error: function () {

            }
        })
        //合同提前 /延迟
        $.ajax({
            url: '../../tdhc_cgsys/homepage/deplayContSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                let advanceSum2 = data.data.tpCgcontractmtSum;
                usercode[5] = advanceSum2;
                let delaySum2 = data.data.tpCgcontractNum;
                usercode[6] = delaySum2;

            },
            error: function () {

            }
        })
        //请购单物资总数
        $.ajax({
            url: '../../tdhc_cgsys/homepage/tpCgorderstSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                let singleSum2 = data.data.tpCgorderstSum;
                usercode[7] = singleSum2;
            },
            error: function () {

            }
        })
        //请购单物资完成数
        $.ajax({
            url: '../../tdhc_cgsys/homepage/selecttpCgorderstSum',
            type: 'post',
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                let finishedSum2 = data.data.tpCgorderstSum;
                usercode[8] = finishedSum2;
            },
            error: function () {

            }
        })

        //    console.log(usercode);
        function fetchDataas(cbc) {
            // 通过 setTimeout 模拟异步加载
            setTimeout(function () {
                cbc({
                    categories: ["合同总数量", "合同完成量", "合同货到齐", "合同发票到齐", "合同款到齐", "合同提前量", "合同延迟量", "请购单物资总数", "请购单完成数"],
                    data: usercode,
                    // formatter: '{b} {d}%'
                });
            }, 1000);
        }
        var dom2 = document.getElementById("bar-chart");
        var myChart2 = echarts.init(dom2);
        option2 = {
            legend: {
                data: ['数量']
            },
            tooltip: {},
            xAxis: {
                data: [],
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
                axisLine: {
                    lineStyle: {
                        color: '#828282'
                    }
                }
            },

            yAxis: {
                axisLine: {
                    lineStyle: {
                        color: '#828282'
                    }
                }
            },
            series: [{
                name: '数量',
                type: 'bar',
                data: [],
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                },
            }],
            itemStyle: {

                color: function (params) {
                    //  var colorList = ['#16A085', '#4A235A', '#C39BD3 ', '#C33531', '#EFE42A', '#64BD3D', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                    var colorList = ['#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91'];
                    return colorList[params.dataIndex]
                }
            },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.

        };
        if (option2 && typeof option2 === "object") {
            myChart2.setOption(option2, true);
        };

        fetchDataas(function (data) {
            myChart2.setOption({
                xAxis: {
                    data: data.categories
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '总数量',
                    data: data.data
                }]
            });
        });

    }

    function M1S33_serDel() {
        console.log(searchdataFormM3.option('formData'))
        let iwipAddM1s3 = [searchdataFormM3.option('formData')];
        let startTime = iwipAddM1s3[0].nian;
        console.log(startTime);
        msg.data.startTime = new Date(startTime, 0, 1, 0, 0, 0, 0);
        console.log(msg.data.startTime);
        msg.data.endTime = new Date(startTime, 11, 31, 23, 59, 59, 999);
        console.log(msg.data.endTime);
        msg.data.cManor = iwipAddM1s3[0].cManor;
        //    console.log(msg.data.cManor);
        console.log(JSON.stringify(msg))

        //时间段内的请购单物资总数
        $.ajax({
            //../../tdhc_cgsys/homepage/yeartpCgorderstSum
            url: '../../tdhc_cgsys/homepage/yeartpCgorderstSum',
            type: 'post',
            // async: false,
            data: JSON.stringify(msg),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                console.log(data.data)
                monthSum = data.data.monthSum;
                monthNumdes = data.data.monthdes;
                console.log("请购单总量：：：" + monthSum);
                //        	console.log("请购单总量：：："+monthNumdes);
                monthcode = [].concat(monthSum);
                //        	 monthdes  = [].concat(monthNumdes);
                /*monthcode[0] = monthSum[0].;  	      
                monthcode[1] = monthSum[1].eMonthSum;  	      
                monthcode[2] = monthSum[2].eMonthSum;  	      
                monthcode[3] = monthSum[3].eMonthSum;  	      
                monthcode[4] = monthSum[4].eMonthSum;  	      
                monthcode[5] = monthSum[5].eMonthSum;  	      
                monthcode[6] = monthSum[6].eMonthSum;  	      
                monthcode[7] = monthSum[7].eMonthSum;  	      
                monthcode[8] = monthSum[8].eMonthSum;  	      
                monthcode[9] = monthSum[9].eMonthSum;  	      
                monthcode[10] = monthSum[10].eMonthSum;  	      
                monthcode[11] = monthSum[11].eMonthSum;  	*/

            },
            error: function () {

            }
        })
        console.log(monthcode);
        function fetchDataas(cbc) {
            // 通过 setTimeout 模拟异步加载
            setTimeout(function () {
                cbc({
                    categories: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                    //            	categories:monthdes,
                    data: monthcode,
                    // formatter: '{b} {d}%'
                });
            }, 1000);
        }
        var dom3 = document.getElementById("month-chart");
        var myChart3 = echarts.init(dom3);
        option3 = {
            legend: {
                data: ['数量']
            },
            tooltip: {},
            xAxis: {
                data: [],
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                },
                axisLine:{
                    lineStyle:{
                        color:'#828282'
                    }
                }
            },

            yAxis: {
                axisLine:{
                    lineStyle:{
                        color:'#828282'
                    }
                }
            },
            series: [{
                name: '数量',
                type: 'bar',
                data: [],
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: 'black',
                                fontSize: 16
                            }
                        }
                    }
                },
            }],
            itemStyle: {

                color: function (params) {
                    //  var colorList = ['#16A085', '#4A235A', '#C39BD3 ', '#C33531', '#EFE42A', '#64BD3D', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                    var colorList = ['#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91', '#6672f3', '#6de6da', '#f97f91'];
                    return colorList[params.dataIndex]
                }
            },
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.

        };
        if (option3 && typeof option3 === "object") {
            myChart3.setOption(option3, true);
        };

        fetchDataas(function (data) {
            myChart3.setOption({
                xAxis: {
                    data: data.categories
                },
                series: [{
                    // 根据名字对应到相应的系列
                    name: '总数量',
                    data: data.data
                }]
            });
        });

    }



    //    let ayy = [50, 120, 136, 100, 120, 124, 135, 145, 160, 190, 234, 348]
    //    function fetchDataas(cbc) {
    //        // 通过 setTimeout 模拟异步加载
    //        setTimeout(function () {
    //            cbc({
    //                categories: ["1月", "2月", "3月", "4月", "5月", "6月", "7月","8月", "9月", "10月","11月","12月"],
    //                data: monthcode,
    //                // formatter: '{b} {d}%'
    //            });
    //        }, 1000);
    //    }
    //var dom3 = document.getElementById("month-chart");
    //var myChart3 = echarts.init(dom3);
    //option3 = {
    //		 legend: {
    //	        	data:['数量']
    //	        },
    //	        tooltip: {},
    //	     xAxis: {
    //         data: [],
    //         axisLabel: {  
    //      	   interval:0,  
    //      	   rotate:30  
    //      	},
    //     },
    //     
    //     yAxis: {},
    //     series: [{
    //         name: '数量',
    //         type: 'bar',
    //         data: [],
    //         itemStyle: {
    //				normal: {
    //					label: {
    //						show: true, //开启显示
    //						position: 'top', //在上方显示
    //						textStyle: { //数值样式
    //							color: 'black',
    //							fontSize: 16
    //						}
    //					}
    //				}
    //			},
    //     }],
    //     itemStyle: {
    //    	
    //         color: function (params) {
    //             var colorList = ['#16A085', '#4A235A', '#C39BD3 ', '#C33531', '#EFE42A', '#64BD3D', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
    //             return colorList[params.dataIndex]
    //         }
    //     },
    //     // Declare several bar series, each will be mapped
    //     // to a column of dataset.source by default.
    //
    // };
    //if (option3 && typeof option3 === "object") {
    //    myChart3.setOption(option3, true);
    //};
    //
    //fetchDataas(function (data) {
    //    myChart3.setOption({
    //        xAxis: {
    //            data: data.categories
    //        },
    //        series: [{
    //            // 根据名字对应到相应的系列
    //            name: '总数量',
    //            data: data.data
    //        }]
    //    });
    //});
    //    var dom3 = document.getElementById("month-chart");
    //    var myChart3 = echarts.init(dom3);
    // option3 = {
    //     title: {
    //         // text: '标题',
    //         // subtext: '副标题',
    //         x: 'center'
    //     },
    //     tooltip: {
    //         trigger: 'item',
    //         formatter: "{a} <br/>{b} : {c} ({d}%)"
    //     },
    //     legend: {
    //         orient: 'vertical',
    //         left: 'left',
    //         data: ['总数量', '已到货', '已经开票',]
    //     },
    //     series: [
    //         {
    //             name: '访问来源',
    //             type: 'pie',
    //             radius: '55%',
    //             center: ['50%', '60%'],
    //             data: [
    //                 { value: 200, name: '总数量' },
    //                 { value: 50, name: '已到货' },
    //                 { value: 150, name: '已经开票' },
    //             ],
    //             label: {            //饼图图形上的文本标签
    //                 normal: {
    //                     show: true,
    //                     position: 'inner', //标签的位置
    //                     textStyle: {
    //                         fontWeight: 300,
    //                         fontSize: 16    //文字的字体大小
    //                     },
    //                     formatter: '{b} {d}%'


    //                 }
    //             },
    //             itemStyle: {
    //                 emphasis: {
    //                     shadowBlur: 10,
    //                     shadowOffsetX: 0,
    //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                 },
    //             }
    //         }
    //     ]
    // };
    //    option2 = {
    //    		 legend: {
    //    	        	data:['数量']
    //    	        },
    //    	        tooltip: {},
    //        legend: {
    //            orient: 'vertical',
    //            x: 'left',
    //            data: ['直接访问', '邮件营销']
    //        },
    //        // 
    //        tooltip: {
    //            trigger: 'item', 
    //
    //        },
    // height:'400px',
    // dataset: {
    //     source: [
    //         // ['product', '总数量','已到货','已经开票'],
    //         ['总数量', 100,],
    //         ['已到货', 150,],
    //         ['已经开票', 50,],
    //     ]
    // },
    //        xAxis: {
    //            data: []
    //        },
    //        series: [
    //            {
    //                type: 'bar',
    //                name: '总数量，已到货，已经开票',
    //                data: []
    //            },
    //        ],
    //        yAxis: {},
    //        series: [{
    //            name: '数量',
    //            type: 'bar',
    //            data: []
    //        }],
    //        	[
    //            {
    //                type: 'value',
    //                // name: '水量',
    //                min: 0,
    //                max: 250,
    //                interval: 50,
    //                axisLabel: {
    //                    formatter: '{value}'
    //                }
    //            },
    //            {
    //                type: 'value',
    //                // name: '温度',
    //                min: 0,
    //                max: 100,
    //                interval: 20,
    //                axisLabel: {
    //                    formatter: '{value}' + '%'
    //                }
    //            }
    ////        ],
    //        itemStyle: {
    //            color: function (params) {
    //                var colorList = ['#16A085', '#4A235A', '#C39BD3 ', '#C33531', '#EFE42A', '#64BD3D', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
    //                return colorList[params.dataIndex]
    //            }
    //        },
    //        // Declare several bar series, each will be mapped
    //        // to a column of dataset.source by default.
    //
    //    };
    //    if (option2 && typeof option2 === "object") {
    //        myChart2.setOption(option2, true);
    //    };
    //
    //    fetchDataas(function (data) {
    //        myChart2.setOption({
    //            xAxis: {
    //                data: data.categories
    //            },
    //            series: [{
    //                // 根据名字对应到相应的系列
    //                name: '总数量',
    //                data: data.data
    //            }]
    //        });
    //    });

    /*var dom3 = document.getElementById("line-chart2");
    var myChart3 = echarts.init(dom3);
    option3 = {
        legend: {},
        tooltip: {},
        // height:'400px',
        dataset: {
            source: [
                // ['product', '数量'],
                ['已开票', 159,],
                ['已到货', 40,],
                ['延时量', 10,],
            ]
        },
        xAxis: { type: 'category' },
        yAxis: [
            {
                type: 'value',
                // name: '水量',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                // name: '温度',
                min: 0,
                max: 100,
                interval: 20,
                axisLabel: {
                    formatter: '{value}' + '%'
                }
            }
        ],
        itemStyle: {
            color: function (params) {
                var colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
                return colorList[params.dataIndex]
            }
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            { type: 'bar' },
            // {type: 'bar'},
        ]
    };
    if (option3 && typeof option3 === "object") {
        myChart3.setOption(option3, true);
    }*/

    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    var checkin = $('#dpd1').fdatepicker({
        onRender: function (date) {
            //            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        },
        format: 'yyyy-mm-dd',
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout.update(newDate);
        }
        checkin.hide();
        $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').fdatepicker({
        onRender: function (date) {
            //            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
        },
        format: 'yyyy-mm-dd',
    }).on('changeDate', function (ev) {
        checkout.hide();
    }).data('datepicker');

    var checkin3 = $('#dpd3').fdatepicker({
        onRender: function (date) {
            //            return date.valueOf() < now.valueOf() ? 'disabled' : '';
        },
        format: 'yyyy-mm-dd',
    }).on('changeDate', function (ev) {
        if (ev.date.valueOf() > checkout4.date.valueOf()) {
            var newDate = new Date(ev.date)
            newDate.setDate(newDate.getDate() + 1);
            checkout4.update(newDate);
        }
        checkin3.hide();
        $('#dpd4')[0].focus();
    }).data('datepicker');
    var checkout4 = $('#dpd4').fdatepicker({
        onRender: function (date) {
            //            return date.valueOf() <= checkin3.date.valueOf() ? 'disabled' : '';
        },
        format: 'yyyy-mm-dd',
    }).on('changeDate', function (ev) {
        checkout4.hide();
    }).data('datepicker');





    setTimeout(() => {
        M1S33_serDel()
    }, 1000);

})