import Footer from "./FooterComponent/Footer";
import Header from "./HeaderComponent/Header";
import Stripe from "./StripesComponent/Stripe";

type Stripes = {
  height: number;
  amount: number;
};

type Props = {
  children: React.ReactNode;
  fullWidth?: boolean;
  breadcrumbs?: boolean;
  stripes?: boolean;
  stripeProps?: Stripes;
};

const Layout = (props: Props) => {
  const { children, fullWidth, breadcrumbs, stripes, stripeProps } = props;

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
