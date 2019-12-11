const saveNotes = function(user) {
    localStorage.setItem('newUser', JSON.stringify(user))
}

let user = []



document.querySelector('#adminF').addEventListener('submit',function(e) {
    e.preventDefault()

    
    user.push({
        id:Date.now().toString(),
        name: e.target.elements.username.value,
        email:e.target.elements.email.value,
        pin:e.target.elements.pin.value,
        password:e.target.elements.password.value,
    })
    e.target.elements.username.value=''
    e.target.elements.email.value=''
    e.target.elements.pin.value=''
    e.target.elements.password.value=''

    saveNotes(user)
   
})
        