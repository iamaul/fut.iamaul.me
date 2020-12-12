import { theme, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
    ...theme,
    fonts: {
        ...theme.fonts
    },
    colors: {
        ...theme.colors
    }
});

export default customTheme;