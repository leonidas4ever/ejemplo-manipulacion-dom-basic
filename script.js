const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const presult = document.querySelector("#result")
const form = document.querySelector("#form")


function sumarValores (event){
    const sum = parseInt(input1.value) + parseInt(input2.value)
    presult.innerHTML = sum
    event.preventDefault()
}

form.addEventListener("submit",sumarValores)










