# MeLL Cognitive Architecture — Site institucional

Estrutura de publicação estática para Netlify.

## Versão v1.1 — Alinhamento institucional público

Esta versão ajusta o site público para coerência com a tipologia CIA-Tec™ sem expor identificadores de baseline/versionamento interno.

- **MeLL Cognitive Architecture** — organização institucional.
- **CIA-Tec™** — arquitetura de governança cognitiva.
- **Framework CIA-Tec™** — modelo estruturante.
- **DataCore** — Data Layer de evidência, integridade e rastreabilidade.
- **ERSC-Core** — plataforma operacional.
- **SovereignGuard / SCGA-Core** — módulo especializado de governança ativa.
- **GPTs, apps e assistentes** — interfaces governadas.

## ASK de atendimento

O atendimento inicial do site é carregado pelo arquivo `public/mell-atendimento-widget.js`.

A injeção do script é feita pela Edge Function `netlify/edge-functions/inject-ask-widget.js`, registrada em `netlify.toml`, sem alterar diretamente o HTML das páginas públicas.

O ASK orienta visitantes sobre soluções, CIA-Tec™, ERSC-Core, SovereignGuard / SCGA-Core, demonstração pública, privacidade e encaminhamento institucional por e-mail.

## Estrutura

```text
functions/
  health.js
netlify/
  edge-functions/
    inject-ask-widget.js
public/
  index.html
  mell-atendimento-widget.js
  robots.txt
  sitemap.xml
  README.md
  docs/
  privacypolicy/
  terms/
netlify.toml
```

## Deploy

O deploy deve publicar a pasta `public/` e preservar os ativos existentes no repositório, como favicons, imagens e `site.webmanifest`.

## Observação de governança

Identificadores internos de baseline e versões técnicas da CIA-Tec™ não devem aparecer na comunicação pública do site.
