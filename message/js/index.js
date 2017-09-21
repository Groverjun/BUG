$("#qimo_chatpup").css("z-index", "-1")
$(".liuyan").eq(0).click(function() {
	$("#leaveWord").animate({
		bottom: "10px"
	}).css("display", "block")
	$("#qimo_chatpup").css("display", "none")

})
$("#head2").click(function(e) {
	var e = e || event
	e.stopPropagation()
	$(" #leaveWord").animate({
		bottom: "-513px"
	})
})
$("#head1").click(function(e) {
	var e = e || event
	e.stopPropagation()
	$("#leaveWord").animate({
		bottom: "-513px"
	})
})

function message() {
	$("#leaveWord").css("display", "none")
	$("#qimo_chatpup").css("display", "block")
	qimoChatClick();
}

//手机号验证
function judgePho() {
	var check = false;
	var exp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	if(!exp.test($("#leave_pho").val())) {
		$("#judgePho").html("×")
		check = false;
	} else {
		$("#judgePho").html("√")
		check = true;
	}
	return check;
}
//邮箱验证
function judgeEma() {
	var check = false;
	var exp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(!exp.test($("#leave_ema").val())) {
		$("#judgeEma").html("×")
		check = false;
	} else {
		$("#judgeEma").html("√")
		check = true;
	}
	return check;
}
//留言
$("#leaveWord_sub").click(function() {
	if(judgeName() && judgePho() && judgeEma()) {
		$.ajax({
			url: "/regist",
			type: "post",
			data: {
				username: $("#leave_name").val(),
				userpho: $("#leave_pho").val(),
				useremail: $("#leave_ema").val(),
				useremail: $("#leave_txt").val(),
			},
			success: function(data) { //alert后台的返回值
				alert(data);
			},
			error: function() {
				alert('访问失败');
			}
		});
	}

});
window.onload = function() {
	var obtn = document.getElementById('top');
	var timer = null;
	var isTop = true;
	//获取页面的可视窗口高度
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

	//滚动条滚动时触发
	window.onscroll = function() {
		//在滚动的时候增加判断
		var osTop = document.documentElement.scrollTop || document.body.scrollTop; //特别注意这句，忘了的话很容易出错

		if(!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	};

	obtn.onclick = function() {

		//设置定时器
		timer = setInterval(function() {
			//获取滚动条距离顶部的高度
			var osTop = document.documentElement.scrollTop || document.body.scrollTop; //同时兼容了ie和Chrome浏览器

			//减小的速度
			var isSpeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop + isSpeed;
			//console.log( osTop + isSpeed);

			isTop = true;

			//判断，然后清除定时器
			if(osTop == 0) {
				clearInterval(timer);
			}
		}, 30);

	};
}

$(function(){
	if ($("#message").scrollLeft()==0) {
		console.log($("#message").scrollLeft())
	} else{
		console.log(2)
		
	}
})
