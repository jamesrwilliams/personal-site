import { css } from 'styled-components';

export const primaryBlue = '#021526';
export const secondaryBlue = '#021220';
export const accentPrimary = '#0ba7fd';
export const accentSecondary = '#01d8d1';

export const textGradient = css`
  line-height: 1.2;
  background: linear-gradient(-45deg, #0ba7fd, #01d8d1);
  background-size: 100% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  -webkit-animation: HeroTextAnimator 45s cubic-bezier(.645, .045, .355, 1) infinite;
  -moz-animation: HeroTextAnimator 45s cubic-bezier(.645, .045, .355, 1) infinite;
  animation: HeroTextAnimator 45s cubic-bezier(.645, .045, .355, 1) infinite;


  @-webkit-keyframes HeroTextAnimator {
    0% {
      background-position: 51% 0
    }
    50% {
      background-position: 50% 100%
    }
    100% {
      background-position: 51% 0
    }
  }
  @-moz-keyframes HeroTextAnimator {
    0% {
      background-position: 51% 0
    }
    50% {
      background-position: 50% 100%
    }
    100% {
      background-position: 51% 0
    }
  }
  @keyframes HeroTextAnimator {
    0% {
      background-position: 51% 0
    }
    50% {
      background-position: 50% 100%
    }
    100% {
      background-position: 51% 0
    }
  }
`;

export const mobileBreakpoint = '700px';

const sizes = {
  md: '700px',
};

export const mediaQuery = {
  minMd: `(min-width: ${sizes.md})`,
  maxMd: `(max-width: ${sizes.md})`,
};
