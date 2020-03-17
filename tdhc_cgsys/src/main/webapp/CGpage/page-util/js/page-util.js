


$(function (){

    //每页显示条数点击事件
    $(".btn-group").click(function (){
        let ariaExpandedFlag = $(this).find("button").attr("aria-expanded");
        if(ariaExpandedFlag == "true"){
            $(this).find("button").attr("aria-expanded","false");
            $(this).find("ul").addClass("open");
            $(this).find("ul").removeClass("close");
        }else{
            $(this).find("button").attr("aria-expanded","true");
            $(this).find("ul").addClass("close");
            $(this).find("ul").removeClass("open");
        }
    })

})


/**
 * 初始化
 * @param {*} url 请求地址
 * @param {*} dataGridId 表格id
 * @param {*} tabledata 数据源
 * @param {*} searchFormId 表单id
 */
function homePage(url,msg,dataGrid,tabledata){

	if(undefined == msg){
		msg = {
			// 版本号
			ver: "9DF9482834324200A6747F6300E121ED",
			// 会话标识，用于标识会话顺
			session: "5CDC4E39C0B94FA0891EF9DB95039935",
			tag: {},
			// 数据内容
			data: {}
		}
	}


	if(!url){
		console.log("[homePage] url is not defind!");
		return ;
	}
	
	var pgsz = $("#userDiv").attr("pageSize");
	if(!pgsz || pgsz == 0){  
		pgsz = 100;
	}

	$.ajax({ 
		type : 'POST',
		url : url+'&pageNum=0&pageSize=' + pgsz,
		async : true, 
		cache : false,
		data : JSON.stringify(msg),
		dataType : 'json', 
		contentType: 'application/json',
		success : function(data){
			console.log("pageModel:");

			console.log(data);

			tabledata[Cake.Ale.clear]();

			if (!!data.data) {
				tabledata[Cake.Ale.addRange](data.data);

				refreshDataGrid(dataGrid);

				if(null == data.pageInfo || '' == data.pageInfo){
					return;
				}
				$(".page").show();
				$("[name = 'currentPageView'][dataTable = 'userDiv']").val(data.pageInfo.pageNum);//当前页
				$("[name = 'totalPageView'][dataTable = 'userDiv']").html(data.pageInfo.pages); //总页数
				$("[name = 'dataRowView'][dataTable = 'userDiv']").html(data.pageInfo.pageSize); //每页显示条数
				$("[name = 'total'][dataTable = 'userDiv']").html(data.pageInfo.total); //总条数
				
				$("#userDiv").attr("currentPage",data.pageInfo.pageNum); //当前页
				$("#userDiv").attr("totalPage",data.pageInfo.pages);// 总页数
				$("#userDiv").attr("pageSize",data.pageInfo.pageSize);//每页的数量
			}
			
		},
		error : function(data){
			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
		}
	});
}


/**
 * 自定义页数
 * @param {*} url 请求地址
 * @param {*} dataGridId 表格id
 * @param {*} tabledata 数据源
 * @param {*} searchFormId 表单id
 */
function customizePage(url,dataGridId,tabledata,searchFormId){
	var currentPage = $("[name = 'currentPageView'][dataTable = 'userDiv']").val();  
	
	var currentPage = parseInt(currentPage);
	var totalPage = parseInt($("#userDiv").attr("totalPage")); //获取总页数  
	
	console.log("[customizePage] currentPage:" + currentPage); 
	console.log("[customizePage] totalPage:" + totalPage);   
	
	if(currentPage < 1 || currentPage > totalPage){
		console.log("[customizePage] The page number is not legitimate!");
		return ;
	}
	
	var pageSize = $("#userDiv").attr("pageSize"); //获取页大小

	let screeningConditions = parameter(searchFormId);
	
	$.ajax({   
		type : 'POST',
		url : url+'&pageNum=' + currentPage + '&pageSize=' + pageSize,
		async : false, 
		cache : false,
		data : JSON.stringify(screeningConditions),
		dataType : 'json', 
		contentType: 'application/json',
		success : function(data){
			
			console.log(data);

			tabledata[Cake.Ale.clear]();

			if (!!data.data) {
				tabledata[Cake.Ale.addRange](data.data);

				refreshDataGrid(dataGridId);

				$("[name = 'currentPageView'][dataTable = 'userDiv']").val(data.pageInfo.pageNum);//当前页
				$("[name = 'totalPageView'][dataTable = 'userDiv']").html(data.pageInfo.pages); //总页数
				$("[name = 'dataRowView'][dataTable = 'userDiv']").html(data.pageInfo.pageSize); //每页显示条数
				$("[name = 'total'][dataTable = 'userDiv']").html(data.pageInfo.total); //总条数
				
				$("#userDiv").attr("currentPage",data.pageInfo.pageNum); //当前页
				$("#userDiv").attr("totalPage",data.pageInfo.pages);// 总页数
				$("#userDiv").attr("pageSize",data.pageInfo.pageSize);//每页的数量
			}
		},
		error : function(data){
			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
		}
	});
}

/**
 * 上一页
 * @param {*} url 请求地址
 * @param {*} dataGridId 表格id
 * @param {*} tabledata 数据源
 * @param {*} searchFormId 表单id
 */
function prevPage(url,dataGridId,tabledata,searchFormId){
	
	var currentPage = $("#userDiv").attr("currentPage");
	var pageSize = $("#userDiv").attr("pageSize");
	
	if(currentPage == 1 || currentPage < 1){ 
		return ;
	}
	
	currentPage = parseInt(currentPage); 
	
	currentPage = currentPage - 1;

	let screeningConditions = parameter(searchFormId);

	$.ajax({
		type : 'POST',
		url : url+'&pageNum='+currentPage+'&pageSize='+pageSize,
		async : false, 
		cache : false,
		data : JSON.stringify(screeningConditions),
		dataType : 'json',
		contentType: 'application/json',
		success : function(data){

			console.log(data);

			tabledata[Cake.Ale.clear]();

			if (!!data.data) {
				tabledata[Cake.Ale.addRange](data.data);

				refreshDataGrid(dataGridId);

				$("[name = 'currentPageView'][dataTable = 'userDiv']").val(data.pageInfo.pageNum);//当前页
				$("[name = 'totalPageView'][dataTable = 'userDiv']").html(data.pageInfo.pages); //总页数
				$("[name = 'dataRowView'][dataTable = 'userDiv']").html(data.pageInfo.pageSize); //每页显示条数
				$("[name = 'total'][dataTable = 'userDiv']").html(data.pageInfo.total); //总条数
				
				$("#userDiv").attr("currentPage",data.pageInfo.pageNum); //当前页
				$("#userDiv").attr("totalPage",data.pageInfo.pages);// 总页数
				$("#userDiv").attr("pageSize",data.pageInfo.pageSize);//每页的数量
			}
		},
		error : function(data){
			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
		}
	});	
}

/**
 * 下一页
 * @param {*} url 请求地址
 * @param {*} dataGridId 表格id
 * @param {*} tabledata 数据源
 * @param {*} searchFormId 表单id
 */
function nextPage(url,dataGridId,tabledata,searchFormId){

	var currentPage = $("#userDiv").attr("currentPage"); //获取当前页
	var pageSize = $("#userDiv").attr("pageSize"); //获取页大小
	var totalPage = $("#userDiv").attr("totalPage"); //获取总页数
	
	currentPage = parseInt(currentPage);  
	
	// if((currentPage + 1) == totalPage || (currentPage + 1) > totalPage){
	// 	return ;
	// }  
	
	currentPage = currentPage + 1;

	let screeningConditions = parameter(searchFormId);

	$.ajax({
		type : 'POST',
		url : url+'&pageNum='+currentPage+'&pageSize='+pageSize,
		async : false, 
		cache : false,
		data : JSON.stringify(screeningConditions),
		dataType : 'json',
		contentType: 'application/json',
		success : function(data){

			console.log(data);

			tabledata[Cake.Ale.clear]();

			if (!!data.data) {
				tabledata[Cake.Ale.addRange](data.data);

				refreshDataGrid(dataGridId);

				$("[name = 'currentPageView'][dataTable = 'userDiv']").val(data.pageInfo.pageNum);//当前页
				$("[name = 'totalPageView'][dataTable = 'userDiv']").html(data.pageInfo.pages); //总页数
				$("[name = 'dataRowView'][dataTable = 'userDiv']").html(data.pageInfo.pageSize); //每页显示条数
				$("[name = 'total'][dataTable = 'userDiv']").html(data.pageInfo.total); //总条数
				
				$("#userDiv").attr("currentPage",data.pageInfo.pageNum); //当前页
				$("#userDiv").attr("totalPage",data.pageInfo.pages);// 总页数
				$("#userDiv").attr("pageSize",data.pageInfo.pageSize);//每页的数量
			}


			
		},
		error : function(data){
			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
		}
	});		
}

/**
 * 首页
 * @param {*} url 请求地址
 * @param {*} dataGridId 表格id
 * @param {*} tabledata 数据源
 * @param {*} searchFormId 表单id
 */
function indexPage(url,dataGridId,tabledata,searchFormId){

	var pgsz = $("#userDiv").attr("pageSize");
	if(!pgsz || pgsz == 0){  
		pgsz = 5;
	}

	var currentPage = $("#userDiv").attr("currentPage");
	
	if(currentPage == 1 || currentPage < 1){ 
		return ;
	}

	let screeningConditions = parameter(searchFormId);

	$.ajax({ 
		type : 'POST',
		url : url+'&pageNum=0&pageSize=' + pgsz,
		async : false, 
		cache : false,
		data : JSON.stringify(screeningConditions),
		dataType : 'json', 
		contentType: 'application/json',
		success : function(data){
			console.log("pageModel:");
			console.log(data);

			tabledata[Cake.Ale.clear]();

			if (!!data.data) {
				tabledata[Cake.Ale.addRange](data.data);

				refreshDataGrid(dataGridId);

				$("[name = 'currentPageView'][dataTable = 'userDiv']").val(data.pageInfo.pageNum);//当前页
				$("[name = 'totalPageView'][dataTable = 'userDiv']").html(data.pageInfo.pages); //总页数
				$("[name = 'dataRowView'][dataTable = 'userDiv']").html(data.pageInfo.pageSize); //每页显示条数
				$("[name = 'total'][dataTable = 'userDiv']").html(data.pageInfo.total); //总条数
				
				$("#userDiv").attr("currentPage",data.pageInfo.pageNum); //当前页
				$("#userDiv").attr("totalPage",data.pageInfo.pages);// 总页数
				$("#userDiv").attr("pageSize",data.pageInfo.pageSize);//每页的数量
			}
			
		},
		error : function(data){
			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
		}
	});
	
}

/**
 * 尾页
 * @param {*} url 请求地址
 * @param {*} dataGridId 表格id
 * @param {*} tabledata 数据源
 * @param {*} searchFormId 表单id
 */
function lastPage(url,dataGridId,tabledata,searchFormId){

	var pageSize = $("#userDiv").attr("pageSize"); //获取页大小
	var totalPage = $("#userDiv").attr("totalPage"); //获取总页数
	
	console.log("总页数"+totalPage);
	let screeningConditions = parameter(searchFormId);

	$.ajax({   
		type : 'POST',
		url : url+'&pageNum='+totalPage+'&pageSize='+pageSize,
		async : false, 
		cache : false,
		data : JSON.stringify(screeningConditions),
		dataType : 'json',
		contentType: 'application/json',
		success : function(data){
			console.log(data);

			tabledata[Cake.Ale.clear]();

			if (!!data.data) {
				tabledata[Cake.Ale.addRange](data.data);

				refreshDataGrid(dataGridId);

				$("[name = 'currentPageView'][dataTable = 'userDiv']").val(data.pageInfo.pageNum);//当前页
				$("[name = 'totalPageView'][dataTable = 'userDiv']").html(data.pageInfo.pages); //总页数
				$("[name = 'dataRowView'][dataTable = 'userDiv']").html(data.pageInfo.pageSize); //每页显示条数
				$("[name = 'total'][dataTable = 'userDiv']").html(data.pageInfo.total); //总条数
				
				$("#userDiv").attr("currentPage",data.pageInfo.pageNum); //当前页
				$("#userDiv").attr("totalPage",data.pageInfo.pages);// 总页数
				$("#userDiv").attr("pageSize",data.pageInfo.pageSize);//每页的数量
			}
		},
		error : function(data){
			DevExpress.ui.notify('网络或服务器故障,请稍后再试。', 'error', 3000);
		}
	});	
}


function selectPageSize(url,dataGridId,tabledata,searchFormId,pageSize){
	$("[name = 'dataRowView'][dataTable = 'userDiv']").html(pageSize);
	$("#userDiv").attr("currentPage",0);  
	$("#userDiv").attr("pageSize",pageSize);  
	
	refreshData(url,dataGridId,tabledata,searchFormId);
}

/**
 * 每页显示条数
 * @param {*} url 请求地址
 * @param {*} dataGridId 表格id
 * @param {*} tabledata 数据源
 * @param {*} searchFormId 表单id
 */
function refreshData(url,dataGridId,tabledata,searchFormId){
	
	var currentPage = $("#userDiv").attr("currentPage"); //获取当前页
	var pageSize = $("#userDiv").attr("pageSize"); //获取页大小
	
	let screeningConditions = parameter(searchFormId);

	$.ajax({   
		type : 'POST',
		url : url+'&pageNum=' + currentPage + '&pageSize=' + pageSize,
		async : false, 
		cache : false,
		data : JSON.stringify(screeningConditions),
		dataType : 'json', 
		contentType: 'application/json',
		success : function(data){

			console.log(data)

			tabledata[Cake.Ale.clear]();

			if (!!data.data) {
				tabledata[Cake.Ale.addRange](data.data);

				refreshDataGrid(dataGridId);

				if(null == data.pageInfo || '' == data.pageInfo){
					return;
				}
				$("[name = 'currentPageView'][dataTable = 'userDiv']").val(data.pageInfo.pageNum);//当前页
				$("[name = 'totalPageView'][dataTable = 'userDiv']").html(data.pageInfo.pages); //总页数
				$("[name = 'dataRowView'][dataTable = 'userDiv']").html(data.pageInfo.pageSize); //每页显示条数
				$("[name = 'total'][dataTable = 'userDiv']").html(data.pageInfo.total); //总条数
				
				$("#userDiv").attr("currentPage",data.pageInfo.pageNum); //当前页
				$("#userDiv").attr("totalPage",data.pageInfo.pages);// 总页数
				$("#userDiv").attr("pageSize",data.pageInfo.pageSize);//每页的数量
			}
		},
		error : function(data){
			alert("error:"+data); 
		}
	});
}

//刷新网格
function refreshDataGrid(dataGridId){
	$('#'+dataGridId).dxDataGrid('instance').deselectAll()
    $('#'+dataGridId).dxDataGrid('instance').refresh()
}

//参数
function parameter(searchFormId){
	msg = {
		// 版本号
		ver: "9DF9482834324200A6747F6300E121ED",
		// 会话标识，用于标识会话顺
		session: "5CDC4E39C0B94FA0891EF9DB95039935",
		tag: {},
		// 数据内容
		data: {}
	}
	var screeningConditions = jQuery("#"+searchFormId).serializeObject();
	if('' != screeningConditions && null != screeningConditions && undefined != screeningConditions){
		if(undefined != screeningConditions.startTime){
			let startTime = new Date(screeningConditions.startTime);
			screeningConditions.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), 0, 0, 0, 0);
		}
		if(undefined != screeningConditions.endTime){
			var endTime = new Date(screeningConditions.endTime);
			screeningConditions.endTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), 23, 59, 59, 999);
		}
		let arr = [];
		$("[name = 'cManor']").children("option").each(function(){ 
			arr.push($(this).val());
		});
		let arr2 = [];
		$("[name = 'cState']").children("option").each(function(){ 
			arr2.push($(this).val());
		});
		msg.data.cgQ001M1s14 = [screeningConditions];
		msg.data.cgQ001M1s14[0].cManor = arr
		msg.data.cgQ001M1s14[0].cState = arr2
	}
	return  msg;
}
