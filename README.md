# Minhas Finanças

App de organização financeira pessoal, feito com HTML, CSS e JavaScript puro.

- Cartões de crédito e débito, com faturas e limite calculados automaticamente
- Lançamentos de gastos e entradas, com compras parceladas
- Salário fixo lançado sozinho no dia do pagamento
- Contas fixas e lembretes de vencimento
- Painel com gráficos e dicas de saúde financeira, incluindo um plano de ajuste ao salário

## Privacidade

O app não tem servidor nem banco de dados online. Todos os dados ficam guardados
**somente no navegador do seu aparelho** (localStorage). Este repositório guarda
apenas o programa: nenhuma informação financeira é enviada para o GitHub ou para
qualquer outro site. O app também não usa fontes, scripts ou serviços externos.

Para levar seus dados para outro aparelho, use o botão **Backup** (Copiar e Importar).

## Instalar no celular

Abra o endereço do GitHub Pages no celular e toque em **Instalar** (ou siga o passo a passo):

- **Android (Chrome):** menu ⋮ → *Instalar app* ou *Adicionar à tela inicial*
- **iPhone (Safari):** Compartilhar → *Adicionar à Tela de Início*

Depois de instalado, o app abre mesmo sem internet.

## Arquivos

```
index.html            o app inteiro (visual e código juntos, para facilitar o envio pelo celular)
manifest.webmanifest  nome, ícone e cores do app instalado
sw.js                 guarda os arquivos para funcionar offline
*.png                 ícones
```

O código separado por arquivos (para estudar) está na versão em pastas do projeto.
