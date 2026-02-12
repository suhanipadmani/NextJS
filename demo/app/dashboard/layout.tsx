import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

interface JwtPayload {
    userId: string;
    role: string;
}

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        redirect("/auth/login");
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    } catch {
        redirect("/auth/login");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {children}
        </div>
    );
}
