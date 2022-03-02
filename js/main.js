menu = document.getElementsByClassName("menu")[0]
menu_bar = document.getElementById("menu-bar")

menu_bar.addEventListener('click', ()=>{
    menu.classList.toggle('show')
})