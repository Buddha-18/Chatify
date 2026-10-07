//How to make animated gradient border
function BorderAnimatedContainer({ children }) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden p-[1px]">
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#06b6d4_320deg,#67e8f9_340deg,#06b6d4_360deg)]" />

      <div className="relative w-full h-full rounded-2xl bg-slate-900 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default BorderAnimatedContainer;