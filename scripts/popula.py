from faker import Faker
from pathlib import Path
from random import choice

import logging
import requests


fake = Faker("pt_BR")
# Define como faremos o log das ações
logging.basicConfig()
logger = logging.getLogger("trepr.intranet.popula")
logger.setLevel(logging.INFO)


# Constantes utilizadas no script
PASTA_ATUAL = Path(__file__).parent.resolve()
PASTA_DADOS = PASTA_ATUAL / "data"
BASE_URL = "http://localhost:8080/Plone/++api++"
USUARIO = "admin"
SENHA = "admin"

CARGOS = ["servidor", "terceiro"]

# Cabeçalhos HTTP
headers = {"Accept": "application/json"}

session = requests.Session()
session.headers.update(headers)

# Autenticar o usuário admin utilizando um Token JWT
login_url = f"{BASE_URL}/@login"
response = session.post(login_url, json={"login": USUARIO, "password": SENHA})
data = response.json()
token = data["token"]
session.headers.update({"Authorization": f"Bearer {token}"})


AREAS = {
    "/estrututura": {
        "id": "estrututura",
        "@type": "Document",
        "title": "Áreas",
        "description": "Áreas do TRE-PR",
    },
    "/colaboradores": {
        "id": "colaboradores",
        "@type": "Document",
        "title": "Colaboradores",
        "description": "Colaboradores do TRE-PR",
    },
    "/estrututura/secom": {
        "id": "secom",
        "@type": "Area",
        "title": "SECOM",
        "description": "Secretaria de Comunicação",
        "telefone": "4132410123",
        "email": f"secom@tre-pr.jus.br",
    },
    "/estrututura/sti": {
        "id": "sti",
        "@type": "Area",
        "title": "STI",
        "description": "Secretaria de Tecnologia de Informação",
        "telefone": "4132410123",
        "email": f"sti@tre-pr.jus.br",
    },
    "/estrututura/sti/web": {
        "id": "web",
        "@type": "Area",
        "title": "Web",
        "description": "Secretaria de Tecnologia de Informação - Web",
        "telefone": "4132410123",
        "email": f"sti-web@tre-pr.jus.br",
    },
}

# Criar Áreas

for path in AREAS:
    data = AREAS[path]
    parent_path = "/".join(path.split("/")[:-1])[1:]
    response = session.get(f"{BASE_URL}/{path}")
    if response.status_code != 404:
        area = response.json()
        AREAS[path]["UID"] = area["UID"]
        logger.info(f"Ignorando {BASE_URL}{path}: Conteúdo já existe")
        continue
    response = session.post(f"{BASE_URL}/{parent_path}", json=data)
    if response.status_code > 300:
        logger.error(f"Erro ao criar '{path}': {response.status_code}")
    else:
        logger.info(f"Conteúdo criado: '{path}'")
        area = response.json()
        AREAS[path]["UID"] = area["UID"]


areas = [area["UID"] for area in AREAS.values() if area["@type"] == "Area"]
parent_url = f"{BASE_URL}/colaboradores"
for idx in range(1, 500):
    area = choice(areas)
    profile = fake.profile()
    username = profile["username"]
    cargo = choice(CARGOS)
    data = {
        "id": f"{username}",
        "@type": "Pessoa",
        "title": profile["name"],
        "description": profile["job"],
        "cargo": cargo,
        "area": area,
        "telefone": f"4132130{idx:03d}",
        "email": f"{username}@tre-pr.jus.br",
    }
    path = data["id"]
    response = session.get(f"{parent_url}/{path}")
    if response.status_code != 404:
        logger.info(f"Ignorando {parent_url}/{path}: Conteúdo já existe")
        continue
    response = session.post(parent_url, json=data)
    if response.status_code > 300:
        logger.error(f"Erro ao criar '{path}': {response.status_code}")
    else:
        logger.info(f"Conteúdo criado: '{path}'")
