import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={cn("bg-white rounded-lg shadow-md p-6", className)}>{children}</div>;
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h2 className={cn("text-2xl font-bold text-gray-900", className)}>{children}</h2>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={cn("text-gray-700", className)}>{children}</div>;
}
