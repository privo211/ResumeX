// Fix JSX component type compatibility with Next.js 15
// Next.js 15 uses a stricter JSX element type check that requires
// component return types to include ReactNode | Promise<ReactNode>.
// This override patches the root JSXElementConstructor type.

import "react";

declare global {
  namespace JSX {
    type ElementType =
      | { (props: any): React.ReactNode }
      | { new (props: any): React.Component<any, any> }
      | keyof React.ReactHTML
      | keyof React.ReactSVG;
  }
}

// Also directly widen the function component return type
declare module "react" {
  type JSXElementConstructor<P> =
    | ((props: P, deprecatedLegacyContext?: any) => ReactNode | Promise<ReactNode>)
    | (new (props: P, deprecatedLegacyContext?: any) => Component<any, any>);
}
