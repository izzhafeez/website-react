require("babel-register")({
    presets: ["es2015", "react"],
    ignore: /\.css$/
  });

require.extensions['.css'] = () => {};
require.extensions['.png'] = () => {};

const router = require('./src2/router').default;
const Sitemap = require('react-router-sitemap').default;

function generateSitemap() {
return (
    new Sitemap(router)
        .build("https://izzhafeez.com")
        .save("./sitemap.xml")
);
}

generateSitemap();