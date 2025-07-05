export function Progress({ value, className = "" }) {
  return (
    <div className={`w-full bg-gray-300 rounded-full h-4 overflow-hidden ${className}`}>
      <div
        className="bg-green-500 h-full transition-all duration-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
