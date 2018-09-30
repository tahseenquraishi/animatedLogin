
$(document).ready(function(){


      $("#tsignup").click(function(){
            
            $("#tlogin-box").animate({left:"0%"},400);
             $("#tlogin-box").animate({left:"10%"},400);
              $("#login-form").css("display","none");
               $("#signup-form").css("display","block");
      });
      $("#tlogin").click(function(){
            
            $("#tlogin-box").animate({left:"70%"},400);
             $("#tlogin-box").animate({left:"60%"},400);
              $("#login-form").css("display","block");
               $("#signup-form").css("display","none");
      });
  
    
});

