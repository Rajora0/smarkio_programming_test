
<h1 align = "center">IMCOMPLETO</h1>

<h1 align = "center" style = "border-bottom: none;"> 🔊 Demonstração de texto para fala </h1>
<h3 align = "center"> Alguns dos recursos do serviço IBM Watson Text to Speech. </h3>


Text to Speech é projetado para streaming, síntese de áudio de texto. 

## Pré-requisitos

1. Inscreva-se para uma [conta do IBM Cloud] (https://cloud.ibm.com/registration/).
1. Faça download do [IBM Cloud CLI] (https://cloud.ibm.com/docs/cli?topic=cli-getting-started#overview).
1. Crie uma instância do serviço Text to Speech e obtenha suas credenciais:
    - Acesse a página [Text to Speech] (https://cloud.ibm.com/catalog/services/text-to-speech) no IBM Cloud Catalog.
    - Faça login em sua conta do IBM Cloud.
    - Clique em ** Criar **.
    - Clique em ** Mostrar ** para ver as credenciais do serviço.
    - Copie o valor `apikey`.
    - Copie o valor `url`.

## Configurando o aplicativo

### Banco de dados

1. Na pasta do aplicativo, edite o arquivo * .env * e crie um arquivo chamado * .env * com suas credenciais para logar em um banco de dados local (Mysql).
    `` `
    cp .env.example .env
    `` `
### Text to Speech (Ainda não funcionando!)

1. Abra o arquivo * .env * e inclua as credenciais de serviço seguindo o seguinte [procedimento](https://cloud.ibm.com/docs/text-to-speech?topic=text-to-speech-gettingStarted#getting-started-tutorial) .

    Exemplo de arquivo * .env * que configura o `apikey` e o` url` para uma instância de serviço Text to Speech hospedada na região leste dos EUA:

    `` `
    TEXT_TO_SPEECH_IAM_APIKEY = key
    TEXT_TO_SPEECH_URL = url
    `` `

## Executando localmente

1. Instale as dependências

    `` `
    npm install
    `` `

1. Execute o aplicativo

    `` `
    npm start
    `` `

1. Visualize o aplicativo em um navegador em `localhost: 8080`


## Estrutura do diretório


    `` `
    ├── app.js // rotas expressas
    ├── database // configuração banco de dados
    |   ├── createData
    ├── package.json
    ├── public // recursos estáticos
    ├── views // handlebars
    │ ├── layouts
    | |   ├── main
    │ ├── index
    `` `
    
## Observações 

Este projeto se encontra imcopleto. 

### O que já foi implementado?

    - Servidor API - REST(Express).
    - Banco de Dados (Mysql,Sequelize).
    - Views API (Handlebars)

### O que falta implementar?

    - Conecção banco de dados com views.
        (Esta funcionado a parte de alimentar o banco de dados).
    - Implementar API Text to Speech | IBM.

## Referencias
[página do IBM Github] (http://ibm.github.io/)
[demo_url]: https://text-to-speech-demo.ng.bluemix.net
