import Header from './header/header';
import Footer from './footer/footer';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
export default function Layout({ children, categories }) {
  const filteredCategories = categories?.categories?.sort(
    (a, b) => parseInt(a.order) - parseInt(b.order)
  );
  const user = useSelector((state) => state.auth.user, shallowEqual);
  return (
    <div className='main_container' id='macbro_container'>
      <Header
        categories={filteredCategories}
        hasLogged={user?.id ? true : false}
      />
      <div className='header_margin'></div>
      {children}
      <Footer />
    </div>
  );
}
