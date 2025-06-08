
export function Button({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <button className={`bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 ${className}`}>{children}</button>;
}
