import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Context = (props) => {

const [activeHeadline,setActiveHeadline] = useState('1');

const changeHeadline = () => {
        const activeSlide = document.querySelector('.head')
                .querySelector('.swiper-slide-active')
                .querySelector(".carousel-card"),
        activeSlideNum = activeSlide.getAttribute('data-num');
        if (activeHeadline !== activeSlideNum) {
            setActiveHeadline(activeSlideNum);
        }
}

return(
    <MyContext.Provider value={{changeHeadline,activeHeadline}}>
        {props.children}
    </MyContext.Provider>
)
}
export default Context;