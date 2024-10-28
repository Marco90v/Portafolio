import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, d as addAttribute, b as createAstro, a as renderComponent } from './astro/server_DEzlIf-r.mjs';
import { G as Github, I as IconWeb, a as $$LinksIconProjects } from './LinksIconProjects_C-3XH2iI.mjs';
import { $ as $$Image } from './_astro_assets__uYuLBJr.mjs';

const $$ContentCardLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="projects-grid"> <ul class="grid grid-cols-[repeat(auto-fit,minmax(5rem,28rem))] justify-items-center content-center justify-center gap-12 mt-4"> ${renderSlot($$result, $$slots["default"])} </ul> </div>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/layouts/ContentCardLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContentLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  const { id, class: c = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`relative w-11/12 md:w-10/12 m-auto mt-28 bg-zinc-900/50 p-5 md:p-10 rounded-lg border border-zinc-700 border-solid ${c}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/layouts/ContentLayout.astro", void 0);

const $$Astro$2 = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TitleSection;
  const { title, colorTitle = "text-orange-500" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(`border border-zinc-700 border-solid inline text-center py-1 px-6 rounded-full bg-zinc-900 text-2xl ${colorTitle}`, "class")}>${title}</h3>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/TitleSection.astro", void 0);

const IconDetail = new Proxy({"src":"/_astro/file-description.DFwjpUQ7.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/file-description.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project, id, path } = Astro2.props;
  const link = [
    { alt: "Code", link: project.linkGithub, src: Github },
    { alt: "Live", link: project.linkLive, src: IconWeb },
    { alt: "Detail", link: `${path}/${id}`, src: IconDetail }
  ];
  const pathName = Astro2.url.pathname;
  let loadingProject = "lazy";
  let loadingIcon = "lazy";
  if (pathName.includes("projects")) {
    if (id < 9) loadingProject = "eager";
    if (id < 6) loadingIcon = "eager";
  } else if (pathName.includes("challenges")) {
    if (id < 6) loadingProject = "eager";
    if (id < 3) loadingIcon = "eager";
  }
  return renderTemplate`${maybeRenderHead()}<li class=""> ${renderComponent($$result, "Image", $$Image, { "width": 448, "height": 218, "loading": loadingProject, "quality": 50, "format": "webp", "src": project.img, "alt": project.title, "class": "rounded-lg border border-zinc-700 border-solid aspect-[16/8] object-cover" })} <div class="p-1 text-base text-gray-400 mt-1 bg-zinc-800 border border-solid border-zinc-700 rounded-md"> <p class="text-white block text-center font-bold mb-1">${project.title}</p> <div class="flex flex-row justify-center gap-x-4"> ${renderComponent($$result, "LinksIconProjects", $$LinksIconProjects, { "links": link, "loading": loadingIcon })} </div> </div> </li>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro();
const $$ViewMore = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewMore;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center mt-6"> <a${addAttribute(href, "href")} class="mx-auto transition-colors duration-300 text-center bg-green-800 hover:bg-green-600 text-white rounded-full px-8 py-2 font-bold">View more</a> </div>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/ViewMore.astro", void 0);

export { $$TitleSection as $, $$ContentLayout as a, $$ContentCardLayout as b, $$ProjectCard as c, $$ViewMore as d };
