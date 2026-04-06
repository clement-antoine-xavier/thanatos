# Mictlantecuhtli – Plateforme de surveillance de la mortalité animale

## Aperçu du projet

Mictlantecuhtli est une plateforme conçue pour renforcer la **surveillance épidémiologique animale** en exploitant les **données de mortalité animale** comme signal d’alerte précoce des événements sanitaires inhabituels.

Face à des données de santé animale hétérogènes et à des contraintes pratiques de terrain, l’objectif est de construire des **outils automatisés et performants de gestion, d’analyse et de modélisation des données**.

---

## Objectifs

- Construire une **base de données de mortalité animale complète et standardisée**.  

- Concevoir des **outils logiciels** de gestion et de visualisation des données.  

- Mettre en place des **statistiques et indicateurs épidémiologiques automatisés**, mis à jour en (quasi) temps réel (taux, tendances, saisonnalité).  

- Contribuer aux **travaux méthodologiques en modélisation épidémiologique** (détection d’anomalies, profils de risque).  

---

## Fonctionnalités principales

### 1. Gestion et intégration des données

- Intégration de **données multi‑sources** (par ex. BDNI, SIGAL/RESYTAL, SPE et autres bases locales).  

  1. BDNI (Base de Données Nationale d’Identification) – base nationale d’identification et de mouvements des animaux.  

  2. SIGAL/RESYTAL – bases régionales d’enregistrements de santé animale et de mortalité.  

  3. SPE (Système de Production d’Élevage) – données de production et de santé des élevages.  

- **Nettoyage, standardisation et documentation des données** (variables et métadonnées).  

- Conception d’un **modèle de base relationnelle robuste** (SQL ou équivalent) pour une exploitation durable.  

### 2. Interfaces applicatives

- **Interface de gestion des données** :  
  - Consultation, filtrage et édition des enregistrements de mortalité.  
  - Imports contrôlés depuis des systèmes externes.  

- **Conception centrée utilisateur** fondée sur les besoins des épidémiologistes, vétérinaires, techniciens et éleveurs.  

- **Tableaux de bord interactifs** pour suivre les indicateurs clés et générer des vues dynamiques.  

### 3. Analyse statistique et modélisation

- Définition et calcul des **indicateurs de mortalité** : taux, tendances temporelles, profils saisonniers par espèce, région et période.  

- **Automatisation de la production statistique** et mises à jour planifiées pour alimenter les tableaux de bord.  

- Contribution aux **analyses exploratoires** et aux **approches de modélisation épidémiologique** (par ex. détection de foyers, détection d’anomalies).  

---

## Processus lors de la mort d’un animal dans un élevage

Pour mieux comprendre les flux de données et les acteurs impliqués, voici un résumé du processus de [gestion des décès animaux dans les élevages](docs/ANIMAL_DEATH_PROCESS.md).

---

## Contribution

Pour la contribution, merci de consulter le guide de [contribution](CONTRIBUTING.md) et le [code de conduite](CODE_OF_CONDUCT.md) du projet.
