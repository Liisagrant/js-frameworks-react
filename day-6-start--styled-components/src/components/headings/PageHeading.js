import styled from "styled-components";

const PageHeading = styled.h2`
  //color: #3c7a89;
  color: ${function (props) {
    return props.theme.primaryColour;
  }};

  color: ${(props) => props.theme.primaryColour};
`;

export default PageHeading;
