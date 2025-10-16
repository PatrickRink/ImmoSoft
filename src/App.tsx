import React from "react";
import PropertyList from "./components/PropertyList";
import TenantList from "./components/TenantList";
import DocumentUpload from "./components/DocumentUpload";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🏠 Immobilienverwaltung</h1>
      <PropertyList />
      <TenantList />
      <DocumentUpload />
    </div>
  );
}
