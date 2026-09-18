import { Loader2 } from "lucide-react";

export default function LoadingSpinner({ text = "Loading Hand2Hand Mobiles..." }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-8" role="status" aria-live="polite">
      <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
      <span className="text-gray-600 font-medium text-sm">{text}</span>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
