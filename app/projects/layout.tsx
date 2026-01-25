import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Anla Harpanda - Full Stack Web Developer",
    description: "Explore case studies and projects by Anla Harpanda - Full Stack Web Developer & UI/UX Designer. Projects include web applications built with Express.js, Next.js, Laravel, and Vue.js.",
    keywords: "Anla Harpanda projects, portfolio, case studies, web development projects, Full Stack projects, UI/UX design projects, Indonesia developer projects",
    openGraph: {
        title: "Projects | Anla Harpanda - Full Stack Web Developer",
        description: "Explore case studies and projects by Anla Harpanda - Full Stack Web Developer & UI/UX Designer.",
        url: "https://anla.my.id/projects",
        siteName: "Anla Harpanda Portfolio",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Projects | Anla Harpanda",
        description: "Case studies and projects by Anla Harpanda - Full Stack Web Developer & UI/UX Designer",
    },
    alternates: {
        canonical: "/projects",
    },
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
