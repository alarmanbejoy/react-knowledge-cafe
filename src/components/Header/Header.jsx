import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx 8 border-b-2">
      <h1 className="text-4xl font-semibold">Knowledge cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
