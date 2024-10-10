from plone import api
from Products.CMFPlone.interfaces import INonInstallable
from trepr.intranet import logger
from zope.interface import implementer


@implementer(INonInstallable)
class HiddenProfiles:
    def getNonInstallableProfiles(self):
        """Hide uninstall profile from site-creation and quickinstaller."""
        return [
            "trepr.intranet:uninstall",
        ]


def fecha_intranet(portal_setup):
    """Aplica novo workflow para a intranet."""
    wf_tool = api.portal.get_tool("portal_workflow")
    wf_tool.updateRoleMappings()
    # Loga que modificação foi realizada
    logger.info("Permissões de workflow atualizadas")
