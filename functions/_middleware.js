const ASK_WIDGET_THEME = '<style id="mell-ask-theme">.hero .actions>a{display:none}.button.ghost.mell-ask-inline-trigger{position:relative;gap:.6rem;min-height:48px;padding:0 1.18rem;border:2px solid rgba(34,211,238,.88);border-radius:999px;background:linear-gradient(180deg,rgba(2,17,31,.92),rgba(7,17,31,.86));color:#67e8f9;font-size:1rem;font-weight:860;letter-spacing:0;text-shadow:0 0 14px rgba(34,211,238,.42);box-shadow:0 0 0 1px rgba(56,189,248,.18),0 0 24px rgba(34,211,238,.26),0 16px 38px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.08);transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease,color 180ms ease}.button.ghost.mell-ask-inline-trigger::before{content:"✦";display:inline-grid;place-items:center;width:1.55rem;height:1.55rem;border:1px solid rgba(103,232,249,.5);border-radius:.48rem;background:rgba(34,211,238,.09);color:#a5f3fc;font-size:1rem;line-height:1;box-shadow:inset 0 0 14px rgba(34,211,238,.16),0 0 16px rgba(34,211,238,.2)}.button.ghost.mell-ask-inline-trigger:hover{transform:translateY(-4px);border-color:#67e8f9;background:linear-gradient(180deg,rgba(3,30,48,.94),rgba(6,21,36,.9));color:#ecfeff;box-shadow:0 0 0 1px rgba(125,211,252,.42),0 0 34px rgba(34,211,238,.42),0 22px 52px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.12)}.button.ghost.mell-ask-inline-trigger:focus-visible{outline:3px solid rgba(125,211,252,.9);outline-offset:4px}</style>';
const ASK_WIDGET_SNIPPET = ASK_WIDGET_THEME + '<script src="/mell-atendimento-widget.js?v=20260524-ask-only-hero" defer></script>';

export async function onRequest(context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  return new HTMLRewriter()
    .on("body", {
      element(element) {
        element.append(ASK_WIDGET_SNIPPET, { html: true });
      },
    })
    .transform(response);
}
