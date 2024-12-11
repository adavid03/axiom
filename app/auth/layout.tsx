import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication",
    description:
        "Log in or sign up to access Axiom, your collaborative research platform.",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="h-dvh w-dvw">{children}</div>;
}
