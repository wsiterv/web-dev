
function rpage() {
    var uname = document.getElementById('name');
    var roll = document.getElementById('roll');

    if (uname.value.trim() === '' || roll.value.trim() === '') {
        alert('Please enter both your name and roll number.');
    } else {
        window.location.replace('2.html');
    }
}
