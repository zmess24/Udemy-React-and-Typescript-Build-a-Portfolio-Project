import path from "path";
import { Command } from "commander";
import serve from "local-api";

// Square Brackets [] = optional value
// Angle Brackets <> = required value
export const serveCommand = new Command()
	.command("serve [filename]")
	.description("Open a file for editing")
	.option("-p --port <number>", "port to run server on", "4005")
	.action((filename = "notebook.js", options) => {
		var dir = path.join(process.cwd(), path.dirname(filename));
		serve(parseInt(options.port), path.basename(filename), dir);
	});
