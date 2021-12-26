import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

const LayoutLazy = lazy(
  () =>
    import(
      /* webpackChunkName: "LayoutLazy" */ "../01-lazyload/layout/LayoutLazy"
    )
);

type ReactElement = () => JSX.Element;

interface Route {
  path: string;
  to: string;
  Component: LazyExoticComponent<ReactElement> | ReactElement;
  name: string;
}

const routes: Route[] = [
  {
    path: "/layoutlazy/*",
    to: "/layoutlazy/",
    Component: LayoutLazy,
    name: "Layout-lazy",
  },
  {
    path: "nolazy",
    to: "/nolazy",
    Component: NoLazy,
    name: "No-lazy",
  },
];

export default routes;
