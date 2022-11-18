const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // // build 경로 설정
  // outputDir: "../src/main/resources/static",
  // //indexPath : index.html 파일이 생성될 위치
  // indexPath: "../static/index.html",
  // //SpringBoot 서버 접속 주소
  devServer: {
    proxy: "http://localhost:8081"
  },
  // devServer: {
  //   port: 8081,
  //   proxy: 'http://localhost:8080',
  //   disableHostCheck: true
  // },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
})
