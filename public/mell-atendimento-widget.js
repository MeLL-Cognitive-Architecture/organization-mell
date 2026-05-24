(function () {
  "use strict";

  var CONTACT_EMAIL = "contato@mellcognitivearchitecture.com.br";
  var SITE_URL = "https://mellcognitivearchitecture.com.br";

  var quickActions = [
    "Soluções",
    "Demonstração",
    "CIA-Tec",
    "ERSC-Core",
    "SovereignGuard",
    "Contato",
  ];

  var answers = [
    {
      label: "CIA-Tec",
      keywords: ["cia", "arquitetura", "framework", "tipologia"],
      text:
        "CIA-Tec é a arquitetura de governança cognitiva federada da MeLL. Ela organiza princípios, camadas, papéis, controles, métricas e evolução controlada para IA com autonomia supervisionada, rastreabilidade e soberania humana.",
    },
    {
      label: "ERSC-Core",
      keywords: ["ersc", "plataforma", "incidente", "fluxo", "orquestra"],
      text:
        "ERSC-Core é a plataforma operacional para implementar e orquestrar fluxos governados, integrações, incidentes, evidências, recomendações, classificação de riscos e execução supervisionada.",
    },
    {
      label: "SovereignGuard",
      keywords: ["sovereign", "scga", "guard", "autonomia", "contenção"],
      text:
        "SovereignGuard / SCGA-Core é o componente de governança ativa que media a autonomia da IA por registro, interceptação cognitiva, contenção, ética, rastreabilidade e confirmação humana.",
    },
    {
      label: "Demonstração",
      keywords: ["demo", "demonstração", "demonstracao", "teste", "publica"],
      text:
        "A demonstração pública apresenta um fluxo não sensível com EXECUTE, REGISTER, SEAL e CONFIRM. Ela mostra como uma entrada é analisada, registrada, estabilizada e mantida como consultiva até confirmação humana.",
    },
    {
      label: "Soluções",
      keywords: ["solução", "solucoes", "soluções", "serviço", "produto", "assistente"],
      text:
        "As soluções públicas incluem governança cognitiva corporativa, CIA-Tec, ERSC-Core, SovereignGuard, assistentes governados e inteligência documental aplicada a ambientes críticos.",
    },
    {
      label: "Privacidade",
      keywords: ["privacidade", "dados", "lgpd", "segurança", "seguranca"],
      text:
        "O atendimento não deve receber dados sensíveis, segredos industriais, credenciais ou informações pessoais desnecessárias. Para escopos reais, o encaminhamento deve ser validado por atendimento humano.",
    },
    {
      label: "Contato",
      keywords: ["contato", "email", "e-mail", "falar", "atendimento", "comercial"],
      text:
        "Posso montar uma mensagem de contato com nome, organização, e-mail e necessidade. Depois você envia esse resumo pelo e-mail institucional.",
      action: "lead",
    },
  ];

  var state = {
    open: false,
    leadMode: false,
    leadStep: 0,
    lead: {
      nome: "",
      organizacao: "",
      email: "",
      necessidade: "",
    },
  };

  function createElement(tagName, className, text) {
    var element = document.createElement(tagName);
    if (className) {
      element.className = className;
    }
    if (text) {
      element.textContent = text;
    }
    return element;
  }

  var styles = document.createElement("style");
  styles.textContent =
    ".mell-ask-root{position:fixed;right:20px;bottom:20px;z-index:2147483000;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#f8fafc}" +
    ".mell-ask-launcher{display:inline-flex;align-items:center;gap:10px;min-height:50px;border:1px solid rgba(125,211,252,.36);border-radius:14px;background:#38bdf8;color:#02111f;padding:0 16px;font:inherit;font-weight:900;box-shadow:0 18px 42px rgba(0,0,0,.34);cursor:pointer}" +
    ".mell-ask-icon{display:grid;width:28px;height:28px;place-items:center;border-radius:9px;background:rgba(2,17,31,.13);font-weight:950}" +
    ".mell-ask-panel{position:absolute;right:0;bottom:66px;display:none;width:min(392px,calc(100vw - 32px));max-height:min(680px,calc(100vh - 104px));overflow:hidden;border:1px solid rgba(125,211,252,.28);border-radius:18px;background:#07111f;box-shadow:0 28px 80px rgba(0,0,0,.42)}" +
    ".mell-ask-root.is-open .mell-ask-panel{display:grid;grid-template-rows:auto 1fr auto}" +
    ".mell-ask-header{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:16px;border-bottom:1px solid rgba(148,163,184,.2);background:linear-gradient(180deg,rgba(12,23,40,.96),rgba(7,17,31,.96))}" +
    ".mell-ask-title{margin:0;font-size:16px;line-height:1.25}.mell-ask-subtitle{margin:5px 0 0;color:#b9c7d9;font-size:13px;line-height:1.4}" +
    ".mell-ask-close{display:grid;width:34px;height:34px;place-items:center;border:1px solid rgba(148,163,184,.24);border-radius:10px;background:rgba(255,255,255,.045);color:#f8fafc;cursor:pointer;font-size:18px}" +
    ".mell-ask-log{display:flex;flex-direction:column;gap:10px;overflow:auto;padding:16px;background:#040914}" +
    ".mell-ask-message{max-width:91%;white-space:pre-wrap;border-radius:14px;padding:11px 12px;font-size:14px;line-height:1.48}.mell-ask-bot{align-self:flex-start;border:1px solid rgba(148,163,184,.2);background:rgba(255,255,255,.055);color:#f8fafc}.mell-ask-user{align-self:flex-end;background:#38bdf8;color:#02111f;font-weight:760}" +
    ".mell-ask-chips{display:flex;flex-wrap:wrap;gap:8px;padding:0 16px 12px;background:#040914}.mell-ask-chip{border:1px solid rgba(125,211,252,.25);border-radius:999px;background:rgba(56,189,248,.08);color:#7dd3fc;padding:8px 10px;font:inherit;font-size:13px;font-weight:760;cursor:pointer}" +
    ".mell-ask-form{display:grid;grid-template-columns:1fr auto;gap:8px;padding:12px;border-top:1px solid rgba(148,163,184,.2);background:#07111f}.mell-ask-input{min-width:0;border:1px solid rgba(148,163,184,.35);border-radius:12px;padding:11px 12px;background:#02060d;color:#f8fafc;font:inherit;font-size:14px}.mell-ask-input::placeholder{color:#8da1bc}.mell-ask-send{border:0;border-radius:12px;background:#38bdf8;color:#02111f;padding:0 14px;font:inherit;font-weight:900;cursor:pointer}" +
    ".mell-ask-note{padding:0 16px 14px;color:#8da1bc;background:#040914;font-size:12px;line-height:1.45}" +
    "@media(max-width:520px){.mell-ask-root{right:12px;bottom:12px}.mell-ask-panel{right:-4px;bottom:62px;width:calc(100vw - 24px)}}";
  document.head.appendChild(styles);

  var root = createElement("div", "mell-ask-root");
  var panel = createElement("section", "mell-ask-panel");
  var header = createElement("header", "mell-ask-header");
  var headerCopy = createElement("div");
  var title = createElement("h2", "mell-ask-title", "Atendimento MeLL");
  var subtitle = createElement(
    "p",
    "mell-ask-subtitle",
    "Orientação inicial sobre arquitetura cognitiva governada."
  );
  var closeButton = createElement("button", "mell-ask-close", "×");
  var log = createElement("div", "mell-ask-log");
  var footer = createElement("div");
  var chips = createElement("div", "mell-ask-chips");
  var note = createElement(
    "p",
    "mell-ask-note",
    "Não envie dados sensíveis. As respostas são consultivas e dependem de confirmação humana para qualquer efeito institucional."
  );
  var form = createElement("form", "mell-ask-form");
  var input = createElement("input", "mell-ask-input");
  var sendButton = createElement("button", "mell-ask-send", "Enviar");
  var launcher = createElement("button", "mell-ask-launcher");
  var launcherIcon = createElement("span", "mell-ask-icon", "?");
  var launcherText = createElement("span", "", "Ask AI MeLL");

  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-modal", "false");
  panel.setAttribute("aria-labelledby", "mell-ask-title");
  title.id = "mell-ask-title";
  log.setAttribute("aria-live", "polite");
  closeButton.type = "button";
  closeButton.setAttribute("aria-label", "Fechar atendimento");
  input.type = "text";
  input.autocomplete = "off";
  input.placeholder = "Digite sua pergunta";
  input.setAttribute("aria-label", "Mensagem para o atendimento");
  sendButton.type = "submit";
  launcher.type = "button";
  launcher.setAttribute("aria-expanded", "false");

  headerCopy.appendChild(title);
  headerCopy.appendChild(subtitle);
  header.appendChild(headerCopy);
  header.appendChild(closeButton);
  form.appendChild(input);
  form.appendChild(sendButton);
  footer.appendChild(chips);
  footer.appendChild(note);
  footer.appendChild(form);
  panel.appendChild(header);
  panel.appendChild(log);
  panel.appendChild(footer);
  launcher.appendChild(launcherIcon);
  launcher.appendChild(launcherText);
  root.appendChild(panel);
  root.appendChild(launcher);
  document.body.appendChild(root);

  function normalize(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function addMessage(text, type) {
    var message = createElement("div", "mell-ask-message mell-ask-" + type, text);
    log.appendChild(message);
    log.scrollTop = log.scrollHeight;
  }

  function setOpen(open) {
    state.open = open;
    root.classList.toggle("is-open", open);
    launcher.setAttribute("aria-expanded", open ? "true" : "false");
    if (open) {
      input.focus();
    }
  }

  function renderChips() {
    chips.textContent = "";
    quickActions.forEach(function (label) {
      var chip = createElement("button", "mell-ask-chip", label);
      chip.type = "button";
      chip.addEventListener("click", function () {
        handleUserText(label);
      });
      chips.appendChild(chip);
    });
  }

  function findAnswer(text) {
    var clean = normalize(text);
    for (var i = 0; i < answers.length; i += 1) {
      var answer = answers[i];
      for (var j = 0; j < answer.keywords.length; j += 1) {
        if (clean.indexOf(normalize(answer.keywords[j])) >= 0) {
          return answer;
        }
      }
    }
    return null;
  }

  function startLead() {
    state.leadMode = true;
    state.leadStep = 0;
    state.lead = { nome: "", organizacao: "", email: "", necessidade: "" };
    addMessage("Para encaminhar ao atendimento humano, informe seu nome.", "bot");
  }

  function renderLeadSummary() {
    addMessage(
      "Resumo para contato humano:\n" +
        "Nome: " +
        state.lead.nome +
        "\nOrganização: " +
        state.lead.organizacao +
        "\nE-mail: " +
        state.lead.email +
        "\nNecessidade: " +
        state.lead.necessidade +
        "\nOrigem: ASK de atendimento do site " +
        SITE_URL,
      "bot"
    );
    addMessage("Envie esse resumo para " + CONTACT_EMAIL + ".", "bot");
  }

  function handleLead(text) {
    var fields = ["nome", "organizacao", "email", "necessidade"];
    var prompts = [
      "Qual é a organização ou projeto relacionado ao contato?",
      "Qual e-mail deve ser usado para retorno?",
      "Descreva em poucas linhas a necessidade, contexto ou solução de interesse.",
    ];
    state.lead[fields[state.leadStep]] = text;
    state.leadStep += 1;

    if (state.leadStep < fields.length) {
      addMessage(prompts[state.leadStep - 1], "bot");
      return;
    }

    state.leadMode = false;
    renderLeadSummary();
  }

  function handleUserText(text) {
    var cleanText = String(text || "").trim();
    if (!cleanText) {
      return;
    }

    addMessage(cleanText, "user");
    input.value = "";

    if (state.leadMode) {
      handleLead(cleanText);
      return;
    }

    var answer = findAnswer(cleanText);
    if (!answer) {
      addMessage(
        "Posso ajudar com soluções, CIA-Tec, ERSC-Core, SovereignGuard, demonstração pública, privacidade ou contato. Para atendimento humano, digite contato.",
        "bot"
      );
      return;
    }

    addMessage(answer.text, "bot");
    if (answer.action === "lead") {
      startLead();
    }
  }

  launcher.addEventListener("click", function () {
    setOpen(!state.open);
  });

  closeButton.addEventListener("click", function () {
    setOpen(false);
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    handleUserText(input.value);
  });

  document.addEventListener("click", function (event) {
    if (event.target instanceof Element && event.target.closest("[data-mell-ask-open]")) {
      setOpen(true);
    }
  });

  renderChips();
  addMessage(
    "Olá. Sou o ASK de atendimento da MeLL. Posso orientar sobre soluções, CIA-Tec, ERSC-Core, SovereignGuard, demonstração pública e contato institucional.",
    "bot"
  );
})();
