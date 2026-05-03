export function SectionHeader({ number, title, subtitle, light = false }) {
  return (
    <div className="mb-14 md:mb-16">
      <p className="text-ember-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-5">
        <span className="text-ember-500/60">#</span> {number}
      </p>
      <h2
        className={`font-serif text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] ${
          light ? 'text-forge-900' : 'text-forge-50'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-sm md:text-base leading-relaxed ${
            light ? 'text-forge-600' : 'text-forge-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
