
$(document).ready(function() {
	
	init();
	$.fn.fullpage({
		slidesColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		menu: '#navBar'
	});
	FitSize();
	$("#popupEventInfo").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        iframe: {
            preload: false
        }
    });
});
$(window).resize(function () {
    FitSize();
}).resize();

function FitSize(){
	var viewportWidth = $(window).innerWidth();
    var viewportHeight = $(window).innerHeight();
	if(viewportHeight > viewportWidth){
		$("#Page2W").hide();
		$("#imgFlowW").hide();
	}
	else{
		if(viewportHeight <= 768) {$("#Page2W").hide();}
		else{$("#Page2M").hide();}
		$("#imgFlowM").hide();
	}
}

function init(){
	$('#popupEventInfo').fancybox(
                {
					closeBtn: true,
                    fitToView: false,
                    autoSize: true,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none',
                    padding: '0,0,0,0',
                    scrolling: 'no',
                    afterLoad: function(){
						$('.fancybox-content').css({"background-color":"rgba(255,255,255,0)", "vertical-align":"top", "margin-top":"5%"});
						
					},
					afterShow:function(){$('.fancybox-close-small').css({"color":"#FFF"});}
                }).trigger('click');
}

