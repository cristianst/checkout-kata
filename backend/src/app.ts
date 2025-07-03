import Koa from "koa";
import { itemRouter, checkoutRouter } from "./api/routes";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

const app = new Koa();

// error manager middleware
// app.use(errorManager);

// auth middleware
// app.use(auth);

// CORS middleware - allow requests from frontend
app.use(cors());

app.use(bodyParser());

app.use(itemRouter.routes());
app.use(checkoutRouter.routes());

export default app;
