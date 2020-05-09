const dark = 'dark';
const light = 'light';

const opposite = (mode) => (mode === dark ? light : dark);

export default { opposite, dark, light };
