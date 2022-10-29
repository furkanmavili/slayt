import { Link } from "react-router-dom";
import UserMenu from "~components/avatar";
import { styled } from "~style";

const StyledHeader = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "$4",
});

function Header() {
  return (
    <StyledHeader>
      <Link to="/">Slayt</Link>
      <UserMenu />
    </StyledHeader>
  );
}

export default Header;
