import {Col, Row} from "antd";
import Title from "antd/lib/typography/Title";
import {Line} from "react-chartjs-2";

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price)
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0097ff',
                borderColor: '#0099ff',
            },
        ],
    };

    const options = {
        scales: {
            yAxis: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
        radius: 0,
        borderWidth: 0.75
    };

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart </Title>
                <Col className="price-container">
                    <Title className="price-change" level={5}>Change: {coinHistory?.data?.change}%</Title>
                    <Title className="current-price" level={5}>Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
            <Line data={data} options={options}/>
        </>
    );
};

export default LineChart;