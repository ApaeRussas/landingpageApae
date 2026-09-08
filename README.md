Documentação — Site APAE Russas


Bem vindo(a) ao projeto do Site da APAE Russas! Este documento serve para auxiliar você sobre como funciona o projeto, sua estrutura e sobre como prosseguir com futuras alterações. É essencial que você leia todo o documento ou pelo menos grande parte dele antes de realizar modificações. Dito isso, boa sorte nos próximos meses de estágio.


Atenção!!! Este documento trata especificamente do site desenvolvido para a APAE Russas. Alterações relacionadas a outros sistemas ou projetos da instituição não fazem parte desta documentação e possuem suas próprias documentações.

Sumário

1.0 Introdução.

  1.1 Regras.
 
 1.2 Descrição geral do projeto.
 
 1.3 Propósito e objetivos.
 
 1.4 Contexto e motivação.
 
2.0 Instalação.

 2.1 Requisitos de sistema.
 
 2.2 Passos detalhados para a instalação.
 
3.0 Uso.

 3.1 Instruções de uso.
 
 3.2 Funcionalidades principais.
 
4.0 Arquitetura.

 4.1 Estrutura do projeto.
 
 4.2 Descrição dos componentes principais.
 
5.0 Testes.

 5.1 Como executar testes.
 
 5.2 Procedimentos para adicionar novos testes.
 
6.0 Referências.

 6.1 Referências bibliográficas ou de pesquisa.
 
7.0 Contato.

 7.1 Informações de contato para suporte.
 

1.0 Introdução

1.1 Regras

Definimos algumas regras para a atualização deste documento e dos arquivos do projeto, uma vez que você ou sua equipe terão a responsabilidade de manter as informações aqui presentes atualizadas.

N°1: Não use palavrões na documentação ou em comentários nos arquivos do projeto, seja ético(a).

N°2: Evite utilizar gírias ou linguagem excessivamente informal. Este documento poderá ser consultado por outras pessoas futuramente.

N°3: Não adicione informações fúteis à documentação. Insira somente informações relevantes para o funcionamento e manutenção do projeto.

N°4: Ao realizar alterações importantes no site, atualize esta documentação quando necessário.

N°5: Evite colocar nomes de desenvolvedores ao longo da documentação. Existe uma seção específica para informações de contato.

N°6: Antes de realizar alterações significativas no projeto, verifique o código existente para evitar modificar ou remover funcionalidades que já estejam funcionando.

N°7: Utilize o Git para versionar as alterações realizadas no projeto. Sempre que possível, faça commits descrevendo de maneira clara o que foi alterado.

N°8: Caso tenha dificuldade para modificar alguma parte do projeto, procure a documentação das tecnologias utilizadas ou peça auxílio ao responsável pelo projeto.


1.2 Descrição geral do projeto

O Site da APAE Russas é uma aplicação web desenvolvida com o objetivo de apresentar a instituição para a comunidade, divulgar suas atividades, eventos e projetos, além de disponibilizar informações de contato e formas de contribuição.
O projeto é desenvolvido principalmente utilizando HTML, CSS e JavaScript, possuindo uma estrutura simples e adequada para um site institucional.
O HTML é responsável pela estrutura e organização das páginas e seções do site. O CSS é utilizado para definir o visual, cores, espaçamentos, tipografia, cartões, imagens, responsividade e demais elementos visuais. Já o JavaScript é responsável pelas funcionalidades interativas existentes no site.
O projeto também utiliza bibliotecas externas, como Font Awesome, para os ícones, e fontes disponibilizadas pelo Google Fonts. O HTML referencia diretamente essas bibliotecas externas.

1.3 Propósito e objetivos

O principal objetivo do projeto é criar uma presença digital para a APAE Russas, permitindo que pessoas da comunidade encontrem informações importantes sobre a instituição de maneira simples e organizada.
A escolha de HTML, CSS e JavaScript permite que o projeto seja relativamente simples de compreender e modificar, facilitando sua manutenção por futuros estagiários ou responsáveis pelo site.
O HTML foi utilizado para estruturar o conteúdo, enquanto o CSS concentra a parte visual do projeto. O JavaScript foi utilizado para adicionar comportamentos interativos.
O GitHub/Git foi utilizado para o versionamento do projeto, permitindo registrar alterações, retornar a versões anteriores e trabalhar de maneira mais organizada durante o desenvolvimento.

1.4 Contexto e motivação

A criação do site surgiu da necessidade de apresentar a APAE Russas de forma mais acessível através da internet.
O site permite apresentar informações institucionais, atividades realizadas, eventos, projetos, formas de doação e canais de contato.
Dessa forma, a comunidade pode conhecer melhor o trabalho realizado pela instituição sem precisar se deslocar até a APAE para obter informações básicas.

Entre os principais benefícios do projeto estão:

Divulgação das atividades realizadas pela APAE;

Apresentação da instituição para a comunidade;

Divulgação de eventos;

Divulgação de projetos e ações;

Disponibilização de informações para contato;

Apresentação de formas de contribuição;

Facilidade de acesso às informações através da internet.


2.0 Instalação

2.1 Requisitos de sistema

Por ser um site desenvolvido utilizando HTML, CSS e JavaScript, os requisitos necessários para trabalhar no projeto são relativamente simples.

É recomendado possuir:

Computador ou notebook;

Navegador atualizado, como Google Chrome, Microsoft Edge ou Mozilla Firefox;

Visual Studio Code ou outro editor de código;

Git, caso seja necessário trabalhar com o repositório;

Conexão com a internet para carregar recursos externos utilizados pelo site.

Também é necessário manter a estrutura de arquivos do projeto, principalmente a pasta assets, pois ela contém imagens utilizadas nas diferentes seções do site.


2.2 Passos detalhados para a instalação

Para instalar o projeto através do GitHub, primeiro deve-se acessar o repositório do projeto e realizar o download dos arquivos ou utilizar o Git para cloná-lo.

Caso utilize o Git, o procedimento básico é:

git clone URL_DO_REPOSITORIO

Depois de baixar o projeto, abra a pasta utilizando o Visual Studio Code.

Verifique se os arquivos principais estão presentes, principalmente:

index.html
style.css
script.js
assets/

Também é importante verificar se as imagens utilizadas pelo site estão dentro da pasta assets, pois o HTML utiliza caminhos como assets/logo.png para carregar os arquivos.
Para visualizar o site, basta abrir o arquivo index.html em um navegador.

3.0 Uso

3.1 Instruções de uso

O site pode ser utilizado diretamente através de um navegador.

Ao acessar o endereço do site, o usuário encontra a página inicial, onde são apresentadas informações introdutórias sobre a APAE Russas.

A navegação principal permite acessar diferentes partes do site:

Início;

Sobre;

Atendimentos;

Projetos;

Notícias;

Contato.

O menu principal utiliza links internos para direcionar o usuário para as respectivas seções da página.

Também existe um botão “Quero ajudar”, que direciona para a área de doações.

3.2 Funcionalidades principais

O site possui diversas áreas destinadas à apresentação das informações da APAE Russas.

Página inicial

A página inicial apresenta a identidade da APAE Russas e uma mensagem relacionada à inclusão.
Também existem botões para acessar a seção sobre a instituição e a área de doações.
A seção inicial possui uma composição visual com imagens e elementos gráficos para tornar a apresentação mais atrativa.
Sobre a APAE
A seção Sobre apresenta informações sobre a instituição e seu trabalho.
Também são apresentados conceitos como acolhimento, desenvolvimento e inclusão.
Atendimentos e atividades
O site possui uma área destinada à apresentação das atividades realizadas pela instituição.
Entre elas estão atividades voltadas ao desenvolvimento, inclusão e participação dos assistidos.
As atividades são apresentadas através de cartões contendo imagem, ícone, título e descrição. Um dos exemplos presentes no código é o cartão de Atividades Psicomotoras.
Projetos e galeria
A área de projetos apresenta imagens relacionadas à rotina da APAE.
A galeria utiliza diferentes elementos visuais para apresentar momentos e ações realizadas pela instituição.
Doações
A seção de doações apresenta informações para pessoas que desejam contribuir com a APAE.
São disponibilizados o nome da instituição, a chave PIX e a instituição bancária.
Eventos
O site possui uma área de eventos apresentada em formato de carrossel.
Os eventos possuem imagem, mês, título e descrição. Entre os eventos cadastrados estão Dia da Síndrome de Down, Dia Mundial do Autismo, Páscoa, Dia das Mães, São João e Semana Nacional da Pessoa com Deficiência Intelectual, Múltipla e Autismo.
Contato
A área de contato disponibiliza diferentes formas para entrar em contato com a instituição.
Entre elas estão:
WhatsApp;
E-mail;
Localização através do Google Maps.
O código utiliza um link para WhatsApp e um link mailto: para o endereço de e-mail da APAE Russas.
Google Maps
O site possui um mapa incorporado através de um iframe do Google Maps, permitindo visualizar a localização da instituição diretamente na página.
Redes sociais
No rodapé são disponibilizados links para redes sociais da APAE Russas, incluindo WhatsApp e Instagram.

4.0 Arquitetura

4.1 Estrutura do projeto

A estrutura do projeto é baseada em arquivos estáticos, sem a utilização de um framework backend.
Uma estrutura recomendada para o projeto é:

APAE-RUSSAS/

│

├── index.html

├── style.css

├── script.js

│

└── assets/

    ├── logo.png
				
    ├── imagens das atividades
				
    ├── imagens dos eventos
				
    └── demais imagens utilizadas no site
				
O arquivo index.html contém a estrutura e o conteúdo do site.
O arquivo style.css contém as regras responsáveis pela aparência e organização dos elementos.
O arquivo script.js contém os comportamentos e funcionalidades desenvolvidos utilizando JavaScript.
A pasta assets armazena as imagens utilizadas pelo projeto.

4.2 Descrição dos componentes principais

index.html: É o arquivo principal do site. Nele estão presentes o cabeçalho, menu de navegação, página inicial, informações sobre a APAE, atividades, projetos, doações, eventos, contato e rodapé.

style.css: Arquivo responsável pela estilização do site. Nele ficam as cores, fontes, tamanhos, espaçamentos, posicionamento dos elementos, cartões, imagens, botões e regras de responsividade.

script.js: Arquivo responsável pelas funcionalidades desenvolvidas em JavaScript, como alterações de tema e funcionamento dos elementos interativos.

assets: Pasta responsável por armazenar as imagens utilizadas no site. A logo da APAE, por exemplo, é carregada através de assets/logo.png.

Header: Contém a identidade visual da APAE, logo, nome da instituição, menu de navegação e ações adicionais.

Hero: É a primeira seção visual do site e apresenta a principal mensagem da APAE Russas.

Sobre: Apresenta informações sobre a instituição e seus princípios.

Atividades: Área destinada à apresentação das atividades realizadas pela APAE.

Projetos/Galeria: Apresenta imagens relacionadas às ações e à rotina da instituição.

Doações: Disponibiliza informações para contribuição financeira.

Eventos: Apresenta os principais eventos e ações realizados durante o ano.

Contato: Reúne os canais de comunicação e localização da APAE.

Footer: Apresenta informações finais da instituição e links para redes sociais.

5.0 Testes

5.1 Como executar testes

Os testes do site podem ser realizados manualmente através do navegador.

Após qualquer alteração, recomenda-se verificar:

Se o site abre normalmente;

Se todas as imagens estão carregando;

Se os textos estão corretamente posicionados;

Se os botões estão funcionando;

Se os links de navegação direcionam para as seções corretas;

Se o WhatsApp abre corretamente;

Se o e-mail está funcionando;

Se o mapa está carregando;

Se os links das redes sociais estão corretos;

Se o carrossel de eventos está funcionando;

Se o site continua apresentável em diferentes tamanhos de tela.

Também é importante testar o site em computadores e dispositivos móveis, pois alterações no CSS podem afetar diferentes resoluções.

5.2 Procedimentos para adicionar novos testes

Sempre que uma nova funcionalidade for adicionada ao site, ela deve ser testada antes de ser considerada concluída.

Por exemplo, caso seja adicionado um novo botão, deve-se verificar se:

O botão aparece corretamente;

O texto está correto;

O link está funcionando;

O destino do link está correto;

O botão continua funcionando em dispositivos menores.

Caso uma nova seção seja adicionada, também deve ser verificado se ela não prejudicou as seções existentes.
É recomendado realizar um teste completo após alterações significativas no HTML, CSS ou JavaScript.

6.0 Referências

6.1 Referências bibliográficas ou de pesquisa

Durante o desenvolvimento do projeto foram utilizados recursos de documentação, bibliotecas e ferramentas disponíveis na internet.

Font Awesome: utilizado para os ícones presentes no site.

Google Fonts: utilizado para as fontes do projeto.

Google Maps: utilizado para apresentar a localização da APAE.

GitHub: utilizado para armazenamento e versionamento do projeto.

Visual Studio Code: utilizado como editor de código.

O HTML referencia diretamente o Font Awesome e o Google Fonts para disponibilizar os recursos utilizados no projeto.

7.0 Contato

7.1 Informações de contato para suporte

Aqui ficam as informações para contato (telefone e email) com outros estagiários de outros anos caso seja necessário.

Estágio 2026

Isadora Lima Silva: (88)99319-8267 isadora.silva112@aluno.ce.gov.br

Lorena Emily Ferreira Lima: (88)994896091 lorena.lima47@aluno.ce.gov.br
