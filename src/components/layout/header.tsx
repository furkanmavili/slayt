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
      <h3>Slayt</h3>
      <UserMenu />
    </StyledHeader>
  );
}

export default Header;
