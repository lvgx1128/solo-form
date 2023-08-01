/// <reference types="react" />
import type { AbstractTooltipProps } from 'antd/es/tooltip';
interface TipsProps extends AbstractTooltipProps {
  text: string;
  icon?: string;
  iconClassName?: string;
}
export default function Tips({ text, ...restProps }: TipsProps): JSX.Element;
export {};
