// $(document).ready(function(){


// $("h1").css("color","red");//used when script tag in head tag
// });

 //$("h1").css("color","red");
// $("h1").css("font-size","5rem");
//$("h1").addClass("big-title");
//$("button");

//$("h1").removeClass("big-title");
$("h1").addClass("big-title margin-50");
//$("h1").hasClass("margin-50");//true
$("h1").text("bye");//change the text
$("button").text("don't click me");
//$("button").text("<em>hey</em>");//show with tag
//$("button").html("<em>hey</em>");//don't show the tag
//console.log($("img").attr("src"));//attribute property
//$("a").attr("href","https://www.yahoo.com");change attribute property
//$("h1").attr("class");//in console shows the classes related to this tag

$("h1").click(function() { 
    $("h1").css("color","purple");
    
});



// for(let i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }
//or
$("button").click(function() {
    $("h1").css("color","purple");

});



// $("input").keypress(function (event) { 
//     console.log(event.key);
    
// });


// $(document).keypress(function (event) { 
//     $("h1").text(event.key);
    
// });


$("h1").on("mouseover", function () {
    $("h1").css("color","purple");
    
});

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");

// $("button").on("click",function(){
//     $("h1").hide();//hide the content
// })

// $("button").on("click",function(){
//  $("h1").toggle()//hide and show by click
// });


// $("button").on("click",function(){
//     $("h1").fadeOut();
//    });


   
// $("button").on("click",function(){
//     $("h1").fadeIn();
//    });


// $("button").on("click",function(){
//     $("h1").fadeToggle();
//    });



// $("button").on("click",function(){
//     $("h1").slideUp();
//    });


// $("button").on("click",function(){
//     $("h1").slideDown();
//    });//unclap



//    $("button").on("click",function(){
//     $("h1").slideToggle();
//    });


// $("button").on("click",function(){
//     $("h1").animate({opacity:0.5});//custome animate
//    });


// $("button").on("click",function(){
//     $("h1").animate({margin:"20%"});//custome animate
//    });


$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});//custome animate
   });

// $("h1").show()//show hidden part
