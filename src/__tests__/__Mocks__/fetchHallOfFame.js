const fetchHallOfFame = () => {
  const response = {
    data: [
      {
        "name": "Hi-Fi Rush",
        "id": 14227,
        "firstReleaseDate": "2023-01-25T00:00:00.000Z",
        "tier": "Mighty",
        "images": {
          "box": {
            "og": "game/14227/o/YtYpzvpp.jpg",
            "sm": "game/14227/aEdZRDWi.jpg"
          },
          "banner": {
            "og": "game/14227/o/b1hnNk54.jpg",
            "sm": "game/14227/qN8DtK1o.jpg"
          }
        },
        "topCriticScore": 89
      },
      {
        "name": "Vernal Edge",
        "id": 14467,
        "firstReleaseDate": "2023-03-14T00:00:00.000Z",
        "tier": "Mighty",
        "images": {
          "box": {
            "og": "game/14467/o/Jff2LQiX.jpg",
            "sm": "game/14467/oOLZqSLj.jpg"
          },
          "banner": {
            "og": "game/14467/o/V4KB34hZ.jpg",
            "sm": "game/14467/hyvC53u4.jpg"
          }
        },
        "topCriticScore": 88
      },
      {
        "name": "Theatrhythm Final Bar Line",
        "id": 14292,
        "firstReleaseDate": "2023-02-16T00:00:00.000Z",
        "tier": "Mighty",
        "images": {
          "box": {
            "og": "game/14292/o/BkbklEmP.jpg",
            "sm": "game/14292/NHgUbU8f.jpg"
          },
          "banner": {
            "og": "game/14292/o/dWrNByDx.jpg",
            "sm": "game/14292/A18RytjE.jpg"
          }
        },
        "topCriticScore": 86
      },
      {
        "name": "Octopath Traveler II",
        "id": 13900,
        "firstReleaseDate": "2023-02-24T00:00:00.000Z",
        "tier": "Mighty",
        "images": {
          "box": {
            "og": "game/13900/o/1LPWL8Br.jpg",
            "sm": "game/13900/ygD5mjxF.jpg"
          },
          "banner": {
            "og": "game/13900/o/i3BYmYdP.jpg",
            "sm": "game/13900/zogYBA8N.jpg"
          }
        },
        "topCriticScore": 85
      },
      {
        "name": "A Space for the Unbound",
        "id": 14202,
        "firstReleaseDate": "2023-01-19T00:00:00.000Z",
        "tier": "Mighty",
        "images": {
          "box": {
            "og": "game/14202/o/nAFOkb4U.jpg",
            "sm": "game/14202/oPii3BGj.jpg"
          },
          "banner": {
            "og": "game/14202/o/5pRFMEgS.jpg",
            "sm": "game/14202/dwQaQRxs.jpg"
          }
        },
        "topCriticScore": 85
      },
      {
        "name": "Hogwarts Legacy",
        "id": 13898,
        "firstReleaseDate": "2023-02-10T00:00:00.000Z",
        "tier": "Mighty",
        "images": {
          "box": {
            "og": "game/13898/o/KTqY7Kq8.jpg",
            "sm": "game/13898/00BLF63l.jpg"
          },
          "banner": {
            "og": "game/13898/o/m0V9CQ4G.jpg",
            "sm": "game/13898/bY63v1rL.jpg"
          }
        },
        "topCriticScore": 84
      },
      {
        "name": "The Legend of Heroes: Trails to Azure",
        "id": 14398,
        "firstReleaseDate": "2023-03-14T00:00:00.000Z",
        "tier": "Strong",
        "images": {
          "box": {
            "og": "game/14398/o/CPY1lUc7.jpg",
            "sm": "game/14398/QUgmJZ0g.jpg"
          },
          "banner": {
            "og": "game/14398/o/l7vdVtO9.jpg",
            "sm": "game/14398/FLDtsUrk.jpg"
          }
        },
        "topCriticScore": 83
      },
      {
        "name": "Atelier Ryza 3: Alchemist of the End & the Secret Key",
        "id": 14460,
        "firstReleaseDate": "2023-03-24T00:00:00.000Z",
        "tier": "Strong",
        "images": {
          "box": {
            "og": "game/14460/o/Jfu67nFr.jpg",
            "sm": "game/14460/eNwYRDFD.jpg"
          },
          "banner": {
            "og": "game/14460/o/SOXsCwkD.jpg",
            "sm": "game/14460/8Q9a02If.jpg"
          }
        },
        "topCriticScore": 83
      },
      {
        "name": "The Mageseeker: A League of Legends Story",
        "id": 14534,
        "firstReleaseDate": "2023-04-18T00:00:00.000Z",
        "tier": "Strong",
        "images": {
          "box": {
            "og": "game/14534/o/MdJ381CH.jpg",
            "sm": "game/14534/iuf82ydD.jpg"
          },
          "banner": {
            "og": "game/14534/o/XU2p3IlN.jpg",
            "sm": "game/14534/oro0UzvP.jpg"
          }
        },
        "topCriticScore": 83
      },
      {
        "name": "Dredge",
        "id": 14348,
        "firstReleaseDate": "2023-03-30T00:00:00.000Z",
        "tier": "Strong",
        "images": {
          "box": {
            "og": "game/14348/o/Lf8jHnhY.jpg",
            "sm": "game/14348/SSvGIKWg.jpg"
          },
          "banner": {
            "og": "game/14348/o/n4brirFi.jpg",
            "sm": "game/14348/7INCVujs.jpg"
          }
        },
        "topCriticScore": 82
      },
      {
        "name": "Labyrinth of Galleria: The Moon Society",
        "id": 14284,
        "firstReleaseDate": "2023-02-14T00:00:00.000Z",
        "tier": "Strong",
        "images": {
          "box": {
            "og": "game/14284/o/ZO8FSZLG.jpg",
            "sm": "game/14284/K3y86UwY.jpg"
          },
          "banner": {
            "og": "game/14284/o/FulOR6tM.jpg",
            "sm": "game/14284/ct0l3B5G.jpg"
          }
        },
        "topCriticScore": 82
      },
      {
        "name": "The Murder of Sonic The Hedgehog",
        "id": 14520,
        "firstReleaseDate": "2023-03-31T00:00:00.000Z",
        "tier": "Strong",
        "images": {
          "box": {
            "og": "game/14520/o/nWyTp5ND.jpg",
            "sm": "game/14520/UqJ30S5a.jpg"
          },
          "banner": {
            "og": "game/14520/o/iyjFJXUS.jpg",
            "sm": "game/14520/jI0DT0uV.jpg"
          }
        },
        "topCriticScore": 82
      }
    ],
  };
  const data = response.data;
  return data;
};

export default fetchHallOfFame;