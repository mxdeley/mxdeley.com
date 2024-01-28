import { createContext } from "react";

const HorizontalHeaderContext = createContext({
  isExpanded: false,
  setIsExpanded: () => {},
  showIcons: [false, false, false],
  setShowIcons: () => {},
});

export default HorizontalHeaderContext;
