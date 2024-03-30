import { useState } from "react"
import QRCode from "react-qr-code"

function App() {
  return (
    <div>
      <h1>QR code Generator</h1>
      <div>
        <input type="text" />
        <button>
          Generate
        </button>
      </div>
      <div>
        generated QR
      </div>
    </div>
  )
}

export default App