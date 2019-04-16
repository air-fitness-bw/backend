https://dbdiagram.io/d

```Table users {
  id int [pk]
  usename string
  password string
  name string
  email string
  role string
  timestamp datetime
}

Table classes {
  class_id int [pk]
  instructor_id int [ref: > users.id]
  price int
  timestamp datetime
}

Table punch {
  punch_id int [pk]
  instructor_id int [ref: > classes.class_id]
  price int
  uses int
  timestamp datetime
}
```