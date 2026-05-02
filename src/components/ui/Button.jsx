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
      'bg-ember-600 hover:bg-ember-500 text-white border-transparent',
    secondary:
      'bg-forge-800 hover:bg-forge-700 text-forge-50 border-transparent',
    outline:
      'border border-forge-700 hover:border-forge-500 text-forge-200 hover:text-forge-50 bg-transparent',
    ghost:
      'bg-transparent hover:bg-forge-800/50 text-forge-200 hover:text-forge-50 border-transparent',
    white:
      'bg-white hover:bg-forge-50 text-forge-900 border-forge-200 shadow-sm',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  }

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ember-500/50',
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
