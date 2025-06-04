import {createThemeContract} from "@vanilla-extract/css";
import {Statuses, Theme, ThemeUnit} from "@/types/themeElemet.types.ts";




const nullThemeUnit:ThemeUnit<null> & Statuses<null> = {
    primary:null,
    secondary:null,
    accent:null,
    muted:null,
    warning:null,
    error:null,
    success:null
}

export const theme = createThemeContract<Theme<null>>({
    button: {
        ...nullThemeUnit
    },
    bg: {
        primary: null,
    },
    border: {
        ...nullThemeUnit
    },
    text: {
        ...nullThemeUnit
    }
})

