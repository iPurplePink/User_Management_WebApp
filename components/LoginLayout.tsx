import React, { FC, ReactNode } from "react";
import SvgIcon from "../components/SvgIcon";
import Link from "next/link";
import { useRouter } from "next/router";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  const router = useRouter();

  const footer = router.pathname.includes("/register")
    ? {
        href: "/login",
        label: "Already have an account?",
        button: "Log in",
      }
    : {
        href: "/login/register",
        label: "Don't have an account?",
        button: "Sign up",
      };

  return (
    <section className={"login-layout-section"}>
      <div className={"login-layout-container"}>
        <div className={"logo-container"}>
          <SvgIcon symbolId="webapp_icon" className="logo" />
          <h1 className="logo-name">Identify.</h1>
        </div>
        <div className={"content-container"}>
          <SvgIcon symbolId="webapp_icon" className="logo-header" />
          <div className="form-container">{children}</div>
          <div className="form-footer">
            <span>{footer.label}</span>
            <Link href={footer.href}>
              <a className="button-link">{footer.button}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginLayout;
