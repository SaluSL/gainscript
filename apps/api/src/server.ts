import bodyParser from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";

import { trpcExpressMiddleware } from "./core/trpc";
import { log } from "@repo/logger";
import { docsMiddleware } from "./core/docs";
import { appRouter } from "./router";

const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cors())
    .use("/trpc", trpcExpressMiddleware(appRouter))
    .use("/docs", docsMiddleware);

  return app;
};

const port = process.env.PORT || 5001;

createServer().listen(port, () => {
  log(`api running on ${port}`);
});
