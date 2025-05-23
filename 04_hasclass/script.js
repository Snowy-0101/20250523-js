$(function(){
    // jQueryを記述
    if($("p").hasClass("textRed")) {
    $("p").html("Yes");    
    }
    else{
        $("p").html("No");
    }
});