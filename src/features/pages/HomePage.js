import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Row, Col, Button, Divider, List, Dropdown, Menu, Space, Typography, Switch, Input, Layout, Image,Avatar  } from 'antd';
import Box from '../compoments/Box'
import Sphere from '../compoments/Sphere'
import Iphone from '../compoments/Iphone'


const HomePage = () => {

    const { Header, Content, Footer, Sider } = Layout;

    return (
        <div className="home">
            <Layout>
                <Content
                    className='m-4  lg:my-6 lg:mx-60 md:mx-54  lg:px-4  '

                >
                    <div className="site-layout-background" >
                        <Canvas className="canvas" >
                            <OrbitControls enableZoom={false} />
                            <ambientLight itenscity={0.5} />
                            <directionalLight position={[-2, 5, 2]} intenscity={1} />

                            <Suspense fallback={null} >
                                <Sphere />
                            </Suspense>
                        </Canvas>
                    </div>

                    <Row justify="center">
                        <Col xs={{ span: 12, offset: 1 }} lg={{ span: 9, offset: 0 }}>
                            <h1 className='text-3xl font-bold  ' >Nguyễn Trường Vĩ</h1>
                            <span className='text-xl  '>Fullstack Developer</span>
                        </Col>
                        <Col xs={{ span: 12, offset: 1 }} lg={{ span: 3, offset: 0 }}>
                            <Avatar size={74} src="https://joeschmoe.io/api/v1/random" />
                        </Col>

                    </Row>


                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>





            {/* <Canvas className="canvas" >
                <OrbitControls enableZoom={false} />
                <ambientLight itenscity={0.5} />
                <directionalLight position={[-2, 5, 2]} intenscity={1} />

                <Suspense fallback={null} >
                    <Box />
                </Suspense>
            </Canvas>
            <Canvas className="canvas" >
                <OrbitControls enableZoom={false} />
                <ambientLight itenscity={0.5} />
                <directionalLight position={[-2, 5, 2]} intenscity={1} />

                <Suspense fallback={null} >
                    <Sphere />
                </Suspense>
            </Canvas>
            <Canvas className="canvas" >
                <OrbitControls enableZoom={false} />
                <ambientLight itenscity={0.5} />
                <directionalLight position={[-2, 5, 2]} intenscity={1} />

                <Suspense fallback={null} >
                    <Iphone />
                </Suspense>
            </Canvas> */}
        </div >
    )
}

export default HomePage