import Image from "next/image";
import localFont from "next/font/local";
import Card from '../components/Card';
import styled from 'styled-components';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const HeroSection = styled.div`
    background-image: url('/path/to/your/image.jpg'); /* 배경 이미지 경로 */
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    padding: 20px;
`;

const Button = styled.button`
    background-color: #ff7f50; /* 버튼 색상 */
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;

    &:hover {
        background-color: #ff6347; /* 버튼 호버 색상 */
    }
`;

const Categories = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;

    & > div {
        margin: 0 10px;
        cursor: pointer;
        color: #555;
    }
`;

const FeaturedPosts = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
`;

export default function Home() {
  return (
    <div>
      <HeroSection>
        <h1>카드 뉴스: 최신 소식과 이야기</h1>
        <p>여행의 순간을 함께 나누며, 새로운 이야기를 찾아 떠나보세요.</p>
        <Button> Button </Button>
      </HeroSection>
      <Categories>
        <div>Nature</div>
        <div>Photography</div>
        <div>Relaxation</div>
        <div>Vacation</div>
        <div>Travel</div>
        <div>Adventure</div>
      </Categories>
      <h2>Featured Posts</h2>
      <FeaturedPosts>
        <Card title="The Road Ahead" content="The world is vast and beautiful." />
        <Card title="From Top Down" content="Once a year, go somewhere you've never been before." />
      </FeaturedPosts>
    </div>
  );
}
