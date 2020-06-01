var getLocal = localStorage.getItem("openModalStatus");
var openModalStatus = false
console.log("get", getLocal);

if (getLocal == null) {
    openModalStatus = false;
    localStorage.setItem("openModalStatus", false);
} else {
    openModalStatus = getLocal;
}

window.addEventListener("scroll", function (event) {
    var scrollPositionTop = this.scrollY; //read height in top
    var heightOneThird = $(document).height() * 0.33333333333;
    var scrollPositionBottom = $(window).height() + $(window).scrollTop(); //read height in bottom

    var scrollPositionOneThird = ((scrollPositionBottom - scrollPositionTop) / 2) + scrollPositionTop;

    if (heightOneThird <= scrollPositionOneThird && String(openModalStatus) == "false") {
        $(".newslatter-panel").addClass("animation-open");
        openModalStatus = true;
    }
});
function closeModal() {
    $(".newslatter-panel").removeClass("animation-open");
    $(".newslatter-panel").addClass("animation-close");
    localStorage.setItem("openModalStatus", true);
}
