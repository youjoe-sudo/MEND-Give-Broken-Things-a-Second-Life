function App() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-emerald-400">
          MEND · SOCIAL IMPACT ANd معرفش اي بس المهم ان الوقت يعدي علشان كده مش هنخلص النهارده ومش كل شوية كده الوقت مش راضي يخلص
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Give things
          <span className="block text-emerald-400">
            a second life.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Connect broken things with people who can repair,
          reuse, and give them a new purpose.
        </p>

        <button
          className="mt-8 rounded-xl bg-emerald-400 px-6 py-3
                     font-semibold text-slate-950 transition
                     hover:bg-emerald-300"
          onClick={() => alert('Welcome to MEND!')}
        >
          Explore the mission →
        </button>
      </div>
    </main>
  )
}

export default App