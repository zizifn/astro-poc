import type { APIContext } from "astro";
import type { D1Database } from "@cloudflare/workers-types";
import { drizzle } from 'drizzle-orm/d1';

export async function GET(context: APIContext) {
    const env = context.locals.runtime.env;
    const cfD1 = env["test-poc-db"] as D1Database;
    const db = drizzle(cfD1);

    // const tablesResult = await db.$client.prepare("SELECT name FROM sqlite_master WHERE type='table'").run();

    const tablesResult = await cfD1.prepare("PRAGMA table_list").all();
    console.log(tablesResult);

    return Response.json(tablesResult);
}

