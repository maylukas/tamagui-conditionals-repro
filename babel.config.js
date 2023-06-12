process.env.TAMAGUI_TARGET = "native";
process.env.TAMAGUI_ENABLE_DYNAMIC_LOAD = "1";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "transform-inline-environment-variables",
        {
          include: ["TAMAGUI_TARGET"],
        },
      ],
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./tamagui.config.ts",
          importsWhitelist: ["constants.js", "colors.js"],
          logTimings: true,
        },
      ],
    ],
  };
};
