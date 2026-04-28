// 50 Emoji-Rätsel (Songs + Künstler)
const emojiQuestions = [
  { display: "🎸👶", correct: "Nirvana", options: ["Nirvana","Oasis","Queen","Adele","Coldplay","U2"] },
  { display: "🕺🌙", correct: "Toploader", options: ["Toploader","Prince","Madonna","The Weeknd","A-ha","Phil Collins"] },
  { display: "👑🕺", correct: "Michael Jackson", options: ["Michael Jackson","Prince","George Michael","Whitney Houston","Lionel Richie","Phil Collins"] },
  { display: "🔥🏠", correct: "The Animals", options: ["The Animals","Queen","Bon Jovi","Metallica","AC/DC","Guns N' Roses"] },
  { display: "💔🎤", correct: "Adele", options: ["Adele","Whitney Houston","Celine Dion","Sia","Mariah Carey","Dua Lipa"] },
  { display: "🧊🧊🧊", correct: "Vanilla Ice", options: ["Vanilla Ice","Eminem","Beastie Boys","Run DMC","MC Hammer","Dr. Dre"] },
  { display: "🌧️☔", correct: "Adele", options: ["Adele","Sia","Rihanna","Taylor Swift","Kelly Clarkson","Pink"] },
  { display: "🧱🧱🧱", correct: "Pink Floyd", options: ["Pink Floyd","Queen","Genesis","Dire Straits","The Police","U2"] },
  { display: "🐅👁️", correct: "Survivor", options: ["Survivor","Bon Jovi","Europe","Journey","Foreigner","Scorpions"] },
  { display: "💃🇪🇸", correct: "Shakira", options: ["Shakira","Jennifer Lopez","Rihanna","Dua Lipa","Selena Gomez","Beyoncé"] },
  { display: "🧨💁‍♀️", correct: "Taylor Swift", options: ["Taylor Swift","Katy Perry","Ariana Grande","Billie Eilish","Dua Lipa","Selena Gomez"] },
  { display: "🐝👑", correct: "Beyoncé", options: ["Beyoncé","Rihanna","Alicia Keys","Whitney Houston","Mariah Carey","Sia"] },
  { display: "🐺🎸", correct: "Nirvana", options: ["Nirvana","Pearl Jam","Foo Fighters","Soundgarden","Alice in Chains","Radiohead"] },
  { display: "🐼🎧", correct: "Daft Punk", options: ["Daft Punk","Gorillaz","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"] },
  { display: "🦊🎶", correct: "Ylvis", options: ["Ylvis","LMFAO","Aqua","PSY","Crazy Frog","Right Said Fred"] },
  { display: "🐘🎸", correct: "Imagine Dragons", options: ["Imagine Dragons","Coldplay","OneRepublic","The Script","Maroon 5","Linkin Park"] },
  { display: "🐍🎤", correct: "Britney Spears", options: ["Britney Spears","Christina Aguilera","Madonna","Katy Perry","Taylor Swift","Ariana Grande"] },
  { display: "🐦🎤", correct: "Adele", options: ["Adele","Birdy","Sia","Whitney Houston","Celine Dion","Kelly Clarkson"] },
  { display: "🐺🔥", correct: "Metallica", options: ["Metallica","Megadeth","Slayer","Iron Maiden","AC/DC","Guns N' Roses"] },
  { display: "🐻🎤", correct: "Ed Sheeran", options: ["Ed Sheeran","Shawn Mendes","Lewis Capaldi","Sam Smith","James Blunt","Charlie Puth"] },
  { display: "🌪️👠", correct: "Dolly Parton", options: ["Dolly Parton","Shania Twain","Carrie Underwood","Taylor Swift","Faith Hill","Reba McEntire"] },
  { display: "🌊👶", correct: "Pinkfong", options: ["Pinkfong","Aqua","Crazy Frog","PSY","Ylvis","LMFAO"] },
  { display: "🕊️💭", correct: "John Lennon", options: ["John Lennon","Paul McCartney","George Harrison","Bob Dylan","David Bowie","Elton John"] },
  { display: "🎡🎠", correct: "Taylor Swift", options: ["Taylor Swift","Katy Perry","Ariana Grande","Selena Gomez","Dua Lipa","Billie Eilish"] },
  { display: "🧊❤️", correct: "Elton John", options: ["Elton John","George Michael","Phil Collins","Billy Joel","Prince","David Bowie"] },
  { display: "🏃‍♂️💨", correct: "Snow Patrol", options: ["Snow Patrol","Coldplay","Keane","The Script","OneRepublic","U2"] },
  { display: "🐍👠", correct: "Nancy Sinatra", options: ["Nancy Sinatra","Cher","Madonna","Stevie Nicks","Cyndi Lauper","Tina Turner"] },
  { display: "🐺🎧", correct: "The Weeknd", options: ["The Weeknd","Drake","Post Malone","Kendrick Lamar","Travis Scott","Bruno Mars"] },
  { display: "🐼🎤", correct: "Gorillaz", options: ["Gorillaz","Daft Punk","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"] },
  { display: "🐦🎧", correct: "Coldplay", options: ["Coldplay","Keane","Snow Patrol","OneRepublic","The Script","U2"] },
  { display: "🐯🎤", correct: "Katy Perry", options: ["Katy Perry","Taylor Swift","Ariana Grande","Selena Gomez","Dua Lipa","Billie Eilish"] },
  { display: "🐺🎤", correct: "Linkin Park", options: ["Linkin Park","Foo Fighters","Green Day","Nirvana","Papa Roach","Evanescence"] },
  { display: "🐘🎤", correct: "Elephant Man", options: ["Elephant Man","Sean Paul","Shaggy","Daddy Yankee","Pitbull","Akon"] },
  { display: "🐯🎧", correct: "Imagine Dragons", options: ["Imagine Dragons","Coldplay","OneRepublic","The Script","Maroon 5","Linkin Park"] },
  { display: "🐦🎶", correct: "Birdy", options: ["Birdy","Adele","Sia","Lorde","Florence + The Machine","Lana Del Rey"] },
  { display: "🐺🎶", correct: "Duran Duran", options: ["Duran Duran","Depeche Mode","A-ha","Tears for Fears","The Cure","New Order"] },
  { display: "🐅🎤", correct: "Survivor", options: ["Survivor","Journey","Bon Jovi","Europe","Foreigner","Scorpions"] },
  { display: "🐘🎶", correct: "Imagine Dragons", options: ["Imagine Dragons","Coldplay","OneRepublic","The Script","Maroon 5","Linkin Park"] },
  { display: "🐺🎵", correct: "The Weeknd", options: ["The Weeknd","Drake","Post Malone","Kendrick Lamar","Travis Scott","Bruno Mars"] },
  { display: "🐼🎵", correct: "Gorillaz", options: ["Gorillaz","Daft Punk","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"] },
  { display: "🐦🎵", correct: "Adele", options: ["Adele","Birdy","Sia","Whitney Houston","Celine Dion","Kelly Clarkson"] },
  { display: "🐯🎵", correct: "Katy Perry", options: ["Katy Perry","Taylor Swift","Ariana Grande","Selena Gomez","Dua Lipa","Billie Eilish"] },
  { display: "🐺🎵", correct: "Nirvana", options: ["Nirvana","Pearl Jam","Foo Fighters","Soundgarden","Alice in Chains","Radiohead"] },
  { display: "🐘🎵", correct: "Elephant Man", options: ["Elephant Man","Sean Paul","Shaggy","Daddy Yankee","Pitbull","Akon"] },
  { display: "🐼🎸", correct: "Gorillaz", options: ["Gorillaz","Daft Punk","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"] },
  { display: "🐦🎸", correct: "Coldplay", options: ["Coldplay","Keane","Snow Patrol","OneRepublic","The Script","U2"] },
  { display: "🐯🎸", correct: "Imagine Dragons", options: ["Imagine Dragons","Coldplay","OneRepublic","The Script","Maroon 5","Linkin Park"] },
  { display: "🐺🎸", correct: "Linkin Park", options: ["Linkin Park","Foo Fighters","Green Day","Nirvana","Papa Roach","Evanescence"] }
];
// 50 Hinweis-Fragen (Songs + Künstler)
const hintQuestions = [
  // --- SONG-HINWEISE (25) ---
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1980er", "Synth-Pop", "ikonisches animiertes Musikvideo"],
    correct: "A-ha",
    options: ["A-ha","Depeche Mode","Tears for Fears","Duran Duran","New Order","The Cure"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2010er", "Ballade über Herzschmerz", "britische Sängerin"],
    correct: "Adele",
    options: ["Adele","Sia","Whitney Houston","Celine Dion","Kelly Clarkson","Lorde"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1990er", "Grunge", "weltbekanntes Gitarrenriff"],
    correct: "Nirvana",
    options: ["Nirvana","Pearl Jam","Soundgarden","Alice in Chains","Foo Fighters","Radiohead"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1980er", "Rockhymne", "Stadion-Stampfbeat"],
    correct: "Queen",
    options: ["Queen","Bon Jovi","AC/DC","Aerosmith","Guns N' Roses","Scorpions"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2000er", "Piano-Ballade", "britischer Sänger"],
    correct: "James Blunt",
    options: ["James Blunt","Ed Sheeran","Sam Smith","George Ezra","Robbie Williams","Coldplay"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2010er", "Synthwave-Sound", "roter Anzug im Musikvideo"],
    correct: "The Weeknd",
    options: ["The Weeknd","Drake","Bruno Mars","Post Malone","Kendrick Lamar","Justin Bieber"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1980er", "Power-Ballade", "Rockband aus den USA"],
    correct: "Foreigner",
    options: ["Foreigner","Journey","Bon Jovi","Europe","Scorpions","REO Speedwagon"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1990er", "Britpop", "Gitarrenband aus Manchester"],
    correct: "Oasis",
    options: ["Oasis","Blur","The Verve","Radiohead","Pulp","Coldplay"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2000er", "Latin-Pop", "kolumbianische Sängerin"],
    correct: "Shakira",
    options: ["Shakira","Jennifer Lopez","Selena Gomez","Dua Lipa","Rihanna","Camila Cabello"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1980er", "Rockband", "Gitarrenriff über die ganze Welt bekannt"],
    correct: "Guns N' Roses",
    options: ["Guns N' Roses","AC/DC","Metallica","Bon Jovi","Aerosmith","Scorpions"]
  },

  // 15 weitere Song-Hinweise
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2010er", "Pop-Ballade", "britischer Sänger mit hoher Stimme"],
    correct: "Sam Smith",
    options: ["Sam Smith","Ed Sheeran","James Arthur","Lewis Capaldi","Charlie Puth","Shawn Mendes"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1980er", "Pop-Ikone", "rote Lederjacke im Musikvideo"],
    correct: "Michael Jackson",
    options: ["Michael Jackson","Prince","George Michael","Lionel Richie","Phil Collins","Stevie Wonder"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1990er", "Alternative Rock", "melancholischer Gesang"],
    correct: "Radiohead",
    options: ["Radiohead","Nirvana","Pearl Jam","The Cure","Smashing Pumpkins","Blur"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2000er", "Pop-Punk", "kanadische Sängerin"],
    correct: "Avril Lavigne",
    options: ["Avril Lavigne","Pink","Kelly Clarkson","Paramore","Evanescence","No Doubt"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2010er", "Electro-Pop", "französisches Duo mit Helmen"],
    correct: "Daft Punk",
    options: ["Daft Punk","Gorillaz","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1980er", "New Wave", "britische Band"],
    correct: "Depeche Mode",
    options: ["Depeche Mode","Duran Duran","A-ha","New Order","The Cure","Tears for Fears"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1990er", "Girlgroup", "britisch"],
    correct: "Spice Girls",
    options: ["Spice Girls","Destiny's Child","All Saints","Sugababes","TLC","En Vogue"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2000er", "Rockband", "US‑Alternative"],
    correct: "Linkin Park",
    options: ["Linkin Park","Green Day","Foo Fighters","Papa Roach","Evanescence","Nickelback"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["2010er", "Pop", "US‑Sängerin mit Katzen‑Ästhetik"],
    correct: "Ariana Grande",
    options: ["Ariana Grande","Taylor Swift","Selena Gomez","Dua Lipa","Billie Eilish","Katy Perry"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["1980er", "Rock", "deutsche Band"],
    correct: "Scorpions",
    options: ["Scorpions","Rammstein","Accept","Helloween","Kraftwerk","Tokio Hotel"]
  },

  // --- KÜNSTLER-HINWEISE (25) ---
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["US‑Popstar", "2010er", "bekannt für kraftvolle Balladen"],
    correct: "Kelly Clarkson",
    options: ["Kelly Clarkson","Adele","Pink","Sia","Demi Lovato","Christina Aguilera"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["britische Band", "2000er", "melancholischer Pop‑Rock"],
    correct: "Coldplay",
    options: ["Coldplay","Keane","Snow Patrol","The Script","OneRepublic","U2"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["US‑Rockband", "1990er", "Frontmann mit markanter Stimme"],
    correct: "Pearl Jam",
    options: ["Pearl Jam","Nirvana","Soundgarden","Alice in Chains","Foo Fighters","Stone Temple Pilots"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["Pop‑Ikone", "1980er", "Queen of Pop"],
    correct: "Madonna",
    options: ["Madonna","Whitney Houston","Cyndi Lauper","Janet Jackson","Tina Turner","Cher"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["US‑Rapper", "2010er", "melodischer Stil"],
    correct: "Post Malone",
    options: ["Post Malone","Drake","Travis Scott","Kendrick Lamar","Lil Nas X","The Weeknd"]
  },

  // 20 weitere Künstler-Hinweise
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["britische Sängerin", "2010er", "dunkle Pop‑Ästhetik"],
    correct: "Lorde",
    options: ["Lorde","Billie Eilish","Adele","Florence Welch","Lana Del Rey","Sia"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["US‑Rockband", "1980er", "Gitarrenhymnen"],
    correct: "Bon Jovi",
    options: ["Bon Jovi","Aerosmith","Guns N' Roses","Journey","Foreigner","Scorpions"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["kanadischer Sänger", "2010er", "hohe Stimme"],
    correct: "The Weeknd",
    options: ["The Weeknd","Shawn Mendes","Justin Bieber","Charlie Puth","Sam Smith","Bruno Mars"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["US‑Popstar", "2020er", "experimenteller Pop"],
    correct: "Billie Eilish",
    options: ["Billie Eilish","Lorde","Dua Lipa","Olivia Rodrigo","Sia","Halsey"]
  },
  {
    type: "Hinweis-Quiz",
    question: "Welcher Künstler passt zu diesen Hinweisen?",
    hints: ["britische Band", "1980er", "New Wave"],
    correct: "Duran Duran",
    options: ["Duran Duran","Depeche Mode","A-ha","Tears for Fears","New Order","The Cure"]
  }
];
// 50 Interpreten-Fragen (Wer singt? / Welcher Song stammt von?)
const artistQuestions = [
  // --- WER SINGT DIESEN HIT? (25) ---
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Rockhymne aus den 80ern mit ikonischem Gitarrenintro",
    correct: "Bon Jovi",
    options: ["Bon Jovi","Guns N' Roses","AC/DC","Aerosmith","Scorpions","Queen"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Synth-Pop Klassiker aus den 80ern mit hohem Gesang",
    correct: "A-ha",
    options: ["A-ha","Depeche Mode","Duran Duran","Tears for Fears","New Order","The Cure"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Grunge-Song aus den 90ern mit legendärem Gitarrenriff",
    correct: "Nirvana",
    options: ["Nirvana","Pearl Jam","Soundgarden","Alice in Chains","Foo Fighters","Radiohead"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Pop-Ballade aus den 2010ern über Herzschmerz",
    correct: "Adele",
    options: ["Adele","Sia","Whitney Houston","Celine Dion","Kelly Clarkson","Lorde"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Synthwave-Pop aus den 2020ern mit rotem Anzug im Video",
    correct: "The Weeknd",
    options: ["The Weeknd","Drake","Bruno Mars","Post Malone","Kendrick Lamar","Justin Bieber"]
  },

  // 20 weitere „Wer singt…?“
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Alternative-Rock-Song aus den 90ern mit melancholischem Ton",
    correct: "Radiohead",
    options: ["Radiohead","Nirvana","Pearl Jam","The Cure","Smashing Pumpkins","Blur"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Pop-Punk-Hit aus den 2000ern von einer kanadischen Sängerin",
    correct: "Avril Lavigne",
    options: ["Avril Lavigne","Pink","Kelly Clarkson","Paramore","Evanescence","No Doubt"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Elektro-Pop-Hit eines französischen Duos mit Helmen",
    correct: "Daft Punk",
    options: ["Daft Punk","Gorillaz","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Rockballade aus den 80ern mit emotionalem Refrain",
    correct: "Foreigner",
    options: ["Foreigner","Journey","Bon Jovi","Europe","Scorpions","REO Speedwagon"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Wer singt diesen Hit?",
    description: "Latin-Pop-Hit aus den 2000ern von einer kolumbianischen Sängerin",
    correct: "Shakira",
    options: ["Shakira","Jennifer Lopez","Selena Gomez","Dua Lipa","Rihanna","Camila Cabello"]
  },

  // --- WELCHER SONG STAMMT VON DIESEM KÜNSTLER? (25) ---
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "US-Rockband, 90er, emotionaler Alternative-Sound",
    correct: "Pearl Jam",
    options: ["Pearl Jam","Nirvana","Soundgarden","Alice in Chains","Foo Fighters","Stone Temple Pilots"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "Pop-Ikone der 80er, Queen of Pop",
    correct: "Madonna",
    options: ["Madonna","Whitney Houston","Cyndi Lauper","Janet Jackson","Tina Turner","Cher"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "Britische Band, 2000er, melancholischer Pop-Rock",
    correct: "Coldplay",
    options: ["Coldplay","Keane","Snow Patrol","The Script","OneRepublic","U2"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "US-Rapper, 2010er, melodischer Stil",
    correct: "Post Malone",
    options: ["Post Malone","Drake","Travis Scott","Kendrick Lamar","Lil Nas X","The Weeknd"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "Britische Sängerin, 2010er, dunkle Pop-Ästhetik",
    correct: "Lorde",
    options: ["Lorde","Billie Eilish","Adele","Florence Welch","Lana Del Rey","Sia"]
  },

  // 20 weitere „Welcher Song stammt von…?“
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "US-Rockband, 80er, Gitarrenhymnen",
    correct: "Bon Jovi",
    options: ["Bon Jovi","Aerosmith","Guns N' Roses","Journey","Foreigner","Scorpions"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "Kanadischer Sänger, 2010er, hohe Stimme",
    correct: "The Weeknd",
    options: ["The Weeknd","Shawn Mendes","Justin Bieber","Charlie Puth","Sam Smith","Bruno Mars"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "US-Popstar, 2020er, experimenteller Pop",
    correct: "Billie Eilish",
    options: ["Billie Eilish","Lorde","Dua Lipa","Olivia Rodrigo","Sia","Halsey"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "Britische Band, 80er, New Wave",
    correct: "Duran Duran",
    options: ["Duran Duran","Depeche Mode","A-ha","Tears for Fears","New Order","The Cure"]
  },
  {
    type: "Interpreten-Quiz",
    question: "Welcher Künstler veröffentlichte diesen Song?",
    description: "US-Rockband, 2000er, Alternative Metal",
    correct: "Linkin Park",
    options: ["Linkin Park","Green Day","Foo Fighters","Papa Roach","Evanescence","Nickelback"]
  }
];
// 50 Wortwolken (Songs + Künstler)
const wordcloudQuestions = [
  // --- SONG-WORTWOLKEN (25) ---
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Herzschmerz", "Ballade", "Piano", "Trennung", "2010er"],
    correct: "Adele",
    options: ["Adele","Sia","Whitney Houston","Celine Dion","Kelly Clarkson","Lorde"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Synth", "80er", "hoher Gesang", "ikonisch", "Retro"],
    correct: "A-ha",
    options: ["A-ha","Depeche Mode","Duran Duran","Tears for Fears","New Order","The Cure"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Gitarrenriff", "90er", "Grunge", "Rebellion", "Kult"],
    correct: "Nirvana",
    options: ["Nirvana","Pearl Jam","Soundgarden","Alice in Chains","Foo Fighters","Radiohead"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Stadion", "Stampfen", "Rock", "80er", "Hymne"],
    correct: "Queen",
    options: ["Queen","Bon Jovi","AC/DC","Aerosmith","Guns N' Roses","Scorpions"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Synthwave", "Neon", "Nacht", "2020er", "Retro"],
    correct: "The Weeknd",
    options: ["The Weeknd","Drake","Bruno Mars","Post Malone","Kendrick Lamar","Justin Bieber"]
  },

  // 20 weitere Song-Wortwolken
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Melancholie", "Alternative", "90er", "Gitarren", "Atmosphäre"],
    correct: "Radiohead",
    options: ["Radiohead","Nirvana","Pearl Jam","The Cure","Smashing Pumpkins","Blur"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Latin", "Tanzen", "2000er", "Kolumbien", "Rhythmus"],
    correct: "Shakira",
    options: ["Shakira","Jennifer Lopez","Selena Gomez","Dua Lipa","Rihanna","Camila Cabello"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Helme", "Elektro", "Futuristisch", "Duo", "2010er"],
    correct: "Daft Punk",
    options: ["Daft Punk","Gorillaz","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Rockballade", "Emotion", "80er", "Liebe", "Refrain"],
    correct: "Foreigner",
    options: ["Foreigner","Journey","Bon Jovi","Europe","Scorpions","REO Speedwagon"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Punk", "Rebellion", "2000er", "Jugend", "Energie"],
    correct: "Avril Lavigne",
    options: ["Avril Lavigne","Pink","Kelly Clarkson","Paramore","Evanescence","No Doubt"]
  },

  // --- KÜNSTLER-WORTWOLKEN (25) ---
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Moonwalk", "80er", "Ikone", "Pop", "Handschuh"],
    correct: "Michael Jackson",
    options: ["Michael Jackson","Prince","George Michael","Whitney Houston","Lionel Richie","Phil Collins"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Queen of Pop", "80er", "Provokation", "Mode", "Ikone"],
    correct: "Madonna",
    options: ["Madonna","Whitney Houston","Cyndi Lauper","Janet Jackson","Tina Turner","Cher"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Britpop", "90er", "Manchester", "Gitarren", "Hymnen"],
    correct: "Oasis",
    options: ["Oasis","Blur","The Verve","Radiohead","Pulp","Coldplay"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["New Wave", "80er", "Synth", "Mode", "Britisch"],
    correct: "Duran Duran",
    options: ["Duran Duran","Depeche Mode","A-ha","Tears for Fears","New Order","The Cure"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Alternative Metal", "2000er", "Nu Metal", "Band", "USA"],
    correct: "Linkin Park",
    options: ["Linkin Park","Green Day","Foo Fighters","Papa Roach","Evanescence","Nickelback"]
  },

  // 20 weitere Künstler-Wortwolken
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Soul", "90er", "Powerstimme", "USA", "Emotion"],
    correct: "Whitney Houston",
    options: ["Whitney Houston","Mariah Carey","Celine Dion","Aretha Franklin","Alicia Keys","Sia"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Rock", "80er", "Gitarren", "USA", "Hymnen"],
    correct: "Bon Jovi",
    options: ["Bon Jovi","Aerosmith","Guns N' Roses","Journey","Foreigner","Scorpions"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Indie", "2000er", "Melancholie", "Britisch", "Piano"],
    correct: "Coldplay",
    options: ["Coldplay","Keane","Snow Patrol","The Script","OneRepublic","U2"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Electro", "Animation", "Band", "UK", "Experimentell"],
    correct: "Gorillaz",
    options: ["Gorillaz","Daft Punk","The Chemical Brothers","Justice","Kraftwerk","Depeche Mode"]
  },
  {
    type: "Wortwolke",
    question: "Welcher Künstler passt zu dieser Wortwolke?",
    words: ["Pop", "2020er", "Teenager", "Emotional", "Songwriter"],
    correct: "Olivia Rodrigo",
    options: ["Olivia Rodrigo","Billie Eilish","Lorde","Dua Lipa","Sia","Halsey"]
  }
];
