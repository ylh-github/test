$(function(){
   $('#dataGridS1').dxDataGrid({  
       height:'100%',
       width:'100%',
    })
     $('#dataGridS2').dxDataGrid({  
          height:'100%',
       width:'100%',
    })  
    $('#dataGridS3').dxDataGrid({  
          height:'100%',
       width:'100%',
    }) 
    $('#dataGridS4').dxDataGrid({  
         height:'100%',
       width:'100%',
    }) 
    $('#operateFormM1S1').dxForm({
        colCount: 16,
    })
    $('#operateFormS1S3').dxForm({
        colCount: 16,
    })  
    $('#operateFormS3S4').dxForm({
        colCount: 16,
    })






// $('#operateFormM1S1').dxForm("instance").option('items').push({
//     //name: 'M1S11Q',
//     itemType: 'button',
//     buttonOptions: {
//         icon: 'search',
//         text: '导入',
//         onClick: function() {
//             // M1S11_serDel();
//             importPopup.show();

//         }
//     }
//   });
  
//   $('#operateFormM1S1').dxForm("instance").repaint();


    let tabledataS3 = []
    let tabledataS4 = []

//     var tabs = [{
//     title: '质保台账',
//         html:'<p style="margin:5px 0;text-align:center;color:#007ACC;font-weight:bold">国际成分</p><div id="box_left_" style="width:100%;height:258px;background:#fff"></div>'
//     }, {
//         title: '质保进程',
//         html:'<p style="margin:5px 0;text-align:center;color:#007ACC;font-weight:bold">内控成分</p><div id="dataGridS4" style="width:100%;height:258px;background:#fff"></div>'
//     },
//     // {
//     //     title: 'haha',
//     //     html:'<p style="margin:5px 0;text-align:center;color:#007ACC;font-weight:bold">放行成分</p><div id="subtab2" style="width:100%;height:258px;background:#fff"></div>'
//     // },
//     // {
//     //     title: '特殊',
//     //     html:'<p style="margin:5px 0;text-align:center;color:#007ACC;font-weight:bold">特殊成分</p><div id="subtab3" style="width:100%;height:258px;background:#fff"></div>'
//     // },{
//     //     title: '制造规范',
//     //     html:'<p style="margin:5px 0;text-align:center;color:#007ACC;font-weight:bold">制造规范</p><div id="subtab4" style="width:100%;height:258px;background:#fff"></div>'
//     // }
//    ];

//     $("#tabPanel").dxTabPanel({
//         items:tabs,
//         deferRendering:false,
//     });

// $('#dataGridS3').dxDataGrid({     
//         dataSource: tabledataS3,                             
//     editing: {     
//             mode: 'popup',     
//             //allowUpdating: false     
//                 },     
//             // keyExpr: 'ID',     
//             columnAutoWidth: true,     
//             showBorders: true,     
//             allowColumnResizing: true,     
//             showColumnLines: true,     
//             showRowLines: true,     
//             onCellHoverChanged: '#888',     
//             hoverStateEnabled: true,     
//             noDataText: '',     
//             //允许脚本编写     
//             // height:450,                      
//             paging: {        
//                 enabled: false     
//                 },     
//             scrolling: {     
//                 mode: 'virtual'     
//                     },     
//             selection: {     
//                 mode: 'multiple'     
//                     },     
//             columns: [     
//                 { 
//                     dataField: 'cConnum',
//                     caption: '合同号',
//                 },
//                 { 
//                     dataField: 'cSupplier',
//                     caption: '供应商',
//                 },
//                 { 
//                     dataField: 'cConline',
//                     caption: '合同行号',
//                 },
//                 { 
//                     dataField: 'cCludetime',
//                     caption: '签订日期',
//                 },
//                 { 
//                     dataField: 'cForinland',
//                     caption: '传给国外时间',
//                 },
//                 { 
//                     dataField: 'cArrgoodstime',
//                     caption: '到货时间',
//                 },
//                 { 
//                     dataField: 'cForoutland',
//                     caption: '国外回传时间',
//                 },
//                 { 
//                     dataField: 'cGoodsname',
//                     caption: '产品名称',
//                 },
//                 { 
//                     dataField: 'cState',
//                     caption: '状态',
//                 },
//                 { 
//                     dataField: 'cSpcclassify',
//                     caption: '具体分类',
//                 },
//                 { 
//                     dataField: 'cSignstep',
//                     caption: '签字步骤',
//                 },
//                 { 
//                     dataField: 'cRemark',
//                     caption: '备注',
//                 },
//                 { 
//                     dataField: 'cQuacheck',
//                     caption: '质保验收',
//                 },
//                 { 
//                     dataField: 'cProclassify',
//                     caption: '项目分类',
//                 },
//                 { 
//                     dataField: 'cPayway',
//                     caption: '付款方式',
//                 },
//                 { 
//                     dataField: 'cConexemoney',
//                     caption: '合同执行金额',
//                 },
//                 { 
//                     dataField: 'cConmoney',
//                     caption: '合同金额',
//                 },
//                 { 
//                     dataField: 'cCreater',
//                     caption: '创建人',
//                 },
//                 { 
//                     dataField: 'cCreatedate',
//                     caption: '创建时间',
//                 },
//                 { 
//                     dataField: 'cModifier',
//                     caption: '修改人',
//                 },
//                 { 
//                     dataField: 'cModifydate',
//                     caption: '修改日期',
//                 },
//             ]     
//         });     
//     $('#dataGridS4').dxDataGrid({     
//         dataSource: tabledataS4,                             
//     editing: {     
//             mode: 'popup',     
//             //allowUpdating: false     
//                 },     
//             // keyExpr: 'ID',     
//             columnAutoWidth: true,     
//             showBorders: true,     
//             allowColumnResizing: true,     
//             showColumnLines: true,     
//             showRowLines: true,     
//             onCellHoverChanged: '#888',     
//             hoverStateEnabled: true,     
//             noDataText: '',     
//             //允许脚本编写     
//             // height:450,                      
//             paging: {        
//                 enabled: false     
//                 },     
//             scrolling: {     
//                 mode: 'virtual'     
//                     },     
//             selection: {     
//                 mode: 'multiple'     
//                     },     
//             columns: [     
//                 { 
//                     dataField: 'cCoutime',
//                     caption: '进程日期',
//                 },
//                 { 
//                     dataField: 'cCreatetime',
//                     caption: '创建时间',
//                 },
//                 { 
//                     dataField: 'cModifier',
//                     caption: '修改人',
//                 },
//                 { 
//                     dataField: 'cModifytime',
//                     caption: '修改时间',
//                 },
//                 { 
//                     dataField: 'cProcer',
//                     caption: '处理人',
//                 },
//                 { 
//                     dataField: 'cCreater',
//                     caption: '创建人',
//                 },
//                 { 
//                     dataField: 'cProcresult',
//                     caption: '处理结果',
//                 },
//                 { 
//                     dataField: 'cProctime',
//                     caption: '处理时间',
//                 },
//                 { 
//                     dataField: 'cRemark',
//                     caption: '备注',
//                 },
//                 { 
//                     dataField: 'cState',
//                     caption: '状态',
//                 },
//                 { 
//                     dataField: 'cProcmode',
//                     caption: '处理方式',
//                 },
//             ]     
//         });     



})