import styled from "styled-components";

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    //Essa seta serve para selecionar componentes por geração
    //apenas as Divs criadas apos isso serão afetadas, já suas filhas não terão
    //essas configurações
    > div {
        width: 50%;
    }

    h1 {
        color: #1e255e;
        font-size:56px;
        font-weight:bold;    
    }

    h6 {
        font-size: 16px;
        color: rgba(30,37,94,0.7);
        font-weight:normal;
        padding-right: 150px;
        margin-top: 20px;
    }
`

export const TextBox = styled.div`
    margin-left: 7%;
`

export const TextBoxAboutMe = styled.div`
    margin-left: 7%;
    margin-top: 20px;
`

export const ColumnImage = styled.div`
    text-align:right;
    position: relative;
    
    img {
        display: block;
        margin: auto;
        width: 65%;
        border-radius:35px;
        box-shadow: 5px 5px 1px rgba(30,37,94,0.1);
    }
`

export const AboutMeBox1 = styled.section`
    background-color:rgba(23,164,208,0.2);
    margin-top: 20px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
`

export const AboutMeBox2 = styled.section`
    background-color:red;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
`

export const AboutMeBox3 = styled.section`
    background-color:green;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
`