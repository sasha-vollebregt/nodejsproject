describe('errorMessageFormatter', () => {
  it('should format the error message correctly when error body has msg property', () => {
    const error = { body: JSON.stringify({ msg: 'Invalid API key' }) };
    const formattedError = errorMessageFormatter(error);
    expect(formattedError.message).toBe('Invalid API key');
  });

  it('should return the original error if error body is empty or invalid', () => {
    const error = { status: 500, message: 'Internal Server Error' };
    const formattedError = errorMessageFormatter(error);
    expect(formattedError).toEqual(error);
  });
});