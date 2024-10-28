import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from './astro/server_DEzlIf-r.mjs';
import { $ as $$Image } from './_astro_assets_D5AlKkcn.mjs';
import { G as Github, I as IconWeb, $ as $$Icon, a as $$LinksIconProjects } from './LinksIconProjects_CHGT-7iQ.mjs';

const IconBack = new Proxy({"src":"/_astro/arrow-back-up.B1AixoSG.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/arrow-back-up.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$DetailProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DetailProject;
  const { project, id } = Astro2.props;
  const link = [
    { alt: "Code", link: project.linkGithub, src: Github },
    { alt: "Live", link: project.linkLive, src: IconWeb }
  ];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="relative bg-zinc-900 border border-zinc-700 w-10/12 max-w-[1250px] m-auto p-10 rounded-lg grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4"> <a href="/" class="absolute top-2 left-4 text-center text-white text-sm font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "src": IconBack, "alt": "Back" })} </a> <article> ${renderComponent($$result, "Image", $$Image, { "width": 448, "height": 218, "quality": 50, "loading": "eager", "src": project.img, "alt": project.title, "class": "rounded-lg border border-zinc-700 border-solid" })} <p class="text-gray-400 text-base my-2"><strong class="text-orange-500">Skills:</strong> ${project?.skills}</p> <div class="flex flex-row justify-center gap-x-4"> ${renderComponent($$result, "LinksIconProjects", $$LinksIconProjects, { "links": link })} </div> </article> <div class="flex flex-col lg:col-span-2"> <div class="bg-zinc-800 border border-solid border-zinc-700 rounded-md p-2 text-white mb-2"> <h1 class="text-orange-500 text-2xl font-bold">${project?.title}</h1> <h2 class="text-slate-400 text-base">${project?.description}</h2> </div> <p class="text-gray-400 text-base"><strong class="text-orange-500">Author:</strong> ${project?.author}</p> <p class="text-gray-400 text-base"><strong class="text-orange-500">Client:</strong> ${project?.client}</p> <p class="text-white text-base mt-4"><strong class="text-orange-500">Details:</strong> ${project?.details}</p> </div> </section>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/DetailProject.astro", void 0);

export { $$DetailProject as $ };
