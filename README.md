# nextem_api
api rest 

# initial dependency
node modules

$ npm install 

# install others dependencys 
Express, Sequelize, MySQL, Json Web Token, Bcryptjs:

$ npm install express sequelize mysql2 jsonwebtoken bcryptjs --save


# Explique como decidir quando utilizar NodeJS e quando não utilizar.
# R: 
Primeiro você tem que pensar em que tipo de aplicação você quer e se ela vai ser escalonável pois com nodejs você precisa pensar desde o inicio e com certo detalhe, para que não precise ficar monitorando a todo tempo a aplicação. Mas se tiver programadores javascript fullstack, o tempo de desenvolvimento é consideravelmente mais rapido pois é a mesma linguagem pro backend e frontend. Por isso também, o tempo de resposta das requisições são rápidas, ainda mais que ele trabalha com non-blocking IO onde nenhuma tarefa pesada pode travar a aplicação uma vez que serão executadas em background.Se não quiser um framework com modulos bem definidos, onde você mesmo pode criar o seu, junto com todas as coisas anteriores em
comunhão,pode escolher nodejs sem medo.
