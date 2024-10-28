import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from './astro/server_DEzlIf-r.mjs';
import { $ as $$TitleSection, b as $$ContentCardLayout, c as $$ProjectCard, d as $$ViewMore, a as $$ContentLayout } from './ViewMore_cRXxeL6w.mjs';
import { d as data } from './challenge_DO3POy4B.mjs';

const $$Astro = createAstro();
const $$SectionChallenges = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionChallenges;
  const { all = "no" } = Astro2.props;
  const newData = all === "no" ? data.slice(0, 6) : data;
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "id": "challenges" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute top-[-0.8rem] left-0 w-full text-center text-white text-sm font-bold"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": "Challenge", "colorTitle": "text-orange-700" })} </div> ${renderComponent($$result2, "ContentCardLayout", $$ContentCardLayout, {}, { "default": ($$result3) => renderTemplate`${newData.map((project, index) => renderTemplate`${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "project": project, "id": index, "path": "challenges" })}`)}` })} ${all === "no" && renderTemplate`${renderComponent($$result2, "ViewMore", $$ViewMore, { "href": "/challenges" })}`}` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/SectionChallenges.astro", void 0);

export { $$SectionChallenges as $ };
