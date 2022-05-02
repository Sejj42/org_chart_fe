const { default: Head } = require("next/head");
const { default: Footer } = require("./Footer");
const { default: Header } = require("./Header");
import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};
Layout.defaultProps = {
  title: "Comp Chart",
  descriptioon: "See Where You Stand!",
  keywords: "organization, chart",
};

export default Layout;
