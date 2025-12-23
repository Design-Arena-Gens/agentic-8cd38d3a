'use client'

import { useState } from 'react'

const marketingDocuments = [
  {
    category: "1. STRATÉGIE & PLANIFICATION",
    ordre: 1,
    documents: [
      {
        nom: "Plan Marketing Annuel",
        responsable: "Directeur Marketing",
        description: "Vision stratégique, objectifs annuels, budget global, KPIs",
        priorite: "CRITIQUE"
      },
      {
        nom: "Stratégie de Marque (Brand Book)",
        responsable: "Directeur Marketing",
        description: "Identité visuelle, ton de voix, positionnement, valeurs",
        priorite: "CRITIQUE"
      },
      {
        nom: "Étude de Marché & Personas",
        responsable: "Chef de Produit Marketing",
        description: "Analyse concurrentielle, profils clients détaillés",
        priorite: "CRITIQUE"
      },
      {
        nom: "Calendrier Marketing Annuel",
        responsable: "Chef de Projet Marketing",
        description: "Planning campagnes, lancements produits, saisonnalité",
        priorite: "HAUTE"
      },
      {
        nom: "Stratégie de Contenu",
        responsable: "Content Manager",
        description: "Thématiques, piliers de contenu, ligne éditoriale",
        priorite: "HAUTE"
      }
    ]
  },
  {
    category: "2. DOCUMENTS LÉGAUX & CONFORMITÉ",
    ordre: 2,
    documents: [
      {
        nom: "Dossier Réglementaire Produits",
        responsable: "Responsable Qualité / Affaires Réglementaires",
        description: "Fiches techniques, certificats d'analyse, conformité ANSM/DGCCRF",
        priorite: "CRITIQUE"
      },
      {
        nom: "Claims & Allégations Validées",
        responsable: "Responsable Qualité",
        description: "Liste des allégations autorisées par produit, preuves scientifiques",
        priorite: "CRITIQUE"
      },
      {
        nom: "Guide de Communication Réglementaire",
        responsable: "Responsable Qualité",
        description: "Ce qu'on peut/ne peut pas dire, mentions obligatoires",
        priorite: "CRITIQUE"
      },
      {
        nom: "Politique RGPD & Consentements",
        responsable: "DPO / Responsable Juridique",
        description: "Gestion données clients, opt-in, politique de confidentialité",
        priorite: "HAUTE"
      }
    ]
  },
  {
    category: "3. SUPPORTS PRODUITS",
    ordre: 3,
    documents: [
      {
        nom: "Fiches Produits Détaillées",
        responsable: "Chef de Produit",
        description: "Compositions, bénéfices, modes d'emploi, précautions",
        priorite: "CRITIQUE"
      },
      {
        nom: "Catalogue Produits",
        responsable: "Chef de Produit Marketing",
        description: "Gamme complète, tarifs, visuels HD, descriptions",
        priorite: "HAUTE"
      },
      {
        nom: "Guide d'Utilisation des Huiles",
        responsable: "Aromathérapeute / Expert Produit",
        description: "Synergies, recettes, précautions, conseils d'usage",
        priorite: "HAUTE"
      },
      {
        nom: "Argumentaires de Vente",
        responsable: "Responsable Commercial",
        description: "Points de différenciation, réponses aux objections",
        priorite: "HAUTE"
      },
      {
        nom: "Templates Packaging",
        responsable: "Directeur Artistique",
        description: "Maquettes étiquettes, coffrets, mentions légales",
        priorite: "HAUTE"
      }
    ]
  },
  {
    category: "4. COMMUNICATION DIGITALE",
    ordre: 4,
    documents: [
      {
        nom: "Charte des Réseaux Sociaux",
        responsable: "Social Media Manager",
        description: "Tone of voice, formats, fréquence, hashtags, visuels",
        priorite: "HAUTE"
      },
      {
        nom: "Calendrier Éditorial",
        responsable: "Content Manager",
        description: "Planning posts, articles blog, newsletters, stories",
        priorite: "HAUTE"
      },
      {
        nom: "Banque de Templates Visuels",
        responsable: "Graphiste / DA",
        description: "Posts Instagram, Stories, Reels, Pinterest, TikTok",
        priorite: "HAUTE"
      },
      {
        nom: "Stratégie SEO & Keywords",
        responsable: "Responsable SEO / Digital",
        description: "Mots-clés prioritaires, arborescence site, cocons sémantiques",
        priorite: "HAUTE"
      },
      {
        nom: "Templates Newsletters",
        responsable: "Email Marketing Manager",
        description: "Modèles HTML, scénarios automatisés, segmentation",
        priorite: "MOYENNE"
      },
      {
        nom: "Guide Community Management",
        responsable: "Community Manager",
        description: "Gestion commentaires, SAV digital, gestion de crise",
        priorite: "MOYENNE"
      }
    ]
  },
  {
    category: "5. PUBLICITÉ & CAMPAGNES PAYANTES",
    ordre: 5,
    documents: [
      {
        nom: "Briefs Campagnes Publicitaires",
        responsable: "Directeur Marketing",
        description: "Objectifs, ciblage, messages clés, budget",
        priorite: "HAUTE"
      },
      {
        nom: "Assets Publicitaires",
        responsable: "Traffic Manager",
        description: "Bannières display, visuels Meta Ads, Google Ads",
        priorite: "HAUTE"
      },
      {
        nom: "Tableaux de Suivi Performance",
        responsable: "Data Analyst / Traffic Manager",
        description: "KPIs, ROI, CPA, taux de conversion par canal",
        priorite: "HAUTE"
      },
      {
        nom: "Scripts Vidéos Publicitaires",
        responsable: "Responsable Contenu Vidéo",
        description: "Storyboards, textes voix-off, durées, formats",
        priorite: "MOYENNE"
      }
    ]
  },
  {
    category: "6. CONTENU ÉDITORIAL",
    ordre: 6,
    documents: [
      {
        nom: "Articles de Blog (Templates)",
        responsable: "Rédacteur Web / Content Manager",
        description: "Formats articles bien-être, guides, fiches huiles",
        priorite: "MOYENNE"
      },
      {
        nom: "E-books & Guides Téléchargeables",
        responsable: "Content Manager",
        description: "Lead magnets, guides pratiques aromathérapie",
        priorite: "MOYENNE"
      },
      {
        nom: "Scripts Vidéos & Podcasts",
        responsable: "Responsable Contenu Vidéo",
        description: "Tutoriels, témoignages, interviews experts",
        priorite: "MOYENNE"
      },
      {
        nom: "Livres Blancs",
        responsable: "Content Manager",
        description: "Études approfondies, recherches scientifiques",
        priorite: "BASSE"
      }
    ]
  },
  {
    category: "7. PARTENARIATS & INFLUENCE",
    ordre: 7,
    documents: [
      {
        nom: "Liste & Base Influenceurs",
        responsable: "Responsable Influence",
        description: "Contacts, niches, tarifs, historique collaborations",
        priorite: "HAUTE"
      },
      {
        nom: "Templates Contrats Influenceurs",
        responsable: "Responsable Influence / Juridique",
        description: "Accords collaboration, rémunération, exclusivités",
        priorite: "HAUTE"
      },
      {
        nom: "Briefs Partenaires",
        responsable: "Responsable Partenariats",
        description: "Guidelines marque, do's & don'ts, livrables attendus",
        priorite: "MOYENNE"
      },
      {
        nom: "Media Kits",
        responsable: "Responsable Communication",
        description: "Présentation marque pour presse et partenaires",
        priorite: "MOYENNE"
      }
    ]
  },
  {
    category: "8. POINT DE VENTE & RETAIL",
    ordre: 8,
    documents: [
      {
        nom: "PLV (Publicité Lieu de Vente)",
        responsable: "Responsable Trade Marketing",
        description: "Kakemonos, stop-rayons, affiches magasin, présentoirs",
        priorite: "HAUTE"
      },
      {
        nom: "Formations Équipes Retail",
        responsable: "Responsable Formation / Trade Marketing",
        description: "Scripts vendeurs, argumentaires, objections",
        priorite: "HAUTE"
      },
      {
        nom: "Kits Échantillons & Testeurs",
        responsable: "Responsable Trade Marketing",
        description: "Samples, miniatures, coffrets découverte",
        priorite: "MOYENNE"
      },
      {
        nom: "Animation Point de Vente",
        responsable: "Responsable Événementiel",
        description: "Ateliers découverte, démonstrations produits",
        priorite: "MOYENNE"
      }
    ]
  },
  {
    category: "9. ÉVÉNEMENTIEL",
    ordre: 9,
    documents: [
      {
        nom: "Planning Événements Annuel",
        responsable: "Responsable Événementiel",
        description: "Salons, foires bio, événements bien-être, pop-up stores",
        priorite: "MOYENNE"
      },
      {
        nom: "Kits Stand & Signalétique",
        responsable: "Responsable Événementiel",
        description: "Visuels stand, kakemonos, roll-ups, badges",
        priorite: "MOYENNE"
      },
      {
        nom: "Invitations & Supports Événements",
        responsable: "Responsable Communication",
        description: "Cartons invitation, programmes, goodies",
        priorite: "BASSE"
      }
    ]
  },
  {
    category: "10. RELATION CLIENT & FIDÉLISATION",
    ordre: 10,
    documents: [
      {
        nom: "Programme de Fidélité",
        responsable: "Responsable CRM",
        description: "Règles, avantages membres, communication",
        priorite: "HAUTE"
      },
      {
        nom: "Scénarios Email Automatisés",
        responsable: "CRM Manager",
        description: "Welcome series, abandon panier, post-achat, réactivation",
        priorite: "HAUTE"
      },
      {
        nom: "Enquêtes de Satisfaction",
        responsable: "Responsable Expérience Client",
        description: "NPS, questionnaires post-achat, feedbacks",
        priorite: "MOYENNE"
      },
      {
        nom: "Scripts SAV & FAQ",
        responsable: "Responsable Service Client",
        description: "Réponses types, procédures retours/réclamations",
        priorite: "MOYENNE"
      }
    ]
  },
  {
    category: "11. ANALYSE & REPORTING",
    ordre: 11,
    documents: [
      {
        nom: "Tableaux de Bord KPIs",
        responsable: "Data Analyst / Directeur Marketing",
        description: "Dashboard mensuel, métriques clés, ROI campagnes",
        priorite: "HAUTE"
      },
      {
        nom: "Rapports Mensuels d'Activité",
        responsable: "Chef de Projet Marketing",
        description: "Synthèse actions, résultats, recommandations",
        priorite: "HAUTE"
      },
      {
        nom: "Études Concurrentielles",
        responsable: "Veilleur Stratégique / Chef de Produit",
        description: "Benchmark offres, prix, communication concurrents",
        priorite: "MOYENNE"
      },
      {
        nom: "Analyses d'Attribution",
        responsable: "Data Analyst",
        description: "Parcours client, touchpoints, conversions multi-canaux",
        priorite: "MOYENNE"
      }
    ]
  },
  {
    category: "12. RESSOURCES CRÉATIVES",
    ordre: 12,
    documents: [
      {
        nom: "Bibliothèque Photos & Vidéos",
        responsable: "Directeur Artistique",
        description: "Banque d'images produits, lifestyle, ingrédients",
        priorite: "HAUTE"
      },
      {
        nom: "Charte Graphique Complète",
        responsable: "Directeur Artistique",
        description: "Logos, couleurs, typographies, déclinaisons",
        priorite: "CRITIQUE"
      },
      {
        nom: "Templates Présentations",
        responsable: "Graphiste",
        description: "PowerPoint/Keynote marque pour réunions, pitch",
        priorite: "MOYENNE"
      },
      {
        nom: "Icônes & Illustrations Marque",
        responsable: "Graphiste",
        description: "Bibliothèque d'assets visuels cohérents",
        priorite: "BASSE"
      }
    ]
  }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPriority, setSelectedPriority] = useState('TOUTES')
  const [expandedCategories, setExpandedCategories] = useState(new Set([1, 2, 3]))

  const toggleCategory = (ordre) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(ordre)) {
      newExpanded.delete(ordre)
    } else {
      newExpanded.add(ordre)
    }
    setExpandedCategories(newExpanded)
  }

  const filteredData = marketingDocuments.map(cat => ({
    ...cat,
    documents: cat.documents.filter(doc => {
      const matchesSearch = doc.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.responsable.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           doc.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesPriority = selectedPriority === 'TOUTES' || doc.priorite === selectedPriority
      return matchesSearch && matchesPriority
    })
  })).filter(cat => cat.documents.length > 0)

  const getPriorityColor = (priorite) => {
    switch(priorite) {
      case 'CRITIQUE': return '#dc2626'
      case 'HAUTE': return '#ea580c'
      case 'MOYENNE': return '#ca8a04'
      case 'BASSE': return '#65a30d'
      default: return '#6b7280'
    }
  }

  const totalDocuments = marketingDocuments.reduce((acc, cat) => acc + cat.documents.length, 0)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '40px',
          marginBottom: '30px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h1 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '10px',
              lineHeight: '1.2'
            }}>
              📋 Documents Marketing Essentiels
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              marginBottom: '5px'
            }}>
              Marques d'Huiles Essentielles & Aromathérapie
            </p>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af',
              fontWeight: '600'
            }}>
              {totalDocuments} documents • {marketingDocuments.length} catégories
            </p>
          </div>

          {/* Filters */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '15px',
            marginTop: '25px'
          }}>
            <input
              type="text"
              placeholder="🔍 Rechercher un document, responsable ou description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                padding: '14px 20px',
                fontSize: '15px',
                border: '2px solid #e5e7eb',
                borderRadius: '10px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />

            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              style={{
                padding: '14px 20px',
                fontSize: '15px',
                border: '2px solid #e5e7eb',
                borderRadius: '10px',
                backgroundColor: 'white',
                cursor: 'pointer',
                outline: 'none',
                fontWeight: '500'
              }}
            >
              <option value="TOUTES">Toutes priorités</option>
              <option value="CRITIQUE">🔴 Critique</option>
              <option value="HAUTE">🟠 Haute</option>
              <option value="MOYENNE">🟡 Moyenne</option>
              <option value="BASSE">🟢 Basse</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        {filteredData.map((category) => (
          <div
            key={category.ordre}
            style={{
              background: 'white',
              borderRadius: '16px',
              marginBottom: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s'
            }}
          >
            {/* Category Header */}
            <div
              onClick={() => toggleCategory(category.ordre)}
              style={{
                padding: '25px 30px',
                background: expandedCategories.has(category.ordre)
                  ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  : '#f9fafb',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s'
              }}
            >
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: expandedCategories.has(category.ordre) ? 'white' : '#1f2937',
                  marginBottom: '5px'
                }}>
                  {category.category}
                </h2>
                <p style={{
                  fontSize: '14px',
                  color: expandedCategories.has(category.ordre) ? 'rgba(255,255,255,0.9)' : '#6b7280',
                  fontWeight: '500'
                }}>
                  {category.documents.length} document{category.documents.length > 1 ? 's' : ''}
                </p>
              </div>
              <div style={{
                fontSize: '24px',
                color: expandedCategories.has(category.ordre) ? 'white' : '#9ca3af',
                transform: expandedCategories.has(category.ordre) ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s'
              }}>
                ▼
              </div>
            </div>

            {/* Documents List */}
            {expandedCategories.has(category.ordre) && (
              <div style={{ padding: '10px' }}>
                {category.documents.map((doc, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '20px',
                      margin: '10px',
                      background: '#f9fafb',
                      borderRadius: '12px',
                      borderLeft: `4px solid ${getPriorityColor(doc.priorite)}`,
                      transition: 'all 0.3s',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f3f4f6'
                      e.currentTarget.style.transform = 'translateX(5px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#f9fafb'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px'
                    }}>
                      <h3 style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#1f2937',
                        margin: 0
                      }}>
                        {doc.nom}
                      </h3>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '700',
                        color: 'white',
                        backgroundColor: getPriorityColor(doc.priorite),
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        whiteSpace: 'nowrap',
                        marginLeft: '15px'
                      }}>
                        {doc.priorite}
                      </span>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        color: '#667eea',
                        fontWeight: '600',
                        backgroundColor: '#eef2ff',
                        padding: '5px 12px',
                        borderRadius: '6px'
                      }}>
                        👤 {doc.responsable}
                      </span>
                    </div>

                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {doc.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {filteredData.length === 0 && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '60px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔍</div>
            <h3 style={{
              fontSize: '20px',
              color: '#6b7280',
              fontWeight: '600'
            }}>
              Aucun document trouvé
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af',
              marginTop: '10px'
            }}>
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}

        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '30px',
          color: 'white',
          fontSize: '14px'
        }}>
          <p style={{ marginBottom: '10px', opacity: 0.9 }}>
            💼 Organisé par ordre de priorité stratégique • Documents essentiels pour un département marketing performant
          </p>
          <p style={{ opacity: 0.7, fontSize: '12px' }}>
            Conçu pour les marques d'huiles essentielles et d'aromathérapie
          </p>
        </div>
      </div>
    </div>
  )
}
