# Simulador de Corridas do Mario Kart com Node.js
<img width="1080" height="380" alt="mario" src="https://github.com/user-attachments/assets/58db688a-2f65-4272-ac60-59105291be6c" />



## 📝Descrição
Este projeto é um simulador de corrida simples, baseado nas mecânicas e regras do jogo Mario Kart. O simulador coloca dois personagens controlados pelo computador para competir numa corrida de 5 rondas.

O objetivo do jogo é acumular a maior quantidade de pontos ao final das rondas, superando os desafios de cada trecho da pista.

## 🛠Funcionalidades
* Dois Jogadores: O jogo simula uma corrida entre dois personagens controlados pelo computador.

* Pistas Aleatórias: Cada ronda da corrida acontece num trecho de pista aleatório (Reta, Curva ou Confronto).

* Sistema de Pontuação: A pontuação é baseada nos atributos dos personagens e no resultado de um dado de 6 lados.

## 👨‍⚖️Regras do Jogo
1. **Personagens:** Cada jogador tem atributos de Velocidade, Manobrabilidade e Poder.

2. **Corrida:** A corrida dura 5 rondas.

3. **Reta:** O jogador com a maior soma (Dado + Velocidade) ganha 1 ponto.

4. **Curva:** O jogador com a maior soma (Dado + Manobrabilidade) ganha 1 ponto.

5. **Confronto:** O jogador com a menor soma (Dado + Poder) perde 1 ponto. A pontuação não pode ser negativa.

6. **Vitória:** Vence a corrida o jogador que tiver mais pontos ao final das 5 rondas.

## ⚙Como Executar o Projeto
Para correr este simulador, você precisa ter o Node.js instalado na sua máquina.

1. Clone o repositório ou baixe os ficheiros.

2. Abra o terminal na pasta raiz do projeto (Projeto1).

3. Execute o projeto com o comando:
````
     npm start
````
O resultado da corrida será exibido diretamente no seu terminal.
## 🚧Estrutura do projeto
````
├── src/
│   └── index.js       # Lógica principal do simulador
├── package.json       # Informações do projeto e scripts de execução
└── README.md          # Este ficheiro
````
## 👨‍🎓Autor
* Julio Siqueira
