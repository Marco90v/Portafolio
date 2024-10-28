/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DEzlIf-r.mjs';
import { $ as $$Layout } from '../chunks/Layout_pnKvg0xY.mjs';
import { $ as $$SectionProjects } from '../chunks/SectionProjects_DeD_ULfg.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects | Marco Velasquez Figarella" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionProjects", $$SectionProjects, { "all": "yes" })} ` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/pages/projects/index.astro", void 0);

const $$file = "/media/i320/Respaldo/Code/Portafolio/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
