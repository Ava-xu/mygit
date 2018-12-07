var startImagePreviewListenerFlag=false;
function startImagePreviewListener(){
	startImagePreviewListenerFlag=true;
	return true;
}
window.onload=function(){
	// 图片添加点击事件
	function objFn(obj,oImg) {
		oImg.width=obj.width();
		oImg.height=obj.height();
		oImg.doc_left=obj.offset().left;
		oImg.doc_top=obj.offset().top;
		oImg.url=obj.attr("data-original");
		oImg.scn_left=obj.offset().left-$(document).scrollLeft();
		oImg.scn_top=obj.offset().top-$(document).scrollTop();
		return oImg;
	}
	var oImgs=[],allImg=$(".content img[data-original]");
	allImg.each(function(i,val){
		$(this).data("index",i);
		var oImg={};
		oImgs.push(objFn($(this),oImg));
	})
	// 图片添加点击事件
	window.imgclick=function(othis){
		alert(othis);
		if(startImagePreviewListenerFlag){
			var oIndex=$(othis).data("index");
			objFn($(othis),oImgs[oIndex])
			var json={"select":oIndex,"images":oImgs};
			json = JSON.stringify(json);
			window.location.href="m1905://image-preview/?images="+encodeURI(json);//IOS的暴露接口
		}
	}
	// var timeout = setTimeout(function() {
	// 	allImg.click(function(){
	// 		if(startImagePreviewListenerFlag){
	// 			var oIndex=$(this).data("index");
	// 			objFn($(this),oImgs[oIndex])
	// 			var json={"select":oIndex,"images":oImgs};
	// 			json = JSON.stringify(json);
	// 			window.location.href="m1905://image-preview/?images="+encodeURI(json);//IOS的暴露接口
	// 		}
	// 	});
	// }, 1000);
	//视频添加点击事件
	window.playclick=function(vid){
		window.location.href="m1905://video-preview/?video_id="+vid;
	}
	// 将页面中隐藏的视频结构替换为新的结构
	function  replaceplay(){
		$(".pic-video").each(function(i,val){
			var oThis=$(val),
			oImgUrl=oThis.find("img").attr("src").replace(/thumb_1_118_74/, "thumb_1_750_384"),
			oPlayId=oThis.find("a[data-playid]").attr('data-playid');
			if (oImgUrl&&oPlayId) {
				var playMod='<div class="player-mod" onclick="playclick('+oPlayId+')">'
       							+'<img src='+oImgUrl+' width="750" height="384">'
        						+'<i></i>'
    						+'</div>';
    			oThis.before(playMod).remove();
			};
		})
	}
	replaceplay();
}
// startImagePreviewListener()
