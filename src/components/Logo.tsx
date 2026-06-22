import { useState } from 'react';

interface LogoProps {
  className?: string;
  style?: React.CSSProperties;
  height?: number;
  inverted?: boolean;
}

export default function Logo({ className, style, height = 52, inverted = false }: LogoProps) {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <img
        src="/logoHero.png"
        alt="Carl Fresh Produce Limited"
        height={height}
        className={className}
        style={{ height: `${height}px`, width: 'auto', ...style }}
        onError={() => setImgError(true)}
      />
    );
  }

  /* Text-based fallback */
  const greenColor = inverted ? '#fff' : '#1b5e20';
  const redColor = inverted ? '#ff9999' : '#c62828';
  const goldColor = '#c9a84c';

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', ...style }}>
      <svg
        width={height}
        height={height}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Carl Fresh logo"
      >
        <circle cx="30" cy="30" r="28" fill={greenColor} />
        <text x="30" y="38" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#fff" fontFamily="Georgia, serif">C</text>
        <circle cx="43" cy="17" r="5" fill={redColor} />
        <path d="M43 12 Q46 10 44 17" stroke={greenColor} strokeWidth="1.5" fill="none" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontSize: `${height * 0.32}px`, fontWeight: 700, color: greenColor, letterSpacing: '-0.02em' }}>
          Carl <span style={{ color: redColor }}>Fresh</span>
        </span>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: `${height * 0.14}px`, fontWeight: 600, color: goldColor, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1px' }}>
          Produce Limited
        </span>
      </div>
    </div>
  );
}
