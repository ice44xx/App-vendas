import React from 'react';
import { LabelStyled } from './label.styled';

interface Props {
  text: string;
  className?: string;
}

const Label: React.FC<Props> = ({ text, className }) => {
  return <LabelStyled className={className}>{text}</LabelStyled>;
};

export default Label;
