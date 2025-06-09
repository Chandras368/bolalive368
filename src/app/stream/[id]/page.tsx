'use client';
import { useParams } from "next/navigation";

export default function StreamPage() {
  const { id } = useParams();
  return (
    <main>
      <h1>Streaming Match #{id}</h1>
      <video controls autoPlay width="640" height="360">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      </video>
    </main>
  );
}