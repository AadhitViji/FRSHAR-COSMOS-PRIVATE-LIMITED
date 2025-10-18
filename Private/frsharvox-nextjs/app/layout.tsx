import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRSHAR Vox - Revolutionary Offline Chat",
  description: "Experience the future of communication with FRSHAR Vox - blending retro aesthetics with cutting-edge technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
