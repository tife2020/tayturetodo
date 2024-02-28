import { IoIosAddCircle } from "react-icons/io";
import React, { useState } from 'react';

import '../LeftSidePanel.css';

export default function AddTask( {toggleModal} ) {
    const [isHovered, setIsHovered] = useState(false);
    

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

   

    
       

    return (
        <div
            className="lsp-com"
            style={{
                display: "flex",
                gap: "5px",
                borderRadius: isHovered ? '5px' : '0px',
                marginLeft: isHovered ? '20px' : '15px'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <IoIosAddCircle
                style={{
                    color: '#DC4C3E',
                }}
                size="29px"
                onClick={toggleModal}
            />
            <p
                className="click"
                style={{
                    fontWeight: "500",
                    color: "#C3422C",
                    fontSize: "14px",
                    marginTop: "5px"
                }}
                onClick={toggleModal}
            >
                Add task
            </p>

            
            
        </div>
    );
}
