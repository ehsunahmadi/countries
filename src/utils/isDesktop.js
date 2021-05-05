import { useWindowWidth } from "@react-hook/window-size";

const useIsDesktop = () => {
  const width = useWindowWidth({
    wait: 100,
  });
  if (width > 900) {
    return true;
  }
  return false;
};

export default useIsDesktop;
