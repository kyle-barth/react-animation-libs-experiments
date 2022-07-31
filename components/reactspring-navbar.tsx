import { useState } from "react";
import styled from "@emotion/styled";
import { Container, HamburgerMmmmTasty, Text } from "./shared";
import { CopyBlock, dracula } from "react-code-blocks";
import impl from "./Implementations";
import { useSpring, animated } from "react-spring";

const ReactSpringNavBar = () => {
  const [openState, setOpenState] = useState(false);

  const styles = useSpring({
    opacity: !openState ? "0%" : "100",
  });

  return (
    <>
      <Container>
        <HamburgerMmmmTasty
          onClick={() => setOpenState(!openState)}
          state={openState}
        />
        <Text>React Spring SideNav State: {openState ? "True" : "False"}</Text>
      </Container>

      <SideNav style={styles}>
        <CopyBlock
          language={"tsx"}
          text={impl.FM}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </SideNav>
    </>
  );
};

export default ReactSpringNavBar;

const SideNav = styled(animated.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: #282a36;
`;
