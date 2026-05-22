declare module "react-icons/lib/iconBase" {
  export interface IconBaseProps {
    size?: string | number;
    color?: string;
    title?: string;
    className?: string;
  }
  export type IconType = (props: IconBaseProps) => React.ReactNode | Promise<React.ReactNode>;
  export function IconBase(props: IconBaseProps & { children?: React.ReactNode }): JSX.Element;
}
