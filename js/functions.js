

 //Window Loaded Handler
  $(window).load(function() {'use strict';
	$(".loader").fadeOut("slow");
  });
  
  
  
   


jQuery(function($) {'use strict';


  // ======================================================
       //Toggle to open banner form
  // ======================================================
  
  // $(".form-containert").hide();
    $(".icon-chevron-thin-down").hide();
    $(".btn-slide").on('click', function(){
		 $(this).toggleClass('active') 
		 $(this).find(".icon-chevron-thin-up, .icon-chevron-thin-down").toggle();
            $(".form-container").slideToggle({
		direction:"up"
		},300);
            
    });
	 

  // ======================================================
     //DropDown handler
  // ======================================================	  
	
	 //For Nav Menu Toggle Transition 
		$('.nav-icon').on('click', function () {
			 return $(this).toggleClass('open');
		}.call(this));
	
	  $(".navbar-default .navbar-nav li.dropdown").on('click', function() {
			if ($(window).width() < 979) {
				$(this).next('.dropdown-menu').show();
				$(this).next.toggleClass('open'); 
			}
	  });
			  
	  $(".navbar-default .navbar-nav li.dropdown").hover(function () {
			if ($(window).width() >= 979) {
				  $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(500);
				  $(this).toggleClass('open');
			}
	  }, function () {
			if ($(window).width() >= 979) {
				$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
				  $(this).removeClass('open');
			}
	  });
	  
	  
	  
	  
	  
	// ========================================================================= 
	//	Back to Top
	// ========================================================================= 
	 
	if ($('#back-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-top').addClass('show');
            } else {
                $('#back-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


	 
	
	 // ======================================================
	 // Sliders
	 // ======================================================
	 //Services & Specialist
	 $("#service-slider , #specialist-slider").owlCarousel({
      autoPlay: false,
      items : 2,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
		itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
      itemsTablet : [768,2],
 
   });
	
	//  Blog Page
	$("#blog-slider").owlCarousel({
      autoPlay:false,
      singleItem:true,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
		itemsMobile : [480,1],
 
   });
	
	//Our Specialist On About
	$("#our-specialist , #news-slider").owlCarousel({
      autoPlay:4000,
      items :3,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2]
 
   });
	
    //Fading Testinomial content
    $("#testinomial-slider").owlCarousel({
      autoPlay: 1000000,
      navigation : false, // Show next and prev buttons
      slideSpeed : 3000,
      paginationSpeed : 3000,
      singleItem:true,
		transitionStyle : "fade"
  });
  
  
   
  
  // ======================================================
         //FAQ's Accordions
  // ======================================================
 
		$(".items > li > a").on('click', function(e) {
		  e.preventDefault();
		  var $this = $(this);
		  if ($this.hasClass("expanded")) {
			 $this.removeClass("expanded");
		  } 
		  else {
		  $(".items a.expanded").removeClass("expanded");
		  $this.addClass("expanded");
		  $(".sub-items").filter(":visible").slideUp("normal");
		}
		  $this.parent().children("ul").stop(true, true).slideToggle("normal");
		});
  
  	 
		
		// ====================================================== 
	        // tabbed content On Sidebar 
	  // ======================================================
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").on('click', function() {
		  $(".tab_content").hide();
		  var activeTab = $(this).attr("rel"); 
		  $("#"+activeTab).fadeIn();		
		  
		  $("ul.tabs li").removeClass("active");
		  $(this).addClass("active");

		  $(".tab_drawer_heading").removeClass("d_active");
		  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	 
	/* if in drawer mode on Mobile Version*/
	$(".tab_drawer_heading").on('click', function() {
       $(".tab_content").hide();
       var d_activeTab = $(this).attr("rel"); 
       $("#"+d_activeTab).fadeIn(1200);
	  
	    $(".tab_drawer_heading").removeClass("d_active");
       $(this).addClass("d_active");
	  
	    $("ul.tabs li").removeClass("active");
	    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	 
	 
	 
	// ======================================================
	  //Filter Mix gallery
   // ======================================================
	 $(".zerogrid").mixItUp();



	 // ======================================================
	      //Popup 	
	 // ======================================================
	  $(".fancybox").fancybox({
		  openEffect : 'elastic',
		  openSpeed  : 650,
		  closeEffect : 'fade',
		  closeClick : true,
	  });
	  
	  // video popoup
	  $(".video").fancybox({
		fitToView	: true,
		autoSize	: true,
		closeClick	: false,
	});
	
   
   // ======================================================
    //For choose date on form field
  // ======================================================	 
	 $('#datetimepicker').datetimepicker({
		format: "dd MM yyyy"
	  });
	 
	
	// ======================================================
	    //Maps (Contact Page)
	// ======================================================
	  $("#map").geolocate({
		 lat: "#lat3",
		 lng: "#lng3",
		 address: ["#address3"]
	  });
  
	 $("#map2").geolocate({
		 lat: "#lat2",
		 lng: "#lng2",
		 address: ["#address2"]
	  });
   
     
	 
	 
	 
	 // ======================================================
	    //Appoinment Form  Submission 
	// ======================================================
	
	$("#btn_app_submit").click(function() { 
        //get input field values
        var user_name       = $('input[name=name]').val(); 
        var user_email      = $('input[name=email]').val();
		var user_telephone      = $('input[name=phone]').val();
		var app_date      = $('input[name=app_date]').val();
        var user_message    = $('textarea[name=message]').val();
        
        //simple validation at client's end
        var proceed = true;
        if(user_name==""){ 
            proceed = false;
        }
        if(user_email==""){ 
            proceed = false;
        }
		
		 if(user_telephone==""){ 
            proceed = false;
        }
		
		if(user_message=="") {  
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
           var post_data = {'userName':user_name, 'userEmail':user_email, 'userTelephone':user_telephone, 'app_date':app_date, 'userMessage':user_message};
            //Ajax post data to server
            $.post('appointment.php', post_data, function(response){  
                var output;
                //load json data from server and output message     
				if(response.type == 'error')
				{
					output = '<div class="alert-danger">'+response.text+'</div>';
				}else{
				    output = '<div class="alert-success">'+response.text+'</div>';
					
					//reset values in all input fields
					$('#app_form input').val(''); 
					$('#app_form textarea').val('');
					$('#btn_app_submit').val('Submit Request'); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
			
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#app_form  input, #app_form textarea").keyup(function() { 
        $("#result").slideUp();
    });
    
	
	
	
	
	
	// ======================================================
	    //Contact Form  Submission 
	// ======================================================
	
	$("#btn_contact_submit").click(function() { 
        //get input field values
        var user_name       = $('input[name=f_name]').val()+' '+$('input[name=l_name]').val(); 
        var user_email      = $('input[name=email]').val();
		var user_telephone      = $('input[name=phone]').val();
		var user_message    = $('textarea[name=message]').val();
        
        //simple validation at client's end
        var proceed = true;
        if(user_name==""){ 
            proceed = false;
        }
        if(user_email==""){ 
            proceed = false;
        }
		
		 if(user_telephone==""){ 
            proceed = false;
        }
		
		if(user_message=="") {  
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed) 
        {
            //data to be sent to server
           var post_data = {'userName':user_name, 'userEmail':user_email, 'userTelephone':user_telephone, 'userMessage':user_message};
            //Ajax post data to server
            $.post('send-contact.php', post_data, function(response){  
                var output;
                //load json data from server and output message     
				if(response.type == 'error')
				{
					output = '<div class="alert-danger">'+response.text+'</div>';
				}else{
				    output = '<div class="alert-success">'+response.text+'</div>';
					
					//reset values in all input fields
					$('#contact_form input').val(''); 
					$('#contact_form textarea').val(''); 
					$('#btn_contact_submit').val('Submit Request'); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
			
        }
    });
    
    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form  input, #contact_form textarea").keyup(function() { 
        $("#result").slideUp();
    });
	
	
	


$(document).ready( function () {
			// I only have one form on the page but you can be more specific if need be.
			var $form = $('form.newsletter');
		
			if ( $form.length > 0 ) {
				$('form.newsletter input[type="submit"]').bind('click', function ( event ) {
					if ( event ) event.preventDefault();
					// validate_input() is a validation function I wrote, you'll have to substitute this with your own.
					//alert("called");
					//register($form);
					
					if ( validateEmail() ) { register($form);}
					else { $("#result1").hide().html("<div class='alert-danger'>Please provide valid email address.</div>").slideDown(200); }
					
				});
			}
		});
		  
 
 
  });


function validateEmail() {
  	
  $email = $("#EMAIL").val();
  if ($email==""){
	  $email = 0;
	  }
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}




function validate_input($form){
	
	
	}

function register($form) {
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
		cache       : false,
        dataType    : 'json',
        jasonp:"c",
		contentType: "application/json; charset=utf-8",
        error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
        success: function(data){
            var resultMessage = data.msg || "<div class='alert-danger'>Please try again later.</div>";

            if (data.result != "success") {
                if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                    resultMessage = "<div class='alert-danger'>You're already subscribed.</div>";
					$("#result1").hide().html(resultMessage).slideDown(200);
                }
				else {					
					 resultMessage = "<div class='alert-danger'>Please try again later.</div>";
					$("#result1").hide().html(resultMessage).slideDown(200);
					}
            } else {
                resultMessage = "<div class='alert-success'>Thank you! Please check your email.</div>";
		        $("#result1").hide().html(resultMessage).slideDown(200);
				$("form.newsletter").hide().slideUp(200); 		
            }		
		 	
		}

	});
	
}
	
	
	 
	

