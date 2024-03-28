import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginForm from "./loginForm";

const Login = () => {
  return ( 
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
   );
}
 
export default Login;
