from plone import api
from plone.restapi.services import Service
from trepr.intranet import logger
from trepr.intranet.services.clima import openmeteo


class ClimaGet(Service):
    @property
    def coordinates(self) -> tuple:
        """Retorna latitude e longitude do TRE-PR."""
        return (-25.45641967205823, -49.257251986868994)

    @property
    def timezone(self) -> str:
        return api.portal.get_registry_record("plone.portal_timezone")

    def reply(self):
        portal = api.portal.get()
        portal_url = portal.absolute_url()
        latitude, longitude = self.coordinates
        timezone = self.timezone
        logger.info("Acessa dados do clima")
        dados = openmeteo.dados_clima(latitude, longitude, timezone)
        dados["@id"] = f"{portal_url}/@clima"
        logger.info("Retorna dados do clima")
        return dados
