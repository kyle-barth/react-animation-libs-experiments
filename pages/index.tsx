import styled from "@emotion/styled";
import type { NextPage } from "next";
import CSSNavBar from "../components/css-navbar";
import FramerMotionNavBar from "../components/framermotion-navbar";
import ReactSpringNavBar from "../components/reactspring-navbar";
import ReactTransitionGroupNavBar from "../components/reacttransitiongroup-navbar";

const Home: NextPage = () => {
  return (
    <Container>
      <CSSNavBar />
      <FramerMotionNavBar />
      <ReactTransitionGroupNavBar />
      <ReactSpringNavBar />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  position: absolute;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
`;
