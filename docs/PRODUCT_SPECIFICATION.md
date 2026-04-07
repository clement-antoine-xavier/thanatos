# Specification produit

Version: 1.0
Statut: Draft produit
Propriétaire: Produit / Santé animale / Data

## 1. Résumé exécutif

Mictlantecuhtli est une plateforme de surveillance épidémiologique animale centrée sur la mortalité comme signal d’alerte précoce. Le produit doit permettre la déclaration terrain, la coordination opérationnelle, la qualification sanitaire, la logistique d’enlèvement, le suivi vétérinaire, l’analyse de laboratoire, la détection de signaux inhabituels et le reporting institutionnel.

Le besoin produit est double:

- réduire le délai entre un décès animal et sa prise en charge sanitaire,
- transformer chaque événement en donnée fiable, historisée et exploitable pour la surveillance.

Ce PRD formalise le périmètre fonctionnel, les acteurs, les parcours, les exigences et les critères de succès nécessaires pour concevoir les écrans et prioriser le delivery.

## 2. Problème à résoudre

Aujourd’hui, les informations liées à la mortalité animale sont dispersées entre plusieurs acteurs, plusieurs outils et plusieurs niveaux de lecture. Les déclarations terrain sont souvent incomplètes, les circuits de qualification sont hétérogènes, la chaîne logistique n’est pas toujours visible de bout en bout et la surveillance repose sur des données qui arrivent tard, sous des formes variées.

Conséquence: la détection précoce d’un événement sanitaire inhabituel est retardée, la coordination entre acteurs est coûteuse et le reporting manque parfois de fraîcheur ou de traçabilité.

Mictlantecuhtli doit réduire cette fragmentation.

## 3. Objectifs produit

### 3.1 Objectifs métier

- Standardiser la collecte des décès animaux et des mortalités multiples.
- Accélérer la qualification sanitaire des cas.
- Fluidifier la coordination entre éleveur, GDS, vétérinaire, équarrisseur, laboratoire et administration.
- Détecter plus tôt les anomalies de mortalité.
- Produire des indicateurs et rapports fiables, versionnés et auditables.

### 3.2 Objectifs utilisateur

- Permettre une déclaration rapide, mobile et guidée.
- Réduire le nombre d’allers-retours pour compléter un dossier.
- Donner à chaque acteur une vue claire de ses tâches.
- Offrir une fiche cas unique et lisible pour le suivi.
- Donner un accès direct aux alertes, aux actions en attente et aux preuves de traitement.

### 3.3 Objectifs techniques

- S’appuyer sur le stack existant du dépôt.
- Rester compatible avec une architecture dashboard + formulaires + analytics.
- Prévoir l’internationalisation via next-intl.
- Maintenir un modèle de données exploitable pour la surveillance et les imports multi-sources.

## 4. Périmètre

### 4.1 Inclus

- Déclaration d’un animal mort.
- Déclaration d’une mortalité multiple.
- Qualification du cas.
- Demande d’enlèvement.
- Intervention vétérinaire.
- Prélèvements et suivi laboratoire.
- Dossier de suivi de bout en bout.
- Détection de signaux inhabituels.
- Gestion des alertes.
- Reporting opérationnel et institutionnel.
- Administration des référentiels et des droits.

### 4.2 Exclu pour le MVP

- Modélisation prédictive complexe à grande échelle.
- Optimisation avancée des tournées d’équarrissage.
- Intégration temps réel avec tous les référentiels nationaux.
- Fonctionnalités de messagerie asynchrone avancée type chat.
- Gestion de cas humains ou d’autres filières que la mortalité animale.

## 5. Hypothèses et contraintes

- La solution doit rester alignée sur Next.js 16, React 19, MUI 7 et next-intl.
- Le mobile doit être privilégié pour les acteurs terrain.
- Le desktop doit rester la référence pour la surveillance, l’analyse et l’administration.
- Le système doit fonctionner avec une logique d’audit complète.
- Les données doivent pouvoir provenir de plusieurs sources et rester harmonisées.

## 6. Personas et rôles

### 6.1 Éleveur

Objectifs:

- déclarer un décès ou une mortalité multiple,
- demander un enlèvement,
- suivre le statut du dossier,
- répondre à des demandes de compléments.

Permissions:

- créer, compléter et consulter ses déclarations,
- déposer des pièces jointes,
- consulter les notifications liées à ses exploitations.

### 6.2 GDS

Objectifs:

- accompagner les éleveurs,
- qualifier et prioriser les dossiers,
- suivre les signaux locaux,
- coordonner les acteurs.

Permissions:

- lire et enrichir les cas du territoire,
- escalader une suspicion,
- assigner un vétérinaire ou une action logistique.

### 6.3 Vétérinaire

Objectifs:

- réaliser la visite,
- qualifier le contexte clinique,
- prescrire des prélèvements,
- conclure le cas.

Permissions:

- accéder aux cas assignés,
- saisir l’examen et le compte rendu,
- créer des demandes de prélèvements,
- recommander des mesures.

### 6.4 Équarrisseur

Objectifs:

- organiser la prise en charge de la carcasse,
- tracer le transport,
- signaler les incidents.

Permissions:

- voir les demandes d’enlèvement affectées,
- accepter, reprogrammer ou refuser,
- confirmer la prise en charge,
- clôturer le transport.

### 6.5 Laboratoire

Objectifs:

- réceptionner les échantillons,
- vérifier la conformité,
- saisir les analyses,
- signaler un résultat critique.

Permissions:

- confirmer la réception,
- enregistrer les résultats,
- joindre le rapport de laboratoire,
- remonter les non-conformités.

### 6.6 Épidémiologiste

Objectifs:

- identifier les signaux faibles et forts,
- analyser les tendances,
- investiguer les clusters,
- proposer la suite à donner.

Permissions:

- consulter les données agrégées,
- ouvrir et annoter une alerte,
- exporter des indicateurs,
- documenter une interprétation.

### 6.7 Administration sanitaire

Objectifs:

- arbitrer les alertes,
- piloter la réponse,
- produire le reporting officiel.

Permissions:

- vue territoriale et hiérarchique,
- validation ou levée d’alerte,
- déclenchement des mesures,
- publication des notes de situation.

### 6.8 Administrateur plateforme

Objectifs:

- administrer le système,
- maintenir les référentiels,
- superviser les imports,
- gérer les accès.

Permissions:

- gestion des comptes et rôles,
- paramétrage des référentiels,
- supervision technique,
- audit et traçabilité.

## 7. Parcours de bout en bout

### 7.1 Signalement d’un animal mort

1. L’éleveur identifie un décès.
2. Il saisit les informations minimales et ajoute si besoin des photos ou un commentaire.
3. Le système vérifie la cohérence et signale un doublon probable si nécessaire.
4. Le dossier est envoyé vers la file de triage.

### 7.2 Signalement d’une mortalité multiple

1. L’éleveur ou le GDS décrit plusieurs décès sur une période courte.
2. Le système compare l’observé à l’attendu.
3. Le cas est priorisé et une alerte peut être générée.
4. Une investigation sanitaire peut être déclenchée.

### 7.3 Qualification du cas

1. Le GDS ou le vétérinaire vérifie les éléments du dossier.
2. Le cas est classé en isolé, suspect, à investiguer ou non suspect.
3. Des actions sont créées: enlèvement, visite, prélèvements, suivi.

### 7.4 Enlèvement et logistique

1. Une demande d’enlèvement est créée si nécessaire.
2. L’équarrisseur accepte ou reprogramme.
3. La prise en charge est horodatée et tracée.

### 7.5 Intervention vétérinaire et laboratoire

1. Le vétérinaire visite le site.
2. Il documente ses observations et prescrit des prélèvements.
3. Le laboratoire réceptionne les échantillons et saisit les résultats.

### 7.6 Surveillance et alerte

1. Les données consolidées alimentent les indicateurs.
2. L’épidémiologiste détecte les anomalies.
3. L’administration sanitaire arbitre et suit la réponse.

## 8. Sitemap fonctionnel

### 8.1 Espace éleveur

- Tableau de bord
- Nouveau signalement décès
- Nouveau signalement mortalité multiple
- Demande d’enlèvement
- Dossier de suivi
- Notifications

### 8.2 Espace GDS

- Tableau de bord territorial
- File de triage
- Dossier de cas
- Vue de surveillance locale
- Reporting local

### 8.3 Espace vétérinaire

- Tableau de bord de cas
- Fiche clinique
- Visite terrain
- Prélèvements
- Conclusion sanitaire

### 8.4 Espace équarrisseur

- Planning des enlèvements
- Fiche enlèvement
- Preuve de prise en charge
- Clôture transport

### 8.5 Espace laboratoire

- Réception des échantillons
- File d’analyses
- Résultats

### 8.6 Espace épidémiologiste

- Tableau de bord surveillance
- Explorateur de signaux
- Espace d’investigation
- Reporting épidémiologique

### 8.7 Espace administration sanitaire

- Vue régionale ou nationale
- Centre d’alertes
- Cellule de crise
- Reporting institutionnel

### 8.8 Espace administration plateforme

- Utilisateurs et rôles
- Référentiels
- Sources de données
- Journal d’audit

## 9. Exigences fonctionnelles

### 9.1 Déclaration d’un décès individuel

Le système doit permettre de saisir rapidement un décès animal à partir d’un formulaire guidé et mobile-friendly.

Champs minimum:

- exploitation,
- identifiant animal ou motif d’inconnu,
- espèce,
- date et heure de découverte,
- localisation,
- état de la carcasse,
- commentaire libre.

Règles:

- une identité minimale doit être capturée,
- les dates incohérentes doivent être bloquées,
- un doublon probable doit être signalé,
- la déclaration doit pouvoir être enregistrée en brouillon.

### 9.2 Déclaration de mortalité multiple

Le système doit permettre de déclarer plusieurs décès associés à une même exploitation, un lot ou une période.

Champs minimum:

- nombre de morts,
- fenêtre temporelle,
- lot ou atelier,
- contexte sanitaire,
- mortalité attendue vs observée,
- éléments cliniques,
- pièces jointes.

Règles:

- la mortalité multiple doit être priorisée,
- un seuil d’alerte peut déclencher une escalade automatique,
- le cas doit rester modifiable durant l’investigation.

### 9.3 Qualification du cas

Le système doit permettre à un acteur habilité de qualifier un dossier et d’orienter le workflow.

Statuts cibles:

- brouillon,
- soumis,
- incomplet,
- à qualifier,
- suspect,
- non suspect,
- en investigation,
- clôturé,
- doublon.

### 9.4 Demande d’enlèvement

Le système doit permettre de créer, suivre et clôturer une demande d’enlèvement.

Champs minimum:

- adresse,
- contact,
- créneau souhaité,
- accessibilité,
- estimation du volume,
- consignes sanitaires.

### 9.5 Intervention vétérinaire

Le vétérinaire doit pouvoir documenter l’examen, proposer des mesures et prescrire des prélèvements.

### 9.6 Prélèvements et laboratoire

Le système doit tracer chaque échantillon, sa réception et son résultat.

### 9.7 Suivi du dossier

Chaque dossier doit offrir une vue chronologique unique, avec acteurs, actions, pièces jointes, statuts et messages.

### 9.8 Détection de signaux inhabituels

Le système doit comparer l’observé à l’attendu selon l’espèce, la région, la saison et le type d’élevage.

### 9.9 Gestion des alertes

Le système doit gérer le cycle de vie complet d’une alerte avec responsable, niveau, statut, SLA et historique.

### 9.10 Reporting et administration

Le système doit produire des synthèses opérationnelles et institutionnelles, avec filtres, exports et historisation.

## 10. Exigences UX/UI

### 10.1 Principes de conception

- Mobile first pour les acteurs terrain.
- Desktop first pour l’analyse, le reporting et l’administration.
- Une fiche cas unique comme point d’ancrage.
- Des statuts lisibles et stables partout.
- Des actions prioritaires toujours visibles.
- Des parcours courts et tolérants à l’imperfection des données.

### 10.2 Composants clés

- Cartes KPI.
- Timeline de dossier.
- Tables filtrables.
- Badges de statut.
- Formulaires multi-étapes.
- Cartographie et vues territoriales.
- Panneaux d’alerte.

### 10.3 Responsive behavior

- Le signalement terrain doit être optimisé pour smartphone.
- Les listes de cas doivent rester exploitables sur tablette.
- Les analyses et exports doivent être optimisés pour desktop.

## 11. Données à collecter

### 11.1 Identité et contexte

- identifiant animal,
- espèce,
- race,
- sexe,
- âge,
- statut reproducteur,
- exploitation,
- commune,
- coordonnées,
- lot, bâtiment ou atelier.

### 11.2 Événement décès

- date et heure de découverte,
- date probable du décès,
- localisation,
- nombre de morts,
- état de la carcasse,
- symptômes observés,
- contexte de production.

### 11.3 Gestion sanitaire

- qualification du cas,
- suspicion clinique,
- décision vétérinaire,
- prélèvements,
- résultats laboratoire,
- mesures prescrites.

### 11.4 Logistique

- demande d’enlèvement,
- créneau,
- prestataire,
- preuve de prise en charge,
- incident transport.

### 11.5 Surveillance

- niveau de criticité,
- seuil déclencheur,
- signaux détectés,
- historique,
- annotation analytique,
- décision d’alerte.

## 12. Règles métier

1. Chaque dossier doit avoir un identifiant unique.
2. Toute action importante doit être historisée.
3. La mortalité multiple doit être priorisée sur un cas isolé.
4. Un doublon ne doit jamais écraser le dossier source sans traçabilité.
5. Un prélèvement doit être relié à un cas, un animal ou un lot.
6. Un enlèvement peut être demandé avant la qualification finale.
7. Une alerte doit être dédupliquée si plusieurs règles la déclenchent.
8. Les seuils d’anomalie doivent être paramétrables par espèce, territoire et saison.
9. Les données sensibles doivent être restreintes par rôle et périmètre territorial.
10. Les exports et rapports doivent être versionnés et horodatés.

## 13. Gestion des alertes et surveillance

### 13.1 Déclencheurs

- mortalité multiple sur une courte fenêtre,
- mortalité supérieure au seuil attendu,
- résultat laboratoire critique,
- cluster géographique inhabituel,
- retard opérationnel majeur,
- dossier incomplet à risque.

### 13.2 Niveaux

- Information,
- Vigilance,
- Alerte,
- Critique.

### 13.3 Destinataires

- éleveur si action attendue,
- GDS pour triage,
- vétérinaire pour investigation,
- laboratoire pour accélération,
- épidémiologiste pour analyse,
- administration sanitaire pour arbitrage.

### 13.4 Traitement

- notification immédiate pour les événements critiques,
- suivi SLA sur les alertes ouvertes,
- journal des décisions,
- possibilité de lever, prolonger ou escalader une alerte.

## 14. Reporting attendu

### 14.1 Reporting opérationnel

- nombre de décès déclarés,
- taux de complétude,
- délais de qualification,
- délais d’enlèvement,
- délais de retour laboratoire,
- nombre de cas ouverts et clôturés.

### 14.2 Reporting épidémiologique

- mortalité par espèce,
- mortalité par territoire,
- comparaison observé / attendu,
- signaux inhabituels,
- tendance temporelle,
- saisonnalité.

### 14.3 Reporting institutionnel

- situations critiques,
- alertes en cours,
- mesures engagées,
- statut de réponse,
- synthèse territoriale.

## 15. Critères de succès

### 15.1 Adoption

- taux de déclaration terrain en hausse,
- diminution des dossiers incomplets,
- augmentation de l’usage du mobile.

### 15.2 Opérationnel

- réduction du délai entre décès et qualification,
- réduction du délai d’enlèvement,
- réduction du délai de retour d’information.

### 15.3 Surveillance

- amélioration du délai de détection d’un signal inhabituel,
- hausse du nombre de signaux pertinents détectés,
- baisse du bruit de notification.

### 15.4 Qualité de donnée

- complétude des champs clés,
- traçabilité des statuts,
- taux de doublons maîtrisé.

## 16. Priorisation MVP

### MVP

1. Connexion et rôles de base.
2. Déclaration décès individuel.
3. Déclaration mortalité multiple.
4. Fiche de cas et timeline.
5. Demande d’enlèvement.
6. Qualification GDS / vétérinaire.
7. Prélèvements et résultats laboratoire.
8. Tableau de bord surveillance.
9. Gestion des alertes de base.
10. Reporting opérationnel.

### Phase 2

- import automatisé de sources externes,
- scoring d’anomalie avancé,
- détection de clusters enrichie,
- optimisation de tournées,
- cartographie analytique avancée,
- reporting institutionnel automatisé,
- gouvernance fine des référentiels,
- scénarios multi-validateurs plus complexes.

## 17. Dépendances

- Référentiels d’identification animale et d’exploitation.
- Référentiels géographiques.
- Référentiels de laboratoires et de prestataires.
- Mécanisme de notification.
- Authentification et gestion des rôles.
- Modèle de données relationnel ou équivalent.

## 18. Risques et points de vigilance

- Données terrain incomplètes ou hétérogènes.
- Dépendance à la qualité des référentiels.
- Risque de surcharge de notifications.
- Complexité de la gestion des rôles et des périmètres.
- Nécessité d’un audit fiable pour les décisions sanitaires.
- Variabilité forte des processus selon espèces et territoires.

## 19. Open questions

- Quel niveau d’intégration temps réel est réellement exigé au MVP?
- Quels seuils d’alerte doivent être paramétrés dès la première version?
- Quels types d’acteurs externes auront besoin d’un accès direct?
- Quel niveau de signature ou validation formelle est requis pour les conclusions sanitaires?
- Quels exports réglementaires doivent être disponibles dès la phase 1?

## 20. Alignement avec le produit existant

Le dashboard déjà présent dans le dépôt couvre la logique de surveillance, d’indicateurs, d’alertes et de modélisation. Ce PRD étend ce socle avec les parcours métier et opérationnels nécessaires pour faire de Mictlantecuhtli une plateforme complète de bout en bout.
