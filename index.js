var count=0;
var el=document.getElementById("h");
el.addEventListener('scroll',function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > count){
       // downscroll code
       console.log("Down");
    } else {
       // upscroll code
    }
})