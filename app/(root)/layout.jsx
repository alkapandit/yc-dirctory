import Navbar from "../components/Navbar";

const fun = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};