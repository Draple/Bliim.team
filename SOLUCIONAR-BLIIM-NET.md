# Solucionar "No web page was found" en http://bliim.net/

Sigue estos pasos en orden.

---

## 1. Usar HTTPS (no HTTP)

Prueba primero: **https://bliim.net** (con **s**).

Si solo has probado **http://bliim.net**, el navegador puede mostrar "No web page was found" hasta que el dominio esté bien configurado. Con HTTPS suele funcionar antes.

---

## 2. Añadir bliim.net en Netlify

1. Entra en [app.netlify.com](https://app.netlify.com) → tu sitio (**dulcet-queijadas-9b14ea**).
2. **Domain management** → **Add custom domain** / **Add domain alias**.
3. Escribe: **bliim.net**
4. Añade también **www.bliim.net** si quieres que funcione con www.
5. Netlify te dirá qué registros DNS usar. Anótalos (IP para A, y CNAME para www).

Sin este paso, Netlify no responderá para bliim.net aunque el DNS esté bien.

---

## 3. Configurar DNS en Namecheap (Advanced DNS)

1. Namecheap → **Domain List** → **Manage** en **bliim.net**.
2. Entra en **Advanced DNS** (no en "Redirect Domain").

Añade o edita:

| Type   | Host | Value |
|--------|------|--------|
| **A Record** | `@` | `75.2.60.5` |
| **CNAME**    | `www` | `dulcet-queijadas-9b14ea.netlify.app` |

- Si Netlify te da **otra IP** en "Set up custom domain", usa esa en lugar de `75.2.60.5`.
- **Save** / **Save All**.

Quita si los tienes:
- CNAME con Host = `@`
- "URL Redirect" o "Redirect Domain" que apunte a otra página (puedes volver a ponerlo después de que el sitio funcione).

---

## 4. Esperar propagación DNS

Los cambios pueden tardar **5 minutos hasta 24–48 horas**.

Para comprobar:
- [whatsmydns.net](https://www.whatsmydns.net) → busca **bliim.net** (A) y **www.bliim.net** (CNAME).
- Cuando el A apunte a la IP de Netlify y el CNAME a `dulcet-queijadas-9b14ea.netlify.app`, está bien.

---

## 5. Verificar en Netlify

1. **Domain management** → dominio **bliim.net**.
2. Pulsa **Verify** / **Refresh**.
3. Cuando ponga "Verified", activa **HTTPS** (certificado automático).

---

## Resumen

| Dónde        | Qué hacer |
|-------------|-----------|
| **Netlify** | Añadir dominio **bliim.net** (y www.bliim.net) en Domain management. |
| **Namecheap** | Advanced DNS: A `@` → IP de Netlify, CNAME `www` → `dulcet-queijadas-9b14ea.netlify.app`. |
| **Navegador** | Probar **https://bliim.net** (y después https://www.bliim.net). |

Si tras 24 h sigue sin funcionar, revisa que no haya otro "Redirect" o "Parking" activo para bliim.net en Namecheap y que la IP del A record sea exactamente la que Netlify indica.
