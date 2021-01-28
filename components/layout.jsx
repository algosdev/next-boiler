import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children, categories }) {
  const filteredCategories = categories?.categories?.sort(
    (a, b) => parseInt(a.order) - parseInt(b.order)
  );

  return (
    <div className='main_container' id='macbro_container'>
      <Header categories={filteredCategories} />
      <div className='header_margin'></div>
      {children}
      <Footer />
    </div>
  );
}
