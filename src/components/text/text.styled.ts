import styled from 'styled-components/native';

interface TextStyledProps {
  fontSize: number;
}
export const TextStyled = styled.Text`
  font-size: ${(props: TextStyledProps) => (props.fontSize ? `${props.fontSize}px` : '20px')};
  font-family: PathwayGothicOne-Regular;
`;
