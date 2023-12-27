let submitForm = document.querySelector("form")
submitForm.addEventListener("click",(e)=>{
    e.preventDefault()
})
let studentName = ''
let textFatherName = ''
let textMotherName = ''
let tbody = document.querySelector("tbody")

let stdName = document.querySelector(".stdName")
let fatherName = document.querySelector(".fatherName")
let motherName = document.querySelector(".motherName")
let submitButton = document.querySelector(".submitButton")

submitButton.addEventListener("click",()=>{
    let newTr = document.createElement("tr")
    let stdNameTd = document.createElement("td")
    let fatherNameTd = document.createElement("td")
    let motherNameTd = document.createElement("td")
    stdNameTd.textContent = stdName.value
    fatherNameTd.textContent = fatherName.value
    motherNameTd.textContent = motherName.value
    stdName.value=""
    motherName.value=""
    fatherName.value=""
    newTr.appendChild(stdNameTd)
    newTr.appendChild(fatherNameTd)
    newTr.appendChild(motherNameTd)
    tbody.appendChild(newTr)
})



