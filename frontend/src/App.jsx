import React, {useEffect, useState} from "react";

export default function App(){
  const [msg, setMsg] = useState("loading...");
  const apiBase = import.meta.env.VITE_API_BASE || "";

  useEffect(()=>{
    fetch(`${apiBase}/api/hello`).then(r=>r.text()).then(t=>setMsg(t)).catch(e=>setMsg("API not reachable"));
  },[]);

  return (
    <div style={{padding:24, fontFamily: 'Arial, sans-serif'}}>
      <h1>CreditAxis Frontend</h1>
      <p>Message from backend: <strong>{msg}</strong></p>
      <p>Set <code>VITE_API_BASE</code> environment variable in Vercel/Render to the backend base URL (no trailing slash).</p>
    </div>
  );
}
