export const dataTR = {
  header: {
    darkModeSwitch: "Gece Modu",
    lightModeSwitch: "Gündüz Modu",
    language: "TR",
    skills: "Beceriler",
    projects: "Projeler",
    hireMe: "İletişim",
  },
  introduction: {
    name: "Ahmet Ulaş Çankaya",
    heading1: "Çözüm Üretici!",
    heading2: "Analitik Düşünür!",
    description:
      "Merhaba, ben Ahmet Ulaş Çankaya. Ben bir frontend geliştiriciyim. Tüm ürünlerinizin yönetimi için bir geliştirici arıyorsanız, tanışalım!",
    hireMe: "İletişim",
    github: "Github",
    linkedin: "LinkedIn",
    image: "ulas2.jpg",
    links: {
      github: "https://github.com/Aulascankaya",
      linkedin: "https://www.linkedin.com/in/ahmetulascankaya/",
    },
  },
  skills: {
    title: "Beceriler",
    items: [
      {
        name: "Javascript",
        logo: "logoJS.png",
        description:
          "JavaScript, web geliştirme için yaygın olarak kullanılan yüksek seviyeli, dinamik, zayıf tipli, nesne yönelimli ve çok paradigmalı bir programlama dilidir.",
      },
      {
        name: "React.Js",
        logo: "logoReact.png",
        description:
          "React.js, kullanıcı arayüzleri (UI) oluşturmak için kullanılan bir JavaScript kütüphanesidir.",
      },
      {
        name: "Redux",
        logo: "logoRedux.svg",
        description:
          "Redux, JavaScript uygulamalarında durum yönetimini (state management) kolaylaştırmak için kullanılan bir kütüphanedir.",
      },
      {
        name: "Kotlin",
        logo: "logoKotlin.svg",
        description:
          "Kotlin, JetBrains tarafından geliştirilen, modern, statik olarak türlendirilmiş bir programlama dilidir.",
      },
      {
        name: "Java",
        logo: "logoJava.png",
        description:
          "Java, nesne yönelimli (object-oriented) bir programlama dilidir ve yazılım geliştirme dünyasında oldukça geniş bir kullanım alanına sahiptir.",
      },
      {
        name: "HTML",
        logo: "logoHTML.png",
        description:
          "HTML (HyperText Markup Language), web sayfalarının yapısını ve içeriğini tanımlamak için kullanılan temel işaretleme dilidir.",
      },
      {
        name: "CSS",
        logo: "logoCSS.png",
        description:
          "CSS (Cascading Style Sheets), HTML belgelerinin görünümünü ve düzenini tanımlamak için kullanılan bir stil dilidir.",
      },
      {
        name: "Tailwind CSS",
        logo: "logoTailwind.png",
        description:
          "Tailwind CSS, modern web geliştirme için kullanılan bir yardımcı sınıf (utility-first) CSS çerçevesidir. ",
      },
      {
        name: "Figma",
        logo: "logoFigma.png",
        description:
          "Figma, kullanıcı arayüzü ve deneyimi tasarımı için kullanılan, bulut tabanlı bir tasarım aracıdır. ",
      },
      {
        name: "VS Code",
        logo: "logoVScode.png",
        description:
          "Visual Studio Code (VS Code), Microsoft tarafından geliştirilmiş, hafif ve güçlü bir kaynak kod editörüdür.",
      },
    ],
  },
  profile: {
    title: "Profil",
    basicInformation: {
      title: "Temel Bilgiler",
      items: [
        {
          label: "Doğum Tarihi",
          value: "26.10.1993",
        },
        {
          label: "İkamet Şehri",
          value: "Emden",
        },
        {
          label: "Eğitim Durumu",
          value: "Süleyman Demirel Üniversitesi. Bilgisayar Mühendisliği",
        },
        {
          label: "Tercih Ettiği Rol",
          value: "Software Developer, Frontend Developer, Android Developer",
        },
      ],
    },
    aboutMe: {
      title: "Hakkımda",
      paragraphs: [
        "Ben, sürekli öğrenme ve gelişim tutkusuna sahip bir frontend geliştiricisiyim.",
        "Turizm sektöründe yönetici olarak görev yaptıktan sonra kariyerimi yazılım geliştirme alanına yönlendirmeye karar verdim.  ",
        "Yazılımın farklı dallarında çeşitli eğitimler aldıktan sonra, en çok Front End geliştirmede başarılı olduğumu ve en büyük tatmini bu alanda bulduğumu keşfettim. Bu alandaki becerilerimi sürekli geliştirerek, kullanıcı deneyimini en üst düzeye çıkarmayı hedefliyorum."
      ],
    },
  },
  projects: {
    title: "Projeler",
    items: [
      {
        title: "Currency List App",
        image: "projectAndroids.png",
        description:
          "Bu proje, Kotlin ile geliştirilmiş ve Free Currency API kullanarak en son döviz kurlarını çeken ve gösteren bir Android uygulamasıdır. Uygulama, dövizlerin ve bunlara karşılık gelen döviz kurlarının listesini sergileyerek, API çağrısı ile verileri dinamik olarak günceller. Veriler, RecyclerView içinde görüntülenir ve verilere tıklamak, detaylı bir görünümü tetikler.",
        technologies: ["Kotlin", "API", ],
        github: "Github",
        githubLink: "https://github.com/Aulascankaya/KotlinCurrencyApp",
        viewSiteLabel: "Siteyi Görüntüleyin",
        viewSiteLink: "untitled.gif",
      },
      {
        title: "Pizza Order",
        image: "projectPizza.jpg",
        description:
          "Bu proje, kullanıcıların kolayca pizza siparişi verebileceği modern ve kullanıcı dostu bir web uygulamasıdır. Proje, React ve react-hook-form kullanılarak geliştirilmiştir. Sipariş formu, react-hook-form kütüphanesi kullanılarak oluşturulmuştur. Bu sayede form doğrulama işlemleri güvenli ve verimli bir şekilde gerçekleştirilir.",
        technologies: ["React", "Redux", "Axios"],
        github: "Github",
        githubLink: "https://github.com/Aulascankaya/fsweb-s7-challenge-pizza",
        viewSiteLabel: "Siteyi Görüntüleyin",
        viewSiteLink: "https://techpizzaproject.vercel.app/",
      },
      {
        title: "Netflix Mockup",
        image: "projectNetflix.jpg",
        description:
          "Bu proje, HTML ve CSS kullanarak Netflix arayüzünün bir mockup'ını oluşturmayı içermekte olup, bu temel web teknolojilerinin etkili kullanımını sergilemektedir. Vurgu, düzen tasarımı için semantik HTML yapıları ve CSS Flexbox kullanımına yapılmıştır.Projede mobil uyumluluk için Responsive tasarım yaklaşımı uygulanmıştır.",
        technologies: ["HTML5", "CSS3"],
        github: "Github",
        githubLink: "https://github.com/Aulascankaya/WiT-Sprint4-WiTFLIX",
        viewSiteLabel: "Siteyi Görüntüleyin",
        viewSiteLink: "https://wi-t-sprint4-wi-tflix.vercel.app/",
      },

      
      {
        title: "Survivor Airship Game",
        image: "projectAndroids.png",
        description:
          "Survivor Airship, oyuncunun ekrana dokunarak bir hava gemisini kontrol ettiği ve düşman nesnelerden kaçındığı 2D bir mobil oyundur. Oyun, GDX kütüphanesi kullanılarak Android platformu için geliştirilmiştir.Oyuncular, düşmanlardan başarıyla kaçındıkça puan kazanır ve düşman nesnesine çarptığında oyun sona erer.",
        technologies: ["Kotlin", "libGDX",],
        github: "Github",
        githubLink: "https://github.com/Aulascankaya/Survivor-Bird-Game",
        viewSiteLabel: "Siteyi Görüntüleyin",
        viewSiteLink: "https://www.youtube.com/watch?v=tC5dY7hXJZU",
      },
      {
        title: "Diğer Projeler",
        image: "projectWeb.jpg",
        description:
          "JavaScript, React, HTML, CSS, Kotlin ve Java geliştirmesinde çeşitli teknolojiler ve kavramları kapsayan bir proje koleksiyonu.Bu projeler, modern Web ve Android geliştirme uygulamalarında yetkinliği göstermektedir ve UI tasarımı, asenkron işlemler, veri yönetimi ve mimari desenler gibi konuları içermektedir.",
        technologies: ["JS", "React","Kotlin","..."],
        github: "Github",
        githubLink: "https://github.com/Aulascankaya",
        viewSiteLabel: "",
        viewSiteLink: "",
      },

    ],
  },
  footer: {
    contactHeader: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
    contactEmail: "aulascankaya@gmail.com",
    personalBlog: "Kişisel Blog",
    github: "Github",
    linkedin: "LinkedIn",
    links: {
      personalBlog: "#",
      github: "https://github.com/Aulascankaya",
      linkedin: "https://www.linkedin.com/in/ahmetulascankaya/",
    },
  },
  notifications: {
    success: "Dil başarıyla değiştirildi!",
  },
};
