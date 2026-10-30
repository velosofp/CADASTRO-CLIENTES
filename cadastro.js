function funcaoCadastrarCliente() {
    //identifica os campos no HTML e pega os valores.
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const telefone = document.getElementById('telefone').value

    //Verifica se os campos estão vazios, "!" Indica que está vazio
    // Mostra a mensagem de alerta no navegador.
    if (!nome || !email || !telefone) {
        alert('Por favor, preencha os campos.')
        return
    }

    // Cria uma variavél com os dados do cliente.
    const novoCliente ={nome, email, telefone}

    // Pega a lista do clientes já existente ou cria uma vazia.
    let listaClientes  = JSON.parse(localStorage.getItem('clientes')) || []

    // Aciona um novo cliente na lista.
    listaClientes.push(novoCliente)

    // Salva no localStorage (Armazenamento local no navegador)
    localStorage.setItem('clientes', JSON.stringify(listaClientes))

    //Mensagem do navegador confirmando salvamento.
    alert('Cliente cadastrado com sucesso!')

    // Limpa o formulario
    document.getElementById('formulario-cadastro').reset()
}