import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:border-box;
    }
    :root{
        --text-color-main:#FFFF00;
        --text-color-accent:#FFA500;
    }
    body{
        background:#333333;
    }
   .ant-typography, .ant-typography.ant-typography-secondary{
        color:var(--text-color-main)
    }
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: calc(2560px + 1.875em);
        margin: 0 auto;
        width: 100%;
        padding-left: 0.9375em;
        padding-right: 0.9375em;
    }
`;
export default GlobalStyles;
