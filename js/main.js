window.addEventListener('load', ()=>{
    const menu = document.getElementsByClassName("menu")[0]
    const menu_bar = document.getElementById("menu-bar")
    const toggle = document.getElementsByClassName("toggle")

    console.log(toggle)

    Array.from(toggle).forEach(element => {
        element.addEventListener('click', toggle_menu)
    });

    menu_bar.addEventListener('click', toggle_menu)

    function toggle_menu(){
        menu.classList.toggle('show')
    }
})