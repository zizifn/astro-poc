import type { APIContext } from "astro";
export function GET(context: APIContext) {
    const env = context.locals.runtime.env;
    return Response.json(
      {
        "testVar": env.testVar,
        "testAPIToken": env.testAPIToken
      }
    );
  }