const toggleThemeBtns = document.querySelectorAll(".toggle-theme");

const subMenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu")

const navOpenBtn = document.querySelector(".nav-icon")
const navCloseBtn = document.querySelector(".nav-close-btn")

const nav = document.querySelector(".nav")



const cartOpenBtn = document.querySelector(".cart-icon")
const cartCloseBtn = document.querySelector(".cart-close-btn")
const cart = document.querySelector(".cart")
const overlay = document.querySelector(".overlay")

toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})
subMenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu--open");
})


navOpenBtn.addEventListener("click", () => {
    nav.classList.remove("-right-64")
    nav.classList.add("right-0")
    overlay.classList.add("overlay--visible")
    overlay.addEventListener("click", closeNav)
})

cartOpenBtn.addEventListener("click", (e) => {
    cart.classList.remove("-left-64")
    cart.classList.add("left-0")
    overlay.classList.add("overlay--visible")
    overlay.addEventListener("click", closeCart)
})

function closeCart() {
    cart.classList.remove("left-0");
    cart.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
}
function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
}

cartCloseBtn.addEventListener("click", closeCart)
navCloseBtn.addEventListener("click", closeNav)

