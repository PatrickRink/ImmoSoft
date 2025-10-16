import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function PropertyList() {
  const [properties, setProperties] = useState<any[]>([]);

  useEffect(() => {
    supabase.from("properties").select("*").then(({ data }) => setProperties(data || []));
  }, []);

  return (
    <div>
      <h2>Immobilien</h2>
      <ul>
        {properties.map(p => (
          <li key={p.id}>{p.name} – {p.address}</li>
        ))}
      </ul>
    </div>
  );
}

