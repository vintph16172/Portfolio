import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls,Html } from '@react-three/drei'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Row, Col, Button, Divider, Spin, List, Dropdown, Menu, Space, Typography, Switch, Input, Layout, Image, Avatar } from 'antd';
import Box from '../compoments/Box'
import Sphere from '../compoments/Sphere'
import Iphone from '../compoments/Iphone'
import Dog from '../compoments/Dog'
import { LoadingOutlined } from '@ant-design/icons';

const HomePage = () => {


    const { Header, Content, Footer, Sider } = Layout;
    const antIcon = <LoadingOutlined style={{ fontSize: 96 }} spin />;
    const [loading, setLoading] = useState(true)

    // -------------------------------------GSAP-------------------------------------------------

    gsap.registerPlugin(ScrollTrigger);
    gsap.config()
    // REVEAL //
    useEffect(() => {

        ScrollTrigger.defaults({
            toggleActions: "restart pause resume none",
            markers: true
        })

        if (window.scrollY === 0) {
            const tl = gsap.timeline()

            // tl.to("#section-1", {y: 100, duration: 1,ease: "back"});
            tl.fromTo(
                ".header-menu",
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            )

            // tl.fromTo(
            //     ".abc",
            //     { y: 200, autoAlpha: 0 },
            //     {
            //         duration: 1.25,
            //         y: 0,
            //         autoAlpha: 1,
            //         ease: "back",
            //         overwrite: "auto"
            //     }
            // )
        }

        ScrollTrigger.create({
            trigger: ".abc",

            start: "top 80%",
            end: "bottom 20%",

            id: "section-1",
            onEnter: function () {
                gsap.fromTo(
                    ".abc",
                    { y: 100, autoAlpha: 0 },
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                )
            },
            onLeave: function () {
                gsap.fromTo(".abc", { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
                gsap.fromTo(
                    ".abc",
                    { y: -100, autoAlpha: 0 },
                    {
                        duration: 1.25,
                        y: 0,
                        autoAlpha: 1,
                        ease: "back",
                        overwrite: "auto"
                    }
                );
            },
            onLeaveBack: function () {
                gsap.fromTo(".abc", { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
        });
    })



    // gsap.utils.toArray("#section-1-text").forEach(function (elem) {
    //     ScrollTrigger.create({
    //         trigger: elem,

    //         start: "top 80%",
    //         end: "bottom 20%",
    //         markers: true,
    //         onEnter: function () {
    //             gsap.fromTo(
    //                 elem,
    //                 { y: 100, autoAlpha: 0 },
    //                 {
    //                     duration: 1.25,
    //                     y: 0,
    //                     autoAlpha: 1,
    //                     ease: "back",
    //                     overwrite: "auto"
    //                 }
    //             );
    //         },
    //         onLeave: function () {
    //             gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    //         },
    //         onEnterBack: function () {
    //             gsap.fromTo(
    //                 elem,
    //                 { y: -100, autoAlpha: 0 },
    //                 {
    //                     duration: 1.25,
    //                     y: 0,
    //                     autoAlpha: 1,
    //                     ease: "back",
    //                     overwrite: "auto"
    //                 }
    //             );
    //         },
    //         onLeaveBack: function () {
    //             gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    //         }
    //     });
    // });



    return (
        <div className="home">
            <Layout>
                <Content
                    className='container mx-auto   m-4  lg:my-6   lg:px-4  '

                >
                    <div id="abc" className=" abc section-1 rounded-lg section-bg   " >
                        <Row className="md:h-96 " justify="center"  >
                            <Col xs={{ span: 12, offset: 1, order: 2 }} sm={{ span: 12, offset: 1, order: 2 }} md={{ span: 12, offset: 0, order: 1 }} lg={{ span: 12, offset: 0, order: 1 }}>
                                <div id="section-1-text" className="p-6 md:mt-14 lg:mt-14  " >
                                    <h1 className='section-1-title  text-5xl font-bold  ' >Nguyễn Trường Vĩ</h1>
                                    <span className='  text-2xl block mb-2 '>Fullstack Developer</span>
                                    {/* <button className='mt-2 block border-2 w-24 h-12 border-light bg-light rounded-md shadow-md shadow-light ' >
                                        Contact Me!
                                    </button> */}
                                    
                                    <Button className="blockmt-2" type="primary" size="large" > Contact Me!</Button>
                                </div>
                            </Col>
                            <Col xs={{ span: 12, offset: 0, order: 1 }} sm={{ span: 12, offset: 0, order: 1 }} md={{ span: 12, offset: 0, order: 2 }} lg={{ span: 12, offset: 0, order: 2 }}>
                                {/* <Suspense fallback={<Spin indicator={antIcon} />} >
                                    <Canvas className="canvas" >
                                        <OrbitControls enableZoom={true} />
                                        <ambientLight itenscity={0.5} />
                                        <directionalLight position={[-2, 5, 2]} intenscity={1} />
                                        <Suspense fallback={null} >
                                            <Dog />
                                        </Suspense>
                                    </Canvas>
                                </Suspense>
                                {loading && <Spin indicator={antIcon} /> } */}
                                <Canvas className="canvas" >
                                    <OrbitControls enableZoom={true} />
                                    <ambientLight itenscity={0.5} />
                                    <directionalLight position={[-2, 5, 2]} intenscity={1} />
                                    <Suspense fallback={<Html><Spin indicator={antIcon} /></Html>} >
                                        <Dog />
                                    </Suspense>
                                </Canvas>
                            </Col>

                        </Row>
                    </div>




                    <Row className="h-96 " justify="center">
                        <Col xs={{ span: 12, offset: 1 }} sm={{ span: 12, offset: 1 }} md={{ span: 9, offset: 0 }} lg={{ span: 9, offset: 0 }}>
                            <h1 className='text-3xl font-bold  ' >Nguyễn Trường Vĩ</h1>
                            <span className='text-xl  '>Fullstack Developer</span>
                        </Col>
                        <Col xs={{ span: 12, offset: 1 }} sm={{ span: 12, offset: 1 }} md={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                            <Avatar className="border-2 border-sky-500" size={82} src="https://joeschmoe.io/api/v1/random" />
                        </Col>

                    </Row>

                    <div className=" section-1 mt-4 rounded-lg section-bg   " >
                        <Row className="md:h-74" justify="center"  >
                            <Col xs={{ span: 12, offset: 1, order: 2 }} sm={{ span: 12, offset: 1, order: 2 }} md={{ span: 12, offset: 0, order: 1 }} lg={{ span: 12, offset: 0, order: 1 }}>
                                <div id="section-1-text" className="p-6 md:mt-10 lg:mt-10  " >
                                    <h1 className='section-1-title  text-5xl font-bold  ' >Nguyễn Trường Vĩ</h1>
                                    <span className='  text-2xl block mb-2 '>Fullstack Developer</span>
                                    {/* <button className='mt-2 block border-2 w-24 h-12 border-light bg-light rounded-md shadow-md shadow-light ' >
                                        Contact Me!
                                    </button> */}
                                    <Button className="blockmt-2" type="primary" size="large" > Contact Me!</Button>
                                </div>
                            </Col>
                            <Col xs={{ span: 12, offset: 0, order: 1 }} sm={{ span: 12, offset: 0, order: 1 }} md={{ span: 12, offset: 0, order: 2 }} lg={{ span: 12, offset: 0, order: 2 }}>

                            </Col>

                        </Row>
                    </div>



                    {/* <div className='mx-4'>

                        <h1 className="text-xl underline underline-offset-8 decoration-4 decoration-red-500 " >Giới Thiệu</h1>
                        <Row >
                            <Col xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>

                                <span className="block" >Họ và Tên: Nguyễn Trường Vĩ</span>
                                <span className="block" >Ngày Sinh: 01/09/2002</span>
                                <span className="block" >Quê Quán: Hà Nội</span>
                            </Col>
                            <Col xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                                <span className="block" >Họ và Tên: Nguyễn Trường Vĩ</span>
                                <span className="block" >Ngày Sinh: 01/09/2002</span>
                                <span className="block" >Quê Quán: Hà Nội</span>
                            </Col>

                        </Row>
                    </div>

                    <div className='mx-4'>

                        <h1 className="text-xl underline underline-offset-8 decoration-4 decoration-red-500 " >Học Vấn</h1>
                        <Row >
                            <Col xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>

                                <span className="block" >Họ và Tên: Nguyễn Trường Vĩ</span>
                                <span className="block" >Ngày Sinh: 01/09/2002</span>
                                <span className="block" >Quê Quán: Hà Nội</span>
                            </Col>
                            <Col xs={{ span: 12, offset: 0 }} sm={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }} lg={{ span: 12, offset: 0 }}>
                                <span className="block" >Họ và Tên: Nguyễn Trường Vĩ</span>
                                <span className="block" >Ngày Sinh: 01/09/2002</span>
                                <span className="block" >Quê Quán: Hà Nội</span>
                            </Col>

                        </Row>
                    </div>

                    <div className='mx-4'>

                        <h1 className="text-xl underline underline-offset-8 decoration-4 decoration-red-500 " >Mạng Xã Hội</h1>

                        <span className="block" >Họ và Tên: Nguyễn Trường Vĩ</span>
                        <span className="block" >Ngày Sinh: 01/09/2002</span>
                        <span className="block" >Quê Quán: Hà Nội</span>

                    </div> */}



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