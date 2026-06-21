type Props = {
  className?: string;
  tone?: "gold" | "ink" | "ivory";
};

export function MeloreWordmark({ className = "", tone = "gold" }: Props) {
  const fill =
    tone === "gold"
      ? "url(#mw-gold)"
      : tone === "ink"
      ? "#0B0B0F"
      : "#F5EFE3";

  return (
    <svg
      viewBox="0 0 220 56"
      className={className}
      role="img"
      aria-label="Melore"
    >
      <defs>
        <linearGradient id="mw-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C611F" />
          <stop offset="40%" stopColor="#E5C97E" />
          <stop offset="55%" stopColor="#FFF5D8" />
          <stop offset="70%" stopColor="#E5C97E" />
          <stop offset="100%" stopColor="#A8842F" />
        </linearGradient>
      </defs>
      {/* Crest mark */}
      <g transform="translate(8, 14)">
        <path
          d="M14 0 L20 8 L14 16 L8 8 Z"
          fill={fill}
          opacity="0.9"
        />
        <circle cx="14" cy="8" r="1.6" fill="#06060A" />
      </g>
      {/* Wordmark */}
      <text
        x="40"
        y="38"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="34"
        fontStyle="italic"
        fontWeight="500"
        letterSpacing="0.04em"
        fill={fill}
      >
        Melore
      </text>
    </svg>
  );
}
