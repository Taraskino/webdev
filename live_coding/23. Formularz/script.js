window.onload = function () {
    let username = document.getElementById('username');
    let error = document.getElementById('error');


    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateUsername()) {
            window.alert('Formularz zostal wyslany')
            hideError();
        }
    });

    function validateUsername() {
        let userValid = true;
        if (!chekRequired()) {
            userValid = false;
            showErrorText('nazwa użytkownika nie powinna byc pusta')
        } else if (!checkMinMaxLength()){
            userValid = false;
        showErrorText('nazwa użytkownika powinna miec dłógość od 3 do 10 znakó')
        }

        return userValid;
    }


    function chekRequired(){
        return username.value.length > 0;
    }
    function checkMinMaxLength(){
        return.username.value.length >= 3 && username.value.length <=10;
    }

    function showErrorText(err){
        error.textContent = err;
        error.removeAttribute('hidden')
    }
    function hideError(){
        error.setAttribute('hidden', '')
    }
};