export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
    try {
        await req.json();

        const message = "Maaf, fitur AI chat sedang dinonaktifkan untuk sementara. Anda bisa menghubungi Anla Harpanda secara langsung melalui:\n\n📧 Email: operation927@gmail.com\n💼 LinkedIn: https://www.linkedin.com/in/anlaharpanda\n🐙 GitHub: https://github.com/Gojer16";

        return new Response(message, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    } catch (err) {
        console.error("API Error:", err);
        return new Response("Internal Server Error", { status: 500 });
    }
}
