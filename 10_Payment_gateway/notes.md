## Challenges in accepting payment

- **Multiple modes of payment**
  - upi
  - netbanking -> IMPS
  - credit card payment
  - debit card payment
  - SWIFT
  - wallets
- **need maintain security**
  - credit card payment-> (PCI DSS) [Payment Card Industry Data Security Standard]
- **Prevent also fraud transaction**
  **You have follow lot of rules and regulations**

## Payment Gateways

- It should be able to accept multiple modes of payments
- It should be secure
- It should able to inform the status of payment in realtime -> server

## Razorpay keys;

- API key = Account & Settings -> API Keys
- Webhook = Developers -> Webhooks
  - Active Events -> payment.captured
  - Webhook have to created based on server port url, so it has to be created
    every time for testing purpose

## Test Cases:

1. POST ->
   localhost:3001/checkout

2. For varify part:

- Go to VS code port, forward port of the server, make visibility public
- Create webhook with forward port URL + route path
- Then make the payment and test in console of backend

Card number: 4111 1111 1111 1111
