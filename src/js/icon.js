export default {
  icon() {
    return {
      chrome:
        "data:image/png;base64,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",
      safari:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAA+VBMVEUAAAAAd7oCd74Cd70Ddr0Cd70AeLwAdr0Cd70Cd70Cd70Cd70Cd70Cd70Dd74Cd70Bd74BeL0Dd7wDd70Cd70Cd70Ad70Ad74DeL0DqfSB1PoCd73////0QzZy0PoFecAcsvYnt/YLrPUYsfV30flZxvksl9N5z/YwufZIwfdCv/c8vfd3zfUhjs0RgsRyyfRqw/Bat+g5n9h60vlny/kzm9VeuulFqd1PxPhnwe5LrOA7odm/wNAcispUxfgPrvXqRz71/P/m9/7V8f2h3/sNpewbn+FEjsGUa4LJVVjcTUljgamJ1/pchK50eZt8dpWuYG286Py65/yjXqVZAAAAGXRSTlMAB97RT48dE+Rq8e1ylkn5urFDxtafOifC3tKtOAAABExJREFUaN7tWdd24jAQXRsIIXRSLQwxxdSE3kJL71uy+/8fsx4JxwmSkUTwOXngPtmyz4ymj0Y/tthiC2EEY5FowqeG4/Gw6ktEQ6ngBokr/oAvTcEX8CsbIX8U3Uu7YO/wyzyUkJpeCTWkfIV8ZNcmdDrrD9utZhmhcrPVHvZnp/aX3cjaLPz27hudQRktodzuNGwW/rXI7yQXey8NkAsGpYUcyZ01th8m5DtNtAJnQ8JiT1YIJUDIT85sUkWzVjEMeDKMSs0svrOYEBZRRSqs9tOA8xYi6NULGoaJkEmeCvUeImie45/3gxLq9+HtjxFGtwrUCXII5d5fCtUuwhhjIQ6EDXGMnbNxQVRTy2sfUCx+fMvXiKouGtibjgX3r2L1EMecY/IOqtXP7/kqcdpzzEFIhuAB/FtCgKyhLaFQWF4xsghQwloSsIOC7dtHADOvCSA/R4A+tjTfl6LO/uuaIOqODAFufGH9I0BFE0YOAbAd/BwD74H/gH3BHSU5lBsQ06sNnQT/v5CkD6hgb4V4SHIVNKb0L2yHMUdJimobYE4Ez2Z5gjj/zG0zqO6eFAEFtcD/iX9mrScOfeefPMRDC5QUcRUAUsQEJ0xNnoGGU20HAtpNhBAIAPl5pGmyKgKMIHuDCCEXBupCgGJeWwt5SK4TsAKbfgoEgPpV09ZEDaoDiHDEZHC4yBFdYQFKr5QIJGMcMk0MQQz1vSpI/uHpqrS0BLl7AOGsuARZA1koCJG//32VeaKSObIACSPGYABlvgP1V4j+r5dM5uqBWu6Bp7okVR9oSDBJPD5nLPxhJ4w2dMaMQgY+VBbSUOktA3i5hxdaR2XwI7q0xazVGQQB37YZglfWV2gCZhapFDMPQaE0+bYleGZ+NxfFM8QslUOIMp5tbTy6xtqQaeWEtdqGQsm1LcGbe+EBKyeYTtTCidQV1WnGQYn9jwE5G9yImemaqxnc6g6HJ82dQZOZ76Bbx6206Zahe7puc4AYYyFn4obbIhWmGMStVbtTH7HEuLzRCQd2jEEvbPf0Fqm4PAOkY0xJjHEZSKvIuNYdDhBjHBVJG/lOtzHFMcYzsqybVnQHUxxjHDeVDbR/Dv1b0hNwAk0yVVR1Gzd0veCnCn6yu9UJrn9eUt/4yY6frns6wR1tIX665hcciDHAX/6JwXAKDtON2uySiXi2pUumVNE3rnm2pYu+VNtyx7Ut3bbINF4Vvm3pxkumdczybEu3jlHPm19v2vdLp3335gAydw4gXh+hPD8E8o+xpryKTN4xFhDbxEE8JjZKqKw9SvB4GBLe8WKcUxEc5wACXxxIeTxSO1EEhoI+L4eC8mPNETXWlBzMdlcPZrufBrPfZbQsORxvkeH4SXCd8X6HP97vkPF+QPleFxQeX7HQl0TtVZdEamxz11xnllboa67ve1GHcRQIu181pjZzWRpjX5bGlE1e96ZCy9e9W2yxhSj+A0S1HzqxZoVQAAAAAElFTkSuQmCC",
      firefox:
        "data:image/png;base64,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",
      opera:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAtFBMVEUAAAD2EjTdAwn3FDb3Ezn/FkL/FkT/F0T/IULmCBn/FkTpCx78FTz/F0TjCBb/FkP/F0XnCRvsDSD/F0TeBA3/F0TfBQ7/FkT/F0T/FkP/F0T/F0XjBxTgBhH/F0T/F0TsDCT/F0PkBxbmCBr/FkTnCR7/FkP/F0PyDy7iBhT/F0T/FkTnCRzpDSD/F0T/F0P1ETL+FkDzEC/pCh//F0TVAADaAgb4EjjsDCTfBQ/mCRvzEDCzDUr5AAAANHRSTlMAH/gKE+TU8gefREUQ3seVkIAy+vHu6rRqUF9M/uG7g20nzamieXRuPdLJwYc4qVX10sROnQ9Z8QAAAn9JREFUaN7tWdlWwjAQ7U7pQluxUCyiIIv7SiLg//+XvqmHm3YKmaMPvc85dzKZNTNGixYtyHCCVTLx4rzfz2NvkqwCRyO5PUq99R68dGRrob9OOmsFOo/l0Zcv3HUl4sI/hn6J6d83u62UQsjtbvPuLg9+qdKF7DspfkJu3LOD6M0hov/Yin2MX83m/KMOuv1YYIwvG9L76RpgI9SYRY3C6hZdfyuqcGo2eH4P8Us5y0LHech6lkCwTqj8UxdZ18q+TyygCBkS74/4n7u/D3WhBJIODnqfl73LhUgJi2AHH9n3LgKKniJL10d1gvh9qCqScFPH/wT4vUhhLPRK9zUGBvHbmapOh80NjfIPSGVVvjSoTECAf2hUYAAkZBX53wUPVOl5D8hX1VlpCRS4MCrRAxKulCGAFIhqvALZ2TEwCqyAPhWAAv3a9ucEWQEfDYACj0YtzoEEXN/mQACh77kHAs6hj6Ig9gm9jQCIiEE2R4yUN1qAcykhS5DzxQycQ3XGJDWvND9yAL9rkCCBBJPkpEOagAHJUVfqMNYTzAm0MQldUumcAAEBTcAClR2SE01pAt5IboS6LZDpDs93ORAAmhxyTdg71QcCABk5G7ELYH8idiOzuyl7oLGnCvZkx56u2QsOd8nkLvo99rZFY+MVCQCbu3Xkb34hYkL7TvtEcX9AuuxfKO5PoL5vLI5im/sjzj1K4B+G8I9zmg+kbPpA6u9HagxDQeJY06eMNXUNZjML8VuhrtGyVIyW/89w/KDxvt10QZE3W1D8vxXLF8qYuCR64l1zrY5ZCPpFrHFRh3Gd5spV4zzQsywt8bK09LWue4uf694icIwWLVpQ8Ql6AHue+5SpzwAAAABJRU5ErkJggg==",
      yandex:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAkFBMVEUAAADw8PHy8vPy8vPz8/Tx8fLy8vPy8vPy8vPy8vPx8fP09PXw8PH19fby8vPy8vPy8vPy8vPx8fLx8fLx8fLx8fL19fbu7u/////sHCTv7/D29vfz8/T74+P63Nz86en2u7vsKS/5z8/51tb1sbLtRkrtPUH0q6z+9vb3wsPuUFPtNDj4x8j0o6TuWVvwcXMSOBcrAAAAGHRSTlMA22lWFeysnj0MBe3Q2sS0j3BgTUch0uUNLQtPAAAEAklEQVRo3qyW65KyMAyGAeWgLJ5liI1nFFzX3fu/u28+WaYNQUNX33+OzvOYtE3rdMsg8iZBmsSoFMZJGky8aOC8K/1emKiWJGGv/wb6dFQDs0xlv1F1RtPXHPMxVmwSqhnP/0ofekkFL7OHKe+98oZ/wvvsvz+sw7dXLFyCFxXuwm5pA4YXFYHFcvdijpcVca/roQo13k4Rdjp8y1TzbQ3pUuZHscbbK+JIbD8KfMGAwkLMJL5smD3ly+2XF2Jm0Z83dynS/NcM0YP9Kewfi720bD1fKWr+awZM205ciJi9KYhh2wJTfmnHLMkH5Avdj0mDjp/fWxv+9vS9IU2Km7M1IAXkAGBjWJ8AYEeaFFD+gvBv8D+fWys+QEEMC3I/uqhMfpXTtiP/DFVys0mueYt6ZgE7qHNad+FvzlDnYpbgGQX4RgEbAGKw4MN+bZTgD9sL+AEjZ9GwuYKRn/YSEnMFCiCGzXP+cQ9mCnMVkpo/1wXIBpmvS6jffOPGEMrBzPWJ4UD5eWMkjSt+nxTADfvjQz4wPi2hOs5TPuV23CDzd1kjK5zeBSNUmWA4tPG/BH6mcEQ6RHIBkoP0C82nPaJzWjbwGvUZ5qmmdlh1SOrAF+Ozb1nU/eJxqwJEw0Xk86DrOAPeIXmX5EL/9D4aOJEWiAaBz4MY6UEnnVRtKIQ9TAfeBFX3WZO38I9PHzATJyACbrg2DTc6qQifCwLnA5XFvIfiJk1CKvhgu1QyCHy+T320uROB3RWCwHdW2PHVwCPfpyWutEB49+jYvAiIQDJwvpzVv1rNsDVhGAjDiW1cHWUOVGTP3ZCxwXTg/v/PG1pHkKyeWZP3e+/h0qS86XsDwNbu6yUqw/cpyUu2CTm+kpBsU5OQ5VvVx4NmEr5jfdt5x4M2twGpp7za/8an4hm916RHwOudjyjPblYXMHMd1ANA5xZ1AQvnPFILIPiTbUFrAZSTbWmgHqA5Wcd6AGjP5hepAxCeBvsOdQAw2Pe2HqB1Zy3RGgBl6QatoAYAVu4ij5QHCD5exKE8AGbxV8IWKQ0Qto/OaMEC2A3EFjxaFqD4q1BkDVISILB2V5pDSQDM3bXagJYDKCEJXBqQUgCBxiV6gFIAeHCpFj2UAUD/Z5izCVACAGEkyulApwMUutGAAnQqAGhuRCyg0wAKt0McYAqAtH66SuQD7PWJ6sLYidu9/dZ/242dr9A5U5t+7EXs3w8fx+Pn4X0/tvz95r6wlKQJWwLEsNRQE0Dz6iuEJiewJguhwLzNjNzvRyjg1/lDA1tAxb7nAdt/ziV4rDYUwMfy+YMbMNqHKADL1dTREwapisgl0VVlUBw9mTY84yGVzxyescd/eh8Agu8zxn9+AHhut4P91IDZAAAAAElFTkSuQmCC"
    };
  }
};
