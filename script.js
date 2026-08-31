/* =========================================================
   P8 QUICK MANUAL DATA
========================================================= */

/* =========================================================
   EXTERNAL / OUTSIDE RESOURCES
========================================================= */

/*
  IMPORTANT

  STEP 06
  - CareSense Info:
      TH -> Image/CareSense-TH-Pic1.png
      EN -> Image/CareSense-EN-Pic1.png

  - CareSense VDO:
      TH + EN -> Google Drive video

  STEP 07
  - Food Exchange:
      TH + EN use the SAME files
      Image/Thai Exchange Food List-1.jpg
      Image/Thai Exchange Food List-2.jpg

  - Food Absorption:
      TH -> Image/GI-TH.png
      EN -> Image/GI-EN.png

  These resources are OUTSIDE the content inside the card.
  The resource buttons do NOT change the topic/slide.
*/

const RESOURCE_LINKS = {
  careSenseVideo:
    "https://drive.google.com/file/d/18RKcoWQi0HCNr49S_V2wjRswCoZsd-Pj/view?usp=sharing"
};


/* =========================================================
   STEPS DATA
========================================================= */

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
     IMPORTANT:
     Resource buttons are HTML buttons outside card topics.
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

    outsideResources: [

      {
        id: "caresense-info",

        type: "language-image",

        icon: "pdf",

        titleTH:
          "ข้อมูล CareSense Air 365 CGM",

        titleEN:
          "CareSense Air 365 CGM Information",

        badgeTH:
          "PDF",

        badgeEN:
          "PDF",

        targetTH:
          "Image/CareSense-TH-Pic1.png",

        targetEN:
          "Image/CareSense-EN-Pic1.png"
      },

      {
        id: "caresense-video",

        type: "external",

        icon: "video",

        titleTH:
          "การติดตั้ง CareSense Air 365 CGM",

        titleEN:
          "CareSense Air 365 CGM Installation",

        badgeTH:
          "VDO",

        badgeEN:
          "VDO",

        url:
          RESOURCE_LINKS.careSenseVideo
      }

    ]
  },


  /* =======================================================
     STEP 07
     IMPORTANT:
     Resource buttons are HTML buttons outside card topics.
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

    outsideResources: [

      {
        id: "food-exchange",

        type: "image-viewer",

        icon: "food",

        titleTH:
          "อาหารแลกเปลี่ยน",

        titleEN:
          "Food Exchange",

        subtitleTH:
          "รายการอาหารแลกเปลี่ยน",

        subtitleEN:
          "Food Exchange List",

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
        id: "food-absorption",

        type: "language-image",

        icon: "absorption",

        titleTH:
          "ประเมินการดูดซึมของอาหาร",

        titleEN:
          "Food Absorption Evaluation",

        subtitleTH:
          "ดูดซึมเร็ว • ปานกลาง • ช้า",

        subtitleEN:
          "Fast • Moderate • Slow",

        targetTH:
          "Image/GI-TH.png",

        targetEN:
          "Image/GI-EN.png"
      }

    ]
  },


  /* =======================================================
     STEP 08
     NEW ORDER = ALERTS + P8 CARE
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
      "ทำความเข้าใจการแจ้งเตือนของ P8 → วิธีจัดการเมื่อมีการแจ้งเตือน → การดูแลและเก็บรักษาอุปกรณ์",

    descriptionEN:
      "Understand P8 alerts → What to do when an alert appears → Device care and storage",

    topics: [

      {
        th: "การแจ้งเตือน",
        en: "Alerts"
      },

      {
        th: "วิธีจัดการ",
        en: "Troubleshooting"
      },

      {
        th: "การดูแล P8",
        en: "P8 Care"
      }

    ],

    images: [

      "Image/Step08-1.png",

      "Image/Step08-2.png",

      "Image/Step08-3.png"

    ]
  },


  /* =======================================================
     STEP 09
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
      "คำแนะนำในการดูแลเบาหวาน",

    titleEN:
      "Diabetes Care Guidance",

    descriptionTH:
      "อาหาร → การออกกำลังกาย → การติดตามระดับน้ำตาลและผลการรักษา",

    descriptionEN:
      "Nutrition → Exercise → Glucose and treatment monitoring",

    topics: [

      {
        th: "อาหาร",
        en: "Nutrition"
      },

      {
        th: "การออกกำลังกาย",
        en: "Exercise"
      },

      {
        th: "ติดตามผล",
        en: "Monitoring"
      }

    ],

    images: [

      "Image/Step09-1.png",

      "Image/Step09-2.png",

      "Image/Step09-3.png"

    ]
  }

];


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLanguage = "th";

const sliderStates =
  new Map();

let missingImageObserver =
  null;


/* =========================================================
   BASIC HELPERS
========================================================= */

function getLanguageText(
  th,
  en
) {

  return currentLanguage === "th"
    ? th
    : en;
}


function escapeHtml(value) {

  return String(value ?? "")
    .replace(
      /&/g,
      "&amp;"
    )
    .replace(
      /</g,
      "&lt;"
    )
    .replace(
      />/g,
      "&gt;"
    )
    .replace(
      /"/g,
      "&quot;"
    )
    .replace(
      /'/g,
      "&#039;"
    );
}


function getStepById(stepId) {

  return steps.find(
    (step) =>
      step.id === stepId
  );
}


function getCurrentStepIndex(stepId) {

  return steps.findIndex(
    (step) =>
      step.id === stepId
  );
}


function getStepTitle(step) {

  return currentLanguage === "th"
    ? step.titleTH
    : step.titleEN;
}


function getStepDescription(step) {

  return currentLanguage === "th"
    ? step.descriptionTH
    : step.descriptionEN;
}


function getStepPath(step) {

  return currentLanguage === "th"
    ? step.pathTH
    : step.pathEN;
}


function getTopicLabel(topic) {

  return currentLanguage === "th"
    ? topic.th
    : topic.en;
}


/* =========================================================
   GET TOPIC IMAGES
========================================================= */

function getTopicImages(
  step,
  topic,
  topicIndex
) {

  const languageImages =
    currentLanguage === "th"
      ? topic.imagesTH
      : topic.imagesEN;

  if (
    Array.isArray(languageImages) &&
    languageImages.length > 0
  ) {

    return languageImages;
  }


  if (
    Array.isArray(topic.images) &&
    topic.images.length > 0
  ) {

    return topic.images;
  }


  const fallback =
    Array.isArray(step.images)
      ? step.images[topicIndex]
      : null;


  if (!fallback) {

    return [];
  }


  if (Array.isArray(fallback)) {

    return fallback;
  }


  return [fallback];
}
/* =========================================================
   SIDEBAR
========================================================= */

function buildSidebar() {

  const sidebar =
    document.getElementById(
      "stepSidebar"
    );


  if (!sidebar) {
    return;
  }


  sidebar.innerHTML =
    "";


  /* -------------------------------------------------------
     START IMAGE
  ------------------------------------------------------- */

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


  /* -------------------------------------------------------
     STEP BUTTONS
  ------------------------------------------------------- */

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


      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.className =
        index === 0
          ? "side-button active"
          : "side-button";


      button.dataset.target =
        step.id;


      button.innerHTML = `

        <span class="side-number">

          ${step.number}

        </span>

        <span>

          ${getStepPath(step)}

        </span>

      `;


      button.addEventListener(
        "click",
        () => {

          goToStep(
            step.id
          );

        }
      );


      wrapper.appendChild(
        button
      );


      if (
        index <
        steps.length - 1
      ) {

        const line =
          document.createElement(
            "div"
          );


        line.className =
          "journey-line";


        wrapper.appendChild(
          line
        );

      }


      sidebar.appendChild(
        wrapper
      );

    }
  );


  setupBeforeImageFallback();

}


/* =========================================================
   RESOURCE BUTTON ICON
========================================================= */

function getResourceIconMarkup(
  resource
) {

  if (
    resource.icon === "pdf"
  ) {

    return `

      <span
        class="resource-html-icon resource-html-icon-pdf"
        aria-hidden="true"
      >
        PDF
      </span>

    `;

  }


  if (
    resource.icon === "video"
  ) {

    return `

      <span
        class="resource-html-icon resource-html-icon-video"
        aria-hidden="true"
      >
        ▶
      </span>

    `;

  }


  if (
    resource.icon === "food"
  ) {

    return `

      <span
        class="resource-html-icon resource-html-icon-food"
        aria-hidden="true"
      >
        🍎
      </span>

    `;

  }


  if (
    resource.icon === "absorption"
  ) {

    return `

      <span
        class="resource-html-icon resource-html-icon-absorption"
        aria-hidden="true"
      >
        ↗
      </span>

    `;

  }


  return `

    <span
      class="resource-html-icon"
      aria-hidden="true"
    >
      ↗
    </span>

  `;

}


/* =========================================================
   BUILD OUTSIDE RESOURCE BUTTONS
========================================================= */

function buildOutsideResources(
  step
) {

  if (
    !Array.isArray(
      step.outsideResources
    ) ||
    step.outsideResources.length === 0
  ) {

    return "";

  }


  const buttons =
    step.outsideResources
      .map(
        (resource) => {

          const title =
            currentLanguage === "th"
              ? resource.titleTH
              : resource.titleEN;


          const subtitle =
            currentLanguage === "th"
              ? resource.subtitleTH
              : resource.subtitleEN;


          const badge =
            currentLanguage === "th"
              ? resource.badgeTH
              : resource.badgeEN;


          const iconMarkup =
            getResourceIconMarkup(
              resource
            );


          return `

            <button
              class="resource-html-button"
              type="button"
              data-outside-resource="${resource.id}"
              data-step-id="${step.id}"
            >

              ${iconMarkup}

              <span
                class="resource-html-copy"
              >

                <strong>

                  ${escapeHtml(title)}

                </strong>

                ${
                  subtitle
                    ? `

                      <small>

                        ${escapeHtml(subtitle)}

                      </small>

                    `
                    : ""
                }

              </span>

              ${
                badge
                  ? `

                    <span
                      class="resource-html-badge"
                    >

                      ${escapeHtml(badge)}

                    </span>

                  `
                  : ""
              }

              <span
                class="resource-html-arrow"
                aria-hidden="true"
              >
                ›
              </span>

            </button>

          `;

        }
      )
      .join("");


  return `

    <div
      class="outside-resource-buttons"
    >

      ${buttons}

    </div>

  `;

}


/* =========================================================
   BUILD TOPIC BUTTONS
========================================================= */

function buildTopicButtons(
  step
) {

  return step.topics
    .map(
      (
        topic,
        topicIndex
      ) => {

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

            ${escapeHtml(
              getTopicLabel(
                topic
              )
            )}

          </button>

        `;

      }
    )
    .join("");

}


/* =========================================================
   BUILD SLIDE IMAGE MARKUP
========================================================= */

function buildSlideImages(
  images
) {

  if (
    !Array.isArray(images) ||
    images.length === 0
  ) {

    return "";
  }


  return images
    .map(
      (
        image,
        imageIndex
      ) => {

        return `

          <img
            src="${image}"
            class="slide-image"
            data-content-image
            data-image-index="${imageIndex}"
            alt=""
          >

        `;

      }
    )
    .join("");

}


/* =========================================================
   BUILD SLIDES
========================================================= */

function buildSlides(
  step
) {

  return step.topics
    .map(
      (
        topic,
        topicIndex
      ) => {

        const images =
          getTopicImages(
            step,
            topic,
            topicIndex
          );


        const imageMarkup =
          buildSlideImages(
            images
          );


        const placeholderTitle =
          currentLanguage === "th"
            ? "เพิ่มรูปคู่มือได้หลายรูป"
            : "Add Multiple Guide Images";


        const placeholderText =
          currentLanguage === "th"
            ? "เลื่อนขึ้น–ลงเพื่อดูเนื้อหาทั้งหมด"
            : "Scroll up and down to view all content";


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

                ${imageMarkup}

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

}


/* =========================================================
   BUILD STEP NAVIGATION
========================================================= */

function buildStepNavigation(
  stepIndex
) {

  const previousStep =
    steps[
      stepIndex - 1
    ];


  const nextStep =
    steps[
      stepIndex + 1
    ];


  const previousButton =
    previousStep
      ? `

        <button
          class="previous-step"
          type="button"
          data-step-go="${previousStep.id}"
        >

          ←

          <span>

            ${
              currentLanguage === "th"
                ? "ขั้นตอนก่อนหน้า"
                : "Previous Step"
            }

          </span>

        </button>

      `
      : "<div></div>";


  const nextButton =
    nextStep
      ? `

        <button
          class="next-step"
          type="button"
          data-step-go="${nextStep.id}"
        >

          <span>

            ${
              currentLanguage === "th"
                ? "ขั้นตอนถัดไป"
                : "Next Step"
            }

          </span>

          →

        </button>

      `
      : "<div></div>";


  return `

    <div
      class="step-nav"
    >

      ${previousButton}

      ${nextButton}

    </div>

  `;

}


/* =========================================================
   BUILD MANUAL
========================================================= */

function buildManual() {

  const manual =
    document.getElementById(
      "manualContainer"
    );


  if (!manual) {
    return;
  }


  manual.innerHTML =
    "";


  steps.forEach(
    (
      step,
      stepIndex
    ) => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "step-card";


      card.id =
        step.id;


      const topicButtons =
        buildTopicButtons(
          step
        );


      const outsideResources =
        buildOutsideResources(
          step
        );


      const slides =
        buildSlides(
          step
        );


      const navigation =
        buildStepNavigation(
          stepIndex
        );


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

              ${getStepTitle(step)}

            </h2>

            <p>

              ${getStepDescription(step)}

            </p>

          </div>

          <div
            class="step-toggle"
          >

            <span
              class="step-toggle-text"
            >

              ${
                currentLanguage === "th"
                  ? "ดูรายละเอียด"
                  : "View details"
              }

            </span>

            <span
              class="step-toggle-icon"
              aria-hidden="true"
            >

              ▼

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

              ${
                currentLanguage === "th"
                  ? `คู่มือขั้นตอนที่ ${step.number}`
                  : `Step ${step.number} Guide`
              }

            </h3>


            <div
              class="manual-toolbar"
            >

              <div
                class="subnav"
              >

                ${topicButtons}

              </div>

              ${outsideResources}

            </div>


            <div
              class="manual-slider"
              data-slider
              data-step-id="${step.id}"
            >

              <button
                class="slider-button prev"
                type="button"
                aria-label="Previous"
              >
                ‹
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


              <button
                class="slider-button next"
                type="button"
                aria-label="Next"
              >
                ›
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

            </div>


            ${navigation}

          </div>

        </div>

      `;


      manual.appendChild(
        card
      );

    }
  );


  bindCardEvents();


  bindStepNavigation();


  bindOutsideResourceButtons();


  setupSliders();


  setupMissingImages();


  updateOpenCardHeight();

}


/* =========================================================
   CARD TOGGLE LABEL
========================================================= */

function updateCardToggle(
  card,
  isOpen
) {

  if (!card) {
    return;
  }


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

  document
    .querySelectorAll(
      ".step-card"
    )
    .forEach(
      (card) => {

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


            if (isOpen) {

              closeCard(
                card
              );

              return;

            }


            openCard(
              card
            );

          }
        );

      }
    );

}


/* =========================================================
   OPEN CARD
========================================================= */

function openCard(
  card
) {

  if (!card) {
    return;
  }


  document
    .querySelectorAll(
      ".step-card.open"
    )
    .forEach(
      (openCardElement) => {

        if (
          openCardElement !==
          card
        ) {

          closeCard(
            openCardElement
          );

        }

      }
    );


  card.classList.add(
    "open"
  );


  updateCardToggle(
    card,
    true
  );


  const content =
    card.querySelector(
      ".step-content"
    );


  if (content) {

    requestAnimationFrame(
      () => {

        content.style.maxHeight =
          `${content.scrollHeight}px`;

      }
    );

  }


  updateJourneyProgress(
    card.id
  );

}


/* =========================================================
   CLOSE CARD
========================================================= */

function closeCard(
  card
) {

  if (!card) {
    return;
  }


  card.classList.remove(
    "open"
  );


  updateCardToggle(
    card,
    false
  );


  const content =
    card.querySelector(
      ".step-content"
    );


  if (content) {

    content.style.maxHeight =
      null;

  }

}
/* =========================================================
   STEP NAVIGATION
========================================================= */

function bindStepNavigation() {

  document
    .querySelectorAll(
      "[data-step-go]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          (event) => {

            event.preventDefault();

            event.stopPropagation();


            const stepId =
              button.dataset.stepGo;


            goToStep(
              stepId
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
  stepId
) {

  const card =
    document.getElementById(
      stepId
    );


  if (!card) {
    return;
  }


  openCard(
    card
  );


  const topbar =
    document.querySelector(
      ".topbar"
    );


  const headerHeight =
    topbar
      ? topbar.offsetHeight
      : 0;


  const top =
    card
      .getBoundingClientRect()
      .top +
    window.scrollY -
    headerHeight -
    16;


  window.scrollTo({

    top:
      Math.max(
        0,
        top
      ),

    behavior:
      "smooth"

  });

}


/* =========================================================
   JOURNEY PROGRESS
========================================================= */

function updateJourneyProgress(
  stepId
) {

  const index =
    getCurrentStepIndex(
      stepId
    );


  if (
    index < 0
  ) {
    return;
  }


  const sideSteps =
    Array.from(
      document.querySelectorAll(
        ".side-step"
      )
    );


  const sideButtons =
    Array.from(
      document.querySelectorAll(
        ".side-button"
      )
    );


  sideSteps.forEach(
    (
      wrapper,
      wrapperIndex
    ) => {

      wrapper.classList.toggle(
        "completed",
        wrapperIndex <= index
      );

    }
  );


  sideButtons.forEach(
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


  keepActiveSidebarVisible();

}


/* =========================================================
   KEEP ACTIVE SIDEBAR VISIBLE
========================================================= */

function keepActiveSidebarVisible() {

  const sidebar =
    document.getElementById(
      "stepSidebar"
    );


  const activeButton =
    document.querySelector(
      ".side-button.active"
    );


  if (
    !sidebar ||
    !activeButton
  ) {
    return;
  }


  if (
    window.matchMedia(
      "(max-width: 760px)"
    ).matches
  ) {

    activeButton.scrollIntoView({

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
   OUTSIDE RESOURCE BUTTON EVENTS
========================================================= */

function bindOutsideResourceButtons() {

  document
    .querySelectorAll(
      "[data-outside-resource]"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          (event) => {

            event.preventDefault();

            event.stopPropagation();


            const stepId =
              button.dataset.stepId;


            const resourceId =
              button.dataset
                .outsideResource;


            const step =
              getStepById(
                stepId
              );


            if (!step) {
              return;
            }


            const resource =
              step.outsideResources
                ?.find(
                  (item) =>
                    item.id ===
                    resourceId
                );


            if (!resource) {
              return;
            }


            openOutsideResource(
              resource
            );

          }
        );

      }
    );

}


/* =========================================================
   OPEN OUTSIDE RESOURCE
========================================================= */

function openOutsideResource(
  resource
) {

  if (!resource) {
    return;
  }


  /* -------------------------------------------------------
     TYPE: EXTERNAL
     Example:
     CareSense VDO -> Google Drive
  ------------------------------------------------------- */

  if (
    resource.type ===
    "external"
  ) {

    const url =
      resource.url;


    if (!url) {
      return;
    }


    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );


    return;

  }


  /* -------------------------------------------------------
     TYPE: LANGUAGE IMAGE
     Example:
     Step 06 CareSense Info
     Step 07 GI
  ------------------------------------------------------- */

  if (
    resource.type ===
    "language-image"
  ) {

    const target =
      currentLanguage === "th"
        ? resource.targetTH
        : resource.targetEN;


    if (!target) {
      return;
    }


    openImageViewer(
      [
        target
      ],
      currentLanguage === "th"
        ? resource.titleTH
        : resource.titleEN
    );


    return;

  }


  /* -------------------------------------------------------
     TYPE: IMAGE VIEWER
     Example:
     Food Exchange
     -1 and -2 continue vertically
  ------------------------------------------------------- */

  if (
    resource.type ===
    "image-viewer"
  ) {

    const images =
      currentLanguage === "th"
        ? resource.imagesTH
        : resource.imagesEN;


    if (
      !Array.isArray(
        images
      ) ||
      images.length === 0
    ) {

      return;
    }


    openImageViewer(
      images,
      currentLanguage === "th"
        ? resource.titleTH
        : resource.titleEN
    );

  }

}


/* =========================================================
   OPEN IMAGE VIEWER
========================================================= */

function openImageViewer(
  images,
  title
) {

  if (
    !Array.isArray(
      images
    ) ||
    images.length === 0
  ) {

    return;

  }


  const viewerWindow =
    window.open(
      "",
      "_blank"
    );


  if (!viewerWindow) {
    return;
  }


  const safeTitle =
    escapeHtml(
      title ||
      "P8 Resource"
    );


  const imageMarkup =
    images
      .map(
        (
          image,
          index
        ) => {

          return `

            <img
              src="${image}"
              alt="${safeTitle} ${index + 1}"
              class="resource-viewer-image"
            >

          `;

        }
      )
      .join("");


  viewerWindow.document.write(`

    <!DOCTYPE html>

    <html lang="${currentLanguage}">

    <head>

      <meta charset="UTF-8">

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      >

      <title>
        ${safeTitle}
      </title>

      <style>

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #eef7fb;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            "Noto Sans Thai",
            Arial,
            sans-serif;
          color: #153a63;
        }

        .resource-viewer-header {
          position: sticky;
          top: 0;
          z-index: 10;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;

          padding: 14px 18px;

          background:
            rgba(255,255,255,.96);

          border-bottom:
            1px solid #d7edf5;

          box-shadow:
            0 7px 18px rgba(38,91,123,.08);

          backdrop-filter:
            blur(10px);
        }

        .resource-viewer-title {
          min-width: 0;

          font-size: 17px;
          font-weight: 900;
          line-height: 1.35;

          overflow-wrap: anywhere;
        }

        .resource-viewer-close {
          flex: 0 0 auto;

          min-width: 82px;
          min-height: 40px;

          padding: 8px 14px;

          border:
            1px solid #bde5e3;

          border-radius: 999px;

          background:
            linear-gradient(
              145deg,
              #ffffff,
              #efffff
            );

          color: #1576b7;

          font-family: inherit;
          font-size: 13px;
          font-weight: 850;

          cursor: pointer;
        }

        .resource-viewer-main {
          width:
            min(
              1180px,
              calc(100% - 24px)
            );

          margin:
            18px auto 50px;

          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 0;
        }

        .resource-viewer-image {
          display: block;

          width: 100%;
          max-width: 100%;
          height: auto;

          margin: 0;

          object-fit: contain;

          background: white;
        }

        @media (max-width: 760px) {

          .resource-viewer-header {
            padding:
              10px 12px;
          }

          .resource-viewer-title {
            font-size:
              14px;
          }

          .resource-viewer-close {
            min-width:
              64px;

            min-height:
              36px;

            padding:
              7px 10px;

            font-size:
              12px;
          }

          .resource-viewer-main {
            width:
              100%;

            margin:
              0 auto 30px;
          }

        }

      </style>

    </head>

    <body>

      <header
        class="resource-viewer-header"
      >

        <div
          class="resource-viewer-title"
        >
          ${safeTitle}
        </div>

        <button
          class="resource-viewer-close"
          type="button"
          onclick="window.close()"
        >
          ${
            currentLanguage === "th"
              ? "ปิด"
              : "Close"
          }
        </button>

      </header>


      <main
        class="resource-viewer-main"
      >

        ${imageMarkup}

      </main>

    </body>

    </html>

  `);


  viewerWindow.document.close();

}


/* =========================================================
   SLIDERS
========================================================= */

function setupSliders() {

  sliderStates.clear();


  document
    .querySelectorAll(
      "[data-slider]"
    )
    .forEach(
      (slider) => {

        const card =
          slider.closest(
            ".step-card"
          );


        if (!card) {
          return;
        }


        const stepId =
          slider.dataset.stepId;


        const slides =
          Array.from(
            slider.querySelectorAll(
              ".slide"
            )
          );


        const subnavButtons =
          Array.from(
            card.querySelectorAll(
              ".subnav-btn"
            )
          );


        const prevButton =
          slider.querySelector(
            ".slider-button.prev"
          );


        const nextButton =
          slider.querySelector(
            ".slider-button.next"
          );


        const currentSlide =
          slider.querySelector(
            ".current-slide"
          );


        const totalSlides =
          slider.querySelector(
            ".total-slides"
          );


        const dotsContainer =
          slider.querySelector(
            ".slider-dots"
          );


        const state = {

          stepId,

          activeIndex:
            0,

          slides,

          subnavButtons,

          prevButton,

          nextButton,

          currentSlide,

          totalSlides,

          dotsContainer

        };


        sliderStates.set(
          stepId,
          state
        );


        if (totalSlides) {

          totalSlides.textContent =
            String(
              slides.length
            );

        }


        /* -------------------------------------------------
           BUILD DOTS
        ------------------------------------------------- */

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
                    state,
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


        /* -------------------------------------------------
           SUBNAV CLICK
        ------------------------------------------------- */

        subnavButtons.forEach(
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
                  state,
                  index
                );

              }
            );

          }
        );


        /* -------------------------------------------------
           PREVIOUS
        ------------------------------------------------- */

        if (prevButton) {

          prevButton.addEventListener(
            "click",
            (event) => {

              event.preventDefault();

              event.stopPropagation();


              const nextIndex =
                Math.max(
                  0,
                  state.activeIndex - 1
                );


              showSlide(
                state,
                nextIndex
              );

            }
          );

        }


        /* -------------------------------------------------
           NEXT
        ------------------------------------------------- */

        if (nextButton) {

          nextButton.addEventListener(
            "click",
            (event) => {

              event.preventDefault();

              event.stopPropagation();


              const nextIndex =
                Math.min(
                  state.slides.length - 1,
                  state.activeIndex + 1
                );


              showSlide(
                state,
                nextIndex
              );

            }
          );

        }


        showSlide(
          state,
          0
        );

      }
    );

}


/* =========================================================
   SHOW SLIDE
========================================================= */

function showSlide(
  state,
  index
) {

  if (
    !state ||
    index < 0 ||
    index >= state.slides.length
  ) {

    return;

  }


  state.activeIndex =
    index;


  state.slides.forEach(
    (
      slide,
      slideIndex
    ) => {

      slide.classList.toggle(
        "active",
        slideIndex === index
      );

    }
  );


  state.subnavButtons
    .forEach(
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


  const card =
    state.slides[0]
      ?.closest(
        ".step-card"
      );


  const dots =
    card
      ? Array.from(
          card.querySelectorAll(
            ".slider-dot"
          )
        )
      : [];


  dots.forEach(
    (
      dot,
      dotIndex
    ) => {

      dot.classList.toggle(
        "active",
        dotIndex === index
      );

    }
  );


  if (
    state.currentSlide
  ) {

    state.currentSlide.textContent =
      String(
        index + 1
      );

  }


  if (
    state.prevButton
  ) {

    state.prevButton.disabled =
      index === 0;

  }


  if (
    state.nextButton
  ) {

    state.nextButton.disabled =
      index ===
      state.slides.length - 1;

  }


  const activeSlide =
    state.slides[
      index
    ];


  const scrollArea =
    activeSlide
      ?.querySelector(
        ".slide-scroll"
      );


  if (scrollArea) {

    scrollArea.scrollTop =
      0;

  }


  requestAnimationFrame(
    () => {

      updateOpenCardHeight();

    }
  );

}
/* =========================================================
   MISSING IMAGE HANDLING
========================================================= */

function setupMissingImages() {

  const images =
    document.querySelectorAll(
      "img[data-content-image]"
    );


  images.forEach(
    (image) => {

      const handleImageError =
        () => {

          image.classList.add(
            "image-missing"
          );


          const slide =
            image.closest(
              ".slide"
            );


          if (!slide) {
            return;
          }


          const placeholder =
            slide.querySelector(
              ".slide-placeholder"
            );


          if (placeholder) {

            placeholder.classList.add(
              "show"
            );

          }


          updateOpenCardHeight();

        };


      const handleImageLoad =
        () => {

          image.classList.remove(
            "image-missing"
          );


          const slide =
            image.closest(
              ".slide"
            );


          if (!slide) {
            return;
          }


          const validImages =
            Array.from(
              slide.querySelectorAll(
                "img[data-content-image]"
              )
            )
            .filter(
              (item) =>
                !item.classList.contains(
                  "image-missing"
                )
            );


          const placeholder =
            slide.querySelector(
              ".slide-placeholder"
            );


          if (
            placeholder &&
            validImages.length > 0
          ) {

            placeholder.classList.remove(
              "show"
            );

          }


          updateOpenCardHeight();

        };


      image.addEventListener(
        "error",
        handleImageError
      );


      image.addEventListener(
        "load",
        handleImageLoad
      );


      if (
        image.complete
      ) {

        if (
          image.naturalWidth === 0
        ) {

          handleImageError();

        } else {

          handleImageLoad();

        }

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


  image.addEventListener(
    "error",
    () => {

      image.style.display =
        "none";

    }
  );

}


/* =========================================================
   OPEN CARD HEIGHT
========================================================= */

function updateOpenCardHeight() {

  document
    .querySelectorAll(
      ".step-card.open"
    )
    .forEach(
      (card) => {

        const content =
          card.querySelector(
            ".step-content"
          );


        if (!content) {
          return;
        }


        content.style.maxHeight =
          `${content.scrollHeight}px`;

      }
    );

}


/* =========================================================
   LANGUAGE SWITCH
========================================================= */

function setupLanguageSwitch() {

  const buttons =
    document.querySelectorAll(
      ".lang-btn"
    );


  buttons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const language =
            button.dataset.lang;


          if (
            language !== "th" &&
            language !== "en"
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
   SET LANGUAGE
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


  /* -------------------------------------------------------
     SAVE CURRENT OPEN STEP
  ------------------------------------------------------- */

  const openCard =
    document.querySelector(
      ".step-card.open"
    );


  const openStepId =
    openCard
      ? openCard.id
      : null;


  /* -------------------------------------------------------
     SAVE CURRENT SLIDE OF EACH STEP
  ------------------------------------------------------- */

  const oldSliderIndexes =
    new Map();


  sliderStates.forEach(
    (
      state,
      stepId
    ) => {

      oldSliderIndexes.set(
        stepId,
        state.activeIndex
      );

    }
  );


  currentLanguage =
    language;


  document.documentElement.lang =
    language;


  /* -------------------------------------------------------
     LANGUAGE BUTTON STATE
  ------------------------------------------------------- */

  document
    .querySelectorAll(
      ".lang-btn"
    )
    .forEach(
      (button) => {

        button.classList.toggle(
          "active",
          button.dataset.lang ===
            language
        );

      }
    );


  /* -------------------------------------------------------
     STATIC DATA-TH / DATA-EN TEXT
  ------------------------------------------------------- */

  document
    .querySelectorAll(
      "[data-th][data-en]"
    )
    .forEach(
      (element) => {

        const value =
          language === "th"
            ? element.dataset.th
            : element.dataset.en;


        if (
          value.includes("|")
        ) {

          element.innerHTML =
            value
              .split("|")
              .map(
                (line) =>
                  escapeHtml(
                    line
                  )
              )
              .join("<br>");

        } else {

          element.innerHTML =
            value;

        }

      }
    );


  /* -------------------------------------------------------
     REBUILD DYNAMIC AREA
  ------------------------------------------------------- */

  buildSidebar();

  buildManual();


  /* -------------------------------------------------------
     RESTORE SLIDE POSITIONS
  ------------------------------------------------------- */

  oldSliderIndexes.forEach(
    (
      slideIndex,
      stepId
    ) => {

      const state =
        sliderStates.get(
          stepId
        );


      if (!state) {
        return;
      }


      const safeIndex =
        Math.min(
          slideIndex,
          state.slides.length - 1
        );


      showSlide(
        state,
        Math.max(
          0,
          safeIndex
        )
      );

    }
  );


  /* -------------------------------------------------------
     RESTORE OPEN STEP
  ------------------------------------------------------- */

  if (openStepId) {

    const restoredCard =
      document.getElementById(
        openStepId
      );


    if (restoredCard) {

      openCard(
        restoredCard
      );

    }

  } else {

    updateJourneyProgress(
      "step01"
    );

  }


  /* -------------------------------------------------------
     SAVE LANGUAGE
  ------------------------------------------------------- */

  try {

    localStorage.setItem(
      "p8Language",
      language
    );

  } catch (error) {

    /* localStorage unavailable */

  }


  updateBackTopLabel();

}


/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

function getInitialLanguage() {

  try {

    const savedLanguage =
      localStorage.getItem(
        "p8Language"
      );


    if (
      savedLanguage === "th" ||
      savedLanguage === "en"
    ) {

      return savedLanguage;

    }

  } catch (error) {

    /* localStorage unavailable */

  }


  return "th";

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

function setupResizeHandling() {

  let resizeTimer =
    null;


  window.addEventListener(
    "resize",
    () => {

      window.clearTimeout(
        resizeTimer
      );


      resizeTimer =
        window.setTimeout(
          () => {

            updateOpenCardHeight();

          },
          100
        );

    }
  );


  window.addEventListener(
    "orientationchange",
    () => {

      window.setTimeout(
        () => {

          updateOpenCardHeight();

        },
        150
      );

    }
  );

}


/* =========================================================
   IMAGE LOAD HEIGHT REFRESH
========================================================= */

function setupGlobalImageLoadHandling() {

  document.addEventListener(
    "load",
    (event) => {

      if (
        event.target &&
        event.target.tagName ===
          "IMG"
      ) {

        updateOpenCardHeight();

      }

    },
    true
  );

}


/* =========================================================
   ACTIVE STEP FROM SCROLL
========================================================= */

function setupScrollStepTracking() {

  let ticking =
    false;


  const updateFromScroll =
    () => {

      ticking =
        false;


      const topbar =
        document.querySelector(
          ".topbar"
        );


      const headerHeight =
        topbar
          ? topbar.offsetHeight
          : 0;


      const threshold =
        headerHeight +
        130;


      let activeStep =
        steps[0]?.id ||
        "step01";


      steps.forEach(
        (step) => {

          const card =
            document.getElementById(
              step.id
            );


          if (!card) {
            return;
          }


          const rect =
            card.getBoundingClientRect();


          if (
            rect.top <= threshold
          ) {

            activeStep =
              step.id;

          }

        }
      );


      updateJourneyProgress(
        activeStep
      );

    };


  window.addEventListener(
    "scroll",
    () => {

      if (ticking) {
        return;
      }


      ticking =
        true;


      window.requestAnimationFrame(
        updateFromScroll
      );

    },
    {
      passive: true
    }
  );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function setupBackToTop() {

  const button =
    document.getElementById(
      "backTop"
    );


  if (!button) {
    return;
  }


  updateBackTopLabel();


  const updateVisibility =
    () => {

      button.classList.toggle(
        "show",
        window.scrollY > 450
      );

    };


  window.addEventListener(
    "scroll",
    updateVisibility,
    {
      passive: true
    }
  );


  button.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior:
          "smooth"

      });

    }
  );


  updateVisibility();

}


/* =========================================================
   BACK TO TOP ACCESSIBILITY LABEL
========================================================= */

function updateBackTopLabel() {

  const button =
    document.getElementById(
      "backTop"
    );


  if (!button) {
    return;
  }


  button.setAttribute(
    "aria-label",
    currentLanguage === "th"
      ? "กลับขึ้นด้านบน"
      : "Back to top"
  );


  button.setAttribute(
    "title",
    currentLanguage === "th"
      ? "กลับขึ้นด้านบน"
      : "Back to top"
  );

}


/* =========================================================
   KEYBOARD SUPPORT
========================================================= */

function setupKeyboardNavigation() {

  document.addEventListener(
    "keydown",
    (event) => {

      const activeElement =
        document.activeElement;


      if (
        activeElement &&
        (
          activeElement.tagName ===
            "INPUT" ||
          activeElement.tagName ===
            "TEXTAREA" ||
          activeElement.tagName ===
            "SELECT"
        )
      ) {

        return;

      }


      const openCard =
        document.querySelector(
          ".step-card.open"
        );


      if (!openCard) {
        return;
      }


      const state =
        sliderStates.get(
          openCard.id
        );


      if (!state) {
        return;
      }


      if (
        event.key ===
        "ArrowLeft"
      ) {

        const nextIndex =
          Math.max(
            0,
            state.activeIndex - 1
          );


        showSlide(
          state,
          nextIndex
        );

      }


      if (
        event.key ===
        "ArrowRight"
      ) {

        const nextIndex =
          Math.min(
            state.slides.length - 1,
            state.activeIndex + 1
          );


        showSlide(
          state,
          nextIndex
        );

      }

    }
  );

}


/* =========================================================
   TOUCH SWIPE SUPPORT
========================================================= */

function setupTouchSwipe() {

  document
    .querySelectorAll(
      ".slider-viewport"
    )
    .forEach(
      (viewport) => {

        let startX =
          0;


        let startY =
          0;


        let isTracking =
          false;


        viewport.addEventListener(
          "touchstart",
          (event) => {

            if (
              event.touches.length !== 1
            ) {
              return;
            }


            startX =
              event.touches[0]
                .clientX;


            startY =
              event.touches[0]
                .clientY;


            isTracking =
              true;

          },
          {
            passive: true
          }
        );


        viewport.addEventListener(
          "touchend",
          (event) => {

            if (
              !isTracking ||
              event.changedTouches.length !==
                1
            ) {
              return;
            }


            isTracking =
              false;


            const endX =
              event.changedTouches[0]
                .clientX;


            const endY =
              event.changedTouches[0]
                .clientY;


            const deltaX =
              endX -
              startX;


            const deltaY =
              endY -
              startY;


            /*
              Vertical scrolling should stay normal.
              Only treat clear horizontal movement as swipe.
            */

            if (
              Math.abs(deltaX) <
                55 ||
              Math.abs(deltaX) <=
                Math.abs(deltaY)
            ) {

              return;

            }


            const slider =
              viewport.closest(
                "[data-slider]"
              );


            const stepId =
              slider?.dataset.stepId;


            if (!stepId) {
              return;
            }


            const state =
              sliderStates.get(
                stepId
              );


            if (!state) {
              return;
            }


            if (
              deltaX < 0
            ) {

              showSlide(
                state,
                Math.min(
                  state.slides.length - 1,
                  state.activeIndex + 1
                )
              );

            } else {

              showSlide(
                state,
                Math.max(
                  0,
                  state.activeIndex - 1
                )
              );

            }

          },
          {
            passive: true
          }
        );

      }
    );

}


/* =========================================================
   UPDATE TOUCH SWIPE AFTER REBUILD
========================================================= */

function refreshTouchSwipe() {

  setupTouchSwipe();

}
/* =========================================================
   INITIALIZE
========================================================= */

function initializeP8Manual() {

  /* -------------------------------------------------------
     INITIAL LANGUAGE
  ------------------------------------------------------- */

  currentLanguage =
    getInitialLanguage();


  document.documentElement.lang =
    currentLanguage;


  /* -------------------------------------------------------
     STATIC LANGUAGE TEXT
  ------------------------------------------------------- */

  document
    .querySelectorAll(
      "[data-th][data-en]"
    )
    .forEach(
      (element) => {

        const value =
          currentLanguage === "th"
            ? element.dataset.th
            : element.dataset.en;


        if (
          value.includes("|")
        ) {

          element.innerHTML =
            value
              .split("|")
              .map(
                (line) =>
                  escapeHtml(
                    line
                  )
              )
              .join("<br>");

        } else {

          element.innerHTML =
            value;

        }

      }
    );


  /* -------------------------------------------------------
     LANGUAGE BUTTON STATE
  ------------------------------------------------------- */

  document
    .querySelectorAll(
      ".lang-btn"
    )
    .forEach(
      (button) => {

        button.classList.toggle(
          "active",
          button.dataset.lang ===
            currentLanguage
        );

      }
    );


  /* -------------------------------------------------------
     BUILD CONTENT
  ------------------------------------------------------- */

  buildSidebar();

  buildManual();


  /* -------------------------------------------------------
     SET FIRST STEP AS ACTIVE PATH
  ------------------------------------------------------- */

  updateJourneyProgress(
    "step01"
  );


  /* -------------------------------------------------------
     EVENTS
  ------------------------------------------------------- */

  setupLanguageSwitch();

  setupResizeHandling();

  setupGlobalImageLoadHandling();

  setupScrollStepTracking();

  setupBackToTop();

  setupKeyboardNavigation();

  refreshTouchSwipe();


  /* -------------------------------------------------------
     HEIGHT REFRESH AFTER LOAD
  ------------------------------------------------------- */

  window.setTimeout(
    () => {

      updateOpenCardHeight();

    },
    100
  );


  window.setTimeout(
    () => {

      updateOpenCardHeight();

    },
    500
  );

}


/* =========================================================
   DOM READY
========================================================= */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    () => {

      initializeP8Manual();

    }
  );

} else {

  initializeP8Manual();

}


/* =========================================================
   PAGE FULL LOAD
========================================================= */

window.addEventListener(
  "load",
  () => {

    updateOpenCardHeight();

  }
);


/* =========================================================
   HASH SUPPORT
========================================================= */

window.addEventListener(
  "hashchange",
  () => {

    const stepId =
      window.location.hash
        .replace(
          "#",
          ""
        );


    if (
      getStepById(
        stepId
      )
    ) {

      goToStep(
        stepId
      );

    }

  }
);


/* =========================================================
   OPEN STEP FROM URL HASH ON FIRST LOAD
========================================================= */

window.addEventListener(
  "load",
  () => {

    const stepId =
      window.location.hash
        .replace(
          "#",
          ""
        );


    if (
      stepId &&
      getStepById(
        stepId
      )
    ) {

      window.setTimeout(
        () => {

          goToStep(
            stepId
          );

        },
        180
      );

    }

  }
);


/* =========================================================
   RE-CALCULATE HEIGHT WHEN FONTS ARE READY
========================================================= */

if (
  document.fonts &&
  document.fonts.ready
) {

  document.fonts.ready
    .then(
      () => {

        updateOpenCardHeight();

      }
    )
    .catch(
      () => {

        /* No action required */

      }
    );

}


/* =========================================================
   END
========================================================= */