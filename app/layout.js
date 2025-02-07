export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>MagicBricks Real Estate Listings</title>
        <meta name="description" content="Find the best real estate projects in your city from MagicBricks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gray-100 text-gray-900">
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
