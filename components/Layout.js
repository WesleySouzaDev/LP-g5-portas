import Image from 'next/image';
import PathImgLogo from '../public/logoNavbar.png';
import List from '../components/List';
import WhatsButton from '../components/whatsButton';
const Layout = ({ children }) => {
  return (
    <>
      <header className="grid grid-cols-12 fixed w-full pt-2 z-10 backdrop-blur-sm">
        <div className="w-full col-span-3 flex justify-start items-center">
          <Image src={PathImgLogo} alt="logo" width={95} height={95} />
        </div>

        <List />
        <div className="w-full col-span-3 flex items-center justify-center">
          <WhatsButton />
        </div>
      </header>
      <main className="h-screen relative">{children}</main>
    </>
  );
};

export default Layout;
