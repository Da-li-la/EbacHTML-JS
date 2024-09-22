const form = document.getElementById('transferencia');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const valorTransferir = document.getElementById('valor-transferir');
    const saldoDisponivel = document.getElementById('saldo-conta');
    const mensagemSucesso = `Total de: R$ ${valorTransferir.value}reais, transferido para o beneficiário: ${nomeBeneficiario.value}, retirado do saldo:R$ ${saldoDisponivel.value}!`;

    if(valorTransferir.value <= saldoDisponivel.value){
        alert(mensagemSucesso);

        nomeBeneficiario.value = '';
        valorTransferir.value = '';
        saldoDisponivel.value = '';
    }else {
        alert ("valor NÃO pode ser depositado!");
        nomeBeneficiario.value = '';
        valorTransferir.value = '';
        saldoDisponivel.value = '';
    } 
})

console.log(form);