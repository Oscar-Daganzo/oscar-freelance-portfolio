# Oscar Daganzo — Diseño técnico sostenible

Web profesional bilingüe (castellano/catalán) para servicios de diseño técnico
modular, documentación de fabricación y preparación de archivos DWG/DXF.

## Editar textos

La información editable está centralizada en `app/content.ts`, bajo el
comentario `ZONA EDITABLE — TEXTOS GENERALES`.

Los textos en castellano están dentro de `es` y los de catalán dentro de `ca`.

La web está planteada como página de servicios, sin portfolio ni proyectos de
muestra. La sección `deliverables` explica qué documentación puede recibir el
cliente según el alcance acordado.

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

## Imágenes de identidad

Los recursos visuales eco-friendly están en `public/media`:

- `earth-cycle.gif`: animación de portada.
- `earth-cycle-still.webp`: alternativa estática para usuarios que reducen el movimiento.
- `salvamos-arboles.webp`: manifiesto visual entre la introducción y los servicios.

Los textos alternativos y los pies visibles se editan en el bloque `visuals` de
`app/content.ts`, tanto en castellano como en catalán.

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
