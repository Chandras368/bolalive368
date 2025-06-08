
export function Badge({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <span className={`text-white text-xs font-bold px-2 py-1 rounded ${className}`}>{children}</span>;
}
