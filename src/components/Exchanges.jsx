import {useGetCryptoExchangesQuery} from "../services/cryptoApi";
import {Avatar, Col, Collapse, Row} from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import Text from "antd/lib/typography/Text";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import Loader from "./Loader";

const Exchanges = () => {
    const {data, isFetching} = useGetCryptoExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    if (isFetching) return <Loader/>;

    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {exchangesList.map((exchange) => (
                    <Col span={24}>
                        <Collapse>
                            <CollapsePanel
                                key={exchange.id}
                                showArrow={false}
                                header={(
                                    <Row key={exchange.id}>
                                        <Col span={6}>
                                            <Text><strong>{exchange.rank}</strong></Text>
                                            <Avatar className="exchange-image" src={exchange.iconUrl}/>
                                            <Text><strong>{exchange.name}</strong></Text>
                                        </Col>
                                        <Col span={6}>${millify(exchange.volume)}</Col>
                                        <Col span={6}>${millify(exchange.numberOfMarkets)}</Col>
                                        <Col span={6}>${millify(exchange.marketShare)}</Col>
                                    </Row>
                                )}
                            >
                                {HTMLReactParser(exchange.description || '')}
                            </CollapsePanel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Exchanges;