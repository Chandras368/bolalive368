'use client';
import React from "react";
import Link from "next/link";

const matches = [
  { id: 1, title: "Barcelona vs Real Madrid", time: "20:00 WIB", status: "Live Now", thumbnail: "/thumb1.jpg" },
  { id: 2, title: "Liverpool vs Man City", time: "22:00 WIB", status: "Upcoming", thumbnail: "/thumb2.jpg" }
];

export default function Home() {
  return (
    <main>
      <h1>BolaLive360</h1>
      {matches.map((match) => (
        <div key={match.id}>
          <h2>{match.title}</h2>
          <p>{match.time} - {match.status}</p>
          <Link href={`/stream/${match.id}`}>Tonton Live</Link>
        </div>
      ))}
    </main>
  );
}