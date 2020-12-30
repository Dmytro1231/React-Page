import React from 'react';

import styled from 'styled-components';



const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
`;

const Container = styled.div`
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #252336;
`;

const WrapperInfo = styled.div`
    background-color: #fff;
`;

const WrapperContent = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    h2 {
        padding-bottom: 20px;
    }

    p {
        padding-bottom: 20px;
    }

    img {
        position: absolute;
        right: 0;
        width: 640px;
        bottom: 10px;
    }
`;

const Button = styled.button`
    padding: 10px 25px;
    background-color: #bf7a26;
    color: black;
    font-size: 14px;
    font-weight: italic;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`;


const InteriorSection = ({image3, alt}) => {
    return (
        <Section>
            <Container>
                <WrapperInfo>
                    <WrapperContent>
                        <h2>Stunning Interior</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse maxime quidem voluptate tenetur architecto mollitia dolores fugit corrupti rerum sunt, error ad saepe quisquam provident sapiente fuga quod ipsam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, alias facilis incidunt dolorem placeat et cumque reiciendis architecto laudantium molestias quasi similique aliquam dicta vitae consequatur animi aliquid odit hic?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel accusantium blanditiis porro nulla, quas facilis expedita repellat impedit error illum maiores repellendus rem tempore voluptas laudantium ipsum modi.</p>
                        <Button>Learn More</Button>
                        <img height="500px" src={image3} alt={alt} />
                    </WrapperContent>
                </WrapperInfo>
            </Container>
        </Section>
    )
}

export default InteriorSection
