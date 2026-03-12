# Site de Perfil Acadêmico - Margaret Martonosi

Uma página web de perfil acadêmico profissional, responsiva e acessível, inspirada no design do site de Princeton University.

## 🎨 Características

- **Design Minimalista e Profissional**: Tema acadêmico limpo e elegante
- **Cores Institucionais Princeton**: Laranja (#E87722) e Preto (#000000)
- **Totalmente Responsivo**: Adapta-se perfeitamente a mobile, tablet e desktop
- **Acessível (a11y)**: Implementa padrões WCAG com ARIA, contraste adequado e navegação por teclado
- **Performance Otimizada**: Código limpo e eficiente

## 📁 Estrutura do Projeto

```
site-helena/
├── index.html          # Estrutura HTML semântica
├── styles.css          # Design system completo e responsivo
├── script.js           # Interatividade e navegação
├── foto.jpeg           # Foto de perfil
└── README.md           # Documentação
```

## 🚀 Como Usar

1. **Abrir o site**: Simplesmente abra o arquivo `index.html` em um navegador moderno
2. **Servidor local (recomendado)**: Para melhor experiência, use um servidor local:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js (com http-server)
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```
3. Acesse `http://localhost:8000` no navegador

## 🎯 Funcionalidades

### Navegação
- Menu de navegação com seções "About" e "Graduated Advisees"
- Scroll suave entre seções
- Indicador visual de seção ativa

### Busca
- Botão de busca no header
- Atalho de teclado: `Ctrl/Cmd + K`

### Responsividade
- **Desktop**: Layout em duas colunas (conteúdo + sidebar)
- **Tablet**: Layout adaptado com sidebar em grid
- **Mobile**: Layout empilhado otimizado para telas pequenas

## 🎨 Design System

### Cores
- **Princeton Orange**: `#E87722` - Links, destaques e elementos interativos
- **Princeton Black**: `#000000` - Textos principais e títulos
- **Off-White**: `#FAFAFA` - Fundos suaves
- **Branco**: `#FFFFFF` - Fundo principal

### Tipografia
- **Títulos**: Lora / Merriweather (serif)
- **Corpo**: Open Sans / Roboto (sans-serif)

### Breakpoints
- **Mobile**: até 768px
- **Tablet**: 768px - 1024px
- **Desktop**: acima de 1024px

## ♿ Acessibilidade

O site implementa várias práticas de acessibilidade:

- ✅ **HTML Semântico**: Uso correto de tags semânticas (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- ✅ **ARIA Labels**: Atributos ARIA apropriados para leitores de tela
- ✅ **Contraste**: Cores com contraste adequado (WCAG AA)
- ✅ **Navegação por Teclado**: Todos os elementos interativos são acessíveis via teclado
- ✅ **Textos Alternativos**: Todas as imagens possuem atributo `alt` descritivo
- ✅ **Foco Visível**: Indicadores de foco claros para navegação por teclado
- ✅ **Redução de Movimento**: Respeita preferências de `prefers-reduced-motion`
- ✅ **Alto Contraste**: Suporte para modo de alto contraste

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --color-princeton-orange: #E87722;
    --color-princeton-black: #000000;
    /* ... */
}
```

### Alterar Conteúdo
Edite diretamente o arquivo `index.html` nas seções correspondentes:
- Seção Hero: `.profile-card`
- Conteúdo About: `.about-content`
- Recursos: `.resources-sidebar`

### Alterar Foto
Substitua o arquivo `foto.jpeg` ou atualize o caminho em `index.html`:
```html
<img src="foto.jpeg" alt="..." class="profile-image">
```

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Navegadores móveis (iOS Safari, Chrome Mobile)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Design system com variáveis CSS, Grid e Flexbox
- **JavaScript (Vanilla)**: Interatividade sem dependências
- **Google Fonts**: Tipografia (Lora, Merriweather, Open Sans, Roboto)

## 📝 Licença

Este projeto foi criado para fins educacionais e de portfólio.

## 👤 Autor

Desenvolvido como projeto de perfil acadêmico profissional.

---

**Nota**: Este site é uma implementação inspirada no design de sites acadêmicos de Princeton University, adaptada para apresentar um perfil profissional acadêmico.
