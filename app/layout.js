import { Outfit,Ovo} from "next/font/google";
import "./globals.css";

// Define fonts first
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Valid weights for Outfit
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
});


export const metadata = {
  title: "Portfolio - Shwet Kheni",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
    <link rel="icon" href="/favicon.png" />
      <body
        className={`${outfit.className} ${ovo.className} 
      antialiased leading-8 overflow-x-hidden dark:bg-darkTheme 
      dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
