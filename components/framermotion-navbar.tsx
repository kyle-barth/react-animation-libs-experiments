import { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Container, SideNavBtn, Text } from "./shared";
import { CopyBlock, dracula } from "react-code-blocks";
import impl from "./Implementations";

const variants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

const FramerMotionNavBar = () => {
  const [openState, setOpenState] = useState(false);

  return (
    <>
      <Container>
        <SideNavBtn
          onClick={() => setOpenState(!openState)}
          state={openState}
        />
        <Text>Framer Motion SideNav State: {openState ? "True" : "False"}</Text>
      </Container>

      <SideNav
        initial={"closed"}
        variants={variants}
        animate={openState ? "open" : "closed"}
        transition={{ duration: ".3" }}
      >
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

export default FramerMotionNavBar;

const SideNav = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: #282a36;
`;
