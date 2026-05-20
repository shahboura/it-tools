export { booleanToHumanReadable, isNotThrowing };

function isNotThrowing(cb: () => unknown): boolean {
  try {
    cb();
    return true;
  }
  catch (_e) {
    void _e;
    return false;
  }
}

function booleanToHumanReadable(value: boolean): string {
  return value ? 'Yes' : 'No';
}
