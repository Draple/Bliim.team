# Configurar dominio en Namecheap para Netlify

Para que tu dominio (ej. **bliim.team** o el que tengas en Namecheap) muestre tu sitio en Netlify.

---

## Paso 1: En Netlify — Obtener los datos

1. Entra en [app.netlify.com](https://app.netlify.com) e inicia sesión.
2. Abre tu sitio (**dulcet-queijadas-9b14ea**).
3. Ve a **Domain management** (o **Domain settings**).
4. Pulsa **Add custom domain** (o **Add domain**).
5. Escribe tu dominio exacto, por ejemplo:
   - `bliim.team` (dominio raíz)
   - o `www.bliim.team` (con www)
6. Netlify te mostrará qué registros DNS necesitas. Anota:
   - Para el **dominio raíz** (bliim.team): suele pedir un **A Record** o **ALIAS**.
   - Para **www**: un **CNAME** apuntando a algo como `dulcet-queijadas-9b14ea.netlify.app`.

Si Netlify te da una **Load Balancer** o IP para el A record, anótala (suele ser algo como `75.2.60.5`). Para CNAME suele ser: `dulcet-queijadas-9b14ea.netlify.app`.

---

## Paso 2: En Namecheap — Entrar al DNS

1. Entra en [namecheap.com](https://www.namecheap.com) e inicia sesión.
2. Ve a **Domain List** y localiza tu dominio.
3. Pulsa **Manage** junto al dominio.
4. En el menú lateral, entra en **Advanced DNS** (no uses “Redirect Domain” para esto; usamos solo DNS).

---

## Paso 3: Añadir o editar registros en Namecheap

En **Advanced DNS** verás una tabla de registros. Añade o edita así:

### Opción A — Dominio raíz (tudominio.com) + www

| Type   | Host | Value / Target                                      | TTL   |
|--------|------|------------------------------------------------------|-------|
| **A Record**  | `@`  | `75.2.60.5`                                         | Automatic |
| **CNAME**     | `www`| `dulcet-queijadas-9b14ea.netlify.app`               | Automatic |

- **@** = dominio raíz (ej. bliim.team).
- **www** = subdominio www (ej. www.bliim.team).
- La IP **75.2.60.5** es la que Netlify suele dar para el Load Balancer; si Netlify te muestra otra, usa esa.

### Opción B — Si Namecheap tiene “ALIAS” o “URL Redirect Record”

- Para el dominio raíz (@): si Netlify lo permite, puedes usar **ALIAS** (o “Flatten”) apuntando a `dulcet-queijadas-9b14ea.netlify.app` si Namecheap lo ofrece.
- Si no hay ALIAS, usa el **A Record** con la IP que te indique Netlify (ej. `75.2.60.5`).

### Qué borrar o evitar

- Quita cualquier **CNAME** que tenga **Host = @** (en Namecheap no se suele poder usar CNAME en @).
- No dejes **URL Redirect** activo para la raíz si quieres que Netlify controle todo; primero configura solo los A/CNAME.

---

## Paso 4: Guardar y esperar

1. Pulsa **Save** / **Save All** en Advanced DNS.
2. Los cambios DNS pueden tardar **unos minutos hasta 24–48 horas**.
3. En Netlify, en Domain management, si hace falta, pulsa **Verify** o **Refresh** para que detecte el dominio.

---

## Paso 5: HTTPS en Netlify

1. En Netlify → **Domain management**, con el dominio ya verificado.
2. Activa **HTTPS** (Netlify suele dar certificado gratis con Let’s Encrypt).
3. Opcional: en **Options** del dominio, puedes elegir “Redirect to HTTPS” y si quieres que **www** redirija a la raíz o al revés.

---

## Resumen rápido (Namecheap Advanced DNS)

| Type   | Host | Value |
|--------|------|--------|
| A      | `@`  | `75.2.60.5` |
| CNAME  | `www`| `dulcet-queijadas-9b14ea.netlify.app` |

(Usa la IP y el nombre que Netlify te muestre en “Add custom domain” si son distintos.)

---

## Si algo no funciona

- **Netlify no verifica el dominio:** espera 1–2 horas y vuelve a verificar; revisa que en Namecheap no haya un “URL Redirect” activo para ese dominio.
- **Solo funciona www y no la raíz:** comprueba que el A Record para `@` esté bien y que la IP sea la de Netlify.
- **Certificado HTTPS pendiente:** en Netlify, Domain management → HTTPS → “Verify DNS configuration” y espera a que se genere el certificado.

Cuando termines, tu dominio de Namecheap abrirá directamente tu landing en Netlify.
