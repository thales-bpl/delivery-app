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
    Code: 200<br>
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
    <b><strong>GET ALL SELLERS</strong></b>
  </summary>
  GET(http://localhost:3001/login/sellers)

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 200<br>
    Json:<br>

    [
      {
        "id": 2,
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "password": "3c28d2b0881bf46457a853e0b07531c6",
        "role": "seller"
      }
    ]

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

<details>
  <summary>
    <b><strong>GET ALL</strong></b>
  </summary>
  GET(http://localhost:3001/login)

  <details>
    <summary>
      <b>Request</b>
    </summary>
  </details>

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 200<br>
    Json:<br>

    [
      {
        "id": 1,
        "name": "Delivery App Admin",
        "email": "adm@deliveryapp.com",
        "password": "a4c86edecc5aee06eff8fdeda69e0d04",
        "role": "administrator"
      },
      {
        "id": 2,
        "name": "Fulana Pereira",
        "email": "fulana@deliveryapp.com",
        "password": "3c28d2b0881bf46457a853e0b07531c6",
        "role": "seller"
      },
      {
        "id": 3,
        "name": "Cliente Zé Birita",
        "email": "zebirita@email.com",
        "password": "1c37466c159755ce1fa181bd247cb925",
        "role": "customer"
      }
    ]

  </details>
</details>

---

## PRODUCTS

<details>
  <summary>
    <b><strong>GET ALL</strong></b>
  </summary>
  GET(http://localhost:3001/products)

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 200<br>
    Json:<br>

    [
      {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2.20",
        "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg"
      },
      (...)
      ,
      {
        "id": 11,
        "name": "Stella Artois 275ml",
        "price": "3.49",
        "url_image": "http://localhost:3001/images/stella_artois_275ml.jpg"
      }
    ]

  </details>
</details>

---

<details>
  <summary>
    <b><strong>GET BY ID</strong></b>
  </summary>
  GET(http://localhost:3001/products/:id)

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 200<br>
    Json:<br>

    [
      {
        "id": 4,
        "name": "Brahma 600ml",
        "price": "7.50",
        "url_image": "http://localhost:3001/images/brahma_600ml.jpg"
      }
    ]

  </details>
</details>

---

## SALES

<details>
  <summary>
    <b><strong>GET ALL</strong></b>
  </summary>
  GET(http://localhost:3001/sale/)

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 200<br>
    Json:<br>

    [
      {
        "id": 1,
        "userId": 1,
        "sellerId": 1,
        "totalPrice": 10.55,
        "deliveryAddress": "Rua do Teste",
        "deliveryNumber": "101",
        "status": "Pendente",
        "saleDate": "2022-08-17T22:39:16.000Z",
        "products": [
          {
            "id": 2,
            "name": "Heineken 600ml",
            "price": 7.5,
            "urlImage": "http://localhost:3001/images/heineken_600ml.jpg",
            "salesProducts": {
              "productId": 2,
              "quantity": 2,
              "saleId": 1
            }
          },
          {
            "id": 3,
            "name": "Antarctica Pilsen 300ml",
            "price": 2.49,
            "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
            "salesProducts": {
              "productId": 3,
              "quantity": 3,
              "saleId": 1
            }
          }
        ]
      },
      (...),
      {
        "id": 10,
        "userId": 1,
        "sellerId": 1,
        "totalPrice": 10.55,
        "deliveryAddress": "Rua do Teste",
        "deliveryNumber": "101",
        "status": "Pendente",
        "saleDate": "2022-08-17T22:39:16.000Z",
        "products": [
          {
            "id": 2,
            "name": "Heineken 600ml",
            "price": 7.5,
            "urlImage": "http://localhost:3001/images/heineken_600ml.jpg",
            "salesProducts": {
              "productId": 2,
              "quantity": 2,
              "saleId": 1
            }
          },
          {
            "id": 3,
            "name": "Antarctica Pilsen 300ml",
            "price": 2.49,
            "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
            "salesProducts": {
              "productId": 3,
              "quantity": 3,
              "saleId": 1
            }
          }
        ]
      }
    ]

  </details>
</details>

---

<details>
  <summary>
    <b><strong>GET BY SALE ID</strong></b>
  </summary>
  GET(http://localhost:3001/sale/1)

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 200<br>
    Json:<br>

    {
      "id": 1,
      "userId": 1,
      "sellerId": 1,
      "totalPrice": 10.55,
      "deliveryAddress": "Rua do Teste",
      "deliveryNumber": "101",
      "status": "Pendente",
      "saleDate": "2022-08-17T22:39:16.000Z",
      "products": [
        {
          "id": 2,
          "name": "Heineken 600ml",
          "price": 7.5,
          "urlImage": "http://localhost:3001/images/heineken_600ml.jpg",
          "salesProducts": {
            "productId": 2,
            "quantity": 2,
            "saleId": 1
          }
        },
        {
          "id": 3,
          "name": "Antarctica Pilsen 300ml",
          "price": 2.49,
          "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
          "salesProducts": {
            "productId": 3,
            "quantity": 3,
            "saleId": 1
          }
        }
      ]
    }

  </details>
</details>

---

<details>
  <summary>
    <b><strong>GET BY USER ID</strong></b>
  </summary>
  GET(http://localhost:3001/sale/user/1)

  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 200<br>
    Json:<br>

    [
      {
        "id": 1,
        "userId": 1,
        "sellerId": 1,
        "totalPrice": 10.55,
        "deliveryAddress": "Rua do Teste",
        "deliveryNumber": "101",
        "status": "Pendente",
        "saleDate": "2022-08-17T22:39:16.000Z",
        "products": [
          {
            "id": 2,
            "name": "Heineken 600ml",
            "price": 7.5,
            "urlImage": "http://localhost:3001/images/heineken_600ml.jpg",
            "salesProducts": {
              "productId": 2,
              "quantity": 2,
              "saleId": 1
            }
          },
          {
            "id": 3,
            "name": "Antarctica Pilsen 300ml",
            "price": 2.49,
            "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
            "salesProducts": {
              "productId": 3,
              "quantity": 3,
              "saleId": 1
            }
          }
        ]
      },
      (...),
      {
        "id": 3,
        "userId": 1,
        "sellerId": 1,
        "totalPrice": 10.55,
        "deliveryAddress": "Rua do Teste",
        "deliveryNumber": "101",
        "status": "Pendente",
        "saleDate": "2022-08-17T22:52:15.000Z",
        "products": [
          {
            "id": 2,
            "name": "Heineken 600ml",
            "price": 7.5,
            "urlImage": "http://localhost:3001/images/heineken_600ml.jpg",
            "salesProducts": {
              "productId": 2,
              "quantity": 2,
              "saleId": 3
            }
          },
          {
            "id": 3,
            "name": "Antarctica Pilsen 300ml",
            "price": 2.49,
            "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
            "salesProducts": {
              "productId": 3,
              "quantity": 3,
              "saleId": 3
            }
          }
        ]
      }
    ]

  </details>
</details>

---

<details>
  <summary>
    <b><strong>POST</strong></b>
  </summary>
  POST(http://localhost:3001/sale/1)

  <details>
    <summary>
      <b>Request</b>
    </summary>
    Body:<br>

    {
      "userId": 1,
      "sellerId": 1,
      "totalPrice": 10.55,
      "deliveryAddress": "Rua do Teste",
      "deliveryNumber": 101,
      "purchasedProducts": [
        { "productId": 2, "quantity": 2 },
        { "productId": 3, "quantity": 3 }
      ]
    }

  </details>
  <details>
    <summary>
      <b>Response</b>
    </summary>
    Code: 201<br>
    Json:<br>

    {
      "newSaleId": 3
    }

  </details>
</details>

---

## SALESPRODUCTS