Using Python version 3.11.5 and pip version 23.2.1.

Make sure you are in the backend directory before running the commands

# Install Dependencies
run `pip install -r requirements.txt` to install the required libraries.

# Setup Database
run the following two commands to setup the database
```
python manage.py makemigrations
python manage.py migrate
```

# Run Server
run `python manage.py runserver` to start the server on port 8000

# API Routes that are currently available

## POST api/signup
Creates a new user.

The body of the request is expected to be:
```
{
    name: string <= 255 chars, NOT NULL
    email: string <= 255 chars, unique, NOT NULL
    phone_number: string <= 15 chars, NOT NULL
    password: string <= 255 chars, NOT NULL
}
```

Will return
```
{
    success: bool
    error: string / null
}
```

## POST api/login
Creates a JWT and stores it in the cookies.

The JWT payload has the format:
```
{
    id: the user's id
    exp: time the JWT expires (1 hour from issue time)
    iat: time the JWT was issued at
}
```

The body of the request is expected to be:
```
{
    email: string
    password: string
}
```

Will return
```
{
    success: bool
    error: string / null
}
```

## POST api/logout
Removes the JWT from the cookies.

The body of the request is expected to be empty. This only triggers a clearing of the cookes so the JWT gets removed.

Will return
```
{
    success: True (I don't think anything can go wrong here tbh)
}
```

## GET api/users
Gets the current user based on the payload of the JWT.

Will return
```
{
    id: int
    name: string
    email: string
    phone_number: string
    success: bool
    error: string / null
}
```

## DELETE api/users?id=xxxxxxxx
Deletes a user

The query param is expected to be an int.

Will return
```
{
    success: bool,
    error: string / null
}
```
