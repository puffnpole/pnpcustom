/* =====================================================================
   charms.js  ·  AQUÍ ES DONDE TÚ EDITAS (no necesitas tocar index.html)
   ===================================================================== */

const BRAND   = "Puff & Pole";          // ← el nombre de tu empresa
const TAGLINE = "Charms de acero inoxidable. ";
const LINKS   = {pedido:"#", opiniones:"#", instagram:"#", tiktok:"#", correo:"#"}; // tus enlaces
const MONEDA  = "MXN";
const EXTRA_DORADO = 5;             // cuánto más cuesta cada charm si es DORADO (0 = igual)
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
  {id:"liso", cat:"Lisos", name:"Liso (acero)", price:35},
  // ↓↓↓ PEGA AQUÍ TUS NUEVOS CHARMS ↓↓↓
{id:"a-4", cat:"Artistas", name:"A-4", price:50, foto:"charms/a-4.png", fotoDorado:"charms/a-4D.png"},
  {id:"a-5", cat:"Artistas", name:"A-5", price:50, foto:"charms/a-5.png", fotoDorado:"charms/a-5D.png"},
  {id:"ch-4", cat:"Logo", name:"Ch-4", price:50, foto:"charms/ch-4.png", fotoDorado:"charms/ch-4D.png"},
 {id:"ch-11", cat:"Palomero", name:"Ch-11", price:50, foto:"charms/ch-11.png", fotoDorado:"charms/ch-11D.png"},
  {id:"ch-10", cat:"Palomero", name:"Ch-10", price:50, foto:"charms/ch-10.png", fotoDorado:"charms/ch-10D.png"},
  {id:"ch-9", cat:"Palomero", name:"Ch-9", price:50, foto:"charms/ch-9.png", fotoDorado:"charms/ch-9D.png"},
  {id:"ch-8", cat:"Logo", name:"Ch-8", price:50, foto:"charms/ch-8.png", fotoDorado:"charms/ch-8D.png"},
  {id:"ch-7", cat:"SpamShit", name:"Ch-7", price:50, foto:"charms/ch-7.png", fotoDorado:"charms/ch-7D.png"},
  {id:"ch-6", cat:"Logo", name:"Ch-6", price:50, foto:"charms/ch-6.png", fotoDorado:"charms/ch-6D.png"},
  {id:"ch-5", cat:"Logo", name:"Ch-5", price:50, foto:"charms/ch-5.png", fotoDorado:"charms/ch-5D.png"},
  {id:"a-6", cat:"Artistas", name:"A-6", price:50, foto:"charms/a-6.png", fotoDorado:"charms/a-6D.png"},
  {id:"ch-1", cat:"SpamShit", name:"Ch-1", price:50, foto:"charms/ch-1.png", fotoDorado:"charms/ch-1D.png"},
  {id:"a-9", cat:"Artistas", name:"A-9", price:50, foto:"charms/a-9.png", fotoDorado:"charms/a-9D.png"},
  {id:"ch-3", cat:"SpamShit", name:"Ch-3", price:50, foto:"charms/ch-3.png", fotoDorado:"charms/ch-3D.png"},
  {id:"ch-2", cat:"SpamShit", name:"Ch-2", price:50, foto:"charms/ch-2.png", fotoDorado:"charms/ch-2D.png"},
  {id:"a-8", cat:"Artistas", name:"A-8", price:50, foto:"charms/a-8.png", fotoDorado:"charms/a-8D.png"},
  {id:"a-7", cat:"Artistas", name:"A-7", price:50, foto:"charms/a-7.png", fotoDorado:"charms/a-7D.png"},
  {id:"a-3", cat:"Artistas", name:"A-3", price:50, foto:"charms/a-3.png", fotoDorado:"charms/a-3D.png"},
  {id:"a-2", cat:"Artistas", name:"A-2", price:50, foto:"charms/a-2.png", fotoDorado:"charms/a-2D.png"},
  {id:"a-1d", cat:"Artistas", name:"A-1D", price:50, foto:"charms/a-1.png", fotoDorado:"charms/a-1D.png"},
  {id:"pinkiki", cat:"Texturas", name:"pinkiki", price:50, foto:"charms/pinkiki.png", fotoDorado:"charms/pinkikiD.png"},
  {id:"leopard", cat:"Texturas", name:"leopard", price:50, foto:"charms/leopard.png", fotoDorado:"charms/leopardD.png"},
  {id:"lace", cat:"Texturas", name:"lace", price:50, foto:"charms/lace.png", fotoDorado:"charms/laceD.png"},
  {id:"espi", cat:"Texturas", name:"espi", price:50, foto:"charms/espi.png", fotoDorado:"charms/espiD.png"},
  {id:"zebra", cat:"Texturas", name:"Zebra", price:50, foto:"charms/zebra.png", fotoDorado:"charms/zebraD.png"},
  {id:"swagmili", cat:"Texturas", name:"swagmili", price:50, foto:"charms/swagmili.png", fotoDorado:"charms/swagmiliD.png"},
  {id:"greenpink", cat:"Texturas", name:"greenpink", price:50, foto:"charms/greenpink.png", fotoDorado:"charms/greenpinkD.png"},
  {id:"disco", cat:"Texturas", name:"Disco", price:50, foto:"charms/disco.png", fotoDorado:"charms/discoD.png"},
];