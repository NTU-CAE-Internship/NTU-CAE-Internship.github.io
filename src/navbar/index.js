import React,{
    Fragment,
} from "react";

import {
    NavBarWrapper,
    NavBarContent,
    LogoWrapper,
    OptionButtonWrapper,
    OptionButton,
}
from './style';

import * as Scroll from 'react-scroll';

const NavBar = () => {
    //declaration of some variable
    const options = [     
        {
            'title': '關於我們',
            'offset': 3200,
        },      
        {
            'title': '問題排解',
            'offset': 2500,
        },       
        {
            'title': '資訊驗證',
            'offset': 1850,
        },       
        {
            'title': '證書領取',
            'offset': 1200,
        },
        {
            'title': '最新公告',
            'offset': 600,
        },
        {
            'title': '首頁',
            'offset': 0,
        },
    ];

    const scroll = Scroll.animateScroll;


    //functions
    const getOptionButton = (options) => {
        return (
            options.map((option) => (<OptionButton onClick={()=>scroll.scrollTo(option.offset)} key={option.title}>{option.title}</OptionButton>))
        )
    }

    return (
        <Fragment>
            <NavBarWrapper>
                <NavBarContent>
                    <LogoWrapper onClick={scroll.scrollToTop}>
                    </LogoWrapper>
                    <OptionButtonWrapper>
                        {getOptionButton(options)}
                    </OptionButtonWrapper>
                </NavBarContent>
            </NavBarWrapper>
        </Fragment>
    )
}

export default NavBar;