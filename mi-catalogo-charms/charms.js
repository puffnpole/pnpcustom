/* =====================================================================
   charms.js  ·  AQUÍ ES DONDE TÚ EDITAS (no necesitas tocar index.html)
   ===================================================================== */

const BRAND   = "Puff & Pole";          // ← el nombre de tu empresa
const TAGLINE = "Charms de acero inoxidable. ";
const LINKS   = {pedido:"#", opiniones:"#", instagram:"#", tiktok:"#", correo:"#"}; // tus enlaces
const MONEDA  = "MXN";
const EXTRA_DORADO = 10;             // cuánto más cuesta cada charm si es DORADO (0 = igual)
const PRECIO_IMAGEN_PROPIA = 60;     // charm con la foto del cliente

// Fotos de la base (el charm liso de acero). Reemplázalas por las tuyas si quieres.
const BASE = {plateado:"charms/base-plateado.png", dorado:"charms/base-dorado.png"};

const SIZES = [["Chica",16,"14.2 - 15.2","5.60 - 6.00"],["Mediana",17,"15.2 - 16.2","6.00 - 6.38"],
               ["Grande",18,"16.2 - 17.1","6.38 - 6.73"],["XL",19,"17.1 - 18.1","6.73 - 7.12"],["XXL",20,"18.1 - 19.2","7.12 - 7.55"]];

/* ---------------------------------------------------------------------
   TUS CHARMS. Hay 3 formas de escribir uno:
   1) Solo el diseño (se pone sobre la base):  cara:"charms/mi-diseno.jpg"
   2) Foto completa del charm:                 foto:"charms/mi-charm.png"  (+ fotoDorado:"..." opcional)
   3) Charm liso, sin foto:                    (no pongas cara ni foto)

   No los escribas a mano: abre agregar-charm.html, sube tu foto y copia la línea ya hecha.
   Pégala aquí abajo, antes del último ];
   --------------------------------------------------------------------- */
const CHARMS = [
  {id:"liso", cat:"Lisos", name:"Liso (acero)", price:25},
  // ↓↓↓ PEGA AQUÍ TUS NUEVOS CHARMS ↓↓↓

];