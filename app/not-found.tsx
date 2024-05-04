import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';

const Error404: React.FC = () => {
  return (
    <Layout>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <Image
            src="/404.svg"
            alt="404 Image"
            width={448}
            height={314}
          />
          <h1 className="text-3xl font-semibold my-4">Under Maintenance</h1>
          <p className="w-3/4 mx-auto my-4">
            The page that you are looking for is under maintenance and will be back soon.
          </p>
          <div className="flex justify-center">
            <Link href="/">Go Back</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error404;
