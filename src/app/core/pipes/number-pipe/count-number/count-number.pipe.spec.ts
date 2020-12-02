import { CountNumberPipe } from './count-number.pipe';

describe('CountNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new CountNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
