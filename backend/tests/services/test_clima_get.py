from pathlib import Path

import json
import pytest


LOCAL_PATH = Path(__file__).parent


@pytest.fixture(scope="session")
def openmeteo_response():
    raw_data = (LOCAL_PATH / "openmeteo.json").read_text()
    return json.loads(raw_data)


@pytest.fixture
def patch_openmeteo(monkeypatch, openmeteo_response):
    from trepr.intranet.services.clima import openmeteo

    def mockreturn(params):
        return openmeteo_response

    monkeypatch.setattr(openmeteo, "_obtem_dados_open_meteo", mockreturn)


class TestServiceClimaGet:
    portal: str = ""

    @pytest.fixture(autouse=True)
    def _setup(self, portal, patch_openmeteo):
        self.portal = portal
        self.endpoint = "/@clima"

    def test_get_status_code(self, manager_request):
        response = manager_request.get(self.endpoint)
        assert response.status_code == 200

    @pytest.mark.parametrize(
        "key,expected",
        [
            ["@id", True],
            ["events", True],
            ["temperature", True],
            ["weather", True],
        ],
    )
    def test_get_keys(self, manager_request, key: str, expected: bool):
        response = manager_request.get(self.endpoint)
        data = response.json()
        assert (key in data) is expected
