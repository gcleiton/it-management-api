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
1. ✅ Consultar se já existe alguma conta com o username fornecido
2. Consultar se já existe alguma conta com o email fornecido
3. Gerar uma senha criptografada
4. Criar uma conta para o usuário com os dados fornecidos
5. Criar um token de acesso, a partir do ID do usuário, com expiração á meia-noite
6. Atualizar os dados do usuário com o token de acesso gerado
7. Enviar um email para o usuário informando seu cadastro no sistema

> ## Fluxo de exceção:  Username já existe 
1.  Retornar um erro do username já está associado a uma conta

> ## Fluxo de exceção:  Email já existe 
2.  Retornar um erro do email já está associado a uma conta

