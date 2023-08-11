import styled from "styled-components";
import Logo from '../img/icon/caelogo.png';

export const NavBarWrapper = styled.div`
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #304C4D;
`
export const NavBarContent = styled.div`
    background-color: #304C4D;
    width: 100%;
    height: 93%;
    // border: 2px solid black;
    box-sizing: border-box;
    // box-shadow: 5px 5px 1px -1px #000000;
    // margin-bottom: 2px;
`

export const LogoWrapper = styled.div`
    background-image: url(${Logo});
    background-size: contain;
    background-repeat: no-repeat;
    box-sizing: border-box;
    margin-left: 1.4rem;
    margin-top: .9rem;
    height: 60%;
    width: 100px;
    float: left;
    // font-size: 32px;
    justify-content: center;
    // font-family: NotoSansTC;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: .5s;
    &:hover {
        background-color: #304C4D;
        transform: scale(1.03, 1.03);
        // color: #FFFFFF;
        // box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
`
export const OptionButtonWrapper = styled.div`
    background-color: #304C4D;
    height: 100%;
    dislay: flex;
    align-items: center;

`

export const OptionButton = styled.button`
    color: #F1F1F2;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: .7rem;

    padding-top: .3rem;
    
    text-decoration: none;
    text-align: center;
    list-style: none;
    font-size: 1.3rem;
    background-color: #304C4D;
    border-style: none;
    border-radius: 20px;

    float: right;
    position: relative;

    height: 60%;
    width: 100px;

    transition: .5s;

    font-family: NotoSansTC;

    &:hover {
        // background-color: #304C4D;
        // transform: scale(1.03, 1.03);
        color: #A0D7D5;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 6px;
        // box-shadow: 3px 3px 0.5px 0.5px #000080;
    }
`