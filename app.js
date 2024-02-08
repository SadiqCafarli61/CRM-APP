function addCustom(){
    let deleteBtn = document.querySelector(".btn")
  
    let name = document.getElementById("name").value
    let surname = document.getElementById("surname").value
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value

    let table = document.getElementById("contactTable")
    let row = table.insertRow(-1)
    let cellName = row.insertCell(0);
    let cellSurname = row.insertCell(1);
    let cellEmail = row.insertCell(2)
    let cellPhone = row.insertCell(3)

    cellName.innerHTML = name
    cellSurname.innerHTML = surname
    cellEmail.innerHTML = email
    cellPhone.innerHTML= phone
    document.getElementById("name").value = ""
    document.getElementById("surname").value=" "
    document.getElementById('email').value=''
    document.getElementById("phone").value=""

    deleteBtn.addEventListener("click", () => {
cellName.innerHTML = ""
cellSurname.innerHTML = ""
cellEmail.innerHTML = ""
cellPhone.innerHTML = ""
    })
}