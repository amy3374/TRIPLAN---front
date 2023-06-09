import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
  app.use(
    "/login",
    createProxyMiddleware({
      target: "http://localhost:8080",
    })
  );
};
