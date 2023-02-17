// function openNav() {
//     document.getElementById("mainNav").style.width = "100%";
//     document.getElementById("mainNav").style.height = "100%";
// }
// function closeNav() {
//     document.getElementById("mainNav").style.width = "0%";
// }

function openNav() {
    document.getElementById("mainNav").style.width = "100%";
    document.getElementById("mainNav").style.height = "100%";
    document.getElementById("navBox").style.background = "rgba(0,0,0,.5)";
    document.getElementById("navBox").style.width = "100vw";
    document.getElementById("svg-button-box").style.background = "rgba(0,0,0,0)";
    document.getElementById("svg-button-box").style.border = "none";
}
function closeNav() {
    document.getElementById("mainNav").style.width = "0%";
    document.getElementById("navBox").style.width = "250px";
    document.getElementById("navBox").style.background = "rgba(0,0,0,0)";
    document.getElementById("svg-button-box").style.background = "rgba(0,0,0,0.5)";
    document.getElementById("svg-button-box").style.border = "solid .1rem #ffffff"
}