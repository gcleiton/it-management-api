# Caso de Uso

> ## Dados
* Usuário
* Nome
* Sobrenome
* Senha
* Confirmação da Senha
* Email
* Telefone

> ## Fluxo primário
1. Consultar se já existe alguma conta com o usuário fornecido
2. Consultar se já existe alguma conta com o email fornecido
3. Gerar uma senha criptografada
4. Criar uma conta para o usuário com os dados fornecidos
5. Criar um token de acesso, a partir do ID do usuário, com expiração á meia-noite
6. Atualizar os dados do usuário com o token de acesso gerado
7. Enviar um email para o usuário informando seu cadastro no sistema

> ## Fluxo de exceção:  Usuário já existe 
1.  Retornar um erro de usuário está associado a uma conta
2.  Retornar um erro de email está associado a uma conta

