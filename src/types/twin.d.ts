import 'twin.macro';
import { css as cssImport } from 'styled-components';

declare module 'twin.macro' {
  const tw: typeof cssImport;
  export default tw;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultTheme {}
}
