const path = require("path");

module.exports = {
  // publicPath: "",
  runtimeCompiler: true,
  devServer: {
    port: 8080,
	open: true,
	overlay: {
		warnings: false,
		errors: true,
	},
	proxy: {
	  "/api": {
		target: process.env.VUE_APP_BASE_URL + "/api",
		changeOrigin: true, // 是否改变域名
		pathRewrite: {
		  // 路径重写
		  "/api": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
		}
	  }
	}
  },
  lintOnSave:false,
  configureWebpack: {
    resolve: {
      alias: {
        // If using the runtime only build
        vue$: "vue/dist/vue.runtime.esm.js" // 'vue/dist/vue.runtime.common.js' for webpack 1
        // Or if using full build of Vue (runtime + compiler)
        // vue$: 'vue/dist/vue.esm.js'      // 'vue/dist/vue.common.js' for webpack 1
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      },
      scss: {
        prependData: `@import "@/assets/sass/vendors/vue/vuetify/variables.scss";`
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
