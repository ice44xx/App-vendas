import styled from 'styled-components/native';

interface TextStyledProps {
  fontSize: number;
  color: string;
  margin: number;
}
export const TextStyled = styled.Text`
  font-size: ${(props: TextStyledProps) => (props.fontSize ? `${props.fontSize}px` : '20px')};
  color: ${(props: TextStyledProps) => (props.color ? `${props.color}` : 'white')};
  margin: ${(props: TextStyledProps) => (props.margin ? `${props.margin}px` : '0px')};
  font-family: PathwayGothicOne-Regular;
`;
