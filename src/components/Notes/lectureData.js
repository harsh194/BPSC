export const lectureData = {
  lecture1: {
    id: "lecture-1",
    title: "Later Mughals and Provincial Kingdom",
    subtitle: "Post-Aurangzeb Era and Succession Wars",
    estimatedReadTime: "25-30 minutes",
    sections: [
      {
        id: "timeline-section",
        type: "timeline",
        title: "Mughal Empire Timeline",
        subtitle: "Complete chronological overview from Babur to Bahadur Shah Zafar",
        icon: "📅",
        content: {
          phases: [
            {
              phaseTitle: "Phase I: Prominent Mughal Emperors",
              items: [
                {
                  id: "babur-timeline",
                  title: "Babur",
                  period: "(1526 – 1530)",
                  description: "Founder of the Mughal Empire in India after the First Battle of Panipat",
                  type: "emperor",
                  keyPoints: [
                    "Established Mughal rule after defeating Ibrahim Lodi",
                    "Introduced new military tactics and artillery",
                    "Founded the dynasty that would rule India for over 300 years"
                  ]
                },
                {
                  id: "humayun-timeline",
                  title: "Humayun",
                  period: "First Reign: (1530 – 1540) | Second Reign: (1555 – 1556)",
                  description: "Faced challenges from Sher Shah Suri, regained throne with Persian help",
                  type: "emperor",
                  keyPoints: [
                    "Lost kingdom to Sher Shah Suri and fled to Persia",
                    "Regained throne with Persian military support",
                    "Father of Akbar the Great"
                  ]
                },
                {
                  id: "akbar-timeline",
                  title: "Akbar",
                  period: "(1556 – 1605)",
                  description: "The Great Mughal, established strong administrative system and policy of religious tolerance",
                  type: "emperor",
                  keyPoints: [
                    "Established Din-i-Ilahi and policy of Sulh-i-Kul",
                    "Created efficient administrative system",
                    "Expanded empire significantly through military campaigns"
                  ]
                },
                {
                  id: "jahangir-timeline",
                  title: "Jahangir",
                  period: "(1605 – 1627)",
                  description: "Known for his artistic patronage and system of justice",
                  type: "emperor",
                  keyPoints: [
                    "Famous for his chain of justice",
                    "Great patron of arts and literature",
                    "Faced rebellion from his son Prince Khurram (Shah Jahan)"
                  ]
                },
                {
                  id: "shahjahan-timeline",
                  title: "Shah Jahan",
                  period: "(1627 – 1658)",
                  description: "Builder of Taj Mahal, golden age of Mughal architecture",
                  type: "emperor",
                  keyPoints: [
                    "Built Taj Mahal as tomb for Mumtaz Mahal",
                    "Golden age of Mughal architecture and arts",
                    "Moved capital to Shahjahanabad (Delhi)"
                  ]
                },
                {
                  id: "aurangzeb-timeline",
                  title: "Aurangzeb",
                  period: "(1658 – 1707)",
                  description: "Last powerful Mughal emperor, died in March 1707, known for religious orthodoxy",
                  type: "emperor",
                  keyPoints: [
                    "Longest reigning Mughal emperor (49 years)",
                    "Expanded empire to its greatest territorial extent",
                    "Faced constant rebellions from Marathas, Sikhs, and Rajputs",
                    "Death marked beginning of Mughal decline"
                  ]
                }
              ]
            },
            {
              phaseTitle: "Phase II: Post-Mughal Emperors (Symbolic Authority)",
              items: [
                {
                  id: "bahadurshah1-timeline",
                  title: "Bahadur Shah I (Shah Alam I)",
                  period: "(1707 – 1712)",
                  description: "Real name Muazzam, ascended at age 63-65, known as Shah-e-Bekhabar",
                  type: "emperor",
                  keyPoints: [
                    "Won the war of succession against his brothers",
                    "Adopted conciliatory policies towards Rajputs and Marathas",
                    "Permitted Chauth (25%) and Sardeshmukhi (10%) to Marathas"
                  ]
                },
                {
                  id: "jahandarshah-timeline",
                  title: "Jahandar Shah",
                  period: "(1712 – 1713)",
                  description: "Weak ruler dominated by his vizier Zulfiqar Khan",
                  type: "emperor"
                },
                {
                  id: "farrukhsiyar-timeline",
                  title: "Farrukhsiyar",
                  period: "(1713 – 1719)",
                  description: "Puppet emperor under the control of Syed Brothers",
                  type: "emperor"
                },
                {
                  id: "rafi-ud-darajat-timeline",
                  title: "Rafi-ud-Darajat",
                  period: "(1719)",
                  description: "Brief reign of a few months, puppet emperor with no real power",
                  type: "emperor"
                },
                {
                  id: "shah-jahan2-timeline",
                  title: "Shah Jahan II (Rafi-ud-Daula)",
                  period: "(1719)",
                  description: "Another short-lived emperor in the chaotic year of 1719",
                  type: "emperor"
                },
                {
                  id: "muhammad-shah-timeline",
                  title: "Muhammad Shah",
                  period: "(1719 – 1748)",
                  description: "During his reign, Nadir Shah invaded India (1739). Stabilized after the chaotic period of 1719",
                  type: "emperor"
                }
              ]
            },
            {
              phaseTitle: "Final Phase: Complete Decline (1748-1857)",
              items: [
                {
                  id: "ahmed-shah-timeline",
                  title: "Ahmed Shah",
                  period: "(1748 – 1754)",
                  description: "Weak emperor with no real authority",
                  type: "emperor"
                },
                {
                  id: "alamgir2-timeline",
                  title: "Alamgir II",
                  period: "(1754 – 1759)",
                  description: "Period of increasing British dominance",
                  type: "emperor"
                },
                {
                  id: "shah-alam2-timeline",
                  title: "Shah Alam II",
                  period: "(1759 – 1806)",
                  description: "Witnessed Battle of Plassey (1757) and Treaty of Allahabad (1765)",
                  type: "emperor"
                },
                {
                  id: "akbar2-timeline",
                  title: "Akbar II",
                  period: "(1806 – 1837)",
                  description: "Pensioner of the British East India Company",
                  type: "emperor"
                },
                {
                  id: "bahadurshah-zafar-timeline",
                  title: "Bahadur Shah Zafar (Bahadur Shah II)",
                  period: "(1837 – 1857)",
                  description: "Last Mughal emperor, ended with Revolt of 1857, exiled to Rangoon",
                  type: "emperor",
                  keyPoints: [
                    "Nominal leader of 1857 Revolt",
                    "Poet and patron of arts",
                    "Exiled to Rangoon after revolt failed",
                    "Death marked end of Mughal Empire"
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        id: "aurangzeb-death-section",
        type: "general",
        title: "Death of Aurangzeb & Its Aftermath",
        subtitle: "The end of Mughal golden age and beginning of decline",
        icon: "💀",
        content: {
          keyPoints: [
            {
              title: "Death Date: March 1707",
              description: "Aurangzeb died on March 3, 1707 in the Deccan, marking the end of the powerful Mughal era. He was 88 years old and had ruled for 49 years."
            },
            {
              title: "Religious Policy Criticism",
              description: "Aurangzeb faced severe criticism for his religious policies, with 12 major critics noted in historical records. His orthodox policies alienated many communities."
            },
            {
              title: "Revolts and Resistance",
              description: "Akbar (son of Aurangzeb) had revolted against his father with support from Rajput ruler Durgadas Rathore. He fled to the Deccan (South) and later to Persia where he died in 1706. He was a strong critic of Aurangzeb's religious policies."
            },
            {
              title: "Other Notable Critics",
              description: "Arlan Khan was another notable figure who revolted against Aurangzeb and died in Persia in 1706. There were 12 major critics of Aurangzeb's religious policies documented in historical records."
            },
            {
              title: "Empire at Death",
              description: "At Aurangzeb's death, the empire was at its largest territorial extent but faced internal rebellions and economic strain from constant warfare."
            }
          ]
        }
      },
      {
        id: "sons-section",
        type: "personality",
        title: "Sons of Aurangzeb",
        subtitle: "The contenders for succession and their profiles",
        icon: "👥",
        content: {
          personalities: [
            {
              name: "Muhammad Azam Shah",
              period: "Born: 1653",
              titles: ["Governor of Ahmadnagar", "Second Son"],
              description: "Governor of Ahmadnagar during Aurangzeb's reign. According to the Mughal Bill of the Empire, Azam was assigned control over 8 important provinces. He was one of the main contenders for the Mughal throne after Aurangzeb's death.",
              keyPoints: [
                "Controlled 8 important provinces as per the Mughal Bill of the Empire (administrative record system)",
                "Main rival of Muazzam in the succession war", 
                "Declared himself ruler in Bijapur on 18 June 1707",
                "Killed in the Battle of Jajau on 20 June 1707"
              ]
            },
            {
              name: "Bahadur Shah I (Muazzam)",
              period: "Real Name: Muazzam",
              titles: ["Shah Alam I", "Eldest Son", "Governor of Kabul"],
              description: "The eldest son of Aurangzeb who became emperor after winning the war of succession. He advised Aurangzeb on the matter of Bijapur but was imprisoned for 12 years by his father.",
              keyPoints: [
                "Eldest son with claim to succession according to Mughal succession laws",
                "Controlled 12 important provinces as per the Mughal Bill of the Empire (official administrative record)",
                "Served as Governor of Kabul during Aurangzeb's reign",
                "Imprisoned for 12 years by Aurangzeb for advising on Bijapur matters",
                "Won the decisive Battle of Jajau establishing his authority"
              ]
            },
            {
              name: "Muhammad Kam Bakhsh",
              period: "Born: 1667",
              titles: ["Governor of Bijapur and Hyderabad", "Youngest Son"],
              description: "Governor of Bijapur and Hyderabad, the youngest son who also contested for the throne but was defeated and killed near Bijapur.",
              keyPoints: [
                "Youngest of the three surviving sons",
                "Governor of Bijapur and Hyderabad regions",
                "Died on 13 January 1709 near Bijapur",
                "Did not play major role in main succession battle"
              ]
            }
          ]
        }
      },
      {
        id: "war-succession-section",
        type: "battle",
        title: "War of Succession (1707)",
        subtitle: "The decisive battle that determined Mughal succession",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of Jajau",
              date: "20 June 1707",
              location: "Near Agra, Uttar Pradesh",
              contestants: ["Muazzam (from Kabul)", "Azam (from Ahmednagar)"],
              result: "Azam was defeated and killed by Muazzam",
              significance: "This decisive battle established Bahadur Shah I (Muazzam) as the undisputed successor to Aurangzeb. Azam had declared himself ruler in Bijapur on 18 June 1707, but was defeated just two days later. This marked the beginning of Bahadur Shah's 5-year reign and set the precedent for future Mughal succession disputes."
            }
          ]
        }
      },
      {
        id: "bahadur-shah-policies",
        type: "policy",
        title: "Bahadur Shah I's Reign (1707-1712)",
        subtitle: "Policies and administration of the first post-Aurangzeb emperor",
        icon: "👑",
        content: {
          policies: [
            {
              title: "Conciliatory Religious Policy",
              description: "Tried to reconcile with Rajputs, Sikhs, and Marathas, reversing some of Aurangzeb's harsh religious policies to reduce rebellions and gain support."
            },
            {
              title: "Maratha Settlement",
              description: "Permitted Chauth (25% tax) and Sardeshmukhi (10% tax) to Marathas under certain conditions, attempting to bring them into the imperial fold."
            },
            {
              title: "Regional Autonomy",
              description: "Adopted a more flexible approach toward regional powers, allowing greater autonomy to maintain stability across the vast empire."
            },
            {
              title: "Administrative Continuity",
              description: "Maintained the basic Mughal administrative structure while making tactical adjustments to address the challenges left by Aurangzeb's policies."
            }
          ]
        }
      },
      {
        id: "contemporary-events",
        type: "general",
        title: "Contemporary Events & Timeline",
        subtitle: "Major developments during the late Mughal period",
        icon: "🌍",
        content: {
          keyPoints: [
            {
              title: "British Territorial Expansion",
              description: "Sindh was annexed by the British in 1843, and Punjab was annexed in 1849, reducing Mughal territory and influence significantly."
            },
            {
              title: "Hyderabad's Status",
              description: "Hyderabad continued as a princely state under British protection, maintaining nominal independence while accepting British paramountcy."
            },
            {
              title: "The Great Revolt of 1857",
              description: "The Revolt of 1857 marked the final end of Mughal authority. Bahadur Shah Zafar was proclaimed emperor by the rebels but was later exiled to Rangoon."
            },
            {
              title: "Economic Decline",
              description: "The Mughal economy declined due to constant warfare, loss of territory, and British economic policies that favored British trade."
            }
          ]
        }
      },
      {
        id: "administrative-system",
        type: "policy",
        title: "Mughal Administrative System & Succession Laws",
        subtitle: "Understanding the administrative framework that governed succession",
        icon: "📜",
        content: {
          policies: [
            {
              title: "Mughal Bill of the Empire (Farman/Mansabdari System)",
              description: "An official administrative record system that documented provincial assignments and control. This system was crucial in determining the power base of each prince during succession disputes."
            },
            {
              title: "Provincial Distribution System",
              description: "According to the Mughal Bill of the Empire, Muazzam (later Bahadur Shah I) held control over 12 important provinces while Azam controlled 8 provinces, giving Muazzam a significant administrative advantage."
            },
            {
              title: "Succession Principles",
              description: "Unlike primogeniture, Mughal succession followed the principle of 'survival of the fittest' where any son could claim the throne if he had sufficient military and administrative support."
            },
            {
              title: "Regional Governor System",
              description: "Sons of emperors were typically appointed as governors of major provinces to gain administrative experience and build power bases for potential succession claims."
            }
          ]
        }
      }
    ]
  },

  lecture2: {
    id: "lecture-2",
    title: "Bahadur Shah I & Jahandar Shah (1707-1713)",
    subtitle: "Consolidation attempts and early decline",
    estimatedReadTime: "20-25 minutes",
    sections: [
      {
        id: "bahadur-shah-detailed",
        type: "personality",
        title: "Bahadur Shah I - Detailed Analysis",
        subtitle: "The first emperor of declining Mughal phase",
        icon: "👑",
        content: {
          personalities: [
            {
              name: "Bahadur Shah I (Muazzam)",
              period: "(1707-1712)",
              titles: ["Shah Alam I", "Shah-e-Bekhabar"],
              description: "First emperor of the declining Mughal phase, known for his conciliatory policies but nicknamed 'Shah-e-Bekhabar' (careless king) by historian Khafi Khan.",
              keyPoints: [
                "Age at ascension: 63-65 years old",
                "Real name was Muazzam",
                "Regnal title: Shah Alam I", 
                "Nicknamed Shah-e-Bekhabar by Khafi Khan",
                "Adopted conciliatory approach toward regional powers"
              ]
            }
          ]
        }
      },
      {
        id: "sikh-relations",
        type: "policy",
        title: "Relations with Sikhs",
        subtitle: "Bahadur Shah's policy towards Sikh community",
        icon: "🤝",
        content: {
          policies: [
            {
              title: "Guru Gobind Singh Relations",
              description: "Initially maintained cordial relations with Guru Gobind Singh, the 10th Sikh Guru, in an attempt to pacify Sikh resistance."
            },
            {
              title: "Banda Bahadur Conflict",
              description: "After Guru Gobind Singh's death, faced serious rebellion from Banda Bahadur (Banda Singh) who established Sikh political power in Punjab."
            },
            {
              title: "Military Campaigns",
              description: "Launched several military campaigns against Banda Bahadur but could not completely suppress Sikh resistance."
            }
          ]
        }
      },
      {
        id: "maratha-policy",
        type: "policy",
        title: "Maratha Relations & Tax System",
        subtitle: "Revolutionary tax concessions to Marathas",
        icon: "💰",
        content: {
          policies: [
            {
              title: "Chauth (25% Tax)",
              description: "Permitted Marathas to collect Chauth, which was 25% of the revenue from territories as protection money."
            },
            {
              title: "Sardeshmukhi (10% Tax)",
              description: "Allowed collection of Sardeshmukhi, which was 10% additional tax claimed by Marathas as their hereditary right."
            },
            {
              title: "Territorial Concessions",
              description: "Made significant territorial concessions to Marathas under certain conditions to maintain peace."
            },
            {
              title: "Diplomatic Approach",
              description: "Used diplomacy rather than military force to deal with Maratha expansion and demands."
            }
          ]
        }
      },
      {
        id: "jahandar-shah-reign",
        type: "personality",
        title: "Jahandar Shah (1712-1713)",
        subtitle: "The puppet emperor and factional politics",
        icon: "🎭",
        content: {
          personalities: [
            {
              name: "Jahandar Shah",
              period: "(1712-1713)",
              titles: ["Puppet Emperor", "Shortest Reigning Emperor"],
              description: "Weak ruler completely dominated by his vizier Zulfiqar Khan and marked by factional politics and administrative chaos.",
              keyPoints: [
                "Ruled for only one year",
                "Completely controlled by vizier Zulfiqar Khan",
                "Marked by intense factional politics",
                "Abolished Jizya tax in 1713",
                "Introduced Ijara system of revenue collection",
                "Overthrown by Farrukhsiyar with help of Syed Brothers"
              ]
            }
          ]
        }
      },
      {
        id: "administrative-changes",
        type: "policy",
        title: "Administrative & Economic Changes",
        subtitle: "Key policy changes during this period",
        icon: "📋",
        content: {
          policies: [
            {
              title: "Abolition of Jizya (1713)",
              description: "Jahandar Shah abolished the Jizya tax on non-Muslims in 1713, reversing Aurangzeb's religious tax policy."
            },
            {
              title: "Introduction of Ijara System",
              description: "Introduced the Ijara system where tax collection was farmed out to the highest bidders, leading to increased exploitation of peasants."
            },
            {
              title: "Mansabdari System Decline",
              description: "The traditional Mansabdari system continued to decline with reduction in the quality and loyalty of officers."
            },
            {
              title: "Treasury Depletion",
              description: "Constant warfare and poor administration led to depletion of imperial treasury and financial crisis."
            }
          ]
        }
      },
      {
        id: "syed-brothers-rise",
        type: "general",
        title: "Rise of Syed Brothers",
        subtitle: "The emergence of king-makers",
        icon: "👥",
        content: {
          keyPoints: [
            {
              title: "King Makers",
              description: "Syed Hassan Ali Khan Barha and Syed Hussain Ali Khan Barha emerged as powerful king-makers who could make and unmake emperors."
            },
            {
              title: "Military Support",
              description: "They controlled significant military forces and used them to influence succession politics."
            },
            {
              title: "Political Maneuvering",
              description: "Helped Farrukhsiyar overthrow Jahandar Shah in 1713, establishing their dominance over imperial politics."
            },
            {
              title: "Administrative Control",
              description: "Gained control over key administrative positions and influenced major policy decisions."
            }
          ]
        }
      }
    ]
  },

  lecture3: {
    id: "lecture-3", 
    title: "From Farrukhsiyar to Bahadur Shah Zafar (1713-1857)",
    subtitle: "Complete decline of Mughal authority",
    estimatedReadTime: "30-35 minutes",
    sections: [
      {
        id: "farrukhsiyar-reign",
        type: "personality",
        title: "Farrukhsiyar (1713-1719)",
        subtitle: "The puppet emperor under Syed Brothers",
        icon: "👑",
        content: {
          personalities: [
            {
              name: "Farrukhsiyar",
              period: "(1713-1719)",
              titles: ["Puppet Emperor", "British Farman Grantor"],
              description: "Completely controlled by the Syed Brothers, he granted important farmans to the British East India Company in 1717.",
              keyPoints: [
                "Brought to power by Syed Brothers",
                "Granted the famous British Farman of 1717",
                "Known as 'Magna Carta of the East India Company'",
                "Had no real authority in governance",
                "Eventually killed by the Syed Brothers in 1719"
              ]
            }
          ]
        }
      },
      {
        id: "british-farman-1717",
        type: "general",
        title: "British Farman of 1717",
        subtitle: "The Magna Carta of East India Company",
        icon: "📜",
        content: {
          keyPoints: [
            {
              title: "Trade Privileges",
              description: "Granted extensive trade privileges to the British East India Company, allowing them to trade freely in Bengal, Hyderabad, and Gujarat."
            },
            {
              title: "Customs Exemption",
              description: "Exempted British goods from customs duties in exchange for an annual payment of 3,000 rupees."
            },
            {
              title: "Territorial Rights",
              description: "Allowed the Company to purchase additional villages around Calcutta and granted them administrative rights."
            },
            {
              title: "Historical Significance",
              description: "Known as the 'Magna Carta of the East India Company' as it laid foundation for British commercial dominance in India."
            }
          ]
        }
      },
      {
        id: "puppet-emperors",
        type: "timeline",
        title: "Puppet Emperors (1719)",
        subtitle: "Rapid succession of weak rulers",
        icon: "🎭",
        content: {
          phases: [
            {
              phaseTitle: "The Year of Multiple Emperors (1719)",
              items: [
                {
                  id: "rafi-ud-darajat",
                  title: "Rafi-ud-Darajat",
                  period: "(1719) - Few months",
                  description: "First puppet emperor installed by Syed Brothers after killing Farrukhsiyar",
                  type: "emperor"
                },
                {
                  id: "shah-jahan-ii",
                  title: "Shah Jahan II (Rafi-ud-Daula)",
                  period: "(1719) - Few months", 
                  description: "Second puppet emperor in the same year, also controlled by Syed Brothers",
                  type: "emperor"
                }
              ]
            }
          ]
        }
      },
      {
        id: "muhammad-shah-rangeela",
        type: "personality",
        title: "Muhammad Shah 'Rangeela' (1719-1748)",
        subtitle: "The pleasure-loving emperor during foreign invasions",
        icon: "🎨",
        content: {
          personalities: [
            {
              name: "Muhammad Shah 'Rangeela'",
              period: "(1719-1748)",
              titles: ["The Colorful", "Pleasure-loving Emperor"],
              description: "Known for his love of arts and festivities while the empire faced serious external threats including Nadir Shah's invasion.",
              keyPoints: [
                "Longest reign in the declining phase (29 years)",
                "More interested in arts and entertainment than governance",
                "Witnessed Nadir Shah's invasion of Delhi (1739)",
                "Period saw rise of regional powers like Marathas and Sikhs",
                "Lost effective control over most provinces"
              ]
            }
          ]
        }
      },
      {
        id: "foreign-invasions",
        type: "battle",
        title: "Foreign Invasions",
        subtitle: "Nadir Shah and Ahmad Shah Abdali invasions",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Nadir Shah's Invasion",
              date: "1739",
              location: "Delhi",
              contestants: ["Nadir Shah of Persia", "Muhammad Shah"],
              result: "Complete defeat of Mughal forces, massacre in Delhi",
              significance: "Nadir Shah looted Delhi including the famous Peacock Throne and Kohinoor diamond. This invasion exposed Mughal military weakness and encouraged other regional powers to assert independence."
            },
            {
              name: "Ahmad Shah Abdali's Invasions",
              date: "1748-1767 (Multiple invasions)",
              location: "Northern India",
              contestants: ["Ahmad Shah Abdali", "Marathas and Mughals"],
              result: "Repeated victories for Abdali, culminating in Third Battle of Panipat (1761)",
              significance: "These invasions further weakened Mughal authority and led to the decline of Maratha power after 1761."
            }
          ]
        }
      },
      {
        id: "later-mughals-timeline",
        type: "timeline", 
        title: "Later Mughal Emperors (1748-1857)",
        subtitle: "The final phase of Mughal decline",
        icon: "📅",
        content: {
          phases: [
            {
              phaseTitle: "British Dominance Period",
              items: [
                {
                  id: "ahmed-shah-abdali-period",
                  title: "Ahmed Shah",
                  period: "(1748-1754)",
                  description: "Period of Ahmad Shah Abdali's invasions and complete loss of imperial control",
                  type: "emperor"
                },
                {
                  id: "alamgir-ii-period", 
                  title: "Alamgir II",
                  period: "(1754-1759)",
                  description: "Witnessed the Battle of Plassey (1757) which established British political supremacy",
                  type: "emperor"
                },
                {
                  id: "shah-alam-ii-period",
                  title: "Shah Alam II", 
                  period: "(1759-1806)",
                  description: "Signed Treaty of Allahabad (1765), became pensioner of East India Company",
                  type: "emperor",
                  keyPoints: [
                    "Witnessed Battle of Buxar (1764)",
                    "Signed Treaty of Allahabad (1765)",
                    "Granted Diwani rights to British",
                    "Became dependent on East India Company"
                  ]
                },
                {
                  id: "akbar-ii-period",
                  title: "Akbar II",
                  period: "(1806-1837)", 
                  description: "Complete pensioner of British, no real authority beyond Red Fort",
                  type: "emperor"
                },
                {
                  id: "bahadur-shah-zafar-period",
                  title: "Bahadur Shah Zafar",
                  period: "(1837-1857)",
                  description: "Last Mughal emperor, nominal leader of 1857 Revolt, exiled to Rangoon",
                  type: "emperor",
                  keyPoints: [
                    "Poet and patron of Urdu literature",
                    "Reluctant leader of 1857 Revolt",
                    "Trial and exile to Rangoon (Burma)",
                    "Death in 1862 marked end of Mughal dynasty"
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        id: "treaty-allahabad",
        type: "general",
        title: "Treaty of Allahabad (1765)",
        subtitle: "The formal beginning of British political control",
        icon: "📋",
        content: {
          keyPoints: [
            {
              title: "Diwani Rights",
              description: "Shah Alam II granted the Diwani (revenue collection rights) of Bengal, Bihar, and Orissa to the East India Company."
            },
            {
              title: "Dual Government",
              description: "Established the system of Dual Government in Bengal where the Company controlled revenue while the Nawab retained nominal political authority."
            },
            {
              title: "Annual Tribute",
              description: "The Company agreed to pay an annual tribute of 26 lakh rupees to the Mughal emperor."
            },
            {
              title: "Political Significance",
              description: "Marked the formal beginning of British political control in India and the end of Mughal sovereignty."
            }
          ]
        }
      }
    ]
  },

  lecture4: {
    id: "lecture-4",
    title: "European Companies - Advent and Background",
    subtitle: "The beginning of European colonial enterprise in Asia",
    estimatedReadTime: "25-30 minutes",
    sections: [
      {
        id: "european-motivations",
        type: "general",
        title: "European Motivations: God, Gold, and Glory",
        subtitle: "The three driving forces behind European expansion",
        icon: "🌍",
        content: {
          keyPoints: [
            {
              title: "God - Religious Motivations",
              description: "Spread of Christianity was a major driving force. Europeans saw themselves as carrying out a divine mission to convert the 'heathen' populations of Asia and Africa."
            },
            {
              title: "Gold - Economic Motivations", 
              description: "Search for wealth through trade in spices, precious metals, silk, and other luxury goods. The lucrative spice trade was particularly attractive."
            },
            {
              title: "Glory - Political Motivations",
              description: "National prestige, territorial expansion, and competition between European powers drove exploration and colonization efforts."
            },
            {
              title: "Technological Advantages",
              description: "Superior naval technology, firearms, and navigation techniques gave Europeans significant advantages in overseas expansion."
            }
          ]
        }
      },
      {
        id: "15th-century-europe",
        type: "general",
        title: "15th Century European Conditions",
        subtitle: "The backdrop that enabled European expansion",
        icon: "🏰",
        content: {
          keyPoints: [
            {
              title: "Recovery from Black Death",
              description: "Europe was recovering from the devastating Black Death (1347-1351) which had killed one-third of the population. This recovery led to increased trade and exploration."
            },
            {
              title: "Renaissance and Scientific Revolution",
              description: "The Renaissance brought new knowledge, scientific methods, and technological innovations that made long-distance sea voyages possible."
            },
            {
              title: "Consolidation of Nation-States",
              description: "Formation of strong centralized monarchies in Spain, Portugal, France, and England provided the political stability and resources needed for overseas expansion."
            },
            {
              title: "Commercial Revolution",
              description: "Development of new financial instruments, banking systems, and joint-stock companies provided the capital needed for expensive overseas ventures."
            }
          ]
        }
      },
      {
        id: "fall-constantinople",
        type: "general",
        title: "Fall of Constantinople (1453)",
        subtitle: "The event that changed trade routes forever",
        icon: "🏛️",
        content: {
          keyPoints: [
            {
              title: "Ottoman Conquest",
              description: "The Ottoman Empire conquered Constantinople in 1453, ending the Byzantine Empire and gaining control over the traditional trade routes to Asia."
            },
            {
              title: "Disruption of Trade Routes",
              description: "Ottoman control made the traditional land routes to Asia expensive and difficult for European merchants, necessitating the search for alternative sea routes."
            },
            {
              title: "Catalyst for Exploration",
              description: "The need to bypass Ottoman-controlled territories became a major driving force behind European exploration of sea routes to Asia."
            },
            {
              title: "Rise of Atlantic Powers",
              description: "This shift benefited Atlantic nations like Portugal and Spain over Mediterranean powers like Venice and Genoa."
            }
          ]
        }
      },
      {
        id: "technological-advances",
        type: "general",
        title: "Maritime Technological Advances",
        subtitle: "Innovations that made ocean exploration possible",
        icon: "⛵",
        content: {
          keyPoints: [
            {
              title: "Navigation Instruments",
              description: "Development of the compass, astrolabe, and quadrant allowed more accurate navigation on the open seas."
            },
            {
              title: "Ship Design",
              description: "New ship designs like the caravel and galleon were more seaworthy and capable of long ocean voyages."
            },
            {
              title: "Cartography",
              description: "Improved maps and charts based on new geographical knowledge made navigation safer and more reliable."
            },
            {
              title: "Firearms and Artillery",
              description: "Superior military technology gave Europeans advantages in conflicts with local powers in Asia and Africa."
            }
          ]
        }
      },
      {
        id: "why-india-important",
        type: "general",
        title: "Why India Was Important to Europeans",
        subtitle: "The attractions that drew European traders to India",
        icon: "💎",
        content: {
          keyPoints: [
            {
              title: "Spice Trade",
              description: "India was a major source of valuable spices like black pepper, cardamom, cinnamon, and cloves that were in high demand in Europe."
            },
            {
              title: "Textile Industry",
              description: "Indian cotton and silk textiles were highly prized in European markets for their quality and craftsmanship."
            },
            {
              title: "Precious Goods",
              description: "India was known for precious stones, pearls, indigo, and other luxury items that fetched high prices in Europe."
            },
            {
              title: "Strategic Location",
              description: "India's position in the Indian Ocean made it a crucial hub for trade between Europe, Southeast Asia, and China."
            },
            {
              title: "Large Population and Markets",
              description: "India's large and prosperous population offered significant markets for European goods."
            },
            {
              title: "Favorable Climate",
              description: "The tropical and subtropical climate was ideal for producing goods that could not be grown in Europe."
            }
          ]
        }
      },
      {
        id: "exploration-timeline",
        type: "timeline",
        title: "Major European Discoveries (1487-1770)",
        subtitle: "Key milestones in European exploration",
        icon: "🗺️",
        content: {
          phases: [
            {
              phaseTitle: "Portuguese Exploration Era",
              items: [
                {
                  id: "bartolomeu-dias",
                  title: "Bartolomeu Dias rounds Cape of Good Hope",
                  period: "1487",
                  description: "Portuguese explorer becomes first European to round the southern tip of Africa",
                  type: "exploration"
                },
                {
                  id: "vasco-da-gama",
                  title: "Vasco da Gama reaches India",
                  period: "1498",
                  description: "First direct sea route from Europe to India established via Cape of Good Hope",
                  type: "exploration"
                }
              ]
            },
            {
              phaseTitle: "Spanish and Other Explorations",
              items: [
                {
                  id: "columbus-america",
                  title: "Columbus reaches Americas",
                  period: "1492",
                  description: "While seeking route to India, Columbus accidentally discovers the Americas",
                  type: "exploration"
                },
                {
                  id: "magellan-pacific",
                  title: "Magellan crosses Pacific",
                  period: "1520-1521",
                  description: "First circumnavigation attempt demonstrates the true scope of global trade possibilities",
                  type: "exploration"
                },
                {
                  id: "cook-australia",
                  title: "Captain Cook reaches Australia",
                  period: "1770",
                  description: "British exploration extends to the Pacific, completing European knowledge of global geography",
                  type: "exploration"
                }
              ]
            }
          ]
        }
      },
      {
        id: "order-of-arrival",
        type: "timeline",
        title: "Order of European Arrival in India",
        subtitle: "Sequential establishment of European trading companies",
        icon: "🚢",
        content: {
          phases: [
            {
              phaseTitle: "European Arrival Sequence",
              items: [
                {
                  id: "portuguese-arrival",
                  title: "Portuguese",
                  period: "1498 (Vasco da Gama)",
                  description: "First Europeans to reach India by sea, established trading posts along the western coast",
                  type: "arrival"
                },
                {
                  id: "dutch-arrival", 
                  title: "Dutch",
                  period: "1602 (Dutch East India Company)",
                  description: "Established VOC (Vereenigde Oostindische Compagnie), focused on spice trade",
                  type: "arrival"
                },
                {
                  id: "british-arrival",
                  title: "British",
                  period: "1600 (East India Company chartered)",
                  description: "English East India Company began operations, eventually became dominant power",
                  type: "arrival"
                },
                {
                  id: "danish-arrival",
                  title: "Danish", 
                  period: "1620 (Tranquebar)",
                  description: "Established trading post at Tranquebar, smallest European presence",
                  type: "arrival"
                },
                {
                  id: "french-arrival",
                  title: "French",
                  period: "1664 (French East India Company)",
                  description: "Last major European power to arrive, established base at Pondicherry",
                  type: "arrival"
                }
              ]
            }
          ]
        }
      }
    ]
  },

  lecture5: {
    id: "lecture-5",
    title: "European Companies - Timeline and Impact",
    subtitle: "Comprehensive analysis of European colonial impact",
    estimatedReadTime: "25-30 minutes",
    sections: [
      {
        id: "european-advent-timeline",
        type: "timeline",
        title: "Complete Timeline of European Arrival",
        subtitle: "From Portuguese pioneers to French latecomers",
        icon: "📅",
        content: {
          phases: [
            {
              phaseTitle: "Pioneer Phase (1498-1600)",
              items: [
                {
                  id: "portuguese-first",
                  title: "Portuguese Arrival",
                  period: "1498",
                  description: "Vasco da Gama lands at Calicut, beginning European presence in India",
                  type: "arrival",
                  keyPoints: [
                    "First Europeans to reach India by sea",
                    "Established Estado da India administrative system",
                    "Controlled key ports along western coast"
                  ]
                }
              ]
            },
            {
              phaseTitle: "Company Era (1600-1664)",
              items: [
                {
                  id: "british-company",
                  title: "British East India Company",
                  period: "1600",
                  description: "Charter granted by Queen Elizabeth I, beginning of systematic British involvement",
                  type: "arrival"
                },
                {
                  id: "dutch-voc",
                  title: "Dutch East India Company (VOC)",
                  period: "1602",
                  description: "World's first multinational corporation, dominated spice trade",
                  type: "arrival"
                },
                {
                  id: "danish-company",
                  title: "Danish East India Company",
                  period: "1620",
                  description: "Established Tranquebar, smallest European presence",
                  type: "arrival"
                },
                {
                  id: "french-company",
                  title: "French East India Company",
                  period: "1664",
                  description: "Last major European company, established Pondicherry as base",
                  type: "arrival"
                }
              ]
            }
          ]
        }
      },
      {
        id: "multifaceted-impact",
        type: "general",
        title: "Multi-faceted Impact of European Advent",
        subtitle: "Comprehensive analysis across all spheres of life",
        icon: "🌐",
        content: {
          keyPoints: [
            {
              title: "Economic Impact",
              description: "Transformation of trade patterns, introduction of new crops and technologies, exploitation of resources, and gradual destruction of traditional industries."
            },
            {
              title: "Political Impact",
              description: "Decline of indigenous political structures, introduction of European administrative systems, and eventual colonial control."
            },
            {
              title: "Social Impact",
              description: "Changes in social hierarchies, introduction of new educational systems, and cultural interactions between Europeans and Indians."
            },
            {
              title: "Infrastructure Impact",
              description: "Development of ports, roads, telegraphs, and railways primarily serving colonial economic interests."
            }
          ]
        }
      },
      {
        id: "hundred-years-war",
        type: "general",
        title: "Hundred Years War (1337-1453) Background",
        subtitle: "European context that influenced expansion",
        icon: "⚔️",
        content: {
          keyPoints: [
            {
              title: "Anglo-French Conflict",
              description: "Series of conflicts between England and France over territorial and dynastic claims that shaped European politics."
            },
            {
              title: "Impact on Exploration",
              description: "The war's end freed up resources and attention for overseas expansion, particularly for England and France."
            },
            {
              title: "Technological Development",
              description: "Military innovations during the war, particularly in firearms and naval technology, were later applied to overseas expansion."
            },
            {
              title: "Economic Motivations",
              description: "The cost of warfare created need for new sources of wealth, driving interest in overseas trade and colonization."
            }
          ]
        }
      },
      {
        id: "portuguese-motivations",
        type: "policy",
        title: "Portuguese Motivations and Objectives",
        subtitle: "The driving forces behind Portuguese expansion",
        icon: "🇵🇹",
        content: {
          policies: [
            {
              title: "Spice Trade Monopoly",
              description: "Primary goal was to gain control over the lucrative spice trade by establishing direct sea routes to Asia, bypassing Muslim intermediaries."
            },
            {
              title: "Religious Expansion",
              description: "Spread of Christianity was a major motivation, supported by papal bulls that sanctioned Portuguese expansion in Asia and Africa."
            },
            {
              title: "Imperial Expansion",
              description: "Desire to build a global empire and compete with Spanish expansion in the Americas and Pacific."
            },
            {
              title: "Strategic Control",
              description: "Establishment of strategic naval bases to control key sea routes and protect Portuguese commercial interests."
            }
          ]
        }
      },
      {
        id: "plassey-significance",
        type: "battle",
        title: "Battle of Plassey (1757) - Significance",
        subtitle: "The battle that changed Indian history",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of Plassey",
              date: "23 June 1757",
              location: "Plassey, Bengal (West Bengal)",
              contestants: ["British East India Company (Robert Clive)", "Nawab Siraj-ud-Daulah"],
              result: "Decisive British victory due to betrayal by Mir Jafar",
              significance: "Established British political supremacy in India. Marked the beginning of British colonial rule. Led to the Company's control over Bengal's revenues and resources. Set the precedent for British expansion across India."
            }
          ]
        }
      },
      {
        id: "economic-transformation",
        type: "general",
        title: "Economic Transformation",
        subtitle: "How European advent changed Indian economy",
        icon: "💰",
        content: {
          keyPoints: [
            {
              title: "Trade Pattern Changes",
              description: "Shift from overland trade routes to sea-based commerce, changing traditional trading patterns and partnerships."
            },
            {
              title: "New Crops Introduction",
              description: "Introduction of crops like tobacco, potato, maize, and chili from the Americas through Portuguese and other European traders."
            },
            {
              title: "Industrial Decline",
              description: "Gradual decline of traditional Indian industries like textiles due to European competition and later colonial policies."
            },
            {
              title: "Financial Systems",
              description: "Introduction of European banking practices, currency systems, and commercial law that gradually replaced traditional systems."
            }
          ]
        }
      },
      {
        id: "technology-transfer",
        type: "general",
        title: "Technology and Knowledge Transfer",
        subtitle: "Exchange of technologies and ideas",
        icon: "🔬",
        content: {
          keyPoints: [
            {
              title: "Military Technology",
              description: "Introduction of European firearms, artillery, and naval technology that changed the nature of warfare in India."
            },
            {
              title: "Navigation and Cartography",
              description: "European advances in navigation, shipbuilding, and map-making influenced Indian maritime activities."
            },
            {
              title: "Printing Technology",
              description: "Portuguese introduction of printing press technology, which later played crucial role in education and communication."
            },
            {
              title: "Medical Knowledge",
              description: "Exchange of medical knowledge and practices between European and Indian systems of medicine."
            }
          ]
        }
      }
    ]
  },

  lecture6: {
    id: "lecture-6",
    title: "Portuguese Empire in India",
    subtitle: "The first European colonial power in India",
    estimatedReadTime: "20-25 minutes",
    sections: [
      {
        id: "vasco-da-gama",
        type: "personality",
        title: "Vasco da Gama's Voyages",
        subtitle: "The Portuguese navigator who opened the sea route to India",
        icon: "⛵",
        content: {
          personalities: [
            {
              name: "Vasco da Gama",
              period: "First Voyage: 1497-1499, Second Voyage: 1502-1503",
              titles: ["Admiral of the Indian Ocean", "Viceroy of India"],
              description: "Portuguese explorer who completed the first voyage from Europe to India by way of the Cape of Good Hope.",
              keyPoints: [
                "Landed at Calicut on May 20, 1498",
                "Established first direct sea trade route between Europe and Asia",
                "Faced initial resistance from Arab traders and local rulers",
                "Second voyage was more successful in establishing trade relations",
                "His voyages led to Portuguese dominance in Indian Ocean trade"
              ]
            }
          ]
        }
      },
      {
        id: "portuguese-governors",
        type: "personality", 
        title: "Portuguese Governors and Administrators",
        subtitle: "Key figures who shaped Portuguese rule in India",
        icon: "👑",
        content: {
          personalities: [
            {
              name: "Francisco de Almeida",
              period: "1505-1509",
              titles: ["First Viceroy of Portuguese India"],
              description: "Implemented the 'Blue Water Policy' focusing on naval supremacy rather than territorial conquest.",
              keyPoints: [
                "Established Portuguese naval dominance in Indian Ocean",
                "Built fortified bases along the coast",
                "Defeated Muslim naval coalition at Battle of Diu (1509)",
                "His policy focused on controlling sea routes rather than land"
              ]
            },
            {
              name: "Afonso de Albuquerque",
              period: "1509-1515",
              titles: ["The Great", "Architect of Portuguese Empire"],
              description: "Expanded Portuguese territories and established the foundation of Portuguese colonial empire in Asia.",
              keyPoints: [
                "Conquered Goa (1510) - became Portuguese capital in India",
                "Captured Malacca (1511) and Hormuz (1515)",
                "Encouraged intermarriage between Portuguese and Indians",
                "Built strong fortifications and naval bases",
                "His conquests formed the backbone of Estado da India"
              ]
            },
            {
              name: "Nuno da Cunha",
              period: "1529-1538",
              titles: ["Conqueror of Bassein"],
              description: "Extended Portuguese control to the northern regions and strengthened their position against Mughal expansion.",
              keyPoints: [
                "Conquered Bassein (1534) - important northern base",
                "Transferred capital from Cochin to Goa",
                "Dealt with growing Mughal power under Humayun",
                "Strengthened Portuguese defenses against Ottoman threat"
              ]
            }
          ]
        }
      },
      {
        id: "battle-of-diu",
        type: "battle",
        title: "Battle of Diu (1509)",
        subtitle: "Portuguese naval supremacy established",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of Diu",
              date: "February 3, 1509",
              location: "Diu, Gujarat",
              contestants: ["Portuguese Navy (Francisco de Almeida)", "Combined Muslim Fleet (Egyptians, Gujaratis, Calicut)"],
              result: "Decisive Portuguese victory, Muslim naval power broken",
              significance: "Established Portuguese naval supremacy in the Indian Ocean. Eliminated the threat from Muslim naval coalition. Secured Portuguese control over sea routes and trade. Marked the beginning of European dominance in Asian waters."
            }
          ]
        }
      },
      {
        id: "estado-da-india",
        type: "policy",
        title: "Estado da India - Portuguese Administrative System",
        subtitle: "The Portuguese colonial administrative framework",
        icon: "🏛️",
        content: {
          policies: [
            {
              title: "Blue Water Policy",
              description: "Focus on controlling sea routes and coastal bases rather than large territorial acquisitions. This policy emphasized naval supremacy and trading posts."
            },
            {
              title: "Cartaz System",
              description: "Licensing system for ships trading in Portuguese-controlled waters. All vessels had to obtain Portuguese passes (cartazes) to trade."
            },
            {
              title: "Viceregal Administration",
              description: "Centralized administration under the Viceroy based in Goa, with subordinate captains governing other territories."
            },
            {
              title: "Religious Policy",
              description: "Aggressive conversion policy supported by the Inquisition. Established missions and churches throughout their territories."
            }
          ]
        }
      },
      {
        id: "portuguese-settlements",
        type: "timeline",
        title: "Portuguese Settlements and Expansion",
        subtitle: "Chronological establishment of Portuguese bases",
        icon: "🏰",
        content: {
          phases: [
            {
              phaseTitle: "Early Establishments (1500-1520)",
              items: [
                {
                  id: "cochin-settlement",
                  title: "Cochin",
                  period: "1503",
                  description: "First permanent Portuguese settlement in India, established with help of local ruler",
                  type: "settlement"
                },
                {
                  id: "goa-conquest",
                  title: "Goa",
                  period: "1510",
                  description: "Conquered by Albuquerque, became the capital of Portuguese India",
                  type: "settlement"
                },
                {
                  id: "diu-acquisition",
                  title: "Diu",
                  period: "1535",
                  description: "Strategic island base acquired after prolonged negotiations with Gujarat",
                  type: "settlement"
                }
              ]
            },
            {
              phaseTitle: "Consolidation Period (1520-1600)",
              items: [
                {
                  id: "bombay-acquisition",
                  title: "Bombay (Mumbai)",
                  period: "1534",
                  description: "Group of islands acquired and developed as important trading center",
                  type: "settlement"
                },
                {
                  id: "daman-settlement",
                  title: "Daman",
                  period: "1559",
                  description: "Northern outpost controlling approaches to Gujarat",
                  type: "settlement"
                }
              ]
            }
          ]
        }
      },
      {
        id: "portuguese-decline",
        type: "general",
        title: "Portuguese Decline and Military Defeats",
        subtitle: "Factors leading to Portuguese decline in India",
        icon: "📉",
        content: {
          keyPoints: [
            {
              title: "Battle of Swally (1612)",
              description: "Portuguese defeated by English East India Company fleet. This marked the beginning of Portuguese naval decline and English ascendancy in Indian waters."
            },
            {
              title: "Dutch Competition",
              description: "Dutch East India Company challenged Portuguese monopoly in spice trade, capturing many Portuguese territories in Southeast Asia."
            },
            {
              title: "Maratha Pressure",
              description: "Growing Maratha power threatened Portuguese territories on the western coast, forcing them to pay tribute."
            },
            {
              title: "Spanish Union (1580-1640)",
              description: "Portuguese independence was compromised during union with Spain, weakening their overseas empire."
            },
            {
              title: "Final Exit (1961)",
              description: "Portuguese rule in India finally ended in 1961 when Indian forces liberated Goa, Daman, and Diu."
            }
          ]
        }
      },
      {
        id: "portuguese-contributions",
        type: "general",
        title: "Portuguese Contributions to India",
        subtitle: "Lasting impact of Portuguese presence",
        icon: "🎁",
        content: {
          keyPoints: [
            {
              title: "New World Crops",
              description: "Introduced crops from the Americas including potato, tomato, chili, tobacco, cashew, and pineapple, revolutionizing Indian agriculture and cuisine."
            },
            {
              title: "Printing Press",
              description: "Brought the first printing press to India in 1556, leading to the first printed books in Indian languages."
            },
            {
              title: "Gothic Architecture",
              description: "Introduced European architectural styles, evident in churches and buildings in Goa and other Portuguese territories."
            },
            {
              title: "Military Technology",
              description: "Introduced advanced firearms, artillery, and naval technology that influenced Indian warfare."
            },
            {
              title: "Educational Institutions",
              description: "Established schools and colleges, contributing to education and spread of Western learning."
            },
            {
              title: "Medical Knowledge",
              description: "Introduced European medical practices and established hospitals, contributing to healthcare development."
            }
          ]
        }
      }
    ]
  },

  lecture7: {
    id: "lecture-7",
    title: "Dutch, Danish & French Companies",
    subtitle: "European competition for Indian trade dominance",
    estimatedReadTime: "25-30 minutes",
    sections: [
      {
        id: "dutch-east-india-company",
        type: "personality",
        title: "Dutch East India Company (VOC)",
        subtitle: "The world's first multinational corporation",
        icon: "🏢",
        content: {
          personalities: [
            {
              name: "Dutch East India Company (VOC)",
              period: "1602-1795",
              titles: ["Vereenigde Oostindische Compagnie", "World's First Multinational"],
              description: "The first true multinational corporation with extraordinary powers including the right to wage war, negotiate treaties, and establish colonies.",
              keyPoints: [
                "Founded in 1602 by merger of several Dutch trading companies",
                "Had sovereign powers including right to make war and peace",
                "Issued the world's first stock certificates and shares",
                "Controlled spice trade from Indonesia",
                "Eventually the world's most valuable company in history",
                "Declined after Fourth Anglo-Dutch War (1780-1784)"
              ]
            }
          ]
        }
      },
      {
        id: "dutch-settlements",
        type: "timeline",
        title: "Dutch Settlements and Trade Pattern",
        subtitle: "Dutch expansion in India and Southeast Asia",
        icon: "🗺️",
        content: {
          phases: [
            {
              phaseTitle: "Early Dutch Expansion (1605-1650)",
              items: [
                {
                  id: "masulipatnam-base",
                  title: "Masulipatnam",
                  period: "1605",
                  description: "First Dutch settlement in India, important textile trading center on Coromandel coast",
                  type: "settlement"
                },
                {
                  id: "pulicat-factory",
                  title: "Pulicat",
                  period: "1610",
                  description: "Major Dutch factory for textile trade, competing with English and Portuguese",
                  type: "settlement"
                },
                {
                  id: "cochin-capture",
                  title: "Cochin",
                  period: "1663",
                  description: "Captured from Portuguese, became major spice trading center",
                  type: "settlement"
                }
              ]
            },
            {
              phaseTitle: "Consolidation Period (1650-1750)",
              items: [
                {
                  id: "nagapattinam-base",
                  title: "Nagapattinam",
                  period: "1690",
                  description: "Important naval base and trading center on Tamil Nadu coast",
                  type: "settlement"
                },
                {
                  id: "chinsurah-bengal",
                  title: "Chinsurah (Bengal)",
                  period: "1656",
                  description: "Major Dutch settlement in Bengal for textile and saltpeter trade",
                  type: "settlement"
                }
              ]
            }
          ]
        }
      },
      {
        id: "battle-of-bedara",
        type: "battle",
        title: "Battle of Bedara/Chinsurah (1759)",
        subtitle: "Dutch defeat and exit from Indian politics",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of Bedara (Chinsurah)",
              date: "November 25, 1759",
              location: "Bedara (near Chinsurah), Bengal",
              contestants: ["British East India Company", "Dutch East India Company"],
              result: "Decisive British victory, Dutch political ambitions in India ended",
              significance: "Ended Dutch hopes of political expansion in India. Confirmed British supremacy in Bengal after Plassey. Dutch confined to commercial activities only. Marked the decline of Dutch power in Indian Ocean."
            }
          ]
        }
      },
      {
        id: "danish-east-india-company",
        type: "personality",
        title: "Danish East India Company",
        subtitle: "The smallest European presence in India",
        icon: "🇩🇰",
        content: {
          personalities: [
            {
              name: "Danish East India Company",
              period: "1616-1845",
              titles: ["Ostindisk Kompagni", "First to Leave India"],
              description: "The smallest European trading company in India, focused mainly on Tranquebar and Serampore.",
              keyPoints: [
                "Established Tranquebar (1620) as main base",
                "Later acquired Serampore in Bengal (1755)",
                "Smallest European presence in India",
                "First European company to sell its Indian territories",
                "Sold Tranquebar to British (1845) and Serampore (1845)",
                "Never posed serious challenge to other European powers"
              ]
            }
          ]
        }
      },
      {
        id: "danish-settlements",
        type: "general",
        title: "Danish Settlements and Activities",
        subtitle: "Limited but significant Danish presence",
        icon: "🏰",
        content: {
          keyPoints: [
            {
              title: "Tranquebar (1620)",
              description: "Main Danish settlement on the Coromandel coast. Served as base for missionary activities and limited trade in textiles and spices."
            },
            {
              title: "Serampore (1755)",
              description: "Danish settlement in Bengal, became famous for missionary work and education under William Carey and the Serampore Mission."
            },
            {
              title: "Missionary Activities",
              description: "Danes were particularly active in Christian missionary work and education, contributing significantly to Bengali Renaissance."
            },
            {
              title: "Early Exit (1845)",
              description: "First European power to voluntarily exit India, selling their territories to the British rather than being defeated militarily."
            }
          ]
        }
      },
      {
        id: "french-east-india-company",
        type: "personality", 
        title: "French East India Company",
        subtitle: "The last major European arrival and serious British rival",
        icon: "🇫🇷",
        content: {
          personalities: [
            {
              name: "French East India Company",
              period: "1664-1794",
              titles: ["Compagnie française pour le commerce des Indes orientales", "British Rival"],
              description: "Last major European company to arrive in India, became the most serious challenger to British supremacy.",
              keyPoints: [
                "Established by Jean-Baptiste Colbert in 1664",
                "Set up headquarters at Pondicherry (1674)",
                "Under Dupleix, adopted political objectives beyond trade",
                "Fought three Carnatic Wars against British (1746-1763)",
                "Introduced new military tactics with Indian sepoys",
                "Finally defeated at Battle of Wandiwash (1760)"
              ]
            }
          ]
        }
      },
      {
        id: "dupleix-era",
        type: "personality",
        title: "Dupleix Era and Political Objectives",
        subtitle: "French ambitions for political control in India",
        icon: "🎭",
        content: {
          personalities: [
            {
              name: "Joseph François Dupleix",
              period: "Governor: 1741-1754",
              titles: ["Governor of French India", "Political Strategist"],
              description: "Transformed French approach from purely commercial to political, seeking to establish French territorial empire in India.",
              keyPoints: [
                "First European to mix politics with trade systematically",
                "Introduced subsidiary alliance system",
                "Trained Indian sepoys in European military tactics", 
                "Attempted to establish French supremacy in South India",
                "His political ambitions led to conflicts with British",
                "Recalled to France after failures against British"
              ]
            }
          ]
        }
      },
      {
        id: "battle-of-wandiwash",
        type: "battle",
        title: "Battle of Wandiwash (1760)",
        subtitle: "Final French defeat and end of political ambitions",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of Wandiwash",
              date: "January 22, 1760",
              location: "Wandiwash (Vandavasi), Tamil Nadu",
              contestants: ["British forces under Eyre Coote", "French forces under Comte de Lally"],
              result: "Decisive British victory, French political power in India ended",
              significance: "Ended French dreams of empire in India. Confirmed British supremacy in South India. Led to capture of Pondicherry by British. Marked the end of European competition for political control in India."
            }
          ]
        }
      },
      {
        id: "european-competition-comparison",
        type: "general",
        title: "Comparison of European Companies",
        subtitle: "Strengths and weaknesses of different European powers",
        icon: "⚖️",
        content: {
          keyPoints: [
            {
              title: "Portuguese (1498-1961)",
              description: "Pioneers with early advantage, but limited resources and population. Focused on coastal bases and religious conversion. Declined due to Dutch and English competition."
            },
            {
              title: "Dutch (1602-1795)",
              description: "Most organized and financially strong company. Focused on spice trade monopoly. Declined due to repeated wars with England and France in Europe."
            },
            {
              title: "Danish (1620-1845)",
              description: "Smallest presence, focused on missionary work and limited trade. First to exit voluntarily, recognizing their limitations."
            },
            {
              title: "French (1664-1794)",
              description: "Last to arrive but most ambitious politically. Strong military organization under Dupleix. Defeated due to superior British naval power and resources."
            },
            {
              title: "British (1600-1947)",
              description: "Most successful due to superior naval power, financial resources, and pragmatic approach. Eventually established complete political control."
            }
          ]
        }
      }
    ]
  },

  lecture8: {
    id: "lecture-8",
    title: "British East India Company",
    subtitle: "Rise of the most successful European trading company",
    estimatedReadTime: "25-30 minutes",
    sections: [
      {
        id: "early-british-attempts",
        type: "timeline",
        title: "Early British Attempts to Enter India",
        subtitle: "From individual merchants to organized company",
        icon: "🚢",
        content: {
          phases: [
            {
              phaseTitle: "Individual Efforts (1599-1608)",
              items: [
                {
                  id: "john-mildenhall",
                  title: "John Mildenhall",
                  period: "1599",
                  description: "First British merchant to reach India overland, seeking trade opportunities",
                  type: "arrival",
                  keyPoints: [
                    "Traveled overland via Turkey and Persia",
                    "Reached Agra during Akbar's reign",
                    "Failed to secure trading privileges",
                    "Paved the way for future British efforts"
                  ]
                }
              ]
            },
            {
              phaseTitle: "Company Formation (1600-1615)",
              items: [
                {
                  id: "company-charter",
                  title: "East India Company Charter",
                  period: "December 31, 1600",
                  description: "Queen Elizabeth I granted charter to 'Company of Merchants of London Trading into the East Indies'",
                  type: "establishment"
                },
                {
                  id: "william-hawkins",
                  title: "William Hawkins Mission",
                  period: "1608-1611",
                  description: "First official Company representative to Mughal court of Jahangir",
                  type: "diplomacy",
                  keyPoints: [
                    "Reached Jahangir's court in Agra (1609)",
                    "Received personal favor from Jahangir",
                    "Failed to secure formal trading privileges",
                    "Opposed by Portuguese influence at court"
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        id: "thomas-roe-mission",
        type: "personality",
        title: "Sir Thomas Roe's Embassy (1615-1619)",
        subtitle: "The diplomatic breakthrough for British trade",
        icon: "🤝",
        content: {
          personalities: [
            {
              name: "Sir Thomas Roe",
              period: "Ambassador: 1615-1619",
              titles: ["British Ambassador", "Diplomatic Pioneer"],
              description: "First official British ambassador to the Mughal court, successfully established the foundation for British trade in India.",
              keyPoints: [
                "Sent by King James I as official ambassador to Jahangir",
                "Established diplomatic protocol for European-Mughal relations",
                "Secured initial trading privileges for the Company",
                "Advocated for trade over territorial acquisition",
                "His diplomatic success opened doors for future expansion",
                "Laid foundation for the Royal Farman of 1717"
              ]
            }
          ]
        }
      },
      {
        id: "british-settlements-establishment",
        type: "timeline",
        title: "Establishment of British Settlements",
        subtitle: "Strategic expansion across Indian coasts",
        icon: "🏰",
        content: {
          phases: [
            {
              phaseTitle: "Western Coast Establishments",
              items: [
                {
                  id: "surat-factory",
                  title: "Surat Factory",
                  period: "1612",
                  description: "First permanent British factory in India, established after defeating Portuguese at Swally",
                  type: "settlement",
                  keyPoints: [
                    "Gateway to Mughal trade",
                    "Base for trade with West Asia and Europe",
                    "Headquarters of British operations until 1687"
                  ]
                },
                {
                  id: "bombay-acquisition",
                  title: "Bombay (Mumbai)",
                  period: "1668",
                  description: "Acquired from Portuguese as part of Catherine of Braganza's dowry",
                  type: "settlement"
                }
              ]
            },
            {
              phaseTitle: "Eastern Coast Expansion",
              items: [
                {
                  id: "madras-foundation",
                  title: "Madras (Chennai)",
                  period: "1639",
                  description: "Founded by Francis Day, became Fort St. George, major base on Coromandel coast",
                  type: "settlement"
                },
                {
                  id: "calcutta-foundation",
                  title: "Calcutta (Kolkata)", 
                  period: "1690",
                  description: "Founded by Job Charnock, became Fort William, major base in Bengal",
                  type: "settlement"
                }
              ]
            }
          ]
        }
      },
      {
        id: "royal-farman-1717",
        type: "general",
        title: "Royal Farman of 1717 - Magna Carta of the Company",
        subtitle: "The decisive advantage in Indian trade",
        icon: "📜",
        content: {
          keyPoints: [
            {
              title: "Background and Context",
              description: "Granted by Mughal Emperor Farrukhsiyar under pressure from Syed Brothers, in recognition of Company's medical services to the emperor."
            },
            {
              title: "Trade Privileges",
              description: "Allowed the Company to trade freely in Bengal, Hyderabad, and Gujarat without paying customs duties in exchange for annual payment of 3,000 rupees."
            },
            {
              title: "Territorial Rights",
              description: "Permitted the Company to purchase 38 villages around Calcutta and granted them administrative rights over these territories."
            },
            {
              title: "Judicial Powers",
              description: "Granted limited judicial powers to the Company in their settlements, laying foundation for later administrative expansion."
            },
            {
              title: "Historical Significance",
              description: "Called 'Magna Carta of the East India Company' as it provided the legal foundation for British commercial dominance and eventual political control of India."
            }
          ]
        }
      },
      {
        id: "conflicts-with-aurangzeb",
        type: "battle",
        title: "Conflicts with Aurangzeb",
        subtitle: "Early challenges and military confrontations",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Child's War (Siege of Bombay)",
              date: "1686-1690",
              location: "Bombay and Bengal",
              contestants: ["East India Company", "Mughal forces under Aurangzeb"],
              result: "Company defeat, forced to pay huge indemnity and seek pardon",
              significance: "Taught the Company that military confrontation with Mughal Empire was premature. Led to more diplomatic approach and focus on trade rather than territorial conquest. Demonstrated Mughal military superiority at that time."
            }
          ]
        }
      },
      {
        id: "company-structure-evolution",
        type: "policy",
        title: "Company Structure and Administrative Evolution",
        subtitle: "From trading company to quasi-sovereign power",
        icon: "🏛️",
        content: {
          policies: [
            {
              title: "Joint Stock Company Structure",
              description: "Organized as joint stock company with shareholders, governors, and board of directors in London. Revolutionary corporate structure for its time."
            },
            {
              title: "Factory System",
              description: "Established factories (trading posts) with factors (agents) managing local trade. Each factory had its own administration and security."
            },
            {
              title: "Presidency System",
              description: "Organized Indian territories into three presidencies: Bengal (Calcutta), Madras, and Bombay, each with its own governor."
            },
            {
              title: "Gradual Sovereign Powers",
              description: "Gradually acquired administrative, judicial, and military powers, transforming from trading company to de facto ruler."
            }
          ]
        }
      },
      {
        id: "early-challenges",
        type: "general",
        title: "Early Challenges and Obstacles",
        subtitle: "Hurdles faced by the Company in establishment",
        icon: "🚧",
        content: {
          keyPoints: [
            {
              title: "Portuguese Opposition",
              description: "Faced strong resistance from established Portuguese traders who tried to prevent British entry into profitable Asian trade routes."
            },
            {
              title: "Dutch Competition",
              description: "Competed with the powerful Dutch East India Company, which had superior financial resources and naval power initially."
            },
            {
              title: "Mughal Bureaucracy",
              description: "Had to navigate complex Mughal administrative system and gain approval from multiple levels of officials for trading privileges."
            },
            {
              title: "Capital Constraints",
              description: "Initially faced financial difficulties and had to compete for investors with other trading ventures and domestic opportunities."
            },
            {
              title: "Cultural Barriers",
              description: "Had to adapt to Indian business practices, languages, and cultural norms while establishing trade relationships."
            }
          ]
        }
      }
    ]
  },

  lecture9: {
    id: "lecture-9",
    title: "Carnatic Wars - First War (1746-1748)",
    subtitle: "The beginning of Anglo-French rivalry in India",
    estimatedReadTime: "20-25 minutes",
    sections: [
      {
        id: "anglo-french-rivalry-background",
        type: "general",
        title: "Background of Anglo-French Rivalry",
        subtitle: "European conflicts extending to Indian theater",
        icon: "🌍",
        content: {
          keyPoints: [
            {
              title: "War of Austrian Succession (1740-1748)",
              description: "Major European conflict between Britain and France that extended to their Indian territories. The European balance of power struggle was reflected in colonial competition."
            },
            {
              title: "Commercial Competition",
              description: "Both British and French East India Companies competed for the lucrative Indian trade, particularly in textiles, spices, and other luxury goods."
            },
            {
              title: "Strategic Importance of Carnatic",
              description: "The Carnatic region (modern Tamil Nadu and parts of Andhra Pradesh) was strategically vital for controlling South Indian trade and politics."
            },
            {
              title: "Naval Supremacy Contest",
              description: "Control of Indian Ocean trade routes became crucial for European powers, making naval dominance a key factor in the conflict."
            }
          ]
        }
      },
      {
        id: "first-carnatic-war-overview",
        type: "battle",
        title: "First Carnatic War (1746-1748)",
        subtitle: "Extension of War of Austrian Succession to India",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Capture of Madras",
              date: "September 1746",
              location: "Madras (Chennai)",
              contestants: ["French forces under Dupleix", "British garrison of Fort St. George"],
              result: "French victory, Madras captured",
              significance: "Demonstrated French naval superiority and strategic planning. Established Dupleix's reputation as military strategist. Showed vulnerability of British positions in South India."
            }
          ]
        }
      },
      {
        id: "key-personalities-first-war",
        type: "personality",
        title: "Key Personalities of First Carnatic War",
        subtitle: "Leaders who shaped the conflict",
        icon: "👥",
        content: {
          personalities: [
            {
              name: "Joseph François Dupleix",
              period: "French Governor: 1741-1754",
              titles: ["Governor of French India", "Military Strategist"],
              description: "Brilliant administrator and strategist who transformed French approach in India from purely commercial to political and military.",
              keyPoints: [
                "Planned and executed capture of Madras (1746)",
                "First European to combine politics with trade systematically",
                "Introduced new military tactics using Indian sepoys",
                "Sought to establish French territorial empire in South India",
                "His success made French Company's stock rise dramatically"
              ]
            },
            {
              name: "Major Stringer Lawrence",
              period: "British Military Commander",
              titles: ["Father of the Indian Army"],
              description: "British military officer who reorganized British defenses and laid foundation for professional Indian army.",
              keyPoints: [
                "Led British resistance against French expansion",
                "Modernized British military organization in India",
                "Mentored young Robert Clive in military affairs",
                "Established training programs for Indian sepoys",
                "Created disciplined military force from diverse recruits"
              ]
            },
            {
              name: "Robert Clive (Young Officer)",
              period: "Junior British Officer: 1744-1753",
              titles: ["Future 'Clive of India'"],
              description: "Young British clerk-turned-soldier who emerged as military genius during the Carnatic Wars.",
              keyPoints: [
                "Started as Company clerk, became military officer",
                "Captured as prisoner when Madras fell to French",
                "Escaped French captivity and joined British resistance",
                "Showed early signs of military brilliance",
                "His experiences here shaped his later conquests"
              ]
            }
          ]
        }
      },
      {
        id: "battle-of-st-thome",
        type: "battle",
        title: "Battle of St. Thome (1746)",
        subtitle: "Demonstration of European military superiority",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of St. Thome",
              date: "1746",
              location: "St. Thome (near Madras)",
              contestants: ["French forces with European tactics", "Nawab of Carnatic's traditional army"],
              result: "Decisive French victory despite being heavily outnumbered",
              significance: "First clear demonstration that a small, well-trained European force could defeat much larger Indian armies. Showed the superiority of European military tactics, discipline, and firearms. Changed the perception of European military capabilities among Indian rulers."
            }
          ]
        }
      },
      {
        id: "military-innovations",
        type: "policy",
        title: "Military Innovations and Tactics",
        subtitle: "New warfare methods introduced in the Carnatic Wars",
        icon: "🎯",
        content: {
          policies: [
            {
              title: "European Drill and Discipline",
              description: "Introduction of European military drill, regular training, and strict discipline among Indian soldiers (sepoys), creating more effective fighting forces."
            },
            {
              title: "Combined Arms Tactics",
              description: "Integration of infantry, cavalry, and artillery in coordinated battle formations, replacing traditional Indian military methods."
            },
            {
              title: "Fortification Techniques",
              description: "European methods of fort construction and siege warfare, including use of artillery and systematic approaches to capturing fortified positions."
            },
            {
              title: "Professional Officer Corps",
              description: "Development of professional military leadership with European officers training and commanding Indian troops, creating modern military hierarchy."
            }
          ]
        }
      },
      {
        id: "impact-on-local-politics",
        type: "general",
        title: "Impact on Local Politics",
        subtitle: "How European conflict affected Indian rulers",
        icon: "🏛️",
        content: {
          keyPoints: [
            {
              title: "Nawab of Carnatic's Position",
              description: "The Nawab found himself caught between European powers, forced to take sides in conflicts that originated in Europe but affected his territory."
            },
            {
              title: "Subsidiary Alliances Concept",
              description: "Early development of the concept where Indian rulers would accept European military support in exchange for concessions and influence."
            },
            {
              title: "Changing Power Dynamics",
              description: "Traditional Indian political structures began to be influenced by European military capabilities and political strategies."
            },
            {
              title: "Economic Consequences",
              description: "War brought economic disruption to the region, affecting trade and agriculture, while European companies profited from military contracts."
            }
          ]
        }
      },
      {
        id: "treaty-aix-la-chapelle",
        type: "general",
        title: "Treaty of Aix-la-Chapelle (1748)",
        subtitle: "European settlement affecting Indian territories",
        icon: "📋",
        content: {
          keyPoints: [
            {
              title: "European Context",
              description: "Signed in Europe to end the War of Austrian Succession, the treaty had direct implications for European territories in India."
            },
            {
              title: "Madras Restoration",
              description: "Under the treaty terms, France agreed to return Madras to the British in exchange for Louisbourg in North America."
            },
            {
              title: "Status Quo Ante",
              description: "The treaty essentially restored the pre-war status quo in India, but the military lessons learned would influence future conflicts."
            },
            {
              title: "Temporary Peace",
              description: "The treaty provided only temporary peace, as underlying Anglo-French competition in India remained unresolved, setting stage for Second Carnatic War."
            },
            {
              title: "Indian Ruler Reactions",
              description: "Indian rulers learned that European territorial decisions could be made in Europe without their consultation, affecting their sovereignty."
            }
          ]
        }
      },
      {
        id: "lessons-and-consequences",
        type: "general",
        title: "Lessons and Long-term Consequences",
        subtitle: "What the First Carnatic War revealed and established",
        icon: "🔍",
        content: {
          keyPoints: [
            {
              title: "European Military Superiority",
              description: "Clearly demonstrated that small, well-disciplined European forces could defeat much larger traditional Indian armies through superior tactics and weapons."
            },
            {
              title: "Importance of Naval Power",
              description: "Showed that control of sea routes and naval supremacy were crucial for maintaining and supplying overseas territories and forces."
            },
            {
              title: "Political-Military Integration",
              description: "Dupleix's success proved that combining political strategy with military action could achieve greater results than pure commercial activity."
            },
            {
              title: "Indian Sepoy Potential",
              description: "Revealed that Indian soldiers, when trained in European methods and led by European officers, could be highly effective fighting forces."
            },
            {
              title: "Foundation for Future Conflicts",
              description: "Set the pattern for subsequent Carnatic Wars and established many of the strategies and tactics that would be used in later Anglo-French conflicts in India."
            }
          ]
        }
      }
    ]
  },

  lecture10: {
    id: "lecture-10",
    title: "Carnatic Wars - Second & Third Wars (1749-1763)",
    subtitle: "Decisive Anglo-French struggle for Indian supremacy",
    estimatedReadTime: "30-35 minutes",
    sections: [
      {
        id: "second-carnatic-war-background",
        type: "general",
        title: "Second Carnatic War (1749-1754) - Background",
        subtitle: "Succession disputes and European intervention",
        icon: "👑",
        content: {
          keyPoints: [
            {
              title: "Hyderabad Succession Crisis",
              description: "Death of Nizam-ul-Mulk in 1748 led to succession dispute between his son Nasir Jung and grandson Muzaffar Jung, providing opportunity for European intervention."
            },
            {
              title: "Carnatic Succession Dispute",
              description: "Simultaneous succession crisis in Carnatic between Anwaruddin Khan and Chanda Sahib created another arena for Anglo-French competition."
            },
            {
              title: "Dupleix's Political Strategy",
              description: "French Governor Dupleix saw these succession disputes as opportunities to establish French-controlled puppet rulers and gain territorial control."
            },
            {
              title: "British Response",
              description: "British initially reluctant to get involved in local politics but were forced to respond to French political expansion under Dupleix."
            }
          ]
        }
      },
      {
        id: "battle-of-ambur",
        type: "battle",
        title: "Battle of Ambur (1749)",
        subtitle: "French political strategy achieves major success",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of Ambur",
              date: "August 3, 1749",
              location: "Ambur, Tamil Nadu",
              contestants: ["French-Chanda Sahib alliance", "British-Anwaruddin Khan alliance"],
              result: "Decisive French victory, Anwaruddin Khan killed in battle",
              significance: "Established Chanda Sahib as Nawab of Carnatic under French influence. Demonstrated effectiveness of Dupleix's policy of political intervention. Marked the beginning of European powers as king-makers in Indian politics. Forced British to adopt similar political strategies."
            }
          ]
        }
      },
      {
        id: "clive-emergence",
        type: "personality",
        title: "Robert Clive's Rise to Prominence",
        subtitle: "From clerk to military genius",
        icon: "⭐",
        content: {
          personalities: [
            {
              name: "Robert Clive",
              period: "Military Career: 1749-1767",
              titles: ["Clive of India", "Baron Clive", "Hero of Arcot"],
              description: "British clerk turned soldier who became one of the most successful military commanders in Indian history.",
              keyPoints: [
                "Started as East India Company clerk in Madras",
                "Joined military service during French expansion",
                "Showed exceptional courage and strategic thinking",
                "His success at Arcot (1751) made him famous across India",
                "Became symbol of British military excellence",
                "Later conquered Bengal at Battle of Plassey (1757)"
              ]
            }
          ]
        }
      },
      {
        id: "siege-of-arcot",
        type: "battle",
        title: "Siege of Arcot (1751)",
        subtitle: "Clive's daring victory that changed the war",
        icon: "🏰",
        content: {
          battles: [
            {
              name: "Siege of Arcot",
              date: "September-November 1751",
              location: "Arcot, Tamil Nadu",
              contestants: ["Robert Clive with 200 Europeans and 300 sepoys", "Chanda Sahib's forces (10,000+ troops)"],
              result: "Brilliant British victory against overwhelming odds",
              significance: "Clive's most famous victory that established his reputation. Demonstrated that bold strategy could overcome numerical disadvantage. Turned the tide of Second Carnatic War in British favor. Showed Indian rulers that British could be reliable military allies. Established the principle of aggressive defense in Indian warfare."
            }
          ]
        }
      },
      {
        id: "treaty-of-pondicherry",
        type: "general",
        title: "Treaty of Pondicherry (1754)",
        subtitle: "End of Second Carnatic War",
        icon: "📜",
        content: {
          keyPoints: [
            {
              title: "Dupleix's Recall",
              description: "French government, facing financial strain from Indian adventures and pressure from French merchants, recalled Dupleix to France in disgrace."
            },
            {
              title: "Restoration of Balance",
              description: "Both sides agreed to restore territories captured during the war and return to pre-war boundaries in South India."
            },
            {
              title: "Puppet Rulers",
              description: "Both European powers retained their respective puppet rulers but agreed not to interfere in each other's spheres of influence."
            },
            {
              title: "Temporary Truce",
              description: "The treaty provided temporary peace but did not resolve underlying Anglo-French competition, setting stage for Third Carnatic War."
            }
          ]
        }
      },
      {
        id: "third-carnatic-war-background",
        type: "general",
        title: "Third Carnatic War (1758-1763) - Background",
        subtitle: "Seven Years' War extends to India",
        icon: "🌍",
        content: {
          keyPoints: [
            {
              title: "Seven Years' War (1756-1763)",
              description: "Global conflict between Britain and France that extended to their colonial territories in India, North America, and Europe."
            },
            {
              title: "Changed Strategic Situation",
              description: "By 1758, British position had strengthened significantly due to Clive's victory at Plassey (1757) and control over Bengal revenues."
            },
            {
              title: "French Reinforcements",
              description: "France sent Count de Lally with fresh troops and resources to India, hoping to recover lost ground and defeat British."
            },
            {
              title: "Naval Factor",
              description: "British naval supremacy became increasingly important as it affected French ability to receive reinforcements and supplies from Europe."
            }
          ]
        }
      },
      {
        id: "count-de-lally",
        type: "personality",
        title: "Count de Lally and French Resurgence",
        subtitle: "French attempt to regain supremacy",
        icon: "🇫🇷",
        content: {
          personalities: [
            {
              name: "Thomas Arthur, Count de Lally",
              period: "Commander-in-Chief: 1758-1761",
              titles: ["Comte de Lally", "French General"],
              description: "French general sent to India to restore French fortunes and defeat the British, but his rigid European military approach proved unsuitable for Indian conditions.",
              keyPoints: [
                "Sent by French government with fresh troops and resources",
                "Achieved initial successes in 1758-1759",
                "Captured Fort St. David and other British positions",
                "His rigid European military methods created conflicts with French officials",
                "Failed to adapt to Indian warfare conditions",
                "Decisively defeated at Battle of Wandiwash (1760)"
              ]
            }
          ]
        }
      },
      {
        id: "battle-of-wandiwash",
        type: "battle",
        title: "Battle of Wandiwash (1760)",
        subtitle: "Decisive end of French political ambitions in India",
        icon: "⚔️",
        content: {
          battles: [
            {
              name: "Battle of Wandiwash",
              date: "January 22, 1760",
              location: "Wandiwash (Vandavasi), Tamil Nadu",
              contestants: ["British forces under Sir Eyre Coote", "French forces under Count de Lally"],
              result: "Decisive British victory, French power in India permanently broken",
              significance: "Final defeat of French political ambitions in India. Led to capture of Pondicherry (1761) and end of French territorial control. Established British supremacy in South India. Confirmed British as dominant European power in Indian subcontinent. Ended over a century of European competition for Indian dominance."
            }
          ]
        }
      },
      {
        id: "treaty-of-paris",
        type: "general",
        title: "Treaty of Paris (1763)",
        subtitle: "Global settlement of Seven Years' War",
        icon: "🌐",
        content: {
          keyPoints: [
            {
              title: "Global Context",
              description: "Treaty ended Seven Years' War globally, with Britain emerging as dominant colonial power over France in both India and North America."
            },
            {
              title: "Indian Provisions",
              description: "France lost all territorial possessions in India except for five trading posts: Pondicherry, Karaikal, Mahe, Yanam, and Chandernagore."
            },
            {
              title: "Commercial Rights Only",
              description: "French were permitted to trade but forbidden from fortifying their settlements or maintaining large military forces."
            },
            {
              title: "British Supremacy Confirmed",
              description: "Treaty formally recognized British political supremacy in India and ended effective French competition for territorial control."
            }
          ]
        }
      },
      {
        id: "european-traders-bihar",
        type: "general",
        title: "European Traders in Bihar",
        subtitle: "Regional impact and economic activities",
        icon: "💼",
        content: {
          keyPoints: [
            {
              title: "Portuguese Saltpeter Trade",
              description: "Portuguese were early traders in Bihar, particularly in saltpeter (potassium nitrate) which was essential for gunpowder manufacturing in Europe."
            },
            {
              title: "Dutch Commercial Activities",
              description: "Dutch East India Company established trading posts in Bihar for textiles and agricultural products, competing with British and French."
            },
            {
              title: "British Expansion",
              description: "After Plassey (1757), British gained control over Bihar's rich agricultural and mineral resources, including the lucrative saltpeter trade."
            },
            {
              title: "Impact on Local Economy",
              description: "European demand for Bihar's products led to commercialization of agriculture and integration with global trade networks."
            }
          ]
        }
      },
      {
        id: "carnatic-wars-consequences",
        type: "general",
        title: "Long-term Consequences of Carnatic Wars",
        subtitle: "How these wars shaped Indian history",
        icon: "📈",
        content: {
          keyPoints: [
            {
              title: "British Political Supremacy",
              description: "Established British as the dominant European power in India, ending French dreams of territorial empire and paving way for British Raj."
            },
            {
              title: "New Warfare Methods",
              description: "Introduced European military tactics, discipline, and organization to Indian warfare, transforming the nature of conflict on the subcontinent."
            },
            {
              title: "Political Intervention Precedent",
              description: "Established the precedent of European powers intervening in Indian succession disputes and using puppet rulers to control territories."
            },
            {
              title: "Economic Integration",
              description: "Integrated Indian regional economies more closely with European trade networks and colonial economic systems."
            },
            {
              title: "Foundation for British Raj",
              description: "Military victories and political strategies developed during Carnatic Wars provided the foundation for later British territorial expansion across India."
            }
          ]
        }
      }
    ]
  },

  lecture11: {
    id: "lecture-11",
    title: "Regional States - Bengal",
    subtitle: "Bengal's importance in British colonial expansion",
    estimatedReadTime: "25-30 minutes",
    sections: [
      {
        id: "bengal-importance-british",
        type: "general",
        title: "Bengal's Strategic Importance for British East India Company",
        subtitle: "Why Bengal became the cornerstone of British rule",
        icon: "💎",
        content: {
          keyPoints: [
            {
              title: "Economic Wealth",
              description: "Bengal was one of the richest provinces of the Mughal Empire, contributing about 40% of the empire's total revenue. Its fertile soil and favorable climate made it ideal for agriculture and industry."
            },
            {
              title: "Strategic Geography",
              description: "Located in the eastern part of India with access to the Bay of Bengal, Bengal provided crucial access to trade routes connecting India with Southeast Asia and China."
            },
            {
              title: "Industrial Production",
              description: "Bengal was the center of India's textile industry, producing fine cotton and silk fabrics that were in high demand in European markets."
            },
            {
              title: "Agricultural Prosperity",
              description: "The fertile Gangetic plains of Bengal produced surplus rice, jute, and other agricultural products, making it the granary of eastern India."
            },
            {
              title: "Commercial Networks",
              description: "Well-developed trade networks connected Bengal with Central Asia, Southeast Asia, and Europe, making it a crucial commercial hub."
            }
          ]
        }
      },
      {
        id: "bengal-economic-wealth",
        type: "general",
        title: "Bengal's Economic Wealth and Resources",
        subtitle: "The rich economic base that attracted Europeans",
        icon: "🏭",
        content: {
          keyPoints: [
            {
              title: "Silk Production",
              description: "Bengal was famous for its high-quality silk production, particularly from the Murshidabad and Malda regions. Bengali silk was considered among the finest in the world."
            },
            {
              title: "Saltpeter Trade",
              description: "Bihar (part of Bengal province) was a major source of saltpeter (potassium nitrate), essential for gunpowder manufacturing, making it strategically valuable to European powers."
            },
            {
              title: "Cotton Textiles",
              description: "Bengal produced fine cotton textiles including muslin, calico, and other fabrics that were highly prized in European markets for their quality and craftsmanship."
            },
            {
              title: "Agricultural Surplus",
              description: "The fertile soil and favorable monsoon climate resulted in agricultural surplus, particularly rice, which supported a large population and generated substantial revenue."
            },
            {
              title: "Commercial Banking",
              description: "Bengal had well-developed indigenous banking and financial systems that facilitated large-scale trade and commerce throughout the region."
            }
          ]
        }
      },
      {
        id: "murshid-quli-khan",
        type: "personality",
        title: "Murshid Quli Khan and Administrative Reforms",
        subtitle: "The founder of semi-independent Bengal",
        icon: "👑",
        content: {
          personalities: [
            {
              name: "Murshid Quli Khan",
              period: "Nawab: 1717-1727",
              titles: ["Founder of Bengal Nawabi", "Administrative Reformer"],
              description: "Originally a Hindu named Kartalab Khan, he converted to Islam and became the first Nawab of Bengal, establishing the foundation of semi-independent Bengal state.",
              keyPoints: [
                "Originally appointed as Diwan of Bengal by Aurangzeb",
                "Gradually gained independence from Delhi during Mughal decline",
                "Moved capital from Dhaka to Murshidabad (named after himself)",
                "Implemented major land revenue reforms and administrative reorganization",
                "Established efficient tax collection system that increased Bengal's revenue",
                "Created strong military and administrative structure",
                "His reforms laid foundation for Bengal's prosperity and autonomy"
              ]
            }
          ]
        }
      },
      {
        id: "geographic-advantages",
        type: "general",
        title: "Geographic Advantages of Bengal",
        subtitle: "Natural factors that favored Bengali autonomy",
        icon: "🗺️",
        content: {
          keyPoints: [
            {
              title: "Distance from Delhi",
              description: "Bengal's location far from the Mughal capital Delhi (about 1,500 km) made direct imperial control difficult, especially during periods of Mughal weakness."
            },
            {
              title: "Natural Barriers",
              description: "Rivers, forests, and difficult terrain between Bengal and Delhi provided natural defense against imperial armies sent to reassert control."
            },
            {
              title: "Riverine Network",
              description: "Extensive river system including Ganges, Brahmaputra, and their tributaries facilitated internal trade and communication within Bengal."
            },
            {
              title: "Coastal Access",
              description: "Long coastline along Bay of Bengal provided access to maritime trade routes and connection with Southeast Asian and Chinese markets."
            },
            {
              title: "Fertile Alluvial Soil",
              description: "Rich alluvial soil deposited by rivers made Bengal one of the most fertile regions in the world, supporting high population density."
            }
          ]
        }
      },
      {
        id: "political-autonomy-factors",
        type: "policy",
        title: "Factors Enabling Political Autonomy",
        subtitle: "How Bengal gained independence during Mughal decline",
        icon: "🏛️",
        content: {
          policies: [
            {
              title: "Mughal Decline Post-Aurangzeb",
              description: "After Aurangzeb's death (1707), the Mughal Empire faced constant succession wars and weakening central authority, allowing regional governors to assert independence."
            },
            {
              title: "Revenue Independence",
              description: "Bengal's economic prosperity allowed its rulers to maintain independence by having sufficient resources to support their own military and administration without imperial subsidies."
            },
            {
              title: "Local Administrative Control",
              description: "Gradual replacement of imperial officials with local administrators loyal to the Nawab rather than the Mughal emperor consolidated regional power."
            },
            {
              title: "Military Autonomy",
              description: "Development of local military forces loyal to the Nawab rather than the imperial army gave Bengal the capability to resist imperial control."
            }
          ]
        }
      },
      {
        id: "trade-expansion-foundation",
        type: "general",
        title: "Strategic Location for British Trade Expansion",
        subtitle: "Bengal as the gateway to British expansion",
        icon: "🚢",
        content: {
          keyPoints: [
            {
              title: "Gateway to Interior India",
              description: "Bengal's position on the Ganges river system provided access to the rich markets of northern and central India, making it ideal for commercial expansion."
            },
            {
              title: "Connection to China Trade",
              description: "Bengal's location made it a natural stopping point for ships traveling between Europe and China, integrating it into global trade networks."
            },
            {
              title: "Raw Material Source",
              description: "Abundant raw materials including cotton, silk, jute, and saltpeter made Bengal valuable for both local processing and export to European markets."
            },
            {
              title: "Manufacturing Base",
              description: "Existing textile manufacturing centers could be adapted and expanded to serve European market demands while utilizing local expertise."
            },
            {
              title: "Financial Resources",
              description: "Bengal's wealth provided the financial foundation for British expansion throughout India, with Bengal revenues funding British armies and administration."
            }
          ]
        }
      },
      {
        id: "british-political-control-foundation",
        type: "general",
        title: "Foundation for British Political Control",
        subtitle: "How Bengal became the base for British imperialism",
        icon: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        content: {
          keyPoints: [
            {
              title: "Battle of Plassey (1757) Significance",
              description: "Clive's victory at Plassey gave British control over Bengal's vast resources and established the precedent for political control over Indian territories."
            },
            {
              title: "Dual Government System",
              description: "After gaining Diwani rights (1765), British established dual government where they controlled revenue while Nawab retained nominal political authority."
            },
            {
              title: "Resource Base for Expansion",
              description: "Bengal's wealth funded British military campaigns throughout India, making further territorial expansion financially sustainable."
            },
            {
              title: "Administrative Laboratory",
              description: "British tested and refined their colonial administrative systems in Bengal before implementing them in other parts of India."
            },
            {
              title: "Model for Colonial Rule",
              description: "The successful establishment of British rule in Bengal provided the model and precedent for extending British control over the entire Indian subcontinent."
            }
          ]
        }
      },
      {
        id: "bengal-successors",
        type: "personality",
        title: "Successors of Murshid Quli Khan",
        subtitle: "The dynasty that ruled Bengal until British takeover",
        icon: "👑",
        content: {
          personalities: [
            {
              name: "Shuja-ud-Din Muhammad Khan",
              period: "Nawab: 1727-1739",
              titles: ["Second Nawab of Bengal"],
              description: "Son-in-law of Murshid Quli Khan who continued his administrative policies and maintained Bengal's prosperity and autonomy.",
              keyPoints: [
                "Continued Murshid Quli Khan's administrative reforms",
                "Maintained Bengal's economic prosperity and political autonomy",
                "Dealt with increasing European trading company presence",
                "Strengthened Bengal's defenses against external threats"
              ]
            },
            {
              name: "Sarfaraz Khan",
              period: "Nawab: 1739-1740",
              titles: ["Short-lived Nawab"],
              description: "Brief ruler who was overthrown by Alivardi Khan, marking a period of instability in Bengal politics.",
              keyPoints: [
                "Ruled for less than one year",
                "Killed in battle by Alivardi Khan's forces",
                "His defeat marked end of direct succession from Murshid Quli Khan"
              ]
            },
            {
              name: "Alivardi Khan",
              period: "Nawab: 1740-1756",
              titles: ["Defender of Bengal"],
              description: "Usurped power but proved to be an effective ruler who defended Bengal against Maratha invasions and maintained its independence.",
              keyPoints: [
                "Seized power by defeating and killing Sarfaraz Khan",
                "Successfully defended Bengal against repeated Maratha invasions",
                "Maintained Bengal's autonomy during his 16-year reign",
                "Grandfather of Siraj-ud-Daulah, the last independent Nawab"
              ]
            }
          ]
        }
      }
    ]
  }
}

export default lectureData