import styled from 'styled-components/native';
import { colors } from '~/common';

interface LabelProps {
  fontSize?: string;
  lineHeight?: string;
  fontFamily?: string;
  fontWight?: string;
  color?: string;
}

export const Label = styled.Text<LabelProps>`
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-weight: ${({ fontWight }) => fontWight}px;

  color: ${({ color }) => (color ? `${colors[color]}` : colors['gray-800'])};
`;
