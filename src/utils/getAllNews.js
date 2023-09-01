const getAllNews = async (category_id) => {
  // let url = "https://next-jsproject-35jh-git-main-ittarek.vercel.app/news";
let url = [
  {
    "_id": "7c4dfea0fafddc813673282a428429b7",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "1",
    "rating": { "number": 4.5, "badge": "Excellent" },
    "total_view": 0,
    "title": "Biden announces $3 billion Ukraine military aid package on its Independence Day",
    "author": {
      "name": "Reuters",
      "published_date": "2022-08-25 03:09:16",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
    "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
    "details": "Published: 25 Aug 2022, 09: 09 US president Joe Biden speaks as he attends the first virtual meeting of the   I2U2   group with Israeli prime minister Yair Lapid and leaders of India and the United Arab Emirates, in Jerusalem 14 July, 2022ReutersUS President Joe Biden marked Ukraine's Independence Day on Wednesday with $3 billion in security assistance, Washington's largest aid package since Russia's invasion six months ago but one that could take months or even years to arrive in Kyiv.The aid announcement came as US officials warned that Russia appeared to be planning to launch fresh attacks in coming days on Ukraine's civilian infrastructure and government facilities."
  },
  {
    "_id": "30af81e91ab3eafc0bcae0de62f55d5c",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "1",
    "rating": { "number": 4.5, "badge": "Excellent" },
    "total_view": 320,
    "title": "U.S. announces largest weapons package for Ukraine",
    "author": {
      "name": "John Pike",
      "published_date": "2022-08-25 07:35:11",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/1vcgPzg/unsplash-Eh-Tc-C9s-YXsw-12.png",
    "image_url": "https://i.ibb.co/PxC67LV/unsplash-Eh-Tc-C9s-YXsw-1.png",
    "details": "People's Daily Online (Xinhua) 08:16, August 25, 2022 The United States has committed more than 13.5 billion dollars in security assistance to Ukraine since President Joe Biden took office. WASHINGTON, Aug. 24 (Xinhua) -- The United States on Wednesday announced an additional tranche of security assistance to Ukraine worth nearly 3 billion U.S. dollars, the largest one-time weapons aid to Kiev that came as the Russia-Ukraine conflict reached the half-year mark. According to a breakdown by the Department of Defense (DoD), items in the newly-announced package include six additional National Advanced Surface-to-Air Missile Systems (NASAMS) with additional munitions for NASAMS, up to 245,000 rounds of 155mm artillery ammunition, up to 65,000 rounds of 120mm mortar ammunition, up to 24 counter-artillery radars, Puma Unmanned Aerial Systems (UAS) and support equipment for Scan Eagle UAS systems,   Vampire   counter-UAS systems, as well as laser-guided rocket systems."
  },
  {
    "_id": "df11ff9feefc37613cc3a4486ce02151",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": false
    },
    "category_id": "2",
    "rating": { "number": 4.5, "badge": "Excellent" },
    "total_view": 552,
    "title": "US commander to train Ukraine military",
    "author": {
      "name": "system",
      "published_date": "2022-08-27 05:38:02",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/dr4TRY4/unsplash-Eh-Tc-C9s-YXsw-21.png",
    "image_url": "https://i.ibb.co/vz5K0FB/unsplash-Eh-Tc-C9s-YXsw-10.png",
    "details": "Agencies | Washington The Daily Tribune – www.newsofbahrain.com The US President Joe Biden plans to appoint a general in Ukraine to lead the military training and relief efforts, the Wall Street Journal reported citing US officials. The officials indicated that in the coming weeks, the US administration also plans to name its military mission to support Ukraine. The name of the operation formally recognises US military support, akin to how the Pentagon dubbed the missions in Iraq and Afghanistan Operation Iraqi Freedom,   Enduring Freedom   and 'Guardian of Freedom'."
  },
  {
    "_id": "919db97c34e0778b387dd40cdfa08130",
    "others_info": {
      "is_todays_pick": false,
      "is_trending": true
    },
    "category_id": "1",
    "rating": { "number": 4.5, "badge": "Excellent" },
    "total_view": 89,
    "title": "U.S. concerned about India's participation in Russia military exercises",
    "author": {
      "name": "MarketScreener",
      "published_date": "2022-08-30 18:05:42",
      "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    "thumbnail_url": "https://i.ibb.co/HXC719r/unsplash-Eh-Tc-C9s-YXsw-19.png",
    "image_url": "https://i.ibb.co/T0PnZxD/unsplash-Eh-Tc-C9s-YXsw-8.png",
    "details": "Last month, Moscow announced plans to hold   Vostok   (East) exercises from Aug. 30 to Sept. 5, even as it wages a costly war in Ukraine. The military exercises are expected to include China, India, Belarus, Mongolia, Tajikistan and other countries, China's defense ministry has said. Asked about India's participation, Jean-Pierre told reporters as President Joe Biden flew to Pennsylvania that the United States was concerned about any country participating in military exercises with Russia while it is at war with Ukraine."
  }
]
  if (category_id) {
    url += "?category_id=" + category_id;
  }
  const res = await fetch(url, {
    cache: "force-cache",
  });

  return res.json();
};

export default getAllNews;