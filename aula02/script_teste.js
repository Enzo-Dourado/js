var valor = prompt('Qual seu salário? Digite o valor em números:')
alert(`O seu salário em reais é ${valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}`)