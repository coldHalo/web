function scrolldiv(ID = "") {
    const thing = document.getElementById(ID);
    thing
        .scrollIntoView({behavior: "smooth"});
}