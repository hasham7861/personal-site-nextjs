import Image from "next/image";

export default function Home() {
  return (
    <div className="ml-64 p-8 bg-background text-foreground min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Site</h1>
      <p className="text-lg mb-8">
        This is a simple personal website built with Next.js and Tailwind CSS.
      </p>
    </div>
  );
}
