function Loader() {
  return (
    <div className="flex items-center justify-center gap-3 py-10">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-yellow-400/30 border-t-yellow-400" />
      <div className="text-sm text-white/70">Loading...</div>
    </div>
  );
}

export default Loader;