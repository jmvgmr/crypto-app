import {Avatar, Button, Menu, Typography} from "antd";
import {Link} from "react-router-dom";

import icon from '../images/logo.png'
import {BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined} from "@ant-design/icons";
import {useEffect, useState} from "react";

function Navbar() {
    const [activeMenu, setactiveMenu] = useState(true);
    const [screenSize, setscreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setscreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setactiveMenu(false);
        } else {
            setactiveMenu(true);
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size={64}/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">
                        {process.env.REACT_APP_NAME}
                    </Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setactiveMenu(!activeMenu)}>
                    <MenuOutlined/>
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    );
}

export default Navbar