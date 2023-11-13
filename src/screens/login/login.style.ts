import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  gap: 20px;
  padding: 0 10px;
  width: 100%;
  height: 100%;
  background-color: #101633;
`;
export const Formgroup = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
`;
export const ImageStyled = styled.Image`
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
