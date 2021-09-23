class Navigation {
    constructor() {
        document.querySelector("#navbarToggleExternalContent").addEventListener("click", (e)=>this.toggle(e));

        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("header nav li a");
        window.onscroll = () => {
        let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if(window.matchMedia("(min-width: 300px)")) {
                    if (pageYOffset >= sectionTop - 755) {
                        current = section.getAttribute("id");
                    }
                }
                else if(window.matchMedia("(min-width: 996px)")) {
                    if (pageYOffset >= sectionTop - 235) {
                        current = section.getAttribute("id");
                    }
                }
            });

            navLi.forEach((li) => {
                li.classList.remove("currentScroll");
                if (li.classList.contains(current)) {
                li.classList.add("currentScroll");
                }
            });
        };
    }

    toggle(e) {
        document.querySelector("#navButton").classList.toggle("collapsed");
        document.querySelector("#navbarToggleExternalContent").classList.toggle("show");
    }
}