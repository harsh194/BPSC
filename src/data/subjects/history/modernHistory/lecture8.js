// Modern History - Lecture 8: British East India Company
export const lecture8Data = {
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
                period: "1599-1603",
                description: "First British merchant to travel by land to India in 1599. In 1603 he reached Lahore and also visited Akbar's court. Known as the first Englishman to be buried in India.",
                type: "arrival",
                keyPoints: [
                  "First British merchant to travel to India by land route (1599)",
                  "Reached Lahore in 1603",
                  "Visited Akbar's court",
                  "First Englishman to be buried in India",
                  "His tomb is located in Agra"
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
                description: "Original company established under name 'Governor and Company of Merchants of London, Trading into the East Indies'. Charter of 15 years granted by Queen Elizabeth I to trade with the East.",
                type: "establishment",
                keyPoints: [
                  "Elizabeth died in 1603, rights maintained by King James I",
                  "Charter Act of 1833 changed name to 'British East India Company'",
                  "1698: Rival company 'General Society Trading to the East Indies' formed",
                  "1708: Two companies combined to form unified trading entity",
                  "1688: Company established municipal corporation in Madras"
                ]
              },
              {
                id: "william-hawkins",
                title: "William Hawkins Mission",
                period: "1608-1611",
                description: "Captain of Hector ship, reached Surat port on 24 August 1608 as envoy of King James I. First official Company representative to Mughal court.",
                type: "diplomacy",
                keyPoints: [
                  "Three ships in sea voyage: Red Dragon, Consent, and Hector",
                  "William Hawkins was captain of Hector ship",
                  "Knew Turkish and Persian languages",
                  "Conversed with Jahangir in Turkish language",
                  "Jahangir gave Hawkins mansab of 400 and title 'English Khan'",
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
            description: "Sir Thomas Roe reached Surat on 18 September 1615 as envoy of English King James I. In 1616, he reached Ajmer where Jahangir was holding court and sought permission for trade treaty.",
            keyPoints: [
              "Reached Surat on 18 September 1615 as envoy of King James I",
              "Reached Ajmer in 1616 where Jahangir was holding court",
              "Met Jahangir in Ajmer and sought trade treaty permission",
              "Established diplomatic protocol for European-Mughal relations",
              "Advocated for trade over territorial acquisition",
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
                title: "Surat Factories",
                period: "1608-1613",
                description: "1608: First temporary trading house in Surat. 1613: Permanent factory established in Surat after securing Mughal approval.",
                type: "settlement",
                keyPoints: [
                  "1608: First temporary trading house opened",
                  "1613: Permanent factory established",
                  "Gateway to Mughal trade",
                  "Base for trade with West Asia and Europe"
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
            phaseTitle: "Southern and Eastern Expansion",
            items: [
              {
                id: "masulipatnam-factory",
                title: "Masulipatnam Factory",
                period: "1611",
                description: "In 1611, the British opened the first factory in Masulipatnam. This was the first British factory in South India.",
                type: "settlement"
              },
              {
                id: "golden-decree",
                title: "Golden Decree (1632)",
                period: "1632",
                description: "The British received a 'golden decree' from the Sultan of Golconda in 1632 and received trade facilities in return.",
                type: "agreement"
              },
              {
                id: "balasore-factory",
                title: "Balasore Factory",
                period: "1633",
                description: "In 1633, the British established their first factory in eastern India at Balasore in Odisha.",
                type: "settlement"
              },
              {
                id: "madras-foundation",
                title: "Madras (Chennai)",
                period: "1639",
                description: "In 1639, Francis Day acquired Madras from the ruler of Chandragiri and built 'St. George Fort' there. Francis Day was the founder of Madras city.",
                type: "settlement"
              },
              {
                id: "hooghly-factory",
                title: "Hooghly Factory",
                period: "1651",
                description: "In 1651, the first British factory was opened in Hooghly in Bengal under Bridgeman and here the British received trade facilities from Shah Shuja in exchange for ₹3000 annually.",
                type: "settlement"
              },
              {
                id: "tellicherry-factory",
                title: "Tellicherry Factory",
                period: "1680s",
                description: "The British had a factory in Tellicherry (Kerala) on the Malabar coast. Tellicherry is still known for black pepper.",
                type: "settlement"
              },
              {
                id: "calcutta-foundation",
                title: "Calcutta (Kolkata)", 
                period: "1698",
                description: "In 1698, the British received the subedari of Sutanuti, Kolikata and Govindpur villages from Subedar Azimushshan at ₹1200 annual rent. Job Charnock founded Calcutta by combining these places and named it 'Fort William'. Charles Eyre was first President of Fort William.",
                type: "settlement"
              },
              {
                id: "dutch-surrender",
                title: "Dutch Surrender (1795)",
                period: "1795",
                description: "In 1795, the Dutch surrendered Cochin to the East India Company, expanding British territorial control.",
                type: "acquisition"
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
            title: "Surman Embassy (1717)",
            description: "During Farrukhsiyar's reign, delegation headed by British officer John Surman came which included Edward Stephens, physician William Hamilton and interpreter Khwaja Sehurd. William Hamilton cured Farrukhsiyar of a fatal boil."
          },
          {
            title: "Trade Privileges",
            description: "This delegation was given a 'Shahi Farman' by Mughal ruler Farrukhsiyar under which the British got freedom to trade in Bengal in exchange for ₹3000 annually."
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
            description: "The British historian Orme called this Farman the 'Magna Carta of the Company'. It provided the legal foundation for British commercial dominance and eventual political control of India."
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
            name: "British-Aurangzeb Conflict",
            date: "1686",
            location: "Bengal and Fever Island",
            contestants: ["East India Company", "Mughal forces under Aurangzeb"],
            result: "British defeated by Aurangzeb, British fled to Fever Island",
            significance: "In 1686, the British had a dispute with Aurangzeb over the fortification of Bengal and after being defeated by Aurangzeb, the British fled to Fever Island. Aurangzeb is the first Mughal emperor who successfully conducted the Mughal campaign against the British."
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
}

export default lecture8Data