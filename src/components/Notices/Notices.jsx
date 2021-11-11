import React from "react";
import BigBanner from "../banners/BigBanner/BigBanner";
import BlogDisplay from "../blog/BlogDisplay/BlogDisplay";
import Head from "../Head/Head";

function Notices() {
  return (
    <>
      <Head title="Last notices" />
      <BigBanner />
      <BlogDisplay />
    </>
  );
}

export default Notices;
