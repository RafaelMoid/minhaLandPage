import ButtonContact from '../atoms/ButtonContact';
import Circle1 from '../atoms/Circle1';
import Circle2 from '../atoms/Circle2';
import Frontend from '../template/Frontend';
import * as S from './styles';

import MyPhoto from '../assets/minha-foto.svg';

function Main() {
  return (<Frontend>
    <Circle1 />
    <Circle2 />
    <S.Container>
      <S.TextBox>
        <div>
          <h1>creating bridges between art and technology</h1>
          <h6>I'm a front-end developer towards fullstack, working hard to be a better man.</h6>
          <ButtonContact/>
        </div>
      </S.TextBox>
      <S.ColumnImage>
        <img src={MyPhoto} alt="The greather Varela photograph"/>
        
      </S.ColumnImage>
    </S.Container>
  </Frontend>)
}

export default Main;
