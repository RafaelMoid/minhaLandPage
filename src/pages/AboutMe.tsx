import ButtonContact from '../atoms/ButtonContact';
import Circle1 from '../atoms/Circle1';
import Circle2 from '../atoms/Circle2';
import Frontend from '../template/Frontend';
import * as S from './styles';

import MyPhoto from '../assets/minha-foto.svg';

function AboutMe() {
  return (<Frontend>
    <S.Container>
      <div>
        <h1>Who am i?</h1>
        <h6>Rafael Varela, a recife born developer, musician, cooker, gamer and dad.</h6>
      </div>
      <S.ColumnImage>
        
      </S.ColumnImage>
    </S.Container>
  </Frontend>)
}

export default AboutMe;