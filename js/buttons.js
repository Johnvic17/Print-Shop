const buttonsScript = document.currentScript;

const projectRoot = new URL("../", buttonsScript.src);

document.addEventListener("click", (e) => {

    const el = e.target.closest("[data-action]");

    if (!el) return;

    e.preventDefault();

    const action = el.dataset.action;

    switch (action) {

        case "about":
            window.location.href = new URL(
                "pages/about/about.html",
                projectRoot
            );
            break;

        case "services":
            window.location.href = new URL(
                "pages/services/services.html",
                projectRoot
            );
            break;
            
         case "home":
            window.location.href = new URL(
                "index.html",
                projectRoot
            );
            break; 

        default:
            console.warn("Ação não tratada:", action);
    }

});


// =========================
// NAVBAR AO ROLAR
// =========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar-fixed");

    if (!navbar) return;

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});