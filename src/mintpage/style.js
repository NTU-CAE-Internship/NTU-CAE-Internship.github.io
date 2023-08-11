import styled from "styled-components";
// import InstagramLogo from '../img/social/instagram.png'
// import FacebookLogo from '../img/social/facebook.png';
import GlobeLogo from '../img/social/globe.png';
// import DiscordLogo from '../img/social/discord.png';
import TwitterLogo from '../img/social/twitter.png';
import YoutubeLogo from '../img/social/youtube.png';
import TelegramLogo from '../img/social/telegram.png';
import LineLogo from '../img/social/line.png'
import CAELogo from '../img/social/CAEicon.png';
import WebsiteLogo from '../img/social/icon1.png';
import FacebookLogo from '../img/social/icon2.png';
import DiscordLogo from '../img/social/icon3.png';
import InstagramLogo from '../img/social/icon4.png';
import Background_1 from '../img/background/background_1.png';
// import Background_2 from '../img/background/background_2.png';
// import Background_3 from '../img/background/background_3.png';
import Background_4 from '../img/background/background_4.png';
import Background_5 from '../img/background/background_5.png';
import PrevLogo from '../img/btn-left.png';
import NextLogo from '../img/btn-right.png';

export const Wrapper = styled.div`
    width: 100%;
    height: 640px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F1F1F2;
`

export const ContentWrapper  = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    background-color: #F1F1F2;
`

export const DisplayWrapper = styled.div`
    width: 100%;
    height: 78%;
    transition: 1s;
    &.internProgram {
        background-image: url(${Background_5});
        background-size: contain;
    }
    &.alumniAssociation {
        background-image: url(${Background_4});
    }
    &.undergratesProject {
        background-image: url(${Background_4});
    }
    bacground-size: cover;
    background-repear: no-repeat;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const ButtonContainer = styled.div`
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CentralContainer = styled.div`
    width: 80%;
    height:  100%;
    display: flex;
    flex-direction: column;
`

export const DotWrapper = styled.div`
    width: 100%;
    height: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
        width: 20%;
        height: 90%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`

export const Dot = styled.div`
    width: 20%;
    height: 10%;
    background-color: white;
    opacity: 50%;
    &.black {
        opacity: 100%;
        height: 20%;
    }
`

export const TopContainer = styled.div`
    width: 100%;
    height: 80%;
    > p {
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 30px;
        font-family: NotoSansTC;
        text-align: center;
        color: white;
    }
    > div {
        height: 15%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`
export const YearSelect = styled.select`
    width: 20%;
    height: 60%;
    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid white;
    border-radius: 10px;
    color: #FFFFFF;
    font-family: Bebas;
    font-size: 24px;
    > option {
        text-align: center;
        font-size: 22px;
        color: #000000;
    }
`

export const NextButton = styled.div`
    width: 40%;
    height: 10%;
    box-sizing: border-box;
    background-image: url(${NextLogo});
    background-size: contain;
    background-repeat: no-repeat;
    transition: .1s;
    opacity: 50%;
    &:hover {
        opacity: 100%;
        transform: scale(1.03, 1.03);
    }
`
export const PrevButton = styled.div`
    width: 40%;
    height: 10%;
    box-sizing: border-box;
    background-image: url(${PrevLogo});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 50%;
    transition: .1s;
    &:hover {
        opacity: 100%;
        transform: scale(1.03, 1.03);
    }
`

export const ButtonWrapper = styled.div`
    transition: 2s;
    width: 100%;
    height: 22%;
    text-decoration: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const GalleryWrapper = styled.div`
    width: 100%;
    height: 20%;
    background-color: green;
    box-sizing: border-box;
`

export const MediaButton = styled.a`
    width: 16%;
    height: 40%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #304C4D;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 0;
    transition: .3s;
    text-decoration: none;
    background-color: #4F9994;
    &:hover {
        background-color: #304C4D;
        transform: scale(1.03, 1.03);
        box-shadow: 3px 3px 0.5px 0.5px #000000;
        > p { color: #F1F1F2; }
    }
    > p {
        text-align: center;
        letter-spacing: 1px;
        padding-top: .1rem;
        width: 55%;
        height: 51%;
        font-size: 28px;
        color: #FFFFFF;
        font-family: 'Bebas';
        margin: 0 0 0 0;
    }
`

export const SocialIcon = styled.div`
    &.CAECE {
    background-image: url(${CAELogo});
    }
    &.website {
        background-image: url(${WebsiteLogo});
    }
    &.instagram {
        background-image: url(${InstagramLogo});
    }
    &.facebook {
        background-image: url(${FacebookLogo});
    }
    // &.discord {
    //     background-image: url(${DiscordLogo});
    // }
    // &.youtube {
    //     background-image: url(${YoutubeLogo});
    // }
    // &.twitter {
    //     background-image: url(${TwitterLogo});
    // }
    // &.telegram {
    //     background-image: url(${TelegramLogo});
    // }
    // &.line {
    //     background-image: url(${LineLogo});
    // }
    background-size: contain;
    background-repeat: no-repeat;
    width: 30%;
    height: 50%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
`

export const MintButtonContainer = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MintButton = styled.div`
    width: 20%;
    height: 70%;
    box-sizing: border-box;
    border-radius: 10px;
    border: .5px solid white;
    background-color: #A0D7D5;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    > p {
        text-align: center;
        font-size: 36px;
        font-family: 'Bebas';
        color: #304C4D;
        letter-spacing: 4px;
    }
    
    &:hover {
        transform: scale(1.03, 1.03);
        box-shadow: 3px 3px 0.5px 0.5px #000000;
    }
`