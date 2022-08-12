# DOCUMENTATION: ENDPOINTS BACKEND

## USER

<details>
  <summary>
    <b><strong>LOGIN</strong></b>
  </summary>
  POST(http://localhost:3001/login)

  <details>
    <summary>
      <b>Request</b>
    </summary>
    Body:<br>

    {
      "email": "fulana@deliveryapp.com",
      "password": "fulana@123"
    }

  </details>

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 201<br>
    Json:<br>


      {
        "id": 2,
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "role": "seller",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyLCJuYW1lIjoiRnVsYW5hIFBlcmVpcmEiLCJlbWFpbCI6ImZ1bGFuYUBkZWxpdmVyeWFwcC5jb20iLCJyb2xlIjoic2VsbGVyIn0sImlhdCI6MTY2MDI2OTY4NCwiZXhwIjoxNjYwMjczMjg0fQ.OFToIVehvM-rshgD1uUgpEqGufzMQ0XO5AxohlG7CQM"
      }

  </details>
</details>

---

<details>
  <summary>
    <b><strong>REGISTER</strong></b>
  </summary>
  POST(http://localhost:3001/login/register)

  <details>
    <summary>
      <b>Bad Request</b>
    </summary>
    Ao tentar registrar um usuário já existente <br>
    Body:<br>

    {
      "email": "fulana@deliveryapp.com",
      "password": "fulana@123"
    }

  </details>

  <details>
    <summary>
      <b>Bad Response</b>
    </summary>
    Code: 409<br>
    Json:<br>

    {
      "message": "Conflict"
    }

  </details>

  <details>
    <summary>
      <b>Good Request</b>
    </summary>
    Body:<br>

    {
      "name": "Novo Usuário",
      "email": "new_User@deliveryapp.com",
      "password": "new_password"
    }

  </details>

  <details>
    <summary>
      <b>Good Response</b>
    </summary>
    Code: 201<br>
    Json:<br>

    {
      "id": 4,
      "name": "Novo Usuário",
      "email": "new_User@deliveryapp.com",
      "role": "customer",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxMCwibmFtZSI6Ik5vdm8gVXN1w6FyaW8iLCJlbWFpbCI6Im5ld19Vc2VyQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjAyNzE4NTgsImV4cCI6MTY2MDI3NTQ1OH0.-4PcrYbadiishgSQfLTD2em3l3pUj8EOpsVeodG7CKI"
    }

  </details>
</details>

---

## PRODUCTS

## SALES

## SALESPRODUCTS