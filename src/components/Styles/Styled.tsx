import styled from "styled-components";

export const HeadeStyled = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    margin-left: 10px;
    color: #1dcefb;
    margin-top: 10px;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  select {
    padding: 10.5px;
    width: 400px;
    border: none;
    font-size: 15px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    -webkit-appearance: button;
    appearance: button;
    outline: none;
    cursor: pointer;
    margin-bottom: 20px;
    option {
      padding: 30px;
      cursor: pointer;
    }
  }
`;
export const BookContainer = styled.div`
    transition: ease all 0.5s;
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
    div{
      margin-right:20px;
    }
    .catops {
        cursor: pointer;
        color: gray;
        position: relative;
        &.active {
            font-weight: bold;
            color: #1dcefb;
            &:after {
                position: absolute;
                content: '';
                background: #1dcefb;
                height: 2px;
                left: 0;
                right: 0;
                width: auto;
                bottom: 2px;
            }
        }
    }
    }
`;
