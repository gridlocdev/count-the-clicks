window.onload = () => {

    let clickNumber = 0;
    document.getElementById("numberOfClicks").textContent = 0;

    document.querySelector("main").addEventListener("click", () => {
        clickNumber++;
        document.getElementById("numberOfClicks").textContent = clickNumber;
    });

}
