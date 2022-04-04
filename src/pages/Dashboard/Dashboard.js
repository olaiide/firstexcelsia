import React, { useEffect, useState, useRef } from "react";
import { css } from "@emotion/react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PulseLoader from "react-spinners/PulseLoader";
import {
  Container,
  Header,
  TopPost,
  Wrapper,
  TopCard,
  Trending,
  TrendingWrapper,
} from "./DashboardElement";
import api from "../../api/api";
import Logo from "../../assets/Logo.svg";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Up from "../../assets/Up.svg";

const override = css`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-color: #343a40;
`;
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsToShow, setPostsToShow] = useState([])
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    loopWithSlice(10, postsPerPage)
  }, [])
 const postsPerPage = 20;
 let arrayForHoldingPosts = [];
 const ref = useRef(postsPerPage);

 const loopWithSlice = (start, end) => {
    const slicedPosts = data.slice(start, end)
    arrayForHoldingPosts = arrayForHoldingPosts.concat(slicedPosts)
    setPostsToShow(arrayForHoldingPosts)
  }

  const handleShowMorePosts = () => {
    loopWithSlice(ref.current, ref.current + postsPerPage)
    ref.current += postsPerPage
  }
  const getProducts = async () => {
    setLoading(true);
    const request = await api.get("/products");
    console.log(request.data[0].price);
    setData(request.data);
    setLoading(false);
  };
  if (loading)
    return (
      <div className='sweet-loading'>
        <PulseLoader
          color={"#343A40"}
          loading={true}
          css={override}
          size={15}
        />
      </div>
    );
  else {
    return (
      <Container>
        <Header>
          <div className='header__wrapper'>
            <div className='left__content'>
              <img src={Logo} alt='' />
            </div>
            <div className='right__content'>
              <h3>Hi email</h3>
              <div>
                <Button width={"small"} children={"Log out"} height={"45px"} />
              </div>
            </div>
          </div>
        </Header>
        <Wrapper>
          <TopPost>
            <div className='top__'>
              <img src={Up} alt='arrow up' width='25px' />
              <span>Top Post</span>
            </div>
            <TopCard>
                
            <Card />
             {/* <Card />
             <Card />
             <Card />
              <Card /> */}
            </TopCard>
          </TopPost>
          <Trending>
            <div className='top__'>
              <img src={Up} alt='arrow up' width='25px' />
              <span>Trending</span>
            </div>
            <TrendingWrapper>
              {data &&
                data.map((item) => (
                  <>
                    <Card
                      text={item.description}
                      image={item.metaImageUrl}
                      key={item.id}
                    />
                  </>
                ))}
                
            </TrendingWrapper>
            <button onClick={handleShowMorePosts}>load more</button>
          </Trending>
        </Wrapper>
      </Container>
    );
  }
};

export default Dashboard;
