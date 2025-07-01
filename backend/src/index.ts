import Koa from "koa";
import { itemsRouter } from "./api/routes";

const app = new Koa();

app.use(itemsRouter.routes());

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});