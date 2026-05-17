# 📋 TaskWeb - Gerenciador de Tarefas Online

Este projeto consiste na modelagem arquitetural e implementação inicial do front-end de um Gerenciador de Tarefas (To-Do List), desenvolvido como parte de um trabalho acadêmico utilizando o modelo **PEAS**.

## Tecnologias Utilizadas
- **Front-End:** HTML5 Semântico, CSS3 (Flexbox/Layout Responsivo) e JavaScript Modular.
- **Arquitetura Futura:** Node.js com Express e banco de dados MongoDB.

## Modelagem Arquitetural (Modelo PEAS)

- **Performance (Medida de Desempenho):** Interface responsiva, uso de HTML5 semântico para acessibilidade/SEO, validação de dados e contraste de cores adequado para usabilidade.
- **Environment (Ambiente):** Execução em navegadores modernos (Chrome, Firefox, Edge, Safari) com comunicação via requisições HTTP (GET, POST, PUT, DELETE).
- **Actuators (Atuadores):** Manipulação dinâmica do DOM via JavaScript para inserção, conclusão e exclusão de tarefas sem recarregar a página.
- **Sensors (Sensores):** Captura de interações do usuário através de formulários, botões (click), campos de texto (input/submit) e caixas de seleção (change).

## Estrutura de Diretórios
```text
/taskweb
├── /public
│     ├── /css (Estilização com style.css)
│     └── /js (Lógica com main.js)
└── index.html
```

---
*Projeto desenvolvido para apresentação acadêmica e composição de nota.*
