import NavbarTodo from "./NavbarTodo"
import LeftSideApp from "./LeftSidePanel/LeftSidePanel"
import { useState } from "react"

export default function TodoApp (){
    const [leftMenuIsClicked, setLeftMenuIsClicked] = useState(true)

    function handleleftMenuIsClicked(){
        setLeftMenuIsClicked(true);
    }

    return(
        <>
            <NavbarTodo/>
            {leftMenuIsClicked?<LeftSideApp/>:null}
        </>
    )
}