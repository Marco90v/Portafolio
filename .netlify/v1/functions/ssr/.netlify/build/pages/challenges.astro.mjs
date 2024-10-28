/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DEzlIf-r.mjs';
import { $ as $$Layout } from '../chunks/Layout_DbdnWanK.mjs';
import { $ as $$SectionChallenges } from '../chunks/SectionChallenges_BUx6lWs5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Challenge | Marco Velasquez Figarella" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionChellenges", $$SectionChallenges, { "all": "yes" })} ` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/pages/challenges/index.astro", void 0);

const $$file = "/media/i320/Respaldo/Code/Portafolio/src/pages/challenges/index.astro";
const $$url = "/challenges";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
