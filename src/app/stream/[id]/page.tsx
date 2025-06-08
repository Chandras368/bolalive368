
'use client';
import { useParams } from 'next/navigation';

export default function StreamPage() {
  const { id } = useParams();

  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-white text-3xl font-bold mb-4">Live Match #{id}</h1>
      <div className="aspect-video w-full max-w-5xl">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          autoPlay
          className="w-full h-full rounded-xl shadow-xl"
        />
      </div>
    </main>
  );
}
