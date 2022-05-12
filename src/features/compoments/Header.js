import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Divider, List, Dropdown, Menu, Space, Typography, Switch, Input } from 'antd';
import Icon, { MenuOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useThemeSwitcher } from "react-css-theme-switcher";

const Header = () => {

  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  if (status === "loading") {
    return null;
  }

  const menu = (
    <Menu
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          danger: true,
          label: 'a danger item',
        },
      ]}
    />
  );

  const SunSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );

  const MoonSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );

  const SunIcon = props => <Icon component={SunSvg} {...props} />;
  const MoonIcon = props => <Icon component={MoonSvg} {...props} />;


  return (
    <div>
      <Row className="mt-2 mx-4   " justify="center" wrap>
        <Col xs={{ span: 18, offset: 0 }} lg={{ span: 4, offset: 0 }}>
          <Link to={`/`} >
            <h1 className="text-xl font-bold" >Nguyễn Trường Vĩ</h1>
          </Link>


        </Col>
        <Col xs={{ span: 0, offset: 1 }} lg={{ span: 2, offset: 0 }}>
          <Link to={`/`} >
            <h2 className="mt-2 ml-2  " >Giới Thiệu</h2>
          </Link>


        </Col>
        <Col xs={{ span: 0, offset: 1 }} lg={{ span: 2, offset: 0 }}>
          <Link to={`/`} >
            <h2 className="mt-2 ml-2  " >Công Việc</h2>
          </Link>

        </Col>
        <Col xs={{ span: 3, offset: 0 }} lg={{ span: 1, offset: 5 }}>

          <div className="main fade-in mt-2">

            <Switch className="bg-gradient-to-r from-sky-500 to-indigo-500" 
              checkedChildren={<MoonIcon style={{ color: 'white', fontSize: '27px' }} />}
              unCheckedChildren={<SunIcon style={{ color: 'orange', fontSize: '27px' }} />}
              
              checked={isDarkMode}
              onChange={toggleTheme} />

          </div>
        </Col>
        <Col xs={{ span: 2, offset: 1 }} lg={{ span: 0, offset: 0 }}>

          {/* <Divider orientation="left" plain>
            <Button type="text">
              <MenuOutlined />
            </Button>
          </Divider> */}

          <Dropdown className="" overlay={menu}>
            <Button type="text">
              <MenuOutlined />
            </Button>

          </Dropdown>


        </Col>

      </Row>
    </div>
  )
}

export default Header