export const metadata = {
  title: 'VetMetro SRL | Red de clínicas veterinarias',
  description: 'VetMetro: red de clínicas veterinarias con sucursales en Paraíso, Arroyo Hondo y Gascue. Emergencias 24 horas, cirugía, laboratorio y más. Agenda por ',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
