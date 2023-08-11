import React,{
    Fragment,
    useState,
} from "react";

import { 
    annouceContent,
} from "../data/bulletinboard";

import {
    Wrapper,
    ContentWrapper,
    RecentAnnounceWrapper,
    NewAnnounceWrapper,
    RecentAnnounceTitle,
    RecentAnounce,
    RecentAnnounceDate,
    NewDate,
    NewContent,
    ButtonWrapper,
    NextButton,
    PrevButton,
} from './style';


const BulletionBoard = () => {

    const [count, setCount] = useState(0);

    const loadLimit = 6;

    const getContent = (item, flag, type) => {
        if(flag==true){
            return (
                <RecentAnounce className={type} key={item.date}>
                    <RecentAnnounceDate key={item.date}><p className={type}>{item.date}</p></RecentAnnounceDate>
                        <p>{item.text}</p>
                </RecentAnounce>
            );
        }
        else{
            return (<RecentAnounce></RecentAnounce>)
        }
    };

    const getAnnounceContent = (items) => {
        let ItemArray = [];
        for(let i=loadLimit*count;i<loadLimit*count+loadLimit;i++){
            const type = (i%2===0)? 'odd':'even';
            if(i>=items.length) 
                ItemArray.push(getContent(null,false,type))
            else
                ItemArray.push(getContent(items[i],true,type));
        }
        return ItemArray;
    }

    const handlePrevButtonClick = () =>{
        if(count!=0)
            setCount(count-1);
        
    }

    const handleNextButtonClick = () =>{
        if((count+1)*loadLimit<=annouceContent.length)
            setCount(count+1);
    }

    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <RecentAnnounceWrapper>
                        <RecentAnnounceTitle>
                            <div className="icon" />
                            <p>最新告 / News</p>
                        </RecentAnnounceTitle>
                            {getAnnounceContent(annouceContent)}
                        <ButtonWrapper>
                            <PrevButton onClick={handlePrevButtonClick} className={count==0? 'hidden':'visible'}>Prev</PrevButton>
                            <NextButton onClick={handleNextButtonClick} className={(count+1)*loadLimit>=annouceContent.length? 'hidden':'visible'}>Next</NextButton>
                        </ButtonWrapper>
                    </RecentAnnounceWrapper>
                    <NewAnnounceWrapper>
                        <div className="Container">
                            <NewDate><p></p></NewDate>
                            <NewContent><p></p></NewContent>
                        </div>
                    </NewAnnounceWrapper>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default BulletionBoard;