import { cn } from "../../lib/utils"

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-lg bg-[var(--color-brand-border)]", className)}
      {...props}
    >
      <div
        aria-hidden
        className="skeleton-shimmer absolute inset-0 -translate-x-full animate-[shimmer_2.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-[rgba(243,244,241,0.07)] to-transparent"
      />
    </div>
  )
}

export { Skeleton }
