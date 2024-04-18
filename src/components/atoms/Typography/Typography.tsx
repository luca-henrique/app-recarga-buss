import React from 'react';

import { typography as TypographyType } from '~/common';
import { Label } from './style';

interface TypographyProps {
  variant?: string;
  color?: string;
  children: any;
}

export const Typography = ({ variant, color, children }: TypographyProps) => {

  //@ts-ignore
  const style = TypographyType[variant ? variant : 'h1'];

  return (
    <Label color={color} {...style}>
      {children}
    </Label>
  );
};
