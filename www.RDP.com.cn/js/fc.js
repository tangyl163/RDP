
/*
	验证登录函数，由onsubmit事件触发
*/
var loginValidate = function()
{
	var result=false;
	//检查用户名/账号
	if ($.trim($("#lg_usr_id").val()).length==0 || $("#lg_usr_id").val()=="用户名/邮件名")
	{
		$("#lg_error").show();
		$("#lg_errorMsg").text("用户名不能为空！");
		return result;
	}
	else if ($.trim($("#lg_usr_psw").val()).length==0)
	{
		$("#lg_error").show();
		$("#lg_errorMsg").text("密码不能为空！");
		return result;
	}	
	return result;	
}


//切换密码提示
var changeTip = function(obj)
{
	var passText = document.getElementById('pstext');
	var pass = document.getElementById('lg_usr_psw');
	
	if(obj.id == 'lg_usr_psw')
	{
		if(obj.value == '' || obj.value.length == 0 )
		{
			passText.style.display='';
			pass.style.display='none';
		}
	}
	else
	{
		passText.style.display='none';
		pass.style.display='';
		pass.focus();
		hideTip();
	}			
	
}


//隐藏错误提示
var hideTip = function()
{
	$("#lg_error").hide();	
}



$(function(){
	$('#lg_usr_id').bind({
		focus:function()
		{
			hideTip();
			if(this.value==this.defaultValue)
			{
				this.value="";
			}
		},
		
		blur:function()
		{
			if(this.value=="")
			{
				this.value=this.defaultValue;
			}					
		}	
	});	
});	