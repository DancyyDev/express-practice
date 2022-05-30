console.log('hello')
let deleteOne = document.querySelectorAll('.fa-trash-can')
let updateOne = document.querySelectorAll('.fa-wrench')

// update.addEventListener('click', deleteOne)

// function deleteOne(e) {
//     console.log(e.path.childNodes[1])

// }
Array.from(updateOne).forEach(function(element) {
    element.addEventListener('click', function(){

        const name = this.parentNode.parentNode.childNodes[1].innerText
        const element = this.parentNode.parentNode.childNodes[3].innerText
        const style = this.parentNode.parentNode.childNodes[5].innerText

      fetch('/update', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'name': name,
          'element': element,
          'style': style
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


Array.from(deleteOne).forEach(function(element) {
    element.addEventListener('click', function(){

      const name = this.parentNode.parentNode.childNodes[1].innerText
      const element = this.parentNode.parentNode.childNodes[3].innerText
      const style = this.parentNode.parentNode.childNodes[5].innerText
      
      fetch('/deleteThat', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          'name': name,
          'element': element,
          'style': style
        })
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
    });
});
