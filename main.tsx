import render from "./src/render.tsx";

const handler = async (request: Request): Promise<Response> => {
    try {
        const body = await request.text();
        if (!body) throw new Error("No body");

        const stats = JSON.parse(body);
        const image = await render(stats);
        return new Response(image, {
            status: 200,
            headers: {
                "Content-Type": "image/png",
            },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ error: error.message || "unknown error" }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
};

Deno.serve(
    { port: parseInt(Deno.env.get("PORT") || "") || undefined },
    handler
);
