/*
    The Library class is a collection of paragraphs. When called it will
    return a selected paragraph based on a language and index value.
    Author: Daniel St Jean.
*/
class Library
{
    constructor(lang, index)
    {
        this.lang = lang;
        this.index = index;
        this.paragraph;
        this.english;
        this.french;
    }

    set paragraph(paragraph) { this._paragraph = paragraph; }
    get paragraph()
    {
        this.lang == "en" ? this._paragraph = this.english : this._paragraph = this.french;
        return this._paragraph;
    }

    set index(index) { this._index = index; }
    get index() { return this._index; }

    set english(enArray) { this._english = enArray; }
    set french(frArray) { this._french = frArray; }

    get english()
    {
        var returnVal;
        var enArray = [];

        enArray[0] = "Scolding is something common in student life. Being a naughty boy, " +
                        "I am always scolded by my parents. But one day I was severely scolded " +
                        "by my English teacher. She infact teaches well. But that day, " +
                        "I could not resist the temptation that an adventure of Nancy Drew offered. " +
                        "While she was teaching , I was completely engrossed in reading that book. " +
                        "Nancy Drew was caught in the trap laid by some smugglers and it was then " +
                        "when I felt a light tap on my bent head. The teacher had caught me red handed. " +
                        "She scolded me then and there and insulted me in front of the whole class. " +
                        "I was embarrassed. My cheeks burned being guilty conscious. When the class was over, " +
                        "I went to the teacher to apologize. When she saw that I had realized my mistake, " +
                        "she cooled down and then told me in a very kind manner how disheartening it was when " +
                        "she found any student not paying attention. I was genuinely sorry and promised to " +
                        "myself never to commit such a mistake again.";

        enArray[1] = "Days are not of equal value in one's life. Some bring happiness while others bring sadness. " +
                         "Sadness and happiness both are equally important to man's life, since they are the two sides of a coin. " +
                         "As we cannot forget the happiest day, we are unable to forget the saddest day of our life too. " +
                         "The saddest day of my life was the Diwali Day. Diwali is considered to be a happy festival and till " +
                         "last Diwali, it was my favorite festival. On last Diwali, my sister, my brother and I were busy " +
                         "lighting the fireworks. I was holding a 'fuljhari' in my hand and unfortunately my younger brother, " +
                         "who was standing just beside me, had a cracker in his hand. This cracker caught fire and a very loud " +
                         "explosion was heard which shook my sister and me. After that, we all could think of nothing else than " +
                         "blood stained cotton, bandage, dettol etc. My cousin took my brother to the doctor where he got 14 " +
                         "stitches in his forefinger and thumb. But at home, everybody kept cursing and blaming me for the mishap. " +
                         "That night, I could not sleep and I cried a lot. For the next few days, I bore the burden of this blame " +
                         "for being responsible for this unfortunate incident. " +
                         "I felt deeply guilty conscious which I was able to overcome after a long time.";

        enArray[2] = "Studying is the main source of knowledge. Books are indeed never failing friends of man. For a mature mind, " +
                        "reading is the greatest source of pleasure and solace to distressed minds. The study of good books ennobles " +
                        "us and broadens our outlook. Therefore, the habit of reading should be cultivated. A student should never " +
                        "confine himself to his schoolbooks only. He should not miss the pleasure locked in the classics, poetry, drama, " +
                        "history, philosophy etc. We can derive benefit    from other’s experiences with the help of books. " +
                        "The various sufferings, endurance and joy described in books enable us to have a closer look at human life. " +
                        "They also inspire us to face the hardships of life courageously. Nowadays there are innumerable books and " +
                        "time is scarce. So we should read only the best and the greatest among them. With the help of books we " +
                        "shall be able to make our thinking mature and our life more meaningful and worthwhile.";

        enArray[3] = "Recently, an exhibition 'Building A New India' was held in the capital. It was organized by the Ministry " +
                        "of Information and Broadcasting, Government of India. The exhibition was set up in the Triveni Kala Sangam. " +
                        "The chief exhibits were photographs, novels, some sculptures by Indian modern artists presenting Indian " +
                        "cultural inheritance. First of all, I visited the general section of the exhibition where different charts " +
                        "and photographs depicting India’s development in various fields were set. Most impressive photographs among " +
                        "these were those showing India’s nuclear development. The second section dealt with India’s magnificent " +
                        "historical background. I was fascinated by the pictures of Mohanjodaro excavation. Then I saw the most " +
                        "beautiful and colorful section of the exhibition i.e. the cultural section. It consisted of paintings, " +
                        "sculptures, photographs etc. The Rajasthani and Gujarati paintings were very colourful and attractive. " +
                        "This exhibition, inaugurated by the Prime Minister, lasted for a week. It proved to be of great educational " +
                        "value. It brushed up my knowledge about India as my motherland. It enhanced my respect for my great country, " +
                        "India. I would very much appreciate if the Indian government organized some more such exhibitions.";

        enArray[4] = "A teacher is called builder of the nation. The profession of teaching needs men and women with qualities " +
                        "of head and heart. There are many teachers in our school and a large number of teachers among them are highly " +
                        "qualified. I have great respect for all of them. Yet I have a special liking for Miss Y. Miss Y is a woman of " +
                        "great principles. She is jewel among all the teachers. Almost all the students respect her. She teaches us English. " +
                        "She is quite at home in this subject. She takes keen interest in teaching students. Simple living and " +
                        "high thinking is her motto. She is a woman of sweet temper and is always ready to help in difficulties. " +
                        "She treats us like her own brothers and sisters. She is an ideal teacher. It is these qualities of head " +
                        "and heart that have endeared Miss Y to the students and teachers alike. She is an ideal teacher in real " +
                        "sense of the word. She is the real model to emulate. May she live as long as there is sweet fragrance in the flowers?";

        return returnVal = enArray[this._index];
    }

    get french()
    {
        var returnVal;
        var frArray = [];

        frArray[0] = "La réprimande est quelque chose de commun dans la vie étudiante. Étant un vilain garçon, je suis toujours" +
                        "réprimandé par mes parents. Mais un jour j'ai été sévèrement réprimandé par mon professeur d'anglais." +
                        "Elle enfait bien enseigne. Mais ce jour-là, je n'ai pas pu résister à la tentation offerte par l'aventure" +
                        "de Nancy Drew. Pendant qu'elle enseignait, j'étais complètement absorbée par la lecture de ce livre. Nancy" +
                        "Drew a été prise dans le piège tendu par des passeurs et c’est alors que j’ai senti une légère tape sur ma" +
                        "tête courbée. Le professeur m'avait surpris en flagrant délit. Elle m'a grondé alors et là et m'a insulté" +
                        "devant toute la classe. J'étais embarrassé. Mes joues brûlaient d'être conscientes. À la fin du cours, je" +
                        "suis allé voir l'enseignant pour m'excuser. Quand elle a vu que j'avais compris mon erreur, elle s'est calmée" +
                        "puis m'a dit très gentiment à quel point c'était décourageant de constater qu'un étudiant ne prêtait pas attention." +
                        "J'étais vraiment désolé et je me suis promis de ne plus jamais commettre une telle erreur.";

        frArray[1] = "Les jours n'ont pas la même valeur dans la vie. Certains apportent le bonheur tandis que d'autres apportent" +
                        "la tristesse. La tristesse et le bonheur sont tous deux d'importance égale dans la vie de l'homme, car ils" +
                        "sont les deux faces d'une pièce de monnaie. Comme nous ne pouvons pas oublier le jour le plus heureux, nous ne" +
                        "pouvons pas oublier le plus triste jour de notre vie. Le jour le plus triste de ma vie était le Diwali Day." +
                        "Diwali est considéré comme un festival heureux et jusqu'à la dernière fois, c'était mon festival préféré." +
                        "Le dernier jour de Diwali, ma sœur, mon frère et moi étions occupés à allumer le feu d'artifice. Je tenais un" +
                        "fuljhari dans la main et, malheureusement, mon frère cadet, qui se tenait juste à côté de moi, avait un craquelin" +
                        "à la main. Ce biscuit a pris feu et une explosion très forte a été entendue qui a secoué ma sœur et moi. Après cela," +
                        "nous ne pouvions plus penser à rien d'autre que du coton taché de sang, des bandages, du dettol, etc." +
                        "Mon cousin a emmené mon frère chez le médecin où il a eu 14 points de suture à l'index et au pouce. Mais à la maison" +
                        "tout le monde n'arrêtait pas de maudire et de me blâmer pour l'accident. Cette nuit-là, je n'ai pas pu dormir" +
                        "et j'ai beaucoup pleuré. Au cours des prochains jours, j’ai porté le fardeau de ce blâme pour être responsable de" +
                        "cet incident malheureux. Je me suis senti profondément coupable, conscient que j'ai pu vaincre après un long moment.";

        frArray[2] = "L'étude est la principale source de connaissances. Les livres ne sont en effet jamais un échec pour les amis de" +
                        "l'homme. Pour un esprit mature, la lecture est la plus grande source de plaisir et de réconfort pour les esprits" +
                        "en détresse. L'étude de bons livres nous ennoblit et élargit nos perspectives. Par conséquent, l'habitude de lire" +
                        "devrait être cultivée. Un élève ne devrait jamais se limiter à ses manuels scolaires. Il ne doit pas manquer le" +
                        "plaisir des classiques, de la poésie, du théâtre, de l’histoire, de la philosophie, etc. Nous pouvons tirer profit" +
                        "de l’expérience d’autres expériences à l’aide de livres. Les différentes souffrances, l'endurance et la joie décrites" +
                        "dans les livres nous permettent d'examiner de plus près la vie humaine. Ils nous incitent également à affronter les" +
                        "difficultés de la vie avec courage. De nos jours, il existe d'innombrables livres et le temps est compté. Nous ne" +
                        "devrions donc lire que le meilleur et le plus grand d'entre eux. Avec l’aide de livres, nous pourrons rendre notre" +
                        "pensée mature et notre vie plus significative et plus utile.";

        frArray[3] = "Récemment, une exposition intitulée «Construire une nouvelle Inde» s'est tenue dans la capitale. Il était organisé" +
                        "par le ministère de l'information et de la radiodiffusion du gouvernement indien. L'exposition a été installée" +
                        "dans le Triveni Kala Sangam. Les principales pièces exposées étaient des photographies, des romans, des sculptures" +
                        "d’artistes indiens modernes présentant le patrimoine culturel indien. Tout d’abord, j’ai visité la section générale" +
                        "de l’exposition où différents tableaux et photographies décrivant le développement de l’Inde dans divers domaines" +
                        "ont été exposés. Les photographies les plus impressionnantes sont celles montrant le développement nucléaire de l’Inde." +
                        "La deuxième section traitait du magnifique contexte historique de l’Inde. J'ai été fasciné par les images de fouilles" +
                        "de Mohanjodaro. Ensuite, j'ai vu la section la plus belle et la plus colorée de l'exposition, à savoir la section" +
                        "culturelle. Elle consistait en peintures, sculptures, photographies, etc. Les peintures du Rajasthan et du Gujarati" +
                        "étaient très colorées et attrayantes. Cette exposition, inaugurée par le Premier ministre, a duré une semaine." +
                        "Cela s'est avéré être d'une grande valeur éducative. Cela a permis de parfaire ma connaissance de l'Inde en tant" +
                        "que ma patrie. Cela a renforcé mon respect pour mon grand pays, l'Inde. J'apprécierais beaucoup que le gouvernement" +
                        "indien organise d'autres expositions de ce type.";

        frArray[4] = "Un enseignant s'appelle constructeur de la nation. La profession d'enseignant a besoin d'hommes et de femmes dotés de" +
                        "qualités de tête et de cœur. Il y a beaucoup d'enseignants dans notre école et un grand nombre d'entre eux sont" +
                        "hautement qualifiés. J'ai beaucoup de respect pour chacun d'eux. Pourtant, j'ai un penchant particulier pour Mlle Y." +
                        "Mlle Y est une femme de grands principes. Elle est un joyau parmi tous les professeurs. Presque tous les étudiants la" +
                        "respectent. Elle nous enseigne l'anglais. Elle est tout à fait à l'aise dans ce sujet. Elle s'intéresse vivement à" +
                        "l'enseignement aux étudiants. La vie simple et la haute pensée est sa devise. C'est une femme de tempérament doux et" +
                        "elle est toujours prête à aider en cas de difficultés. Elle nous traite comme ses propres frères et soeurs." +
                        "Elle est une enseignante idéale. Ce sont ces qualités de tête et de cœur qui ont séduit Miss Y auprès des étudiants" +
                        "et des enseignants. Elle est une enseignante idéale au vrai sens du mot. Elle est le vrai modèle à imiter. Peut-elle" +
                        "vivre aussi longtemps qu'il y a un doux parfum dans les fleurs?";

        return returnVal = frArray[this._index];
    }
}
