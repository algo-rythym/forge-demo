export function SectionHeader({ number, title, subtitle, light = false }) {
  return (
    <div className="mb-16">
      <p className="text-ember-400 text-sm font-medium tracking-widest uppercase mb-4">
        {number}
      </p>
      <h2
        className={`font-serif text-4xl md:text-5xl font-semibold tracking-tight ${
          light ? 'text-forge-900' : 'text-forge-50'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl ${
            light ? 'text-forge-600' : 'text-forge-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
