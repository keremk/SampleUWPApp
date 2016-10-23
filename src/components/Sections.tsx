import * as React from "react";

export class HeroBox extends React.Component<{}, {}> {
    render() {
        return (
            <div className="heroBox">
                <div className="controls">
                    <h1>Galaxy Adorer</h1>
                </div>
            </div>
        )
    }
}

export class TopSection extends React.Component<{}, {}> {
    render() {
        return (
            <div className="topSection" >
                <HeroBox  />
            </div>
        )
    }
}

export class BottomSection extends React.Component<{}, {}> {
    render () {
        return (
            <div className="movieListing">
            </div>
        )
    }
}

export class LogoBox extends React.Component<{}, {}> {
    render() {
        return ( 
            <div className="logoBox">
                <img src="http://adx.metulev.com/video/Logo/Logo_NoText.png" className="logo" />
                <div>Film</div>
                <div>Broadcast</div>
                <div>Commercials</div>
                <img src="" className="search" />
            </div>
        )
    }
}

export interface PageWrapperProps {}

export class PageWrapper extends React.Component<PageWrapperProps, {}> {
    render() {
        return (
            <div className="pageWrapper">
                <LogoBox />
                <div className="topSection">
                <TopSection />
                </div>
                <BottomSection />
            </div>
        )
    }
}