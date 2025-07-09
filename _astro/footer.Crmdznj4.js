/* empty css                       */
import {_ as c} from "./_plugin-vue_export-helper.DlAUqK2U.js";
import {c as s, d as t, i as h, F as i, j as a, o, t as C} from "./runtime-core.esm-bundler.DP4VN2E1.js";

const d = {
        data: function () {
            return {
                productLinks: [{slug: "/usecases", title: "Use cases"}, {
                    slug: "/playground",
                    title: "Playground"
                }, {slug: "/api", title: "API"}, {slug: "/pitch", title: "Pitch"}, {
                    slug: "/pricing",
                    title: "Pricing"
                }, {slug: "/wordpress", title: "Wordpress plugin"}],
                relatedLinks: [{slug: "/open-source", title: "Open Source"}, {
                    slug: "/articles",
                    title: "Articles"
                }, {slug: "/vs-logsnag", title: "VS Logsnag"}]
            }
        }, props: {posts: {}}, computed: {
            computedPosts: function () {
                return this.posts ? JSON.parse(JSON.stringify(this.posts)).slice(0, 4) : []
            }
        }, methods: {}
    }, p = {class: "c-footer"}, g = {class: "c-footer__inner"}, f = {class: "c-footer__mid"}, w = ["href"],
    v = {class: "c-footer__right"}, _ = ["href"], m = ["href"];

function L(l, r, H, k, V, u) {
    return o(), s("div", p, [t("div", g, [r[3] || (r[3] = h('<div class="c-footer__left"><a class="logo" href="/"><h1>Operational</h1></a><a data-astro-prefetch class="muted" href="/privacy">Privacy</a><a data-astro-prefetch class="muted" href="/terms">Terms</a><div class="c-footer__socials"><a href="https://github.com/operational-co/operational.co" rel="nofollow noopener noreferrer" target="_blank"><svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.95068C17.525 1.95068 22 6.42568 22 11.9507C21.9995 14.0459 21.3419 16.0883 20.1198 17.7902C18.8977 19.4922 17.1727 20.768 15.1875 21.4382C14.6875 21.5382 14.5 21.2257 14.5 20.9632C14.5 20.6257 14.5125 19.5507 14.5125 18.2132C14.5125 17.2757 14.2 16.6757 13.8375 16.3632C16.0625 16.1132 18.4 15.2632 18.4 11.4257C18.4 10.3257 18.0125 9.43818 17.375 8.73818C17.475 8.48818 17.825 7.46318 17.275 6.08818C17.275 6.08818 16.4375 5.81318 14.525 7.11318C13.725 6.88818 12.875 6.77568 12.025 6.77568C11.175 6.77568 10.325 6.88818 9.525 7.11318C7.6125 5.82568 6.775 6.08818 6.775 6.08818C6.225 7.46318 6.575 8.48818 6.675 8.73818C6.0375 9.43818 5.65 10.3382 5.65 11.4257C5.65 15.2507 7.975 16.1132 10.2 16.3632C9.9125 16.6132 9.65 17.0507 9.5625 17.7007C8.9875 17.9632 7.55 18.3882 6.65 16.8757C6.4625 16.5757 5.9 15.8382 5.1125 15.8507C4.275 15.8632 4.775 16.3257 5.125 16.5132C5.55 16.7507 6.0375 17.6382 6.15 17.9257C6.35 18.4882 7 19.5632 9.5125 19.1007C9.5125 19.9382 9.525 20.7257 9.525 20.9632C9.525 21.2257 9.3375 21.5257 8.8375 21.4382C6.8458 20.7752 5.11342 19.502 3.88611 17.799C2.65881 16.096 1.9989 14.0498 2 11.9507C2 6.42568 6.475 1.95068 12 1.95068Z" fill="currentColor"></path></svg></a></div></div>', 1)), t("div", f, [t("section", null, [r[0] || (r[0] = t("strong", null, " About the product ", -1)), t("ul", null, [(o(!0), s(i, null, a(l.productLinks, (e, n) => (o(), s("li", {key: n}, [t("a", {href: `${e.slug}`}, C(e.title), 9, w)]))), 128))])])]), t("div", v, [t("section", null, [r[1] || (r[1] = t("strong", null, " Related to the product ", -1)), t("ul", null, [(o(!0), s(i, null, a(l.relatedLinks, (e, n) => (o(), s("li", {key: n}, [t("a", {href: `${e.slug}`}, C(e.title), 9, _)]))), 128))])]), t("section", null, [r[2] || (r[2] = t("strong", null, " Useful articles for your SaaS ", -1)), t("ul", null, [(o(!0), s(i, null, a(u.computedPosts, e => (o(), s("li", {key: e.id}, [t("a", {
        "data-astro-prefetch": "",
        href: `/articles/${e.slug}`
    }, C(e.title), 9, m)]))), 128))])])])])])
}

const Z = c(d, [["render", L]]);
export {Z as default};
