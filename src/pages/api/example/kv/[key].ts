// https://developers.cloudflare.com/kv/api/read-key-value-pairs/

import type { APIContext } from "astro";
import type { KVNamespace } from "@cloudflare/workers-types";

export async function GET(context: APIContext) {
  // console.log('in the key files', context.params);
  const key = context.params.key || "";
  if (!key) {
    return Response.json({
      error: "no key found",
    });
  }
  const env = context.locals.runtime.env;
  const cfkv = env["astro-poc-sample"] as KVNamespace;
  const value = await cfkv.get(key, "text");
  return Response.json({
    key: value,
  });
}
