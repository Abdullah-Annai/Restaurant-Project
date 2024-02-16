import React,{ useState } from 'react'
import './dashboard.css'
import Main from '../section/dashboard/Main'
import Order from '../section/dashboard/Order'
import Review from "../section/dashboard/Review"
import Analytics from '../section/dashboard/Analytics'
import Forecast from './Forecast'
import Staff from '../section/dashboard/Staff'
import { Routes,Route,Link } from 'react-router-dom'

const Dashboard = () => {

    const [sidebar,setSidebar] = useState(0)

    const setActive = (id)=>{
        setSidebar(id)
    }
  return (
    <div className='h-screen w-full'>
        <main>
            <div className="sidebar bg-[#dd2f6e] text-white/70">
                <header className='p-8'>
                <svg width="211" height="49" viewBox="0 0 211 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8641 16.8462C20.7162 16.9338 21.5763 17.1329 22.4443 17.4395C23.3123 17.75 24.0967 18.1681 24.8015 18.6937C25.5062 19.2193 26.0796 19.8604 26.5216 20.6089C26.9636 21.3575 27.1826 22.2176 27.1826 23.1891C27.095 24.4832 26.7207 25.4667 26.0597 26.1436C25.3987 26.8205 24.6064 27.3421 23.6786 27.7084C22.7549 28.0747 21.7833 28.3534 20.768 28.5446C19.7526 28.7357 18.8647 28.9786 18.1002 29.2732C16.7783 29.7749 15.8983 30.42 15.4563 31.2123C15.1019 31.9171 15.1537 32.7254 15.6116 33.6372C16.0655 34.549 16.7942 35.2817 17.7936 35.8391C18.8209 36.4284 20.0274 36.7191 21.409 36.7191C22.6434 36.7191 23.7463 36.4244 24.7139 35.8391C25.6854 35.2498 26.5574 34.5092 27.3378 33.6133C28.1143 32.7174 28.823 31.71 29.4522 30.5952C30.0853 29.4803 30.6785 28.3773 31.236 27.2903C31.881 26.056 32.538 24.8296 33.199 23.6112C33.8599 22.3928 34.6244 21.3057 35.4925 20.3501C36.3605 19.3945 37.3639 18.6181 38.5106 18.0128C39.6574 17.4116 41.0231 17.109 42.6078 17.109C44.1926 17.109 45.5663 17.4315 46.729 18.0805C47.8876 18.7256 48.8353 19.5777 49.5719 20.6368C50.3046 21.696 50.8501 22.9144 51.2044 24.296C51.5588 25.6777 51.734 27.1151 51.734 28.6162C51.734 29.6157 51.5628 30.7823 51.2283 32.1202C50.8899 33.458 50.3603 34.7203 49.6436 35.9108C48.9229 37.1013 47.9912 38.1087 46.8444 38.929C45.6977 39.7532 44.316 40.1633 42.7034 40.1633C41.5845 40.1633 40.5652 39.9443 39.6414 39.5023C38.7177 39.0604 37.782 38.6343 36.8423 38.2242L36.7985 44.3959C36.7985 45.0728 36.9538 45.7178 37.2604 46.335C37.567 46.9522 38.001 47.4658 38.5624 47.8759L39.0482 48.2303C39.1358 48.29 39.1597 48.3776 39.1159 48.4931C39.0721 48.6086 38.9924 48.6683 38.873 48.6683H28.4129C28.2935 48.6683 28.2218 48.6086 28.1939 48.4931C28.166 48.3737 28.1939 48.2861 28.2815 48.2303L28.7673 47.9197C29.3247 47.5096 29.7508 46.988 30.0454 46.3549C30.3401 45.7218 30.4874 45.0688 30.4874 44.3919V36.9421V32.7135C30.8975 31.9808 31.3076 31.2283 31.7218 30.4638C32.1319 29.6993 32.542 28.9348 32.9561 28.1703C33.5454 27.0235 34.1466 25.9246 34.7638 24.8654C35.381 23.8063 36.0419 22.8546 36.7467 22.0026V22.4445V34.9154C36.7467 35.9745 37.0772 36.731 37.7382 37.185C38.3991 37.6389 39.1995 37.8698 40.1392 37.8698C41.1665 37.8698 42.0106 37.5553 42.6716 36.9222C43.3325 36.2891 43.8701 35.5126 44.2802 34.5849C44.6903 33.6611 44.977 32.6617 45.1402 31.5866C45.2995 30.5155 45.3831 29.5241 45.3831 28.6123C45.3831 27.5252 45.3314 26.4024 45.2278 25.2397C45.1243 24.081 44.9212 23.0139 44.6107 22.0424C44.3041 21.0708 43.8541 20.2785 43.2648 19.6613C42.6755 19.0441 41.8832 18.7375 40.8837 18.7375C39.8246 18.7375 38.857 19.06 37.9731 19.7051C37.0931 20.3501 36.2848 21.1385 35.5482 22.0623C34.8116 22.986 34.1665 23.9735 33.6091 25.0167C33.0517 26.06 32.5659 26.9797 32.1558 27.7721C31.3315 29.3887 30.4277 31.065 29.4442 32.7971C28.4607 34.5331 27.2781 36.0302 25.8965 37.2925C24.8373 38.2919 23.6866 39.0205 22.4363 39.4745C21.186 39.9284 19.9318 40.1553 18.6696 40.1553C18.14 40.1553 17.6025 40.1195 17.061 40.0438C16.5155 39.9722 15.9938 39.8448 15.4961 39.6696C13.4694 39.1121 11.8369 38.1326 10.6026 36.739C9.36822 35.3454 8.52409 33.7646 8.07017 32.0007C7.61227 30.2368 7.52467 28.4092 7.80738 26.5139C8.0861 24.6186 8.72716 22.9223 9.7226 21.4252C10.722 19.9281 12.0718 18.7296 13.776 17.8337C15.4842 16.9418 17.5149 16.6113 19.8641 16.8462ZM14.1344 29.759C14.2498 30.2886 14.4728 30.3483 14.7953 29.9342C15.1776 29.4046 15.6554 28.9507 16.2288 28.5685C16.8021 28.1862 17.3875 27.8119 17.9927 27.4456C18.5939 27.0793 19.1952 26.705 19.8004 26.3227C20.4016 25.9405 20.9233 25.5025 21.3652 25.0008C21.8072 24.5031 22.1417 23.9058 22.3806 23.217C22.6155 22.5281 22.6872 21.696 22.5996 20.7284C22.4244 19.8166 22.0342 19.1476 21.4329 18.7216C20.8317 18.2955 20.1468 18.0845 19.3823 18.0845C18.8806 18.0845 18.367 18.1721 17.8414 18.3473C16.7822 18.7296 15.962 19.3587 15.3727 20.2426C14.7834 21.1226 14.3574 22.114 14.0946 23.217C13.8318 24.3199 13.7203 25.4507 13.7641 26.6094C13.8039 27.7681 13.9273 28.8193 14.1344 29.759ZM28.0187 20.374L36.4361 16.9816C36.4959 16.9218 36.5596 16.9218 36.6352 16.9816C36.7069 17.0413 36.7467 17.113 36.7467 17.2006V17.9053C35.7473 18.4628 34.732 19.5219 33.7047 21.0788C33.1751 21.8712 32.6336 22.783 32.0721 23.8103C31.5147 24.8376 30.9692 25.8688 30.4396 26.8961V24.738C30.4396 23.8859 30.2127 23.1055 29.7548 22.4007C29.3008 21.696 28.6877 21.1505 27.9271 20.7722C27.8674 20.7125 27.8475 20.6488 27.8595 20.5731C27.8794 20.4975 27.9311 20.4337 28.0187 20.374Z" fill="white"/>
<path d="M54.063 20.4183L62.4804 16.982C62.6874 16.9223 62.787 16.9979 62.787 17.201L62.8308 35.5808C62.8308 37.0222 63.4041 38.1808 64.5509 39.0608L65.0367 39.4152C65.1243 39.4749 65.1521 39.5625 65.1243 39.678C65.0964 39.7935 65.0207 39.8532 64.9053 39.8532H54.4611C54.3138 39.8532 54.2262 39.7935 54.1983 39.678C54.1705 39.5625 54.1983 39.4709 54.2859 39.4152L54.7717 39.1046C55.3292 38.6945 55.7632 38.1729 56.0737 37.5398C56.3803 36.9067 56.5356 36.2537 56.5356 35.5768L56.4918 24.7345C56.4918 23.8824 56.2728 23.102 55.8309 22.3972C55.3889 21.6924 54.7876 21.1629 54.0231 20.8085C53.9634 20.7488 53.9435 20.6771 53.9555 20.5895C53.9674 20.5059 54.0032 20.4461 54.063 20.4183ZM55.7393 11.4275C55.7393 10.5157 56.0618 9.73922 56.7108 9.0902C57.3559 8.44516 58.1363 8.11865 59.0481 8.11865C59.9878 8.11865 60.7802 8.44117 61.4292 9.0902C62.0742 9.73524 62.4007 10.5157 62.4007 11.4275C62.4007 12.3672 62.0782 13.1595 61.4292 13.8086C60.7842 14.4536 60.0037 14.7801 59.0919 14.7801C58.1522 14.7801 57.3599 14.4576 56.7108 13.8086C56.0618 13.1595 55.7393 12.3672 55.7393 11.4275Z" fill="white"/>
<path d="M78.3038 16.8027C79.3311 16.8027 80.3385 16.9739 81.322 17.3084C82.3055 17.6469 83.1974 18.1446 83.9897 18.8056C84.7821 19.4665 85.4272 20.2589 85.9289 21.1866C86.4266 22.1104 86.6934 23.1616 86.7212 24.3362C86.7212 24.4835 86.6774 24.5114 86.5898 24.4238L81.3021 22.6161C81.2742 22.5882 81.2583 22.5444 81.2583 22.4847C81.4653 22.0427 81.5808 21.5649 81.6126 21.0513C81.6405 20.5376 81.5609 20.0678 81.3698 19.6417C81.1786 19.2157 80.8681 18.8573 80.446 18.5627C80.0199 18.268 79.4386 18.1207 78.706 18.1207C77.5911 18.1207 76.6275 18.5826 75.8192 19.5103C75.0109 20.4341 74.4017 21.5888 73.9916 22.9705C73.5815 24.3521 73.3903 25.8413 73.4182 27.442C73.4461 29.0426 73.7328 30.5358 74.2783 31.9174C74.8198 33.2991 75.652 34.4459 76.7669 35.3537C77.8818 36.2655 79.3231 36.7194 81.0871 36.7194C82.1741 36.7194 83.2014 36.5283 84.1729 36.1461C85.1405 35.7638 85.893 35.2502 86.4226 34.6051C86.5978 34.4021 86.773 34.2985 86.9522 34.2985C87.1871 34.2985 87.3623 34.4021 87.4817 34.6051C87.5972 34.8122 87.5534 35.063 87.3503 35.3537C86.1439 37.03 84.7781 38.2325 83.2531 38.9691C81.7241 39.7057 80.1673 40.0721 78.5825 40.0721C77.173 40.0721 75.7993 39.8013 74.4614 39.2558C73.1236 38.7143 71.941 37.9538 70.9137 36.9862C69.8864 36.0147 69.0463 34.856 68.4012 33.5062C67.7562 32.1564 67.4018 30.6712 67.3421 29.0546C67.3142 27.4659 67.5491 25.9408 68.0468 24.4716C68.5446 23.0023 69.2732 21.7082 70.2288 20.5934C71.1844 19.4785 72.3511 18.5746 73.7328 17.8818C75.0985 17.1929 76.6275 16.8346 78.3038 16.8027Z" fill="white"/>
<path d="M137.975 19.5341C138.034 19.6496 138.086 19.777 138.13 19.9084C138.174 20.0398 138.11 20.1513 137.931 20.2389L134.714 21.8714C134.538 21.959 134.407 22.0028 134.315 22.0028C134.228 22.0028 134.124 21.9152 134.009 21.74C133.185 20.4778 132.185 19.9044 131.01 20.0199C129.836 20.1394 128.498 20.665 127.001 21.6086C126.384 21.9909 125.759 22.393 125.125 22.8191C124.492 23.2451 123.891 23.6513 123.318 24.0295C122.744 24.4118 122.223 24.7662 121.753 25.0887C121.283 25.4112 120.901 25.6899 120.606 25.9248C119.372 26.8645 118.145 27.8281 116.927 28.8116C115.709 29.7951 114.482 30.7746 113.248 31.7422C112.603 32.2717 111.894 32.865 111.134 33.526C110.369 34.187 109.577 34.84 108.753 35.485C107.928 36.1301 107.116 36.7393 106.308 37.3126C105.499 37.886 104.715 38.3638 103.951 38.7461C102.716 39.3632 101.418 39.7734 100.052 39.9804C98.6867 40.1875 97.4284 40.0839 96.2857 39.6738C95.1389 39.2637 94.1913 38.4912 93.4427 37.3604C92.6941 36.2296 92.3198 34.621 92.3198 32.5345L92.276 24.7343C92.276 23.8822 92.0571 23.1018 91.6151 22.397C91.1731 21.6922 90.5719 21.1627 89.8074 20.8083C89.7476 20.7486 89.7237 20.6769 89.7397 20.5893C89.7556 20.5017 89.7914 20.442 89.8512 20.4141L98.2686 16.9779C98.4756 16.9181 98.5752 16.9938 98.5752 17.1969L98.619 32.5345C98.619 33.3588 98.7743 34.0755 99.0809 34.6926C99.3874 35.3098 99.7697 35.8115 100.228 36.1898C100.682 36.572 101.195 36.8428 101.769 37.006C102.342 37.1693 102.907 37.2051 103.465 37.1175C104.022 37.0299 104.763 36.7074 105.691 36.146C106.618 35.5885 107.562 34.9435 108.534 34.2069C109.501 33.4742 110.421 32.7535 111.289 32.0488C112.157 31.344 112.81 30.8144 113.248 30.4601C114.482 29.4925 115.709 28.513 116.927 27.5295C118.145 26.546 119.372 25.5824 120.606 24.6427C121.458 23.9977 122.442 23.3049 123.561 22.5722C124.676 21.8396 125.81 21.0751 126.953 20.2787C127.63 19.8089 128.223 19.3828 128.737 19.0006C129.251 18.6183 129.752 18.2958 130.234 18.029C130.72 17.7662 131.21 17.5512 131.711 17.388C132.209 17.2287 132.754 17.1331 133.34 17.1013C133.957 17.0734 134.498 17.1172 134.972 17.2327C135.442 17.3521 135.852 17.5194 136.207 17.7384C136.557 17.9574 136.876 18.2241 137.154 18.5307C137.441 18.8533 137.712 19.1837 137.975 19.5341ZM106.949 24.7343C106.949 23.8822 106.73 23.1018 106.288 22.397C105.846 21.6922 105.245 21.1627 104.48 20.8083C104.42 20.7486 104.4 20.6769 104.412 20.5893C104.428 20.5017 104.464 20.442 104.524 20.4141L112.941 16.9779C113.148 16.9181 113.248 16.9938 113.248 17.1969V29.3173C112.041 30.257 110.875 31.1847 109.744 32.0926C108.613 33.0044 107.578 33.7968 106.638 34.4737C106.786 34.0914 106.889 33.6096 106.949 33.0203C107.009 32.5783 107.009 32.1523 106.949 31.7422V24.7343ZM113.339 32.8451C113.455 33.522 113.73 34.1392 114.156 34.6966C114.582 35.2541 115.119 35.696 115.764 36.0186C115.824 36.0783 115.844 36.15 115.832 36.2376C115.816 36.3252 115.764 36.3849 115.677 36.4128L107.303 39.849C107.068 39.9087 106.953 39.8331 106.953 39.63V38.1329V37.8701C107.717 37.3126 108.589 36.6357 109.573 35.8434C110.556 35.051 111.651 34.1671 112.858 33.1995C112.945 33.1398 113.025 33.084 113.101 33.0243C113.168 32.9646 113.252 32.9048 113.339 32.8451ZM120.479 23.6791C120.479 23.5915 120.435 23.4283 120.347 23.1934C120.26 22.9584 120.12 22.6956 119.929 22.401C119.738 22.1063 119.495 21.8197 119.201 21.5409C118.906 21.2622 118.556 21.0193 118.141 20.8123C118.082 20.7526 118.062 20.6809 118.074 20.5933C118.09 20.5057 118.126 20.446 118.185 20.4181L126.603 16.9818C126.806 16.9221 126.909 16.9978 126.909 17.2008C126.909 17.5234 126.917 17.8618 126.933 18.2162C126.949 18.5666 126.953 18.905 126.953 19.2275C126.364 19.5501 125.699 19.9562 124.946 20.438C124.194 20.9198 123.338 21.517 122.366 22.2218C122.071 22.4289 121.765 22.6638 121.442 22.9266C121.124 23.1934 120.801 23.4442 120.479 23.6791ZM129.163 39.411C129.251 39.4707 129.278 39.5583 129.251 39.6738C129.223 39.7893 129.131 39.849 128.988 39.849H118.587C118.44 39.849 118.353 39.7893 118.325 39.6738C118.293 39.5583 118.325 39.4668 118.412 39.411L118.898 39.1004C120.045 38.2205 120.618 37.0459 120.618 35.5766V27.0278C121.207 26.5579 121.785 26.108 122.358 25.682C122.932 25.2559 123.481 24.8538 124.011 24.4715C124.687 23.9738 125.273 23.5676 125.774 23.2611C126.272 22.9545 126.73 22.6797 127.14 22.4448C126.993 22.827 126.921 23.2093 126.921 23.5915C126.921 25.6182 126.929 27.6171 126.945 29.5841C126.961 31.5511 126.953 33.5499 126.921 35.5766C126.921 36.2535 127.077 36.8985 127.383 37.5157C127.69 38.1329 128.124 38.6465 128.681 39.0566L129.163 39.411Z" fill="white"/>
<path d="M151.68 16.846C152.532 16.9336 153.392 17.1327 154.26 17.4393C155.128 17.7498 155.913 18.1679 156.617 18.6935C157.322 19.2231 157.896 19.8602 158.338 20.6087C158.78 21.3573 158.999 22.2174 158.999 23.1889C158.911 24.483 158.537 25.4665 157.876 26.1434C157.215 26.8203 156.422 27.3419 155.495 27.7082C154.571 28.0745 153.599 28.3532 152.584 28.5444C151.573 28.7355 150.681 28.9784 149.916 29.273C148.594 29.7747 147.71 30.4198 147.272 31.2121C146.978 31.7696 146.986 32.3589 147.296 32.976C147.603 33.5932 148.089 34.1666 148.75 34.6962C149.411 35.2257 150.195 35.6597 151.107 35.9982C152.019 36.3366 152.958 36.5039 153.926 36.5039C154.778 36.5039 155.602 36.3486 156.395 36.042C157.187 35.7354 157.88 35.1979 158.465 34.4334C158.612 34.1984 158.803 34.079 159.038 34.079C159.186 34.079 159.325 34.1387 159.456 34.2542C159.588 34.3736 159.656 34.517 159.656 34.6962C159.628 34.8435 159.576 34.9669 159.5 35.0704C159.429 35.174 159.361 35.2855 159.301 35.4009C158.127 37.0772 156.769 38.2797 155.224 39.0164C153.683 39.749 152.118 40.1193 150.529 40.1193C148.562 40.0914 146.862 39.7171 145.441 38.9964C144.015 38.2758 142.849 37.344 141.937 36.1973C141.025 35.0505 140.372 33.7525 139.978 32.2952C139.584 30.8378 139.42 29.3646 139.492 27.8675C139.564 26.3703 139.89 24.921 140.464 23.5274C141.037 22.1338 141.829 20.9074 142.845 19.8482C143.86 18.7891 145.106 17.9848 146.591 17.4233C148.077 16.8619 149.773 16.6708 151.68 16.846ZM145.954 29.7588C146.07 30.2884 146.293 30.3481 146.615 29.934C146.998 29.4044 147.475 28.9505 148.049 28.5683C148.622 28.186 149.207 27.8117 149.813 27.4454C150.414 27.0791 151.019 26.7048 151.62 26.3225C152.222 25.9403 152.743 25.5023 153.185 25.0006C153.627 24.5029 153.966 23.9056 154.201 23.2168C154.435 22.5279 154.507 21.6958 154.42 20.7282C154.244 19.8164 153.854 19.1474 153.253 18.7214C152.652 18.2953 151.967 18.0843 151.202 18.0843C150.701 18.0843 150.191 18.1719 149.661 18.3471C148.602 18.7294 147.782 19.3585 147.193 20.2424C146.603 21.1224 146.181 22.1138 145.915 23.2168C145.652 24.3197 145.54 25.4505 145.584 26.6092C145.62 27.7679 145.747 28.8191 145.954 29.7588Z" fill="white"/>
<path d="M193.878 37.5153C194.188 38.1325 194.619 38.6461 195.18 39.0562L195.622 39.4106C195.737 39.4703 195.777 39.5579 195.733 39.6734C195.69 39.7889 195.61 39.8486 195.491 39.8486H185.042C184.923 39.8486 184.851 39.7889 184.823 39.6734C184.796 39.5579 184.823 39.4664 184.911 39.4106L185.353 39.1C185.91 38.6899 186.344 38.1763 186.651 37.5591C186.962 36.9419 187.113 36.281 187.113 35.5762V24.7339C187.113 24.2362 187.041 23.7584 186.894 23.3005C186.747 22.8465 186.536 22.4802 186.253 22.1975C185.974 21.9188 185.628 21.7356 185.218 21.648C184.807 21.5604 184.338 21.6321 183.808 21.867C182.956 22.2214 181.893 22.6514 180.611 23.1651C179.333 23.6787 178.003 24.2601 176.621 24.9051C175.239 25.5501 173.866 26.2549 172.5 27.0194C171.134 27.7839 169.936 28.5922 168.908 29.4443C167.881 30.2964 167.093 31.1923 166.551 32.132C166.006 33.0717 165.854 34.0273 166.089 34.9948C166.324 35.7872 166.81 36.4044 167.543 36.8464C168.275 37.2883 169.028 37.4795 169.792 37.4197C170.557 37.36 171.238 36.9937 171.843 36.3168C172.444 35.6399 172.747 34.5967 172.747 33.1871V28.5245C172.747 28.3175 172.763 28.1064 172.791 27.8834C172.818 27.6645 173.041 27.4494 173.452 27.2424C173.659 27.1548 173.957 27.0314 174.355 26.8681C174.754 26.7049 175.207 26.5137 175.721 26.2947C176.235 26.0757 176.772 25.8488 177.33 25.6099C177.887 25.3749 178.433 25.14 178.962 24.9051C178.99 25.1122 179.014 25.3152 179.03 25.5223C179.046 25.7293 179.054 25.9483 179.054 26.1832V32.6177C179.054 33.7366 179.149 34.6365 179.341 35.3293C179.532 36.0182 179.767 36.5199 180.045 36.8265C180.324 37.137 180.635 37.2764 180.973 37.2445C181.312 37.2167 181.61 37.0693 181.877 36.8026C182.024 36.6552 182.184 36.5756 182.363 36.5597C182.538 36.5437 182.685 36.5836 182.805 36.6712C182.92 36.7588 182.996 36.8902 183.024 37.0693C183.052 37.2445 182.996 37.4197 182.848 37.5989C182.438 38.1564 181.841 38.7019 181.065 39.2274C180.284 39.757 179.384 40.0198 178.353 40.0198C177.501 40.0198 176.625 39.8287 175.729 39.4464C174.833 39.0642 174.105 38.3873 173.547 37.4197C173.4 37.1251 173.268 36.9857 173.149 37.0016C173.029 37.0176 172.898 37.0972 172.751 37.2445C171.783 38.1842 170.708 38.889 169.534 39.3588C168.359 39.8287 167.212 40.0477 166.097 40.0198C165.48 40.0198 164.847 39.8964 164.202 39.6455C163.557 39.3947 162.984 39.0363 162.482 38.5665C161.984 38.0966 161.57 37.5233 161.247 36.8464C160.925 36.1695 160.762 35.393 160.762 34.5091C160.762 33.5097 161.116 32.57 161.821 31.69C162.526 30.81 163.437 29.9778 164.552 29.2014C165.667 28.425 166.91 27.7043 168.275 27.0433C169.641 26.3823 170.987 25.797 172.309 25.2794C173.631 24.7657 174.857 24.3078 175.988 23.9136C177.119 23.5155 177.995 23.2009 178.612 22.966L193.113 16.9735C193.316 16.9137 193.42 16.9894 193.42 17.1925C193.42 17.5747 193.42 17.8893 193.42 18.1401C193.42 18.391 193.436 18.7055 193.464 19.0878C193.464 19.2948 193.48 19.5019 193.508 19.7049C193.535 19.912 193.623 20.0275 193.77 20.0593C193.918 20.0593 194.085 19.9916 194.276 19.8602C194.467 19.7288 194.634 19.6014 194.782 19.4859C195.809 18.809 196.92 18.2596 198.111 17.8335C199.301 17.4075 200.468 17.1925 201.614 17.1925C202.494 17.1925 203.327 17.3239 204.103 17.5906C204.879 17.8574 205.564 18.2874 206.154 18.8927C206.739 19.4939 207.213 20.2823 207.563 21.2499C207.918 22.2214 208.093 23.408 208.093 24.8175V35.5722C208.093 36.2491 208.248 36.8941 208.555 37.5113C208.861 38.1285 209.283 38.6421 209.809 39.0522L210.295 39.4066C210.382 39.4664 210.41 39.5539 210.382 39.6694C210.354 39.7849 210.279 39.8446 210.163 39.8446H199.719C199.6 39.8446 199.528 39.7849 199.5 39.6694C199.468 39.5539 199.5 39.4624 199.588 39.4066L200.03 39.0961C200.587 38.6859 201.021 38.1643 201.328 37.5312C201.634 36.8981 201.79 36.2451 201.79 35.5682V24.8255C201.79 23.9734 201.583 23.2168 201.172 22.5559C200.762 21.8949 200.249 21.3733 199.632 20.991C199.014 20.6088 198.345 20.3818 197.625 20.3062C196.904 20.2345 196.235 20.3659 195.618 20.7044C195.001 21.0428 194.487 21.6082 194.073 22.4006C193.659 23.1929 193.456 24.268 193.456 25.6178L193.412 35.5762C193.416 36.2531 193.571 36.8981 193.878 37.5153ZM167.061 23.7663C167.176 23.6509 167.236 23.5593 167.236 23.5035C167.296 22.2692 167.471 21.2698 167.766 20.5053C168.06 19.7408 168.427 19.1754 168.869 18.809C169.311 18.4427 169.772 18.2596 170.258 18.2596C170.744 18.2596 171.19 18.4427 171.604 18.809C172.014 19.1754 172.361 19.697 172.639 20.3739C172.918 21.0508 173.057 21.8591 173.057 22.7988V23.5911C173.057 23.826 173.014 24.061 172.926 24.2959L178.743 22.1378C178.066 20.4615 177.015 19.1913 175.594 18.3273C174.168 17.4592 172.488 17.0292 170.549 17.0292C169.167 17.0292 167.957 17.2562 166.914 17.7101C165.87 18.164 164.966 18.813 164.202 19.6492C163.437 20.4854 162.812 21.4848 162.331 22.6475C161.845 23.8101 161.486 25.0922 161.251 26.5058C161.224 26.6212 161.244 26.7128 161.319 26.7686C161.391 26.8283 161.474 26.8283 161.562 26.7686L167.061 23.7663Z" fill="white"/>
<path d="M23.544 16.5919C23.313 16.4924 23.0821 16.4008 22.8432 16.3172C21.8915 15.9747 20.9319 15.7557 19.9843 15.6562C19.4587 15.6044 18.9411 15.5766 18.4433 15.5766C16.5002 15.5766 14.7443 15.9827 13.2272 16.779C11.3518 17.7665 9.83878 19.1084 8.73584 20.7648C8.56462 21.0196 8.40535 21.2824 8.25803 21.5492L6.3667 15.5527C6.70913 15.5009 7.05156 15.4292 7.39001 15.3217C8.50888 14.9673 9.49635 14.3382 10.2808 13.4941C11.539 13.7012 12.8211 13.6096 14.0515 13.2194C15.2858 12.8292 16.3888 12.1682 17.3006 11.2803C18.4274 11.5192 19.598 11.4674 20.7129 11.117C21.0554 11.0095 21.3779 10.8701 21.6885 10.7148L23.544 16.5919Z" fill="white"/>
<path d="M17.5351 1.04694C17.0334 1.20621 16.5794 1.44113 16.1733 1.73578C14.5766 0.210773 12.2234 -0.418343 9.96974 0.290407C7.71607 0.999158 6.15125 2.87058 5.72122 5.03267C5.2235 5.0247 4.71384 5.09239 4.21214 5.25166C1.70762 6.04403 0.317987 8.7118 1.11035 11.2163C1.90272 13.7208 4.57049 15.1105 7.07501 14.3181C8.26157 13.9438 9.1933 13.1435 9.76667 12.1401C11.005 12.5781 12.3867 12.6418 13.7365 12.2157C15.0863 11.7897 16.1813 10.9456 16.9418 9.87447C17.985 10.3682 19.2074 10.4877 20.3979 10.1134C22.9025 9.32101 24.2921 6.65324 23.4997 4.14872C22.7073 1.6442 20.0396 0.254572 17.5351 1.04694Z" fill="white"/>
</svg>
                </header>
                <ul className='text-xl cursor-pointer transition-all duration-200'>
                    <Link to="/admin" onClick={()=>setActive(0)} className={`flex items-center gap-3 py-4 ps-5 ms-5 transition-all ${sidebar == 0 ? "active" : "hover:text-white"}`}><ion-icon name="grid-outline"></ion-icon>Dashboard</Link>
                    <Link to="/admin/order" onClick={()=>setActive(1)} className={`flex items-center gap-3 py-4 ps-5 ms-5 transition-all ${sidebar == 1 ? "active" : "hover:text-white"}`}><ion-icon name="create-outline"></ion-icon>Order List</Link>
                    <Link to="/admin/review" onClick={()=>setActive(2)} className={`flex items-center gap-3 py-4 ps-5 ms-5 transition-all ${sidebar == 2 ? "active" : "hover:text-white"}`}><ion-icon name="people-outline"></ion-icon>Review</Link>
                    <Link to="/admin/analytics" onClick={()=>setActive(3)} className={`flex items-center gap-3 py-4 ps-5 ms-5 transition-all ${sidebar == 3 ? "active" : "hover:text-white"}`}><ion-icon name="bar-chart-outline"></ion-icon>Analytics</Link>
                    <Link to="/admin/demand" onClick={()=>setActive(4)} className={`flex items-center gap-3 py-4 ps-5 ms-5 transition-all ${sidebar == 4 ? "active" : "hover:text-white"}`}><ion-icon name="analytics-outline"></ion-icon>Forecast</Link>
                    <Link to="/admin/staff" onClick={()=>setActive(5)} className={`flex items-center gap-3 py-4 ps-5 ms-5 transition-all ${sidebar == 5 ? "active" : "hover:text-white"}`}><ion-icon name="man-outline"></ion-icon>Add Staff</Link>
                </ul>
            </div>
            <div className="dashboard bg-white px-5 py-10 h-screen overflow-auto">
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/order' element={<Order /> }></Route>
                    <Route path='/review' element={ <Review /> }></Route>
                    <Route path='/analytics' element={ <Analytics /> }></Route>
                    <Route path="/demand" element={<Forecast />}></Route>
                    <Route path='/staff' element={<Staff/>}></Route>
                </Routes>
            </div>
        </main>
    </div>
  )
}

export default Dashboard