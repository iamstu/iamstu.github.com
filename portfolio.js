var linkImg = null;
var viewState = "about";

$("body").on("click", ".pjct-img", function(){
    pLink = $(this).attr("data-img");
    gLink = $(this).attr("data-git");
    img = $("<figure><img src='" + $(this).attr("src") + "'></figure>");
    $(".link-area").html(img);
    $(img).addClass("link-img");
    $(img).find("img").addClass("link-img");
    $(img).append("<a href='" + pLink + "'><h3 class='pLink'>See the deployed version!<h3></a>")
    $(img).append("<a href='" + gLink + "'><h3 class='gLink'>See the code that makes this work!<h3></a>")
});

$(".toggle-btns").on("click", ".display-btn", function(){
    viewState = this.textContent.toLowerCase();
    toggleView();
});
 
function toggleView(){
    if (viewState === "about"){
        $(".pjcts").hide();
        $(".about").show();
    }else{
        $(".about").hide();
        $(".pjcts").show();
    }
}
toggleView();


$(".link-area").on("mouseenter touchend", "figure",function(event){
    console.log("enter figure")
    $(".pLink").animate({
        opacity: 1,
        top: "+60px"
    }, 400, function(){
        // Animation complete
    });
    $(".gLink").animate({
        opacity: 1,
        top: "+160px"
    }, 400, function(){
        // Animation complete
    });
})

// $('#book').animate({
//     opacity: 0,
//     height: '0'
//   }, 5000, function() {
//     // Animation complete.
//   });

$(".link-area").on("mouseleave", "figure",function(event){
    console.log("leave figure")
    $(".pLink").animate({
        opacity: 0,
        top: "0"
    }, 400, function(){
        // Animation complete
    });
    $(".gLink").animate({
        opacity: 0,
        top: "+100px"
    }, 400, function(){
        // Animation complete
    });
})