module.exports = {
  title: "IPP",
  description:
    "Panduan Penulisan Akta di Kantor Notaris/PPAT Indra Pratama Putra, SH, MKn",
  base: "/kantor/",
  dest: "./docs",
  // serviceWorker: true,
  head: [
    ["link", { rel: "icon", href: `/logo.png` }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c"
      }
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png"
      }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }]
  ],
  // theme config
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "Akta", link: "/akta/" },
      { text: "External", link: "https://google.com" }
    ],
    sidebarDepth: 3,
    sidebar: {
      "/guide/": ["", "software", "printsetting"],
      "/akta/": ["", "awalakta", "komparisi", "pribadi"]
    }
  }
};
