/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, e as renderComponent, m as maybeRenderHead } from '../astro.971c5fa6.mjs';
import 'html-escaper';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<title>${title}</title>
		<meta name="twitter:card" content="summary_large_image">
		<meta name="twitter:site" content="@midudev">
		<meta name="view-transition" content="same-origin">
	${renderHead()}</head>
	<body>
		<div id="content">
			${renderSlot($$result, $$slots["default"])}
		</div>
		<footer class="p-7 text-center">
			2023 &copy; Joaquin Marmol 
		</footer>
	

</body></html>`;
}, "C:/Users/usuario/Desktop/desktop/MisLibros/src/layouts/Layout.astro");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404, no lo he encontrado" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<main class="max-w-4xl m-auto min-h-screen grid place-content-center text-center">
    <h1 class="text-4xl font-black mb-4">Oh, vaya. ¡Lo has roto!</h1>
    <img src="https://midu.dev/images/this-is-fine-404.gif">
  </main>
` })}`;
}, "C:/Users/usuario/Desktop/desktop/MisLibros/src/pages/404.astro");

const $$file = "C:/Users/usuario/Desktop/desktop/MisLibros/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
