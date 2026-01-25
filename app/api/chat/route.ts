import { contactInfo } from "@/data/contact";

export async function POST() {
    return new Response(
        JSON.stringify({ message: contactInfo.message }),
        { 
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
}
