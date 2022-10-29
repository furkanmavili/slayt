import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "~style";
import Header from "./header";

const Root = styled("div", {
  padding: "$4",
});

function Layout() {
  return (
    <Root>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Root>
  );
}

export default Layout;
