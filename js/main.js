window.addEventListener('load', ()=>{
    //Initialize AOS
    AOS.init();

    //declare variables
    let scroll = window.scrollY;

    const header = document.getElementById('header')
    const menu = document.getElementsByClassName("menu")[0]
    const menu_bar = document.getElementById("menu-bar")

    const toggle = document.getElementsByClassName("toggle")


    // loop through all navigation links with class = "toggle"
    // and addEventListener of click and point to the toggle_menu function
    Array.from(toggle).forEach(element => {
        element.addEventListener('click', toggle_menu)
    });

    menu_bar.addEventListener('click', toggle_menu)

    //toggle menu on small scren
    function toggle_menu(){
        menu.classList.toggle('show')
    }

    doSomething()

    window.addEventListener("scroll", (event) => {
        scroll = this.scrollY;
        doSomething()
    });

    function doSomething(){
        if(scroll > 5){
            header.classList.add('scroll')
            console.log(logo)
        }else{
            header.classList.remove('scroll')
        }
    }
    
})