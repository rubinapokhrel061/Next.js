"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children, params }) {
  const { lang } = params;
  const router = useRouter();

  const handleClick = (newLocale) => {
    router.push(`/${newLocale}`);
  };

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex gap-4 p-2 justify-center">
          <button
            className="p-2 bg-yellow-700 rounded-xl"
            onClick={() => handleClick("en")}
          >
            en
          </button>

          {/* Button to switch to Nepali */}
          <button
            className="p-2 bg-yellow-700 rounded-xl"
            onClick={() => handleClick("ne")}
          >
            ne
          </button>
        </div>
        {children} {/* Render the page content inside the layout */}
      </body>
    </html>
  );
}
