# Poynting — La energía no viaja dentro del cable / Energy does not travel inside the wire

Web app educativa bilingüe (EN/ES) sobre el descubrimiento de **John Henry Poynting**:
*On the Transfer of Energy in the Electromagnetic Field* (Philosophical Transactions
of the Royal Society, 175, 343–361; recibido el 17-dic-1883, leído el 10-ene-1884).

**La idea central:** la energía eléctrica no viaja dentro del metal con los electrones;
viaja en el campo electromagnético que rodea a los cables, según el vector de Poynting
**S = E × H**. Los cables guían el campo; la carga recibe la energía desde el campo.

## Contenido

- Laboratorio animado CC/CA con capas conmutables: electrones, campo **E**, campo **B** y flujo **S**
  (en CA, E y B se invierten a la vez y S mantiene el sentido fuente → carga).
- La prueba de Poynting en un hilo recto: S entra radialmente y explica el calor Joule.
- Onda electromagnética animada (E, B, S) y regla de la mano derecha.
- Reseña biográfica de Poynting con fotografía (dominio público, Wikimedia Commons).
- El texto original de 1884 casi íntegro (dominio público) en un **visor anotable**:
  subrayado en amarillo seleccionando el texto, boli rojo de trazo libre, notas de
  texto arrastrables en rojo, borrado selectivo, deshacer, tamaño de letra ajustable,
  barra de progreso de lectura e índice por secciones. Las anotaciones se guardan en
  el navegador (localStorage) y el documento anotado se puede **descargar en HTML**
  autónomo o **imprimir/guardar como PDF**, con subrayados, trazos y notas integrados.
  Enlaces al texto completo en Wikisource y a la ficha de la Royal Society.
- Teoría (teorema de Poynting), práctica (el cordón de la lámpara, pérdidas, diseño de líneas,
  P = V·I), mitos y realidades, y un cuestionario interactivo de 5 preguntas.

## Tecnología

Vite + React + TypeScript, responsive, PWA (instalable, funciona sin conexión tras la
primera visita), sin backend. Código de colores constante en toda la web:
E = rosa, B = azul, S = dorado.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

## Fuentes

- Poynting, J. H. (1884). *Phil. Trans. R. Soc. Lond.* 175, 343–361. doi:10.1098/rstl.1884.0016
- Texto completo: Wikisource, *On the Transfer of Energy in the Electromagnetic Field*
- Fotografía: Wikimedia Commons, *File: John Henry Poynting.jpg* (dominio público)
