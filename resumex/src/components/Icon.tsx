import { createElement, type JSX } from "react";

export function Icon({
  icon,
  size = 16,
  className,
}: {
  icon: (props: { size?: number; className?: string }) => JSX.Element;
  size?: number;
  className?: string;
}) {
  return createElement(icon, { size, className });
}
