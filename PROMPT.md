# APEX Global Talent — Master Build Prompt

> Source of truth for the site build. Paste this whole file when handing the
> work off. Do not change the copy in the i18n block without a copy review.

**Repo path mapping** (the prompt below uses short asset paths):

| Prompt path | This repo |
| --- | --- |
| `/assets/...` | `public/assets/...` |
| `en.json`, `si.json`, `ko.json`, `ja.json` | `src/i18n/locales/*.json` |
| `partners.json`, `gallery.json`, `team.json` | `src/data/*.json` |
| `/gallery/japan`, `/gallery/korea` | `src/app/gallery/japan`, `src/app/gallery/korea` |

---

You are updating an EXISTING multilingual website for APEX Global Talent
(Language Institute & Visa Advisory, Malabe, Sri Lanka). Keep the current
design style, colors, fonts, header and footer. Only ADD or UPDATE the parts
below. Do not remove existing sections (Courses, Visa Process, Stories, FAQ,
Contact).

## GENERAL

- Languages: English (default), Sinhala, Korean, Japanese.
- Language switcher in the header: EN | සිං | 한국어 | 日本語. Save the choice
  in localStorage.
- ALL text lives in 4 files: en.json, si.json, ko.json, ja.json. No
  hard-coded text in components. Use the keys given below.
- Fonts: Noto Sans Sinhala, Noto Sans KR, Noto Sans JP (plus the current
  font for English).
- Mobile first, fully responsive. Lazy-load images.
- Brand display name: "APEX GLOBAL TALENT". Keep the footer and legal
  notice company name as it is ("Apex Global Talent Pvt Ltd").

## HOME PAGE SECTION ORDER

1. Hero (UPDATED)
2. Who We Are (NEW)
3. Our Core Pillars (NEW)
4. Partners + Direct Admissions (NEW)
5. Why Choose APEX (NEW)
6. Our Services: Japan + Korea (UPDATED)
7. Gallery (NEW)
8. Our Team + About the institute (NEW)
9. Existing: Courses, Visa Process, Stories, FAQ, Contact

---

## 1. HERO

- Full-width, about 80vh desktop and 70vh mobile.
- Bottom layer: photo `/assets/hero/hero-bg.jpg` (handshake with dotted world
  map, blue tone), cover and centered, with a dark navy overlay
  `rgba(8,20,45,0.65)`. Optional very slow subtle zoom. Compress the image
  (under 300 KB on mobile, use webp or srcset).
- Top layer, all centered, white text:
  1. APEX logo (white version), small
  2. Big title "APEX GLOBAL TALENT"
  3. `hero_tag`
  4. `hero_mission` (max width about 800px)
  5. Buttons: `btn_consult` (filled) and `btn_courses` (outline)
  6. Two small badges: APEX JAPAN (Japan flag) and APEX KOREA (Korea flag)

## 2. WHO WE ARE

Title `who_title`, paragraphs `who_1` and `who_2`. Two brand badges side by
side: APEX JAPAN and APEX KOREA with flags.

## 3. OUR CORE PILLARS

Title `pillars_title`. 3 cards in a row (stack on mobile), each with icon,
title, text. Icons: graduation cap (Education), briefcase/growth (Career
Development), handshake/passport (Work Support).

## 4. PARTNERS + DIRECT ADMISSIONS

- Top: highlighted block titled `direct_title` with two side-by-side boxes
  (stack on mobile): APEX JAPAN box (Japan flag, text `jp_banner`) and
  APEX KOREA box (Korea flag, text `kr_banner`).
- Below: APEX logo in the centre, handshake-style connecting lines to
  partner cards around it (on mobile: stacked cards with a small connector).
- Each card: partner logo, partner name, country flag. Data from
  `partners.json` (name, logo path, country JP/KR, website optional).
- Start with 2 partners + 2 empty placeholder cards:
  1. Fukuoka International Foreign Language College (Japan)
  2. KIIAC - Korea Institute of Industry-Academia Cooperation (Korea)
- Section title: key `partners`. Logo files go in `/assets/partners/`.

## 5. WHY CHOOSE APEX

Title `why_title`. 3 cards (stack on mobile) with icons: link/handshake,
building, route/flag. Keys `why1_t`/`why1_d`, `why2_t`/`why2_d`,
`why3_t`/`why3_d`.

## 6. OUR SERVICES (replace old content)

Two tabs/blocks with flags: APEX JAPAN and APEX KOREA.
Do NOT show the `jp_banner` / `kr_banner` here (they are in section 4).

- APEX JAPAN: tagline `jp_tag`, then 4 cards: `jp_student`, `jp_ssw`,
  `jp_training`, `jp_work`.
- APEX KOREA: 2 cards: `kr_d2` and `kr_d4`. On the D-2 card add a button
  `kr_pdf` that opens `/assets/korea-d2-guide.pdf` in a new tab.

## 7. GALLERY

- Two separate slideshows: "Japan" and "Korea" (tabs or side by side).
- Each has 5 photos. EACH PHOTO stays 30 seconds, then slides to the next.
  After the 5th it loops to the 1st. Config constant:
  `SLIDE_INTERVAL = 30000` (ms per photo).
- Smooth slide transition (about 0.8s). Arrows, dots, swipe. Pause on
  hover/touch. Restart the 30s timer when the user changes the slide.
- Under each slideshow a "View All" button (`view_all`): Japan opens
  `/gallery/japan`, Korea opens `/gallery/korea`, each as a NEW page with a
  responsive photo grid and a lightbox (click to enlarge, next/previous,
  close, keyboard arrows, swipe on mobile). Add a "Back to Home" button
  (`back_home`). Same header/footer.
- Photos: `/assets/gallery/japan/` and `/assets/gallery/korea/`.
  `gallery.json`: file name, country, caption in en/si/ko/ja.
  Slideshow uses the first 5 photos; View All shows all.

## 8. OUR TEAM

- Part A: about the institute: paragraph `about_inst` plus a few institute
  photos from `/assets/institute/`.
- Part B: team grid with cards (photo, name, designation, short bio).
  Data from `team.json`: name, role (en/si/ko/ja), bio (en/si/ko/ja), photo.
  Add 4 placeholder cards until real people are added.
- Section title: key `team`.

---

## DELIVERABLES

Updated components, 4 i18n files, JSON data files (partners, gallery,
team), asset folder structure, and a short README explaining how to:

- add/remove partners
- add gallery photos
- add team members
- change `SLIDE_INTERVAL`
- edit text in the 4 language files

Finally test the whole site on mobile and desktop in all 4 languages.

---

## i18n TEXT

Put these in the 4 language files.

### EN

```json
{
  "btn_consult": "Book Free Consultation",
  "btn_courses": "Explore Courses",
  "hero_tag": "Empowering Global Futures through Education, Career Development & Work Support.",
  "hero_mission": "At APEX Global Talent, we bridge Sri Lankan talent with top-tier academic and professional opportunities in Japan and South Korea. As an authorized education institute and direct representative, we provide seamless, transparent, and end-to-end pathways for students and professionals aiming for global success.",
  "who_title": "Who We Are",
  "who_1": "Headquartered in the education hub of Malabe, Sri Lanka, APEX Global Talent operates under two dedicated flagship brands: APEX JAPAN and APEX KOREA.",
  "who_2": "We go beyond conventional language training. We offer direct admissions, specialized language qualification prep (JLPT/NAT/TOPIK), and comprehensive career development support backed by official institutions in Japan and South Korea.",
  "pillars_title": "Our Core Pillars",
  "pillar1_t": "EDUCATION",
  "pillar1_d": "Comprehensive Japanese and Korean language instruction, exam preparation (JLPT/NAT/TOPIK), and cultural orientation.",
  "pillar2_t": "CAREER DEVELOPMENT",
  "pillar2_d": "Vocational skill alignment, academic counseling, and professional capability building.",
  "pillar3_t": "WORK SUPPORT",
  "pillar3_d": "Direct residency pathways, visa application guidance, and post-arrival employment & lifestyle assistance.",
  "direct_title": "DIRECT ADMISSIONS & OFFICIAL PARTNERSHIPS",
  "jp_banner": "APEX JAPAN: Direct pathway to Fukuoka International Foreign Language College and a network of prestigious Universities, Junior Colleges, Vocational Schools, and Language Institutes across Japan.",
  "kr_banner": "APEX KOREA: Official Sole Representative for KIIAC (Korea Institute of Industry-Academia Cooperation), offering direct D-2 / E-7 / F-2-R vocational study and long-term residency pathways.",
  "partners": "Our Partners",
  "why_title": "Why Choose APEX?",
  "why1_t": "Direct-to-Source Channels",
  "why1_d": "No unauthorized middlemen. Direct connections with Japanese campuses and South Korean government-backed industry-academia programs.",
  "why2_t": "State-of-the-Art Facilities",
  "why2_d": "Conveniently located in the heart of Malabe's higher education precinct (Athurugiriya Road, near SLIIT).",
  "why3_t": "End-to-End Commitment",
  "why3_d": "From first language class to visa approval, airport pickup, and job placement support in Japan and Korea.",
  "jp_title": "APEX JAPAN",
  "jp_tag": "We send you directly to Japan, no middlemen.",
  "jp_student": "Student Visa (JLPT N5–N2)",
  "jp_ssw": "SSW Visa (Food, Caregiving)",
  "jp_training": "Training Visa (Construction)",
  "jp_work": "Working Visa (Hotel Front Office, Airport Handling)",
  "kr_title": "APEX KOREA",
  "kr_d2": "D-2 Student Visa: part-time work allowed, no 6-month waiting period, long-term residency pathway",
  "kr_d4": "D-4 Student Visa: standard path, no work for the first 6 months",
  "kr_pdf": "Download Guide (PDF)",
  "gallery": "Gallery",
  "view_all": "View All",
  "back_home": "Back to Home",
  "team": "Our Team",
  "about_inst": "APEX Global Talent is a language institute and visa advisory in Malabe, Sri Lanka. We teach Japanese and Korean and guide students through study and work pathways to Japan and South Korea, honestly and with no hidden costs.",
  "team_role": "Designation"
}
```

### SI

```json
{
  "btn_consult": "නොමිලේ උපදේශනය වෙන්කරගන්න",
  "btn_courses": "පාඨමාලා බලන්න",
  "hero_tag": "අධ්‍යාපනය, වෘත්තීය සංවර්ධනය සහ රැකියා සහාය හරහා ගෝලීය අනාගතයන් සවිබල ගැන්වීම.",
  "hero_mission": "APEX Global Talent හි දී, අපි ශ්‍රී ලාංකික හැකියාවන් ජපානයේ සහ දකුණු කොරියාවේ ඉහළම අධ්‍යාපන හා වෘත්තීය අවස්ථා සමඟ සම්බන්ධ කරමු. බලයලත් අධ්‍යාපන ආයතනයක් සහ සෘජු නියෝජිතයෙකු ලෙස, ගෝලීය සාර්ථකත්වය අපේක්ෂා කරන සිසුන්ට සහ වෘත්තිකයන්ට පහසු, විනිවිද පෙනෙන, මුල සිට අග දක්වා මාර්ග සපයමු.",
  "who_title": "අප ගැන",
  "who_1": "අධ්‍යාපන කේන්ද්‍රයක් වන ශ්‍රී ලංකාවේ මාලඹේ මූලස්ථානගත APEX Global Talent, APEX JAPAN සහ APEX KOREA යන ප්‍රධාන වෙළඳ නාම දෙක යටතේ ක්‍රියාත්මක වේ.",
  "who_2": "අපි සාමාන්‍ය භාෂා පුහුණුවට වඩා වැඩි යමක් කරමු. සෘජු ඇතුළත් කිරීම්, විශේෂිත භාෂා සුදුසුකම් සූදානම (JLPT/NAT/TOPIK) සහ ජපානයේ හා දකුණු කොරියාවේ නිල ආයතන සහාය ඇති පූර්ණ වෘත්තීය සංවර්ධන සහාය ලබා දෙමු.",
  "pillars_title": "අපගේ මූලික කුළුණු",
  "pillar1_t": "අධ්‍යාපනය",
  "pillar1_d": "ජපන් සහ කොරියානු භාෂා පූර්ණ ඉගැන්වීම, විභාග සූදානම (JLPT/NAT/TOPIK) සහ සංස්කෘතික දැනුවත් කිරීම.",
  "pillar2_t": "වෘත්තීය සංවර්ධනය",
  "pillar2_d": "වෘත්තීය කුසලතා ගැළපීම, අධ්‍යයන උපදේශනය සහ වෘත්තීය හැකියා ගොඩනැගීම.",
  "pillar3_t": "රැකියා සහාය",
  "pillar3_d": "සෘජු පදිංචි මාර්ග, වීසා අයදුම් මඟපෙන්වීම සහ පැමිණීමෙන් පසු රැකියා හා ජීවන රටා සහාය.",
  "direct_title": "සෘජු ඇතුළත් කිරීම් සහ නිල හවුල්කාරිත්ව",
  "jp_banner": "APEX JAPAN: Fukuoka International Foreign Language College සහ ජපානය පුරා විශ්වවිද්‍යාල, ජුනියර් කොලේජ්, වෘත්තීය පාසල් සහ භාෂා ආයතනවලට සෘජු මාර්ගය.",
  "kr_banner": "APEX KOREA: KIIAC (Korea Institute of Industry-Academia Cooperation) සඳහා නිල ඒකීය නියෝජිත. D-2 / E-7 / F-2-R වෘත්තීය අධ්‍යයන සහ දිගුකාලීන පදිංචි මාර්ග සෘජුව.",
  "partners": "අපගේ හවුල්කරුවන්",
  "why_title": "APEX තෝරාගන්නේ ඇයි?",
  "why1_t": "සෘජු මූලාශ්‍ර මාර්ග",
  "why1_d": "අනවසර අතරමැදියන් නැත. ජපන් විශ්වවිද්‍යාල සහ දකුණු කොරියාවේ රජය සහාය දක්වන කර්මාන්ත-අධ්‍යාපන වැඩසටහන් සමඟ සෘජු සම්බන්ධතා.",
  "why2_t": "නවීන පහසුකම්",
  "why2_d": "මාලඹේ උසස් අධ්‍යාපන කලාපයේ කේන්ද්‍රයේ (අතුරුගිරිය පාර, SLIIT අසල) පහසුවෙන් පිහිටා ඇත.",
  "why3_t": "මුල සිට අග දක්වා කැපවීම",
  "why3_d": "පළමු භාෂා පන්තියේ සිට වීසා අනුමැතිය, ගුවන්තොටුපළ පිළිගැනීම සහ ජපානයේ හා කොරියාවේ රැකියා සහාය දක්වා.",
  "jp_title": "APEX JAPAN",
  "jp_tag": "අතරමැදියන් නැතිව ඔබව සෘජුවම ජපානයට යවමු.",
  "jp_student": "ශිෂ්‍ය වීසා (JLPT N5–N2)",
  "jp_ssw": "SSW වීසා (ආහාර, රැකබලා ගැනීම)",
  "jp_training": "පුහුණු වීසා (ඉදිකිරීම්)",
  "jp_work": "රැකියා වීසා (හෝටල් ෆ්‍රන්ට් ඔෆිස්, ගුවන්තොටුපළ සේවා)",
  "kr_title": "APEX KOREA",
  "kr_d2": "D-2 ශිෂ්‍ය වීසා: අර්ධ කාලීන රැකියා කළ හැක, මාස 6ක් බලා සිටීම නැත, දිගුකාලීන පදිංචි මාර්ගය",
  "kr_d4": "D-4 ශිෂ්‍ය වීසා: සාමාන්‍ය මාර්ගය, මුල් මාස 6 රැකියා නැත",
  "kr_pdf": "මාර්ගෝපදේශය බාගන්න (PDF)",
  "gallery": "ඡායාරූප ගැලරිය",
  "view_all": "සියල්ල බලන්න",
  "back_home": "මුල් පිටුවට",
  "team": "අපගේ කණ්ඩායම",
  "about_inst": "APEX Global Talent යනු ශ්‍රී ලංකාවේ මාලඹේ පිහිටි භාෂා ආයතනයක් සහ වීසා උපදේශන ආයතනයකි. අපි ජපන් සහ කොරියානු භාෂා උගන්වන අතර, ජපානයට සහ දකුණු කොරියාවට අධ්‍යයන හා රැකියා මාර්ග සඳහා අවංකව, සැඟවුණු ගාස්තු නැතිව මඟපෙන්වමු.",
  "team_role": "තනතුර"
}
```

### KO

```json
{
  "btn_consult": "무료 상담 예약",
  "btn_courses": "과정 보기",
  "hero_tag": "교육, 커리어 개발, 취업 지원으로 글로벌 미래를 열어갑니다.",
  "hero_mission": "APEX Global Talent은 스리랑카의 인재를 일본과 한국의 최고 수준의 학업 및 직업 기회와 연결합니다. 공인 교육기관이자 직접 대표로서, 글로벌 성공을 꿈꾸는 학생과 직장인에게 투명하고 체계적인 전 과정을 제공합니다.",
  "who_title": "우리는 누구인가요",
  "who_1": "스리랑카 말라베의 교육 중심지에 본사를 두고, APEX JAPAN과 APEX KOREA 두 개의 대표 브랜드로 운영됩니다.",
  "who_2": "일반 어학 교육을 넘어, 직접 입학, 시험 준비(JLPT/NAT/TOPIK), 일본·한국 공식 기관이 뒷받침하는 종합 커리어 개발을 지원합니다.",
  "pillars_title": "핵심 서비스",
  "pillar1_t": "교육",
  "pillar1_d": "일본어·한국어 종합 교육, 시험 준비(JLPT/NAT/TOPIK), 문화 오리엔테이션.",
  "pillar2_t": "커리어 개발",
  "pillar2_d": "직업 기술 연계, 학업 상담, 직무 역량 강화.",
  "pillar3_t": "취업 지원",
  "pillar3_d": "직접 체류 경로, 비자 신청 안내, 입국 후 취업 및 생활 지원.",
  "direct_title": "직접 입학 및 공식 파트너십",
  "jp_banner": "APEX JAPAN: Fukuoka International Foreign Language College 및 일본 전역의 대학, 단기대학, 전문학교, 어학원과 직접 연결됩니다.",
  "kr_banner": "APEX KOREA: KIIAC(Korea Institute of Industry-Academia Cooperation)의 공식 단독 대표. D-2 / E-7 / F-2-R 직업 교육 및 장기 체류 경로를 직접 제공합니다.",
  "partners": "파트너",
  "why_title": "왜 APEX인가요?",
  "why1_t": "직접 연결 채널",
  "why1_d": "비공식 중개인 없이 일본 대학 및 한국 정부 지원 산학협력 프로그램과 직접 연결됩니다.",
  "why2_t": "최신 시설",
  "why2_d": "말라베 고등교육 중심지(SLIIT 인근, 아투루기리야 로드)에 위치해 있습니다.",
  "why3_t": "처음부터 끝까지 책임",
  "why3_d": "첫 어학 수업부터 비자 승인, 공항 픽업, 일본·한국 취업 지원까지 함께합니다.",
  "jp_title": "APEX JAPAN",
  "jp_tag": "중개인 없이 일본으로 직접 연결해 드립니다.",
  "jp_student": "유학 비자 (JLPT N5–N2)",
  "jp_ssw": "SSW 비자 (외식, 간병)",
  "jp_training": "연수 비자 (건설)",
  "jp_work": "취업 비자 (호텔 프런트, 공항 서비스)",
  "kr_title": "APEX KOREA",
  "kr_d2": "D-2 유학 비자: 아르바이트 가능, 6개월 대기 없음, 장기 체류 경로",
  "kr_d4": "D-4 유학 비자: 일반 경로, 첫 6개월 근무 불가",
  "kr_pdf": "가이드 다운로드 (PDF)",
  "gallery": "갤러리",
  "view_all": "전체 보기",
  "back_home": "홈으로",
  "team": "우리 팀",
  "about_inst": "APEX Global Talent은 스리랑카 말라베에 있는 어학원 및 비자 상담 기관입니다. 일본어와 한국어를 가르치고, 숨은 비용 없이 정직하게 일본·한국 유학 및 취업 경로를 안내합니다.",
  "team_role": "직책"
}
```

### JA

```json
{
  "btn_consult": "無料相談を予約",
  "btn_courses": "コースを見る",
  "hero_tag": "教育・キャリア開発・就労支援で、世界への未来を。",
  "hero_mission": "APEX Global Talentは、スリランカの人材と日本・韓国の一流の学業・就業の機会をつなぎます。認可教育機関かつ直接代表として、世界での成功を目指す学生や社会人に、わかりやすく透明性のある一貫したルートを提供します。",
  "who_title": "私たちについて",
  "who_1": "スリランカ・マラベの教育の中心地に本部を置き、APEX JAPANとAPEX KOREAの2つの主力ブランドで運営しています。",
  "who_2": "一般的な語学指導にとどまらず、直接入学、試験対策(JLPT/NAT/TOPIK)、日韓の公的機関に支えられた総合的なキャリア開発支援を行います。",
  "pillars_title": "3つの柱",
  "pillar1_t": "教育",
  "pillar1_d": "日本語・韓国語の総合指導、試験対策(JLPT/NAT/TOPIK)、文化オリエンテーション。",
  "pillar2_t": "キャリア開発",
  "pillar2_d": "職業スキルの適合、進学相談、職業能力の向上。",
  "pillar3_t": "就労支援",
  "pillar3_d": "直接の滞在ルート、ビザ申請のご案内、渡航後の就労・生活サポート。",
  "direct_title": "直接入学・公式提携",
  "jp_banner": "APEX JAPAN: Fukuoka International Foreign Language College をはじめ、日本全国の大学・短期大学・専門学校・日本語学校と直接つながっています。",
  "kr_banner": "APEX KOREA: KIIAC(Korea Institute of Industry-Academia Cooperation)公式独占代表。D-2 / E-7 / F-2-R の職業教育と長期滞在ルートを直接ご案内。",
  "partners": "提携先",
  "why_title": "なぜAPEXなのか?",
  "why1_t": "直接ルート",
  "why1_d": "無許可の仲介業者は一切なし。日本の大学や韓国政府支援の産学協力プログラムと直接つながっています。",
  "why2_t": "充実した施設",
  "why2_d": "マラベの高等教育エリアの中心(SLIIT近く、アトゥルギリヤ・ロード)にあります。",
  "why3_t": "最初から最後までサポート",
  "why3_d": "最初の語学授業からビザ取得、空港送迎、日本・韓国での就職サポートまで。",
  "jp_title": "APEX JAPAN",
  "jp_tag": "仲介なしで、直接日本へ。",
  "jp_student": "留学ビザ(JLPT N5〜N2)",
  "jp_ssw": "特定技能ビザ(外食・介護)",
  "jp_training": "技能実習・育成就労(建設)",
  "jp_work": "就労ビザ(ホテルフロント・空港業務)",
  "kr_title": "APEX KOREA",
  "kr_d2": "D-2留学ビザ:アルバイト可、6か月の待機なし、長期滞在への道",
  "kr_d4": "D-4留学ビザ:一般ルート、最初の6か月は就労不可",
  "kr_pdf": "ガイドをダウンロード(PDF)",
  "gallery": "ギャラリー",
  "view_all": "すべて見る",
  "back_home": "ホームへ戻る",
  "team": "私たちのチーム",
  "about_inst": "APEX Global Talentは、スリランカのマラベにある語学学校兼ビザ相談機関です。日本語と韓国語を教え、隠れた費用なく誠実に、日本・韓国への留学や就労をサポートします。",
  "team_role": "役職"
}
```

---

## Prompt eka dana kalin hadaganna ona files

1. `/assets/hero/hero-bg.jpg` — handshake + world map photo, **logo/text nathi**
   (KIIAC banner eka hero ekata danna epa). Mobile ekatath `hero-bg-sm.jpg`.
2. `public/assets/logo.png` (light backgrounds) saha `public/assets/logo-white.png`
   (dark navy hero/footer). Square PNG, transparent background, 512×512+.
3. Partner logos (Fukuoka college, KIIAC). KIIAC logo use karanna permission ganna.
4. `/assets/korea-d2-guide.pdf` — D-2 PDF eka.
5. Gallery photos (Japan 5+, Korea 5+), institute photos, team photos (permission ekka).

## Site ekata dana kalin sathyayak da balanna

- "Authorized institute", "Official Sole Representative", "government-backed":
  agreement / registration thiyenna ona.
- "Job placement", "post-arrival employment": SLBFE licence thiyenawada balanna.
- D-2 "6 masa nathi", "long-term residency": Korea rules walin ayeth check karanna.
