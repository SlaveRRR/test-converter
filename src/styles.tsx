import { Button as antdButton, Divider, Space as antdSpace, Typography } from "antd";
import { styled } from "styled-components";

const { Text, Title: antdTitle } = Typography;

const Title = styled(antdTitle)`
   &.ant-typography {
      color: var(--text-color-main);
   }
`;

const AccentText = styled(Text)`
   font-style: italic;
   color: var(--text-color-accent);
`;

const Button = styled(antdButton)`
   &.ant-btn.ant-btn-icon-only {
      width: 70px;
      @media (max-width: 500px) {
         margin-left: 70px;
      }
   }
`;

const Space = styled(antdSpace)`
   @media (max-width: 500px) {
      flex-direction: column;
   }
`;
export { Space, Divider, Text, AccentText, Title, Button };
