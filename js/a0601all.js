$(document).ready(function() {
	
	//顶部banner begin
	var llq = navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"");
	if(llq=="MSIE7.0" || llq=="MSIE8.0" || llq=="MSIE9.0")
	{		
		$(".txtBg").removeClass('headline').addClass("headline2");
		$('.delay').addClass('show');
	}else{
		$(".txtBg").addClass("headline");
		$('.delay').removeClass('show');
	}
	//顶部banner end

  $('.banner .txtBg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  	$('.banner .subline').show().addClass('zoomIn animated');
  	$('.banner .arrow').show();
  });

	//鼠标监听 begin
	var flag = true;
	window.onscroll = function(){
		var t =document.documentElement.scrollTop || document.body.scrollTop;
		if(flag){
			if(t > 0 && t < 990){
				  $("html,body").animate({"scrollTop":"990px"},500);
				  flag = false;
			}
		}		
	}
	//鼠标监听 end

  var topslides = new Swiper ('.topslides', {
    loop: true,
    // 分页器
    pagination: '.swiper-pagination',
    paginationClickable : true
  });
  $('.swiper-prev').on('click', function(e){
		e.preventDefault()
		topslides.swipePrev()
	});
	$('.swiper-next').on('click', function(e){
		e.preventDefault()
		topslides.swipeNext()
	});

  // 重磅推荐
  var zbtj = new Swiper ('.zbtj .swiper-container', {
    loop: true,
    slidesPerView : 3,
    slidesPerGroup : 1
  });
  $('.zbtj-prev').on('click', function(e){
		e.preventDefault()
		zbtj.swipePrev()
	});
	$('.zbtj-next').on('click', function(e){
		e.preventDefault()
		zbtj.swipeNext()
	});

   $('.zbtj .swiper-slide').hover(function() {
    $(this).find('.mask, .qrcode').fadeIn();
  }, function() {
    $(this).find('.mask, .qrcode').fadeOut();
  });
  

  var hdpics = new Swiper ('.hdpics', {
    loop: true,
    pagination: '.hdpagi',
    paginationClickable : true
  });
  $('.hdpics .prev').on('click', function(e){
		e.preventDefault()
		hdpics.swipePrev()
	});
	$('.hdpics .next').on('click', function(e){
		e.preventDefault()
		hdpics.swipeNext()
	});

  // 特别策划
  var peopleSwiper = new Swiper('.peopleSwiper', {
  	loop: true,
  	grabCursor: true
  });
  $(".peopleBtnL").click(function() {
  	peopleSwiper.swipePrev();

  });
  $(".peopleBtnR").click(function() {
  	peopleSwiper.swipeNext();
  });

  var secretarySwiper = new Swiper('.secretarySwiper', {
  	loop: true,
  	grabCursor: true
  });
  $(".secretaryBtnL").click(function() {
  	secretarySwiper.swipePrev();
  });
  $(".secretaryBtnR").click(function() {
  	secretarySwiper.swipeNext();
  });

  var numberSwiper = new Swiper('.numberSwiper', {
  	loop: true,
  	grabCursor: true
  });
  $(".numberBtnL").click(function() {
  	numberSwiper.swipePrev();
  });
  $(".numberBtnR").click(function() {
  	numberSwiper.swipeNext();
  });

  var friendSwiper = new Swiper('.friendSwiper', {
  	loop: true,
  	grabCursor: true
  });
  $(".friendBtnL").click(function() {
  	friendSwiper.swipePrev();
  });
  $(".friendBtnR").click(function() {
  	friendSwiper.swipeNext();
  });

  // 代表访谈
  var talkswiper = new Swiper ('.talkswiper', {
    loop: true,
    slidesPerView : 4,
    slidesPerGroup : 1
  });
  $('.talkswiper-prev').on('click', function(e){
		e.preventDefault()
		talkswiper.swipePrev()
	});
	$('.talkswiper-next').on('click', function(e){
		e.preventDefault()
		talkswiper.swipeNext()
	});

  $('.gettalk').click(function() {
    $(this).hide();
    $('.talkswiper').show();
    $('.graymask').animate({'margin-top': '0px'}, 2000, function() {
      $('.graymask .ctrl').show('slow');
    });
    $('.bk6').fadeTo(1000, 0.3, function() {
    	$(this).css('background', '#f1f1f1');
    }).fadeTo('slow', 1);
  });

  $('.talkswiper .swiper-slide').hover(function() {
    $(this).find('.hide').fadeIn();
  }, function() {
    $(this).find('.hide').fadeOut();
  });

  // 往届回顾
  var reviewswiper = new Swiper ('.reviewswiper', {
    loop: true
  });
  $('.reviewswiper-prev').on('click', function(e){
		e.preventDefault()
		reviewswiper.swipePrev()
	});
	$('.reviewswiper-next').on('click', function(e){
		e.preventDefault()
		reviewswiper.swipeNext()
	});
	
	//视频列表上下选择
	$(".videoList li:first").addClass("active");
	var top = 0;
	$(".video_prev").click(function(){
		if($(".videoList li:first").hasClass("active")){
			  return false;
		}
		$(".videoList li").siblings(".active").removeClass("active").prev().addClass("active");
		$(".video").find("img").attr("src",$(".videoList .active").attr("data-img"));
		$(".video").find("a").attr("href",$(".videoList .active h4").attr("data-link"));
		if($(".videoList li:lt(3)").hasClass("active")){
			top = top - 101;
			$(".videoList ul").scrollTop(top);
			
		}
	})
	
	$(".video_next").click(function(){
		if($(".videoList li:last").hasClass("active")){
			  return false;
		}
		$(".videoList li").siblings(".active").removeClass("active").next().addClass("active");
		$(".video").find("img").attr("src",$(".videoList .active").attr("data-img"));
		$(".video").find("a").attr("href",$(".videoList .active h4").attr("data-link"));
		if($(".videoList li:gt(3)").hasClass("active")){
			top = top + 101;
			$(".videoList ul").scrollTop(top);
			
		}
	});
	
	
	
//返回顶部
function getck(e){for(var t=0;t<acookie.length;t++){var n=acookie[t].split("=");if(e==n[0])return n.length>1?unescape(n[1]):""}return""}function showbtmShareLayer(){if(is_open)return;if(getck("btmShareLayer")=="")$("#btmShareLayer").fadeIn(1e3),is_open=!0;else{var e=convertdate(getck("btmShareLayer")),t=new Date,n=Number(t.getTime())-Number(e.getTime());n>=864e5&&(document.cookie="btmShareLayer=",$("#btmShareLayer").fadeIn(1e3),is_open=!0)}}function convertdate(e){var t=e;t=t.replace(":","-"),t=t.replace(":","-"),t=t.replace(" ","-");var n=new Date(Number(t.split("-")[0]),Number(t.split("-")[1])-1,Number(t.split("-")[2]),Number(t.split("-")[3]),Number(t.split("-")[4]),Number(t.split("-")[5]));return n}function setbtmShareLayerck(){var e=new Date,t=e.getFullYear()+"-"+(Number(e.getMonth())+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds();document.cookie="btmShareLayer="+t}$(document).ready(function(){function i(e){var t;return((t=typeof e)=="object"?e==null&&"null"||Object.prototype.toString.call(e).slice(8,-1):t).toLowerCase()}function s(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function o(e,t){return s(e,t)>-1}function u(e){var t;return e=e.toUpperCase(),e=="TEXT"?t=document.createTextNode(""):e=="BUFFER"?t=document.createDocumentFragment():t=document.createElement(e),t}function a(e){e=e||document;var t=e.documentElement,n=e.body;return{top:Math.max(window.pageYOffset||0,t.scrollTop,n.scrollTop),left:Math.max(window.pageXOffset||0,t.scrollLeft,n.scrollLeft)}}function f(e,t){function n(e){var t=/\\'/g,n=e.replace(/(<(\/?)#(.*?(?:\(.*?\))*)>)|(')|([\r\n\t])|(\$\{([^\}]*?)\})/g,function(e,n,r,i,s,o,u,a){if(n)return"{|}"+(r?"-":"+")+i+"{|}";if(s)return"\\'";if(o)return"";if(u)return"'+("+a.replace(t,"'")+")+'"});return n}function r(e){var t,n,r,i,s,o,u,a=["var aRet = [];"];u=e.split(/\{\|\}/);var f=/\s/;while(u.length){r=u.shift();if(!r)continue;s=r.charAt(0);if(s!=="+"&&s!=="-"){r="'"+r+"'",a.push("aRet.push("+r+");");continue}i=r.split(f);switch(i[0]){case"+et":t=i[1],n=i[2],a.push('aRet.push("<!--'+t+' start-->");');break;case"-et":a.push('aRet.push("<!--'+t+' end-->");');break;case"+if":i.splice(0,1),a.push("if"+i.join(" ")+"{");break;case"+elseif":i.splice(0,1),a.push("}else if"+i.join(" ")+"{");break;case"-if":a.push("}");break;case"+else":a.push("}else{");break;case"+list":a.push("if("+i[1]+".constructor === Array){with({i:0,l:"+i[1]+".length,"+i[3]+"_index:0,"+i[3]+":null}){for(i=l;i--;){"+i[3]+"_index=(l-i-1);"+i[3]+"="+i[1]+"["+i[3]+"_index];");break;case"-list":a.push("}}}");break;default:}}return a.push('return aRet.join("");'),[n,a.join("")]}if(!e)return"";var i={};e!==i.template&&(i.template=e,i.aStatement=r(n(e)));var s=i.aStatement,o=function(e){return e&&(t=e),arguments.callee};return o.toString=function(){return(new Function(s[0],s[1]))(t)},o}function l(e){var t=i(e)=="string",n=e;t&&(n=u("div"),n.innerHTML=e);var r=e;if(t){r=u("buffer");while(n.children[0])r.appendChild(n.children[0])}return{box:r}}function c(i){function h(){var e=a(),t=e.top,i,s;t>0?(r.fadeIn(1e3),c&&(i=$(window).height(),s=t+i-190,n.css("top",s)),showbtmShareLayer()):r.fadeOut(1e3)}function p(){return document.body.scrollTop+document.documentElement.scrollTop}function d(e){document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop=e:document.body&&(document.body.scrollTop=e)}function v(){u!=null&&(new Date).getTime()-u<500&&(clearTimeout(o),o=null),u=(new Date).getTime(),o=setTimeout(h,100)}function m(){$("html, body").animate({scrollTop:0},1e3)}if(!i||!i.nodeType)return;if(!t){var s=l(f(e,{uid:"1764439395",online:!0}).toString()).box;i.appendChild(s),t=!0}n=$("#base_scrollToTop_area"),r=$("#base_scrollToTop");if(n==null)return{destroy:function(){}};var o,u,c=n.css("position")!="fixed";$(window).bind("scroll",v),r.bind("click",m)}var e=['<#et scrollToTop data><div id="base_scrollToTop_area" class="entranceRight"><a id="base_scrollToTop" class="bg" style="display: none;<#if (data.online !== true)>margin-top:279px;</#if>" href="javascript:void(0);" class="top" title="返回顶部"></a></div></#et>'].join(""),t=!1,n=null,r=null;c(document.body)});var acookie=document.cookie.split("; "),is_open=!1
	
	
});


//视频列表选择
$(".videoList li").click(function(){
  $(".videoList li").removeClass("active");
  $(this).addClass("active");
  $(".video img").attr("src",$(this).attr("data-img"));
  $(".video a").attr("href",$(this).find("h4").attr("data-link"));
});



//特别策划
$('.specialIcon').first().click(function() {
	$('.people').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').last().css('display', 'none');
})
$('.close').first().click(function() {
	$('.people').css({
		'opacity': '1',
		"z-index": "-9"
	});
	$('.specialIcon').last().css('display', 'block');
})
$('.specialIcon').eq(1).click(function() {
	$('.secretary').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').last().css('display', 'none');
})
$('.close').eq(1).click(function() {
	$('.secretary').css({
		'opacity': '0',
		"z-index": "-9"
	});
	$('.specialIcon').last().css('display', 'block');
})
$('.specialIcon').eq(2).click(function() {
	$('.number').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').first().css('display', 'none');
})
$('.close').eq(2).click(function() {
	$('.number').css({
		'opacity': '0',
		"z-index": "-9"
	});
	$('.specialIcon').first().css('display', 'block');
})
$('.specialIcon').last().click(function() {
	$('.friend').css({
		'opacity': '1',
		"z-index": "999"
	});
	$('.specialIcon').first().css('display', 'none');
})
$('.close').last().click(function() {
	$('.friend').css({
		'opacity': '0',
		"z-index": "-9"
	});
	$('.specialIcon').first().css('display', 'block');
})

//特别策划 end

//最新播报  begin
	$('#zxbbBox2').html($('#zxbbBox1').html());
	var demo = document.getElementById("zxbbScroll");
	var demo1 = document.getElementById("zxbbBox1");
	var demo2 = document.getElementById("zxbbBox2");
	function zxbb(){
		if((demo.scrollLeft-demo2.offsetWidth)>=0){
			demo.scrollLeft-=demo1.offsetWidth;
		}else{
			demo.scrollLeft++;
		}
	}
	var zxbbvar=setInterval(zxbb,30);
	$('#zxbbScroll').mouseenter(function(){
		clearInterval(zxbbvar);
	}).mouseleave(function(){
		zxbbvar=setInterval(zxbb,30);
	})
	//最新播报  end