from plone.dexterity.content import Container
from plone.supermodel import model
from trepr.intranet import _
from zope import schema
from zope.interface import implementer


class IPessoa(model.Schema):
    """Definição de uma Pessoa."""

    cargo = schema.Choice(
        title=_("Cargo"),
        vocabulary="trepr.intranet.vocabulary.cargos",
        required=False,
    )


@implementer(IPessoa)
class Pessoa(Container):
    """Uma Pessoa no TRE-PR."""
