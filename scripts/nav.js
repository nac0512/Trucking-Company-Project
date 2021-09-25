class Navigation {
    constructor() {
        document.querySelector("#navbarToggleExternalContent").addEventListener("click", (e)=>this.toggle(e));

        const sections = document.querySelectorAll("section");
        const navLi = document.querySelectorAll("header nav li a");
        window.onscroll = () => {
        let current = "";

            sections.forEach((section) => {
                const smallToMedScreen = window.matchMedia("(max-width: 995px)");
                const sectionTop = section.offsetTop;

                if(smallToMedScreen.matches) {
                    if (pageYOffset >= sectionTop - 300) {
                        current = section.getAttribute("id");
                    }
                    console.log("test1");
                }
                else {
                    if (pageYOffset >= sectionTop - 120) {
                        current = section.getAttribute("id");
                    }

                    console.log("test2");
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