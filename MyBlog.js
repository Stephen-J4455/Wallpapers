const hamMenu = document.querySelector(".box");
hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
});

function toggle() {
    var menu = document.getElementById("dyMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
    var settingMenu = document.getElementById("setMenu");
    if (settingMenu.style.display === "block") {
        settingMenu.style.display = "none";
    }
}

const settingMenu = document.querySelector(".set");
settingMenu.addEventListener("click", () => {
    settingMenu.classList.toggle("sett");
});

function setClick() {
    var settingMenu = document.getElementById("setMenu");
    if (settingMenu.style.display === "block") {
        settingMenu.style.display = "none";
    } else {
        settingMenu.style.display = "block";
    }
}

const longMenu = document.querySelector(".categoryIcon");
longMenu.addEventListener("click", () => {
    longMenu.classList.toggle("activate");
});

function catMenu() {
    var longMenu = document.getElementById("categoryMenu");
    if (longMenu.style.display === "block") {
        longMenu.style.display = "none";
    } else {
        longMenu.style.display = "block";
    }
}

function dark() {
    const body = document.querySelector("body");
    body.classList.toggle("darkMode");
    const cat = document.querySelector(".categoryIcon");
    cat.classList.toggle("darkMode");
    const menu = document.querySelector(".menu");
    menu.classList.toggle("darkMode");
    const search = document.querySelector(".search-bar");
    search.classList.toggle("darkMode");
    const submit = document.querySelector(".submit");
    submit.classList.toggle("darkMode");
    const box = document.querySelector(".box");
    box.classList.toggle("darkMode");
    const settingMenu = document.querySelector(".set-menu");
    settingMenu.classList.toggle("darkMode");
    const boxMenu = document.querySelector(".menu-box");
    boxMenu.classList.toggle("darkMode");
    const menuA = document.querySelector(".menu a");
    menuA.classList.toggle("darkMode");
    const menuboxA = document.querySelector(".menu-box a");
    menuboxA.classList.toggle("darkMode");
    const setmenu = document.querySelector(".set-menu span");
    setmenu.classList.toggle("darkMode");
    const icon = document.querySelector(".icons");
    icon.classList.toggle("darkMode")
}

function reveal() {
  var reveals = document.querySelectorAll(".hidden");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("activated");
    } else {
      reveals[i].classList.remove("activated");
    }
  }
}

window.addEventListener("scroll", reveal);

function searchFunction() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById('nameList');
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}