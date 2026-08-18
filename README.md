# Senses Montessori School

Astro 7 homepage foundation for Senses Montessori School. Portuguese is canonical at `/`; English is served from `/en/`. The two routes share the same components and use localized content from `src/i18n/content.ts`.

## Local development

This project requires Node 22.12 or newer. Node 24.19.0 is recommended on Windows.

Open Cmder or PowerShell, change to the project directory, select the supported Node version, install the dependencies, and start Astro:

```powershell
cd sensesschool
nvm use 24.19.0
npm install
npm run dev
```

Then open:

- Portuguese: http://localhost:4321/
- English: http://localhost:4321/en/

Press `Ctrl+C` in the terminal to stop the development server.

### Cmder and NVM troubleshooting

After `nvm use 24.19.0`, confirm that Cmder is actually using that version:

```cmd
where node
node --version
npm --version
```

If `node --version` still reports Node 20, a standalone Node installation at `C:\Program Files\nodejs` is taking precedence over NVM. You can run the site immediately by invoking the NVM-managed Node 24 executable directly:

```cmd
"%APPDATA%\nvm\v24.19.0\node.exe" ".\node_modules\astro\bin\astro.mjs" dev
```

The equivalent PowerShell command is:

```powershell
& "$env:APPDATA\nvm\v24.19.0\node.exe" .\node_modules\astro\bin\astro.mjs dev
```

To repair NVM permanently:

1. Uninstall the standalone Node.js 20 installation from Windows Apps.
2. Remove or rename the leftover `C:\Program Files\nodejs` directory if it still exists.
3. Open Cmder as Administrator and run `nvm use 24.19.0`.
4. Restart Cmder and verify the active versions with the commands above.

If `npm --version` fails after that, reinstall the NVM-managed version:

```cmd
nvm uninstall 24.19.0
nvm install 24.19.0
nvm use 24.19.0
```

For subsequent runs, dependencies are already installed, so only `nvm use 24.19.0` and `npm run dev` are needed.

Validation:

```bash
npm run check
npm run build
```

The site is static-first. Client JavaScript is limited to the accessible mobile menu and the scroll-controlled canvas sequence.

See `docs/DISCOVERY-AUDIT.md` for the current-site audit and migration strategy, and `docs/HERO-ANIMATION-ASSETS.md` for replacing the placeholder animation.
