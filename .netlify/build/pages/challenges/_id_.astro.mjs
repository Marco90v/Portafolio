/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../../chunks/astro/server_DEzlIf-r.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CphKNEXU.mjs';
import { d as data } from '../../chunks/challenge_DO3POy4B.mjs';
import { $ as $$DetailProject } from '../../chunks/DetailProject_Cpce2baW.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const project = data.find((_, index) => index === Number(id));
  if (!project) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project?.title} | Marco Velasquez Figarella` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DetailProject", $$DetailProject, { "project": project, "id": "challenge" })} ` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/pages/challenges/[id].astro", void 0);

const $$file = "/media/i320/Respaldo/Code/Portafolio/src/pages/challenges/[id].astro";
const $$url = "/challenges/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
