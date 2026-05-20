export { createTrackerService, useTracker };

function createTrackerService() {
  return {
    trackEvent(_: { eventName: string }) {
      // tracker disabled — plausible-tracker removed
    },
  };
}

function useTracker() {
  const tracker = createTrackerService();

  return {
    tracker,
  };
}
