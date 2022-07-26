import Footer from "./FooterComponent/Footer";
import Header from "./HeaderComponent/Header";
import Stripe from "./StripesComponent/Stripe";

type Stripes = {
  height: number;
  amount: number;
};

const Layout = ({
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
}) => {
  return (
    <div className="layout">
      {!fullWidth && <Header position="relative" breadcrumbs={breadcrumbs} />}
      {fullWidth && <Header breadcrumbs={breadcrumbs} />}
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
  );
};

export default Layout;
