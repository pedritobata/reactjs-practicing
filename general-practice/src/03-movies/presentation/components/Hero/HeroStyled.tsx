import styled from 'styled-components';

export const HeroStyled = styled.header<{url: string}>`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 6%;
    height: 55vh;
    position: relative;

    transition: all 1s ease-in-out .1s;
`;
