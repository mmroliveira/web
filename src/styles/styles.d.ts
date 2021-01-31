import 'styled-components';

import dark from './themes/dark';

export type Dark = typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends Dark {}
}
