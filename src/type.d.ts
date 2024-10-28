interface project{
    title: string;
    img: string;
    linkGithub: string;
    linkLive: string;
    description: string;
    details: string;
    author: string;
    skills: string;
    client: string;
}
interface link {
    alt: string;
    link: any;
    src: ImageMetadata;
}
interface state {
    result: string;
    type: string;
    icon: ImageMetadata | null;
}
interface formContact {
	fullName: FormDataEntryValue | null;
	email: FormDataEntryValue | null;
	subject: FormDataEntryValue | null;
	message: FormDataEntryValue | null;
}