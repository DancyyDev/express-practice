console.log('hello')
let update = document.querySelector('.infoBox')



// update.addEventListener('click', checked)

// function checked(e) {
//   e.target
//   e.path[1].classList.add('checked')

//   const name = e.path[1].childNodes[1].classList.add('checked')
//   const Element = e.path[1].childNodes[3].classList.add('checked')
//   const Style = e.path[1].childNodes[5].classList.add('checked')

//   fetch('/update', {
//     method: 'put',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       'name': 'Dead',
//       'Element': 'Conquered',
//       'Style': 'Depricated'
//     })
//   })
//   .then(response => {
//     if (response.ok) return response.json()
//   })
//   .then(data => {
//     console.log(data)
//     window.location.reload(true)
//   })

//   console.log( name, Element, Style)

  
// }