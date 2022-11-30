import Footer from "../components/FooterComponent/Footer";
import Header from "../components/HeaderComponent/Header";
import Stripe from "../components/StripesComponent/Stripe";
import { Titillium_Web, Anton } from "@next/font/google";
import "../styles/globals.css";

const titillium = Titillium_Web({ weight: "400" });
const anton = Anton({ weight: "400" });

type Stripes = {
  height: number;
  amount: number;
};

export default function RootLayout({
  children,
  fullWidth,
  breadcrumbs,
  stripes,
  stripeProps,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
  breadcrumbs?: boolean;
  stripes?: boolean;
  stripeProps?: Stripes;
}) {
  return (
    <html>
      <head />
      <body className={anton.className}>
        <div className="layout">
          {!fullWidth ? (
            <Header position="relative" breadcrumbs={breadcrumbs} />
          ) : (
            <Header breadcrumbs={breadcrumbs} />
          )}
          <main>
            {stripes && (
              <Stripe
                height={stripeProps ? stripeProps.height : 2}
                amount={stripeProps ? stripeProps.amount : 5}
              />
            )}
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
