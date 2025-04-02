document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    if (noButton) {
        noButton.addEventListener("mouseover", function() {
            this.style.position = "absolute";
            this.style.left = Math.random() * 80 + "vw";
            this.style.top = Math.random() * 80 + "vh";
        });
    }

    const yesButton = document.getElementById("yes");
    if (yesButton) {
        yesButton.addEventListener("click", function() {
            window.location.href = "../html/mystere.html";
        });
    }

    const submitCode = document.getElementById("submitCode");
    if (submitCode) {
        submitCode.addEventListener("click", function() {
            let code = document.getElementById("code").value;
            let chestImage = document.getElementById("chestImage");
            let chestSound = document.getElementById("chestSound");

            if (code === "7") {
                chestImage.src = "../images/coffre-ouvert.png";
                chestSound.play();
                setTimeout(() => {
                    window.location.href = "../html/surprise.html";
                }, 2000);
            } else {
                document.getElementById("message").innerText = "Mauvais code, réessaie !";
            }
        });
    }
});




