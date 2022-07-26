import Footer from "./FooterComponent/Footer";
import Header from "./HeaderComponent/Header";
import Stripe from "./StripesComponent/Stripe";

type Props = {
  children: React.ReactNode;
  fullWidth?: boolean;
  breadcrumbs?: boolean;
  stripes?: boolean;
};

const Layout = (props: Props) => {
  const { children, fullWidth, breadcrumbs, stripes } = props;

  return (
    <div className="layout">
      {!fullWidth && <Header position="relative" breadcrumbs={breadcrumbs} />}
      {fullWidth && <Header breadcrumbs={breadcrumbs} />}
      <main>
        {stripes && <Stripe height={5} amount={2} />}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
