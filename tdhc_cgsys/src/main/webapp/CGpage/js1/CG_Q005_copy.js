$(function() {
 
    $('#operateFormM1S1').dxForm({
        colCount: 16,
    })
    $('#operateFormS1S2').dxForm({
        colCount: 16,
    })
   
//  $('#operateFormM1S1').dxForm("instance").option('items').push({
//    //name: 'M1S11Q',
//    itemType: 'button',
//    buttonOptions: 
//    	{
//	        icon: 'search',
//	        text: '导入',
//	        onClick: function() {
//	            // M1S11_serDel();
//	            importPopup.show();
//	
//	        }
//    	}
//  });
    $('#operateFormS1S2').dxForm("instance").option('items').push({
    	//name: 'M1S11Q',
    	itemType: 'button',
    	buttonOptions: 
    	{
    		icon: 'search',
    		text: '分配导入',
    		onClick: function() {
    			// M1S11_serDel();
    			importPopup2.show();
    			
    		}
    	}
    });
  
  $('#operateFormM1S1').dxForm("instance").repaint();
    var importPopup = $('#import-content').dxPopup({
        deferRendering: false,
        height: 200,
        width: 600,
    }).dxPopup('instance');
    $('#import_btn').dxForm({
        width: "100%",
        items: [{
            itemType: "group",
            colCount: 6,
            items: [{
                    colSpan: 4,
                    itemType: "empty"
                },
                {
                    itemType: "button",
                    buttonOptions: {
                        icon: "todo",
                        text: "确定",
                        onClick: function() {
                            DevExpress.ui.notify('正在导入，请稍等。。。', "success", 3000);
                            //console.log.log(localStorage.getItem('updata'));
                            $.ajax({
                                url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/addExcel'),
                                type: 'POST',
                                dataType: 'json',
                                contentType: "application/json; charset=utf-8",
                                data: localStorage.getItem('updata'),
                                success: function(data) {
                                    importPopup.hide();
                                    $("#upInput").val("");
                                    DevExpress.ui.notify(data.msg, "success", 5000);
                                    localStorage.clear('updata');
                                },
                                error: function (err) {
                                    DevExpress.ui.notify('导入失败', "error", 3000);
                                    $("#upInput").val("");
                                    localStorage.clear('updata');
                                }
                            })
                        }
                    }
                },
                {
                    itemType: "button",
                    buttonOptions: {
                        icon: "close",
                        text: "取消",
                        onClick: function() {
                            importPopup.hide();
                        }
                    }
                },
            ]
        }, ]
    });
	$('#operateFormS1S2').dxForm("instance").repaint();
    var importPopup2 = $('#import-content2').dxPopup({
        deferRendering: false,
        height: 200,
        width: 600,
    }).dxPopup('instance');
    $('#import_btn2').dxForm({
    	width: "100%",
    	items: [{
    		itemType: "group",
    		colCount: 6,
    		items: [{
    			colSpan: 4,
    			itemType: "empty"
    		},
    		{
    			itemType: "button",
    			buttonOptions: {
    				icon: "todo",
    				text: "确定",
    				onClick: function() {
    					DevExpress.ui.notify('正在导入，请稍等。。。', "success", 3000);
    					//console.log.log(localStorage.getItem('updata2'));
    					$.ajax({
    						url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_Q001/addExcel2'),
    						type: 'POST',
    						dataType: 'json',
    						contentType: "application/json; charset=utf-8",
    						data: localStorage.getItem('updata2'),
    						success: function(data) {
    							if (data.errcode == 0) {
	    							importPopup2.hide();
	    							$("#upInput2").val("");
	    							DevExpress.ui.notify(data.msg, "success", 5000);
	    							localStorage.clear('updata2');
    							}else{
    								DevExpress.ui.notify(data.msg, "warning", 5000);
    							}
    						},
    						error: function (err) {
    							DevExpress.ui.notify('导入失败', "error", 3000);
    							$("#upInput2").val("");
    							localStorage.clear('updata2');
    						}
    					})
    				}
    			}
    		},
    		{
    			itemType: "button",
    			buttonOptions: {
    				icon: "close",
    				text: "取消",
    				onClick: function() {
    					importPopup2.hide();
    				}
    			}
    		},
    		]
    	}, ]
    });
})    
function importf(obj) {
    /*
    FileReader共有4种读取方法：
    1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
    2.readAsBinaryString(file)：将文件读取为二进制字符串
    3.readAsDataURL(file)：将文件读取为Data URL
    4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
    */
    if (!obj.files) {
        return;
    }
    var wb; //读取完成的数据
    var rABS = false; //是否将文件读取为二进制字符串
    var updata = {}; //储存读取出来的数据
    function fixdata(data) { //文件流转BinaryString
        var o = "",
            l = 0,
            w = 10240;
        for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }
    var f = obj.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        if (rABS) {
            wb = XLSX.read(btoa(fixdata(data)), { //手动转化
                type: 'base64'
            });
        } else {
            wb = XLSX.read(data, {
                type: 'binary'
            });
        }
        //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
        //wb.Sheets[Sheet名]获取第一个Sheet的数据
        var tables = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        // var tables1 = JSON.stringify(tables.slice(0, 1));
        // var tables2 = JSON.stringify(tables.slice(2));
        // // 拼接两段数据
//        tables = JSON.stringify(tables);
//        tables = tables.replace(/存档号/g,'cNo');
//        tables = tables.replace(/请购日期/g,'cTimeapply');
//        tables = tables.replace(/请购单号/g,'cOrdernum');
//        tables = tables.replace(/请购项目/g,'cComname');
//        tables = tables.replace(/请购部门/g,'cDeptapply');
//        tables = tables.replace(/请购人/g,'cManapply');
//        tables = tables.replace(/货物名称/g,'cGoodsname');
//        tables = tables.replace(/规格型号/g,'cSpec');
//        tables = tables.replace(/单位/g,'cUnit');
//        tables = tables.replace(/请购数量/g,'cNum');
//        tables = tables.replace(/采购类型/g,'cMustneed');
//        tables = tables.replace(/用途说明/g,'cSw02');
//        tables = tables.replace(/需求时间/g,'cArrtime');
//        tables = tables.replace(/备注/g,'cRemark');
//        tables = tables.replace(/采购员/g,'cManor');
        tables = tables.replace(/存档号/g,'cNo');
		tables = tables.replace(/请购日期/g,'cTimeapply');
		tables = tables.replace(/请购单号/g,'cOrdernum');
		tables = tables.replace(/请购项目/g,'cComname');
		tables = tables.replace(/请购部门/g,'cDeptapply');
		tables = tables.replace(/请购人/g,'cManapply');
		tables = tables.replace(/货物名称/g,'cGoodsname');
		tables = tables.replace(/规格型号/g,'cSpec');
		tables = tables.replace(/单位/g,'cUnit');
		tables = tables.replace(/请购数量/g,'cNum');
		tables = tables.replace(/采购类型/g,'cMustneed');
		tables = tables.replace(/用途说明/g,'cSw02');
		tables = tables.replace(/需求时间/g,'cArrtime');
		tables = tables.replace(/备注/g,'cRemark');
		tables = tables.replace(/建设\/生产/g,'cSw09');
		tables = tables.replace(/类别明细/g,'cSw08');
		tables = tables.replace(/特批类型/g,'cTypename');
        tables = tables.replace(/采购员/g,'cManor');
        updata.data = {
        		cNo:null,//存档号
        		cTimeapply:null,//请购日期
        		cOrdernum:null,//请购单号
        		cComname:null,//请购项目
        		cDeptapply:null,//请购部门
        		cManapply:null,//请购人
        		cGoodsname:null,//货物名称
        		cSpec:null,//规格型号
        		cUnit:null,//单位
        		cNum:null,//请购数量
        		cMustneed:null,//采购类型
        		cSw02:null,//用途说明
        		cArrtime:null,//需求时间
        		cRemark:null,//备注
//        		cManor:null
        };
        updata.data.excel = {}
        updata.data.excel = JSON.parse(tables);
        //console.log.log(updata);
        localStorage.setItem('updata', JSON.stringify(updata));
    };
    if (rABS) {
        reader.readAsArrayBuffer(f);
    } else {
        reader.readAsBinaryString(f);
    }
}
function importf2(obj) {
	/*
    FileReader共有4种读取方法：
    1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
    2.readAsBinaryString(file)：将文件读取为二进制字符串
    3.readAsDataURL(file)：将文件读取为Data URL
    4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
	 */
	if (!obj.files) {
		return;
	}
	var wb; //读取完成的数据
	var rABS = false; //是否将文件读取为二进制字符串
	var updata2 = {}; //储存读取出来的数据
	function fixdata(data) { //文件流转BinaryString
		var o = "",
		l = 0,
		w = 10240;
		for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
		o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
		return o;
	}
	var f = obj.files[0];
	var reader = new FileReader();
	reader.onload = function(e) {
		var data = e.target.result;
		if (rABS) {
			wb = XLSX.read(btoa(fixdata(data)), { //手动转化
				type: 'base64'
			});
		} else {
			wb = XLSX.read(data, {
				type: 'binary'
			});
		}
		//wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
		//wb.Sheets[Sheet名]获取第一个Sheet的数据
		var tables = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
		// var tables1 = JSON.stringify(tables.slice(0, 1));
		// var tables2 = JSON.stringify(tables.slice(2));
		// // 替换公司信息字段
		// tables1 = tables1.replace('公司名称', 'cComname');
		// tables1 = tables1.replace('单据编号', 'cOrdernum');
		// tables1 = tables1.replace('申请部门', 'cDeptapply');
		// tables1 = tables1.replace('申请人', 'cManapply');
		// tables1 = tables1.replace('申请日期', 'cTimeapply');
		// tables1 = tables1.replace('收单日期', 'cTimetake');
		// tables1 = tables1.replace('备注', 'cSwo1');
		// tables1 = tables1.replace('备注', 'cSwo2');
		// // 替换采购单信息字段
		// tables2 = tables2.replace(/公司名称/g, 'cNo');
		// tables2 = tables2.replace(/申请部门/g, 'cTypename');
		// tables2 = tables2.replace(/单据编号/g, 'cMustneed');
		// tables2 = tables2.replace(/申请人/g, 'cGoodsname');
		// tables2 = tables2.replace(/申请日期/g, 'cSpec');
		// tables2 = tables2.replace(/收单日期/g, 'cUnit');
		// tables2 = tables2.replace(/备注/g, 'cNum');
		// tables2 = tables2.replace(/__EMPTY/g, 'cNum');
		// tables2 = tables2.replace(/cNum_1/g, 'cArrtime');
		// // 拼接两段数据
		tables = JSON.stringify(tables);
		tables = tables.replace(/存档号/g,'cNo');
		tables = tables.replace(/请购日期/g,'cTimeapply');
		tables = tables.replace(/请购单号/g,'cOrdernum');
		tables = tables.replace(/请购项目/g,'cComname');
		tables = tables.replace(/请购部门/g,'cDeptapply');
		tables = tables.replace(/请购人/g,'cManapply');
		tables = tables.replace(/货物名称/g,'cGoodsname');
		tables = tables.replace(/规格型号/g,'cSpec');
		tables = tables.replace(/单位/g,'cUnit');
		tables = tables.replace(/请购数量/g,'cNum');
		tables = tables.replace(/采购类型/g,'cMustneed');
		tables = tables.replace(/用途说明/g,'cSw02');
		tables = tables.replace(/需求时间/g,'cArrtime');
		tables = tables.replace(/备注/g,'cRemark');
		tables = tables.replace(/建设\/生产/g,'cSw09');
		tables = tables.replace(/类别明细/g,'cSw08');
		tables = tables.replace(/特批类型/g,'cTypename');
        tables = tables.replace(/采购员/g,'cManor');
		updata2.data = {
				cNo:null,//存档号
				cTimeapply:null,//请购日期
				cOrdernum:null,//请购单号
				cComname:null,//请购项目
				cDeptapply:null,//请购部门
				cManapply:null,//请购人
				cGoodsname:null,//货物名称
				cSpec:null,//规格型号
				cUnit:null,//单位
				cNum:null,//请购数量
				cMustneed:null,//采购类型
				cSw02:null,//用途说明
				cArrtime:null,//需求时间
				cRemark:null,//备注
				cTypename:null,//特批类型
        		cManor:null//采购员
		};
		updata2.data.excel = {}
		updata2.data.excel = JSON.parse(tables);
		console.log(updata2);
		localStorage.setItem('updata2', JSON.stringify(updata2));
	};
	if (rABS) {
		reader.readAsArrayBuffer(f);
	} else {
		reader.readAsBinaryString(f);
	}
}