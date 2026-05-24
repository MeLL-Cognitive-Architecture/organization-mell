const ASK_WIDGET_SNIPPET = '<script src="/mell-atendimento-widget.js" defer></script>';

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
