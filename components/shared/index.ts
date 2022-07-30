import styled from "@emotion/styled";

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const HamburgerMmmmTasty = styled.button<{ state: boolean }>`
  width: 50px;
  height: 50px;
  background-color: ${({ state }) => (state ? "green" : "red")};

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.h1`
  font-size: 25px;
  color: red;
`;
