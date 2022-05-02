import Hierarchy from "@/components/Hierarchy";
import Layout from "@/components/Layout";
import LoginForm from "@/components/LoginForm";
import AuthContext from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { DATA_API_URL } from "../config";

export default function HomePage({ topTier, midTier, lowTier }) {
  const { user, error } = useContext(AuthContext);
  return (
    <Layout>
      {!user ? (
        <LoginForm />
      ) : (
        <Hierarchy topTier={topTier} midTier={midTier} lowTier={lowTier} />
      )}
    </Layout>
  );
}
const getStaticProps = async () => {
  const res = await fetch(DATA_API_URL);
  const data = await res.json();

  return {
    props: {
      topTier: data.topTier,
      midTier: data.midTier,
      lowTier: data.lowTier,
    },
    revalidate: 1,
  };
};

export { getStaticProps };
