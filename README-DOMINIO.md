# Cómo redirigir un dominio a tu sitio (Netlify)

Tu sitio está en: **https://dulcet-queijadas-9b14ea.netlify.app/**

---

## 1. Usar un dominio propio (ej. bliim.team) como dirección principal

Así, quien entre a **tudominio.com** verá el mismo sitio.

### En Netlify

1. Entra en [app.netlify.com](https://app.netlify.com) y abre el sitio.
2. **Domain management** (o **Domain settings**) → **Add custom domain**.
3. Escribe tu dominio (ej. `bliim.team` o `www.bliim.team`).
4. Netlify te mostrará qué registros DNS configurar:
   - **Dominio raíz (bliim.team):** un registro **A** apuntando a `75.2.60.5` (o la IP que indique Netlify).
   - **www (www.bliim.team):** un **CNAME** apuntando a `dulcet-queijadas-9b14ea.netlify.app` (o al nombre que Netlify te dé).

### En tu registrador de dominio

(Donde compraste el dominio: GoDaddy, Namecheap, Google Domains, Cloudflare, etc.)

- Crea el registro **A** y/o **CNAME** tal como indica Netlify.
- Espera unos minutos (o hasta 48 h) a que se propague el DNS.

Cuando Netlify verifique el dominio, **tudominio.com** mostrará tu landing.

---

## 2. Redirigir la URL de Netlify hacia tu dominio

Para que **https://dulcet-queijadas-9b14ea.netlify.app** envíe a la gente a **https://tudominio.com**:

### Opción A – En Netlify (recomendado)

1. **Domain management** → añade tu dominio personalizado (como arriba).
2. **Domain management** → **Options** del dominio `dulcet-queijadas-9b14ea.netlify.app`:
   - Busca algo tipo **Redirect to main domain** o **Redirects** y configura que ese subdominio redirija a `https://tudominio.com` (301).

### Opción B – Con archivo `_redirects`

En la **raíz** del proyecto (donde está `index.html`), crea o edita el archivo **`_redirects`** (sin carpeta `public/` si Netlify publica la raíz):

```
https://dulcet-queijadas-9b14ea.netlify.app/*  https://tudominio.com/:splat  301!
```

Sustituye `tudominio.com` por tu dominio real.  
Si Netlify publica desde la raíz, el archivo debe estar en la raíz; si publicas desde `public/`, el `_redirects` debe estar en `public/`.

---

## 3. Redirigir desde otro hosting o página antigua

Si hoy el dominio apunta a otro sitio (otro hosting, otra web):

- En el **panel de tu hosting** o **registrador**, busca “Redirect”, “Redirect domain” o “Forwarding”.
- Configura una **redirección 301** desde tu dominio (o la URL antigua) hacia:
  **https://dulcet-queijadas-9b14ea.netlify.app**

Así, quien tenga un enlace a la URL vieja llegará a tu sitio en Netlify.

---

## Resumen rápido

| Objetivo | Dónde hacerlo |
|----------|----------------|
| Que **tudominio.com** muestre el sitio | Netlify: Add custom domain + DNS (A/CNAME) en el registrador |
| Que la URL de Netlify lleve a **tudominio.com** | Netlify: redirect del subdominio al dominio principal, o archivo `_redirects` |
| Que una **URL antigua** lleve al sitio en Netlify | Redirección 301 en el hosting o registrador hacia la URL de Netlify |

Si me dices el dominio exacto (ej. bliim.team) y si quieres con o sin www, puedo dejarte los pasos y el contenido de `_redirects` ya rellenado.
