// Styles
import { Container, Flex } from '@/styles/Global'
import { Text } from '@/styles/Text'
import { Button } from '@/styles/Buttons'

// Components
import { Stack } from '@/components/Stack'
import { Project } from '@/components/Project'
import { Contacts } from '@/components/Contacts'

// Data
import { stackData } from '@/utils/stackData'
import { userData } from '@/utils/userData'

import { FaGithub } from 'react-icons/fa'

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from './style'

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`
  const portfolioUrl = `https://github.com/${userData.githubUser}/portfolio`

  return (
    <main id='home'>
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={'48px'}
                height={'48px'}
              />
              <Text color='grey4'>
                Olá, meu nome é {userData.nameUser} - Taubaté, SP e tenho 20
                anos
              </Text>
            </Flex>
            <Text as='h1' type='heading1' color='grey5'>
              Eu amo criar e desenvolver projetos
            </Text>
            <Text type='body1' color='grey2'>
              Estou a procura do meu primeiro emprego para ingressar na área de
              programação, o qual sou apaixonado desde criança
            </Text>
            <HeaderButtonsArea>
              <Button as='a' type='primary' href='#projects'>
                Ver projetos
              </Button>
              <Button as='a' type='outline' target='_blank' href={portfolioUrl}>
                Veja o códido-fonte do meu portfólio
              </Button>
              <Button
                color='grey5'
                as='a'
                css={{ '&:hover': { color: '$grey1' } }}
                type='circle'
                target='_blank'
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id='projects'>
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as='h2' type='heading4' color='grey4'>
                Meu projetos
              </Text>
              <Text as='p' type='body1' color='grey2'>
                Alguns dos meu projetos
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  )
}
