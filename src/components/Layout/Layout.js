import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

function Layout({ children }) {
  return (
    <>
      <Banner />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
