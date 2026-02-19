# Bliim.team — Landing

Landing de **Bliim Global hq LLC**: desarrollo, servicios al cliente y servicios administrativos.

- Página principal con selector de idioma (ES/EN)
- Términos y condiciones
- Política de privacidad

## Estructura

- `index.html` — Landing principal
- `terminos-condiciones.html` — Términos y condiciones (ES/EN)
- `politica-privacidad.html` — Política de privacidad (ES/EN)
- `styles.css` — Estilos (Montserrat, negro/blanco)
- `main.js` — i18n y menú (landing)
- `legal.js` — Selector de idioma (páginas legales)
- `assets/` — Logo e imágenes

## Cómo subir a GitHub

En la carpeta del proyecto, ejecuta en la terminal:

```bash
git init
git add .
git commit -m "Initial commit: landing Bliim.team"
git branch -M main
git remote add origin https://github.com/Draple/Bliim.team.git
git push -u origin main
```

Si el repositorio ya tiene contenido (por ejemplo, un README creado en GitHub), usa:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

Si te pide usuario y contraseña, usa un **Personal Access Token** de GitHub en lugar de la contraseña (Settings → Developer settings → Personal access tokens).
