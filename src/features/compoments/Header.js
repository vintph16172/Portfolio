import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Divider, List, Dropdown, Menu, Space, Typography, Switch, Input } from 'antd';
import Icon, { MenuOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useThemeSwitcher } from "react-css-theme-switcher";
import { ButtonChageTheme } from './ButtonChageTheme';

const Header = () => {



  const menu = (
    <Menu
      items={[
        {
          label: (
            <Link to={`/info`} >
              <h2 className="mt-2 ml-2  " >Giới Thiệu</h2>
            </Link>
          ),
        },
        {
          label: (
            <Link to={`/work`} >
              <h2 className="mt-2 ml-2  " >Công Việc</h2>
            </Link>
          ),
          icon: <SmileOutlined />
        },


      ]}
    />
  );



  return (
    <div>
      <Row className=" mt-2 mx-4   " justify="center" wrap>
        <Col xs={{ span: 18, offset: 0 }} sm={{ span: 18, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 4, offset: 0 }}>
          <Link to={`/`} >
            <h1 className="text-xl font-bold" >Nguyễn Trường Vĩ</h1>
          </Link>


        </Col>
        <Col xs={{ span: 0, offset: 1 }} sm={{ span: 0, offset: 1 }} md={{ span: 3, offset: 0 }} lg={{ span: 2, offset: 0 }}>
          <Link to={`/`} >
            <h2 className="mt-2 ml-2  " >Giới Thiệu</h2>
          </Link>


        </Col>
        <Col xs={{ span: 0, offset: 1 }} sm={{ span: 0, offset: 1 }} md={{ span: 3, offset: 0 }} lg={{ span: 2, offset: 0 }}>
          <Link to={`/work`} >
            <h2 className="mt-2 ml-2  " >Công Việc</h2>
          </Link>

        </Col>
        <Col xs={{ span: 3, offset: 0 }} sm={{ span: 3, offset: 0 }} md={{ span: 3, offset: 5 }} lg={{ span: 1, offset: 5 }}>

          <div className="main fade-in mt-2">

            <ButtonChageTheme />

          </div>
        </Col>
        <Col xs={{ span: 2, offset: 1 }} sm={{ span: 2, offset: 1 }} md={{ span: 0, offset: 0 }} lg={{ span: 0, offset: 0 }}>

          {/* <Divider orientation="left" plain>
            <Button type="text">
              <MenuOutlined />
            </Button>
          </Divider> */}

          <Dropdown className="" overlay={menu} trigger={['click']} >
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