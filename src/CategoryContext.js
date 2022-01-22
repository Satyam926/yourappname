import React,{useState,createContext} from 'react'

export const CategoryContext = createContext();
export const DataProvider=(props)=>{
    const [Data,setData ] = useState([
        {
            Id: "1",
            Category: "Bollywood",
            Name: " Atrangi Re",
            Date: "24 Dec 2021",
            Details:"Type:Comedy ,Drama ,Romance | Imdb: 6.7/10| Directed: Aanand L. Rai", 
            Stars: "Akshay Kumar ,Dhanush ,Sara Ali Khan ",
            Img: "https://imgshare.info/images/2021/12/23/f31e6961718504892ebd0d2a68d01305.jpg",
            About: "A Tamil boy meets a girl from Bihar, what follows is a love story for the ages. A non-linear narrative of two romances running in parallel from different timelines."
       },
       {
        Id: "2",
        Category: "Bollywood",
        Name: "Antim ",
        Date: "25 Nov 2021",
        Details:"Type:Action ,Crime ,Drama  | Imdb:7.6/10  | Directed:Mahesh Manjrekar | Stars:Salman Khan ,Aayush Sharma ,Mahima Makwana  ",
        Img: "https://imgshare.info/images/2021/12/24/55744c4e84a4785a1eca99428686c1c7.jpg",
        About: "After witnessing the pain and suffering his family went through, a farmer’s son rises to power as he starts his journey as a gangster and spirals into a dark game of politics and power, meanwhile a strict cop starts following his trail to stop him before he becomes all powerful in the city."
   },
   {
    Id: "3",
    Category: "Bollywood",
    Name: "Meenaskshi Sundareshwar ",
    Date: "5 November 2021",
    Details:"Type: Comedy ,Romance | Imdb: 8.2/10 | Directed:Vivek Soni | Stars:Sanya Malhotra ,Abhimanyu Dasani ,Trishaan  ",
    Img: "https://imgshare.info/images/2021/11/05/76aa9d732d69950ae9b9bb64e7c957d7.jpg",
    About: "Forced to live apart due to a unique job prospect, two newlyweds face the hassles, hiccups – and hilarity – that arise from their long distance marriage."
},
{
    Id: "4",
    Category: "Bollywood",
    Name: "Jay Bhim ",
    Date: "2 November 2021",
    Details:"Type:Crime ,Drama  | Imdb:8.9/10  | Directed: T.J. Gnanavel| Stars: Suriya ,Rajisha Vijayan ,Prakash Raj ",
    Img: "https://imgshare.info/images/2021/11/01/3fdce9ac3d2ba16fe95113ef1b0494b4.jpg",
    About: "Jai Bhim is a story of a lawyer who fights for the land rights of tribal people. " 

   
},
{
    Id: "5",
    Category: "Bollywood",
    Name: " Mohabbat",
    Date: "19 September 1997",
    Details:"Type: Drama ,Romance | Imdb: 5.4/10 | Directed: Reema Rakesh Nath| Stars: Madhuri Dixit ,Sanjay Kapoor ,Akshaye Khanna ",
    Img: "https://imgshare.info/images/2021/11/16/6ac4b7abf53fa89ac294a3eb27980dee.jpg",
    About: "The wealthy Kapoor family consists of Madanlal, his wife, Geetarani, daughter, Roshni, and son, Gaurav. One day while Gaurav is returning home from the Oriental Bank of Commerce, he is attacked by a group of men led by Shiva, but a young man named Rohit Malhotra comes to his rescue. Gaurav hires Rohit in his firm, and both become fast and inseparable friends. Both unknowingly fall in love with the same woman, Shweta Sharma, but Gaurav finds out and decides to step away. Shweta and Rohit are in love and want to get married. Then Shiva attacks Rohit and throws him off a cliff. Believing him to be dead, a shocked and devastated Shweta loses her voice. The Kapoors find out that Gaurav loves Shweta and they approach her brother, Shekhar, and arrange their marriage. A reluctant Shweta gives her accent. It is then that she starts seeing Rohit, while Gaurav starts drifting away from her, and unknown to anyone, is hiding a deadly secret. The question remains is Shweta delusional, and what exactly is Gaurav’s secret that he does not want anyone to know?"
},
{
    Id: "6",
    Category: "Bollywood",
    Name: "Narendra Modi ",
    Date: "24 May 2019",
    Details:"Type: Biography ,Drama | Imdb:3.0/10  | Directed:Omung Kumar | Stars:  Vivek Oberoi ,Manoj Joshi ,Darshan Kumaar",
    Img: "https://imgshare.info/images/2021/09/22/ee73a2d46c384dc414133641cbbf3a9f.jpg",
    About: "Biography of India’s Prime Minister Shri Narendra Modi."
},
{
    Id: "7",
    Category: "Bollywood",
    Name: " Rab ne bana di jodi",
    Date: "11 Dec 2008",
    Details:"Type: Comedy, Drama | Imdb: 7.2/10 | Directed: Aditya Chopra| Stars: Shah Rukh Khan, Anushka Sharma, Vinay Pathak ",
    Img: "https://imagetot.com/images/2021/08/28/1aab959da04533521c74da4c998c69a0.jpg",
    About: "Have you ever stopped to think if the most ordinary, uninteresting, unobtrusive man you might see on the road or around you might have a love story to tell? Maybe not. How can an ordinary man have a breathtaking, goose flesh igniting, awe inspiring love story of all things to tell? This is what happened to Surinder Sahni (Shahrukh Khan) – a simple, clean hearted, honest man, leading a humdrum life."

    
},
{
    Id: "8",
    Category: "Hollywood",
    Name: " The Commando", 
    Date: "3 Feb 2022",
    Details:"Type:Action, Thriller  | Imdb:  3.4/10 | Directed:Asif Akbar | Stars:  Mickey Rourke, Brendan Fehr, Michael Jai White",
    Img: "https://imagetot.com/images/2022/01/08/8b021c1fa6d25ae684853ee448da8a14.jpg",
    About: "A DEA agent with PTSD returns home after a botched mission and must now protect his family from a home invasion after a recently freed convict and his henchmen come after their stash of millions inside of the agent’s home."

    
},
{
    Id: "9",
    Category: "Hollywood",
    Name: "1XBET ",
    Date: "15 Dec 2021",
    Details:"Type:Action, Adventure  | Imdb: 8.9/10 | Directed:Jon Watts | Stars:  Tom Holland, Zendaya, Benedict Cumberbatch",
    Img: "https://imagetot.com/images/2021/12/30/4af7ea833378fcd3eed9e8a437209265.jpg",
    About: "With Spider-Man identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man. "

   
},
{
    Id: "10",
    Category: "Hollywood",
    Name: "Avengers Endgame ",
    Date: "26 April 2019",
    Details:"Type:Action ,Adventure ,Sci-Fi  | Imdb:   8.6/10| Directed:Anthony Russo, Joe Russo | Stars:Robert Downey Jr., Chris Evans, Mark Ruffalo  ",
    Img: "https://imgshare.info/images/2019/04/24/Avengers-Endgame-2019-Full-Movie-Download-HD.jpg",
    About: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos’s actions and undo the chaos to the universe, no matter what consequences may be in store, and no matter who they face…"
},
{
    Id: "11",
    Category: "Hollywood",
    Name: " Batman v Superman Dawn of Justice 2016",
    Date: "25 March 2016",
    Details:"Type:Action, Adventure  | Imdb:6.8/10  | Directed:  Zack Snyder| Stars:  Ben Affleck, Henry Cavill, Amy Adams ",
    Img: "https://imagetot.com/images/2022/01/06/16b002e6acccacc8dfb546c9b5a2dd7f.jpg",
    About: " Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
    
},
{ 
    Id: "12",
    Category: "Hollywood",
    Name: "Black Friday  ",
    Date: "19 November 2021",
    Details:"Type: Comedy, Horror  | Imdb: 5.5/10 | Directed:  Casey Tebo| Stars: Devon Sawa, Bruce Campbell, Michael Jai White ",
    Img: "https://imagetot.com/images/2021/11/22/96173276f95eb1ca6d9e171d78df7fac.jpg",
    About: "A group of toy store employees must protect each other from a horde of parasite infected shoppers."
},

{
    Id: "13",
    Category: "Hollywood",
    Name: "Hide and Seek ",
    Date: "19 November 2021",
    Details:"Type: Thriller | Imdb: 4.7/10  | Directed:Joel David Moore | Stars: Joe Pantoliano, Jonathan Rhys Meyers, Jacinda Barrett ",
    Img: "https://imagetot.com/images/2021/11/20/39c5dc93e337029f1fb85fa994f5e73a.jpg",
    About: "When a wealthy businessman follows a lead to find his missing brother, he dives headlong into a twisted underworld of squatters and vagrants that threatens to tear apart his family as he struggles to maintain his sanity."
},
{
    Id: "14",
    Category: "Hollywood",
    Name: "King Richard ",
    Date: "18 November 2021",
    Details:"Type: Biography, Drama | Imdb:7.3/10  | Directed:Reinaldo Marcus Green | Stars:Will Smith, Aunjanue Ellis, Jon Bernthal  ",
    Img: "https://imagetot.com/images/2021/11/20/27073bbd18b0b4572115aae8bf67b22e.jpg",
    About: "A look at how tennis superstars Venus and Serena Williams became who they are after the coaching from their father Richard Williams."
},

{
    Id: "15",
    Category: "Technology",
    Name: "IOS",
    Date: "29 June 2007",
    Details:" iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices, including the iPhone  ",
    Img: "https://www.apple.com/newsroom/images/product/os/ios/standard/Apple_ios14-app-library-screen_06222020_inline.jpg.large.jpg",
    About: "This introduction to iOS free tutorial for beginners helps you learn about the programming language used for the Apple platform. This includes the iOS framework, developer tools, learning to create, read, view the code in order to build the iOS app. This tutorial also includes iOS use cases and practical applications. ‘If you had to start over as a Programmer, what technologies, platforms and paradigms you need to master now?’ When asked this question, most entry-level applicants and professionals mention mobile application development for both iOS and Android in their list."
},
{
    Id: "16",
    Category: "Technology",
    Name: "Cloud Computing ",
    Date: "9 Aug 2006",
    Details:"  Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center. ",
    Img: "https://miro.medium.com/max/640/1*ngkHgQq7ij1NBNr62er3zA.png",
    About: "Apple (AAPL) iOS is the operating system for iPhone, iPad, and other Apple mobile devices. Based on Mac OS, the operating system which runs Apple’s line of Mac desktop and laptop computers, Apple iOS is designed for easy, seamless networking between a range of Apple products."
},
{
    Id: "17",
    Category: "Technology",
    Name: "Android ",
    Date: "September 23, 2008",
    Details:"Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. ... Competing Android ecosystems and forks include Fire OS (developed by Amazon) or LineageOS.  ",
    Img: "https://www.tutorialspoint.com/android/images/jistory.jpg",
    About: "  Android is an open source and Linux-based Operating System for mobile devices such as smartphones and tablet computers. Android was developed by the Open Handset Alliance, led by Google, and other companies. "
},
{
    Id: "18",
    Category: "Technology",
    Name: "Linux ",
    Date: "17 September 1991",
    Details:"  Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution",
    Img: "https://www.howtogeek.com/wp-content/uploads/2021/09/linux_tux_hero_2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1",
    About: "Think about an OS like a car engine. An engine can run on its own, but it becomes a functional car when it’s connected with a transmission, axles, and wheels. Without the engine running properly, the rest of the car won’t work.Linux was designed to be similar to UNIX, but has evolved to run on a wide variety of hardware from phones to supercomputers. Every Linux-based OS involves the Linux kernel—which manages hardware resources—and a set of software packages that make up the rest of the operating system.The OS includes some common core components, like the GNU tools, among others. These tools give the user a way to manage the resources provided by the kernel, install additional software, configure performance and security settings, and more. All of these tools bundled together make up the functional operating system. Because Linux is an open source OS, combinations of software can vary between Linux distributions."
},
{
    Id: "19",
    Category: "Technology",
    Name: "5G ",
    Date: "April 3, 2019",
    Details:" 5G is the 5th generation mobile network. It is a new global wireless standard after 1G, 2G, 3G, and 4G networks. 5G enables a new kind of network that is designed to connect virtually everyone and everything together including machines, objects, and devices. ",
    Img: "https://www.qualcomm.com/sites/ember/files/styles/optimize/public/components/two-column-hdi/side/what-is-5g-side-image.png?itok=NEHFKCza",
    About: "5G is designed to deliver peak data rates up to 20 Gbps based on IMT-2020 requirements. Qualcomm Technologies’ flagship 5G solutions, the Qualcomm® Snapdragon™ X65 is designed to achieve up to 10 Gbps in downlink peak data rates.But 5G is about more than just how fast it is. In addition to higher peak data rates, 5G is designed to provide much more network capacity by expanding into new spectrum, such as mmWave.5G can also deliver much lower latency for a more immediate response and can provide an overall more uniform user experience so that the data rates stay consistently high—even when users are moving around. And the new 5G NR mobile network is backed up by a Gigabit LTE coverage foundation, which can provide ubiquitous Gigabit-class connectivity."
},{
    Id: "20",
    Category: "Technology",
    Name: "Windows ",
    Date: "20 November 1985",
    Details:" Microsoft Windows, commonly referred to as Windows, is a group of several proprietary graphical operating system families, all of which are developed and marketed by Microsoft. Each family caters to a certain sector of the computing industry. ",
    Img: "https://upload.wikimedia.org/wikipedia/en/5/50/Windows_10_Home_Version_21H1_Desktop.png",
    About: "Windows 10 is a major release of the Windows NT operating system developed by Microsoft. It is the successor to Windows 8.1, which was released nearly two years earlier, and itself was released to manufacturing on July 15, 2015, and broadly released for the general public on July 29, 2015.[18] Windows 10 was made available for download via MSDN and TechNet, as a free upgrade for retail copies of Windows 8 and Windows 8.1 users via the Windows Store, and to Windows 7 users via Windows Update. Windows 10 receives new builds on an ongoing basis, which are available at no additional cost to users, in addition to additional test builds of Windows 10, which are available to Windows Insiders. Devices in enterprise environments can receive these updates at a slower pace, or use long-term support milestones that only receive critical updates, such as security patches, over their ten-year lifespan of extended support.Windows 10 received generally positive reviews upon its original release. Critics praised Microsoft's decision to provide the desktop-oriented interface in line with previous versions of Windows, contrasting the tablet-oriented approach of Windows 8, although Windows 10's touch-oriented user interface mode was criticized for containing regressions upon the touch-oriented interface of its predecessor. Critics also praised the improvements to Windows 10's bundled software over Windows 8.1, Xbox Live integration, as well as the functionality and capabilities of the Cortana personal assistant and the replacement of Internet Explorer with Microsoft Edge. However, media outlets have been critical of the changes to operating system behaviors, including mandatory update installation, privacy concerns over data collection performed by the OS for Microsoft and its partners, and adware-like tactics used to promote the operating system on its release."
},
{
    Id: "21",
    Category: "Technology",
    Name: "Python",
    Date: "",
    Details:"  Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    Img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",
    About: "Guido van Rossum began working on Python in the late 1980s, as a successor to the ABC programming language, and first released it in 1991 as Python 0.9.0.[34] Python 2.0 was released in 2000 and introduced new features, such as list comprehensions and a cycle-detecting garbage collection system (in addition to reference counting). Python 3.0 was released in 2008 and was a major revision of the language that is not completely backward-compatible. Python 2 was discontinued with version 2.7.18 in 2020"
},{
    Id: "22",
    Category: "Fitness",
    Name: " Sukhasana",
    OriginDate: " In 19th century Sritattvanidhi describes and illustrates the pose.",
    Details:" Sukhasana, easy pose, is a simple cross-legged sitting asana in hatha yoga, sometimes used for meditation in both Buddhism and Hinduism. ",
    Img: "http://www.forceful-tranquility.com/wp-content/uploads/2020/12/Sitting_in_Sukhasana.jpg",
    About: "Easy Pose (Sukhasana) is the name for any comfortable, cross-legged, seated position, and one of the most basic poses used in yoga practice and meditation. In this case, however, easy doesn't mean the opposite of difficult. It means with ease.So, sitting in Sukhasana is actually sitting any way you can with ease.1 For some people, using props such as blankets, towels, and yoga blocks can help you feel as comfortable as possible in this pose.Benefits-1)Easy Pose is a hip-opening pose that stretches the knees and ankles and strengthens the back. It is also a calming pose and it is one commonly used for meditation and practicing breathing exercises.2)While children often sit in this position, adults get used to sitting in chairs and develop tight hips. Easy Pose can help open up tight hips.3)Sukhasana offers a variety of benefits for people who are pregnant. In addition to opening the hips, it helps stretch the spine, increases energy, uplifts mood, improves digestion, and betters breathing."
},
{
    Id: "23",
    Category: "Fitness",
    Name: " Bhujangasana ",
    Date: " 17th century ",
    Details:" “Bhujangasana, also known as Cobra Pose, is a reclining back-bending asana in Hatha Yoga for strengthening the vertebral column, and acute stretching of shoulder, abdomen, thorax and lungs. It is generally performed in a cycle of asanas in Surya Namaskar as an alternative asana to Urdhva Mukha Svanasana (Upward Dog Pose).” ",
    Img: "https://c.ndtvimg.com/2020-03/m68dnhc_yoga_625x300_01_March_20.jpg",
    About: "Bhujangasana is a back bending pose which is also a part of the traditional Surya Namaskar sequence coming at step 8, and step 20. In Sanskrit, the word Bhujangasana comes a combination of two words- 'bhujanga' which translates to 'cobra' or and 'asana' meaning 'posture'. Even visually it reflects the posture of a cobra that has its hood raised, and hence it is also known as 'Cobra Pose'.Start your practise with Sukshma Vyayam or subtle exercises. These consist of gentle rotation of neck, arms, wrists, hips, ankles to slowly warm up the joints. Walk around briskly, and stretch and mobilize your muscles. This will prepare your body for a practice, and keep you safe from practice-related injuries. Before you attempt any back-bending postures, ensure that your body is sufficiently warmed up."
},
{
    Id: "24",
    Category: "Fitness",
    Name: "Vakrasana ",
    Date: "in ancient history",
    Details:" Vakrasana is also known as the Ardha Matsyendrasana or the half spinal tiwts pose or the half lord of the fishes pose. This Yoga asana is named after yogi Matsyendranath. ",
    Img: "https://www.sureshotayurveda.com/blog/wp-content/uploads/2020/09/vak_1601351855258-678x381.jpg",
    About: "Vakrasana yoga is an amazing spinal twist pose. Vakrasana is a combination of two words, Vakra means “twisted” and asana means a “yoga posture.” When you practise Vakrasana steps, you experience a suitable twisting of the spine, and therefore it is known as easy spinal twist pose and half spinal twist pose.Vakrasana is a simple yoga asana, but even then, this asana helps you to stretch and twist to the lower abdomen muscles, and Vakrasana benefits the body organs like liver, intestine, testis, kidney, ovary, pancreas, and stomach. Vakrasana benefits people who are suffering from diabetes, and if you practise Vakrasana regularly every day, then this will help you burn belly fat. "
},
{
    Id: "25",
    Category: "Fitness",
    Name: "Surya Namaskar ",
    Date: "17th century ",
    Details:" Sun Salutation or Salute to the Sun (Surya Namaskar: Sanskrit: सूर्यनमस्कार, romanized: Sūryanamaskāra), is a practice in yoga as exercise incorporating a flow sequence of some twelve gracefully linked asanas. ... The set of 12 asanas is dedicated to the Hindu solar deity Surya. ",
    Img: "https://saachibaat.com/wp-content/uploads/2021/08/Surya-Namaskar.jpg",
    About: "Sun Salutation or Salute to the Sun (Surya Namaskar: Sanskrit: सूर्यनमस्कार, romanized: Sūryanamaskāra),[2] is a practice in yoga as exercise incorporating a flow sequence of some twelve gracefully linked asanas.[3][4] The asana sequence was first recorded as yoga in the early 20th century, though similar exercises were in use in India before that, for example among wrestlers. The basic sequence involves moving from a standing position into Downward and Upward Dog poses and then back to the standing position, but many variations are possible. The set of 12 asanas is dedicated to the Hindu solar deity Surya. In some Indian traditions, the positions are each associated with a different mantra.The precise origins of the Sun Salutation are uncertain, but the sequence was made popular in the early 20th century by Bhawanrao Shriniwasrao Pant Pratinidhi, the Rajah of Aundh, and adopted into yoga by Krishnamacharya in the Mysore Palace, where the Sun Salutation classes, not then considered to be yoga, were held next door to his yogasala. Pioneering yoga teachers taught by Krishnamacharya, including Pattabhi Jois and B. K. S. Iyengar, taught transitions between asanas derived from the Sun Salutation to their pupils worldwide."
},
{
    Id: "26",
    Category: "Fitness",
    Name: "Bakasana ",
    Date: "19th century",
    Details:" Bakasana, and the similar Kakasana are balancing asanas in hatha yoga and modern yoga as exercise. In all variations, these are arm balancing poses in which hands are planted on the floor, shins rest upon upper arms, and feet lift up. ",
    Img: "https://wilmingtonyogacenter.com/wp-content/uploads/2018/10/crow-pose.jpg",
    About: "In kakasana the arms become the legs of the crow, the hands become the crow’s feet, and the thighs and legs are folded up to become the body of the crow. Crows are light on their feet—they hop, they fly. They’re not earth-bound. Unlike us, their experience of gravity is not that of a pedestrian. Assuming the posture of a crow by supporting our weight on the hands and keeping the body compact and close to the ground gives us an opportunity to free ourselves from our usual patterns of locomotion and our habitual strategies for managing the body with respect to gravity.Achieving this new sense of balance in the crow pose improves coordination and develops strength and flexibility. The wrists, arms, and shoulders are particularly benefited—they are not only stretched and strengthened, but also energized. This posture is especially stimulating to both the nervous system and the circulatory system in the upper limbs and torso. The pose imparts confidence in the ability of the arms to support the weight of the body, and it gives a sense of lifting and control through the pelvis and abdomen. This is vital for good health and for the performance of many other asanas as well as a variety of pranayama practices.The crow pose can be challenging, but with the right technique and a bit of strength and flexibility it’s fun to try. It takes a measure of strength in the arms and shoulders, but it is not as difficult as it looks. The sun salutation is a good practice for developing strength and flexibility in the shoulders, as well as the whole-body integration required for balance. What is more, attempting the crow pose with stiff, weak arms and shoulders can result in wrist strain, and the downward- and upward-facing dog poses (which are part of the sun salutation) strengthen the wrists. Even so, those with wrist injuries or problems will want to work carefully with this pose, or avoid it in favor of balance poses that don’t extend the wrists, such as the headstand or the forearm balance."
},
{
    Id: "27",
    Category: "Fitness",
    Name: "Navasana ",
    Date: "19th century ",
    Details:"  The name comes from the Sanskrit words नाव nava meaning boat and आसन asana meaning posture or seat.  ",
    Img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Paripurna-Navasana_Yoga-Asana_Nina-Mel.jpg/330px-Paripurna-Navasana_Yoga-Asana_Nina-Mel.jpg",
    About: "The body comes into a V-shape, balancing entirely on the buttocks. In different variations and traditions, the arms, legs and torso may take different positions. In Paripurna Navasana, the legs and back are lifted high and arms extend forward and parallel to the ground. In Ardha Navasana, hands interlace behind the neck and both back and shoulders are closer to the ground.To come into the pose, begin seated on the floor. Bend your knees, bringing the soles of the feet to the ground, and bring the palms to the back of the thighs. Begin to lean back as you shift your weight from your feet, eventually lifting the soles of the feet off the ground. Balance on the sitting bones, not leaning right back on to the tailbone. Lengthen the spine to broaden and lift the chest."
},

{
    Id: "28",
    Category: "Food",
    Name: "Biryani ",
    // Date: "13th Century",
    Details:"  Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made by adding rice and spices to meat (usually chicken, goat, lamb, prawn, fish ). Eggs and/or vegetables, such as potatoes, are also added in certain regional varieties.",
    Img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Sindhi_Biryani.JPG",
    About: "The exact origin of the dish is uncertain. In North India, different varieties of biryani developed in the Muslim centres of Delhi (Mughlai cuisine), Rampur, Lucknow (Awadhi cuisine) and other small principalities. In South India, where rice is more widely used as a staple food, several distinct varieties of biryani emerged from Hyderabad Deccan (where some believe the dish originated[15]) as well as Tamil Nadu (Ambur, Thanjavur, Chettinad, Salem, Dindigal), Kerala (Malabar), Telangana, and Karnataka (Bhatkal) where Muslim communities were present.According to historian Lizzie Collingham, the modern biryani developed in the royal kitchens of the Mughal Empire (1526–1857) and is a mix of the native spicy rice dishes of India and the Persian pilaf.[17] Indian restaurateur Kris Dhillon believes that the dish originated in Persia, and was brought to India by the Mughals."
},
{
    Id: "29",
    Category: "Food",
    Name: " litti chokha",
    // Date: "From 1770-1780 several Bihari farmers suffering from the famines in the region, migrated to the Nepal Terai, taking the litti chokha tradition with them.",
    Details:"Litti is the stuffed whole wheat dough ball and Chokha is a mashed relish that is served with litti. Chokha can be made with roasted eggplant (baingan), boiled or roasted potatoes (aloo) and roasted tomatoes (tamatar). You can make them separately or even combine all three and make one chokha. You can even combine the baingan and tomatoes and make one chokha and make a second one with potatoes.  ",
    Img: "https://static.toiimg.com/thumb/53188495.cms?width=1200&height=900",
    About: "Litti, along with chokha, is a complete meal originated from the Indian state of Bihar Jharkhand and parts of Eastern Uttar Pradesh. It is a dough ball made up of whole wheat flour and stuffed with gram flour, pulses and mixed with herbs and spices and then baked over coal or wood then it is tossed with much ghee.[1] Although very often confused with the closely related baati, it is a completely different dish in terms of taste, texture and preparation. It may be eaten with yogurt, baigan chokha, alu chokha, and papad.[2] The litti are traditionally baked over wood fire,[3] but in the modern day a new fried version has been developed.Herbs and spices used to flavour the litti include onion, garlic, ginger, coriander leaves, lime juice, carom seeds, nigella seeds and salt.[5] Tasty pickles can also be used to add spice flavour. In western Bihar and eastern Uttar Pradesh litti is served with murgh korma (a creamy chicken curry) or chokha (a vegetable preparation of roasted and mashed eggplant, tomato, and potato)."
},
{
    Id: "30",
    Category: "Food",
    Name: "Paneer Butter Masala",
    // Date: "The origin of this dish was in the 1950s, when the Punjabis created this dish in Moti Mahal restaurant in Delhi",
    Details:"Paneer Butter Masala is one of India’s most popular paneer gravy recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is one that I have been making for a long time. With my video and step-by-step guide you can easily make this restaurant style paneer butter masala at home!  ",
    Img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5-500x375.jpg ",
    About: "This Paneer Butter Masala recipe is a rich and creamy dish of paneer (cottage cheese) in a tomato, butter and cashew sauce (known as Makhani gravy).The dish has a lovely tang coming from the tomatoes and is slightly sweet with a creamy and velvety feel to it. With my easy, quick and delicious recipe you can prepare this restaurant style paneer butter masala recipe within minutes.Called by various names such as butter paneer or butter paneer masala or paneer makhani this dish is of the most popular Indian paneer dish. Obviously being so popular it is served in many Indian restaurants."
},
{
    Id: "31",
    Category: "Food",
    Name: "Burger ",
    Date: "19th Century",
    Details:"  hamburger, also called burger, ground beef. The term is applied variously to (1) a patty of ground beef, sometimes called hamburg steak, Salisbury steak, or Vienna steak, (2) a sandwich consisting of a patty of ground beef served within a split bread roll, with various garnishes, or (3) the ground beef itself, which is used as a base in many sauces, casseroles, terrines, and the like.",
    Img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F9%252F2021%252F07%252F13%252FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=85 ",
    About: "A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a special sauce, often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger.The term burger can also be applied to the meat patty on its own, especially in the United Kingdom, where the term patty is rarely used, or the term can even refer simply to ground beef. Since the term hamburger usually implies beef, for clarity burger may be prefixed with the type of meat or meat substitute used, as in beef burger, turkey burger, bison burger, portobello burger, or veggie burger."
},
{
    Id: "32",
    Category: "Food",
    Name: "Chicken Curry ",
    Date:"2500 BCE ",
    Img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Chicken_preparation_in_Malvani_style.jpg/330px-Chicken_preparation_in_Malvani_style.jpg",
    About: "A typical curry from the Indian subcontinent consists of chicken stewed in an onion- and tomato-based sauce, flavoured with ginger, garlic, tomato puree, chilli peppers and a variety of spices, often including turmeric, cumin, coriander, cinnamon, and cardamom."
},
{
    Id: "33",
    Category: "Food",
    Name: "Palak paneer  ",
    Date:"19th Century",
    Details:" Palak paneer is a vegetarian dish, consisting of paneer in a thick paste made from puréed spinach, called palak in Hindi, Marathi, Gujarati, and other Indian languages. The terms palak paneer and saag paneer are sometimes used interchangeably in restaurants in the United States and Canada. ",
    Img: "https://static.toiimg.com/photo/53093667.cms",
    About: "Health benefits of palak paneer-1)Palak paneer is a rich source of protein and can help facilitate the process of weight management that involves muscle building through workouts.2)It contains onions which are a good source of antioxidants and can promote hair health and improve immunity.Vitamin C can help boost immunity."
},
{
    Id: "34",
    Category: "Fitness",
    Name: "Surya Namaskar ",
    Date: "17th century ",
    Details:" Sun Salutation or Salute to the Sun (Surya Namaskar: Sanskrit: सूर्यनमस्कार, romanized: Sūryanamaskāra), is a practice in yoga as exercise incorporating a flow sequence of some twelve gracefully linked asanas. ... The set of 12 asanas is dedicated to the Hindu solar deity Surya. ",
    Img: "https://saachibaat.com/wp-content/uploads/2021/08/Surya-Namaskar.jpg",
    About: "Sun Salutation or Salute to the Sun (Surya Namaskar: Sanskrit: सूर्यनमस्कार, romanized: Sūryanamaskāra),[2] is a practice in yoga as exercise incorporating a flow sequence of some twelve gracefully linked asanas.[3][4] The asana sequence was first recorded as yoga in the early 20th century, though similar exercises were in use in India before that, for example among wrestlers. The basic sequence involves moving from a standing position into Downward and Upward Dog poses and then back to the standing position, but many variations are possible. The set of 12 asanas is dedicated to the Hindu solar deity Surya. In some Indian traditions, the positions are each associated with a different mantra.The precise origins of the Sun Salutation are uncertain, but the sequence was made popular in the early 20th century by Bhawanrao Shriniwasrao Pant Pratinidhi, the Rajah of Aundh, and adopted into yoga by Krishnamacharya in the Mysore Palace, where the Sun Salutation classes, not then considered to be yoga, were held next door to his yogasala. Pioneering yoga teachers taught by Krishnamacharya, including Pattabhi Jois and B. K. S. Iyengar, taught transitions between asanas derived from the Sun Salutation to their pupils worldwide."
},
{
    Id: "35",
    Category: "Technology",
    Name: "Cloud Computing ",
    Date: "9 Aug 2006",
    Details:"  Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each location being a data center. ",
    Img: "https://miro.medium.com/max/640/1*ngkHgQq7ij1NBNr62er3zA.png",
    About: "Apple (AAPL) iOS is the operating system for iPhone, iPad, and other Apple mobile devices. Based on Mac OS, the operating system which runs Apple’s line of Mac desktop and laptop computers, Apple iOS is designed for easy, seamless networking between a range of Apple products."
},

    ])
    return(
        <CategoryContext.Provider value={[Data,setData]}>{props.children}</CategoryContext.Provider>
            
            
        
        
    )

}

