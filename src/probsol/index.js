import React, {
    Fragment, useState,
}
from "react";
import {
    Wrapper,
    AboutWrapper,
    HeaderContent,
    ContentWrapper,
    ChoiceWrapper,
    OptionWrapper,
    OptionSelect,
    Outcome,
    Choice
} from './style'
import { problemType } from "../data/probsol";

const ProbSol = () => {

    const [text, setText] = useState('');

    const [type, setType] = useState(problemType[0]);

    const handleChoiceClick = (item) => {
        setType(item);
        setText('');
    }

    const getProblemType = (items) => {
        return (items.map((item)=>(
            <Choice onClick={()=>handleChoiceClick(item)} value='submit' type="submit" key={item.answer}>{item.title}</Choice>
        )));
    };

    const getOptions = (items) => {
        const options = [];
        options.push(<option value="" className="visible" key="" defaultValue>請選擇問題</option>);
        for(let i=0;i<items.length;i++)
            options.push(<option className="visible" value={items[i].answer} key={items[i].answer}>{items[i].question}</option>)
        return options;
    };


    return (
        <Fragment>
            <Wrapper>
            <AboutWrapper>
                <HeaderContent>問題排解</HeaderContent>
                <ContentWrapper>
                    <ChoiceWrapper>
                        {getProblemType(problemType)}
                    </ChoiceWrapper>
                    <OptionWrapper>
                        <OptionSelect onChange={(e)=>setText(e.target.value)}>
                            {getOptions(type.QA)}
                        </OptionSelect>
                    </OptionWrapper>
                    <Outcome>{text}</Outcome>
                </ContentWrapper>          
            </AboutWrapper>
            </Wrapper>
        </Fragment>
    )
}

export default ProbSol;
