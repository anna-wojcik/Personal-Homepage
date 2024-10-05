const colorName = {
    white: "#FFFFFF",
    iron: "#D1D5DA4D",
    mercury: "#E5E5E5",
    gray: "#6E7E91",
    anakiwa: "#8CC2FF",
    dodgerBlue: "#2188FF",
    shipCove: "#6D93BE",
    blue: "#0366D6",
    parsley: "#14462033",
    mineShaft: "#252525",
};

const common = {
    breakpoint: {
        mobileMax: 767,
    },
}

export const themeLight = {
    ...common,
    colors: {
        title: colorName.mineShaft,
        content: colorName.gray,
        background: colorName.iron,
        buttonHireMe: {
            content: colorName.white,
            background: colorName.blue,
            hover: colorName.parsley,
            focus: colorName.anakiwa,
        },
        themeSwitch: {
            content: colorName.gray,
            background: colorName.mercury,
            border: colorName.gray,
            flickerBackground: colorName.gray,
        },
    },
};

export const themeDark = {
    ...common,
    colors: {
        title: colorName.white,
        content: colorName.white,
        background: colorName.mineShaft,
        buttonHireMe: {
            content: colorName.white,
            background: colorName.dodgerBlue,
            hover: colorName.parsley,
            focus: colorName.shipCove,
        },
        themeSwitch: {
            content: colorName.white,
            background: colorName.iron,
            border: colorName.white,
            flickerBackground: colorName.white,
        }
    },
};