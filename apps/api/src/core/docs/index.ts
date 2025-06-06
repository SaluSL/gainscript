import { appRouter } from "../../router";
import { Request, Response } from "express";

export const docsMiddleware = async (_: Request, res: Response) => {
  if (process.env.NODE_ENV !== "development") {
    return res.status(404).send("Not found");
  }

  // Dynamically import renderTrpcPanel only in development
  const { renderTrpcPanel } = await import("trpc-ui");

  return res.send(
    renderTrpcPanel(appRouter, {
      url: "http://localhost:5001/trpc",
      meta: {
        title: "API Docs",
        description: "API Docs",
      },
    })
  );
};
