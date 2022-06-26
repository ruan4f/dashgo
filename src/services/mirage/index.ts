import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; //leva 750 ms para carregar qualquer chamada 

      this.get('/users');
      this.post('/users');

      this.namespace = ''; //reseta a configuração da api para o valor padrão do nextjs
      this.passthrough();
    }
  });

  return server;
}