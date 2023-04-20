const fetchPopular = () => {
  const response = {
    data: [
      {
        "topCriticScore": 74.3840579710145,
        "tier": "Fair",
        "name": "Dead Island 2",
        "id": 1551,
        "images": {
          "box": {
            "og": "game/1551/o/6d7NeSLn.jpg",
            "sm": "game/1551/y64ZjQQs.jpg"
          }
        }
      },
      {
        "images": {
          "box": {
            "og": "game/14349/o/AtjXVavM.jpg",
            "sm": "game/14349/aJG7zTRK.jpg"
          }
        },
        "topCriticScore": 72.74509803921569,
        "tier": "Fair",
        "name": "Minecraft Legends",
        "id": 14349
      },
      {
        "images": {
          "box": {
            "og": "game/14513/o/NXUKVhTx.jpg",
            "sm": "game/14513/72QsrqIQ.jpg"
          }
        },
        "topCriticScore": 81,
        "tier": "Strong",
        "name": "Advance Wars 1+2: Re-Boot Camp",
        "id": 14513
      },
      {
        "images": {
          "box": {
            "og": "game/14747/o/7CSM5oQv.jpg",
            "sm": "game/14747/grteWEGg.jpg"
          }
        },
        "topCriticScore": 79,
        "tier": "Strong",
        "name": "Mega Man Battle Network Legacy Collection",
        "id": 14747
      },
      {
        "images": {
          "box": {
            "og": "game/14743/o/fzBSXKJB.jpg",
            "sm": "game/14743/6skFD5ng.jpg"
          }
        },
        "topCriticScore": 83,
        "tier": "Strong",
        "name": "Coffee Talk Episode 2: Hibiscus & Butterfly",
        "id": 14743
      },
      {
        "images": {
          "box": {
            "og": "game/14537/o/iF6h54T9.jpg",
            "sm": "game/14537/z7BPz7PA.jpg"
          }
        },
        "topCriticScore": 76.47826086956522,
        "tier": "Strong",
        "name": "Sherlock Holmes The Awakened",
        "id": 14537
      },
      {
        "images": {
          "box": {
            "og": "game/14635/o/m4RvcDAL.jpg",
            "sm": "game/14635/txXbqRtq.jpg"
          }
        },
        "topCriticScore": 75.61538461538461,
        "tier": "Strong",
        "name": "EA Sports PGA Tour",
        "id": 14635
      },
      {
        "images": {
          "box": {
            "og": "game/14200/o/re17RGe6.jpg",
            "sm": "game/14200/W34oCoSk.jpg"
          }
        },
        "topCriticScore": 92.0576923076923,
        "tier": "Mighty",
        "name": "Resident Evil 4 (2023 Remake)",
        "id": 14200
      },
      {
        "images": {
          "box": {
            "og": "game/14534/o/MdJ381CH.jpg",
            "sm": "game/14534/iuf82ydD.jpg"
          }
        },
        "topCriticScore": 79.9090909090909,
        "tier": "Strong",
        "name": "The Mageseeker: A League of Legends Story",
        "id": 14534
      },
      {
        "images": {
          "box": {
            "og": "game/14528/o/LjZt3FeF.jpg",
            "sm": "game/14528/VJMn91SS.jpg"
          }
        },
        "topCriticScore": 68.10714285714286,
        "tier": "Fair",
        "name": "Road 96: Mile 0",
        "id": 14528
      },
      {
        "images": {
          "box": {
            "og": "game/14348/o/Lf8jHnhY.jpg",
            "sm": "game/14348/SSvGIKWg.jpg"
          }
        },
        "topCriticScore": 82.45238095238095,
        "tier": "Strong",
        "name": "Dredge",
        "id": 14348
      },
      {
        "images": {
          "box": {
            "og": "game/14347/o/VYxk2WIQ.jpg",
            "sm": "game/14347/fKVzft73.jpg"
          }
        },
        "topCriticScore": 80.78333333333333,
        "tier": "Strong",
        "name": "MLB The Show 23",
        "id": 14347
      },
      {
        "images": {
          "box": {
            "og": "game/14796/o/i0zitRNr.jpg",
            "sm": "game/14796/GSL5LOFC.jpg"
          }
        },
        "topCriticScore": 80,
        "tier": "Strong",
        "name": "Horizon Forbidden West: Burning Shores",
        "id": 14796
      },
      {
        "images": {
          "box": {
            "og": "game/14460/o/Jfu67nFr.jpg",
            "sm": "game/14460/eNwYRDFD.jpg"
          }
        },
        "topCriticScore": 82.8,
        "tier": "Strong",
        "name": "Atelier Ryza 3: Alchemist of the End & the Secret Key",
        "id": 14460
      },
      {
        "images": {
          "box": {
            "og": "game/14515/o/fAPF3SXL.jpg",
            "sm": "game/14515/uOlEqA8G.jpg"
          }
        },
        "topCriticScore": 79.1875,
        "tier": "Strong",
        "name": "GrimGrimoire OnceMore",
        "id": 14515
      },
      {
        "topCriticScore": 81.90384615384616,
        "tier": "Strong",
        "name": "The Last of Us Part I",
        "id": 13283,
        "images": {
          "box": {
            "og": "game/13283/o/SOoHaKrl.jpg",
            "sm": "game/13283/nDrvMvGA.jpg"
          }
        }
      },
      {
        "images": {
          "box": {
            "og": "game/14530/o/fJMFgx4v.jpg",
            "sm": "game/14530/Rt00Y40x.jpg"
          }
        },
        "topCriticScore": 75.58823529411765,
        "tier": "Strong",
        "name": "Meet Your Maker",
        "id": 14530
      },
      {
        "images": {
          "box": {
            "og": "game/14741/o/WXLLwYms.jpg",
            "sm": "game/14741/mheN6CHD.jpg"
          }
        },
        "topCriticScore": 74,
        "tier": "Fair",
        "name": "Tron: Identity",
        "id": 14741
      },
      {
        "images": {
          "box": {
            "og": "game/14464/o/4xSBnmy5.jpg",
            "sm": "game/14464/ACkJLSuW.jpg"
          }
        },
        "topCriticScore": 77.53488372093024,
        "tier": "Strong",
        "name": "Tchia",
        "id": 14464
      },
      {
        "images": {
          "box": {
            "og": "game/14346/o/DtL0WYix.jpg",
            "sm": "game/14346/fCJcu5jZ.jpg"
          }
        },
        "topCriticScore": 81.25,
        "tier": "Strong",
        "name": "WWE 2K23",
        "id": 14346
      },
      {
        "topCriticScore": 82.73333333333333,
        "tier": "Strong",
        "name": "EVERSPACE 2",
        "id": 10830,
        "images": {
          "box": {
            "og": "game/10830/o/LcTrjYuP.jpg",
            "sm": "game/10830/BUkTA7Kx.jpg"
          }
        }
      },
      {
        "images": {
          "box": {
            "og": "game/14493/o/6x1Y2heP.jpg",
            "sm": "game/14493/RA2HI5V0.jpg"
          }
        },
        "topCriticScore": 56.42857142857143,
        "tier": "Weak",
        "name": "Crime Boss: Rockay City",
        "id": 14493
      },
      {
        "images": {
          "box": {
            "og": "game/14791/o/iEN8lyd2.jpg",
            "sm": "game/14791/zIhuUF4y.jpg"
          }
        },
        "topCriticScore": 61.666666666666664,
        "tier": "Weak",
        "name": "God of Rock",
        "id": 14791
      },
      {
        "images": {
          "box": {
            "og": "game/14511/o/qhM4ltvl.jpg",
            "sm": "game/14511/FFGc30N9.jpg"
          }
        },
        "topCriticScore": 64,
        "tier": "Weak",
        "name": "Curse of the Sea Rats",
        "id": 14511
      },
      {
        "images": {
          "box": {
            "og": "game/14432/o/4U5eBpcJ.jpg",
            "sm": "game/14432/N4erB3w7.jpg"
          }
        },
        "topCriticScore": 80.8529411764706,
        "tier": "Strong",
        "name": "Bayonetta Origins: Cereza and the Lost Demon",
        "id": 14432
      },
      {
        "images": {
          "box": {
            "og": "game/14507/o/X5LO8hMe.jpg",
            "sm": "game/14507/JYp62d2i.jpg"
          }
        },
        "topCriticScore": 77.55555555555556,
        "tier": "Strong",
        "name": "Wildfrost",
        "id": 14507
      },
      {
        "topCriticScore": 80.2,
        "tier": "Strong",
        "name": "Final Fantasy Pixel Remaster",
        "id": 11746,
        "images": {
          "box": {
            "og": "game/11746/o/XmuBS26i.jpg",
            "sm": "game/11746/QMhUZCL0.jpg"
          }
        }
      },
      {
        "images": {
          "box": {
            "og": "game/14451/o/lbbXLaDy.jpg",
            "sm": "game/14451/eCCWOUOs.jpg"
          }
        },
        "topCriticScore": 79.24,
        "tier": "Strong",
        "name": "Have a Nice Death",
        "id": 14451
      },
      {
        "images": {
          "box": {
            "og": "game/14483/o/biUcPNut.jpg",
            "sm": "game/14483/ACRHlvoj.jpg"
          }
        },
        "topCriticScore": 81.5,
        "tier": "Strong",
        "name": "Terra Nil",
        "id": 14483
      },
      {
        "images": {
          "box": {
            "og": "game/14798/o/5Q02rswk.jpg",
            "sm": "game/14798/nmH7bdGp.jpg"
          }
        },
        "topCriticScore": 73.75,
        "tier": "Fair",
        "name": "Disney Speedstorm",
        "id": 14798
      },
      {
        "images": {
          "box": {
            "og": "game/14503/o/V3uSFjsL.jpg",
            "sm": "game/14503/WsCQanbV.jpg"
          }
        },
        "topCriticScore": 56.166666666666664,
        "tier": "Weak",
        "name": "Ravenbound",
        "id": 14503
      },
      {
        "images": {
          "box": {
            "og": "game/14766/o/vpx7U5Gb.jpg",
            "sm": "game/14766/H059WUun.jpg"
          }
        },
        "topCriticScore": 76.83333333333333,
        "tier": "Strong",
        "name": "Cannon Dancer Osman",
        "id": 14766
      },
      {
        "topCriticScore": 76.89814814814815,
        "tier": "Strong",
        "name": "Ghostwire: Tokyo",
        "id": 12720,
        "images": {
          "box": {
            "og": "game/12720/o/0VsnSL7Y.jpg",
            "sm": "game/12720/ht4IXZkb.jpg"
          }
        }
      },
      {
        "topCriticScore": 77.6923076923077,
        "tier": "Strong",
        "name": "Final Fantasy II Pixel Remaster",
        "id": 11747,
        "images": {
          "box": {
            "og": "game/11747/o/cmq3wBdj.jpg",
            "sm": "game/11747/qxDX9VpF.jpg"
          }
        }
      },
      {
        "topCriticScore": 87.7,
        "tier": "Mighty",
        "name": "Final Fantasy VI Pixel Remaster",
        "id": 12797,
        "images": {
          "box": {
            "og": "game/12797/o/38stk8XU.jpg",
            "sm": "game/12797/8Ztqb22D.jpg"
          }
        }
      },
      {
        "images": {
          "box": {
            "og": "game/14505/o/8R72XIMm.jpg",
            "sm": "game/14505/UPw6ewI3.jpg"
          }
        },
        "topCriticScore": 66.2,
        "tier": "Fair",
        "name": "The Last Worker",
        "id": 14505
      },
      {
        "images": {
          "box": {
            "og": "game/14496/o/TZva1T7H.jpg",
            "sm": "game/14496/WbrEolYt.jpg"
          }
        },
        "topCriticScore": 74.42857142857143,
        "tier": "Fair",
        "name": "LUNARK",
        "id": 14496
      },
      {
        "images": {
          "box": {
            "og": "game/14510/o/xA2Iljsh.jpg",
            "sm": "game/14510/1J0R0raW.jpg"
          }
        },
        "topCriticScore": -1,
        "tier": "",
        "name": "Infinite Guitars",
        "id": 14510
      },
      {
        "images": {
          "box": {
            "og": "game/14500/o/WYf2cdcY.jpg",
            "sm": "game/14500/DBLPZDnd.jpg"
          }
        },
        "topCriticScore": 78,
        "tier": "Strong",
        "name": "Forza Horizon 5: Rally Adventure",
        "id": 14500
      },
      {
        "images": {
          "box": {
            "og": "game/14398/o/CPY1lUc7.jpg",
            "sm": "game/14398/QUgmJZ0g.jpg"
          }
        },
        "topCriticScore": 83.2258064516129,
        "tier": "Strong",
        "name": "The Legend of Heroes: Trails to Azure",
        "id": 14398
      },
      {
        "images": {
          "box": {
            "og": "game/14474/o/OwoTP4Q9.jpg",
            "sm": "game/14474/2dsxXfnZ.jpg"
          }
        },
        "topCriticScore": 69.47368421052632,
        "tier": "Fair",
        "name": "Storyteller",
        "id": 14474
      },
      {
        "topCriticScore": 86.5,
        "tier": "Mighty",
        "name": "Final Fantasy V Pixel Remaster",
        "id": 12315,
        "images": {
          "box": {
            "og": "game/12315/o/1uRmLVC7.jpg",
            "sm": "game/12315/hHHdnvDo.jpg"
          }
        }
      },
      {
        "images": {
          "box": {
            "og": "game/14562/o/Um581mqG.jpg",
            "sm": "game/14562/Ee0QdAff.jpg"
          }
        },
        "topCriticScore": 74,
        "tier": "Fair",
        "name": "Melon Journey: Bittersweet Memories",
        "id": 14562
      },
      {
        "topCriticScore": 81.08333333333333,
        "tier": "Strong",
        "name": "Final Fantasy III Pixel Remaster",
        "id": 11748,
        "images": {
          "box": {
            "og": "game/11748/o/LeHeHcu0.jpg",
            "sm": "game/11748/Vbjpe2yE.jpg"
          }
        }
      },
      {
        "topCriticScore": 86.5,
        "tier": "Mighty",
        "name": "Final Fantasy IV Pixel Remaster",
        "id": 11936,
        "images": {
          "box": {
            "og": "game/11936/o/jsvnsLGN.jpg",
            "sm": "game/11936/tusPUolg.jpg"
          }
        }
      },
      {
        "images": {
          "box": {
            "og": "game/14409/o/LN625Hzo.jpg",
            "sm": "game/14409/WTb9nZO7.jpg"
          }
        },
        "topCriticScore": 69.57142857142857,
        "tier": "Fair",
        "name": "Fatal Frame: Mask of the Lunar Eclipse",
        "id": 14409
      },
      {
        "images": {
          "box": {
            "og": "game/13900/o/1LPWL8Br.jpg",
            "sm": "game/13900/ygD5mjxF.jpg"
          }
        },
        "topCriticScore": 85.32352941176471,
        "tier": "Mighty",
        "name": "Octopath Traveler II",
        "id": 13900
      },
      {
        "images": {
          "box": {
            "og": "game/14418/o/RtspilW2.jpg",
            "sm": "game/14418/k4jyn8iJ.jpg"
          }
        },
        "topCriticScore": 60.27272727272727,
        "tier": "Weak",
        "name": "Mato Anomalies",
        "id": 14418
      },
      {
        "images": {
          "box": {
            "og": "game/14764/o/a7w3nAr3.jpg",
            "sm": "game/14764/RQxV0931.jpg"
          }
        },
        "topCriticScore": 82.5,
        "tier": "Strong",
        "name": "Total War: Warhammer III - Forge of the Chaos Dwarfs",
        "id": 14764
      }
    ],
  };
  return response.data;
}

export default fetchPopular;