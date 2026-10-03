type LogoProps = {
  className?: string;
  gradientId: string;
  monochrome?: boolean;
};

function Logo({
  className = "",
  gradientId,
  monochrome = false,
}: LogoProps) {
  const stroke = monochrome ? "currentColor" : `url(#${gradientId})`;

  return (
    <svg
      aria-label="Plura logo"
      className={className}
      role="img"
      viewBox="0 0 160 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      {!monochrome && (
        <defs>
          <linearGradient
            id={gradientId}
            x1="30"
            x2="116"
            y1="132"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--color-brand-deep)" />
            <stop offset="0.48" stopColor="var(--color-brand-blue)" />
            <stop offset="1" stopColor="var(--color-brand-cyan)" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M43 133V57C43 33.8 59.2 17 81 17C91.9 17 101.7 21 110 31"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <path
        d="M116 59C115.2 80.6 99.3 96 79 96C58.7 96 43 80.4 43 60"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </svg>
  );
}

const toteImage =
  "https://images.unsplash.com/photo-1630381260512-e3fe55c11973?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200&h=1200";
const billboardImage =
  "https://images.unsplash.com/photo-1691480189419-b0c138c00c10?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1600&h=1200";

const colors = [
  { name: "Deep", value: "#3157E8", className: "bg-brand-deep" },
  { name: "Blue", value: "#278DF0", className: "bg-brand-blue" },
  { name: "Cyan", value: "#55D6F5", className: "bg-brand-cyan" },
  { name: "Canvas", value: "#F7F9FC", className: "bg-canvas text-ink" },
  { name: "Ink", value: "#11182A", className: "bg-ink" },
];

function Label({ children }: { children: string }) {
  return (
    <div className="absolute left-5 top-5 z-20 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-ink shadow-sm backdrop-blur-md">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-canvas text-ink">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2.5">
          <Logo className="w-8" gradientId="header-gradient" />
          <span className="text-xl font-extrabold tracking-[-0.04em]">plura</span>
        </div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
          Brand applications
        </p>
      </header>

      <section className="mx-auto w-full max-w-[1440px] px-5 pb-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div className="brand-grid absolute inset-0 opacity-60" />
          <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-brand-deep">
                The identity
              </p>
              <h1 className="text-5xl leading-[0.94] font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
                One mark.
                <br />
                <span className="gradient-text">Everywhere.</span>
              </h1>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <div className="flex aspect-square w-full max-w-[410px] items-center justify-center rounded-[32%] bg-canvas shadow-[0_28px_80px_-45px_rgba(49,87,232,0.65)]">
                <Logo
                  className="w-[64%] drop-shadow-[0_20px_20px_rgba(39,141,240,0.15)]"
                  gradientId="primary-gradient"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1440px] gap-5 px-5 pb-5 sm:px-8 md:grid-cols-2 lg:px-12">
        <article className="relative flex min-h-[680px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#e9edf4]">
          <Label>App icon</Label>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(85,214,245,0.3),transparent_43%)]" />
          <div className="relative flex flex-col items-center">
            <div className="flex h-64 w-64 rotate-[-3deg] items-center justify-center rounded-[4.5rem] bg-gradient-to-br from-brand-deep via-brand-blue to-brand-cyan shadow-[0_40px_70px_-24px_rgba(49,87,232,0.7)] sm:h-80 sm:w-80 sm:rounded-[5.5rem]">
              <Logo
                className="w-[62%] text-white"
                gradientId="app-icon-logo"
                monochrome
              />
            </div>
            <div className="mt-10 text-center">
              <p className="text-3xl font-extrabold tracking-[-0.05em]">plura</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-muted">
                App icon
              </p>
            </div>
          </div>
          <div className="absolute bottom-7 left-7 flex items-end gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.15rem] bg-gradient-to-br from-brand-deep via-brand-blue to-brand-cyan shadow-lg">
              <Logo
                className="w-10 text-white"
                gradientId="small-icon-logo"
                monochrome
              />
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-deep via-brand-blue to-brand-cyan shadow-md">
              <Logo
                className="w-7 text-white"
                gradientId="smallest-icon-logo"
                monochrome
              />
            </div>
          </div>
        </article>

        <article className="relative min-h-[680px] overflow-hidden rounded-[2rem] bg-ink">
          <Label>Tote</Label>
          <img
            alt="Person holding a white tote bag with the Plura logo"
            className="absolute inset-0 h-full w-full object-cover"
            src={toteImage}
          />
          <div className="absolute left-1/2 top-[59%] flex w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Logo
              className="w-full drop-shadow-sm"
              gradientId="tote-gradient"
            />
          </div>
          <p className="absolute bottom-6 right-7 text-[10px] font-semibold text-ink/50">
            Photo: Mediamodifier / Unsplash
          </p>
        </article>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 pb-5 sm:px-8 lg:px-12">
        <article className="relative aspect-[4/3] min-h-[560px] overflow-hidden rounded-[2rem] bg-ink md:aspect-[16/9]">
          <Label>Billboard</Label>
          <img
            alt="Plura identity displayed on a city billboard"
            className="absolute inset-0 h-full w-full object-cover"
            src={billboardImage}
          />
          <div className="absolute left-[28.1%] top-0 flex h-[50.8%] w-[41.7%] items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deep via-brand-blue to-brand-cyan">
            <div className="absolute inset-0 billboard-lines opacity-30" />
            <div className="relative flex items-center gap-[2vw] text-white">
              <Logo
                className="w-[8vw] min-w-16 max-w-32"
                gradientId="billboard-logo"
                monochrome
              />
              <span className="text-[clamp(2rem,5vw,5.5rem)] font-extrabold tracking-[-0.06em]">
                plura
              </span>
            </div>
          </div>
          <p className="absolute bottom-5 right-6 text-[10px] font-semibold text-white/70">
            Photo: personalgraphic.com / Unsplash
          </p>
        </article>
      </section>

      <section className="mx-auto grid w-full max-w-[1440px] gap-5 px-5 pb-5 sm:px-8 md:grid-cols-[1.35fr_0.65fr] lg:px-12">
        <article className="relative flex min-h-[430px] flex-col justify-between overflow-hidden rounded-[2rem] bg-brand-deep p-8 text-white sm:p-12">
          <Label>Campaign banner</Label>
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-cyan/70 blur-2xl" />
          <div className="absolute -bottom-32 left-[35%] h-80 w-80 rounded-full bg-brand-blue blur-2xl" />
          <div className="relative ml-auto flex items-center gap-3">
            <Logo
              className="w-10 text-white"
              gradientId="banner-logo"
              monochrome
            />
            <span className="text-2xl font-extrabold tracking-[-0.04em]">
              plura
            </span>
          </div>
          <div className="relative">
            <p className="max-w-2xl text-5xl leading-[0.98] font-semibold tracking-[-0.055em] sm:text-7xl">
              Ideas need
              <br />
              room to move.
            </p>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/75">
              A creative workspace for open thinking and forward motion.
            </p>
          </div>
        </article>

        <article className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-line bg-white p-7 pt-20">
          <Label>Color palette</Label>
          <div className="grid h-full grid-cols-2 gap-2">
            {colors.map((color, index) => (
              <div
                className={`${color.className} ${
                  index === 4 ? "col-span-2" : ""
                } flex min-h-24 flex-col justify-end rounded-2xl p-4 text-white`}
                key={color.name}
              >
                <span className="text-xs font-bold">{color.name}</span>
                <span className="mt-0.5 text-[10px] opacity-65">
                  {color.value}
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <footer className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2">
          <Logo className="w-7" gradientId="footer-gradient" />
          <span className="font-extrabold tracking-tight">plura</span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
          Identity in context
        </span>
      </footer>
    </main>
  );
}
