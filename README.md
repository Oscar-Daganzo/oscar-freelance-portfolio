# Oscar Daganzo — Diseño técnico sostenible

Web profesional bilingüe (castellano/catalán) para servicios de diseño técnico
modular, documentación de fabricación y preparación de archivos DWG/DXF.

## Editar textos y trabajos

La información editable está centralizada en `app/content.ts`. Busca estos dos
comentarios:

- `ZONA EDITABLE — EJEMPLOS DE TRABAJOS`
- `ZONA EDITABLE — TEXTOS GENERALES`

Los textos en castellano están dentro de `es` y los de catalán dentro de `ca`.

### Añadir un trabajo

1. Guarda su imagen en `public/projects/`.
2. Abre `app/content.ts`.
3. Sustituye `image: null` por la ruta de la imagen:

   ```ts
   image: "/projects/nombre-del-proyecto.webp",
   ```

4. Cambia categoría, título, descripción, texto alternativo y etiquetas.
5. Para añadir otra ficha, duplica uno de los objetos de `projectExamples`.
6. Para ocultar una ficha incompleta, usa `visible: false`.

Formato de imagen recomendado: WebP horizontal 4:3 y menos de 300 KB.

## Contacto y horarios

- Los textos visibles están en `app/content.ts`.
- Los enlaces de teléfono, email y WhatsApp están al principio de
  `app/page.tsx`.

## Colores y estilo

Las variables principales están al inicio de `app/globals.css`:

- `--ink`: verde bosque.
- `--paper`: fondo papel natural.
- `--lime`: verde claro.
- `--clay`: acento terracota.

## Desarrollo local

```bash
npm install
npm run dev
```

Comprobación de producción:

```bash
npm run typecheck
npm run build
```

Vercel detecta el proyecto Next.js y despliega automáticamente los cambios
publicados en la rama configurada.
