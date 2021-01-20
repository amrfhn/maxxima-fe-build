const autoprefixer = require("autoprefixer");
const autoprefixerPlugin = autoprefixer({ grid: true });

if (process.env.NODE_ENV == "production") {
    module.exports = {
        plugins: [
            autoprefixerPlugin,
            require("cssnano")
        ]
    }
} else {
    module.exports = {
        plugins: [
            autoprefixerPlugin
        ]
    }
}