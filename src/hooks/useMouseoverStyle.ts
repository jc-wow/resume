export const useMouseoverStyle = (isMouseover: boolean) => {
  const mouseoverStyle = {
    background: "hsla(0,0%,73.7%,.4)",
  };
  const mouseleaveStyle = {
    background: "#fff",
  };
  return isMouseover ? mouseoverStyle : mouseleaveStyle;
};
