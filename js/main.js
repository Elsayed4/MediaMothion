var lazyload=new IntersectionObserver(function (items,self) {
    for (let i = 0; i < items.length; i++) {
       if (items[i].isIntersecting) {
       items[i].target.src=items[i].target.getAttribute("data-src");
       self.unobserve(items[i].target); 
       }
    }
});

var img=document.querySelectorAll(".lazy");
for (let i = 0; i < img.length; i++) {
lazyload.observe(img[i]);
}

/*global console*/
$(function(){
$(".nav-section ul .nav-item").click(function(){
   $(this).addClass('activee').siblings().removeClass('activee');
}); 
   //Starting hundle scroll up
    $(".fa-chevron-up").fadeOut();
    $(window).scroll(function(){
         var  scrollup =$(window).scrollTop();
        if(scrollup < 300){
            $(".fa-chevron-up").fadeOut(1000);
        }
        else{
            $(".fa-chevron-up").fadeIn(1000);
        }
    });
    
    $(".fa-chevron-up").click(function(){ 
        $("html,body").animate({ scrollTop : 0 }, 1000);
        
    });
    
    //Ending hundle scroll up

    
  $(".service-item").click(function(){
        $("body,html").animate({ scrollTop : $(".services").offset().top }, 1000);
    
    });
    
  $(".contact-item").click(function(){
        $("body,html").animate({ scrollTop : $(".contactt").offset().top }, 1000);
    
    });
    
    //***************Starting PopUp*******************

    
    
    
$(".sss").click(function(){
     document.getElementById("myNav").style.height = "100%";  
})

 $(".closebtn").click(function(){
     document.getElementById("myNav").style.height = "0%";  
 });
    

    
$(".aaa1").click(function(){
    $(".dd0").siblings().css("display","none");
   document.getElementById("myNav").style.height = "100%";
   $(".work .img-cont").css("display","none")
});
$(".aaa2").click(function(){
    $(".dd2").siblings().css("display","none");
   document.getElementById("myNav").style.height = "100%";
   $(".work .img-cont").css("display","none")
});
$(".aaa3").click(function(){
    $(".dd2").siblings().css("display","none");
   document.getElementById("myNav").style.height = "100%";
   $(".work .img-cont").css("display","none")
});
$(".aaa4").click(function(){
    $(".dd4").siblings().css("display","none");
   document.getElementById("myNav").style.height = "100%";
   $(".work .img-cont").css("display","none")
});
$(".aaa5").click(function(){
    $(".dd3").siblings().css("display","none");
   document.getElementById("myNav").style.height = "100%";
   $(".work .img-cont").css("display","none")
});
    

 $(".work .closebtn").click(function(){
     $(".work .img-cont").css("display","block");
     $("#myNav").fadeOut(1000); 

//     alert("sss")
 });
    
    
    
    
    //*************** Ending PopUp *******************
    // validation form
    $(".order-summit .senddata").click(function(e){
        e.preventDefault();
        $(".errorM").css("display","none");
        $(".errorMT").css("display","none");
        $(".errorME").css("display","none");
           $("#names").css({
              borderColor:"#800886" 
           });

           $("#phons").css({
              borderColor:"#800886" 
           });
           $("#mails").css({
              borderColor:"#800886" 
           });



     var nam = $("#names").val();
     var phone = $("#phons").val();
     var mails = $("#mails").val();
       if(nam==''){
           $(".errorM").css("display","block");
           $("#names").css({
              borderColor:"#f56659" 
           });
           
       }
       if(phone==''){
           $(".errorMT").css("display","block");
           $("#phons").css({
              borderColor:"#f56659" 
           });
       }
       if(mails==''){
           $(".errorME").css("display","block");
           $("#mails").css({
              borderColor:"#f56659" 
           });
       }
if(mails!='' && nam!='' && phone!=''){
    alert("Your Request Sended And We will Contact you soon");
//   window.location.replace("").
}

    });
    
    
    //************** starting increase input width *****************
    $(".order-summit .order-summit-input").focusin(function(){
      $(this).animate({
           width:'240px',
       },800)
    });
    
//    $(".order-summit .order-summit-input").click(function(){
//      $(this).animate({
//           width:'220px',
//       },800)
//    });
    //************** Ending increase input width *****************
    
    $(".overlay .container .ask-serve").click(function(){
       $(this).toggleClass('rrr'); 
    });
    
    //switching to next page by clicking button
 $(".overlay .container .pag2").fadeOut();
    $(".order-summit button").click(function(){
        $(".overlay .container .page1").fadeOut();
        $(".overlay .container .pag2").delay(400).fadeIn(900);
    });

    
   //handling backword from popUp2 tp popUp1  
    $(".overlay .container .order-summit button").click(function(){
        $(".closebtn1").css("display","block");
        $(".overlay .closebtn").css("display","none");
        
    });
    
    $(".closebtn1").click(function(){
        $(".overlay .container .pag2").fadeOut();
        $(".overlay .container .page1").delay(400).fadeIn(900);
        $(".overlay .closebtn").css("display","block");
        $(".overlay .closebtn1").css("display","none");
        
    });
    
    //mix it up
    $("#container").mixItUp();
    
    //Selected handeler when click
    $(".items ul li").click(function(){
       $(this).addClass('selected').siblings().removeClass('selected'); 
    });
       $(".my-overlay").fadeOut() 
    
    //handling overlay
    $(".img-cont").mouseenter(function(){
       $(this).children(".my-overlay").fadeIn(1000);        
    });
    $(".img-cont").mouseleave(function(){
       $(this).children(".my-overlay").fadeOut(1000);

    });
    
    
    
        
});