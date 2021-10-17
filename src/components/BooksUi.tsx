import { useEffect, useState } from "react";
import BookList from "./BookList";
import CharacterBooks from "./CharacterBooks";
import { BookContainer } from "./Styles/Styled";

const BooksUi = () => {
  const [active, setactive] = useState(false);
  const [catactive, setcatactive] = useState(false);
  //Change the Tab 
  const changeCategory = (tab: string) => {
    if (tab === "all") {
      setactive(true);
      setcatactive(false);
    } else if (tab === "cat") {
      setcatactive(true);
      setactive(false);
    }
  };

  useEffect(() => {
    setactive(true);
  }, []);
  return (
    <div>
      <BookContainer>
        <div
          onClick={() => changeCategory("all")}
          onKeyDown={() => changeCategory("all")}
          role="button"
          tabIndex={0}
          className={`catops ${active ? "active" : ""}`}>
          GET ALL BOOKS
        </div>
        <div
          onClick={() => changeCategory("cat")}
          onKeyDown={() => changeCategory("cat")}
          role="button"
          tabIndex={0}
          className={`catops ${catactive ? "active" : ""}`}>
          GET ALL BOOKS BY CHARACTERS
        </div>
      </BookContainer>
      {active ? (
        <>
          <BookList />
        </>
      ) : (
        <div>
          <CharacterBooks />
        </div>
      )}
    </div>
  );
};

export default BooksUi;
