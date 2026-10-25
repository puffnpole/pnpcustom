/* =====================================================================
   charms.js  ·  AQUÍ ES DONDE TÚ EDITAS (no necesitas tocar index.html)
   ===================================================================== */

const BRAND   = "Puff & Pole";          // ← el nombre de tu empresa
const TAGLINE = "Charms de acero inoxidable. ";
const LINKS   = {pedido:"#", opiniones:"#", instagram:"#", tiktok:"#", correo:"#"}; // tus enlaces
const MONEDA  = "MXN";
const EXTRA_DORADO = 5;             // cuánto más cuesta cada charm si es DORADO (0 = igual)
const PRECIO_IMAGEN_PROPIA = 75;     // charm con la foto del cliente

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
  {id:"liso", cat:"Lisos", name:"Liso (acero)", price:50},
  // ↓↓↓ PEGA AQUÍ TUS NUEVOS CHARMS ↓↓↓
{id:"a-4", cat:"Artistas", name:"A-4", price:70, foto:"charms/A-4.png", fotoDorado:"charms/A-4D.png"},
  {id:"a-5", cat:"Artistas", name:"A-5", price:70, foto:"charms/A-5.png", fotoDorado:"charms/A-5D.png"},
  {id:"ch-4", cat:"Logo", name:"Ch-4", price:70, foto:"charms/ch-4.png", fotoDorado:"charms/ch-4D.png"},
  {id:"ch-10", cat:"Palomero", name:"Ch-10", price:70, foto:"charms/ch-10.png", fotoDorado:"charms/ch-10D.png"},
  {id:"ch-9", cat:"Palomero", name:"Ch-9", price:70, foto:"charms/ch-9.png", fotoDorado:"charms/ch-9D.png"},
  {id:"ch-8", cat:"Logo", name:"Ch-8", price:70, foto:"charms/ch-8.png", fotoDorado:"charms/ch-8D.png"},
  {id:"ch-7", cat:"SpamShit", name:"Ch-7", price:70, foto:"charms/ch-7.png", fotoDorado:"charms/ch-7D.png"},
  {id:"ch-6", cat:"Logo", name:"Ch-6", price:70, foto:"charms/ch-6.png", fotoDorado:"charms/ch-6D.png"},
  {id:"ch-5", cat:"Logo", name:"Ch-5", price:70, foto:"charms/ch-5.png", fotoDorado:"charms/ch-5D.png"},
  {id:"a-6", cat:"Artistas", name:"A-6", price:70, foto:"charms/A-6.png", fotoDorado:"charms/A-6D.png"},
  {id:"ch-1", cat:"SpamShit", name:"Ch-1", price:70, foto:"charms/ch-1.png", fotoDorado:"charms/ch-1D.png"},
  {id:"a-9", cat:"Artistas", name:"A-9", price:70, foto:"charms/A-9.png", fotoDorado:"charms/A-9D.png"},
  {id:"ch-3", cat:"SpamShit", name:"Ch-3", price:70, foto:"charms/ch-3.png", fotoDorado:"charms/ch-3D.png"},
  {id:"ch-2", cat:"SpamShit", name:"Ch-2", price:70, foto:"charms/ch-2.png", fotoDorado:"charms/ch-2D.png"},
  {id:"a-8", cat:"Artistas", name:"A-8", price:70, foto:"charms/A-8.png", fotoDorado:"charms/A-8D.png"},
  {id:"a-7", cat:"Artistas", name:"A-7", price:70, foto:"charms/A-7.png", fotoDorado:"charms/A-7D.png"},
  {id:"a-3", cat:"Artistas", name:"A-3", price:70, foto:"charms/A-3.png", fotoDorado:"charms/A-3D.png"},
  {id:"a-2", cat:"Artistas", name:"A-2", price:70, foto:"charms/A-2.png", fotoDorado:"charms/A-2D.png"},
  {id:"pinkiki", cat:"Texturas", name:"pinkiki", price:70, foto:"charms/pinkiki.png", fotoDorado:"charms/pinkikiD.png"},
  {id:"leopard", cat:"Texturas", name:"leopard", price:70, foto:"charms/leopard.png", fotoDorado:"charms/leopardD.png"},
  {id:"espi", cat:"Texturas", name:"espi", price:70, foto:"charms/espi.png", fotoDorado:"charms/espiD.png"},
  {id:"swagmili", cat:"Texturas", name:"swagmili", price:70, foto:"charms/swagmili.png", fotoDorado:"charms/swagmiliD.png"},
  {id:"greenpink", cat:"Texturas", name:"greenpink", price:70, foto:"charms/greenpink.png", fotoDorado:"charms/greenpinkD.png"},
];
