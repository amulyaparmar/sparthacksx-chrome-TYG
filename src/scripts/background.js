import NotificationPopup from "./contentScripts/NotificationPopup";

chrome.action.onClicked.addListener((tab) => {
    // Send a message to content script to trigger the popup
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: triggerNotificationPopup
    });
  });
  
  function triggerNotificationPopup() {
    // This function is executed in the context of the content page
    const root = document.createElement("div");
    root.id = "crx-popup-top-right";
    document.body.appendChild(root);
  
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <NotificationPopup 
          title="Manual Trigger"
          description="This is a notification triggered manually from the Chrome extension."
        />
      </React.StrictMode>
    );
  }
  
  chrome.action.onClicked.addListener((tab) => {
    // Send a message to the content script to show the notification
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        chrome.runtime.sendMessage({ type: "SHOW_NOTIFICATION" });
      }
    });
  });
  