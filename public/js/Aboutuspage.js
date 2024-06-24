const hiddenParagraph = document.querySelector("#hiddenParagraph");
const readMore = document.querySelector("#readMore");
const showLess = document.querySelector("#showLess");

readMore.onclick = showHiddenParagraph;
showLess.onclick = hideParagraph;


function showHiddenParagraph() {
    hiddenParagraph.style.display="block";
    readMore.style.display="none";
    showLess.style.display="inline-block";
}

function hideParagraph(){
    hiddenParagraph.style.display="none";
    readMore.style.display="inline-block";
    showLess.style.display="none";
}
