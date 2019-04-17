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
  time datetime
  price int
  description string
  uses int
  timestamp datetime
  name string
}
```