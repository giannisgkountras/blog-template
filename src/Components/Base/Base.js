import React from "react";
import "./Base.css";
import lineArt from "../../assets/line-art.png";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
export default function Base() {
  return (
    <ParallaxProvider>
      <div className="base-container">
        <div className="side-cut">
          <Parallax scale={[1, 1.5, "easeInCubic"]}>
            <h1 className="base-title">Welcome to Helen's Garden</h1>
          </Parallax>
          <div className="row">
            <div className="column">
              <div className="hello">
                <h2>Who am I?</h2>
              </div>
              <p className="intro-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu semper justo, quis maximus diam. Ut in efficitur purus. Sed at lacus gravida, facilisis turpis non, condimentum leo.
                Vestibulum et euismod massa. Etiam vestibulum aliquet aliquam. Aenean vehicula, odio quis facilisis faucibus, ante orci tristique neque, nec finibus lacus tortor sit amet purus. Nam id
                pellentesque urna. Curabitur euismod ut dui in ultrices. Vestibulum ultricies nulla id est placerat ultricies. Mauris ac sapien vitae purus pellentesque finibus.
              </p>
            </div>

            <Parallax speed={-10} translateX={[-10, 50]} translateY={[40, -40]}>
              <img className="line-art" src={lineArt} alt="line art" />
            </Parallax>
          </div>
        </div>
        <div className="side-cut">
          <h1 className="base-title">Positive and motivating</h1>

          <div className="row">
            <div className="column space">
              <div className="main-p-title">
                <h2>My crazy idea:</h2>
              </div>
              <Parallax speed={-10} translateX={[-15, 15]} translateY={[0, 0]}>
                <p className="main-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu semper justo, quis maximus diam. Ut in efficitur purus. Sed at lacus gravida, facilisis turpis non, condimentum leo.
                  Vestibulum et euismod massa. Etiam vestibulum aliquet aliquam. Aenean vehicula, odio quis facilisis faucibus, ante orci tristique neque, nec finibus lacus tortor sit amet purus. Nam
                  id pellentesque urna. Curabitur euismod ut dui in ultrices. Vestibulum ultricies nulla id est placerat ultricies. Mauris ac sapien vitae purus pellentesque finibus.
                </p>
              </Parallax>
            </div>
            <div className="column">
              <div className="main-p-title">
                <h2>Why this?</h2>
              </div>
              <Parallax speed={-10} translateX={[20, -20]} translateY={[0, 0]}>
                <p className="main-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu semper justo, quis maximus diam. Ut in efficitur purus. Sed at lacus gravida, facilisis turpis non, condimentum leo.
                  Vestibulum et euismod massa. Etiam vestibulum aliquet aliquam. Aenean vehicula, odio quis facilisis faucibus, ante orci tristique neque, nec finibus lacus tortor sit amet purus. Nam
                  id pellentesque urna. Curabitur euismod ut dui in ultrices. Vestibulum ultricies nulla id est placerat ultricies. Mauris ac sapien vitae purus pellentesque finibus.
                </p>
              </Parallax>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="main-p-title">
                <h2>How can I contribute?</h2>
              </div>
              <Parallax speed={20} translateY={[0, 40]}>
                <p className="main-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu semper justo, quis maximus diam. Ut in efficitur purus. Sed at lacus gravida, facilisis turpis non, condimentum leo.
                  Vestibulum et euismod massa. Etiam vestibulum aliquet aliquam. Aenean vehicula, odio quis facilisis faucibus, ante orci tristique neque, nec finibus lacus tortor sit amet purus. Nam
                  id pellentesque urna. Curabitur euismod ut dui in ultrices. Vestibulum ultricies nulla id est placerat ultricies. Mauris ac sapien vitae purus pellentesque finibus.
                </p>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}
