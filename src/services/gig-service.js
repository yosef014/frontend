import { storageService } from "./storage-service";

export const gigService = {
  query,
  //   getById,
  //   remove,
  //   save,
  //   getEmptyTodo,
};

const KEY = "gigsDB";

var gGigs = _createGigs();

function query() {
  return JSON.parse(JSON.stringify(gGigs));
}

_createGigs();
function _createGigs() {
  let gigs = storageService.load(KEY);
  if (!gigs || !gigs.length) {
    gigs = [
      //arts and crafts gigs
      {
        _id: "g101",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg",
        title: "I will do hyper realistic pencil portrait by hand drawing",
        category: "arts and crafts",
        description:
          "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
        price: "₪16.84",
        daysToMake: "2 Days Delivery",
        fullname: "frederickkessie",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
        loc: "Ghana",
        memberSince: "Jul 2021",
        avgResponceTime: "1 hour",
        lastDelivery: "1 week",
        about:
          "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services.",
        reviewers: [
          {
            name: "tobiaspille300",
            country: "Thailand",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
            review:
              "frederickkessie ist a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "liam31",
            country: "United Kingdom",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
            review:
              "I requested a slightly earlier delivery on this and once again Frederick came through and provided a fantastic delivery. Thanks so much!",
            reviewedAt: "Published 3 weeks ago",
          },
          {
            name: "liam31",
            country: "United Kingdom",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
            review:
              "Frederick is amazing and extremely talented. This is the second time working with him and he has been a pleasure yet again!",
            reviewedAt: "Published 3 weeks ago",
          },
          {
            name: "larsonraz",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review: "Very detailed",
            reviewedAt: "Published 1 week ago",
          },
          {
            name: "stevekaszycki",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review: "very nice portrait, very good quality.",
            reviewedAt: "Published 2 weeks ago",
          },
        ],
        tags: [
          {
            name: "pencil drawing",
          },
          {
            name: "realistic drawing",
          },
          {
            name: "hand drawing",
          },
          {
            name: "portrait drawing",
          },
          {
            name: "pencil sketch",
          },
        ],
      },
      {
        _id: "g102",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197422311/original/1907136f4b9684daa164acfa5cfedc6035b771b1.jpg",
        title:
          "I will do hyper realistic pencil sketch portrait by hand drawing",
        category: "arts and crafts",
        description:
          "Hey ! Thanks for visiting my gig :)\nIn this gig i'm offering you a very 3 unique, preferable and affordable packages.\nIf you are thinking for giving someone special a very beautiful, eye catching gift( hyper realistic hand drawing pencil sketch portrait)?\nPlease select the desirable package and place your order right now and i'll give you a perfect portrait sketch, hand drawing, realistic drawing,pencil drawing in high resolution JPEG/PNG digital file.\nI will provide hand-drawn black & White or colored realistic portraits.\nKindly provide me clear reference photo as much as possible.\nThe material I used for Creating pencil portraits are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, tombomono eraser, brush, blending stump, mechanical pencil, graphite powder etc .\nYou can give me anything:\nPortrait photos\nFamily photos\nAnimal photos\nAny product photos\nLandscape photos\nArchitecture photos\nAnything you imagine\nPlease contact me before placing your order! Thanks.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITAL FILE, IF YOU WANT THE ORIGINAL ONE THEN MESSAGE ME FOR DETAILS.\nFeel free to ask me anything! :)\nThank You...\nvividstore",
        price: "₪67.37",
        daysToMake: "3 Days Delivery",
        fullname: "vividstore",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/83cc7c97f9873bdb052590a94d32f84c-1576419363871/ed47443e-0f9b-42ab-beaf-ec0a0acccfe8.jpeg",
        loc: "Bangladesh",
        memberSince: "Dec 2019",
        avgResponceTime: "1 hour",
        lastDelivery: "about 16 hours",
        about:
          "Hello, this is Masuk, stand up for vividstore,I am a young and enthusiastic graphic artist and realistic pencil sketch artist. I am certified as graphic designer from George Washington University, USA. I have almost 11 years experience in this field since my university life. I really love to work with Adobe Illustrator, Adobe Photoshop, and so on as a full time online freelancer. And also passionate about sketching. Thank you.",
        tags: [
          {
            name: "pencil drawing",
          },
          {
            name: "realistic drawing",
          },
          {
            name: "pencil portrait",
          },
          {
            name: "sketch",
          },
          {
            name: "pencil sketch",
          },
        ],
      },
      {
        _id: "g103",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg",
        title:
          "I will draw a hyperrealistic portrait of face or entire body and animals",
        category: "arts and crafts",
        description:
          "Desenho de lápis hiperrealista da sua foto, posso adicionar detalhes de fundo e personalizar o desenho do jeito que você quiser.",
        price: "₪202.11",
        daysToMake: "14 Days Delivery",
        fullname: "andreacarvalho_",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
        loc: "Brazil",
        memberSince: "May 2020",
        avgResponceTime: "1 hour",
        lastDelivery: "3 days",
        about:
          "Hello! I'm a brazilian artist specialized in hyperrealistic drawings and paintings of human figures and animals, i use a diversity of techniques like Oil painting, dry pastel drawing and pencil. I have over 30 years of experience, check out my portfolio.",
        reviewers: [
          {
            name: "rachelrbarnes1",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "Incredibly grateful for the amazing experience working with you . You are so talented and a kind soul! I highly recommend if you want high quality art to work with her every time",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "mark001994",
            country: "Austria",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
            review:
              "The artist was very kind and polite also very fast at the communication. The delivery of the project was on time. And her work is worth the money. I'm really excited about the painting she did. I can truely recommend the Aritst and her work. Big Thanks! :)",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "thurstonrobby",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "incredible on how precise that art is, picture perfect. 100% amazing job and I will use your services again ...",
            reviewedAt: "Published 3 weeks ago",
          },
          {
            name: "gavrielm",
            country: "Israel",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
            review: "amazing saller and great work",
            reviewedAt: "Published 6 days ago",
          },
          {
            name: "garebear52",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review: "Beautiful drawing! Just what I wanted.",
            reviewedAt: "Published 1 week ago",
          },
        ],
        tags: [
          {
            name: "pencil",
          },
          {
            name: "drawing",
          },
          {
            name: "portrait",
          },
          {
            name: "realistic",
          },
          {
            name: "painting",
          },
        ],
      },
      {
        _id: "g104",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207813409/original/9557f50a12d8fccb5c52fb65b35f91cc036f99c6.jpg",
        category: "arts and crafts",
        subCategory: "Arts & Crafts",
        title: "I will write sociology,psychology and social sciences articles",
        description:
          "Hello, welcome to my Gig, I write sociology psychology and all social sciences content\nI am an expert writer who can help you with writing essays, research projects, and articles on criminology, sociology, and psychology. I gained so much experience over the time. i can handle papers from undergraduate all the way to PHD in criminology and sociology and psychology.\nI always strive to provide best quality to my clients and provide plagiarism-free work. I am also familiar with the following reference formats: APA, MLA, HARVARD, CHICAGO\nPlease contact me before placing an order, thank you.",
        price: "₪33.68",
        daysToMake: "3 Days Delivery",
        fullname: "winny_writer",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e34531bf0bbed9d144dba7384f6473b6-1621577835789/60307055-cde9-4dc2-9e9e-4daa421991d3.jpg",
        loc: "Kenya",
        memberSince: "May 2021",
        avgResponceTime: "1 hour",
        lastDelivery: "about 21 hours",
        about:
          "My name is Mary , a graduate from Mount Kenya University, I am professional writer and my focus is to every single detail. I will transform your dream to reality. I am experienced in article, project/content writing for a couple of years. Furthermore, I have a long history of writing research-focused content and projects. My ultimate goal is to closely with my client to deliver quality and comprehensive project. Let's take your business to the next level. Thank you",
        reviewers: [
          {
            name: "far832013",
            country: "Canada",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
            review:
              "I had a bad experience…. The work doesn’t match the requirement at all. Although l sent a specific and detailed question, l received a general answer. Not recommend and will not deal again.",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "rehanmirdk",
            country: "Denmark",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1f0.png",
            review:
              "She was excellent in communicating, using my references to write a proper academic paper in sociology, and finish in only 15 hours after getting questions. Most recommended seller!",
            reviewedAt: "Published 3 weeks ago",
          },
          {
            name: "raevyn22",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review: "Exactly what I asked for",
            reviewedAt: "Published 8 hours ago",
          },
          {
            name: "raevyn22",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review: "Always gets the job done",
            reviewedAt: "Published 1 day ago",
          },
          {
            name: "junyeongcho",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review: "She could understand the contents and write well",
            reviewedAt: "Published 3 days ago",
          },
        ],
        tags: [
          {
            name: "technical writing",
          },
        ],
      },
      //data-entry-gigs
      {
        _id: "g105",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207580502/original/6d05bb9cde191b9423733c6b49d0e11892e35ee0.jpg",
        category: "data entry",
        title: "I will do data entry, copy paste, web research as your VA",
        description:
          "Hello Sir/Ma'am,\nHave a cordial welcome to Rashin07’s outstanding services on Fiverr.\nAre you searching for a trustworthy virtual assistant for your projects regarding data entry? I’m here to help. I’m an enthusiastic, hard-working and detail-oriented working person who has developed a mature and responsible approach to any task that I undertake. With excellent teamwork, we always try to work with dedication to achieve a certain objective on time. We are always at your service to provide budget-friendly qualitative work. Check out the following services & Order Now.\nOur Services:\nWeb Research\nCopy Paste Jobs\nData Entry\nData Scraping\nData Conversion (PDF/Image to excel)\nProduct Listing\nShopify / Woo-commerce Product Entry\nLead Generation\nMS Excel (Data Cleaning/Formatting /Chart/Macro)\nManual Typing\nAnd more!\nOur Specialties:\n24/7 customer service\nUnlimited Revisions\nOn-time delivery\nWork efficiently\nPrompt response\nNOTE – Please contact me before placing an order. Feel free to discuss the project & set the right estimations for you.\nRegards\nRashin Faria\nData Entry | Copy Paste | Web Scraping | Web Research | Product Entry",
        price: "₪16.84",
        daysToMake: "1 Day Delivery",
        fullname: "rashin07",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1fe02234f0b300905f098d1c2eef2599-1621414093019/30dd09bd-748a-49c0-b3bc-ee3071bdfadb.jpg",
        loc: "Bangladesh",
        memberSince: "Feb 2021",
        avgResponceTime: "1 hour",
        lastDelivery: "about 12 hours",
        about:
          "Hello! This is Rashin Faria, a Data Entry Specialist & Virtual Assistant at your service. I have excellent experience in Data Entry, Data Processing, Data Uploading, MS Word/Excel, Google Spreadsheet, PDF, Web Research, Ecommerce Product Entry, Data Scraping and others. With a 24/7 supporting team we work together for the betterment of the projects. We have extensive experience to do our project very fast and professionally. Client satisfaction is our first priority. Order Now! Regards Rashin Faria",
        reviewers: [
          {
            name: "threeangelsuk",
            country: "United Kingdom",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
            review:
              "Daisy accept the job. However, I think my job could have been done in the hours set and it was not. I would not use again from this experience.",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "kasper711",
            country: "Netherlands",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
            review: "Clear communication, did the job!",
            reviewedAt: "Published 1 day ago",
          },
          {
            name: "jmorgenstern82",
            country: "New Zealand",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1ff.png",
            review:
              "Provided exactly what was required, quickly, and with great communication. Thank you.",
            reviewedAt: "Published 2 days ago",
          },
          {
            name: "philipgrewin",
            country: "Sweden",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ea.png",
            review: "Great, faster than expected!",
            reviewedAt: "Published 4 days ago",
          },
          {
            name: "beanfiver",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review: "Efficient! Great communicator! Highly recommended!",
            reviewedAt: "Published 1 week ago",
          },
        ],
        tags: [
          {
            name: "web research",
          },
          {
            name: "manual typing",
          },
          {
            name: "data entry",
          },
          {
            name: "copy paste",
          },
          {
            name: "product listing",
          },
        ],
      },
      {
        _id: "g106",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/128385654/original/3dae388cef7d9c837186d54a47d3861c70f0847d.png",
        category: "data entry",
        title:
          "I will do data entry,web research and lead generation work in excel",
        description:
          "Looking for an experienced data entry expert? don't waste your time, just hire me and relax.\nWe are team of qualified professionals for guaranteed high quality work to our clients\nI will provide professional data entry work, data collecting from web, table graphs and all type of internet research like research related to businesses, companies information and enter into excel within fastest possible time.\nWhether you have big project like thousands of rows entries in excel or very tiny project like minutes of work, i'm here to provide you highly satisfied experience for your project.\nHere are the services we offer:\nData Entry\nWeb Research\nLead Generation\nCopy Paste Work\nCompanies Data Research\nInternet Research\nData Conversion into Excel\nTyping in Excel\nProperty Research\nCopy Paste Work\nPDF to Excel\nFormatting of excel sheets\nWhy hire me?\nGuaranteed quality work\nAll time communication during the project within Fiverr\nQuick Turnaround\nI will give my best and 100% to the project\nI can provide sample for the satisfaction before the order\nFeel free and don't hesitate to contact us for superior work\nNote: All communication and payment should be done via the fiverr platform.",
        price: "₪67.37",
        daysToMake: "1 Day Delivery",
        fullname: "waqarcreatives",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7928a9bdb9e68c7dcc870f7dac91d92b-768025031598387384699/JPEG_20200826_012943_1616096493516260103.jpg",
        loc: "Pakistan",
        memberSince: "May 2019",
        avgResponceTime: "1 hour",
        lastDelivery: "3 days",
        about:
          "Hello fiverr community,my name is Muhammad Waqar and i'm here to help you with your lead generation, web research and data entry projects. We are a group of experts which work together for the betterment of the projects we take from our clients. So don't forget to reach out me for your next project. Thank you very much",
        reviewers: [
          {
            name: "elliottbz",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "He cared a lot and asked questions, which showed me he wants to give quality work. That was really appreciated.",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "jeradg21",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "Muhammad was responsive and did a good job collecting the information for a very reasonable price. His English isn't perfect, but we didn't struggle to communicate. If you give good directions, you'll get good results.",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "dustinolsen1",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "This was my second time working with waqarcreatives and I love the quickness and level of accuracy. If he doesn't understand something, he asks for clarification before starting the project.",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "kenneth8239",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "Outstanding work. This is the 2nd project that WaqarCreatives completed for me, and I will be back to hire them again!",
            reviewedAt: "Published 1 week ago",
          },
          {
            name: "heirloomclean",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "Super efficient - Does amazing work. Have several orders with this seller and they always perform. Thank you so much",
            reviewedAt: "Published 2 months ago",
          },
        ],
        tags: [
          {
            name: "web research",
          },
          {
            name: "data entry",
          },
          {
            name: "lead generation",
          },
          {
            name: "data entry excel",
          },
          {
            name: "data entry typing",
          },
        ],
      },
      {
        _id: "g107",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156250659/original/694e80206bfd8cebf4e950fd073d382ed0fcd20a.jpg",
        category: "data entry",
        title:
          "I will do data entry, copy paste and excel data entry work for you",
        description:
          "Hi, Welcome to my Gig page on Fiverr.com!\nNote: Please contact me first before placing an order to check the availability and price estimate of your project.\nDescription:\nDo you need a perfect and professional virtual assistant for Data Entry,Excel Data Entry, Copy Paste Work, Typing Work , Data mining, Data collection using MS Excel, MS Word, Google Spreadsheet or Google doc? Yes, you are in the right place. Please check out my expertise below and the gig extras I'm offering.\nData Entry\nCopy Paste Work\nExcel Data Entry\nProduct Listing\nShopify Product listing\nCRM Data Entry\nData Scraping\nData Conversion\nPDF to Excel or Word\nJPEG to Excel or Word\nTyping in Excel or Word\nBusiness Card Entry\nWordPress Data Entry\nE-commerce Products Listing\nWeb Research and Web Scrapping\nData Collection from Linkedln/Instagram\nProperty Research, Public Record Search\nReal Estate Research and Data Entry (Name, Email, Phone, Address, etc)\nWhy trust me?\nPositive Customer Reviews\nQuick Reply.\nOn-time delivery\nQuality Customer Support\nEfficient time of working\nP.S. - We don't deal with anything outside of Fiverr. Never share your personal information. Thanks!",
        price: "₪33.68",
        daysToMake: "1 Day Delivery",
        fullname: "masum245",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8a1623fd3276ad7297d7647a8727bdf0-1589096119095/6c637953-9dc0-4c9c-b04d-c13c947fdc43.jpg",
        loc: "Bangladesh",
        memberSince: "Dec 2018",
        avgResponceTime: "1 hour",
        lastDelivery: "3 days",
        about:
          "I've been working as a Data entry operator for many years. I have a big team with so many professional people for managing data entry tasks. We believe that high quality and customer satisfaction is the most important thing for us. Feel free to drop a message for discussing your needs and objectives.",
        reviewers: [
          {
            name: "rechtlogisch",
            country: "Germany",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
            review:
              "There was no communication besides delivering. Receiving a short message with an estimate on delivery time would help to make the process more transparent. Otherwise it seems that the task was forgotten.",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "barcoxx",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "Pros: Communication response time was amazing. Project delivered in the time promised. Quick Response to revision requests. Cons: Got a little bit impatient with me for asking for consecutive revisions, which was actually due to his own oversight, but it all worked out in the end.",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "teamcafelist",
            country: "Singapore",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ec.png",
            review:
              "Seller was committed to the task despite the scope stretching beyond the 2hours. He spent more time and completed the sheet, but was very nice about it. I had to tip him because the work done was definitely worth more. Despite having some inaccuracy and formatting issues, I think he did his best",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "brisbanerrr",
            country: "Singapore",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ec.png",
            review:
              "Seller went above and beyond, super fast and did much more work than we expected he would be able to get done within the allotted hours. Reordering immediately.",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "treydurden",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "Masum really came through on this task, painful and time consuming, he stayed on it and made it happen. So Happy. Thank you a 1000 times.",
            reviewedAt: "Published 2 weeks ago",
          },
        ],
        tags: [
          {
            name: "typing job",
          },
          {
            name: "excel data entry",
          },
          {
            name: "virtual assistant",
          },
          {
            name: "data entry",
          },
          {
            name: "copy paste",
          },
        ],
      },
      {
        _id: "g108",
        image:
          "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199776653/original/b710f145db1a54491e2d777831107c0174c78565.png",
        category: "data entry",
        title:
          "I will do excel data entry, copypaste, and any type of data entry",
        description:
          "I will do excel data entry, copy paste, and any type of data entry\nHello, Welcome to my Gig. Are you looking for a professional virtual assistant for, Excel Data Entry, Typing Work Copy Paste Work, Data Entry, Data collection, Data mining, using MS Word, MS Excel, Google doc, or Google Spreadsheet? Then, you are at the right place. Following are the services that I'm offering.\nExcel Data Entry\nCopy Paste Work\nShopify Product listing\nProduct Listing\nData Entry\nData Conversion\nData Scraping\nJPEG to Excel or Word\nPDF to Excel or Word\nTyping in Excel or Word\nWordPress Data Entry\nWeb Research and Web Scrapping\nE-commerce Products Listing\nProperty Research, Public Record Search\nData Collection from LinkedIn/Instagram\nReal Estate Research and Data Entry (Name, Email, Phone, Address, etc.)\nWhy chose me?\nExtra fast delivery\n100% Quality assurance\nlowest possible rates\nQuick Reply.\nUnlimited Revisions to make sure Maximum customer satisfaction\nData Security\nPlease contact me before placing an order and get my free consultancy about the project how to do it in the best possible way. Also If you need sample work Please feel free to demand.\nThanks & Regards,\nAbrar Hussain",
        price: "₪16.84",
        daysToMake: "1 Day Delivery",
        fullname: "abrar_029",
        imgUrl:
          "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/798a61194492b92313c2f5b27d5397bb-1615924783131/a6a1c7f0-0cc0-4c50-95e1-2693d183ee1c.jpg",
        loc: "Pakistan",
        memberSince: "Feb 2021",
        avgResponceTime: "1 hour",
        lastDelivery: "1 day",
        about:
          "I'm glad you're here! My name is Abrar Hussain. I’m a professional Transcriptionist and data entry expert. I’ve a BS degree in Mechanical engineering. From last more than three years, I’ve been working as a Data entry operator and English language transcriptionist. To me, customer satisfaction and providing the best quality work are always my top priorities. I’m really good at MS Office and Transcript. Get yourselves a skillful creator and professional Assistant by simply contacting me. So, drop a message, and let's get started. I am also available for long term projects. Thanks!",
        reviewers: [
          {
            name: "mac_x711",
            country: "Thailand",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
            review:
              "As usual, Abrar has been totally amazing in every work that's assigned to him. Words can't be expressed how awesome he is in doing anything that's assigned of him. I'm just thankful that he's always there for me and he goes above and beyond on what I asked of him. He's simply the best. Looking forward to our next projects 😊😊",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "applist22",
            country: "Austria",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
            review:
              "Abrar and his team did an amazing job. The communication was great and he was every time available to discuss the project and when problems popped up he was flexible and agile to solve them with great effort & motivation. He provided first-class delivery and project management skills and is a reliable partner for any kind of project! I will work with him in the near future again - was a great pleasure and I'm very satisfied!",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "brandersongroup",
            country: "United Kingdom",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
            review:
              "I’ve worked with Abrar before, and once again he did a great job with what I’d asked him to do. Will definitely be working with him again.",
            reviewedAt: "Published 2 months ago",
          },
          {
            name: "schneida",
            country: "Austria",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
            review:
              "It was a pleasure to work with Abrar and his team. He is fast responding and an awesome problem solver who always reaches the goals for his clients. He is on my shortlist for other jobs in the future for sure.",
            reviewedAt: "Published 1 month ago",
          },
          {
            name: "jarrodrandol238",
            country: "United States",
            flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
            review:
              "This is my second project with him. Delivered on time and exactly how I asked. I would hire him if he lived in Florida!!!",
            reviewedAt: "Published 2 days ago",
          },
        ],
        tags: [
          {
            name: "excel data entry",
          },
          {
            name: "virtual assistant",
          },
          {
            name: "data entry",
          },
          {
            name: "copy paste",
          },
          {
            name: "typing jobs",
          },
        ],
      },
    ];
    storageService.store(KEY, gigs);
  }
  return gigs;
}
