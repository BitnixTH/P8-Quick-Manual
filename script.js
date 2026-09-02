/* =========================================================
   P8 QUICK MANUAL DATA
========================================================= */

/* =========================================================
   EXTERNAL RESOURCE LINKS
========================================================= */

/*
  IMPORTANT

  CareSense Google Drive link ที่มีอยู่ตอนนี้
  คือ VDO "How to use CGMS.mp4"

  ดังนั้นต้องอยู่ที่ careSenseVideo
  ไม่ใช่ careSensePdf
*/

const RESOURCE_LINKS = {

  careSensePdf:
    "",

  careSenseVideo:
    "https://drive.google.com/file/d/18RKcoWQi0HCNr49S_V2wjRswCoZsd-Pj/view"

};


/* =========================================================
   STEPS
========================================================= */

const steps = [

  /* =======================================================
     STEP 01
  ======================================================= */

  {
    id: "step01",

    number: "01",

    icon:
      "Image/Icon-1.png",

    pathTH:
      "อุปกรณ์ในชุด",

    pathEN:
      "P8 Set",

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
        th:
          "อุปกรณ์ในชุด",

        en:
          "P8 Set"
      },

      {
        th:
          "หน้าที่ของอุปกรณ์",

        en:
          "Device Functions"
      },

      {
        th:
          "อุปกรณ์เสริม",

        en:
          "Accessories"
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
    id:
      "step02",

    number:
      "02",

    icon:
      "Image/Icon-2.png",

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
        th:
          "โครงสร้าง P8",

        en:
          "P8 Structure"
      },

      {
        th:
          "หน้าจอและปุ่ม",

        en:
          "Display & Buttons"
      },

      {
        th:
          "เมนูหลัก",

        en:
          "Main Menu"
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
    id:
      "step03",

    number:
      "03",

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
        th:
          "เปิดเครื่อง",

        en:
          "Power On"
      },

      {
        th:
          "ปิดเครื่อง",

        en:
          "Power Off"
      },

      {
        th:
          "โหมดพักหน้าจอ",

        en:
          "Screen Saver"
      },

      {
        th:
          "ปลุกหน้าจอ",

        en:
          "Wake Screen"
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
    id:
      "step04",

    number:
      "04",

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
        th:
          "จับคู่ P8",

        en:
          "Pair P8"
      },

      {
        th:
          "ตั้งค่า P8",

        en:
          "P8 Settings"
      },

      {
        th:
          "ค้นหาปากกา",

        en:
          "Find Pen"
      },

      {
        th:
          "ยกเลิกการจับคู่",

        en:
          "Unpair P8"
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
  ======================================================= */

  {
    id:
      "step05",

    number:
      "05",

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
        th:
          "เตรียมคาร์ทริดจ์",

        en:
          "Prepare Cartridge"
      },

      {
        th:
          "เปลี่ยนคาร์ทริดจ์",

        en:
          "Replace Cartridge"
      },

      {
        th:
          "ตรวจสอบสถานะ",

        en:
          "Check Status"
      },

      {
        th:
          "ตรวจสอบประวัติ",

        en:
          "Review History"
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
     CGM / CARE TEAM / REPORT
  ======================================================= */

  {
    id:
      "step06",

    number:
      "06",

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
        th:
          "เชื่อมต่อ CGM",

        en:
          "Connect CGM"
      },

      {
        th:
          "เชื่อมต่อทีมรักษา",

        en:
          "Connect Care Team"
      },

      {
        th:
          "รายงานสุขภาพ",

        en:
          "Health Reports"
      }

    ],

    images: [

      "Image/Step06-1.png",

      "Image/Step06-2.png",

      "Image/Step06-3.png"

    ],

    /*
      STEP 06 RESOURCE BUTTONS

      Position:
      ต่อท้าย 3 topic buttons ด้านบน

      TH:
      CareSense-TH-Pic1.png
      CareSense-TH-Pic2.png

      EN:
      CareSense-EN-Pic1.png
      CareSense-EN-Pic2.png
    */

    resources: [

  {
    type: "external",
    kind: "document",

    iconImage:
      "Image/PDF-Icon.png",

    labelTH:
      "ข้อมูล CareSense Air 365 CGM [PDF]",

    labelEN:
      "CareSense Air 365 CGM Information [PDF]",

    subtitleTH:
      "ข้อมูล CareSense Air 365 CGM",

    subtitleEN:
      "CareSense Air 365 CGM Information",

    urlTH:
      "resource-viewer.html?resource=caresense&lang=th",

    urlEN:
      "resource-viewer.html?resource=caresense&lang=en"
  },

  {
    type: "external",
    kind: "video",

    iconImage:
      "Image/VDO-Icon.png",

    labelTH:
      "การติดตั้ง CareSense Air 365 CGM [VDO]",

    labelEN:
      "CareSense Air 365 CGM Installation [VDO]",

    subtitleTH:
      "CareSense Air 365 CGM Installation [Video]",

    subtitleEN:
      "CareSense Air 365 CGM Installation [Video]",

    urlTH:
      "resource-viewer.html?resource=caresenseVideo&lang=th",

    urlEN:
      "resource-viewer.html?resource=caresenseVideo&lang=en"
  }

]
  },


  /* =======================================================
     STEP 07
     INJECTION + BOLUS
  ======================================================= */

  {
    id:
      "step07",

    number:
      "07",

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
        th:
          "ฉีดผ่าน P8",

        en:
          "Inject with P8"
      },

      {
        th:
          "ฉีดด่วน",

        en:
          "Quick Injection"
      },

      {
        th:
          "คำนวณคาร์โบไฮเดรต",

        en:
          "Carbohydrate Calculation"
      },


      {
        th:
          "คำนวณโบลัส",

        en:
          "Bolus Calculation"
      },

      {
        th:
          "ประวัติการฉีด",

        en:
          "Injection History"
      }

    ],

    images: [

      "Image/Step07-1.png",

      "Image/Step07-2.png",

      "Image/Step07-3.png",

      "Image/Step07-4.png",

      "Image/Step07-5.png",

    ],


    /*
      STEP 07 RESOURCE BUTTONS

      ไม่ใช้ Google Drive

      กดปุ่มแล้วไป Topic ภายใน Step 07 โดยตรง

      targetTopic:
      3 = อาหารแลกเปลี่ยน
      4 = การดูดซึมอาหาร
    */

    resources: [

  {
    type: "external",
    kind: "document",

    iconImage:
      "Image/Food Exchange-Icon.png",

    labelTH:
      "อาหารแลกเปลี่ยน",

    labelEN:
      "Food Exchange",

    subtitleTH:
      "ตารางอาหารแลกเปลี่ยนครบ 6 หมวดหมู่",

    subtitleEN:
      "Thai Food Exchange List",

    urlTH:
      "resource-viewer.html?resource=foodexchange&lang=th",

    urlEN:
      "resource-viewer.html?resource=foodexchange&lang=en"
  },

  {
    type: "external",
    kind: "document",

    iconImage:
      "Image/Food Absorb-Icon.png",

    labelTH:
      "ประเมินการดูดซึมของอาหาร",

    labelEN:
      "Food Absorption Evaluation",

    subtitleTH:
      "ดูดซึมเร็ว, ปานกลาง, ช้า",

    subtitleEN:
      "Fast, moderate, slow absorption",

    urlTH:
      "resource-viewer.html?resource=absorption&lang=th",

    urlEN:
      "resource-viewer.html?resource=absorption&lang=en"
  }

]
  },


  /* =======================================================
     STEP 08
     ALERTS + P8 CARE
  ======================================================= */

  {
    id:
      "step08",

    number:
      "08",

    icon:
      "Image/Icon-8.png",

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
     DIABETES CARE
  ======================================================= */

  {
    id:
      "step09",

    number:
      "09",

    icon:
      "Image/Icon-9.png",

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

  sidebar.innerHTML =
    "";


  /* BEFORE STEP 01 */

  const start =
    document.createElement(
      "div"
    );


  start.className =
    "journey-start completed";


  start.innerHTML = `

    <div
      class="journey-start-image"
    >

      <img
        id="journeyStartImage"
        src="Image/Before 1.png"
        alt="P8 Quick Manual"
      >

    </div>

    <div
      class="journey-line"
    ></div>

  `;


  sidebar.appendChild(
    start
  );


  /* STEP BUTTONS */

  steps.forEach(
    (
      step,
      index
    ) => {

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
          class="side-button ${
            index === activeStepIndex
              ? "active"
              : ""
          }"
          type="button"
          data-step-index="${index}"
        >

          <span
            class="side-number"
          >
            ${step.number}
          </span>

          <span>
            ${text}
          </span>

        </button>


        ${
          index <
          steps.length - 1

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
   BUILD RESOURCE BUTTONS
========================================================= */

function buildResourceButtons(
  step,
  stepIndex
) {

  if (
    !Array.isArray(
      step.resources
    ) ||
    step.resources.length === 0
  ) {
    return "";
  }


  const buttons =
    step.resources
      .map(
        (
          resource,
          resourceIndex
        ) => {

          const label =
            currentLanguage === "th"
              ? resource.labelTH
              : resource.labelEN;


          const subtitle =
            currentLanguage === "th"
              ? resource.subtitleTH
              : resource.subtitleEN;


          const url =
            currentLanguage === "th"
              ? resource.urlTH
              : resource.urlEN;


          const iconImage =
          resource.iconImage || "";

          /* -----------------------------------------------
             EXTERNAL RESOURCE
             STEP 06 / STEP 07
          ----------------------------------------------- */

          if (
            resource.type ===
            "external"
          ) {

            const hasUrl =
              typeof url === "string" &&
              url.trim() !== "";


            if (!hasUrl) {

              return `

                <span
                  class="
                    resource-card
                    resource-card-disabled
                  "
                  aria-label="${label}"
                  aria-disabled="true"
                >

                  <span
  class="resource-card-icon"
  aria-hidden="true"
>

  <img
    src="${iconImage}"
    alt=""
    class="resource-card-icon-image"
  >

</span>


                  <span
                    class="resource-card-copy"
                  >

                    <strong
                      class="resource-card-title"
                    >
                      ${label}
                    </strong>

                    ${
                      subtitle
                        ? `
                          <span
                            class="resource-card-subtitle"
                          >
                            ${subtitle}
                          </span>
                        `
                        : ""
                    }

                  </span>


                  <span
                    class="resource-card-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </span>

              `;

            }


            return `

              <a
                class="resource-card"
                href="${url}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${label}"
              >

                <span
  class="resource-card-icon"
  aria-hidden="true"
>

  <img
    src="${iconImage}"
    alt=""
    class="resource-card-icon-image"
  >

</span>


                <span
                  class="resource-card-copy"
                >

                  <strong
                    class="resource-card-title"
                  >
                    ${label}
                  </strong>

                  ${
                    subtitle
                      ? `
                        <span
                          class="resource-card-subtitle"
                        >
                          ${subtitle}
                        </span>
                      `
                      : ""
                  }

                </span>


                <span
                  class="resource-card-arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </a>

            `;

          }


          return "";

        }
      )
      .join("");


  return `

    <div
      class="resource-links"
    >

      ${buttons}

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
    (
      step,
      index
    ) => {

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


      /* -----------------------------------------------------
         TOPIC BUTTONS
      ----------------------------------------------------- */

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
                  class="subnav-btn ${
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


      /* -----------------------------------------------------
         RESOURCE BUTTONS
      ----------------------------------------------------- */

      const resourceButtons =
        buildResourceButtons(
          step,
          index
        );


      /* -----------------------------------------------------
         BUILD SLIDES
      ----------------------------------------------------- */

      const slides =
        step.topics
          .map(
            (
              topic,
              topicIndex
            ) => {

              let topicImages =
                [];


              /*
                PRIORITY

                1. imagesTH / imagesEN
                2. topic.images
                3. step.images[topicIndex]
              */

              if (
                currentLanguage === "th" &&
                Array.isArray(
                  topic.imagesTH
                )
              ) {

                topicImages =
                  topic.imagesTH;

              } else if (
                currentLanguage === "en" &&
                Array.isArray(
                  topic.imagesEN
                )
              ) {

                topicImages =
                  topic.imagesEN;

              } else if (
                Array.isArray(
                  topic.images
                )
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


              const placeholderTitle =
                currentLanguage === "th"
                  ? "ยังไม่มีรูปคู่มือ"
                  : "Guide image not available";


              const placeholderText =
                currentLanguage === "th"
                  ? "สามารถเพิ่มรูปในโฟลเดอร์ Image ได้ภายหลัง"
                  : "Images can be added to the Image folder later.";


              return `

                <div
                  class="slide ${
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
                        ${placeholderTitle}
                      </strong>

                      <span>
                        ${placeholderText}
                      </span>

                    </div>

                  </div>

                </div>

              `;

            }
          )
          .join("");


      /* -----------------------------------------------------
         PREVIOUS STEP
      ----------------------------------------------------- */

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


      /* -----------------------------------------------------
         NEXT STEP
      ----------------------------------------------------- */

      const nextButton =
        index <
        steps.length - 1

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


      /* -----------------------------------------------------
         CARD
      ----------------------------------------------------- */

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

              <div
                class="subnav"
              >

                ${topicButtons}

              </div>


              ${resourceButtons}

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


  bindResourceButtons();


  setupSliders();


  setupMissingImages();


  updateOpenCardHeight();

}


/* =========================================================
   RESOURCE BUTTON EVENTS
========================================================= */

function bindResourceButtons() {

  /*
    STEP 07

    กดรูป "อาหารแลกเปลี่ยน"
    หรือ "การดูดซึมอาหาร"

    แล้วเปิด Topic ภายใน Step 07
    ไม่เปิด Google Drive
  */

  document
    .querySelectorAll(
      "[data-resource-topic]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          (event) => {

            event.preventDefault();


            event.stopPropagation();


            const stepIndex =
              Number(
                button.dataset
                  .resourceStep
              );


            const topicIndex =
              Number(
                button.dataset
                  .resourceTopic
              );


            const card =
              document.getElementById(
                steps[
                  stepIndex
                ].id
              );


            if (!card) {
              return;
            }


            /*
              Open Step 07 first
              if it is currently closed.
            */

            activeStepIndex =
              stepIndex;


            openStepIndex =
              stepIndex;


            openOnlyStep(
              stepIndex
            );


            /*
              Find slider inside this card.
            */

            const slider =
              card.querySelector(
                "[data-slider]"
              );


            if (!slider) {
              return;
            }


            /*
              Slider stores showSlide()
              on the element so an
              external topic button can
              activate the requested topic.
            */

            if (
              typeof slider
                ._showSlide ===
              "function"
            ) {

              slider._showSlide(
                topicIndex
              );

            }


            requestAnimationFrame(
              () => {

                updateOpenCardHeight();

              }
            );

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
   CARD EVENTS
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


      if (!header) {
        return;
      }


      header.addEventListener(
        "click",
        () => {

          const isOpen =
            card.classList.contains(
              "open"
            );


          /* CLOSE CURRENT CARD */

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


            if (content) {

              content.style.maxHeight =
                null;

            }


            updateCardToggle(
              card,
              false
            );


            return;

          }


          /* OPEN THIS CARD */

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


setTimeout(
  () => {

    card.scrollIntoView({
      behavior:
        "smooth",
      block:
        "start"
    });

  },
  80
);

        }
      );

    }
  );

  /* PREVIOUS / NEXT */

  document
    .querySelectorAll(
      "[data-go-step]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          (event) => {

            event.preventDefault();


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

function goToStep(
  index
) {

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


  if (!card) {
    return;
  }


  setTimeout(
    () => {

      card.scrollIntoView({
        behavior:
          "smooth",
        block:
          "start"
      });

    },
    80
  );

}


/* =========================================================
   OPEN ONLY ONE STEP
========================================================= */

function openOnlyStep(
  index
) {

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

      const shouldOpen =
        cardIndex === index;


      card.classList.toggle(
        "open",
        shouldOpen
      );


      updateCardToggle(
        card,
        shouldOpen
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


  content.style.maxHeight =
    `${content.scrollHeight}px`;

}


/* =========================================================
   JOURNEY PROGRESS
========================================================= */

function updateJourneyProgress(
  index
) {

  const sideSteps =
    Array.from(
      document.querySelectorAll(
        ".side-step"
      )
    );


  const buttons =
    Array.from(
      document.querySelectorAll(
        ".side-button"
      )
    );


  sideSteps.forEach(
    (
      wrapper,
      stepIndex
    ) => {

      wrapper.classList.toggle(
        "completed",
        stepIndex < index
      );

    }
  );


  buttons.forEach(
    (
      button,
      stepIndex
    ) => {

      button.classList.toggle(
        "active",
        stepIndex === index
      );

    }
  );


  const start =
    document.querySelector(
      ".journey-start"
    );


  if (start) {

    start.classList.add(
      "completed"
    );

  }

}


/* =========================================================
   SETUP SLIDERS
========================================================= */

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


  const scrollbar =
    slider.querySelector(
      ".content-scrollbar"
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
          (event) => {

            event.preventDefault();
            event.stopPropagation();

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

  if (
    !scrollbarTrack ||
    !scrollbarThumb
  ) {
    return;
  }

  const trackHeight =
    scrollbarTrack.clientHeight;

  if (trackHeight <= 0) {
    return;
  }

  const thumbHeight =
    Math.max(
      34,
      trackHeight / slides.length
    );

  const availableTravel =
    Math.max(
      0,
      trackHeight - thumbHeight
    );

  const topicRatio =
    slides.length <= 1
      ? 0
      : currentIndex /
        (slides.length - 1);

  const translateY =
    availableTravel *
    topicRatio;

  scrollbarThumb.style.height =
    `${thumbHeight}px`;

  scrollbarThumb.style.transform =
    `translateX(-50%) translateY(${translateY}px)`;

  if (scrollbar) {
    scrollbar.classList.remove(
      "no-scroll"
    );
  }
}


  /* -------------------------------------------------------
     RECALCULATE
  ------------------------------------------------------- */

  function refreshSlider() {

    requestAnimationFrame(
      () => {

        updateScrollbar();

      }
    );

  }


  /* -------------------------------------------------------
     BIND SCROLL AREA
  ------------------------------------------------------- */

  slides.forEach(
    (slide) => {

      const area =
        slide.querySelector(
          ".slide-scroll"
        );


      if (!area) {
        return;
      }


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

  });


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
     KEEP ▲ / ▼ CLICKABLE
  ------------------------------------------------------- */

  function updateSliderButtons() {

    if (prevButton) {

      prevButton.disabled =
        false;

    }


    if (nextButton) {

      nextButton.disabled =
        false;

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
          slideIndex ===
            currentIndex
        );

      }
    );


    /*
      เมื่อเปลี่ยน Topic
      กลับขึ้นบนสุดของ Topic
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


  /*
    สำคัญ:
    Step 07 Resource Buttons
    ของ Code ปัจจุบันใช้ตัวนี้
  */

  slider._showSlide =
    (index) => {

      showSlide(
        index
      );

    };


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
          (event) => {

            event.preventDefault();

            event.stopPropagation();


            showSlide(
              index
            );

          }
        );

      }
    );

  }


  /* -------------------------------------------------------
     ▲ SCROLL UP
  ------------------------------------------------------- */

  if (prevButton) {
  prevButton.addEventListener(
    "click",
    (event) => {

      event.preventDefault();
      event.stopPropagation();

      if (currentIndex > 0) {
        showSlide(
          currentIndex - 1
        );
      }

    }
  );
}

  /* -------------------------------------------------------
     ▼ SCROLL DOWN
  ------------------------------------------------------- */

  if (nextButton) {
  nextButton.addEventListener(
    "click",
    (event) => {

      event.preventDefault();
      event.stopPropagation();

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
     CLICK SCROLLBAR TRACK
  ------------------------------------------------------- */

  if (
    scrollbarTrack &&
    scrollbarThumb
  ) {

    scrollbarTrack.addEventListener(
      "pointerdown",
      (event) => {

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


        event.preventDefault();

        event.stopPropagation();


        const rect =
          scrollbarTrack
            .getBoundingClientRect();


        if (rect.height <= 0) {
          return;
        }


        const maxScroll =
          Math.max(
            0,
            scrollArea.scrollHeight -
            scrollArea.clientHeight
          );


        if (maxScroll <= 0) {
          return;
        }


        const ratio =
          Math.min(
            1,
            Math.max(
              0,
              (
                event.clientY -
                rect.top
              ) /
              rect.height
            )
          );


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
       DRAG SCROLLBAR THUMB
    ----------------------------------------------------- */

    let dragging =
      false;


    let dragStartY =
      0;


    let dragStartScroll =
      0;


    let dragPointerId =
      null;


    scrollbarThumb.addEventListener(
      "pointerdown",
      (event) => {

        const scrollArea =
          getScrollArea();


        if (!scrollArea) {
          return;
        }


        const maxScroll =
          scrollArea.scrollHeight -
          scrollArea.clientHeight;


        if (maxScroll <= 0) {
          return;
        }


        dragging =
          true;


        dragStartY =
          event.clientY;


        dragStartScroll =
          scrollArea.scrollTop;


        dragPointerId =
          event.pointerId;


        scrollbarThumb.classList.add(
          "dragging"
        );


        try {

          scrollbarThumb
            .setPointerCapture(
              event.pointerId
            );

        } catch (error) {

          /* no action */

        }


        event.preventDefault();

        event.stopPropagation();

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


      scrollbarThumb.classList.remove(
        "dragging"
      );


      if (
        dragPointerId !== null
      ) {

        try {

          scrollbarThumb
            .releasePointerCapture(
              dragPointerId
            );

        } catch (error) {

          /* no action */

        }

      }


      dragPointerId =
        null;

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
     IMAGE LOAD
  ------------------------------------------------------- */

  slider
    .querySelectorAll(
      "img"
    )
    .forEach(
      (image) => {

        image.addEventListener(
          "load",
          () => {

            refreshSlider();

            updateOpenCardHeight();

          }
        );


        image.addEventListener(
          "error",
          () => {

            refreshSlider();

          }
        );

      }
    );


  /* -------------------------------------------------------
     RESIZE OBSERVER
     Card เปิดจาก display:none → block
     จะคำนวณ Scrollbar ใหม่โดยอัตโนมัติ
  ------------------------------------------------------- */

  if (
    typeof ResizeObserver !==
      "undefined"
  ) {

    const observer =
      new ResizeObserver(
        () => {

          refreshSlider();

        }
      );


    observer.observe(
      slider
    );

  }


  /* -------------------------------------------------------
     WINDOW RESIZE
  ------------------------------------------------------- */

  window.addEventListener(
    "resize",
    () => {

      refreshSlider();

    }
  );


        /* ===================================================
           INITIAL STATE
        =================================================== */

        showSlide(
          0
        );
}


/* =========================================================
   MOBILE / TOUCH SWIPE INSIDE SLIDER
========================================================= */

function setupTouchSupport() {

  document
    .querySelectorAll(
      ".slide-scroll"
    )
    .forEach(
      (scrollArea) => {

        let startY =
          0;


        let startScrollTop =
          0;


        scrollArea.addEventListener(
          "touchstart",
          (event) => {

            if (
              event.touches.length !==
              1
            ) {
              return;
            }


            startY =
              event.touches[
                0
              ].clientY;


            startScrollTop =
              scrollArea.scrollTop;

          },
          {
            passive:
              true
          }
        );


        scrollArea.addEventListener(
          "touchmove",
          (event) => {

            if (
              event.touches.length !==
              1
            ) {
              return;
            }


            const currentY =
              event.touches[
                0
              ].clientY;


            const delta =
              startY -
              currentY;


            scrollArea.scrollTop =
              startScrollTop +
              delta;

          },
          {
            passive:
              true
          }
        );

      }
    );

}
/* =========================================================
   MISSING IMAGE HANDLING
========================================================= */

function setupMissingImages() {

  const images =
    document.querySelectorAll(
      "[data-content-image]"
    );


  images.forEach(
    (image) => {

      const handleImageState =
        () => {

          const slide =
            image.closest(
              ".slide"
            );


          if (!slide) {
            return;
          }


          const slideImages =
            Array.from(
              slide.querySelectorAll(
                "[data-content-image]"
              )
            );


          const validImages =
            slideImages.filter(
              (item) => {

                return (
                  item.complete &&
                  item.naturalWidth > 0 &&
                  !item.classList.contains(
                    "image-missing"
                  )
                );

              }
            );


          const placeholder =
            slide.querySelector(
              ".slide-placeholder"
            );


          if (placeholder) {

            placeholder.classList.toggle(
              "show",
              validImages.length === 0
            );

          }


          requestAnimationFrame(
            () => {

              updateOpenCardHeight();

            }
          );

        };


      image.addEventListener(
        "load",
        () => {

          image.classList.remove(
            "image-missing"
          );


          handleImageState();

        }
      );


      image.addEventListener(
        "error",
        () => {

          image.classList.add(
            "image-missing"
          );


          image.style.display =
            "none";


          handleImageState();

        }
      );


      if (image.complete) {

        if (
          image.naturalWidth > 0
        ) {

          image.classList.remove(
            "image-missing"
          );

        } else {

          image.classList.add(
            "image-missing"
          );


          image.style.display =
            "none";

        }


        handleImageState();

      }

    }
  );


  /*
    Also check every slide.

    This is important for topics
    that currently have no image file.
  */

  document
    .querySelectorAll(
      ".slide"
    )
    .forEach(
      (slide) => {

        const imagesInside =
          Array.from(
            slide.querySelectorAll(
              "[data-content-image]"
            )
          );


        const placeholder =
          slide.querySelector(
            ".slide-placeholder"
          );


        if (
          imagesInside.length === 0 &&
          placeholder
        ) {

          placeholder.classList.add(
            "show"
          );

        }

      }
    );

}


/* =========================================================
   RESOURCE IMAGE FALLBACK
========================================================= */

function setupResourceImages() {

  document
    .querySelectorAll(
      ".resource-link-image"
    )
    .forEach(
      (image) => {

        image.addEventListener(
          "error",
          () => {

            /*
              Do not replace the prepared
              resource button with text.

              If filename/path is wrong,
              hide only the broken image icon.
            */

            image.style.visibility =
              "hidden";

          }
        );

      }
    );

}


/* =========================================================
   LANGUAGE
========================================================= */

function setLanguage(
  language
) {

  if (
    language !== "th" &&
    language !== "en"
  ) {
    return;
  }


  currentLanguage =
    language;


  document.documentElement.lang =
    language;


  /* -------------------------------------------------------
     LANGUAGE TOGGLE
  ------------------------------------------------------- */

  languageButtons.forEach(
    (button) => {

      const isActive =
        button.dataset.lang ===
        language;


      button.classList.toggle(
        "active",
        isActive
      );


      button.setAttribute(
        "aria-pressed",
        isActive
          ? "true"
          : "false"
      );

    }
  );


  /* -------------------------------------------------------
     STATIC TEXT
  ------------------------------------------------------- */

  updateStaticLanguageText();


  /*
    Rebuild both sections because:

    STEP 06
    TH:
      CareSense-TH-Pic1.png
      CareSense-TH-Pic2.png

    EN:
      CareSense-EN-Pic1.png
      CareSense-EN-Pic2.png


    STEP 07 RESOURCE BUTTONS
    TH:
      อาหารแลกเปลี่ยน.png
      ประเมินการดูดซึมของอาหาร.png

    EN:
      Food Exchange.png
      Food Absorb Evaluation.png


    STEP 07 FOOD EXCHANGE CONTENT
    TH + EN use the SAME files:

      Thai Exchange Food List-1.jpg
      Thai Exchange Food List-2.jpg


    STEP 07 FOOD ABSORPTION
    TH:
      GI-TH.png

    EN:
      GI-EN.png
  */

  buildSidebar();


  buildManual();


  setupTouchSupport();


  setupResourceImages();


  requestAnimationFrame(
    () => {

      updateJourneyProgress(
        activeStepIndex
      );


      updateOpenCardHeight();

    }
  );

}


/* =========================================================
   STATIC LANGUAGE TEXT
========================================================= */

function updateStaticLanguageText() {

  /*
    Elements that need language switching
    can use:

    data-th="..."
    data-en="..."

    Example:
    <span
      data-th="คู่มือการใช้งาน"
      data-en="Quick Manual"
    ></span>
  */

  document
    .querySelectorAll(
      "[data-th][data-en]"
    )
    .forEach(
      (element) => {

        element.textContent =
          currentLanguage === "th"
            ? element.dataset.th
            : element.dataset.en;

      }
    );


  /*
    Elements with HTML content can use:

    data-th-html="..."
    data-en-html="..."
  */

  document
    .querySelectorAll(
      "[data-th-html][data-en-html]"
    )
    .forEach(
      (element) => {

        element.innerHTML =
          currentLanguage === "th"
            ? element.dataset
                .thHtml
            : element.dataset
                .enHtml;

      }
    );


  /* -------------------------------------------------------
     DOCUMENT TITLE
  ------------------------------------------------------- */

  document.title =
    currentLanguage === "th"
      ? "P8 Quick Manual | DIA:CONN"
      : "P8 Quick Manual | DIA:CONN";

}


/* =========================================================
   LANGUAGE BUTTON EVENTS
========================================================= */

function bindLanguageButtons() {

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


  image.addEventListener(
    "error",
    () => {

      const parent =
        image.closest(
          ".journey-start-image"
        );


      if (parent) {

        parent.classList.add(
          "image-fallback"
        );

      }


      image.style.display =
        "none";

    }
  );

}


/* =========================================================
   RESPONSIVE HELPERS
========================================================= */

function isMobile() {

  return window.matchMedia(
    "(max-width: 760px)"
  ).matches;

}


function isSmallMobile() {

  return window.matchMedia(
    "(max-width: 390px)"
  ).matches;

}


/* =========================================================
   KEEP ACTIVE STEP VISIBLE IN TOP NAVIGATION
========================================================= */

function keepActiveSidebarVisible() {

  if (!isMobile()) {
    return;
  }


  const activeButton =
    document.querySelector(
      ".side-button.active"
    );


  if (!activeButton) {
    return;
  }


  const wrapper =
    activeButton.closest(
      ".side-step"
    );


  if (!wrapper) {
    return;
  }


  /*
    Do not force-scroll the entire page.

    Only move the horizontal
    Step navigation when needed.
  */

  const sidebarRect =
    sidebar.getBoundingClientRect();


  const wrapperRect =
    wrapper.getBoundingClientRect();


  const isOutsideLeft =
    wrapperRect.left <
    sidebarRect.left;


  const isOutsideRight =
    wrapperRect.right >
    sidebarRect.right;


  if (
    isOutsideLeft ||
    isOutsideRight
  ) {

    wrapper.scrollIntoView({
      behavior:
        "smooth",

      block:
        "nearest",

      inline:
        "center"
    });

  }

}


/* =========================================================
   RESIZE
========================================================= */

let resizeTimer =
  null;


function handleResize() {

  window.clearTimeout(
    resizeTimer
  );


  resizeTimer =
    window.setTimeout(
      () => {

        updateOpenCardHeight();


        /*
          Keep toolbar/resource images
          at their natural aspect ratio.

          CSS controls the height,
          JS does not resize the images.
        */

        document
          .querySelectorAll(
            ".resource-link-image"
          )
          .forEach(
            (image) => {

              image.style.width =
                "auto";


              image.style.maxWidth =
                "none";

            }
          );

      },
      80
    );

}


/* =========================================================
   IMAGE LOAD RESIZE
========================================================= */

function bindGlobalImageLoad() {

  document.addEventListener(
    "load",
    (event) => {

      const target =
        event.target;


      if (
        target instanceof
        HTMLImageElement
      ) {

        requestAnimationFrame(
          () => {

            updateOpenCardHeight();

          }
        );

      }

    },
    true
  );

}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

function bindKeyboardSupport() {

  document.addEventListener(
    "keydown",
    (event) => {

      /*
        Ignore keyboard shortcuts
        while user is typing.
      */

      const tagName =
        document.activeElement
          ?.tagName
          ?.toLowerCase();


      if (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select"
      ) {
        return;
      }


      /* ---------------------------------------------------
         ESC = CLOSE OPEN CARD
      --------------------------------------------------- */

      if (
        event.key ===
        "Escape"
      ) {

        const openCard =
          document.querySelector(
            ".step-card.open"
          );


        if (!openCard) {
          return;
        }


        openCard.classList.remove(
          "open"
        );


        const content =
          openCard.querySelector(
            ".step-content"
          );


        if (content) {

          content.style.maxHeight =
            null;

        }


        updateCardToggle(
          openCard,
          false
        );


        openStepIndex =
          null;

      }

    }
  );

}


/* =========================================================
   TOOLBAR HORIZONTAL SCROLL
========================================================= */

function setupToolbarScroll() {

  document
    .querySelectorAll(
      ".manual-toolbar"
    )
    .forEach(
      (toolbar) => {

        /*
          Shift + mouse wheel can be used
          to move the toolbar horizontally
          on desktop.

          On mobile/iPad the toolbar
          remains native touch-scrollable.
        */

        toolbar.addEventListener(
          "wheel",
          (event) => {

            if (
              !event.shiftKey
            ) {
              return;
            }


            if (
              toolbar.scrollWidth <=
              toolbar.clientWidth
            ) {
              return;
            }


            toolbar.scrollLeft +=
              event.deltaY;


            event.preventDefault();

          },
          {
            passive:
              false
          }
        );

      }
    );

}


/* =========================================================
   REFRESH DYNAMIC UI HELPERS
========================================================= */

function refreshDynamicHelpers() {

  setupResourceImages();


  setupToolbarScroll();


  requestAnimationFrame(
    () => {

      updateOpenCardHeight();

    }
  );

}


/* =========================================================
   OBSERVE OPEN CARD SIZE
========================================================= */

let cardResizeObserver =
  null;


function setupCardResizeObserver() {

  if (
    typeof ResizeObserver ===
    "undefined"
  ) {
    return;
  }


  if (cardResizeObserver) {

    cardResizeObserver.disconnect();

  }


  cardResizeObserver =
    new ResizeObserver(
      () => {

        updateOpenCardHeight();

      }
    );


  const openCard =
    document.querySelector(
      ".step-card.open"
    );


  if (openCard) {

    const inner =
      openCard.querySelector(
        ".content-inner"
      );


    if (inner) {

      cardResizeObserver.observe(
        inner
      );

    }

  }

}


/* =========================================================
   REFRESH OPEN CARD OBSERVER
========================================================= */

function refreshCardResizeObserver() {

  requestAnimationFrame(
    () => {

      setupCardResizeObserver();

    }
  );

}


/* =========================================================
   SAFE SCROLL TO CARD
========================================================= */

function scrollCardIntoView(
  card
) {

  if (!card) {
    return;
  }

  const siteHeader =
    document.querySelector(
      ".site-header"
    );

  const headerHeight =
    siteHeader
      ? siteHeader.offsetHeight
      : 0;

  const cardHeader =
    card.querySelector(
      ".step-header"
    );

  if (!cardHeader) {
    return;
  }

  window.setTimeout(
    () => {

      const top =
        cardHeader
          .getBoundingClientRect()
          .top +
        window.scrollY -
        headerHeight -
        12;

      window.scrollTo({
        top:
          Math.max(
            0,
            top
          ),
        behavior:
          "smooth"
      });

    },
    180
  );

}

/* =========================================================
   SCROLL TO STEP FROM HASH
========================================================= */

function openStepFromHash() {

  const hash =
    window.location.hash;


  if (!hash) {
    return;
  }


  const index =
    steps.findIndex(
      (step) =>
        `#${step.id}` ===
        hash
    );


  if (
    index < 0
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


  scrollCardIntoView(
  card
);


  const card =
    document.getElementById(
      steps[
        index
      ].id
    );


  requestAnimationFrame(
    () => {

      scrollCardIntoView(
        card
      );

    }
  );

}


/* =========================================================
   HASH CHANGE
========================================================= */

function bindHashChange() {

  window.addEventListener(
    "hashchange",
    () => {

      openStepFromHash();

    }
  );

}


/* =========================================================
   UPDATE HASH WITHOUT JUMP
========================================================= */

function updateStepHash(
  index
) {

  const step =
    steps[
      index
    ];


  if (!step) {
    return;
  }


  if (
    !window.history ||
    typeof window.history
      .replaceState !==
      "function"
  ) {
    return;
  }


  window.history.replaceState(
    null,
    "",
    `#${step.id}`
  );

}


/* =========================================================
   DOCUMENT VISIBILITY
========================================================= */

function bindVisibilityChange() {

  document.addEventListener(
    "visibilitychange",
    () => {

      if (
        document.visibilityState !==
        "visible"
      ) {
        return;
      }


      requestAnimationFrame(
        () => {

          updateOpenCardHeight();

        }
      );

    }
  );

}


/* =========================================================
   ORIENTATION CHANGE
========================================================= */

function bindOrientationChange() {

  window.addEventListener(
    "orientationchange",
    () => {

      window.setTimeout(
        () => {

          updateOpenCardHeight();


          keepActiveSidebarVisible();

        },
        180
      );

    }
  );

}
/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

  if (!backTop) {
    return;
  }


  function updateBackTopVisibility() {

    const shouldShow =
      window.scrollY > 420;


    backTop.classList.toggle(
      "show",
      shouldShow
    );

  }


  window.addEventListener(
    "scroll",
    updateBackTopVisibility,
    {
      passive:
        true
    }
  );


  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top:
          0,

        behavior:
          "smooth"
      });

    }
  );


  updateBackTopVisibility();

}


/* =========================================================
   PAGE SCROLL
========================================================= */

function setupPageScrollBehavior() {

  let ticking =
    false;


  window.addEventListener(
    "scroll",
    () => {

      if (ticking) {
        return;
      }


      ticking =
        true;


      window.requestAnimationFrame(
        () => {

          /*
            Keep the current Step navigation
            available without rebuilding
            the page while scrolling.
          */

          ticking =
            false;

        }
      );

    },
    {
      passive:
        true
    }
  );

}


/* =========================================================
   ACTIVE STEP FROM PAGE POSITION
========================================================= */

function setupScrollSpy() {

  const cards =
    Array.from(
      document.querySelectorAll(
        ".step-card"
      )
    );


  if (
    cards.length === 0
  ) {
    return;
  }


  let ticking =
    false;


  function updateActiveStepFromScroll() {

    const siteHeader =
      document.querySelector(
        ".site-header"
      );


    const headerHeight =
      siteHeader
        ? siteHeader.offsetHeight
        : 0;


    const referenceY =
      headerHeight +
      140;


    let closestIndex =
      activeStepIndex;


    let closestDistance =
      Number.POSITIVE_INFINITY;


    cards.forEach(
      (
        card,
        index
      ) => {

        const rect =
          card.getBoundingClientRect();


        const distance =
          Math.abs(
            rect.top -
            referenceY
          );


        if (
          distance <
          closestDistance
        ) {

          closestDistance =
            distance;


          closestIndex =
            index;

        }

      }
    );


    if (
      closestIndex !==
      activeStepIndex
    ) {

      activeStepIndex =
        closestIndex;


      updateJourneyProgress(
        activeStepIndex
      );

    }

  }


  window.addEventListener(
    "scroll",
    () => {

      if (ticking) {
        return;
      }


      ticking =
        true;


      requestAnimationFrame(
        () => {

          updateActiveStepFromScroll();


          ticking =
            false;

        }
      );

    },
    {
      passive:
        true
    }
  );

}


/* =========================================================
   RESOURCE TOPIC ACTIVE STATE
========================================================= */

function setupResourceTopicActiveState() {

  document
    .querySelectorAll(
      ".resource-topic"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const card =
              button.closest(
                ".step-card"
              );


            if (!card) {
              return;
            }


            card
              .querySelectorAll(
                ".resource-topic"
              )
              .forEach(
                (item) => {

                  item.classList.remove(
                    "active"
                  );

                }
              );


            button.classList.add(
              "active"
            );

          }
        );

      }
    );

}


/* =========================================================
   RESET RESOURCE ACTIVE STATE
========================================================= */

function resetResourceActiveState(
  card
) {

  if (!card) {
    return;
  }


  card
    .querySelectorAll(
      ".resource-topic"
    )
    .forEach(
      (button) => {

        button.classList.remove(
          "active"
        );

      }
    );

}


/* =========================================================
   MAKE SUBNAV UPDATE RESOURCE STATE
========================================================= */

function setupSubnavResourceSync() {

  document
    .querySelectorAll(
      ".step-card"
    )
    .forEach(
      (card) => {

        const buttons =
          Array.from(
            card.querySelectorAll(
              ".subnav-btn"
            )
          );


        buttons.forEach(
          (
            button,
            topicIndex
          ) => {

            button.addEventListener(
              "click",
              () => {

                const resourceButtons =
                  Array.from(
                    card.querySelectorAll(
                      ".resource-topic"
                    )
                  );


                resourceButtons.forEach(
                  (
                    resourceButton
                  ) => {

                    const targetTopic =
                      Number(
                        resourceButton.dataset
                          .resourceTopic
                      );


                    resourceButton
                      .classList.toggle(
                        "active",
                        targetTopic ===
                          topicIndex
                      );

                  }
                );

              }
            );

          }
        );

      }
    );

}


/* =========================================================
   PREPARE RESOURCE BUTTONS
========================================================= */

function prepareResourceButtons() {

  setupResourceImages();


  setupResourceTopicActiveState();


  setupSubnavResourceSync();


  setupToolbarScroll();

}


/* =========================================================
   INITIAL OPEN STATE
========================================================= */

function setupInitialOpenState() {

  /*
    Default:
    หน้าแรกไม่เปิด Card ใด ๆ

    ผู้ใช้กด Card
    แล้วจึงเปิดรายละเอียด
  */

  openStepIndex =
    null;


  document
    .querySelectorAll(
      ".step-card"
    )
    .forEach(
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

}


/* =========================================================
   HERO IMAGE LOAD
========================================================= */

function setupHeroImageLoad() {

  const heroImage =
    document.querySelector(
      ".hero img"
    );


  if (!heroImage) {
    return;
  }


  const refresh =
    () => {

      requestAnimationFrame(
        () => {

          updateOpenCardHeight();

        }
      );

    };


  heroImage.addEventListener(
    "load",
    refresh
  );


  if (heroImage.complete) {

    refresh();

  }

}


/* =========================================================
   SAFE EXTERNAL LINKS
========================================================= */

function setupExternalLinks() {

  document
    .querySelectorAll(
      'a[target="_blank"]'
    )
    .forEach(
      (link) => {

        const rel =
          new Set(
            (
              link.getAttribute(
                "rel"
              ) || ""
            )
              .split(/\s+/)
              .filter(Boolean)
          );


        rel.add(
          "noopener"
        );


        rel.add(
          "noreferrer"
        );


        link.setAttribute(
          "rel",
          Array.from(
            rel
          ).join(" ")
        );

      }
    );

}


/* =========================================================
   PREVENT DISABLED RESOURCE ACTION
========================================================= */

function setupDisabledResources() {

  document
    .querySelectorAll(
      ".resource-link-disabled"
    )
    .forEach(
      (resource) => {

        resource.addEventListener(
          "click",
          (event) => {

            event.preventDefault();


            event.stopPropagation();

          }
        );

      }
    );

}


/* =========================================================
   REBUILD HELPERS
========================================================= */

function refreshAfterBuild() {

  prepareResourceButtons();


  setupDisabledResources();


  setupExternalLinks();


  setupTouchSupport();


  refreshCardResizeObserver();


  requestAnimationFrame(
    () => {

      updateOpenCardHeight();

    }
  );

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener(
  "resize",
  handleResize,
  {
    passive:
      true
  }
);


/* =========================================================
   INITIALIZE
========================================================= */

function initializeP8Manual() {

  /*
    Default language = Thai
  */

  currentLanguage =
    "th";


  activeStepIndex =
    0;


  openStepIndex =
    null;


  /* -------------------------------------------------------
     BUILD PAGE
  ------------------------------------------------------- */

  updateStaticLanguageText();


  buildSidebar();


  buildManual();


  /* -------------------------------------------------------
     EVENTS
  ------------------------------------------------------- */

  bindLanguageButtons();

  const urlLanguage =
  new URLSearchParams(
    window.location.search
  ).get("lang");

if (
  urlLanguage === "th" ||
  urlLanguage === "en"
) {
  setLanguage(
    urlLanguage
  );
}

  bindGlobalImageLoad();


  bindKeyboardSupport();


  bindHashChange();


  bindVisibilityChange();


  bindOrientationChange();


  setupBackToTop();


  setupPageScrollBehavior();


  /* setupScrollSpy(); */


  setupHeroImageLoad();


  /* -------------------------------------------------------
     DYNAMIC CONTENT
  ------------------------------------------------------- */

  refreshAfterBuild();


  /* -------------------------------------------------------
     DEFAULT CARD STATE
  ------------------------------------------------------- */

  setupInitialOpenState();


  /* -------------------------------------------------------
     HASH

     If URL is:
     #step06
     #step07
     etc.

     open that Step.
  ------------------------------------------------------- */

  if (
    window.location.hash
  ) {

    window.setTimeout(
      () => {

        openStepFromHash();

      },
      80
    );

  }


  /* -------------------------------------------------------
     FINAL LAYOUT CHECK
  ------------------------------------------------------- */

  window.setTimeout(
    () => {

      updateJourneyProgress(
        activeStepIndex
      );


      updateOpenCardHeight();

    },
    120
  );

}


/* =========================================================
   START
========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeP8Manual
  );

} else {

  initializeP8Manual();

}


/* =========================================================
   END P8 QUICK MANUAL
========================================================= */