
'use client';
import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const matchList = [
  { id: 1, title: "Barcelona vs Real Madrid", time: "20:00 WIB", status: "Live Now", thumbnail: "/thumb1.jpg" },
  { id: 2, title: "Liverpool vs Manchester City", time: "22:00 WIB", status: "Upcoming", thumbnail: "/thumb2.jpg" },
  { id: 3, title: "PSG vs Bayern Munich", time: "01:00 WIB", status: "Upcoming", thumbnail: "/thumb3.jpg" },
];

export default function Home() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">BolaLive360</h1>
        <p className="text-gray-600 mt-2">Streaming pertandingan bola terbaik secara langsung</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchList.map((match) => (
          <Card key={match.id}>
            <img src={match.thumbnail} alt={match.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">{match.title}</h2>
                <Badge className={match.status === "Live Now" ? "bg-red-500" : "bg-green-500"}>{match.status}</Badge>
              </div>
              <p className="text-gray-600 mb-4">Kickoff: {match.time}</p>
              <Link href={`/stream/${match.id}`}>
                <Button className="w-full">Tonton Live</Button>
              </Link>
            </div>
          </Card>
        ))}
      </section>
    </main>
  );
}
