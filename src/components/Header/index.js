import { Container } from './styled';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="my-contacts" width={201} />
    </Container>
  );
}
