// Variables
const notifs = document.querySelectorAll(".notification");
const dots = document.querySelectorAll(".fa-circle");
const notifNum = document.querySelector(".num");
const markBtn = document.querySelector(".mark");

// Event listeners
markBtn.addEventListener("click", readAll);

// Functions
function readAll() {
    num = parseInt(notifNum.textContent);
    for(let i = 0; i < notifs.length; i++) {
        notifs[i].style.backgroundColor = "unset";
        if(notifs[i].querySelector(".fa-circle") != null) {
            dots[i].style.display = "none";
            if(num > 0)
            notifNum.textContent = parseInt(notifNum.textContent) - 1;
        }
    }
}
