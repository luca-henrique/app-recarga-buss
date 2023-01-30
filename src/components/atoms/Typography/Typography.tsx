import React from 'react';

import {Typography as TypographyType} from '../../../common';
import {Label} from './style';

interface TypographyProps {
  variant?: string;
  color?: string;
  children?: any;
}

export const Typography = ({variant, color, children}: TypographyProps) => {
  const style = TypographyType[variant ? variant : 'h1'];

  return (
    <Label {...style} color={color}>
      {children}
    </Label>
  );
};
