const colorName = {
    white: "#FFFFFF",
    semiIron: "#D1D5DA1A",
    iron: "#D1D5DA4D",
    bombay: "#ADB0B54D",
    mercury: "#E5E5E5",
    gray: "#6E7E91",
    anakiwa: "#8CC2FF",
    perano: "#B9D5F4",
    dodgerBlue: "#2188FF",
    blumine: "#1F4E84",
    shipCove: "#6D93BE",
    blue: "#0366D6",
    parsley: "#14462033",
    doveGray: "#6C6C6C4D",
    mineShaft: "#252525",
    tundora: "#363636B8",
};

const common = {
    breakpoint: {
        smallMax: 640,
        mobileMax: 767,
        largeMax: 1024,
    },
}

export const themeLight = {
    ...common,
    colors: {
        title: colorName.mineShaft,
        content: colorName.gray,
        background: colorName.iron,
        redirectButton: {
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
        section: {
            title: colorName.mineShaft,
            content: colorName.gray,
            background: colorName.white,
            bullet: colorName.blue,
            borderHeader: colorName.iron,
        },
        listProduct: {
            background: colorName.white,
            title: colorName.blue,
            content: colorName.gray,
            border: colorName.bombay,
            link: colorName.blue,
            borderLink: colorName.perano,
        },
        error: {
            title: colorName.mineShaft,
            content: colorName.mineShaft,
        }
    },
};

export const themeDark = {
    ...common,
    colors: {
        title: colorName.white,
        content: colorName.white,
        background: colorName.mineShaft,
        redirectButton: {
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
        },
        section: {
            title: colorName.white,
            content: colorName.white,
            background: colorName.tundora,
            bullet: colorName.dodgerBlue,
            borderHeader: colorName.semiIron,
        },
        listProduct: {
            background: colorName.tundora,
            title: colorName.white,
            content: colorName.white,
            link: colorName.dodgerBlue,
            border: colorName.doveGray,
            borderLink: colorName.blumine,
        },
        error: {
            title: colorName.white,
            content: colorName.white,
        }
    },
};