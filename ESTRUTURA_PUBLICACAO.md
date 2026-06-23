# Estrutura de publicação — MeLL Cognitive Architecture

```text
main/
├── functions/
│   └── health.js
├── public/
│   ├── index.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── README.md
│   ├── docs/
│   │   └── README.md
│   ├── privacypolicy/
│   │   └── index.html
│   └── terms/
│       └── index.html
├── netlify.toml
├── README.md
└── CHANGELOG_v1.1.md
```

## Publicação

Netlify deve publicar `public/`.

## Governança pública

Identificadores internos de baseline/versionamento técnico da CIA-Tec™ não devem ser publicados no site institucional.

## Validação

```text
/                 -> 200
/privacypolicy/   -> 200
/terms/           -> 200
/sitemap.xml      -> 200
/robots.txt       -> 200
```
