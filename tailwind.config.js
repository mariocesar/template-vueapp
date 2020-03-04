const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
        brand: colors.green["400"],
        "brand-dark": colors.green["500"],
        "gray-lighter": colors.gray["200"],
        "gray-dark": colors.gray["600"],
        "gray-darker": colors.gray["700"],
      },
    },
    customForms: (theme) => ({
      default: {
        "input, textarea, multiselect, select": {
          borderRadius: theme("borderRadius.sm"),
        },
        "input, textarea, multiselect": {
          color: theme("colors.gray.600"),
          borderColor: theme("colors.gray.200"),
          backgroundColor: theme("colors.gray.100"),
          "&:focus": {
            color: theme("colors.gray.800"),
            backgroundColor: theme("colors.white"),
          },
        },

        select: {
          backgroundColor: theme("colors.gray.100"),
        },
      },
    }),
  },
  variants: {},
  plugins: [],
};
