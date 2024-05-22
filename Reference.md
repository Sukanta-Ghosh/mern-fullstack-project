# Refernces

List of all the browser API : https://developer.mozilla.org/en-US/docs/Web/API

## Lecture-1

### Installation

- Nodejs from : https://nodejs.org/en
  - Please install LTS version .
- POSTMAN from : https://www.postman.com/downloads/
  - It will be used to test our webAPI
- Mongodb : Just need to login as we will be using it's cloud version
  - We will be using mongodb Atlas for our Database needs
  - Login : https://account.mongodb.com/account/login

##### Rest API : https://aws.amazon.com/what-is/restful-api/

### 3rd Party websites;

- Mailgun, Razorpay
- [socket.io](https://socket.io/docs/v4/)

### Security

- owasp cheet sheet : https://cheatsheetseries.owasp.org/
- sql injection : https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html
- https://owasp.org/www-project-top-ten/
- https://www.zdnet.com/article/github-was-hit-with-the-largest-ddos-attack-ever-seen/

## Agenda

### Module 1: Intro Nodejs

- HTTP
- FILE, PATH in nodejs

### Module 2: Rest API with Express

- Express API creation

### Module 3: MongoDB intro

- MongoDB account creation
- Eastablished connection with MongoDB
- Create Express server
- Define Router path to make HTTP request
- Perform GET and POST request to DB

### Module 4: MVC Architecture

- Devide project into 3 part:
  - Model
  - View / Router
  - Controller

### Module 5: MongoDB extend

- Model defination extended in UserModel
- Define factory controller methods for all models
- MongoDB model create, find, findById, findByIdAndDelete, findByIdAndUpdate
- Pagination: sort, limit, skip

### Module 6: Backend + Frontend

- Integrating our API to react frontend
- select in backend api
- alias routes
  - realworld usecase
  - how it is implemented in backend

### Module 7: Cookies, Authentication

- Cookies and it's usecase
- Authentication, Authorization and identification
- JWT token
- Signup, Login
- Protect route

### Module 8: Sending Mails

- Sending API Email using MailGun
- Sending SMTP Email using MailGun and Nodemailer
- Forget password & Reset password

### Module 9: Authorization & Middlewares

- What is RBAC (Role Based access control)
- Ways to implement Authorization
- Reset and Forget Password
- Integrate that auth to our main project
- Implementing dynamic auth- logout

### Module 10: Payment Gateway

- Checkout flow and mode of payment
- Payment Gateway
  - what problem they solve
  - how they solve it
- Integrating Razorpay as payment gateway
- Webhooks and payment confirmation

### Module 11: Payment Verification

- order verification
- Creating data Model for purchases
- Creating data model for reviews
- Calculating average reviews on a product

### Module 12: Security and Password

### Module 13: Deployment

- Why cloud
  - How a client access a deployed application
- Issues with deployment
  - Static IP
  - NAT
- Managed Infra
- Diff cloud Provider
- EC2

### Module 14: Websockets

- http and realtime connections
- web sockets
  - features
  - pros
  - cons
- chat app example

### Module 15: Server Problems
