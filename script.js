const validUsers = [
    { username: '9989634265', password: '9989634265' }
 
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('file-store').style.display = 'block';
    } else {
        errorMsg.textContent = 'Invalid username or password';
    }
}
document.getElementById('search').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let fileItems = document.querySelectorAll('.file-item');
    
    fileItems.forEach(function(item) {
        let text = item.querySelector('span').textContent;
        if (text.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
