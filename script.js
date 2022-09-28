const button = document.getElementById("setting-button");
button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "settings") {
        button.innerText = "close"
    }
    else {
        button.innerText = "settings"
    }

})