# WhatsApp Chatbot

Este projeto é um chatbot para WhatsApp utilizando a biblioteca `whatsapp-web.js`. O chatbot é projetado para interagir com os usuários sobre o Programa de Formação do Patrimônio do Servidor Público (PASEP), oferecendo informações sobre saques indevidos e outras dúvidas relacionadas.

## Funcionalidades

- **Gatilho de Início:** O fluxo de conversa é iniciado quando o usuário envia a mensagem: "Olá, Entrei em contato para falar sobre meu PASEP".
- **Fluxo de Mensagens:**
  1. **Mensagem Inicial:** Pergunta ao usuário sobre o motivo do contato com opções de escolha:
     - 1: Saques indevidos no PASEP
     - 2: Outras dúvidas
  2. **Saques Indevidos:** Fornece informações sobre saques indevidos e pergunta se deseja saber mais ou se já está ciente.
  3. **Outras Dúvidas:** Permite ao usuário descrever suas dúvidas e fornece uma resposta padrão.
  4. **Informações Adicionais:** Pergunta sobre a recepção de extratos e oferece suporte adicional.
- **Respostas Dinâmicas:** Dependendo das respostas dos usuários, o chatbot leva o diálogo através de vários estágios para fornecer as informações apropriadas e suporte.

## Requisitos

Antes de executar o projeto, você precisa ter o Node.js instalado em sua máquina. Você também precisará instalar as dependências do projeto.

## Instalação

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/whatsapp-chatbot.git
   cd whatsapp-chatbot

2. **Instale as Dependências:**

   ```bash
   npm install

**Execução**
para executar use o seguinte comando
    
    ```bash
    npm app.js
    ```

Passos Adicionais 
1. **Configuração do WhatsApp Web:**
   - Abra o WhatsApp Web em seu navegador.
   - Escaneie o código QR com o WhatsApp em seu celular.
   - O chatbot enviará mensagens automaticamente para o contato selecionado.
2. Manutenção e Atualizações:
    - O chatbot pode ser personalizado para atender a diferentes necessidades.
    - Adicione mais fluxos de conversa e respostas dinâmicas conforme necessário.
    - O chatbot pode ser integrado a APIs externas para fornecer informações em tempo real.

**Contribuição**
se você deseja contribuir para o projeto, siga os seguintes passos:
1. Faça um Fork do projeto
2. Crie uma nova branch com a sua feature: `git checkout -b feature/nome-da-feature`
3. Salve as mudanças e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: nome da feature"`
4. Envie as suas alterações: `git push origin feature/nome-da-feature`
5. Abra um Pull Request

Contato 
Para mais informações ou Dúvidas, contate o desenvolvedor do projeto: Rafael por linkedin, instagram ou email.
linkedin: https://www.linkedin.com/in/rafael-cirne-medeiros-7396a2270/
instagram: https://www.instagram.com/rafaelcirn3/
email: cirnerafael06@gmail.com
