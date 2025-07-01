import Koa from "koa";
import { itemRouter } from "./api/routes";

const app = new Koa();

app.use(itemRouter.routes());

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});