$(function(){
    $('#dataGridS1').dxDataGrid({  
       height:250,
    })
    $('#dataGridS2').dxDataGrid({  
       height:250,
    })
    $('#operateFormM1S1').dxForm({
        colCount: 16,
    })
    $('#operateFormM2S2').dxForm({
        colCount: 16,
    })



  let addGang =[]
  let addLei=[]
  let yongtu=[]
  let pinzhong =[]
  let pinming  =[]
//添加审核按钮
  $('#operateFormM1S1').dxForm("instance").option('items').push({
    //name: 'M1S11Q',
    itemType: 'button',
    buttonOptions: {
        icon: 'search',
        text: '转合同',
        onClick: function() {
            // M1S11_serDel();
            noticeEditPopup.show();

        }
    }
  });
  
  $('#operateFormM1S1').dxForm("instance").repaint();




// 添加模态框
  noticeEditPopup = $("#notice-edit-popup-container").dxPopup({
    deferRendering: false,
    width: function () {
      return window.innerWidth - 50;
    },
    height: function () {
      return window.innerHeight - 50;
    },
  }).dxPopup("instance");
  // 添加模态框放置的内容
  noticeEditForm = $("#notice-edit-form-container").dxForm({

    items: [{
      itemType: "group",
      colCount: 3,
      items: [
        {
          dataField: "cContractNo",
          label: {
            text: "合同号"
          },
          editorType: "dxTextBox",
          editorOptions: {
            placeholder: "",
            showClearButton: true,
            width: '100%'
          },
          // validationRules: [{
          //  type: 'required',
          //  message: "必填"
          // }]
        },
        {
          dataField: "cStlGrd",
          label: {
            text: "钢种"
          },
          editorType: "dxTextBox",
          editorOptions: {
            // dataSource: gangzhong,
            // displayExpr: "cSubitemdes",
            // valueExpr: "cSubitemid",
            placeholder: "",
            showClearButton: true,
            width: '100%',
            // dropDownButtonTemplate:function () {
            //  return '···';
            // },
            onFocusIn: function (e) {
              // 新建对象，相当于赋空值
              // addEditForm.option("formData", new Object);
                
                addEditPopup.show();
              // let newgrid = $("#addGangGrid").dxDataGrid("instance")
              // addGang.splice(0, addGang.length);
              // newgrid.refresh();

              // let grid = $("#this-grid-container").dxDataGrid("instance")
              // let rowsData = grid.getSelectedRowsData()[0]

              // currentData = rowsData

              // if (currentAction == action.modify) {

              //   if (currentData.cAuditState == "" || currentData.cAuditState == null || currentData.cAuditState == undefined) {
              //     addEditPopup.option("title", "添加--钢种");
              //     addEditPopup.show();
              //   } else {
              //     addEditPopup.option("title", "添加--钢种");
              //     addEditPopup.hide();
              //   }

              // } else {
              //   addEditPopup.option("title", "添加--钢种");
              //   addEditPopup.show();
              // }
              // addG()
            }
          },
          validationRules: [{
            type: 'required',
            message: "必填"
          }],
        },
        {
          dataField: "cUse",
          label: {
            text: "用途"
          },
          editorType: "dxSelectBox",
          editorOptions: {
            dataSource: yongtu,
            displayExpr: "cSubitemdes",
            valueExpr: "cSubitemid",
            placeholder: "-请选择-",
            showClearButton: true,
            width: '100%',
            searchEnabled: true
          },
          validationRules: [{
            type: 'required',
            message: "必填"
          }]
        },
        {
          dataField: "cProdKind",
          label: {
            text: "品种"
          },
          editorType: "dxSelectBox",
          editorOptions: {
            dataSource: pinzhong,
            displayExpr: "cSubitemdes",
            valueExpr: "cSubitemid",
            placeholder: "",
            showClearButton: true,
            width: '100%',
            readOnly: true,
            dropDownButtonTemplate: '',
            searchEnabled: true
          },

          validationRules: [{
            type: 'required',
            message: "必填"
          }]
        },
        {
          dataField: "cProdName",
          label: {
            text: "品名"
          },
          editorType: "dxSelectBox",
          editorOptions: {
            dataSource: pinming,
            displayExpr: "cSubitemdes",
            valueExpr: "cSubitemid",
            placeholder: "",
            showClearButton: true,
            width: '100%',
            readOnly: true,
            dropDownButtonTemplate: '',
            searchEnabled: true
          },
          validationRules: [{
            type: 'required',
            message: "必填"
          }]
        },
        {
          dataField: "cSpec",
          label: {
            text: "规格"
          },
          editorType: "dxTextBox",
          editorOptions: {
            placeholder: "",
            showClearButton: true,
            width: '100%'
          },
          validationRules: [{
            type: 'required',
            message: "必填"
          }]
        },
        {
          dataField: "cBrand",
          label: {
            text: "牌号"
          },
          editorType: "dxTextBox",
          editorOptions: {
            placeholder: "",
            showClearButton: true,
            width: '100%'
          },
          // validationRules: [{
          //  type: 'required',
          //  message: "必填"
          // }]
        },
         {
      itemType: "group",
      colCount: 6,
      items: [
        {
          colSpan: 2,
          itemType: "empty",
        },
        {
          itemType: "button",
          buttonOptions: {
            icon: "todo",
            text: '确定',
            onClick: function () {

              if (!noticeEditForm.validate().isValid) {
                
                return;
              };

              if (currentAction == action.add) {
                // 如果没值的时候返回到原有的formData
                add(noticeEditForm.option("formData"))
                // noticeEditPopup.hide();
              } else if (currentAction == action.modify) {
                updata(noticeEditForm.option("formData"))
                noticeEditPopup.hide();
              } else if (currentAction == action.append) {

                zhuijia(noticeEditForm.option("formData"))
                noticeEditPopup.hide();
              }

              // 新建对象，相当于赋空值
              // noticeEditForm.option("formData", new Object);

            }
          }
        }, {
          itemType: "button",
          buttonOptions: {
            icon: "remove",
            text: '取消',
            onClick: function () {
              noticeEditPopup.hide();
            }
          }
        },
      ]
    }
      ]
    }]


  }).dxForm("instance");   

    //--------------------// 添加--钢种--模态框
  
  addEditPopup = $("#add-edit-popup-container").dxPopup({
    deferRendering: false,
    height: 600,
  }).dxPopup("instance");
    // 添加--钢种--模态框放置的内容
  addEditForm = $("#add-edit-form-container").dxForm({
    formData: msg.data,
    width: "100%",
    items: [{
      itemType: "group",
      colCount: 3,
      items: [
        {
          dataField: "cStlCla",
          label: {
            text: "钢种分类"
          },
          editorType: "dxSelectBox",
          editorOptions: {
            dataSource: addLei,
            displayExpr: "cSubitemdes",//显示表达式
            valueExpr: "cSubitemid",//值的表达式
            placeholder: "-请选择-",
            showClearButton: true,
            width: "100%",
            searchEnabled: true
          }
        },
        {
          dataField: "cStlGrd",
          label: {
            text: "钢种"
          },
          editorType: "dxTextBox",
          editorOptions: {
            width: "100%",
            placeholder: "",
            showClearButton: true
          }
        }
      ]
    }, {
      itemType: "group",
      colCount: 6,
      items: [
        {
          itemType: "group",
          colCount: 6,
          itemType: "button",
          buttonOptions: {
            icon: "search",
            text: '查询',
            onClick: function () {
              // 重赋值
              msg = { 
                ver: '53cc62f6122a436083ec083eed1dc03d', 
                session: '42f5c0d7178148938f4fda29460b815a', 
                tag: {}, 
                data: { 
                    } 
              }; 
              msg.data = addEditForm.option("formData")

              $.ajax({
                url: Cake.Piper.getAuthUrl(requestUrls.addGSteel),
                dataType: "json",   //返回格式为json  
                async: true,//请求是否异步，默认为异步，这也是ajax重要特性  
                data: JSON.stringify(msg),    //下拉框的参数值  requestData.getSteel 上面有定义
                type: "post",   //请求方式 get 或者post ,
                contentType: "application/json",//内容类型，一般是指网页中存在的Content-Type，用于定义网络文件的类型和网页的编码，决定浏览器将以什么形式、什么编码读取这个文件，这就是经常看到一些Asp网页点击的结果却是下载到的一个文件或一张图片的原因。
                success: function (result) {


                  // 表格数据
                  var tab = result.data
                  // 清空数据
                  addGang.splice(0, addGang.length);

                  // 将返回的数据推入到清空的数组中
                  tab.forEach(item => {
                    addGang.push(item);
                  });

                  // 将推入进的数据进行刷新
                  let newgrid = $("#addGangGrid").dxDataGrid("instance");
                  newgrid.refresh();

                  // noticeEditForm.getEditor('cProdKind').option("dataSource", pinzhong)
                },
              })
            }
          }
        }, {
          itemType: "group",
          colCount: 6,
          items: [
            {
              colSpan: 2,
              itemType: "empty",
            },
            {
              itemType: "button",
              buttonOptions: {
                icon: "todo",
                text: '确定',
                onClick: function () {

                  let grid = $("#addGangGrid").dxDataGrid("instance");

                  let rowsData = grid.getSelectedRowsData()[0];

                  // if (rowsData.length < 1) {
                  //   cake.Ui.toast.show("请至少选择一条数据", "warning")
                  //   return
                  // }

                  // // 带出钢种到添加弹框
                  // noticeEditForm.updateData("cStlGrd", rowsData.cStlGrd)
                  // // 带出品名到添加弹框
                  // noticeEditForm.updateData("cProdName", rowsData.cProdName)
                  // // 带出品种到添加弹框
                  // noticeEditForm.updateData("cProdKind", rowsData.cProdKind)
                  // // 带出牌号到添加弹框
                  // noticeEditForm.updateData("cBrand", rowsData.cBoardno)
                  // // 带出执行标准到添加弹框
                  // noticeEditForm.updateData("cStdspec", rowsData.cProductno)

                  // getmidu(rowsData.cStlGrd)
                  // if (!addEditPopup.validate().isValid) {
                  //  return;
                  // };

                  addEditPopup.hide();

                }
              }
            }, {
              itemType: "button",
              buttonOptions: {
                icon: "remove",
                text: '取消',
                onClick: function () {
                  addEditPopup.hide();
                }
              }
            }
          ]
        },
      ]
    }, {
      itemType: "group",
      items: [{
        template: $("#addGangGrid")
      }]
    },]
  })  
  $("#addGangGrid").dxDataGrid({
    // 要将DataGrid绑定到JSON格式的数据，请将数据的URL分配给dataSource选项。
    dataSource: "data/customers.json",
    dataSource: addGang,
    columnAutoWidth: true,
    showBorders: true,
    allowColumnResizing: true,
    showColumnLines: true,
    showRowLines: true,
    onCellHoverChanged: '#888',
    hoverStateEnabled: true,
    noDataText: '',
    width: 1160,
    height: 350,
    paging: {
      enabled: false
    },
    editing: {
      mode: "batch",
      allowUpdating: false
    },
    selection: {
      mode: "multiple"
    },
    loadPanel: {
      enabled: true,
      text: '请稍等片刻...'
    },
    columns: [
      // {
      //     dataField: "cId",
      //     caption: "主键"
      // },
      {
        dataField: "cStlCode",
        caption: "钢种编码",
        validationRules: [{
          type: "required",
          message: "钢种编码不能为空。"
        }]
      },
      {
        dataField: "cProdKind",
        caption: "品种",
        calculateDisplayValue: function (e) {
          let matchedItem = dataZong.cStlProdKind.find(item => item.cSubitemid == e.cProdKind);

          if (matchedItem == null || matchedItem == undefined) {
            return "";
          } else {
            return matchedItem.cSubitemdes;
          }

        },
        validationRules: [{
          type: "required",
          message: "品种不能为空。"
        }]
      },
      {
        dataField: "cProdName",
        caption: "品名",
        calculateDisplayValue: function (e) {
          let matchedItem = dataZong.cStlProdName.find(item => item.cSubitemid == e.cProdName);

          if (matchedItem == null || matchedItem == undefined) {
            return "";
          } else {
            return matchedItem.cSubitemdes;
          }

        },
        validationRules: [{
          type: "required",
          message: "品名不能为空。"
        }]
      },
      {
        dataField: "cStlGrd",
        caption: "钢种",
        validationRules: [{
          type: "required",
          message: "钢种不能为空。"
        }]
      },
      {
        dataField: "cStlCla",
        caption: "钢种分类",
        calculateDisplayValue: function (e) {
          let matchedItem = dataZong.cStlGroup.find(item => item.cSubitemid == e.cStlCla);

          if (matchedItem == null || matchedItem == undefined) {
            return "";
          } else {
            return matchedItem.cSubitemdes;
          }

        },
        validationRules: [{
          type: "required",
          message: "检钢种分类不能为空。"
        }]
      },
      {
        dataField: "cProductno",
        caption: "执行标准",
        calculateDisplayValue: function (e) {
          let matchedItem = dataZong.cProducton.find(item => item.cSubitemid == e.cProductno);

          if (matchedItem == null || matchedItem == undefined) {
            return "";
          } else {
            return matchedItem.cSubitemdes;
          }

        },
        validationRules: [{
          type: "required",
          message: "执行标准不能为空。"
        }]
      },
      {
        dataField: "cBoardno",
        caption: "牌号2",
        validationRules: [{
          type: "required",
          message: "牌号不能为空。"
        }]
      },
      // {
      //     dataField: "cDr",
      //     caption: "删除状态"
      // },
      {
        dataField: "cCreater",
        caption: "创建人",
        allowEditing: false

      },
      {
        dataField: "cCreatetime",
        caption: "创建时间",
        allowEditing: false
      },
      {
        dataField: "cModifier",
        caption: "修改人",
        allowEditing: false
      },
      {
        dataField: "cModifytime",
        caption: "修改时间",
        allowEditing: false
      },

    ],


  })

})