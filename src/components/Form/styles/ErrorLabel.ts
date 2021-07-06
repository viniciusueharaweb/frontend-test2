import styled from "styled-components";

const ErrorLabel = styled.label`
display: inline-block;
position: absolute;
left: 0;
top: 67px;
& span {
    font-size: 0.8rem;
    color: red;
}
`;

export default ErrorLabel;
