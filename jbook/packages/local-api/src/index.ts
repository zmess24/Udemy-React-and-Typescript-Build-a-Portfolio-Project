import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const serve = (port: number, filename: string, dir: string) => {
	const app = express();

	// Middleware
	app.use(
		createProxyMiddleware({
			target: "http://127.0.0.1:3000",
			ws: true,
			logLevel: "silent",
		})
	);

	return new Promise<void>((resolve, reject) => {
		app.listen(port, resolve).on("error", reject);
	});
};

export default serve;
