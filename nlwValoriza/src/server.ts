import express, { request, response } from "express"

// @types/express

const app = express();

// http://localhost:3000

app.listen(3000, () => console.log("Server is running at port 3000") );

app.get("/test", (request, response) => {
    return response.send("Get server working NLW")
});

app.post("/test-post", (request, response) => {
    return response.send("Post working for NLW")
});
