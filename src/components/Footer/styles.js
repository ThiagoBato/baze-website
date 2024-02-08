import styled from 'styled-components';

export const FooterContainer = styled.footer`
  align-items: center;
  background-color: #2c3147;
  color: #fff;
  display: flex;
  gap: 50px;
  justify-content: center;
  padding: 50px 0;

  & > img {
    max-width: 500px;
    width: 100%;
  }

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 25px;
    padding: 50px 20px 25px;
  }
`;
export const FooterList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin: 25px 0;
  }

  a {
    align-items: center;
    color: #fff;
    display: flex;
    font-weight: 300;
    gap: 5px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      cursor: pointer;
      color: #4e8aa9;
    }

    svg {
      color: #4e8aa9;
    }
  }
`;
