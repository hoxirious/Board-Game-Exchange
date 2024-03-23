const boardGames = [
  {
    "title": "Catan",
    "image": "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg",
    "category": "Economic,Negotiation"
  },
  {
    "title": "Carcassonne",
    "image": "https://cf.geekdo-images.com/original/img/o4p6f88SGE899BTNMzTvERVWZ-M=/0x0/pic2337577.jpg",
    "category": "Medieval,City Building,Territory Building"
  },
  {
    "title": "Pandemic",
    "image": "https://cf.geekdo-images.com/original/img/j-pfXZ_0GmOowohzD_T6NDAWGSA=/0x0/pic1534148.jpg",
    "category": "Medical"
  },
  {
    "title": "7 Wonders",
    "image": "https://cf.geekdo-images.com/original/img/3DP_RW5lTX0WrV67s8qi8CsiXoQ=/0x0/pic860217.jpg",
    "category": "Economic,Card Game,Ancient,Civilization,City Building"
  },
  {
    "title": "Dominion",
    "image": "https://cf.geekdo-images.com/original/img/oN8CHUZ8CF6P1dFnhMCJXvE8SOk=/0x0/pic394356.jpg",
    "category": "Card Game,Medieval"
  },
  {
    "title": "Ticket to Ride",
    "image": "https://cf.geekdo-images.com/original/img/bOcAJxw-W-B2Gz0x67z8bjqzJgY=/0x0/pic38668.jpg",
    "category": "Trains"
  },
  {
    "title": "Codenames",
    "image": "https://cf.geekdo-images.com/original/img/MJ6MNz8-_rb1C2VUTnYBTYOiiy0=/0x0/pic2582929.jpg",
    "category": "Card Game,Deduction,Word Game,Party Game,Spies/Secret Agents"
  },
  {
    "title": "Agricola",
    "image": "https://cf.geekdo-images.com/original/img/WQS7FRLHzvFQ8mjt94Au4W8CYn0=/0x0/pic831744.jpg",
    "category": "Economic,Farming,Animals"
  },
  {
    "title": "Puerto Rico",
    "image": "https://cf.geekdo-images.com/original/img/RvdWBkmDks7AN8sodR4PyVcponA=/0x0/pic158548.jpg",
    "category": "Economic,Farming,City Building"
  },
  {
    "title": "Small World",
    "image": "https://cf.geekdo-images.com/original/img/WvXe0YG-Mj2KBtyRSBNtRw4DIx0=/0x0/pic428828.jpg",
    "category": "Fantasy,Fighting,Territory Building"
  },
  {
    "title": "Terraforming Mars",
    "image": "https://cf.geekdo-images.com/original/img/o8z_levBVArPUKI7ZrIysZEs1A0=/0x0/pic3536616.jpg",
    "category": "Economic,Science Fiction,Space Exploration,Territory Building,Industry / Manufacturing,Environmental"
  },
  {
    "title": "King of Tokyo",
    "image": "https://cf.geekdo-images.com/original/img/ajEqmO5djVibsC72Ek1citOCJNA=/0x0/pic3043734.jpg",
    "category": "Science Fiction,Dice,Fighting,Movies / TV / Radio theme"
  },
  {
    "title": "Ticket to Ride: Europe",
    "image": "https://cf.geekdo-images.com/original/img/lN5ivSfgaJwEMXgyLijCtyKVUBs=/0x0/pic66668.jpg",
    "category": "Trains"
  },
  {
    "title": "Power Grid",
    "image": "https://cf.geekdo-images.com/original/img/h8UWt217vzbMWSla-r8O86a6fDc=/0x0/pic4459753.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "Splendor",
    "image": "https://cf.geekdo-images.com/original/img/PgaVULm0QKeFV2zTro4hJEb70Yk=/0x0/pic1904079.jpg",
    "category": "Economic,Card Game,Renaissance"
  },
  {
    "title": "Love Letter",
    "image": "https://cf.geekdo-images.com/original/img/GuLL8qnP2Kv6cJatUQskLg9Ad0s=/0x0/pic1401448.jpg",
    "category": "Card Game,Renaissance,Deduction"
  },
  {
    "title": "7 Wonders Duel",
    "image": "https://cf.geekdo-images.com/original/img/M6wL1YFgW-PsdtJ328m2QiJf1K8=/0x0/pic3376065.jpg",
    "category": "Card Game,Ancient,Civilization,City Building"
  },
  {
    "title": "Scythe",
    "image": "https://cf.geekdo-images.com/original/img/enxCZt0Cn78-rlvmPvGtOej1ios=/0x0/pic3163924.jpg",
    "category": "Economic,Science Fiction,Fighting,Territory Building"
  },
  {
    "title": "Dixit",
    "image": "https://cf.geekdo-images.com/original/img/m74nctbYaqTy03r8s_i_KTyvbYQ=/0x0/pic3483909.jpg",
    "category": "Card Game,Humor,Party Game"
  },
  {
    "title": "Citadels",
    "image": "https://cf.geekdo-images.com/original/img/URnubCk0xqx2UN9dW10JO22V4qg=/0x0/pic3239104.jpg",
    "category": "Card Game,Fantasy,Medieval,Bluffing,City Building,Deduction"
  },
  {
    "title": "Azul",
    "image": "https://cf.geekdo-images.com/original/img/9-SR48jyfxs4At6255sjHoly2sw=/0x0/pic3718275.jpg",
    "category": "Abstract Strategy,Renaissance"
  },
  {
    "title": "Race for the Galaxy",
    "image": "https://cf.geekdo-images.com/original/img/-2F-mPR0ssTm2IAsMAvnZzR0dn4=/0x0/pic236327.jpg",
    "category": "Economic,Card Game,Civilization,Science Fiction,Space Exploration"
  },
  {
    "title": "Lords of Waterdeep",
    "image": "https://cf.geekdo-images.com/original/img/PTVnjG9ersdKq6feZTpq5SkiPPw=/0x0/pic1116080.jpg",
    "category": "Fantasy,City Building"
  },
  {
    "title": "The Castles of Burgundy",
    "image": "https://cf.geekdo-images.com/original/img/w3EsrbF6-Gvr5_qBeF7YL1Rslnk=/0x0/pic1176894.jpg",
    "category": "Medieval,Dice,Territory Building"
  },
  {
    "title": "Stone Age",
    "image": "https://cf.geekdo-images.com/original/img/Dt2tBgnvuWww89kSQqOW0vvEJr4=/0x0/pic1632539.jpg",
    "category": "Economic,Dice,Prehistoric"
  },
  {
    "title": "Patchwork",
    "image": "https://cf.geekdo-images.com/original/img/Z8MYZktgvGTtIikMv9HSpD_ERAI=/0x0/pic2270442.jpg",
    "category": "Abstract Strategy,Puzzle"
  },
  {
    "title": "Munchkin",
    "image": "https://cf.geekdo-images.com/original/img/vp7LtUmBZgIRMwa8qwRpVkHIFnU=/0x0/pic1871016.jpg",
    "category": "Card Game,Fantasy,Fighting,Humor"
  },
  {
    "title": "Forbidden Island",
    "image": "https://cf.geekdo-images.com/original/img/GxHuu04GdLw8PAnt9SOYRU5gR1A=/0x0/pic646458.jpg",
    "category": "Fantasy,Adventure"
  },
  {
    "title": "Twilight Struggle",
    "image": "https://cf.geekdo-images.com/original/img/ZPnnm7v2RTJ6fAZeeseA5WbC9DU=/0x0/pic361592.jpg",
    "category": "Political,Wargame,Modern Warfare"
  },
  {
    "title": "Pandemic Legacy: Season 1",
    "image": "https://cf.geekdo-images.com/original/img/P_SwsOtPLqgk2ScCgI2YrI9Rg6I=/0x0/pic2452831.png",
    "category": "Medical,Environmental"
  },
  {
    "title": "Dead of Winter: A Crossroads Game",
    "image": "https://cf.geekdo-images.com/original/img/pOYQOSR1CnXcN6pEPx3yFDjKFaA=/0x0/pic3016500.jpg",
    "category": "Bluffing,Horror,Deduction,Zombies"
  },
  {
    "title": "Terra Mystica",
    "image": "https://cf.geekdo-images.com/original/img/CynjY3GgwPTg34abNIv8eLX1pXs=/0x0/pic1356616.jpg",
    "category": "Economic,Fantasy,Civilization,Territory Building"
  },
  {
    "title": "Bohnanza",
    "image": "https://cf.geekdo-images.com/original/img/Hwyjq4cYfXY2l07Hm9mncHlrI4U=/0x0/pic69366.jpg",
    "category": "Negotiation,Card Game,Farming"
  },
  {
    "title": "Hanabi",
    "image": "https://cf.geekdo-images.com/original/img/Wkrf8z3pMlOFKwxafbw9-Ob404s=/0x0/pic2007286.jpg",
    "category": "Card Game,Deduction,Memory"
  },
  {
    "title": "Gloomhaven",
    "image": "https://cf.geekdo-images.com/original/img/lDN358RgcYvQfYYN6Oy2TXpifyM=/0x0/pic2437871.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Arkham Horror",
    "image": "https://cf.geekdo-images.com/original/img/oArWMFiDP2tYbJvCY52jeLwlCyU=/0x0/pic175966.jpg",
    "category": "Fantasy,Fighting,Adventure,Horror,Novel-based"
  },
  {
    "title": "Lost Cities",
    "image": "https://cf.geekdo-images.com/original/img/d47X0B235NonZ2PJGCFGNZQVWvo=/0x0/pic4597095.jpg",
    "category": "Card Game,Exploration"
  },
  {
    "title": "Betrayal at House on the Hill",
    "image": "https://cf.geekdo-images.com/original/img/U9FGhiyJR7_TM4IPQogUjbcoPmQ=/0x0/pic5146864.png",
    "category": "Exploration,Miniatures,Adventure,Horror"
  },
  {
    "title": "The Resistance",
    "image": "https://cf.geekdo-images.com/original/img/VDXFwn8wDc4yObdS5kUABZK6nhI=/0x0/pic2576459.jpg",
    "category": "Negotiation,Card Game,Bluffing,Science Fiction,Deduction,Party Game,Spies/Secret Agents"
  },
  {
    "title": "Jaipur",
    "image": "https://cf.geekdo-images.com/original/img/oSMirTNRZpn6QAXpDLDrGixCyAY=/0x0/pic5100947.jpg",
    "category": "Card Game,Animals"
  },
  {
    "title": "Coup",
    "image": "https://cf.geekdo-images.com/original/img/4zmqrQ4v-rufRQM_oinFDQ6HykI=/0x0/pic2016054.jpg",
    "category": "Political,Card Game,Bluffing,Deduction,Party Game"
  },
  {
    "title": "Star Realms",
    "image": "https://cf.geekdo-images.com/original/img/XRgMJVv4YweLlANgVvxeZsQ4lm0=/0x0/pic1903816.jpg",
    "category": "Card Game,Science Fiction,Fighting"
  },
  {
    "title": "Takenoko",
    "image": "https://cf.geekdo-images.com/original/img/7SDbClO-4sN6LICvfySB3jrFUhU=/0x0/pic1912529.jpg",
    "category": "Farming,Territory Building,Animals,Environmental"
  },
  {
    "title": "Battlestar Galactica: The Board Game",
    "image": "https://cf.geekdo-images.com/original/img/-hZFpTm-evjyuLD_bj-y845-4f8=/0x0/pic354500.jpg",
    "category": "Political,Bluffing,Science Fiction,Space Exploration,Deduction,Movies / TV / Radio theme,Spies/Secret Agents"
  },
  {
    "title": "Sushi Go!",
    "image": "https://cf.geekdo-images.com/original/img/IlYW00i351ucPwf_aHiE0v-HNdM=/0x0/pic1900075.jpg",
    "category": "Card Game"
  },
  {
    "title": "Robinson Crusoe: Adventures on the Cursed Island",
    "image": "https://cf.geekdo-images.com/original/img/i1d3Zbbw5iYJ5_Bd0unqwgM8CI0=/0x0/pic3165731.jpg",
    "category": "Exploration,Fighting,Adventure,Novel-based"
  },
  {
    "title": "Wingspan",
    "image": "https://cf.geekdo-images.com/original/img/V_R5oe5Huj5guJaBhgbQkZR1PLE=/0x0/pic4458123.jpg",
    "category": "Card Game,Animals,Educational"
  },
  {
    "title": "Blood Rage",
    "image": "https://cf.geekdo-images.com/original/img/p4IovYzLVXqxY40lbGUu92VxaIQ=/0x0/pic2439223.jpg",
    "category": "Fantasy,Mythology,Fighting"
  },
  {
    "title": "Magic: The Gathering",
    "image": "https://cf.geekdo-images.com/original/img/ikdZhkufC7FFx9v5KEaGpWqo13Y=/0x0/pic163749.jpg",
    "category": "Card Game,Fantasy,Collectible Components,Fighting"
  },
  {
    "title": "Five Tribes",
    "image": "https://cf.geekdo-images.com/original/img/ysxyEQPPbio1xvtx56l_8P8BkYs=/0x0/pic2055255.jpg",
    "category": "Fantasy,Mythology,Animals,Arabian"
  },
  {
    "title": "Dominion: Intrigue",
    "image": "https://cf.geekdo-images.com/original/img/r0aALn-3X6WgRcnDqVxbxGSG0tw=/0x0/pic460011.jpg",
    "category": "Card Game,Medieval"
  },
  {
    "title": "Mysterium",
    "image": "https://cf.geekdo-images.com/original/img/0Roco0dhRvVW8QUZjUl2N-Yn9bg=/0x0/pic2601683.jpg",
    "category": "Horror,Deduction,Party Game,Murder/Mystery"
  },
  {
    "title": "Risk",
    "image": "https://cf.geekdo-images.com/original/img/Qw76umtYI1pS4aL8EOSM1JCKzTQ=/0x0/pic4916782.jpg",
    "category": "Wargame,Territory Building"
  },
  {
    "title": "Tzolk'in: The Mayan Calendar",
    "image": "https://cf.geekdo-images.com/original/img/b_3SHZiUpcmrIT5hU8wVF0SDX8k=/0x0/pic1413480.jpg",
    "category": "Economic,Ancient,Civilization,Farming,Mythology"
  },
  {
    "title": "Galaxy Trucker",
    "image": "https://cf.geekdo-images.com/original/img/v0GLWVGXtaYIglLktLUBRr3s4gE=/0x0/pic3926631.jpg",
    "category": "Science Fiction,Space Exploration,Real-time,Transportation"
  },
  {
    "title": "Hive",
    "image": "https://cf.geekdo-images.com/original/img/_EUpzmJKbLkOwYMZA_sOmyjGnlI=/0x0/pic791151.jpg",
    "category": "Abstract Strategy,Animals"
  },
  {
    "title": "Sheriff of Nottingham",
    "image": "https://cf.geekdo-images.com/original/img/LhRnbdwJ77VnRI_yQg2ZFiwEq1E=/0x0/pic2075830.jpg",
    "category": "Negotiation,Card Game,Medieval,Bluffing,Humor,Novel-based,Party Game"
  },
  {
    "title": "Kingdomino",
    "image": "https://cf.geekdo-images.com/original/img/iDSCIiCAd9SQHv3WoYX0QdvDE_0=/0x0/pic3132685.png",
    "category": "Medieval,City Building,Territory Building"
  },
  {
    "title": "Eldritch Horror",
    "image": "https://cf.geekdo-images.com/original/img/i0zxc-H4TlTFB-yE1v4gcLy3XfY=/0x0/pic1872452.jpg",
    "category": "Fantasy,Travel,Fighting,Adventure,Horror,Novel-based"
  },
  {
    "title": "Alhambra",
    "image": "https://cf.geekdo-images.com/original/img/kw2inREfU-Jpbpbv9VV1hGa0LWU=/0x0/pic4893652.jpg",
    "category": "Medieval,City Building,Arabian"
  },
  {
    "title": "A Game of Thrones: The Board Game (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/rCOyI5sRR9CtTaho5JJx_kFWta0=/0x0/pic1077906.jpg",
    "category": "Negotiation,Political,Fantasy,Bluffing,Wargame,Novel-based"
  },
  {
    "title": "Chess",
    "image": "https://cf.geekdo-images.com/original/img/kjE_203UAzAopd1voyWKAvXqFHw=/0x0/pic260745.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Caverna: The Cave Farmers",
    "image": "https://cf.geekdo-images.com/original/img/xLuIh5VNsD57GXfcBox_ZF1jH4o=/0x0/pic1790789.jpg",
    "category": "Economic,Fantasy,Farming,Animals"
  },
  {
    "title": "Monopoly",
    "image": "https://cf.geekdo-images.com/original/img/YIoseMjEJX5vxUaw-JuD4rUOfWE=/0x0/pic4235383.jpg",
    "category": "Economic,Negotiation"
  },
  {
    "title": "Mage Knight Board Game",
    "image": "https://cf.geekdo-images.com/original/img/AGyvx6NYd6Kq4HUztAObQVLEFWY=/0x0/pic1083380.jpg",
    "category": "Fantasy,Exploration,Fighting,Adventure"
  },
  {
    "title": "Cosmic Encounter",
    "image": "https://cf.geekdo-images.com/original/img/SUTj4d_zo6bjXVhZOACmW5gvtBw=/0x0/pic1521633.jpg",
    "category": "Negotiation,Bluffing,Science Fiction,Space Exploration"
  },
  {
    "title": "Caylus",
    "image": "https://cf.geekdo-images.com/original/img/90BzC8_Dgc9uDswnZsu7Qa3oHvI=/0x0/pic1638795.jpg",
    "category": "Economic,Medieval,City Building"
  },
  {
    "title": "Android: Netrunner",
    "image": "https://cf.geekdo-images.com/original/img/Wbp__Fl6QDKqzealhK2SDpoEk_g=/0x0/pic3738560.jpg",
    "category": "Card Game,Bluffing,Science Fiction,Collectible Components"
  },
  {
    "title": "Great Western Trail",
    "image": "https://cf.geekdo-images.com/original/img/F6LRHU_90d9ICvPLDXQ2rikYuuY=/0x0/pic4887376.jpg",
    "category": "American West,Animals"
  },
  {
    "title": "The Resistance: Avalon",
    "image": "https://cf.geekdo-images.com/original/img/kFDTpCfe476T1bzZUtNAbGyIjNg=/0x0/pic1398895.jpg",
    "category": "Negotiation,Card Game,Fantasy,Medieval,Bluffing,Deduction,Party Game,Spies/Secret Agents"
  },
  {
    "title": "Eclipse",
    "image": "https://cf.geekdo-images.com/original/img/583Qqo-5M56np8LqnFKcCuUfn7A=/0x0/pic1974056.jpg",
    "category": "Civilization,Science Fiction,Fighting,Wargame,Space Exploration"
  },
  {
    "title": "BANG!",
    "image": "https://cf.geekdo-images.com/original/img/ZgLAhswnvphPH_FplkciAQ-J9ic=/0x0/pic1170986.jpg",
    "category": "Card Game,Bluffing,Fighting,American West,Deduction"
  },
  {
    "title": "Concordia",
    "image": "https://cf.geekdo-images.com/original/img/abKLQBfHHaouqsLx7GGiIzqXBu8=/0x0/pic3453267.jpg",
    "category": "Economic,Ancient,Nautical"
  },
  {
    "title": "Scrabble",
    "image": "https://cf.geekdo-images.com/original/img/lVqLm3lRviB_an3_gAqhvSJ6riA=/0x0/pic404651.jpg",
    "category": "Word Game"
  },
  {
    "title": "Le Havre",
    "image": "https://cf.geekdo-images.com/original/img/Fs2MqRUBPQzORmEZbiVqSnBvHDg=/0x0/pic3330230.jpg",
    "category": "Economic,Nautical,City Building,Industry / Manufacturing"
  },
  {
    "title": "Viticulture Essential Edition",
    "image": "https://cf.geekdo-images.com/original/img/6KQbzbjV6HlxDZeqPwmrmR3gn6w=/0x0/pic2649952.jpg",
    "category": "Economic,Farming"
  },
  {
    "title": "Shadows over Camelot",
    "image": "https://cf.geekdo-images.com/original/img/qXAmMBPotbufchHTuIsGz59B010=/0x0/pic70547.jpg",
    "category": "Fantasy,Medieval,Mythology,Bluffing,Adventure,Deduction"
  },
  {
    "title": "Memoir '44",
    "image": "https://cf.geekdo-images.com/original/img/BWLGASv5ywVok8Be-qxkuM4AqtY=/0x0/pic43663.jpg",
    "category": "Miniatures,Wargame,World War II"
  },
  {
    "title": "Roll for the Galaxy",
    "image": "https://cf.geekdo-images.com/original/img/SBmipyinTpLle9HmAfE0jJWKj3I=/0x0/pic1473629.jpg",
    "category": "Economic,Civilization,Science Fiction,Dice,Space Exploration"
  },
  {
    "title": "Tigris & Euphrates",
    "image": "https://cf.geekdo-images.com/original/img/vd6LHDJ-u-TkAAWafD2yG9-U974=/0x0/pic2338267.jpg",
    "category": "Ancient,Civilization,Territory Building"
  },
  {
    "title": "Arkham Horror: The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/EQ0Kl-bH9RCI5aJWVLnAlAfo00E=/0x0/pic3122349.jpg",
    "category": "Card Game,Fantasy,Collectible Components,Adventure,Horror,Novel-based"
  },
  {
    "title": "Machi Koro",
    "image": "https://cf.geekdo-images.com/original/img/-0UXAhHj3Q992K_q2lOVDkjgjTo=/0x0/pic4783831.png",
    "category": "Card Game,Dice,City Building"
  },
  {
    "title": "Clank!: A Deck-Building Adventure",
    "image": "https://cf.geekdo-images.com/original/img/wKVNKaIsMedZeZj2579L01EDBTc=/0x0/pic4449526.jpg",
    "category": "Fantasy,Adventure"
  },
  {
    "title": "Santorini",
    "image": "https://cf.geekdo-images.com/original/img/2EnN8vsGamxMA1xNG5LcjVTxuiM=/0x0/pic3283110.png",
    "category": "Abstract Strategy,Ancient,Mythology"
  },
  {
    "title": "Forbidden Desert",
    "image": "https://cf.geekdo-images.com/original/img/wYvf6LExNhb3rflp_QYmCK_NhMc=/0x0/pic1528722.jpg",
    "category": "Fantasy,Science Fiction,Adventure"
  },
  {
    "title": "Saboteur",
    "image": "https://cf.geekdo-images.com/original/img/jhL_ucB9VxMroXQc5Zx0oGstH2U=/0x0/pic3989824.jpg",
    "category": "Card Game,Fantasy,Exploration,Bluffing,Party Game"
  },
  {
    "title": "Istanbul",
    "image": "https://cf.geekdo-images.com/original/img/mJdCiWN7ePw8Q73GDhXupvKfOnE=/0x0/pic1885326.jpg",
    "category": "Economic"
  },
  {
    "title": "El Grande",
    "image": "https://cf.geekdo-images.com/original/img/EsR_uFXj4lhQCZgbmHfNx97liPA=/0x0/pic5373572.png",
    "category": "Medieval,Renaissance"
  },
  {
    "title": "Colt Express",
    "image": "https://cf.geekdo-images.com/original/img/n9uCTxxSSZXPVnXRPSgGl6uZQ2w=/0x0/pic2869710.jpg",
    "category": "Fighting,American West,Trains"
  },
  {
    "title": "Smash Up",
    "image": "https://cf.geekdo-images.com/original/img/OS_VOWW91RutPZMh-uFK0CD4Nnw=/0x0/pic1269874.jpg",
    "category": "Card Game,Fantasy,Science Fiction,Humor,Pirates,Zombies"
  },
  {
    "title": "For Sale",
    "image": "https://cf.geekdo-images.com/original/img/vw0xKvS_ZIxGKFVSDtvPnebUI9A=/0x0/pic1513085.jpg",
    "category": "Economic,Card Game"
  },
  {
    "title": "Star Wars: X-Wing Miniatures Game",
    "image": "https://cf.geekdo-images.com/original/img/6GthoJMvWgSpxVoWF1TEbMtXWd4=/0x0/pic1603292.jpg",
    "category": "Bluffing,Science Fiction,Collectible Components,Miniatures,Wargame,Aviation / Flight,Movies / TV / Radio theme"
  },
  {
    "title": "T.I.M.E Stories",
    "image": "https://cf.geekdo-images.com/original/img/HgvRM7737qYJn6nFvfZ5IlSf800=/0x0/pic2617634.png",
    "category": "Science Fiction,Adventure,Puzzle,Mature / Adult"
  },
  {
    "title": "Tsuro",
    "image": "https://cf.geekdo-images.com/original/img/RnYj0vhdTav6LaS53HR3yKPo4ag=/0x0/pic875761.jpg",
    "category": "Fantasy,Abstract Strategy"
  },
  {
    "title": "Mansions of Madness: Second Edition",
    "image": "https://cf.geekdo-images.com/original/img/0jncNnMHVZqa4u3oMwVm2Zn84q8=/0x0/pic3118622.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure,Horror,Puzzle,Murder/Mystery"
  },
  {
    "title": "RoboRally",
    "image": "https://cf.geekdo-images.com/original/img/6Qod68Kgmb6NgXWdOglFnfAZiiE=/0x0/pic1000553.jpg",
    "category": "Science Fiction,Maze,Miniatures,Racing"
  },
  {
    "title": "Sagrada",
    "image": "https://cf.geekdo-images.com/original/img/OB-txvnkk0dTMShe_5l7zkUZ2y8=/0x0/pic3525224.jpg",
    "category": "Dice,Puzzle"
  },
  {
    "title": "Cards Against Humanity",
    "image": "https://cf.geekdo-images.com/original/img/jg6r3iBsIWQAIFhrcGlQ1o-ZfzQ=/0x0/pic2909692.jpg",
    "category": "Card Game,Print & Play,Humor,Party Game,Mature / Adult"
  },
  {
    "title": "Blokus",
    "image": "https://cf.geekdo-images.com/original/img/YAFla7Wy8VSzT6RGTGQOCt-9JfI=/0x0/pic2197702.jpg",
    "category": "Abstract Strategy,Territory Building"
  },
  {
    "title": "San Juan",
    "image": "https://cf.geekdo-images.com/original/img/FPl9jlozK3-QIbkWtK-RAE34Nr0=/0x0/pic174174.jpg",
    "category": "Economic,Card Game,City Building"
  },
  {
    "title": "Descent: Journeys in the Dark (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/jGVm6aG5Ek-qxTIaWyzN67jjylc=/0x0/pic1180640.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Camel Up",
    "image": "https://cf.geekdo-images.com/original/img/EabhoQOn-hB-i3eclgtDqXcgtCs=/0x0/pic2031446.png",
    "category": "Dice,Racing,Animals"
  },
  {
    "title": "Elder Sign",
    "image": "https://cf.geekdo-images.com/original/img/rIeWkDi2DDSEhKqPvo9A5HHDLEA=/0x0/pic1236119.jpg",
    "category": "Card Game,Fantasy,Dice,Fighting,Adventure,Horror,Novel-based"
  },
  {
    "title": "Castles of Mad King Ludwig",
    "image": "https://cf.geekdo-images.com/original/img/fmSwPPkAioUPtMDVzmo48zHYvxI=/0x0/pic1961827.jpg",
    "category": "Puzzle,Post-Napoleonic"
  },
  {
    "title": "Suburbia",
    "image": "https://cf.geekdo-images.com/original/img/v2kosqFeCkidrDEnKQYZSk-qH_k=/0x0/pic1418335.jpg",
    "category": "Economic,City Building"
  },
  {
    "title": "Star Wars: Rebellion",
    "image": "https://cf.geekdo-images.com/original/img/unCB4uE-nBtAH9glFd3FaVxYbIo=/0x0/pic4325841.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Wargame,Movies / TV / Radio theme,Civil War"
  },
  {
    "title": "Through the Ages: A New Story of Civilization",
    "image": "https://cf.geekdo-images.com/original/img/1d2h-kr4r_9xsss2Br6iMvjR9q0=/0x0/pic2663291.jpg",
    "category": "Economic,Card Game,Civilization"
  },
  {
    "title": "Flash Point: Fire Rescue",
    "image": "https://cf.geekdo-images.com/original/img/iYoZCeHO5Zyd7kkEMK2e-KHAuDU=/0x0/pic1129370.jpg",
    "category": "Adventure"
  },
  {
    "title": "Spirit Island",
    "image": "https://cf.geekdo-images.com/original/img/RmP2yBDA0LE-ZFWrEXAkgRuYjn0=/0x0/pic3615739.png",
    "category": "Fantasy,Mythology,Fighting,Territory Building,Age of Reason,Environmental"
  },
  {
    "title": "One Night Ultimate Werewolf",
    "image": "https://cf.geekdo-images.com/original/img/r7HeuJg7g-g4gEIeIZv6x0gVL9E=/0x0/pic1809823.jpg",
    "category": "Card Game,Bluffing,Horror,Deduction,Party Game"
  },
  {
    "title": "Orleans",
    "image": "https://cf.geekdo-images.com/original/img/RLjWKyzXimMFiQOa8uwo9ZWWOGM=/0x0/pic2578828.png",
    "category": "Medieval,Travel,Religious"
  },
  {
    "title": "Imperial Settlers",
    "image": "https://cf.geekdo-images.com/original/img/sQmQzoR0ZfYzUujohQGaGeGX4Hc=/0x0/pic2871265.jpg",
    "category": "Card Game,Ancient,Civilization,City Building"
  },
  {
    "title": "The Lord of the Rings: The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/TdAxQnbevAwD1oQ91K1KPckgjTk=/0x0/pic906495.jpg",
    "category": "Card Game,Fantasy,Adventure,Novel-based"
  },
  {
    "title": "Seasons",
    "image": "https://cf.geekdo-images.com/original/img/KIQ10GbCcfxPNQKUOMWEMVKA9Ao=/0x0/pic1299390.jpg",
    "category": "Card Game,Fantasy,Dice"
  },
  {
    "title": "UNO",
    "image": "https://cf.geekdo-images.com/original/img/z3OFp3362X0ZPf5CIc5vfxzwDsg=/0x0/pic981505.jpg",
    "category": "Card Game,Movies / TV / Radio theme,Comic Book / Strip,Number"
  },
  {
    "title": "Village",
    "image": "https://cf.geekdo-images.com/original/img/XJ9DcBvOYgoSSNLjx0GP4If8hms=/0x0/pic2760568.jpg",
    "category": "Medieval,Farming"
  },
  {
    "title": "No Thanks!",
    "image": "https://cf.geekdo-images.com/original/img/9q-Txph_yOf3zOGOL8_AnlUN5IE=/0x0/pic4657706.jpg",
    "category": "Card Game"
  },
  {
    "title": "Sushi Go Party!",
    "image": "https://cf.geekdo-images.com/original/img/IDxIxVzcUPT2F7HUuBnAIZvKrBA=/0x0/pic3031286.jpg",
    "category": "Card Game,Party Game"
  },
  {
    "title": "Survive: Escape from Atlantis!",
    "image": "https://cf.geekdo-images.com/original/img/FiTVbnX8ZOWsdgBe87x4Lz3wFsk=/0x0/pic1300182.png",
    "category": "Nautical,Bluffing,Adventure,Animals"
  },
  {
    "title": "Star Wars: Imperial Assault",
    "image": "https://cf.geekdo-images.com/original/img/wWTlEaPbVoUybefxFpFVTv1OU74=/0x0/pic2247647.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Wargame,Adventure,Movies / TV / Radio theme"
  },
  {
    "title": "Tokaido",
    "image": "https://cf.geekdo-images.com/original/img/F5OFQxeuYjEtPUnczM6tlXFAm2Y=/0x0/pic3747956.png",
    "category": "Travel"
  },
  {
    "title": "Carcassonne: Expansion 1: Inns & Cathedrals",
    "image": "https://cf.geekdo-images.com/original/img/fyFwz5eOK-R2W4DugMmGWs1MFaE=/0x0/pic2659943.jpg",
    "category": "Medieval,City Building,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Legendary: A Marvel Deck Building Game",
    "image": "https://cf.geekdo-images.com/original/img/Zs228bvKFb5jHoYvscyYBAph-QY=/0x0/pic1430769.jpg",
    "category": "Card Game,Comic Book / Strip"
  },
  {
    "title": "Guillotine",
    "image": "https://cf.geekdo-images.com/original/img/kRxzkuN_djr8NjnrklqpEYTDzFM=/0x0/pic143139.jpg",
    "category": "Card Game,Humor"
  },
  {
    "title": "Isle of Skye: From Chieftain to King",
    "image": "https://cf.geekdo-images.com/original/img/xMh08V_SQZ1K67mjIdLGe25Opxg=/0x0/pic2524838.jpg",
    "category": "Economic,Territory Building"
  },
  {
    "title": "Ghost Stories",
    "image": "https://cf.geekdo-images.com/original/img/Bq2ZwuE3S3RHZ4YA5yHmnrYn96Q=/0x0/pic1790243.jpg",
    "category": "Fantasy,Mythology,Fighting,Horror"
  },
  {
    "title": "Hey, That's My Fish!",
    "image": "https://cf.geekdo-images.com/original/img/QujODWrCk8P7rsqBcDbLOG_XZjo=/0x0/pic1004115.jpg",
    "category": "Abstract Strategy,Animals"
  },
  {
    "title": "6 nimmt!",
    "image": "https://cf.geekdo-images.com/original/img/3Gg4GrqJwbhQHSYcw1TJJQDMsw8=/0x0/pic2602138.jpg",
    "category": "Card Game,Number"
  },
  {
    "title": "Exploding Kittens",
    "image": "https://cf.geekdo-images.com/original/img/XW9wAqKOy8kvH6TqxtuwAdFuAoo=/0x0/pic2691976.png",
    "category": "Card Game,Humor,Animals,Comic Book / Strip"
  },
  {
    "title": "Ra",
    "image": "https://cf.geekdo-images.com/original/img/iA_LlRmPfFILGon-zvbWeEzxvX8=/0x0/pic3013552.jpg",
    "category": "Ancient,Mythology"
  },
  {
    "title": "BANG! The Dice Game",
    "image": "https://cf.geekdo-images.com/original/img/FV0kpzyWF-7AQCFI8TuQlRRIhNo=/0x0/pic2909713.jpg",
    "category": "Bluffing,Dice,Fighting,American West,Deduction,Party Game"
  },
  {
    "title": "The Voyages of Marco Polo",
    "image": "https://cf.geekdo-images.com/original/img/ewdBaa31ROM_gOmpYwp4xszuAHk=/0x0/pic2461346.png",
    "category": "Economic,Medieval,Travel,Dice"
  },
  {
    "title": "Kingdom Builder",
    "image": "https://cf.geekdo-images.com/original/img/y_ztUjzGGoO4TwnmTFNDLnOxz90=/0x0/pic1152359.jpg",
    "category": "Medieval,Territory Building"
  },
  {
    "title": "Root",
    "image": "https://cf.geekdo-images.com/original/img/dKjbqIjkFvlDt8OH01LtFqk-A8Q=/0x0/pic4254509.jpg",
    "category": "Fantasy,Wargame,Animals"
  },
  {
    "title": "Kingsburg",
    "image": "https://cf.geekdo-images.com/original/img/hPiE4pKUmJB8kxV9dEznLEq1qg4=/0x0/pic253057.jpg",
    "category": "Fantasy,Medieval,Dice,City Building"
  },
  {
    "title": "Twilight Imperium (Third Edition)",
    "image": "https://cf.geekdo-images.com/original/img/60YjBskGAQNmZP7sedVoXneBjZg=/0x0/pic4128153.jpg",
    "category": "Negotiation,Political,Civilization,Science Fiction,Wargame,Space Exploration"
  },
  {
    "title": "Keyflower",
    "image": "https://cf.geekdo-images.com/original/img/t6AnEi2l5tiHgWRjglwSfRsYy6E=/0x0/pic2278942.jpg",
    "category": "Economic,Nautical,City Building,Renaissance,Territory Building,Transportation"
  },
  {
    "title": "Brass: Lancashire",
    "image": "https://cf.geekdo-images.com/original/img/nIOhgzeGDH3heuZ_fGpM-JMla30=/0x0/pic5482020.jpg",
    "category": "Economic,Industry / Manufacturing,Transportation"
  },
  {
    "title": "Acquire",
    "image": "https://cf.geekdo-images.com/original/img/Bz4tTHNpq6gUKFkJs0fJdVIGR1s=/0x0/pic3299296.jpg",
    "category": "Economic"
  },
  {
    "title": "Through the Ages: A Story of Civilization",
    "image": "https://cf.geekdo-images.com/original/img/xeBBIO9BN7HGMxQdTw5zk5Hxou8=/0x0/pic236169.jpg",
    "category": "Economic,Civilization"
  },
  {
    "title": "Thurn and Taxis",
    "image": "https://cf.geekdo-images.com/original/img/OCseTfqqFRtInJ4lx7czVC4TFbc=/0x0/pic115300.jpg",
    "category": "Transportation,Post-Napoleonic"
  },
  {
    "title": "Troyes",
    "image": "https://cf.geekdo-images.com/original/img/jgHgQKbmvFx2xDL1MdtYB2-jRek=/0x0/pic750583.jpg",
    "category": "Economic,Medieval,Dice"
  },
  {
    "title": "Tikal",
    "image": "https://cf.geekdo-images.com/original/img/n8xE7FmOcpoH8s3bhC4Tsd1Y0PE=/0x0/pic3328391.jpg",
    "category": "Exploration,Territory Building"
  },
  {
    "title": "Spyfall",
    "image": "https://cf.geekdo-images.com/original/img/yiOudtz0yeRa8axxBWr94WuCwbM=/0x0/pic2453926.jpg",
    "category": "Bluffing,Humor,Deduction,Party Game,Spies/Secret Agents"
  },
  {
    "title": "Dominant Species",
    "image": "https://cf.geekdo-images.com/original/img/dpHznpiPiv8biNvE_P9RCkXaOx4=/0x0/pic784193.jpg",
    "category": "Animals,Prehistoric,Environmental"
  },
  {
    "title": "Coloretto",
    "image": "https://cf.geekdo-images.com/original/img/YDS-_1noWJnB9GYf0VMdxgXscVI=/0x0/pic149765.jpg",
    "category": "Card Game,Animals"
  },
  {
    "title": "Apples to Apples",
    "image": "https://cf.geekdo-images.com/original/img/hk2t6NE3MDErfwv0A4vbsImnSWY=/0x0/pic213515.jpg",
    "category": "Card Game,Humor,Party Game"
  },
  {
    "title": "Alchemists",
    "image": "https://cf.geekdo-images.com/original/img/VKBFHqR2xm0EFGWfb1sPJZctMCs=/0x0/pic2241156.png",
    "category": "Fantasy,Deduction"
  },
  {
    "title": "Cyclades",
    "image": "https://cf.geekdo-images.com/original/img/vNjql8aAkLhcsSx6YWPnHxiHrs4=/0x0/pic584779.jpg",
    "category": "Ancient,Civilization,Nautical,Mythology,Fighting,Miniatures,City Building"
  },
  {
    "title": "Century: Spice Road",
    "image": "https://cf.geekdo-images.com/original/img/kF-vMNTT5iY7Ui3UPhjbtMX6YAk=/0x0/pic3339551.jpg",
    "category": "Economic,Card Game,Medieval"
  },
  {
    "title": "Clue",
    "image": "https://cf.geekdo-images.com/original/img/XUR24DQbxy3OHRC8lSJg6INzxCU=/0x0/pic5146918.png",
    "category": "Bluffing,Deduction,Movies / TV / Radio theme,Murder/Mystery"
  },
  {
    "title": "Formula D",
    "image": "https://cf.geekdo-images.com/original/img/l-hnRVQg97lQyEjss9JXkL4RGXw=/0x0/pic519914.jpg",
    "category": "Racing,Sports"
  },
  {
    "title": "Catan: Cities & Knights",
    "image": "https://cf.geekdo-images.com/original/img/fnZmueQkDuddB5WC3eXQgBVTFvM=/0x0/pic2420315.jpg",
    "category": "Negotiation,Medieval,Expansion for Base-game"
  },
  {
    "title": "Diamant",
    "image": "https://cf.geekdo-images.com/original/img/Re3G42C1pfWaS_MnXwHr4TnM3NU=/0x0/pic3581963.jpg",
    "category": "Exploration,Bluffing,Adventure"
  },
  {
    "title": "Secret Hitler",
    "image": "https://cf.geekdo-images.com/original/img/XB4NTIrGp1HTtP_vxW7gNvwXqWk=/0x0/pic5164305.jpg",
    "category": "Political,Card Game,Bluffing,Print & Play,Humor,Deduction,Party Game"
  },
  {
    "title": "The Quacks of Quedlinburg",
    "image": "https://cf.geekdo-images.com/original/img/FaL4MRJ_XR25rRbSbRLFxDyRm4M=/0x0/pic4474567.jpg",
    "category": "Medieval"
  },
  {
    "title": "Mice and Mystics",
    "image": "https://cf.geekdo-images.com/original/img/wdy7-YpSjOhHVnTSlMnkfk6JLCs=/0x0/pic1312072.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure,Animals"
  },
  {
    "title": "The Pillars of the Earth",
    "image": "https://cf.geekdo-images.com/original/img/LzOMFyPBqep8aOlQpZBG0HJ0D6c=/0x0/pic3691155.jpg",
    "category": "Economic,Medieval,Novel-based,Religious"
  },
  {
    "title": "The Mind",
    "image": "https://cf.geekdo-images.com/original/img/-6UV1oIzR-DqAyewaSImVThz6ZU=/0x0/pic3979766.png",
    "category": "Card Game,Number"
  },
  {
    "title": "Sherlock Holmes Consulting Detective: The Thames Murders & Other Cases",
    "image": "https://cf.geekdo-images.com/original/img/e0abWKqZdzwxb0Keyxjf-Y5sZsw=/0x0/pic3514298.jpg",
    "category": "Novel-based,Deduction,Murder/Mystery,Spies/Secret Agents,Post-Napoleonic"
  },
  {
    "title": "Modern Art",
    "image": "https://cf.geekdo-images.com/original/img/lLkyXBSM7ma20eTKsLYvoIieoG0=/0x0/pic801990.jpg",
    "category": "Economic,Card Game"
  },
  {
    "title": "Zombicide",
    "image": "https://cf.geekdo-images.com/original/img/FwnbGGrU7av4j8kB11VZZRB58U4=/0x0/pic1196191.jpg",
    "category": "Miniatures,Horror,Zombies"
  },
  {
    "title": "Catan: Seafarers",
    "image": "https://cf.geekdo-images.com/original/img/69oncQruexfKlfgEaZ8qFXeD1UE=/0x0/pic2420293.jpg",
    "category": "Negotiation,Civilization,Nautical,Exploration,Expansion for Base-game"
  },
  {
    "title": "Codenames: Pictures",
    "image": "https://cf.geekdo-images.com/original/img/3eKT0zKPngjPLWx2aIr2Mgv1IMI=/0x0/pic3476592.jpg",
    "category": "Card Game,Deduction,Party Game,Spies/Secret Agents"
  },
  {
    "title": "Pandemic: On the Brink",
    "image": "https://cf.geekdo-images.com/original/img/pF0Z_zMZYhp2sTxMiLa1Wu_Bg0Y=/0x0/pic1546621.jpg",
    "category": "Science Fiction,Expansion for Base-game,Medical,Environmental"
  },
  {
    "title": "Zombie Dice",
    "image": "https://cf.geekdo-images.com/original/img/qex1uTfDgaXKCgYLhyUM8hSCj6E=/0x0/pic4991962.jpg",
    "category": "Dice,Humor,Horror,Party Game,Zombies"
  },
  {
    "title": "Dixit: Odyssey",
    "image": "https://cf.geekdo-images.com/original/img/JbXOWixzz2vYHfamFNQWc1aPU68=/0x0/pic918568.jpg",
    "category": "Card Game,Humor,Party Game"
  },
  {
    "title": "Jamaica",
    "image": "https://cf.geekdo-images.com/original/img/ro6l5aVaOy-F01HZKjMxAFt0YHc=/0x0/pic1502119.jpg",
    "category": "Nautical,Racing,Pirates,Transportation"
  },
  {
    "title": "Kemet",
    "image": "https://cf.geekdo-images.com/original/img/rjuKOHsH4_EayHV5jflH0LMpwqI=/0x0/pic3979527.jpg",
    "category": "Ancient,Mythology,Fighting,Miniatures,Wargame"
  },
  {
    "title": "Fluxx",
    "image": "https://cf.geekdo-images.com/original/img/Gcf1Q_RVCGCN2FN3edPDv-ySJ1o=/0x0/pic2405641.jpg",
    "category": "Card Game"
  },
  {
    "title": "Friday",
    "image": "https://cf.geekdo-images.com/original/img/gWs9YutHCqaCZgPtfykYN0wkvEs=/0x0/pic1513328.jpg",
    "category": "Card Game,Fighting,Adventure,Novel-based,Pirates"
  },
  {
    "title": "Ingenious",
    "image": "https://cf.geekdo-images.com/original/img/6AOZV2bLlBFQ8vu_HzhDooMOCR8=/0x0/pic3958804.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "A Feast for Odin",
    "image": "https://cf.geekdo-images.com/original/img/h0P5NRuVBu0GuDrJo7CHAiSJo3U=/0x0/pic3146943.png",
    "category": "Economic,Medieval,Puzzle,Industry / Manufacturing"
  },
  {
    "title": "Qwirkle",
    "image": "https://cf.geekdo-images.com/original/img/FnLhG5NDbel24voh8nbdYXAYji0=/0x0/pic309353.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Battle Line",
    "image": "https://cf.geekdo-images.com/original/img/LzLbfz1zXw9P-T27k-nhjDddHvE=/0x0/pic149717.jpg",
    "category": "Card Game,Ancient,Deduction"
  },
  {
    "title": "Escape: The Curse of the Temple",
    "image": "https://cf.geekdo-images.com/original/img/SrdNn3Q5PScNpgUP85VFfAXR3mY=/0x0/pic3328521.jpg",
    "category": "Exploration,Dice,Adventure,Electronic,Real-time"
  },
  {
    "title": "Carcassonne: Expansion 2: Traders & Builders",
    "image": "https://cf.geekdo-images.com/original/img/uumS5wg1ttKxBCKdXl-nbg5Ka0Q=/0x0/pic2659946.jpg",
    "category": "Medieval,City Building,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Captain Sonar",
    "image": "https://cf.geekdo-images.com/original/img/rVAq1lKg98oU6tvLjERL-ZNiMfc=/0x0/pic3013621.png",
    "category": "Nautical,Fighting,Deduction,Real-time"
  },
  {
    "title": "The 7th Continent",
    "image": "https://cf.geekdo-images.com/original/img/iQDBaRJ2LxJba_M7gPZj24eHwBc=/0x0/pic2648303.jpg",
    "category": "Card Game,Exploration,Science Fiction,Adventure"
  },
  {
    "title": "Photosynthesis",
    "image": "https://cf.geekdo-images.com/original/img/pIBp9VeaI9zAlHERlAVCoK78LqM=/0x0/pic3364832.jpg",
    "category": "Abstract Strategy,Environmental"
  },
  {
    "title": "Mr. Jack",
    "image": "https://cf.geekdo-images.com/original/img/EMVEbNvm38lZHe6Jw12f7CnCiPY=/0x0/pic3066125.jpg",
    "category": "Deduction,Murder/Mystery"
  },
  {
    "title": "Deception: Murder in Hong Kong",
    "image": "https://cf.geekdo-images.com/original/img/hGE79VL3d5Kv8dIXehMPafkacI4=/0x0/pic3033330.jpg",
    "category": "Bluffing,Deduction,Party Game,Murder/Mystery"
  },
  {
    "title": "The Princes of Florence",
    "image": "https://cf.geekdo-images.com/original/img/8i5Vx3vpbBn7CTrhWs3MK2eyA_4=/0x0/pic1306997.jpg",
    "category": "City Building,Renaissance"
  },
  {
    "title": "Space Alert",
    "image": "https://cf.geekdo-images.com/original/img/bASSKEPd4V_exZ73z4EG0pg9ZrI=/0x0/pic384313.jpg",
    "category": "Science Fiction,Space Exploration,Electronic,Real-time"
  },
  {
    "title": "Samurai",
    "image": "https://cf.geekdo-images.com/original/img/mPS50ts53753q5-kb5vWbTDN8Z0=/0x0/pic3211873.jpg",
    "category": "Abstract Strategy,Medieval"
  },
  {
    "title": "Biblios",
    "image": "https://cf.geekdo-images.com/original/img/LHYQeLvH4_mQLFBoei4Ns5k8hms=/0x0/pic759154.jpg",
    "category": "Card Game,Medieval,Religious"
  },
  {
    "title": "Tiny Epic Galaxies",
    "image": "https://cf.geekdo-images.com/original/img/A6HJirqAxZw79V5aoftDWAZHpdk=/0x0/pic2349732.jpg",
    "category": "Science Fiction,Dice,Space Exploration"
  },
  {
    "title": "Sentinels of the Multiverse",
    "image": "https://cf.geekdo-images.com/original/img/8iUgi62Jau7TF00eudHL_n_zxuA=/0x0/pic1296144.jpg",
    "category": "Card Game,Fighting,Comic Book / Strip"
  },
  {
    "title": "Rising Sun",
    "image": "https://cf.geekdo-images.com/original/img/B_QnVCi18kIQBPNajLjJkpXpW2s=/0x0/pic3880340.jpg",
    "category": "Negotiation,Fantasy,Mythology,Bluffing,Miniatures,Wargame"
  },
  {
    "title": "Go",
    "image": "https://cf.geekdo-images.com/original/img/bCv9Y06nWX1rt7Qn1GuCEOyDov0=/0x0/pic1728832.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Concept",
    "image": "https://cf.geekdo-images.com/original/img/R4YXvh95ohNbupeaorFOeozG3LE=/0x0/pic4991925.jpg",
    "category": "Deduction,Party Game"
  },
  {
    "title": "Zombies!!!",
    "image": "https://cf.geekdo-images.com/original/img/A8THOTtvj1rk8RjfqCaERE-vy_M=/0x0/pic2525171.jpg",
    "category": "Exploration,Fighting,Miniatures,Horror,Movies / TV / Radio theme,Zombies"
  },
  {
    "title": "Catan: 5-6 Player Extension",
    "image": "https://cf.geekdo-images.com/original/img/2xwQjUPZTqrhAlA0QCGDcQGB1ps=/0x0/pic2420287.jpg",
    "category": "Negotiation,Expansion for Base-game"
  },
  {
    "title": "Innovation",
    "image": "https://cf.geekdo-images.com/original/img/YHDTCAKpEQRiteHDT8iA6rhFaW4=/0x0/pic2966859.png",
    "category": "Card Game,Civilization"
  },
  {
    "title": "Sid Meier's Civilization: The Board Game",
    "image": "https://cf.geekdo-images.com/original/img/mEWG51yAFGkZlQjSFxMNZ2fsWK0=/0x0/pic798666.jpg",
    "category": "Negotiation,Civilization,Exploration,City Building,Video Game Theme"
  },
  {
    "title": "Trajan",
    "image": "https://cf.geekdo-images.com/original/img/vIIoEst4xg9L1kr2TajY_6s-5Jo=/0x0/pic4336095.png",
    "category": "Political,Ancient"
  },
  {
    "title": "Dominion: Seaside",
    "image": "https://cf.geekdo-images.com/original/img/MWu9UUCeFQ9LbdvcW3zhd7Fkm-M=/0x0/pic543471.jpg",
    "category": "Card Game,Medieval,Nautical,Expansion for Base-game"
  },
  {
    "title": "Saint Petersburg",
    "image": "https://cf.geekdo-images.com/original/img/SmUqc6l884dsJfmWeTzgGReElNE=/0x0/pic246360.jpg",
    "category": "Economic,Card Game,Age of Reason"
  },
  {
    "title": "Gaia Project",
    "image": "https://cf.geekdo-images.com/original/img/FpQ2ODFHSgDGfEpskL0Uu2xyYMA=/0x0/pic3763556.jpg",
    "category": "Economic,Science Fiction,Space Exploration,Territory Building"
  },
  {
    "title": "Magic Maze",
    "image": "https://cf.geekdo-images.com/original/img/wX-3MGic-uzIqnNeEZcZlWPKwrA=/0x0/pic3268473.jpg",
    "category": "Fantasy,Exploration,Maze,Real-time"
  },
  {
    "title": "Chaos in the Old World",
    "image": "https://cf.geekdo-images.com/original/img/zFu27DT2SQdHj1IzLv-n7yTfa_s=/0x0/pic1318481.jpg",
    "category": "Fantasy,Mythology,Fighting,Wargame,Horror"
  },
  {
    "title": "Russian Railroads",
    "image": "https://cf.geekdo-images.com/original/img/QgRFOE3J6RK3ZfJk2qa3Xbgl0GY=/0x0/pic1772936.jpg",
    "category": "Industry / Manufacturing,Trains"
  },
  {
    "title": "The Lord of the Rings",
    "image": "https://cf.geekdo-images.com/original/img/80JBU5CAjkYen9qG7VRgSpCKj9I=/0x0/pic5510866.png",
    "category": "Fantasy,Adventure,Novel-based"
  },
  {
    "title": "Legends of Andor",
    "image": "https://cf.geekdo-images.com/original/img/mIYkOMtGopRZ52JU0lzMq5jKO_o=/0x0/pic2606106.jpg",
    "category": "Fantasy,Fighting,Adventure,Puzzle"
  },
  {
    "title": "Alien Frontiers",
    "image": "https://cf.geekdo-images.com/original/img/aTQJOrXHU-GtDW6WRkfGz_Zc93s=/0x0/pic3360924.png",
    "category": "Science Fiction,Dice"
  },
  {
    "title": "Brass: Birmingham",
    "image": "https://cf.geekdo-images.com/original/img/SED341dmM5mGVVbLvwcvTjvUbIA=/0x0/pic3490053.jpg",
    "category": "Economic,Industry / Manufacturing,Transportation"
  },
  {
    "title": "Castle Panic",
    "image": "https://cf.geekdo-images.com/original/img/xOimjOG95u8pxQhByVDTT1vkMYA=/0x0/pic496923.jpg",
    "category": "Fantasy,Medieval,Fighting"
  },
  {
    "title": "Scotland Yard",
    "image": "https://cf.geekdo-images.com/original/img/lTZgHF6-R9Xfht7HDmmljkJwecY=/0x0/pic4527702.jpg",
    "category": "Travel,Deduction"
  },
  {
    "title": "Raiders of the North Sea",
    "image": "https://cf.geekdo-images.com/original/img/a0YP4eI1oi6LqEQU1jsEphVmo8I=/0x0/pic3578101.jpg",
    "category": "Medieval,Nautical"
  },
  {
    "title": "Zooloretto",
    "image": "https://cf.geekdo-images.com/original/img/loCMLQHk4ksy-24Zh9DwjM8EQnw=/0x0/pic2021685.png",
    "category": "Animals"
  },
  {
    "title": "Everdell",
    "image": "https://cf.geekdo-images.com/original/img/L5e2iMnVKpXi3RO3uSwQB6iW-AQ=/0x0/pic3918905.png",
    "category": "Card Game,Fantasy,City Building,Animals"
  },
  {
    "title": "Welcome To...",
    "image": "https://cf.geekdo-images.com/original/img/u4-wAhK33bRSl1qwy1emXsRpOBw=/0x0/pic3761012.jpg",
    "category": "City Building"
  },
  {
    "title": "Onitama",
    "image": "https://cf.geekdo-images.com/original/img/jznzLfy3vTVhTzzPLDIIuZY-el0=/0x0/pic5032361.jpg",
    "category": ""
  },
  {
    "title": "King of New York",
    "image": "https://cf.geekdo-images.com/original/img/R0dEpSy_FsE2iKVDL9Gn5Z8TYx0=/0x0/pic2407103.jpg",
    "category": "Science Fiction,Dice,Fighting,Movies / TV / Radio theme"
  },
  {
    "title": "Last Night on Earth: The Zombie Game",
    "image": "https://cf.geekdo-images.com/original/img/mgkwTLC0vJC0kW4y04bxAa772mY=/0x0/pic207777.jpg",
    "category": "Fighting,Miniatures,Horror,Zombies"
  },
  {
    "title": "Architects of the West Kingdom",
    "image": "https://cf.geekdo-images.com/original/img/RKXgBZpXQXy0FjUdtW1OotAow8U=/0x0/pic3781944.png",
    "category": "Medieval,City Building"
  },
  {
    "title": "Stratego",
    "image": "https://cf.geekdo-images.com/original/img/JfGCdf1X1g1XJoLXX_a26yqCpFQ=/0x0/pic25644.jpg",
    "category": "Abstract Strategy,Bluffing,Fighting,Wargame,Deduction,Napoleonic,Memory"
  },
  {
    "title": "Letters from Whitechapel",
    "image": "https://cf.geekdo-images.com/original/img/aplDuDGjSKmneJ-Df5OFZjBNdZ4=/0x0/pic1545654.jpg",
    "category": "Bluffing,Deduction,Murder/Mystery,Post-Napoleonic"
  },
  {
    "title": "Mechs vs. Minions",
    "image": "https://cf.geekdo-images.com/original/img/WhHdMb8GiMY-RhHddEByDyPkrWo=/0x0/pic3184103.jpg",
    "category": "Fantasy,Fighting,Miniatures,Video Game Theme"
  },
  {
    "title": "Gloom",
    "image": "https://cf.geekdo-images.com/original/img/mBpZsdBwyyDbsX6NFegQ-ol68P8=/0x0/pic2080481.jpg",
    "category": "Card Game,Humor,Horror"
  },
  {
    "title": "Boss Monster: The Dungeon Building Card Game",
    "image": "https://cf.geekdo-images.com/original/img/qcHZp-8X-yYTElPJP9NYDc-x_k0=/0x0/pic1732644.jpg",
    "category": "Card Game,Fantasy,Video Game Theme"
  },
  {
    "title": "7 Wonders: Leaders",
    "image": "https://cf.geekdo-images.com/original/img/pjr6mqCoXU_DdMnlS2lMDwpyMh4=/0x0/pic1046319.jpg",
    "category": "Card Game,Ancient,Civilization,City Building,Expansion for Base-game"
  },
  {
    "title": "Dominion: Prosperity",
    "image": "https://cf.geekdo-images.com/original/img/uTzpa4z9LMKJTd5jtCiNDSANdag=/0x0/pic1747320.jpg",
    "category": "Card Game,Medieval,Expansion for Base-game"
  },
  {
    "title": "Quarriors!",
    "image": "https://cf.geekdo-images.com/original/img/TZA2M92b1Hd_DSYPhzfpIMni5jQ=/0x0/pic1604985.jpg",
    "category": "Fantasy,Dice,Fighting"
  },
  {
    "title": "Clans of Caledonia",
    "image": "https://cf.geekdo-images.com/original/img/wMBrwd-ZnHVV_XvVT3Tc6LtD0Ng=/0x0/pic3511783.png",
    "category": "Economic,Farming"
  },
  {
    "title": "Tichu",
    "image": "https://cf.geekdo-images.com/original/img/4mtym39nvO7r5AkNoYVxdvPbyOc=/0x0/pic169494.jpg",
    "category": "Card Game"
  },
  {
    "title": "Wits & Wagers",
    "image": "https://cf.geekdo-images.com/original/img/lAFWaPYAyrgX10Yt8UZ5o9t6ujE=/0x0/pic2558555.jpg",
    "category": "Bluffing,Party Game,Trivia"
  },
  {
    "title": "Neuroshima Hex! 3.0",
    "image": "https://cf.geekdo-images.com/original/img/_73K35_KU-f6ve0x80RSvbBMpDQ=/0x0/pic1844819.jpg",
    "category": "Science Fiction,Fighting"
  },
  {
    "title": "Dice Forge",
    "image": "https://cf.geekdo-images.com/original/img/2RZLNEGrkZxF9Napw_dnqEbbnl4=/0x0/pic3477004.jpg",
    "category": ""
  },
  {
    "title": "Catan Card Game",
    "image": "https://cf.geekdo-images.com/original/img/M__SUwRrI5RDfCrHFYvA2mvOuVg=/0x0/pic706443.jpg",
    "category": "Card Game,City Building,Territory Building"
  },
  {
    "title": "Glory to Rome",
    "image": "https://cf.geekdo-images.com/original/img/iQCHNzUcG_az-DZ4khEz0vAa2qs=/0x0/pic1079512.png",
    "category": "Economic,Card Game,Ancient,City Building"
  },
  {
    "title": "Evolution",
    "image": "https://cf.geekdo-images.com/original/img/ThUHq10tpEdS4cbNUGmdovJ-eok=/0x0/pic3543505.jpg",
    "category": "Card Game,Fighting,Print & Play,Animals,Prehistoric,Educational,Environmental"
  },
  {
    "title": "Skull",
    "image": "https://cf.geekdo-images.com/original/img/3uBVJuvnZ5GUa-bEXP0PEcACPuw=/0x0/pic1779342.jpg",
    "category": "Card Game,Bluffing,Party Game"
  },
  {
    "title": "Dungeon Lords",
    "image": "https://cf.geekdo-images.com/original/img/9mRy3799HYRbJBawNp1a5rJeLXc=/0x0/pic569340.jpg",
    "category": "Economic,Fantasy,Fighting,Humor"
  },
  {
    "title": "Talisman (Revised 4th Edition)",
    "image": "https://cf.geekdo-images.com/original/img/AfIL4yT86Q1foF_fXo-qNs-kGnU=/0x0/pic332870.jpg",
    "category": "Fantasy,Exploration,Fighting,Adventure"
  },
  {
    "title": "Food Chain Magnate",
    "image": "https://cf.geekdo-images.com/original/img/wYRsC32bPDRShIYzWs2hUglfcTc=/0x0/pic2649434.png",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "Shogun",
    "image": "https://cf.geekdo-images.com/original/img/5jtGQuMBFhnJJI119hAYGqVDy3Y=/0x0/pic3336315.jpg",
    "category": "Economic,Medieval,Territory Building"
  },
  {
    "title": "Mansions of Madness",
    "image": "https://cf.geekdo-images.com/original/img/HkKBPt3TEflR6A4QIDvrYlZeMNI=/0x0/pic814011.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure,Horror,Puzzle,Murder/Mystery"
  },
  {
    "title": "Through the Desert",
    "image": "https://cf.geekdo-images.com/original/img/qMspa3GI2sMHCvTvRvJQ5uxIw2E=/0x0/pic3764263.jpg",
    "category": "Abstract Strategy,Animals,Arabian"
  },
  {
    "title": "Merchants & Marauders",
    "image": "https://cf.geekdo-images.com/original/img/mNWaseFj2eSJP6VdhsIs9GdeYSs=/0x0/pic738119.jpg",
    "category": "Nautical,Fighting,Adventure,Pirates,Transportation"
  },
  {
    "title": "War of the Ring: Second Edition",
    "image": "https://cf.geekdo-images.com/original/img/sAJOZ0c2_gZqXjn2npRgpFvshKo=/0x0/pic1215633.jpg",
    "category": "Fantasy,Fighting,Miniatures,Wargame,Adventure,Novel-based,Territory Building"
  },
  {
    "title": "Can't Stop",
    "image": "https://cf.geekdo-images.com/original/img/KhE25akKpyfWirTyNTqThTidb0o=/0x0/pic1046518.jpg",
    "category": "Dice"
  },
  {
    "title": "Targi",
    "image": "https://cf.geekdo-images.com/original/img/7KQJcPVEw5kPRk45KGTlsIbZnwo=/0x0/pic3958793.jpg",
    "category": "Card Game"
  },
  {
    "title": "Lewis & Clark: The Expedition",
    "image": "https://cf.geekdo-images.com/original/img/WTRBe8gqwLZXRIL6ER65Ou3SLYQ=/0x0/pic5375937.jpg",
    "category": "Racing,American West"
  },
  {
    "title": "Dungeon Petz",
    "image": "https://cf.geekdo-images.com/original/img/ouBrnOPtxRPIo3qJm2WqQjKt3Ag=/0x0/pic1103979.jpg",
    "category": "Fantasy,Humor,Animals"
  },
  {
    "title": "Perudo",
    "image": "https://cf.geekdo-images.com/original/img/o8RzH9BQEVzaPhcP2-jxWfQJo3c=/0x0/pic2284661.jpg",
    "category": "Bluffing,Dice,Movies / TV / Radio theme,Party Game"
  },
  {
    "title": "Rummikub",
    "image": "https://cf.geekdo-images.com/original/img/4H8X72woji1Ujckz0mPbNxrftbU=/0x0/pic2286966.jpg",
    "category": "Card Game,Abstract Strategy,Number"
  },
  {
    "title": "Libertalia",
    "image": "https://cf.geekdo-images.com/original/img/Ra1zxyfebEZtchbCPQ9_yCs6tAM=/0x0/pic1326136.jpg",
    "category": "Card Game,Pirates"
  },
  {
    "title": "Notre Dame",
    "image": "https://cf.geekdo-images.com/original/img/Am42X55-lpmGAEfNBLzcMxDz6Ns=/0x0/pic199316.jpg",
    "category": "Economic,Renaissance"
  },
  {
    "title": "Ca$h 'n Guns (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/8KLIxTYLxC6CTzJZfMLxlm9f8B4=/0x0/pic2907864.jpg",
    "category": "Negotiation,Bluffing,Fighting,Humor,Party Game,Mafia"
  },
  {
    "title": "Above and Below",
    "image": "https://cf.geekdo-images.com/original/img/AG4FQZuzzueBT6t31kypY8jTRus=/0x0/pic2398773.jpg",
    "category": "Economic,Negotiation,Fantasy,Exploration,Farming,City Building,Adventure"
  },
  {
    "title": "Champions of Midgard",
    "image": "https://cf.geekdo-images.com/original/img/c1gxRcNaDdjeH8zpLYJEkDEYA5g=/0x0/pic2869714.jpg",
    "category": "Fantasy,Medieval,Mythology,Dice,Fighting,Adventure"
  },
  {
    "title": "Agricola: All Creatures Big and Small",
    "image": "https://cf.geekdo-images.com/original/img/jeB8MXXENLZyEfwdcM5yD6OmUYw=/0x0/pic1514252.jpg",
    "category": "Farming,Animals"
  },
  {
    "title": "Space Hulk: Death Angel - The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/iZOeIT5ITTM2lLZ4RdXdQJLmH-Q=/0x0/pic1873572.jpg",
    "category": "Card Game,Science Fiction,Fighting"
  },
  {
    "title": "Telestrations",
    "image": "https://cf.geekdo-images.com/original/img/E8wGa46usehtN1a081shjC8B5Nk=/0x0/pic4991936.jpg",
    "category": "Humor,Party Game,Real-time"
  },
  {
    "title": "Diplomacy",
    "image": "https://cf.geekdo-images.com/original/img/Krw9_cDRv8h9A4Laj2tCnhrVZgE=/0x0/pic288149.jpg",
    "category": "Negotiation,Political,Bluffing,Wargame,Post-Napoleonic"
  },
  {
    "title": "Port Royal",
    "image": "https://cf.geekdo-images.com/original/img/UK6PTwYoaZLwVUmBBX7YZsPHwY0=/0x0/pic1949286.jpg",
    "category": "Economic,Card Game,Nautical,Pirates"
  },
  {
    "title": "Red7",
    "image": "https://cf.geekdo-images.com/original/img/BlQg-C_qu02XAyIXZICX9znzfF0=/0x0/pic2247258.png",
    "category": "Card Game,Number"
  },
  {
    "title": "Pathfinder Adventure Card Game: Rise of the Runelords - Base Set",
    "image": "https://cf.geekdo-images.com/original/img/kmjGiGM06MDh-BmO1_KrmDEPW5Y=/0x0/pic1775517.jpg",
    "category": "Card Game,Fantasy,Fighting,Adventure"
  },
  {
    "title": "Zombicide: Black Plague",
    "image": "https://cf.geekdo-images.com/original/img/vs4UlIiZ1p3k5yIJ_vlvd2N-474=/0x0/pic2482309.jpg",
    "category": "Fantasy,Medieval,Fighting,Miniatures,Adventure,Horror,Zombies"
  },
  {
    "title": "Potion Explosion",
    "image": "https://cf.geekdo-images.com/original/img/CFp5GblUaDKABGVnmciqn7xcGnc=/0x0/pic2630294.png",
    "category": "Fantasy,Puzzle"
  },
  {
    "title": "Codenames: Duet",
    "image": "https://cf.geekdo-images.com/original/img/2_ZxcqriVqf3AzVwzfibM6iGzG4=/0x0/pic3596681.jpg",
    "category": "Card Game,Deduction,Word Game,Spies/Secret Agents"
  },
  {
    "title": "Spot it!",
    "image": "https://cf.geekdo-images.com/original/img/fJBN3LBat3v7hhBuaaVXE-ZrD9s=/0x0/pic1203476.jpg",
    "category": "Card Game,Party Game,Real-time,Children's Game,Sports,Educational"
  },
  {
    "title": "That's Pretty Clever",
    "image": "https://cf.geekdo-images.com/original/img/7SooFD8fVZyoNA0McXYRmD57jIU=/0x0/pic4410877.jpg",
    "category": "Dice"
  },
  {
    "title": "Fresco",
    "image": "https://cf.geekdo-images.com/original/img/nECd0Z9PQwvCLhFz5mXYpWYT1B4=/0x0/pic714398.jpg",
    "category": "Renaissance"
  },
  {
    "title": "The Grizzled",
    "image": "https://cf.geekdo-images.com/original/img/7_qWC5F5DdSXCpmADUDUsuW9mNg=/0x0/pic3719610.png",
    "category": "Card Game,World War I"
  },
  {
    "title": "Ascension: Deckbuilding Game",
    "image": "https://cf.geekdo-images.com/original/img/ieLXktFXa3ftoAp1mNQjCK2VaL4=/0x0/pic2382123.jpg",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Roll Through the Ages: The Bronze Age",
    "image": "https://cf.geekdo-images.com/original/img/AmNmhlFJf2wsJATReIpddyWhfUI=/0x0/pic986758.jpg",
    "category": "Ancient,Civilization,Dice,City Building"
  },
  {
    "title": "Chronicles of Crime",
    "image": "https://cf.geekdo-images.com/original/img/JRE8PpskKmoIQ3R5WZZUOy7nQLw=/0x0/pic4317519.jpg",
    "category": "Adventure,Deduction,Murder/Mystery"
  },
  {
    "title": "Arboretum",
    "image": "https://cf.geekdo-images.com/original/img/sJFGZGYrOXrjOL5fHI-uVkpJmEU=/0x0/pic4172124.png",
    "category": "Card Game,Bluffing"
  },
  {
    "title": "Tales of the Arabian Nights",
    "image": "https://cf.geekdo-images.com/original/img/IoU1CZk6B__VdzzKcXGs7oPVFzM=/0x0/pic486114.jpg",
    "category": "Fantasy,Exploration,Travel,Adventure,Arabian"
  },
  {
    "title": "Inis",
    "image": "https://cf.geekdo-images.com/original/img/kVKdykQUGNsAj0nnvpWxO7N3ePI=/0x0/pic4739757.jpg",
    "category": "Card Game,Mythology,Miniatures"
  },
  {
    "title": "Descent: Journeys in the Dark",
    "image": "https://cf.geekdo-images.com/original/img/0Bfk-erMrtIJGNSiv4D9IzgJR5Y=/0x0/pic249300.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Roll Player",
    "image": "https://cf.geekdo-images.com/original/img/23nKceWK0-JbJ2J-255Q0qXK4i4=/0x0/pic2556921.jpg",
    "category": "Fantasy,Dice"
  },
  {
    "title": "Backgammon",
    "image": "https://cf.geekdo-images.com/original/img/xAF3cm3sKRHjIDTlfJyKNdZKI7c=/0x0/pic1361122.jpg",
    "category": "Abstract Strategy,Dice"
  },
  {
    "title": "Crokinole",
    "image": "https://cf.geekdo-images.com/original/img/1x-Pt8mWg9fBlo5oB1aBxll6-3k=/0x0/pic79413.jpg",
    "category": "Action / Dexterity"
  },
  {
    "title": "Twilight Imperium (Fourth Edition)",
    "image": "https://cf.geekdo-images.com/original/img/Xe0YAmobS_L0Nlo4YJgyFwOW9EM=/0x0/pic3727516.jpg",
    "category": "Economic,Negotiation,Political,Civilization,Science Fiction,Wargame,Space Exploration"
  },
  {
    "title": "Hansa Teutonica",
    "image": "https://cf.geekdo-images.com/original/img/Y7bW8H1htsE2xOv87qIuPTsjiTo=/0x0/pic839090.jpg",
    "category": "Medieval"
  },
  {
    "title": "Yahtzee",
    "image": "https://cf.geekdo-images.com/original/img/S9AmoNh3ZPyVXLxoqhOA7MBCN7M=/0x0/pic378237.jpg",
    "category": "Political"
  },
  {
    "title": "Ticket to Ride: Nordic Countries",
    "image": "https://cf.geekdo-images.com/original/img/GU-wGnipNb0UVXT9ebQBl86UrRk=/0x0/pic369616.jpg",
    "category": "Trains"
  },
  {
    "title": "Welcome to the Dungeon",
    "image": "https://cf.geekdo-images.com/original/img/ySCDntUcGVCHV8O7sHGkUbvNkvs=/0x0/pic2436689.jpg",
    "category": "Card Game,Fantasy,Bluffing,Fighting"
  },
  {
    "title": "Lords of Waterdeep: Scoundrels of Skullport",
    "image": "https://cf.geekdo-images.com/original/img/d7g42N7gm1JlZrJOxWfK36BN73A=/0x0/pic1590236.jpg",
    "category": "Fantasy,City Building,Expansion for Base-game"
  },
  {
    "title": "Grand Austria Hotel",
    "image": "https://cf.geekdo-images.com/original/img/4d_XZzAStbyODa6p8xhLyOpIMh8=/0x0/pic2728138.jpg",
    "category": "Economic"
  },
  {
    "title": "Railways of the World",
    "image": "https://cf.geekdo-images.com/original/img/xeEMH5X0jBoXeY48Q5pE0JDOHP8=/0x0/pic3869603.jpg",
    "category": "Trains,Transportation,Video Game Theme"
  },
  {
    "title": "Jenga",
    "image": "https://cf.geekdo-images.com/original/img/F-2wyspWoNz_9x-JD-fqd4eqbe0=/0x0/pic5140451.jpg",
    "category": "Party Game,Action / Dexterity"
  },
  {
    "title": "Goa",
    "image": "https://cf.geekdo-images.com/original/img/ZO3q3cZqX_34C9i7MriB4u6txjk=/0x0/pic1215969.jpg",
    "category": "Economic,Nautical,Farming,Renaissance"
  },
  {
    "title": "Hero Realms",
    "image": "https://cf.geekdo-images.com/original/img/km-FMXpaL2mb-t5AUHa0yHjoLXA=/0x0/pic3744052.jpg",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Nations",
    "image": "https://cf.geekdo-images.com/original/img/6Zne9rNVAxgEzMmf4WmcEtH_xsc=/0x0/pic1591406.png",
    "category": "Economic,Card Game,Civilization"
  },
  {
    "title": "Jungle Speed",
    "image": "https://cf.geekdo-images.com/original/img/VUJ0gsNyzlC95q4ytQ4puFR4lt0=/0x0/pic4659199.jpg",
    "category": "Card Game,Party Game,Real-time,Action / Dexterity"
  },
  {
    "title": "Carcassonne: Hunters and Gatherers",
    "image": "https://cf.geekdo-images.com/original/img/Cd6eLz6Q1HTYKOJs9tR0IsKXotw=/0x0/pic2428656.png",
    "category": "Prehistoric"
  },
  {
    "title": "Imhotep",
    "image": "https://cf.geekdo-images.com/original/img/ysq8dLR9HQtx-79ugVIW-1ALHnQ=/0x0/pic3029488.jpg",
    "category": "Ancient"
  },
  {
    "title": "Charterstone",
    "image": "https://cf.geekdo-images.com/original/img/QSEaUq4_I2KoVDrF1FGNJ7eAINs=/0x0/pic3322613.jpg",
    "category": "Economic,Medieval,City Building"
  },
  {
    "title": "Legendary Encounters: An Alien Deck Building Game",
    "image": "https://cf.geekdo-images.com/original/img/H0uIoKm2phCiJDqQn52PFLDgYis=/0x0/pic2225180.jpg",
    "category": "Card Game,Science Fiction,Fighting,Horror,Movies / TV / Radio theme"
  },
  {
    "title": "HeroQuest",
    "image": "https://cf.geekdo-images.com/original/img/1Lf9VkTsrqM560cfs8mcSuFtcek=/0x0/pic338410.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Fury of Dracula (Third/Fourth Edition)",
    "image": "https://cf.geekdo-images.com/original/img/jG9uFHo4Ckhocm6NuyBSTiQwgJs=/0x0/pic4411188.jpg",
    "category": "Fighting,Adventure,Horror,Novel-based,Deduction"
  },
  {
    "title": "Flamme Rouge",
    "image": "https://cf.geekdo-images.com/original/img/LJPEL6OqjxNSJuHVuZ9FnlBjplc=/0x0/pic3482521.jpg",
    "category": "Racing,Sports"
  },
  {
    "title": "In the Year of the Dragon",
    "image": "https://cf.geekdo-images.com/original/img/JTjcjPYEZu-cvFVWnoocLG9zL4s=/0x0/pic285822.jpg",
    "category": "Economic,Medieval"
  },
  {
    "title": "Pandemic Legacy: Season 2",
    "image": "https://cf.geekdo-images.com/original/img/DbXh4TeZPoJ_tSlX2KRGdVcBd8s=/0x0/pic3763549.jpg",
    "category": "Exploration,Medical,Environmental"
  },
  {
    "title": "SET",
    "image": "https://cf.geekdo-images.com/original/img/5kE_nqZgM9sYlV0gYgWA2BzlmmA=/0x0/pic3524881.jpg",
    "category": "Card Game,Puzzle,Real-time"
  },
  {
    "title": "Teotihuacan: City of Gods",
    "image": "https://cf.geekdo-images.com/original/img/gzpgd8o15PVOgMhmcd57QijX57Q=/0x0/pic4583626.jpg",
    "category": "Ancient"
  },
  {
    "title": "Quadropolis",
    "image": "https://cf.geekdo-images.com/original/img/0zD0P3JssKs0DRFSeR-7VQs1Z1E=/0x0/pic2840020.jpg",
    "category": "City Building,Environmental"
  },
  {
    "title": "Mombasa",
    "image": "https://cf.geekdo-images.com/original/img/7JDxzN4LbAeslZGBU1G7Ccqutx0=/0x0/pic2611318.jpg",
    "category": "Economic"
  },
  {
    "title": "Bärenpark",
    "image": "https://cf.geekdo-images.com/original/img/AGuL3E65YukIgSaclMVs6UmItQM=/0x0/pic3486218.jpg",
    "category": "Puzzle,Animals"
  },
  {
    "title": "Tobago",
    "image": "https://cf.geekdo-images.com/original/img/Ao7x7lkwA_GExCLsNV4eZ_sQyDE=/0x0/pic596625.jpg",
    "category": "Exploration,Adventure,Deduction"
  },
  {
    "title": "Summoner Wars: Master Set",
    "image": "https://cf.geekdo-images.com/original/img/iiv0TpOaWT8UeJItLHbsrT0VARw=/0x0/pic923048.jpg",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Axis & Allies",
    "image": "https://cf.geekdo-images.com/original/img/8S8JHFSHQQEe67A64VEAsGluB5Q=/0x0/pic24006.jpg",
    "category": "Economic,Wargame,World War II"
  },
  {
    "title": "A Game of Thrones",
    "image": "https://cf.geekdo-images.com/original/img/ddn1JUwjRwEfNyJx4vaWTpLVsw8=/0x0/pic1222116.jpg",
    "category": "Negotiation,Political,Fantasy,Bluffing,Wargame,Novel-based"
  },
  {
    "title": "Blood Bowl: Team Manager - The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/zF_nXnAc7UM4G7u0QYDIyWTAoZU=/0x0/pic1222746.jpg",
    "category": "Card Game,Fantasy,Fighting,Sports"
  },
  {
    "title": "Firefly: The Game",
    "image": "https://cf.geekdo-images.com/original/img/pzB4DckWkbp0mh1bOBvBwouuDbc=/0x0/pic1727008.png",
    "category": "Travel,Science Fiction,Adventure,Space Exploration,Movies / TV / Radio theme"
  },
  {
    "title": "King of Tokyo: Power Up!",
    "image": "https://cf.geekdo-images.com/original/img/An5ZXVsLg--zhq1yZhJF2oQpWz0=/0x0/pic1449032.jpg",
    "category": "Science Fiction,Dice,Movies / TV / Radio theme,Expansion for Base-game"
  },
  {
    "title": "The Game of Life",
    "image": "https://cf.geekdo-images.com/original/img/pf_B8zrtboWZtYSp2kBtVNk8WQE=/0x0/pic288405.jpg",
    "category": "Economic,Children's Game"
  },
  {
    "title": "Harry Potter: Hogwarts Battle",
    "image": "https://cf.geekdo-images.com/original/img/QfSBPJDuntV80tNqwBqbJqtiJ90=/0x0/pic3518231.jpg",
    "category": "Card Game,Fantasy,Novel-based,Movies / TV / Radio theme"
  },
  {
    "title": "Thunderstone",
    "image": "https://cf.geekdo-images.com/original/img/RRC_gAKS2pwa2ap43rsLlu--ah8=/0x0/pic544780.jpg",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Anachrony",
    "image": "https://cf.geekdo-images.com/original/img/HwoXcAIvX44tc_CDgcQ6I0Rztg8=/0x0/pic3499707.jpg",
    "category": "Economic,Science Fiction"
  },
  {
    "title": "Taboo",
    "image": "https://cf.geekdo-images.com/original/img/SPs7DpPr-bzxD0-dNsS-_3YFdMo=/0x0/pic212946.jpg",
    "category": "Word Game,Party Game,Real-time"
  },
  {
    "title": "Labyrinth",
    "image": "https://cf.geekdo-images.com/original/img/tvYqG8QjTgDxap2rtQvVzsv-lis=/0x0/pic2773940.jpg",
    "category": "Maze,Puzzle,Children's Game"
  },
  {
    "title": "Ticket to Ride: USA 1910",
    "image": "https://cf.geekdo-images.com/original/img/-KdlixTSQ3z_yPGkZtReI8jAArI=/0x0/pic144599.jpg",
    "category": "Expansion for Base-game,Trains"
  },
  {
    "title": "Dinosaur Island",
    "image": "https://cf.geekdo-images.com/original/img/ZMb-Usr5q5YvXrep-b5gbrHKbBo=/0x0/pic3429338.png",
    "category": "Economic,Science Fiction"
  },
  {
    "title": "Bruges",
    "image": "https://cf.geekdo-images.com/original/img/G_0u37fgId8_hqzPrpQaJZSR5bU=/0x0/pic1652004.jpg",
    "category": "Economic,Card Game,City Building,Renaissance"
  },
  {
    "title": "War of the Ring",
    "image": "https://cf.geekdo-images.com/original/img/naKKeihI8fzCba236vxbeqbhhLI=/0x0/pic725882.jpg",
    "category": "Fantasy,Miniatures,Wargame,Adventure,Novel-based,Territory Building"
  },
  {
    "title": "Age of Empires III: The Age of Discovery",
    "image": "https://cf.geekdo-images.com/original/img/GOqmwFFdaJH3jyq02Cd332D7EXQ=/0x0/pic990261.jpg",
    "category": "Civilization,Exploration,Renaissance,Video Game Theme"
  },
  {
    "title": "Carcassonne: The River",
    "image": "https://cf.geekdo-images.com/original/img/1BQqb-RiBzGS4IfBpRB9xcVrc4E=/0x0/pic193765.jpg",
    "category": "Medieval,City Building,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Ca$h 'n Gun$",
    "image": "https://cf.geekdo-images.com/original/img/KW5CHRGwuwVWPZKHfuT5HjlC9pE=/0x0/pic87523.jpg",
    "category": "Negotiation,Card Game,Bluffing,Fighting,Humor,Party Game,Mafia"
  },
  {
    "title": "Viticulture",
    "image": "https://cf.geekdo-images.com/original/img/ATjch6ZLh4gQEF6CjZPDKl1ZroM=/0x0/pic2619743.jpg",
    "category": "Economic,Farming"
  },
  {
    "title": "Ora et Labora",
    "image": "https://cf.geekdo-images.com/original/img/3XYxG8WWhpy26GjM1gosg4K8gUY=/0x0/pic5089618.jpg",
    "category": "Economic,Medieval,City Building,Territory Building,Industry / Manufacturing,Religious"
  },
  {
    "title": "The Werewolves of Miller's Hollow",
    "image": "https://cf.geekdo-images.com/original/img/wdSMpOFfty85DOnIY9GR5hL2YB0=/0x0/pic510856.jpg",
    "category": "Bluffing,Horror,Deduction,Party Game,Murder/Mystery"
  },
  {
    "title": "Deep Sea Adventure",
    "image": "https://cf.geekdo-images.com/original/img/BWeLxC-0-wJc06kTFf0fOMa9BuQ=/0x0/pic3169827.png",
    "category": "Nautical,Exploration,Dice,Party Game"
  },
  {
    "title": "7 Wonders: Cities",
    "image": "https://cf.geekdo-images.com/original/img/haUgLus7zmOGXp7GtKawIyMSmt4=/0x0/pic1380423.jpg",
    "category": "Card Game,Ancient,Civilization,City Building,Expansion for Base-game"
  },
  {
    "title": "Small World Underground",
    "image": "https://cf.geekdo-images.com/original/img/9jl0O3deXF0CPP-cnLfyhmw5zns=/0x0/pic979889.jpg",
    "category": "Fantasy,Fighting,Territory Building"
  },
  {
    "title": "Race for the Galaxy: The Gathering Storm",
    "image": "https://cf.geekdo-images.com/original/img/sxU7KBOz6bF3861tkeJpyw4XalM=/0x0/pic376993.jpg",
    "category": "Economic,Card Game,Civilization,Science Fiction,Space Exploration,Expansion for Base-game"
  },
  {
    "title": "Decrypto",
    "image": "https://cf.geekdo-images.com/original/img/Nq39bGSnCjYDhmwNQlFdNHoSjsQ=/0x0/pic3759421.jpg",
    "category": "Deduction,Word Game,Party Game,Spies/Secret Agents"
  },
  {
    "title": "Steam",
    "image": "https://cf.geekdo-images.com/original/img/Ss958wDZnMLtO5OaxR9Ya855rpU=/0x0/pic392515.jpg",
    "category": "Economic,Trains,Transportation"
  },
  {
    "title": "The Quest for El Dorado",
    "image": "https://cf.geekdo-images.com/original/img/vu2VOkIZo9u0lv5vWfxax0vavDw=/0x0/pic3617168.jpg",
    "category": "Racing,Adventure"
  },
  {
    "title": "PitchCar",
    "image": "https://cf.geekdo-images.com/original/img/aFDFOGgN52kiEQxdoxF9KTb6NjU=/0x0/pic215555.jpg",
    "category": "Racing,Party Game,Children's Game,Action / Dexterity,Sports"
  },
  {
    "title": "At the Gates of Loyang",
    "image": "https://cf.geekdo-images.com/original/img/heq9_9W9Dq6BA5mWQlQLnRuqp_E=/0x0/pic3601060.jpg",
    "category": "Economic,Farming"
  },
  {
    "title": "Hanamikoji",
    "image": "https://cf.geekdo-images.com/original/img/91Xk0E6tifxeV5ZUFZZh1cgK0Yw=/0x0/pic2992529.jpg",
    "category": "Card Game,Medieval,Video Game Theme"
  },
  {
    "title": "Eminent Domain",
    "image": "https://cf.geekdo-images.com/original/img/WJKSJeGjV6doF5uJ4VXu0xin7Wo=/0x0/pic1160506.jpg",
    "category": "Card Game,Civilization,Science Fiction,Space Exploration"
  },
  {
    "title": "Abyss",
    "image": "https://cf.geekdo-images.com/original/img/QZD3-w6S6hbAQO7AfTFc342WsqI=/0x0/pic1965255.jpg",
    "category": "Card Game,Fantasy,Mythology,Science Fiction"
  },
  {
    "title": "BattleLore",
    "image": "https://cf.geekdo-images.com/original/img/GQJXhnT23dO0GC6zDWhY-mMlKao=/0x0/pic145116.jpg",
    "category": "Fantasy,Medieval,Miniatures,Wargame"
  },
  {
    "title": "Between Two Cities",
    "image": "https://cf.geekdo-images.com/original/img/Su50y56tW7OpjmkxtJSobo5-U-0=/0x0/pic2326114.jpg",
    "category": "Negotiation,City Building"
  },
  {
    "title": "Lanterns: The Harvest Festival",
    "image": "https://cf.geekdo-images.com/original/img/MI7bbPMpcU2ZTvmhb1HmZ5i0nNY=/0x0/pic2372790.png",
    "category": "Ancient,City Building,Territory Building"
  },
  {
    "title": "Thebes",
    "image": "https://cf.geekdo-images.com/original/img/cLWmUgzfk-520gBxW5hugGEk5XQ=/0x0/pic2723204.jpg",
    "category": "Ancient,Exploration,Travel"
  },
  {
    "title": "Endeavor",
    "image": "https://cf.geekdo-images.com/original/img/BiF5c2XHFSPHeIaZic6TrxSAna8=/0x0/pic379881.jpg",
    "category": "Nautical,Exploration,Renaissance"
  },
  {
    "title": "Discworld: Ankh-Morpork",
    "image": "https://cf.geekdo-images.com/original/img/DtOjxhp7fl74q7PCE4IVtqp2gqc=/0x0/pic1062739.jpg",
    "category": "Fantasy,Bluffing,City Building,Novel-based,Deduction"
  },
  {
    "title": "Nemesis",
    "image": "https://cf.geekdo-images.com/original/img/fOgLH666aTUqwnhtZjSGH4-XJ8U=/0x0/pic5073276.jpg",
    "category": "Science Fiction,Miniatures,Adventure,Horror"
  },
  {
    "title": "Pandemic: The Cure",
    "image": "https://cf.geekdo-images.com/original/img/YZPY32nliJsyXGE7B7uM_v3TMB4=/0x0/pic2225998.jpg",
    "category": "Dice,Medical,Environmental"
  },
  {
    "title": "The Manhattan Project",
    "image": "https://cf.geekdo-images.com/original/img/GhNCYY9ALHoRAoiy2i5qTfGHKoE=/0x0/pic1222522.jpg",
    "category": "Economic,Negotiation,Fighting,Aviation / Flight,Industry / Manufacturing,World War II"
  },
  {
    "title": "Fury of Dracula (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/gZbmnbjwkIvP5c3trhEBoc3ggpc=/0x0/pic1586916.jpg",
    "category": "Fighting,Adventure,Horror,Novel-based,Deduction"
  },
  {
    "title": "Poker",
    "image": "https://cf.geekdo-images.com/original/img/Z87dKNf_VtJMvqoF6ejjHcbBfIk=/0x0/pic186610.jpg",
    "category": "Card Game,Bluffing"
  },
  {
    "title": "Ethnos",
    "image": "https://cf.geekdo-images.com/original/img/l3bgYwqwolui5dk6nYKmirbAHC4=/0x0/pic3304124.png",
    "category": "Fantasy"
  },
  {
    "title": "Euphoria: Build a Better Dystopia",
    "image": "https://cf.geekdo-images.com/original/img/t5rIEM0QZrcXZiPahjFdPLUWgXI=/0x0/pic1615561.jpg",
    "category": "Science Fiction"
  },
  {
    "title": "Bora Bora",
    "image": "https://cf.geekdo-images.com/original/img/ci9eoyqBBeM8fG7IvfoqHAAOdJw=/0x0/pic1542342.jpg",
    "category": "Dice"
  },
  {
    "title": "Mascarade",
    "image": "https://cf.geekdo-images.com/original/img/659I4dOGhGMkUiGSZs-tpof9OSo=/0x0/pic1762410.jpg",
    "category": "Card Game,Medieval,Bluffing,Party Game"
  },
  {
    "title": "The Gallerist",
    "image": "https://cf.geekdo-images.com/original/img/Ye9XSo3Ozz93R3ofXYHWfC_pMFg=/0x0/pic2503200.png",
    "category": "Economic"
  },
  {
    "title": "Tapestry",
    "image": "https://cf.geekdo-images.com/original/img/UZdMRm21hmeC_r7RhP7wobnkkzo=/0x0/pic4884996.jpg",
    "category": "Civilization"
  },
  {
    "title": "Arcadia Quest",
    "image": "https://cf.geekdo-images.com/original/img/lB5mc2bDPP2fNjvnBJLkSQvM2ps=/0x0/pic2305263.jpg",
    "category": "Fantasy,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Last Will",
    "image": "https://cf.geekdo-images.com/original/img/ay7JYM2WAwkTZ4x78_lraRFpTy8=/0x0/pic2442432.jpg",
    "category": "Economic,Card Game,Humor"
  },
  {
    "title": "Las Vegas",
    "image": "https://cf.geekdo-images.com/original/img/Unwd-qX2FdJ_7JRfWUm8DCDpk8w=/0x0/pic1261796.jpg",
    "category": "Dice"
  },
  {
    "title": "Glass Road",
    "image": "https://cf.geekdo-images.com/original/img/r4Pjyfk-7ihYd3E9a9amLKQzZnA=/0x0/pic3505745.jpg",
    "category": "Economic,Medieval,City Building"
  },
  {
    "title": "K2",
    "image": "https://cf.geekdo-images.com/original/img/amJbmW5ZjfIZIwaLZEW-ozjwdSc=/0x0/pic1051300.jpg",
    "category": "Exploration,Sports"
  },
  {
    "title": "Ticket to Ride: Marklin",
    "image": "https://cf.geekdo-images.com/original/img/ywSVi0CRXd1SpW21GIP70eYAVYQ=/0x0/pic162026.jpg",
    "category": "Trains,Transportation"
  },
  {
    "title": "Pickomino",
    "image": "https://cf.geekdo-images.com/original/img/a946_zQY9PiPz878w-oOIqK3lGY=/0x0/pic2345051.jpg",
    "category": "Dice,Animals"
  },
  {
    "title": "Just One",
    "image": "https://cf.geekdo-images.com/original/img/WFsA4z8bPaByWIDS_QwC5lFwIIM=/0x0/pic4268499.jpg",
    "category": "Word Game,Party Game"
  },
  {
    "title": "Qwixx",
    "image": "https://cf.geekdo-images.com/original/img/5TLsVQwueg9cXJoiyZGUTT5oxbI=/0x0/pic1950487.jpg",
    "category": "Dice,Number,Math"
  },
  {
    "title": "Glen More",
    "image": "https://cf.geekdo-images.com/original/img/W2LIAOd9GntolWuLi-j0flI2SwE=/0x0/pic1013640.jpg",
    "category": "Economic,Farming,City Building"
  },
  {
    "title": "Torres",
    "image": "https://cf.geekdo-images.com/original/img/GoIChVlzO2W0RNOBv9SM0sp-1qg=/0x0/pic3515154.jpg",
    "category": "Abstract Strategy,Medieval"
  },
  {
    "title": "Carcassonne: Expansion 3: The Princess & The Dragon",
    "image": "https://cf.geekdo-images.com/original/img/-9f3iv2QOl7EefCR2wtW_JBXL-8=/0x0/pic3552224.jpg",
    "category": "Fantasy,Medieval,City Building,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Aeon's End",
    "image": "https://cf.geekdo-images.com/original/img/FMyNWbquUF9zkxFGrZK2qQk94os=/0x0/pic3189350.jpg",
    "category": "Card Game,Fantasy,Science Fiction,Fighting"
  },
  {
    "title": "Amun-Re",
    "image": "https://cf.geekdo-images.com/original/img/RPLChjDoiJ07FkMcj1T5iAVmZ3M=/0x0/pic2748305.jpg",
    "category": "Economic,Ancient"
  },
  {
    "title": "Oh My Goods!",
    "image": "https://cf.geekdo-images.com/original/img/dtkInU6mMWCrZlsWHDGrARNJJSw=/0x0/pic3032677.jpg",
    "category": "Economic,Card Game,Medieval"
  },
  {
    "title": "KeyForge: Call of the Archons",
    "image": "https://cf.geekdo-images.com/original/img/vu0eiTk2Bd3pJF-qvVVIzFsy63c=/0x0/pic4298867.jpg",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Age of Steam",
    "image": "https://cf.geekdo-images.com/original/img/8zbcs1wIC4TNwVtKA9-HPDd2mKM=/0x0/pic4557340.png",
    "category": "Economic,Trains,Transportation"
  },
  {
    "title": "Paperback",
    "image": "https://cf.geekdo-images.com/original/img/UzrdvNP-zb27P9xS_PD2IIozcLg=/0x0/pic1991455.jpg",
    "category": "Card Game,Print & Play,Word Game"
  },
  {
    "title": "Nexus Ops",
    "image": "https://cf.geekdo-images.com/original/img/mJhS63KzNBg7Aa9D3NPEJGwmOqM=/0x0/pic1134615.jpg",
    "category": "Exploration,Science Fiction,Fighting,Wargame"
  },
  {
    "title": "Fairy Tale",
    "image": "https://cf.geekdo-images.com/original/img/7yFOVVLf3qv1JE-LfEZiONR5vvM=/0x0/pic2024738.jpg",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Mission: Red Planet (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/qEoLUDBpnVb0Zc4FGDqqZH9hp4s=/0x0/pic2499748.jpg",
    "category": "Science Fiction"
  },
  {
    "title": "Colosseum",
    "image": "https://cf.geekdo-images.com/original/img/eRCBuf4ikWw2Yg48de6HFCV8ohU=/0x0/pic2729904.jpg",
    "category": "Negotiation,Ancient"
  },
  {
    "title": "1960: The Making of the President",
    "image": "https://cf.geekdo-images.com/original/img/V2ZLDmIl-5JA0_C10ZmDRkd_PfA=/0x0/pic3499166.jpg",
    "category": "Political"
  },
  {
    "title": "Cranium",
    "image": "https://cf.geekdo-images.com/original/img/bEWXs9EG5Wtav_nU43SaUvZh4SU=/0x0/pic4994220.jpg",
    "category": "Word Game,Party Game,Puzzle,Trivia"
  },
  {
    "title": "Condottiere",
    "image": "https://cf.geekdo-images.com/original/img/AaKHhx_TZr34DCLaWwj9C1daFmo=/0x0/pic4211268.jpg",
    "category": "Negotiation,Card Game,Medieval,Bluffing"
  },
  {
    "title": "Dungeons & Dragons: Castle Ravenloft Board Game",
    "image": "https://cf.geekdo-images.com/original/img/jCbTMXEzaEBKoGaV396CQRKwiuU=/0x0/pic660244.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure,Horror"
  },
  {
    "title": "Imperial",
    "image": "https://cf.geekdo-images.com/original/img/XF_XEH6FX0LkeKiN_2DKSFabOiQ=/0x0/pic840712.jpg",
    "category": "Economic,Political,Nautical"
  },
  {
    "title": "Elysium",
    "image": "https://cf.geekdo-images.com/original/img/yik8q5LEYMtrO9Bx8-dUN9m2-H8=/0x0/pic2837103.png",
    "category": "Card Game,Ancient,Mythology"
  },
  {
    "title": "Loopin' Louie",
    "image": "https://cf.geekdo-images.com/original/img/omJ-D8Exi6YrZTJmLoUkBFg9elc=/0x0/pic4025029.png",
    "category": "Electronic,Aviation / Flight,Movies / TV / Radio theme,Real-time,Animals,Children's Game,Action / Dexterity"
  },
  {
    "title": "Mystic Vale",
    "image": "https://cf.geekdo-images.com/original/img/oO8OoLA0tcXcNazc_HFYVFdww48=/0x0/pic3287905.png",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Monopoly Deal Card Game",
    "image": "https://cf.geekdo-images.com/original/img/sExC40CylWBJvonJeXubmblKTfc=/0x0/pic716758.jpg",
    "category": "Economic,Card Game"
  },
  {
    "title": "High Society",
    "image": "https://cf.geekdo-images.com/original/img/U0_9bEZ4GcO8Kk6eNzqqTRQcwiE=/0x0/pic3894197.jpg",
    "category": "Card Game"
  },
  {
    "title": "Scattergories",
    "image": "https://cf.geekdo-images.com/original/img/sN6GwoL0fEVWxgiQdCtrGBRO7a0=/0x0/pic4994410.jpg",
    "category": "Word Game,Party Game,Real-time"
  },
  {
    "title": "Pit",
    "image": "https://cf.geekdo-images.com/original/img/6Bk_0RHFu1863OEWAa27XBmv1-Y=/0x0/pic423644.jpg",
    "category": "Economic,Card Game,Party Game,Real-time"
  },
  {
    "title": "La Granja",
    "image": "https://cf.geekdo-images.com/original/img/bYiw2vhO2TVB5Dwq5_KzczLpTaQ=/0x0/pic2031777.jpg",
    "category": "Economic,Farming"
  },
  {
    "title": "Kahuna",
    "image": "https://cf.geekdo-images.com/original/img/sG8Gjsd3AdIYaREO4HHJK7jWtoI=/0x0/pic2606165.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Battleship",
    "image": "https://cf.geekdo-images.com/original/img/5kYXGo6qinql4h6Mvrc6m1pwdek=/0x0/pic2439783.png",
    "category": "Nautical,Wargame,Deduction,Children's Game"
  },
  {
    "title": "Karuba",
    "image": "https://cf.geekdo-images.com/original/img/Wf7ocgmPXopC2cgd48UZm4EEr8E=/0x0/pic2727088.jpg",
    "category": "Racing,Puzzle"
  },
  {
    "title": "Bananagrams",
    "image": "https://cf.geekdo-images.com/original/img/YkEZH0195Gs84brLmF8EPEtZFl4=/0x0/pic2463443.jpg",
    "category": "Word Game,Real-time"
  },
  {
    "title": "Chinatown",
    "image": "https://cf.geekdo-images.com/original/img/LdluwRThRYmAd-1Bfu55_Wnxtps=/0x0/pic2037509.png",
    "category": "Economic,Negotiation,City Building"
  },
  {
    "title": "Dominion: Alchemy",
    "image": "https://cf.geekdo-images.com/original/img/_YSJLJRyUtlHbxeawk7110DwZoM=/0x0/pic698779.jpg",
    "category": "Card Game,Medieval,Expansion for Base-game"
  },
  {
    "title": "Jambo",
    "image": "https://cf.geekdo-images.com/original/img/kxwnIxgssaNiFB_PNf5l-IFG1eA=/0x0/pic253740.jpg",
    "category": "Economic,Card Game"
  },
  {
    "title": "Pirate's Cove",
    "image": "https://cf.geekdo-images.com/original/img/QMUBPs550zk55qOmZyCoAb7rK6o=/0x0/pic162248.jpg",
    "category": "Nautical,Fighting,Adventure,Pirates"
  },
  {
    "title": "Lorenzo il Magnifico",
    "image": "https://cf.geekdo-images.com/original/img/yoCGxA_YHrJnlBGRdpOjLFxcnsQ=/0x0/pic3175535.jpg",
    "category": "Renaissance"
  },
  {
    "title": "Once Upon a Time: The Storytelling Card Game",
    "image": "https://cf.geekdo-images.com/original/img/dKbdYTZT6_vQbqpV-PBQ1xrVTSE=/0x0/pic1494028.jpg",
    "category": "Card Game,Humor,Party Game,Real-time"
  },
  {
    "title": "Elfenland",
    "image": "https://cf.geekdo-images.com/original/img/M3fRcs2sKpffc7Yl1KXodvbBa5Q=/0x0/pic1798136.jpg",
    "category": "Fantasy,Travel"
  },
  {
    "title": "Shadow Hunters",
    "image": "https://cf.geekdo-images.com/original/img/3mPh8j7VztH-s2G1yU6sY10Ln60=/0x0/pic1215982.jpg",
    "category": "Card Game,Bluffing,Adventure,Horror,Deduction,Party Game"
  },
  {
    "title": "Cribbage",
    "image": "https://cf.geekdo-images.com/original/img/V7zGq_t_smy3rqG08qYlnCE9Ug4=/0x0/pic121094.jpg",
    "category": "Card Game"
  },
  {
    "title": "Wizard",
    "image": "https://cf.geekdo-images.com/original/img/Uk2J7VGDyGMt6O3H_Pkt41GSlmQ=/0x0/pic5948.jpg",
    "category": "Card Game"
  },
  {
    "title": "Vikings",
    "image": "https://cf.geekdo-images.com/original/img/Ju3c1LmwCGeuH7-8lbwuQXCxFag=/0x0/pic1904581.jpg",
    "category": "Economic,Medieval,Nautical,Territory Building"
  },
  {
    "title": "Commands & Colors: Ancients",
    "image": "https://cf.geekdo-images.com/original/img/NrNEpsg1hrcPtMCzaLHLLXTmdoI=/0x0/pic132447.jpg",
    "category": "Ancient,Wargame"
  },
  {
    "title": "Navegador",
    "image": "https://cf.geekdo-images.com/original/img/mS2CkGdFkp6sJAdZaA10PYo_QAc=/0x0/pic3246725.jpg",
    "category": "Economic,Nautical,Exploration,Renaissance"
  },
  {
    "title": "Cuba",
    "image": "https://cf.geekdo-images.com/original/img/s3GD8epaRKDe7cxriKSCu9GIBTI=/0x0/pic1205385.jpg",
    "category": "Economic,Farming"
  },
  {
    "title": "Yokohama",
    "image": "https://cf.geekdo-images.com/original/img/De9ZLEfwyXpB7G_k7rkUBfiXixo=/0x0/pic3600984.jpg",
    "category": "Economic"
  },
  {
    "title": "Exit: The Game - The Abandoned Cabin",
    "image": "https://cf.geekdo-images.com/original/img/r6TX6WjqRCHRRDty5s5_9kxE5XQ=/0x0/pic3332426.jpg",
    "category": "Deduction,Puzzle,Real-time"
  },
  {
    "title": "Ricochet Robots",
    "image": "https://cf.geekdo-images.com/original/img/JYeDH3hI2Dp41vYnnjlAElwS9pE=/0x0/pic1766273.jpg",
    "category": "Abstract Strategy,Maze,Puzzle,Real-time"
  },
  {
    "title": "Cockroach Poker",
    "image": "https://cf.geekdo-images.com/original/img/YLG4YkXZm51tI21UoykSUp9VLGo=/0x0/pic3218988.jpg",
    "category": "Card Game,Bluffing,Party Game"
  },
  {
    "title": "Agricola (Revised Edition)",
    "image": "https://cf.geekdo-images.com/original/img/oQorPaOofq9lmHTOgjNpi8kDWAQ=/0x0/pic3029377.jpg",
    "category": "Economic,Farming,Animals"
  },
  {
    "title": "Niagara",
    "image": "https://cf.geekdo-images.com/original/img/2kkDtrlAWsz6SHAdVh1TrsH9i0M=/0x0/pic180873.jpg",
    "category": "Nautical"
  },
  {
    "title": "Burgle Bros.",
    "image": "https://cf.geekdo-images.com/original/img/EZzi2Jvp8pY5SWfOG5gD0eTabdM=/0x0/pic2439102.png",
    "category": "Exploration,Print & Play,Maze,Spies/Secret Agents"
  },
  {
    "title": "The Game",
    "image": "https://cf.geekdo-images.com/original/img/XYKto3_6jd0CGSS9EPqjyCvrQDU=/0x0/pic4203279.png",
    "category": "Card Game,Number"
  },
  {
    "title": "Clank! In! Space!: A Deck-Building Adventure",
    "image": "https://cf.geekdo-images.com/original/img/fABHPKiMqPXzFg5fgybJSJkpMuY=/0x0/pic3720843.jpg",
    "category": "Science Fiction"
  },
  {
    "title": "7 Wonders Duel: Pantheon",
    "image": "https://cf.geekdo-images.com/original/img/1N8eqWtnQoa5Y7ru8pmD5cXEfpU=/0x0/pic3143885.png",
    "category": "Card Game,Ancient,Civilization,City Building,Expansion for Base-game"
  },
  {
    "title": "Heroscape Master Set: Rise of the Valkyrie",
    "image": "https://cf.geekdo-images.com/original/img/4Pu-KjApGRYUiZBhnefExDSDKBQ=/0x0/pic244662.jpg",
    "category": "Fantasy,Science Fiction,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Pandemic: Iberia",
    "image": "https://cf.geekdo-images.com/original/img/65W6mKBX34X2pLswgsfKPCfAcdw=/0x0/pic3000850.png",
    "category": "Medical"
  },
  {
    "title": "Rhino Hero",
    "image": "https://cf.geekdo-images.com/original/img/t5O7NJLwlcc703k8Ij-PktJor2o=/0x0/pic1010030.jpg",
    "category": "Party Game,Animals,Children's Game,Action / Dexterity"
  },
  {
    "title": "Runebound (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/Z8MCWBklIiQ6juppUv-JQEa72EI=/0x0/pic178189.jpg",
    "category": "Fantasy,Exploration,Fighting,Adventure"
  },
  {
    "title": "Yspahan",
    "image": "https://cf.geekdo-images.com/original/img/0NAlC2w3zL0GKbhsretEjWdZLYQ=/0x0/pic244381.jpg",
    "category": "Wargame,World War II,Expansion for Base-game"
  },
  {
    "title": "BANG! The Bullet!",
    "image": "https://cf.geekdo-images.com/original/img/AFU7uyG28b1fRD3qMSt1Ubi_AqU=/0x0/pic1198011.jpg",
    "category": "Card Game,Bluffing,Fighting,American West,Humor,Deduction"
  },
  {
    "title": "Celestia",
    "image": "https://cf.geekdo-images.com/original/img/8TuCJJnbAiGO7Qx3gemKYChrZxQ=/0x0/pic2577990.jpg",
    "category": "Card Game,Fantasy,Adventure,Aviation / Flight"
  },
  {
    "title": "Hive Pocket",
    "image": "https://cf.geekdo-images.com/original/img/bcz58Z91B9WLK56AXyEjW2imfMk=/0x0/pic1299877.png",
    "category": "Abstract Strategy,Animals"
  },
  {
    "title": "Runewars",
    "image": "https://cf.geekdo-images.com/original/img/p8_gcPy47bqPkhXzWTauqPdiCo8=/0x0/pic1534815.jpg",
    "category": "Fantasy,Fighting,Wargame,Adventure"
  },
  {
    "title": "Rajas of the Ganges",
    "image": "https://cf.geekdo-images.com/original/img/P3sTPrGAMu28fchhTPxIjmXrq58=/0x0/pic3646165.jpg",
    "category": "Economic,Dice,Territory Building"
  },
  {
    "title": "Red November",
    "image": "https://cf.geekdo-images.com/original/img/aWXlKmfQTrm8SPFAfq-7q7m2GNE=/0x0/pic973939.jpg",
    "category": "Fantasy,Nautical,Humor"
  },
  {
    "title": "Formula De",
    "image": "https://cf.geekdo-images.com/original/img/9Q27evphJHRNCD8Wzm-Sm4XXTms=/0x0/pic168167.jpg",
    "category": "Racing,Sports"
  },
  {
    "title": "TransAmerica",
    "image": "https://cf.geekdo-images.com/original/img/VtGFsfVxbjmCV-_u_QNlSbSp2p4=/0x0/pic158561.jpg",
    "category": "Trains"
  },
  {
    "title": "Mystery of the Abbey",
    "image": "https://cf.geekdo-images.com/original/img/gXhqtJ7s2Rq_rgrYp7AULKqH8qk=/0x0/pic897161.jpg",
    "category": "Medieval,Deduction,Murder/Mystery,Religious"
  },
  {
    "title": "XCOM: The Board Game",
    "image": "https://cf.geekdo-images.com/original/img/81qwLR9Qs-w-dEkocyZ32-qQbSs=/0x0/pic2247621.jpg",
    "category": "Science Fiction,Real-time,Video Game Theme"
  },
  {
    "title": "Cacao",
    "image": "https://cf.geekdo-images.com/original/img/JMlermGuSWS8eEWLNHvt5ha0unw=/0x0/pic2379288.jpg",
    "category": "Economic,Farming,Territory Building"
  },
  {
    "title": "Taluva",
    "image": "https://cf.geekdo-images.com/original/img/jMTsoBodWAAnxEXEbk9lolz00AI=/0x0/pic1948254.png",
    "category": "City Building,Territory Building"
  },
  {
    "title": "Blue Moon City",
    "image": "https://cf.geekdo-images.com/original/img/5kYRY3fJk4v4fIKME8Zq3npd_RQ=/0x0/pic4757841.jpg",
    "category": "Fantasy,City Building"
  },
  {
    "title": "Broom Service",
    "image": "https://cf.geekdo-images.com/original/img/YrLRtKpFVN7_QhPmj2WYb6TalzM=/0x0/pic2546156.jpg",
    "category": "Fantasy"
  },
  {
    "title": "Trains",
    "image": "https://cf.geekdo-images.com/original/img/Xwi7sv6uH0z7lmuaUusg9BrfYms=/0x0/pic1606346.jpg",
    "category": "Card Game,Territory Building,Trains,Transportation"
  },
  {
    "title": "This War of Mine: The Board Game",
    "image": "https://cf.geekdo-images.com/original/img/VmqDT6K9qJyjmq3oHdJmdrmhdII=/0x0/pic3315915.jpg",
    "category": "Exploration,Adventure,Modern Warfare,Video Game Theme,Mature / Adult"
  },
  {
    "title": "Ubongo",
    "image": "https://cf.geekdo-images.com/original/img/YLHbhwuZAR_9lfMZtr3IzdjlZ4E=/0x0/pic4597123.jpg",
    "category": "Puzzle,Real-time"
  },
  {
    "title": "Cartagena",
    "image": "https://cf.geekdo-images.com/original/img/530VpEBx6DJhfe_B5C4qCQCGwlo=/0x0/pic1889500.jpg",
    "category": "Racing,Pirates"
  },
  {
    "title": "ICECOOL",
    "image": "https://cf.geekdo-images.com/original/img/4XOLW5Vgrr8bJ5J_5IozKzns_xc=/0x0/pic2937209.png",
    "category": "Animals,Children's Game,Action / Dexterity"
  },
  {
    "title": "Rise of Augustus",
    "image": "https://cf.geekdo-images.com/original/img/OZqUqWV6Va00l85AAOz1skWunHc=/0x0/pic3532649.jpg",
    "category": "Card Game,Ancient"
  },
  {
    "title": "Carcassonne: The Castle",
    "image": "https://cf.geekdo-images.com/original/img/7lTOkLHfELCQCFOx1GYarqIbyqU=/0x0/pic2606367.jpg",
    "category": "Medieval,City Building"
  },
  {
    "title": "Fearsome Floors",
    "image": "https://cf.geekdo-images.com/original/img/_uPedRJSeg1Q0D6Ar05Hk9uxJ-4=/0x0/pic163508.jpg",
    "category": "Racing,Horror"
  },
  {
    "title": "Fields of Arle",
    "image": "https://cf.geekdo-images.com/original/img/xlgiqGRKx6LZuhjh5iR-dtbMrJQ=/0x0/pic2225968.png",
    "category": "Economic,Farming,Industry / Manufacturing"
  },
  {
    "title": "Disney Villainous",
    "image": "https://cf.geekdo-images.com/original/img/ldlfeWODbB_Ma5STQ5q1vqSxiHc=/0x0/pic4216110.jpg",
    "category": ""
  },
  {
    "title": "Azul: Stained Glass of Sintra",
    "image": "https://cf.geekdo-images.com/original/img/jcI2vRwxb_UyU_DulPft3R7Fc9w=/0x0/pic4212417.jpg",
    "category": "Abstract Strategy,Renaissance"
  },
  {
    "title": "Onirim (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/Q4HHJhMaZxukjypUS81otdLU8cE=/0x0/pic2257657.png",
    "category": "Card Game,Fantasy,Exploration"
  },
  {
    "title": "Eight-Minute Empire",
    "image": "https://cf.geekdo-images.com/original/img/09AXBeSpJUsL1JR7ol5PBdKEsbQ=/0x0/pic1443212.jpg",
    "category": "Territory Building"
  },
  {
    "title": "Risk Legacy",
    "image": "https://cf.geekdo-images.com/original/img/-axxPwU_h4uL0sd1s44wzGiVMT0=/0x0/pic1196938.jpg",
    "category": "Science Fiction,Wargame"
  },
  {
    "title": "Dungeon Roll",
    "image": "https://cf.geekdo-images.com/original/img/ARfgy1sPz30eA5jCr3LX8H_nHAQ=/0x0/pic1585905.png",
    "category": "Animals,Prehistoric,Environmental"
  },
  {
    "title": "Underwater Cities",
    "image": "https://cf.geekdo-images.com/original/img/LCsuq0PJ4JEVyrV5YSaLqaIkGv0=/0x0/pic4837710.png",
    "category": "Card Game,Civilization,Nautical,Science Fiction,City Building,Industry / Manufacturing"
  },
  {
    "title": "Trivial Pursuit: Genus Edition",
    "image": "https://cf.geekdo-images.com/original/img/fuEEhZz4AAMJF2HSFjlMhd3RZ9M=/0x0/pic387612.jpg",
    "category": "Party Game,Trivia"
  },
  {
    "title": "Tiny Towns",
    "image": "https://cf.geekdo-images.com/original/img/LlmYgjHpwkrPt3gqELyI4uZXD-Q=/0x0/pic4460401.jpg",
    "category": "Abstract Strategy,City Building,Animals"
  },
  {
    "title": "A Few Acres of Snow",
    "image": "https://cf.geekdo-images.com/original/img/jyh8_a9_u1LO_nWUqXfLEGBYua8=/0x0/pic905905.jpg",
    "category": "Card Game,Wargame,Territory Building,Age of Reason,American Indian Wars"
  },
  {
    "title": "Chicago Express",
    "image": "https://cf.geekdo-images.com/original/img/5AsB8bKYMjmqMOtRse58ME7EZlM=/0x0/pic1566274.jpg",
    "category": "Economic,Trains,Transportation,Post-Napoleonic"
  },
  {
    "title": "Mr. Jack Pocket",
    "image": "https://cf.geekdo-images.com/original/img/dQ0ES_SKxG2oXbhKy73RVQEdNvw=/0x0/pic1519530.jpg",
    "category": "Bluffing,Deduction,Murder/Mystery,Post-Napoleonic"
  },
  {
    "title": "Mage Wars Arena",
    "image": "https://cf.geekdo-images.com/original/img/vPot4QMbaHIpmKiCCJCC8VxI-9E=/0x0/pic2386027.jpg",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Flick 'em Up!",
    "image": "https://cf.geekdo-images.com/original/img/ycQEZWbJ5amBgH5zp6fDGExno6o=/0x0/pic5095159.jpg",
    "category": "Fighting,American West,Action / Dexterity"
  },
  {
    "title": "Dead of Winter: The Long Night",
    "image": "https://cf.geekdo-images.com/original/img/ZLQYXI0DERFPJ1xC8PuJY__RY28=/0x0/pic2906832.jpg",
    "category": "Bluffing,Science Fiction,Horror,Deduction,Zombies,Mature / Adult"
  },
  {
    "title": "Pandemic: Reign of Cthulhu",
    "image": "https://cf.geekdo-images.com/original/img/0dIqDhB7veQw2HQ-ecKjcon3IoY=/0x0/pic2866737.png",
    "category": "Mythology,Horror,Novel-based"
  },
  {
    "title": "The Fox in the Forest",
    "image": "https://cf.geekdo-images.com/original/img/2_TEdfnMI1Rc8F2qlsZ7rq8vLWg=/0x0/pic3496085.jpg",
    "category": "Card Game,Fantasy,Animals"
  },
  {
    "title": "Not Alone",
    "image": "https://cf.geekdo-images.com/original/img/9I633kKUJ_VH00BGKNlgl9cDyTg=/0x0/pic3118416.jpg",
    "category": "Card Game,Bluffing,Science Fiction,Deduction"
  },
  {
    "title": "Raptor",
    "image": "https://cf.geekdo-images.com/original/img/kzuA4XOQI94oq7hdFESznGnCSuU=/0x0/pic2520016.jpg",
    "category": "Science Fiction,Fighting,Animals"
  },
  {
    "title": "Coimbra",
    "image": "https://cf.geekdo-images.com/original/img/eNIan1v-I6hDRlFMmLigRR-eE8c=/0x0/pic3956079.jpg",
    "category": "Dice,Renaissance"
  },
  {
    "title": "The Downfall of Pompeii",
    "image": "https://cf.geekdo-images.com/original/img/tdrVnTL9-88Dx6YhGy75gLFaUJU=/0x0/pic1685805.jpg",
    "category": "Ancient"
  },
  {
    "title": "Phase 10",
    "image": "https://cf.geekdo-images.com/original/img/ClquYnofVGzrA3ytNU0RbjEyqbI=/0x0/pic2449279.jpg",
    "category": "Card Game"
  },
  {
    "title": "Rococo",
    "image": "https://cf.geekdo-images.com/original/img/h4juFKZn1M56dsCtVnNsRYyvCs0=/0x0/pic1795272.jpg",
    "category": "Economic,Age of Reason"
  },
  {
    "title": "Scythe: Invaders from Afar",
    "image": "https://cf.geekdo-images.com/original/img/miZjG4UUl5ZFL8LlLFIcKC-rXn8=/0x0/pic3037396.jpg",
    "category": "Economic,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Archipelago",
    "image": "https://cf.geekdo-images.com/original/img/HVQX0i0uD_sozpHSUgpQwjuMNhg=/0x0/pic1640388.jpg",
    "category": "Economic,Negotiation,Civilization,Nautical,Exploration,Renaissance"
  },
  {
    "title": "Mille Bornes",
    "image": "https://cf.geekdo-images.com/original/img/EPxSernrV9sGPUYGUvbFdfrJC0A=/0x0/pic4330533.jpg",
    "category": "Card Game,Racing"
  },
  {
    "title": "Exploding Kittens: NSFW Deck",
    "image": "https://cf.geekdo-images.com/original/img/jOlEGT4WWuCOaUtvyz0jNrVhni0=/0x0/pic2815278.jpg",
    "category": "Card Game,Humor,Animals,Comic Book / Strip,Mature / Adult"
  },
  {
    "title": "Kingdom Death: Monster",
    "image": "https://cf.geekdo-images.com/original/img/AtA42fNGhdthAAP3Y5QZiwlFcv8=/0x0/pic2931007.jpg",
    "category": "Fantasy,Mythology,Miniatures,Adventure,Horror,Mature / Adult"
  },
  {
    "title": "Forbidden Stars",
    "image": "https://cf.geekdo-images.com/original/img/DWTv4PxEDiHHmgnv09t4k2WmNh8=/0x0/pic2471359.jpg",
    "category": "Bluffing,Science Fiction,Fighting,Miniatures,Wargame"
  },
  {
    "title": "Queendomino",
    "image": "https://cf.geekdo-images.com/original/img/7iJggCgPERAUdyJvM-eJhBvzCUk=/0x0/pic3672901.png",
    "category": "Fantasy,Medieval,City Building,Territory Building"
  },
  {
    "title": "Timeline: Inventions",
    "image": "https://cf.geekdo-images.com/original/img/Golt8nm_WNqzIlo2C8x2PuGF3K4=/0x0/pic4239139.png",
    "category": "Card Game,Trivia,Educational"
  },
  {
    "title": "Civilization",
    "image": "https://cf.geekdo-images.com/original/img/E5tUyOBORvDvPR3GUCmaO6Th2nM=/0x0/pic374847.jpg",
    "category": "Economic,Negotiation,Ancient,Civilization"
  },
  {
    "title": "YINSH",
    "image": "https://cf.geekdo-images.com/original/img/r6HwrW73OhVv9TshlnWoQ96b-d8=/0x0/pic2844830.png",
    "category": "Abstract Strategy"
  },
  {
    "title": "One Deck Dungeon",
    "image": "https://cf.geekdo-images.com/original/img/uAhlCTqgBS7ZobTYUq-yAWFwURg=/0x0/pic3019101.jpg",
    "category": "Card Game,Fantasy,Medieval,Dice,Video Game Theme"
  },
  {
    "title": "Terror in Meeple City",
    "image": "https://cf.geekdo-images.com/original/img/-HiIrTHv7aw8c4mDYvnGs1SXQD4=/0x0/pic2482302.jpg",
    "category": "Horror,Action / Dexterity"
  },
  {
    "title": "Medici",
    "image": "https://cf.geekdo-images.com/original/img/FtHCVn5NXYkTgZQjgnKDrOfPeVE=/0x0/pic2672797.jpg",
    "category": "Renaissance"
  },
  {
    "title": "Taj Mahal",
    "image": "https://cf.geekdo-images.com/original/img/ThojXG32hqbJKlJwKKmWIY1XajY=/0x0/pic4092498.jpg",
    "category": "Political,Bluffing"
  },
  {
    "title": "Deus",
    "image": "https://cf.geekdo-images.com/original/img/Yb2VfzIOK5I-xbv-6zIpILAuvHc=/0x0/pic2219643.png",
    "category": "Civilization,Mythology"
  },
  {
    "title": "StarCraft: The Board Game",
    "image": "https://cf.geekdo-images.com/original/img/nFgF7L6fCfSwEw-tdakMtgSE3vI=/0x0/pic265704.jpg",
    "category": "Civilization,Science Fiction,Fighting,Miniatures,Wargame,Space Exploration,Territory Building,Video Game Theme"
  },
  {
    "title": "Colossal Arena",
    "image": "https://cf.geekdo-images.com/original/img/u-BdpiSZ-jMzol_5WwZB_DqjYy0=/0x0/pic1680709.jpg",
    "category": "Card Game,Fantasy,Mythology"
  },
  {
    "title": "Schotten Totten",
    "image": "https://cf.geekdo-images.com/original/img/AGu9cA6dK9POOBnE07f935TSTLQ=/0x0/pic2932872.jpg",
    "category": "Card Game"
  },
  {
    "title": "Sequence",
    "image": "https://cf.geekdo-images.com/original/img/j92TCxh6cdGu0S6GepM7_7jhI9E=/0x0/pic212893.jpg",
    "category": "Card Game,Abstract Strategy"
  },
  {
    "title": "Spartacus: A Game of Blood and Treachery",
    "image": "https://cf.geekdo-images.com/original/img/7U9eF_jRfTjvJITsDKK-MDy_uR4=/0x0/pic1533071.jpg",
    "category": "Negotiation,Ancient,Fighting,Miniatures,Movies / TV / Radio theme"
  },
  {
    "title": "Morels",
    "image": "https://cf.geekdo-images.com/original/img/0pbRCKcXUJhv09e8snCnxmX_Ebk=/0x0/pic1284667.jpg",
    "category": "Card Game,Educational"
  },
  {
    "title": "The Red Dragon Inn",
    "image": "https://cf.geekdo-images.com/original/img/Z1Y2iQS_MgmPVVl7AjS_dIU42ec=/0x0/pic291048.jpg",
    "category": "Card Game,Fantasy,Medieval,Humor,Party Game"
  },
  {
    "title": "Macao",
    "image": "https://cf.geekdo-images.com/original/img/v1sfKf9jpJmRh4Gw7PmjUJppzeY=/0x0/pic665651.jpg",
    "category": "Nautical,Dice"
  },
  {
    "title": "Xia: Legends of a Drift System",
    "image": "https://cf.geekdo-images.com/original/img/2sw3pLQ1eo9wpGLIbCQMOCb-XKA=/0x0/pic1807124.png",
    "category": "Exploration,Science Fiction,Fighting,Adventure,Space Exploration,Transportation"
  },
  {
    "title": "Checkers",
    "image": "https://cf.geekdo-images.com/original/img/5INKkK5YJOZyT5eO7wzRuexCgXI=/0x0/pic113720.jpg",
    "category": "Abstract Strategy,Comic Book / Strip"
  },
  {
    "title": "Tiny Epic Kingdoms",
    "image": "https://cf.geekdo-images.com/original/img/2Dha6G7HJnSW1FPmDB53Q18Lscc=/0x0/pic2947892.jpg",
    "category": ""
  },
  {
    "title": "Animal Upon Animal",
    "image": "https://cf.geekdo-images.com/original/img/Qmp6RAu5CrXyU9jDRhdg34fFswI=/0x0/pic403502.jpg",
    "category": "Animals,Children's Game,Action / Dexterity"
  },
  {
    "title": "Othello",
    "image": "https://cf.geekdo-images.com/original/img/OUtNwqIq2aO6rpySfJCOHPazmmU=/0x0/pic243834.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Boggle",
    "image": "https://cf.geekdo-images.com/original/img/Ir_CQEPbiQ5gn-Eds66UER32vL4=/0x0/pic318943.jpg",
    "category": "Dice,Word Game,Real-time"
  },
  {
    "title": "Airlines Europe",
    "image": "https://cf.geekdo-images.com/original/img/HH_5BT-uHxn4uifXaf8XStJ5OLc=/0x0/pic975416.jpg",
    "category": "Economic,Aviation / Flight"
  },
  {
    "title": "Carson City",
    "image": "https://cf.geekdo-images.com/original/img/5ReSQc2DpThzmhL3maVEwfkpjmM=/0x0/pic577030.jpg",
    "category": "Economic,American West,City Building"
  },
  {
    "title": "Finca",
    "image": "https://cf.geekdo-images.com/original/img/KeoVAINZb1SoAAryxKfNGbcramc=/0x0/pic433784.jpg",
    "category": "Economic,Farming"
  },
  {
    "title": "Space Hulk (Third Edition)",
    "image": "https://cf.geekdo-images.com/original/img/olCD4hIl6uWkeHod6ih_GX9xKoY=/0x0/pic588817.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Wargame"
  },
  {
    "title": "The Great Dalmuti",
    "image": "https://cf.geekdo-images.com/original/img/E8PuKOoTS6fzK13fYX6sSoXDsxQ=/0x0/pic711236.jpg",
    "category": "Card Game,Medieval"
  },
  {
    "title": "Risk 2210 A.D.",
    "image": "https://cf.geekdo-images.com/original/img/WyQuRpKLjr-5yjAwXsKhf-kL5Ko=/0x0/pic326796.jpg",
    "category": "Science Fiction,Wargame,Territory Building"
  },
  {
    "title": "Pictionary",
    "image": "https://cf.geekdo-images.com/original/img/9kVc29rkLxoWUyyFlNG61Z3XUeg=/0x0/pic5147022.png",
    "category": "Economic,Trains"
  },
  {
    "title": "Terraforming Mars: Prelude",
    "image": "https://cf.geekdo-images.com/original/img/ebPKuCAzkZvP4AV_ohpw8QmtJKg=/0x0/pic4137234.jpg",
    "category": "Economic,Science Fiction,Industry / Manufacturing,Expansion for Base-game,Environmental"
  },
  {
    "title": "Dice Town",
    "image": "https://cf.geekdo-images.com/original/img/ZlEbB8S7vybDpNfsabr2oq2QYyY=/0x0/pic3763073.jpg",
    "category": "Dice,American West"
  },
  {
    "title": "Munchkin 2: Unnatural Axe",
    "image": "https://cf.geekdo-images.com/original/img/OUPUbfz0is3hOfXzKkJDUlk0lGg=/0x0/pic2428682.jpg",
    "category": "Card Game,Fantasy,Fighting,Humor,Expansion for Base-game"
  },
  {
    "title": "Claustrophobia",
    "image": "https://cf.geekdo-images.com/original/img/tZKSyqTq-T5VfdD3IclQJIim44M=/0x0/pic570518.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure,Horror"
  },
  {
    "title": "Among the Stars",
    "image": "https://cf.geekdo-images.com/original/img/YfZDrdGnVZqfp3Bgkl-TPdXPqRU=/0x0/pic2037906.jpg",
    "category": "Card Game,Science Fiction,City Building"
  },
  {
    "title": "FUSE",
    "image": "https://cf.geekdo-images.com/original/img/sOlI6QmO0gLggST_oOGJdkXXfvU=/0x0/pic2884287.jpg",
    "category": "Science Fiction,Dice,Real-time,Action / Dexterity"
  },
  {
    "title": "Lancaster",
    "image": "https://cf.geekdo-images.com/original/img/b0cbNvQGexNkS94CaOFMp_8Rolc=/0x0/pic1280761.jpg",
    "category": "Medieval"
  },
  {
    "title": "Bunny Kingdom",
    "image": "https://cf.geekdo-images.com/original/img/qv2IEWr29QajjGllpYyowPb_R8c=/0x0/pic3613444.jpg",
    "category": "Medieval,Territory Building,Animals"
  },
  {
    "title": "Space Base",
    "image": "https://cf.geekdo-images.com/original/img/9w90BBO7t_9oi5KM0B1qBzt3qEw=/0x0/pic4017302.jpg",
    "category": "Science Fiction,Dice,Space Exploration"
  },
  {
    "title": "Lord of the Rings: The Confrontation",
    "image": "https://cf.geekdo-images.com/original/img/WdOr8rs6kau7dNgnGYQh-ZGG5N0=/0x0/pic69357.jpg",
    "category": "Fantasy,Bluffing,Adventure,Novel-based,Deduction,Movies / TV / Radio theme"
  },
  {
    "title": "Dixit: Quest",
    "image": "https://cf.geekdo-images.com/original/img/sx8CpOHJnRZSjB961q9R_SmFyfc=/0x0/pic1632141.jpg",
    "category": "Card Game,Bluffing,Humor,Deduction,Party Game,Expansion for Base-game"
  },
  {
    "title": "Cottage Garden",
    "image": "https://cf.geekdo-images.com/original/img/S2jqfQNNdtFVbP6si00irsvfHB8=/0x0/pic3499059.jpg",
    "category": "Farming,Puzzle"
  },
  {
    "title": "Connect Four",
    "image": "https://cf.geekdo-images.com/original/img/lrJ1p0AI4ghZdmZkEzwIle3YDUw=/0x0/pic859430.jpg",
    "category": "Abstract Strategy,Animals,Children's Game"
  },
  {
    "title": "Kanagawa",
    "image": "https://cf.geekdo-images.com/original/img/1mC95S3Lgk-PuXfJLAK4u14jLKE=/0x0/pic3105168.jpg",
    "category": "Card Game,Animals"
  },
  {
    "title": "Near and Far",
    "image": "https://cf.geekdo-images.com/original/img/dFRj2pvdItHOWPBfocWU0Pm0Z-A=/0x0/pic3605785.jpg",
    "category": "Exploration,Adventure"
  },
  {
    "title": "Ghost Blitz",
    "image": "https://cf.geekdo-images.com/original/img/ZP1XuFzDEhhCFZjB7O_Z7i55Lks=/0x0/pic2034769.jpg",
    "category": "Card Game,Real-time,Children's Game,Action / Dexterity"
  },
  {
    "title": "Kill Doctor Lucky",
    "image": "https://cf.geekdo-images.com/original/img/Oc05YkJzA92NKxjUXw2QOpHaU_0=/0x0/pic2923257.jpg",
    "category": "Humor,Murder/Mystery"
  },
  {
    "title": "The Lord of the Rings: Journeys in Middle-earth",
    "image": "https://cf.geekdo-images.com/original/img/BZY3K1ufN6BioQG4RPPOAXhU9iM=/0x0/pic4530974.jpg",
    "category": "Fantasy,Fighting,Miniatures,Adventure,Novel-based"
  },
  {
    "title": "Tides of Time",
    "image": "https://cf.geekdo-images.com/original/img/SY-5gl5sbCXXVprKElrYq32gLZQ=/0x0/pic2486726.jpg",
    "category": "Card Game,Ancient,Civilization"
  },
  {
    "title": "Smash Up: Awesome Level 9000",
    "image": "https://cf.geekdo-images.com/original/img/7X2fe_vX4Yb5QmFcyH_MQd96KZE=/0x0/pic1497102.jpg",
    "category": "Card Game,Fantasy,Humor,Horror,Spies/Secret Agents"
  },
  {
    "title": "Citadels:  The Dark City",
    "image": "https://cf.geekdo-images.com/original/img/GfMdjCF0xe6wN2eECiyeU8Ucnzo=/0x0/pic73710.jpg",
    "category": "Card Game,Fantasy,Medieval,Bluffing,City Building,Expansion for Base-game"
  },
  {
    "title": "Attika",
    "image": "https://cf.geekdo-images.com/original/img/oUdIB3_4f4H9u6S6_3ceZkAkRXo=/0x0/pic33096.jpg",
    "category": "Ancient,City Building,Territory Building"
  },
  {
    "title": "Lords of Vegas",
    "image": "https://cf.geekdo-images.com/original/img/MEpxV45jrQhiFdOf_NAe1Rg3W9o=/0x0/pic774410.jpg",
    "category": "Economic,Dice,City Building"
  },
  {
    "title": "Res Arcana",
    "image": "https://cf.geekdo-images.com/original/img/tq3gcBnLgfLqfcVL9xlr7uYzbig=/0x0/pic4422847.jpg",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Quantum",
    "image": "https://cf.geekdo-images.com/original/img/kUKMz0IfUvlqwtGO7FcPrlJHZdc=/0x0/pic1727619.jpg",
    "category": "Science Fiction,Dice,Fighting,Space Exploration"
  },
  {
    "title": "London",
    "image": "https://cf.geekdo-images.com/original/img/g6bKMGx5rKwjKkGI8RbaJ9AYWI8=/0x0/pic770317.jpg",
    "category": "Economic,City Building"
  },
  {
    "title": "AquaSphere",
    "image": "https://cf.geekdo-images.com/original/img/ZVq8NpSeBVl_A3VRXOGMSggn8Sw=/0x0/pic2197124.jpg",
    "category": "Nautical,Science Fiction"
  },
  {
    "title": "Mahjong",
    "image": "https://cf.geekdo-images.com/original/img/yxjA4SS4-6j9NgMmhLCtz0KGpWM=/0x0/pic43709.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Marvel Champions: The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/hD6zhNhGT89NMLCGa2xwoSaitEw=/0x0/pic4900321.jpg",
    "category": "Card Game,Collectible Components,Comic Book / Strip"
  },
  {
    "title": "Cleopatra and the Society of Architects",
    "image": "https://cf.geekdo-images.com/original/img/G1AbyvvXCVaD2Box1Cb_fj0ncTQ=/0x0/pic1904123.jpg",
    "category": "Ancient"
  },
  {
    "title": "Citadels",
    "image": "https://cf.geekdo-images.com/original/img/iy-N3AoD24rDm3dXgl2sHuHmBzQ=/0x0/pic3119514.jpg",
    "category": "Card Game,Fantasy,Medieval,Bluffing,City Building"
  },
  {
    "title": "Trickerion: Legends of Illusion",
    "image": "https://cf.geekdo-images.com/original/img/RjRhDwIgGd2HGNkaZXPj29oWGdI=/0x0/pic2585510.png",
    "category": "Post-Napoleonic"
  },
  {
    "title": "Gizmos",
    "image": "https://cf.geekdo-images.com/original/img/YZfE6kSkvOqg6UtSKxly20dH3n8=/0x0/pic4169718.png",
    "category": "Card Game,Science Fiction"
  },
  {
    "title": "Arkham Horror: Dunwich Horror Expansion",
    "image": "https://cf.geekdo-images.com/original/img/g2Kvec22j5amcTgFWR59N-Q6Wz4=/0x0/pic114495.jpg",
    "category": "Science Fiction,Fighting,Adventure,Horror,Novel-based,Expansion for Base-game"
  },
  {
    "title": "Downforce",
    "image": "https://cf.geekdo-images.com/original/img/mrYR-Z7aCJSmwZFeA1lSXZ592L8=/0x0/pic3432548.png",
    "category": "Racing"
  },
  {
    "title": "Altiplano",
    "image": "https://cf.geekdo-images.com/original/img/NeEN85Zbbt-pWxOlK64nrDeoW3Y=/0x0/pic4070329.jpg",
    "category": "Economic"
  },
  {
    "title": "Summoner Wars",
    "image": "https://cf.geekdo-images.com/original/img/8rnrCP0OuE3bv86vsoeLy3oqmhk=/0x0/pic5152378.png",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Age of War",
    "image": "https://cf.geekdo-images.com/original/img/ms_8P-4hRKHhxcFseuO390y_sME=/0x0/pic1977202.jpg",
    "category": "Medieval,Dice"
  },
  {
    "title": "Cryptid",
    "image": "https://cf.geekdo-images.com/original/img/DY93t1kU-zh12BW1ar2gQewvVqk=/0x0/pic4037705.jpg",
    "category": "Deduction"
  },
  {
    "title": "Quoridor",
    "image": "https://cf.geekdo-images.com/original/img/T8PwrJu6SrjMPtFtvviY8YwUMrI=/0x0/pic3488232.jpg",
    "category": "Abstract Strategy,Maze"
  },
  {
    "title": "Abalone Classic",
    "image": "https://cf.geekdo-images.com/original/img/OnLPhpd_Y5Oj0hd-biqoAZWP2jc=/0x0/pic5253079.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Vegas Showdown",
    "image": "https://cf.geekdo-images.com/original/img/2ELkgsMaHpR4gyzitz8x7TMF-Jc=/0x0/pic4599533.jpg",
    "category": "Economic"
  },
  {
    "title": "Terraforming Mars: Hellas & Elysium",
    "image": "https://cf.geekdo-images.com/original/img/ULK86_nxTVd2t3iSRLfYv9wZ64g=/0x0/pic3343205.jpg",
    "category": "Economic,Science Fiction,Territory Building,Industry / Manufacturing,Expansion for Base-game,Environmental"
  },
  {
    "title": "DC Comics Deck-Building Game",
    "image": "https://cf.geekdo-images.com/original/img/CLaWM8gcMBBpMXD4k1tB-MZL5NA=/0x0/pic1355432.png",
    "category": "Card Game,Comic Book / Strip"
  },
  {
    "title": "Zombie Fluxx",
    "image": "https://cf.geekdo-images.com/original/img/rJPD30K1fnHGRlboANLFzktEaF0=/0x0/pic254239.jpg",
    "category": "Card Game,Zombies"
  },
  {
    "title": "A Game of Thrones: The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/HXDMZR45JTJqEYudki7r2rFfwCo=/0x0/pic1195948.jpg",
    "category": "Negotiation,Card Game,Fantasy,Medieval,Collectible Components,Fighting,Novel-based"
  },
  {
    "title": "Blueprints",
    "image": "https://cf.geekdo-images.com/original/img/u0EtNimUgRoAd-XTc-Lz4YVf9zM=/0x0/pic1877243.jpg",
    "category": "Dice"
  },
  {
    "title": "Snow Tails",
    "image": "https://cf.geekdo-images.com/original/img/DeEuRqzid-CalItOhAGHGYL2b_E=/0x0/pic2574022.png",
    "category": "Racing,Animals,Sports"
  },
  {
    "title": "Genoa",
    "image": "https://cf.geekdo-images.com/original/img/FSfEERKPFjU0_HV55ZT0a9W_3vo=/0x0/pic450409.jpg",
    "category": "Negotiation,Renaissance"
  },
  {
    "title": "Get Bit!",
    "image": "https://cf.geekdo-images.com/original/img/J2LxJyb01EcgSg0BuyM0JJUik5Q=/0x0/pic1700239.jpg",
    "category": "Bluffing,Racing,Party Game,Animals,Pirates"
  },
  {
    "title": "Lisboa",
    "image": "https://cf.geekdo-images.com/original/img/k4JCDnjnu5YRn5QA8njFeRMbulk=/0x0/pic3209553.jpg",
    "category": "Economic,Political,City Building,Industry / Manufacturing"
  },
  {
    "title": "Reef",
    "image": "https://cf.geekdo-images.com/original/img/qEsKJP5LxWKoIiNlVde7ZcV0pU0=/0x0/pic5376430.png",
    "category": "Abstract Strategy,Animals"
  },
  {
    "title": "Belfort",
    "image": "https://cf.geekdo-images.com/original/img/mXIQt2AKH3JmkDQx1NONQJZJCug=/0x0/pic1368514.jpg",
    "category": "Economic,Fantasy,City Building"
  },
  {
    "title": "Mastermind",
    "image": "https://cf.geekdo-images.com/original/img/agIZiMzEaFuR3CuiuPN-fp9ZDVE=/0x0/pic4420154.png",
    "category": "Abstract Strategy,Deduction"
  },
  {
    "title": "Loot",
    "image": "https://cf.geekdo-images.com/original/img/_fYdHwBshLSaQSK_4hnFS3e9r5E=/0x0/pic3360346.jpg",
    "category": "Card Game,Nautical,Pirates"
  },
  {
    "title": "T.I.M.E Stories: The Marcy Case",
    "image": "https://cf.geekdo-images.com/original/img/vXBR5GGLMWC31nyBi0GbomNhzlA=/0x0/pic2617644.jpg",
    "category": "Science Fiction,Adventure,Puzzle,Expansion for Base-game,Mature / Adult"
  },
  {
    "title": "Axis & Allies",
    "image": "https://cf.geekdo-images.com/original/img/Il-UUxaVVKlFr_IB3t4uUI9Yjls=/0x0/pic42246.jpg",
    "category": "Economic,Wargame,World War II"
  },
  {
    "title": "Tash-Kalar: Arena of Legends",
    "image": "https://cf.geekdo-images.com/original/img/EyHuMCH9aOjM69FfDdechWPhW10=/0x0/pic1875045.jpg",
    "category": "Card Game,Fantasy,Abstract Strategy,Fighting"
  },
  {
    "title": "Power Grid: Factory Manager",
    "image": "https://cf.geekdo-images.com/original/img/oe-8MKMJ2lqMTE08bitHge1GFU8=/0x0/pic577313.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "5-Minute Dungeon",
    "image": "https://cf.geekdo-images.com/original/img/qmIKAcdaUMX4skrH8pX0qBMxijg=/0x0/pic3370214.jpg",
    "category": "Card Game,Fantasy,Fighting,Real-time"
  },
  {
    "title": "The Bloody Inn",
    "image": "https://cf.geekdo-images.com/original/img/a8hAyFFmeL251YfceGtd9RoWHEQ=/0x0/pic2618699.jpg",
    "category": "Economic,Card Game,Horror,Post-Napoleonic"
  },
  {
    "title": "Century: Golem Edition",
    "image": "https://cf.geekdo-images.com/original/img/XZ0Q6Uxrkjrpa9UKSlV6ipWI7cg=/0x0/pic3936124.jpg",
    "category": "Economic,Card Game,Fantasy"
  },
  {
    "title": "Dungeon Twister",
    "image": "https://cf.geekdo-images.com/original/img/LmjTmg0wfmeTZX8RXSVPm4kB-fE=/0x0/pic97630.jpg",
    "category": "Fantasy,Exploration,Fighting,Maze,Adventure"
  },
  {
    "title": "Dungeons & Dragons: Wrath of Ashardalon Board Game",
    "image": "https://cf.geekdo-images.com/original/img/dd0r9sMDjdSEg9Yq3lN0IZGf63c=/0x0/pic968280.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Detective: A Modern Crime Board Game",
    "image": "https://cf.geekdo-images.com/original/img/WXK7vrMm9pYYA1GaJvQlZ-7K1R4=/0x0/pic4048704.jpg",
    "category": "Deduction,Murder/Mystery"
  },
  {
    "title": "Race for the Galaxy: Rebel vs Imperium",
    "image": "https://cf.geekdo-images.com/original/img/9OZeA_17F5amuIZO2Gli7jwUWts=/0x0/pic445501.jpg",
    "category": "Economic,Card Game,Civilization,Science Fiction,Space Exploration,Expansion for Base-game"
  },
  {
    "title": "Small World: Cursed!",
    "image": "https://cf.geekdo-images.com/original/img/k3bPtntb5AESstBy0_metIRxO9o=/0x0/pic563285.jpg",
    "category": "Fantasy,Fighting,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Heaven & Ale",
    "image": "https://cf.geekdo-images.com/original/img/CgF039HAcnv8hrIJ6y-wEULtKt8=/0x0/pic3563904.jpg",
    "category": "Economic,Farming,Industry / Manufacturing"
  },
  {
    "title": "Kalah",
    "image": "https://cf.geekdo-images.com/original/img/PhTRgPh-gKWABgGG00TZjRUOvPg=/0x0/pic1274349.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "CV",
    "image": "https://cf.geekdo-images.com/original/img/-rpL7UMhNubpRyQJwvUDfn2L2v8=/0x0/pic1968267.jpg",
    "category": "Card Game,Dice,Humor"
  },
  {
    "title": "Skip-Bo",
    "image": "https://cf.geekdo-images.com/original/img/eaH89JasCBfpP26_PxGSyzI97YY=/0x0/pic5134553.jpg",
    "category": "Card Game"
  },
  {
    "title": "Dungeon Fighter",
    "image": "https://cf.geekdo-images.com/original/img/iPlI0qufM7kXjYE44nYQVMMaIJ0=/0x0/pic2411495.png",
    "category": "Fantasy,Exploration,Fighting,Humor,Action / Dexterity"
  },
  {
    "title": "Warhammer: Invasion",
    "image": "https://cf.geekdo-images.com/original/img/ZYjSIKXcYBDpjU3gbSA8JLHCm7M=/0x0/pic567135.jpg",
    "category": "Card Game,Fantasy,Mythology,Collectible Components,Fighting"
  },
  {
    "title": "Spyrium",
    "image": "https://cf.geekdo-images.com/original/img/rGitckEaVK8dGWyM5kFcamV-ZG0=/0x0/pic1808509.jpg",
    "category": "Economic,Science Fiction,City Building,Industry / Manufacturing"
  },
  {
    "title": "Balloon Cup",
    "image": "https://cf.geekdo-images.com/original/img/HAnsHNDo7PMDnIoFpVfHtGRG0jI=/0x0/pic63292.jpg",
    "category": "Card Game,Aviation / Flight"
  },
  {
    "title": "Parade",
    "image": "https://cf.geekdo-images.com/original/img/r48PWXw3pmXUNg8eHAaD692YxMc=/0x0/pic2239001.jpg",
    "category": "Card Game,Novel-based"
  },
  {
    "title": "Dominoes",
    "image": "https://cf.geekdo-images.com/original/img/72aKt7goQ1oOfu2ep2P7IdRtenM=/0x0/pic90585.jpg",
    "category": "Abstract Strategy,Game System,Video Game Theme"
  },
  {
    "title": "Tiny Epic Quest",
    "image": "https://cf.geekdo-images.com/original/img/X7sZdLUpOw3BHsC81pg9wyU8VoI=/0x0/pic3120755.jpg",
    "category": "Fantasy,Adventure,Video Game Theme"
  },
  {
    "title": "Mamma Mia!",
    "image": "https://cf.geekdo-images.com/original/img/6cIB9eeKT0uLtv-n456t8aKIvfM=/0x0/pic2824027.jpg",
    "category": "Card Game"
  },
  {
    "title": "Evolution: Climate",
    "image": "https://cf.geekdo-images.com/original/img/MjKqZW58ldj6gdgQFAqPqERNNec=/0x0/pic2876816.jpg",
    "category": "Card Game,Fighting,Print & Play,Animals,Prehistoric,Educational,Environmental"
  },
  {
    "title": "Rattus",
    "image": "https://cf.geekdo-images.com/original/img/aRHlGaVTUwHzVey6JjkaUICJdcY=/0x0/pic612591.jpg",
    "category": "Medieval,Animals"
  },
  {
    "title": "Dominion: Cornucopia",
    "image": "https://cf.geekdo-images.com/original/img/WvCB4uN4z1S2Mj8Ydc-3S-8S904=/0x0/pic950200.jpg",
    "category": "Card Game,Medieval,Expansion for Base-game"
  },
  {
    "title": "Dominion: Hinterlands",
    "image": "https://cf.geekdo-images.com/original/img/acZGk3tcNfJF5w_RFn3ogIsudiE=/0x0/pic1077695.jpg",
    "category": "Card Game,Medieval,Expansion for Base-game"
  },
  {
    "title": "Cry Havoc",
    "image": "https://cf.geekdo-images.com/original/img/ME73s_0dstlA4qLpLEBvPyvq8gE=/0x0/pic3090929.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Wargame"
  },
  {
    "title": "Sorry!",
    "image": "https://cf.geekdo-images.com/original/img/IzDr7EwSlYtqzKrz2h3OVnNg5xY=/0x0/pic1187187.jpg",
    "category": "Children's Game"
  },
  {
    "title": "Imperial 2030",
    "image": "https://cf.geekdo-images.com/original/img/Cc9-dWijiEkRAu7di4LSXJ0FNvU=/0x0/pic586346.jpg",
    "category": "Economic,Political,Nautical"
  },
  {
    "title": "Onirim",
    "image": "https://cf.geekdo-images.com/original/img/mJOkeSNOCSPSYGkXjzlSc58MnBM=/0x0/pic730580.jpg",
    "category": "Card Game,Fantasy,Exploration,Maze"
  },
  {
    "title": "Metro",
    "image": "https://cf.geekdo-images.com/original/img/syshlBu8E4fWzL5VOCikVq4-sEU=/0x0/pic3389098.jpg",
    "category": "Trains"
  },
  {
    "title": "Agricola: Farmers of the Moor",
    "image": "https://cf.geekdo-images.com/original/img/A_qTRozM63XVIAlhvrqHAMoIFuQ=/0x0/pic568164.jpg",
    "category": "Economic,Farming,Expansion for Base-game"
  },
  {
    "title": "Quarto",
    "image": "https://cf.geekdo-images.com/original/img/EIoe-0DRHjuLb3KWiJzqiIXZCvg=/0x0/pic3488229.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Lord of the Rings: The Confrontation",
    "image": "https://cf.geekdo-images.com/original/img/KTdCZeRym5uqGyfHNs6SmiKMycw=/0x0/pic1680704.jpg",
    "category": "Fantasy,Bluffing,Adventure,Novel-based,Deduction,Movies / TV / Radio theme"
  },
  {
    "title": "Room 25",
    "image": "https://cf.geekdo-images.com/original/img/3Iud01C_SaeER0iZPXFrjw8Z4bA=/0x0/pic3046708.jpg",
    "category": "Negotiation,Exploration,Bluffing,Science Fiction,Maze,Horror,Deduction"
  },
  {
    "title": "Rivals for Catan",
    "image": "https://cf.geekdo-images.com/original/img/bYM2AcTF4y0jXsx3BzDk6oBh0Yw=/0x0/pic3736568.jpg",
    "category": "Card Game,Medieval,City Building,Territory Building"
  },
  {
    "title": "Vast: The Crystal Caverns",
    "image": "https://cf.geekdo-images.com/original/img/i52oRYMg5KHPNJ0bhFEHycEhUyM=/0x0/pic2962290.jpg",
    "category": "Fantasy,Exploration,Print & Play,Adventure"
  },
  {
    "title": "Small World: Grand Dames of Small World",
    "image": "https://cf.geekdo-images.com/original/img/1GkeLU3kKhfveivc-3Px2nyyQUo=/0x0/pic563283.jpg",
    "category": "Fantasy,Fighting,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Battlestar Galactica: The Board Game - Pegasus Expansion",
    "image": "https://cf.geekdo-images.com/original/img/ZaoqzdwMSiDQoSWuEvZfYHMMaoU=/0x0/pic512021.jpg",
    "category": "Political,Bluffing,Science Fiction,Space Exploration,Deduction,Movies / TV / Radio theme,Expansion for Base-game,Spies/Secret Agents"
  },
  {
    "title": "Say Anything",
    "image": "https://cf.geekdo-images.com/original/img/vG6gBsigMDuLuLwy0V8GEzf5LuM=/0x0/pic4222162.jpg",
    "category": "Humor,Party Game"
  },
  {
    "title": "Tsuro of the Seas",
    "image": "https://cf.geekdo-images.com/original/img/tkptGaTBsPGiqR96AxYMeaOU0EY=/0x0/pic1301853.jpg",
    "category": "Abstract Strategy,Nautical"
  },
  {
    "title": "Star Realms: Colony Wars",
    "image": "https://cf.geekdo-images.com/original/img/b3pEYP-Vrbzbyuu_Gj5YeDAs_hc=/0x0/pic4324043.jpg",
    "category": "Card Game,Science Fiction,Fighting"
  },
  {
    "title": "Keltis",
    "image": "https://cf.geekdo-images.com/original/img/H49fjEVqatquj7GWBNSPO8j7ipM=/0x0/pic382457.jpg",
    "category": ""
  },
  {
    "title": "Marvel Dice Masters: Avengers vs. X-Men",
    "image": "https://cf.geekdo-images.com/original/img/UUzy_FmpJ1s3tXuRw_f9nsYy8QE=/0x0/pic1997078.jpg",
    "category": "Collectible Components,Dice,Fighting,Comic Book / Strip"
  },
  {
    "title": "Killer Bunnies and the Quest for the Magic Carrot",
    "image": "https://cf.geekdo-images.com/original/img/TBgnvo34-PX8UA5myiTboSGT8aw=/0x0/pic2378789.jpg",
    "category": "Negotiation,Card Game,Humor,Animals"
  },
  {
    "title": "Steampunk Rally",
    "image": "https://cf.geekdo-images.com/original/img/IES-u9aBUVz1mPixKeQv5df3V6Y=/0x0/pic2073821.jpg",
    "category": "Science Fiction,Racing"
  },
  {
    "title": "BattleLore (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/bQLvhHye5_qR4ohxAWRqOnADXdg=/0x0/pic1854807.jpg",
    "category": "Fantasy,Miniatures,Wargame"
  },
  {
    "title": "Blue Moon",
    "image": "https://cf.geekdo-images.com/original/img/hbOSy58qivypQ8Gnu_BdJCcaDg0=/0x0/pic174185.jpg",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Machi Koro: Harbor",
    "image": "https://cf.geekdo-images.com/original/img/d9k8b5stSast1I9MdRoU1H_bvwU=/0x0/pic2034049.jpg",
    "category": "Card Game,Dice,City Building,Expansion for Base-game"
  },
  {
    "title": "Dune",
    "image": "https://cf.geekdo-images.com/original/img/d7LVl0jTBxCGrtiCZnUWFj3LaIc=/0x0/pic279251.jpg",
    "category": "Negotiation,Political,Bluffing,Science Fiction,Fighting,Novel-based"
  },
  {
    "title": "Specter Ops",
    "image": "https://cf.geekdo-images.com/original/img/I8uKpWeTie1PFULzVd2WYzDu8gc=/0x0/pic2486481.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Deduction,Spies/Secret Agents"
  },
  {
    "title": "Manila",
    "image": "https://cf.geekdo-images.com/original/img/NrifwpcfzHgej578fx5hf6o6kaA=/0x0/pic902372.jpg",
    "category": "Nautical,Pirates,Transportation"
  },
  {
    "title": "Dungeons & Dragons: The Legend of Drizzt Board Game",
    "image": "https://cf.geekdo-images.com/original/img/U-h1zs2Ts97MzmoVXAXuDErwR4k=/0x0/pic994268.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure,Novel-based"
  },
  {
    "title": "The Castles of Burgundy: The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/r7Bo_2KyKECNrqQ67G-BsSTbhcQ=/0x0/pic2844943.jpg",
    "category": "Card Game"
  },
  {
    "title": "Cartographers: A Roll Player Tale",
    "image": "https://cf.geekdo-images.com/original/img/qPVZsVOiVdJYbjplrWUXeIhupZg=/0x0/pic4397932.png",
    "category": "Fantasy,Territory Building"
  },
  {
    "title": "Kanban: Driver's Edition",
    "image": "https://cf.geekdo-images.com/original/img/dKocHa71tZ_egRoUyMrNqLT43Gg=/0x0/pic3981620.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "San Juan (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/VvKqy5OR6AsAFk0qTpuw745fXII=/0x0/pic2305703.jpg",
    "category": "Economic,Card Game,City Building"
  },
  {
    "title": "Steam Park",
    "image": "https://cf.geekdo-images.com/original/img/xnQdx1SzWG_4SsU7eap3z_G-j3E=/0x0/pic2656302.jpg",
    "category": "Science Fiction,Dice,City Building,Real-time"
  },
  {
    "title": "Pulsar 2849",
    "image": "https://cf.geekdo-images.com/original/img/rxYtkapNf8BCR-4XZaY4cxpmxUI=/0x0/pic3736981.jpg",
    "category": "Science Fiction,Dice,Space Exploration"
  },
  {
    "title": "Louis XIV",
    "image": "https://cf.geekdo-images.com/original/img/VjDT7UhY6VNILDWQFqLuRhheyyg=/0x0/pic63296.jpg",
    "category": "Political,Card Game,Age of Reason"
  },
  {
    "title": "Automobile",
    "image": "https://cf.geekdo-images.com/original/img/RwQJMGiRADlWRiee_AiijICTDxg=/0x0/pic744514.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "Amerigo",
    "image": "https://cf.geekdo-images.com/original/img/vzcc8nJVW0mWV75ip9dNZwRcogs=/0x0/pic1824151.jpg",
    "category": "Nautical,Renaissance"
  },
  {
    "title": "Junta",
    "image": "https://cf.geekdo-images.com/original/img/EmJBPmV4WoPCvLSPZTMib3pMPI4=/0x0/pic2497596.jpg",
    "category": "Negotiation,Political,Bluffing,Wargame,Humor,Mafia"
  },
  {
    "title": "Epic Spell Wars of the Battle Wizards: Duel at Mt. Skullzfyre",
    "image": "https://cf.geekdo-images.com/original/img/T0PWZLfXOtJMAfZD7kAiD6xsDZE=/0x0/pic1170265.jpg",
    "category": "Fantasy,Fighting,Humor"
  },
  {
    "title": "Dominion: Dark Ages",
    "image": "https://cf.geekdo-images.com/original/img/tBBKjJ3C3AgqIji3Ia39_fjtmMA=/0x0/pic1321190.jpg",
    "category": "Card Game,Medieval,Expansion for Base-game"
  },
  {
    "title": "The Big Book of Madness",
    "image": "https://cf.geekdo-images.com/original/img/PDUi7MvHSOcGqAa1WvVWg1w0fAM=/0x0/pic2750172.jpg",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Western Legends",
    "image": "https://cf.geekdo-images.com/original/img/s1r6VNVeHEpMQ4zBOx6P3-dnqKA=/0x0/pic3837503.jpg",
    "category": "American West,Adventure"
  },
  {
    "title": "World of Warcraft: The Boardgame",
    "image": "https://cf.geekdo-images.com/original/img/-OmJxgH7ho4BiTPChyJFM7yfS8Y=/0x0/pic756989.jpg",
    "category": "Fantasy,Fighting,Miniatures,Adventure,Video Game Theme"
  },
  {
    "title": "Endeavor: Age of Sail",
    "image": "https://cf.geekdo-images.com/original/img/eNUcGjwD0xq-4VS148FjZf3PFaE=/0x0/pic3913274.jpg",
    "category": "Nautical,Exploration,Renaissance"
  },
  {
    "title": "Paladins of the West Kingdom",
    "image": "https://cf.geekdo-images.com/original/img/QVyrITtrPaKYREpPgW1Y6aegSTY=/0x0/pic4462987.png",
    "category": "Medieval"
  },
  {
    "title": "Gugong",
    "image": "https://cf.geekdo-images.com/original/img/skOr94PrT2kuJsrnB2sta4tzcAQ=/0x0/pic4143114.jpg",
    "category": "Medieval,Civilization,Travel"
  },
  {
    "title": "NMBR 9",
    "image": "https://cf.geekdo-images.com/original/img/_xAV-3yFzJFaEAU_l0OLcGPfGQI=/0x0/pic3328269.jpg",
    "category": "Abstract Strategy,Puzzle,Number"
  },
  {
    "title": "Railroad Ink: Deep Blue Edition",
    "image": "https://cf.geekdo-images.com/original/img/U7ET153g0zcfkbbRUsIZ4_Abqsc=/0x0/pic4097632.png",
    "category": "Dice,Trains"
  },
  {
    "title": "Combat Commander: Europe",
    "image": "https://cf.geekdo-images.com/original/img/RLXqwj5cZa-0GEHpi6a4nwQt898=/0x0/pic992459.jpg",
    "category": "Wargame,World War II"
  },
  {
    "title": "The Godfather: Corleone's Empire",
    "image": "https://cf.geekdo-images.com/original/img/qtuwWoplmGvRwuPXeXmb-oPfj8E=/0x0/pic3364797.jpg",
    "category": "Economic,Movies / TV / Radio theme,Mafia"
  },
  {
    "title": "Chrononauts",
    "image": "https://cf.geekdo-images.com/original/img/gUafdsihjSodBAZnY5ggVaJfGZQ=/0x0/pic1909256.jpg",
    "category": "Political,Card Game,Bluffing,Science Fiction,Deduction,World War II,World War I,Educational"
  },
  {
    "title": "Small World: Be Not Afraid...",
    "image": "https://cf.geekdo-images.com/original/img/uHecXLCzYWAA1vVlgRFou_CI4SI=/0x0/pic1134493.jpg",
    "category": "Fantasy,Fighting,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Adrenaline",
    "image": "https://cf.geekdo-images.com/original/img/F2PPn7emp4Uo8lX6GP8KreZZ8OE=/0x0/pic3476604.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Video Game Theme"
  },
  {
    "title": "Star Wars: The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/PcT6ZMjgIXTwpmI9lVp4gMk8eyU=/0x0/pic1474141.jpg",
    "category": "Card Game,Science Fiction,Collectible Components,Movies / TV / Radio theme"
  },
  {
    "title": "Eldritch Horror: Forsaken Lore",
    "image": "https://cf.geekdo-images.com/original/img/uYbBSr9uUeorSCeC9YFqunN7W-k=/0x0/pic1940723.jpg",
    "category": "Fantasy,Travel,Fighting,Adventure,Horror,Novel-based,Expansion for Base-game"
  },
  {
    "title": "Balderdash",
    "image": "https://cf.geekdo-images.com/original/img/MF5BpX_Vpx21a8xBaCOo4OuKwq8=/0x0/pic40574.jpg",
    "category": "Bluffing,Word Game,Party Game"
  },
  {
    "title": "Blood Bowl (Third Edition)",
    "image": "https://cf.geekdo-images.com/original/img/P3y7v_rvis-U2VSFsei57uohTnM=/0x0/pic831373.jpg",
    "category": "Fantasy,Fighting,Miniatures,Sports"
  },
  {
    "title": "New York 1901",
    "image": "https://cf.geekdo-images.com/original/img/siRufj8DhAyAq4FrBbhxvbnh8hA=/0x0/pic2515532.jpg",
    "category": "City Building"
  },
  {
    "title": "Defenders of the Realm",
    "image": "https://cf.geekdo-images.com/original/img/aJAYc0ekL2ur6qOCAOsirM03ksc=/0x0/pic649329.jpg",
    "category": "Fantasy,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Carcassonne: Expansion 4 - The Tower",
    "image": "https://cf.geekdo-images.com/original/img/CULm5gg6nOgrOIVG2en7pN1rE30=/0x0/pic3763555.jpg",
    "category": "Medieval,City Building,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Loony Quest",
    "image": "https://cf.geekdo-images.com/original/img/abp_2EVOj6Sl2B54Xi9JC73Ij64=/0x0/pic3043308.jpg",
    "category": "Fantasy,Real-time,Action / Dexterity"
  },
  {
    "title": "Die Macher",
    "image": "https://cf.geekdo-images.com/original/img/uqlrq_bQJqHpcaN7_7qocV5XfbU=/0x0/pic4718279.jpg",
    "category": "Economic,Negotiation,Political"
  },
  {
    "title": "Pass the Pigs",
    "image": "https://cf.geekdo-images.com/original/img/azEqE_kZoytVzBmz0Phkqqqbrwg=/0x0/pic697422.jpg",
    "category": "Dice,Party Game,Animals"
  },
  {
    "title": "Stockpile",
    "image": "https://cf.geekdo-images.com/original/img/8cAEMIcbIiJtdiUh8xVzWFteO3M=/0x0/pic2537618.jpg",
    "category": "Economic"
  },
  {
    "title": "Yamatai",
    "image": "https://cf.geekdo-images.com/original/img/ej-k4uwwZ5lPDLk26Om9QDMzOzU=/0x0/pic3357724.jpg",
    "category": "Mythology"
  },
  {
    "title": "Clash of Cultures",
    "image": "https://cf.geekdo-images.com/original/img/0LpHb0FlftqsqMUDxB2x6nOJW9w=/0x0/pic1351042.jpg",
    "category": "Economic,Ancient,Civilization,Exploration,City Building,Territory Building"
  },
  {
    "title": "Egizia",
    "image": "https://cf.geekdo-images.com/original/img/pFdRvk3itpJpkKIlRGs7n8BGwZs=/0x0/pic1651950.jpg",
    "category": "Ancient,Farming"
  },
  {
    "title": "La Citta",
    "image": "https://cf.geekdo-images.com/original/img/MetqQCz7DeJ5068FUK2E-Ff2y0g=/0x0/pic274350.jpg",
    "category": "Civilization,City Building,Renaissance,Territory Building"
  },
  {
    "title": "Talisman",
    "image": "https://cf.geekdo-images.com/original/img/DurH_pjIU9QmO4Icfz_pmhHYzbY=/0x0/pic818904.jpg",
    "category": "Fantasy,Exploration,Fighting,Adventure"
  },
  {
    "title": "Exit: The Game - The Secret Lab",
    "image": "https://cf.geekdo-images.com/original/img/JQ-KJOGt5zCMP9eSz0GH8X4VjpQ=/0x0/pic3332425.jpg",
    "category": "Deduction,Puzzle,Real-time"
  },
  {
    "title": "Doom: The Boardgame",
    "image": "https://cf.geekdo-images.com/original/img/27q15vCnJ-SL1iBLLq9AKYVsTm8=/0x0/pic71199.jpg",
    "category": "Exploration,Science Fiction,Fighting,Miniatures,Horror,Video Game Theme"
  },
  {
    "title": "Dream Factory",
    "image": "https://cf.geekdo-images.com/original/img/qNgAMLjh73aAUP3yOuCCyD5VA4A=/0x0/pic510123.jpg",
    "category": "Movies / TV / Radio theme"
  },
  {
    "title": "Dream Home",
    "image": "https://cf.geekdo-images.com/original/img/NdQkTY4E5yivlVRkZvtKDO5tpxg=/0x0/pic3176771.jpg",
    "category": "Card Game"
  },
  {
    "title": "7 Wonders: Wonder Pack",
    "image": "https://cf.geekdo-images.com/original/img/iLYK2mGTh_2NRg649gZd19K2-mc=/0x0/pic1495052.jpg",
    "category": "Card Game,Ancient,Civilization,City Building,Expansion for Base-game"
  },
  {
    "title": "Lords of Xidit",
    "image": "https://cf.geekdo-images.com/original/img/cRVKfcEvj99teASQiIOb-FBWGRY=/0x0/pic2074460.jpg",
    "category": "Fantasy"
  },
  {
    "title": "The Starfarers of Catan",
    "image": "https://cf.geekdo-images.com/original/img/B4giHsk5dGVYdv7xhzlaJu3AhNM=/0x0/pic5054740.jpg",
    "category": "Negotiation,Exploration,Science Fiction,Space Exploration"
  },
  {
    "title": "Blokus Duo",
    "image": "https://cf.geekdo-images.com/original/img/CQJysCFDDfXVRu5ECzH5n31Nek0=/0x0/pic1086904.jpg",
    "category": "Abstract Strategy,Territory Building"
  },
  {
    "title": "Winner's Circle",
    "image": "https://cf.geekdo-images.com/original/img/4Sd7AXnY4nJ3OzooJznqOg95OAU=/0x0/pic3159401.jpg",
    "category": "Racing,Animals,Sports"
  },
  {
    "title": "Ticket to Ride Map Collection: Volume 1 - Team Asia & Legendary Asia",
    "image": "https://cf.geekdo-images.com/original/img/zHFmbD0BMGnumCSz10NcW21GY8Q=/0x0/pic1077579.jpg",
    "category": "Expansion for Base-game,Trains"
  },
  {
    "title": "Ticket to Ride Map Collection: Volume 2 - India & Switzerland",
    "image": "https://cf.geekdo-images.com/original/img/8s0j8M-_ItLfr3Bum1QVKHLDb4g=/0x0/pic1077595.jpg",
    "category": "Expansion for Base-game,Trains"
  },
  {
    "title": "Reef Encounter",
    "image": "https://cf.geekdo-images.com/original/img/MYZLjVul8mZvq--bQHa0R914n54=/0x0/pic85905.jpg",
    "category": "Territory Building,Animals,Environmental"
  },
  {
    "title": "Myrmes",
    "image": "https://cf.geekdo-images.com/original/img/8iCII-zjIU4T6nPpOVu3dW8Skm4=/0x0/pic1370050.jpg",
    "category": "Farming,Animals,Environmental"
  },
  {
    "title": "Hansa",
    "image": "https://cf.geekdo-images.com/original/img/7uWGRmbn1l3s4XlqeoIIo4YYGFA=/0x0/pic311302.jpg",
    "category": "Economic,Medieval,Nautical,Transportation"
  },
  {
    "title": "Viceroy",
    "image": "https://cf.geekdo-images.com/original/img/FwncKP5GkYJvBmVSYjBOBP28AL0=/0x0/pic2254354.jpg",
    "category": "Negotiation,Card Game,Fantasy,Civilization,Bluffing,City Building"
  },
  {
    "title": "Time's Up!",
    "image": "https://cf.geekdo-images.com/original/img/GKdfCIEONQjJR29vfKWdRU1VYsg=/0x0/pic3690440.jpg",
    "category": "Humor,Party Game"
  },
  {
    "title": "Ashes: Rise of the Phoenixborn",
    "image": "https://cf.geekdo-images.com/original/img/FVTm0TS7YhdfG9k9ru9QfOC6IMM=/0x0/pic2479679.jpg",
    "category": "Card Game,Fantasy,Dice,Fighting"
  },
  {
    "title": "Ticket to Ride: 10th Anniversary",
    "image": "https://cf.geekdo-images.com/original/img/9k-BzSgfdQ6tCt_79mMsMgY2kd8=/0x0/pic1927856.jpg",
    "category": "Travel,Trains"
  },
  {
    "title": "Munchkin Cthulhu",
    "image": "https://cf.geekdo-images.com/original/img/_mRREk7R76N0WthVtEXTRcUJlvU=/0x0/pic162995.jpg",
    "category": "Card Game,Fighting,Humor,Horror"
  },
  {
    "title": "Junk Art",
    "image": "https://cf.geekdo-images.com/original/img/K0aK5O92w2Yglsvg0I85xAK1GbI=/0x0/pic2884509.jpg",
    "category": "Party Game,Action / Dexterity"
  },
  {
    "title": "Love Letter: Batman",
    "image": "https://cf.geekdo-images.com/original/img/XET6GUSvt5nRy_XBRvTx_lJL1Dc=/0x0/pic2290765.jpg",
    "category": "Card Game,Deduction,Comic Book / Strip"
  },
  {
    "title": "Hoity Toity",
    "image": "https://cf.geekdo-images.com/original/img/G_vjnCyMqXKY-AMMkp9AkpsD6d4=/0x0/pic38466.jpg",
    "category": "Bluffing"
  },
  {
    "title": "Catan Dice Game",
    "image": "https://cf.geekdo-images.com/original/img/lzdR0x7pTyFziEfK8o3bZOsYQhM=/0x0/pic3661032.jpg",
    "category": "Dice"
  },
  {
    "title": "Lords of Hellas",
    "image": "https://cf.geekdo-images.com/original/img/vq7HGWGNVjOb0sdqie3jpNtD-Xo=/0x0/pic3592207.jpg",
    "category": "Ancient,Mythology,Miniatures,Territory Building"
  },
  {
    "title": "Maharaja: The Game of Palace Building in India",
    "image": "https://cf.geekdo-images.com/original/img/FLEr6FgxAOjH6ZX2z2_ED7SYHQo=/0x0/pic44952.jpg",
    "category": "City Building"
  },
  {
    "title": "Mexica",
    "image": "https://cf.geekdo-images.com/original/img/TyoXWDoz-i3iyuAtTuetkPBXRLk=/0x0/pic2470537.jpg",
    "category": "Abstract Strategy,City Building,Territory Building"
  },
  {
    "title": "Clans",
    "image": "https://cf.geekdo-images.com/original/img/7w42Ni4Mkd0ZAbUlVxi1JmzsPj4=/0x0/pic402299.jpg",
    "category": "Abstract Strategy,Bluffing,Deduction,Prehistoric"
  },
  {
    "title": "Ikusa",
    "image": "https://cf.geekdo-images.com/original/img/0jlsAk-cJ0iN8M75NZ7ySp5-rA0=/0x0/pic1050037.jpg",
    "category": "Medieval,Wargame,Territory Building,Civil War"
  },
  {
    "title": "The Networks",
    "image": "https://cf.geekdo-images.com/original/img/QlyhX-UY8mNcSYnOd1EnMyqnMxI=/0x0/pic2896170.jpg",
    "category": "Economic,Movies / TV / Radio theme"
  },
  {
    "title": "Century: Eastern Wonders",
    "image": "https://cf.geekdo-images.com/original/img/BospinGV5yjOHCSTydgQDng1hHY=/0x0/pic3898507.jpg",
    "category": "Nautical"
  },
  {
    "title": "Dragon Castle",
    "image": "https://cf.geekdo-images.com/original/img/RPDvrOySvpdePpC3LvxMGVx0gDg=/0x0/pic3683059.png",
    "category": "Abstract Strategy"
  },
  {
    "title": "Caylus Magna Carta",
    "image": "https://cf.geekdo-images.com/original/img/FKHTjfwMYAsnNfjh-lNSKFKMzkM=/0x0/pic339842.jpg",
    "category": "Economic,Card Game,Medieval,City Building"
  },
  {
    "title": "Exit: The Game - The Pharaoh's Tomb",
    "image": "https://cf.geekdo-images.com/original/img/S-KoKj_1SWARBoGaSpjrbTWIm0g=/0x0/pic3332423.jpg",
    "category": "Ancient,Deduction,Puzzle,Real-time"
  },
  {
    "title": "Illuminati (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/Spqi-g9bDkzjrIcvMKmY8eRnsJc=/0x0/pic4206838.jpg",
    "category": "Negotiation,Political,Card Game,Science Fiction,Humor"
  },
  {
    "title": "Tajemnicze Domostwo",
    "image": "https://cf.geekdo-images.com/original/img/B_KQwVTbEWwya4ck3Y0CMuLzI6Y=/0x0/pic2601636.jpg",
    "category": "Deduction,Murder/Mystery"
  },
  {
    "title": "Terraforming Mars: Venus Next",
    "image": "https://cf.geekdo-images.com/original/img/bHKxDPfx0blBHYQXdp9ssomsa0Q=/0x0/pic3767139.jpg",
    "category": "Economic,Science Fiction,Industry / Manufacturing,Expansion for Base-game,Educational,Environmental"
  },
  {
    "title": "Star Fluxx",
    "image": "https://cf.geekdo-images.com/original/img/ZAsLWJY6_Pqin1HCUz5BZ51OuYI=/0x0/pic1059779.jpg",
    "category": "Card Game,Science Fiction"
  },
  {
    "title": "Manhattan",
    "image": "https://cf.geekdo-images.com/original/img/8OQ5Kp1PVZhGPfxY0ZBDN0OHnBM=/0x0/pic3573055.png",
    "category": "City Building"
  },
  {
    "title": "Santiago",
    "image": "https://cf.geekdo-images.com/original/img/HCWZp3b5CQRaCZrhF0ep6KTC7kw=/0x0/pic180497.jpg",
    "category": "Farming"
  },
  {
    "title": "Too Many Bones",
    "image": "https://cf.geekdo-images.com/original/img/wXeYGdruHxDtrasRWys1PTHnqGc=/0x0/pic3684814.jpg",
    "category": "Fantasy,Dice,Adventure"
  },
  {
    "title": "Ginkgopolis",
    "image": "https://cf.geekdo-images.com/original/img/yOSj1UGBu_8LEyHZK_8l-3aZ3Do=/0x0/pic1412371.jpg",
    "category": "Science Fiction,City Building,Territory Building,Environmental"
  },
  {
    "title": "Munchkin 3: Clerical Errors",
    "image": "https://cf.geekdo-images.com/original/img/atcqC0oLg0SVRZCalcPolRfYe6I=/0x0/pic2428681.jpg",
    "category": "Card Game,Fantasy,Fighting,Humor,Expansion for Base-game"
  },
  {
    "title": "Black Fleet",
    "image": "https://cf.geekdo-images.com/original/img/U3mLOSa1rASgVJUGgWJi6WkC5Ew=/0x0/pic1987366.jpg",
    "category": "Nautical,Pirates,Transportation"
  },
  {
    "title": "La Isla",
    "image": "https://cf.geekdo-images.com/original/img/xHEDcjX51KhJJhqfJg1R5zsLyR4=/0x0/pic2073938.jpg",
    "category": "Animals"
  },
  {
    "title": "Cutthroat Caverns",
    "image": "https://cf.geekdo-images.com/original/img/xBDmCvX4ogUCm3tPFsSxrY7yYbk=/0x0/pic249004.jpg",
    "category": "Card Game,Fantasy,Fighting,Adventure,Humor"
  },
  {
    "title": "Warhammer Quest: The Adventure Card Game",
    "image": "https://cf.geekdo-images.com/original/img/diIBFCAnzwBFMsh8K1HbAJjNLn8=/0x0/pic2625794.jpg",
    "category": "Card Game,Fantasy,Exploration,Fighting,Adventure"
  },
  {
    "title": "Hannibal: Rome vs. Carthage",
    "image": "https://cf.geekdo-images.com/original/img/qrk2FxvW6AGmCuBWGhxW0FJvwoM=/0x0/pic706069.jpg",
    "category": "Political,Ancient,Wargame"
  },
  {
    "title": "Legendary: A Marvel Deck Building Game – Dark City",
    "image": "https://cf.geekdo-images.com/original/img/1fz1O_kKVYkcNEAwhbQwPtA4jiE=/0x0/pic1854526.jpg",
    "category": "Card Game,Expansion for Base-game,Comic Book / Strip"
  },
  {
    "title": "Diamonds",
    "image": "https://cf.geekdo-images.com/original/img/B2SicTO0OW9G1XFPGg3S8mIp4i4=/0x0/pic4812860.jpg",
    "category": "Card Game"
  },
  {
    "title": "KLASK",
    "image": "https://cf.geekdo-images.com/original/img/qfy1PkdQr4f7xwK16QS5Upyh0Vs=/0x0/pic2627442.jpg",
    "category": "Real-time,Action / Dexterity"
  },
  {
    "title": "Wasabi!",
    "image": "https://cf.geekdo-images.com/original/img/6eYylqy3-rcvxXK3Z46NPbxqXkU=/0x0/pic273575.jpg",
    "category": "Territory Building"
  },
  {
    "title": "Fallout",
    "image": "https://cf.geekdo-images.com/original/img/WOG100P9cRCy_LKVxYbDqpWYwoQ=/0x0/pic3728149.jpg",
    "category": "Exploration,Science Fiction,Adventure,Video Game Theme"
  },
  {
    "title": "Fabled Fruit",
    "image": "https://cf.geekdo-images.com/original/img/8qlyyBEPlKTAN_XawD8_pqXOpak=/0x0/pic3086825.jpg",
    "category": ""
  },
  {
    "title": "Monty Python Fluxx",
    "image": "https://cf.geekdo-images.com/original/img/aNkRKjmmVW1APmllSfQjO6mBJA0=/0x0/pic385725.jpg",
    "category": "Card Game,Humor,Movies / TV / Radio theme"
  },
  {
    "title": "The Speicherstadt",
    "image": "https://cf.geekdo-images.com/original/img/EPxNOqm9E0Wtr2T7j5f4WNJhflo=/0x0/pic686491.jpg",
    "category": "Economic"
  },
  {
    "title": "Santa Maria",
    "image": "https://cf.geekdo-images.com/original/img/8VQx4iKeKKVaoKZWgeT7mrxYMsE=/0x0/pic3882016.jpg",
    "category": "Civilization,Farming"
  },
  {
    "title": "Felicity: The Cat in the Sack",
    "image": "https://cf.geekdo-images.com/original/img/tAtLwNMWLZH1ueS29r87jRYnio4=/0x0/pic3530209.jpg",
    "category": "Card Game,Bluffing,Animals"
  },
  {
    "title": "Nations: The Dice Game",
    "image": "https://cf.geekdo-images.com/original/img/Tv2TENFnKKlb1EmXpDdJj6-DY6Q=/0x0/pic3743789.jpg",
    "category": "Medieval,Ancient,Civilization,Dice,Renaissance"
  },
  {
    "title": "Kingdoms",
    "image": "https://cf.geekdo-images.com/original/img/z9kT28maWK3nob4ssoSlNdu_N_c=/0x0/pic1097403.png",
    "category": "Fantasy,Abstract Strategy,Medieval"
  },
  {
    "title": "Wings of War: Famous Aces",
    "image": "https://cf.geekdo-images.com/original/img/N6wg58r_9WeKtGfbYDdjr_AQDEU=/0x0/pic38996.jpg",
    "category": "Card Game,Wargame,Aviation / Flight,World War I"
  },
  {
    "title": "Majesty: For the Realm",
    "image": "https://cf.geekdo-images.com/original/img/Qr7pXc9um5bO3oYuK-9N0Id1-6I=/0x0/pic3742410.jpg",
    "category": "Card Game,Medieval"
  },
  {
    "title": "51st State: Master Set",
    "image": "https://cf.geekdo-images.com/original/img/FikdHVDtGfaFsStTcuw0LwiFTqo=/0x0/pic2945432.jpg",
    "category": "Economic,Card Game,Science Fiction,City Building"
  },
  {
    "title": "Gears of War: The Board Game",
    "image": "https://cf.geekdo-images.com/original/img/UTYNBB-9yGiYEBEVnRSsqSOyAlU=/0x0/pic1004112.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Video Game Theme"
  },
  {
    "title": "The Adventurers: The Temple of Chac",
    "image": "https://cf.geekdo-images.com/original/img/KcnX8I-fD1x-ST8kOJpUQHGgOX4=/0x0/pic517825.jpg",
    "category": "Ancient,Exploration,Miniatures,Adventure"
  },
  {
    "title": "Runebound (Third Edition)",
    "image": "https://cf.geekdo-images.com/original/img/50IV4PwBzWoHQLGmDWEtcG-R3xg=/0x0/pic2625790.jpg",
    "category": "Fantasy,Exploration,Adventure"
  },
  {
    "title": "Twilight Imperium (Third Edition): Shattered Empire",
    "image": "https://cf.geekdo-images.com/original/img/9lRBs0Hbk8NQoi3XBJP3Aes99iU=/0x0/pic134996.jpg",
    "category": "Negotiation,Political,Civilization,Science Fiction,Wargame,Space Exploration,Expansion for Base-game"
  },
  {
    "title": "Kodama: The Tree Spirits",
    "image": "https://cf.geekdo-images.com/original/img/KCJsLK6rq5eBe_aIOhSHx92nVd0=/0x0/pic3291451.jpg",
    "category": "Political,Card Game,Collectible Components,Fighting,Horror"
  },
  {
    "title": "Scoville",
    "image": "https://cf.geekdo-images.com/original/img/eksuZRUexg40DnFbPuNE5pvPxXA=/0x0/pic1903464.jpg",
    "category": "Farming"
  },
  {
    "title": "One Night Ultimate Werewolf Daybreak",
    "image": "https://cf.geekdo-images.com/original/img/7CB2n5DttYL0VT4aQm0pj9ZQLos=/0x0/pic2225958.jpg",
    "category": "Card Game,Bluffing,Horror,Deduction,Party Game"
  },
  {
    "title": "Antike",
    "image": "https://cf.geekdo-images.com/original/img/WQVgWSzLrghtP92mpv3_RkIixtQ=/0x0/pic171444.jpg",
    "category": "Ancient,Civilization,Nautical,Fighting,Territory Building"
  },
  {
    "title": "Thunderstone Advance: Towers of Ruin",
    "image": "https://cf.geekdo-images.com/original/img/CCBJ5D-E-mwJwl0btqHFPlJ7d8Y=/0x0/pic1196537.jpg",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Viticulture: Tuscany Essential Edition",
    "image": "https://cf.geekdo-images.com/original/img/UKgKsieA-g4PGYV9tpJODaqYzTA=/0x0/pic3064278.jpg",
    "category": "Farming,Expansion for Base-game"
  },
  {
    "title": "Wiz-War (eighth edition)",
    "image": "https://cf.geekdo-images.com/original/img/fdkyJ_lYhlpmjhZLiCcnGtImIug=/0x0/pic1222733.jpg",
    "category": "Fantasy,Fighting,Miniatures"
  },
  {
    "title": "Star Munchkin",
    "image": "https://cf.geekdo-images.com/original/img/z0JEB5k7C3ZOaAxfWZW2zMVkLsY=/0x0/pic883059.jpg",
    "category": "Card Game,Science Fiction,Fighting,Humor"
  },
  {
    "title": "Ticket to Ride: Switzerland",
    "image": "https://cf.geekdo-images.com/original/img/6YB6yvTaXZCiT4mTKWeX86P6OHU=/0x0/pic620078.jpg",
    "category": "Expansion for Base-game,Trains"
  },
  {
    "title": "The Magic Labyrinth",
    "image": "https://cf.geekdo-images.com/original/img/47fBpm_q3p_4rwqWCuUGmAFK88k=/0x0/pic953186.jpg",
    "category": "Fantasy,Maze,Children's Game,Memory"
  },
  {
    "title": "Tyrants of the Underdark",
    "image": "https://cf.geekdo-images.com/original/img/KwgEVcXch4sbk9ZRr2_brDBDm9o=/0x0/pic2801874.jpg",
    "category": "Fantasy"
  },
  {
    "title": "World Without End",
    "image": "https://cf.geekdo-images.com/original/img/-BUYVcFbqvMPmqhh2pbuwZxFs4c=/0x0/pic583088.jpg",
    "category": "Economic,Medieval,Novel-based,Religious"
  },
  {
    "title": "Mint Works",
    "image": "https://cf.geekdo-images.com/original/img/fgSlMLdaFq_bMOcP29b08cq8Tp8=/0x0/pic4199718.jpg",
    "category": "Economic,Card Game,Industry / Manufacturing"
  },
  {
    "title": "Bruxelles 1893",
    "image": "https://cf.geekdo-images.com/original/img/g-sRalMdRYQ6vL99M6J5fEpNSrc=/0x0/pic1726346.jpg",
    "category": "Economic"
  },
  {
    "title": "Primordial Soup",
    "image": "https://cf.geekdo-images.com/original/img/sZcDKbNjSQrzGRHIyvq2ntWB13A=/0x0/pic294731.jpg",
    "category": "Prehistoric"
  },
  {
    "title": "Fog of Love",
    "image": "https://cf.geekdo-images.com/original/img/OyQXeAnPK2fohsIq-Pu0n-5HJeo=/0x0/pic3726790.jpg",
    "category": "Card Game,Bluffing,Deduction"
  },
  {
    "title": "First Class: All Aboard the Orient Express!",
    "image": "https://cf.geekdo-images.com/original/img/nS1z4Ha68oLSIfHTCI3-Bz0taE4=/0x0/pic3539689.jpg",
    "category": "Card Game,Trains"
  },
  {
    "title": "1830: Railways & Robber Barons",
    "image": "https://cf.geekdo-images.com/original/img/cUZaArfHWQol8cYWY_Z4PaMPyC0=/0x0/pic882119.jpg",
    "category": "Economic,Trains,Transportation"
  },
  {
    "title": "Ticket to Ride: Europa 1912",
    "image": "https://cf.geekdo-images.com/original/img/9Vc76A-B-qgapdx9KAw9Gd3EFQI=/0x0/pic534424.jpg",
    "category": "Expansion for Base-game,Trains"
  },
  {
    "title": "Pandemic: In the Lab",
    "image": "https://cf.geekdo-images.com/original/img/zYXQYgCwmGKH2wesnLCvNDtadiQ=/0x0/pic1632485.jpg",
    "category": "Science Fiction,Expansion for Base-game,Medical,Environmental"
  },
  {
    "title": "T.I.M.E Stories: A Prophecy of Dragons",
    "image": "https://cf.geekdo-images.com/original/img/7KMQxb1lKz8yq6uYZ_ZvDL_hoQc=/0x0/pic2793584.jpg",
    "category": "Fantasy,Medieval,Science Fiction,Adventure,Puzzle,Expansion for Base-game"
  },
  {
    "title": "The Manhattan Project: Energy Empire",
    "image": "https://cf.geekdo-images.com/original/img/GSHyEtCfCyEkTnFPxkUqUQnY4-U=/0x0/pic3048617.jpg",
    "category": "Economic,Civilization,Dice,Industry / Manufacturing,Environmental"
  },
  {
    "title": "Caverna: Cave vs Cave",
    "image": "https://cf.geekdo-images.com/original/img/oGKFOw3YPxGlwVH443K830K2-Do=/0x0/pic3505750.jpg",
    "category": "Economic,Fantasy,Farming"
  },
  {
    "title": "Ex Libris",
    "image": "https://cf.geekdo-images.com/original/img/ruCMYEaFeZJ-s-tMQo_OU8zsiGM=/0x0/pic3578008.png",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Carcassonne: Expansion 5 - Abbey & Mayor",
    "image": "https://cf.geekdo-images.com/original/img/MWA-fq8Opb3mpr77WXaWX_OTRsw=/0x0/pic3513934.jpg",
    "category": "Medieval,City Building,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Roma",
    "image": "https://cf.geekdo-images.com/original/img/MbOv_B1f2LY_lnlLtSDvYJBMzB4=/0x0/pic1167294.jpg",
    "category": "Card Game,Ancient,Dice"
  },
  {
    "title": "The Crew: The Quest for Planet Nine",
    "image": "https://cf.geekdo-images.com/original/img/KT2J_6DP4ZRIetKPGr-DtROk1qg=/0x0/pic5078567.jpg",
    "category": "Card Game,Science Fiction,Space Exploration"
  },
  {
    "title": "Harbour",
    "image": "https://cf.geekdo-images.com/original/img/1tMfooUcOb5kGfmXAAewJs-YVgs=/0x0/pic2726915.jpg",
    "category": "Economic,Card Game,Fantasy,City Building,Humor"
  },
  {
    "title": "Coup: Reformation",
    "image": "https://cf.geekdo-images.com/original/img/QojS1fDcd5o7PE-7GdtZidiZLlk=/0x0/pic1978817.jpg",
    "category": "Political,Card Game,Bluffing,Deduction,Expansion for Base-game"
  },
  {
    "title": "Paths of Glory",
    "image": "https://cf.geekdo-images.com/original/img/5Xy7KdZuB_GTLwIwW_nOl6-rAqQ=/0x0/pic4490515.jpg",
    "category": "Wargame,World War I"
  },
  {
    "title": "Snowdonia",
    "image": "https://cf.geekdo-images.com/original/img/u3IzDFWAkiTU1vjCiaQ3fkWbLaA=/0x0/pic1430858.jpg",
    "category": "Trains"
  },
  {
    "title": "Star Wars: Armada",
    "image": "https://cf.geekdo-images.com/original/img/Vk1etS8zgr3oUGVfNs0P1EnCN7M=/0x0/pic2355171.jpg",
    "category": "Science Fiction,Collectible Components,Fighting,Miniatures,Wargame,Movies / TV / Radio theme"
  },
  {
    "title": "Tribune: Primus Inter Pares",
    "image": "https://cf.geekdo-images.com/original/img/uqtoxX1PheXOQpsjlBeLIhCsGI0=/0x0/pic413081.jpg",
    "category": "Political,Ancient"
  },
  {
    "title": "Vinhos",
    "image": "https://cf.geekdo-images.com/original/img/oyCZW3drcK9lqObzMCeu_Ye9buM=/0x0/pic815592.jpg",
    "category": "Economic,Farming,Industry / Manufacturing"
  },
  {
    "title": "Evo",
    "image": "https://cf.geekdo-images.com/original/img/V-8BqhWIvQ3cQwdOTwd3JDH7UBo=/0x0/pic1100790.jpg",
    "category": "Science Fiction,Animals,Prehistoric"
  },
  {
    "title": "A Touch of Evil: The Supernatural Game",
    "image": "https://cf.geekdo-images.com/original/img/tkyrQ9jzm2XXB9R9E-WnYOcoCtc=/0x0/pic326493.jpg",
    "category": "Fighting,Adventure,Horror,Murder/Mystery"
  },
  {
    "title": "Fleet",
    "image": "https://cf.geekdo-images.com/original/img/BEge8jxDQWXjO6Ui-LqRhTAFtug=/0x0/pic1247682.jpg",
    "category": "Card Game,Nautical"
  },
  {
    "title": "Eight-Minute Empire: Legends",
    "image": "https://cf.geekdo-images.com/original/img/y94-taBtu9UygIYOYaAC8byHelg=/0x0/pic1708628.jpg",
    "category": "Civilization,Exploration,Mythology,Territory Building"
  },
  {
    "title": "King of Tokyo: Halloween",
    "image": "https://cf.geekdo-images.com/original/img/ACEmqZbxgvvQV5QrBpIQD8HRP3w=/0x0/pic3616670.jpg",
    "category": "Science Fiction,Dice,Fighting,Movies / TV / Radio theme,Expansion for Base-game"
  },
  {
    "title": "Saboteur 2 (expansion-only editions)",
    "image": "https://cf.geekdo-images.com/original/img/P49caM5pKgxLwgYxBn-0e3ZNjt0=/0x0/pic3989507.png",
    "category": "Card Game,Fantasy,Exploration,Bluffing,Party Game,Expansion for Base-game"
  },
  {
    "title": "Ave Caesar",
    "image": "https://cf.geekdo-images.com/original/img/g3o1MGbtziErae5PacEX_5X7SQo=/0x0/pic125581.jpg",
    "category": "Ancient,Racing"
  },
  {
    "title": "Francis Drake",
    "image": "https://cf.geekdo-images.com/original/img/1Q7NcHHmYzgwbWl_J2mslll6sjY=/0x0/pic1616979.jpg",
    "category": "Nautical,Exploration,Bluffing,Renaissance,Pirates"
  },
  {
    "title": "History of the World",
    "image": "https://cf.geekdo-images.com/original/img/JGI_nL7aUYlgoXGBGUWZOiSKD4s=/0x0/pic287451.jpg",
    "category": "Medieval,Ancient,Civilization,Wargame,Renaissance"
  },
  {
    "title": "Chez Geek",
    "image": "https://cf.geekdo-images.com/original/img/J8tUDIkm2bbYYhCedoayOxrOHgU=/0x0/pic918250.jpg",
    "category": "Card Game"
  },
  {
    "title": "Unlock!: Escape Adventures",
    "image": "https://cf.geekdo-images.com/original/img/0OBAYwgdKHNIoVbNXpB9eBgjYV8=/0x0/pic3348790.jpg",
    "category": "Card Game,Exploration,Puzzle,Real-time"
  },
  {
    "title": "DVONN",
    "image": "https://cf.geekdo-images.com/original/img/HJJatfLYRnVmlP3dk5tIGy-Y9XA=/0x0/pic3324136.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Star Wars: Destiny",
    "image": "https://cf.geekdo-images.com/original/img/RkW4r8th3mhM69J5wm-mrP19VsQ=/0x0/pic3363466.jpg",
    "category": "Card Game,Science Fiction,Collectible Components,Dice,Fighting,Movies / TV / Radio theme"
  },
  {
    "title": "Cthulhu Wars",
    "image": "https://cf.geekdo-images.com/original/img/JZDhEpMVbGBunW4z12KpBtYX070=/0x0/pic3527761.jpg",
    "category": "Fantasy,Fighting,Miniatures,Horror"
  },
  {
    "title": "Point Salad",
    "image": "https://cf.geekdo-images.com/original/img/dopiLbApONJw43oq1iicS12jvQ0=/0x0/pic4621571.png",
    "category": "Card Game"
  },
  {
    "title": "China",
    "image": "https://cf.geekdo-images.com/original/img/IMVhl84JIRieqi86DvSpQhBdBDc=/0x0/pic63275.jpg",
    "category": "Ancient,Territory Building"
  },
  {
    "title": "Dice City",
    "image": "https://cf.geekdo-images.com/original/img/RbZX9bpggSoQ1WaKeIIedmjGGUk=/0x0/pic2561229.jpg",
    "category": "Medieval,Dice,City Building"
  },
  {
    "title": "Luna",
    "image": "https://cf.geekdo-images.com/original/img/WnTi_iDdg0eMd_e4BERXvOFfkAw=/0x0/pic2538939.png",
    "category": "Fantasy"
  },
  {
    "title": "Werewolf",
    "image": "https://cf.geekdo-images.com/original/img/W3Xysl_hnwxO7wrg8llaMfbDkRE=/0x0/pic2453810.jpg",
    "category": "Negotiation,Bluffing,Horror,Deduction,Party Game,Murder/Mystery"
  },
  {
    "title": "Container",
    "image": "https://cf.geekdo-images.com/original/img/8x4lC1wk7sUlW-200HxqymNLIvk=/0x0/pic332933.jpg",
    "category": "Economic,Nautical,Industry / Manufacturing,Transportation"
  },
  {
    "title": "Guess Who?",
    "image": "https://cf.geekdo-images.com/original/img/Fapg_eLu0LCjeBm_ramBX9jTKFY=/0x0/pic335812.jpg",
    "category": "Deduction,Movies / TV / Radio theme,Children's Game"
  },
  {
    "title": "Scythe: The Wind Gambit",
    "image": "https://cf.geekdo-images.com/original/img/LH298dHMe4ltRu6bNerlqv2gS0Q=/0x0/pic3487272.jpg",
    "category": "Economic,Expansion for Base-game,Transportation"
  },
  {
    "title": "Discoveries: The Journals of Lewis and Clark",
    "image": "https://cf.geekdo-images.com/original/img/mG93XsX9iF1VJ1eHbPvhnMMOwC8=/0x0/pic2571301.jpg",
    "category": "Dice,American West"
  },
  {
    "title": "The Taverns of Tiefenthal",
    "image": "https://cf.geekdo-images.com/original/img/ZOnWE2ydKSx5V0t-Y76Q6F1UKio=/0x0/pic4873141.jpg",
    "category": "Dice"
  },
  {
    "title": "Hare & Tortoise",
    "image": "https://cf.geekdo-images.com/original/img/D5PQb7YwNmnYeah6Q8aFDU_24LU=/0x0/pic275126.jpg",
    "category": "Racing,Animals"
  },
  {
    "title": "Risk: The Lord of the Rings",
    "image": "https://cf.geekdo-images.com/original/img/fyMuP2wgkuTyDLPDYVZPepmTlJM=/0x0/pic265703.jpg",
    "category": "Fantasy,Wargame,Adventure,Novel-based,Territory Building,Movies / TV / Radio theme"
  },
  {
    "title": "Domaine",
    "image": "https://cf.geekdo-images.com/original/img/M1nrWUTK97Jh03tACn3Q2HMFng8=/0x0/pic21368.jpg",
    "category": "Medieval,Territory Building"
  },
  {
    "title": "Starship Catan",
    "image": "https://cf.geekdo-images.com/original/img/ucY3-jat7Rq5XTavbag7WgPrmK4=/0x0/pic149643.jpg",
    "category": "Card Game,Exploration,Science Fiction,Space Exploration"
  },
  {
    "title": "Caesar & Cleopatra",
    "image": "https://cf.geekdo-images.com/original/img/Xh1JraJ3wh_BXO8eIbCTVTjWbxQ=/0x0/pic344378.jpg",
    "category": "Card Game,Ancient,Bluffing"
  },
  {
    "title": "Vasco da Gama",
    "image": "https://cf.geekdo-images.com/original/img/JK_FtcxyGZvQIzoCVytXLIwF7rs=/0x0/pic495883.jpg",
    "category": "Nautical,Renaissance"
  },
  {
    "title": "Hyperborea",
    "image": "https://cf.geekdo-images.com/original/img/exd_sHy8pdM0K9Bcevx6VvuXSmk=/0x0/pic2004236.jpg",
    "category": "Fantasy,Civilization,Exploration,Fighting"
  },
  {
    "title": "Puerto Rico (with two expansions)",
    "image": "https://cf.geekdo-images.com/original/img/HzXpQyu2m1zVI7iYVNQ55KmZuMo=/0x0/pic4887895.jpg",
    "category": "Economic,Farming,City Building"
  },
  {
    "title": "Dead Man's Draw",
    "image": "https://cf.geekdo-images.com/original/img/2O5Q_vSV5dLo8N_m1BQdoxbGowc=/0x0/pic2923119.jpg",
    "category": "Card Game,Pirates"
  },
  {
    "title": "Samurai Spirit",
    "image": "https://cf.geekdo-images.com/original/img/0XJmiYm_AkOw8xJfO8jTm9TeUeQ=/0x0/pic2012135.jpg",
    "category": "Fantasy,Fighting,Animals"
  },
  {
    "title": "Pachisi",
    "image": "https://cf.geekdo-images.com/original/img/qzluXZ2oloACgfZbj1M5_wcF1Bo=/0x0/pic516869.jpg",
    "category": "Dice,Racing,Novel-based,Movies / TV / Radio theme,Children's Game,Comic Book / Strip"
  },
  {
    "title": "Carcassonne: The River II",
    "image": "https://cf.geekdo-images.com/original/img/qP63H8TPuEPTZpU9oGlBCOxPnPE=/0x0/pic105976.jpg",
    "category": "Medieval,City Building,Territory Building,Expansion for Base-game"
  },
  {
    "title": "BANG! Dodge City",
    "image": "https://cf.geekdo-images.com/original/img/6vJIUIJmX1TFKvJOq-qBMlqXUkA=/0x0/pic940210.jpg",
    "category": "Card Game,Bluffing,Fighting,American West,Humor,Deduction,Expansion for Base-game"
  },
  {
    "title": "San Marco",
    "image": "https://cf.geekdo-images.com/original/img/9HgCYySr2UvfvAH3Am2bv9CzVVk=/0x0/pic174180.jpg",
    "category": "Political,Medieval"
  },
  {
    "title": "Labyrinth: The War on Terror, 2001 - ?",
    "image": "https://cf.geekdo-images.com/original/img/ylfEIFG1FwtgY9c3ZEoXO5DYv-Q=/0x0/pic859584.jpg",
    "category": "Political,Wargame,Modern Warfare"
  },
  {
    "title": "Coal Baron",
    "image": "https://cf.geekdo-images.com/original/img/5qyM_s4sBM5VVNi0y9biIdlma64=/0x0/pic1743451.jpg",
    "category": "Industry / Manufacturing,Trains,Transportation"
  },
  {
    "title": "Union Pacific",
    "image": "https://cf.geekdo-images.com/original/img/2Jnsew81bue2Fi5ovW-ovWL1MYs=/0x0/pic226392.jpg",
    "category": "Economic,Trains"
  },
  {
    "title": "Carcassonne: The City",
    "image": "https://cf.geekdo-images.com/original/img/CtFlOIRU6Zqg_hTcuH0ySpVfAtU=/0x0/pic839808.jpg",
    "category": "Medieval,City Building"
  },
  {
    "title": "Maracaibo",
    "image": "https://cf.geekdo-images.com/original/img/qP99uYh6kOi_erZTgkYDe_AVSsw=/0x0/pic4917407.jpg",
    "category": "Economic,Exploration"
  },
  {
    "title": "The Lost Expedition",
    "image": "https://cf.geekdo-images.com/original/img/Uo7flc_Fh_mRNGZSmle_hUzpGvw=/0x0/pic3339655.jpg",
    "category": "Card Game,Exploration,Adventure"
  },
  {
    "title": "Rune Age",
    "image": "https://cf.geekdo-images.com/original/img/_fJ85btpds57zsoibTgKduURlKk=/0x0/pic973931.jpg",
    "category": "Card Game,Fantasy,Fighting"
  },
  {
    "title": "Kingsburg: To Forge a Realm",
    "image": "https://cf.geekdo-images.com/original/img/cpuxCVYg5C1sJZYNZtSD8VzCdgc=/0x0/pic1196154.jpg",
    "category": "Fantasy,Medieval,Dice,City Building,Expansion for Base-game"
  },
  {
    "title": "Rex: Final Days of an Empire",
    "image": "https://cf.geekdo-images.com/original/img/6W2kfKUK6XIVhcI8Vr61YTqB2ZE=/0x0/pic1246187.jpg",
    "category": "Negotiation,Political,Science Fiction,Fighting"
  },
  {
    "title": "Zombicide Season 2: Prison Outbreak",
    "image": "https://cf.geekdo-images.com/original/img/1yYpbANKllgIZMWSUq0xWSESRbU=/0x0/pic1805937.jpg",
    "category": "Miniatures,Horror,Zombies"
  },
  {
    "title": "Santiago de Cuba",
    "image": "https://cf.geekdo-images.com/original/img/khzmSIjMtMySFOJf7nT9E7aGtFE=/0x0/pic1918128.jpg",
    "category": "Economic"
  },
  {
    "title": "Dixit: Journey",
    "image": "https://cf.geekdo-images.com/original/img/ZkIVkgiw7QLXTL0kFiRvCbBrl48=/0x0/pic1387599.jpg",
    "category": "Card Game,Humor,Party Game"
  },
  {
    "title": "Epic Card Game",
    "image": "https://cf.geekdo-images.com/original/img/0j8wKjZr4TYFLYARJ9JdSreZfDM=/0x0/pic2691347.jpg",
    "category": "Card Game,Fantasy,Fighting,Prehistoric,Zombies"
  },
  {
    "title": "Two Rooms and a Boom",
    "image": "https://cf.geekdo-images.com/original/img/59vCXZGUYwAeoe2nILFyiCmuDZA=/0x0/pic2335221.png",
    "category": "Negotiation,Card Game,Bluffing,Print & Play,Deduction,Party Game,Spies/Secret Agents"
  },
  {
    "title": "Star Wars: Outer Rim",
    "image": "https://cf.geekdo-images.com/original/img/FCkK1tBwsSuOfINnej0GD-xVBm8=/0x0/pic4967654.jpg",
    "category": "Exploration,Science Fiction,Adventure,Space Exploration,Movies / TV / Radio theme"
  },
  {
    "title": "Ticket to Ride Map Collection: Volume 5 - United Kingdom & Pennsylvania",
    "image": "https://cf.geekdo-images.com/original/img/VL27hu3dmmyRy4tU0nrF6Idb0ZU=/0x0/pic2640876.jpg",
    "category": "Expansion for Base-game,Trains"
  },
  {
    "title": "Alhambra: Big Box",
    "image": "https://cf.geekdo-images.com/original/img/UKb2wuG2E5xhNLvSWZTgfibKwKo=/0x0/pic535726.jpg",
    "category": "City Building"
  },
  {
    "title": "Mission: Red Planet",
    "image": "https://cf.geekdo-images.com/original/img/nmKBY5uGhSvgRFvs1E8Ypg1_m1c=/0x0/pic151268.jpg",
    "category": "Science Fiction,Space Exploration"
  },
  {
    "title": "A Fake Artist Goes to New York",
    "image": "https://cf.geekdo-images.com/original/img/qo2q33P2BAPmeDDwWMwXEMk282g=/0x0/pic3678404.png",
    "category": "Bluffing,Deduction,Party Game"
  },
  {
    "title": "Arkham Horror: The King in Yellow Expansion",
    "image": "https://cf.geekdo-images.com/original/img/CLbjJ7CtuiEF1SJGU9ncbv0g92E=/0x0/pic222480.jpg",
    "category": "Science Fiction,Fighting,Adventure,Horror,Novel-based,Expansion for Base-game"
  },
  {
    "title": "Arkadia",
    "image": "https://cf.geekdo-images.com/original/img/axUuhZSY4x1EZ4vRzrz5qcIoEZM=/0x0/pic193620.jpg",
    "category": "City Building"
  },
  {
    "title": "Hawaii",
    "image": "https://cf.geekdo-images.com/original/img/Lo4Sf5wGbqb8q4jkznjGEUOG4V8=/0x0/pic1188333.jpg",
    "category": ""
  },
  {
    "title": "Revolution!",
    "image": "https://cf.geekdo-images.com/original/img/t5KqggMzyUbBSAPCXYumsH45SlY=/0x0/pic470283.jpg",
    "category": "Political,Bluffing,Deduction"
  },
  {
    "title": "Sekigahara: The Unification of Japan",
    "image": "https://cf.geekdo-images.com/original/img/JbVCWCizvTPWkXlbQ1tlIh2Vq7o=/0x0/pic1063508.jpg",
    "category": "Wargame,Civil War,Pike and Shot"
  },
  {
    "title": "Honshu",
    "image": "https://cf.geekdo-images.com/original/img/A8Q-mJawlrOlaIYw3n8lNJNir5k=/0x0/pic3627583.jpg",
    "category": "Card Game,City Building,Territory Building"
  },
  {
    "title": "Timeline: Events",
    "image": "https://cf.geekdo-images.com/original/img/0I8tYAl4tJHfZL7mfQbI1SM_Rws=/0x0/pic5336004.jpg",
    "category": "Card Game,Party Game,Trivia,Educational"
  },
  {
    "title": "Valley of the Kings",
    "image": "https://cf.geekdo-images.com/original/img/T5vEq-RLdSbVo6DPj8mexS_p0Ww=/0x0/pic1848490.jpg",
    "category": "Card Game,Ancient,Mythology,Religious"
  },
  {
    "title": "Hacienda",
    "image": "https://cf.geekdo-images.com/original/img/RR_reXSxVFe2CTLJ6rH3zkLPyyw=/0x0/pic121746.jpg",
    "category": "Economic,Farming,Territory Building,Animals"
  },
  {
    "title": "Britannia",
    "image": "https://cf.geekdo-images.com/original/img/TnZUCK0OhTsDc7u22eA1s8dSY8U=/0x0/pic106711.jpg",
    "category": "Medieval,Ancient,Civilization,Wargame"
  },
  {
    "title": "Chinese Checkers",
    "image": "https://cf.geekdo-images.com/original/img/WSm7Es8pOB1y560l5aiJpR96Ryk=/0x0/pic113974.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "Catan: Traders & Barbarians",
    "image": "https://cf.geekdo-images.com/original/img/KMWtpKwUMzEEEbIBhDBzGvqWJRI=/0x0/pic2420317.jpg",
    "category": "Negotiation,Expansion for Base-game,Transportation"
  },
  {
    "title": "Metropolys",
    "image": "https://cf.geekdo-images.com/original/img/eSV3B6WINt3xlr9DhBE9-0zrAlA=/0x0/pic297075.jpg",
    "category": "City Building"
  },
  {
    "title": "Villa Paletti",
    "image": "https://cf.geekdo-images.com/original/img/CcsRZ6uVdCgNrD4gC2Cx6gYbLgY=/0x0/pic168173.jpg",
    "category": "Party Game,Children's Game,Action / Dexterity"
  },
  {
    "title": "Azul: Summer Pavilion",
    "image": "https://cf.geekdo-images.com/original/img/DytlNE2PAtXlRDv35mzVPEfahgU=/0x0/pic4930887.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "A Game of Thrones: The Card Game (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/LKPXmtLhB_XdzlpS0KBbjCkPWB0=/0x0/pic2783386.jpg",
    "category": "Negotiation,Card Game,Fantasy,Medieval,Collectible Components,Fighting,Novel-based"
  },
  {
    "title": "The Oracle of Delphi",
    "image": "https://cf.geekdo-images.com/original/img/jkM-MuAKuQtkg489B71ySMyM_vE=/0x0/pic3126511.jpg",
    "category": "Ancient,Nautical,Mythology"
  },
  {
    "title": "Joking Hazard",
    "image": "https://cf.geekdo-images.com/original/img/c5ZKHgR0yxXJiyV49GRp-uni2gA=/0x0/pic3218812.jpg",
    "category": "Card Game,Humor,Party Game,Comic Book / Strip,Mature / Adult"
  },
  {
    "title": "Nippon",
    "image": "https://cf.geekdo-images.com/original/img/ahJrNYlzr6vXXCnhmEuUoVuUAfQ=/0x0/pic2683981.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "Family Business",
    "image": "https://cf.geekdo-images.com/original/img/daoSt0uQZL3BHs_wOTXQINGYfFc=/0x0/pic399009.jpg",
    "category": "Card Game,Mafia"
  },
  {
    "title": "On Mars",
    "image": "https://cf.geekdo-images.com/original/img/-e7OTZrhA-7uo66Vg-sStliiU3Q=/0x0/pic4357658.jpg",
    "category": "Economic,Exploration,Science Fiction,City Building,Space Exploration,Territory Building"
  },
  {
    "title": "Barrage",
    "image": "https://cf.geekdo-images.com/original/img/2B-1xoI7rLxznea34Hf518fQHTE=/0x0/pic4336469.png",
    "category": "Economic,Industry / Manufacturing,Environmental"
  },
  {
    "title": "Linko!",
    "image": "https://cf.geekdo-images.com/original/img/IyXh3AEwoBYpbpK0bxuA9hxNQd8=/0x0/pic2342294.jpg",
    "category": "Card Game"
  },
  {
    "title": "Vinci",
    "image": "https://cf.geekdo-images.com/original/img/r0XsQjm_m8NO74tH4MDZl1f6i3c=/0x0/pic168171.jpg",
    "category": "Ancient,Civilization,Territory Building"
  },
  {
    "title": "Indonesia",
    "image": "https://cf.geekdo-images.com/original/img/GoIqNsMgEj-JhrtNwUtsuv6P3AM=/0x0/pic93485.jpg",
    "category": "Economic,Industry / Manufacturing,Transportation"
  },
  {
    "title": "Legacy: The Testament of Duke de Crecy",
    "image": "https://cf.geekdo-images.com/original/img/_VSIJbiNN3H_cCiNo2yfe9xmME4=/0x0/pic2225856.jpg",
    "category": "Economic,Card Game,Age of Reason"
  },
  {
    "title": "Middle-Earth Quest",
    "image": "https://cf.geekdo-images.com/original/img/B7MgXDV7tcI6aqYWdeNRtzId4iw=/0x0/pic717059.jpg",
    "category": "Fantasy,Exploration,Adventure,Novel-based"
  },
  {
    "title": "Fauna",
    "image": "https://cf.geekdo-images.com/original/img/ZZbfemoeEqxct-0DGKFiUH7j3ZE=/0x0/pic1091049.jpg",
    "category": "Trivia,Animals,Educational"
  },
  {
    "title": "Cold War: CIA vs KGB",
    "image": "https://cf.geekdo-images.com/original/img/BRQt-manbUJvV1CVMORcnMLd714=/0x0/pic3021018.jpg",
    "category": "Political,Card Game,Bluffing,Modern Warfare,Spies/Secret Agents"
  },
  {
    "title": "Core Worlds",
    "image": "https://cf.geekdo-images.com/original/img/nVSWU8MO-QnNe7hEvbp2JqPF2ZM=/0x0/pic1063921.jpg",
    "category": "Card Game,Civilization,Science Fiction,Space Exploration"
  },
  {
    "title": "Carpe Diem",
    "image": "https://cf.geekdo-images.com/original/img/rQ6L0Y4SlDmjLv33JSoq-C0aInk=/0x0/pic4308140.jpg",
    "category": "Ancient"
  },
  {
    "title": "The Republic of Rome",
    "image": "https://cf.geekdo-images.com/original/img/d-ea6v2G86uJxjduZ9GOMgE5f2I=/0x0/pic487045.jpg",
    "category": "Negotiation,Political,Ancient,Wargame"
  },
  {
    "title": "Ticket to Ride: The Card Game",
    "image": "https://cf.geekdo-images.com/original/img/t-MKx1tQYO6nRacI3R6g7D2ONn8=/0x0/pic306342.jpg",
    "category": "Card Game,Trains"
  },
  {
    "title": "The Palaces of Carrara",
    "image": "https://cf.geekdo-images.com/original/img/SOlehosSiuacd5Ir6vWutma1JV4=/0x0/pic4398491.jpg",
    "category": "Economic,City Building,Renaissance"
  },
  {
    "title": "Horrified",
    "image": "https://cf.geekdo-images.com/original/img/oGKxUavbTR49i-P6O-WUyBfuRYs=/0x0/pic4848330.jpg",
    "category": "Miniatures,Horror,Movies / TV / Radio theme"
  },
  {
    "title": "Love Letter Premium",
    "image": "https://cf.geekdo-images.com/original/img/YCgP7brquS66LOcg6Bky8lp1kl8=/0x0/pic3124998.jpg",
    "category": "Card Game,Deduction"
  },
  {
    "title": "Wyatt Earp",
    "image": "https://cf.geekdo-images.com/original/img/xTS6haDfYzxFcRtOPyygHr60328=/0x0/pic2241574.jpg",
    "category": "Card Game,American West"
  },
  {
    "title": "Scythe: The Rise of Fenris",
    "image": "https://cf.geekdo-images.com/original/img/A7cbJrXINiWGcAXKQ2HnTZP8afw=/0x0/pic3911078.jpg",
    "category": "Economic,Civilization,Fighting,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Tragedy Looper",
    "image": "https://cf.geekdo-images.com/original/img/5X-G9gh51GmTQqgawQoipQhCnm4=/0x0/pic2046290.png",
    "category": "Bluffing,Deduction,Murder/Mystery"
  },
  {
    "title": "Titan",
    "image": "https://cf.geekdo-images.com/original/img/ZUWswW3_rZxjRf35PFU129pluJk=/0x0/pic1083237.jpg",
    "category": "Fantasy,Wargame"
  },
  {
    "title": "Mykerinos",
    "image": "https://cf.geekdo-images.com/original/img/rJ55oHVZmV7W5ikGEpTl5hIXPeI=/0x0/pic171450.jpg",
    "category": "Exploration"
  },
  {
    "title": "Cosmic Encounter",
    "image": "https://cf.geekdo-images.com/original/img/5koT3dPNbvckjXGwCFBX3TYfLLk=/0x0/pic428608.jpg",
    "category": "Negotiation,Bluffing,Science Fiction"
  },
  {
    "title": "Catan: Seafarers - 5-6 Player Extension",
    "image": "https://cf.geekdo-images.com/original/img/drFSEHqEmDzV6nTL6uB8qXW7sZU=/0x0/pic2420305.jpg",
    "category": "Negotiation,Civilization,Nautical,Exploration,Expansion for Base-game"
  },
  {
    "title": "Guildhall",
    "image": "https://cf.geekdo-images.com/original/img/RGtH5i9rAvWkV_R2irusCCtdXMk=/0x0/pic1448983.jpg",
    "category": "Card Game,Medieval"
  },
  {
    "title": "Haggis",
    "image": "https://cf.geekdo-images.com/original/img/LlHrWl-ucstd7IxQ-Sj_KEsdVNk=/0x0/pic807564.jpg",
    "category": "Card Game"
  },
  {
    "title": "ZERTZ",
    "image": "https://cf.geekdo-images.com/original/img/6EqCDEhOPaPTnUPgxaLjbVeHOr4=/0x0/pic3140639.jpg",
    "category": "Abstract Strategy"
  },
  {
    "title": "To Court the King",
    "image": "https://cf.geekdo-images.com/original/img/fvC59RS2UkfHA1-IyQ-Ao74NRuU=/0x0/pic182447.jpg",
    "category": "Medieval,Dice"
  },
  {
    "title": "Bausack",
    "image": "https://cf.geekdo-images.com/original/img/a-pV7X6FCGix3uczOeX7_ZKAEmg=/0x0/pic306631.jpg",
    "category": "Party Game,Action / Dexterity"
  },
  {
    "title": "Warrior Knights",
    "image": "https://cf.geekdo-images.com/original/img/jo9KUPQW06xPLxmG5ch2qgpxTkg=/0x0/pic106710.jpg",
    "category": "Negotiation,Political,Medieval,Wargame"
  },
  {
    "title": "Black Stories",
    "image": "https://cf.geekdo-images.com/original/img/n9cPOch78fd3CaBEQWsd2u21hxk=/0x0/pic208686.jpg",
    "category": "Card Game,Humor,Horror,Deduction,Party Game,Murder/Mystery"
  },
  {
    "title": "Mississippi Queen",
    "image": "https://cf.geekdo-images.com/original/img/BuNtFytJ2ffqymt0IZlnLrISSoU=/0x0/pic174176.jpg",
    "category": "Nautical,Racing,Transportation"
  },
  {
    "title": "Blokus 3D",
    "image": "https://cf.geekdo-images.com/original/img/q_vq40LmMGhbsXFS66wgTIW_F3A=/0x0/pic1478957.jpg",
    "category": "Abstract Strategy,Territory Building"
  },
  {
    "title": "Carcassonne: King & Scout",
    "image": "https://cf.geekdo-images.com/original/img/si9BkQZpSSoiXlgoq4_n5zd71z8=/0x0/pic137041.jpg",
    "category": "Medieval,City Building,Territory Building,Expansion for Base-game,Prehistoric"
  },
  {
    "title": "Nightfall",
    "image": "https://cf.geekdo-images.com/original/img/lhHuI8dTJtMYnpBNpO8lsSWustw=/0x0/pic873009.jpg",
    "category": "Card Game,Fantasy,Fighting,Horror"
  },
  {
    "title": "Tumblin-Dice",
    "image": "https://cf.geekdo-images.com/original/img/SHg0AodhWq1rAJQcgXmhjoXHbW8=/0x0/pic2635002.jpg",
    "category": "Dice,Party Game,Action / Dexterity"
  },
  {
    "title": "Hammer of the Scots",
    "image": "https://cf.geekdo-images.com/original/img/L-kXt4dr2ITJiujpONnxR6wiUjQ=/0x0/pic623710.jpg",
    "category": "Medieval,Wargame"
  },
  {
    "title": "Candy Land",
    "image": "https://cf.geekdo-images.com/original/img/me1MkybeUpuy8Fdo9dZEcMRoLC8=/0x0/pic3542482.jpg",
    "category": "Racing,Children's Game"
  },
  {
    "title": "Arkham Horror (Third Edition)",
    "image": "https://cf.geekdo-images.com/original/img/WX2GV0GeMzbPNP8xkkPz47fj2_o=/0x0/pic4582151.jpg",
    "category": "Economic,Civilization,City Building,Industry / Manufacturing,Transportation"
  },
  {
    "title": "Conan",
    "image": "https://cf.geekdo-images.com/original/img/lExXp5q_sINKqprH4xVdGCOhRWM=/0x0/pic3118623.jpg",
    "category": "Fantasy,Fighting,Miniatures,Adventure,Novel-based"
  },
  {
    "title": "Tinners' Trail",
    "image": "https://cf.geekdo-images.com/original/img/xcIvf9_1LQCsKfULMW4luNs6u8Q=/0x0/pic464133.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "The Builders: Middle Ages",
    "image": "https://cf.geekdo-images.com/original/img/fvG1F29E616NixXrgLbqHX7RSwc=/0x0/pic1987602.jpg",
    "category": "Medieval,City Building"
  },
  {
    "title": "Babel",
    "image": "https://cf.geekdo-images.com/original/img/mdQHCnny9cjT67r5El7FwpvEJA0=/0x0/pic1629288.jpg",
    "category": "Card Game,Ancient,City Building"
  },
  {
    "title": "Nuns on the Run",
    "image": "https://cf.geekdo-images.com/original/img/6qK8pGGBSyp27oyN1Q46acFoBEA=/0x0/pic649087.jpg",
    "category": "Bluffing,Humor,Deduction,Religious"
  },
  {
    "title": "Turn the Tide",
    "image": "https://cf.geekdo-images.com/original/img/ra7xedXb6Bg7s-4egkDuPkxMLsQ=/0x0/pic725351.jpg",
    "category": "Card Game"
  },
  {
    "title": "Friday the 13th",
    "image": "https://cf.geekdo-images.com/original/img/GkCULqHBcC8V7vHcIrb_C1rASaQ=/0x0/pic2032115.jpg",
    "category": "Negotiation"
  },
  {
    "title": "Meeple Circus",
    "image": "https://cf.geekdo-images.com/original/img/6WfjxxwWHAhFe58Tu6vcgSuJz1Q=/0x0/pic3895016.jpg",
    "category": "Animals,Action / Dexterity"
  },
  {
    "title": "Happy Salmon",
    "image": "https://cf.geekdo-images.com/original/img/3tGsZH7ZvxEXyc0IYY_gWwERsS8=/0x0/pic2913980.png",
    "category": "Party Game,Real-time,Animals,Children's Game"
  },
  {
    "title": "PARKS",
    "image": "https://cf.geekdo-images.com/original/img/D7SJzw2Q-ztdVbFSkUlD5nTSLI4=/0x0/pic4852372.jpg",
    "category": "Travel,Adventure,Animals,Environmental"
  },
  {
    "title": "Madeira",
    "image": "https://cf.geekdo-images.com/original/img/AiDM7gE739RpbJrelj4_fKDkTjg=/0x0/pic1762708.jpg",
    "category": ""
  },
  {
    "title": "Valeria: Card Kingdoms",
    "image": "https://cf.geekdo-images.com/original/img/kRK_p3Frl9_1xvJUAfSxqUFRzvI=/0x0/pic2919073.jpg",
    "category": "Card Game,Fantasy,Dice"
  },
  {
    "title": "Black Orchestra",
    "image": "https://cf.geekdo-images.com/original/img/933bZ7m776Clv0y3s6crkMH5KGI=/0x0/pic4025667.jpg",
    "category": "World War II,Spies/Secret Agents"
  },
  {
    "title": "Tide of Iron",
    "image": "https://cf.geekdo-images.com/original/img/zNWyPk8bE7wNaMe79w5wDb5LdcU=/0x0/pic140479.jpg",
    "category": "Miniatures,Wargame,World War II"
  },
  {
    "title": "Hostage Negotiator",
    "image": "https://cf.geekdo-images.com/original/img/UOjI_Z6hDsRRbcwci-u4UlayiXo=/0x0/pic2043737.jpg",
    "category": "Card Game,Dice"
  },
  {
    "title": "The Grimm Forest",
    "image": "https://cf.geekdo-images.com/original/img/BJfJgw81r1ztbpzKZZn6v3R9NZk=/0x0/pic3388680.jpg",
    "category": "Fantasy,Animals"
  },
  {
    "title": "Ticket to Ride: New York",
    "image": "https://cf.geekdo-images.com/original/img/HUQ8GFg65Lm7KIi9YDhJpKCEeX8=/0x0/pic4132194.jpg",
    "category": "Trains"
  },
  {
    "title": "Struggle of Empires",
    "image": "https://cf.geekdo-images.com/original/img/nQOUT90uTbkdFeAVD0Qeaq8cchk=/0x0/pic1367165.jpg",
    "category": "Political,Civilization,Fighting,Territory Building,Age of Reason"
  },
  {
    "title": "Freedom: The Underground Railroad",
    "image": "https://cf.geekdo-images.com/original/img/dfJ320qb8KiDkbuuW5FG1rcuJTY=/0x0/pic1478723.jpg",
    "category": "Economic,Political,American Civil War,Educational"
  },
  {
    "title": "The Pursuit of Happiness",
    "image": "https://cf.geekdo-images.com/original/img/day1KA4tXuS4JIOwIihUAei-i2I=/0x0/pic2853682.jpg",
    "category": "Economic"
  },
  {
    "title": "Yggdrasil",
    "image": "https://cf.geekdo-images.com/original/img/Qx-WkpY8LfPBzpPEOepLb0Whl0A=/0x0/pic4314491.jpg",
    "category": "Mythology"
  },
  {
    "title": "Android",
    "image": "https://cf.geekdo-images.com/original/img/HFF0ANdy7FCHkMmfbsp5oWAvhd0=/0x0/pic400196.jpg",
    "category": "Science Fiction,Murder/Mystery"
  },
  {
    "title": "Lost Cities: The Board Game",
    "image": "https://cf.geekdo-images.com/original/img/Q1CXy-F80iALu3tnuo1eOK1_mBw=/0x0/pic4597093.jpg",
    "category": "Exploration,Adventure"
  },
  {
    "title": "Vinhos Deluxe Edition",
    "image": "https://cf.geekdo-images.com/original/img/KZhxG9UxjsDnVhI4zlmPPVKe2jI=/0x0/pic2649446.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "Vindication",
    "image": "https://cf.geekdo-images.com/original/img/IaeMjblsJR_kI9lP3M7LWTcZnTE=/0x0/pic4101638.jpg",
    "category": "Fantasy"
  },
  {
    "title": "Newton",
    "image": "https://cf.geekdo-images.com/original/img/hYhscKRvn441Tebbv4OK6_aBtTs=/0x0/pic4058665.jpg",
    "category": "Travel,Age of Reason"
  },
  {
    "title": "Ultimate Werewolf: Ultimate Edition",
    "image": "https://cf.geekdo-images.com/original/img/NDDtD51tQhfqi-9-dmcU9KGN_XY=/0x0/pic1849390.jpg",
    "category": "Negotiation,Card Game,Bluffing,Horror,Deduction,Party Game,Murder/Mystery"
  },
  {
    "title": "Massive Darkness",
    "image": "https://cf.geekdo-images.com/original/img/H5Qlr-yK1ZqU3TpwTkM0Vaxwlfw=/0x0/pic3687923.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure"
  },
  {
    "title": "Twister",
    "image": "https://cf.geekdo-images.com/original/img/Ag_Ys8_ZJOSUkndCYBM4R7f_Iec=/0x0/pic196428.jpg",
    "category": "Party Game,Children's Game,Action / Dexterity"
  },
  {
    "title": "Millennium Blades",
    "image": "https://cf.geekdo-images.com/original/img/TWnjacQUXsFasgimixAHI8dxqxg=/0x0/pic2468179.jpg",
    "category": "Card Game,Real-time"
  },
  {
    "title": "Rialto",
    "image": "https://cf.geekdo-images.com/original/img/MrP0CEcFPCZWIUW2y-8AHFW3zQk=/0x0/pic1504549.jpg",
    "category": "Political,Renaissance"
  },
  {
    "title": "Shear Panic",
    "image": "https://cf.geekdo-images.com/original/img/iO8494RGsHOOMZhQwBwvwQLn5gk=/0x0/pic436963.jpg",
    "category": "Animals"
  },
  {
    "title": "Antiquity",
    "image": "https://cf.geekdo-images.com/original/img/iqyexz_jg-L3RxygQ5x--QcIlZA=/0x0/pic3731052.png",
    "category": "Economic,Medieval,Civilization,City Building,Environmental"
  },
  {
    "title": "The Duke",
    "image": "https://cf.geekdo-images.com/original/img/zh066RK2KgO_6WisVj5VSbSup0k=/0x0/pic1688903.jpg",
    "category": "Abstract Strategy,Medieval"
  },
  {
    "title": "Shakespeare",
    "image": "https://cf.geekdo-images.com/original/img/Gzam5n-i-Wr6nH1IKj4LKuWuvws=/0x0/pic2583214.jpg",
    "category": "Renaissance"
  },
  {
    "title": "Hearts",
    "image": "https://cf.geekdo-images.com/original/img/IAkow1ZbU9ldYXYaRs9i-RoxMMg=/0x0/pic191579.jpg",
    "category": "Card Game,Movies / TV / Radio theme"
  },
  {
    "title": "Marvel Dice Masters: Uncanny X-Men",
    "image": "https://cf.geekdo-images.com/original/img/zo1losgfHXuVLV2jTMkkRB_kP0E=/0x0/pic2338307.jpg",
    "category": "Collectible Components,Dice,Fighting,Comic Book / Strip"
  },
  {
    "title": "Shipyard",
    "image": "https://cf.geekdo-images.com/original/img/i313pRyvC3Wn_6jY2mtgujMGsMM=/0x0/pic1809442.jpg",
    "category": "Economic,Nautical,Industry / Manufacturing"
  },
  {
    "title": "CO2",
    "image": "https://cf.geekdo-images.com/original/img/tcs6BRqLFMbN1tEd-3MGaETdVaU=/0x0/pic1350204.jpg",
    "category": "Economic,Industry / Manufacturing,Environmental"
  },
  {
    "title": "Timeline: Diversity",
    "image": "https://cf.geekdo-images.com/original/img/raS_NSEHY2NSuVSRKnV9qxzYtiY=/0x0/pic1724658.jpg",
    "category": "Card Game,Party Game,Trivia,Educational"
  },
  {
    "title": "Munchkin Quest",
    "image": "https://cf.geekdo-images.com/original/img/KwDvaasVSGRzWeUezAzH0a46bXA=/0x0/pic294853.jpg",
    "category": "Fantasy,Exploration,Fighting,Adventure,Humor"
  },
  {
    "title": "Escape from the Aliens in Outer Space",
    "image": "https://cf.geekdo-images.com/original/img/PO5bvfkKDURjfen6mt1zOnoyxvg=/0x0/pic2792336.png",
    "category": "Science Fiction,Horror,Party Game"
  },
  {
    "title": "Twice As Clever",
    "image": "https://cf.geekdo-images.com/original/img/yY6OWHMm9kiiVTatuu3eprYKSmM=/0x0/pic4519813.jpg",
    "category": "Dice"
  },
  {
    "title": "Via Nebula",
    "image": "https://cf.geekdo-images.com/original/img/7COcSNU0RuDc5t8Ijg08ltI_mWE=/0x0/pic2839651.png",
    "category": "Territory Building,Transportation"
  },
  {
    "title": "Odin's Ravens",
    "image": "https://cf.geekdo-images.com/original/img/xQ3Hc42nFCcCaydk-e7QymNQmvE=/0x0/pic63287.jpg",
    "category": "Card Game,Mythology,Racing,Animals"
  },
  {
    "title": "Witch's Brew",
    "image": "https://cf.geekdo-images.com/original/img/Vdcu4iDhbgWdxbHycjl9RD0P5yQ=/0x0/pic365958.jpg",
    "category": "Card Game,Fantasy,Bluffing"
  },
  {
    "title": "Dungeon!",
    "image": "https://cf.geekdo-images.com/original/img/X9Q8mOqv5BHNWhogsAeYbr2_OIM=/0x0/pic1998857.jpg",
    "category": "Fantasy,Exploration,Fighting,Adventure"
  },
  {
    "title": "Space Hulk",
    "image": "https://cf.geekdo-images.com/original/img/Hn_KCyOGV6czn0vwcjkmjkK1aH4=/0x0/pic1411446.jpg",
    "category": "Science Fiction,Fighting,Miniatures"
  },
  {
    "title": "Smash Up: Science Fiction Double Feature",
    "image": "https://cf.geekdo-images.com/original/img/ubxYsHJ4yw5Pbb7chP8YWp3q--Q=/0x0/pic1857661.jpg",
    "category": "Card Game,Fantasy,Mythology,Science Fiction,Humor,Horror,Prehistoric,Spies/Secret Agents"
  },
  {
    "title": "Terra Mystica: Fire & Ice",
    "image": "https://cf.geekdo-images.com/original/img/A7bqS9GlQUpZ1eoMGID0bbIvDN0=/0x0/pic2227159.png",
    "category": "Economic,Fantasy,Civilization,Territory Building,Expansion for Base-game"
  },
  {
    "title": "Sorry! Sliders",
    "image": "https://cf.geekdo-images.com/original/img/6F8TS4wb29YqIfGKzwFRANRrOXI=/0x0/pic358058.jpg",
    "category": "Children's Game,Action / Dexterity"
  },
  {
    "title": "Stuffed Fables",
    "image": "https://cf.geekdo-images.com/original/img/_qm1FBu5oN7XcONKTjUR1fz7ja8=/0x0/pic3708878.jpg",
    "category": "Adventure,Animals"
  },
  {
    "title": "Eclipse: Rise of the Ancients",
    "image": "https://cf.geekdo-images.com/original/img/3IJB2xUEyQnZT_24N4wo8dwL-PQ=/0x0/pic1340277.jpg",
    "category": "Civilization,Science Fiction,Fighting,Space Exploration,Expansion for Base-game"
  },
  {
    "title": "Power Grid Deluxe: Europe/North America",
    "image": "https://cf.geekdo-images.com/original/img/PTaOBy_4sTD_5FA60rINuFnFIW0=/0x0/pic2056160.jpg",
    "category": "Economic,Industry / Manufacturing"
  },
  {
    "title": "Sid Meier's Civilization: A New Dawn",
    "image": "https://cf.geekdo-images.com/original/img/wBSpaEuKZdVZoCtrAqCIpJBBpOw=/0x0/pic3764168.jpg",
    "category": "Civilization"
  },
  {
    "title": "Cave Troll",
    "image": "https://cf.geekdo-images.com/original/img/QpiUAKR77kEJ-M-qy_l9HcSsdeA=/0x0/pic2497113.jpg",
    "category": "Fantasy"
  },
  {
    "title": "Catan: Cities & Knights - 5-6 Player Extension",
    "image": "https://cf.geekdo-images.com/original/img/bcajEbfOtRCC9o9m_kJG7-DX57Y=/0x0/pic2420316.jpg",
    "category": "Negotiation,Medieval,Expansion for Base-game"
  },
  {
    "title": "When I Dream",
    "image": "https://cf.geekdo-images.com/original/img/8gezS6pP6rV7mhdbZd7lwj7pI0I=/0x0/pic3747128.png",
    "category": "Deduction,Word Game,Party Game,Real-time"
  },
  {
    "title": "Fireball Island: The Curse of Vul-Kar",
    "image": "https://cf.geekdo-images.com/original/img/oFIvBicPmLGmUsVCt6eXwXciQMc=/0x0/pic3986681.jpg",
    "category": "Travel,Adventure,Action / Dexterity"
  },
  {
    "title": "1775: Rebellion",
    "image": "https://cf.geekdo-images.com/original/img/0sTr58RgnbJYwJRjH_tDhiW3aWk=/0x0/pic1386705.jpg",
    "category": "Wargame,Age of Reason,Educational,American Indian Wars,American Revolutionary War"
  },
  {
    "title": "You're Bluffing!",
    "image": "https://cf.geekdo-images.com/original/img/6JpL03TOx2lAbAapS12kGjgzN8Y=/0x0/pic1068602.jpg",
    "category": "Card Game,Bluffing,Humor,Animals"
  },
  {
    "title": "London (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/4kFY-uXI0AnSLE4hKVJOJXc8ynI=/0x0/pic3693999.jpg",
    "category": "Card Game,City Building"
  },
  {
    "title": "Sherlock Holmes Consulting Detective: Jack the Ripper & West End Adventures",
    "image": "https://cf.geekdo-images.com/original/img/aMSijyTnYi1Y_3wHtMCfn7Cftho=/0x0/pic3238299.jpg",
    "category": "Novel-based,Deduction,Puzzle,Murder/Mystery,Spies/Secret Agents,Post-Napoleonic"
  },
  {
    "title": "Android: Infiltration",
    "image": "https://cf.geekdo-images.com/original/img/U5dyO7nb5MicMnDPQO_GhPbTQys=/0x0/pic1207030.jpg",
    "category": "Card Game,Exploration,Science Fiction,Spies/Secret Agents"
  },
  {
    "title": "Merchant of Venus (Second Edition)",
    "image": "https://cf.geekdo-images.com/original/img/60c36SwP57lM9yw7SWnWS_YcFBc=/0x0/pic1134632.jpg",
    "category": "Economic,Exploration,Science Fiction,Space Exploration,Transportation"
  },
  {
    "title": "Coconuts",
    "image": "https://cf.geekdo-images.com/original/img/5yzkmVRC9ctDmcGtoedfduWPdOA=/0x0/pic2777466.png",
    "category": "Animals,Children's Game,Action / Dexterity"
  },
  {
    "title": "Arkham Horror: Curse of the Dark Pharaoh Expansion",
    "image": "https://cf.geekdo-images.com/original/img/X13zRfP0S2RwlFjdHoBvVw0v-nE=/0x0/pic134217.jpg",
    "category": "Science Fiction,Fighting,Adventure,Horror,Novel-based,Expansion for Base-game"
  },
  {
    "title": "Chutes and Ladders",
    "image": "https://cf.geekdo-images.com/original/img/oF7J9WH63OEe5GU3X922ljeRS2Y=/0x0/pic4542661.jpg",
    "category": "Dice,Movies / TV / Radio theme,Animals,Children's Game"
  },
  {
    "title": "Battle Sheep",
    "image": "https://cf.geekdo-images.com/original/img/mChWG7S6cqkr3jG7R5NZEJS6dqw=/0x0/pic1887253.jpg",
    "category": "Abstract Strategy,Animals"
  },
  {
    "title": "Here I Stand",
    "image": "https://cf.geekdo-images.com/original/img/mXAgfJ2SxmUj4OxrfytCZ59Q9GM=/0x0/pic353047.jpg",
    "category": "Negotiation,Political,Wargame,Renaissance,Religious"
  },
  {
    "title": "13 Days: The Cuban Missile Crisis",
    "image": "https://cf.geekdo-images.com/original/img/Tj6FlhS0XIQMP1C5ly9o4hvQj6E=/0x0/pic2935653.jpg",
    "category": "Political,Bluffing,Wargame,Modern Warfare"
  },
  {
    "title": "Tales & Games: The Hare & the Tortoise",
    "image": "https://cf.geekdo-images.com/original/img/5422zjzXNGLj5b_tiM23TneqPWM=/0x0/pic2688992.jpg",
    "category": "Card Game,Racing,Novel-based,Animals,Children's Game"
  },
  {
    "title": "Fugitive",
    "image": "https://cf.geekdo-images.com/original/img/k6c_XNW0gY8U1kmy_TU_iVCLVjE=/0x0/pic3481216.png",
    "category": "Card Game,Bluffing,Deduction,Spies/Secret Agents,Number"
  },
  {
    "title": "Wallenstein",
    "image": "https://cf.geekdo-images.com/original/img/ocorm2MOhZsk29sXpLkN6KhZC7k=/0x0/pic358092.jpg",
    "category": "Economic,Territory Building,Pike and Shot"
  },
  {
    "title": "Risk: Star Wars Edition",
    "image": "https://cf.geekdo-images.com/original/img/oIcifOXWq9a2CszTI-YRbOedobY=/0x0/pic4915114.jpg",
    "category": "Science Fiction,Wargame,Movies / TV / Radio theme"
  },
  {
    "title": "Dominion: Black Market Promo Card",
    "image": "https://cf.geekdo-images.com/original/img/6Zi9cHctmJ97yuRh__oGhEnn_Oo=/0x0/pic463006.jpg",
    "category": "Card Game,Medieval,Expansion for Base-game"
  },
  {
    "title": "I'm the Boss!",
    "image": "https://cf.geekdo-images.com/original/img/y7-rGnRszBAjnX1oZYALsIL-f7o=/0x0/pic130807.jpg",
    "category": "Negotiation"
  },
  {
    "title": "Panamax",
    "image": "https://cf.geekdo-images.com/original/img/a4Exa3SkqUOerDfkGPUoyWIzgAU=/0x0/pic1786212.png",
    "category": "Economic,Nautical,Transportation"
  },
  {
    "title": "Flip City",
    "image": "https://cf.geekdo-images.com/original/img/p4mYlvN7M9g73rtw_Yai2DOpWZY=/0x0/pic2499620.png",
    "category": "Card Game,City Building"
  },
  {
    "title": "7 Wonders: Babel",
    "image": "https://cf.geekdo-images.com/original/img/MfusbtqqsTS2j4YQ9DJLkjysH1c=/0x0/pic2286085.jpg",
    "category": "Card Game,Ancient,Civilization,City Building,Expansion for Base-game"
  },
  {
    "title": "Battlestar Galactica: The Board Game - Exodus Expansion",
    "image": "https://cf.geekdo-images.com/original/img/LEceoxPhjR5hN9pqK-J4skHq8_I=/0x0/pic834119.jpg",
    "category": "Political,Bluffing,Science Fiction,Space Exploration,Deduction,Movies / TV / Radio theme,Expansion for Base-game,Spies/Secret Agents"
  },
  {
    "title": "Tiny Epic Western",
    "image": "https://cf.geekdo-images.com/original/img/uC1FpjYO1MtBESipPlmUcvgctZ4=/0x0/pic2795243.jpg",
    "category": "Bluffing,American West,Industry / Manufacturing"
  },
  {
    "title": "Advanced Squad Leader",
    "image": "https://cf.geekdo-images.com/original/img/7N2ECOs0_iuYnBthR0HzrJcjcIs=/0x0/pic771969.jpg",
    "category": "Wargame,World War II"
  },
  {
    "title": "Dice Throne: Season One",
    "image": "https://cf.geekdo-images.com/original/img/F9dqwWarGMc1nXIBqxs3FlipqTM=/0x0/pic3962955.jpg",
    "category": "Card Game,Fantasy,Dice,Fighting"
  },
  {
    "title": "Fortune and Glory: The Cliffhanger Game",
    "image": "https://cf.geekdo-images.com/original/img/t2lnoupCxldi30Y64lo3INvyyWw=/0x0/pic946736.jpg",
    "category": "Miniatures,Adventure"
  },
  {
    "title": "Homesteaders",
    "image": "https://cf.geekdo-images.com/original/img/tpgUZ893vVhwBFAeCGVn7bDREkM=/0x0/pic1113708.jpg",
    "category": "Economic,American West,City Building"
  },
  {
    "title": "Power Grid: The New Power Plant Cards",
    "image": "https://cf.geekdo-images.com/original/img/FdKvGtGeRZ3rlUBeL9ZoqizMBQk=/0x0/pic255417.jpg",
    "category": "Economic,Industry / Manufacturing,Expansion for Base-game"
  },
  {
    "title": "Mafia de Cuba",
    "image": "https://cf.geekdo-images.com/original/img/IEs6eQ3fnK3y_syC2vgVSjY3aIU=/0x0/pic2519675.jpg",
    "category": "Bluffing,Deduction,Party Game,Mafia"
  },
  {
    "title": "Mage Knight Board Game: The Lost Legion Expansion",
    "image": "https://cf.geekdo-images.com/original/img/VStnQwDTwOYwK_KgxrxAcPuNtxI=/0x0/pic1421682.jpg",
    "category": "Fantasy,Exploration,Fighting,Miniatures,Adventure,Expansion for Base-game"
  },
  {
    "title": "Baseball Highlights: 2045",
    "image": "https://cf.geekdo-images.com/original/img/epMoghF8R_BraXj-IMUZupg0Jh8=/0x0/pic2262580.png",
    "category": "Card Game,Science Fiction,Sports"
  },
  {
    "title": "Factory Fun",
    "image": "https://cf.geekdo-images.com/original/img/c4bBs2aWEiaX2WaXANMenft4H48=/0x0/pic802170.jpg",
    "category": "Puzzle,Real-time,Industry / Manufacturing"
  },
  {
    "title": "Lifeboats",
    "image": "https://cf.geekdo-images.com/original/img/CyT6AYwanmiOR5IJbZQxMmVNxEs=/0x0/pic166390.jpg",
    "category": "Negotiation,Nautical,Party Game"
  },
  {
    "title": "Terraforming Mars: Colonies",
    "image": "https://cf.geekdo-images.com/original/img/k_pH0g_74PoHMbHOyIe7a-VNxRs=/0x0/pic4193099.jpg",
    "category": "Economic,Science Fiction,Territory Building,Industry / Manufacturing,Expansion for Base-game,Environmental"
  },
  {
    "title": "Medieval Academy",
    "image": "https://cf.geekdo-images.com/original/img/Qw0_okE8fnc-Ex9p1BfjeFbWKzg=/0x0/pic2468716.jpg",
    "category": "Medieval"
  },
  {
    "title": "Click Clack Lumberjack",
    "image": "https://cf.geekdo-images.com/original/img/aI4MseTFZXiumtrTJlZ3VSw723Y=/0x0/pic4613614.jpg",
    "category": "Children's Game,Action / Dexterity"
  },
  {
    "title": "Race for the Galaxy: The Brink of War",
    "image": "https://cf.geekdo-images.com/original/img/cqwbEzM6Fs0uqB283rIDeJAGulI=/0x0/pic977175.jpg",
    "category": "Economic,Card Game,Civilization,Science Fiction,Space Exploration,Expansion for Base-game"
  },
  {
    "title": "Elder Sign: Unseen Forces",
    "image": "https://cf.geekdo-images.com/original/img/xF5xKnMqj1OLkJyuCRsOm9c2RJM=/0x0/pic1639617.jpg",
    "category": "Card Game,Fantasy,Dice,Fighting,Adventure,Horror,Novel-based,Expansion for Base-game"
  },
  {
    "title": "Battle Cry",
    "image": "https://cf.geekdo-images.com/original/img/Kka6gXQqPvVlB5VzCy2dLHShCVA=/0x0/pic21060.jpg",
    "category": "Wargame,American Civil War"
  },
  {
    "title": "Operation",
    "image": "https://cf.geekdo-images.com/original/img/lyz4JhfmZgOOOFeD9VGfJXRP-pE=/0x0/pic153389.jpg",
    "category": "Children's Game,Action / Dexterity,Medical"
  },
  {
    "title": "Akrotiri",
    "image": "https://cf.geekdo-images.com/original/img/yToX8khU9akPfsESn--F-Pidx0U=/0x0/pic3539688.jpg",
    "category": "Economic,Civilization,Exploration"
  },
  {
    "title": "Yedo",
    "image": "https://cf.geekdo-images.com/original/img/jbeI1OOMIFeXb3jtMNNjGttLKNw=/0x0/pic1633240.jpg",
    "category": "Medieval"
  },
  {
    "title": "Leonardo da Vinci",
    "image": "https://cf.geekdo-images.com/original/img/OoDCD4_SCv3HZthQPO3nBypWmtA=/0x0/pic143408.jpg",
    "category": "Renaissance"
  },
  {
    "title": "D-Day Dice",
    "image": "https://cf.geekdo-images.com/original/img/uPHGt_vWNK7p_6u5ET0DeQWMK9o=/0x0/pic1206256.jpg",
    "category": "Dice,Wargame,World War II"
  },
  {
    "title": "Carolus Magnus",
    "image": "https://cf.geekdo-images.com/original/img/6YzB7g8KDhZe7YT6otouMURFaGU=/0x0/pic130679.jpg",
    "category": "Abstract Strategy,Medieval,Territory Building"
  },
  {
    "title": "Power Grid: The First Sparks",
    "image": "https://cf.geekdo-images.com/original/img/pkQvgLAV-ckdmaT12Mggi62mr80=/0x0/pic1102960.jpg",
    "category": "Economic,Animals,Prehistoric"
  },
  {
    "title": "Timeline: Discoveries",
    "image": "https://cf.geekdo-images.com/original/img/ignMlJ1PyDy_aKYFhhnF6Jfim-0=/0x0/pic1724655.jpg",
    "category": "Card Game,Trivia,Educational"
  },
  {
    "title": "Krosmaster: Arena",
    "image": "https://cf.geekdo-images.com/original/img/dx-5QMPEpxiBFqYVWV9OrrTLgAY=/0x0/pic1573355.png",
    "category": ""
  },
  {
    "title": "Stronghold",
    "image": "https://cf.geekdo-images.com/original/img/vJ-kNOeB81Kpalbj8Cryo4E_60I=/0x0/pic570478.jpg",
    "category": "Fantasy,Medieval,Fighting"
  },
  {
    "title": "Between Two Castles of Mad King Ludwig",
    "image": "https://cf.geekdo-images.com/original/img/0L5aH6FUlQNakSUmT6ExYojBO0k=/0x0/pic4285717.jpg",
    "category": ""
  },
  {
    "title": "Blood Bowl: Living Rulebook",
    "image": "https://cf.geekdo-images.com/original/img/CTIhE7TF6F459n8vWtp0LPsPHe4=/0x0/pic66287.jpg",
    "category": "Fantasy,Collectible Components,Fighting,Miniatures,Expansion for Base-game,Sports"
  },
  {
    "title": "Frank's Zoo",
    "image": "https://cf.geekdo-images.com/original/img/djR4DEWDRmvh5AFxJkrrPvPvkZo=/0x0/pic197395.jpg",
    "category": "Card Game,Animals"
  },
  {
    "title": "The Little Prince: Make Me a Planet",
    "image": "https://cf.geekdo-images.com/original/img/2crLFZyx1ruz5OIoFWMcCk2yhGM=/0x0/pic3083205.jpg",
    "category": "Novel-based,Territory Building"
  },
  {
    "title": "BattleTech",
    "image": "https://cf.geekdo-images.com/original/img/OSPlCJWySJCSMe5WltGQBKoTkmY=/0x0/pic1748230.jpg",
    "category": "Science Fiction,Fighting,Miniatures,Wargame"
  },
  {
    "title": "Mottainai",
    "image": "https://cf.geekdo-images.com/original/img/RWI7_orMS0UJYSqdiWVVUsWLqmI=/0x0/pic2688214.jpg",
    "category": "Animals,Children's Game,Action / Dexterity"
  },
  {
    "title": "Unfair",
    "image": "https://cf.geekdo-images.com/original/img/1z-EEQiwA1GiO0sWZTDqBGe4My4=/0x0/pic4717882.jpg",
    "category": "Economic,Card Game,Print & Play,City Building"
  },
  {
    "title": "Web of Power",
    "image": "https://cf.geekdo-images.com/original/img/-gNOb1Z3dA9NeAR8ApPxPk8H9Wc=/0x0/pic209855.jpg",
    "category": "Medieval,Territory Building"
  },
  {
    "title": "Ascension: Storm of Souls",
    "image": "https://cf.geekdo-images.com/original/img/WWFAdsQ_bgC5jqChoEZAyjFLz7s=/0x0/pic1149059.jpg",
    "category": "Card Game,Fantasy"
  },
  {
    "title": "Risk: The Lord of the Rings Trilogy Edition",
    "image": "https://cf.geekdo-images.com/original/img/O3d8CTTkn5hzJMgiUEQ-UNjrEQk=/0x0/pic4923100.jpg",
    "category": "Fantasy,Wargame,Adventure,Novel-based,Territory Building,Movies / TV / Radio theme"
  },
  {
    "title": "Skull King",
    "image": "https://cf.geekdo-images.com/original/img/hAEWRUA-wWd1u7IlSF84F3w0dfk=/0x0/pic4673858.png",
    "category": "Card Game,Nautical,Pirates"
  },
  {
    "title": "Aton",
    "image": "https://cf.geekdo-images.com/original/img/UAo-N6TDtPvHwunkZSc_A7aRsO0=/0x0/pic292166.jpg",
    "category": "Ancient"
  },
  {
    "title": "Nusfjord",
    "image": "https://cf.geekdo-images.com/original/img/-IF49o4vSZVa-o_6kUq5cilr55M=/0x0/pic3729070.jpg",
    "category": "Economic"
  },
  {
    "title": "Java",
    "image": "https://cf.geekdo-images.com/original/img/MD5zqY_jD7tsk-H-hJVflm0oers=/0x0/pic427860.jpg",
    "category": "City Building"
  },
  {
    "title": "Dale of Merchants",
    "image": "https://cf.geekdo-images.com/original/img/KrbV346OeTAI8S-yagpVIRnGjz0=/0x0/pic2772192.jpg",
    "category": "Card Game,Fantasy,Animals"
  },
  {
    "title": "Mystery Rummy: Jack the Ripper",
    "image": "https://cf.geekdo-images.com/original/img/tfTyq2650PaCX8hrfldGngj2jdU=/0x0/pic592086.jpg",
    "category": "Card Game,Murder/Mystery"
  },
  {
    "title": "Mare Nostrum: Empires",
    "image": "https://cf.geekdo-images.com/original/img/ALoQOAuFLsHAmD_jiMY0uR_8fTk=/0x0/pic2648963.jpg",
    "category": "Economic,Ancient,Civilization,Mythology,Wargame"
  },
  {
    "title": "Munchkin 4: The Need for Steed",
    "image": "https://cf.geekdo-images.com/original/img/pVfUE7y3BYME--FHaoMr2IS0_GY=/0x0/pic2428686.jpg",
    "category": "Card Game,Fantasy,Fighting,Humor,Expansion for Base-game"
  },
  {
    "title": "Ligretto",
    "image": "https://cf.geekdo-images.com/original/img/q0r9hadDnQ5tahWkMjTYrnz_B1Q=/0x0/pic1306961.jpg",
    "category": "Card Game,Real-time"
  },
  {
    "title": "Unstable Unicorns",
    "image": "https://cf.geekdo-images.com/original/img/JXjU3CrzgTFZdiY6fP4zO1YPha0=/0x0/pic3912914.jpg",
    "category": "Card Game,Humor,Party Game"
  },
  {
    "title": "Outlive",
    "image": "https://cf.geekdo-images.com/original/img/EoUj2kDYhwCKDl7NLaX4gZwrvuA=/0x0/pic3021719.jpg",
    "category": "Science Fiction"
  }
]

async function seedBoardGames() {
  await db.getCollection('boardGames').insertMany(boardGames);
  console.log("Board Games Seeded");
}

seedBoardGames();
