const inptV = document.querySelector('.inptV');
const inptP = document.querySelector('.inptP');
const btn = document.querySelector('.btn');
const pers = document.querySelector('.pers');
const para = document.querySelector('.para');
const writ = document.querySelector('.writ');
const desc = document.querySelector('.desc');
const age = document.querySelector('.age');
const Gender = document.querySelector('.Gender');


const ZodiacField = document.getElementById('Zodiac');
    
    ZodiacField.onchange = function(){ 
    const z = ZodiacField.selectedIndex;
    const Zodiacs = ZodiacField.options[z].text;
    const ZodiacsValue = ZodiacField.options[z].value;
    if (Zodiacs == "Aquarius"){
     window.open(ZodiacsValue,'_self');
     return;
    }else if (Zodiacs == "Pisces"){
        window.open(ZodiacsValue,'_self');
        return;
}else if (Zodiacs == "Aries"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Tuarus"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Gemini"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Cancer"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Leo"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Virgo"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Libra"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Scorpio"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Sagittarius"){
    window.open(ZodiacsValue,'_self');
    return;
}else if (Zodiacs == "Capricorn"){
    window.open(ZodiacsValue,'_self');
    return;
}
}
btn.addEventListener('click', work)

function work(){
    const sentvalue = inptV.value;
    const sentpass = inptP.value;
    const current = new Date(sentvalue);
    const  m = current.getMonth();
    const day = current.getUTCDate();
    //const datte = new Date(sentvalue);
    //const  d = new Date('June 21 - July 22');

    
    if(sentvalue == "" || sentpass==""){
        alert("please enter your information");
        inptV.value = "";
        inptP.value= "";
    }else if (m == 0 && day > 19 || m == 1 && day < 19 ){
        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Aquarius.html"><strong>Aquarius </strong></a>`;
        para.innerHTML =`
        Element: Air</br>
        Polarity: Positive</br>
        Quality: Fixed</br>
        Ruling Planet: Uranus</br>
        Ruling House: Eleventh</br>
        Spirit Color: Sky blue</br>
        Lucky Gem: Amethyst</br>
        Flower: Orchid</br>
        Top Love Matches: <a href="Sagittarius.html">Sagittarius</a> `
        writ.innerHTML =`<h4>Aquarius Zodiac Sign:</h4> 
        Independent and enigmatical, Aquarians are unique.
        There is no one quite like an Aquarius, and because each is so incredibly individual, it can be tough to describe them as a group.
        Aquarians don't like labels, and may shy away from any adjective—even the good ones you might bestow upon them.
        Aquarians believe in the nature of change and evolution, and even though they're a fixed sign, 
        they may not necessarily believe they are the "same" people they were when they were born.
        Relationship going nowhere? Find out why with a Psychic Love Reading.
        Aquarians have a strong sense of social justice and making the world a better place,
        and see themselves as just one link in an endless human chain.
        They are very concerned about others, not because of how others treat them or how they want others to treat them. `
    inptV.value = "";
    inptP.value= "";
       }else if (m == 1 && day > 18 || m == 2 && day < 21 ){
        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Pisces.html"><strong> Pisces </strong></a>`;
        para.innerHTML =`
        Element: Water</br>
        Polarity: Negative</br>
        Quality: Mutable</br>
        Ruling Planet: Neptune</br>
        Ruling House: Twelfth</br>
        Spirit Color: Sea green</br>
        Lucky Gem: Moonstone</br>
        Flower: Water lily</br>
        Top Love Matches: <a href="Virgo.html"><strong> Virgo </strong></a>`
        writ.innerHTML =`<h4>Pisces Zodiac Sign:</h4> 
        Smart, creative, and deeply intuitive, Pisces can be close to psychic.
        Pisces feel things deeply, and have incredibly strong gut reactions.
        A Pisces "knows" things from deep within, and can often judge whether a person or situation is good or bad.
        That doesn't mean a Pisces ignores the logical part of their brain, though. Deeply intelligent,
        Pisces have a profound respect for the power of the human mind. Is it a surprise that Albert Einstein was a Pisces?
        Pisces are sensitive, and get along well in small groups of people. Sometimes,
        a Pisces may feel like they have an internal and external self, and they may need to spend a lot of time solo to recalibrate those two halves of themselves.
        A Pisces is rarely lonely when they are by themselves, and have an active imagination. Creative,
        Pisces love spending time reading, exploring or creating art or music, and understanding their emotions through art.`
    inptV.value = "";
    inptP.value= "";
       }else if (m == 2 && day > 20 || m == 3 && day < 20 ){

        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Aries.html"><strong> Aries </strong></a>`;
        para.innerHTML =`
        Element: Fire</br>
        Polarity: Positive</br>
        Quality: Cardinal</br>
        Ruling Planet: Mars</br>
        Ruling House: First</br>
        Spirit Color: Red</br>
        Lucky Gem: Diamond</br>
        Flower: Thistle & honeysuckle</br>
        Top Love Matches:  <a href="Sagittarius.html"><strong> Sagittarius </strong></a>`
        writ.innerHTML =`<h4>Aries Zodiac Sign:</h4> 
        The first sign of the Zodiac, Aries are the trailblazers. 
        Passionate and independent, Aries will never do something just because 
        everyone else is doing it—a Ram needs to be 100 percent committed to the task at hand. Competitive to the max,
        the best way to motivate an Aries is to turn something into a contest. Aries will put everything they have (and then some) into winning. Loyal,
        smart, and impulsive, they always have multiple projects on their mind, and won't be satisfied until their work, social life, 
        and personal lives line up exactly with the dream life they've envisioned.
        Those who are drawn to magnetic Aries may have trouble keeping up—but if they can, 
        they'll have a friend for life.`
    inptV.value = "";
    inptP.value= "";
       }else if (m == 3 && day > 19 || m == 4 && day < 21 ){

        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Tuarus.html"><strong> Tuarus </strong></a>`;
        para.innerHTML =`Element: Earth</br>
        Polarity: Negative</br>
        Quality: Fixed</br>
        Ruling Planet: Venus</br>
        Ruling House: Second</br>
        Spirit Color: Pink</br>
        Lucky Gem: Emerald</br>
        Flower: Rose, Poppy, & Foxglove</br>
        Top Love Matches: <a href="Cancer.html"><strong> Cancer </strong></a> & <a href="Virgo.html"><strong> Virgo </strong></a>`
        writ.innerHTML =`<h4>Taurus Zodiac Sign:</h4> 
        Smart, ambitious, and trustworthy, Taurus is the anchor of the Zodiac. 
        Amazing friends, colleagues, and partners, 
        Taureans value honesty above all else and are proud that their personal relationships tend to be drama free.
        Bulls get the reputation of being stubborn, but they're not always stuck in their ways.
        This searching sign is willing to see another point of view, but they won't flip-flop on an opinion just to make someone else happy.
        They will shift their thinking only if they truly have a change of heart.`
    inptV.value = "";
    inptP.value= "";
       }else if ( m == 4 && day > 20 || m == 5  && day < 21 ){

        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Gemini.html"><strong> Gemini </strong></a>`;
        para.innerHTML =`Element: Air</br>
        Polarity: Positive</br>
        Quality: Mutable</br>
        Ruling Planet: Mercury</br>
        Ruling House: Third</br>
        Spirit Color: Yellow</br>
        Lucky Gem: Tiger's Eye & Emerald</br>
        Flower: Lavender & Lily of the Valley</br>
        Top Love Matches: <a href="Aries.html"><strong> Aries </strong></a> & <a href="Leo.html"><strong> Leo </strong></a>`
        writ.innerHTML =`<h4>Gemini Zodiac Sign:</h4> 
        Smart, passionate, and dynamic, Gemini is characterized by the Twins, 
        Castor and Pollux, and is known for having two different sides they can display to the world. 
        Expert communicators, Gemini is the chameleon of the Zodiac, adept at blending into different groups 
        based on the vibe and energy they perceive. While they're also amazing at showcasing surface traits, 
        the Gemini well runs deep, which is why the Twins are one of the Zodiac's most emotionally intelligent signs.`
    inptV.value = "";
    inptP.value= "";
       }else if ( m == 5 && day > 20 || m == 6  && day < 23 ){

        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Cancer.html"><strong> Cancer </strong></a>`;
        para.innerHTML =`Element: Water</br>
        Polarity: Negative</br>
        Quality: Cardinal</br>
        Ruling Planet: Moon</br>
        Ruling House: Fourth</br>
        Spirit Color: Violet</br>
        Lucky Gem: Ruby, pearl</br>
        Flower: Orchid and white rose</br>
        Top Love Matches: <a href="Tuarus.html"><strong> Tuarus </strong></a> & <a href="Pisces.html"><strong> Pisces </strong></a>`
        writ.innerHTML =`<h4>Cancer Zodiac Sign:</h4> 
        Emotional, intuitive, and practically psychic; 
        ruled by the moon and characterized by the crab, Cancer has so much going on in its watery depths. 
        Cancers may seem prickly and standoffish at first meeting, once they make the decision to become 
        friends with someone, that person has a friend for life.
        Most Cancers have been called psychic at some point, and with good reason—Cancer can often 
        intuit relationships, ideas, and motivations before anyone has actually spoken. That can make for challenging 
        interactions with this sign—Cancer hates small talk, especially when it contains white lies (like saying, 
        "How nice to see you!" when it's clear that both parties would rather avoid each other). That's why social 
        gatherings can be overwhelming for Cancers. 
        They'd much rather spend time in small groups where everyone is on the same page.`
    inptV.value = "";
    inptP.value= "";
       }else if (m == 6 && day > 22 || m == 7  && day < 23 ){

        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Leo.html"><strong> Leo </strong></a>`;
        para.innerHTML =`Element: Fire</br>
        Polarity: Positive</br>
        Quality: Fixed</br>
        Ruling Planet: Sun</br>
        Ruling House: Fifth</br>
        Spirit Color: Gold</br>
        Lucky Gem: Carnelian</br>
        Flower: Sunflower & marigold</br>
        Top Love Matches: <a href="Libra.html"><strong> Libra </strong></a>`
        writ.innerHTML =`<h4>Leo Zodiac Sign:</h4> 
        Bold, intelligent, warm, and courageous, fire sign Leo is a natural leader of the 
        Zodiac, ready to blaze a trail, vanquish injustice, and make a name for themselves along the way. 
        Blessed with high self-esteem, Lions know that they possess enviable traits—and they're proud of them. 
        They don't believe in false modesty and will be the first to praise themselves for a job well done. 
        But Leo isn't self-aggrandizing or unwilling to roll up those sleeves and do the work: this sign knows that 
        in order to be respected and admired, 
        he or she needs to put in the effort worthy of a leader.`
    inptV.value = "";
    inptP.value= "";
       }else if (m == 7 && day > 22 || m == 8  && day < 23 ){

        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Virgo.html"><strong> Virgo </strong></a>`;
        para.innerHTML =`Element: Earth</br>
        Polarity: Negative</br>
        Quality: Mutable</br>
        Ruling Planet: Mercury</br>
        Ruling House: Sixth</br>
        Spirit Color: Silver</br>
        Lucky Gem: Peridot</br>
        Flower: Sunflower & marigold</br>
        Top Love Matches: <a href="Cancer.html"><strong> Cancer </strong></a>`
        writ.innerHTML =`<h4>Virgo Zodiac Sign:</h4> 
        Smart, sophisticated, and kind, Virgo gets the job done without complaining. Virgos are amazing friends,
        always there to lend a hand and also lend advice.
        Practical Virgos are incredibly adept at big picture thinking, and planning out their life, their vacations, 
        and what they're going to do today isn't a drag it makes them feel in control and secure.
        Virgo has a rich inner life, and can sometimes seem shy at first meeting. A Virgo won't spill secrets right away, 
        and it's important to earn a Virgo's trust. But once you do, that Virgin will be a friend for life. `
    inptV.value = "";
    inptP.value= "";
       }else if (m == 8 && day > 22 || m == 9  && day < 23 ){
        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Libra.html"><strong> Libra </strong></a>`;
        para.innerHTML =`Element: Air</br>
        Polarity: Positive</br>
        Quality: Cardinal</br>
        Ruling Planet: Venus</br>
        Ruling House: Seventh</br>
        Spirit Color: Blue</br>
        Lucky Gem: Sapphire</br>
        Flower: Rose</br>
        Top Love Matches: <a href="Gemini.html"><strong> Gemini </strong></a>`
        writ.innerHTML =`<h4>Libra Zodiac Sign:</h4> 
        Intelligent, kind, and always willing to put others before themselves, Libras value harmony in all forms. 
        Ruled by Venus, the planet of beauty, Libra adores a life that looks good. As the master of compromise and 
        diplomacy, Libra is adept at seeing all points of view, and excels at crafting compromises and effecting 
        mediation between others. This sign has a rich inner life yet loves other people, 
        and they're always happiest with a large group of friends, family, and coworkers on whom they can count.`
    inptV.value = "";
    inptP.value= "";
       }else if ( m == 9 && day > 22 || m == 10  && day < 22 ){
        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Scorpio.html"><strong> Scorpio </strong></a>`;
        para.innerHTML =`Element: Water</br>
        Polarity: Negative</br>
        Quality: Fixed</br>
        Ruling Planet: Pluto, Mars</br>
        Ruling House: Eighth</br>
        Spirit Color: Black</br>
        Lucky Gem: Topaz & opal</br>
        Flower: Hibiscus & geraniums</br>
        Top Love Matches: <a href="Cancer.html"><strong> Cancer </strong></a>.`
        writ.innerHTML =`<h4>Scorpio Zodiac Sign:</h4> 
        Passionate, independent, and unafraid to blaze their own trail no matter what others think,
        Scorpios make a statement wherever they go. They love debates, aren't afraid of controversy, 
        and won't back down from a debate. They also hate people who aren't genuine, and are all about 
        being authentic—even if authentic isn't pretty.
        Because of all of these traits, a Scorpio can seem intimidating and somewhat closed off to those 
        who don't know them well.`
    inptV.value = "";
    inptP.value= "";
       }else if ( m == 10 && day > 21 || m == 11  && day < 22 ){

        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Sagittarius.html"><strong> Sagittarius </strong></a>`;
        para.innerHTML =`Element: Fire</br>
        Polarity: Positive</br>
        Quality: Mutable</br>
        Ruling Planet: Jupiter</br>
        Ruling House: Ninth</br>
        Spirit Color: Light Blue</br>
        Lucky Gem: Topaz</br>
        Flower: Carnations & crocuses</br>
        Top Love Matches: <a href="Aries.html"><strong> Aries </strong></a>`
        writ.innerHTML =`<h4>Sagittarius Zodiac Sign:</h4> 
        Independent and strong-willed, Sagittarius personalities are all about going off the beaten path. 
        Sagittarius isn’t afraid to step away from the pack, and is a natural born leader who goes after 
        what he or she wants, regardless of what other people think. Sagittarius is a born adventurer, 
        and loves solo travel and exploration. Sagittarius also loves exploring the inner workings of their minds, 
        and love stretching their horizons through a good book or movie.`

    inptV.value = "";
    inptP.value= "";
       }else{
        pers.innerHTML =` Hi ${sentpass} your zodiac sign is <a href="Capricorn.html"><strong> Capricorn </strong></a>`;
        para.innerHTML =`Element: Earth</br>
        Polarity: Negative</br>
        Quality: Cardinal</br>
        Ruling Planet: Saturn</br>
        Ruling House: Tenth</br>
        Spirit Color: Dark blue</br>
        Lucky Gem: Lapis lazuli</br>
        Flower: Pansy</br>
        Top Love Matches: <a href="Virgo.html"><strong> Virgo </strong></a>`
        writ.innerHTML =`<h4>Capricorn Zodiac Sign:</h4> 
        Smart, hardworking, and fully in control of their destiny, a Capricorn will always get what they set 
        their mind to, in both personal and professional life—no excuses. Capricorns may get a reputation as 
        stubborn, but they simply know what they want, and also know how they wish other people would behave.
        Natural rule-followers, Capricorns thrive on order and love strict rules, hierarchies, and set ways to do things.`
    inptV.value = "";
    inptP.value= "";
       }
       const todayDate = new Date().getFullYear();
       const CurrentDate = current.getFullYear();
       const newMont = new Date().getMonth();
       const currentMont = current.getMonth();
       const yourAge = todayDate - CurrentDate;

       if(sentvalue == "" || sentpass==""){
        return;
       }else if (yourAge == 0 ){
        MonthAge = newMont - currentMont;
        age.innerHTML = `Age:  ${MonthAge} Months old.`  
          
      }else{
        age.innerHTML = `Age:  ${yourAge} years old.`
    
}
const genderField = document.getElementById('genderr');
    const s = genderField.selectedIndex;
    const genders = genderField.options[s].text;
    if(sentvalue == "" || sentpass==""){ 
    return;

} else {
    Gender.innerHTML=`Gender:  ${genders} `;
} 
 
}
       
