import NavbarTodo from "./NavbarTodo";
import LeftSideApp from "./LeftSidePanel/LeftSidePanel";
import { useState, useEffect } from "react";
import LoadingPage from "../LoadingPage.jsx";

export default function TodoApp() {
  const [leftMenuIsClicked, setLeftMenuIsClicked] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const t1 = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(t1);
    }, 3000);
  }, []);

  function handleleftMenuIsClicked() {
    setLeftMenuIsClicked(true);
  }

  return (
    <>
      {isloading ? (
        <LoadingPage />
      ) : (
        <>
          <NavbarTodo handleleftMenuIsClicked={handleleftMenuIsClicked} />
          {leftMenuIsClicked ? <LeftSideApp /> : null}
        </>
      )}
    </>
  );
}
