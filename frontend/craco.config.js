/* craco.config.js */

const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1890ff",
              "@font-size-base": "15px",
              "@font-size-lg": "16px",
              "@font-size-sm": "14px",
              "@btn-font-weight": "500",
              "@card-radius": "8px",
              "@btn-text-shadow": "0 -1px 0 rgba(0, 0, 0, 0)",
              "@btn-primary-shadow": "0 2px 0 rgba(0, 0, 0, 0)",
              "@border-radius-base": "4px",
              "@select-border-color": "#fff",
              "@select-background": "#eff3f6",
              "@table-padding-horizontal": "50px",
              "@table-header-bg": "#eff3f6",
              "@table-border-radius-base": "8px",
              "@height-base": "35px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
