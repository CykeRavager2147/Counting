
let btnOpen = document.getElementById("btno");
let btnClose = document.getElementById("btnc");
let sidebar = document.getElementById("sidebar");

function trans1 () {
    sidebar.style.transform="translateX(0%)"
    btnClose.style.display="block"
    btnOpen.style.display="none"
};

function trans2 () {
    sidebar.style.transform="translateX(-100%)"
    btnClose.style.display="none"
    btnOpen.style.display="block"
};

btnOpen.addEventListener("click",trans1);
btnClose.addEventListener("click",trans2);
