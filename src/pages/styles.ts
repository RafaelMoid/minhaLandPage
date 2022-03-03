import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    //Essa seta serve para selecionar componentes por geração
    //apenas as Divs criadas apos isso serão afetadas, já suas filhas não terão
    //essas configurações
    > div {
        width: 50%;
    }
`