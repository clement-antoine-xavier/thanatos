# Processus de gestion des décès animaux dans les élevages

## 1. Décès constaté par l’éleveur

- L’éleveur constate la mort de l’animal et enregistre l’événement (date, espèce, numéro d’identification, exploitation, etc.).  
- Si l’animal est sur pied dans un élevage, la déclaration alimente la base nationale et locale de mortalité animale (type BDNI, RESYTAL, etc.).  

**Personnes/services impliqués** : éleveur, parfois technicien de coopérative ou Groupement de Défense Sanitaire (GDS).

---

## 2. Intervention vétérinaire ou sanitaire

- En cas de mortalité suspecte, de maladie réglementée ou de surmortalité, un **vétérinaire sanitaire** ou le service de santé animale peut être alerté.  
- Il peut pratiquer une **autopsie** ou une **saisie de prélèvements** (sang, organes) pour analyse en laboratoire (Laboratoire Vétérinaire Départemental, laboratoire de référence, etc.).  

**Acteurs** : vétérinaire de l’élevage, service de santé animale / DREAL/DAAF, laboratoire vétérinaire.

---

## 3. Collecte et élimination de la carcasse

- La carcasse est enlevée par un **service d’équarrissage** ou une société d’incinération agréée (obligatoire pour les gros animaux et souvent pour tout animal mort).  
- Ce service récupère la dépouille, la transporte vers un centre de traitement (rendement ou incinération) et assure sa destruction conforme aux règles sanitaires.  

**Acteurs** : équarrisseur, société d’incinération, GDS ou collectivité (en cas d’animaux errants ou trouvés morts en voie publique).

---

## 4. Enregistrement dans les bases de mortalité

- Les données de mortalité sont intégrées dans les **bases de données officielles** (ex. BDNI, SIGAL/RESYTAL, SPE, etc.).  
- Un technicien ou un ingénieur en data science/nettoyage de données peut harmoniser ces informations (dates, codes d’espèce, codes d’exploitation, localisation).  

**Acteurs** : agents administratifs / informatiques des services agricoles, épidémiologistes, stagiaire ou ingénieur en data.

---

## 5. Analyse épidémiologique et alertes

- Les données de mortalité sont utilisées par les **épidémiologistes** et les services de surveillance (Sagir, plateforme ESA, services de santé animale) pour détecter des signaux anormaux (pics de mortalité, clusters géographiques, saisonnalité suspecte).  
- Si un signal est détecté, ils alertent les autorités sanitaires (État, DAAF, DREAL) qui peuvent déclencher des **actions de police sanitaire** (quarantaine, analyses supplémentaires, vaccination, etc.).  

**Acteurs** : épidémiologistes, laboratoires, services de santé animale, autorités (État, DREAL/DAAF).

---

## 6. Utilisation des résultats dans ton projet

Dans le cadre de ton stage, tu travailles sur ces mêmes flux :  

- Tu récupères les données de **décès animaux** produites par l’éleveur, le vétérinaire et l’équarrisseur.  
- Tu les **structures** (base SQL, modélisation), tu appliques des **indicateurs automatiques de mortalité** (taux, tendances, clusters).  
- Tu construis une **interface et des tableaux de bord** pour aider vétérinaires, épidémiologistes et techniciens à **détecter rapidement** un événement sanitaire inhabituel.  
