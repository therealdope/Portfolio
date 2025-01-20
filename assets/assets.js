import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import back from './back.png';
import back_white from './back_white.png';
import github from './github.png';
import linkedin from './linkedin.png'
import sih from './sih.webp'
import google from './google.png'
import flipkart from './flipkart.png'
import django from './django.png'
import webdesign from './webdesign.png'
import reacts from './reacts.png'
import ml from './ml.png'

export const assets = {
    django,
    webdesign,
    reacts,
    ml,
    google,
    flipkart,
    sih,
    github,
    linkedin,
    back,
    back_white,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [{
        title: 'McD clone',
        description: 'Frontend Design',
        bgImage: '/work-1.jpeg',
        icon: assets.webdesign,
    },
    {
        title: 'Weather Website',
        description: 'React Js',
        bgImage: '/work-2.avif',
        icon: assets.reacts,
    },
    {
        title: 'CCFD website',
        description: 'Flask | ML',
        bgImage: '/work-3.avif',
        icon: assets.ml,
    },
    {
        title: 'Ice-Wale Website',
        description: 'Django',
        bgImage: '/work-4.jpg.webp',
        icon: assets.django,
    },
]

export const achievementData = [{
        icon: assets.google,
        title: 'Google AI Essential',
        description: 'Earned the Google AI Essentials Certificate, demonstrating a solid foundation in artificial intelligence concepts,tools, and applications.',
        link: 'https://drive.google.com/file/d/1G4IPZs3q7xWWAJ6tNTXRGLLP9SaypLh_/view?usp=sharing'
    },
    {
        icon: assets.sih,
        title: 'Smart India Hackathon',
        description: 'Actively participated in the Smart India Hackathon, collaborating with a team to develop innovative solutions for real-world problems.',
        link: 'https://drive.google.com/file/d/1O5E5bj1vsOf34zcNCegrEChxJnZsTuVf/view?usp=sharing'
    },
    {
        icon: assets.flipkart,
        title: 'Filpkart GRid 6.0',
        description: 'Participated in Flipkart Grid 6.0, showcasing skills in competitive problem-solving and innovative solution devel-opment.',
        link: 'https://drive.google.com/file/d/1EEve9KE_6an9KVWCWB7nZPHPaXkShtZx/view?usp=sharing'
    },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'CPP, Python, HTML, CSS, JavaScript, React Js, Express Js, MongoDB, SQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Framework', description: 'Next Js, Django, Flask, Tailwind, Bootstrap' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];