import { useParams } from "react-router-dom";
import { styled } from "~style";
import Editor from "./editor";
import PageList from "./pages";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "250px 1fr",
});

function Slide() {
  let params = useParams();
  console.log(params);
  return (
    <Root>
      <PageList />
      <Editor />
    </Root>
  );
}

export default Slide;
