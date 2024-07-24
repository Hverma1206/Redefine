document.getElementById("changeFontButton").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content.js']
        }).catch((error) => {
          console.error("Error executing script:", error);
        });
      }
    });
  });
  