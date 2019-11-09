module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"]
    // plugins: [
    //   [
    //     "babel-plugin-root-import",
    //     {
    //       rootPathPrefix: "~", // root 지시자를 @ 로 설정
    //       rootPathSuffix: path.resolve(__dirname) // 현재 폴더를 root 폴더로 설정
    //     }
    //   ]
    // ]
  };
};
