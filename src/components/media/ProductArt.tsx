import type { PlateTone } from "@/content/images";
import type { ProductArtKind } from "@/content/products";

/**
 * Illustrated merchandise concepts for the shop preview. These are drawings,
 * not product photographs: the pieces are not confirmed, so the artwork is
 * deliberately illustrative and always carries a "Concept" tag.
 */
const INK = "#0d0d0d";
const SEAM = "rgb(255 255 255 / 0.16)";
const CANVAS = "#f1ece1";
const CANVAS_SHADE = "#ddd6c6";

const art: Record<ProductArtKind, { tone: PlateTone; label: string; drawing: React.ReactNode }> = {
  cap: {
    tone: "studio",
    label: "Illustration of a black six-panel cap with a small FOLA wordmark",
    drawing: (
      <>
        <ellipse cx="196" cy="352" rx="150" ry="13" fill="rgb(10 10 10 / 0.16)" />
        {/* Brim */}
        <path
          d="M98 296 C64 300 30 316 24 336 C20 350 34 356 54 352 C122 338 196 330 262 316 C204 314 146 308 98 296 Z"
          fill="#1b1b1b"
        />
        {/* Crown */}
        <path d="M96 300 C92 214 146 158 214 158 C284 158 332 212 334 300 C262 316 170 314 96 300 Z" fill={INK} />
        {/* Panel seams */}
        <path d="M214 158 C170 196 150 250 150 308" stroke={SEAM} strokeWidth="1.5" fill="none" />
        <path d="M214 158 C232 204 240 256 240 313" stroke={SEAM} strokeWidth="1.5" fill="none" />
        <path d="M214 158 C272 190 300 244 304 306" stroke={SEAM} strokeWidth="1.5" fill="none" />
        <ellipse cx="214" cy="157" rx="9" ry="4" fill="#232323" />
        {/* Eyelets */}
        <circle cx="176" cy="212" r="2.2" fill={SEAM} />
        <circle cx="270" cy="216" r="2.2" fill={SEAM} />
        <text x="194" y="262" textAnchor="middle" className="wordmark" fontSize="19" fill="#fff">
          FOLA
        </text>
      </>
    ),
  },
  tee: {
    tone: "sand",
    label: "Illustration of a black heavyweight T-shirt with a FOLA wordmark on the chest",
    drawing: (
      <>
        <ellipse cx="200" cy="418" rx="130" ry="10" fill="rgb(10 10 10 / 0.16)" />
        <path
          d="M164 112 Q200 140 236 112 L300 128 L364 190 L324 240 L296 216 L296 404 L104 404 L104 216 L76 240 L36 190 L100 128 Z"
          fill={INK}
        />
        {/* Collar rib */}
        <path d="M164 112 Q200 140 236 112" stroke={SEAM} strokeWidth="1.5" fill="none" />
        <path d="M157 114 Q200 153 243 114" stroke={SEAM} strokeWidth="1.5" fill="none" />
        {/* Sleeve and hem stitching */}
        <path d="M104 216 L100 128" stroke={SEAM} strokeWidth="1" fill="none" />
        <path d="M296 216 L300 128" stroke={SEAM} strokeWidth="1" fill="none" />
        <path d="M44 198 L82 232" stroke={SEAM} strokeWidth="1" fill="none" />
        <path d="M356 198 L318 232" stroke={SEAM} strokeWidth="1" fill="none" />
        <path d="M104 392 L296 392" stroke={SEAM} strokeWidth="1" fill="none" />
        <text x="200" y="206" textAnchor="middle" className="wordmark" fontSize="22" fill="#fff">
          FOLA
        </text>
      </>
    ),
  },
  tote: {
    tone: "sea",
    label: "Illustration of a natural canvas tote bag with a FOLA wordmark",
    drawing: (
      <>
        <ellipse cx="200" cy="440" rx="118" ry="10" fill="rgb(10 10 10 / 0.22)" />
        {/* Handles */}
        <path d="M158 206 C158 112 242 112 242 206" stroke="#bdb5a3" strokeWidth="12" fill="none" />
        <path d="M150 232 C150 84 250 84 250 232" stroke={CANVAS_SHADE} strokeWidth="13" fill="none" />
        {/* Body */}
        <path d="M112 200 L288 200 L300 428 L100 428 Z" fill={CANVAS} />
        <path d="M150 232 L150 200 M250 232 L250 200" stroke={CANVAS_SHADE} strokeWidth="13" />
        <path d="M112 200 L288 200 L289 216 L111 216 Z" fill={CANVAS_SHADE} />
        <text x="200" y="336" textAnchor="middle" className="wordmark" fontSize="34" fill={INK}>
          FOLA
        </text>
      </>
    ),
  },
};

export function ProductArt({ kind }: { kind: ProductArtKind }) {
  const { tone, label, drawing } = art[kind];

  return (
    <div className="absolute inset-0 isolate overflow-hidden">
      <div className="plate" data-tone={tone} />
      <svg
        viewBox="0 0 400 500"
        role="img"
        aria-label={`${label}. Concept only.`}
        className="absolute inset-0 size-full transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.03]"
      >
        {drawing}
      </svg>
      <span className="label absolute left-3 top-3 bg-paper px-2 py-1 text-ink">Concept</span>
    </div>
  );
}
