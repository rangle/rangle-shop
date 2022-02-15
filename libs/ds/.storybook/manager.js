import { addons } from '@storybook/addons';

import theme from './theme';

addons.setConfig({
  theme,
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  isToolshown: true,
})