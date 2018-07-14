var linkImg = null;
var viewState = "about";

$("body").on("click", ".pjct-img", function(){
    linkImg = $("<figure><a href='" + $(this).attr("data-img") + "'>" + "<img src='" + $(this).attr("src") + "'>" + "</a></figure>");
    $(".link-area").html(linkImg);
    $(linkImg).addClass("link-img");
    $(linkImg).find("img").addClass("link-img");
});

$(".toggle-btns").on("click", ".display-btn", function(){
    console.log(this.textContent);
    viewState = this.textContent.toLowerCase();
    console.log(viewState);
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