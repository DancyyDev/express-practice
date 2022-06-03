
let deleteOne = document.querySelectorAll('.fa-trash-can')
let updateOne = document.querySelectorAll('.fa-wrench')

// update.addEventListener('click', deleteOne)

// function deleteOne(e) {
//     console.log(e.path.childNodes[1])

// }

Array.from(updateOne).forEach(function(element) {
  element.addEventListener('click', function(){

    const updateStyle = this.parentNode.parentNode.childNodes[9]
    console.log(updateStyle)
    updateStyle.classList.toggle('popUp')
  });
});


Array.from(deleteOne).forEach(function(element) {
    element.addEventListener('click', function(){

      const practiceId = this.parentNode.parentNode.id

      fetch('/deleteThat', {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          '_id': practiceId
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
    });
});
