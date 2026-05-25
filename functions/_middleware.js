const ASK_WIDGET_THEME = '<style id="mell-ask-theme">.hero .actions>a{display:none}.button.ghost.mell-ask-inline-trigger{position:relative;min-height:48px;padding:0 1.35rem;border:2px solid rgba(34,211,238,.88);border-radius:999px;background:linear-gradient(180deg,rgba(2,17,31,.92),rgba(7,17,31,.86));color:#67e8f9;font-size:1rem;font-weight:860;letter-spacing:0;text-shadow:0 0 14px rgba(34,211,238,.42);box-shadow:0 0 0 1px rgba(56,189,248,.18),0 0 24px rgba(34,211,238,.26),0 16px 38px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.08);transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease,background 180ms ease,color 180ms ease}.button.ghost.mell-ask-inline-trigger::before{content:none}.button.ghost.mell-ask-inline-trigger:hover{transform:translateY(-4px);border-color:#67e8f9;background:linear-gradient(180deg,rgba(3,30,48,.94),rgba(6,21,36,.9));color:#ecfeff;box-shadow:0 0 0 1px rgba(125,211,252,.42),0 0 34px rgba(34,211,238,.42),0 22px 52px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.12)}.button.ghost.mell-ask-inline-trigger:focus-visible{outline:3px solid rgba(125,211,252,.9);outline-offset:4px}</style>';
const ASK_WIDGET_LABEL_SCRIPT = '<script>window.addEventListener("DOMContentLoaded",function(){var label="Chat de Atendimento MeLL AI";document.querySelectorAll(".mell-ask-inline-trigger").forEach(function(button){button.textContent=label;button.setAttribute("aria-label",label);});document.querySelectorAll(".mell-ask-launcher").forEach(function(button){var text=button.querySelector("span:last-child");if(text){text.textContent=label;}button.setAttribute("aria-label",label);});document.querySelectorAll(".mell-ask-message").forEach(function(message){message.textContent=message.textContent.replace("Sou o ASK de atendimento da MeLL.","Sou o chat de atendimento MeLL AI.").replace("Origem: ASK de atendimento do site","Origem: Chat de atendimento MeLL AI do site");});});</script>';
const ASK_WIDGET_SNIPPET = ASK_WIDGET_THEME + '<script src="/mell-atendimento-widget.js?v=20260524-mell-ai-chat-label" defer></script>' + ASK_WIDGET_LABEL_SCRIPT;

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
