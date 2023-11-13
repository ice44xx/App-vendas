import styled from 'styled-components/native';

interface ButtonStyledProps {
  marginTop?: number;
}

export const ButtonStyled = styled.TouchableOpacity<ButtonStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-top: ${(props: ButtonStyledProps) => (props.marginTop ? `${props.marginTop}px` : '0px')};
`;
