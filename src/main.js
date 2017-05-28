if (navigator.serviceWorker) {
  const { serviceWorker } = navigator;

  const registerServiceWorker = () => {
    serviceWorker.register("/service-worker.js")
      .then(() => {
        console.log("Service worker registered."); // eslint-disable-line no-console
      })
      .catch(() => {
        console.warn("Service worker failed to register."); // eslint-disable-line no-console
      });
  };

  window.addEventListener("load", registerServiceWorker);
}
