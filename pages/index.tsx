import styled from "@emotion/styled";
import type { NextPage } from "next";
import CSSNavBar from "../components/css-navbar";
import FramerMotionNavBar from "../components/framermotion-navbar";
import ReactTransitionGroupNavBar from "../components/reacttransitiongroup-navbar";

const Home: NextPage = () => {
  return (
    <Container>
      <CSSNavBar />
      <FramerMotionNavBar />
      <ReactTransitionGroupNavBar />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: absolute;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
