'use client';

import Link from 'next/link';
import { Logo } from './icons/logo';
import { Container } from './container';
import { Button } from './button';
import { HamburgerIcon } from './icons/hamburger';
import { useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const [hamburgerMenuIsOpen, setHeaderMenuIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center text-md" href="/">
          <Logo className="w-[1.8rem] h-[1.8rem] mr-4" /> Next
        </Link>

        <div
          className={classNames(
            'transition-[visibility] md:visible',
            hamburgerMenuIsOpen ? 'visible' : 'delay-500 invisible'
          )}
        >
          <nav
            className={classNames(
              'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none',
              hamburgerMenuIsOpen
                ? 'translate-x-0 opacity-100'
                : 'translate-x-[-100vw] opacity-0'
            )}
          >
            <ul
              className={classNames(
                'flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 ',
                'ease-in [&_a:hover]:text-grey  [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-md [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors',
                hamburgerMenuIsOpen && '[&_a]:translate-y-0'
              )}
            >
              <li>
                <Link href="#">Customers</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>

              <li className="md:hidden lg:block">
                <Link href="#">Company3</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Company2</Link>
              </li>
              <li className="md:hidden lg:block">
                <Link href="#">Company1</Link>
              </li>
              <li>
                <Link href="#">Company</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto text-sm h-full flex items-center">
          <Link className=" mr-6" href="#">
            Log in
          </Link>
          <Button href="#" variant="primary">
            Sign up
          </Button>
        </div>

        <button
          className="ml-6 md:hidden"
          onClick={() => setHeaderMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
};
