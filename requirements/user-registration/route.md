# Rota

* **URL**: /api/auth/registration

* **Method:** POST
  
* **URL Params**:

* **Data Params**

  **Required:**

  `username=[string]`

  `firstName=[string]`

  `lastName=[string]`

  `password=[string]`

  `email=[string]`

  **Optional:**

  `phone=[number]`

  

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ accessToken : 'access_token' }`
    
    

* **Error Response:**

  * **Code:** 422 Unprocessable Entity <br />
  **Content:** `{ message : "Falha na Validação", errors: [{field: 'username', message: 'O campo username é obrigatório'}] }`
  
  OR

  * **Code:** 500<br />
  **Content:** `{ message : "Erro Interno no Servidor" }`
