# TypeScript Components

Ce dépôt a été créé dans le cadre d'un guide sur la publication de composants React en TypeScript. Vous pouvez lire le guide ici : [Publishing TypeScript React components to NPM](https://fildon.hashnode.dev/publishing-typescript-react-components-to-npm)

## Prérequis

Assurez-vous d'avoir Node.js installé sur votre machine. La version recommandée est :

- Node.js : `>= 14.0.0`

## Installation

Installez ce package :

```shell
npm install customselect-opc-p14
```

## Utilisation

* Importez le composant `CustomSelect` dans votre application :

```javascript
import { CustomSelect } from "customselect-opc-p14";
```
* Vous pouvez ensuite rendre le composant `CustomSelect` comme n'importe quel autre composant React en JSX.
```javascript
import { CustomSelect } from "customselect-opc-p14";

<CustomSelect
    name="example"
    id="example-select"
    required={true}
    options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
    ]}
    defaultOption="Select an option"
    onChange={(event) => console.log(event.target.value)}
    value=""
    dataTestId="custom-select"
/>
```
## Personnalisation

Le composant CustomSelect peut être personnalisé à l'aide des props suivantes :

* `name` (string) : Attribut *name* pour l'élément *select*.
* `id` (string) : Attribut id pour l'élément *select*.
* `required` (boolean) : Indique si l'élément *select* est requis.
* `options` (array) : Tableau d'options pour l'élément *select*, chaque option étant un objet avec les propriétés *value* et *label*.
* `defaultOption` (string) : Texte de l'option par défaut.
* `onChange` (function) : Gestionnaire d'événement pour le changement de valeur.
* `value` (string) : Valeur actuelle de l'élément *select*.
* `dataTestId` (string) : Attribut *data-testid* pour les tests.

## Exemple d'utilisation

```javascript

<CustomSelect
    name="example"
    id="example-select"
    required={true}
    options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' }
    ]}
    defaultOption="Select an option"
    onChange={(event) => console.log(event.target.value)}
    value=""
    dataTestId="custom-select"
/>
```
Dans cet exemple, le composant CustomSelect affiche une liste déroulante avec deux options : "Option 1" et "Option 2".

## Styles


Les styles de la modale peuvent être personnalisés en ajoutant des classes CSS.

## Développement

Pour développer et tester ce composant localement, vous pouvez cloner ce dépôt et utiliser les scripts npm définis dans le fichier **package.json**.

```shell

git clone https://github.com/Nayel9/customselect-opc-p14.git
npm install
npm run build
```

## Licence
Ce projet est sous licence ISC.