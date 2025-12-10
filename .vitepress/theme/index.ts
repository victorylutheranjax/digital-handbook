// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./custom.css";
import mediumZoom from "medium-zoom";
import Icon from "../components/Icon.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router }) {
    app.component("Icon", Icon);

    if (typeof window === "undefined") return;

    const initZoom = () => {
      mediumZoom(".vp-doc img:not(.no-zoom)", {
        background: "rgba(0, 0, 0, 0.8)",
        margin: 24,
      });
    };

    let zoomTimer: number | undefined;

    router.onAfterRouteChange = () => {
      clearTimeout(zoomTimer);
      zoomTimer = window.setTimeout(initZoom, 50);
    };
  },
} satisfies Theme;
