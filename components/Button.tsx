import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={twMerge(
          `w-full
          rounded-full
            bg-green-500
            hover:bg-green-600
            text-black
            font-bold
            py-2
            px-4
            focus:outline-none
            focus:ring-2
            focus:ring-green-600
            focus:ring-opacity-50
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
                    `,
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
