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

// Approved source: https://docs.google.com/document/d/1BzELARn-08ygePD0YIJcTCsQg3xqHjz1riEmH6B-y9Q/edit
// EN image paths currently contain approved temporary Thai copies.
const steps = [
  {
    "id": "step01",
    "number": "01",
    "icon": "Image/Icon-1.png",
    "pathTH": "อุปกรณ์ในชุด",
    "pathEN": "P8 Set",
    "titleTH": "รู้จักอุปกรณ์ในชุด P8",
    "titleEN": "Getting to Know Your P8 Set",
    "descriptionTH": "อุปกรณ์ทั้งหมดที่ได้รับในชุด และหน้าที่ของอุปกรณ์แต่ละชิ้น",
    "descriptionEN": "Learn what is included in the P8 set and the function of each item.",
    "playlistsTH": [
      {
        "label": "ดูวิดีโอการใช้งานปุ่ม P8 ทั้งหมด",
        "url": "https://www.youtube.com/playlist?list=PLK0_7laFrXHsB09aJO9i8_afr6iOnw9qj"
      }
    ],
    "playlistsEN": [
      {
        "label": "Watch All P8 Button Videos",
        "url": "https://www.youtube.com/playlist?list=PLK0_7laFrXHur2GZmAqiw-iyFA71XR2dR"
      }
    ],
    "topics": [
      {
        "th": "ชุดอุปกรณ์ P8",
        "en": "P8 Kit",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/01-รู้จักอุปกรณ์ในชุด P8/1.1ชุดอุปกรณ์ P8/ชุดอุปกรณ์ P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/01-Get to Know the P8 Kit Components/1.1P8 Kit Components/P8 Kit Components.png"
        ],
        "id": "1.1"
      },
      {
        "th": "ความเข้ากันได้",
        "en": "Compatibility",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/01-รู้จักอุปกรณ์ในชุด P8/1.2ความเข้ากันได้/ความเข้ากันได้.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/01-Get to Know the P8 Kit Components/1.2Compatibility/Compatibility.png"
        ],
        "id": "1.2"
      },
      {
        "th": "โครงสร้าง P8",
        "en": "P8 Structure",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/01-รู้จักอุปกรณ์ในชุด P8/1.3โครงสร้าง P8/โครงสร้าง P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/01-Get to Know the P8 Kit Components/1.3P8 Structure/P8 Structure.png"
        ],
        "id": "1.3"
      },
      {
        "th": "การทำงานของปุ่ม",
        "en": "Button Functions",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/01-รู้จักอุปกรณ์ในชุด P8/1.4การทำงานของปุ่ม/การทำงานของปุ่ม.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/01-Get to Know the P8 Kit Components/1.4Button Functions/Button Functions.png"
        ],
        "videosTH": [
          {
            "label": "ปุ่ม ACT",
            "url": "https://youtu.be/pwEQordbMbY"
          },
          {
            "label": "ปุ่ม M",
            "url": "https://youtu.be/KMm5-XTKStE"
          },
          {
            "label": "ปุ่มขึ้น",
            "url": "https://youtu.be/dSeXiwJDOSg"
          },
          {
            "label": "ปุ่มลง",
            "url": "https://youtu.be/vl7c41KUEsE"
          }
        ],
        "videosEN": [
          {
            "label": "ACT Button",
            "url": "https://youtu.be/kyB7ODIZg-g"
          },
          {
            "label": "M Button",
            "url": "https://youtu.be/JPgVrK4q72U"
          },
          {
            "label": "Up Button",
            "url": "https://youtu.be/7WjFhPyknaE"
          },
          {
            "label": "Down Button",
            "url": "https://youtu.be/gUtn9HHzXaw"
          }
        ],
        "id": "1.4"
      }
    ]
  },
  {
    "id": "step02",
    "number": "02",
    "icon": "Image/Icon-2.png",
    "pathTH": "โครงสร้าง P8",
    "pathEN": "P8 Structure",
    "titleTH": "โครงสร้างและเมนูของ P8",
    "titleEN": "P8 Structure and Menu",
    "descriptionTH": "โครงสร้างตัวปากกาและหน้าจอ → ปุ่มต่าง ๆ → โครงสร้างเมนูหลัก",
    "descriptionEN": "Pen structure and display → Buttons → Main menu structure",
    "playlistsTH": [
      {
        "label": "ดูวิดีโอโครงสร้างเมนูหลักทั้งหมด",
        "url": "https://www.youtube.com/playlist?list=PLdHbhasR9Z0Q"
      }
    ],
    "playlistsEN": [
      {
        "label": "Watch All P8 Main Menu Videos",
        "url": "https://www.youtube.com/playlist?list=PLJ6bip0RLwoY"
      }
    ],
    "topics": [
      {
        "th": "โครงสร้างหน้าจอ",
        "en": "Screen Structure",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/02-โครงสร้างและเมนูของ P8/2.1โครงสร้างหน้าจอ P8/โครงสร้างหน้าจอ P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/02-P8 Structure and Menus/2.1P8 Screen Layout/P8 Screen Layout.png"
        ],
        "id": "2.1"
      },
      {
        "th": "โครงสร้างเมนูหลัก",
        "en": "Main Menu Structure",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/02-โครงสร้างและเมนูของ P8/2.2โครงสร้างเมนูหลัก P8/โครงสร้างเมนูหลัก P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/02-P8 Structure and Menus/2.2P8 Main Menu Structure/P8 Main Menu Structure.png"
        ],
        "videosTH": [
          {
            "label": "การไล่อากาศ (Prime)",
            "url": "https://youtu.be/jYa3aL6ZxUI"
          },
          {
            "label": "การเปลี่ยนคาร์ทริดจ์ (Cartridge)",
            "url": "https://youtu.be/wN7_6W2rjNM"
          },
          {
            "label": "ความเร็วในการฉีดอินซูลิน (INJ Speed)",
            "url": "https://youtu.be/E5F3Pev88aY"
          },
          {
            "label": "ข้อมูลของ P8 (Info)",
            "url": "https://youtu.be/dBwcGnP7lEY"
          },
          {
            "label": "การตั้งค่า: ระดับเสียง",
            "url": "https://youtu.be/HsK91yF7f3Q"
          },
          {
            "label": "การตั้งค่า: วันที่และเวลา",
            "url": "https://youtu.be/0rj1MOjaHjY"
          },
          {
            "label": "การตั้งค่า: ภาษา",
            "url": "https://youtu.be/-gvyLtLWWr4"
          },
          {
            "label": "การตั้งค่า: ระยะเวลาเปิดหน้าจอ",
            "url": "https://youtu.be/EH8nfVZVNOU"
          },
          {
            "label": "การตั้งค่า: บลูทูธ",
            "url": "https://youtu.be/44AvdYObZUc"
          },
          {
            "label": "การตั้งค่า: หน่วยอุณหภูมิ",
            "url": "https://youtu.be/2AbPUOW8B6M"
          }
        ],
        "videosEN": [
          {
            "label": "Prime",
            "url": "https://youtu.be/Lqz9efHSyi0"
          },
          {
            "label": "Cartridge",
            "url": "https://youtu.be/PGXhz9bLt-Q"
          },
          {
            "label": "INJ Speed",
            "url": "https://youtu.be/BShxfa6Igs0"
          },
          {
            "label": "Info",
            "url": "https://youtu.be/SoD2_G10eus"
          },
          {
            "label": "Settings: Volume",
            "url": "https://youtu.be/SoD2_G10eus"
          },
          {
            "label": "Settings: Date/Time",
            "url": "https://youtu.be/SbKFVA9x1W8"
          },
          {
            "label": "Settings: Language",
            "url": "https://youtu.be/lLw7hFQ2-nY"
          },
          {
            "label": "Settings: Screen Time",
            "url": "https://youtu.be/3wGtc7g0yRk"
          },
          {
            "label": "Settings: Bluetooth",
            "url": "https://youtu.be/dMslGt4CR8I"
          },
          {
            "label": "Settings: TEMP Unit",
            "url": "https://youtu.be/4gJSmth848Q"
          }
        ],
        "id": "2.2"
      }
    ]
  },
  {
    "id": "step03",
    "number": "03",
    "icon": "Image/Icon-3.png",
    "pathTH": "เปิด-ปิด & หน้าจอ P8",
    "pathEN": "Power On/Off P8 & Screen",
    "titleTH": "การเปิด-ปิด และการใช้งานหน้าจอ P8",
    "titleEN": "P8 Power On/Off and Screen Operation",
    "descriptionTH": "เปิดเครื่อง → ปิดเครื่อง → โหมดพักหน้าจอ → การปลุกหน้าจอ/กลับมาใช้งาน",
    "descriptionEN": "Power On → Power Off → Screen Saver Mode → Wake the Screen",
    "playlistsTH": [
      {
        "label": "เพลย์ลิสต์ การเปิดและปิดเครื่อง P8",
        "url": "https://www.youtube.com/playlist?list=PLKN0TWjoRZgk"
      },
      {
        "label": "เพลย์ลิสต์ โหมดพักหน้าจอ",
        "url": "https://www.youtube.com/playlist?list=PLJWJvd8uHbhw"
      }
    ],
    "playlistsEN": [
      {
        "label": "Power On/Off Playlist",
        "url": "https://www.youtube.com/playlist?list=PLOXnusFnxhtY"
      },
      {
        "label": "Screen Saver Playlist",
        "url": "https://www.youtube.com/playlist?list=PLV086eXSwm7E"
      }
    ],
    "topics": [
      {
        "th": "เปิด–ปิดและโหมดพักหน้าจอ",
        "en": "Power On/Off & Screen Saver",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/03-การเปิด-ปิดและการใช้งานหน้าจอ/3.1เปิด-ปิด และโหมดพักหน้อจอ P8/เปิด-ปิด และโหมดพักหน้อจอ P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/03-Power On:Off and Screen Operation/3.1P8 Power On:Off and Screen Sleep Mode/P8 Power On:Off and Screen Sleep Mode.png"
        ],
        "videosTH": [
          {
            "label": "การเปิดเครื่อง P8",
            "url": "https://youtu.be/JWE8sWQ2iNc"
          },
          {
            "label": "การปิดเครื่อง P8",
            "url": "https://youtu.be/nlT5HpFM-g0"
          },
          {
            "label": "โหมดพักหน้าจอ P8",
            "url": "https://youtu.be/9pj48slsEQg"
          }
        ],
        "videosEN": [
          {
            "label": "Power On the P8",
            "url": "https://youtu.be/KyTE_RDgj2U"
          },
          {
            "label": "Power Off the P8",
            "url": "https://youtu.be/hlUyCj4OiY0"
          },
          {
            "label": "Screen Saver Mode of P8",
            "url": "https://youtu.be/gDk6hvOkIpY"
          }
        ],
        "id": "3.1"
      }
    ]
  },
  {
    "id": "step04",
    "number": "04",
    "icon": "Image/Icon-4.png",
    "pathTH": "เชื่อมต่อแอป",
    "pathEN": "Connect App",
    "titleTH": "เชื่อมต่อและตั้งค่า P8 กับแอป DIA:CONN",
    "titleEN": "Connect and Set Up P8 with the DIA:CONN App",
    "descriptionTH": "ลงทะเบียนและจับคู่ P8 → เลิกจับคู่ P8 → ค้นหาปากกา → ตั้งค่าอุปกรณ์",
    "descriptionEN": "Register and Pair P8 → Unpair P8 → Find the Pen → Device Settings",
    "playlistsTH": [],
    "playlistsEN": [],
    "topics": [
      {
        "th": "ลงทะเบียนและจับคู่ปากกา P8",
        "en": "P8 Registration and Pairing",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.1ลงทะเบียนและจับคู่ปากกา P8/ลงทะเบียนและจับคู่ปากกา P8-1.png",
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.1ลงทะเบียนและจับคู่ปากกา P8/ลงทะเบียนและจับคู่ปากกา P8-2.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.1P8 Pen Registration and Pairing/P8 Pen Registration and Pairing-1.png",
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.1P8 Pen Registration and Pairing/P8 Pen Registration and Pairing-2.png"
        ],
        "videosTH": [
          {
            "label": "การลงทะเบียนและจับคู่ปากกา P8",
            "url": "https://youtu.be/uSYwPaVxmyA"
          }
        ],
        "videosEN": [
          {
            "label": "P8 Registration and Pairing",
            "url": "https://youtu.be/5FeWETUjhH8"
          }
        ],
        "id": "4.1"
      },
      {
        "th": "เลิกจับคู่ปากกา P8",
        "en": "Unpair the P8",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.2เลิกจับคู่ปากกา P8/เลิกจับคู่ปากกา P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.2Unpairing the P8 Pen/Unpairing the P8 Pen.png"
        ],
        "videosTH": [
          {
            "label": "เลิกจับคู่ปากกา P8",
            "url": "https://youtu.be/6hRcj-8iZFc"
          }
        ],
        "videosEN": [
          {
            "label": "Unpair the P8",
            "url": "https://youtu.be/hBqoP2WZXQc"
          }
        ],
        "id": "4.2"
      },
      {
        "th": "ค้นหาปากกา P8",
        "en": "Find the Pen",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.3ค้นหาปากกา P8/ค้นหาปากกา P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.3Find My P8 Pen/Find My P8 Pen.png"
        ],
        "videosTH": [
          {
            "label": "ค้นหาปากกา P8",
            "url": "https://youtu.be/-L8sHJbihy8"
          }
        ],
        "videosEN": [
          {
            "label": "Find the Pen",
            "url": "https://youtu.be/FHWBBa5GqrQ"
          }
        ],
        "id": "4.3"
      },
      {
        "th": "ตั้งค่าอุปกรณ์: ความเร็วในการฉีด",
        "en": "Device Settings: Injection Speed",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.4ตั้งค่าอุปกรณ์-ความเร็วในการฉีด/ตั้งค่าอุปกรณ์-ความเร็วในการฉีด.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.4Device Settings-Injection Speed/Device Settings-Injection Speed.png"
        ],
        "videosTH": [
          {
            "label": "การตั้งค่าอุปกรณ์: ความเร็วในการฉีดของ P8",
            "url": "https://youtu.be/SG5D4vj_3k4"
          }
        ],
        "videosEN": [
          {
            "label": "P8 Device Settings: Injection Speed",
            "url": "https://youtu.be/SQlcHqN86Tc"
          }
        ],
        "id": "4.4"
      },
      {
        "th": "ตั้งค่าอุปกรณ์: ระยะเวลารอหลังฉีดยา",
        "en": "Device Settings: Waiting Time After Injection",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.5ตั้งค่าอุปกรณ์-ระยะเวลารอหลังฉีดยา/ตั้งค่าอุปกรณ์-ระยะเวลารอหลังฉีดยา.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.5Device Settings-Post-Injection Hold Time/Device Settings-Post-Injection Hold Time.png"
        ],
        "videosTH": [
          {
            "label": "การตั้งค่าอุปกรณ์: ระยะเวลารอคอยหลังฉีดยาของ P8",
            "url": "https://youtu.be/jG0JA-J-lt4"
          }
        ],
        "videosEN": [
          {
            "label": "P8 Device Settings: Waiting Time After Injection",
            "url": "https://youtu.be/TKfuFk9iWLQ"
          }
        ],
        "id": "4.5"
      },
      {
        "th": "ตั้งค่าอุปกรณ์: จำกัดปริมาณอินซูลินสูงสุดต่อครั้ง",
        "en": "Device Settings: Single Dose Limit",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.6ตั้งค่าอุปกรณ์-จำกัดปริมาณอินซูลินสูงสุดต่อครั้ง/ตั้งค่าอุปกรณ์-จำกัดปริมาณอินซูลินสูงสุดต่อครั้ง.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.6Device Settings-Maximum Insulin Dose per Injection/4.6 Device Settings-Maximum Insulin Dose per Injection.png"
        ],
        "videosTH": [
          {
            "label": "การตั้งค่าอุปกรณ์: จำกัดปริมาณอินซูลินสูงสุดต่อครั้ง",
            "url": "https://youtu.be/mDe9GCXbnew"
          }
        ],
        "videosEN": [
          {
            "label": "P8 Device Settings: Single Dose Limit",
            "url": "https://youtu.be/4XaX7dLw270"
          }
        ],
        "id": "4.6"
      },
      {
        "th": "ตั้งค่าอุปกรณ์: อินซูลิน",
        "en": "Device Settings: Insulin",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/04-เชื่อมต่อและตั้งค่า P8 กับแอป DIACONN/4.7ตั้งค่าอุปกรณ์-อินซูลิน/ตั้งค่าอุปกรณ์-อินซูลิน.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/04-Connect and Set Up P8 with the DIACONN App/4.7 Device Settings-Insulin/4.7 Device Settings-Insulin.png"
        ],
        "videosTH": [
          {
            "label": "การตั้งค่าอุปกรณ์: อินซูลิน",
            "url": "https://youtu.be/XOT1KLINEuM"
          }
        ],
        "videosEN": [
          {
            "label": "P8 Device Settings: Insulin",
            "url": "https://youtu.be/HglCAFK9Pgo"
          }
        ],
        "id": "4.7"
      }
    ]
  },
  {
    "id": "step05",
    "number": "05",
    "icon": "Image/Icon-5.png",
    "pathTH": "การเปลี่ยน<br>คาร์ทริดจ์",
    "pathEN": "Cartridge<br>Replacement",
    "titleTH": "การเปลี่ยนคาร์ทริดจ์ P8",
    "titleEN": "P8 Cartridge Replacement",
    "descriptionTH": "ขั้นตอนการเปลี่ยนคาร์ทริดจ์ P8",
    "descriptionEN": "How to replace the P8 cartridge",
    "playlistsTH": [],
    "playlistsEN": [],
    "topics": [
      {
        "th": "การเปลี่ยนคาร์ทริดจ์ P8",
        "en": "P8 Cartridge Replacement",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/05-การเปลี่ยนคาร์ทริดจ์ P8/5.1การเปลี่ยนคาร์ทริดจ์ P8/การเปลี่ยนคาร์ทริดจ์ P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/05-P8 Cartridge Replacement/5.1P8 Cartridge Replacement/P8 Cartridge Replacement.png"
        ],
        "videosTH": [
          {
            "label": "การเปลี่ยนคาร์ทริดจ์ P8",
            "url": "https://youtu.be/p7TRi8wVHE0"
          }
        ],
        "videosEN": [
          {
            "label": "P8 Cartridge Replacement",
            "url": "https://youtu.be/4qSFRWU6rpQ"
          }
        ],
        "id": "5.1"
      },
      {
        "th": "อินซูลินและเข็มที่รองรับ P8",
        "en": "P8-Compatible Insulin and Pen Needles",
        "id": "5.2",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/05-การเปลี่ยนคาร์ทริดจ์ P8/5.2อินซูลินและเข็มที่รองรับ P8/อินซูลินและเข็มที่รองรับ P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/05-P8 Cartridge Replacement/5.2P8-Compatible Insulin and Pen Needles/P8-Compatible Insulin and Pen Needles.png"
        ]
      }
    ]
  },
  {
    "id": "step06",
    "number": "06",
    "icon": "Image/Icon-6.png",
    "pathTH": "เชื่อมต่อข้อมูล",
    "pathEN": "Connect Data",
    "titleTH": "เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน",
    "titleEN": "Device, CareWeb and Report Connections",
    "descriptionTH": "เชื่อมต่อ/ยกเลิก CGM → รายงานของฉัน → เชื่อมต่อ/ยกเลิก CareWeb",
    "descriptionEN": "Connect/Disconnect CGM → My Report → Connect/Disconnect CareWeb",
    "topics": [
      {
        "th": "เชื่อมต่อ iCan CGM (i6/H6)",
        "en": "Connect iCan CGM (i6:H6)",
        "id": "6.1",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.1เชื่อมต่อ iCan CGM (i6:H6)*/เชื่อมต่อ iCan CGM (i6:H6)-1*.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.1เชื่อมต่อ iCan CGM (i6:H6)*/เชื่อมต่อ iCan CGM (i6:H6)-2*.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.1 Connect iCan CGM (i6:H6)*/Connect iCan CGM (i6:H6)-1*.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.1 Connect iCan CGM (i6:H6)*/Connect iCan CGM (i6:H6)-2*.png"
        ]
      },
      {
        "th": "เชื่อมต่อ CareSens Air 365 CGM",
        "en": "Connect CareSens Air 365 CGM",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.2เชื่อมต่อ CareSense Air 365 CGM/เชื่อมต่อ CareSense Air 365 CGM-1.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.2เชื่อมต่อ CareSense Air 365 CGM/เชื่อมต่อ CareSense Air 365 CGM-2.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.2Connect CareSens Air 365 CGM/Connect CareSens Air 365 CGM-1.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.2Connect CareSens Air 365 CGM/Connect CareSens Air 365 CGM-2.png"
        ],
        "id": "6.2"
      },
      {
        "th": "ยกเลิกการเชื่อมต่อ iCan CGM (i6/H6)",
        "en": "Disconnect iCan CGM (i6:H6)",
        "id": "6.3",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.3ยกเลิกการเชื่อมต่อ iCan CGM (i6:H6)* /ยกเลิกการเชื่อมต่อ iCan CGM (i6:H6)-1*.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.3ยกเลิกการเชื่อมต่อ iCan CGM (i6:H6)* /ยกเลิกการเชื่อมต่อ iCan CGM (i6:H6)-2*.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.3Disconnect iCan CGM (i6:H6)*/Disconnect iCan CGM (i6:H6)-1*.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.3Disconnect iCan CGM (i6:H6)*/Disconnect iCan CGM (i6:H6)-2*.png"
        ]
      },
      {
        "th": "ยกเลิกการเชื่อมต่อ CareSens Air 365 CGM",
        "en": "Disconnect CareSens Air 365 CGM",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.4ยกเลิกการเชื่อมต่อ CareSense Air 365 CGM/ยกเลิกการเชื่อมต่อ CareSense Air 365 CGM-1.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.4ยกเลิกการเชื่อมต่อ CareSense Air 365 CGM/ยกเลิกการเชื่อมต่อ CareSense Air 365 CGM-2.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.4Disconnect CareSens Air 365 CGM/Disconnect CareSens Air 365 CGM-1.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.4Disconnect CareSens Air 365 CGM/Disconnect CareSens Air 365 CGM-2.png"
        ],
        "id": "6.4"
      },
      {
        "th": "รายงานของฉัน",
        "en": "My Report",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.5รายงานของฉัน/รายงานของฉัน-1.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.5รายงานของฉัน/รายงานของฉัน-2.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.5รายงานของฉัน/รายงานของฉัน-3.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.5รายงานของฉัน/รายงานของฉัน-4.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.5รายงานของฉัน/รายงานของฉัน-5.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.5My Report/My Report-1.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.5My Report/My Report-2.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.5My Report/My Report-3.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.5My Report/My Report-4.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.5My Report/My Report-5.png"
        ],
        "id": "6.5"
      },
      {
        "th": "เชื่อมต่อ CareWeb",
        "en": "Connect CareWeb",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.6เชื่อมต่อ CareWeb/เชื่อมต่อ CareWeb-1.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.6เชื่อมต่อ CareWeb/เชื่อมต่อ CareWeb-2.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.6เชื่อมต่อ CareWeb/เชื่อมต่อ CareWeb-3.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.6เชื่อมต่อ CareWeb/เชื่อมต่อ CareWeb-4.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.6เชื่อมต่อ CareWeb/เชื่อมต่อ CareWeb-5.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.6เชื่อมต่อ CareWeb/เชื่อมต่อ CareWeb-6.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.6เชื่อมต่อ CareWeb/เชื่อมต่อ CareWeb-7.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.6Connect CareWeb/Connect CareWeb-1.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.6Connect CareWeb/Connect CareWeb-2.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.6Connect CareWeb/Connect CareWeb-3.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.6Connect CareWeb/Connect CareWeb-4.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.6Connect CareWeb/Connect CareWeb-5.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.6Connect CareWeb/Connect CareWeb-6.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.6Connect CareWeb/Connect CareWeb-7.png"
        ],
        "id": "6.6"
      },
      {
        "th": "ยกเลิกการเชื่อมต่อ CareWeb (ผู้ป่วย)",
        "en": "Disconnect CareWeb (Patient)",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.7ยกเลิกการเชื่อมต่อ CareWeb (ผู้ป่วย)/ยกเลิกการเชื่อมต่อ CareWeb (ผู้ป่วย)-1.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.7ยกเลิกการเชื่อมต่อ CareWeb (ผู้ป่วย)/ยกเลิกการเชื่อมต่อ CareWeb (ผู้ป่วย)-2.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.7ยกเลิกการเชื่อมต่อ CareWeb (ผู้ป่วย)/ยกเลิกการเชื่อมต่อ CareWeb (ผู้ป่วย)-3.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.7Disconnect CareWeb (Patient)/Disconnect CareWeb (Patient)-1.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.7Disconnect CareWeb (Patient)/Disconnect CareWeb (Patient)-2.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.7Disconnect CareWeb (Patient)/Disconnect CareWeb (Patient)-3.png"
        ],
        "id": "6.7"
      },
      {
        "th": "ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)",
        "en": "Disconnect CareWeb (Hospital)",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.8ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)/ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)-1.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.8ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)/ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)-2.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.8ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)/ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)-3.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.8ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)/ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)-4.png",
          "New Asset-P8 Quick Manual/TH/06-เชื่อมต่ออุปกรณ์ ผู้ดูแล และรายงาน/6.8ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)/ยกเลิกการเชื่อมต่อ CareWeb (โรงพยาบาล)-5.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.8Disconnect CareWeb (Hospital)/Disconnect CareWeb (Hospital)-1.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.8Disconnect CareWeb (Hospital)/Disconnect CareWeb (Hospital)-2.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.8Disconnect CareWeb (Hospital)/Disconnect CareWeb (Hospital)-3.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.8Disconnect CareWeb (Hospital)/Disconnect CareWeb (Hospital)-4.png",
          "New Asset-P8 Quick Manual/EN/06-Device Connection, Caregivers, and Reports/6.8Disconnect CareWeb (Hospital)/Disconnect CareWeb (Hospital)-5.png"
        ],
        "id": "6.8"
      }
    ]
  },
  {
    "id": "step07",
    "number": "07",
    "icon": "Image/Icon-7.png",
    "pathTH": "รู้จัก<br>DIA:CONN",
    "pathEN": "DIA:CONN<br>App",
    "titleTH": "ทำความรู้จักแอป  DIA:CONN",
    "titleEN": "Getting to Know the DIA:CONN App",
    "descriptionTH": "ทำความรู้จักหน้าจอและข้อมูลต่าง ๆ ภายในแอป DIA:CONN",
    "descriptionEN": "Learn about the screens and information available in the DIA:CONN App",
    "topics": [
      {
        "th": "หน้าหลัก",
        "en": "Home Screen",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.1หน้าแรก/หน้าแรก-1.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.1หน้าแรก/หน้าแรก-2.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.1หน้าแรก/หน้าแรก-3.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.1Home Screen/Home Screen-1.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.1Home Screen/Home Screen-2.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.1Home Screen/Home Screen-3.png"
        ],
        "id": "7.1"
      },
      {
        "th": "ข้อมูลปากกา",
        "en": "Pen Information",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.2ข้อมูลปากกา/ข้อมูลปากกา-1.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.2ข้อมูลปากกา/ข้อมูลปากกา-2.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.2ข้อมูลปากกา/ข้อมูลปากกา-3.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.2Pen Information/Pen Information-1.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.2Pen Information/Pen Information-2.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.2Pen Information/Pen Information-3.png"
        ],
        "id": "7.2"
      },
      {
        "th": "เพิ่มเติม",
        "en": "More",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.3เพิ่มเติม/เพิ่มเติม-1.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.3เพิ่มเติม/เพิ่มเติม-2.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.3เพิ่มเติม/เพิ่มเติม-3.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.3More/More-1.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.3More/More-2.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.3More/More-3.png"
        ],
        "id": "7.3"
      },
      {
        "th": "การฉีด",
        "en": "Inject",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.4การฉีด/การฉีด-1.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.4การฉีด/การฉีด-2.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.4การฉีด/การฉีด-3.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.4Inject/Inject-1.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.4Inject/Inject-2.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.4Inject/Inject-3.png"
        ],
        "id": "7.4"
      },
      {
        "th": "ค้นหาปากกา",
        "en": "Find the pen",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.5ค้นหาปากกา/ค้นหาปากกา.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.5Find the Pen/Find the Pen.png"
        ],
        "id": "7.5"
      },
      {
        "th": "การตั้งค่าอุปกรณ์",
        "en": "Device Settings",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.6การตั้งค่าอุปกรณ์/การตั้งค่าอุปกรณ์-1.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.6การตั้งค่าอุปกรณ์/การตั้งค่าอุปกรณ์-2.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.6การตั้งค่าอุปกรณ์/การตั้งค่าอุปกรณ์-3.png",
          "New Asset-P8 Quick Manual/TH/07-ทำความรู้จักแอป DIACONN/7.6การตั้งค่าอุปกรณ์/การตั้งค่าอุปกรณ์-4.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.6Device Settings/Device Settings-1.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.6Device Settings/Device Settings-2.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.6Device Settings/Device Settings-3.png",
          "New Asset-P8 Quick Manual/EN/07-Introduction to the DIACONN App/7.6Device Settings/Device Settings-4.png"
        ],
        "id": "7.6"
      }
    ]
  },
  {
    "id": "step08",
    "number": "08",
    "icon": "Image/Icon-8.png",
    "pathTH": "ฉีดอินซูลิน",
    "pathEN": "Injection",
    "titleTH": "การฉีดอินซูลินและการคำนวณโบลัส",
    "titleEN": "Insulin Injection and Bolus Calculator",
    "descriptionTH": "การฉีดอินซูลินด้วย P8 → การฉีดด่วน → การคำนวณโบลัส → ประวัติการฉีด",
    "descriptionEN": "P8 Injection → Quick Injection → Bolus Calculation → Injection History",
    "playlistsTH": [],
    "playlistsEN": [],
    "topics": [
      {
        "th": "ฉีดผ่าน P8",
        "en": "P8 Injection",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.1ฉีดผ่าน P8/ฉีดผ่าน P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.1Inject Insulin Using P8/Inject Insulin Using P8.png"
        ],
        "videosTH": [
          {
            "label": "การฉีด Insulin ด้วย P8",
            "url": "https://youtu.be/7TL37Ik35Y8"
          },
          {
            "label": "การเริ่ม–หยุดฉีดอินซูลินด้วย P8",
            "url": "https://youtu.be/xPCLOazQvWQ"
          }
        ],
        "videosEN": [
          {
            "label": "Direct Insulin Injection Using the P8 Device",
            "url": "https://youtu.be/nA13U0-c9gU"
          },
          {
            "label": "Start/Stop P8 Injection",
            "url": "https://youtu.be/i67Ap7t7d-E"
          }
        ],
        "id": "8.1",
        "playlistsTH": [
          {
            "label": "การฉีดอินซูลินด้วย P8",
            "url": "https://www.youtube.com/playlist?list=PLHVBZA9VsGDs"
          },
          {
            "label": "การเริ่ม-หยุดฉีดด้วย P8",
            "url": "https://www.youtube.com/playlist?list=PLbs3Om0DpomU"
          }
        ]
      },
      {
        "th": "ฉีดด่วนผ่านแอป DIACONN ของ P8",
        "en": "Quick Injection",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.2ฉีดด่วนผ่านแอป DIACONN ของ P8/ฉีดด่วนผ่านแอป DIACONN ของ P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.2P8 Quick Injection via the DIACONN App/P8 Quick Injection via the DIACONN App.png"
        ],
        "videosTH": [
          {
            "label": "การฉีดด่วนของ P8",
            "url": "https://youtu.be/7TL37Ik35Y8"
          }
        ],
        "videosEN": [
          {
            "label": "P8 Quick Injection",
            "url": "https://youtu.be/7-fjt_9Sqzg"
          }
        ],
        "id": "8.2",
        "playlistsTH": [
          {
            "label": "การฉีดด่วนผ่านแอป DIA: CONN ของ P8",
            "url": "https://www.youtube.com/playlist?list=PLfBj1bR1_xcM"
          }
        ]
      },
      {
        "th": "ประวัติการฉีด และประวัติปากกา P8",
        "en": "Injection History",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.3ประวัติการฉีด และประวัติปากกา P8/ประวัติการฉีด และประวัติปากกา P8.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.3P8 Injection History and Pen History/P8 Injection History and Pen History.png"
        ],
        "id": "8.3"
      },
      {
        "th": "แอป DIACONN-การตั้งเวลาฉีด",
        "en": "DIACONN App-Injection Time Settings",
        "id": "8.4",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.4แอป DIACONN-การตั้งเวลาฉีด/การตั้งค่าเวลาฉีด-1.png",
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.4แอป DIACONN-การตั้งเวลาฉีด/การตั้งค่าเวลาฉีด-2.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.4DIACONN App-Injection Time Settings/DIACONN App-Injection Time Settings-1.png",
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.4DIACONN App-Injection Time Settings/DIACONN App-Injection Time Settings-2.png"
        ]
      },
      {
        "th": "แอป DIACONN-การตั้งค่าอินซูลินล่วงหน้า (U)",
        "en": "DIACONN App-Preset Insulin Dose (U)",
        "id": "8.5",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.5แอป DIACONN-การตั้งค่าอินซูลินล่วงหน้า (U)/การตั้งค่าอินซูลินล่วงหน้า (U)-1.png",
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.5แอป DIACONN-การตั้งค่าอินซูลินล่วงหน้า (U)/การตั้งค่าอินซูลินล่วงหน้า (U)-2.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.5DIACONN App-Preset Insulin Dose (U)/DIACONN App-Preset Insulin Dose (U)-1.png",
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.5DIACONN App-Preset Insulin Dose (U)/DIACONN App-Preset Insulin Dose (U)-2.png"
        ]
      },
      {
        "th": "แอป DIACONN-การตั้งค่าคาร์โบไฮเดรต (กรัม)",
        "en": "DIACONN App-Carbohydrate Settings (g)",
        "id": "8.6",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.6แอป DIACONN-การตั้งค่าคาร์โบไฮเดรต (กรัม)/การตั้งค่าคาร์โบไฮเดรต (กรัม)-1.png",
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.6แอป DIACONN-การตั้งค่าคาร์โบไฮเดรต (กรัม)/การตั้งค่าคาร์โบไฮเดรต (กรัม)-2.png",
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.6แอป DIACONN-การตั้งค่าคาร์โบไฮเดรต (กรัม)/การตั้งค่าคาร์โบไฮเดรต (กรัม)-3.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.6DIACONN App-Carbohydrate Settings (g)/DIACONN App-Carbohydrate Settings (g)-1.png",
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.6DIACONN App-Carbohydrate Settings (g)/DIACONN App-Carbohydrate Settings (g)-2.png",
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.6DIACONN App-Carbohydrate Settings (g)/DIACONN App-Carbohydrate Settings (g)-3.png"
        ]
      },
      {
        "th": "แอป DIACONN-ตั้งค่าเครื่องคิดเลขโบลัสขั้นสูงและการฉีด",
        "en": "Bolus Calculation",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.7แอป DIACONN-ตั้งค่าเครื่องคิดเลขโบลัสขั้นสูงและการฉีด/ตั้งค่าเครื่องคิดเลขโบลัสขั้นสูงและการฉีด.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.7DIACONN App-Advanced Bolus Calculator Settings and Injection/DIACONN App-Advanced Bolus Calculator Settings and Injection.png"
        ],
        "bolusModes": [
          {
            "th": "มื้ออาหารคงที่",
            "en": "Fixed Meal",
            "imagesTH": [
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/1.มื้ออาหารคงที่/มื้ออาหารคงที่-1.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/1.มื้ออาหารคงที่/มื้ออาหารคงที่-2.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/1.มื้ออาหารคงที่/มื้ออาหารคงที่-3.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/1.มื้ออาหารคงที่/มื้ออาหารคงที่-4.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/1.มื้ออาหารคงที่/มื้ออาหารคงที่-5.png"
            ],
            "imagesEN": [
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/1.Fixed Meal/Fixed Meal-1.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/1.Fixed Meal/Fixed Meal-2.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/1.Fixed Meal/Fixed Meal-3.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/1.Fixed Meal/Fixed Meal-4.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/1.Fixed Meal/Fixed Meal-5.png"
            ]
          },
          {
            "th": "การประมาณปริมาณอาหาร",
            "en": "Estimated Meal",
            "imagesTH": [
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-1.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-2.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-3.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-4.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-5.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-6.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-7.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-8.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/2.การประมาณปริมาณอาหาร/การประมาณปริมาณอาหาร-9.png"
            ],
            "imagesEN": [
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-1.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-2.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-3.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-4.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-5.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-6.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-7.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-8.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/2.Estimated Meal/Estimated Meal-9.png"
            ]
          },
          {
            "th": "การนับคาร์โบไฮเดรต",
            "en": "Carb Counting",
            "imagesTH": [
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/3.การนับคาร์โบไฮเดรต/การนับคาร์โบไฮเดรต-1.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/3.การนับคาร์โบไฮเดรต/การนับคาร์โบไฮเดรต-2.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/3.การนับคาร์โบไฮเดรต/การนับคาร์โบไฮเดรต-3.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/3.การนับคาร์โบไฮเดรต/การนับคาร์โบไฮเดรต-4.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/3.การนับคาร์โบไฮเดรต/การนับคาร์โบไฮเดรต-5.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/3.การนับคาร์โบไฮเดรต/การนับคาร์โบไฮเดรต-6.png"
            ],
            "imagesEN": [
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/3.Carb Counting/Carb Counting-1.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/3.Carb Counting/Carb Counting-2.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/3.Carb Counting/Carb Counting-3.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/3.Carb Counting/Carb Counting-4.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/3.Carb Counting/Carb Counting-5.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/3.Carb Counting/Carb Counting-6.png"
            ]
          },
          {
            "th": "การนับคาร์โบไฮเดรตขั้นสูง",
            "en": "Advanced Carb Counting",
            "imagesTH": [
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/4.การนับคาร์โบไฮเดรตขั้นสูง/การนับคาร์โบไฮเดรตขั้นสูง-1.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/4.การนับคาร์โบไฮเดรตขั้นสูง/การนับคาร์โบไฮเดรตขั้นสูง-2.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/4.การนับคาร์โบไฮเดรตขั้นสูง/การนับคาร์โบไฮเดรตขั้นสูง-3.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/4.การนับคาร์โบไฮเดรตขั้นสูง/การนับคาร์โบไฮเดรตขั้นสูง-4.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/4.การนับคาร์โบไฮเดรตขั้นสูง/การนับคาร์โบไฮเดรตขั้นสูง-5.png",
              "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/โหมดการคำนวณโบลัส/4.การนับคาร์โบไฮเดรตขั้นสูง/การนับคาร์โบไฮเดรตขั้นสูง-6.png"
            ],
            "imagesEN": [
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/4.Advanced Carb Counting/Advanced Carb Counting-1.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/4.Advanced Carb Counting/Advanced Carb Counting-2.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/4.Advanced Carb Counting/Advanced Carb Counting-3.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/4.Advanced Carb Counting/Advanced Carb Counting-4.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/4.Advanced Carb Counting/Advanced Carb Counting-5.png",
              "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/Bolus Calculation Mode/4.Advanced Carb Counting/Advanced Carb Counting-6.png"
            ],
            "videosTH": [
              {
                "label": "การคำนวณโบลัส: การนับคาร์โบไฮเดรตขั้นสูง",
                "url": "https://youtu.be/i3N7cypK1iU"
              }
            ],
            "videosEN": [
              {
                "label": "P8 Bolus Calculation: Advanced Carb Counting",
                "url": "https://youtu.be/XTCKln8incQ"
              }
            ]
          }
        ],
        "id": "8.7",
        "playlistsTH": [
          {
            "label": "การคำนวณโบลัส: การนับคาร์โบไฮเดรตขั้นสูง",
            "url": "https://www.youtube.com/playlist?list=PLRZtJG9zoDAI"
          }
        ]
      },
      {
        "th": "การคาดการณ์ระดับน้ำตาล",
        "en": "Blood Glucose Prediction",
        "id": "8.8",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.8การคาดการณ์ระดับน้ำตาล/การคาดการณ์ระดับน้ำตาล.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.8Blood Glucose Prediction/Blood Glucose Prediction.png"
        ]
      },
      {
        "th": "ปริมาณอินซูลินที่ยังออกฤทธิ์ในร่างกาย (IOB)",
        "en": "Insulin on Board (IOB)",
        "id": "8.9",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.9ปริมาณอินซูลินที่ยังออกฤทธิ์ในร่างกาย (IOB)/ปริมาณอินซูลินที่ยังออกฤทธิ์ในร่างกาย (IOB).png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.9Insulin on Board (IOB)/Insulin on Board (IOB).png"
        ]
      },
      {
        "th": "ปริมาณคาร์โบไฮเดรตที่ยังอยู่ในร่างกาย (COB)",
        "en": "Carbohydrates on Board (COB)",
        "id": "8.10",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/08-การฉีดอินซูลินและการคำนวณโบลัส/8.10ปริมาณคาร์โบไฮเดรตที่ยังอยู่ในร่างกาย (COB)/ปริมาณคาร์โบไฮเดรตที่ยังอยู่ในร่างกาย (COB).png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/08-Insulin Injection and Bolus Calculation/8.10Carbohydrates on Board (COB)/Carbohydrates on Board (COB).png"
        ]
      }
    ],
    "resources": [
      {
        "type": "external",
        "kind": "document",
        "iconImage": "Image/Food Exchange-Icon.png",
        "labelTH": "อาหารแลกเปลี่ยน",
        "labelEN": "Food Exchange",
        "subtitleTH": "ตารางอาหารแลกเปลี่ยนครบ 6 หมวดหมู่",
        "subtitleEN": "Thai Food Exchange List",
        "urlTH": "resource-viewer.html?resource=foodexchange&lang=th",
        "urlEN": "resource-viewer.html?resource=foodexchange&lang=en"
      },
      {
        "type": "external",
        "kind": "document",
        "iconImage": "Image/Food Absorb-Icon.png",
        "labelTH": "ประเมินการดูดซึมของอาหาร",
        "labelEN": "Food Absorption Evaluation",
        "subtitleTH": "ดูดซึมเร็ว, ปานกลาง, ช้า",
        "subtitleEN": "Fast, moderate, slow absorption",
        "urlTH": "resource-viewer.html?resource=absorption&lang=th",
        "urlEN": "resource-viewer.html?resource=absorption&lang=en"
      }
    ]
  },
  {
    "id": "step09",
    "number": "09",
    "icon": "Image/Icon-9.png",
    "pathTH": "แจ้งเตือนและ<br>การดูแล P8",
    "pathEN": "P8 Alerts<br>& Care",
    "titleTH": "การแจ้งเตือนและการดูแลรักษา P8",
    "titleEN": "P8 Alerts and Maintenance",
    "descriptionTH": "ฟังก์ชันการทำงานของผลิตภัณฑ์ → การแจ้งเตือนและการดูแลรักษา P8",
    "descriptionEN": "Product Functions → P8 Alerts and Maintenance",
    "playlistsTH": [],
    "playlistsEN": [],
    "topics": [
      {
        "th": "แจ้งเตือนและการดูแลรักษา P8",
        "en": "P8 Alerts and Maintenance",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/09-การแจ้งเตือนและการดูแลรักษา P8/การแจ้งเตือนและการดูแลรักษา P8-1.png",
          "New Asset-P8 Quick Manual/TH/09-การแจ้งเตือนและการดูแลรักษา P8/การแจ้งเตือนและการดูแลรักษา P8-2.png",
          "New Asset-P8 Quick Manual/TH/09-การแจ้งเตือนและการดูแลรักษา P8/การแจ้งเตือนและการดูแลรักษา P8-3.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/09-P8 Alerts and Maintenance/P8 Alerts and Maintenance-1.png",
          "New Asset-P8 Quick Manual/EN/09-P8 Alerts and Maintenance/P8 Alerts and Maintenance-2.png",
          "New Asset-P8 Quick Manual/EN/09-P8 Alerts and Maintenance/P8 Alerts and Maintenance-3.png"
        ],
        "id": "9.1"
      }
    ],
    "resources": [
      {
        "type": "external",
        "kind": "maintenance",
        "iconImage": "Image/P8-Fixingman-Icon.png",
        "labelTH": "แจ้งซ่อมอุปกรณ์ P8",
        "labelEN": "P8 Device Maintenance",
        "subtitleTH": "เราพร้อมดูแลและให้บริการอย่างเต็มที่",
        "subtitleEN": "We are ready to take care and provide full support",
        "urlTH": "https://script.google.com/macros/s/AKfycbwxDtUfkbHmzvhyjFyyzYJ-e-vJyN8NJECJ3Y-txv5Gz59VVpXa86_UVizZfUOJJ0HT/exec",
        "urlEN": "https://script.google.com/macros/s/AKfycbwxDtUfkbHmzvhyjFyyzYJ-e-vJyN8NJECJ3Y-txv5Gz59VVpXa86_UVizZfUOJJ0HT/exec"
      }
    ]
  },
  {
    "id": "step10",
    "number": "10",
    "icon": "Image/Icon-10.png",
    "pathTH": "ดูแลเบาหวาน",
    "pathEN": "Diabetes Care",
    "titleTH": "คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน",
    "titleEN": "Additional Diabetes Care Guidance",
    "descriptionTH": "พื้นฐานอินซูลิน → CGM → อาหาร → การปรับอินซูลิน → การออกกำลังกาย",
    "descriptionEN": "Insulin Basics → CGM → Diet → Insulin Adjustment → Exercise",
    "playlistsTH": [],
    "playlistsEN": [],
    "topics": [
      {
        "th": "พื้นฐานอินซูลิน",
        "en": "Insulin Basics",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.1พื้นฐานอินซูลิน (MDI)/พื้นฐานอินซูลิน MDI.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.1Insulin Basics (MDI)/Insulin Basics (MDI).png"
        ],
        "id": "10.1"
      },
      {
        "th": "CGM",
        "en": "CGM",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.2CGM-TH/CGM-TH.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.2CGM-EN/CGM-EN.png"
        ],
        "id": "10.2"
      },
      {
        "th": "เปรียบเทียบCGM vs. BGM",
        "en": "CGM vs. BGM Comparison",
        "id": "10.3",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.3เปรียบเทียบCGM vs. BGM*/เปรียบเทียบCGM vs. BGM*.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.3CGM vs. BGM Comparison*/CGM vs. BGM Comparison*.png"
        ]
      },
      {
        "th": "เปรียบเทียบระดับน้ำตาลต่ำ vs. ระดับน้ำตาลสูง",
        "en": "Hypoglycemia vs. Hyperglycemia Comparison",
        "id": "10.4",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.4เปรียบเทียบระดับน้ำตาลต่ำ vs. ระดับน้ำตาลสูง*/เปรียบเทียบระดับน้ำตาลต่ำ vs. ระดับน้ำตาลสูง*.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.4Hypoglycemia vs. Hyperglycemia Comparison*/Hypoglycemia vs. Hyperglycemia Comparison*.png"
        ]
      },
      {
        "th": "อาหารสำหรับผู้ป่วยเบาหวาน",
        "en": "Diabetes Diet",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.5อาหารสำหรับผู้ป่วยเบาหวาน/อาหารสำหรับผู้ป่วยเบาหวาน.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.5Diet for People with Diabetes/Diet for People with Diabetes.png"
        ],
        "id": "10.5"
      },
      {
        "th": "การปรับอินซูลิน",
        "en": "Insulin Adjustment",
        "imagesTH": [
          "Image/step-10/th/4-10-TH.png",
          "Image/step-10/th/5-10-TH.png",
          "Image/step-10/th/6-10-TH.png"
        ],
        "imagesEN": [
          "Image/step-10/en/04-10-EN.png",
          "Image/step-10/en/05-10-EN.png",
          "Image/step-10/en/06-10-EN.png"
        ],
        "id": "10.insulin-adjustment"
      },
      {
        "th": "การออกกำลังกาย",
        "en": "Exercise",
        "imagesTH": [
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.6การออกกำลังกายสำหรับผู้ป่วยเบาหวาน/คำแนะนำด้านการออกกำลังกาย.png",
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.6การออกกำลังกายสำหรับผู้ป่วยเบาหวาน/การออกกำลังกายแบบแอโรบิก vs. แอนแอโรบิก.png",
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.6การออกกำลังกายสำหรับผู้ป่วยเบาหวาน/การออกกำลังกายและการจัดการระดับน้ำตาล.png",
          "New Asset-P8 Quick Manual/TH/10-คำแนะนำเพิ่มเติมสำหรับการดูแลเบาหวาน/10.6การออกกำลังกายสำหรับผู้ป่วยเบาหวาน/การออกกำลังกายและการจัดการการฉีดอินซูลิน.png"
        ],
        "imagesEN": [
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.6Exercise for People with Diabetes/Exercise Recommendations.png",
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.6Exercise for People with Diabetes/Aerobic vs. Anaerobic Exercise.png",
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.6Exercise for People with Diabetes/Exercise and Blood Glucose Management.png",
          "New Asset-P8 Quick Manual/EN/10-Additional Diabetes Management Guidance/10.6Exercise for People with Diabetes/Exercise and Insulin Dose Management.png"
        ],
        "id": "10.6"
      }
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
   BUILD YOUTUBE BUTTONS
========================================================= */

function buildYoutubeButtons(
  items,
  variant = "video"
) {

  if (
    !Array.isArray(items) ||
    items.length === 0
  ) {
    return "";
  }


  const buttonText =
    variant === "playlist"
      ? (
          currentLanguage === "th"
            ? "ดู เพลย์ลิสต์"
            : "Watch Playlist"
        )
      : (
          currentLanguage === "th"
            ? "ดูวิดีโอ"
            : "Watch Video"
        );


  const buttons =
    items
      .filter(
        (item) =>
          item &&
          typeof item.url === "string" &&
          item.url.trim() !== ""
      )
      .map(
        (item) => `

          <a
            class="youtube-card youtube-card-${variant}"
            href="${item.url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${buttonText}: ${item.label}"
          >

            <span
              class="youtube-card-icon"
              aria-hidden="true"
            >

              <img
                src="Image/youtube.png"
                alt=""
              >

            </span>


            <span
              class="youtube-card-copy"
            >

              <strong>
                ${item.label}
              </strong>

              <small>
                ${buttonText}
              </small>

            </span>


            <span
              class="youtube-card-arrow"
              aria-hidden="true"
            >
              →
            </span>

          </a>

        `
      )
      .join("");


  if (!buttons) {
    return "";
  }


  return `

    <div
      class="youtube-links youtube-links-${variant}"
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


      const navigationItems =
        Array.isArray(step.navigation) &&
        step.navigation.length > 0
          ? step.navigation
          : step.topics.map(
              (topic, topicIndex) => ({
                th: topic.th,
                en: topic.en,
                start: topicIndex,
                end: topicIndex
              })
            );


      const topicButtons =
        navigationItems
          .map(
            (
              item,
              navIndex
            ) => {

              const label =
                currentLanguage === "th"
                  ? item.th
                  : item.en;


              return `

                <button
                  class="subnav-btn ${
                    navIndex === 0
                      ? "active"
                      : ""
                  }"
                  type="button"
                  data-slide-target="${item.start}"
                  data-slide-start="${item.start}"
                  data-slide-end="${item.end}"
                >

                  ${label}

                </button>

              `;

            }
          )
          .join("");


      const resourceButtons =
        buildResourceButtons(
          step,
          index
        );


      const stepPlaylists =
        currentLanguage === "th"
          ? step.playlistsTH
          : step.playlistsEN;


      const playlistButtons =
        buildYoutubeButtons(
          stepPlaylists,
          "playlist"
        );


      const slides =
        step.topics
          .map(
            (
              topic,
              topicIndex
            ) => {

              let topicImages =
                [];


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


             const isMultiImageGuide =
  ["06", "07", "08", "09"].includes(step.number) &&
  topicImages.length > 1;

const showStep10ImageGuide =
  step.number === "10" &&
  topicImages.length > 0;


const imageItems =
  topicImages
    .map(
      (
        image,
        imageIndex
      ) => {

        const isLastImage =
          imageIndex ===
          topicImages.length - 1;


        const nextImageHint =
          (isMultiImageGuide || showStep10ImageGuide) &&
          topicImages.length > 1 &&
          !isLastImage

            ? `
              <div class="next-image-hint">
                ${
                  currentLanguage === "th"
                    ? "กรุณาเลื่อนลง 👇 เพื่อดูขั้นตอนถัดไป"
                    : "Please scroll down 👇 to view the next step"
                }
              </div>
            `

            : "";


        return `

          <img
            src="${image}"
            alt=""
            class="slide-image"
            data-content-image
            data-image-index="${imageIndex}"
          >

          ${nextImageHint}

        `;

      }
    )
    .join("");

    const multiImageGuideHint =
  (isMultiImageGuide || showStep10ImageGuide)
    ? `
      <div class="multi-image-guide-hint">
        <span>
          ${
            currentLanguage === "th"
              ? `📑 คู่มือนี้มี ${topicImages.length} ภาพ`
              : `📑 This guide contains ${topicImages.length} image${topicImages.length === 1 ? "" : "s"}`
          }
        </span>

        ${
          topicImages.length > 1
            ? `
              <span class="multi-image-scroll-text">
                ${
                  currentLanguage === "th"
                    ? "กรุณาเลื่อนลง 👇 เพื่อดูขั้นตอนถัดไป"
                    : "Please scroll down 👇 to view the next step"
                }
              </span>
            `
            : ""
        }
      </div>
    `
    : "";

                  const imageZoomHint = `
  <div class="image-zoom-hint">
    ${
      currentLanguage === "th"
        ? "🤏 ใช้นิ้วขยาย–ย่อภาพ เพื่อดูรายละเอียด"
        : "🤏 Pinch to zoom in/out for more details"
    }
  </div>
`;


              const topicVideos =
                currentLanguage === "th"
                  ? topic.videosTH
                  : topic.videosEN;


              const videoButtons =
                buildYoutubeButtons(
                  topicVideos,
                  "video"
                );

              const topicPlaylistButtons = buildYoutubeButtons(
                currentLanguage === "th" ? topic.playlistsTH : topic.playlistsEN,
                "playlist"
              );

              const hasTopicVideos =
  Array.isArray(topicVideos) &&
  topicVideos.some(
    (video) =>
      video &&
      typeof video.url === "string" &&
      video.url.trim() !== ""
  );


const videoScrollHint =
  hasTopicVideos
    ? `
      <div
        class="video-scroll-message"
        style="
          text-align: center;
          font-weight: 800;
          font-size: 26px;
          line-height: 1.35;
          color: #06427f;
          margin: 14px 0 18px;
          letter-spacing: 0.2px;
        "
      >
        ${
          currentLanguage === "th"
            ? "กรุณาเลื่อนลง 👇 เพื่อดูวิดีโอ"
            : "Please scroll down 👇 to view the video"
        }
      </div>
    `
    : "";

    /* =====================================================
   STEP 08 : BOLUS SUB-NAVIGATION
===================================================== */

const hasBolusModes =
  step.number === "08" &&
  Array.isArray(topic.bolusModes) &&
  topic.bolusModes.length > 0;


const bolusSection =
  hasBolusModes
    ? (() => {

        const bolusButtons =
          topic.bolusModes
            .map(
              (
                mode,
                modeIndex
              ) => {

                const modeLabel =
                  currentLanguage === "th"
                    ? mode.th
                    : mode.en;

                return `
                  <button
                    type="button"
                    class="bolus-subnav-btn ${
                      modeIndex === 0
                        ? "active"
                        : ""
                    }"
                    data-bolus-target="${modeIndex}"
                  >
                    ${modeLabel}
                  </button>
                `;
              }
            )
            .join("");


        const bolusPanels =
          topic.bolusModes
            .map(
              (
                mode,
                modeIndex
              ) => {

                const modeImages =
                  currentLanguage === "th"
                    ? (
                        Array.isArray(mode.imagesTH)
                          ? mode.imagesTH
                          : []
                      )
                    : (
                        Array.isArray(mode.imagesEN)
                          ? mode.imagesEN
                          : []
                      );


                const modeVideos =
                  currentLanguage === "th"
                    ? mode.videosTH
                    : mode.videosEN;


                const hasModeVideos =
                  Array.isArray(modeVideos) &&
                  modeVideos.some(
                    (video) =>
                      video &&
                      typeof video.url === "string" &&
                      video.url.trim() !== ""
                  );


                const modeImageItems =
                  modeImages
                    .map(
                      (
                        image,
                        imageIndex
                      ) => {

                        const isLastModeImage =
                          imageIndex ===
                          modeImages.length - 1;


                        const modeNextHint =
                          !isLastModeImage
                            ? `
                              <div
                                class="next-image-hint"
                              >
                                ${
                                  currentLanguage === "th"
                                    ? "กรุณาเลื่อนลง 👇 เพื่อดูขั้นตอนถัดไป"
                                    : "Please scroll down 👇 to view the next step"
                                }
                              </div>
                            `
                            : "";


                        return `
                          <img
                            src="${image}"
                            alt=""
                            class="slide-image"
                            data-content-image
                          >

                          ${modeNextHint}
                        `;
                      }
                    )
                    .join("");


                const modeGuideHint =
                  modeImages.length > 1
                    ? `
                      <div
                        class="multi-image-guide-hint"
                      >

                        <span>
                          ${
                            currentLanguage === "th"
                              ? `📑 คู่มือนี้มี ${modeImages.length} ภาพ`
                              : `📑 This guide contains ${modeImages.length} images`
                          }
                        </span>

                        <span
                          class="multi-image-scroll-text"
                        >
                          ${
                            currentLanguage === "th"
                              ? "กรุณาเลื่อนลง 👇 เพื่อดูขั้นตอนถัดไป"
                              : "Please scroll down 👇 to view the next step"
                          }
                        </span>

                      </div>
                    `
                    : "";


                const modeVideoHint =
                  hasModeVideos
                    ? `
                      <div
                        class="video-scroll-message"
                      >
                        ${
                          currentLanguage === "th"
                            ? "กรุณาเลื่อนลง 👇 เพื่อดูวิดีโอ"
                            : "Please scroll down 👇 to view the video"
                        }
                      </div>
                    `
                    : "";


                const modeVideoButtons =
                  buildYoutubeButtons(
                    modeVideos,
                    "video"
                  );


                return `
                  <div
                    class="bolus-mode-panel ${
                      modeIndex === 0
                        ? "active"
                        : ""
                    }"
                    data-bolus-panel="${modeIndex}"
                  >

                    ${modeGuideHint}

                    <div
                      class="slide-images"
                    >
                      ${modeImageItems}
                    </div>

                    ${modeVideoHint}

                    ${modeVideoButtons}

                  </div>
                `;
              }
            )
            .join("");


        return `
  <div
    class="bolus-mode-section"
  >

    <button
      type="button"
      class="bolus-dropdown-toggle"
      aria-expanded="false"
    >

      <span
        class="bolus-dropdown-label"
      >
        ${
          currentLanguage === "th"
            ? "เลือกวิธีคำนวณโบลัส"
            : "Select Bolus Calculation Method"
        }
      </span>

      <span
        class="bolus-dropdown-icon"
        aria-hidden="true"
      >
        ▼
      </span>

    </button>


    <div
      class="bolus-dropdown-menu"
      hidden
    >

      <div
        class="bolus-subnav"
      >
        ${bolusButtons}
      </div>

    </div>


    <div
      class="bolus-mode-content"
    >
      ${bolusPanels}
    </div>

  </div>
`;

      })()
    : "";

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
                  } ${
                    ["01", "02", "03"]
                      .includes(step.number)
                        ? "fit-full-image"
                        : ""
                  }"
                  data-topic-index="${topicIndex}"
                >

                <div
                  class="slide-scroll"
                >

                  <div class="ipad-pinch-hint" aria-hidden="true">
                    <span class="ipad-pinch-icon">🤏</span>
                    <span class="ipad-pinch-th">ใช้นิ้ว ย่อ–ขยายภาพ เพื่อดูรายละเอียด</span>
                    <span class="ipad-pinch-en">Pinch to zoom the image for details</span>
                  </div>

  ${imageZoomHint}

  ${multiImageGuideHint}

<div
  class="slide-images"
>
  ${imageItems}
</div>

${bolusSection}

${videoScrollHint}

${videoButtons}

${topicPlaylistButtons}


                    ${
  topicImages.length === 0 && !hasTopicVideos
    ? `
      <div
        class="slide-placeholder show"
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
    `
    : ""
}

                  </div>

                </div>

              `;

            }
          )
          .join("");


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


              ${playlistButtons}

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

  bindBolusModeButtons();

  setupSliders();

  setupMissingImages();

  updateOpenCardHeight();

}


/* =========================================================
   STEP 08 : BOLUS MODE BUTTON EVENTS
   Move dropdown above resource cards
========================================================= */

function bindBolusModeButtons() {

  const bolusSections =
    document.querySelectorAll(
      "#step08 .bolus-mode-section"
    );


  bolusSections.forEach(
    (section) => {

      /* =====================================================
         ELEMENTS INSIDE BOLUS SECTION
      ===================================================== */

      const toggle =
        section.querySelector(
          ".bolus-dropdown-toggle"
        );


      const menu =
        section.querySelector(
          ".bolus-dropdown-menu"
        );


      const label =
        section.querySelector(
          ".bolus-dropdown-label"
        );


      const icon =
        section.querySelector(
          ".bolus-dropdown-icon"
        );


      const buttons =
        Array.from(
          section.querySelectorAll(
            ".bolus-subnav-btn"
          )
        );


      const panels =
        Array.from(
          section.querySelectorAll(
            ".bolus-mode-panel"
          )
        );


      /* =====================================================
         FIND STEP 08 CARD + MAIN TOOLBAR
      ===================================================== */

      const stepCard =
        section.closest(
          "#step08"
        );


      if (!stepCard) {
        return;
      }


      const manualToolbar =
        stepCard.querySelector(
          ".manual-toolbar"
        );


      const mainSubnav =
        manualToolbar
          ? manualToolbar.querySelector(
              ".subnav"
            )
          : null;


      if (
        !manualToolbar ||
        !mainSubnav ||
        !toggle ||
        !menu
      ) {
        return;
      }


      /* =====================================================
         CREATE TOOLBAR SLOT
         Place:
         Main Navigate
         ↓
         Bolus Dropdown
         ↓
         Resource Cards
      ===================================================== */

      let toolbarSlot =
        manualToolbar.querySelector(
          ".bolus-toolbar-slot"
        );


      if (!toolbarSlot) {

        toolbarSlot =
          document.createElement(
            "div"
          );


        toolbarSlot.className =
          "bolus-toolbar-slot";


        mainSubnav.insertAdjacentElement(
          "afterend",
          toolbarSlot
        );

      }


      /* Move dropdown out of slide */

      toolbarSlot.appendChild(
        toggle
      );


      toolbarSlot.appendChild(
        menu
      );


      /* =====================================================
         SHOW DROPDOWN ONLY WHEN
         MAIN NAV = BOLUS CALCULATION
         Resolve the topic from its slide so content additions do not change the target.
      ===================================================== */

      const mainNavButtons =
        Array.from(
          mainSubnav.querySelectorAll(
            ".subnav-btn"
          )
        );


      const setToolbarVisibility =
        (topicIndex) => {

          const isBolusTopic =
            String(topicIndex) === section.closest(".slide").dataset.topicIndex;


          toolbarSlot.hidden =
            !isBolusTopic;


          /* Close dropdown when leaving Bolus */

          if (!isBolusTopic) {

            menu.hidden = true;


            toggle.setAttribute(
              "aria-expanded",
              "false"
            );


            if (icon) {

              icon.textContent =
                "▼";

            }

          }

        };


      /* Initial state */

      const slider = stepCard.querySelector("[data-slider]");

      if (slider) {
        slider._syncBolusToolbar = setToolbarVisibility;
      }

      const activeMainButton =
        mainSubnav.querySelector(
          ".subnav-btn.active"
        );


      setToolbarVisibility(
        activeMainButton
          ? activeMainButton.getAttribute(
              "data-slide-target"
            )
          : "0"
      );


      /* Main Navigate click */

      mainNavButtons.forEach(
        (mainButton) => {

          mainButton.addEventListener(
            "click",
            () => {

              const targetIndex =
                mainButton.getAttribute(
                  "data-slide-target"
                );


              setToolbarVisibility(
                targetIndex
              );


              requestAnimationFrame(
                () => {

                  updateOpenCardHeight();

                }
              );

            }
          );

        }
      );


      /* =====================================================
         OPEN / CLOSE BOLUS DROPDOWN
      ===================================================== */

      toggle.addEventListener(
        "click",
        (event) => {

          event.preventDefault();
          event.stopPropagation();


          const isOpen =
            toggle.getAttribute(
              "aria-expanded"
            ) === "true";


          toggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
          );


          menu.hidden =
            isOpen;


          if (icon) {

            icon.textContent =
              isOpen
                ? "▼"
                : "▲";

          }


          requestAnimationFrame(
            () => {

              updateOpenCardHeight();

            }
          );

        }
      );


      /* =====================================================
         SELECT BOLUS MODE
      ===================================================== */

      buttons.forEach(
        (
          button,
          buttonIndex
        ) => {

          button.addEventListener(
            "click",
            (event) => {

              event.preventDefault();
              event.stopPropagation();


              /* -----------------------------
                 ACTIVE BUTTON
              ----------------------------- */

              buttons.forEach(
                (
                  item,
                  index
                ) => {

                  item.classList.toggle(
                    "active",
                    index === buttonIndex
                  );

                }
              );


              /* -----------------------------
                 ACTIVE CONTENT PANEL
              ----------------------------- */

              panels.forEach(
                (
                  panel,
                  index
                ) => {

                  panel.classList.toggle(
                    "active",
                    index === buttonIndex
                  );

                }
              );


              /* -----------------------------
                 UPDATE DROPDOWN LABEL
              ----------------------------- */

              if (label) {

                label.textContent =
                  button.textContent.trim();

              }


              /* -----------------------------
                 CLOSE DROPDOWN
              ----------------------------- */

              menu.hidden = true;


              toggle.setAttribute(
                "aria-expanded",
                "false"
              );


              if (icon) {

                icon.textContent =
                  "▼";

              }


              /* -----------------------------
                 SCROLL BOLUS CONTENT TO TOP
              ----------------------------- */

              const activePanel =
                panels[
                  buttonIndex
                ];


              if (activePanel) {

                const slideScroll =
                  activePanel.closest(
                    ".slide-scroll"
                  );


                if (slideScroll) {

                  const sectionTop =
                    section.offsetTop;


                  slideScroll.scrollTo({
                    top:
                      Math.max(
                        0,
                        sectionTop - 12
                      ),

                    behavior:
                      "smooth"
                  });

                }

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
  );

}


/* =========================================================
   RESOURCE BUTTON EVENTS
========================================================= */

function bindResourceButtons() {

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


            activeStepIndex =
              stepIndex;


            openStepIndex =
              stepIndex;


            openOnlyStep(
              stepIndex
            );


            const slider =
              card.querySelector(
                "[data-slider]"
              );


            if (!slider) {
              return;
            }


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


  const viewport =
    slider.querySelector(
      ".slider-viewport"
    );


  const track =
    slider.querySelector(
      ".slider-track"
    );


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

    }
  );


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

        const start =
          Number(
            button.dataset.slideStart ??
            button.dataset.slideTarget ??
            index
          );


        const end =
          Number(
            button.dataset.slideEnd ??
            start
          );


        button.classList.toggle(
          "active",
          currentIndex >= start &&
          currentIndex <= end
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


    if (
      viewport &&
      track
    ) {

      const slideHeight =
        viewport.clientHeight;


      track.style.transform =
        `translateY(-${currentIndex * slideHeight}px)`;

    }


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

    // Arrows, dots, scrollbar, and programmatic navigation share this path.
    slider._syncBolusToolbar?.(currentIndex);


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
    Step 08 Resource Buttons
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


            const targetIndex =
              Number(
                button.dataset.slideTarget ??
                index
              );


            showSlide(
              targetIndex
            );

          }
        );

      }
    );

  }


  /* -------------------------------------------------------
     ▲ PREVIOUS SLIDE
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
     ▼ NEXT SLIDE
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


        event.preventDefault();

        event.stopPropagation();


        const rect =
          scrollbarTrack
            .getBoundingClientRect();


        if (rect.height <= 0) {
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


        const targetIndex =
          Math.round(
            ratio *
            (slides.length - 1)
          );


        showSlide(
          targetIndex
        );

      }
    );


    /* -----------------------------------------------------
       DRAG SCROLLBAR THUMB
    ----------------------------------------------------- */

    let dragging =
      false;


    let dragStartY =
      0;


    let dragStartTranslate =
      0;


    let dragPointerId =
      null;


    scrollbarThumb.addEventListener(
      "pointerdown",
      (event) => {

        if (slides.length <= 1) {
          return;
        }


        dragging =
          true;


        dragStartY =
          event.clientY;


        const trackHeight =
          scrollbarTrack.clientHeight;


        const thumbHeight =
          scrollbarThumb.offsetHeight;


        const availableTravel =
          Math.max(
            0,
            trackHeight - thumbHeight
          );


        dragStartTranslate =
          (
            currentIndex /
            (slides.length - 1)
          ) * availableTravel;


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


        const trackHeight =
          scrollbarTrack.clientHeight;


        const thumbHeight =
          scrollbarThumb.offsetHeight;


        const availableTravel =
          trackHeight -
          thumbHeight;


        if (
          availableTravel <= 0 ||
          slides.length <= 1
        ) {
          return;
        }


        const deltaY =
          event.clientY -
          dragStartY;


        const translateY =
          Math.min(
            availableTravel,
            Math.max(
              0,
              dragStartTranslate + deltaY
            )
          );


        const ratio =
          translateY /
          availableTravel;


        const targetIndex =
          Math.round(
            ratio *
            (slides.length - 1)
          );


        if (
          targetIndex !==
          currentIndex
        ) {

          showSlide(
            targetIndex
          );

        }

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

      showSlide(
        currentIndex
      );

    }
  );


  /* -------------------------------------------------------
     INITIAL STATE
  ------------------------------------------------------- */

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
            passive: true
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
            passive: true
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


    STEP 08 RESOURCE BUTTONS
    TH:
      อาหารแลกเปลี่ยน.png
      ประเมินการดูดซึมของอาหาร.png

    EN:
      Food Exchange.png
      Food Absorb Evaluation.png


    STEP 08 FOOD EXCHANGE CONTENT
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

        toolbar.addEventListener(
          "wheel",
          (event) => {

            if (!event.shiftKey) {
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
            passive: false
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


  if (index < 0) {
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
    steps[index];


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
      passive: true
    }
  );


  backTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
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

          ticking =
            false;

        }
      );

    },
    {
      passive: true
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
      headerHeight + 140;


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
      passive: true
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
                  (resourceButton) => {

                    const targetTopic =
                      Number(
                        resourceButton
                          .dataset
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
    passive: true
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


  /*
    ปิด Scroll Spy ไว้
    เพื่อไม่ให้ Step Navigation
    เปลี่ยนตามการเลื่อนหน้าเว็บไซต์
  */

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
     OPEN STEP FROM URL HASH
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
