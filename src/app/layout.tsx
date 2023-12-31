import "@/app/globals.css";
import SvgReact from "../../public/SvgReact";
import MaxWidth from "@/components/MaxWidth";

export const metadata = {
  title: "Sandbox",
  description: ":)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MaxWidth width="max-w-screen-lg">
          <nav className="flex justify-center py-8">
            <SvgReact height="50px" width="50px" />
          </nav>
          {children}
          <footer className="flex justify-center py-6">:)</footer>
        </MaxWidth>
      </body>
    </html>
  );
}
