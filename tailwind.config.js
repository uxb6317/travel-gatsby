module.exports = {
  theme: {
    extend: {
      height: {
        "(screen-16)": "calc(100vh - 4rem)",
      },
      minHeight: {
        "(screen-16)": "calc(100vh - 4rem)",
      },
      colors: {
        "smoke-darkest": "rgba(0, 0, 0, 0.9)",
        "smoke-darker": "rgba(0, 0, 0, 0.75)",
        "smoke-dark": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-light": "rgba(0, 0, 0, 0.4)",
        "smoke-lighter": "rgba(0, 0, 0, 0.25)",
        "smoke-lightest": "rgba(0, 0, 0, 0.1)",
        "fog-darkest": "rgba(255, 255, 255, 0.9)",
        "fog-darker": "rgba(255, 255, 255, 0.75)",
        "fog-dark": "rgba(255, 255, 255, 0.6)",
        fog: "rgba(255, 255, 255, 0.5)",
        "fog-light": "rgba(255, 255, 255, 0.4)",
        "fog-lighter": "rgba(255, 255, 255, 0.25)",
        "fog-lightest": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  variants: {
    padding: ["responsive", "first", "last", "hover", "focus"],
    margin: ["responsive", "first", "last", "hover", "focus"],
  },
  plugins: [],
}
