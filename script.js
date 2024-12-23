function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subj').value;
    const message = document.getElementById('mess').value;

    if (name && email && subject  && message) {
        alert("Form submitted successfully!");
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('subj').value = '';
        document.getElementById('mess').value = '';
    } else {
        alert("Error: Please fill in all fields.");
    }
}

var loader = document.getElementsByClassName('backLoader');
window.addEventListener('load', function(){
    loader.style.display = "none";
})