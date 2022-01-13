import ShortenPipe from './shorten.pipe';

describe('shortenPipe', () => {
  it('should create the pipe', () => {
    const shortenPipe = new ShortenPipe();
    expect(shortenPipe).toBeTruthy();
  });

  it('should Shorten the text', () => {
    const shortenPipe = new ShortenPipe();
    expect(shortenPipe.transform('1234567890', 3)).toEqual('123...');
  });
});
