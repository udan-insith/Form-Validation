const username = document.getElementById("username")
const password = document.getElementById("password")
const errorMsg = document.querySelector(".error")
const form = document.querySelector(".form")
const loginBtn = document.querySelector(".login-btn")
const clearBtn = document.querySelector(".clear-btn")

loginBtn.addEventListener('click', function(e) {
    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push("Your Username is not available at the moment")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorMsg.innerText = messages.join(", ")
    }
})

clearBtn.addEventListener('click', function(e) {
    errorMsg.innerText = ""
})