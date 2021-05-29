import styled from 'styled-components';

export const HeroStyled = styled.header<{url: string}>`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100% 50%;
    height: 55vh;
    position: relative;
`;
