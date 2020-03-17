$(function () {
    var continents = [{
        id: 12,
        name: 'a'
    }, {
        id: 2,
        name: 'b'
    }];

    let tabledataS2 = []


    containerForm = $("#register").dxForm({
        // formData: requestData.addGSteel.data,
        width: "100%",
        items: [{
                itemType: "group",
                colCount: 3,
                items: [{
                        dataField: 'b',
                        label: {
                            text: '供方名称'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'i',
                        label: {
                            text: '缩写/编码'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'u',
                        label: {
                            text: '产品类型'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        }
                    },
                    {
                        dataField: 'y',
                        label: {
                            text: '税号'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },

                    },
                    {
                        dataField: 'r',
                        label: {
                            text: '联系人'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'e',
                        label: {
                            text: '职位'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'w',
                        label: {
                            text: '联系方式'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'w',
                        label: {
                            text: 'E-mail'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                ]
            },
            {
                itemType: "group",
                colCount: 1,
                items: [{
                    dataField: 't',
                    editorType: 'dxTextArea',
                    label: {
                        text: '地址'
                    },
                    editorOptions: {
                        width: '500px',
                        height: '50px',
                        showClearButton: true,
                    },
                }, ]

            },
            {
                itemType: "group",
                items: [{
                    template: $("#dataGridS2")
                }]

            },
            {
                itemType: "group",
                items: [{
                    template: $("#kSContainer")
                }]

            },
            {
                itemType: "group",
                colCount: 3,
                items: [{
                        dataField: 'b',
                        label: {
                            text: '评估人员'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'i',
                        label: {
                            text: '评估时间'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'b',
                        label: {
                            text: '评估结果'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    }, {
                        dataField: 'i',
                        label: {
                            text: '修改人'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                    {
                        dataField: 'i',
                        label: {
                            text: '修改时间'
                        },
                        editorOptions: {
                            // height: '40px',
                            showClearButton: true,
                        },
                    },
                ]

            },
        ]
    }).dxForm("instance");

    $("#dataGridS1").dxDataGrid({
        dataSource: continents,
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
        noDataText: '无数据',
        //允许脚本编写     
        height: '100%',
        paging: {
            enabled: false
        },
        selection: {
            mode: 'multiple'
        },

        onRowClick: function () {


            let grid = $('#dataGridS1').dxDataGrid('instance');
            let rowsData = grid.getSelectedRowsData()[0].name;


            containerForm.updateData('b', rowsData)


            // // $('#register').dxForm('instance').getEditor('b').option('value', rowsData)


            // console.log('222')

            containerForm.repaint();
        }
    }).dxDataGrid('instance');

    var dataGridS2columns = [{
            caption: "Kekuatan teknis",
            columns: [{
                caption: "技术力量",
                columns: [{
                        caption: "评级",
                        dataField: "cEvatechnology",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvatechnologydes",
                    }
                ],
            }, ]
        },
        {
            caption: "Kapasitas produksi",
            columns: [{
                caption: "生产能力",
                columns: [{
                        caption: "评级",
                        dataField: "cEvaproduction",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvaproductiondes",
                    }
                ],
            }, ]
        },
        {
            caption: "Kualitas produk",
            columns: [{
                caption: "产品质量",
                columns: [{
                        caption: "评级",
                        dataField: "cEvaquality",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvaqualitydes",
                    }
                ],
            }, ]
        },
        {
            caption: "Harga",
            columns: [{
                caption: "价格",
                columns: [{
                        caption: "评级",
                        dataField: "cEvaprice",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvapricedes",
                    }
                ],
            }, ]
        },
        {
            caption: "Kemampuan jaminan kualitas",
            columns: [{
                caption: "质量保证能力",
                columns: [{
                        caption: "评级",
                        dataField: "cEvaensure",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvaensuredes",
                    }
                ],
            }, ]
        },
        {
            caption: "Servis",
            columns: [{
                caption: "服务",
                columns: [{
                        caption: "评级",
                        dataField: "cEvaservice",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvaservicedes",
                    }
                ],
            }, ]
        },
        {
            caption: "Ketepatan waktu pengiriman",
            columns: [{
                caption: "交货及时性",
                columns: [{
                        caption: "评级",
                        dataField: "cEvatimely",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvatimelydes",
                    }
                ],
            }, ]
        },
        {
            caption: "Kepatuhan dengan sistem keamanan",
            columns: [{
                caption: "遵守安全制度",
                columns: [{
                        caption: "评级",
                        dataField: "cEvasafe",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvasafedes",
                    }
                ],
            }, ]
        },
        {
            caption: "Kepatuhan dengan sistem lingkungan",
            columns: [{
                caption: "遵守环境制度",
                columns: [{
                        caption: "评级",
                        dataField: "cEvaenment",
                        width: 40,
                    },
                    {
                        caption: "描述",
                        dataField: "cEvaenmentdes",
                    }
                ],
            }, ]
        },
    ]

    $('#dataGridS2').dxDataGrid({
        deferRendering: false,
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
        noDataText: '无数据',
        //允许脚本编写     
        height: 200,
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

        columns: dataGridS2columns,
    }).dxDataGrid('instance');



    $("#kSContainer").dxTextArea({
        width: '100%',
        height: 100,
        text: '评估备注（供货历史）：'
    }).dxTextArea('instance')














});