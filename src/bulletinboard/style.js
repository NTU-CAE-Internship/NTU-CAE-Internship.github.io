import styled from "styled-components";
import Post from '../img/background/post.png';
import Icon from '../img/icon/flag.png';

export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    background-color: #F1F1F2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentWrapper = styled.div`
    width: 75%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const RecentAnnounceWrapper = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    background-color: #F1F1F2;
    margin-right: 1rem;
`

export const RecentAnnounceTitle = styled.div`
    color: #304C4D;
    width: 100%;
    height: 20%;
    background-color: #A0D7D5;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > p {
        width: 70%;
        text-align: center;
        font-size: 34px;
        font-family: Bebas;
    }
    > div.icon {
        background-image: url(${Icon});
        background-repeat: no-repeat;
        background-size: contain;
        width: 8%;
        height: 90%;
    }
`

export const RecentAnounce = styled.div`
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #304C4D;
    > p {
        text-align: center;
        padding-top: .3rem;
        padding-left: 1.3rem;
        font-size: 20px;
        font-family: NotoSansTC;
    }
    &.odd {
        background-color: #F1F1F2;
    }
    &.even {
        background-color: #FFFFFF;
    }
`

export const RecentAnnounceDate = styled.div`
    width:25%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    > p.odd {
        background-color: #F1F1EF2;
        text-align: center;
        font-size: 26px;
        font-weight: 500;
        font-family: Bebas;
    }
    > p.even {
        background-color: #FFFFFF;
        text-align: center;
        font-size: 26px;
        font-weight: 500;
        font-family: Bebas;
    }
    border-right: 2px solid black;
`

export const NewAnnounceWrapper = styled.div`
    background-image: url(${Post});
    background-size: cover;
    background-repeat: no-repeat;
    width: 26%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    box-shadow: 1.5px 1.5px 0.5px 0.5px #304C4D;
    align-items: center;
    > div.Container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90%;
    }
    transition: .3s;
    &:hover {
        box-shadow: 4px 4px 2px 2px #304C4D;
    }
`

export const NewDate = styled.div`
    width: 100%;
    height: 15%;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    > p {
        font-size: 45px;
        font-family: Microsoft JhengHei;
        padding-bottom: 20px;
    }
`

export const NewContent = styled.div`
    width: 97%;
    height: 85%;
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 5px;
    font-family: Microsoft JhengHei;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    background-color: #F1F1F2;
    height: 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const NextButton = styled.button`
    width: 20%;
    height: 80%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid black;
    background-color: #F1F1F2;
    //box-shadow: 1px 1px .3px .3px #000000;
    transition: .3s;
    font-family: Bebas;
    letter-spacing: 3px;
    color: #304C4D;
    &:hover {
        background-color: #4F9994;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
    &.hidden {
        opacity: 0%;
    }
    &.visible {
        border: 1px solid black;
        opacity: 100%;
        bacground-color: green;
    }
`

export const PrevButton = styled.button`
    width: 20%;
    height: 80%;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #F1F1F2;
    //box-shadow: .8px .8px .2px px #000000;
    transition: .3s;
    font-family: Bebas;
    letter-spacing: 3px;
    color: #304C4D;
    &:hover {
        background-color: #4F9994;
        transform: scale(1.03, 1.03);
        color: #FFFFFF;
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
    &.hidden {
        opacity: 0%;
    }
    &.visible {
        border: 1px solid black;
        opacity: 100%;
        bacground-color: green;
    }
`