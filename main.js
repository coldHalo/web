function scrolldiv(ID = "") {
    const thing = document.getElementById(ID);
    thing
        .scrollIntoView({behavior: "smooth"});
}

function resizeOnMove() {
    resizeTo(outerWidth = 20,outerHeight = 100);
}