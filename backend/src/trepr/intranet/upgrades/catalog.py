from plone import api
from trepr.intranet import logger


def reindexa_pessoa(context):
    # Reindexa o campo area do tipo pessoa
    brains = api.content.find(portal_type="Pessoa")
    for brain in brains:
        pessoa = brain.getObject()
        pessoa.reindexObject(idxs=["area", "cargo"])
        logger.info(
            f"- Reindexa os campos area e cargo do objeto {pessoa.absolute_url()}"
        )
    logger.info("Reindexação completa")
