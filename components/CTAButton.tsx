import Link from 'next/link'

interface CTAButtonProps {
  href: string
  text: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  href,
  text,
  size = 'md',
  variant = 'primary',
  className = ''
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const variantClasses = {
    primary: 'bg-brand text-white hover:bg-brand-dark',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {text}
    </Link>
  )
}
