define('showMore',[],function(){
	return function(){
		$(".show-more-btn").click(function(){
			$(this).addClass("active").parent().hide()
			$(".content").height("auto");
		})
	}
});
require.config({
	baseUrl:"js"
});
require(["showMore"],function(showMore){
   showMore()
});
define("index", function(){});

