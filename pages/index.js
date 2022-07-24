import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <h1>Home page</h1>
      <Link href="/signup">
        <a>signup</a>
      </Link>
    </Layout>
  );
};

export default Index;
