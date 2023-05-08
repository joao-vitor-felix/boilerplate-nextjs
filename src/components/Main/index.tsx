import * as S from "./styles";

const Main = ({ title = "React Avançado" }) => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo com React Avançado escrito ao lado."
      />
      <S.Title>{title}</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e styled-components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor em frente a uma tela com código"
      />
    </S.Wrapper>
  );
};

export default Main;
