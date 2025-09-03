# Gerador de QR Code

Um aplicativo web simples para gerar códigos QR a partir de texto ou URLs, desenvolvido com tecnologias modernas para uma experiência rápida e responsiva.

[Link versão online](https://gerador-qr-code-wheat.vercel.app)

## 🚀 Tecnologias Utilizadas

- **Vite**: Ferramenta de build rápida e moderna para desenvolvimento web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenção do código.
- **QRCode.js**: Biblioteca JavaScript para gerar códigos QR no navegador.
- **HTML5/CSS3**: Estrutura e estilização da interface do usuário.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) (gerenciador de pacotes)

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/RuanLopes1350/gerador-qr-code.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd gerador-qr-code
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## ▶️ Como Executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (porta padrão do Vite).

## 📖 Como Usar

1. Abra o aplicativo no navegador.
2. Digite o texto ou URL que deseja converter em código QR no campo de entrada.
3. Clique no botão "Gerar QR Code" ou pressione Enter.
4. O código QR será exibido na tela.
5. Clique no botão "Baixar QR Code" para salvar a imagem em PNG.

## 🏗️ Estrutura do Projeto

```
gerador-qr-code/
├── public/
│   └── vite.svg
├── src/
│   ├── main.ts          # Lógica principal da aplicação
│   ├── style.css        # Estilos da interface
│   ├── typescript.svg
│   └── vite-env.d.ts
├── index.html           # Arquivo HTML principal
├── package.json         # Dependências e scripts
└── tsconfig.json        # Configuração do TypeScript
```

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run preview`: Visualiza a versão de produção localmente

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

[Ruan Lopes](https://github.com/RuanLopes1350)

---
