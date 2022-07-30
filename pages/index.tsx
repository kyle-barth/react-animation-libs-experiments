import type { NextPage } from "next";
import CSSNavBar from "../components/css-navbar";
import FramerMotionNavBar from "../components/framermotion-navbar";
import ReactTransitionGroupNavBar from "../components/reacttransitiongroup-navbar";

const Home: NextPage = () => {
  return (
    <>
      <CSSNavBar />
      <FramerMotionNavBar />
      <ReactTransitionGroupNavBar />
    </>
  );
};

export default Home;
