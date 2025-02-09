document.addEventListener("DOMContentLoaded", () => {
    // Recupera o nome do usuário do localStorage
    const nomeUsuario = localStorage.getItem("usuario");

    // Definindo as mensagens com frases separadas corretamente
    const mensagens = {
        "AGUARDANDO ESTOQUE": `XXXX, bom dia!

Vi aqui que o seu pedido não foi despachado por não termos o mesmo disponível em nosso estoque, por isso, te atendemos com ativação do voucher no seu cadastro.

Seu voucher já está disponível no seu cadastro, agora é só o utilizar.

Você comprará normalmente, escolherá os itens, colocará no carrinho e apertará para finalizar a compra!

Ao clicar pedirá informações de pagamento, perto do campo de adicionar dados do cartão.

É só selecionar que debitará o pedido!

Qualquer dúvida, ficamos à disposição!

Atenciosamente,
${nomeUsuario}
Equipe Backoffice`,

        "VALE ATIVO": `XXXX, bom dia!

Seu vale compras já está disponível no seu cadastro, agora é só o utilizar.

Você vai seguir os passos para finalizar a compra, escolher os itens, colocar no carrinho e apertar para finalizar a compra!

Ao clicar vai pedir informações de pagamento, perto do campo de adicionar dados do cartão.

É só selecionar que vai debitar o pedido!

Qualquer dúvida, estamos à disposição.

Atenciosamente,
${nomeUsuario}
Equipe Backoffice`,

        "RESERVADO PARCIALMENTE": `Olá, XXXX, tudo bem?

Primeiramente, peço desculpas pelo transtorno que essa situação causou para você.

Analisei o seu pedido e notei que o mesmo ainda não havia sido liberado, pois estava aguardando estoque, então o pedido foi liberado. Porém, o xxxxxxxxxxxxxxxxxx não estava disponível para envio e, por isso, foi cancelado. O valor será devolvido como vale compras, ok?

Você segue o mesmo caminho de iniciar uma nova compra, escolher os itens, colocar no carrinho e apertar para finalizar a compra!

Ao clicar, vai pedir informações de pagamento, perto do campo de adicionar dados do cartão, estará assim:

VALE COMPRAS

É só selecionar que vai debitar o pedido!

Qualquer dúvida, estamos sempre à disposição!

Atenciosamente,
${nomeUsuario}
Time Netshoes`,

        "TVC LIBERADO": `XXXX, bom dia! Espero que esteja bem.

Identificamos o erro e o mesmo foi corrigido!

Podemos te atender com a troca, vale compras ou cancelamento.

Qual a melhor opção para você?

Aguardo retorno.

Atenciosamente,
${nomeUsuario}
Equipe Netshoes`,

        "REENVIO": `Olá, XXXX!

Identifiquei que o seu pedido não foi entregue porque o endereço cadastrado não foi localizado pelo transportador, por isso, o mesmo está retornando ao estoque. Peço desculpas pela situação.

Mas não se preocupe! Para podermos solicitar o reenvio, por gentileza, nos informe:

Nome da rua:
Número e complemento (ex: apartamento, bloco, lote ou etc):
Bairro:
Cidade:
Estado:
CEP:
Ponto(s) de referência:
Informações do imóvel (ex: cor do portão e do muro):
Nome do destinatário:
Telefone(s) de contato:

Se quiser, podemos prosseguir com o cancelamento ou vale compras.

Qualquer dúvida, estamos sempre à disposição!

Atenciosamente,
${nomeUsuario}
Time Backoffice`,

        "nota-fiscal": `Olá,

Segue em anexo a sua nota fiscal, que já alteramos com o nome que foi solicitado.

Atenciosamente,
${nomeUsuario}
Time Backoffice`,

        "email-cds": `qualidade.cd@netshoes.com,
controledeestoquenets1@netshoes.com`,

"extravio": `Olá, XXXX. Tudo bem? Espero que sim!
 
Após análise do seu pedido, identificamos que houve um extravio. Pedimos desculpas pelo transtorno, pois nosso objetivo é sempre proporcionar a melhor experiência de compra.
 
Não se preocupe, já criamos um novo pedido nº xxxx, que será liberado pelo setor comercial em até 2 dias úteis, ou seja, até o dia XX/02/2025. Após a aprovação, o item será despachado em 2 dias úteis. A entrega será feita conforme o prazo da sua região, x dias úteis.
 
Qualquer dúvida, estamos à disposição!


Atenciosamente,
${nomeUsuario}
Time Backoffice`,
    };

    // Função para copiar texto e alterar o botão temporariamente
    const copiarTexto = (id) => {
        const mensagem = mensagens[id];
        if (mensagem) {
            navigator.clipboard.writeText(mensagem).then(() => {
                const botao = document.getElementById(id);
                botao.textContent = "Copiado!";
                botao.classList.add("copiado");
                setTimeout(() => {
                    botao.textContent = botao.getAttribute("aria-label");
                    botao.classList.remove("copiado");
                }, 2000); // Voltar ao estado original após 2 segundos
            });
        }
    };

    // Adicionar eventos de clique a todos os botões
    Object.keys(mensagens).forEach((id) => {
        const botao = document.getElementById(id);
        if (botao) {
            botao.addEventListener("click", () => copiarTexto(id));
        }
    });
});
