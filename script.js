function login() {
    const correctModmeId = '123456';
    const correctPassword = '78900';

    const ModmeId = document.getElementById('ModmeId').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (ModmeId === correctModmeId && password === correctPassword) {
        errorMessage.textContent = 'Siz spacega kirdingiz';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.textContent = 'ID yoki Parol xato';
        errorMessage.style.color = 'red';
    }
}
