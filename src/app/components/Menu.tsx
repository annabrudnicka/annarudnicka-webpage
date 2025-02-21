const Menu = () => {
  return (
    <ul className="flex justify-end space-x-8 py-4">
      <li>
        <a
          href="#"
          className="block rounded-lg  py-2 font-medium hover:bg-gray-100 hover:text-gray-700"
        >
          Skills
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg py-2  font-medium hover:bg-gray-100 hover:text-gray-700"
        >
          Portfolio
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg py-2  font-medium hover:bg-gray-100 hover:text-gray-700"
        >
          Experience
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block rounded-lg  py-2  font-medium hover:bg-gray-100 hover:text-gray-700"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default Menu;
