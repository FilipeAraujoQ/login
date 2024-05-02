//DARK MODE
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon'); //trocar o icone da lua
        mode.classList.add('fa-sun');

        form.classList.add('dark'); //aqui é a magica
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});

//verificação
function logar(){

    var login = document.getElementById('name').value;
    var senha = document.getElementById('password').value;

    if(login == "admin" && senha == "admin"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}

