

$(document).ready(function() {
	// let isOver1 = false; // 상위메뉴(마우스오버되면: true/)
	// let isOver2 = false; // 하위메뉴(마우스오버되면: true/)

	let isOver1 = [false, false, false, false]; // 0, 1, 2, 3
	let isOver2 = [false, false, false, false];


	// fadeOut()의 시간 설정
	function goHide(){
		for(var i = 0; i < 4; i++){
			if(!isOver1[i] && !isOver2[i]){ // 상위, 하위 메뉴가 닿았을때
			$(".gnb_depth2_" + (i+1)).fadeOut("fast");
			}
		}
	}
	
	// 상단 메뉴 마우스오버, 탭 클릭 코드
	// 상위메뉴
	$(".openAll1").mouseover(function(){
		// 서브메뉴 나타나기(header의 너비가 800보다 클때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_1").fadeIn("fast");
		isOver1[0] = true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_1").fadeIn("fast");
		isOver1[0] = true;
	}).mouseout(function(){
		// $(".gnb_depth2_1").fadeOut("fast");
		setTimeout(goHide, 500); // 0.5초
		isOver1[0] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver1[0] = false;
	});
	// 하위메뉴
	$(".gnb_depth2_1").mouseover(function(){
		isOver2[0] = true;
	}).focus(function(){
		isOver2[0] = true;
	}).mouseout(function(){
		setTimeout(goHide, 500);
		isOver2[0] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver2[0] = false;
	});

	//상위메뉴
	
	$(".openAll2").mouseover(function(){
		// 서브메뉴 나타나기(header의 너비가 800보다 클때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast");
		isOver1[1] = true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_2").fadeIn("fast");
		isOver1[1] = true;
	}).mouseout(function(){
		// $(".gnb_depth2_2").fadeOut("fast");
		setTimeout(goHide, 500);
		isOver1[1] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver1[1] = false;
	});

	// 하위메뉴
	$(".gnb_depth2_2").mouseover(function(){
		isOver2[1] = true;
	}).focus(function(){
		isOver2[1] = true;
	}).mouseout(function(){
		setTimeout(goHide, 500);
		isOver2[1] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver2[1] = false;
	});


	// 상위메뉴
	$(".openAll3").mouseover(function(){
		// 서브메뉴 나타나기(header의 너비가 800보다 클때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
		isOver1[2] = true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_3").fadeIn("fast");
		isOver1[2] = true;
	}).mouseout(function(){
		// $(".gnb_depth2_3").fadeOut("fast");
		setTimeout(goHide, 500);
		isOver1[2] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver1[2] = false;
	});

	// 하위메뉴
	$(".gnb_depth2_3").mouseover(function(){
		isOver2[2] = true;
	}).focus(function(){
		isOver2[2] = true;
	}).mouseout(function(){
		setTimeout(goHide, 500);
		isOver2[2] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver2[2] = false;
	});


	// 상위메뉴
	$(".openAll4").mouseover(function(){
		// 서브메뉴 나타나기(header의 너비가 800보다 클때)
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast");
		isOver1[3] = true;
	}).focus(function(){
		if(parseInt($("header").css("width")) > 800)
			$(".gnb_depth2_4").fadeIn("fast");
		isOver1[3] = true;
	}).mouseout(function(){
		// $(".gnb_depth2_4").fadeOut("fast");
		setTimeout(goHide, 500);
		isOver1[3] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver1[3] = false;
	});

	// 하위메뉴
	$(".gnb_depth2_4").mouseover(function(){
		isOver2[3] = true;
	}).focus(function(){
		isOver2[3] = true;
	}).mouseout(function(){
		setTimeout(goHide, 500);
		isOver2[3] = false;
	}).blur(function(){
		setTimeout(goHide, 500);
		isOver2[3] = false;
	});
	
	// top을 클릭하면 header로 이동(라이브러리)
	$('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	// if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	// else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});

	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		// $("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
        // $("body").unbind('touchmove');
	});
	
});


$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    
	$(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ){
			$('.header_cont').show();		
		}else{
			$('.header_cont').hide();		
		}
        // if ( parseInt($('header').css('width')) < 800 ) $('.header_cont').hide();
    });
    
    // 프로그램 소개 - 더보기/접기 작동
	$('.program_list li .btn_more a').click(function(){
		// li의 하위 태그중에서 subtxt
		if ($(this).parent().parent().find('.subtxt').css('display') == 'none') {
			$(this).parent().parent().find('.subtxt').css('display','inline');
			$(this).text('접기'); // 텍스트가 "접기"로 변경
		} else {
			$(this).parent().parent().find('.subtxt').css('display','none');
			$(this).text('더보기');
		}
	});
   
});
