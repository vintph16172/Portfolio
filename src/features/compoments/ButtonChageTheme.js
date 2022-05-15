import React from 'react'
import { Row, Col, Button, Divider, List, Dropdown, Menu, Space, Typography, Switch, Input } from 'antd';
import Icon, { MenuOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons';
import { useThemeSwitcher } from "react-css-theme-switcher";


export const ButtonChageTheme = () => {

    const [isDarkMode, setIsDarkMode] = React.useState();
    const { switcher, currentTheme, status, themes } = useThemeSwitcher();

    const toggleTheme = (isChecked) => {

        setIsDarkMode(isChecked);
        switcher({ theme: isChecked ? themes.light : themes.dark });
    };

    // Avoid theme change flicker
    if (status === "loading") {
        return null;
    }

    const SunSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    );

    const MoonSvg = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    );

    const SunIcon = props => <Icon component={SunSvg} {...props} />;
    const MoonIcon = props => <Icon component={MoonSvg} {...props} />;


    return (
        <div>
            <Switch className="bg-gradient-to-r from-sky-500 to-indigo-500"
                unCheckedChildren={<MoonIcon style={{ color: 'white', fontSize: '27px' }} />}
                checkedChildren={<SunIcon style={{ color: 'orange', fontSize: '27px' }} />}

                checked={isDarkMode}
                onChange={toggleTheme} />
        </div>
    )
}
