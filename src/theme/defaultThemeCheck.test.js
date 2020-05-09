import useMediaQuery from '@material-ui/core/useMediaQuery';
import defaultThemeCheck from './defaultThemeCheck';
import modes from './modes';

jest.mock('@material-ui/core/useMediaQuery');

describe('defaultThemeCheck', () => {
  beforeEach(() => {
    useMediaQuery.mockClear();
  });

  it('will default to browser dark theme if the user has not overwritten it', () => {
    const siteSetting = false;
    useMediaQuery.mockImplementation(() => true);
    const mode = defaultThemeCheck(siteSetting);
    expect(mode).toBe(modes.dark);

    expect(useMediaQuery).toHaveBeenCalledTimes(1);
    expect(useMediaQuery.mock.calls[0][0]).toEqual('(prefers-color-scheme: dark)');
  });

  it('will default to browser light theme if the user has not overwritten it', () => {
    const siteSetting = false;
    useMediaQuery.mockImplementation(() => false);
    const mode = defaultThemeCheck(siteSetting);
    expect(mode).toBe(modes.light);
  });

  it('will ignore browser preference and use the dark theme setting from the page', () => {
    const siteSetting = modes.dark;
    useMediaQuery.mockImplementation(() => false);
    const mode = defaultThemeCheck(siteSetting);
    expect(mode).toBe(modes.dark);
  });

  it('will ignore browser preference and use the light theme setting from the page', () => {
    const siteSetting = modes.light;
    useMediaQuery.mockImplementation(() => true);
    const mode = defaultThemeCheck(siteSetting);
    expect(mode).toBe(modes.light);
  });

  it('will default to light if there is no browser preference and no page setting', () => {
    const siteSetting = false;
    useMediaQuery.mockImplementation(() => false);
    const mode = defaultThemeCheck(siteSetting);
    expect(mode).toBe(modes.light);
  });
});
