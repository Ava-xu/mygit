define(function(){
	return function(){
		$(".show-more-btn").click(function(){
			$(this).addClass("active").parent().hide()
			$(".content").height("auto");
		})
	}
})