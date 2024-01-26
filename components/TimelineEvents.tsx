export default function Timeline() {
  return (
    <main className="flex w-full h-screen">
      <div className="flex-1 ">Hello</div>
      <div
        className="w-px h-full bg-repeat-y bg-center bg-white"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, black 50%, transparent 50%)",
          backgroundSize: "100% 4px",
        }}
      ></div>
      <div className="flex-1 ">Hello</div>
      <time className="text-white">12</time>
    </main>
  );
}
