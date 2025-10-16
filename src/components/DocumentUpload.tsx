import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function DocumentUpload() {
  const [file, setFile] = useState<File | null>(null);

  const uploadFile = async () => {
    if (!file) return;
    const { data, error } = await supabase.storage
      .from("documents")
      .upload(`uploads/${file.name}`, file);
    if (error) alert(error.message);
    else alert("Upload erfolgreich!");
  };

  return (
    <div>
      <h2>📎 Dokument hochladen</h2>
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

