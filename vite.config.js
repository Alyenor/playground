import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';
import vitePluginImp from 'vite-plugin-imp';
import * as path from 'path';
import * as fs from 'fs';
import lessToJS from 'less-vars-to-js';
var resolve = require('path').resolve;
var themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'src/config/variables.less'), 'utf8'));
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        WindiCSS(),
        vitePluginImp({
            libList: [
                {
                    libName: "antd",
                    style: function (name) { return "antd/lib/".concat(name, "/style/index.less"); }
                },
            ]
        })
    ],
    resolve: {
        // 配置路径 别名
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src')
            },
        ]
    },
    css: {
        modules: {
            // 类名 前缀
            generateScopedName: 'vite_demo__[folder]__[local]___[hash:base64:5]'
        },
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true,
                // 重写 less 变量，定制样式
                modifyVars: themeVariables
            }
        }
    }
});
