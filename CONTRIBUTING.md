# Contributing

Thanks for helping improve Export markdown ZIP.

## Development setup

Requirements:

- Node.js 20 or newer
- npm
- Obsidian desktop for manual plugin testing

Install dependencies and verify the project:

```bash
npm install
npm run build
npm test
```

During development, use:

```bash
npm run dev
```

The generated plugin files are:

- `manifest.json`
- `main.js`
- `styles.css`

Copy them into an Obsidian vault at `.obsidian/plugins/export-markdown-zip/` for manual testing.

## Code guidelines

- Keep the plugin desktop-only unless the filesystem and native dialog behavior is redesigned.
- Avoid project-authored dynamic code execution. Do not add `eval`, `new Function`, or string-based function constructors in `src`.
- Keep zip output deterministic in structure: one top-level folder named after the archive, with vault-relative paths below it.
- Preserve unresolved external or local links unless the export planner can resolve them safely.
- Add or update focused tests for link scanning, markdown rewriting, export planning, and zip writing behavior.

## Release checklist

Before tagging a release:

1. Update `manifest.json`, `versions.json`, and `package.json` to the same version.
2. Update `RELEASE_NOTES.md` with user-facing changes for the version.
3. Run `npm run build`.
4. Run `npm test`.
5. Check the source for project-authored dynamic code:

```bash
rg -n "\beval\s*\(|new\s+Function\b|Function\s*\(" src
```

`main.js` may contain dynamic-code patterns from bundled third-party dependencies. If that changes, document the dependency source in release notes.

6. Create and push a semver tag such as `0.1.5`.

The release workflow publishes `manifest.json`, `main.js`, and `styles.css` and generates GitHub artifact attestations for those release assets.
