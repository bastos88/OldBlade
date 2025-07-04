# 🧔‍♂️ OldBlade – Sistema de Agendamento de Cortes de Cabelo

> _"Tempo não se perde. Tempo se marca."_  
> OldBlade é um sistema de agendamentos que une simplicidade, estética e lógica.  
> Feito para barbearias que valorizam a pontualidade como um ritual — não um detalhe.

---

## ✂️ Sobre o Projeto

OldBlade é uma aplicação web para controle de horários de atendimento em barbearias, com foco em **experiência intuitiva** para o cliente e **organização fluida** para o profissional.

✅ Escolha o dia  
✅ Veja os horários disponíveis  
✅ Agende com nome e hora  
✅ Cancele com um clique

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 + CSS3 + JavaScript (ES6+)**
- **Modularização com ESModules**
- **`json-server`** (simulando um back-end REST)
- **Biblioteca `dayjs`** para manipulação de datas

---

## 📂 Estrutura do Projeto


OldBlade/
├── index.html

├── server.json

├── src/

│ ├── assets/ # Imagens e ícones

│ ├── services/ # Conexão com a API (fetch, cancelamento, etc)

│ ├── form/ # Carregamento e manipulação do formulário

│ └── schedules/ # Exibição e controle dos agendamentos


---

## 🚀 Como Executar Localmente

### 1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/oldblade.git
cd oldblade

```

### 2. Instale o json-server (caso não tenha):
```bash
npm install -g json-server
```

### 3. Inicie o servidor fake:
```bash
json-server --watch server.json --port 3000
```




### 📆 Funcionalidades
 Agendar novos cortes com nome e horário

 Visualizar horários agendados por período (manhã, tarde e noite)

 Cancelar agendamentos com confirmação

 Filtro automático por data

 💡 (futuro) Integração com banco real ou Firebase

 💡 (futuro) Tela administrativa para barbearia

