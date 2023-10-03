import logo from '../../../assets/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center mt-5 space-y-2'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-sm text-gray-500'>Journalism Without Fear or Favour</p>
            <p className="text-xl font-semibold text-gray-500">{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;