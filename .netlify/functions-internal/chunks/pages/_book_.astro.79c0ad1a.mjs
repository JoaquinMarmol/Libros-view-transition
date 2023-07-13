/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro.971c5fa6.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.48ac3313.mjs';

const books = [
  {
    id: 'clean-code',
    title: 'Codigo Limpio: Manual de desarrollo ágil de software',
    img: 'https://images.cdn1.buscalibre.com/fit-in/360x360/87/da/87da3d378f0336fd04014c4ea153d064.jpg',
    opinion: 'Un clásico entre los clásicos del mundo de la programación. Aunque en pleno 2023, tengo una opinión un poco polémica. No me parece un libro que recomendaría a todo el mundo, especialmente a aquellas personas que están aprendiendo. Además, tiene un tono muy dogmático y existe gente que se lo toma, peligrosamente, como la biblia del desarrollo. Pero si eres capaz de leerlo tomando perspectiva, hay cosas interesantes que todavía están vigentes. Ojo que todos los ejemplos de código están basados en Java y mucha programación orientada a objetos.',
    author: 'Robert C. Martin',
  },
  {
    id: 'atomic-habits',
    title: 'Habitos Atomicos',
    img: 'https://i0.wp.com/ydelasbuenas.com/wp-content/uploads/2023/05/Habitos-atomicos-James-Clear-edited.png?resize=750%2C1000&ssl=1',
    opinion: 'Atomic Habits es un libro increíble que ofrece valiosas estrategias para construir hábitos positivos y eliminar los negativos. James Clear presenta ideas prácticas respaldadas por investigaciones científicas, lo que lo convierte en una lectura esencial para aquellos que desean mejorar su vida y alcanzar el éxito personal.',
    author: 'James Clear',
  },
  {
    id: '5am-club',
    title: 'el club de las 5 AM',
    img: 'https://pre.tematika.com/media/catalog/Ilhsa/Imagenes/659837.jpg',
    opinion: 'The 5 AM Club es un libro inspirador que defiende despertar temprano y aprovechar las primeras horas del día para establecer una rutina de éxito. Robin Sharma nos presenta una historia cautivadora y comparte enseñanzas sobre productividad, liderazgo y bienestar personal. Si estás buscando motivación para maximizar tu potencial, este libro puede ser una gran opción.',
    author: 'Robin Sharma',
  },
  {
    id: 'el-sutil-arte',
    title: 'El sutil arte de que casi todo te importe una mierda',
    img: 'https://sbslibreria.vteximg.com.br/arquivos/ids/209939-1000-1000/9788491392286.jpg',
    opinion: 'El sutil arte de que casi todo te importe una mierda es un libro refrescante y directo que desafía las convenciones sociales y nos invita a repensar nuestras prioridades. Mark Manson nos ofrece una perspectiva única sobre el autoconocimiento, el enfoque en lo importante y la aceptación de la realidad. Si estás buscando una dosis de sabiduría práctica con un toque irreverente, este libro puede resultarte interesante.',
    author: 'Mark Manson',
  },
  {
    id: 'el-almanaque',
    title: 'El almanaque de Naval Ravikant',
    img: 'https://www.ivanrivasmd.com/wp02/wp-content/uploads/2020/10/naval.png',
    opinion: 'El almanaque de Naval Ravikant es una recopilación de sabias reflexiones y principios para una vida plena y significativa. A través de extractos de discursos y entrevistas, Eric Jorgenson nos brinda una visión profunda de los pensamientos y filosofía de vida del empresario y filósofo Naval Ravikant. Este libro es unainspiradora guía que te invita a cuestionar tus creencias y perspectivas, y a buscar la felicidad y el propósito en tu vida personal y profesional.',
    author: 'Eric Jorgenson',
  },
  {
    id: '100m-offers',
    title: '100M Offers',
    img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627034891i/58612786.jpg',
    opinion: '100M Offers es un libro poderoso que ofrece valiosas estrategias para el crecimiento empresarial y la generación de ingresos significativos. Alex Hormozi comparte su experiencia y conocimientos en el mundo empresarial, brindando ideas prácticas y consejos para llevar tu negocio al siguiente nivel. Si estás interesado en aprender sobre estrategias de ventas y escalabilidad empresarial, este libro puede ser una excelente elección.',
    author: 'Alex Hormozi',
  },
  {
    id: 'lean-startup',
    title: 'El método Lean Startup',
    img: 'https://media.s-bol.com/qoP4QEYvBzm2/7BWVzy/546x840.jpg',
    opinion: 'El método Lean Startup es una guía fundamental para emprendedores que desean lanzar productos exitosos y adaptarse rápidamente al mercado. Eric Ries presenta un enfoque innovador y práctico basado en el aprendizaje validado, la experimentación y la iteración constante. Si estás interesado en el mundo del emprendimiento y quieres evitar desperdiciar recursos en ideas que no funcionan, este libro te brindará las herramientas necesarias.',
    author: 'Eric Ries',
  },
  {
    id: 'mastering-ethereum',
    title: 'Mastering Ethereum',
    img: 'https://m.media-amazon.com/images/I/81Zk8wOqtML._AC_UF1000,1000_QL80_.jpg',
    opinion: 'Mastering Ethereum es un recurso completo para aquellos interesados en comprender y aprovechar todo el potencial de la tecnología blockchain y Ethereum. Andreas M. Antonopoulos y Gavin Wood proporcionan información detallada sobre la plataforma Ethereum, contratos inteligentes, desarrollo de aplicaciones descentralizadas y más. Si deseas profundizar en el mundo de la criptomoneda y la cadena de bloques, este libro es una excelente opción.',
    author: 'Andreas M. Antonopoulos',
  },
  {
    id: 'en-cambio',
    title: 'En cambio',
    img: 'https://contentv2.tap-commerce.com/cover/large/9789877252385_1.jpg?id_com=1113',
    opinion: 'En cambio es un libro fascinante que explora la naturaleza del cambio y cómo abrazarlo en nuestras vidas. Sus páginas nos invitan a reflexionar sobre la resistencia al cambio y nos proporcionan herramientas prácticas para superarla. Con ejemplos inspiradores y consejos prácticos, este libro te ayudará a enfrentar los desafíos del cambio y encontrar oportunidades de crecimiento personal y profesional.',
    author: 'Nombre del autor',
  }
];

const $$Astro = createAstro();
const $$book = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$book;
  const { book } = Astro2.params;
  const info = books.find((b) => b.id === book);
  if (!info) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Libro ${info.title}` }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="m-auto max-w-4xl">
    <header class="relative">
      <a href="/" type="button" class="fixed left-2 top-2 text-white bg-black hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-black dark:hover:bg-blue-950 dark:focus:ring-blue-800">
        <svg class="w-4 h-4 rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path>
        </svg>
        <span class="sr-only">Icon description</span>
      </a>
    
      <h1 class="scale-50 font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
        Libros que
        <span class="block text-[36px] md:text-[58px]">recomiendo</span>
      </h1>
      
    </header>
    <div class="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-x-12 mt-4 md:mt-20 px-8">

      <div class="flex flex-col mb-10">
        <picture class="mb-8 w-full relative">
          <img class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(info.img, "src")}${addAttribute(`Portada del libro ${info.title}`, "alt")}${addAttribute(`view-transition-name: book-${info.id}`, "style")}>
        </picture>

        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">
          <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"></path>
          </svg>
          Comprar ahora
        </a>
      </div>

      <aside class="mt-10 md:mt-0">
        <h1 class="text-5xl font-black mb-4">${info.title}</h1>
        <p class="text-lg mb-4">${info.opinion}</p>
        <p><strong>Autor:</strong> <span class="font-semibold text-gray-800">${info.author}</span></p>
      </aside>
    </div>
    
  </main>
` })}`;
}, "C:/Users/usuario/Desktop/desktop/MisLibros/src/pages/[book].astro");

const $$file = "C:/Users/usuario/Desktop/desktop/MisLibros/src/pages/[book].astro";
const $$url = "/[book]";

const _book_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$book,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _book_ as _, books as b };
