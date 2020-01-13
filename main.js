function toggleActiveTab(event) {
  var tabElements = document.querySelectorAll('.nav-item')

  tabElements.forEach(element => {
    if (element.classList.contains('active')) {
      element.classList.remove('active')
    }
  })

  if (!event.target.classList.contains('navbar-brand')) {
    event.target.classList.add('active')
  } else if (event.target.classList.contains('navbar-brand')) {
    tabElements[0].classList.add('active')
  }
}
