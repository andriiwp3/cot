document.addEventListener('DOMContentLoaded', () => {
   const burgerMenu = () => {
      let iconsMenu = document.querySelectorAll('.icon-menu')
      let body = document.querySelector('body')
      let menuBody = document.querySelector('.menu__body')
      if (iconsMenu) {
         iconsMenu.forEach(icon => {
            icon.addEventListener('click', () => {
               body.classList.toggle('lock')
               menuBody.classList.toggle('active')
            })
         })
      }
   }
   burgerMenu()
})
