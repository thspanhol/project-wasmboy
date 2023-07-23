import { useRef } from "react";
import { WasmBoy } from "wasmboy";
import PR from "./assets/PR.gb";
import "./App.css";

const App = () => {
  const canvasRef = useRef();

  const setup = async () => {
    const wasmBoyOptions = {
      headless: false,
      useGbcWhenOptional: true,
      isAudioEnabled: true,
      frameSkip: 1,
      audioBatchProcessing: true,
      timersBatchProcessing: false,
      audioAccumulateSamples: true,
      graphicsBatchProcessing: false,
      graphicsDisableScanlineRendering: false,
      tileRendering: true,
      tileCaching: true,
      gameboyFPSCap: 30,
      updateGraphicsCallback: false,
      updateAudioCallback: false,
      saveStateCallback: false,
    };
    await WasmBoy.config(wasmBoyOptions, canvasRef.current);
    await WasmBoy.loadROM(PR);
    await WasmBoy.play();
  };

  return (
    <>
      <h1>PR - Gameboy</h1>
      <button onClick={setup}>Play</button>
      <canvas ref={canvasRef} className="game"></canvas>
    </>
  );
};

export default App;
