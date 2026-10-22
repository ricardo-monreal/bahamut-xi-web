// Bahamut XI mark: a crystal flanked by two dragon wings. Original artwork.
export default function BrandMark({ className = 'brand-mark', title }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role={title ? 'img' : undefined} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id="bxi-crystal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff3d6" />
          <stop offset="0.45" stopColor="#f5c46d" />
          <stop offset="1" stopColor="#c46f1e" />
        </linearGradient>
        <linearGradient id="bxi-wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#9aa4ff" />
          <stop offset="1" stopColor="#3b437d" />
        </linearGradient>
      </defs>
      {/* left wing */}
      <path d="M28 30 C20 18 10 14 2 14 C8 18 10 22 10 26 C6 26 4 28 3 31 C8 30 11 31 13 33 C9 35 8 38 8 41 C13 37 19 36 26 38 Z" fill="url(#bxi-wing)" />
      {/* right wing */}
      <path d="M36 30 C44 18 54 14 62 14 C56 18 54 22 54 26 C58 26 60 28 61 31 C56 30 53 31 51 33 C55 35 56 38 56 41 C51 37 45 36 38 38 Z" fill="url(#bxi-wing)" />
      {/* crystal */}
      <path d="M32 6 L41 30 L32 58 L23 30 Z" fill="url(#bxi-crystal)" />
      <path d="M32 6 L32 58 L23 30 Z" fill="#ffffff" opacity="0.22" />
    </svg>
  )
}
