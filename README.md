# Odonto Vida

O projeto "Odonto Vida" é uma aplicação desenvolvida como parte de um trabalho acadêmico para apresentação na faculdade. Este sistema tem como objetivo simular o gerenciamento das atividades de uma clínica odontológica, oferecendo funcionalidades essenciais para facilitar o fluxo de trabalho de profissionais da área.

## Pré-requisitos

Antes de começar, verifique se você atende aos seguintes requisitos:

- Node.js e npm instalados (recomendado: versão v18.17.0)
- Git
- XAMPP instalado e configurado
- IDE (por exemplo, Visual Studio Code) instalada

## Instalação

### Passo 1: Criar a Pasta do Projeto

1. Abra o **Explorador de Arquivos** ( exemplo: Windows Explorer).
2. Navegue até o diretório onde o XAMPP está instalado. Normalmente, é `C:\xampp`.
3. Dentro da pasta `xampp`, abra a pasta `htdocs`.
4. Dentro da pasta `htdocs`, crie uma nova pasta chamada `projeto`.

### Passo 2: Pegar o Link do Repositório

1. Abra seu navegador web e vá para [https://github.com/BrazSouza/ontological-clinic/tree/main].
2. Clique no botão **Code** (verde) e depois em **HTTPS**.
3. Copie o link fornecido (começa com `https://github.com/...`).

### Passo 3: Usando o Terminal da IDE (por exemplo, Visual Studio Code)

1. Abra a sua IDE (por exemplo, Visual Studio Code).
2. Abra o terminal integrado. No Visual Studio Code, você pode fazer isso clicando em **Terminal** > **New Terminal** no menu superior.
3. Navegue até a pasta `htdocs\projeto` do XAMPP no terminal da IDE:

```sh
cd C:\xampp\htdocs\projeto
```

### Clone o repositório dentro da pasta `C:\xampp\htdocs\projeto`

```sh
git clone -b main https://github.com/BrazSouza/ontological-clinic.git
```

### Navegue até a pasta C:\xampp\htdocs\projeto\ontological-clinic

```sh
cd C:\xampp\htdocs\projeto\ontological-clinic
```

### Instale as dependências do projeto

```sh
npm install
```

## Configuração do Banco de Dados

1. Inicie o servidor Apache e MySQL do XAMPP.
2. Certifique-se de que o arquivo do banco de dados está incluído no backend do boilerplate do projeto.
3. Não é necessário criar um novo banco de dados, pois o esquema já está presente no arquivo fornecido.

## Como Usar

1. Inicie o servidor de desenvolvimento do React no terminal da IDE (por exemplo, Visual Studio Code)

   ```sh
   npm run dev
   ```

2. Acesse o projeto em seu navegador através do endereço:

   ```sh
   http://localhost:5173/
   ```

## Acessando o banco de dados

1. Acesse o banco de dados através do MySQL do phpMyAdmin

   ```sh
   http://localhost/phpmyadmin/
   ```
  
2. Clica em banco de dados no painel

3. Crie um banco de dados chamado `clinic_db` no campo `Nome do Banco`

4. clique no campo ao lado do campo `Nome do Banco` e escolha a opção `utf8_general_ci` e clique no botão `criar`

5. Clique em `importar` e depois em `procurar` ou `escolher arquivo`

6. Acesse `C:\xampp\htdocs\projeto\ontological-clinic\backend` e selecione o arquivo `clinic_db`

7. Clique no `importar` do painel banco de dados

## Contribuição

Contribuições são o que fazem a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato através do email: srbraz.silva@gmail.com

# React + Vite

Este modelo fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs .io/) para atualização rápida
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para atualização rápida
