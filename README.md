# 🛒 quicklist — Lista de Compras

Aplicação web de lista de compras feita com **HTML, CSS e JavaScript puro**, sem frameworks nem bibliotecas.
Projeto desenvolvido durante meus estudos de JavaScript.

## ✨ Funcionalidades

- **Adicionar itens** à lista pelo campo de texto
- **Validação do texto:** números e símbolos são removidos automaticamente, e entradas vazias ou inválidas mostram um aviso
- **Marcar itens** como comprados com checkbox personalizado
- **Remover itens** clicando na lixeira de cada linha
- **Aviso de remoção:** um alerta aparece quando um item é removido e pode ser fechado no botão **X**
- **Layout responsivo:** versão mobile e versão desktop (a partir de 64rem)

## 🛠️ Tecnologias

- **HTML5:** estrutura semântica e atributos de acessibilidade (`aria-label`, `role="alert"`)
- **CSS3:**
  - variáveis em `:root` para cores e fonte
  - CSS nesting
  - media queries com a sintaxe de intervalo (`width >= 64rem`)
  - checkbox estilizado com `appearance: none`
- **JavaScript:**
  - manipulação do DOM (`createElement`, `append`, `remove`)
  - eventos de `submit` e `click`
  - delegação de eventos para remover itens
  - expressões regulares para validar o texto

## 📂 Estrutura

```
projeto-ListaDeCompras/
├── assets/          # ícones SVG (checkbox, lixeira, alerta, logo)
├── styles/
│   ├── index.css    # importa os demais arquivos
│   ├── global.css   # reset e variáveis
│   ├── utility.css  # classes utilitárias (desktop-only / mobile-only)
│   └── styles.css   # estilos da página
├── index.html
└── script.js
```

## 🧠 O que aprendi

- **Escopo de variáveis:** uma `const` declarada dentro de um listener não existe fora dele
- **`e.target`:** no evento `submit`, o `e.target` é o formulário, não o input
- **Delegação de eventos:** um único listener no container remove qualquer item, inclusive os criados depois, usando `closest()`
- **Guard clause** (`if (!btn) return`) para encerrar a função cedo
- **Strings são imutáveis:** `trim()` e `replace()` devolvem uma string nova, sem alterar a original
- **`getElementsByClassName` × `querySelector`:** o primeiro devolve uma coleção, o segundo devolve um elemento

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abra o arquivo `index.html` no navegador.

Não precisa instalar nada.
