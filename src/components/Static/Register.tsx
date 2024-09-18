import styled from "styled-components";
import { BsCamera } from "react-icons/bs";
import { useState } from "react";
import pix from "../../assets/PrinceJohn.jpeg";
// import {useTypewriter, Cursor} from "react-simple-typewriter"
// import Typewriter from "typewriter-effect";

const PageOne = () => {
  // const {text: any} = useTypewriter({
  //     words: ["Management..."],
  //     loop: 20,
  // });
  // type TypewriterType = {
  //     typeString: (text: string) => TypewriterType;
  //     deleteAll: () => TypewriterType;
  //     pauseFor: (ms: number) => TypewriterType;
  //     start: () => TypewriterType;
  //   };

  const save = JSON.parse(localStorage.getItem("data")!);
  const [name, setName] = useState<string>(save.name);
  const [email, setEmail] = useState<string>(save.email);

  return (
    <Body>
      <Container>
        <Nexts>
          <Circle bg="blue">
            <Text col="white">1</Text>
          </Circle>
          <Line bg="white"></Line>
          <Circle bg="purple">
            <Text col="white">2</Text>
          </Circle>
          <Line bg="white"></Line>
          <Circle bg="purple">
            <Text col="white">3</Text>
          </Circle>
        </Nexts>
        <Inputss>
          <input type="text" placeholder="Input your Name" />
          <input type="text" placeholder="Input your email" />
          <Hold>
            <Button
              bg="blue"
              //   onClick={() => {
              //     localStorage.setItem("page", JSON.stringify(2));

              //     // name, email
              //     // }
              //     // localStorage.setItem("data", JSON.stringify(detailObject))
              //     window.location.reload();
              //   }}
            >
              Next
            </Button>
          </Hold>
        </Inputss>
      </Container>
    </Body>
  );
};

const PageTwo = () => {
  const x = JSON.parse(localStorage.getItem("page")!);

  console.log("state", x);
  return (
    <Body>
      <Container>
        <Nexts>
          <Circle bg="blue">
            <Text col="white">1</Text>
          </Circle>
          <Line bg="blue"></Line>
          <Circle bg="blue">
            <Text col="white">2</Text>
          </Circle>
          <Line bg="white"></Line>
          <Circle bg="purple">
            <Text col="white">3</Text>
          </Circle>
        </Nexts>
        <Inputss>
          <input type="password" placeholder="Input your Password" />
          <Hold>
            <Button
              bg="black"
              onClick={() => {
                localStorage.setItem("page", JSON.stringify(1));
                window.location.reload();
              }}
            >
              Previous
            </Button>
            <Button
              bg="blue"
              onClick={() => {
                localStorage.setItem("page", JSON.stringify(3));
                window.location.reload();
              }}
            >
              Next
            </Button>
          </Hold>
        </Inputss>
      </Container>
    </Body>
  );
};

const PageThree = () => {
  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState<string>(pix);

  const x = JSON.parse(localStorage.getItem("page")!);
  console.log("state", x);

  const onHandleImage = (e: any) => {
    const file = e.target.files![0];
    const readyImage = URL.createObjectURL(file);

    setImage(file);
    setAvatar(readyImage);
  };

  return (
    <Body>
      <Container>
        <Nexts>
          <Circle bg="blue">
            <Text col="white">1</Text>
          </Circle>
          <Line bg="blue"></Line>
          <Circle bg="blue">
            <Text col="white">2</Text>
          </Circle>
          <Line bg="blue"></Line>
          <Circle bg="blue">
            <Text col="white">3</Text>
          </Circle>
        </Nexts>
        <Inputss>
          <PhotoHold>
            <Photo>
              <Img src={avatar} />
              <input type="file" id="prince" onChange={onHandleImage} />
            </Photo>
            <Label htmlFor="prince">
              <BsCamera />
              <Upload>Click to Upload</Upload>
            </Label>
          </PhotoHold>
          <Hold>
            <Button
              bg="black"
              onClick={() => {
                localStorage.setItem("page", JSON.stringify(2));
                window.location.reload();
              }}
            >
              Previous
            </Button>
          </Hold>
        </Inputss>
      </Container>
    </Body>
  );
};

const Register = () => {
  const x = JSON.parse(localStorage.getItem("page")!);
  console.log("register", x);

  return (
    <div>
      <Main>
        <Header>
          State Management{" "}
          <span
          //  onInit={(typewriter: TypewriterType) => {
          //       typewriter
          //         .typeString("Accessible..")
          //         .pauseFor(2000)
          //         .deleteAll()
          //         .start()

          //         .typeString("Reliable...")
          //         .pauseFor(2000)
          //         .deleteAll()
          //         .start()

          //         .typeString("Fast....")
          //         .pauseFor(2000)
          //         .deleteAll()
          //         .start();
          //     }}
          ></span>
        </Header>
        <Body>
          {/* {x === 1 ? (
            <PageOne />
          ) : x === 2 ? (
            <PageTwo />
          ) : x === 3 ? (
            <PageThree />
          ) : null} */}
          <PageOne />
          <PageTwo />
          <PageThree />
        </Body>
      </Main>
    </div>
  );
};

export default Register;

// const Main = styled.div`

// `;
const Img = styled.img``;

const Button = styled.div<{ bg: string }>`
  padding: 15px 20px;
  border-radius: 8px;
  border: none;
  margin: 5px;
  background-color: ${({ bg }) => bg};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Hold = styled.div`
  width: 97%;
  display: flex;
  justify-content: flex-end;
`;
const Upload = styled.div`
  background-color: red;
`;
const Label = styled.label`
  width: 30%;
  height: 40%;
  margin: 20px;
  font-size: 20px;
  color: black;
  /* position: absolute;
    bottom: 270px;
    right: 720px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
const Photo = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 50%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
`;
const PhotoHold = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Inputss = styled.div`
  height: 70%;
  width: 80%;
  input {
    height: 55px;
    width: 95%;
    margin-bottom: 20px;
    background-color: white;
    color: black;
    padding-left: 10px;
    border: none;
    font-size: 20px;
  }
`;
const Text = styled.div<{ col: string }>`
  color: ${({ col }) => col};
  font-weight: bold;
`;
const Line = styled.div<{ bg: string }>`
  height: 8px;
  width: 90px;
  background-color: ${({ bg }) => bg};
`;
const Circle = styled.div<{ bg: string }>`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: ${({ bg }) => bg};
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Nexts = styled.div`
  height: 10%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const Container = styled.div`
  height: 400px;
  width: 700px;
  border: 2px solid blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Body = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  height: 80px;
  width: 100%;
  font-size: 25px;
  font-weight: 600;
  color: white;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  height: 100vh;
  width: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
