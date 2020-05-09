import modes from './modes';

describe('modes', () => {
  it('will have a definition for dark mode', () => {
    expect(modes.dark).toEqual('dark');
  });

  it('will have a definition for light mode', () => {
    expect(modes.light).toEqual('light');
  });

  it('will use light as the opposite of dark', () => {
    expect(modes.opposite(modes.dark)).toEqual(modes.light);
  });

  it('will use dark as the opposite of light', () => {
    expect(modes.opposite(modes.light)).toEqual(modes.dark);
  });
});
