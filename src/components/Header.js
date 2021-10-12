import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';

const Header = () => (
  <header className="header d-flex justify-content-between align-item-center p-3">
    <div className="header-left">
      <IoIosArrowBack />
    </div>
    <div className="d-flex align-items-center justify-content-center">
      <h4>Legit Art</h4>
    </div>
    <div>
      <FaMicrophone />
      <AiOutlineSetting className="ms-4" />
    </div>
  </header>
);

export default Header;
