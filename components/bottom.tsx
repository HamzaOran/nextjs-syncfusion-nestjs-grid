import Link from 'next/link';
import { Container } from './container';

export const Bottom = () => (
  <footer className=" border-t  border-white-a08  text-sm">
    <Container className=" py-[5.6rem] text-sm text-grey">
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm">
            &copy; 2024 <Link href="https://github.com/HamzaOran">OranCO</Link>{' '}
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </Container>
  </footer>
);
