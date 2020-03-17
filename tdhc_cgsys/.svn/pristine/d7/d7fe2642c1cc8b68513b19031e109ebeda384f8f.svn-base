function t1form_get_factory(){

	
	let TP_CGORDERST_C_TYPENAME = []; //用于数据集合,对应字段含义为
	let TP_CGORDERST_C_STATE = []; //用于数据集合,对应字段含义为
	let TP_CGORDERMT_C_MITTYPE = []; //用于数据集合,对应字段含义为
	let TP_CGORDERST_C_DEPTOR = []; //用于数据集合,对应字段含义为
	let TP_CGORDERST_C_MUSTNEED = []; //用于数据集合,对应字段含义为
	let TP_CGORDERST_C_ALLOTSTATE = []; //用于数据集合,对应字段含义为
	let TP_CGORDERMT_C_COMNAME = []; //用于数据集合,对应字段含义为
	let TP_CGORDERMT_C_AUDITTYPE = []; //用于数据集合,对应字段含义为
	let TP_CGORDERST_C_PLANOR = []; //用于数据集合,对应字段含义为
	let TP_CGORDERMT_C_STATE = []; //用于数据集合,对应字段含义为
	let TP_CGORDERMT_C_DEPTAPPLY = []; //用于数据集合,对应字段含义为	
	
	
	
	
	
	
	
	msg = {
            ver: "53cc62f6122a436083ec083eed1dc03d",
            session: "42f5c0d7178148938f4fda29460b815a",
            tag: {},
            data: {
            }
        };
	
  return  $.ajax({
        url: Cake.Piper.getAuthUrl('../../tdhc_cgsys/CG_A001/C0011Q'), //请求的url地址
        dataType: 'json', //返回格式为json              
        async: true, //请求是否异步,默认为异步,这也是ajax重要特性             
        data: JSON.stringify(msg), //下拉框的参数值  queryCondition 上面有定义 cStlCla 后台给的固定的名            
        type: 'post', //请求方式 get 或者post ,            
        contentType: 'application/json'        
    });
}