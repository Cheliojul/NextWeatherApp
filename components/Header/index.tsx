import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: NextPage = () => {
  const route = useRouter();
  const { t } = useTranslation();

  return (
    <nav className="bg-white py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-indigo-600">
            {t('common:headerTitle')}
          </a>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
          >
            <i className="fas fa-bars" />
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <Link href="/">
            <a className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 text-center">
              {t('common:home')}
            </a>
          </Link>
          <Link href="/about">
            <a className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600 text-center">
              {t('common:about')}
            </a>
          </Link>
          <ul className="flex w-40 p-2 lg:px-4 md:mx-2 text-gray-600 rounded">
            {route.locales?.map((locale) => (
              <li
                key={locale}
                className="rounded px-5 text-xl text-blue-500 border hover:text-gray-700 hover:bg-gray-200 transition-colors duration-300"
              >
                <Link href={route.asPath} locale={locale}>
                  <a>{locale.slice(0, 2).toUpperCase()}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
