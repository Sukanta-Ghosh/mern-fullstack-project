Base url: localhost:3000/api/v1/

### Booking router

#### `/booking/checkout` route: Create a Booking

- Go to Auth login route -> `/auth/login`
  - Make post request with body raw -> Get email and password from UserModel
  ```json
  {
    "email": "something@gmail.com",
    "password": "12345678"
  }
  ```
- Go to `/booking/checkout` route

  - Make post request with body raw -> get any productId from ProductModel

    ```json
    "productId": "660c492337d9cf2df2e7696c"
    ```

#### `/booking/` route: Get All Bookings

- Make Get request to `/booking/` route.

TODO: Controller implementation

#### `/booking/orders` route: Get All Bookings

### Review router

#### `/review/` route: Create review of a Product

- Go to Auth login route -> `/auth/login` with post request, body is mentioned above.
- Go to `/review/` route to make post request with body raw
  - Get any product_id from Product model

```json
{
  "rating": 4,
  "review_title": "Great Product",
  "review_desc": "Good Build",
  "product_id": "660c492337d9cf2df2e7696c"
}
```

TODO: Controller implementation

#### `/review/:productId` route: Get All reviews of a Product

#### `/review/allReviews` route: Get all reviews from ReviewModel
