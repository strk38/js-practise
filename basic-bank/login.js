console.log('Inside login Page');
document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('submit button clicked');

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;



    if (email === 'ib@gmail.com' && password === "ibnul") {
        window.location.href = 'bank.html';
    } else {
        console.log("Invalid");
    }

})