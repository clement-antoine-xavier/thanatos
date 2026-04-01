import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thanatos",
  description: "Thanatos personifies peaceful death, son of Nyx, and acts as Hades' messenger to carry away souls. Hades reigns over the Underworld, watching over the dead without being death itself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
