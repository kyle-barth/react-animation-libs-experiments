import { useState } from "react";
import styled from "@emotion/styled";
import { Container, HamburgerMmmmTasty, Text } from "./shared";
import impl from "./Implementations";
import { CopyBlock, dracula } from "react-code-blocks";

const CSSNavBar = () => {
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <Container>
        <HamburgerMmmmTasty
          onClick={() => setOpenState(!openState)}
          state={openState}
        />
        <Text>CSS SideNav State: {openState ? "True" : "False"}</Text>
      </Container>

      <SideNav state={openState}>
        <CopyBlock
          language={"tsx"}
          text={impl.CSS}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      </SideNav>
    </>
  );
};

export default CSSNavBar;

const SideNav = styled.div<{ state: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: #282a36;

  transition: transform 300ms;
  transform: translateX(${({ state }) => (state ? "none" : "100%")});
`;
