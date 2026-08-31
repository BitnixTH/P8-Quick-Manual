/* =========================================================
   P8 QUICK MANUAL DATA
========================================================= */

// =========================================================
// EXTERNAL RESOURCE LINKS
// =========================================================
// CareSense PDF link supplied in the project notes.
// Add/replace the remaining Google Drive / YouTube links here when available.
const RESOURCE_LINKS = {
  careSensePdf:
    "https://drive.google.com/file/d/18RKcoWQi0HCNr49S_V2wjRswCoZsd-Pj/view",

  // TODO: replace with the actual CareSense Air 365 review video URL.
  careSenseVideo:
    "",

  // TODO: replace with the actual Food Exchange PDF Google Drive URL.
  foodExchangePdf:
    "",

  // TODO: replace with the actual Food Absorption / GI PDF Google Drive URL.
  foodAbsorptionPdf:
    ""
};

const steps = [

  /* =======================================================
     STEP 01
  ======================================================= */

  {
    id: "step01",
    number: "01",

    icon: "Image/Icon-1.png",

    pathTH: "อุปกรณ์ในชุด",
    pathEN: "P8 Set",

    titleTH:
      "รู้จักอุปกรณ์ในชุด P8",

    titleEN:
      "Getting to Know Your P8 Set",

    descriptionTH:
      "อุปกรณ์ทั้งหมดที่ได้รับในชุด และหน้าที่ของอุปกรณ์แต่ละชิ้น",

    descriptionEN:
      "Learn what is included in the P8 set and the function of each item.",

    topics: [

      {
        th: "อุปกรณ์ในชุด",
        en: "P8 Set"
      },

      {
        th: "หน้าที่ของอุปกรณ์",
        en: "Device Functions"
      },

      {
        th: "อุปกรณ์เสริม",
        en: "Accessories"
      }

    ],

    images: [

      "Image/Step01-1.png",

      "Image/Step01-2.png",

      "Image/Step01-3.png"

    ]
  },


  /* =======================================================
     STEP 02
  ======================================================= */

  {
    id: "step02",
    number: "02",

    icon: "Image/Icon-2.png",

    pathTH:
      "โครงสร้าง P8",

    pathEN:
      "P8 Structure",

    titleTH:
      "โครงสร้างและเมนูของ P8",

    titleEN:
      "P8 Structure and Menu",

    descriptionTH:
      "โครงสร้างตัวปากกาและหน้าจอ → ปุ่มต่าง ๆ → โครงสร้างเมนูหลัก",

    descriptionEN:
      "Pen structure and display → Buttons → Main menu structure",

    topics: [

      {
        th: "โครงสร้าง P8",
        en: "P8 Structure"
      },

      {
        th: "หน้าจอและปุ่ม",
        en: "Display & Buttons"
      },

      {
        th: "เมนูหลัก",
        en: "Main Menu"
      }

    ],

    images: [

      "Image/Step02-1.png",

      "Image/Step02-2.png",

      "Image/Step02-3.png"

    ]
  },


  /* =======================================================
     STEP 03
  ======================================================= */

  {
    id: "step03",
    number: "03",

    icon:
      "Image/Icon-3.png",

    pathTH:
      "เปิด–ปิด",

    pathEN:
      "Power & Screen",

    titleTH:
      "การเปิด–ปิดและการใช้งานหน้าจอ",

    titleEN:
      "Power On/Off and Screen Operation",

    descriptionTH:
      "เปิดเครื่อง → ปิดเครื่อง → โหมดพักหน้าจอ → การปลุกหน้าจอ/กลับมาใช้งาน",

    descriptionEN:
      "Power On → Power Off → Screen Saver Mode → Wake the Screen",

    topics: [

      {
        th: "เปิดเครื่อง",
        en: "Power On"
      },

      {
        th: "ปิดเครื่อง",
        en: "Power Off"
      },

      {
        th: "โหมดพักหน้าจอ",
        en: "Screen Saver"
      },

      {
        th: "ปลุกหน้าจอ",
        en: "Wake Screen"
      }

    ],

    images: [

      "Image/Step03-1.png",

      "Image/Step03-2.png",

      "Image/Step03-3.png",

      "Image/Step03-4.png"

    ]
  },


  /* =======================================================
     STEP 04
  ======================================================= */

  {
    id: "step04",
    number: "04",

    icon:
      "Image/Icon-4.png",

    pathTH:
      "เชื่อมต่อแอป",

    pathEN:
      "Connect App",

    titleTH:
      "เชื่อมต่อและตั้งค่า P8 กับแอป DIA:CONN",

    titleEN:
      "Connect and Set Up P8 with the DIA:CONN App",

    descriptionTH:
      "จับคู่ P8 → ตั้งค่า P8 → ค้นหาปากกา → ยกเลิกการจับคู่ P8",

    descriptionEN:
      "Pair P8 → Configure P8 → Find Pen → Unpair P8",

    topics: [

      {
        th: "จับคู่ P8",
        en: "Pair P8"
      },

      {
        th: "ตั้งค่า P8",
        en: "P8 Settings"
      },

      {
        th: "ค้นหาปากกา",
        en: "Find Pen"
      },

      {
        th: "ยกเลิกการจับคู่",
        en: "Unpair P8"
      }

    ],

    images: [

      "Image/Step04-1.png",

      "Image/Step04-2.png",

      "Image/Step04-3.png",

      "Image/Step04-4.png"

    ]
  },


  /* =======================================================
     STEP 05
     PATH = การเปลี่ยนคาร์ทริดจ์
  ======================================================= */

  {
    id: "step05",
    number: "05",

    icon:
      "Image/Icon-5.png",

    pathTH:
      "การเปลี่ยน<br>คาร์ทริดจ์",

    pathEN:
      "Cartridge<br>Replacement",

    titleTH:
      "การเปลี่ยนคาร์ทริดจ์อินซูลิน",

    titleEN:
      "Replacing the Insulin Cartridge",

    descriptionTH:
      "เปลี่ยนคาร์ทริดจ์ → ตรวจสอบสถานะ → ตรวจสอบประวัติการเปลี่ยนคาร์ทริดจ์",

    descriptionEN:
      "Replace Cartridge → Check Status → Review Cartridge History",

    topics: [

      {
        th: "เตรียมคาร์ทริดจ์",
        en: "Prepare Cartridge"
      },

      {
        th: "เปลี่ยนคาร์ทริดจ์",
        en: "Replace Cartridge"
      },

      {
        th: "ตรวจสอบสถานะ",
        en: "Check Status"
      },

      {
        th: "ตรวจสอบประวัติ",
        en: "Review History"
      }

    ],

    images: [

      "Image/Step05-1.png",

      "Image/Step05-2.png",

      "Image/Step05-3.png",

      "Image/Step05-4.png"

    ]
  },


  /* =======================================================
     STEP 06
  ======================================================= */

  {
    id: "step06",
    number: "06",

    icon:
      "Image/Icon-6.png",

    pathTH:
      "เชื่อมต่อข้อมูล",

    pathEN:
      "Connect Data",

    titleTH:
      "เชื่อมต่อข้อมูลและทีมรักษา",

    titleEN:
      "Connect Data and Care Team",

    descriptionTH:
      "เชื่อมต่อ/ยกเลิกการเชื่อมต่อ CGM → เชื่อมต่อ/ยกเลิกการเชื่อมต่อทีมรักษา → ดูข้อมูลสุขภาพและรายงาน",

    descriptionEN:
      "Connect / Disconnect CGM → Connect / Disconnect Care Team → View Reports",

    topics: [

      {
        th: "เชื่อมต่อ CGM",
        en: "Connect CGM"
      },

      {
        th: "เชื่อมต่อทีมรักษา",
        en: "Connect Care Team"
      },

      {
        th: "รายงานสุขภาพ",
        en: "Health Reports"
      }

    ],

    images: [

      "Image/Step06-1.png",

      "Image/Step06-2.png",

      "Image/Step06-3.png"

    ],

    resources: [
      {
        imageTH: "Image/CareSense-TH-Pic1.png",
        imageEN: "Image/CareSense-EN-Pic1.png",
        url: RESOURCE_LINKS.careSensePdf,
        labelTH: "ข้อมูล CareSense Air 365 CGM [PDF]",
        labelEN: "CareSense Air 365 CGM Information [PDF]"
      },
      {
        imageTH: "Image/CareSense-TH-Pic2.png",
        imageEN: "Image/CareSense-EN-Pic2.png",
        url: RESOURCE_LINKS.careSenseVideo,
        labelTH: "ดูรีวิว CareSense Air 365 CGM [VDO]",
        labelEN: "Watch CareSense Air 365 CGM Review [VDO]"
      }
    ]
  },


  /* =======================================================
     STEP 07
  ======================================================= */

  {
    id: "step07",
    number: "07",

    icon:
      "Image/Icon-7.png",

    pathTH:
      "ฉีดอินซูลิน",

    pathEN:
      "Injection",

    titleTH:
      "การฉีดอินซูลินและการคำนวณโบลัส",

    titleEN:
      "Insulin Injection and Bolus Calculator",

    descriptionTH:
      "ฉีดผ่าน P8 หรือฉีดผ่านแอป DIA:CONN",

    descriptionEN:
      "Inject using P8 or through the DIA:CONN App",

    topics: [

      {
        th: "ฉีดผ่าน P8",
        en: "Inject with P8"
      },

      {
        th: "ฉีดด่วน",
        en: "Quick Injection"
      },

      {
        th: "คำนวณคาร์โบไฮเดรต",
        en: "Carbohydrate Calculation"
      },

      {
        th: "อาหารแลกเปลี่ยน",
        en: "Thai Food Exchange",
        imagesTH: [
          "Image/Thai Exchange Food List-1.jpg",
          "Image/Thai Exchange Food List-2.jpg"
        ],
        imagesEN: [
          "Image/Thai Exchange Food List-1.jpg",
          "Image/Thai Exchange Food List-2.jpg"
        ]
      },

      {
        th: "การดูดซึมอาหาร",
        en: "Food Absorption",
        imagesTH: [
          "Image/GI-TH.png"
        ],
        imagesEN: [
          "Image/GI-EN.png"
        ]
      },

      {
        th: "คำนวณโบลัส",
        en: "Bolus Calculation"
      },

      {
        th: "ประวัติการฉีด",
        en: "Injection History"
      }

    ],

    images: [

      "Image/Step07-1.png",

      "Image/Step07-2.png",

      "Image/Step07-3.png",

      "Image/Step07-4.png",

      "Image/Step07-5.png",

      "Image/Step07-6.png",

      "Image/Step07-7.png"

    ],

    resources: [
      {
        imageTH: "Image/อาหารแลกเปลี่ยน.png",
        imageEN: "Image/Food Exchange.png",
        url: RESOURCE_LINKS.foodExchangePdf,
        labelTH: "อาหารแลกเปลี่ยน [PDF]",
        labelEN: "Food Exchange [PDF]"
      },
      {
        imageTH: "Image/ประเมินการดูดซึมของอาหาร.png",
        imageEN: "Image/Food Absorb Evaluation.png",
        url: RESOURCE_LINKS.foodAbsorptionPdf,
        labelTH: "ประเมินการดูดซึมของอาหาร [PDF]",
        labelEN: "Food Absorption Evaluation [PDF]"
      }
    ]
  },


  /* =======================================================
     STEP 08
     NEW ORDER = ALERTS + P8 CARE

     NOTE:
     Uses Icon-9.png because that is the
     existing alert / maintenance icon.
  ======================================================= */

  {
    id: "step08",
    number: "08",

    icon:
      "Image/Icon-9.png",

    pathTH:
      "แจ้งเตือนและ<br>การดูแล P8",

    pathEN:
      "P8 Alerts<br>& Care",

    titleTH:
      "การแจ้งเตือนและการดูแลรักษา P8",

    titleEN:
      "P8 Alerts and Maintenance",

    descriptionTH:
      "การแจ้งเตือนของ P8 → การฉีดอินซูลินผิดพลาด → การตรวจสอบประวัติการแจ้งเตือน → การเก็บรักษา P8 → การบำรุงรักษาและทำความสะอาด",

    descriptionEN:
      "P8 Alerts → Injection Errors → Review Alert History → P8 Storage → Maintenance and Cleaning",

    topics: [

      {
        th:
          "การแจ้งเตือนของ P8",

        en:
          "P8 Alerts"
      },

      {
        th:
          "การฉีดอินซูลินผิดพลาด",

        en:
          "Injection Errors"
      },

      {
        th:
          "การตรวจสอบประวัติการแจ้งเตือน",

        en:
          "Alert History"
      },

      {
        th:
          "การเก็บรักษา P8",

        en:
          "P8 Storage"
      },

      {
        th:
          "การบำรุงรักษาและทำความสะอาด",

        en:
          "Maintenance & Cleaning"
      }

    ],

    images: [

      "Image/Step08-1.png",

      "Image/Step08-2.png",

      "Image/Step08-3.png",

      "Image/Step08-4.png",

      "Image/Step08-5.png"

    ]
  },


  /* =======================================================
     STEP 09
     NEW ORDER = DIABETES CARE

     NOTE:
     Uses Icon-8.png because that is the
     existing food / exercise icon.
  ======================================================= */

  {
    id: "step09",
    number: "09",

    icon:
      "Image/Icon-8.png",
          pathTH:
      "ดูแลเบาหวาน",

    pathEN:
      "Diabetes Care",

    titleTH:
      "คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน",

    titleEN:
      "Additional Diabetes Care Guidance",

    descriptionTH:
      "คำแนะนำด้านอาหาร → คำแนะนำด้านการออกกำลังกาย",

    descriptionEN:
      "Diet Guidance → Exercise Guidance",

    topics: [

      {
        th:
          "คำแนะนำด้านอาหาร",

        en:
          "Diet Guidance"
      },

      {
        th:
          "คำแนะนำด้านการออกกำลังกาย",

        en:
          "Exercise Guidance"
      }

    ],

    images: [

      "Image/Step09-1.png",

      "Image/Step09-2.png"

    ]
  }

];


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLanguage =
  "th";

let activeStepIndex =
  0;

let openStepIndex =
  null;


/* =========================================================
   DOM
========================================================= */

const sidebar =
  document.getElementById(
    "stepSidebar"
  );


const manualContainer =
  document.getElementById(
    "manualContainer"
  );


const languageButtons =
  Array.from(
    document.querySelectorAll(
      ".lang-btn"
    )
  );


const backTop =
  document.getElementById(
    "backTop"
  );


/* =========================================================
   BUILD SIDEBAR
========================================================= */

function buildSidebar() {

  sidebar.innerHTML = "";


  /* BEFORE STEP 01 */

  const start =
    document.createElement(
      "div"
    );


  start.className =
    "journey-start completed";


  start.innerHTML = `

    <div class="journey-start-image">

      <img
        id="journeyStartImage"
        src="Image/Before 1.png"
        alt="P8 Quick Manual"
      >

    </div>

    <div class="journey-line"></div>

  `;


  sidebar.appendChild(
    start
  );


  /* STEPS */

  steps.forEach(
    (step, index) => {

      const wrapper =
        document.createElement(
          "div"
        );


      wrapper.className =
        index === 0
          ? "side-step completed"
          : "side-step";


      const text =
        currentLanguage === "th"
          ? step.pathTH
          : step.pathEN;


      wrapper.innerHTML = `

        <button
          class="side-button
          ${
            index === activeStepIndex
              ? "active"
              : ""
          }"
          type="button"
          data-step-index="${index}"
        >

          <span class="side-number">
            ${step.number}
          </span>

          <span>
            ${text}
          </span>

        </button>


        ${
          index < steps.length - 1

            ? `
              <div
                class="journey-line"
              ></div>
            `

            : ""
        }

      `;


      sidebar.appendChild(
        wrapper
      );

    }
  );


  bindSidebarButtons();


  setupBeforeImageFallback();


  updateJourneyProgress(
    activeStepIndex
  );

}


/* =========================================================
   BUILD RESOURCE LINKS
========================================================= */

function buildResourceLinks(step) {

  if (
    !Array.isArray(step.resources) ||
    step.resources.length === 0
  ) {
    return "";
  }


  const links =
    step.resources
      .map(
        (resource, resourceIndex) => {

          const url =
            resource.url || "";


          const label =
            currentLanguage === "th"
              ? resource.labelTH
              : resource.labelEN;


          /*
            STEP 06
            CareSense buttons are generated
            completely with HTML + CSS.
            No button image is required.
          */

          if (step.id === "step06") {

            const isVideo =
              resourceIndex === 1;


            const iconClass =
              isVideo
                ? "video"
                : "pdf";


            const iconText =
              isVideo
                ? "▶"
                : "PDF";


            const disabledClass =
              url
                ? ""
                : " resource-link-disabled";


            const href =
              url
                ? url
                : "#";


            return `

              <a
                class="resource-link caresense-resource${disabledClass}"
                href="${href}"
                ${
                  url
                    ? `target="_blank" rel="noopener noreferrer"`
                    : `aria-disabled="true"`
                }
                data-resource-link
              >

                <span
                  class="resource-icon ${iconClass}"
                  aria-hidden="true"
                >
                  ${iconText}
                </span>

                <span
                  class="resource-link-text"
                >
                  ${label}
                </span>

              </a>

            `;

          }


          /*
            STEP 07
            Use the prepared TH / EN artwork
            as the external-resource button.
          */

          const image =
            currentLanguage === "th"
              ? resource.imageTH
              : resource.imageEN;


          const disabledClass =
            url
              ? ""
              : " resource-link-disabled";


          const href =
            url
              ? url
              : "#";


          return `

            <a
              class="resource-link image-resource${disabledClass}"
              href="${href}"
              ${
                url
                  ? `target="_blank" rel="noopener noreferrer"`
                  : `aria-disabled="true"`
              }
              data-resource-link
              aria-label="${label}"
            >

              <img
                src="${image}"
                alt="${label}"
              >

            </a>

          `;

        }
      )
      .join("");


  return `

    <div class="resource-links">
      ${links}
    </div>

  `;

}


/* =========================================================
   BUILD MANUAL
========================================================= */

function buildManual() {

  manualContainer.innerHTML =
    "";


  steps.forEach(
    (step, index) => {

      const title =
        currentLanguage === "th"
          ? step.titleTH
          : step.titleEN;


      const description =
        currentLanguage === "th"
          ? step.descriptionTH
          : step.descriptionEN;


      const guideTitle =
        currentLanguage === "th"
          ? `คู่มือขั้นตอนที่ ${step.number}`
          : `Step ${step.number} Guide`;


      const detailText =
        currentLanguage === "th"
          ? "ดูรายละเอียด"
          : "View details";


      const hideText =
        currentLanguage === "th"
          ? "ซ่อนรายละเอียด"
          : "Hide details";


      const topicButtons =
        step.topics
          .map(
            (
              topic,
              topicIndex
            ) => {

              const label =
                currentLanguage === "th"
                  ? topic.th
                  : topic.en;


              return `

                <button
                  class="subnav-btn
                  ${
                    topicIndex === 0
                      ? "active"
                      : ""
                  }"
                  type="button"
                  data-slide-target="${topicIndex}"
                >
                  ${label}
                </button>

              `;

            }
          )
          .join("");


      const resourceLinks =
        buildResourceLinks(
          step
        );


      const slides =
        step.topics
          .map(
            (
              topic,
              topicIndex
            ) => {

              /*
                MULTIPLE IMAGES PER TOPIC

                Priority:
                1. Language-specific topic images
                   imagesTH / imagesEN
                2. Generic topic.images
                3. Existing step.images[topicIndex]

                This means files such as
                ...-1 and ...-2 can be displayed
                continuously inside one topic.
              */

              let topicImages = [];


              if (
                currentLanguage === "th" &&
                Array.isArray(topic.imagesTH)
              ) {

                topicImages =
                  topic.imagesTH;

              } else if (
                currentLanguage === "en" &&
                Array.isArray(topic.imagesEN)
              ) {

                topicImages =
                  topic.imagesEN;

              } else if (
                Array.isArray(topic.images)
              ) {

                topicImages =
                  topic.images;

              } else {

                topicImages = [
                  step.images?.[
                    topicIndex
                  ]
                ].filter(Boolean);

              }


              const multipleText =
                currentLanguage === "th"
                  ? "เพิ่มรูปคู่มือได้หลายรูป"
                  : "Add Multiple Guide Images";


              const scrollText =
                currentLanguage === "th"
                  ? "เลื่อนขึ้น–ลงเพื่อดูเนื้อหาทั้งหมด"
                  : "Scroll up and down to view all content";


              const imageItems =
                topicImages
                  .map(
                    (
                      image,
                      imageIndex
                    ) => {

                      return `

                        <img
                          src="${image}"
                          alt=""
                          class="slide-image"
                          data-content-image
                          data-image-index="${imageIndex}"
                        >

                      `;

                    }
                  )
                  .join("");


              return `

                <div
                  class="slide
                  ${
                    topicIndex === 0
                      ? "active"
                      : ""
                  }"
                  data-topic-index="${topicIndex}"
                >

                  <div
                    class="slide-scroll"
                  >

                    <div
                      class="slide-images"
                    >
                      ${imageItems}
                    </div>


                    <div
                      class="slide-placeholder"
                    >

                      <div
                        class="placeholder-number"
                      >
                        ${step.number}
                      </div>

                      <strong>
                        ${multipleText}
                      </strong>

                      <span>
                        ${scrollText}
                      </span>

                    </div>

                  </div>

                </div>

              `;

            }
          )
          .join("");


      /* PREVIOUS STEP */

      const previousButton =
        index > 0

          ? `

            <button
              class="previous-step"
              type="button"
              data-go-step="${index - 1}"
            >
              ←
              ${
                currentLanguage === "th"
                  ? "ขั้นตอนก่อนหน้า"
                  : "Previous Step"
              }
            </button>

          `

          : "<div></div>";


      /* NEXT STEP */

      const nextButton =
        index < steps.length - 1

          ? `

            <button
              class="next-step"
              type="button"
              data-go-step="${index + 1}"
            >

              ${
                currentLanguage === "th"
                  ? "ขั้นตอนถัดไป"
                  : "Next Step"
              }

              →

            </button>

          `

          : "<div></div>";


      const card =
        document.createElement(
          "article"
        );


      card.id =
        step.id;


      card.className =
        openStepIndex === index
          ? "step-card open"
          : "step-card";


      card.innerHTML = `

        <button
          class="step-header"
          type="button"
        >

          <div
            class="step-number"
          >
            ${step.number}
          </div>


          <div
            class="step-picture"
          >

            <img
              src="${step.icon}"
              alt=""
            >

          </div>


          <div
            class="step-title"
          >

            <h2>
              ${title}
            </h2>

            <p>
              ${description}
            </p>

          </div>


          <div
            class="step-toggle"
          >

            <span
              class="step-toggle-text"
            >
              ${
                openStepIndex === index
                  ? hideText
                  : detailText
              }
            </span>

            <span
              class="step-toggle-icon"
              aria-hidden="true"
            >
              ${
                openStepIndex === index
                  ? "▲"
                  : "▼"
              }
            </span>

          </div>

        </button>


        <div
          class="step-content"
        >

          <div
            class="content-inner"
          >

            <h3>
              ${guideTitle}
            </h3>


            <div
              class="manual-toolbar"
            >

              <div class="subnav">

                ${topicButtons}

              </div>

              ${resourceLinks}

            </div>


            <div
              class="manual-slider"
              data-slider
              data-step-index="${index}"
            >

              <button
                class="slider-button prev"
                type="button"
                aria-label="Scroll up"
              >
                ▲
              </button>


              <div
                class="slider-viewport"
              >

                <div
                  class="slider-track"
                >

                  ${slides}

                </div>

              </div>


              <div
                class="content-scrollbar"
                aria-label="Content scroll"
              >

                <div
                  class="content-scrollbar-track"
                >

                  <div
                    class="content-scrollbar-thumb"
                  ></div>

                </div>

              </div>


              <button
                class="slider-button next"
                type="button"
                aria-label="Scroll down"
              >
                ▼
              </button>


              <div
                class="slider-footer"
              >

                <div
                  class="slider-dots"
                ></div>


                <div
                  class="slide-counter"
                >

                  <span
                    class="current-slide"
                  >
                    1
                  </span>

                  /

                  <span
                    class="total-slides"
                  >
                    ${step.topics.length}
                  </span>

                </div>

              </div>


              <div
                class="scroll-hint"
              >

                ${
                  currentLanguage === "th"
                    ? "กด ▲ / ▼ หรือเลื่อนขึ้น–ลงเพื่อดูเนื้อหา"
                    : "Use ▲ / ▼ or scroll up/down to view the content"
                }

              </div>

            </div>


            <div
              class="step-nav"
            >

              ${previousButton}

              ${nextButton}

            </div>

          </div>

        </div>

      `;


      manualContainer.appendChild(
        card
      );

    }
  );


  bindCardEvents();


  bindResourceLinks();


  setupSliders();


  setupMissingImages();


  updateOpenCardHeight();

}


/* =========================================================
   RESOURCE LINK EVENTS
========================================================= */

function bindResourceLinks() {

  document
    .querySelectorAll(
      "[data-resource-link]"
    )
    .forEach(
      (link) => {

        link.addEventListener(
          "click",
          (event) => {

            /*
              A resource with no URL yet
              stays visible but does not
              navigate to an empty page.
            */

            if (
              link.classList.contains(
                "resource-link-disabled"
              )
            ) {

              event.preventDefault();

            }

          }
        );

      }
    );

}


/* =========================================================
   SIDEBAR EVENT
========================================================= */

function bindSidebarButtons() {

  const buttons =
    document.querySelectorAll(
      ".side-button"
    );


  buttons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset
                .stepIndex
            );


          goToStep(
            index
          );

        }
      );

    }
  );

}


/* =========================================================
   CARD TOGGLE LABEL
========================================================= */

function updateCardToggle(
  card,
  isOpen
) {

  const text =
    card.querySelector(
      ".step-toggle-text"
    );


  const icon =
    card.querySelector(
      ".step-toggle-icon"
    );


  if (text) {

    text.textContent =
      currentLanguage === "th"
        ? (
            isOpen
              ? "ซ่อนรายละเอียด"
              : "ดูรายละเอียด"
          )
        : (
            isOpen
              ? "Hide details"
              : "View details"
          );

  }


  if (icon) {

    icon.textContent =
      isOpen
        ? "▲"
        : "▼";

  }

}


/* =========================================================
   CARD EVENT
========================================================= */

function bindCardEvents() {

  const cards =
    Array.from(
      document.querySelectorAll(
        ".step-card"
      )
    );


  cards.forEach(
    (
      card,
      index
    ) => {

      const header =
        card.querySelector(
          ".step-header"
        );


      header.addEventListener(
        "click",
        () => {

          const isOpen =
            card.classList.contains(
              "open"
            );


          if (isOpen) {

            card.classList.remove(
              "open"
            );


            openStepIndex =
              null;


            const content =
              card.querySelector(
                ".step-content"
              );


            content.style.maxHeight =
              null;


            updateCardToggle(
              card,
              false
            );


            return;

          }


          activeStepIndex =
            index;


          openStepIndex =
            index;


          openOnlyStep(
            index
          );


          updateJourneyProgress(
            index
          );

        }
      );

    }
  );


  /* PREVIOUS / NEXT STEP */

  document
    .querySelectorAll(
      "[data-go-step]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          (event) => {

            event.stopPropagation();


            const index =
              Number(
                button.dataset
                  .goStep
              );


            goToStep(
              index
            );

          }
        );

      }
    );

}
/* =========================================================
   GO TO STEP
========================================================= */

function goToStep(index) {

  if (
    index < 0 ||
    index >= steps.length
  ) {
    return;
  }


  activeStepIndex =
    index;


  openStepIndex =
    index;


  openOnlyStep(
    index
  );


  updateJourneyProgress(
    index
  );


  const card =
    document.getElementById(
      steps[index].id
    );


  if (card) {

    const headerOffset =
      18;


    const top =
      card.getBoundingClientRect().top +
      window.pageYOffset -
      headerOffset;


    window.scrollTo({
      top,
      behavior: "smooth"
    });

  }

}


/* =========================================================
   OPEN ONLY ONE STEP
========================================================= */

function openOnlyStep(index) {

  const cards =
    Array.from(
      document.querySelectorAll(
        ".step-card"
      )
    );


  cards.forEach(
    (
      card,
      cardIndex
    ) => {

      const content =
        card.querySelector(
          ".step-content"
        );


      const isTarget =
        cardIndex === index;


      card.classList.toggle(
        "open",
        isTarget
      );


      updateCardToggle(
        card,
        isTarget
      );


      if (isTarget) {

        content.style.maxHeight =
          `${content.scrollHeight}px`;

      } else {

        content.style.maxHeight =
          null;

      }

    }
  );


  openStepIndex =
    index;


  activeStepIndex =
    index;


  updateActiveSidebar(
    index
  );


  /*
    Wait until the browser has
    calculated the newly opened content.
  */

  requestAnimationFrame(
    () => {

      updateOpenCardHeight();

    }
  );

}


/* =========================================================
   UPDATE ACTIVE SIDEBAR
========================================================= */

function updateActiveSidebar(index) {

  const buttons =
    Array.from(
      document.querySelectorAll(
        ".side-button"
      )
    );


  buttons.forEach(
    (
      button,
      buttonIndex
    ) => {

      button.classList.toggle(
        "active",
        buttonIndex === index
      );

    }
  );

}


/* =========================================================
   JOURNEY PROGRESS
========================================================= */

function updateJourneyProgress(index) {

  const start =
    document.querySelector(
      ".journey-start"
    );


  if (start) {

    start.classList.add(
      "completed"
    );

  }


  const sideSteps =
    Array.from(
      document.querySelectorAll(
        ".side-step"
      )
    );


  sideSteps.forEach(
    (
      item,
      itemIndex
    ) => {

      /*
        Current step and every previous
        step are considered completed.

        CSS uses .completed to change
        the connector from dashed
        to solid.
      */

      item.classList.toggle(
        "completed",
        itemIndex <= index
      );


      item.classList.toggle(
        "active",
        itemIndex === index
      );

    }
  );


  updateActiveSidebar(
    index
  );

}


/* =========================================================
   SLIDER SETUP
========================================================= */

function setupSliders() {

  const sliders =
    Array.from(
      document.querySelectorAll(
        "[data-slider]"
      )
    );


  sliders.forEach(
    (slider) => {

      setupSingleSlider(
        slider
      );

    }
  );

}


/* =========================================================
   SINGLE SLIDER
========================================================= */

function setupSingleSlider(slider) {

  const slides =
    Array.from(
      slider.querySelectorAll(
        ".slide"
      )
    );


  if (
    slides.length === 0
  ) {
    return;
  }


  const stepIndex =
    Number(
      slider.dataset.stepIndex
    );


  const step =
    steps[stepIndex];


  const subnav =
    slider
      .closest(
        ".content-inner"
      )
      ?.querySelectorAll(
        ".subnav-btn"
      );


  const prevButton =
    slider.querySelector(
      ".slider-button.prev"
    );


  const nextButton =
    slider.querySelector(
      ".slider-button.next"
    );


  const currentSlideText =
    slider.querySelector(
      ".current-slide"
    );


  const totalSlideText =
    slider.querySelector(
      ".total-slides"
    );


  const dotsContainer =
    slider.querySelector(
      ".slider-dots"
    );


  const scrollbarTrack =
    slider.querySelector(
      ".content-scrollbar-track"
    );


  const scrollbarThumb =
    slider.querySelector(
      ".content-scrollbar-thumb"
    );


  let currentIndex =
    0;


  /* -------------------------------------------------------
     CREATE DOTS
  ------------------------------------------------------- */

  if (dotsContainer) {

    dotsContainer.innerHTML =
      "";


    slides.forEach(
      (
        slide,
        index
      ) => {

        const dot =
          document.createElement(
            "button"
          );


        dot.type =
          "button";


        dot.className =
          index === 0
            ? "slider-dot active"
            : "slider-dot";


        dot.setAttribute(
          "aria-label",
          `Slide ${index + 1}`
        );


        dot.addEventListener(
          "click",
          () => {

            showSlide(
              index
            );

          }
        );


        dotsContainer.appendChild(
          dot
        );

      }
    );

  }


  if (totalSlideText) {

    totalSlideText.textContent =
      slides.length;

  }


  /* -------------------------------------------------------
     GET CURRENT SCROLL AREA
  ------------------------------------------------------- */

  function getScrollArea() {

    const activeSlide =
      slides[currentIndex];


    if (!activeSlide) {
      return null;
    }


    return activeSlide.querySelector(
      ".slide-scroll"
    );

  }


  /* -------------------------------------------------------
     UPDATE SCROLLBAR
  ------------------------------------------------------- */

  function updateScrollbar() {

    const scrollArea =
      getScrollArea();


    if (
      !scrollArea ||
      !scrollbarTrack ||
      !scrollbarThumb
    ) {
      return;
    }


    const scrollHeight =
      scrollArea.scrollHeight;


    const clientHeight =
      scrollArea.clientHeight;


    const maxScroll =
      scrollHeight -
      clientHeight;


    /*
      Content fits completely.
      Keep the thumb full height.
    */

    if (
      scrollHeight <= clientHeight ||
      maxScroll <= 0
    ) {

      scrollbarThumb.style.height =
        "100%";


      scrollbarThumb.style.transform =
        "translateY(0)";


      scrollbarTrack.classList.add(
        "is-static"
      );


      return;

    }


    scrollbarTrack.classList.remove(
      "is-static"
    );


    const trackHeight =
      scrollbarTrack.clientHeight;


    const minimumThumb =
      34;


    const calculatedThumb =
      (
        clientHeight /
        scrollHeight
      ) *
      trackHeight;


    const thumbHeight =
      Math.max(
        minimumThumb,
        calculatedThumb
      );


    const availableTravel =
      Math.max(
        0,
        trackHeight -
        thumbHeight
      );


    const scrollRatio =
      scrollArea.scrollTop /
      maxScroll;


    const translateY =
      availableTravel *
      scrollRatio;


    scrollbarThumb.style.height =
      `${thumbHeight}px`;


    scrollbarThumb.style.transform =
      `translateY(${translateY}px)`;

  }


  /* -------------------------------------------------------
     BIND SCROLL AREA
  ------------------------------------------------------- */

  function bindActiveScrollArea() {

    slides.forEach(
      (slide) => {

        const area =
          slide.querySelector(
            ".slide-scroll"
          );


        if (!area) {
          return;
        }


        /*
          Prevent duplicate listeners
          when the active topic changes.
        */

        if (
          area.dataset.scrollBound ===
          "true"
        ) {
          return;
        }


        area.dataset.scrollBound =
          "true";


        area.addEventListener(
          "scroll",
          () => {

            if (
              slide.classList.contains(
                "active"
              )
            ) {

              updateScrollbar();

            }

          },
          {
            passive: true
          }
        );

      }
    );

  }


  /* -------------------------------------------------------
     UPDATE DOTS
  ------------------------------------------------------- */

  function updateDots() {

    if (!dotsContainer) {
      return;
    }


    const dots =
      Array.from(
        dotsContainer.children
      );


    dots.forEach(
      (
        dot,
        index
      ) => {

        dot.classList.toggle(
          "active",
          index === currentIndex
        );

      }
    );

  }


  /* -------------------------------------------------------
     UPDATE SUBNAV
  ------------------------------------------------------- */

  function updateSubnav() {

    if (!subnav) {
      return;
    }


    Array.from(
      subnav
    ).forEach(
      (
        button,
        index
      ) => {

        button.classList.toggle(
          "active",
          index === currentIndex
        );

      }
    );

  }


  /* -------------------------------------------------------
     UPDATE PREV / NEXT BUTTON
  ------------------------------------------------------- */

  function updateSliderButtons() {

    if (prevButton) {

      prevButton.disabled =
        currentIndex === 0;

    }


    if (nextButton) {

      nextButton.disabled =
        currentIndex ===
        slides.length - 1;

    }

  }


  /* -------------------------------------------------------
     SHOW SLIDE
  ------------------------------------------------------- */

  function showSlide(index) {

    if (
      index < 0 ||
      index >= slides.length
    ) {
      return;
    }


    currentIndex =
      index;


    slides.forEach(
      (
        slide,
        slideIndex
      ) => {

        slide.classList.toggle(
          "active",
          slideIndex === currentIndex
        );

      }
    );


    /*
      Return the newly selected topic
      to the top of its content.
    */

    const activeScrollArea =
      getScrollArea();


    if (activeScrollArea) {

      activeScrollArea.scrollTop =
        0;

    }


    if (currentSlideText) {

      currentSlideText.textContent =
        currentIndex + 1;

    }


    updateDots();


    updateSubnav();


    updateSliderButtons();


    requestAnimationFrame(
      () => {

        updateScrollbar();


        updateOpenCardHeight();

      }
    );

  }


  /* -------------------------------------------------------
     SUBNAV CLICK
  ------------------------------------------------------- */

  if (subnav) {

    Array.from(
      subnav
    ).forEach(
      (
        button,
        index
      ) => {

        button.addEventListener(
          "click",
          () => {

            showSlide(
              index
            );

          }
        );

      }
    );

  }


  /* -------------------------------------------------------
     PREVIOUS TOPIC
  ------------------------------------------------------- */

  if (prevButton) {

    prevButton.addEventListener(
      "click",
      () => {

        /*
          First try scrolling upward
          inside the current topic.

          If already at the top,
          move to the previous topic.
        */

        const scrollArea =
          getScrollArea();


        if (
          scrollArea &&
          scrollArea.scrollTop > 4
        ) {

          scrollArea.scrollBy({
            top:
              -Math.max(
                220,
                scrollArea.clientHeight *
                  0.78
              ),
            behavior: "smooth"
          });


          return;

        }


        if (currentIndex > 0) {

          showSlide(
            currentIndex - 1
          );

        }

      }
    );

  }


  /* -------------------------------------------------------
     NEXT TOPIC
  ------------------------------------------------------- */

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      () => {

        /*
          Scroll downward inside the
          current topic first.

          Only move to the next topic
          when the current content has
          reached the bottom.
        */

        const scrollArea =
          getScrollArea();


        if (scrollArea) {

          const maxScroll =
            scrollArea.scrollHeight -
            scrollArea.clientHeight;


          const isAtBottom =
            scrollArea.scrollTop >=
            maxScroll - 4;


          if (
            maxScroll > 4 &&
            !isAtBottom
          ) {

            scrollArea.scrollBy({
              top:
                Math.max(
                  220,
                  scrollArea.clientHeight *
                    0.78
                ),
              behavior: "smooth"
            });


            return;

          }

        }


        if (
          currentIndex <
          slides.length - 1
        ) {

          showSlide(
            currentIndex + 1
          );

        }

      }
    );

  }


  /* -------------------------------------------------------
     CUSTOM SCROLLBAR CLICK
  ------------------------------------------------------- */

  if (
    scrollbarTrack &&
    scrollbarThumb
  ) {

    scrollbarTrack.addEventListener(
      "click",
      (event) => {

        /*
          Do not jump when the user
          directly clicks the thumb.
        */

        if (
          event.target ===
          scrollbarThumb
        ) {
          return;
        }


        const scrollArea =
          getScrollArea();


        if (!scrollArea) {
          return;
        }


        const rect =
          scrollbarTrack
            .getBoundingClientRect();


        const clickY =
          event.clientY -
          rect.top;


        const ratio =
          Math.min(
            1,
            Math.max(
              0,
              clickY /
                rect.height
            )
          );


        const maxScroll =
          scrollArea.scrollHeight -
          scrollArea.clientHeight;


        scrollArea.scrollTo({
          top:
            maxScroll *
            ratio,
          behavior:
            "smooth"
        });

      }
    );


    /* -----------------------------------------------------
       DRAG CUSTOM SCROLLBAR
    ----------------------------------------------------- */

    let dragging =
      false;


    let dragStartY =
      0;


    let dragStartScroll =
      0;


    scrollbarThumb.addEventListener(
      "pointerdown",
      (event) => {

        const scrollArea =
          getScrollArea();


        if (!scrollArea) {
          return;
        }


        dragging =
          true;


        dragStartY =
          event.clientY;


        dragStartScroll =
          scrollArea.scrollTop;


        scrollbarThumb
          .setPointerCapture(
            event.pointerId
          );


        event.preventDefault();

      }
    );


    scrollbarThumb.addEventListener(
      "pointermove",
      (event) => {

        if (!dragging) {
          return;
        }


        const scrollArea =
          getScrollArea();


        if (!scrollArea) {
          return;
        }


        const trackHeight =
          scrollbarTrack.clientHeight;


        const thumbHeight =
          scrollbarThumb.offsetHeight;


        const availableTravel =
          trackHeight -
          thumbHeight;


        const maxScroll =
          scrollArea.scrollHeight -
          scrollArea.clientHeight;


        if (
          availableTravel <= 0 ||
          maxScroll <= 0
        ) {
          return;
        }


        const deltaY =
          event.clientY -
          dragStartY;


        const scrollDelta =
          (
            deltaY /
            availableTravel
          ) *
          maxScroll;


        scrollArea.scrollTop =
          dragStartScroll +
          scrollDelta;

      }
    );


    function stopDragging() {

      dragging =
        false;

    }


    scrollbarThumb.addEventListener(
      "pointerup",
      stopDragging
    );


    scrollbarThumb.addEventListener(
      "pointercancel",
      stopDragging
    );

  }


  /* -------------------------------------------------------
     INITIAL SLIDER STATE
  ------------------------------------------------------- */

  bindActiveScrollArea();


  showSlide(
    0
  );


  /*
    Images can change the content height
    after they finish loading.
  */

  slider
    .querySelectorAll(
      "img"
    )
    .forEach(
      (image) => {

        image.addEventListener(
          "load",
          () => {

            updateScrollbar();


            updateOpenCardHeight();

          }
        );

      }
    );

}


/* =========================================================
   UPDATE OPEN CARD HEIGHT
========================================================= */

function updateOpenCardHeight() {

  const openCard =
    document.querySelector(
      ".step-card.open"
    );


  if (!openCard) {
    return;
  }


  const content =
    openCard.querySelector(
      ".step-content"
    );


  if (!content) {
    return;
  }


  /*
    Temporarily remove the previous
    max-height so scrollHeight can be
    measured correctly after:
    - changing language
    - changing topic
    - loading multiple images
    - changing screen width
  */

  content.style.maxHeight =
    "none";


  const height =
    content.scrollHeight;


  content.style.maxHeight =
    `${height}px`;

}
/* =========================================================
   MISSING IMAGE HANDLING
   MULTIPLE IMAGES PER TOPIC
========================================================= */

function setupMissingImages() {

  const slides =
    Array.from(
      document.querySelectorAll(
        ".slide"
      )
    );


  slides.forEach(
    (slide) => {

      const images =
        Array.from(
          slide.querySelectorAll(
            ".slide-image"
          )
        );


      const placeholder =
        slide.querySelector(
          ".slide-placeholder"
        );


      const scrollBox =
        slide.querySelector(
          ".slide-scroll"
        );


      if (
        !placeholder ||
        !scrollBox
      ) {
        return;
      }


      /*
        Check whether at least one
        image in this topic loaded.
      */

      function updateSlideState() {

        const validImages =
          images.filter(
            (image) =>
              image.dataset
                .imageStatus === "loaded"
          );


        if (
          validImages.length > 0
        ) {

          placeholder.style.display =
            "none";


          slide.classList.remove(
            "missing-image"
          );

        } else {

          placeholder.style.display =
            "flex";


          slide.classList.add(
            "missing-image"
          );

        }


        requestAnimationFrame(
          () => {

            scrollBox.dispatchEvent(
              new Event("scroll")
            );


            updateOpenCardHeight();

          }
        );

      }


      /*
        No image assigned.
      */

      if (
        images.length === 0
      ) {

        placeholder.style.display =
          "flex";


        slide.classList.add(
          "missing-image"
        );


        return;

      }


      images.forEach(
        (image) => {

          image.addEventListener(
            "load",
            () => {

              image.dataset.imageStatus =
                "loaded";


              image.style.display =
                "block";


              updateSlideState();

            }
          );


          image.addEventListener(
            "error",
            () => {

              /*
                Hide only the broken image.
                Other images in the same topic
                can still remain visible.
              */

              image.dataset.imageStatus =
                "error";


              image.style.display =
                "none";


              updateSlideState();

            }
          );


          /*
            Handle cached images that may
            already have finished loading.
          */

          if (
            image.complete
          ) {

            if (
              image.naturalWidth > 0
            ) {

              image.dataset.imageStatus =
                "loaded";


              image.style.display =
                "block";

            } else {

              image.dataset.imageStatus =
                "error";


              image.style.display =
                "none";

            }

          }

        }
      );


      const finishedImages =
        images.filter(
          (image) =>
            image.dataset.imageStatus
        );


      if (
        finishedImages.length ===
        images.length
      ) {

        updateSlideState();

      }

    }
  );

}


/* =========================================================
   BEFORE IMAGE FALLBACK
========================================================= */

function setupBeforeImageFallback() {

  const image =
    document.getElementById(
      "journeyStartImage"
    );


  if (!image) {
    return;
  }


  const candidates = [

    "Image/Before 1.png",

    "Image/Before1.png",

    "Image/Before-1.png",

    "Image/Before.png"

  ];


  let currentCandidate =
    0;


  image.addEventListener(
    "error",
    () => {

      currentCandidate++;


      if (
        currentCandidate <
        candidates.length
      ) {

        image.src =
          candidates[
            currentCandidate
          ];

      } else {

        image.style.display =
          "none";

      }

    }
  );

}


/* =========================================================
   LANGUAGE
========================================================= */

function setLanguage(language) {

  if (
    language !== "th" &&
    language !== "en"
  ) {
    return;
  }


  currentLanguage =
    language;


  /*
    Update any static HTML elements
    that use data-th / data-en.
  */

  document
    .querySelectorAll(
      "[data-th][data-en]"
    )
    .forEach(
      (element) => {

        const text =
          element.dataset[
            language
          ];


        if (
          text !== undefined
        ) {

          element.innerHTML =
            text.replace(
              /\|/g,
              "<br>"
            );

        }

      }
    );


  /* LANGUAGE BUTTON STATE */

  languageButtons.forEach(
    (button) => {

      button.classList.toggle(
        "active",
        button.dataset.lang ===
          language
      );

    }
  );


  document.documentElement.lang =
    language === "th"
      ? "th"
      : "en";


  /*
    Rebuild dynamic content so:
    - Step titles change language
    - Subnav labels change language
    - Resource buttons change language
    - GI-TH / GI-EN changes automatically
    - TH/EN resource images change
  */

  buildSidebar();


  buildManual();


  /*
    Preserve the currently open card.
  */

  if (
    openStepIndex !== null
  ) {

    openOnlyStep(
      openStepIndex
    );

  }


  updateJourneyProgress(
    activeStepIndex
  );


  requestAnimationFrame(
    () => {

      updateOpenCardHeight();

    }
  );

}


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

languageButtons.forEach(
  (button) => {

    button.addEventListener(
      "click",
      () => {

        const language =
          button.dataset.lang;


        if (!language) {
          return;
        }


        if (
          language ===
          currentLanguage
        ) {
          return;
        }


        setLanguage(
          language
        );

      }
    );

  }
);


/* =========================================================
   KEEP ACTIVE STEP VISIBLE ON MOBILE
========================================================= */

function keepActiveStepVisible() {

  if (
    window.innerWidth > 760
  ) {
    return;
  }


  const activeButton =
    document.querySelector(
      ".side-button.active"
    );


  if (!activeButton) {
    return;
  }


  /*
    Horizontal step navigation:
    gently move the current step
    into the visible area.
  */

  activeButton.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center"
  });

}


/* =========================================================
   OBSERVE ACTIVE STEP CHANGE
========================================================= */

function updateJourneyAndVisibility(
  index
) {

  updateJourneyProgress(
    index
  );


  requestAnimationFrame(
    () => {

      keepActiveStepVisible();

    }
  );

}


/* =========================================================
   WINDOW LOAD
========================================================= */

window.addEventListener(
  "load",
  () => {

    updateOpenCardHeight();


    keepActiveStepVisible();


    /*
      Re-check image heights after
      fonts and images are ready.
    */

    setTimeout(
      () => {

        updateOpenCardHeight();

      },
      150
    );

  }
);


/* =========================================================
   WINDOW RESIZE
========================================================= */

let resizeTimer =
  null;


window.addEventListener(
  "resize",
  () => {

    clearTimeout(
      resizeTimer
    );


    resizeTimer =
      setTimeout(
        () => {

          updateOpenCardHeight();


          keepActiveStepVisible();

        },
        100
      );

  }
);


/* =========================================================
   BACK TO TOP VISIBILITY
========================================================= */

window.addEventListener(
  "scroll",
  () => {

    if (!backTop) {
      return;
    }


    backTop.classList.toggle(
      "show",
      window.scrollY > 420
    );

  },
  {
    passive: true
  }
);


/* =========================================================
   BACK TO TOP CLICK
========================================================= */

if (backTop) {

  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior:
          "smooth"

      });

    }
  );

}


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    const target =
      event.target;


    if (
      target &&
      (
        target.tagName ===
          "INPUT" ||

        target.tagName ===
          "TEXTAREA" ||

        target.isContentEditable
      )
    ) {
      return;
    }


    /*
      PageDown = next Step
    */

    if (
      event.key ===
      "PageDown"
    ) {

      if (
        activeStepIndex <
        steps.length - 1
      ) {

        event.preventDefault();


        goToStep(
          activeStepIndex + 1
        );

      }

    }


    /*
      PageUp = previous Step
    */

    if (
      event.key ===
      "PageUp"
    ) {

      if (
        activeStepIndex > 0
      ) {

        event.preventDefault();


        goToStep(
          activeStepIndex - 1
        );

      }

    }

  }
);
/* =========================================================
   INITIAL STATE
========================================================= */

activeStepIndex =
  0;


openStepIndex =
  null;


/* =========================================================
   DEFAULT LANGUAGE = THAI
========================================================= */

setLanguage(
  "th"
);


/* =========================================================
   FINAL INITIAL STATE
========================================================= */

setTimeout(
  () => {

    /*
      Keep every card collapsed
      when the page first loads.

      Step 01 remains highlighted
      as the starting point.
    */

    openStepIndex =
      null;


    const cards =
      Array.from(
        document.querySelectorAll(
          ".step-card"
        )
      );


    cards.forEach(
      (card) => {

        card.classList.remove(
          "open"
        );


        const content =
          card.querySelector(
            ".step-content"
          );


        if (content) {

          content.style.maxHeight =
            null;

        }


        updateCardToggle(
          card,
          false
        );

      }
    );


    updateJourneyProgress(
      activeStepIndex
    );


    keepActiveStepVisible();


    /*
      Initial Back to Top state
    */

    if (backTop) {

      backTop.classList.toggle(
        "show",
        window.scrollY > 420
      );

    }

  },
  100
);