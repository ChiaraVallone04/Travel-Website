import React from 'react';
import { 
    Inter, 
    Roboto, 
    Lato, 
    Open_Sans, 
    Montserrat, 
    Poppins, 
    Raleway, 
    Merriweather, 
    Oswald, 
    Nunito,
    Arsenal,
    Ubuntu,
    Playfair_Display,
    Noto_Sans,
    Quicksand
} from 'next/font/google';
import "./globals.css"; // Asegúrate de importar los estilos globales aquí
import ResponsiveNav from "./components/Navbar/ResponsiveNav";
import Footer from './components/Footer/Footer';

// Configuración de las fuentes
const inter = Inter({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'] 
});

const roboto = Roboto({ 
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
});

const lato = Lato({ 
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin']
});

const openSans = Open_Sans({ 
    weight: ['300', '400', '600', '700', '800'],
    subsets: ['latin']
});

const montserrat = Montserrat({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

const poppins = Poppins({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

const raleway = Raleway({ 
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

const merriweather = Merriweather({ 
    weight: ['300', '400', '700', '900'],
    subsets: ['latin']
});

const oswald = Oswald({ 
    weight: ['200', '300', '400', '500', '600', '700'],
    subsets: ['latin']
});

const nunito = Nunito({ 
    weight: ['200', '300', '400', '600', '700', '800', '900'],
    subsets: ['latin']
});

const arsenal = Arsenal({ 
    weight: ['400', '700'],
    subsets: ['latin'] 
});

const ubuntu = Ubuntu({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin']
});

const playfairDisplay = Playfair_Display({
    weight: ['400', '700', '900'],
    subsets: ['latin']
});

const notoSans = Noto_Sans({
    weight: ['400', '700'],
    subsets: ['latin']
});

const quicksand = Quicksand({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}> 
        <ResponsiveNav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
