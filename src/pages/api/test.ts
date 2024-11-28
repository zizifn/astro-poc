import type { APIContext } from "astro";
export function GET(context: APIContext) {
    const runtime = context.locals.runtime;

    console.log('Runtime:', runtime);
    return Response.json(runtime);
  }