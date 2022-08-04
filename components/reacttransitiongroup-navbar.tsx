import { useState } from "react";
import styled from "@emotion/styled";
import { Container, SideNavBtn, Text } from "./shared";
import { Transition, TransitionStatus } from "react-transition-group";
import { CopyBlock, dracula } from "react-code-blocks";
import impl from "./Implementations";

const timeout = 300;

const ReactTransitionGroupNavBar = () => {
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <Container>
        <SideNavBtn
          onClick={() => setOpenState(!openState)}
          state={openState}
        />
        <Text>
          React-Transition-Group SideNav State: {openState ? "True" : "False"}
        </Text>
      </Container>

      <Transition in={openState} timeout={timeout}>
        {(state) => (
          <SideNav state={state}>
            <CopyBlock
              language={"tsx"}
              text={impl.RTG}
              showLineNumbers={true}
              theme={dracula}
              wrapLines={true}
              codeBlock
            />
          </SideNav>
        )}
      </Transition>
    </>
  );
};

export default ReactTransitionGroupNavBar;

const SideNav = styled.div<{ state: TransitionStatus }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: #282a36;

  transition: transform ${timeout}ms;
  transform: translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? 0 : "100%")}
  );
`;
