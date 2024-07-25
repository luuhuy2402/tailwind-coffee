const topMenu = document.getElementById('xx-top-menu')
const toggleTopMenuIcon = document.getElementById('xx-toggle-top-menu-icon')

document.addEventListener('click',(e) => {
    if(toggleTopMenuIcon.contains(e.target)){
        topMenu.classList.toggle('xx-topmenu-expanded')
        topMenu.classList.toggle('hidden')
        
    }
    else {
        if(topMenu.classList.contains('xx-topmenu-expanded')){
            topMenu.classList.remove('xx-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
