import { useState } from "react";

const App = () => {
    const [text, setText] = useState("");
    const [response, setResponse] = useState("");
    const getEmbedding = async () => {
        const response = await fetch("http://localhost:8000/embedding", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({text})
        })
        const data = await response.json();
        setResponse(data)
    }
  return (
    <div>
      <input onChange={e => setText(e.target.value)} />
      <button onClick={ getEmbedding }>Submit</button>
        <p>{response}</p>
    </div>
  )
}

export default App
