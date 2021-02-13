import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

export default function Page404() {
    return <Title>Página 404</Title>;
}
