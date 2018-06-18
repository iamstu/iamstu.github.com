var linkImg = null;

$(".pjct-img").on("click", function(){
    linkImg = $("<figure><a href='" + $(this).attr("data-img") + "'>" + "<img src='" + $(this).attr("src") + "'>" + "</a></figure>");
    $(".link-area").html(linkImg);
    $(linkImg).addClass("link-img");
    $(linkImg).find("img").addClass("link-img");
});

