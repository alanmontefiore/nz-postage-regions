# NZ Postage Regions

A handy tool for matching post codes with regions in New Zealand. This tool groups post codes into regions that can be used for things like calculating shipping/postage costs etc.

A common use-case is having postage costs stored in a database/CMS for each of the regions. Then depending on a customers post code we can determine what region and cost.

## Regions

### Rural
northIslandRural
southIslandRural

### Non Rural
northland
auckland
waikato
gisborneHawkesBay
bayOfPlenty
taranakiManawatuWhanganui
wellington
nelsonMarlboroughTasman
canterburyWestCoast
otago

## Installation

```sh
npm install nz-postage-regions
```

```sh
yarn add nz-postage-regions
```

## Usage

```js
import { getRegion } from 'nz-postage-regions';

const postageRegion = getRegion(postalCode);
```

## License

[ISC](https://choosealicense.com/licenses/isc/)
