/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderComponent } from '../astro.971c5fa6.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404.astro.48ac3313.mjs';
import { b as books } from './_book_.astro.79c0ad1a.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$3 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<h1 class="font-black uppercase text-6xl md:text-8xl text-center py-8 px-4" style="view-transition-name: book-title">
  Libros que
  <span class="block text-[36px] md:text-[58px]">recomiendo</span>
</h1>`;
}, "C:/Users/usuario/Desktop/desktop/MisLibros/src/components/Title.astro");

const $$Astro$2 = createAstro();
const $$BookItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BookItem;
  const {
    id,
    title,
    img
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="hover:scale-105 inline-block transition-all hover:contrast-125 hover:shadow-2xl"${addAttribute(`/${id}`, "href")}>
  <img${addAttribute(`Portada del libro ${title}`, "alt")} class="aspect-[389/500] h-full object-cover w-full max-w-full rounded"${addAttribute(img, "src")}${addAttribute(`view-transition-name: book-${id}`, "style")}>
</a>`;
}, "C:/Users/usuario/Desktop/desktop/MisLibros/src/components/BookItem.astro");

const $$Astro$1 = createAstro();
const $$ListOfBooks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListOfBooks;
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-2 md:grid-cols-3 gap-3 px-4">
  ${books.map(({ id, title, img }) => {
    return renderTemplate`<li>
          ${renderComponent($$result, "BookItem", $$BookItem, { "id": id, "title": title, "img": img })}
        </li>`;
  })}
</ul>`;
}, "C:/Users/usuario/Desktop/desktop/MisLibros/src/components/ListOfBooks.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Libros de Programaci\xF3n recomendados por @midudev" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="m-auto max-w-4xl">
		${renderComponent($$result2, "Title", $$Title, {})}

		${renderComponent($$result2, "ListOfBooks", $$ListOfBooks, {})}
		
	</main>
` })}`;
}, "C:/Users/usuario/Desktop/desktop/MisLibros/src/pages/index.astro");

const $$file = "C:/Users/usuario/Desktop/desktop/MisLibros/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
