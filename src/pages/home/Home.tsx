import Category from "@/shared/category/Category";
import Header from "@/shared/header/Header";
import Recommendation from "@/shared/recommendation/Recommendation";
import React from "react";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="pl-12 pr-14">
        <Category />
        <Recommendation />
      </main>
    </div>
  );
};

export default Home;
