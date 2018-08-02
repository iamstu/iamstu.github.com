var linkImg = null;
var viewState = "about";

$("body").on("click", ".pjct-img", function(){
    linkImg = $("<figure><a href='" + $(this).attr("data-img") + "'>" + "<img src='" + $(this).attr("src") + "'>" + "</a></figure>");
    $(".link-area").html(linkImg);
    $(linkImg).addClass("link-img");
    $(linkImg).find("img").addClass("link-img");
    // $(linkImg).append("<h3>Working<h3>")
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


$(".link-area").on("mouseenter", "figure",function(event){
    console.log("enter figure")
})

$(".link-area").on("mouseleave", "figure",function(event){
    console.log("leave figure")
})