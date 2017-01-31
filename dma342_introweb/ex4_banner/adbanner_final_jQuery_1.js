// jQuery examples

$(document).ready(function(){

    myAnim();
    
    // create a link for the ad
    $("#ad").on("click", function(){
        window.open("http://www.visitbuffaloniagara.com/")
    })
//    $("#button").on('mouseover', function(){
//        $("#button").css("color", "orange");
//        $("#button").css("background", "black");
//    })
    
});

function myAnim(){
    
     //titles
    $("#sports").fadeIn(500);
    $("#sports").delay(2000).fadeOut(500);
    $("#food").delay(3000).fadeIn(500);
    $("#food").delay(2000).fadeOut(500);
    $("#ent").delay(6000).fadeIn(500);
    $("#ent").delay(2000).fadeOut(500);
    $("#ent2").delay(6000).fadeIn(500);
    $("#ent2").delay(2000).fadeOut(500);
    $("#buff").delay(9000).fadeIn(500);
    $("#buff").delay(2000).fadeOut(500);
    
    //pics
    
    $("#bills").fadeIn(500);
    $("#bills").delay(2000).fadeOut(500);
    $("#wings").delay(3000).fadeIn(500);
    $("#wings").delay(2000).fadeOut(500);
    $("#concert").delay(6000).fadeIn(500);
    $("#concert").delay(2000).fadeOut(500);
    $("#logo img").delay(9000).fadeIn(500);
    $("#logo img").delay(2000).fadeOut(500);
    $("#button").delay(9000).fadeIn(500);
    $("#button").delay(2000).fadeOut(500);
    
// animate skyline
    $("#skyline1 img").animate({left:['-419px','linear']},6000, /*Maybe change to 12000? */ function(){
        $("#skyline1 img").animate({left:['-21px','linear']},6000, function(){
// reset everything to original state
            
            myAnim();
        });
        
    });
   
    
//    last delay of 6000 then delay 2000
    
}
