const date = new Date()
let num = date.getDate();

const cells = document.querySelectorAll(".cell");

cells.forEach(element => {
    element.addEventListener("click", (e) => {
        if (element.innerHTML > num) {
            alert("Még nem nyithatod ki! >:(");
            return;
        }
        else if(element.innerHTML == num) {
            alert("Kaptál egy csokit! :)");
            element.innerHTML = "Kinyitva!";
            element.classList.add("inactive");
            element.style.pointerEvents = "none";
        }
    })
})

cells.forEach(elem => {
    if (elem.innerHTML < num) {
        elem.innerHTML = "Kinyitva!";
        elem.classList.add("inactive");
        elem.style.pointerEvents = "none";

    }
})