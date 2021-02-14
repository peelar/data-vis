import fs from 'fs';
import { NextPage } from 'next';
import Link from 'next/link';

type HomeProps = {
  lessons: string[] | null;
  error?: string;
};

const Home: NextPage<HomeProps> = ({ lessons }) => {
  return (
    <main>
      <h1>Lessons:</h1>
      <ul>
        {lessons?.map((lesson, index) => (
          <li key={`lesson-${index}`}>
            <Link href={`/lessons/${lesson}`}>{`Lesson: [${lesson}]`}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export async function getStaticProps() {
  try {
    const lessons = fs.readdirSync('pages/lessons');

    return {
      props: {
        lessons: lessons.map((lesson) => lesson.replace('.mdx', '')),
      },
    };
  } catch (error) {
    return {
      props: {
        lessons: null,
        error: error.message,
      },
    };
  }
}

export default Home;
