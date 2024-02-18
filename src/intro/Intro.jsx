import { styled } from "styled-components";
import portrate2 from "../components/images/intro/portrate2.png";
import codeBacg02 from "../components/images/intro/codeBacg20.jpeg";

const Intro = () => {
  return (
    <Wrapper>
      <div className="inner">
        <div className="lineAround">
          <div className="dropContainer">
            <img className="img01" src={codeBacg02} alt="" />
            <img className="img02" src={portrate2} alt="" />
          </div>
        </div>

        <div className="container">
          <h1>Desenvolvedor Front-End </h1>
          <p className="p1">Transformo conceitos de design em experiências interativas na web.</p>
          <p className="p2">Criando interfaces intuitivas, responsivas e atraentes.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 99;
  width: 100%;
  .inner {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 10;

    .lineAround {
      border-top-right-radius: 7rem;
      border-top-left-radius: 16rem;
      border-bottom-left-radius: 16rem;
      border-bottom-right-radius: 7rem;
      background: linear-gradient(#38c8fc, rgba(90, 34, 139), #f8fc05) border-box;
      mask-composite: exclude;
      padding: 0.1rem;
      margin-left: 8rem;
      .dropContainer {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 22rem;
        height: 32rem;
        border-top-right-radius: 7rem;
        border-top-left-radius: 16rem;
        border-bottom-left-radius: 16rem;
        border-bottom-right-radius: 7rem;
        overflow: hidden;
        .img01 {
          border-top-right-radius: 5rem;
          border-top-left-radius: 5rem;
          position: absolute;
          top: -22rem;
          width: 38rem;
          height: 73rem;
          margin-left: -3rem;
        }
        .img02 {
          z-index: 95;
          width: 22rem;
          margin-top: 3rem;
        }
      }
    }

    .container {
      position: relative;
      width: 40rem;
      height: 35rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 90;
      margin-right: 8rem;
      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
      border-image: linear-gradient(0.25turn, #38c8fc, rgba(90, 34, 139), #f8fc05);
      border-image-slice: 6;

      h1 {
        position: relative;
        font-size: 3.5rem;
        font-weight: 500;
        color: #dddddd;
        z-index: 4;
        font-family: sans-serif;
        margin-bottom: 3rem;
        text-shadow: rgba(12, 54, 163, 0.59) 0px 0px 15px;
      }

      .p1 {
        position: relative;
        font-size: 2.5rem;
        color: #e0e1e1;
        line-height: 4rem;
        z-index: 4;
        font-weight: 400;
        font-family: "Fredoka", sans-serif;
        margin-bottom: 3rem;
      }
      .p2 {
        position: relative;
        font-size: 2rem;
        color: #e0e1e1;
        line-height: rem;
        z-index: 4;
        font-weight: 300;
        font-family: "Fredoka", sans-serif;
      }
    }
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 400px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0rem;
    .inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
      z-index: 10;
      padding: 2rem;
      margin-top: 2rem;
      .lineAround {
        margin-left: 0;
        .dropContainer {
          width: 10rem;
          height: 14rem;
          position: relative;

          .img01 {
            position: absolute;
            top: -22rem;
            width: 38rem;
            height: 53rem;
            margin-left: -3rem;
          }
          .img02 {
            position: absolute;
            top: 0rem;
            width: 100%;
          }
        }
      }
      .container {
        display: flex;
        width: 13rem;
        height: 12rem;
        margin-top: 2rem;
        margin-right: 0;

        h1 {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        .p1 {
          font-size: 0.7rem;
          font-weight: 400;
          line-height: 1.5rem;
          text-align: center;
          margin-bottom: 1rem;
        }
        .p2 {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5rem;
          text-align: center;
          padding: 0 1rem;
        }
      }
    }
  }
  @media only screen and (min-device-width: 401px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0rem;
    .inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      align-items: center;
      z-index: 10;
      height: 30rem;
      padding: 2rem;
      margin-top: 2rem;
      .lineAround {
        margin-left: 0;

        .dropContainer {
          width: 16rem;
          height: 24rem;
          position: relative;

          .img01 {
            position: absolute;
            top: -22rem;
            width: 40rem;
            height: 53rem;
            margin-left: -3rem;
          }
          .img02 {
            width: 100%;
            margin-top: 2rem;
            margin-top: 3rem;
          }
        }
      }
      .container {
        display: flex;
        width: 25rem;
        height: 29rem;
        margin-top: 3rem;
        margin-right: 0;
        padding: 1rem 0;
        h1 {
          font-size: 2rem;
          font-weight: 500;
        }
        .p1 {
          font-size: 1.8rem;
          font-weight: 400;
          line-height: 2rem;
          text-align: center;
        }
        .p2 {
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 2rem;
          text-align: center;
          padding: 0 1rem;
        }
      }
    }
  }

  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    margin-bottom: 0;

    .inner {
      margin-bottom: 0;
      margin-top: 0rem;
      width: 100%;
      height: 25rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 10;
      padding: 2rem;

      .lineAround {
        border-top-right-radius: 7rem;
        border-top-left-radius: 16rem;
        border-bottom-left-radius: 16rem;
        border-bottom-right-radius: 7rem;
        background: linear-gradient(#38c8fc, rgba(90, 34, 139), #f8fc05) border-box;
        mask-composite: exclude;
        padding: 0.1rem;
        margin-left: 0rem;
        width: 15rem;
        height: 22rem;

        .dropContainer {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 99%;
          height: 100%;
          border-top-right-radius: 7rem;
          border-top-left-radius: 16rem;
          border-bottom-left-radius: 16rem;
          border-bottom-right-radius: 7rem;
          overflow: hidden;

          .img01 {
            border-top-right-radius: 5rem;
            border-top-left-radius: 5rem;
            position: absolute;
            top: -10rem;
            width: 150%;
            height: 150%;
            margin-left: -3rem;
          }
          .img02 {
            z-index: 95;
            width: 100%;
            margin-top: 4rem;
          }
        }
      }

      .container {
        position: relative;
        width: 45%;
        height: 22rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 90;
        margin-right: 0rem;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(0.25turn, #38c8fc, rgba(90, 34, 139), #f8fc05);
        border-image-slice: 6;

        h1 {
          position: relative;
          font-size: 2rem;
          font-weight: 500;
          color: #dddddd;
          z-index: 4;
          font-family: sans-serif;
          margin-bottom: 1.5rem;
          text-shadow: rgba(12, 54, 163, 0.59) 0px 0px 15px;
        }

        .p1 {
          position: relative;
          font-size: 1.6rem;
          color: #e0e1e1;
          line-height: 2rem;
          z-index: 4;
          font-weight: 400;
          font-family: "Fredoka", sans-serif;
          margin-bottom: 1.5rem;
        }
        .p2 {
          position: relative;
          font-size: 1.2rem;
          color: #e0e1e1;
          line-height: 1.5rem;
          z-index: 4;
          font-weight: 400;
          font-family: "Fredoka", sans-serif;
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    height: 23rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8rem;
    margin-top: 2rem;
    .inner {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      z-index: 10;
      height: 100vh;
      padding: 2rem;

      .lineAround {
        border-top-right-radius: 7rem;
        border-top-left-radius: 16rem;
        border-bottom-left-radius: 16rem;
        border-bottom-right-radius: 7rem;
        background: linear-gradient(#38c8fc, rgba(90, 34, 139), #f8fc05) border-box;
        mask-composite: exclude;
        padding: 0.1rem;
        margin-left: 0rem;
        width: 18.2rem;
        height: 26rem;
        .dropContainer {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18rem;
          height: 100%;
          border-top-right-radius: 7rem;
          border-top-left-radius: 16rem;
          border-bottom-left-radius: 16rem;
          border-bottom-right-radius: 7rem;
          overflow: hidden;

          .img01 {
            border-top-right-radius: 5rem;
            border-top-left-radius: 5rem;
            position: absolute;
            top: -10rem;
            width: 150%;
            height: 150%;
            margin-left: -3rem;
          }
          .img02 {
            z-index: 95;
            width: 99%;
            margin-top: 60%;
            margin-left: 1rem;
          }
        }
      }

      .container {
        position: relative;
        width: 45%;
        height: 75vh;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        z-index: 90;
        margin-right: 0rem;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-image: linear-gradient(0.25turn, #38c8fc, rgba(90, 34, 139), #f8fc05);
        border-image-slice: 6;
        padding: 1rem 0;
        h1 {
          position: relative;
          font-size: 2.4rem;
          font-weight: 500;
          color: #dddddd;
          z-index: 4;
          font-family: sans-serif;
          margin-bottom: 1rem;
          text-shadow: rgba(12, 54, 163, 0.59) 0px 0px 15px;
        }

        .p1 {
          position: relative;
          font-size: 2rem;
          color: #e0e1e1;
          line-height: 3rem;
          z-index: 4;
          font-weight: 400;
          font-family: "Fredoka", sans-serif;
          margin-bottom: 1.5rem;
        }
        .p2 {
          position: relative;
          font-size: 1.6rem;
          color: #e0e1e1;
          line-height: 2.5rem;
          z-index: 4;
          font-weight: 300;
          font-family: "Fredoka", sans-serif;
        }
      }
    }
  }
`;
export default Intro;
