const WIDGET_SNIPPET = '<script src="/mell-atendimento-widget.js" defer></script>';

export default async function injectAskWidget(request, context) {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  return new HTMLRewriter()
    .on("body", {
      element(element) {
        element.append(WIDGET_SNIPPET, { html: true });
      },
    })
    .transform(response);
}
