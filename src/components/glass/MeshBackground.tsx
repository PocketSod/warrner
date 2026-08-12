export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gl-bg" aria-hidden="true">
      <div
        className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #A9D8F5 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9BEF0 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-[-15%] left-1/4 h-[600px] w-[600px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #F3C9DE 0%, transparent 70%)" }}
      />
    </div>
  );
}
