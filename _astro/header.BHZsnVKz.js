import {C as d} from "./constrain.3I05EwrX.js";
import {w as u} from "./runtime-dom.esm-bundler.DSJc0C89.js";/* empty css                       */
import {_ as h} from "./_plugin-vue_export-helper.DlAUqK2U.js";
import {c as s, d as e, a as p, w as f, h as r, r as m, o} from "./runtime-core.esm-bundler.DP4VN2E1.js";

const v = {
    components: {Constrain: d}, data: function () {
        return {menuActive: !1}
    }, props: {hidden: {}, url: {}}, computed: {
        route: function () {
            return this.url ? this.url.pathname : ""
        }
    }, methods: {
        onMenuToggle: function () {
            this.menuActive = !this.menuActive
        }
    }
}, g = {class: "c-header__inner"}, C = {class: "c-header__mobile"}, _ = {type: "button"}, b = {class: "c-header__menu"};

function w(n, t, l, A, M, a) {
    const i = m("Constrain");
    return o(), s("div", {class: r(["c-header", {hidden: l.hidden === !0}, {active: n.menuActive === !0}])}, [e("div", g, [p(i, null, {
        default: f(() => t[1] || (t[1] = [e("a", {
            class: "logo",
            href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + ""
        }, [e("h1", null, "Operational")], -1), e("a", {
            "data-astro-prefetch": "",
            class: "btn btn-transparent",
            href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + "docs/start-here"
        }, "Docs", -1), e("a", {
            class: "btn btn-transparent",
            href: "https://github.com/operational-co/operational.co",
            target: "_blank"
        }, "Github", -1)])), _: 1
    })]), e("div", C, [t[3] || (t[3] = e("a", {
        class: "logo",
        href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + ""
    }, [e("h1", null, "Operational")], -1)), e("button", _, [(o(), s("svg", {
        onClick: t[0] || (t[0] = u((...c) => a.onMenuToggle && a.onMenuToggle(...c), ["prevent"])),
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, t[2] || (t[2] = [e("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M2 7C2 6.44772 2.44772 6 3 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H3C2.44772 8 2 7.55228 2 7ZM2 17C2 16.4477 2.44772 16 3 16H21C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17Z",
        fill: "currentColor"
    }, null, -1)])))])]), e("div", b, [t[4] || (t[4] = e("a", {
        href: "https://github.com/operational-co/operational.co",
        target: "_blank"
    }, "Github", -1)), e("a", {
        "data-astro-prefetch": "",
        class: r([{active: a.route.includes("/articles")}]),
        href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + "articles"
    }, " Articles ", 2), e("a", {
        "data-astro-prefetch": "",
        class: r([{active: a.route.includes("/pitch")}]),
        href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + "pitch"
    }, " Pitch ", 2), e("a", {
        "data-astro-prefetch": "",
        class: r([{active: a.route.includes("/usecases")}]),
        href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + "usecases"
    }, " Usecases ", 2), e("a", {
        "data-astro-prefetch": "",
        class: r([{active: a.route.includes("/playground")}]),
        href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + "playground"
    }, " Playground ", 2), e("a", {
        "data-astro-prefetch": "",
        class: r([{active: a.route.includes("/docs/start-here")}]),
        href: (_SiteOneUrlDepth > 0 ? "../".repeat(_SiteOneUrlDepth) : "./") + "docs/start-here"
    }, " API ", 2)])], 2)
}

const O = h(v, [["render", w]]);
export {O as default};
