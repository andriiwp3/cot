document.addEventListener('DOMContentLoaded', () => {
   const changeStepButtons = () => {
      const buttons = document.querySelectorAll('.cl')

      buttons.forEach(button => {
         button.addEventListener('click', e => {
            e.preventDefault()
            const to = button.getAttribute('href').split('#')[1]
            changeActiveScreen(to)
         })
      })
   }
   changeStepButtons()

   const changeActiveScreen = screenNum => {
      const currentScreen = document.querySelector('.login__screen.active')
      const nextScreen = document.querySelector(`.login__screen_${screenNum}`)
      currentScreen.classList.remove('active')
      nextScreen.classList.add('active')
   }

	const formLogin = document.querySelector('.form-login')
	
   formLogin.addEventListener('submit', e => {
      e.preventDefault()
      window.location.replace('/cot/')
   })
})
