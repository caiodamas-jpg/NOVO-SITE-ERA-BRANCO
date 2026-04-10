interface ProgressBarProps {
  currentStep: 1 | 2
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
          style={currentStep >= 1 ? { backgroundColor: "#2b363d", color: "#ffffff" } : { backgroundColor: "#3f3f46", color: "#a1a1aa" }}
        >
          1
        </div>
        <span className={`text-xs font-medium ${currentStep >= 1 ? "text-gray-900" : "text-gray-500"}`}>
          Contato
        </span>
      </div>
      <div className="flex-1 h-px bg-gray-200" />
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
          style={currentStep >= 2 ? { backgroundColor: "#2b363d", color: "#ffffff" } : { backgroundColor: "#3f3f46", color: "#a1a1aa" }}
        >
          2
        </div>
        <span className={`text-xs font-medium ${currentStep >= 2 ? "text-gray-900" : "text-gray-500"}`}>
          Qualificacao
        </span>
      </div>
    </div>
  )
}
