<h1 align="center" style="text-align: center;" >
 Back-end for the Mnk Food api 

</h1>

> Food Explorer Back-end 




<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<h2 id="project">📁 Project</h2>

This project was created based on the final challenge of the RocketSeat Explorer program. It is a digital menu application for restaurants.

To achieve this, the task was to develop the application with two user personas: Admin and User.




Admin Functionalities:

      Admin User can:
 -       Register new dishes
 -       Edit dishes (price, name, description, image)
 -       Delete dishes
 -       View the favorites dishes selected by common users
 -       Set the status of each order: delivered, preparing, pending..

 



Common User Functionalities:

    Common users can:
 -       Access to the full dishes menu
 -       Choose favorite dishes
 -       Make an order
 -       Choose the payment method (credit or Pix)
 -       Follow de order status










<h2 id="technologies">💻 Techs</h2>

This project was developed using:

-    Node.js
-    Express.js
-    JSON Web Token
-    Bcrypt.js
-    Knex.js
-    CORS
-    Dotenv
-    express-async-errors
-    Multer
-    PM2
-    SQLite
-    SQLite3


<h2 id="usage"> Usage</h2>

This application is hosted [on this link](https://netlify.app/).

 To access the Admin account:
- E-mail: admin@email.com
- Password: 1234

To access the common user account, you can create your own test account or use this one:
- E-mail: user1@email.com
- Password: 1234

This application are using a free render version, so the responses from the server side can be delayed.

To run on your local computer, you will have to clone this project and also the 
back-end api [on this link](https://github.com/Meinke7/mnkFood-front-end)

make sure that ``Node.js`` and ``npm`` are both installed on your device:

1. Clone the project

$ git clone https://github.com/Meinke7/mnkFood-Back-end-BACKUP
```

2. Access projects folder:

```
$ cd food-explorer-backend
```

3. Install the dependencies:

```
$ npm install
```

4. Run the migrations:

```
$ npm run migrate
```

5. Run the server:

```
$ npm start
```


This project is under MIT license.

---

