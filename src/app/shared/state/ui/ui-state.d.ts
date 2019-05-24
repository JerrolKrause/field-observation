interface UIState {
  gridState: GridState | null;
  tabsActive: { [key: string]: number | null };
  toggles: { [key: string]: boolean | null };
}
