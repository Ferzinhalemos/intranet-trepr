from pytest_plone import fixtures_factory
from trepr.intranet.testing import ACCEPTANCE_TESTING
from trepr.intranet.testing import FUNCTIONAL_TESTING
from trepr.intranet.testing import INTEGRATION_TESTING


pytest_plugins = ["pytest_plone"]


globals().update(
    fixtures_factory(
        (
            (ACCEPTANCE_TESTING, "acceptance"),
            (FUNCTIONAL_TESTING, "functional"),
            (INTEGRATION_TESTING, "integration"),
        )
    )
)
