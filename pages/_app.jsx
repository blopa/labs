import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import PropTypes from 'prop-types';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Utils
import createEmotionCache from '../utility/createEmotionCache';

// Themes
import lightThemeOptions from '../styles/themes/light';

// Styles
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(lightThemeOptions);

const propTypes = {
    Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    pageProps: PropTypes.object,
    emotionCache: PropTypes.object,
};

function MySimpleApp({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

MySimpleApp.propTypes = propTypes;

export default MySimpleApp;
