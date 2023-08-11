import styled from "styled-components";
import SearchLogo from '../img/searchicon.png';
import Modal from 'styled-react-modal';

export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    background-color: #A0D7D5;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentWrapper = styled.div`
    width: 90%;
    height: 70%;
    background-color: #A0D7D5;
    display: flex;
    justify-content: center;
    > div.Container {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
`

export const SearchBoxWrapper = styled.div`
    width: 100%;
    height: 12%;
    background-color: #304C4D;
    box-sizing: border-box;
    transition: 1.5s;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row-reverse;
    border: 2px solid black;
    border-color: #304C4D;
    box-shadow: 3px 2px 3px -2px #304C4D;
    margin-bottom: 5px;
`
export const SearchBox = styled.div`
    width: 6.5%;
    height: 80%;
    background-color: #304C4D;
    box-sizing: border-box;
    transition: .3s;
    margin: 0 0.5%;
    background-image: url(${SearchLogo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    &:hover {
        transform: scale(1.1, 1.1);
        // color: #FFFFFF;
    }
`
export const TextArea = styled.textarea`
    width: 93%;
    height: 100%;
    background-color: #F1F1F2;
    border-left: 0px;
    border-top: 0px;
    border-bottom: 0px;
    border-right: 1.5px solid black;
    outline: none;
    resize: none;
    margin: 0 0 0 0;
    padding: 0 0 0 5px;
    box-sizing: border-box;
    font-size: 30px;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    font-family: 'NotoSansTC';
    &:hover {
        overflow-x: auto;
    }
`
export const ResultWrapper = styled.div`
    width: 100%;
    height: 83%;
    overflow: auto;
    white-space: nowrap;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > p {
        margin-left: 5px;
        font-size: 30px;
        font-family: NotoSansTC;
        margin-top: 5px;
    }
`

export const ModalCard = Modal.styled`
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #F1F1F2;
    box-sizing: border-box;
    border: 2px solid black;
    border-color: #F1F1E2;
    // border-radius: 20px;
    width: 60%;
    height: 80%;
`

export const ResultCard = styled.div`
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    width: 48%;
    height: 75%;
    box-sizing: border-box;
    // border-radius: 20px;
    background-color: #F1F1F2;
    border: 2px solid black;
    border-color: #F1F1F2;
`