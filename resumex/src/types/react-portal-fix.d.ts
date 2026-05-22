// Fix ReactPortal type incompatibility with Next.js 15 JSX type checking
// Next.js 15's strict JSX checks fail because ReactPortal requires `children`
// but ReactElement (which is also part of ReactNode) doesn't have it.
// This override makes children optional in ReactPortal to allow composition.

import "react";

declare module "react" {
  interface ReactPortal {
    children?: ReactNode;
  }
}
