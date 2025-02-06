import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home | Next.js",
    description: "Great App Ever",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                {/* Layout UI */}
                {/* Place children where you want to render a page or nested layout */}
                <main>{children}</main>
            </body>
        </html>
    );
}
