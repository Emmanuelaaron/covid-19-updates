import { AiOutlineSetting } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header d-flex justify-content-between align-item-center p-3">
    <div className="header-left d-flex align-items-center">
      <Link to="/">
        <IoIosArrowBack />
      </Link>
    </div>
    <div className="d-flex align-items-center justify-content-center">
      <h1>Covid19 Updates</h1>
    </div>
    <div>
      <FaMicrophone />
      <AiOutlineSetting className="ms-4" />
    </div>
  </header>
);

export default Header;
