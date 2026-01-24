import React from "react";
import { supabase } from "../../lib/supabase";

// Define the event type
type Event = {
  id: number;
  Opdrachtgever: string;
  Datum: string;
  Doelgroep: string;
};

export const dynamic = 'force-dynamic';

export default async function KalenderPage() {
  // Fetch data
  const { data: events, error } = await supabase
    .from("Vormingen")
    .select("*")
    .gte("Datum", new Date().toISOString())
    .order("Datum", { ascending: true });

  if (error) {
    console.error("Error fetching events:", error);
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <h1 className="text-4xl font-bold text-vives-teal mb-8">Kalender</h1>
           <p className="text-red-600">Er is een fout opgetreden bij het laden van de kalender.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-vives-teal mb-12 text-center">
          Kalender
        </h1>

        {(!events || events.length === 0) ? (
           <div className="text-center text-gray-600">
             <p className="text-xl">Er zijn momenteel geen geplande vormingen.</p>
           </div>
        ) : (
          <div className="space-y-6">
            {events.map((event: Event) => (
              <div
                key={event.id}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-vives-red shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-vives-teal mb-2">
                      {event.Opdrachtgever}
                    </h2>
                    <div className="flex items-center text-gray-600 mb-2">
                       <span className="font-semibold mr-2">Datum:</span>
                       {new Date(event.Datum).toLocaleDateString("nl-BE", {
                         weekday: 'long',
                         year: 'numeric',
                         month: 'long',
                         day: 'numeric'
                       })}
                    </div>
                  </div>

                  <div className="md:text-right">
                     <span className="inline-block bg-vives-teal/10 text-vives-teal px-4 py-2 rounded-full font-medium text-sm">
                       {event.Doelgroep}
                     </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
