import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <h1>Footer</h1>
    </>
  );
};

export default Layout;
