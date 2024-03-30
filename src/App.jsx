import { useState } from "react";
import QRCode from "react-qr-code";
import "./App.css";

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter value to generate QR code"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={!input || input.trim() === ""}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div className="qr-code-container">
        <QRCode id="qr-code-value" value={qrCode} size={250} bgColor="#fff" />
      </div>
    </div>
  );
}

export default App;
