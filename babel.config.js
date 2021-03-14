module.exports = () => {
  return {
    presets: ["@babel/preset-react"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~": "./src/",
          },
        },
      ],
    ],
  };
};
