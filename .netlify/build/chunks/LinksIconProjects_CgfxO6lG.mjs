import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_DEzlIf-r.mjs';
import { $ as $$Image } from './_astro_assets_PzJTsDmN.mjs';

const Github = new Proxy({"src":"/_astro/brand-github.DbgGAPiP.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/brand-github.svg";
							}
							
							return target[name];
						}
					});

const IconWeb = new Proxy({"src":"/_astro/world-www.HniU1gNw.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/world-www.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  const { src, alt, loading = "lazy" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 26, "height": 26, "loading": loading, "quality": 50, "format": "webp", "src": src, "alt": alt, "class": "rounded-full p-[0.1rem] transition-all duration-300 hover:bg-orange-500 hover:shadow-[0_0_0.25rem_0.25rem] hover:shadow-orange-500" })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/Icon.astro", void 0);

const $$Astro = createAstro();
const $$LinksIconProjects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinksIconProjects;
  const { links, loading = "lazy" } = Astro2.props;
  return renderTemplate`${links.map(({ alt, link, src }) => {
    if (link !== "") {
      return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(alt !== "Detail" ? "_blank" : "_parent", "target")} class="text-white hover:text-orange-400">${renderComponent($$result, "Icon", $$Icon, { "src": src, "alt": alt, "loading": loading })}</a>`;
    }
  })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/LinksIconProjects.astro", void 0);

export { $$Icon as $, Github as G, IconWeb as I, $$LinksIconProjects as a };
