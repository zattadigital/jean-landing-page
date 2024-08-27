import { Inter } from "next/font/google";

import "@/assets/css/global-min.css";
import "@/assets/css/cb82.css";
import "@/assets/css/with-flex.css";
import "@/assets/css/home-with-flex.css";
import "@/assets/css/fonts.css";
import "@/assets/css/additional.css";
import "@/assets/css/override.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jean Amaral - Treinador",
  description:
    "Alcance seus objetivos fitness com Jean Amaral, treinador experiente que oferece consultoria online personalizada. Transforme seu corpo com planos de treino e nutrição adaptados às suas necessidades. Inscreva-se agora e comece sua jornada rumo ao corpo dos seus sonhos!",
};

export default function RootLayout({ children }) {
  return (
    <html className="touch" lang="pt-br">
      <head>
        <meta
          name="keywords"
          content="personal, academia, musculação, jean amaral, treinador pessoal online, consultoria fitness, personal trainer online, planos de treino personalizados, personal online, consultoria online, treino online, fitness em casa, melhorar desempenho"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="pt-BR" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://jeantreinador.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jean Amaral - Treinador" />
        <meta property="og:description" content="Alcance seus objetivos fitness com Jean Amaral, treinador experiente que oferece consultoria online personalizada. Transforme seu corpo com planos de treino e nutrição adaptados às suas necessidades. Inscreva-se agora e comece sua jornada rumo ao corpo dos seus sonhos!" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://jeantreinador.com" />
        <meta property="twitter:url" content="https://https://jeantreinador.com/" />
        <meta name="twitter:title" content="Jean Amaral - Treinador" />
        <meta name="twitter:description" content="Alcance seus objetivos fitness com Jean Amaral, treinador experiente que oferece consultoria online personalizada. Transforme seu corpo com planos de treino e nutrição adaptados às suas necessidades. Inscreva-se agora e comece sua jornada rumo ao corpo dos seus sonhos!" />
        <meta name="twitter:image" content="" />

        <meta name="google-site-verification" content="3xLHIILde1smgETWuh820a-C-8-qFcWMXVulEtEPTkg" />

        <link
          rel="stylesheet"
          href="https://irp.cdn-website.com/fonts/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;family=Montserrat:ital,wght@0,100..900;1,100..900&amp;family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;family=Oswald:ital,wght@0,200..700;1,200..700&amp;family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&amp;subset=latin-ext&amp;display=swap"
          as="style"
          fetchPriority="low"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        id="dmRoot"
        data-page-alias="home"
        className="dmRoot dmMobileBody fix-mobile-scrolling addCanvasBorder dmResellerSite pcCustomScrollbar d1SiteBody dmLayoutBody dmBodyNoIscroll"
        style={{ padding: 0, margin: 0 }}
      >
        {children}
      </body>
    </html>
  );
}
