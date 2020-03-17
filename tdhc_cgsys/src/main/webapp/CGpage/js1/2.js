
let dianji;
let array = [];
(function () {
    dianji = {
        tale: function () {
            console.log($('#dataGridS666').dxDataGrid('instance'))
        }
    }

})()
let bottomForm;
let childernId;
let childrenFormData
let tabledataS1 = [{
    id: '',
    cIdTodaButton: '1'
}, {
    id: '',
    cIdTodaButton: '2'
}, {
    id: '',
    cIdTodaButton: '64'
}, {
    id: '',
    cIdTodaButton: '5'
}, {
    id: '',
    cIdTodaButton: '234'
}, {
    id: '',
    cIdTodaButton: '6'
},]

let count = tabledataS1.length;

for (let i = 0; i < count; i++) {
    let onlyCount = i + 1;

    tabledataS1[i].id = onlyCount;
}

let adddata;

let str;

let validationGroupName = 'validationGroupName';
let searchdataFormM1;
let searchdataM1;
$(function () {

    // let pop = {
    //     id:'1'
    // }

    // let ppp = {
    //     id:'2'
    // }

    // let gggp = {
    //     id:'33'
    // }

    // array.push(pop,ppp,gggp);

    // console.log(array)

    searchdataFormM1 = $('#searchFormM1').dxForm({
        deferRendering: false,

        formData: searchdataM1,
        ////当参数小于三个时为五个,大于等于三时统一乘二
        ////王晶晶给改为自适应编码
        colCountByScreen: {
            lg: 6,
            md: 4,
            sm: 2,
            xs: 1,
        },
        //所有查询条件为一组的代码段
        itemType: 'group',
        items: [{
            dataField: 'id',
            label: {
                text: '物料组编码'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cParentIdTbMatterGroup',
            label: {
                text: '上级物料组编码'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cEnaemTbMatterGroup',
            label: {
                text: '英文名称'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cCnameTbMatterGroup',
            label: {
                text: '中文名称'
            },
            editorOptions: {
                showClearButton: true,
            }
        },
        {
            dataField: 'cCreateUserTbMatterGroup',
            label: {
                text: '创建人'
            },
            editorOptions: {
                showClearButton: true,
            }
        }
        ]
    }).dxForm('instance');

    $('#addmotai').dxPopup({
        fullScreen: true
    }).dxPopup('instance')
    let operateFormS1buts = [{
        location: "before",
        locateInMenu: 'auto',
        widget: "dxButton",
        options: {
            height: "auto",
            width: "auto",
            icon: "search",
            name: 'M1S11Q',
            text: '查询',
            onClick: function () {
                console.log(searchdataFormM1.option('formData'))

                // $('#dataGridS1').dxDataGrid('instance').addRow()

                let gridLen = $('#dataGridS1').dxDataGrid('instance').getSelectedRowKeys().length;

                let rowdata = $('#dataGridS1').dxDataGrid('instance').getSelectedRowsData()[0];


                searchdataFormM1.option('formData', rowdata)

                // if (gridLen <= 1) {


                //     window.open('http://www.baidu.com')
                // }
                // if (gridLen > 1) {

                //     window.open('http://www.taobao.com')
                // }

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
            name: 'M1S11A',
            icon: 'plus',
            text: '增加',
            onClick: function () {
                change = '1';
                // console.log($("div#formList"))

                // str = [];
                // str.splice(0, str.length);
                array.splice(0, array.length)

                addIns = $('#addmotai').dxPopup({
                    deferRendering: true,
                    fullScreen: true
                }).dxPopup('instance');
                $('#addmotai').css('display', "block")
                addIns.option('title', 'BD_BUTTON')
                addIns.show();

                let gridLen = $('#dataGridS1').dxDataGrid('instance').getSelectedRowKeys().length;
                if (gridLen <= 1) {
                    //console.log('0或1')

                    M1S11_addfun();
                    $("#formList").children().not(':first').remove();
                    return
                } else {

                    M1S11_addfun();
                    M1S11addIns.option('formData', new Object())
                    $("#formList").children().not(':first').remove();
                    for (let i = 1; i <= gridLen - 1; i++) {
                        // $("#formList:not(:first)").remove();
                        // var h3 = $("div#formList")[0].children;
                        // let op = "";
                        // for (var j = 0; j < h3.length; j++) {
                        //     op = h3[j].id + ',';
                        //     str.push(op)

                        //     $.unique(str);
                        //     //console.log(str)

                        // };
                        // console.log(i)
                        var sourceNode = document.getElementById("addForm"); // 获得被克隆的节点对象   
                        var clonedNode = sourceNode.cloneNode(true); // 克隆节点  
                        // 从任意值开始 至 任意值  
                        //                                        parseInt(Math.random()*(上限-下限+1)+下限);    
                        clonedNode.setAttribute("id", "addForm" + parseInt(Math.random() * (10000 - 1 + 1) + 1)); // 修改一下id 值，避免id 重复   
                        sourceNode.parentNode.appendChild(clonedNode); // 在父节点插入克隆的节点
                        ii = i + 1;

                    }
                }
                let childrenLen = $("#formList").children();

                for (let i = 0; i < childrenLen.length; i++) {
                    childernId = $("#formList").children()[i].id;
                    $("#" + childernId).dxForm({
                        formData: adddata,
                        validationGroup: validationGroupName,
                        colCount: 4,
                        items: [{
                            dataField: 'cGoodsname',
                            label: {
                                text: '品名'
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
                            dataField: 'cSpec',
                            label: {
                                text: '规格/型号'
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
                            colSpan: 2,
                            itemType: 'empty',
                        },
                        {
                            dataField: 'cGoodsnum',
                            label: {
                                text: '数量'
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
                            dataField: 'cUnit',
                            label: {
                                text: '成交单位'
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
                            dataField: 'cConnum5645',
                            label: {
                                text: '商品和服务分类简称'
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
                            colSpan: 1,
                            itemType: 'empty',
                        },
                        // {
                        //     dataField: 'cConnum66786',
                        //     label: {
                        //         text: '商品和服务分类简称'
                        //     },
                        //     editorType: 'dxTextBox',
                        //     editorOptions: {
                        //         searchEnable: true,
                        //         showClearButton: true,
                        //     },
                        //     validationRules: [{
                        //         type: 'required',
                        //         message: '必填！'
                        //     },
                        //     {
                        //         type: 'stringLength',
                        //         max: 1000,
                        //         min: 0,
                        //         message: '长度超限，最长为1000！'
                        //     },
                        //     ]

                        // },


                        {
                            dataField: 'cHscodeTbDocumeform',
                            label: {
                                text: 'HS编码'
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
                            dataField: 'cStaunitTbDocumeform',
                            label: {
                                text: '法定单位'
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
                            dataField: 'cTaxrateTbDocumeform',
                            label: {
                                text: '退税率'
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
                            dataField: 'cSupervisionTbDocumeform',
                            label: {
                                text: '监管条件'
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
                            colSpan: 4,
                            dataField: 'cDeclarationTbDocumeform',
                            label: {
                                text: '申报要素'
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
                            dataField: 'cName',
                            label: {
                                text: '品名'
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
                            dataField: 'cComtaxnumber',
                            label: {
                                text: '税号'
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
                            dataField: 'cBm',
                            label: {
                                text: 'BM'
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
                            dataField: 'cPpn',
                            label: {
                                text: 'PPN'
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
                            dataField: 'cPph',
                            label: {
                                text: 'PPH'
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
                            dataField: 'cTotaltaxr',
                            label: {
                                text: '合计税率'
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
                            dataField: 'cAgreedtax',
                            label: {
                                text: '协定税率'
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
                            dataField: 'cIndimport',
                            label: {
                                text: '印尼进口端管制条件'
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
                            dataField: 'cWhecoo',
                            label: {
                                text: '是否适合办产地证'
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


                    ]
                    }).dxForm('instance');

                }

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
			name: 'M1S11Q',
			icon: 'plus',
			text: '添加',
			onClick: function () {
				change = '1';
				$('#addmotai').show()
				addIns = $('#addmotai').dxPopup({
					width: 1000,                  //为了规范限制模态框大小//用脚本标识模态框的标题
					height: 450,                   //为了规范限制模态框大小//用脚本标识模态框的标题
				}).dxPopup('instance')
				addIns.option('title', 'CG_XXLY')
				addIns.show();
				M1S11T_addfun();
				M1S11addIns.option('formData', new Object())
			}
		}
	}, 
    ];

    var dataGridS1columns = [{
        dataField: 'id',
        caption: 'id',
        allowEditing: false,
        allowFixing: true
    }, {
        dataField: 'cIdTodaButton',
        caption: '按钮序号',
    },
    {
        dataField: 'dataCodeTodaButton',
        caption: '数据编码',
    },
    {
        dataField: 'butCodeTodaButton',
        caption: '按钮编码',
    },
    ]

    $('#dataGridS1').dxDataGrid({
        deferRendering: false,

        dataSource: tabledataS1,
        editing: {
            mode: 'popup',
            allowUpdating: false
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
        paging: {
            enabled: false
        },
        scrolling: {
            mode: 'virtual'
        },
        selection: {
            mode: 'multiple'
        },
        sorting: {
            mode: "single"
        },
        columnFixing: {
            enabled: true
        },
        columns: dataGridS1columns,

        onToolbarPreparing: function (e) {
            operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));

        },
        onRowClick: function (e) {

            window.open('./3333.html')

            // console.log(e.data)
            console.log('ppp')




            msg = {
                ver: '53cc62f6122a436083ec083eed1dc03d',
                session: '42f5c0d7178148938f4fda29460b815a',
                tag: {},
                data: {},
            };
            msg.data.bdButtonM1s1 = e.data;

            // $.ajax({
            //     url: "",
            //     data: JSON.stringify(msg),
            //     type: "post",
            //     dataType: "json",
            //     contentType: 'application/json',
            //     async: true,
            //     success: function (data) {

            //         // 如果errcode==60就打开新页面
            //         if (data.errcode == 60) {
            //             window.open('http://www.baidu.com')
            //         }
            //     },
            //     error: function () {
            //         DevExpress.ui.notify('网络或服务器故障,请稍后再试', 'error', 3000);
            //         // return
            //     }
            // })
        }

    }).dxDataGrid('instance');

    function M1S11_addfun() {
        M1S11addIns = $('#addForm').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 4,
            items: [{
                dataField: 'cGoodsname',
                label: {
                    text: '品名'
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
                dataField: 'cSpec',
                label: {
                    text: '规格/型号'
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
                colSpan: 2,
                itemType: 'empty',
            },
            {
                dataField: 'cGoodsnum',
                label: {
                    text: '数量'
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
                dataField: 'cUnit',
                label: {
                    text: '成交单位'
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
                dataField: 'cConnum5645',
                label: {
                    text: '商品和服务分类简称'
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
                colSpan: 1,
                itemType: 'empty',
            },
            // {
            //     dataField: 'cConnum66786',
            //     label: {
            //         text: '商品和服务分类简称'
            //     },
            //     editorType: 'dxTextBox',
            //     editorOptions: {
            //         searchEnable: true,
            //         showClearButton: true,
            //     },
            //     validationRules: [{
            //         type: 'required',
            //         message: '必填！'
            //     },
            //     {
            //         type: 'stringLength',
            //         max: 1000,
            //         min: 0,
            //         message: '长度超限，最长为1000！'
            //     },
            //     ]

            // },


            {
                dataField: 'cHscodeTbDocumeform',
                label: {
                    text: 'HS编码'
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
                dataField: 'cStaunitTbDocumeform',
                label: {
                    text: '法定单位'
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
                dataField: 'cTaxrateTbDocumeform',
                label: {
                    text: '退税率'
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
                dataField: 'cSupervisionTbDocumeform',
                label: {
                    text: '监管条件'
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
                colSpan: 4,
                dataField: 'cDeclarationTbDocumeform',
                label: {
                    text: '申报要素'
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
                dataField: 'cName',
                label: {
                    text: '品名'
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
                dataField: 'cComtaxnumber',
                label: {
                    text: '税号'
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
                dataField: 'cBm',
                label: {
                    text: 'BM'
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
                dataField: 'cPpn',
                label: {
                    text: 'PPN'
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
                dataField: 'cPph',
                label: {
                    text: 'PPH'
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
                dataField: 'cTotaltaxr',
                label: {
                    text: '合计税率'
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
                dataField: 'cAgreedtax',
                label: {
                    text: '协定税率'
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
                dataField: 'cIndimport',
                label: {
                    text: '印尼进口端管制条件'
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
                dataField: 'cWhecoo',
                label: {
                    text: '是否适合办产地证'
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


        ]
        }).dxForm('instance');
        bottomForm = $('#bottom_form').dxForm({
            formData: adddata,
            validationGroup: validationGroupName,
            colCount: 4,
            items: [
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
                    dataField: 'cConnum2',
                    label: {
                        text: '内贸金额'
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
                    dataField: 'cConnum3',
                    label: {
                        text: '货币（RMB）'
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
                    colSpan: 1,
                    itemType: 'empty',
                },
                {
                    dataField: 'cConnum4',
                    label: {
                        text: '供应商'
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
                    dataField: 'cConnum5',
                    label: {
                        text: '开票市'
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
                    dataField: 'cConnum6',
                    label: {
                        text: '联系电话'
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
                    dataField: 'cConnum7',
                    label: {
                        text: '重量'
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
                    dataField: 'cConnum8',
                    label: {
                        text: '外贸合同号'
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
                    dataField: 'cConnum9',
                    label: {
                        text: '外贸金额'
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
                    dataField: 'cConnum10',
                    label: {
                        text: '货币（USD）'
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
                    colSpan: 1,
                    itemType: 'empty',
                },
                {
                    dataField: 'cConnum11',
                    label: {
                        text: '出口商'
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
                    dataField: 'cConnum12',
                    label: {
                        text: '收货单位'
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
                    colSpan: 2,
                    itemType: 'empty',
                },
                {
                    dataField: 'cConnum13',
                    label: {
                        text: '内贸采购业务主办'
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

                    dataField: 'cConnum14',
                    label: {
                        text: '外贸业务主办'
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

                    dataField: 'cConnum15',
                    label: {
                        text: '中国出口报关审核人'
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

                    dataField: 'cConnum16',
                    label: {
                        text: '印度尼西亚进口报关审核人'
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

                    dataField: 'cConnum17',
                    label: {
                        text: '数据录用单证制作人签收'
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
            ]
        }).dxForm('instance')
        $('#addsure').dxButton({
            text: '确定',
            icon: 'todo',
            validationGroup: validationGroupName,
            onClick: function (e) {

                let childrenLen = $("#formList").children();

                for (let k = 0; k < childrenLen.length; k++) {

                    childernId = $("#formList").children()[k].id;
                    childrenFormData = $("#" + childernId).dxForm("instance").option('formData');

                    array.push(childrenFormData);

                }
                // let validateResult = e.validationGroup.validate();
                // if (!validateResult.isValid) {
                //     DevExpress.ui.notify('数据不符合规范', 'info', 3000);
                //     return;
                // }



                msg = {
                    ver: '53cc62f6122a436083ec083eed1dc03d',
                    session: '42f5c0d7178148938f4fda29460b815a',
                    tag: {},
                    data: {},
                };
                msg.data.bdButtonM1s1 = array;
                msg.data.aaa = [bottomForm.option('formData')];

                console.log(JSON.stringify(msg))
                //change等于1为添加    
                $.ajax({
                    url: Cake.Piper.getAuthUrl('http://192.168.2.111:9999/tdhc_purchase/BD_BUTTON/M1S11A'),
                    dataType: 'json', //返回格式为json           
                    async: true, //请求是否异步,默认为异步,这也是ajax重要特性          
                    data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
                    type: 'post', //请求方式 get 或者post ,         
                    contentType: 'application/json',
                    success: function (data) {
                        let select = data.msg
                        if (data.errcode == 0) {
                            DevExpress.ui.notify(data.msg, 'success', 3000)
                            var websocketData = ['[{"objId":"BD_BUTTON_websocket","funName":"BD_BUTTON","funType":"M1S11","tbName":"TODA_BUTTON","dataId":"AUD"}]']
                            send(websocketData)
                        } else {
                            DevExpress.ui.notify(data.msg, 'error', 120000)
                            return;
                        }
                        M1S11_serDel();
                        M1S11addIns.option('formData', new Object())
                        addIns.hide()

                    },
                    error: function () {
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
            onClick: function () {


                addIns.hide()
            }
        })
    }
    
    
    
    
    function M1S11T_addfun() {
		M1S11addIns = $('#addForm').dxForm({
			formData: adddata,
			validationGroup: validationGroupName,
			colCount: 1,
			items: [
				{
					dataField: 'cIdTbDocumeform',
					label: {
						text: '主键'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw02TbDocumeform',
					label: {
						text: '扩展字段2'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 4000, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSpecTbDocumeform',
					label: {
						text: '规格型号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cNumTbDocumeform',
					label: {
						text: '数量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cUnitTbDocumeform',
					label: {
						text: '成交单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cStaunitTbDocumeform',
					label: {
						text: '法定单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cHscodeTbDocumeform',
					label: {
						text: 'HS编码'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTypenameTbDocumeform',
					label: {
						text: '商品和服务分类简称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSupervisionTbDocumeform',
					label: {
						text: '监管条件'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTaxrateTbDocumeform',
					label: {
						text: '退税率'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cDeclarationTbDocumeform',
					label: {
						text: '申报要素'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cConnumTbDocumeform',
					label: {
						text: '内贸合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cConmoneyTbDocumeform',
					label: {
						text: '内贸金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cNameTbDocumeform',
					label: {
						text: '品名'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cOutconnumTbDocumeform',
					label: {
						text: '外贸合同号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cOutmoneyTbDocumeform',
					label: {
						text: '外贸金额'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cComtaxnumberTbDocumeform',
					label: {
						text: '税号'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSupplierTbDocumeform',
					label: {
						text: '供应商'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cWeightTbDocumeform',
					label: {
						text: '重量'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cBmTbDocumeform',
					label: {
						text: 'BM'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cInvoicecTbDocumeform',
					label: {
						text: '开票市'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cPpnTbDocumeform',
					label: {
						text: 'PPN'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cComphoneTbDocumeform',
					label: {
						text: '联系电话'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cPphTbDocumeform',
					label: {
						text: 'PPH'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cExporterTbDocumeform',
					label: {
						text: '出口商'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cWhecooTbDocumeform',
					label: {
						text: '是否合适办产地证'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTotaltaxrTbDocumeform',
					label: {
						text: '合计税率'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cShnameTbDocumeform',
					label: {
						text: '收货单位'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cIndimportTbDocumeform',
					label: {
						text: '印尼进口端管制条件'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cAgreedtaxTbDocumeform',
					label: {
						text: '协定税率'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cInpbsTbDocumeform',
					label: {
						text: '内贸采购业务主办'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cOutpbsTbDocumeform',
					label: {
						text: '外贸业务主办'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cChiedeTbDocumeform',
					label: {
						text: '中国出口报关审核人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cIndidaTbDocumeform',
					label: {
						text: '印度尼西亚进口报关审核人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cDataedpTbDocumeform',
					label: {
						text: '数据录用单证制作人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cRemarkTbDocumeform',
					label: {
						text: '备注'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cStateTbDocumeform',
					label: {
						text: '状态'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cDrTbDocumeform',
					label: {
						text: '删除标识'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cTimestampTbDocumeform',
					label: {
						text: '时间戳'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cCreaterTbDocumeform',
					label: {
						text: '创建人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cCreatetimeTbDocumeform',
					label: {
						text: '创建时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cModifierTbDocumeform',
					label: {
						text: '修改人'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cModifytimeTbDocumeform',
					label: {
						text: '修改时间'
					},
					editorType: 'dxDateBox',
					editorOptions: {
						displayFormat: 'yyyy-MM-dd',
						type: 'datetime',
					},
					validationRules: []
				},
				{
					dataField: 'cSw03TbDocumeform',
					label: {
						text: '扩展字段4'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw04TbDocumeform',
					label: {
						text: '扩展字段4'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw05TbDocumeform',
					label: {
						text: '扩展字段5'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw06TbDocumeform',
					label: {
						text: '扩展字段6'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw07TbDocumeform',
					label: {
						text: '扩展字段7'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw08TbDocumeform',
					label: {
						text: '扩展字段8'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw09TbDocumeform',
					label: {
						text: '扩展字段9'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw10TbDocumeform',
					label: {
						text: '扩展字段10'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw11TbDocumeform',
					label: {
						text: '扩展字段11'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw12TbDocumeform',
					label: {
						text: '扩展字段12'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw13TbDocumeform',
					label: {
						text: '扩展字段13'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw14TbDocumeform',
					label: {
						text: '扩展字段14'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw15TbDocumeform',
					label: {
						text: '扩展字段15'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cSw01TbDocumeform',
					label: {
						text: '扩展字段1'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				},
				{
					dataField: 'cGoodsnameTbDocumeform',
					label: {
						text: '物资名称'
					},
					editorOptions: {
						showClearButton: true,
					},
					validationRules: [{
						type: 'stringLength', max: 300, min: 0,
						message: '长度超限，最长为300！'
					},]
				}
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
					data: {},
				};
				msg.data.cgXxlyM1s1 = [M1S11addIns.option('formData')];
				//change等于1为添加         
				M1S11A_serDel_Judgment();
				if (M1S11A_serDel_mark != 'M1S11A_success') {
				} else {
					$.ajax({
						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_XXLY/M1S11A'),
						dataType: 'json',   //返回格式为json           
						async: true,//请求是否异步,默认为异步,这也是ajax重要特性          
						data: JSON.stringify(msg),    //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名         
						type: 'post',   //请求方式 get 或者post ,         
						contentType: 'application/json',
						success: function (data) {
							let select = data.msg
							if (data.errcode == 0) {
								DevExpress.ui.notify(data.msg, 'success', 3000)
								var websocketData = ['[{"objId":"CG_XXLY_websocket","funName":"CG_XXLY","funType":"M1S11","tbName":"TB_DOCUMEFORM","dataId":"AUD"}]']
								send(websocketData)
							} else {
								DevExpress.ui.notify(data.msg, 'error', 120000)
								return;
							}
							M1S11_serDel();

							addIns.hide()

						},
						error: function () {
							DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
							// Cake.Ui.Toast.showError('网络或服务器故障,请稍后再试。')         
							//e.cancel=true;         
						}
					})
				}
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
	
})