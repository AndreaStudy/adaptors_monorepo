# 🔌 Adaptors

모두를 연결하라! Adaptors! <br>
취업/이직에 특화된 쉽고 편리한 멘토링 플랫폼. <br>
AI피드백, 화상•채팅 서비스, 간편한 멘토링 생성 기능 <br>
대용량 트래픽에 대한 분산처리가 가능한 MSA(Micro Service Architecture) 구조의 프로젝트입니다. <br><br>

### 특징

- EDA(Event Driven Design)를 적용, 카프카 이벤트 기반으로 느슨한 결합을 가집니다.
- 각 서비스들의 독립적 DB구조에서 효율적 집계를 담당하는 Batch-service.
- 카프카 소스/싱크 커넥트를 사용한 CDC 기반 데이터 동기화 처리.
- CQRS (Command and Query Responsibility Segregation) 적용. <br>
  쓰기와 읽기의 책임을 명확히 분리하였습니다.
- 헥사고날 아키텍처를 적용하여 기술 코드와 비즈니스 코드를 분리. <br>
  도메인로직에 집중 하여 기술적 요구사항에 빠르게 대응할 수 있도록 했습니다.

<hr>

- **개발 기간** : 2024.10.07 ~ 2024.12.15 (11주)
- **플랫폼** : Web
- **개발 인원** : 9명 <br><br>

<table align="center">
  <tbody align="center"> 
    <tr>
      <td align="center" valign="middle" width="100%">
        <img width="100%" src="./readme-assets/cover.png" />
      </td>
    </tr>
    <tr>
      <td align="center" valign="middle" colspan="2" width="50%">
        <table width="100%">
          <tr>
            <td align="center" valign="middle" width="50%">
              <img width="100%" src="./readme-assets/qr.png" />
            </td>
            <td align="center" valign="middle" width="50%">
              <img width="100%" src="./readme-assets/voltchar.webp" />
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </tbody>
</table> <br>

## 🔎 목차

<div align="center">

### <a href="#developers">🌟 팀원 구성</a>

### <a href="#techStack">🛠️ 기술 스택</a>

### <a href="#systemArchitecture">🌐 시스템 아키텍처</a>

### <a href="#skills">📲 기능 구성</a>

### <a href="#directories">📂 디렉터리 구조</a>

### <a href="#projectDeliverables">📦 프로젝트 산출물</a>

</div>
<br>

## 🌟 팀원 구성

<a name="developers"></a>

<div align="center">
<table align="center" width="100%" border="1">
  <tbody>
    <!-- 첫 번째 행 -->
    <tr>
      <td height="320px" align="center" colspan="2"> 
        <a href="">
          <img src="" width="160px" /> <br> 정훈석 <br>(Frontend)
        </a>
      </td>
      <td height="320px" align="center" colspan="2">
        <a href="">
          <img src="" width="160px" /> <br> 설찬우 <br>(Frontend)
        </a>
      </td>
      <td height="320px" align="center" colspan="2">
        <a href="">
          <img src="" width="160px" /> <br> 김예진 <br>(Frontend)
        </a>
      </td>
    </tr>
    <tr>
      <td height="320px" align="center">
        <a href="">
          <img src="" width="160px" /> <br> 김대희 <br>(Backend)
        </a>
      </td>
      <td height="320px" align="center">
        <a href="">
          <img src="" width="160px" /> <br> 김성태 <br>(Backend)
        </a>
      </td>
      <td height="320px" align="center">
        <a href="">
          <img src="" width="160px" /> <br> 강수빈 <br>(Backend)
        </a>
      </td>
      <td height="320px" align="center">
        <a href="">
          <img src="" width="160px" /> <br> 허정현 <br>(Backend)
        </a>
      </td>
      <td height="320px" align="center">
        <a href="">
          <img src="" width="160px" /> <br> 백승엽 <br>(Backend<br>&DevOps)
        </a>
      </td>
      <td height="320px" align="center">
        <a href="">
          <img src="" width="160px" /> <br> 오대관 <br>(DevOps)
        </a>
      </td>      
    </tr>
  </tbody>
</table>

</div>
<br>

## 🛠️ 기술 스택

<a name="techStack"></a>

### Frontend

<div align="center">

![VSCode](https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=VisualStudioCode&logoColor=white)<br>
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)<br>
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![NEXT.JS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![ShadcnUI](https://img.shields.io/badge/shadcnui-000000.svg?style=for-the-badge&logo=shadcnui&logoColor=#000000)<br/>
![Electron](https://img.shields.io/badge/Electron-4F4F4F?style=for-the-badge&logo=Electron&logoColor=white)

</div>

- **Language |** TypeScript ^5.3.3
- **Runtime Environment |** Node.js >=18
- **Framework |** Next.js 14.2.6
- **Library |** React.js 19.0.0 ,Shadcn UI, Tailwind CSS ^3.4.1, fullcalendar ^6.1.4, turbo ^2.1.3, framer-motion ^11.11.10, openvidu-browser ^2.30.1, recharts ^2.14.1, sweetalert2 ^11.4.8, swiper ^11.1.14, zod ^3.23.8
- **IDE |** Visual Studio Code 1.93.1
- **Deploy |** k8s

### Backend

<div align="center">

![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![IntelliJ IDEA](https://img.shields.io/badge/intellijidea-000000.svg?&style=for-the-badge&logo=intellijidea&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)<br>
![Spring Boot](https://img.shields.io/badge/springboot-6DB33F.svg?&style=for-the-badge&logo=springboot&logoColor=white)
![SpringSecurity](https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Elasticsearch](https://img.shields.io/badge/elasticsearch-%230377CC.svg?style=for-the-badge&logo=elasticsearch&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)
![KAFKA CONNECT](https://img.shields.io/badge/Kafka%20Connect-231F20?style=for-the-badge&logo=Apache%20Kafka&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)

</div>

- **Framework |** Spring Boot 3.3.5
- **Library |** Spring Data JPA, Querydsl 5.0.0
- **Database |** MySQL 8.0.38, Redis 7.2
- **IDE |** IntelliJ IDEA 2024.2 (Ultimate Edition), Visual Studio Code 1.93.1
- **Build Tool |** Gradle 8.8.0

### DevOps

<div align="center">

<img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=Kubernetes&logoColor=white"> <img src="https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=Helm&logoColor=white"> <img src="https://img.shields.io/badge/Kong-003459?style=for-the-badge&logo=Kong&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20EKS-FF9900?style=for-the-badge&logo=Amazon%20EKS&logoColor=white"> <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"> <img src="https://img.shields.io/badge/ALB-232F3E?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20ECR-FF9900?style=for-the-badge&logo=Amazon%20AWS&logoColor=white"> <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=PostgreSQL&logoColor=white"> <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=GitHub%20Actions&logoColor=white"> <img src="https://img.shields.io/badge/Argo%20CD-EF7B4D?style=for-the-badge&logo=Argo&logoColor=white"> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white"> <img src="https://img.shields.io/badge/GitOps-F05032?style=for-the-badge&logo=Git&logoColor=white">

</div>

### Collaboration

<div align="center">

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Notion](https://img.shields.io/badge/notion-000000.svg?style=for-the-badge&logo=notion&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

</div>

<br>

## 🌐 시스템 아키텍처

![image](https://github.com/user-attachments/assets/aafdeb80-454e-4c7f-999a-0e6db6391cda)

<br>

## 📲 주요 기능

<a name="skills"></a>

## 🏃‍♂️로그인 페이지

| <img src="#" width="200px">      | <img src="#" width="200px">                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 랜딩페이지                       | 로그인&카카오로그인                                                                                                                                           |
| 최초로 실행될 때 보여지는 페이지 | 회원가입을 통해 회원가입을 진행할 수 있으며, 카카오 로그인 또한 할 수 있습니다. 카카오 로그인 성공 시, 서비스에 등록된 회원이 아니라면 회원가입을 진행합니다. |

## 🕒메인 페이지(Web)

| <img src="" width="200px">                                                    | <img src="" width="200px">                                                                                                         |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 메인페이지&베스트 멘토링&인기 멘토                                            | ELASTIC SEARCH&멘토링 리스트 페이지&멘토링 상세보기 페이지                                                                         |
| 메인페이지에서 현재 베스트 멘토링과 인기 멘토에 대한 정보를 얻을 수 있습니다. | ELASTIC SEARCH를 통해 멘토링을 보다 정확하게 검색가능하며 검색 결과에 해당하는 멘토링들을 볼 수 있으며, 상세보기를 할 수 있습니다. |

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 멘토링                     | 최근 본 상품               |
| 머넣지                     | 머넣지                     |

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 머 넣지                    | 여기도                     |
| 머 넣지                    | 여기도                     |

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 머넣지                     | 머넣지                     |
| 머넣지                     | 머넣지                     |

## 📑 AI 피드백 페이지 & 마이페이지 (Web)

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 머넣지                     | 머넣지                     |
| 머넣지                     |

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 머넣지                     | 머넣지                     |
| 머넣지                     | 머넣지                     |

## 🕒메인 페이지(Electron)

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 머넣지                     | 머넣지                     |
| 머넣지                     | 머넣지                     |

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 머넣지                     | 머넣지                     |
| 머넣지                     | 머넣지                     |

## 👨🏼‍🤝‍👨🏼 볼트 & 스케쥴 페이지 (Electron)

| <img src="" width="200px"> | <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- | -------------------------- |
| 머넣지                     | 머넣지 변화                | 머넣지                     |
| 머넣지                     | 머넣지                     | 머넣지                     |

| <img src="" width="200px"> | <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- | -------------------------- |
| 머넣지                     | 머넣지                     | 머넣지                     |
| 머넣지                     | 머넣지                     | 머넣지                     |

## 💭화상회의 페이지(멘토, 멘티)

| <img src="" width="200px"> | <img src="" width="200px"> |
| -------------------------- | -------------------------- |
| 머화상회의 페이지(멘토)    | 화상회의 페이지(멘티)      |
| 머넣지                     | 머넣지                     |

## 📂 디렉터리 구조

<details>
  <summary>
    자세히
  </summary>

<!-- todo -->

```
📦backend
 ┣ 📂.github
 ┃ ┣ 📂ISSUE_TEMPLATE
 ┃ ┣ 📂workflows
```

</details>

<details>
  <summary>
    자세히(DevOps)
  </summary>

📦DevOps

```bash
├── 📔Back
│   ├── 📔aifeedback-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔auth-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yml
│   │   │   ├── deployment.yml
│   │   │   ├── secrets.yml
│   │   │   └── svc.yml
│   │   └── values.yaml
│   ├── 📔batch-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔category-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔feedback-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔hashtag-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔member-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔mentoring-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret-values.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔mongo
│   │   ├── 📔alarm-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   ├── 📔chat-query-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   ├── 📔chat-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   ├── 📔feedback-query-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   ├── 📔member-query-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   ├── 📔mentoring-query-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   ├── 📔prompt-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   ├── 📔review-query-service
│   │   │   ├── Chart.yaml
│   │   │   ├── sealed-secret.yaml
│   │   │   ├── secret.yaml
│   │   │   ├── templates
│   │   │   │   ├── _helpers.tpl
│   │   │   │   ├── configmap.yaml
│   │   │   │   ├── deployment.yaml
│   │   │   │   ├── secrets.yaml
│   │   │   │   └── svc.yaml
│   │   │   └── values.yaml
│   │   └── 📔session-request-query-service
│   │       ├── Chart.yaml
│   │       ├── sealed-secret.yaml
│   │       ├── secret.yaml
│   │       ├── templates
│   │       │   ├── _helpers.tpl
│   │       │   ├── configmap.yaml
│   │       │   ├── deployment.yaml
│   │       │   ├── secrets.yaml
│   │       │   └── svc.yaml
│   │       └── values.yaml
│   ├── 📔openvidu-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔payment-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   ├── 📔review-service
│   │   ├── Chart.yaml
│   │   ├── sealed-secret.yaml
│   │   ├── secret.yaml
│   │   ├── templates
│   │   │   ├── _helpers.tpl
│   │   │   ├── configmap.yaml
│   │   │   ├── deployment.yaml
│   │   │   ├── secrets.yaml
│   │   │   └── svc.yaml
│   │   └── values.yaml
│   └── 📔session-request-service
│       ├── Chart.yaml
│       ├── sealed-secret.yaml
│       ├── secret.yaml
│       ├── templates
│       │   ├── _helpers.tpl
│       │   ├── configmap.yaml
│       │   ├── deployment.yaml
│       │   ├── secrets.yaml
│       │   └── svc.yaml
│       └── values.yaml
├── 📔front-server
│   ├── Chart.yaml
│   ├── sealed-secret.yaml
│   ├── secret.yaml
│   ├── templates
│   │   ├── _helpers.tpl
│   │   ├── alb-ingress.yaml
│   │   ├── deployment.yaml
│   │   ├── secrets.yaml
│   │   └── svc.yaml
│   └── values.yaml
```

</details>
<br>

## 📦 데브옵스 기술스택

| 분류           | 기술 스택                                                      |
| -------------- | -------------------------------------------------------------- |
| Common         | GitHub, Notion, GitOps                                         |
| Infrastructure | AWS (EKS, ECR, ALB), Kubernetes, Helm, Kong                    |
| CI/CD          | GitHub Actions, ArgoCD, Docker(27.2.0), Docker-compose(v2.5.0) |
| Database       | MySQL(24.04.2), PostgreSQL, MongoDB, Redis(7.2.5)              |
| Message Queue  | Apache Kafka, Kafka Connect                                    |
| <br>           |                                                                |

## 📦 프로젝트 산출물

<a name="projectDeliverables"></a>

<h3>💡 이벤트 스토밍</h3>
<div align="center">

<img src=""/>
</div>

<h3>🗄️ ERD</h3>
<div align="center"> 
</div>

<h3><a href="#" target="_blank">📅 WBS</a></h3>

<h3><a href="#" target="_blank">📋 요구사항 정의서</a></h3>

<h3><a href="#" target="_blank">📡 API 명세서</a></h3>
