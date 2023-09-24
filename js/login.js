document.getElementById('submit_btn').addEventListener('click',function () {
    console.log(7);

    const emailBtn = document.getElementById('email_btn');
    const passBtn = document.getElementById('pass_btn');
    if (emailBtn.value === 'rana' && passBtn.value === '1234')
    {
        console.log('login success');
        emailBtn.value = '';
        passBtn.value = '';
        window.location.href = 'bank.html';
    }
    else {
        alert('Invalid username or password');
        emailBtn.value = '';
        passBtn.value = '';
    }
})