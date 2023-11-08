function TeamAssetSkeleton() {
  return (
    <div className="flex flex-col w-full h-60 max-w-6xl p-4 gap-5 items-center bg-white rounded-xl">
      <div className="flex flex-row gap-2 w-full justify-center text-center">
        <div className="flex w-32 h-8 rounded-full bg-slate-500 animate-pulse" />
      </div>
      <div className="grid grid-cols-3 w-full gap-4 items-center justify-center">
        <div className="flex w-full h-8 rounded-full bg-slate-500 animate-pulse" />
        <div className="flex w-full h-8 rounded-full bg-slate-500 animate-pulse" />
        <div className="flex w-full h-8 rounded-full bg-slate-500 animate-pulse" />
      </div>
      <div className="flex w-full h-full rounded-2xl bg-slate-500 animate-pulse" />
    </div>
  )
}

export { TeamAssetSkeleton }