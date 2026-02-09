import type { CSSProperties } from 'react';

type LightConfig = {
  id: string;
  className: string;
  top: string;
  left: string;
  size: string;
  blur: string;
  floatX: string;
  floatY: string;
  duration: string;
  delay?: string;
};

const PRIMARY_LIGHTS: LightConfig[] = [
  {
    id: 'primary-1',
    className:
      'bg-[radial-gradient(circle,rgba(107,125,91,0.28)_0%,rgba(107,125,91,0.12)_45%,transparent_75%)]',
    top: '8vh',
    left: '12vw',
    size: '26rem',
    blur: '60px',
    floatX: '12vw',
    floatY: '-6vh',
    duration: '8s',
  },
  {
    id: 'primary-2',
    className:
      'bg-[radial-gradient(circle,rgba(107,125,91,0.28)_0%,rgba(107,125,91,0.12)_45%,transparent_75%)]',
    top: '42vh',
    left: '65vw',
    size: '24rem',
    blur: '55px',
    floatX: '-10vw',
    floatY: '7vh',
    duration: '32s',
    delay: '4s',
  },
  {
    id: 'primary-3',
    className:
      'bg-[radial-gradient(circle,rgba(107,125,91,0.28)_0%,rgba(107,125,91,0.12)_45%,transparent_75%)]',
    top: '68vh',
    left: '10vw',
    size: '22rem',
    blur: '58px',
    floatX: '9vw',
    floatY: '4vh',
    duration: '30s',
    delay: '2s',
  },
];

const ACCENT_LIGHTS: LightConfig[] = [
  {
    id: 'accent-1',
    className:
      'bg-[radial-gradient(circle,rgba(139,119,101,0.22)_0%,rgba(139,119,101,0.1)_45%,transparent_75%)]',
    top: '20vh',
    left: '58vw',
    size: '20rem',
    blur: '50px',
    floatX: '6vw',
    floatY: '5vh',
    duration: '12s',
  },
  {
    id: 'accent-2',
    className:
      'bg-[radial-gradient(circle,rgba(139,119,101,0.22)_0%,rgba(139,119,101,0.1)_45%,transparent_75%)]',
    top: '55vh',
    left: '32vw',
    size: '18rem',
    blur: '48px',
    floatX: '-8vw',
    floatY: '6vh',
    duration: '31s',
    delay: '6s',
  },
];

export function AnimatedBackground() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
      <div className='absolute inset-0 opacity-10'>
        <svg
          width='100%'
          height='100%'
          xmlns='http://www.w3.org/2000/svg'
          className='text-[#6B7D5B]'
        >
          <defs>
            <pattern
              id='grid'
              width='50'
              height='50'
              patternUnits='userSpaceOnUse'
            >
              <path
                d='M 50 0 L 0 0 0 50'
                fill='none'
                stroke='currentColor'
                strokeWidth='0.5'
              />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
      </div>

      {[...PRIMARY_LIGHTS, ...ACCENT_LIGHTS].map((light) => {
        const style: CSSProperties & {
          '--float-x'?: string;
          '--float-y'?: string;
        } = {
          top: light.top,
          left: light.left,
          width: light.size,
          height: light.size,
          filter: `blur(${light.blur})`,
          animationDuration: light.duration,
          animationDelay: light.delay ?? '0s',
          '--float-x': light.floatX,
          '--float-y': light.floatY,
        };

        return (
          <div
            key={light.id}
            className={`animated-light ${light.className}`}
            style={style}
          />
        );
      })}
    </div>
  );
}
