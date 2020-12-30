import React from 'react';

import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward } from 'react-icons/io';


const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;
const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    h2 {
        padding-bottom: 120px;
        font-weight: bold;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }
    p {
        font-weight: bold;
    }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;


const ColumnLeft = styled.div`
    p {
        padding-top: 20px;
        padding-bottom: 10px;
    }
`;
const ColumnRight = styled.div`
    display: grid;
    margin-top: 65px;
    p {
        padding-top: 20px;
        padding-bottom: 10px;
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`;


const InfoSectionTwo = ({image1,alt,headingTwo,paragraphThree,buttonLabelTwo,image2,paragraphFour}) => {
    return (
        <Section>
            <Container>
                <h2>{headingTwo}</h2>
                <Wrapper>
                <ColumnLeft>
                    <img width="600px" src={image1} alt={alt} />
                    <p>{paragraphThree}</p>
                    <Button primary="true">
                        {buttonLabelTwo}
                        <Arrow />
                        </Button>
                </ColumnLeft>
                <ColumnRight>
                <img width="600px" src={image2} alt={alt} />
                    <p>{paragraphFour}</p>
                    <Button primary="true">
                        {buttonLabelTwo}
                        <Arrow />
                    </Button>
                </ColumnRight>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default InfoSectionTwo;
