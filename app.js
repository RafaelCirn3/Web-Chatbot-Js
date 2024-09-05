const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Iniciando o cliente do WhatsApp Web
const client = new Client({
    authStrategy: new LocalAuth(),
});

// Mostrar o QR code no Terminal
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// Variável para armazenar o estado da conversa
let userState = {};

// Definir o fluxo de mensagens do chatbot
client.on('message', message => {
    const chatId = message.from; // ID único do usuário
    const userMessage = message.body.toLowerCase(); // Mensagem do usuário em minúsculas

    // Proíbe de responder em grupos
    if (chatId.includes('@g.us')) {
        return;
    }

    // Se o usuário não tiver estado, inicialize o estado dele
    if (!userState[chatId]) {
        userState[chatId] = { stage: 0 }; // Começa no estágio 0
    }

    const userStage = userState[chatId].stage;

    // Gatilho para iniciar o fluxo de conversa
    if (userStage === 0) {
        if (userMessage === 'olá, entrei em contato para falar sobre meu pasep') {
            client.sendMessage(chatId, 'Olá! Obrigado por entrar em contato sobre o PASEP. Eu sou Daniel, advogado especialista em contratos bancários com foco em consumidores. Como posso ajudá-lo(a) hoje?\n1. Quero saber sobre saques indevidos no PASEP.\n2. Outras dúvidas.');
            userState[chatId].stage = 1; // Após o gatilho, vai para o estágio 1
        } 
    }

    // Fluxo de diálogo após o gatilho
    else if (userStage === 1) {
        if (userMessage === '1') {
            client.sendMessage(chatId, 'Em 2023, o Superior Tribunal de Justiça decidiu que o Banco do Brasil deve responder por saques indevidos e má gestão de valores em contas PASEP. Para garantir que o seu caso seja tratado da melhor maneira, recomendo contratar um advogado especializado que poderá acompanhar todo o processo e tomar as medidas legais cabíveis.\n\nGostaria de saber mais sobre como podemos ajudá-lo?\n1. Sim, gostaria de saber mais.\n2. Não, já estou ciente.');
            userState[chatId].stage = 2;
        } else if (userMessage === '2') {
            client.sendMessage(chatId, 'Por favor, me diga qual é a sua dúvida específica sobre o PASEP ou outros assuntos relacionados.');
            userState[chatId].stage = 10; // Outros tópicos, estado específico
        } else {
            client.sendMessage(chatId, 'Opção inválida. Por favor, escolha uma das opções acima.');
        }
    }

    else if (userStage === 2) {
        if (userMessage === '1') {
            client.sendMessage(chatId, 'Faz mais de 30 dias úteis desde que você solicitou os extratos ou a microfilmagem ao Banco do Brasil?\n1. Sim, faz mais de 30 dias úteis.\n2. Não, faz menos de 30 dias úteis.');
            userState[chatId].stage = 3;
        } else if (userMessage === '2') {
            client.sendMessage(chatId, 'Para que o processo seja conduzido de forma mais eficiente e seus direitos assegurados, recomendo contratar nossos serviços. Estamos prontos para auxiliar em todo o processo jurídico e resolver a questão com o Banco do Brasil da maneira mais rápida e eficiente.\n\nGostaria de continuar com o nosso suporte?\n1. Sim, gostaria de contratar.\n2. Não, obrigado.');
            userState[chatId].stage = 5;
        } else {
            client.sendMessage(chatId, 'Opção inválida. Por favor, escolha uma das opções acima.');
        }
    }

    else if (userStage === 3) {
        if (userMessage === '1') {
            client.sendMessage(chatId, 'Você já recebeu os extratos ou a microfilmagem?\n1. Sim, já recebi.\n2. Não, ainda não recebi.');
            userState[chatId].stage = 4;
        } else if (userMessage === '2') {
            client.sendMessage(chatId, 'Sabemos que os prazos podem ser demorados. Por isso, com o acompanhamento de um advogado, podemos agilizar o processo e garantir que você obtenha todos os documentos necessários e tome as medidas adequadas. Gostaria de contratar nosso serviço para auxiliá-lo?\n\n1. Sim, quero contratar.\n2. Não, obrigado.');
            userState[chatId].stage = 5;
        } else {
            client.sendMessage(chatId, 'Opção inválida. Por favor, escolha uma das opções acima.');
        }
    }

    else if (userStage === 4) {
        if (userMessage === '1') {
            client.sendMessage(chatId, 'Ótimo! Agora que você já tem os extratos, recomendo que um advogado revise todos os detalhes para garantir que não haja irregularidades. Caso prefira, posso ajudá-lo com essa análise. Podemos prosseguir com a contratação do serviço?\n\n1. Sim, quero contratar.\n2. Não, obrigado.');
            userState[chatId].stage = 6;
        } else if (userMessage === '2') {
            client.sendMessage(chatId, 'Recomendo fortemente que você nos contrate para garantir que todos os documentos sejam analisados corretamente e que não haja nenhum problema. Caso mude de ideia, estarei à disposição.');
            userState[chatId].stage = 6; // Reinicia o fluxo após a recepção dos extratos
        } else {
            client.sendMessage(chatId, 'Opção inválida. Por favor, escolha uma das opções acima.');
        }
    }

    else if (userStage === 5) {
        if (userMessage === '1') {
            client.sendMessage(chatId, 'Estamos à disposição para oferecer todo o suporte necessário na contratação. Nosso escritório pode acompanhar o processo e garantir que todas as providências sejam tomadas. Entre em contato para dar continuidade e resolver sua situação da melhor maneira.');
            userState[chatId].stage = 0; // Reinicia o fluxo
        } else if (userMessage === '2') {
            client.sendMessage(chatId, 'Entendido! Caso mude de ideia ou tenha mais dúvidas no futuro, estarei à disposição. Obrigado!');
            userState[chatId].stage = 0; // Reinicia o fluxo
        } else {
            client.sendMessage(chatId, 'Opção inválida. Por favor, escolha uma das opções acima.');
        }
    }

    else if (userStage === 6) {
        if (userMessage === '1') {
            client.sendMessage(chatId, 'Estamos à disposição para ajudá-lo com a contratação e análise dos documentos. Por favor, entre em contato para prosseguir com a contratação do serviço.');
            userState[chatId].stage = 0; // Reinicia o fluxo
        } else if (userMessage === '2') {
            client.sendMessage(chatId, 'Recomendo que nos contrate para garantir que todos os documentos sejam analisados corretamente e que não haja nenhum problema. Caso mude de ideia, estarei à disposição.');
            userState[chatId].stage = 0; // Reinicia o fluxo
        } else {
            client.sendMessage(chatId, 'Opção inválida. Por favor, escolha uma das opções acima.');
        }
    }

    else if (userStage === 10) {
        client.sendMessage(chatId, 'Obrigado pela sua pergunta. Estarei analisando e retornarei em breve com mais informações. Caso queira contratar nossos serviços para ajudar com o processo, estaremos prontos para ajudar.');
        userState[chatId].stage = 0; // Reinicia o fluxo após outras dúvidas
    }
});

// Inicializar o cliente
client.initialize();
