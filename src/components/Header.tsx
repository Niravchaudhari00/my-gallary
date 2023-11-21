import GoBack from "./GoBack";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex items-center shadow-md px-5">
      <GoBack />
      <header className="text-center py-3 flex-1">
        <h1 className="text-2xl text-gray-400 hover:text-blue-500 transition-all duration-200">
          {title}
        </h1>
      </header>
    </div>
  );
};

export default Header;
