import React from "react";
import { Outlet, useNavigation } from "react-router";
import { Header, Hero, Navbar, Loading } from "../components";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="mx-auto max-w-6xl px-8 py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}

export default HomeLayout;
