<p align="center">
  <img src="https://raw.githubusercontent.com/shahboura/it-tools/main/.github/logo-dark.png" alt="IT Tools logo" width="180" />
</p>

# IT Tools

Useful tools for developers and people working in IT — **86 handy, client-side tools** in one self-hostable web app. A fork of [CorentinTh/it-tools](https://github.com/CorentinTh/it-tools).

## Quick start

```sh
docker run -d --name it-tools --restart unless-stopped -p 8080:8080 shahboura/it-tools:latest
```

Open http://localhost:8080 — no accounts, no database, no server-side processing.

## Features

Everything runs 100% in your browser:

- **Crypto** — hash text, HMAC generator, token generator, UUID, bcrypt, encryption
- **Converters** — date/time, base64, YAML ⇄ JSON, case converter, number base
- **Network** — IPv4 subnet calculator, IPv6 ULA generator, MAC address lookup
- **Web** — URL parser/encoder, HTTP status codes, slugify
- **Dev** — JSON diff, regex tester, SQL prettifier, docker run → compose converter
- **Text / Images** — QR code, WiFi QR, SVG placeholder, markdown editor
- …and many more (86 total)

## Image details

- **Base**: `nginx:stable-alpine-slim` (static production build)
- **Architectures**: `linux/amd64`, `linux/arm64`
- **Port**: `8080` (exposes a `/health` healthcheck)
- **Toolchain**: pnpm + Vite

## Tags

| Tag | Description |
|---|---|
| `latest` | latest stable release |
| `1.1.3` | pinned release |
| `nightly` | built from `main` every night |

## Links

- Source & issues: https://github.com/shahboura/it-tools
- Live demo: https://it-tools.tech
- License: GNU GPLv3
