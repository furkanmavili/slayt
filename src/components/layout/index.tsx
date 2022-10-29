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
      <main>
        <Outlet />
      </main>
    </Root>
  );
}

export default Layout;
