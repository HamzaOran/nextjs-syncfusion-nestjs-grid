import Link from 'next/link';
import { Container } from './container';
import { Logo } from './icons/logo';
import { TwitterIcon } from './icons/twitter';
import { GithubIcon } from './icons/github';

const footerLinks = [
  {
    title: 'Lorem',
    links: [
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
    ],
  },
  {
    title: 'Lorem',
    links: [
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
    ],
  },
  {
    title: 'Lorem',
    links: [
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
    ],
  },
  {
    title: 'Lorem',
    links: [
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
      { title: 'Lorem', href: '#' },
    ],
  },
];
export const Footer = () => (
  <footer className="mt-12 border-t  border-white-a08 py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between lg:flex-row">
      <div>
        <div className="flex h-full flex-row justify-between lg:flex-col">
          <div className="flex items-center text-grey">
            <Logo className="mr-4 h-4 w-4" /> Next Framework
          </div>
          <div className="mt-auto flex space-x-4 text-grey">
            <TwitterIcon />
            <GithubIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </footer>
);
