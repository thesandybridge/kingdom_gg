import { useRouter } from "next/router";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/HeaderComponent/Header";
import { useSession } from "next-auth/react";
import ErrorPage from "next/error";

const User = () => {
  const { data: sesh } = useSession();
  const router = useRouter();
  const { id } = router.query;

  if (!sesh || sesh.user?.id !== id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Header position="relative" breadcrumbs={true} />
      <Footer />
    </div>
  );
};

export default User;
