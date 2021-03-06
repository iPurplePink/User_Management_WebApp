import React, { ReactNode } from "react";
import Head from "next/head";
import SvgSheet from "../components/SvgIcon/SvgSheet";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "User Management App" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <SvgSheet />
    <div className={"layout-content-container"}>{children}</div>
  </>
);

export default Layout;
