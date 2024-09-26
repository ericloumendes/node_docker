# Empacotando uma aplicação node-react em docker

<br>
<br>
<br>

![Dockerlogo](/mgt/Images/docker-logo-blue.svg)


<h3 align="center">
  É legal!
</h3>



<br>
<br>
<br>


# Instalando docker no seu computador 
### Link de instalação para windows
https://www.docker.com/products/docker-desktop/

### Tutorial de instalação
https://www.youtube.com/watch?v=ZyBBv1JmnWQ

<br>
<br>
<br>

# ⚙️Comandos essênciais do docker⚙️

### Criação de uma imagem
```cmd
docker build -t nome_da_imagem:1.0 .
```
explicação:
- Neste comando o parâmetro "-t" indica o nome da imagem que ficará salva em seus sistema (deve ser escrito com letras minúsculas);
- A numeração após os dois pontos indica a versão da imagem;
- O ponto indica o repositório em que o dockerfile está presente (é a partir dele que a imagem será criada).

### Criação de um container
```cmd
docker run --name nome_container -p 3000:3000 sua_imagem:1.0
```
Explicação:
- O parâmetro "--name" define o nome do container a ser criado;
- O parâmetro "-p" indica a porta que será aberta que é definida com a seguinte léxica: NumeroPortaPublica:numeroPortaLocal. A porta local é a porta em que a aplicação roda localmente, que no caso do node é a porta 3000. Enquanto isso, a porta pública é a porta que aponta à aplicação quando acessada pelo ip aderessado.
- O parâmetro "sua_imagem:1.0" é o nome da imagem que o container hosperá seguido de sua versão.

### Criação de um container multiplataforma
Por padrão, ao criar uma imagem, o docker copia o kernel do host, impedindo máquinas com arquiteturas de processadores diferentes de utilizar a imagem. Para resolver esse problema basta definir as plataformas utilizarão a imagem:
```cmd
docker build --platform linux/amd64,linux/arm64 .
```

### Inicializando um docker-compose
```cmd
# Se no Linux
docker-compose up --build

# Se no windows
docker compose up --build
```

Explicação:
- "docker compose" chama o controlador de docker-compose.yml do doker;
- "up" faz com que os containers especificados no arquivo sejam criados
- "--build" faz com que os containers do compose sejam necessáriamente atualizados
