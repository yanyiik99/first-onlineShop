module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        minus: "-2px",
        2: "2px",
        7: "7px",
        17: "17px",
        18: "18px",
        27: "27px",
        31: "31px",
        67: "67px",
        100: "100px",
        154: "154px",
        163: "163px",
        240: "240px",
        265: "265px",
        277: "277px",
        287.5: "287.5px",
        288: "288px",
        482: "482px",
        575: "575px",
        966: "966px",
        1150: "189h",
        "89%": "89%",
        "91%": "91%",
        "95%": "95%",
      },
      fontSize: {
        7: "7px",
        8: "8px",
        10: "10px",
        11: "11px",
        34: "34px",
        36: "36px",
      },
      textColor: {
        primary: "#3490dc",
        rating: "rgba(0, 0, 0, 0.42)",
      }, // End Text-Color
      fontFamily: {
        workSans: "'Work Sans', sans-serif",
      }, // End Font
      backgroundColor: (theme) => ({
        powder: "#B9D1D9",
        darkPowder: "#A0B6BD",
        graySeller: "#C5C5C5",
      }), // End Background Color
      dropShadow: {
        navShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }, // End Filter Drop Shadow
      boxShadow: {
        shadowNav: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        bestSeller: "0px 5px 5px rgba(0, 0, 0, 0.5)",
      },
      blur: {
        xs: "2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
