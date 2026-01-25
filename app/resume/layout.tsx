import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume | Anla Harpanda - Full Stack Web Developer",
    description: "View the professional resume of Anla Harpanda - Full Stack Web Developer & UI/UX Designer. Experience in Express.js, Next.js, Laravel, Vue.js, and React. Based in Padang, Indonesia.",
    keywords: "Anla Harpanda resume, CV, Full Stack Developer resume, Web Developer Indonesia, UI/UX Designer resume, Padang developer",
    openGraph: {
        title: "Resume | Anla Harpanda - Full Stack Web Developer",
        description: "Professional resume of Anla Harpanda - Full Stack Web Developer & UI/UX Designer specializing in modern web technologies.",
        url: "https://anla.my.id/resume",
        siteName: "Anla Harpanda Portfolio",
        type: "profile",
    },
    twitter: {
        card: "summary",
        title: "Resume | Anla Harpanda",
        description: "Professional resume of Anla Harpanda - Full Stack Web Developer & UI/UX Designer",
    },
    alternates: {
        canonical: "/resume",
    },
};

export default function ResumeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
