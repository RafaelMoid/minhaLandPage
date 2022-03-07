import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        width: 100%;
    }

    body {
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;

    }

    button{
        font-family: 'Poppins', sans-serif;
        background-color:transparent;
        border: none;
        outline: none;
        cursor:pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }

`

export default globalStyle;