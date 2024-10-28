import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent, f as renderHead, e as renderSlot } from './astro/server_DEzlIf-r.mjs';
/* empty css                        */
import { $ as $$Image } from './_astro_assets_PzJTsDmN.mjs';

const $$Astro$2 = createAstro();
const $$A = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$A;
  const raiz = Astro2.url.hostname;
  const port = Astro2.url.port === "80" ? "" : ":" + Astro2.url.port;
  const { section, classExtra } = Astro2.props;
  return renderTemplate`<!-- before:bg-orange-500 -->${maybeRenderHead()}<a${addAttribute(`transition ease-in-out duration-300 text-center relative block h-8 md:h-20 px-4 border-b-2 border-transparent 
  before:content-[""] before:w-16 before:h-16 before:absolute before:left-2/4 before:top-2/4 before:-translate-x-2/4 before:-translate-y-2/4 hover:before:shadow-[0_0_1rem_1rem] before:rounded-full before:transition-all before:duration-300 before:-z-10
  ${classExtra}`, "class")}${addAttribute(`http://${raiz}${port}/#${section.toLowerCase()}`, "href")}> ${section} </a>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/A.astro", void 0);

const arrow = new Proxy({"src":"/_astro/caret-up.DXnIGCAM.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/caret-up.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const sections = ["Home", "Experience", "Projects", "Challenges", "Contact"];
  const colors = ["red", "blue", "green", "yellow", "purple"];
  const { color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`border-b-2 border-gray-800 border-solid bg-gradient-to-r from-zinc-950 from-40% via-${color}-950 via-70% to-zinc-900 to-95% shadow-[0_0_1rem_1rem_rgb(0,0,0,50%)] fixed w-full z-10`, "class")}> <nav> <div class="md:hidden"> ${renderComponent($$result, "Image", $$Image, { "id": "btnMenu", "width": "32", "height": "32", "loading": "eager", "quality": 50, "src": arrow, "alt": "Menu", "class": "rotate-180 w-8 h-8 cursor-pointer m-auto border border-orange-500 rounded-full mt-4 transition-transform duration-300" })} </div> <ul class="flex flex-col mt-4 md:mt-0 md:flex-row justify-center content-center text-lg md:text-2xl font-bold h-[0px] md:h-auto overflow-hidden transition-all duration-300"> ${sections.map((section, index) => {
    return renderTemplate`<li class="leading-8 md:leading-[5rem]"> ${renderComponent($$result, "A", $$A, { "section": section, "classExtra": `hover:border-${colors[index]}-900 hover:before:bg-${colors[index]}-900/20 hover:before:shadow-${colors[index]}-900/20` })} </li>`;
  })} </ul></nav> </header> `;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const title = Astro2.props.title;
  const { id } = Astro2.params;
  const colors = ["blue", "cyan", "indigo"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex"><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"><!-- <ViewTransitions /> -->${renderHead()}</head> <body${addAttribute(`text-base text-white bg-gradient-to-r from-gray-900 from-40% via-${color}-950 via-70% to-gray-900 to-95% min-h-screen`, "class")}> ${!id && renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "color": color })}`} <main class="flex flex-col min-h-screen pb-14"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
