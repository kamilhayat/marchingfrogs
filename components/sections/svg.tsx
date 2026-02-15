'use client';

import React from 'react';

export const GradientBlobs = () => (
  <svg
    className='absolute inset-0 w-full h-full pointer-events-none opacity-40'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop
          offset='0%'
          style={{ stopColor: 'var(--primary)', stopOpacity: 0.15 }}
        />
        <stop
          offset='100%'
          style={{ stopColor: 'var(--accent)', stopOpacity: 0.15 }}
        />
      </linearGradient>
    </defs>
    <circle cx='20%' cy='30%' r='300' fill='url(#grad1)'>
      <animate
        attributeName='r'
        values='300;350;300'
        dur='8s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='cx'
        values='20%;25%;20%'
        dur='10s'
        repeatCount='indefinite'
      />
    </circle>
    <circle cx='80%' cy='70%' r='250' fill='url(#grad1)'>
      <animate
        attributeName='r'
        values='250;300;250'
        dur='7s'
        repeatCount='indefinite'
      />
      <animate
        attributeName='cy'
        values='70%;65%;70%'
        dur='9s'
        repeatCount='indefinite'
      />
    </circle>
  </svg>
);

export const GridPattern = () => (
  <svg
    className='absolute inset-0 w-full h-full opacity-10 pointer-events-none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <pattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'>
        <path
          d='M 40 0 L 0 0 0 40'
          fill='none'
          stroke='var(--primary)'
          strokeWidth='0.5'
        />
      </pattern>
    </defs>
    <rect width='100%' height='100%' fill='url(#grid)' />
  </svg>
);

export const GeometricShapes = () => (
  <svg
    className='absolute inset-0 w-full h-full pointer-events-none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <polygon
      points='200,100 300,200 200,300 100,200'
      fill='var(--accent)'
      opacity='0.1'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        from='0 200 200'
        to='360 200 200'
        dur='25s'
        repeatCount='indefinite'
      />
    </polygon>
    <rect
      x='85%'
      y='15%'
      width='120'
      height='120'
      fill='var(--primary)'
      opacity='0.1'
      rx='20'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        from='0 1400 200'
        to='360 1400 200'
        dur='20s'
        repeatCount='indefinite'
      />
    </rect>
  </svg>
);

export const WavyLines = () => (
  <svg
    className='absolute inset-0 w-full h-full pointer-events-none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0,200 Q400,100 800,200 T1600,200 T2400,200'
      stroke='var(--primary)'
      strokeWidth='1.5'
      fill='none'
      opacity='0.1'
    >
      <animate
        attributeName='d'
        values='M0,200 Q400,100 800,200 T1600,200 T2400,200; M0,200 Q400,300 800,200 T1600,200 T2400,200; M0,200 Q400,100 800,200 T1600,200 T2400,200'
        dur='10s'
        repeatCount='indefinite'
      />
    </path>
    <path
      d='M0,400 Q400,300 800,400 T1600,400 T2400,400'
      stroke='var(--accent)'
      strokeWidth='1.5'
      fill='none'
      opacity='0.1'
    >
      <animate
        attributeName='d'
        values='M0,400 Q400,300 800,400 T1600,400 T2400,400; M0,400 Q400,500 800,400 T1600,400 T2400,400; M0,400 Q400,300 800,400 T1600,400 T2400,400'
        dur='12s'
        repeatCount='indefinite'
      />
    </path>
  </svg>
);

export const RadialBurst = () => (
  <svg
    className='absolute inset-0 w-full h-full pointer-events-none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <radialGradient id='burst'>
        <stop offset='0%' stopColor='var(--primary)' stopOpacity='0.1' />
        <stop offset='100%' stopColor='var(--primary)' stopOpacity='0' />
      </radialGradient>
    </defs>
    <circle cx='50%' cy='50%' r='40%' fill='url(#burst)'>
      <animate
        attributeName='r'
        values='35%;45%;35%'
        dur='15s'
        repeatCount='indefinite'
      />
    </circle>
  </svg>
);

export const Particles = () => {
  const particles = React.useMemo(
    () =>
      [...Array(20)].map((_, i) => ({
        cx: `${Math.random() * 100}%`,
        cy: `${Math.random() * 100}%`,
        r: Math.random() * 1.5 + 0.5,
        dur: `${Math.random() * 20 + 20}s`,
        delay: `-${Math.random() * 20}s`,
      })),
    [],
  );

  return (
    <svg
      className='absolute inset-0 w-full h-full pointer-events-none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {particles.map((p, i) => (
        <circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill='var(--primary)'
          opacity='0.2'
        >
          <animate
            attributeName='cy'
            values='100%;-10%'
            dur={p.dur}
            begin={p.delay}
            repeatCount='indefinite'
          />
        </circle>
      ))}
    </svg>
  );
};

export const CircuitLines = () => (
  <svg
    className='absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0,100 H200 L250,150 V300 H400'
      stroke='var(--primary)'
      strokeWidth='2'
      fill='none'
    />
    <path
      d='M100,0 V100 L150,150 H300'
      stroke='var(--accent)'
      strokeWidth='2'
      fill='none'
    />
    <path
      d='M100%,10% H90% L85%,15% V30% H70%'
      stroke='var(--primary)'
      strokeWidth='2'
      fill='none'
    />
    <circle cx='200' cy='100' r='3' fill='var(--primary)' />
    <circle cx='300' cy='150' r='3' fill='var(--accent)' />
  </svg>
);

export const FloatingOrbs = () => (
  <svg
    className='absolute inset-0 w-full h-full pointer-events-none filter blur-[60px]'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='10%' cy='10%' r='150' fill='var(--primary)' opacity='0.08'>
      <animate
        attributeName='cx'
        values='10%;15%;10%'
        dur='20s'
        repeatCount='indefinite'
      />
    </circle>
    <circle cx='90%' cy='90%' r='200' fill='var(--accent)' opacity='0.08'>
      <animate
        attributeName='cy'
        values='90%;85%;90%'
        dur='25s'
        repeatCount='indefinite'
      />
    </circle>
  </svg>
);

export const SectionDivider = () => (
  <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180'>
    <svg
      className='relative block w-full h-[60px] md:h-[100px]'
      viewBox='0 0 1200 120'
      preserveAspectRatio='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,52.06,69.13,34.42,141.2,53.43,217.2,46.13,67.86-6.52,129.13-33.3,195.8-37.5,70.47-4.44,140.9,16.89,208,52.06V0Z'
        fill='var(--secondary)'
        opacity='0.2'
      ></path>
    </svg>
  </div>
);

export const DottedConstellation = () => {
  const dots = React.useMemo(
    () =>
      [...Array(30)].map((_, i) => ({
        cx: `${Math.random() * 100}%`,
        cy: `${Math.random() * 100}%`,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        dur: `${Math.random() * 5 + 3}s`,
      })),
    [],
  );

  return (
    <svg
      className='absolute inset-0 w-full h-full pointer-events-none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {dots.map((dot, i) => (
        <circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill='currentColor'
          opacity={dot.opacity}
        >
          <animate
            attributeName='opacity'
            values={`${dot.opacity};${dot.opacity * 2};${dot.opacity}`}
            dur={dot.dur}
            repeatCount='indefinite'
          />
        </circle>
      ))}
    </svg>
  );
};
