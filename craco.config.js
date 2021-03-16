const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: "./",
                /* tsConfigPath should point to the file where "baseUrl" and "paths"
                are specified*/
                tsConfigPath: "./tsconfig.extend.json",
                debug: false
            }
        }
    ],
};
