import { APP_NAME } from "../config";
const NavBar = () => {
  return (
    <div className="fixed top-0 h-16 w-screen bg-purple-400">
      <span>{APP_NAME}</span>
      <i>b</i>
      <i>c</i>
      <i>d</i>
      <i>e</i>
    </div>
  );
};

export default NavBar;
