let navBarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navBarDiv.classList.add('navbar-cng')
    } else {
        navBarDiv.classList.remove('navbar-cng')
    }
});

// 

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowButton = document.getElementById('navbar-show-btn');
const navbarCloseButton = document.getElementById('navbar-close-btn');

// Show navbar
navbarShowButton.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-collapse-row');
});

// Hide navbar
navbarCloseButton.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-collapse-row');
});

document.addEventListener('click', function(e){
    if(!navbarCollapseDiv.contains(e.target) && !navbarShowButton.contains(e.target)){
        navbarCollapseDiv.classList.remove('navbar-collapse-row');
    }
});

// stopping transition and animation during windows resizing
let resizeTimer;
window.addEventListener('resize', function (){
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper')
    }, 400)
})

// Light/dark mode toggle
let darkMode = localStorage.getItem("darkmode");
const modeToggleButton = document.getElementById('theme-toggle-btn');

if(darkMode !== null){
    if(darkMode == "on"){
        modeToggleButton.checked = true;
        document.querySelector('body').classList.add("dark-mode");
    }
}

modeToggleButton.addEventListener("click", function(){
    if(modeToggleButton.checked){
        document.querySelector('body').classList.add('dark-mode');
        localStorage.setItem("darkmode", "on");
    }else{
        document.querySelector('body').classList.remove('dark-mode');
        localStorage.setItem("darkmode", "off");
    }
})