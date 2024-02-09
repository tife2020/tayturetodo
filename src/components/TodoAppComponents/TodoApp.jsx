import NavbarTodo from "./NavbarTodo"
import LeftSideApp from "./LeftSidePanel/LeftSidePanel"
import { useState } from "react"


export default function TodoApp (){
    const [leftMenuIsClicked, setLeftMenuIsClicked] = useState(false)

    function handleleftMenuIsClicked(){
        setLeftMenuIsClicked(true);
    }

    return(
        <>
            <NavbarTodo handleleftMenuIsClicked={handleleftMenuIsClicked} />
            {leftMenuIsClicked?<LeftSideApp/>:null}
        </>
    )
}