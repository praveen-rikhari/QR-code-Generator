import { useState } from "react"
import QRCode from "react-qr-code"

function App() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('');
  }
  return (
    <div>
      <h1>QR code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter value to genrate QR code"
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
    </div>
  )
}

export default App