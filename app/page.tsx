import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className='hero'>
        <h1 className='hero__title'>
          <Link href='/movies'>
            <button className='btn'>Movies List</button>
          </Link>
        </h1>
        <Image src='/images/halls.jpg' alt='halls' width={750} height={500} priority={true} />
      </div>
    </div>
  );
}
