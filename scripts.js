const changeSwitch = document.getElementById('change-switch')

changeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark')
  return console.log("funcionando!")
})

