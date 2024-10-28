import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, b as createAstro } from './astro/server_DEzlIf-r.mjs';
import { $ as $$TitleSection, b as $$ContentCardLayout, c as $$ProjectCard, d as $$ViewMore, a as $$ContentLayout } from './ViewMore_cRXxeL6w.mjs';
import { d as data } from './projects_DSVKMc7d.mjs';

const $$ContentTitleLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute top-[-0.8rem] left-0 w-full text-center text-white text-sm font-bold"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/layouts/ContentTitleLayout.astro", void 0);

const $$Astro = createAstro();
const $$SectionProjects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionProjects;
  const { all = "no" } = Astro2.props;
  const newData = all === "no" ? data.slice(0, 6) : data;
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "id": "projects" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitleLayout", $$ContentTitleLayout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Projects", "colorTitle": "text-green-700" })} ` })} ${renderComponent($$result2, "ContentCardLayout", $$ContentCardLayout, {}, { "default": ($$result3) => renderTemplate`${newData.map((project, index) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "project": project, "id": index, "path": "projects" })}`)}` })} ${all === "no" && renderTemplate`${renderComponent($$result2, "ViewMore", $$ViewMore, { "href": "/projects" })}`}` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/SectionProjects.astro", void 0);

export { $$SectionProjects as $, $$ContentTitleLayout as a };
