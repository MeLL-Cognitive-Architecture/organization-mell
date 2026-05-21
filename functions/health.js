export async function onRequest(context) {
  const { request } = context;

  const corsHeaders = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, OPTIONS",
    "access-control-allow-headers": "Content-Type",
    "access-control-max-age": "3600"
  };

  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  if (request.method !== "GET") {
    return new Response(
      JSON.stringify(
        {
          status: "rejected",
          service: "MeLL Cognitive Architecture",
          message: "Método HTTP não permitido.",
          allowed_methods: ["GET", "OPTIONS"],
          timestamp: new Date().toISOString()
        },
        null,
        2
      ),
      {
        status: 405,
        headers: {
          ...corsHeaders,
          "content-type": "application/json; charset=UTF-8",
          "cache-control": "no-store"
        }
      }
    );
  }

  const healthData = {
    status: "ok",
    service: "MeLL Cognitive Architecture",
    component: "Cloudflare Pages Health Check",
    environment: "cloudflare-pages",
    stage: "institucional-modular",
    governance: {
      model: "autonomia-supervisionada",
      decision_authority: "humana-soberana",
      flow: "EXECUTE_REGISTER_SEAL_CONFIRM"
    },
    timestamp: new Date().toISOString()
  };

  return new Response(JSON.stringify(healthData, null, 2), {
    status: 200,
    headers: {
      ...corsHeaders,
      "content-type": "application/json; charset=UTF-8",
      "cache-control": "no-store"
    }
  });
}
