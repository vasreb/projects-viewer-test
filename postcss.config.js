module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")({
      stage: 1,
      autoprefixer: { grid: true },
    }),
  ],
};
