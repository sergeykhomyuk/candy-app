const captureException = (error: Error, details?: unknown): void => {
  // eslint-disable-next-line no-console
  console.error(error, details);
};

export default captureException;
