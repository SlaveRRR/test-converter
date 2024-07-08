import { Select as AntdSelect } from "antd";
import styled from "styled-components";

const { Option: antdOption } = AntdSelect;

const IconContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

const Option = styled(antdOption)`
   background-color: revert;
`;

export { Option, IconContainer, AntdSelect };
