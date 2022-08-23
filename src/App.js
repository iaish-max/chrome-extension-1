import logo from "./logo.svg";
import "./App.css";

function App() {
  const changeBackgroundColor = () => {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "red";
  };

  function test() {
    /* eslint-disable no-undef */
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        function: changeBackgroundColor,
      });
    });
  }
  return (
    <div className="App">
      <button onClick={test}>Send Alert</button>
    </div>
  );
}

export default App;
