/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { FaBook, FaFileAlt, FaLink } from 'react-icons/fa';
import Link from 'next/link';

const LearnBlogPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 lg:p-0 flex justify-center items-center">
      <Head>
        <title>NitinEduHub - Learn Blog</title>
      </Head>
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to NitinEduHub </h1>
        <p className="text-lg text-gray-800 mb-8">
          NitinEduHub is committed to providing quality education resources to students in various subjects including Physics, Chemistry, Mathematics, and Computer Science.
          We offers a wide range of services to help students excel in their studies, including access to previous question papers, model papers, study notes, and informative blogs.
        </p>
        <h2 className="text-2xl font-bold mb-4">Subjects Offered:</h2>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="m-4 p-4 bg-gray-100 rounded-lg">
            <FaBook className="text-4xl mb-2 text-blue-500" />
            <h3 className="text-xl font-bold mb-2">Physics</h3>
            <p>Access previous question papers, model papers, and study notes for Physics.</p>
            <Link href="/physics-blog" className="text-blue-500 hover:underline block mt-2">
              Explore Physics Blog
            </Link>
            <Link href="/physics-question-papers" className="text-blue-500 hover:underline block mt-2">
              Access Physics Question Papers
            </Link>
          </div>
          <div className="m-4 p-4 bg-gray-100 rounded-lg">
            <FaBook className="text-4xl mb-2 text-green-500" />
            <h3 className="text-xl font-bold mb-2">Chemistry</h3>
            <p>Access previous question papers, model papers, and study notes for Chemistry.</p>
            <Link href="/chemistry-blog" className="text-green-500 hover:underline block mt-2">
              Explore Chemistry Blog
            </Link>
            <Link href="/chemistry-question-papers" className="text-green-500 hover:underline block mt-2">
              Access Chemistry Question Papers
            </Link>
          </div>
          <div className="m-4 p-4 bg-gray-100 rounded-lg">
            <FaBook className="text-4xl mb-2 text-red-500" />
            <h3 className="text-xl font-bold mb-2">Mathematics</h3>
            <p>Access previous question papers, model papers, and study notes for Mathematics.</p>
            <Link href="/maths-blog" className="text-red-500 hover:underline block mt-2">
              Explore Mathematics Blog
            </Link>
            <Link href="/maths-question-papers" className="text-red-500 hover:underline block mt-2">
              Access Mathematics Question Papers
            </Link>
          </div>
          <div className="m-4 p-4 bg-gray-100 rounded-lg">
            <FaBook className="text-4xl mb-2 text-purple-500" />
            <h3 className="text-xl font-bold mb-2">Computer Science</h3>
            <p>Access previous question papers, model papers, and study notes for Computer Science.</p>
            <Link href="/computer-blog" className="text-purple-500 hover:underline block mt-2">
              Explore Computer Science Blog
            </Link>
            <Link href="/computer-question-papers" className="text-purple-500 hover:underline block mt-2">
              Access Computer Science Question Papers
            </Link>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Additional Resources:</h2>
          <ul className="list-disc list-inside">
            <li><FaFileAlt className="inline-block mr-2" />Model Papers</li>
            <li><FaFileAlt className="inline-block mr-2" />Study Notes</li>
            <li><FaLink className="inline-block mr-2" />Useful Links</li>
          </ul>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About NitinEduHub:</h2>
          <p className="text-lg text-gray-800 mb-4">
            NitinEduHub is a leading online education platform dedicated to providing high-quality learning resources and support to students worldwide. Our mission is to empower students to achieve academic excellence and pursue their educational goals with confidence.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            We understand the challenges students face in their academic journey, and our team of experienced educators and subject matter experts are committed to providing personalized assistance and guidance to help students succeed.
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Whether you're preparing for exams, seeking additional study materials, or looking for expert advice on complex topics, NitinEduHub has you covered. Explore our wide range of resources, participate in interactive learning activities, and join our community of learners today!
          </p>
        </div>
        <div className="mt-8">
          <p className="text-lg">
            For more information and updates, follow our blog and stay connected with NitinEduHub!
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearnBlogPage;
