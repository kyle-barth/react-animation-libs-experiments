const impl = {
  CSS: `
  CSS

  // sidenav state
  const [openState, setOpenState] = useState(false);
  
  // template code
  return <SideNav state={openState} />

  // relevant styling
  const SideNav = styled.div<{ state: boolean }>\`
    transition: transform 300ms;
    transform: translateX(\${({ state }) =>
      state ? "none" : "100%"});
  \`;
  `,
  FM: `
  FRAMER MOTION

  // define animation states
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  // sidenav state
  const [openState, setOpenState] = useState(false);
  
  // template code
  <SideNav
    initial={"closed"}
    variants={variants}
    animate={openState ? "open" : "closed"}
    transition={{ duration: ".3" }}
  />
  
  // relevant styling
  const SideNav = styled(motion.div)\`...\`;
  `,
  RTG: `
  REACT TRANSITION GROUP
  
  // define timeout (as it gets reused)
  const timeout = 300;
  
  // sidenav state
  const [openState, setOpenState] = useState(false);
  
  // template code
  <Transition in={openState} timeout={timeout}>
    {(state) => <SideNav state={state} />}
  </Transition>
  
  // relevant styling
  const SideNav = styled.div<{ state: TransitionStatus }>\`
    transition: transform \${timeout}ms;
    transform: translateX(
      \${({ state }) => (state === "entering" || state === "entered" ? 0 : "100%")}
    );
  \`;
  `,
};

export default impl;
