export default function Homepage() {
  return (
    <section className="grid md:grid-cols-2 gap-8 container mt-16 h-screen">
      <div className="w-2/3 m-auto space-y-6 text-center md:text-left">
        <div>
          <p className="text-xl font-bold md:text-2xl">So, you want to travel to</p>
        </div>
        <div>
          <h1 className="text-7xl md:text-8xl text-center md:text-start">SPACE</h1>
        </div>
        <div>
          <p className="text-lg md:text-justify">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="m-auto">
        <button className="bg-white rounded-full px-16 py-20">
            <h2 className="text-xl text-black md:text-2xl">EXPLORE</h2>
        </button>
      </div>
    </section>
  );
}
