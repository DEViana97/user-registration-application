import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const Img = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgb(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0 0;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 34px;
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
  color: #fff;
  margin-bottom: 80px;
  text-align: center;
`;

export const InputLabel = styled.p`
  color: #eee;
  letter-spacing: -0.408px;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  line-height: 22px;
  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  outline: none;
  border: none;
  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #fff;
  line-height: 28px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  line-height: 28px;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  border: none;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  outline: none;
  border: none;
  width: 342px;
  height: 58px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #fff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
