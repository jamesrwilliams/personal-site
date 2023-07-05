import { css } from 'styled-components';

export const textGradient = css`
  line-height: 1.2;
  background: var(--text-gradient);
  background-size: 100% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: HeroTextAnimator 45s var(--animation-timing) infinite;
  -moz-animation: HeroTextAnimator 45s var(--animation-timing) infinite;
  animation: HeroTextAnimator 45s var(--animation-timing) infinite;

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

const sizes = {
  md: '700px',
};

export const mediaQuery = {
  minMd: `(min-width: ${sizes.md})`,
  maxMd: `(max-width: ${sizes.md})`,
};
