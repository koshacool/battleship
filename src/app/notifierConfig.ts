import { NotifierOptions } from 'angular-notifier';

export const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 10
    },
    vertical: {
      position: 'top',
      distance: 55,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 2500,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 6
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 100,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 50,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 100,
      easing: 'ease'
    },
    overlap: 150
  }
};
