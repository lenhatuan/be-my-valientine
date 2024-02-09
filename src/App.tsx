import { useState } from "react";
import "./App.css";

const phrases = [
  "hok",
  "hok baoh",
  "từ chối ",
  "năn nỉ á :< ",
  "thiệt áaaaaaaa",
  "mỹ nữ cảm thấy tổn thưn :(",
  "ok ko hỏi nữa",
  "có cái lìn mà hok hỏi ấyyyyy=)))))",
  "uk tôi mệt anh quá cơ, khổ lắm cơ >:(",
];

function App() {
  const [hokCount, setHokCount] = useState(0);
  const [ociPressed, setOciPressed] = useState(false);
  const ociButtonSize = hokCount * 20 + 16;

  function handleHokClick() {
    setHokCount(hokCount + 1);
  }
  function getHokButtonText() {
    return phrases[Math.min(hokCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {ociPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text">Yeyeeeeeeee</div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src="https://media1.tenor.com/m/bWs4Kitqmu0AAAAC/heartbeat-heart.gif"
          />

          <div>will diu be mai valungtung</div>
          <div>
            <button
              className="ociButton"
              style={{ fontSize: ociButtonSize }}
              onClick={() => setOciPressed(true)}
            >
              Oci
            </button>
            <button onClick={handleHokClick} className="hokButton">
              {getHokButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
