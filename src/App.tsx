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
  "/static/cat-0.jpg",
  "/static/cat-1.jpg",
  "/static/cat-2.jpg",
  "/static/cat-3.jpg",
  "/static/cat-4.jpg",
  "/static/cat-5.jpg",
];

function App() {
  const [hokCount, setHokCount] = useState(0);
  const [ociPressed, setOciPressed] = useState(false);
  const ociButtonSize = hokCount * 15 + 15;
  const [source,setSource] = useState("/static/cat-0.jpg");


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
      <Favicon url="/static/favicon.png" />
      {ociPressed ? (
        <>
          <img
            alt="bears kissing"
            src="/static/cat-yes.jpg"
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
