Using Python version 3.11.5 and pip version 23.2.1.

The `CPS714.postman_collection.json` file can be imported into Postman so that you can have the routes all setup immediately. You don't have to do this though.

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
Creates a JWT and validates the email and password sent.

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
    token: string / null
    error: string / null
}
```

## POST api/logout
Removes the JWT from the cookies.

The body of the request is expected to be empty. This only triggers a clearing of the cookies so the JWT gets removed.

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
    message: string / null
    error: string / null
}
```

## POST RestaurantApp/api/make-reservation
Makes a reservation

The body of the request is expected to be:
```
{
    start_time: date string
    number_of_people: int
    restaurant_name: string
}
```

Constraints:

- The user needs to be logged in
- start_time must be in the future and have the format (YYYY-MM-DD HH:MM)
- number_of_people must be in the range from 1-30
- restaurant_name must correlate with an actual restaurant in the database
- A restaurant has a max capacity of 30 people for a day, so you cannot have reservations where the total number of people for a given day exceeds that number for a specific restaurant.

For example: On April 30th 2024, there are 3 reservations with 10, 5, and 10 people respectively. If you submit a reservation that has a value of 6 or more in the number_of_people field, you will get an error saying the capacity was exceeded for that day.

Will return
```
{
    success: boolean
    errors: object of the form:
        {
            key(s) (could be multiple): array of strings
        }

}
```

## PUT ReservationApp/api/reservations/update_state/
Updates reservation state ('Upcoming', 'Ongoing', 'Finished' or 'Canceled')

Body of request:
```
{
    reservation_id: int
    new_state: string
}
```

Does not return a response body. Sets the HTTP request only (200 OK, 400 BAD_REQUEST, 404 NOT_FOUND)

## GET ReservationApp/api/fetch-reservations
Fetches reservation details of current user

Will return
```
{
    id: int
    start_time: date string
    reservation_state: string
    number_of_people: int
    user: {
        id: int
        username: string
        name: string
        email: string
        phone_number: string
    },
    restaurant: {
        id: int
        name: string
        country: string
        city: string
        address: string
        longitude: string
        latitude: string
        cuisines: string
        average_cost_for_two: int
        average_review_rating: string
        review_level_color: string
        review_level_text: string
        number_of_reviews: int
        about: string
    }
}
```
