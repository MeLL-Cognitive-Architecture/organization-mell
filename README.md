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

## Estrutura

```text
functions/
  health.js
public/
  index.html
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
