import Title from "antd/lib/typography/Title";
import {Col, Row, Statistic} from "antd";
import {useGetCryptosQuery} from "../services/cryptoApi";
import millify from "millify";
import {Link} from "react-router-dom";
import {Cryptocurrencies, News} from "./index";
import Loader from "./Loader";

function Homepage() {

    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return <Loader/>

    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Top 10 Cryptocurrencies</Title>
                <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className="home-heading-container">
                <Title level={2} className="home-title">Latest Crypto News</Title>
                <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
            </div>
            <News simplified/>
        </>
    )
}

export default Homepage;