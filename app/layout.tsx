export const metadata = {
  title: 'BF Intelligence Hub Terminal',
  description: 'Automated Infrastructure Diagnostic Architecture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#09090b]">{children}</body>
    </html>
  );
}
