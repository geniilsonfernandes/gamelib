import React from "react";
import BigBanner from "../../banners/BigBanner/BigBanner";
import BlogDisplay from "../BlogDisplay/BlogDisplay";
import Head from "../../Head/Head";

function Notices() {
  return (
    <section style={{ position: "relative" }}>
      <Head title="Last notices" />
      <BigBanner />
      <BlogDisplay />
    </section>
  );
}

export default Notices;
