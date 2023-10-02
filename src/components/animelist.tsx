import React, { useEffect, useState } from 'react'
import CardComponent from './card';
import axios from 'axios';

const AnimelistComponent = () => {

    const [response, setResponse] = useState(null);
    const BASE_URL = "https://anime-db.p.rapidapi.com";

    const data:any = {
        "data": [
            {
                "_id": "9135",
                "title": "Fullmetal Alchemist: The Sacred Star of Milos",
                "alternativeTitles": [
                    "Fullmetal Alchemist: Milos no Seinaru Hoshi",
                    "Fullmetal Alchemist Movie 2",
                    "Hagane no Renkinjutsushi Movie 2",
                    "FMA Movie 2",
                    "劇場版 鋼の錬金術師 嘆きの丘(ミロス)の聖なる星",
                    "Fullmetal Alchemist: The Sacred Star of Milos",
                    "Fullmetal Alchemist: The sacred Star of Milos",
                    "Fullmetal Alchemist: La Estrella Sagrada de Milos",
                    "Fullmetal Alchemist: L'Étoile Sacrée de Milos"
                ],
                "ranking": 2822,
                "genres": [
                    "Action",
                    "Adventure",
                    "Drama",
                    "Fantasy"
                ],
                "episodes": 1,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/2/29550.webp",
                "link": "https://myanimelist.net/anime/9135/Fullmetal_Alchemist__The_Sacred_Star_of_Milos",
                "status": "Finished Airing",
                "synopsis": "Chasing a runaway alchemist with strange powers, brothers Edward and Alphonse Elric stumble into the squalid valley of the Milos. The Milosians are an oppressed group that seek to reclaim their holy land from Creta: a militaristic country that forcefully annexed their nation. In the eye of the political storm is a girl named Julia Crichton, who emphatically wishes for the Milos to regain their strength and return to being a nation of peace.\n\nBefriending the girl, Edward and Alphonse find themselves in the midst of a rising resistance that involves the use of the very object they have been seeking all along—the Philosopher's Stone. However, their past experiences with the stone cause them reservation, and the brothers are unwilling to help.\n\nBut as they discover the secrets behind Creta's intentions and questionable history, the brothers are drawn into the battle between the rebellious Milos, who desire their liberty, and the Cretan military, who seek absolute power.\n\n[Written by MAL Rewrite]",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/2/29550.webp?s=97851a04f3c1fa19e94e5818e25ee293",
                "type": "Movie"
            },
            {
                "_id": "5114",
                "title": "Fullmetal Alchemist: Brotherhood",
                "alternativeTitles": [
                    "Hagane no Renkinjutsushi: Fullmetal Alchemist",
                    "Fullmetal Alchemist (2009)",
                    "FMA",
                    "FMAB",
                    "鋼の錬金術師 FULLMETAL ALCHEMIST",
                    "Fullmetal Alchemist: Brotherhood",
                    "Fullmetal Alchemist Brotherhood"
                ],
                "ranking": 1,
                "genres": [
                    "Action",
                    "Adventure",
                    "Drama",
                    "Fantasy"
                ],
                "episodes": 64,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/1208/94745.webp",
                "link": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
                "status": "Finished Airing",
                "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.webp?s=f286786e3bc43d6dc5b4478a1762224b",
                "type": "TV"
            },
            {
                "_id": "430",
                "title": "Fullmetal Alchemist: The Conqueror of Shamballa",
                "alternativeTitles": [
                    "Gekijyouban Hagane no Renkinjutsushi - Shanbara wo Yuku Mono",
                    "Fullmetal Alchemist the Movie: Conqueror of Shamballa",
                    "FMA Movie",
                    "劇場版 鋼の錬金術師 シャンバラを征く者",
                    "Fullmetal Alchemist: The Movie - Conqueror of Shamballa",
                    "Fullmetal Alchemist: Der Eroberer von Shamballa",
                    "Fullmetal Alchemist: El Conquistador de Shamballa",
                    "Fullmetal Alchemist: Conqueror of shamballa"
                ],
                "ranking": 1729,
                "genres": [
                    "Award Winning",
                    "Comedy",
                    "Drama",
                    "Fantasy"
                ],
                "episodes": 1,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/1707/94039.webp",
                "link": "https://myanimelist.net/anime/430/Fullmetal_Alchemist__The_Conqueror_of_Shamballa",
                "status": "Finished Airing",
                "synopsis": "In desperation, Edward Elric sacrificed his body and soul to rescue his brother Alphonse, and is now displaced in the heart of Munich, Germany. He struggles to adapt to a world completely foreign to him in the wake of the economic crisis that followed the end of World War I. Isolated and unable to return home with his alchemy skills, Edward continues to research other methods of escaping the prison alongside colleagues who bear striking resemblances to many of the people he left behind. As dissent brews among the German citizenry, its neighbors also feel the unrest of the humiliated nation.\n\nMeanwhile, Alphonse continues to investigate Edward's disappearance, delving into the science of alchemy in the hopes of finally reuniting with his older brother. \n\n[Written by MAL Rewrite]",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/1707/94039.webp?s=147309ffbb052b9981db50f8a1bcba91",
                "type": "Movie"
            },
            {
                "_id": "6421",
                "title": "Fullmetal Alchemist: Brotherhood Specials",
                "alternativeTitles": [
                    "Moumoku no Renkinjutsushi",
                    "The Blind Alchemist",
                    "Shinpuru na Hitobito",
                    "Simple People",
                    "The Tale of Teacher",
                    "Tales of the Master",
                    "Yet Another Man's Battlefield",
                    "FMA",
                    "鋼の錬金術師",
                    "Fullmetal Alchemist: Brotherhood OVA Collection",
                    "Fullmetal Alchemist: Brootherhood OVA Collection",
                    "Fullmetal Alchemist: Brotherhood OAV Collection"
                ],
                "ranking": 606,
                "genres": [
                    "Drama",
                    "Fantasy"
                ],
                "episodes": 4,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/1493/91571.webp",
                "link": "https://myanimelist.net/anime/6421/Fullmetal_Alchemist__Brotherhood_Specials",
                "status": "Finished Airing",
                "synopsis": "Amazing secrets and startling facts are exposed for the first time in the Fullmetal Alchemist: Brotherhood OVA Collection, a new assortment of stories set in never-before-seen corners of the FMA universe. Join Ed and Al as they chase rumors of successful human transmutation into a web of shocking family drama and lies. Sneak a glance at hidden sides of Winry and Hawkeye's personalities. Survive the frigid north with a young Izumi Curtis as she fights to gain a deeper understanding of alchemy. Explore the legendary friendship shared by Mustang and Hughes and watch them grow from military school rivals into hardened brothers transformed by the horrors of the Ishvalan War. You thought you knew the whole story. You thought all the tales were told. The Fullmetal Alchemist: Brotherhood OVA Collection offers proof: You were wrong. \n\n(Source: FUNimation)",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/1493/91571.webp?s=5fa73f115aa7ab1be4e26b29a2fae53c",
                "type": "Special"
            },
            {
                "_id": "121",
                "title": "Fullmetal Alchemist",
                "alternativeTitles": [
                    "Hagane no Renkinjutsushi",
                    "FMA",
                    "Full Metal Alchemist",
                    "鋼の錬金術師",
                    "Fullmetal Alchemist"
                ],
                "ranking": 452,
                "genres": [
                    "Action",
                    "Adventure",
                    "Award Winning",
                    "Drama",
                    "Fantasy"
                ],
                "episodes": 51,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/10/75815.webp",
                "link": "https://myanimelist.net/anime/121/Fullmetal_Alchemist",
                "status": "Finished Airing",
                "synopsis": "Edward Elric, a young, brilliant alchemist, has lost much in his twelve-year life: when he and his brother Alphonse try to resurrect their dead mother through the forbidden act of human transmutation, Edward loses his brother as well as two of his limbs. With his supreme alchemy skills, Edward binds Alphonse's soul to a large suit of armor.\n\nA year later, Edward, now promoted to the fullmetal alchemist of the state, embarks on a journey with his younger brother to obtain the Philosopher's Stone. The fabled mythical object is rumored to be capable of amplifying an alchemist's abilities by leaps and bounds, thus allowing them to override the fundamental law of alchemy: to gain something, an alchemist must sacrifice something of equal value. Edward hopes to draw into the military's resources to find the fabled stone and restore his and Alphonse's bodies to normal. However, the Elric brothers soon discover that there is more to the legendary stone than meets the eye, as they are led to the epicenter of a far darker battle than they could have ever imagined.\n\n[Written by MAL Rewrite]",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/10/75815.webp?s=14768f109a5a5f8e87a4ea03d6f00853",
                "type": "TV"
            },
            {
                "_id": "908",
                "title": "Fullmetal Alchemist: Premium Collection",
                "alternativeTitles": [
                    "State Alchemists vs Seven Homunculi",
                    "Enkai-hen",
                    "Chibi Party",
                    "Kodomo-hen",
                    "Kids",
                    "FMA",
                    "鋼の錬金術師 PREMIUM COLLECTION",
                    "Fullmetal Alchemist: Premium OVA Collection"
                ],
                "ranking": 2589,
                "genres": [
                    "Comedy",
                    "Fantasy"
                ],
                "episodes": 3,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/10/18689.webp",
                "link": "https://myanimelist.net/anime/908/Fullmetal_Alchemist__Premium_Collection",
                "status": "Finished Airing",
                "synopsis": "1. State Alchemists vs Seven Homunculi\nA 10 minute film featuring: Ed, Al, Mustang and many other members of the State doing battle with the deadly Homonculi in an alternate reality Amestris.\n\n2. Chibi Party (Enkai-hen)\nShort 6 minute Skit drawn in Super Deformed style where every character in the series (including bad guys) are celebrating an \"After Party\" of the Conqueror of Shambala movie.\n\n3. Kids (Kodomo-hen)\nShort 3 minute story which features Edward and his grandkids in present day 2005.\n\n(Source: ANN) ",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/10/18689.webp?s=4be5d65aa6c6c079f70d7cce08e50df3",
                "type": "OVA"
            },
            {
                "_id": "10842",
                "title": "Fullmetal Alchemist: The Sacred Star of Milos Specials",
                "alternativeTitles": [
                    "Hagane no Renkinjutsushi: Milos no Seinaru Hoshi PV",
                    "FMA Movie 2 PV",
                    "鋼の錬金術師 嘆きの丘[ミロス]の聖なる星 特別動画",
                    "Fullmetal Alchemist: The Sacred Star of Milos PV"
                ],
                "ranking": 4809,
                "genres": [
                    "Comedy",
                    "Fantasy"
                ],
                "episodes": 4,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/9/29928.webp",
                "link": "https://myanimelist.net/anime/10842/Fullmetal_Alchemist__The_Sacred_Star_of_Milos_Specials",
                "status": "Finished Airing",
                "synopsis": "To mark the July 2 opening of the Fullmetal Alchemist: The Sacred Star of Milos film, the Pia Eiga Seikatsu website posted an exclusive video \"interview\" with the stars of the film, Edward and Alphonse Elric (as voiced by Romi Park and Rie Kugimiya, respectively). In keeping with the spirit of Hiromu Arakawa's original manga and the two television anime, the interviewer has trouble early on in figuring out who the \"Fullmetal Alchemist\" is. (The interview has cameos by the other stars of the anime.) Also includes 3 \"Study\" sessions with \"Professor\" Mustang, teaching Winry and Hawkeye about Creta and Milos.",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/9/29928.webp?s=70cd20332081bbce4bd8c0626e9e2f5b",
                "type": "ONA"
            },
            {
                "_id": "7902",
                "title": "Fullmetal Alchemist: Brotherhood - 4-Koma Theater",
                "alternativeTitles": [
                    "Hagane no Renkinjutsushi: Hagaren 4-Koma Gekijou",
                    "Hiromu Arakawa 4-Koma Theater",
                    "FMA: 4-Koma Theater",
                    "荒川弘 描き下ろし4コマ劇場",
                    "Fullmetal Alchemist: Brotherhood 4-Koma Theater"
                ],
                "ranking": 1922,
                "genres": [
                    "Comedy",
                    "Fantasy"
                ],
                "episodes": 16,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/3/76154.webp",
                "link": "https://myanimelist.net/anime/7902/Fullmetal_Alchemist__Brotherhood_-_4-Koma_Theater",
                "status": "Finished Airing",
                "synopsis": "Short specials from the DVDs/BDs.",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/3/76154.webp?s=40351d6b663c8421c81f4ebff5986a42",
                "type": "Special"
            },
            {
                "_id": "664",
                "title": "Fullmetal Alchemist: Reflections",
                "alternativeTitles": [
                    "Hagane no Renkinjutsushi: Tabi no Hajimari",
                    "FMA: Reflections",
                    "鋼の錬金術師 旅の始まり"
                ],
                "ranking": 2878,
                "genres": [
                    "Adventure",
                    "Comedy",
                    "Drama",
                    "Fantasy"
                ],
                "episodes": 1,
                "hasEpisode": true,
                "hasRanking": true,
                "image": "https://cdn.myanimelist.net/images/anime/2/18690.webp",
                "link": "https://myanimelist.net/anime/664/Fullmetal_Alchemist__Reflections",
                "status": "Finished Airing",
                "synopsis": "A reflection on what happened during the FMA TV series.",
                "thumb": "https://cdn.myanimelist.net/r/50x70/images/anime/2/18690.webp?s=1ecbb456287c658c7ee38904207278be",
                "type": "Special"
            }
        ],
        "meta": {
            "page": 1,
            "size": 10,
            "totalData": 9,
            "totalPage": 1
        }
    };

    // useEffect(() => {
    //     axios.get(BASE_URL).then((response) => {
    //         setResponse(response.data);
    //     });
    // }, []);


  return (
      <div className='flex flex-row items-center justify-center flex-wrap overflow-hidden gap-8 w-full h-full py-8'>
      {data.data.map((item:any)=>(
          <CardComponent key={item._id}  _id={item._id} title={item.title} ranking={item.ranking} genres={item.genres} episodes={item.episodes} image={item.image} link={item.link} synopsis = { item.synopsis } thumb = { item.thumb } type = { item.type } status = {item.status} />
      ))}
    </div>
  )
}

export default AnimelistComponent;