import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
  title: "Nexus",
  description: "Showcase your Shops or Find Best Shops Near You",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
  );
}
