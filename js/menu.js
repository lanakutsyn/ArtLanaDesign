const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");

        menuButton.classList.toggle("is-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuButton.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}
