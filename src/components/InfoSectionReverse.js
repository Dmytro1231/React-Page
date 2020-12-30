import React from 'react';

import styled from 'styled-components';

import { Button } from './Button';

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.4;
    padding: 10rem 2rem;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? '1' : '2')};
    diplay: flex;
    justify-content: center;
    align-items: center;

    @media screen (max-width: 768px) {
        order: ${({reverse}) => (reverse ? '2' : '1')};
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width:768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const InfoSectionReverse = ({headingThree, paragraphFive, paragraphSix, buttonLabelThree, reverse,image4,alt}) => {
    return (
        <Section>
        <Container>
            <ColumnRight reverse={reverse}>
                <img src={image4} alt={alt} />
            </ColumnRight>
            <ColumnLeft>
                <h1>{headingThree}</h1>
                <p>{paragraphFive}</p>
                <p>{paragraphSix}</p>
                <Button to="/homes" primary="true">{buttonLabelThree}</Button>
            </ColumnLeft>
        </Container>
    </Section>
    )
}

export default InfoSectionReverse;
