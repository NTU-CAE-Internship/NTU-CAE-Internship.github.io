import React, {
    Fragment, 
    useState,
    Input
} from "react";

import {
    Wrapper,
    ContentWrapper,
    SearchBoxWrapper,
    SearchBox,
    TextArea,
    ResultWrapper,
    ResultCard,
    ModalCard,
} from './style';

import {
    ModalProvider,
} from 'styled-react-modal';

const VerifyPage = () => {

    const [show, setShow] = useState(false);

    return (
        <ModalProvider>
            <Wrapper>
                <ContentWrapper>
                    <div className="Container">
                    <SearchBoxWrapper>
                        <SearchBox />
                        <TextArea 
                            placeholder="請在此輸入錢包地址以查詢CAE官方所核發之相關證書(開發中)"
                        />                         
                    </SearchBoxWrapper>
                    <ResultWrapper>
                        <ResultCard
                            onClick={()=>{setShow(!show)}} 
                        />
                        <ResultCard
                            onClick={()=>{setShow(!show)}}
                        />
                    </ResultWrapper>
                    </div>
                </ContentWrapper>
            </Wrapper>
            <ModalCard
                isOpen={show}
                onClick={()=>{setShow(!show)}}
                onBackgroundClick={()=>{setShow(!show)}}
                onEscapeKeydown={()=>{setShow(!show)}}
                allowScroll={true}
            />
        </ModalProvider>
    )
}

export default VerifyPage;