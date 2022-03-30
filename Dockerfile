FROM node:16.13.0

# Create app directory
WORKDIR /usr/src/app/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

###############################################################################
#  I M P O R T A N T E
#
#  nao esquecer de especificar tag para a imagem quando executar o docker build
#
#  docker build . -t goalcofres-node
#
#  pois o nome da imagem sera utilizado como referencia no docker-compose
###############################################################################