from plone import api
from plone.indexer import indexer
from trepr.intranet.content.pessoa import IPessoa


@indexer(IPessoa)
def area_indexer(obj):
    if obj.area:
        area_rel = obj.area
        area = area_rel.to_object
        return api.content.get_uuid(area)


@indexer(IPessoa)
def cargo_indexer(obj):
    return obj.cargo if obj.cargo else None
