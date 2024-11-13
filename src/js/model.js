export const state = {
  isMenuOpen: false,
};

export function toggleMenuState() {
  state.isMenuOpen = !state.isMenuOpen;
}
