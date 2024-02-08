import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: #2c3147;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;

  @media (max-width: 840px) {
    display: block;
    & > div {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
`;
export const HeaderLogo = styled.img`
  max-width: 150px;
  width: 100%;
`;
export const HeaderList = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  padding: 0;

  a {
    color: #fff;
    font-size: 0.9rem;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s;

    &:hover {
      color: #4e8aa9;
      cursor: pointer;
    }

    &.active {
      color: #4e8aa9;
    }
  }
  @media (max-width: 840px) {
    flex-direction: column;
    height: 0;
    overflow: hidden;
    transition: 0.3s ease-in-out;

    &.headerList-active {
      display: flex;
      height: 286px;
      margin: 10px 0;
    }
  }
`;
export const HeaderBtnMenu = styled.button`
  background-color: #4e8aa9;
  border: none;
  border-radius: 5px;
  display: none;
  height: 35px;
  padding: 5px;

  span {
    border-bottom: 1px solid #2c3147;
    padding: 0px 10px;
    width: 10px;
    display: block;
    margin: 5px;
  }
  @media (max-width: 840px) {
    display: block;
  }
`;
