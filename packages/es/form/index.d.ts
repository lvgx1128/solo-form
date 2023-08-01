/// <reference types="react" />
import './index.css';
interface IProp {
  watch?: Record<string, (val: any, key?: string) => any>;
  form: Record<string, any>;
  className?: string;
}
export default function SoloForm({
  form,
  watch,
  className,
}: IProp): JSX.Element;
export {};
