class Navigation {
    constructor() {
        document.querySelector("#navbarToggleExternalContent").addEventListener("click", (e)=>this.toggle(e));
    }

    toggle(e) {
        document.querySelector("#navButton").classList.toggle("collapsed");
        document.querySelector("#navButton").setAttribute("aria-expanded", "false");
        document.querySelector("#navbarToggleExternalContent").classList.toggle("show");
    }
}