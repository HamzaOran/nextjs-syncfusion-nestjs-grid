import { Bottom } from '@/components/bottom';
import '../styles/globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height initial-scale=1"
        />
      </head>
      <body>
        <div className="text-white">
          <Header />

          <main className="pt-navigation-height">{children}</main>
          <Footer />
          <Bottom />
        </div>
      </body>
    </html>
  );
}
