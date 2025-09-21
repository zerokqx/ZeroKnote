import { gradationColors } from '@utils/gradationColors.ts';

const PRIMARY_COLOR = '#1E1E1E';

export const dataTheme = {
  colors: {
    gray: gradationColors('#ffffff', '#1E1E1E'), // типичный тёмный градиент
    primary: gradationColors('white', PRIMARY_COLOR),
  },
  spacing: {
    xs: '5px',
    sm: '10px',
    md: '30px',
    lg: '35px',
    xl: '40px',
  },

  black: PRIMARY_COLOR,
  defaultRadius: 'xs',
  fontFamily: 'Roboto, Arial, system-ui, sans-serif',
  headings: {
    fontFamily: 'Roboto, Arial, system-ui, sans-serif',
    sizes: {
      h1: {
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '1.2',
      },
      h2: {
        fontSize: '28px',
        fontWeight: '600',
        lineHeight: '1.3',
      },
      h3: {
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '1.35',
      },
      h4: {
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '1.4',
      },
      h5: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '1.45',
      },
      h6: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '1.5',
      },
    },
  },
  primaryColor: 'primary',
  white: '#ffffff',
  radius: {
    xs: '8px',
    sm: '10px',
    md: '12px',
    lg: '14px',
    xl: '15px',
  },
};
