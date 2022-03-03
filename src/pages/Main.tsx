import ButtonContact from '../atoms/ButtonContact';
import Frontend from '../template/Frontend';
import * as S from './styles';

function Main() {
  return (<Frontend>
    
    <S.Container>
      <div>
        <h1>creating bridges between art and technology</h1>
        <h6>I'm a front-end developer towards fullstack, working hard to be a better man.</h6>
    <ButtonContact/>
      </div>
      <div>Coluna 2</div>
    </S.Container>
  </Frontend>)
}

export default Main;
