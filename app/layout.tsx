import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zafy Graf | Bordados, impresiones y personalización',
  description:
    'Bordados, DTF, sublimación, láser, uniformes y artículos personalizados con calidad profesional en República Dominicana.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
