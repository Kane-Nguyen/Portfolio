import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
   
    
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Learning HTML CSS JS",
      company_name: "F8",
      icon: starbucks,
      iconBg: "#383E56",
      date: "1/2021 - 9/2021",
      points: [
        "Tôi học và thực hành vài dự án nhỏ trong khung chương trình dạy của F8 và hoàn thành suất xắc khóa học",
        "Sữ dụng thành thạo HTML ,CSS và Javascript"
       
      ],
    },
    {
      title: "Learning FPT University",
      company_name: "FPT University Can Tho",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "9/2021 - Present",
      points: [
        "Tôi đã học tại trường đại học FPT từ năm 2021 và đã hoàn thành 6 mooc học của trường , hiện tại Tiếng anh tôi có thể giao tiếp và đọc tài liệu trôi chảy",
        "Tôi còn được dạy C/C++ Basic của trường và Java OOP"
        
      ],
    },
    {
      title: "React JS",
      company_name: "Blog",
      icon: shopify,
      iconBg: "#383E56",
      date: "1/2023 - 3/2023",
      points: [
        "Tôi tập trung phát triển dự án blog của riêng mình và đã hoàn thành vào tháng 3 vừa rồi",
        "Tôi sữ dụng các công nghệ sau để code : reactjs , nodejs , mongoDB",
        "Tôi sẽ đề cập các dự án ở phía dưới."
        
      ],
    },
    
  ];
  
  
  
  const projects = [
    {
      name: "Shoppe",
      description:
        "Một trang mua hàng lớn trên thế giới , tôi clone trang bán sản phẩm và thêm vào vỏ hàng, ngoài ra nó còn được responsive trên mọi thiết bị ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Kane-Nguyen/web-shopee-res",
    },
    {
      name: "The Band",
      description:
        "Tôi làm một trang giới thiệu về một band nhạc chủ yếu project này là HTML ,CSS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };