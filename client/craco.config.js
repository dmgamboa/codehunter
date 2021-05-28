const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#08497E",
                            "@secondary-color": "#005526",
                            "@accent-color": "#88201C",
                            "@font-family": "gulim, sans-serif"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ]
};
