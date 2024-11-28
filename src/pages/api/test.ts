export function GET(context) {
    const runtime = context.locals.runtime;

    console.log('Runtime:', runtime);
    return Response.json(runtime);
  }