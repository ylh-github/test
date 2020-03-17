$(function () {
    let formData = {}
    let formData2 = {}
    let formData3 = {}
    let formData4 = {}
    let formData5 = {}
    let formData6 = {}
    let formData7 = {}
    let formData8 = {}
    let formData9 = {}
    $("#select1").dxForm({
        formData: formData,
        itemType: "group",
        colCount: 6,
        items: [
            {
                dataField: "cSuppcode",
                label: {
                    text: "供应商编码"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#select2").dxForm({
        formData: formData2,
        itemType: "group",
        colCount: 3,
        items: [
            {
                dataField: "cChinesename",
                label: {
                    text: "供应商名称(中文)"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cEnglishname",
                label: {
                    text: "供应商名称(英文)"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppmoney",
                label: {
                    text: "注册资本"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#select3").dxForm({
        formData: formData3,
        itemType: "group",
        colCount: 30,
        items: [
            {
                dataField: "cNature",
                label: {
                    text: "企业性质：国营"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cNature2",
                label: {
                    text: "民营"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cNature3",
                label: {
                    text: "合资"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cNature4",
                label: {
                    text: "外资"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cNature5",
                label: {
                    text: "个体"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cOperationn",
                label: {
                    text: "经营性质：零售"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cOperationn2",
                label: {
                    text: "批发"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#select4").dxForm({
        formData: formData4,
        itemType: "group",          
        colCount: 5,
        items: [
            {
                dataField: "cOperationr",
                label: {
                    text: "经营范围"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cOperationt",
                label: {
                    text: "经营期限"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppeople",
                label: {
                    text: "联系人"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSupphone",
                label: {
                    text: "电话号码"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppshone",
                label: {
                    text: "直线电话"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppmall",
                label: {
                    text: "电子邮件地址"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cFaxno",
                label: {
                    text: "传真号码"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSw01",
                label: {
                    text: "付款方式"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cAccountno",
                label: {
                    text: "银行帐号(人民币)"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#select5").dxForm({
        formData: formData5,
        itemType: "group",          
        colCount: 4,
        items: [
            {
                dataField: "cPastps",
                label: {
                    text: "供应商现时提供的产品及服务"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cPast",
                label: {
                    text: "请提供曾经服务过的公司资料"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cPastcomp",
                label: {
                    text: "公司"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cPastnt",
                label: {
                    text: "供货类型或服务性质"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cPastturnov",
                label: {
                    text: "营业额"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cPasteople",
                label: {
                    text: "联系人"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cPasthone",
                label: {
                    text: "电话"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cPastfaxno",
                label: {
                    text: "传真"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    width: "100%",
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#select6").dxForm({
        width:"70%",
        formData: formData6,
        itemType: "group",
        colCount: 3,
        items: [
            {
                dataField: "cSuppagent2",
                label: {
                    text: "否"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppagent1",
                label: {
                    text: "是"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppagent",
                label: {
                    text: "请详细提供主要的代理产品名称"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#select7").dxForm({
        width:"70%",
        formData: formData7,
        itemType: "group",
        colCount: 3,
        items: [
            {
                dataField: "cSuppdealer2",
                label: {
                    text: "否"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppdealer1",
                label: {
                    text: "是"
                },
                editorType: "dxCheckBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cSuppdealer",
                label: {
                    text: "请详细提供主要的经销产品名称"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#text").dxTextBox({})
    $("#select8").dxForm({
        width:"70%",
        formData: formData8,
        itemType: "group",
        colCount: 4,
        items: [
            {
                dataField: "cSignatory",
                label: {
                    text: "签名并盖章"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
            {
                dataField: "cChinesename",
                label: {
                    text: "公司名称"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
//            {
//                dataField: "",
//                label: {
//                    text: "公司联系人"
//                },
//                editorType: "dxTextBox",
//                editorOptions: {
//                    searchEnabled: true,
//                    placeholder: "",
//                }
//            },
//            {
//                dataField: "cSignadate",
//                label: {
//                    text: "填写日期"
//                },
//                editorType: "dxTextBox",
//                editorOptions: {
//                    searchEnabled: true,
//                    placeholder: "",
//                }
//            },
            {
                dataField: 'cSignadate',
                label: {
                    text: '填写日期'
                },
                editorType: "dxDateBox",
                editorOptions: {
//                    width: "100%",
                    type: "date",
                    displayFormat: 'yyyy-MM-dd',
                    value: new Date()
                },
            },
        ]
    })
    $("#select9").dxForm({
        width:"70%",
        formData: formData9,
        itemType: "group",
        colCount: 2,
        items: [
            {
                dataField: "cSw02",
                label: {
                    text: "推荐人提供此供应商的推荐说明"
                },
                editorType: "dxTextBox",
                editorOptions: {
                    searchEnabled: true,
                    placeholder: "",
                }
            },
        ]
    })
    $("#select10").dxForm({
    	width: '100%',
        colCount: 16,
        items: [
        	{
                name: 'S1S51A',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '提交',
                    onClick: function() {
                    	let abc = new Object();
                    	console.log(formData)
                    	console.log(formData2)
                    	console.log(formData3)
                    	console.log(formData4)
                    	console.log(formData5)
                    	console.log(formData6)
                    	console.log(formData7)
                    	console.log(formData8)
                    	console.log(formData9)
                    	console.log($("#text").text())
                    	abc.cSuppcode = formData.cSuppcode;
                    	abc.cChinesename = formData2.cChinesename;
                    	abc.cEnglishname = formData2.cEnglishname;
                    	abc.cSuppmoney = formData2.cSuppmoney;
                    	abc.cNature = formData3.cNature;
                    	abc.cOperationn = formData3.cOperationn;
                    	abc.cOperationr = formData4.cOperationr;
                    	abc.cOperationt = formData4.cOperationt;
                    	abc.cSuppeople = formData4.cSuppeople;
                    	abc.cSupphone = formData4.cSupphone;
                    	abc.cSuppshone = formData4.cSuppshone;
                    	abc.cSuppmall = formData4.cSuppmall;
                    	abc.cFaxno = formData4.cFaxno;
                    	abc.cSw01 = formData4.cSw01;
                    	abc.cAccountno = formData4.cAccountno;
                    	abc.cPastps = formData5.cPastps;
                    	abc.cPast = formData5.cPast;
                    	abc.cPastcomp = formData5.cPastcomp;
                    	abc.cPastnt = formData5.cPastnt;
                    	abc.cPastturnov = formData5.cPastturnov;
                    	abc.cPasteople = formData5.cPasteople;
                    	abc.cPasthone = formData5.cPasthone;
                    	abc.cPastfaxno = formData5.cPastfaxno;
                    	abc.cSuppagent = formData6.cSuppagent;
                    	abc.cSuppdealer = formData7.cSuppdealer;
                    	abc.cSignatory = formData8.cSignatory;
                    	abc.cChinesename = formData8.cChinesename;
                    	abc.cSignadate = formData8.cSignadate;
//                    	abc.cSignadate = new Date(formData8.cSignadate.getFullYear(), formData8.cSignadate.getMonth(), formData8.cSignadate.getDate(), 0, 0, 0, 0);
                    	abc.cSw02 = formData9.cSw02;
                    	console.log(abc)

                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {
                    	gysDjbM1s11 : new Object()
                    },
                };
                msg.data.gysDjbM1s11.cSuppcode = formData.cSuppcode;
                msg.data.gysDjbM1s11.cChinesename = formData2.cChinesename;
                msg.data.gysDjbM1s11.cEnglishname = formData2.cEnglishname;
                msg.data.gysDjbM1s11.cSuppmoney = formData2.cSuppmoney;
                msg.data.gysDjbM1s11.cNature = formData3.cNature;
                msg.data.gysDjbM1s11.cOperationn = formData3.cOperationn;
                msg.data.gysDjbM1s11.cOperationr = formData4.cOperationr;
                msg.data.gysDjbM1s11.cOperationt = formData4.cOperationt;
                msg.data.gysDjbM1s11.cSuppeople = formData4.cSuppeople;
                msg.data.gysDjbM1s11.cSupphone = formData4.cSupphone;
                msg.data.gysDjbM1s11.cSuppshone = formData4.cSuppshone;
                msg.data.gysDjbM1s11.cSuppmall = formData4.cSuppmall;
                msg.data.gysDjbM1s11.cFaxno = formData4.cFaxno;
                msg.data.gysDjbM1s11.cSw01 = formData4.cSw01;
                msg.data.gysDjbM1s11.cAccountno = formData4.cAccountno;
                msg.data.gysDjbM1s11.cPastps = formData5.cPastps;
                msg.data.gysDjbM1s11.cPast = formData5.cPast;
                msg.data.gysDjbM1s11.cPastcomp = formData5.cPastcomp;
                msg.data.gysDjbM1s11.cPastnt = formData5.cPastnt;
                msg.data.gysDjbM1s11.cPastturnov = formData5.cPastturnov;
                msg.data.gysDjbM1s11.cPasteople = formData5.cPasteople;
                msg.data.gysDjbM1s11.cPasthone = formData5.cPasthone;
                msg.data.gysDjbM1s11.cPastfaxno = formData5.cPastfaxno;
                msg.data.gysDjbM1s11.cSuppagent = formData6.cSuppagent;
                msg.data.gysDjbM1s11.cSuppdealer = formData7.cSuppdealer;
                msg.data.gysDjbM1s11.cSignatory = formData8.cSignatory;
                msg.data.gysDjbM1s11.cChinesename = formData8.cChinesename;
                msg.data.gysDjbM1s11.cSignadate = formData8.cSignadate;
//            	abc.cSignadate = new Date(formData8.cSignadate.getFullYear(), formData8.cSignadate.getMonth(), formData8.cSignadate.getDate(), 0, 0, 0, 0);
                msg.data.gysDjbM1s11.cSw02 = formData9.cSw02;
                //////console.log(msg)
                //change等于1为添加         
                $.ajax({
                    url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/GYS_DJB/M1S11A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function(data) {
                        let select = data.msg
                        if (data.errcode == 0) {
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
                }
            },
            {
                name: 'S1S51A',
                itemType: 'button',
                buttonOptions: {
                    icon: 'save',
                    text: '重置',
                    onClick: function() {
                        
                    }
                }
            },
        ]
    })
})
