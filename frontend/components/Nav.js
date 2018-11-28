import Link from 'next/link';

const Nav = () => (
    <div>
        <Link href="/sell">
            <a>Take me to Sell!</a>
        </Link>
        <Link href="/">
            <a>Take me home!</a>
        </Link>
    </div>
);

export default Nav;