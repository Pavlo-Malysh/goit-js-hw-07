
const formElem = document.querySelector(".login-form")

formElem.addEventListener("submit", handleFormElemSubmit)


function handleFormElemSubmit(event) {
    event.preventDefault();

    const data = {
        email: event.target.elements.email.value.trim(),
        password: event.target.elements.password.value.trim(),
    }
    if (data.email === "" || data.password === "") {
        alert("All form fields must be filled in")
    } else {
        console.log(data);
    }
    event.target.reset()
}