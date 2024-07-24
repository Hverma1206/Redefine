document.getElementById("changeFontButton").addEventListener("click", () => {
    console.log("Button clicked");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("Tabs queried");
      if (tabs.length > 0) {
        const tab = tabs[0];
        if (tab.url && !tab.url.startsWith('chrome://')) {
          console.log("Executing script");
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content.js']
          }).catch((error) => {
            console.error("Error executing script:", error);
          });
        } else {
          console.error("Cannot execute script on a chrome:// URL");
        }
      } else {
        console.error("No active tabs found");
}
});
});