const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            "@primary-color": "#00714b",
                            "@layout-sider-background": "#000",
                            "@layout-header-background": "#000",
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ]
};
