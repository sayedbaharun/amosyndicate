import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
  {
    variants: {
      variant: {
        default: 'gold-gradient text-refined-black hover-magnetic hover:shadow-luxury-lg',
        luxury: 'glass-refined grain-texture text-white border-gradient-gold hover-lift hover:shadow-emerald',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 hover-lift',
        outline:
          'border border-luxury-gold/30 glass-refined text-luxury-gold hover:bg-luxury-gold hover:text-refined-black hover-magnetic',
        secondary:
          'bg-emerald-teal/20 text-emerald-teal border border-emerald-teal/30 hover:bg-emerald-teal hover:text-white hover-lift',
        ghost: 'hover:glass-refined hover:text-luxury-gold transition-smooth',
        link: 'text-luxury-gold underline-offset-4 hover:underline hover:text-gold-darker transition-smooth',
        premium: 'midnight-gradient text-pearl-white hover-magnetic hover:shadow-midnight',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-8 text-base font-semibold',
        xl: 'h-14 rounded-xl px-10 text-lg font-semibold',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
