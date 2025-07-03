import Koa from "koa";
import { itemRouter, checkoutRouter } from "./api/routes";
import bodyParser from "koa-bodyparser";

const app = new Koa();

// error manager middleware
// app.use(errorManager);

// auth middleware
// app.use(auth);

app.use(bodyParser());

app.use(itemRouter.routes());
app.use(checkoutRouter.routes());

app.listen(3000, () => {
	console.log("🚀 Server running on port 3000");
});

export default app;
