# Website Eletricista Francisco

Este é um website institucional de alta conversão desenvolvido para o **Eletricista Francisco**, baseado no design planejado no Google Stitch. O site é totalmente responsivo, possui suporte nativo a temas claro/escuro (Dark Mode) com salvamento de preferências e está otimizado para atração de clientes e solicitações de orçamento via formulário e WhatsApp.

---

## 🚀 Como Visualizar Localmente

O site foi desenvolvido em **HTML5, CSS3 e JavaScript puros** (Vanilla), sem a necessidade de instalar frameworks ou pacotes pesados, o que garante um carregamento instantâneo.

Para visualizar o site no seu computador:
1. Navegue até a pasta `EletricistaFrancisco`.
2. Dê um clique duplo no arquivo `index.html` para abri-lo diretamente em qualquer navegador (Chrome, Edge, Firefox, etc.).
3. *Opcional:* Se você estiver usando o VS Code, pode usar a extensão **Live Server** para rodar um servidor de testes local com atualização em tempo real.

---

## 📁 Estrutura de Arquivos

* **`index.html`**: Contém a estrutura de conteúdo semântico, metatags de SEO para mecanismos de busca, links de compartilhamento social (Open Graph) e as seções estruturadas (Início, Serviços, Sobre, Portfólio e Contato).
* **`styles.css`**: Contém a identidade visual sob a paleta **Voltage Professional** (Azul Confiança e Amarelo Alerta), layouts adaptáveis (Flexbox/Grid), efeitos modernos de transparência (Glassmorphism) e as variáveis de cores para controle do modo claro/escuro.
* **`script.js`**: Contém a lógica de controle da navegação, o botão para alternar o tema escuro/claro com gravação no `localStorage`, destaque do menu por rolagem e validação interativa com feedback de envio do formulário de contato.

---

## 🛠️ Personalização dos Dados de Contato

Os dados de contato do site estão atualmente configurados com **placeholders padrão para o Francisco**. Para substituir pelos dados finais:

1. Abra o arquivo `index.html` e procure pelos seguintes campos para editar:
   * **Telefone de Emergência (Barra do Topo):** Linha 29 (altere o número no link `href="tel:+5511999999999"` e no texto do botão).
   * **Botão do WhatsApp (Cabeçalho):** Linha 45 (altere o link do WhatsApp `href="https://wa.me/5511..."` com o DDI e DDD corretos).
   * **Contatos das Seções Hero e Contato:** Linhas 63, 66, 318 e 325 (atualize os números de telefone e links do WhatsApp correspondentes).
2. O formulário de contato na seção final simula o envio do e-mail. Caso deseje conectar a um serviço real de envio (como Formspree, Web3Forms ou um backend personalizado), basta alterar o atributo `action` da tag `<form>` na linha 287 do `index.html`.

---

## 🎓 Certificações Destacadas
O conteúdo enfatiza o cumprimento das normas brasileiras de segurança do setor:
* **NR-10**: Segurança em Instalações e Serviços em Eletricidade.
* **NR-35**: Trabalho em Altura.
* **NBR 5410**: Instalações Elétricas de Baixa Tensão.
