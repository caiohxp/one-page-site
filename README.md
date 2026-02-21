Acrostia - One Page Site
Este projeto consiste em um site de página única (one-page) moderno e responsivo, desenvolvido para demonstrar habilidades em estruturação de layout, estilização avançada com SASS e manipulação dinâmica de elementos com JavaScript puro (Vanilla JS).

🚀 Tecnologias Utilizadas
HTML5: Estruturação semântica.

SASS/CSS3: Estilização modularizada, uso de variáveis, nesting e Media Queries para responsividade.

JavaScript (Vanilla): Lógica do carrossel, menu dropdown e efeitos de scroll.

JSON: Armazenamento de dados dinâmicos para as imagens e títulos do carrossel.

📋 Funcionalidades
Carrossel Dinâmico: Um sistema de carrossel desenvolvido do zero (sem bibliotecas externas), que consome dados de um ficheiro JSON local para renderizar imagens e títulos.

Menu Dropdown Responsivo: Navegação adaptada para dispositivos móveis com acionamento via menu hambúrguer.

Scroll Suave: Navegação fluida entre as secções da página através de âncoras.

Destaque Dinâmico de Menu: O item do menu de navegação altera a sua cor de fundo automaticamente ao navegar ou fazer scroll pelas secções (Home, Services, Contacts).

Design Responsivo: Layout totalmente adaptável para ecrãs de diferentes tamanhos (Mobile, Tablet e Desktop).

📂 Estrutura do Projeto
O projeto segue uma organização de pastas focada na modularidade:

/base: Ficheiros de reset e definições de fontes.

/img: Ativos de imagem e padrões de fundo.

/layouts: Secções específicas do site e configurações de Media Queries.

/script: Lógica JavaScript dividida por funcionalidades.

home.json: Fonte de dados para o conteúdo dinâmico.

🔧 Como Executar o Projeto
Clone este repositório:

Bash

git clone https://github.com/caiohxp/one-page-site.git
Abra o ficheiro index.html no seu navegador de preferência.

Nota: Como o projeto realiza uma requisição XMLHttpRequest para ler o ficheiro home.json, recomenda-se abrir o projeto utilizando um servidor local (como a extensão "Live Server" do VS Code) para evitar erros de CORS.

📄 Licença
Este projeto está sob a licença MIT. Consulte o ficheiro LICENSE para mais detalhes.

Desenvolvido por Caio Cesar.