// 11th March 2025
import express from 'express';

const app = express();

app.use(express.static("public"));

app.listen(3001, console.log("Server started on 3001"));