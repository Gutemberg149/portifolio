import React, { useEffect } from "react";
import { styled } from "styled-components";
import knowledegBox from "./ApiKnowledge";
import { HiSpeakerphone } from "react-icons/hi";
import { RiTeamFill } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Wrapper>
      <div className="aboutContainer" data-aos="fade-up">
        <div className=" titleCoantainer">
          <h4 className="Title">Sobre mim</h4>
          <div className="titleGlass"></div>
        </div>

        <div className="profilecontainer">
          <div className="containerText" data-aos="fade-up-right" data-aos-duration="1000">
            <div className="introducing">
              <span>Olá, eu sou</span> <p>Gutemberg Rocha</p>
            </div>
            <h5>Apaixonado por escrever códigos, fazer conteúdos artístico e trazer soluções para desafios.</h5>
            <p>Desenvolvedor Front- End, formado em Desenvolvimento da Web pela faculdade de tecnologia FIAP.</p>
            <p>Formado em ADM e marketing digital pela Univerisade FGV. Tenho proeficiência em SEO.</p>
          </div>

          <div className="containerSkills" data-aos="fade-up-left" data-aos-duration="1500">
            <div className="outLineColor">
              <div className="skillBox">
                <div className="left">
                  <span>Comunicação</span>
                  <p>Execelente em transmitir ideias complexas de maneira clara e concisa, tanto escrito quanto verbalmente.</p>
                </div>
                <HiSpeakerphone className="icon" />
              </div>
            </div>
            <div className="outLineColor">
              {" "}
              <div className="skillBox">
                <div className="left">
                  <span>Trabalho em time</span>
                  <p>Amo trabalhar em ambientes colaborativos. Me sinto ainda mais empolgado com equipe diversa.</p>
                </div>
                <RiTeamFill className="icon" />
              </div>
            </div>

            <div className="outLineColor">
              <div className="skillBox">
                <div className="left">
                  <span>Motivado</span>
                  <p>Sou altamente motivado. Sempre tomo iniciativas para alcançar meus objetivos pessoais e profissionais.</p>
                </div>
                <BsFire className="icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="topTexts">
          <div className="h4Box">
            <h4 className="h4Conhecimento" data-aos="fade-up">
              Conhecimentos
            </h4>
          </div>

          <p className="pConhecimento" data-aos="fade-up">
            A principal área de especialização é o desenvolvimento front-end (lado do cliente da web).
          </p>
          <p className="pConhecimento" data-aos="fade-up">
            HTML, CSS, JS, construção de aplicativos web React, com plug-ins, recursos, animações e codificação de layouts interativos.
          </p>
        </div>

        <div className="bcgContainer">
          <div className="boxTechContainer">
            {knowledegBox.map((box) => {
              return (
                <div key={box.id} className="clipPathContainer" data-aos="fade-right" data-aos-delay="600">
                  <span className="spanIcon">{box.icon}</span>
                  <p className="techtName">{box.tec}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  z-index: 98;
  margin-top: 2rem;

  .aboutContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;
    .titleCoantainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35rem;
      height: 7rem;
      margin-bottom: 2rem;

      .titleGlass {
        position: absolute;
        width: 31rem;
        height: 4.5rem;
        border-radius: 1rem;
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.38);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        animation: rotate 4s linear infinite;
      }
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        20% {
          transform: rotate(10deg);
        }
        40% {
          transform: rotate(20deg);
        }
        60% {
          transform: rotate(-10deg);
        }
        80% {
          transform: rotate(-20deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }
      .Title {
        font-size: 4.3rem;
        letter-spacing: 0.8rem;
        color: #ffffff;
        font-weight: 400;
        font-family: "poppins";
      }
    }

    .profilecontainer {
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 50rem;
      padding: 0 2rem;
      .containerText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 4rem;
        width: 40rem;
        height: 35rem;
        border-radius: 1.5rem;
        color: black;
        padding: 2rem;
        z-index: 99;
        background: linear-gradient(135deg, rgba(5, 196, 210, 0.423), rgba(295, 755, 255, 0));
        backdrop-filter: blur (10px);
        -webkit-backdrop-filter: blur (40px);
        border: 3px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        .introducing {
          span {
            font-size: 2.2rem;
            font-weight: 400;
            z-index: 99;
            font-family: "poppins";
          }
          p {
            font-size: 2.8rem;
            font-weight: 600;
            font-family: "poppins";
            line-height: 4rem;
            margin-bottom: 1rem;
            z-index: 99;
          }
        }

        h5 {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          z-index: 99;
          font-family: "poppins";
        }
        p {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          z-index: 99;
          font-weight: 500;
          font-family: "poppins";
          color: black;
        }
      }

      .containerSkills {
        .outLineColor {
          width: 38.5rem;
          height: 11.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1.3rem;
          background: linear-gradient(#38c8fc, #f8fc05, #b97af0) border-box;
          mask-composite: exclude;
          margin-bottom: 1rem;
          .skillBox {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 38rem;
            height: 11rem;
            padding: 1rem;
            background: #081433;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            color: #d7d5d5;
            border-radius: 1rem;

            .left {
              width: 85%;
              span {
                font-size: 1.6rem;
                font-weight: 700;
                font-family: "poppins";
              }
              p {
                margin-top: 0.5rem;
                font-size: 1.2rem;
                line-height: 1.7rem;
                font-weight: 300;
                font-family: "poppins";
              }
            }
            .icon {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
    .topTexts {
      width: 100%;
      padding-left: 11rem;

      .h4Box {
        display: flex;
        justify-content: start;
        align-items: center;
        margin-bottom: 3rem;
        text-align: center;
        border-bottom: 4px solid transparent;
        border-image: linear-gradient(0.25turn, #f8fc05, rgba(90, 34, 139), rgba(1, 1, 122, 0));
        border-image-slice: 1;
        width: 100%;
        padding-bottom: 1rem;
        .h4Conhecimento {
          font-size: 2.7rem;
          font-family: "poppins";
          font-weight: 300;
          color: #d5d4d4;
        }
      }

      .pConhecimento {
        font-size: 1.5rem;
        width: 85%;
        margin-bottom: 2rem;
        color: #d7d5d5;
        text-align: left;
        font-weight: 200;
        font-family: "poppins";
      }
    }

    .bcgContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: auto;

      .boxTechContainer {
        width: 95%;
        height: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        margin: 1rem 1rem 0 0;
        .clipPathContainer {
          position: relative;
          background-color: #051e4bdd;
          width: 12rem;
          height: 12rem;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 98;
          -webkit-clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
          clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);

          .techtName {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #063592;
            position: absolute;
            font-size: 1.2rem;
            color: #d8d6d6;
            top: 0;
            width: 100%;
            margin-right: 1.5rem;
            padding: 0.4rem 0;
          }
          .spanIcon {
            font-size: 2.5rem;
            color: #dedcdc;
            margin-left: 2rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 200px) and (max-device-width: 400px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0;
    .aboutContainer {
      .titleCoantainer {
        width: 100vw;
        height: 4rem;
        margin-bottom: 2rem;
        .titleGlass {
          width: 100vw;
          height: 0.5rem;
        }
        .Title {
          font-size: 1rem;
          letter-spacing: 0.6rem;
        }
      }
      .profilecontainer {
        flex-direction: column;
        width: 100vw;
        height: 58rem;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 0rem 0 1rem 0;

        .containerText {
          width: 98vw;
          height: 30rem;
          margin-right: 0;
          padding: 0.5rem;
          margin-bottom: 2rem;
          margin-top: -0.4rem;
          .introducing {
            margin-bottom: 1.5rem;
            height: 2rem;
            span {
              font-size: 0.9rem;
              font-weight: 400;
              z-index: 99;
              font-family: "poppins";
              margin-bottom: 0rem;
              padding: 0;
              line-height: 1rem;
            }
            p {
              font-size: 1rem;
              font-weight: 4500;
              margin: 0;
              z-index: 99;
              font-family: "poppins";
              line-height: 2rem;
              margin-bottom: 0rem;
              margin-top: 0;
              line-height: 2rem;
              padding: 0;
            }
          }

          h5 {
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
            z-index: 99;
            font-family: "poppins";
          }
          p {
            font-size: 0.85rem;
            margin-bottom: 0.5rem;
            z-index: 99;
            font-weight: 500;
            font-family: "poppins";
            color: black;
          }
        }
        .containerSkills {
          .outLineColor {
            width: 96vw;
            height: 9rem;

            .skillBox {
              width: 100%;
              height: 8.5rem;

              .left {
                span {
                  font-size: 0.9rem;
                  font-weight: 700;
                }
                p {
                  margin-top: 0.2rem;
                  font-size: 0.7rem;
                  line-height: 1.1rem;
                  font-weight: 300;
                }
              }
              .icon {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
      .topTexts {
        padding-left: 0rem;
        padding: 0.5rem;

        .h4Box {
          .h4Conhecimento {
            font-size: 1rem;
          }
        }
        .pConhecimento {
          font-size: 0.9rem;
          width: 100%;
          margin-bottom: 2rem;
        }
      }
      .bcgContainer {
        .boxTechContainer {
          .clipPathContainer {
            background-color: #051e4bdd;
            width: 5rem;
            height: 5rem;
            margin-bottom: 1rem;

            .techtName {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #063592;
              position: absolute;
              font-size: 0.7rem;
              color: #d8d6d6;
              top: 0;
              width: 100%;
              margin-right: 1.2rem;
              padding: 0.4rem 0;
              left: 0;
            }
            .spanIcon {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.7rem;
              margin-bottom: 0;
              color: #dedcdc;
              margin-left: 1rem;
              margin-top: 1.5rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 401px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 2rem;
    .aboutContainer {
      .titleCoantainer {
        width: 26rem;
        /* height: 25rem; */
        margin-bottom: 5rem;
        .titleGlass {
          width: 23rem;
          height: 4rem;
        }
        .Title {
          font-size: 2.8rem;
          letter-spacing: 0.8rem;
        }
      }
      .profilecontainer {
        flex-direction: column;
        width: 23rem;
        height: 60rem;
        display: flex;
        justify-content: start;
        align-items: center;
        margin: 0rem 0 2rem 0;

        .containerText {
          width: 23rem;
          height: 28rem;
          margin-right: 0;
          padding: 0.5rem;
          margin-bottom: 2rem;
          margin-top: -0.4rem;
          .introducing {
            p {
              font-size: 2rem;
              font-weight: 4500;
              margin: 0;
              z-index: 99;
              font-family: "poppins";
              line-height: 2rem;
              margin-bottom: 1rem;
            }
            span {
              font-size: 1.5rem;
              font-weight: 400;
              z-index: 99;
              font-family: "poppins";
            }
          }

          h5 {
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
            z-index: 99;
            font-family: "poppins";
          }
          p {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            z-index: 99;
            font-weight: 500;
            font-family: "poppins";
            color: black;
          }
        }
        .containerSkills {
          .outLineColor {
            width: 23rem;
            height: 9rem;

            .skillBox {
              width: 28rem;
              height: 8.5rem;

              .left {
                span {
                  font-size: 1.4rem;
                  font-weight: 700;
                }
                p {
                  margin-top: 0.2rem;
                  font-size: 1.1rem;
                  line-height: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
        }
      }
      .topTexts {
        padding: 1rem;
        .h4Box {
          .h4Conhecimento {
            font-size: 2.2rem;
          }
        }
        .pConhecimento {
          font-size: 1.3rem;
          width: 100%;
          margin-bottom: 2rem;
        }
      }
      .bcgContainer {
        .boxTechContainer {
          .clipPathContainer {
            background-color: #051e4bdd;
            width: 10rem;
            height: 10rem;
            margin-bottom: 1rem;
            .techtName {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #063592;
              position: absolute;
              font-size: 1.2rem;
              color: #d8d6d6;
              top: 0;
              width: 100%;
              margin-right: 1.2rem;
              padding: 0.4rem 0;
            }
            .spanIcon {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 3em;
              margin-bottom: 0;
              color: #dedcdc;
              margin-left: 2rem;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0rem;
    .aboutContainer {
      height: 100rem;
      .titleCoantainer {
        width: 30rem;
        height: 7rem;
        margin-bottom: 3rem;

        .titleGlass {
          width: 26rem;
          height: 4rem;
        }
        .Title {
          font-size: 2.9rem;
          letter-spacing: 0.8rem;
        }
      }
      .profilecontainer {
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0rem;
        .containerText {
          width: 45%;
          height: 32rem;
          padding: 0.5rem;
          margin-right: 0;
          margin-left: 0;
          margin-bottom: 2rem;
          margin-top: -0.4rem;

          .introducing {
            p {
              font-size: 1.4rem;
              font-weight: 4500;
              margin: 0;
              z-index: 99;
              font-family: "poppins";
              line-height: 2rem;
              margin-bottom: 1rem;
            }
            span {
              font-size: 1.2rem;
              font-weight: 400;
              z-index: 99;
              font-family: "poppins";
            }
          }

          h5 {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
            z-index: 99;
            font-family: "poppins";
          }
          p {
            font-size: 1.1rem;
            margin-bottom: 0.5rem;
            z-index: 99;
            font-weight: 500;
            font-family: "poppins";
            color: black;
          }
        }
        .containerSkills {
          width: 45%;
          margin-right: 0.5rem;
          .outLineColor {
            width: 100%;
            height: 10rem;
            width: 18rem;
            .skillBox {
              width: 100%;
              height: 9.4rem;
              width: 17.5rem;
              .left {
                width: 90%;
                span {
                  font-size: 1.1rem;
                  font-weight: 700;
                }
                p {
                  margin-top: 0.2rem;
                  font-size: 0.8rem;
                  line-height: 1.5rem;
                  font-weight: 300;
                }
              }
              .icon {
                font-size: 1.3rem;
              }
            }
          }
        }
      }
      .topTexts {
        padding: 1rem;
        .h4Box {
          .h4Conhecimento {
            font-size: 2.2rem;
          }
        }
        .pConhecimento {
          font-size: 1.3rem;
          width: 100%;
          margin-bottom: 1.8rem;
        }
      }
      .bcgContainer {
        .boxTechContainer {
          .clipPathContainer {
            background-color: #051e4bdd;
            width: 10rem;
            height: 10rem;
            margin-bottom: 1rem;
            .techtName {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #063592;
              position: absolute;
              font-size: 1rem;
              color: #d8d6d6;
              top: 0;
              width: 100%;
              margin-right: 1.2rem;
              padding: 0.4rem 0;
            }
            .spanIcon {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2rem;
              margin-bottom: 0;
              color: #dedcdc;
              margin-left: 2rem;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1300px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 0;
    .aboutContainer {
      .titleCoantainer {
        width: 35rem;
        height: 8rem;
        margin-bottom: 2rem;
        .titleGlass {
          width: 29rem;
          height: 4rem;
        }
        .Title {
          font-size: 3.6rem;
          letter-spacing: 0.8rem;
        }
      }
      .profilecontainer {
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0rem 0 2rem 0;
        .containerText {
          width: 45%;
          height: 90%;
          margin-right: 0;
          padding: 0.5rem;
          margin-bottom: 2rem;
          .introducing {
            p {
              font-size: 2rem;
              font-weight: 4500;
              margin: 0;
              z-index: 99;
              font-family: "poppins";
              line-height: 2.5rem;
              margin-bottom: 1.5rem;
            }
            span {
              font-size: 1.1rem;
              font-weight: 400;
              z-index: 99;
              font-family: "poppins";
            }
          }

          h5 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
            z-index: 99;
            font-family: "poppins";
          }
          p {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            z-index: 99;
            font-weight: 400;
            font-family: "poppins";
            color: black;
          }
        }
        .containerSkills {
          width: 45%;
          .outLineColor {
            width: 100%;
            height: 10rem;

            .skillBox {
              width: 100%;
              height: 9.4rem;

              .left {
                span {
                  font-size: 1.2rem;
                  font-weight: 700;
                }
                p {
                  margin-top: 0.2rem;
                  font-size: 1rem;
                  line-height: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
        }
      }
      .topTexts {
        padding: 1rem;
        .h4Box {
          .h4Conhecimento {
            font-size: 2.2rem;
          }
        }
        .pConhecimento {
          font-size: 1.3rem;
          width: 100%;
          margin-bottom: 1.8rem;
        }
      }
      .bcgContainer {
        .boxTechContainer {
          .clipPathContainer {
            background-color: #051e4bdd;
            width: 11rem;
            height: 10rem;
            margin-bottom: 1rem;
            .techtName {
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #063592;
              position: absolute;
              font-size: 1.3rem;
              color: #d8d6d6;
              top: 0;
              width: 100%;
              margin-right: 1.5rem;
              padding: 0.4rem 0;
            }
            .spanIcon {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2.5rem;
              margin-bottom: 0;
              color: #dedcdc;
              margin-left: 2rem;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
`;
export default About;
