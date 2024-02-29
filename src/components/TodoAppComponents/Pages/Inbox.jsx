import React, { useState } from 'react';
import { FaInbox } from "react-icons/fa6";
import { GoInbox } from "react-icons/go";



export default function Inbox({ handleClick, todos }) {
    const [isHovered, setIsHovered] = useState(false);
    const [iconClicked, setIconClicked] = useState(false);
    

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClickInternal = () => {
        handleClick();
    };

    const handleIconClick = () => {
        setIconClicked (!iconClicked)
    }

    
   

    return (
        <>
            <div
             onClick={ () => {
                handleClickInternal();
                handleIconClick();
            }
                }
                className="lsp-com"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: isHovered ? "#B0B0B0" : "",
                    borderRadius: "5px",
                    marginLeft: "18px",
                    marginTop: "10px",
                    width: "100%",

                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
            
            {iconClicked ? 
                <div
                className="click-icon"
                style={{
                    display: "flex",
                    paddingTop: "2px",
                    border: "1px transparent",
                    backgroundColor: "#FEE6E3",
                    borderRadius: "5px",
                    width: "1200px",
                    
                    

                }}
                >
                    <FaInbox 
                        className=''
                        style={{
                            color: "#DC4C3E",
                            paddingTop: "7px",
                            paddingRight: "2px"
                        }}
                        size="25"
                    /> 
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        paddingLeft: "9px",
                        paddingTop: "5px",
                        
                        // color: "#C3422C",
                    }}
                    >
                    <p
                        className="click"
                        style={{
                            color: "#DC4C3E",
                            fontSize: "14px",
                            paddingBottom: "15px",
                        }}
                    >
                        Inbox
                    </p>
                        <p className="length"
                    style={{
                        color: "#DC4C3E",
                        paddingBottom: "15px",
                        paddingLeft: "50px",
                        fontSize: "14px",
                    }}
                    >{todos.length}</p>
                    </div>
                    </div>
                :
                <div
                className='click-icon'
                style={{
                    display: "flex",
                }}
                >
                    <GoInbox  
                    style={{
                        
                    }}
                        size= "22px"
                    />
                
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        paddingLeft: "9px",
                        
                        // color: "#C3422C",
                    }}>
                    <p
                        className="click"
                        style={{
                            
                            
                            fontSize: "14px",
                            paddingBottom: "15px",
                        }}
                    >
                        Inbox
                    </p>
                    <p className='length'
                    style={{
                       
                        paddingBottom: "15px",
                        paddingLeft: "15px",
                        fontSize: "14px",
                    }}
                    >{todos.length}</p>
                    </div>
                        
                    
                    </div>
            }
            </div>

        </>
    );
}
