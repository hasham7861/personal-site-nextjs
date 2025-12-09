export default function Home() {
  return (
    <div className="ml-64 p-10 bg-background text-foreground min-h-screen">
      <div className="pt-2">
        <p className="text-[20px] font-medium mb-2">Long time, no C 👋</p>
        <h1 className="text-5xl font-bold mb-1">I'm Hasham Alam</h1>
        <p className="text-[30px] font-semibold mb-2">Software Engineer</p>
        <p className="text-[18px] font-medium">Knock Knock. Race Condition. Who's there?</p>
      </div>
      <div className="mt-15">
        <div className="flex justify-between">
          <p className="text-3xl font-bold">Recent Projects</p>
          <button className="ml-4 px-4 py-0 bg-gray-300 text-black rounded-md hover:bg-green-600 transition-colors">
            View All
          </button>
        </div>
      </div>

    </div>
  );
}
