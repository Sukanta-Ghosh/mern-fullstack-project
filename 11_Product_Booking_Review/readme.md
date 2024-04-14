**constraints** -> could only at max 16mb

### Purchase

- bookedAt
- priceAtThatTime
- order_id
- reciept_id -> Object(id)
- userDetails(Booked by) -> id of the user(UserModel)
- ProductDetails(BookedProduct) -> id of the product
- status of payment -> [pending, failure, success]

### Pefromance Impact

- by default -> only the booking object -> only going through bookingModel
- option -> also populate/replace (userId)(actual data of the user)-> userData

### logic-> of initalBooking

/**\*
_ 1.get ProductId
_ get userI-> req.userId->
_ 2. you will have to create booking object
_ go and find the user
_ go and find the product
_ add ref of the booking to the user
_ 3. use Razorpay to create an order
_ 4. save the order to booking object
_ 5. send the order to the client
_ **/

### logic ->verification

- use the last lecture code of verification with small change to update the status to confirmed

## Review

**Schema**

- rating
- review_title,
- rating_desc
- product_id(ref)
- user_id(ref)
- averageRating

**ProductModel**
-> we need to add refs of reviews
