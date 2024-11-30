import type { APIContext } from "astro";
import type { KVNamespace } from "@cloudflare/workers-types";

export async function GET(context: APIContext) {
  const env = context.locals.runtime.env;
  const cfkv = env["astro-poc-sample"] as KVNamespace;

  const listResult = await cfkv.list();
//   const keys = listResult.keys.map((key) => key.name);

  return Response.json(listResult);
}

export async function POST(context: APIContext) {
  const env = context.locals.runtime.env;
  const cfkv = env["astro-poc-sample"];
  const body = await context.request.json();
  console.log(body);
  const key = body.key;
  const value = body.value;

  await cfkv.put(key, value);

  return Response.json({
    message: `Key ${key} set successfully`,
    value: value,
  });
}
