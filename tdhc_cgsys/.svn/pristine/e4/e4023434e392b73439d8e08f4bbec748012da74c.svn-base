
$(function () {

    let tabledataS1 = [];
    let tabledataS2 = [];
    let tabledataS3 = [];
    let tabledataS4 = []




    let operateFormS1buts = [{
            location: "before",
            locateInMenu: 'auto',
            widget: "dxButton",
            options: {
                height: "auto",
                width: "auto",
                name: 'M1S11Q',
                icon: 'search',
                text: '查询',
                onClick: function () {
                    // $('#addmotai').show()
                    // addIns = $('#addmotai').dxPopup({
                    //     width: 1000, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    //     height: 450, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    // }).dxPopup('instance')
                    // addIns.option('title', '供应商档案')
                    // addIns.show();
                    // M1S11_addfun();
                    // M1S11addIns.option('formData', new Object())
                }
            }
        }, {
            location: "before",
            locateInMenu: 'auto',
            widget: "dxButton",
            options: {
                height: "auto",
                width: "auto",
                name: 'M1S11A',
                icon: 'plus',
                text: '新增',
                onClick: function () {
                    // $('#addmotai').show()
                    // addIns = $('#addmotai').dxPopup({
                    //     width: 1000, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    //     height: 450, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    // }).dxPopup('instance')
                    // addIns.option('title', '供应商档案')
                    // addIns.show();
                    // M1S11_addfun();
                    // M1S11addIns.option('formData', new Object())
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
                name: 'M1S11U',
                icon: 'save',
                text: '修改',
                onClick: function () {
                    // $('#addmotai').show()
                    // addIns = $('#addmotai').dxPopup({
                    //     width: 1000, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    //     height: 450, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    // }).dxPopup('instance')
                    // addIns.option('title', '供应商档案')
                    // addIns.show();
                    // M1S11_addfun();
                    // M1S11addIns.option('formData', new Object())
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
                name: 'M1S11D',
                icon: 'remove',
                text: '删除',
                onClick: function () {
                    // $('#addmotai').show()
                    // addIns = $('#addmotai').dxPopup({
                    //     width: 1000, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    //     height: 450, // 为了规范限制模态框大小//用脚本标识模态框的标题
                    // }).dxPopup('instance')
                    // addIns.option('title', '供应商档案')
                    // addIns.show();
                    // M1S11_addfun();
                    // M1S11addIns.option('formData', new Object())
                }
            }
        },
    ];


    var dataGridS1columns = [

        {
            dataField: 'htTpIwipHtrmt',
            caption: '发货单位全称',
        },
        {
            dataField: 'htSpIwipHtrmt',
            caption: '发货人及联系方式 ',
        },
        {
            dataField: 'htCdIwipHtrmt',
            caption: '合同编号',
        },

        {
            dataField: 'htNoIwipHtrmt',
            caption: '加盖公章或仓库章',
        },

        {
            dataField: 'htPhoneIwipHtrmt',
            caption: '发货日期',
        },
        {
            dataField: 'htRfaIwipHtrmt',
            caption: '收货单位全称',
        },
        {
            dataField: 'htShztIwipHtrmt',
            caption: '收货人及联系方式',
        },
        {
            dataField: 'htFpztIwipHtrmt',
            caption: '收货地址',

        },
        {
            dataField: 'htZyztIwipHtrmt',
            caption: '货物名称、型号、单位、数量',

        },

    ]


    $("#dataGridS1").dxDataGrid({
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
        noDataText: '无数据',
        //允许脚本编写     
        height: '100%',
        paging: {
            enabled: false
        },
        selection: {
            mode: 'multiple'
        },
        columns: dataGridS1columns,
        onToolbarPreparing: function (e) {
            operateFormS1buts.forEach(item => e.toolbarOptions.items.push(item));
        },
        onRowClick: function () {


            // let grid = $('#dataGridS1').dxDataGrid('instance');
            // let rowsData = grid.getSelectedRowsData()[0].name;


            // containerForm.updateData('b', rowsData)


            // // $('#register').dxForm('instance').getEditor('b').option('value', rowsData)


            // console.log('222')

            // containerForm.repaint();
        }
    }).dxDataGrid('instance');

    var dataGridS2columns = [

        {
            dataField: 'htTpIwipHtrmt',
            caption: '序号',
        },
        {
            dataField: 'htSpIwipHtrmt',
            caption: '货物名称',
        },
        {
            dataField: 'htCdIwipHtrmt',
            caption: '型号',
        },

        {
            dataField: 'htNoIwipHtrmt',
            caption: '单位',
        },
        {
            dataField: 'htPhoneIwipHtrmt',
            caption: '数量',
        },
        {
            dataField: 'htPhoneIwipHtrmt',
            caption: '备注',
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

        columns: dataGridS2columns,
    }).dxDataGrid('instance');


    var dataGridS3columns = [{
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

    $('#dataGridS3').dxDataGrid({
        deferRendering: false,
        dataSource: tabledataS3,
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
        height: 180,
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

        columns: dataGridS3columns,
    }).dxDataGrid('instance');



    var dataGridS4columns = [{
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

});