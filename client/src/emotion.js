// src/emotion.js
import { CacheProvider } from '@emotion/react'; // Update this line
import createCache from '@emotion/cache';

const cache = createCache({ key: 'mui-keyframes', prepend: true });

export default function EmotionProvider(props) {
  return <CacheProvider value={cache} {...props} />;
}
