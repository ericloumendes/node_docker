# Imagem do node que será usada de base
FROM node:18-alpine3.19

# Diretório onde se encontra a aplicação
WORKDIR /app

# Cópia do package.json para o container
COPY package.json .

# Comando de instalação das depêndencidas do pacote
RUN npm install

# Copiando o diretório para o container
COPY . .

# Exposição da porta que abriga a aplicação
EXPOSE 3000

# Comando para iniciar o projeto
CMD ["npm", "start"]