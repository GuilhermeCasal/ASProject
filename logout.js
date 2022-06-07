var logoutButton = document.getElementById("logout");
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        console.log("clicked");
        localStorage.setItem("auth", false);
        window.location.href = "index.html";
    });
}