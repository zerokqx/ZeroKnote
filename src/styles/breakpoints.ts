export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};

export const mediaQueries = {
  mobile: {},
  tablet: { "@media": `screen and (min-width: ${breakpoints.tablet}px)` },
  desktop: { "@media": `screen and (min-width: ${breakpoints.desktop}px)` },
};
