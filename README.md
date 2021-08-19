# 📸 InstAlura: Bootcamp de Front-End Avançado 2021

> Projeto desenvolvido no treinamento `Bootcamp JAM Stack 2021`, com foco na utilização do React com Styled Components.
> <br />Layout inspirado no Instagram, por isso até do nome do projeto 😅. Veja a versão completa em [Figma](https://www.figma.com/file/Veefm1pjkeTFcJC7BUqHge/)
> <br />Uma simples homenagem ao melhor ator do mundo. Vida eterna ao Mestre Nicolas Cage!

[![Instalura por @omausantos](https://img.shields.io/badge/MauSantos-Instalura-informational)](https://instalura-base-omausantos.vercel.app/)
![LICENSE MIT](https://img.shields.io/github/license/omausantos/instalura-base)
[![BootcampAlura](https://img.shields.io/badge/BootCamp-Alura-orange)](https://bootcamps.alura.com.br/)

[![Mockup Instalura](https://alura.mauricio.dev.br/smartmockups.jpg)](https://instalura-base-omausantos.vercel.app/)
<br />Última versão em [Vercel @omausantos](https://instalura-base-omausantos.vercel.app/)

## ⚙ Tecnologias e Dependências

<p style="display:flex;">
<img src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png" width="60" alt="Styled Components" title="Styled Components" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="50" alt="React" title="React" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" width="50" alt="CSS3" title="CSS3" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg" width="50" alt="NextJS" title="NextJS" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" width="50" alt="HTML5" title="HTML5" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" width="50" alt="Figma" title="Figma" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" alt="Javascript" title="Javascript" />
</p>

#### Package.json
* [`lodash`](https://lodash.com/) biblioteca javascript com diversas funções que auxiliam na execução de tarefas complexas.
* [`Styled components`](https://styled-components.com/) criação de componentes HTML e gestão de CSS Inline.
* [`ESLint`](https://eslint.org/) ferramenta para padronização de código, identificação de erros e unificação.
* [`propTypes`](https://www.npmjs.com/package/prop-types) para analise e controle de props adicionais.
* [`FrameMotion`](https://www.framer.com/motion/) criação de animações em React com styled-components.
* [`Husky`](https://typicode.github.io/husky/) inclusão de gatilhos de ação automaticos.
* [`cz-conventional-changelog`](https://github.com/commitizen/cz-cli) automatização de padrinozação de commit.
* [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint) garantia que qualquer commit seja padronizado.

#### VSCode
* [`VS Code ESLint extension`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) integração do ESLint do projeto junto ao editor, propondo correções em desenvolvimento.
* [`EditorConfig for VS Code`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin para criação e gestão do arquivo .editorconfig, o qual configuração espaçamento, quebras de linhas e outras opções do seu editor.

## 🤓 Bora codar?

01. Inicie realizando o download do projeto
```bash
git clone https://github.com/omausantos/instalura-base.git
```

02. Agora é instalar as dependencias via NPM ou YARN (observe que deve estar dentro da pasta onde encotra-se o arquivo package.json)
```bash
npm install
OU
yarn install
```

03. Então é hora de inicializar o projeto!
```bash
npm run dev
OU
yarn dev
```

04. Tudo pronto? Acesse http://localhost:3000/ e navegue no site

### 📦 Módulos do Bootcampo
> O treinamento é composto por 6 módulos principais, onde foram separados de modo que o aluno posso evoluir o projeto junto. Além de disponibilização de código após cada aula para melhor didática.

- [x] **Módulo 01:** JAMStack e layout com React
- [x] **Módulo 02:** State e Forms + boas práticas de Git e GitHub
- [ ] **Módulo 03:** Se aprofundando no NextJS
- [ ] **Módulo 04:** Testes com Cypress, Jest e React Testing Library
- [ ] **Módulo 05:** Área autenticada e gerenciador de conteúdo (CMS)
- [ ] **Módulo 06:** Storybook + TypeScript

### 🎣 Customização do código (Refatoração)

> Conforme execução das aulas é percetvivel na necessidade de refatorar alguns modulos, principalmente quando há código que podem ser otimizados.

###### Módulo 01
Além do CSS por componente, também é possivel incluir na instancia (chamada do componente) CSS para customização com regras de breakpoint (MediaQueries).
<br /> Então criei o componente cssInline, que carrega automaticamente todos os CSS's que forem incluídos no *props.cssinline*

<details>
<summary>Click que ver o código</summary>
<br />

**instalura-base/src/theme/utils/cssInline.js**

```javascript
import propToStyle from './propToStyle';

export default function cssInline() {
  // eslint-disable-next-line consistent-return
  return ({ cssinline }) => {
    if (cssinline) {
      const propertyCss = Object.keys(cssinline);
      return propertyCss.map((itemCss) => propToStyle(itemCss));
    }
  };
}
```

**instalura-base/src/theme/utils/propToStyle.js**

```javascript
import breakpointsMedia from './breakpointsMedia';

export default function propToStyle(propName) {
  // eslint-disable-next-line consistent-return
  return (props) => {
    const propValue = props.cssinline[propName];

    if (typeof propValue === 'string') {
      return {
        [propName]: props.cssinline[propName],
      };
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }
  };
}
```

</details>

###### Módulo 02
Para reutilização do layout das mensagens de retorno do formulário de cadastro, foi necessário um novo componente.
<br /> Então criei o MensagemCadastro, que recebe três valores: *props.color* (cor do texto), *props.animation* (icone animado) e *props.msg* (mensagem que deve aparecer)

<details>
<summary>Click que ver o código</summary>
<br />

**instalura-base/src/components/patterns/FormCadastro/animations/index.js**

```javascript
import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import Box from '../../../foundation/Box';
import Grid from '../../../foundation/Grid';
import Text from '../../../foundation/Text';

export default function MensagemCadastro({ color, animation, msg }) {
  return (
    <Box
      cssinline={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            col={3}
          >
            <Lottie
              width="100%"
              config={{ animationData: animation, loop: true, autoplay: true }}
            />
          </Grid.Col>
          <Grid.Col
            col={9}
          >
            <Text
              tag="p"
              cssinline={{
                color,
              }}
            >
              {msg}
            </Text>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

MensagemCadastro.propTypes = {
  color: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  animation: PropTypes.object.isRequired,
  msg: PropTypes.string.isRequired,
};
```
</details>
