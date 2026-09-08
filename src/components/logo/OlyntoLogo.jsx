import React from 'react';

const LOGO_SRC = '/olynto1%20Logo.jpg';

export default function OlyntoLogo({ pieceRefs }) {
  const setPiece = (name) => (element) => {
    if (pieceRefs?.current && element) {
      pieceRefs.current[name] = element;
    }
  };

  return (
    <svg
      viewBox="0 0 640 640"
      className="olynto-logo-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Olynto LLP emblem"
      role="img"
    >
      <defs>
        {/* TOP-LEFT */}
        <clipPath id="olynto-tl">
          <path d="
            M 70 70
            L 320 70
            L 320 320
            C 270 270 215 215 160 160
            C 125 125 95 95 70 70
            Z
          " />
        </clipPath>

        {/* TOP-RIGHT */}
        <clipPath id="olynto-tr">
          <path d="
            M 570 70
            L 320 70
            L 320 320
            C 370 270 425 215 480 160
            C 515 125 545 95 570 70
            Z
          " />
        </clipPath>

        {/* BOTTOM-LEFT */}
        <clipPath id="olynto-bl">
          <path d="
            M 70 570
            L 320 570
            L 320 320
            C 270 370 215 425 160 480
            C 125 515 95 545 70 570
            Z
          " />
        </clipPath>

        {/* BOTTOM-RIGHT */}
        <clipPath id="olynto-br">
          <path d="
            M 570 570
            L 320 570
            L 320 320
            C 370 370 425 425 480 480
            C 515 515 545 545 570 570
            Z
          " />
        </clipPath>

        {/* CENTER */}
        <clipPath id="olynto-center">
          <circle
            cx="320"
            cy="320"
            r="125"
          />
        </clipPath>
      </defs>

      {/* TOP LEFT */}

      <g
        ref={setPiece('topLeft')}
        className="olynto-logo-piece olynto-logo-piece--top-left"
        clipPath="url(#olynto-tl)"
      >
        <image
          href={LOGO_SRC}
          x="0"
          y="0"
          width="640"
          height="640"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      {/* TOP RIGHT */}

      <g
        ref={setPiece('topRight')}
        className="olynto-logo-piece olynto-logo-piece--top-right"
        clipPath="url(#olynto-tr)"
      >
        <image
          href={LOGO_SRC}
          x="0"
          y="0"
          width="640"
          height="640"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      {/* BOTTOM LEFT */}

      <g
        ref={setPiece('bottomLeft')}
        className="olynto-logo-piece olynto-logo-piece--bottom-left"
        clipPath="url(#olynto-bl)"
      >
        <image
          href={LOGO_SRC}
          x="0"
          y="0"
          width="640"
          height="640"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      {/* BOTTOM RIGHT */}

      <g
        ref={setPiece('bottomRight')}
        className="olynto-logo-piece olynto-logo-piece--bottom-right"
        clipPath="url(#olynto-br)"
      >
        <image
          href={LOGO_SRC}
          x="0"
          y="0"
          width="640"
          height="640"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>

      {/* CENTER */}

      <g
        ref={setPiece('center')}
        className="olynto-logo-piece olynto-logo-piece--center"
        clipPath="url(#olynto-center)"
      >
        <image
          href={LOGO_SRC}
          x="0"
          y="0"
          width="640"
          height="640"
          preserveAspectRatio="xMidYMid meet"
        />
      </g>
    </svg>
  );
}