# Changelog

All notable changes to the Scripteca landing are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-06-20

### Fixed
- **`backdrop-filter` stripped from production bundle** — `vite-react-ssg` pulls
  `vite@7` which activates LightningCSS automatically; without a browserslist target
  it was removing `backdrop-filter` from the compiled CSS. Explicitly setting
  `css.transformer: 'postcss'` and `build.cssMinify: 'esbuild'` in `vite.config.js`
  restores the property in the production output.

## [1.0.0] - 2026-06-16

First public release of the landing as an independently versioned package.

### Added
- Static prerendering with `vite-react-ssg`, so every route ships complete HTML for search engines and social crawlers.
- SEO meta tags, Open Graph and Twitter card support.
- JSON-LD structured data: Organization, WebSite, Course and FAQPage.
- Favicon set, web app manifest and social share image.
- `robots.txt` and `sitemap.xml`.
- Vercel configuration with long-term asset caching and clean URLs.

### Changed
- Improved heading hierarchy and semantic HTML for SEO.
- Migrated into a pnpm + Turborepo monorepo, consuming the shared `@scripteca/ui` and `@scripteca/styles` packages.

## History before 1.0.0

Before this release the landing went through two earlier iterations that shared
their structure with the platform and did not follow independent versioning: an
initial beginner-stage version and a second one with a new visual identity.
Independent versioning of the `landing` package starts at 1.0.0.

[Unreleased]: https://github.com/braian24xd/scripteca-frontend/compare/landing@1.0.1...HEAD
[1.0.1]: https://github.com/braian24xd/scripteca-frontend/compare/landing@1.0.0...landing@1.0.1
[1.0.0]: https://github.com/braian24xd/scripteca-frontend/releases/tag/landing@1.0.0