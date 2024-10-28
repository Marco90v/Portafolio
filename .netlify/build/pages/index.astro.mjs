/* empty css                                */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute, b as createAstro, e as renderSlot } from '../chunks/astro/server_DEzlIf-r.mjs';
import { $ as $$Image } from '../chunks/_astro_assets__uYuLBJr.mjs';
import { a as $$ContentTitleLayout, $ as $$SectionProjects } from '../chunks/SectionProjects_DV9GYj7X.mjs';
import { $ as $$TitleSection, a as $$ContentLayout } from '../chunks/ViewMore_cRXxeL6w.mjs';
import { $ as $$Icon, G as Github } from '../chunks/LinksIconProjects_C-3XH2iI.mjs';
import { $ as $$SectionChallenges } from '../chunks/SectionChallenges_BUx6lWs5.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { $ as $$Layout } from '../chunks/Layout_DbdnWanK.mjs';
export { renderers } from '../renderers.mjs';

const Profile = new Proxy({"src":"/_astro/profile2.DQNFT0SW.png","width":460,"height":460,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/img/profile2.png";
							}
							
							return target[name];
						}
					});

const Linkedin = new Proxy({"src":"/_astro/brand-linkedin.Cu60MLnJ.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/brand-linkedin.svg";
							}
							
							return target[name];
						}
					});

const PDF = new Proxy({"src":"/_astro/file-type-pdf.BH-8Og48.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/file-type-pdf.svg";
							}
							
							return target[name];
						}
					});

const FM = new Proxy({"src":"/_astro/frontend-mentor.63LMKm0K.svg","width":1961,"height":2500,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/frontend-mentor.svg";
							}
							
							return target[name];
						}
					});

const CW = new Proxy({"src":"/_astro/code-wars.BMZ8clNj.svg","width":660,"height":660,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/code-wars.svg";
							}
							
							return target[name];
						}
					});

const $$SectionHome = createComponent(($$result, $$props, $$slots) => {
  const link = [
    { alt: "Github", src: Github, link: "https://github.com/Marco90v" },
    { alt: "Linkedin", src: Linkedin, link: "https://www.linkedin.com/in/marco90v/" },
    { alt: "PDF", src: PDF, link: "https://flowcv.com/resume/6gnga9oa1r" },
    { alt: "FM", src: FM, link: "https://www.frontendmentor.io/profile/marco90v" },
    { alt: "CW", src: CW, link: "https://www.codewars.com/users/mvf90" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="min-h-screen flex"> ${renderComponent($$result, "ContentLayout", $$ContentLayout, { "id": "home", "class": "max-w-[1000px] md:mt-auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitleLayout", $$ContentTitleLayout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Profile", "colorTitle": "text-red-700" })} ` })} <h1 class="text-center text-white text-4xl font-bold">Marco Velasquez Figarella</h1> <div id="contentProfile" class="grid  md:grid-cols-3 gap-4 mt-4"> <h2 class="md:col-span-2 text-orange-500 text-2xl font-bold">Frontend Developer</h2> <p class="md:col-span-2 text-lg">
I am a Frontend Developer with more than 3 years of experience in creating efficient, intuitive and performance optimized web interfaces.
        My focus is to deliver quality user-centric solutions, ensuring a smooth, accessible and visually appealing experience.
        I work with technologies such as <span class="bg-zinc-700 text-orange-400 px-2 rounded">React, TypeScript, JavaScript and CSS</span>, along with tools such as <span class="bg-zinc-700 text-orange-400 px-2 rounded">Zustand, Tailwind CSS and Bootstrap.</span> </p> <p class="md:col-span-2 text-lg">
I have participated in a variety of projects, from administrative systems to landing pages and interactive applications, always prioritizing accessibility and cross-browser compatibility.
</p> <p class="md:col-span-2 text-lg">
With knowledge in backend like <span class="bg-zinc-700 text-orange-400 px-2 rounded">Node.js, Express and databases like MySQL and MongoDB</span>, I ensure a smooth integration between frontend and backend to create robust and scalable applications.
</p> ${renderComponent($$result2, "Image", $$Image, { "width": 313, "height": 313, "loading": "eager", "quality": 50, "format": "webp", "src": Profile, "alt": "Profile", "class": "w-full rounded-md row-start-1 max-w-60 sm:max-w-60 md:max-w-80 md:row-start-1 md:col-start-3 md:row-span-3 m-auto drop-shadow-[0_0_5px_rgba(227,227,227,0.2)] mask-gradient" })} <div id="links" class="md:col-start-3 md:row-start-4 text-center flex justify-center items-center gap-x-4"> ${link.map(({ alt, link: link2, src }) => renderTemplate`<a${addAttribute(link2, "href")}${addAttribute(alt !== "Detail" ? "_blank" : "_parent", "target")} rel="noopener noreferrer" class="text-white hover:text-orange-400"> ${renderComponent($$result2, "Icon", $$Icon, { "src": src, "alt": alt, "loading": "eager" })} </a>`)} </div> </div> ` })} </div>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/SectionHome.astro", void 0);

const $$Astro$5 = createAstro();
const $$TitleSubSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TitleSubSection;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-center text-white text-xl font-bold py-1 bg-white/5 rounded">${title}</h2>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/TitleSubSection.astro", void 0);

const $$Astro$4 = createAstro();
const $$ExperienceLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExperienceLayout;
  const { data, classes = "" } = Astro2.props;
  const { position, company, details, title, institution, years, color } = data;
  return renderTemplate`${maybeRenderHead()}<li${addAttribute(`border-l-2 border-${color}-600 pl-4 py-2 relative ${classes}
      before:content-[''] before:bg-${color}-600 before:rounded-full before:h-4 before:w-4 before:absolute before:-left-[0.55rem] before:top-[2.1rem]`, "class")}> <h3 class="text-lg font-bold text-white">${position || title}</h3> <span class="text-base text-slate-400 font-bold">${company || institution}</span> <span class="text-sm text-slate-500">${years}</span> ${details && renderTemplate`<p class="text-sm leading-4 my-2">${details}</p>`} <ul class="list-disc ml-4 mt-2"> ${renderSlot($$result, $$slots["default"])} </ul> </li>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/layouts/ExperienceLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$ExperienceCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExperienceCard;
  const { experience, classes = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ExperienceLayout", $$ExperienceLayout, { "data": experience, "classes": classes }, { "default": ($$result2) => renderTemplate`${experience.description.map((description) => renderTemplate`${maybeRenderHead()}<li class="text-sm text-gray-400">${description}</li>`)}` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/ExperienceCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$EducationCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EducationCard;
  const { education, classes = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "ExperienceLayout", $$ExperienceLayout, { "data": education, "classes": classes }, { "default": ($$result2) => renderTemplate`${education.description.map((description) => renderTemplate`${maybeRenderHead()}<li class="text-sm text-gray-500">${description}</li>`)}` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/EducationCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const { skill } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> ${renderComponent($$result, "Image", $$Image, { "width": 48, "height": 48, "loading": "lazy", "quality": 50, "format": "webp", "src": skill.img, "alt": skill.text, "class": "h-10 md:h-12 rounded-sm" })} </li>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/Badge.astro", void 0);

const skills = [
	{
		text: "javascript",
		img: "https://skillicons.dev/icons?i=javascript"
	},
	{
		text: "typescript",
		img: "https://skillicons.dev/icons?i=typescript"
	},
	{
		text: "react",
		img: "https://skillicons.dev/icons?i=react"
	},
	{
		text: "nextjs",
		img: "https://skillicons.dev/icons?i=nextjs"
	},
	{
		text: "astro",
		img: "https://skillicons.dev/icons?i=astro"
	},
	{
		text: "redux",
		img: "https://skillicons.dev/icons?i=redux"
	},
	{
		text: "Angular",
		img: "https://skillicons.dev/icons?i=angular"
	},
	{
		text: "bootstrap",
		img: "https://skillicons.dev/icons?i=bootstrap"
	},
	{
		text: "tailwindcss",
		img: "https://skillicons.dev/icons?i=tailwind"
	},
	{
		text: "css",
		img: "https://skillicons.dev/icons?i=css"
	},
	{
		text: "nodejs",
		img: "https://skillicons.dev/icons?i=nodejs"
	},
	{
		text: "expressjs",
		img: "https://skillicons.dev/icons?i=expressjs"
	},
	{
		text: "mongodb",
		img: "https://skillicons.dev/icons?i=mongodb"
	},
	{
		text: "mysql",
		img: "https://skillicons.dev/icons?i=mysql"
	},
	{
		text: "graphql",
		img: "https://skillicons.dev/icons?i=graphql"
	},
	{
		text: "git",
		img: "https://skillicons.dev/icons?i=git"
	},
	{
		text: "github",
		img: "https://skillicons.dev/icons?i=github"
	},
	{
		text: "figma",
		img: "https://skillicons.dev/icons?i=figma"
	},
	{
		text: "php",
		img: "https://skillicons.dev/icons?i=php"
	},
	{
		text: "python",
		img: "https://skillicons.dev/icons?i=python"
	},
	{
		text: "electronjs",
		img: "https://skillicons.dev/icons?i=electron"
	},
	{
		text: "firebase",
		img: "https://skillicons.dev/icons?i=firebase"
	},
	{
		text: "supabase",
		img: "https://skillicons.dev/icons?i=supabase"
	},
	{
		text: "vscode",
		img: "https://skillicons.dev/icons?i=vscode"
	},
	{
		text: "windows",
		img: "https://skillicons.dev/icons?i=windows"
	},
	{
		text: "linux",
		img: "https://skillicons.dev/icons?i=linux"
	}
];

const experience = [
	{
		position: "Freelancer",
		company: "Remotasks",
		years: "Mar 2020 - Present",
		details: "Various Projects",
		description: [
			"Image annotation to train artificial intelligence models.",
			"Relevant information labeling, image classification, attribute definition.",
			"Data quality assurance, for the achievement of an accurate model."
		],
		color: "green"
	},
	{
		position: "Computer support technician",
		company: "Space Studio Perú",
		years: "Feb 2019 - Dec 2019",
		details: "Application development, web maintenance and equipment management, Collaboration for the acquisition of technological supplements.",
		description: [
			"Developed websites and blogs for a new startup, using WordPress, PHP, CSS, HTML, JavaScript and plugins.",
			"Designed and developed web survey system with Angular, PHP, MySQL, Bootstrap.",
			"I designed an image creation application from a form and biometric reader, made in C#.",
			"Optimized and extended the organization's website using plugins, JavaScript and CSS."
		],
		color: "blue"
	},
	{
		position: "Computer support assistant",
		company: "Saxon Energy Services de Venezuela, C.A",
		years: "May 2014 – Aug 2014",
		details: "Computer support assistant, requirements assistance.",
		description: [
			"Development of script to extract data from documents and perform calculations on the data obtained.",
			"Installation and optimization of computer equipment both in office and oil fields.",
			"Management of servers with Active Directory and physical access system."
		],
		color: "pink"
	},
	{
		position: "Technical assistant",
		company: "Vivolca",
		years: "Mar 2013 – Aug 2013",
		details: "Computer support assistant, requirements assistance.",
		description: [
			"Management and optimization of SAP Business One administrative software.",
			"Optimization and repair of the organization's internal network.",
			"Backup of main servers and workstations."
		],
		color: "purple"
	},
	{
		position: "Developer",
		company: "Universidad de Oriente",
		years: "Apr 2011 – Jun 2011",
		details: "Programmer and IT assistant",
		description: [
			"Optimization of the university website in HTML, CSS, JavaScript and PHP.",
			"Management of requests in Oracle databases.",
			"Enrollment and administrative system solutions."
		],
		color: "yellow"
	}
];

const otherExperience = [
	{
		position: "Sales and customer service",
		company: "Inversiones E&P",
		years: "Sep 2015 – Jun 2017",
		details: "Sale of communication equipment and related accessories",
		description: [
			"Maintenance of computer equipment and networks.",
			"Script development for sales management.",
			"Product invoicing.",
			"Optimization of the environment for higher productivity."
		],
		color: "red"
	},
	{
		position: "Head of Services",
		company: "ESIS, C.A",
		years: "Oct 2013 – May 2014",
		details: "Management and monitoring of electronic security equipment",
		description: [
			"Script development for management of daily activities.",
			"Operations center management and coordination with field personnel.",
			"Coordination of the installation of electronic equipment in operational fields."
		],
		color: "orange"
	}
];

const education = [
	{
		title: "Senior computer technician, specializing in programming",
		institution: "Instituto Universitario de Tecnología Industrial Rodolfo Loero Arismendi (IUTIRLA)",
		years: "Feb 2007 – Feb 2010",
		description: [
			"Training in software development, with focus on C/C++, C#, Visual Basic, and database management.",
			"Thesis: Automated system for the administration of computer equipment in the police department."
		],
		color: "green"
	},
	{
		title: "Secondary School | Bachelor of Science",
		institution: "U.E. Colegio San Francisco de Asís",
		years: "Sep 2001 – Jul 2006",
		description: [
			"High school studies."
		],
		color: "blue"
	}
];

const $$SectionExperience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "id": "experience" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitleLayout", $$ContentTitleLayout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Experience", "colorTitle": "text-blue-700" })} ` })} ${maybeRenderHead()}<div id="skills" class="mt-4"> ${renderComponent($$result2, "TitleSubSection", $$TitleSubSection, { "title": "Skills" })} <ul class="flex flex-wrap justify-center gap-4 mt-4"> ${skills.map((skill) => renderTemplate`${renderComponent($$result2, "Badge", $$Badge, { "skill": skill })}`)} </ul> </div> <div id="workExperience" class="mt-12"> ${renderComponent($$result2, "TitleSubSection", $$TitleSubSection, { "title": "Work Experience" })} <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 px-4"> ${experience.map((experience2) => renderTemplate`${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, { "experience": experience2 })}`)} </ul> </div> <div id="otherExperience" class="mt-12"> ${renderComponent($$result2, "TitleSubSection", $$TitleSubSection, { "title": "Other Experience" })} <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 px-4"> ${otherExperience.map((otherexperience) => renderTemplate`${renderComponent($$result2, "ExperienceCard", $$ExperienceCard, { "experience": otherexperience, "classes": "lg:col-span-2" })}`)} </ul> </div> <div id="education" class="mt-12"> ${renderComponent($$result2, "TitleSubSection", $$TitleSubSection, { "title": "Education" })} <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4 px-4"> ${education.map((e) => renderTemplate`${renderComponent($$result2, "EducationCard", $$EducationCard, { "education": e, "classes": "lg:col-span-2" })}`)} </ul> </div> ` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/SectionExperience.astro", void 0);

const $$Astro = createAstro();
const $$Input = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Input;
  const { id, name, placeholder, type, class: c, required = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(`py-2 px-3 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-1 focus:ring-orange-500 ${c}`, "class")}${addAttribute(required, "required")}>`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/Input.astro", void 0);

const check = new Proxy({"src":"/_astro/circle-check.qGx3Hqb2.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/circle-check.svg";
							}
							
							return target[name];
						}
					});

const error = new Proxy({"src":"/_astro/exclamation-circle.Cf8mqXE8.svg","width":24,"height":24,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/media/i320/Respaldo/Code/Portafolio/src/assets/icons/exclamation-circle.svg";
							}
							
							return target[name];
						}
					});

const SERVICE_ID = "service_gvdn1yc";
const TEMPLATE_ID = "template_yyeh6th";
const PUBLIC_KEY = "cuaNdUhdGOg7KbRC3";
const msgAlertSuccess = { result: "Message sent successfully.", type: "success", icon: check };
const msgAlertError = { result: "The message could not be sent, please try again.", type: "error", icon: error };
const msgAlertErrorFields = { result: "Please check all fields.", type: "error", icon: error };
const initicalState = {
  result: "",
  type: "",
  icon: null
};
const validarEmail = (email) => {
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return regex.test(email);
};
const validateFields = (formContact) => {
  let validated = true;
  Object.entries(formContact).forEach(([key, value]) => {
    if (key === "email" && !validarEmail(value)) validated = false;
    if (value.length === 0) validated = false;
  });
  return validated;
};
const Alert = ({ type, result, src }) => {
  if (!src) return null;
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-row rounded-md p-2 text-white gap-2 col-span-2 ${type === "success" ? "bg-green-500" : "bg-red-500"}`, children: [
    /* @__PURE__ */ jsx("img", { src, alt: type }),
    result
  ] });
};
const SendButton = () => {
  const [state, setState] = useState(initicalState);
  const [disabled, setDisabled] = useState(false);
  const resetFrom = (dataForm) => {
    dataForm.delete("name");
    dataForm.delete("email");
    dataForm.delete("subject");
    dataForm.delete("message");
  };
  const updateState = (state2, dataForm) => {
    setState((e) => ({ ...e, ...state2 }));
    setDisabled((e) => !e);
    resetFrom(dataForm);
    setTimeout(() => {
      setState((e) => ({ ...e, ...initicalState }));
    }, 6e3);
  };
  const sendEmail = async (event) => {
    event.preventDefault();
    const form = document.querySelector("form");
    const dataForm = new FormData(form);
    const formContact = {
      fullName: dataForm.get("name"),
      email: dataForm.get("email"),
      subject: dataForm.get("subject"),
      message: dataForm.get("message")
    };
    if (validateFields(formContact)) {
      setDisabled((e) => !e);
      emailjs.send(SERVICE_ID, TEMPLATE_ID, formContact, PUBLIC_KEY).then(() => {
        updateState(msgAlertSuccess, dataForm);
      }).catch(() => {
        updateState(msgAlertError, dataForm);
      });
    } else {
      setDisabled((e) => !e);
      updateState(msgAlertErrorFields, dataForm);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        className: "p-2 col-span-2 md:col-span-1 md:col-start-2 w-full md:w-60 text-orange-500 text-base font-bold bg-zinc-700 rounded-md ml-auto hover:bg-orange-500 hover:text-zinc-700 transition-colors duration-300 disabled:bg-slate-950 disabled:text-zinc-700",
        onClick: sendEmail,
        disabled,
        children: "Send message"
      }
    ),
    /* @__PURE__ */ jsx(Alert, { type: state.type, result: state.result, src: state.icon?.src })
  ] });
};

const $$SectionContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ContentLayout", $$ContentLayout, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ContentTitleLayout", $$ContentTitleLayout, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Contact", "colorTitle": "text-purple-700" })} ` })} ${maybeRenderHead()}<form id="contactForm" class="md:max-w-[800px] m-auto mt-5 grid grid-cols-2 gap-6"> ${renderComponent($$result2, "Input", $$Input, { "type": "text", "id": "name", "name": "name", "placeholder": "Full name", "class": "col-span-2 md:col-span-1" })} ${renderComponent($$result2, "Input", $$Input, { "type": "text", "id": "email", "name": "email", "placeholder": "Email", "class": "col-span-2 md:col-span-1" })} ${renderComponent($$result2, "Input", $$Input, { "type": "text", "id": "subject", "name": "subject", "placeholder": "Subject", "class": "col-span-2" })} <textarea id="message" name="message" placeholder="Message" rows="10" class="col-span-2 py-2 px-3 rounded-md bg-zinc-700 text-white focus:outline-none focus:ring-1 focus:ring-orange-500" required></textarea> ${renderComponent($$result2, "SendButton", SendButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/media/i320/Respaldo/Code/Portafolio/src/components/SendButton", "client:component-export": "default" })} </form> ` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/components/SectionContact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio frontend developer | Marco Velasquez Figarella" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionHome", $$SectionHome, {})} ${renderComponent($$result2, "SectionExperience", $$SectionExperience, {})} ${renderComponent($$result2, "SectionProjects", $$SectionProjects, {})} ${renderComponent($$result2, "SectionChallenges", $$SectionChallenges, {})} ${renderComponent($$result2, "SectionContact", $$SectionContact, {})} ` })}`;
}, "/media/i320/Respaldo/Code/Portafolio/src/pages/index.astro", void 0);

const $$file = "/media/i320/Respaldo/Code/Portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
