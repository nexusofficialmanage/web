import { initEdgeStore } from "@edgestore/server";
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app";

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  myProductImages: es.imageBucket(),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export const GET = handler;
export const POST = handler;
export const EdgeStoreRouter = edgeStoreRouter;
