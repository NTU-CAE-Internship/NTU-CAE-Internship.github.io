import React, {
    Fragment,
} from "react";
import {
    Wrapper,
    ContentWrapper,
    TitleWrapper,
    ChineseWrapper,
    EnglishWrapper,
} from './style';

import {
    ChineseDes,
    EnglishDes,
    Title
} from '../data/aboutpage';

const AboutPage = () => {


    return (
        <Fragment>
            <Wrapper>
                <ContentWrapper>
                    <TitleWrapper>
                        {Title}
                    </TitleWrapper>
                    <ChineseWrapper>
                        {ChineseDes}
                    </ChineseWrapper>
                    <EnglishWrapper>
                        {EnglishDes}
                    </EnglishWrapper>
                </ContentWrapper>
            </Wrapper>
        </Fragment>
    );
};

export default AboutPage;