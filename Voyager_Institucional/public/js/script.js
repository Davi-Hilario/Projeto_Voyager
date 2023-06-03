function validarSession() {
    let nome = sessionStorage.NOME_USUARIO;
    let email = sessionStorage.EMAIL_USUARIO;
    let id = sessionStorage.ID_USUARIO;

    if (nome != undefined && email != undefined && id != undefined) {
        btnSair.style = 'display:block;'
        btnCadastrar.style = 'display:none;'
        liLogin.innerHTML = `<a>${nome}</a>`
        return true
    }
    return false
}

function destruirSession() {
    sessionStorage.clear()
    btnSair.style = 'display:none;'
    btnCadastrar.style = 'display:block;'
    liLogin.innerHTML = `<a href="login.html">Login</a>`

}