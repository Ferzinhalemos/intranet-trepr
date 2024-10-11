from trepr.intranet.utils import validadores

import pytest


@pytest.mark.parametrize(
    "value,expected",
    [
        ["1@tre-pr.jus.br", True],
        ["foobar@tre-pr.jus.br", True],
        ["bar-foo@tre-pr.jus.br", True],
        ["1@tre-pr.jus.br.br", False],
        ["foobar@tre-pr.jus.br.br", False],
        ["bar-foo@tre-pr.jus.br.br", False],
        ["ericof@simplesconsultoria.com.br", False],
    ],
)
def test_is_valid_email(value, expected):
    """Testa a função is_valid_email."""
    assert validadores.is_valid_email(value) is expected


@pytest.mark.parametrize(
    "value,expected",
    [
        ["41999528312", True],
        ["(41)999528312", False],
        ["4132104100", True],
        [" ", False],
        ["(999)1234566", False],
    ],
)
def test_is_valid_telefone(value, expected):
    """Testa a função test_is_valid_telefone."""
    assert validadores.is_valid_telefone(value) is expected
