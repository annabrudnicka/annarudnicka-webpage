const Menu = () => {
  return (
    <ul className="flex justify-end py-4 space-x-9">
      <li className="hover:text-gray-500">
        <a href="#">Skills</a>
      </li>

      <li className="hover:text-gray-500">
        <a href="#">Portfolio</a>
      </li>

      <li className="hover:text-gray-500">
        <a href="#">Experience</a>
      </li>

      <li className="hover:text-gray-500">
        <a href="#">Contact</a>
      </li>
    </ul>
  );
};

export default Menu;
