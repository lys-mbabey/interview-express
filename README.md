# Express Coding Interview

## Objective

Expand on an express server. The goal is to evaluate your understanding of the express framework, your knowledge of HTTP, and your ability to structure code.

## Getting Started

### 1. Clone the repository and navigate into it

```bash
git clone https://github.com/lys-mbabey/interview-express.git
cd interview-express
```

### 2. Install dependencies

```bash
npm i
```

### 3. Run the server

```bash
npm start
```

### 4. You're ready to start coding!

Open `server/main.js` to begin implementing the challenge

## Challenge Requirements

Modify the code to do the following:

- [ ] /route1 should check the request for the presence of an Authorization header with the value "Bearer 1234" and should respond with an appropriate error code if it does not exist. These responses do not need to contain a body.
- [ ] /route1 and /route2 should attach a response header "Date" that is the UTC time the request was received.
- [ ] /route1 should send, in order of priority, a JSON response if the requester accepts JSON, an HTML response if the requester accepts HTML, or an appropriate error code if the requester accepts neither JSON nor HTML.
- [ ] /route2 should perform the same Authorization header check as /route1.

## Notes

- You may not use AI.
- You may use any other resources or documentation.
- Focus on code quality, clarity, and scalability.

---

Happy coding and good luck with your interviews!
