# Export markdown ZIP 0.1.5

## Highlights

- Adds contribution guidance and a release checklist for maintainers.
- Publishes GitHub Release notes from `RELEASE_NOTES.md`.
- Adds GitHub artifact attestations for release assets.
- Updates dependencies within the current supported version ranges.
- Documents Vault read usage: the plugin reads only the selected note, locally linked Markdown files, and local attachments that are part of the export graph.

## Verification

- Build: `npm run build`
- Tests: `npm test`
- Lint: `npm run lint`
- Dynamic code audit: no project-authored `eval` or `new Function` in `src`; the bundled `main.js` includes a `new Function` pattern from JSZip's transitive `setimmediate` polyfill.
