import Container from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Paragraph, Link } from "./styled";
import { Wrapper } from "../../../common/Wrapper";
import { motion } from "framer-motion";
import { variants } from "../../../common/motionVariants";

const AuthorPage = () => {
  return (
    <Container
      as={motion.div}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      narrow="true"
    >
      <Header heading="" />
      <Section
        header="Gabriel Gonta"
        content={
          <Wrapper>
            <Paragraph>
              Welcome to the <strong>"About"</strong> page in my{" "}
              <strong>Todo List</strong>.{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://gabrielgonta.com/"
              >
                Take a look at my portfolio
              </Link>.{" "}
            </Paragraph>
          </Wrapper>
        }
      />
    </Container>
  );
};

export default AuthorPage;
