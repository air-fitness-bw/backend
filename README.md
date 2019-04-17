# Air Fitness Backend 🏃💨
An easy to use app for open space fitness classes. Giving instructors and clients the ability to manage their classes from their phone. Clients can search for classes in their specific area. Instructors now have a platform where they are not bound to holding classes at facilities and can take their classes into their own hands.

# Project Goals 🗻
1. Onboarding for a new client and fitness instructor
2. Class and punch cards are intwined so clients now have 10 passes to each class upon class purchase
3. Ability to easily create / setup a class time
4. Ability to easily edit / delete a class 
5. Ability for client to create an account and purchase a 10 class punch pass from an instructor.
7. Punch pass updates for client as it’s used.
8. Integrate PayPal as a payment method. Ability for instructor to add people to a 'class 

#  Frameworks / Libraries
bcrypt bcryptjs cors dotenv express faker helmet jsonwebtoken knex knex-cleaner pg sqlite3 jest nodemon supertest heroku 

# Schema

Sqlite3 used for development.

Postgresql used in production.

img:
pending

![]()

# RESTful API end points

### 📦  GET 

List of users
 ```/api/users```

 List of classes
 ```/api/class``` 

 List classes by id
 `/api/class/:id`

### 💾 POST 

Login 
```/api/user/login```

Register 
`/api/users/reg`

Create Class
`/api/class`

### ✒️ PUT

Edit Class
`/api/class/:id`

### ❌ DELETE

Delete Class 
`/api/class/:id`

# Misc
### Random Message Function
I have found that using a function that out puts a random message into the console or directly into the '/' end point to be a great visual que to let yourself and others using the api know a change has occurred.
>const randomMessage = ['string1','string2','string3'];

>const message = randomMessage[Math.floor(Math.random()*randomMessage.length)];

Then

>server.get('/', (req, res) => { res.status(200).json(message)});

and/or

>const port = process.env.PORT || 9001;
server.listen(port, () => console.log(`${message}\nserver live on: http://localhost:${port}\n`));




