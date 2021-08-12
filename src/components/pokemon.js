import styled from "styled-components/macro";

export const Logo = styled.img`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 80px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

export const PokeImg = styled.img`
  width: 100px;
  height: 100px;
`;
