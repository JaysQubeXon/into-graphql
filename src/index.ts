import * as express from "express";

const app = express();

const PORT = 1717;

app.listen({ port: PORT }, () => {
  console.log(
    "\x1b[36m%s\x1b[35m%s\x1b[0m",
    `BloomingJS-GraphQL server `,
    `listening on port`,
    `${PORT}`
  );
});
