import logo from './logo.svg';
import './App.css';
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: "Unity/Build/newtest.loader.js",
    dataUrl: "Unity/Build/newtest.data",
    frameworkUrl: "Unity/Build/newtest.framework.js",
    codeUrl: "Unity/Build/newtest.wasm",
  });
  return (
    <React.Fragment>
      <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      <Unity unityProvider={unityProvider} style={{ width: "80%", margin: "auto"}}/>
    </React.Fragment>
  );
}

export default App;
