# OceanoTech Innova

Sitio estático para [oceanotech.site](https://oceanotech.site/). Está construido
con HTML, CSS y JavaScript nativos: no requiere dependencias, compilación ni un
servidor especial para desplegarse en Cloudflare Pages.

## Contenido

~~~text
pagina web WEE/
├── index.html              Página y metadatos SEO
├── style.css               Sistema visual responsive
├── script.js               Enrutamiento hash y menú móvil
├── favicon.png             Icono principal del sitio
├── favicon.ico             Favicon compatible con navegadores
├── logo.png                Icono para Apple y datos estructurados
├── site.webmanifest        Metadatos para instalación y accesos directos
├── robots.txt              Indicaciones de rastreo
└── sitemap.xml             URL canónica para buscadores
~~~

El símbolo de marca se usa como favicon y no se muestra dentro de la interfaz.
La página utiliza un wordmark tipográfico para mantener la experiencia limpia y
legible.

## Rutas

Las rutas funcionan con hash; por eso Cloudflare Pages puede servir el sitio
sin reglas de redirección adicionales.

| Ruta | Uso |
| --- | --- |
| #/inicio | Presentación de OceanoTech Innova |
| #/plataforma | Funcionamiento y capacidades de la plataforma |
| #/investigacion | Biblioteca de investigación aplicada |
| #/contacto | Canales directos de contacto |
| #/legal | Privacidad; enlazada únicamente desde el pie |
| #/acceso | Ruta interna, sin enlaces de navegación |
| #/estado | Ruta interna, sin enlaces de navegación |

## Investigación

La biblioteca incluye la revisión de Martin Føre y colaboradores, publicada en
2024 en *Computers and Electronics in Agriculture*. La ficha ofrece enlaces a
la publicación en ScienceDirect, a la referencia de SINTEF y al DOI. Para sumar
una nueva referencia, actualiza el bloque research-record de index.html y
mantén siempre el título, autores, año, fuente y enlace original.

## SEO técnico

index.html incluye título, descripción, canonical, variantes de idioma, Open
Graph, Twitter Cards y datos estructurados JSON-LD para la organización, el sitio
y el software. Además, robots.txt apunta al sitemap.

Antes de producción, usa la inspección de URL de Google Search Console y
registra la propiedad https://oceanotech.site/. Es la forma de comprobar el
rastreo real del dominio.

## Despliegue en Cloudflare Pages

1. Sube el contenido de esta carpeta a un repositorio Git.
2. Crea un proyecto en Cloudflare Pages conectado al repositorio.
3. Selecciona el preset **None**. Deja vacío el comando de compilación y usa
   / como directorio de salida.
4. En **Custom domains**, conecta oceanotech.site.
5. Comprueba https://oceanotech.site/robots.txt y
   https://oceanotech.site/sitemap.xml tras el primer despliegue.

No uses un redireccionamiento global a index.html: las rutas del sitio usan hash
y ya resuelven en el navegador.
