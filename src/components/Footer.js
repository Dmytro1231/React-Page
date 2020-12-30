import React from 'react';

import styled from 'styled-components';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Section = styled.section`
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    width: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #252336;
`;
const Wrapper = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
`;

const SocialIcon = styled.i`
    color: orange;
    padding-top: 25px;
    padding-left: 15px;
`;

const ColumnLeft = styled.div`
    h1 {
    color: #fff;
    font-size: 65px;
    margin-bottom: 150px;
    span {
        display: block;
    }
    }
`;

const ColumnRight = styled.div`
    color: #fff;
    font-size: 18px;
`;

const NavbarItem = styled.nav`
    display: flex;
    flex-direction: row;
`;
const ColumnLeftNav = styled.div`
    h2 {
        padding-bottom: 15px;
    }
    li {
        padding-top: 12px;
        list-style-type: none;
       
        a {
            text-decoration: none;
            color: #fff;
        }
    }
`;
const ColumnRightNav = styled.div`
    padding-left: 35px;
    h2 {
        padding-bottom: 15px;
    }
    li {
        padding-top: 12px;
        list-style-type: none;
       
        a {
            text-decoration: none;
            color: #fff;
        }
    }
`;

const Footer = () => {
    return (
        <Section>
            <Container>
                <Wrapper>
                <ColumnLeft>
                    <h1>Let's find<span>your Dream Home</span></h1>
                    <SocialIcon>
                        <AiFillYoutube />
                        <AiFillInstagram />
                        <AiFillFacebook />
                        <AiFillLinkedin />
                    </SocialIcon>
                </ColumnLeft>
                <ColumnRight>
                <NavbarItem>
                    <ColumnLeftNav>
                    <h2>Contact us</h2>
                    <nav>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Question</a></li>
                        </ul>
                    </nav>
                    </ColumnLeftNav>
                    <ColumnRightNav>
                    <h2>Offices</h2>
                    <nav>
                        <ul>
                            <li><a href="#">Inited States</a></li>
                            <li><a href="#">Europe</a></li>
                            <li><a href="#">Ukraine</a></li>
                        </ul>
                    </nav>
                    </ColumnRightNav>
                </NavbarItem>
                </ColumnRight>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default Footer;
