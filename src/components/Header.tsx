import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { HeaderContainer, HeadeStyled } from "./Styles/Styled";
const Header = () => {
  return (
    <HeaderContainer>
      <HeadeStyled>
        <FontAwesomeIcon icon={faBookOpen} size={"3x"} color={"#1dcefb"} />{" "}
        <h1>BOOK LIST INVENTORY</h1>
      </HeadeStyled>
    </HeaderContainer>
  );
};

export default Header;
