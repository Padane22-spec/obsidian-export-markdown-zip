# Export markdown ZIP 0.1.6

## Highlights

- Adds contribution guidance and a release checklist for maintainers.
- Publishes GitHub Release notes from `RELEASE_NOTES.md`.
- Adds GitHub artifact attestations for release assets.
- Removes bundled legacy dynamic script fallback code from JSZip transitive dependencies.
- Documents Vault read usage: the plugin reads only the selected note, locally linked Markdown files, and local attachments that are part of the export graph.

## Verification

- Build: `npm run build`
- Tests: `npm test`
- Lint: `npm run lint`
- Dynamic code audit: no `createElement("script")`, `onreadystatechange`, `new Function`, or `setImmediate$` patterns in the bundled `main.js`.
