import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="mt-16">{children}</div>
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
