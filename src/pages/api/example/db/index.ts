import type { APIContext } from "astro";
import type { D1Database } from "@cloudflare/workers-types";

export async function GET(context: APIContext) {
    const env = context.locals.runtime.env;
    const cfD1 = env["test-poc-db"] as D1Database;

    const tablesResult = await cfD1.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();

    return Response.json(tablesResult.results);
}

