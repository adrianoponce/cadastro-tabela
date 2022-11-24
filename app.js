function Salvar(){
    //recebe valores
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let confirmacao = document.getElementById('confirmacao').value
    let nascimento = document.getElementById('nascimento').value
    let endereco = document.getElementById('endereco').value
    let numero = document.getElementById('numero').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    //cria linha da tabela
    let linha = "<tr><td>" + nome + "<tr><td>" + sobrenome + "<tr><td>" + email + "<tr><td>" + senha + "<tr><td>" + confirmacao + "<tr><td>" + nascimento + "<tr><td>" + endereco + "<tr><td>" + numero + "<tr><td>" + cidade + "<tr><td>" + estado + "<tr><td>"
    //atribui valores na tabela
    document.getElementById('clientes').innerHTML += linha
}