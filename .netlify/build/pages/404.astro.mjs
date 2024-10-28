/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DEzlIf-r.mjs';
import { $ as $$Layout } from '../chunks/Layout_pnKvg0xY.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page not found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center h-screen"> <h1 class="text-white text-4xl font-bold">404</h1> <p class="text-white text-xl">Page not found</p> <a href="/" class="text-white hover:text-orange-500">Go back home</a> </div> ` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/pages/404.astro", void 0);

const $$file = "/media/i320/Respaldo/Code/Portafolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
