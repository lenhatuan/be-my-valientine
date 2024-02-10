import { useState } from "react";
import "./App.css";
import Favicon from "react-favicon";


const phrases = [
  "No",
  "Are you sure?",
  "Pookie please",
  "Don't do this to me :(",
  "You're breaking my heart",
  "I'm gonna cry...",
  "Oàaaaaaaaaaaaaaaa",
];

const images = [
  "src/assets/cat-0.jpg",
  "src/assets/cat-1.jpg",
  "src/assets/cat-2.jpg",
  "src/assets/cat-3.jpg",
  "src/assets/cat-4.jpg",
  "src/assets/cat-5.jpg",
];

function App() {
  const [hokCount, setHokCount] = useState(0);
  const [ociPressed, setOciPressed] = useState(false);
  const ociButtonSize = hokCount * 15 + 15;
  const [source,setSource] = useState("src/assets/cat-0.jpg");


  function handleHokClick() {
    if(hokCount < 5) {
      setSource(images[hokCount+1]);
    }
    setHokCount(hokCount + 1);
    
  }
  function getHokButtonText() {
    return phrases[Math.min(hokCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      <Favicon url="src/assets/favicon.png" />
      {ociPressed ? (
        <>
          <img
            alt="bears kissing"
            src="src/assets/cat-yes.jpg"
            width="400px"
            height="400px"
          />
          <div style={{fontSize:45, color: 'pink'}}>{`Yayyyyyyyyy!!! <3`}</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src={source}
            width="300px"
            height="300px"
          />

          <div style={{color: "pink", fontSize: 40, paddingTop: 5, paddingBottom: 5 }}>Will you be my Valentine</div>
          <div>
            <button
              className="ociButton"
              style={{ fontSize: ociButtonSize }}
              onClick={() => setOciPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleHokClick} className="noButton" style={{ fontSize: 15 }}>
              {getHokButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
