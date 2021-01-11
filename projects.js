document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".project-button").onmouseenter = () => {
        document.querySelector(".grid-container").style.gridTemplateRows = "0% 0% 0% 30% 50%";
        document.querySelector(".navbar").style.visibility  = "visible";
        document.querySelector(".navbar").style.GridRow  = "5";
        document.querySelector("#arrow").innerHTML = "▼"
    }

    document.querySelector(".grid-container").onmouseleave = () => {
        document.querySelector(".grid-container").style.gridTemplateRows = "30% 20% 20% 30%";
        document.querySelector(".navbar").style.visibility  = "hidden";
        document.querySelector(".navbar").style.GridRow  = "none";
        document.querySelector("#arrow").innerHTML = "▲";
    }
});