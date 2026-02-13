# Projeto Docker Swarm: Redundância 🐳

## 🛠️ Tecnologias e Conceitos
* **Docker Swarm:** Orquestração e gerenciamento do cluster.
* **Replicas:** Configuração de 3 instâncias para o serviço de API para garantir redundância.

---

## 📸 Evidências do Projeto (Capturas de Tela)

Conforme solicitado nos requisitos, seguem as comprovações do ambiente:

### 1. Status da Stack de Serviços
Visualização da stack `redundante` ativa, com o serviço de API operando com as 3 réplicas desejadas.
![Status da Stack](./imagem/status_stack.png.png)
> *Comando:* `docker stack services redundante`

### 2. Distribuição das Réplicas (API)
Verificação do estado atual das réplicas do serviço `redundante_api` no cluster.
![Réplicas API](./imagem/service_ps_api.png.png)
> *Comando:* `docker service ps redundante_api`

### 3. Acesso à Rota /info (Load Balancing)
Acesso via navegador demonstrando a API respondendo com informações do host atual.
![Acesso Navegador](./imagem/navegador_info.png.png)
> *Rota:* `http://localhost:8080/info`

### 4. Logs do Monitoramento
Logs do serviço `redundante_monitor` capturando atividades de diferentes hosts simultaneamente.
![Logs Monitor](./imagem/logs_monitor.png)
> *Comando:* `docker service logs -f redundante_monitor`

### 5. Teste de Resiliência (Antes e Depois)
Demonstração da alta disponibilidade: o sistema detecta a parada de um container e sobe um novo automaticamente.

 Recuperação Automática pelo Swarm
![Sistema Recuperado](./imagem/docker_ps_final.png.png) |

> *Validação feita através dos comandos `docker ps` e `docker service ps`*.

---

## 🚀 Como subir o ambiente
1.  Inicie o Swarm: `docker swarm init`
2.  Faça o deploy: `docker stack deploy -c docker-compose.yml redundante`
