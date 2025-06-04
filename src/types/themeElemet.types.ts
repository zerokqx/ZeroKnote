

export type ThemeUnit<T = string> = {
    primary: T,
    accent: T,
    muted: T,
    secondary: T,

}

export type Statuses<T=string> = {
    error: T,
    warning:T,
    success: T,
}

export type Theme<T=string> = {
    bg:Pick<ThemeUnit<T>, "primary">
    border:ThemeUnit<T> & Statuses<T>
    button:ThemeUnit<T> & Statuses<T>
    text:ThemeUnit<T> & Statuses<T>
}
