import { cn } from '../../lib/utils'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as: Component = 'button',
  ...props
}) {
  const variants = {
    primary:
      'bg-ember-500 hover:bg-ember-400 text-forge-950 border-transparent shadow-[0_0_20px_rgba(212,168,83,0.12)] hover:shadow-[0_0_28px_rgba(212,168,83,0.2)]',
    secondary:
      'bg-forge-800 hover:bg-forge-700 text-forge-50 border-transparent',
    outline:
      'border border-ember-500/30 hover:border-ember-500/60 text-ember-400 hover:text-ember-300 bg-transparent',
    ghost:
      'bg-transparent hover:bg-forge-800/50 text-forge-200 hover:text-forge-50 border-transparent',
    white:
      'bg-white hover:bg-forge-50 text-forge-900 border-forge-200 shadow-sm',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2',
  }

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ember-500/40',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
