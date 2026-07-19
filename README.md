# squishedfox.com

Source code for [squishedfox.com](https://squishedfox.com), built with [Zola](https://www.getzola.org) — a fast static site generator written in Rust.

## Prerequisites

- [Zola](https://www.getzola.org/documentation/getting-started/installation/) (install via your package manager or grab a prebuilt binary)

## Quick Start

```bash
# Serve locally with live reload
zola serve
```

```bash
# Build for production
zola build
```

Dev server runs at [http://127.0.0.1:1111](http://127.0.0.1:1111)

## Project Structure

.
├── config.toml # Site configuration
├── content/ # Markdown pages and blog posts
├── templates/ # HTML templates
├── static/ # Static assets (CSS, images, fonts, etc.)
├── themes/ # Zola themes
└── public/ # Build output (gitignored)

## Modifying content

- Pages & posts: Write Markdown files in content/ with Zola front matter
- Layout & styling: Edit templates in templates/ and assets in static/
- Site settings: Edit config.toml

## Contributors

squishedfox

## Contributing

For major changes, please open an issue first to discuss what you’d like to change.

1. Fork the repository
2. Create a feature branch (git checkout -b feature/your-feature)
3. Make your changes
4. Test locally with zola serve
5. Commit and push
6. Open a pull request
