const { initEdgeStore } = require("@edgestore/server");
const { createEdgeStoreNextHandler } = require("@edgestore/server/adapters/next/app");

const es = initEdgeStore.create();

const edgeStoreRouter = es.router({
  myProductImages: es.imageBucket(),
});

const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

module.exports = { GET: handler, POST: handler };

module.exports.EdgeStoreRouter = edgeStoreRouter;
