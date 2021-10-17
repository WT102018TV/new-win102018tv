
$(document).ready(function(){
	
	$("body").addClass("js");

	
	$('.ps-link').click(function(){
			var $url = $(this).attr("data-link");
			window.location.href=$url;
	});
	
	if ($(window).width() > 1220) {	
		$('.sorter').hover(
		function() {
			$(this).find('form').stop(true,true).fadeToggle(100);
		});	
	} else {
		$('.sorter').click(
		function() {
			$(this).find('form').fadeToggle(100);
		});	
	};	
	
	$('.rate3').each(function(){
        var ratebox = $(this);
        var raterate = parseInt(ratebox.find('.ratingtypeplusminus').text());
        var ratecount = parseInt(ratebox.find('span[id]:last').text());
        if ( ratecount >= raterate ) {
        var minusik = (ratecount - raterate)/2;
        var plusik = ratecount - minusik;
        $(this).children('.pluss').append('<span class="plusik">'+plusik+'</span>');
        $(this).children('.minuss').append('<span class="minusik">'+minusik+'</span>');
        };
    });
	
	$('.tabs-sel span:first').addClass('current');
	$('.tabs-b:first').addClass('visible');
	$('.tabs-sel').delegate('span:not(.current)', 'click', function() {
		$(this).addClass('current').siblings().removeClass('current')
       .parents('.tabsbox').find('.tabs-b').hide().eq($(this).index()).fadeIn(400);
	});
	
	$('.mov-desc-text').each(function() {
			var slice = $(this);
			var sliceH = slice.height();
			var sliceL = $(this).attr("data-slice");
			if ( sliceH > sliceL ) {
				slice.addClass('slice').height(sliceL).append('<div class="slice-btn"><span>Развернуть полностью</span></div>');
			};
	});
	$('.slice-btn').click(function() {
			var slice = $(this).parent();
			slice.css({'height':'auto'});
			slice.removeClass('slice');
			$(this).fadeOut(200);
	});
	
	$( "#login-box" ).dialog({
		autoOpen: false,
		modal: true,
		show: 'fade',
		hide: 'fade',
		width: 320
	});

	$('#loginbtn, #ac-av').html($('#avatar-box').html());
	$('#loginbtn').click(function(){
		$('#login-box').dialog('open');
	});
	$('.login-social a').on('click',function(){
	   var href = $(this).attr('href');
       var width  = 820;
       var height = 420;
       var left   = (screen.width  - width)/2;
       var top   = (screen.height - height)/2-100;   

       auth_window = window.open(href, 'auth_window', "width="+width+",height="+height+",top="+top+",left="+left+"menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no");
       return false;
	});
	$("#add-commbtn").click(function(){
		$("#add-comm-form").fadeToggle(200);
	});
	$(".comm-q").click(function(){
		$("#add-comm-form").fadeIn(200);
	});
    $('#dle-content > #dle-ajax-comments').appendTo($('#full-comms')); 
	if ($(window).width() > 750) {
    $('body').append('<div id="gotop"><span class="fa fa-chevron-up"></span></div>');
    var $gotop=$('#gotop'); 
	$ (window).scroll (function () {
		if ($ (this).scrollTop () > 300) {
			$gotop.fadeIn(200);
		} else {
			$gotop.fadeOut(200);
		}
	});	
	$gotop.click(function(){
	$('html, body').animate({ scrollTop : 0 }, 'slow');
	});
	};
});

function doRateLD( rate, id ) {
	ShowLoading('');
	$.get(dle_root + "engine/ajax/rating.php", { go_rate: rate, news_id: id, skin: dle_skin }, function(data){
		HideLoading('');
		if ( data.success ) {
			var rating = data.rating;
			rating = rating.replace(/&lt;/g, "<");
			rating = rating.replace(/&gt;/g, ">");
			rating = rating.replace(/&amp;/g, "&");
			$("#ratig-layer-" + id).html(rating);
			$("#vote-num-id-" + id).html(data.votenum);
			var ratingtext = parseInt($(rating).text());
			var minusik = (data.votenum - ratingtext)/2;
			var plusik = data.votenum - minusik;
			$("#pluss-" + id).children('.plusik').text(plusik);
			$("#minuss-" + id).children('.minusik').text(minusik);
		} else if (data.error) {DLEalert ( data.errorinfo, dle_info );}
	}, "json");
};
$(document).ready(function(){

		if($.cookie('loop_view') == 'grid-list' ) {
		$('#grid').removeClass('grid-thumb').addClass('grid-list').attr('data-view', 'grid-list');
		$('#grid-select > span:nth-child(1)').addClass('current').siblings('span').removeClass('current');
		} 
		if($.cookie('loop_view') == 'grid-thumb' ) {
		$('#grid').removeClass('grid-list').addClass('grid-thumb').attr('data-view', 'grid-thumb');
		$('#grid-select > span:nth-child(2)').addClass('current').siblings('span').removeClass('current');
		} 

		
		$('#grid-select > span').on('click', function(e) {
			e.preventDefault();
		
			var viewType = $(this).attr('data-type'),
				loop = $('#grid'),
				loopView = loop.attr('data-view');
			
			if(viewType == loopView)
				return false;
			
			$(this).addClass('current').siblings('span').removeClass('current');

			loop.stop().fadeOut(100, function(){
				if(loopView)
					loop.removeClass(loopView);
			
				$(this).fadeIn().attr('data-view', viewType).addClass(viewType);
			});

			$.cookie('loop_view', viewType, { path: '/', expires : 7});

			return false;
		});
		

});

 (function(e,h,j){function k(b){return b}function l(b){return decodeURIComponent(b.replace(m," "))}var m=/\+/g,d=e.cookie=function(b,c,a){if(c!==j){a=e.extend({},d.defaults,a);null===c&&(a.expires=-1);if("number"===typeof a.expires){var f=a.expires,g=a.expires=new Date;g.setDate(g.getDate()+f)}c=d.json?JSON.stringify(c):String(c);return h.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+
a.domain:"",a.secure?"; secure":""].join("")}c=d.raw?k:l;a=h.cookie.split("; ");f=0;for(g=a.length;f<g;f++){var i=a[f].split("=");if(c(i.shift())===b)return b=c(i.join("=")),d.json?JSON.parse(b):b}return null};d.defaults={};e.removeCookie=function(b,c){return null!==e.cookie(b)?(e.cookie(b,null,c),!0):!1}})(jQuery,document);




$(document).ready(function() {
	if ($(window).width() > 950) {	
	var LinkTitle = $(document).attr('title');
	var LinkUrl = window.location.href;
	LinkTitle=encodeURIComponent(LinkTitle);
	LinkUrl=encodeURIComponent(LinkUrl);
	var leftvar = (screen.width-600)/2;
	var topvar = (screen.height-400)/2;
	
	var LinksItem = [
	'http://vkontakte.ru/share.php?url='+LinkUrl+'" onClick="popupWin = window.open(this.href, \'contacts\', \'location,width=600,height=400,left='+leftvar+',top='+topvar+'\'); popupWin.focus(); return false;" title="ВКонтакте"',
	'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl='+LinkUrl+'&title='+LinkTitle+'" onClick="popupWin = window.open(this.href, \'contacts\', \'location,width=600,height=400,left='+leftvar+',top='+topvar+'\'); popupWin.focus(); return false;" title="Одноклассники"',
	'http://connect.mail.ru/share?share_url='+LinkUrl+'" onClick="popupWin = window.open(this.href, \'contacts\', \'location,width=600,height=400,left='+leftvar+',top='+topvar+'\'); popupWin.focus(); return false;" title="Mail.ru"',
	'http://www.facebook.com/sharer.php?u='+LinkUrl+'&t='+LinkTitle+'" onClick="popupWin = window.open(this.href, \'contacts\', \'location,width=600,height=400,left='+leftvar+',top='+topvar+'\'); popupWin.focus(); return false;" title="Facebook"',
	'http://twitter.com/share?text='+LinkTitle+'&url='+LinkUrl+'" onClick="popupWin = window.open(this.href, \'contacts\', \'location,width=600,height=400,left='+leftvar+',top='+topvar+'\'); popupWin.focus(); return false;" title="Twitter"',
	'https://plus.google.com/share?url='+LinkUrl+'" onClick="popupWin = window.open(this.href, \'contacts\', \'location,width=600,height=400,left='+leftvar+',top='+topvar+'\'); popupWin.focus(); return false;" title="Google"',
	'http://www.livejournal.com/update.bml?event='+LinkUrl+'&subject='+LinkTitle+'" onClick="popupWin = window.open(this.href, \'contacts\', \'location,width=600,height=400,left='+leftvar+',top='+topvar+'\'); popupWin.focus(); return false;" title="Livejournal"'
	];
	
	$('.share-box').each(function(){
		var $share = $(this);
		var $urlImg = $share.attr("data-img");
		var sdvig = 0;
		for (i=0; i<LinksItem.length; i++)
		{
			var getLinks = $('<a href="'+LinksItem[i]+' style="background: url('+$urlImg+') -'+sdvig+'px top  no-repeat;" target="_blank"></a>');
			getLinks.appendTo($share);
			var sdvig = sdvig + 27;
		}
	});
	};
});

jQuery.fn.tcarusel = function(options){
	
	return this.each(function() {
			
		var tcaruselBlock = $(this);
		var tcaruselScroll = tcaruselBlock.find('.tcarusel-scroll');
		var tcaruselFirstItem = tcaruselBlock.find('.tcarusel-item:first');
		var tcaruselLastItem = tcaruselBlock.find('.tcarusel-item:last');
		
		var tcaruselBlockWidth = tcaruselBlock.find(tcaruselFirstItem).outerWidth(true);
	
		function tcaruselShowNext() {
			tcaruselScroll.animate({'left':-tcaruselBlockWidth}, 200, function(){
				tcaruselBlock.find('.tcarusel-item:first').appendTo(tcaruselScroll);
				tcaruselScroll.css({'left':'0'});
			});
		}
		
		function tcaruselShowPrev() {
			tcaruselBlock.find('.tcarusel-item:last').prependTo(tcaruselScroll);
			tcaruselScroll.css({'left':-tcaruselBlockWidth});
			tcaruselScroll.animate({'left':0}, 200);
		}
		
		tcaruselBlock.find('.tcarusel-next').click(tcaruselShowNext);
		tcaruselBlock.find('.tcarusel-prev').click(tcaruselShowPrev);
		
	});
	
};
$(document).ready(function() {
$('.tcarusel').tcarusel();
});

$(function(){
	var timeout = parseInt($('#dp-timer').text());
	var timer = setInterval(function(){
		$('#dp-timer').html(--timeout);
		if (timeout == 0) {
			$('.dp-timer').hide();
			$('.dp-link').show();
			window.location = $('.dp-link a').attr('href');
			clearInterval(timer);
		}
	}, 1000);
})