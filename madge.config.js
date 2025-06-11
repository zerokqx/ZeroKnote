const path = require("path");

module.exports = {
  extensions: ["ts", "tsx"],
  tsConfig: path.join(__dirname, "tsconfig.json"),
  alias: {
    "@": path.join(__dirname, "src"),
    "@svg": path.join(__dirname, "src/assets/svg"), // если есть
  },
  
  warning: true,
};
